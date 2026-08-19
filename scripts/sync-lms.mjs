import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsDir = path.join(root, 'docs');
const lmsDir = path.join(root, 'static', 'lms', 'data');
const curriculumPath = path.join(lmsDir, 'curriculum.js');
const phasesPath = path.join(lmsDir, 'phases.json');

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  }));
  return files.flat();
}

function frontMatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) return {};
  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([\w-]+):\s*(.*?)\s*$/);
    if (field) fields[field[1]] = field[2].replace(/^['"]|['"]$/g, '');
  }
  return fields;
}

function firstParagraph(source) {
  const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
  const paragraph = body.split(/\r?\n\s*\r?\n/).find((block) =>
    block.trim() && !block.trim().startsWith('#') && !block.trim().startsWith('import ') && !block.trim().startsWith('<'));
  return paragraph ? paragraph.replace(/\r?\n/g, ' ').replace(/\[(.*?)\]\([^)]*\)/g, '$1').trim() : '';
}

function parseTags(value) {
  if (!value) return undefined;
  return value.replace(/^\[|\]$/g, '').split(',').map((tag) => tag.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
}

async function publishedChapters() {
  const files = (await walk(docsDir)).filter((file) => /\.(md|mdx)$/.test(file));
  const chapters = [];
  for (const file of files) {
    const fileName = path.basename(file);
    if (fileName === 'index.md' || fileName === 'index.mdx') continue;
    const source = await fs.readFile(file, 'utf8');
    const meta = frontMatter(source);
    if (!meta.chapter || !meta.title) continue;
    const routeDirectories = path.relative(docsDir, path.dirname(file)).split(path.sep)
      .map((directory, index) => index === 0 ? directory.replace(/^\d{2}-/, '') : directory);
    const chapterSlug = path.basename(file, path.extname(file));
    chapters.push({
      id: String(meta.chapter), title: meta.title,
      url: `../docs/${routeDirectories.concat(chapterSlug).join('/')}`,
      summary: meta.lms_summary || firstParagraph(source),
      hours: meta.lms_hours ? Number(meta.lms_hours) : undefined,
      tags: parseTags(meta.lms_tags),
    });
  }
  return chapters;
}

function phaseDataFromCurriculum(source) {
  const start = source.indexOf('export const PHASES = ');
  const end = source.indexOf('\n\nexport const ROLES =', start);
  if (start < 0 || end < 0) throw new Error('Could not find the PHASES export in curriculum.js.');
  const jsonStart = start + 'export const PHASES = '.length;
  return { phases: JSON.parse(source.slice(jsonStart, end).trim().replace(/;$/, '')), start, end };
}

const curriculum = await fs.readFile(curriculumPath, 'utf8');
const { phases, start, end } = phaseDataFromCurriculum(curriculum);
const liveChapters = new Map((await publishedChapters()).map((chapter) => [chapter.id, chapter]));

for (const live of liveChapters.values()) {
  const phaseNumber = live.id.split('.')[0];
  const phase = phases.find((item) => String(item.id) === phaseNumber);
  if (!phase) {
    console.warn(`Skipping ${live.id}: phase ${phaseNumber} is not in the LMS catalogue.`);
    continue;
  }
  if (!phase.chapters.some((chapter) => String(chapter.id) === live.id)) {
    phase.chapters.push({
      id: live.id,
      title: live.title,
      tags: live.tags || [],
      hours: Number.isFinite(live.hours) ? live.hours : 1,
    });
  }
}

for (const phase of phases) for (const chapter of phase.chapters) {
  const live = liveChapters.get(String(chapter.id));
  if (!live) {
    delete chapter.url; delete chapter.summary; delete chapter.published;
    continue;
  }
  chapter.title = live.title;
  chapter.url = live.url;
  chapter.summary = live.summary;
  chapter.published = true;
  if (Number.isFinite(live.hours)) chapter.hours = live.hours;
  if (live.tags) chapter.tags = live.tags;
}

for (const phase of phases) {
  phase.chapters.sort((left, right) => Number(left.id) - Number(right.id));
}

const phasesJson = JSON.stringify(phases, null, 1);
const updatedCurriculum = `${curriculum.slice(0, start)}export const PHASES = ${phasesJson};${curriculum.slice(end)}`;
await fs.writeFile(curriculumPath, updatedCurriculum);
await fs.writeFile(phasesPath, `${phasesJson}\n`);
console.log(`Synced ${liveChapters.size} published chapter${liveChapters.size === 1 ? '' : 's'} into the LMS catalogue.`);

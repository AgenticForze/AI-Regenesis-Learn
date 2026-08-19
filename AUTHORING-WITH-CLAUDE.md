# Authoring chapters with Claude

The starting point for writing this curriculum chapter by chapter. Open a new Claude session,
point it at this file, and work one chapter per session.

---

## 1. What you are working in

```
docs/                       19 phase folders, 00-orientation … 18-capstones-and-contributing
  NN-phase-slug/
    _category_.json         sidebar label + generated index for the phase
    index.md                phase overview: intro, planned-chapter list, prerequisites
    N-N-chapter-slug.md(x)  one file per chapter
_templates/
  concept-chapter.mdx       the seven-section contract — copy this for Phases 1-8, 10-13, 15-18
  landscape-chapter.mdx     the four-section contract — Phases 9 and 14 only
src/components/             the MDX components chapters compose with
static/img/illustrations/   chapter SVGs live here
static/lms/                 the curriculum builder (generated catalogue; do not edit while authoring content)
```

Written so far: all of Phase 0 (`docs/00-orientation/`) — read `0-1`, `0-5` and `0-6` before
writing anything, they define voice, vocabulary and structure. Every other phase currently holds a
shell `index.md` listing planned chapters.

### LMS publishing metadata

The chapter file is the source of truth. On every `npm run build` or `npm run deploy`, the LMS
catalogue is regenerated from every chapter with `title` and `chapter` front matter. A published
chapter automatically gets an **Open full chapter** button in the LMS reader. Add these optional
front-matter fields when the catalogue needs more detail:

```yaml
lms_hours: 3
lms_tags: [Foundations, History]
lms_summary: "A short learner-facing summary for the LMS catalogue."
```

Do not edit `static/lms/data/curriculum.js` or `static/lms/data/phases.json` by hand; run
`npm run sync:lms` to regenerate them.

## 2. The chapter contract

Seven sections, in this order, for every concept chapter. Do not delete a heading — if a section
genuinely does not apply, keep the heading and write `N/A for this concept` plus a one-line reason,
so a reviewer can tell omission from oversight.

1. **TL;DR** — 3–5 sentences, no jargon, one relatable analogy.
2. **High-Level Explanation** — conceptual mechanics for someone who will not implement it.
   Carries at least one diagram.
3. **Deep-Dive Explanation** — math, algorithms, pseudo-code, architecture, failure modes, edge
   cases.
4. **Comparison & Related Concepts** — a table against 2–4 things people confuse it with, and a
   straight answer on when to reach for which.
5. **Reference Architecture** — where applicable, a labeled diagram with each component's
   responsibility stated.
6. **Industry Use Cases** — exactly four each in Finance, Healthcare and Telecom (twelve total),
   each with business problem, how the concept solves it, a solution sketch, and the primary risk
   in that domain.
7. **Check Your Understanding** — 3–5 self-check questions with answers, plus a hands-on exercise
   link where one exists.

Phases 9 and 14 use the lighter landscape template instead: TL;DR, High-Level Explanation,
Comparison Table, Where to Go Deeper. Tag those chapters `hl-survey` in front matter.

Full rationale for the shape is in `docs/00-orientation/0-6-content-standard-explained.md`.

## 3. Front matter

```yaml
---
title: "Full Chapter Title"
sidebar_label: "8.4 Tool Use & Function Calling"
sidebar_position: 4
phase: 8
chapter: "8.4"
prerequisites: ["8.2", "5.3"]
tags: []
---
```

Then the flight-level line as the first body element:

```jsx
<p className="regai-flight-level">Chapter {frontMatter.chapter} · Phase {frontMatter.phase}</p>
```

Use `.mdx` when the chapter mounts components (most concept chapters), `.md` when it is pure prose.

## 4. Components available

```jsx
import ComparisonTable from '@site/src/components/ComparisonTable';
import ArchitectureDiagram from '@site/src/components/ArchitectureDiagram';
import UseCaseGrid from '@site/src/components/UseCaseGrid';
import CheckYourUnderstanding from '@site/src/components/CheckYourUnderstanding';
```

| Component | Props |
|---|---|
| `ComparisonTable` | `columns: string[]`, `rows: [{aspect, values[], decisive?}]`, `caption` |
| `ArchitectureDiagram` | `title`, `mermaid` (a template-literal flowchart), `components: [{name, responsibility}]` |
| `UseCaseGrid` | `finance`, `healthcare`, `telecom` — each an array of exactly four `{title, problem, solution, risk}` |
| `CheckYourUnderstanding` | `questions: [{question, answer}]`, optional `exerciseUrl`, `exerciseLabel` |

Mermaid is enabled site-wide for anything architectural that will change over time. Static SVG
under `static/img/illustrations/` is for conceptual illustration. Set `decisive: true` on the row
of a comparison table that actually drives the decision.

## 5. House style

- Matter-of-fact and specific. No hype, no "in today's fast-moving landscape", no em-dash-heavy
  rhetorical flourishes, no rhetorical questions as headings.
- Never restate the same point at two altitudes with different words — High-Level explains the
  idea, Deep-Dive explains the mechanism. If the deep-dive is a longer paraphrase, it is wrong.
- Name specific tools, models, standards and versions, and date anything that will age
  ("as of 2026"). Verified facts only; if a claim needs a source, cite it inline as a link.
- Code is Python unless the platform forces otherwise, language-tagged, and runnable as written —
  no partial snippets presented as complete.
- Define terms once, in `0-5-glossary-notation-conventions.md`, and link back rather than
  redefining. If a chapter introduces a term the site will reuse, add it to the glossary in the
  same change.
- Use cases must be plausible to a practitioner in that industry: real workflows, real
  constraints (model risk management, PHI handling, network assurance), and a risk that is
  specific rather than "hallucination".
- British or American spelling — match the surrounding phase; do not mix within a chapter.

## 6. Per-chapter workflow

1. Read the phase's `index.md` for the chapter's one-line scope, and the chapter list around it so
   you know what is deliberately covered elsewhere.
2. Read the two or three adjacent chapters that already exist, plus every chapter this one lists
   as a prerequisite.
3. Draft the seven sections in order. Write the Comparison table before the Deep-Dive — deciding
   what the concept is *not* sharpens what the deep-dive has to cover.
4. Add any new recurring term to the glossary; add the chapter's own diagram file if it needs one.
5. Update the phase `index.md`: move the chapter out of "planned" and into the shipped list.
6. Run `npm run build` before committing. `onBrokenLinks: 'throw'` means one bad link fails the
   build — that is intentional.
7. Commit as `docs(8.4): tool use and function calling` and open a PR against `main`.

## 7. Definition of done

- [ ] All seven headings present; any inapplicable one marked `N/A` with a reason.
- [ ] TL;DR readable by a non-specialist, with an analogy.
- [ ] High-Level carries a diagram; Deep-Dive carries mechanism, not paraphrase.
- [ ] Comparison table has 2–4 rivals and one `decisive` row.
- [ ] Exactly twelve use cases, four per domain, each with a domain-specific risk.
- [ ] 3–5 self-check questions with answers.
- [ ] Front matter complete: `phase`, `chapter`, `sidebar_position`, `prerequisites`.
- [ ] New terms added to 0.5; new links resolve; `npm run build` passes.
- [ ] Phase `index.md` updated.

## 8. Suggested order

Write **8.1** first — Phase 8 is the flagship and the hardest test of the template. Then
Phase 1 → 2 → 3 → 4 → 5 in order (they are the dependency spine), then 6, 7, then the rest of 8,
then 9 → 10 → 11 → 12, then 14 → 15, then 13, 16, 17, 18.

Rationale: prove the template on the chapter readers care most about, then build the spine every
later phase links back to, then the breadth.

---

## Kickoff prompt

Paste this into a new Claude session, filling in the chapter:

> You are writing one chapter of the RegAITraining curriculum, a Docusaurus knowledge base
> teaching AI and agentic AI to working professionals in Financial Services, Healthcare and
> Telecom.
>
> Read these first, and follow them exactly:
> - `AUTHORING-WITH-CLAUDE.md` — the authoring contract, style rules and definition of done
> - `docs/00-orientation/0-6-content-standard-explained.md` — why the seven sections exist
> - `docs/00-orientation/0-5-glossary-notation-conventions.md` — shared vocabulary and notation
> - `_templates/concept-chapter.mdx` — the file skeleton
> - the `index.md` of the phase you are writing in, plus the chapters listed as prerequisites
>
> Write chapter **<N.N — Title>** as `docs/<NN-phase-slug>/<n-n-slug>.mdx`.
>
> Constraints: seven sections in order; deep-dive must add mechanism rather than paraphrase the
> high-level pass; exactly twelve use cases, four per domain, each with a domain-specific risk;
> Python for code; verified facts only, dated where they will age; no hype. Add any new recurring
> term to 0.5 and update the phase `index.md`. Then run `npm run build` and report the result
> against the definition-of-done checklist.
>
> Before you start, list what you plan to cover in each of the seven sections in one line each and
> wait for my go-ahead.

Author one chapter per session. Chapters are long, the template is strict, and a session that
writes three chapters writes all three worse than a session that writes one.

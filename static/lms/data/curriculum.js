export const PHASES = [
 {
  "id": "0",
  "num": 0,
  "slug": "orientation",
  "name": "Program Orientation",
  "title": "Phase 0 — Program Orientation",
  "intro": "How the program works, which path fits you, and how job titles in the market map onto the nineteen phases.",
  "kind": "Orientation",
  "level": "Orientation",
  "prereq": [],
  "chapters": [
   {
    "id": "0.1",
    "title": "Welcome & How to Use This Knowledge Base",
    "tags": [],
    "hours": 1,
    "url": "../docs/orientation/0-1-welcome",
    "summary": "RegAITraining is a continuously growing, GitHub-hosted knowledge base that teaches working professionals AI from first principles through advanced Agentic AI. It isn't a course you finish once — chapters are added and revised on an ongoing basis (see the **Recently Added / Updated** page), and the site is designed to be read non-linearly.",
    "published": true
   },
   {
    "id": "0.2",
    "title": "Learning Paths & Personas",
    "tags": [],
    "hours": 1,
    "url": "../docs/orientation/0-2-learning-paths-personas",
    "summary": "All nineteen phases live on the same site, but almost nobody should read them front-to-back. Pick the path that matches where you're starting from — each phase's index page also states its prerequisites explicitly, so if you arrive mid-curriculum you know what to backfill.",
    "published": true
   },
   {
    "id": "0.3",
    "title": "AI Roles in the Market: Definitions, Responsibilities & Your Curriculum Path",
    "tags": [],
    "hours": 1,
    "url": "../docs/orientation/0-3-ai-roles-in-the-market",
    "summary": "A market map of the fifteen major AI/agentic job roles as of 2026 — from Data Scientist through Multi-Agent Systems Architect through AI Governance Specialist — so you can go from **\"what job am I aiming for\"** straight to **\"which chapters do I actually need\"** without reading all nineteen phases to find out. For each role: what they actually do day to day, which curriculum phases are core vs. supplementary, and which industry certifications are worth pursuing.",
    "published": true
   },
   {
    "id": "0.4",
    "title": "Prerequisites Self-Assessment",
    "tags": [],
    "hours": 1,
    "url": "../docs/orientation/0-4-prerequisites-self-assessment",
    "summary": "A quick, honest checklist to figure out where to enter the curriculum. You don't need to check every box in a section to start there — these are meant to catch the case where you'd be lost on page one of a phase, not to gatekeep.",
    "published": true
   },
   {
    "id": "0.5",
    "title": "Glossary & Notation Conventions",
    "tags": [],
    "hours": 1,
    "url": "../docs/orientation/0-5-glossary-notation-conventions",
    "summary": "A living reference for terms and notation used consistently across the site. Individual chapters don't redefine these — they link back here.",
    "published": true
   },
   {
    "id": "0.6",
    "title": "The Content Standard, Explained to Learners",
    "tags": [],
    "hours": 1,
    "url": "../docs/orientation/0-6-content-standard-explained",
    "summary": "Every concept chapter on this site (Phases 1–8, 10–13, and 15–18) is built from the same seven sections, in the same order. Knowing the shape in advance means you can jump straight to the section that matches what you need right now, instead of reading a chapter top to bottom every time.",
    "published": true
   }
  ]
 },
 {
  "id": "1",
  "num": 1,
  "slug": "ai-ml-foundations",
  "name": "AI & ML Foundations",
  "title": "Phase 1 — AI & Machine Learning Foundations",
  "intro": "The building blocks: what AI/ML actually is, the classical algorithm landscape, evaluation metrics, and the math and data-pipeline foundations every later phase assumes.",
  "kind": "Full 7-section",
  "level": "Beginner",
  "prereq": [
   0
  ],
  "chapters": [
   {
    "id": "1.1",
    "title": "What Is Artificial Intelligence? History, AI Winters, Narrow vs. General AI",
    "tags": [],
    "hours": 3,
    "url": "../docs/ai-ml-foundations/1-1-what-is-ai",
    "summary": "Artificial intelligence is the field of building systems that do things we've historically assumed require human intelligence: recognizing a face, holding a conversation, deciding a next move. The odd thing about the label is that it keeps moving. Optical character recognition, chess engines, and spam filters were all once called \"AI,\" and almost nobody calls them that today, because once a task is reliably automated it quietly gets reclassified as \"just software\" (sometimes called the *AI effect*). That's also why AI has a reputation for overpromising: twice in its history, funding and interest collapsed (two \"AI winters\") after the field's ambitions outran what the era's compute and data could support. The systems people mean when they say \"AI\" in 2026 are still **narrow**: extremely capable at specific tasks, not generally intelligent the way a human is. Think of AI's history less as one continuous invention and more like a relay race, where each runner hands off the baton once the previous approach hits its ceiling.",
    "published": true,
    "presentationUrl": "../slides/1.1-What-Is-AI-Slides.pptx"
   },
   {
    "id": "1.2",
    "title": "A Taxonomy of AI: Rule-Based, Machine Learning, Deep Learning, Generative, and Agentic",
    "tags": [],
    "hours": 3,
    "url": "../docs/ai-ml-foundations/1-2-taxonomy-of-ai",
    "summary": "The five terms from 1.1's timeline (rule-based AI, machine learning, deep learning, generative AI, agentic AI; folding 1.1's separate rule-based and expert-systems eras into one rule-based layer, and its statistical-ML era into machine learning) aren't five competing technologies. They're five layers, each a narrower specialization of the one below it: rule-based systems run any human-authored logic, machine learning narrows that to logic learned from data, deep learning narrows further to logic learned without hand-built features, generative AI narrows further still to systems that produce new content rather than a label, and agentic AI narrows the most by choosing its own sequence of actions. It's similar to medical specialization: a general practitioner can treat a wide range of conditions; a subspecialist treats a narrower set, but goes deeper on each one. A real production system today usually stacks several of these layers together rather than picking just one.",
    "published": true,
    "presentationUrl": "../slides/1.2-Taxonomy-of-AI-Slides.pptx"
   },
   {
    "id": "1.3",
    "title": "Machine Learning Foundations: Supervised, Unsupervised, and Reinforcement Learning",
    "tags": [],
    "hours": 3,
    "url": "../docs/ai-ml-foundations/1-3-ml-foundations",
    "summary": "Chapter 1.2 named \"machine learning\" as one layer in the AI taxonomy: logic learned from data via a loss function and an optimizer. This chapter opens that layer up. What a model learns from, and how it's told whether it's doing well, splits into three paradigms: supervised learning (learn from labeled examples), unsupervised learning (find structure with no labels at all), and reinforcement learning (learn from a reward signal earned by acting in an environment). Most production ML systems combine more than one of these, often in the same pipeline.",
    "published": true,
    "presentationUrl": "../slides/1.3-ML-Foundations-Slides.pptx"
   },
   {
    "id": "1.4",
    "title": "Core ML Concepts: Features, Train/Validation/Test, Bias-Variance, and Overfitting",
    "tags": [],
    "hours": 3,
    "url": "../docs/ai-ml-foundations/1-4-core-ml-concepts",
    "summary": "A model isn't graded on how well it fits the data it trained on. It's graded on how well it performs on data it has never seen, and those two numbers can be wildly different. This chapter covers the vocabulary for managing that gap: features (the inputs a model actually sees), train/validation/test splits (how you get an honest read on unseen-data performance before it matters), and the bias-variance tradeoff (the mathematical reason a model can fail in two opposite directions, underfitting or overfitting, and why fixing one risk tends to worsen the other).",
    "published": true,
    "presentationUrl": "../slides/1.4-Core-ML-Concepts-Slides.pptx"
   },
   {
    "id": "1.5",
    "title": "Classical ML Algorithms Landscape: A Comparison",
    "tags": [],
    "hours": 3,
    "url": "../docs/ai-ml-foundations/1-5-classical-ml-algorithms",
    "summary": "Before deep learning, and still very much in production today, a handful of classical algorithm families cover most tabular machine learning problems: linear models, decision trees, ensembles of trees, k-nearest neighbors, support vector machines, and Naive Bayes. None of them is universally \"best.\" Each makes a different structural assumption about how inputs map to outputs, called an inductive bias, and that assumption is what determines whether it fits a given problem well, how interpretable it is, and where it sits on chapter 1.4's bias-variance spectrum. Choosing among them is a practical decision driven by data size, feature types, interpretability requirements, and how much non-linearity the true relationship actually has.",
    "published": true,
    "presentationUrl": "../slides/1.5-Classical-ML-Algorithms-Slides.pptx"
   },
   {
    "id": "1.6",
    "title": "Evaluation Metrics: Accuracy, Precision/Recall, F1, ROC-AUC, and RMSE",
    "tags": [],
    "hours": 3,
    "url": "../docs/ai-ml-foundations/1-6-evaluation-metrics",
    "summary": "A model's performance is not one number, it is several, and picking the wrong one hides real failures. Accuracy is the most intuitive metric and the easiest to get badly wrong, because it falls apart on the imbalanced data that shows up constantly in fraud, disease screening, and churn. Precision and recall separate two different kinds of mistakes, false alarms and missed cases, and F1 balances them into one number when both matter about equally. ROC-AUC summarizes how well a model ranks positives above negatives across every possible decision threshold. RMSE plays a similar role for regression, where the target is a number rather than a class. Choosing a metric is choosing what kind of error the business actually cares about most.",
    "published": true,
    "presentationUrl": "../slides/1.6-Evaluation-Metrics-Slides.pptx"
   },
   {
    "id": "1.7",
    "title": "Data Foundations: Pipelines, Feature Engineering, and Data Quality",
    "tags": [],
    "hours": 3,
    "url": "../docs/ai-ml-foundations/1-7-data-foundations",
    "summary": "Most real-world machine learning problems are data problems, not algorithm problems. Before any model in chapter 1.5 can be trained, raw data has to survive a pipeline: cleaning, encoding, scaling, and validation, each stage capable of silently corrupting what the model eventually learns. Feature engineering turns raw fields into model-ready inputs. Data quality issues, missing values, duplicates, and mismatches between how a feature is computed for training versus serving, degrade a model without ever throwing an error, which is exactly what makes them dangerous.",
    "published": true,
    "presentationUrl": "../slides/1.7-Data-Foundations-Slides.pptx"
   },
   {
    "id": "1.8",
    "title": "Math Refresher for AI: Linear Algebra, Probability, Statistics, and Optimization",
    "tags": [],
    "hours": 3,
    "url": "../docs/ai-ml-foundations/1-8-math-refresher",
    "summary": "Four areas of math do essentially all the work behind every chapter so far and every chapter still to come. Linear algebra is the language a model's inputs and parameters are written in. Probability is how a model expresses and reasons about uncertainty. Statistics is how a practitioner decides whether a result is real or noise. Optimization is the mechanism, almost always gradient descent, by which a model actually learns. None of this requires proving theorems; it requires knowing what each tool is for well enough to recognize when a result is suspicious.",
    "published": true,
    "presentationUrl": "../slides/1.8-Math-Refresher-Slides.pptx"
   },
   {
    "id": "1.9",
    "title": "Ethics & Responsible AI Foundations: Bias, Fairness, and Explainability",
    "tags": [],
    "hours": 3,
    "url": "../docs/ai-ml-foundations/1-9-ethics-responsible-ai",
    "summary": "A model trained on data that reflects historical or societal bias reproduces that bias, and can amplify it through feedback loops that neither an accuracy metric nor a training log will surface. Fairness is not one property a model either has or lacks: there are several mathematically reasonable definitions of \"fair,\" and when groups have different base rates, some of the most natural ones are provably impossible to satisfy at the same time. Explainability closes the loop by giving stakeholders, developers, auditors, and the people a decision affects, a way to see why a model produced a specific output, which is necessary for debugging, trust, and increasingly, for regulatory compliance.",
    "published": true,
    "presentationUrl": "../slides/1.9-Ethics-Responsible-AI-Slides.pptx"
   }
  ]
 },
 {
  "id": "2",
  "num": 2,
  "slug": "deep-learning-foundations",
  "name": "Deep Learning Foundations",
  "title": "Phase 2 — Deep Learning Foundations",
  "intro": "From the perceptron to the Transformer: neural network mechanics, optimization, and the architectures every modern LLM is built on.",
  "kind": "Full 7-section",
  "level": "Beginner",
  "prereq": [
   1
  ],
  "chapters": [
   {
    "id": "2.1",
    "title": "Neural Networks 101: From Perceptron to MLP",
    "tags": [],
    "hours": 3,
    "url": "../docs/deep-learning-foundations/2-1-neural-networks-101",
    "summary": "A neural network is built from a simple unit, the perceptron, that takes a weighted sum of its inputs, adds a bias, and passes the result through an activation function. One perceptron alone can only separate data with a straight line, so it cannot even learn the XOR function. Stacking perceptrons into layers, an architecture called a multilayer perceptron (MLP), and giving each unit a nonlinear activation function, lets the network bend that straight line into an arbitrarily complex decision boundary. This single change, adding a hidden layer with a nonlinearity, is the mechanical difference between a model that can only draw lines and one that, per the universal approximation theorem, can approximate essentially any continuous function given enough hidden units.",
    "published": true,
    "presentationUrl": "../slides/2.1-Neural-Networks-101-Slides.pptx"
   },
   {
    "id": "2.2",
    "title": "Backpropagation & Optimization: How Networks Actually Learn",
    "tags": [],
    "hours": 3,
    "url": "../docs/deep-learning-foundations/2-2-backpropagation-optimization",
    "summary": "Chapter 2.1 covered the forward pass: features go in, a prediction comes out. Backpropagation is how a network learns from being wrong. It runs the chain rule backward through the network, starting at the loss and working toward the input layer, to compute exactly how much each individual weight contributed to the error. Gradient descent then nudges every weight in the direction that reduces that error. Plain gradient descent is slow and easily gets stuck, so in practice almost nobody uses it unmodified: momentum smooths the update direction using recent history, and Adam, the most widely used optimizer in deep learning today, adapts the step size separately for every single parameter.",
    "published": true,
    "presentationUrl": "../slides/2.2-Backpropagation-Optimization-Slides.pptx"
   },
   {
    "id": "2.3",
    "title": "Convolutional Neural Networks: Architecture & Use Cases",
    "tags": [],
    "hours": 3,
    "url": "../docs/deep-learning-foundations/2-3-convolutional-neural-networks",
    "summary": "The fully connected MLP from 2.1 treats every input feature as independent, which is wasteful for images: a photo's pixels have spatial structure, and the pattern that makes something an edge or a texture looks the same whether it appears in the top-left or bottom-right corner. A convolutional neural network (CNN) exploits that structure with a small filter that slides across the entire image, reusing the same weights at every position instead of learning a separate weight for every pixel location. This parameter sharing makes CNNs dramatically more efficient than a fully connected network on image-like data, and stacking convolution and pooling layers builds a hierarchy of features automatically, from edges, to textures, to object parts, to whole objects.",
    "published": true,
    "presentationUrl": "../slides/2.3-Convolutional-Neural-Networks-Slides.pptx"
   },
   {
    "id": "2.4",
    "title": "Sequence Models Before Transformers: RNN, LSTM, GRU",
    "tags": [],
    "hours": 3,
    "url": "../docs/deep-learning-foundations/2-4-sequence-models-rnn-lstm-gru",
    "summary": "A CNN (2.3) exploits spatial structure by reusing a filter across positions in an image. A recurrent neural network (RNN) applies the same idea to time: it reuses the same weights at every step of a sequence, carrying a running summary forward from one step to the next called the hidden state. This makes RNNs a natural fit for text, time series, and sensor data, anything where order matters. Plain RNNs struggle to remember information from many steps earlier, because backpropagating through a long sequence multiplies the same shrinking or growing gradient factor from chapter 2.2 many times over. LSTM and GRU cells add gating mechanisms specifically designed to keep that gradient flowing over long sequences, which is why they, not plain RNNs, were the practical default for sequence modeling for two decades before the Transformer (2.5).",
    "published": true,
    "presentationUrl": "../slides/2.4-Sequence-Models-Slides.pptx"
   },
   {
    "id": "2.5",
    "title": "The Transformer Architecture: A Deep Dive",
    "tags": [],
    "hours": 4,
    "url": "../docs/deep-learning-foundations/2-5-transformer-architecture",
    "summary": "An RNN (2.4), even with LSTM or GRU gating, still processes a sequence one step at a time: step 50 cannot start until step 49 finishes, and information connecting two distant positions still has to travel through every step in between. The Transformer removes recurrence entirely and replaces it with **self-attention**: every position looks directly at every other position in a single step, so the path length between any two positions is constant regardless of distance, and every position in a sequence can be processed in parallel during training. Because attention alone has no built-in sense of order, a **positional encoding** is added to each token's representation so the model can recover word order. **Multi-head attention** runs several attention computations in parallel with different learned projections, letting the model attend to different kinds of relationships (say, syntactic agreement and topical relevance) at once. Stacked layers of attention and a position-wise feedforward network, each wrapped in a residual connection (2.3) and layer normalization, form the encoder and decoder stacks that make up the full architecture (Vaswani et al., 2017).",
    "published": true,
    "presentationUrl": "../slides/2.5-Transformer-Architecture-Slides.pptx"
   },
   {
    "id": "2.6",
    "title": "Transfer Learning & the Pretrain-Then-Adapt Paradigm",
    "tags": [],
    "hours": 3,
    "url": "../docs/deep-learning-foundations/2-6-transfer-learning-pretrain-then-adapt",
    "summary": "Training a large network from scratch, an AlexNet-scale CNN (2.3) or a Transformer (2.5), needs huge labeled datasets and enormous compute. **Transfer learning** avoids repeating that cost by starting from a model already trained on a large source task and adapting it to a new target task, rather than starting from randomly initialized weights. Two main strategies exist: **feature extraction** freezes the pretrained weights and trains only a new final layer on the target data, while **fine-tuning** continues training some or all of the pretrained weights on the target task, usually with a smaller learning rate so the model adjusts without destroying what it already learned. Naively continuing to train on a new task risks **catastrophic forgetting**, where performance on the original task degrades as the new task overwrites earlier learning. This same pattern, pretrain on a large, general dataset, then adapt to a smaller, specific one, is the paradigm behind both modern computer vision, where ImageNet-pretrained backbones are standard starting points, and modern language models, where BERT and GPT-style models are pretrained on massive unlabeled text and then adapted to downstream tasks.",
    "published": true,
    "presentationUrl": "../slides/2.6-Transfer-Learning-Slides.pptx"
   },
   {
    "id": "2.7",
    "title": "Deep Learning Frameworks Compared: PyTorch, TensorFlow, and JAX",
    "tags": [],
    "hours": 3,
    "url": "../docs/deep-learning-foundations/2-7-deep-learning-frameworks-compared",
    "summary": "Every network described so far in this phase, from a two-layer MLP (2.1) to a full Transformer (2.5), needs to actually be implemented, trained on real hardware, and have its gradients computed correctly for backpropagation (2.2) to work. A **deep learning framework** provides three things that make this practical: **automatic differentiation** (computing exact gradients of arbitrary differentiable code without hand-deriving them), GPU-accelerated tensor operations, and pre-built layers and optimizers. The three dominant frameworks take different design approaches. **PyTorch** runs eagerly, executing operations immediately in ordinary Python, which makes it easy to debug and has made it the default in research. **TensorFlow** now also runs eagerly by default but retains strong tooling for compiling models into optimized graphs and deploying them to servers, mobile, and browsers. **JAX** takes a functional approach, offering composable transformations, most notably automatic differentiation and just-in-time compilation, that can be combined in ways the other two do not support as directly. All three exist to do the same underlying job: mechanize the chain rule so nobody has to re-derive backpropagation by hand for every new architecture.",
    "published": true,
    "presentationUrl": "../slides/2.7-Deep-Learning-Frameworks-Slides.pptx"
   },
   {
    "id": "2.8",
    "title": "Hardware for AI: GPUs, TPUs, and Training vs. Inference Compute Economics",
    "tags": [],
    "hours": 3
   }
  ]
 },
 {
  "id": "3",
  "num": 3,
  "slug": "nlp-llm-foundations",
  "name": "NLP & Language Model Foundations",
  "title": "Phase 3 — NLP & Language Model Foundations",
  "intro": "How raw text becomes tokens, embeddings, and eventually the LLM landscape you're choosing a base model from today.",
  "kind": "Full 7-section",
  "level": "Beginner",
  "prereq": [
   2
  ],
  "chapters": [
   {
    "id": "3.1",
    "title": "NLP Fundamentals: Tokenization, Embeddings, Vector Semantics",
    "tags": [],
    "hours": 3
   },
   {
    "id": "3.2",
    "title": "From Word2Vec to Contextual Embeddings (BERT-Era Shift)",
    "tags": [],
    "hours": 3
   },
   {
    "id": "3.3",
    "title": "Language Modeling Objectives: Causal LM vs. Masked LM vs. Seq2Seq",
    "tags": [],
    "hours": 3
   },
   {
    "id": "3.4",
    "title": "Evolution of LLMs: GPT / BERT / T5 Families — Compared",
    "tags": [],
    "hours": 3
   },
   {
    "id": "3.5",
    "title": "Tokenizers Deep Dive: BPE, WordPiece, SentencePiece",
    "tags": [],
    "hours": 4
   },
   {
    "id": "3.6",
    "title": "Scaling Laws & Emergent Abilities",
    "tags": [],
    "hours": 3
   },
   {
    "id": "3.7",
    "title": "The 2026 Model Landscape: Open vs. Closed, Size Classes, Choosing a Base Model",
    "tags": [],
    "hours": 3
   }
  ]
 },
 {
  "id": "4",
  "num": 4,
  "slug": "generative-ai-foundations",
  "name": "Generative AI Foundations",
  "title": "Phase 4 — Generative AI Foundations",
  "intro": "Generative vs. discriminative modeling, decoding strategies, multimodal generation, and the responsible-GenAI baseline every later phase builds on.",
  "kind": "Full 7-section",
  "level": "Beginner",
  "prereq": [
   3
  ],
  "chapters": [
   {
    "id": "4.1",
    "title": "What Is Generative AI? Generative vs. Discriminative Models",
    "tags": [],
    "hours": 3
   },
   {
    "id": "4.2",
    "title": "Generative Model Families Compared: LLMs, Diffusion Models, GANs, VAEs",
    "tags": [],
    "hours": 3
   },
   {
    "id": "4.3",
    "title": "How LLMs Generate Text: Decoding Strategies",
    "tags": [],
    "hours": 3
   },
   {
    "id": "4.4",
    "title": "Multimodal Generative AI: Text-to-Image, Text-to-Video, Speech",
    "tags": [],
    "hours": 3
   },
   {
    "id": "4.5",
    "title": "Context Windows, Memory Limits & Cost/Latency Trade-offs",
    "tags": [],
    "hours": 3
   },
   {
    "id": "4.6",
    "title": "Hallucination: Causes, Types, and Mitigation Strategies (Primer)",
    "tags": [],
    "hours": 3
   },
   {
    "id": "4.7",
    "title": "Responsible GenAI: Content Safety, Watermarking, Provenance",
    "tags": [],
    "hours": 3
   }
  ]
 },
 {
  "id": "5",
  "num": 5,
  "slug": "prompt-engineering",
  "name": "Prompt Engineering & LLM Apps",
  "title": "Phase 5 — Prompt Engineering & LLM Application Development",
  "intro": "From zero-shot prompting through schema-enforced structured outputs to your first production LLM app architecture.",
  "kind": "Full 7-section",
  "level": "Intermediate",
  "prereq": [
   4
  ],
  "chapters": [
   {
    "id": "5.1",
    "title": "Prompting Fundamentals: Zero-Shot, Few-Shot, Instruction Following",
    "tags": [],
    "hours": 3
   },
   {
    "id": "5.2",
    "title": "Advanced Prompting Patterns: Chain-of-Thought, Self-Consistency, Tree-of-Thought",
    "tags": [],
    "hours": 3
   },
   {
    "id": "5.3",
    "title": "Structured Outputs & Tool/Function Calling — the Basics",
    "tags": [],
    "hours": 3
   },
   {
    "id": "5.4",
    "title": "Structured Output Enforcement & Constrained Decoding — Deep Dive",
    "tags": [
     "v3"
    ],
    "hours": 4
   },
   {
    "id": "5.5",
    "title": "System Prompts, Guardrails & Prompt-Injection Defense",
    "tags": [],
    "hours": 3
   },
   {
    "id": "5.6",
    "title": "Prompt Optimization & Evaluation (Versioning, A/B Testing Prompts)",
    "tags": [],
    "hours": 3
   },
   {
    "id": "5.7",
    "title": "Architecture Patterns for Your First LLM App",
    "tags": [],
    "hours": 3
   },
   {
    "id": "5.8",
    "title": "Prompting vs. Fine-Tuning vs. RAG — A Decision Framework",
    "tags": [],
    "hours": 3
   }
  ]
 },
 {
  "id": "6",
  "num": 6,
  "slug": "rag-knowledge-systems",
  "name": "RAG & Knowledge Systems",
  "title": "Phase 6 — Retrieval-Augmented Generation & Knowledge Systems",
  "intro": "Grounding LLMs in real knowledge: vector search, RAG architecture, GraphRAG, semantic caching, and Google Cloud's Open Knowledge Format.",
  "kind": "Full 7-section",
  "level": "Intermediate",
  "prereq": [
   5
  ],
  "chapters": [
   {
    "id": "6.1",
    "title": "Why RAG? The Limits of Parametric Knowledge",
    "tags": [],
    "hours": 3
   },
   {
    "id": "6.10",
    "title": "Open Knowledge Format (OKF): A Portable, Agent-Readable Knowledge Standard",
    "tags": [],
    "hours": 3
   },
   {
    "id": "6.2",
    "title": "Embeddings & Vector Search Foundations",
    "tags": [],
    "hours": 3
   },
   {
    "id": "6.3",
    "title": "Vector Databases Compared",
    "tags": [],
    "hours": 3
   },
   {
    "id": "6.4",
    "title": "RAG Architecture Deep Dive: Ingestion, Chunking, Retrieval, Reranking, Generation",
    "tags": [],
    "hours": 4
   },
   {
    "id": "6.5",
    "title": "Advanced RAG Patterns: Hybrid Search, Reranking, HyDE, GraphRAG, Agentic RAG",
    "tags": [],
    "hours": 3
   },
   {
    "id": "6.6",
    "title": "Knowledge Graphs + LLMs",
    "tags": [],
    "hours": 3
   },
   {
    "id": "6.7",
    "title": "Caching Infrastructure for GenAI & Agents",
    "tags": [
     "v3"
    ],
    "hours": 3
   },
   {
    "id": "6.8",
    "title": "Evaluating RAG Systems: Retrieval Metrics, Faithfulness, RAGAS",
    "tags": [],
    "hours": 3
   },
   {
    "id": "6.9",
    "title": "RAG Reference Architecture Blueprint",
    "tags": [],
    "hours": 4
   }
  ]
 },
 {
  "id": "7",
  "num": 7,
  "slug": "finetuning-alignment",
  "name": "Fine-Tuning & Alignment",
  "title": "Phase 7 — Fine-Tuning, Alignment & Model Customization",
  "intro": "When to fine-tune instead of prompt or retrieve, and how to do it — PEFT, RLHF/DPO, distillation, and deployment.",
  "kind": "Full 7-section",
  "level": "Intermediate",
  "prereq": [
   5
  ],
  "chapters": [
   {
    "id": "7.1",
    "title": "When to Fine-Tune vs. Prompt vs. RAG: A Decision Framework",
    "tags": [],
    "hours": 3
   },
   {
    "id": "7.2",
    "title": "Full Fine-Tuning vs. Parameter-Efficient Fine-Tuning — Compared",
    "tags": [],
    "hours": 3
   },
   {
    "id": "7.3",
    "title": "Alignment Techniques Deep Dive: Instruction Tuning, RLHF, RLAIF, DPO",
    "tags": [],
    "hours": 4
   },
   {
    "id": "7.4",
    "title": "Domain Adaptation & Continual Pretraining",
    "tags": [],
    "hours": 3
   },
   {
    "id": "7.5",
    "title": "Model Compression: Distillation, Quantization, Pruning",
    "tags": [],
    "hours": 3
   },
   {
    "id": "7.6",
    "title": "Evaluating & Benchmarking Fine-Tuned Models",
    "tags": [],
    "hours": 3
   },
   {
    "id": "7.7",
    "title": "Deployment Considerations for Custom Models",
    "tags": [],
    "hours": 3
   }
  ]
 },
 {
  "id": "8",
  "num": 8,
  "slug": "agents-foundations",
  "name": "AI Agents: Foundations",
  "title": "Phase 8 — AI Agents: Foundations",
  "intro": "What an agent actually is, the agent loop, tool use, memory, context engineering, and agent UX — the flagship phase most Practitioners come for.",
  "kind": "Full 7-section",
  "level": "Intermediate",
  "prereq": [
   5
  ],
  "chapters": [
   {
    "id": "8.1",
    "title": "What Is an \"Agent\"? From Classical AI Agents to LLM Agents",
    "tags": [],
    "hours": 3
   },
   {
    "id": "8.10",
    "title": "Single-Agent Reference Architecture Blueprint",
    "tags": [],
    "hours": 4
   },
   {
    "id": "8.2",
    "title": "Anatomy of an LLM Agent: Perception, Reasoning, Memory, Action, Tools",
    "tags": [],
    "hours": 3
   },
   {
    "id": "8.3",
    "title": "The Agent Loop: Plan → Act → Observe → Reflect (ReAct and Beyond)",
    "tags": [],
    "hours": 3
   },
   {
    "id": "8.4",
    "title": "Tool Use & Function Calling — Deep Dive",
    "tags": [],
    "hours": 4
   },
   {
    "id": "8.5",
    "title": "Memory Systems for Agents — Compared",
    "tags": [],
    "hours": 3
   },
   {
    "id": "8.6",
    "title": "Context Engineering for Agents",
    "tags": [
     "v3"
    ],
    "hours": 3
   },
   {
    "id": "8.7",
    "title": "Planning & Reasoning Strategies: CoT, ReAct, Reflexion, Plan-and-Execute, Graph-of-Thought",
    "tags": [],
    "hours": 3
   },
   {
    "id": "8.8",
    "title": "Terminology Untangled: Agent vs. Workflow vs. Assistant vs. Copilot vs. Chatbot",
    "tags": [],
    "hours": 3
   },
   {
    "id": "8.9",
    "title": "Conversational & Agent UX Design",
    "tags": [
     "v5"
    ],
    "hours": 3
   }
  ]
 },
 {
  "id": "9",
  "num": 9,
  "slug": "agentic-frameworks-landscape",
  "name": "Agentic Frameworks Landscape",
  "title": "Phase 9 — Agentic Frameworks Landscape",
  "intro": "A high-level, breadth-first survey of orchestration frameworks, cloud-native agent builders, and the protocol layer — before the site goes deep in Phase 12.",
  "kind": "Survey",
  "level": "Intermediate",
  "prereq": [
   8
  ],
  "chapters": [
   {
    "id": "9.1",
    "title": "Why an Ecosystem Landscape Chapter? How to Read This Phase",
    "tags": [],
    "hours": 2
   },
   {
    "id": "9.2",
    "title": "Orchestration Frameworks at a Glance",
    "tags": [],
    "hours": 2
   },
   {
    "id": "9.3",
    "title": "Cloud-Native Agent Builders at a Glance",
    "tags": [],
    "hours": 2
   },
   {
    "id": "9.4",
    "title": "Protocol Layer at a Glance: MCP and A2A in One Page",
    "tags": [],
    "hours": 2
   },
   {
    "id": "9.5",
    "title": "Open-Source vs. Managed/Proprietary Frameworks — HL Trade-offs",
    "tags": [],
    "hours": 2
   },
   {
    "id": "9.6",
    "title": "How to Pick a Starting Framework for Your First Project",
    "tags": [],
    "hours": 2
   },
   {
    "id": "9.7",
    "title": "Landscape Comparison Table",
    "tags": [],
    "hours": 2
   }
  ]
 },
 {
  "id": "10",
  "num": 10,
  "slug": "agentic-architectures",
  "name": "Agentic Architectures & Patterns",
  "title": "Phase 10 — Agentic AI Architectures & Design Patterns",
  "intro": "The four core agentic design patterns, hybrid deterministic/non-deterministic orchestration, sandboxing, autonomy levels, and reference architectures.",
  "kind": "Full 7-section",
  "level": "Advanced",
  "prereq": [
   8,
   9
  ],
  "chapters": [
   {
    "id": "10.1",
    "title": "The Four Core Agentic Design Patterns",
    "tags": [],
    "hours": 3
   },
   {
    "id": "10.10",
    "title": "Reference Architectures: RAG Agent, Tool-Using Agent, Autonomous Research Agent",
    "tags": [],
    "hours": 4
   },
   {
    "id": "10.2",
    "title": "Reactive vs. Deliberative vs. Hybrid Agent Architectures",
    "tags": [],
    "hours": 3
   },
   {
    "id": "10.3",
    "title": "State-Machine & Graph-Based Agent Orchestration",
    "tags": [],
    "hours": 3
   },
   {
    "id": "10.4",
    "title": "Hybrid Deterministic / Non-Deterministic Orchestration",
    "tags": [
     "v3"
    ],
    "hours": 3
   },
   {
    "id": "10.5",
    "title": "Agent Sandboxing & Code Execution Environments",
    "tags": [
     "v3"
    ],
    "hours": 3
   },
   {
    "id": "10.6",
    "title": "Human-in-the-Loop Patterns: Approval Gates, Escalation, Oversight",
    "tags": [],
    "hours": 3
   },
   {
    "id": "10.7",
    "title": "Error Handling, Self-Correction & Guardrails in Agents",
    "tags": [],
    "hours": 3
   },
   {
    "id": "10.8",
    "title": "Agent Autonomy Levels (L0–L5 Framework) — Compared",
    "tags": [],
    "hours": 3
   },
   {
    "id": "10.9",
    "title": "Cost, Latency & Reliability Engineering for Agents",
    "tags": [],
    "hours": 3
   }
  ]
 },
 {
  "id": "11",
  "num": 11,
  "slug": "multi-agent-systems",
  "name": "Multi-Agent Systems",
  "title": "Phase 11 — Multi-Agent Systems & Orchestration",
  "intro": "Why and how to decompose work across multiple agents: topologies, communication protocols, coordination, and shared state.",
  "kind": "Full 7-section",
  "level": "Advanced",
  "prereq": [
   10
  ],
  "chapters": [
   {
    "id": "11.1",
    "title": "Why Multi-Agent? Decomposition, Specialization, Parallelism",
    "tags": [],
    "hours": 3
   },
   {
    "id": "11.2",
    "title": "Multi-Agent Topologies — Compared",
    "tags": [],
    "hours": 3
   },
   {
    "id": "11.3",
    "title": "Agent Communication Protocols & Message Passing",
    "tags": [],
    "hours": 3
   },
   {
    "id": "11.4",
    "title": "Role Design & Prompt Specialization for Sub-Agents",
    "tags": [],
    "hours": 3
   },
   {
    "id": "11.5",
    "title": "Coordination, Consensus & Conflict Resolution Among Agents",
    "tags": [],
    "hours": 3
   },
   {
    "id": "11.6",
    "title": "Shared Memory & State Management Across Agents",
    "tags": [],
    "hours": 3
   },
   {
    "id": "11.7",
    "title": "Multi-Agent Orchestration Frameworks Compared",
    "tags": [],
    "hours": 3
   },
   {
    "id": "11.8",
    "title": "Multi-Agent Reference Architecture Blueprints",
    "tags": [],
    "hours": 4
   }
  ]
 },
 {
  "id": "12",
  "num": 12,
  "slug": "agentic-frameworks-protocols-deep-dive",
  "name": "Frameworks & Protocols (Deep Dive)",
  "title": "Phase 12 — Agentic AI Tooling, Frameworks & Protocols (Deep Dive)",
  "intro": "The Phase 9 landscape survey, now with implementation depth: LangGraph, CrewAI, AutoGen, MCP, A2A, and the wider tool ecosystem.",
  "kind": "Full 7-section",
  "level": "Advanced",
  "prereq": [
   9,
   10
  ],
  "chapters": [
   {
    "id": "12.1",
    "title": "Framework Landscape Recap & Selection Criteria",
    "tags": [],
    "hours": 3
   },
   {
    "id": "12.2",
    "title": "LangChain & LangGraph — Deep Dive",
    "tags": [],
    "hours": 4
   },
   {
    "id": "12.3",
    "title": "CrewAI — Deep Dive",
    "tags": [],
    "hours": 4
   },
   {
    "id": "12.4",
    "title": "AutoGen & Semantic Kernel — Deep Dive",
    "tags": [],
    "hours": 4
   },
   {
    "id": "12.5",
    "title": "OpenAI Agents SDK / Assistants API — Deep Dive",
    "tags": [],
    "hours": 4
   },
   {
    "id": "12.6",
    "title": "Model Context Protocol (MCP) — Deep Dive & Architecture",
    "tags": [],
    "hours": 4
   },
   {
    "id": "12.7",
    "title": "Agent-to-Agent (A2A) Protocols & Interoperability Standards",
    "tags": [],
    "hours": 3
   },
   {
    "id": "12.8",
    "title": "The Wider Tool Ecosystem: Vector Stores, Orchestration, Observability",
    "tags": [],
    "hours": 3
   },
   {
    "id": "12.9",
    "title": "Framework Comparison Matrix",
    "tags": [],
    "hours": 4
   }
  ]
 },
 {
  "id": "13",
  "num": 13,
  "slug": "build-your-own-llm-and-slm",
  "name": "Build Your Own LLM / SLM",
  "title": "Phase 13 — Building Your Own Language Models: LLMs & SLMs",
  "intro": "An optional, advanced infrastructure track: pretraining data pipelines, distributed training, synthetic data, inference optimization, and SLMs — for readers who need to build, not just fine-tune, a model.",
  "kind": "Advanced track",
  "level": "Expert",
  "prereq": [
   2,
   7
  ],
  "chapters": [
   {
    "id": "13.1",
    "title": "Why Build Your Own Model? Build vs. Buy vs. Fine-Tune",
    "tags": [],
    "hours": 4
   },
   {
    "id": "13.10",
    "title": "Inference Optimization & Speculative Decoding",
    "tags": [
     "v3"
    ],
    "hours": 4
   },
   {
    "id": "13.11",
    "title": "Small Language Models (SLMs): What, Why, and When",
    "tags": [],
    "hours": 4
   },
   {
    "id": "13.12",
    "title": "Building SLMs: Distillation, Pruning, Edge Deployment",
    "tags": [],
    "hours": 4
   },
   {
    "id": "13.13",
    "title": "LLM vs. SLM — Comparison Table",
    "tags": [],
    "hours": 4
   },
   {
    "id": "13.14",
    "title": "Case Study Blueprint: Standing Up a Small, Domain-Specific Model End-to-End",
    "tags": [],
    "hours": 4
   },
   {
    "id": "13.2",
    "title": "Pretraining Data Pipelines",
    "tags": [],
    "hours": 4
   },
   {
    "id": "13.3",
    "title": "Tokenizer Design & Training for a New Model",
    "tags": [],
    "hours": 4
   },
   {
    "id": "13.4",
    "title": "Model Architecture Design Choices: Dense vs. MoE",
    "tags": [],
    "hours": 4
   },
   {
    "id": "13.5",
    "title": "Distributed Training Infrastructure",
    "tags": [],
    "hours": 4
   },
   {
    "id": "13.6",
    "title": "The Pretraining Run: Curriculum, Hyperparameters, Compute Budgeting",
    "tags": [],
    "hours": 4
   },
   {
    "id": "13.7",
    "title": "Synthetic Data Generation & Data Distillation",
    "tags": [
     "v3/v4"
    ],
    "hours": 4
   },
   {
    "id": "13.8",
    "title": "Post-Training Your Base Model: SFT, RLHF/DPO Recap & Model Cards",
    "tags": [],
    "hours": 4
   },
   {
    "id": "13.9",
    "title": "Evaluating a Newly Trained Base Model",
    "tags": [],
    "hours": 4
   }
  ]
 },
 {
  "id": "14",
  "num": 14,
  "slug": "hyperscaler-platforms",
  "name": "Hyperscaler AI Platforms",
  "title": "Phase 14 — Hyperscaler AI & Agentic Platforms: High-Level Foundations",
  "intro": "A breadth-first survey of Google Cloud, AWS, Microsoft, Oracle, and other hyperscaler AI/agentic platforms — before Phase 15's enterprise decisions.",
  "kind": "Survey",
  "level": "Intermediate",
  "prereq": [
   5
  ],
  "chapters": [
   {
    "id": "14.1",
    "title": "Why Hyperscaler Platforms Matter for Enterprise Agentic AI",
    "tags": [],
    "hours": 2
   },
   {
    "id": "14.2",
    "title": "Google Cloud AI & Agentic Foundations",
    "tags": [],
    "hours": 2
   },
   {
    "id": "14.3",
    "title": "AWS AI & Agentic Foundations",
    "tags": [],
    "hours": 2
   },
   {
    "id": "14.4",
    "title": "Microsoft AI & Agentic Foundations",
    "tags": [],
    "hours": 2
   },
   {
    "id": "14.5",
    "title": "Oracle AI & Agentic Foundations",
    "tags": [],
    "hours": 2
   },
   {
    "id": "14.6",
    "title": "Other Notable Platforms (Brief Pointers)",
    "tags": [],
    "hours": 2
   },
   {
    "id": "14.7",
    "title": "Hyperscaler Comparison Matrix",
    "tags": [],
    "hours": 2
   },
   {
    "id": "14.8",
    "title": "Multi-Cloud & Portability Considerations for Agentic AI",
    "tags": [],
    "hours": 2
   },
   {
    "id": "14.9",
    "title": "Choosing a Hyperscaler: A Decision Framework",
    "tags": [],
    "hours": 2
   }
  ]
 },
 {
  "id": "15",
  "num": 15,
  "slug": "enterprise-agentops-governance",
  "name": "Enterprise AgentOps & Governance",
  "title": "Phase 15 — Enterprise Agentic AI: Governance, Security, Evaluation & Operations",
  "intro": "The AgentOps/LLMOps lifecycle, multi-layered evaluation, security, identity/OAuth, gateway/router patterns, governance, FinOps, and AI product strategy.",
  "kind": "Full 7-section",
  "level": "Advanced",
  "prereq": [
   10,
   14
  ],
  "chapters": [
   {
    "id": "15.1",
    "title": "The AgentOps/LLMOps Lifecycle: Dev → Eval → Deploy → Monitor → Improve",
    "tags": [],
    "hours": 3
   },
   {
    "id": "15.10",
    "title": "Enterprise Reference Architecture",
    "tags": [],
    "hours": 4
   },
   {
    "id": "15.11",
    "title": "AI Product Strategy: Business Case, ROI Modeling & Build-Measure-Learn",
    "tags": [
     "v5"
    ],
    "hours": 3
   },
   {
    "id": "15.2",
    "title": "Evaluating Agentic Systems — The Multi-Layered Testing Pyramid",
    "tags": [
     "v3/v4"
    ],
    "hours": 3
   },
   {
    "id": "15.3",
    "title": "Observability & Tracing for Agents",
    "tags": [],
    "hours": 3
   },
   {
    "id": "15.4",
    "title": "Security for Agentic AI",
    "tags": [],
    "hours": 3
   },
   {
    "id": "15.5",
    "title": "Identity, Access & Permissions for Agents",
    "tags": [
     "v3"
    ],
    "hours": 3
   },
   {
    "id": "15.6",
    "title": "LLM Gateway & Router Patterns",
    "tags": [
     "v3"
    ],
    "hours": 3
   },
   {
    "id": "15.7",
    "title": "Governance, Risk & Compliance: NIST AI RMF, ISO 42001, EU AI Act",
    "tags": [],
    "hours": 3
   },
   {
    "id": "15.8",
    "title": "Cost Management & FinOps for Agentic Systems",
    "tags": [],
    "hours": 3
   },
   {
    "id": "15.9",
    "title": "Responsible AI & Human Oversight for Autonomous Agents",
    "tags": [],
    "hours": 3
   }
  ]
 },
 {
  "id": "16",
  "num": 16,
  "slug": "domain-deep-dives",
  "name": "Domain Deep Dives",
  "title": "Phase 16 — Domain Deep Dives",
  "intro": "Capstone-depth modules that go beyond the standard use-case grid: domain-native regulatory constraints, data realities and reference workflows for three regulated industries.",
  "kind": "Capstone depth",
  "level": "Advanced",
  "prereq": [
   15
  ],
  "chapters": [
   {
    "id": "16.1",
    "title": "Finance: Regulated Agentic Workflows, Model Risk & Market Data",
    "tags": [],
    "hours": 3
   },
   {
    "id": "16.2",
    "title": "Healthcare: Clinical Safety, PHI Handling & Care-Pathway Agents",
    "tags": [],
    "hours": 3
   },
   {
    "id": "16.3",
    "title": "Telecom: Network Operations, Assurance & Service Agents",
    "tags": [],
    "hours": 3
   }
  ]
 },
 {
  "id": "17",
  "num": 17,
  "slug": "frontier-topics",
  "name": "Advanced & Frontier Topics",
  "title": "Phase 17 — Advanced & Frontier Agentic AI Topics",
  "intro": "Where agentic AI is heading: long-horizon agents, multimodal/embodied agents, self-improvement, agent economies, and frontier safety.",
  "kind": "Full 7-section",
  "level": "Expert",
  "prereq": [
   11,
   15
  ],
  "chapters": [
   {
    "id": "17.1",
    "title": "Autonomous, Long-Horizon Agents",
    "tags": [],
    "hours": 4
   },
   {
    "id": "17.2",
    "title": "Multi-Modal Agents: Vision, Voice, Computer-Use / Browser-Use Agents",
    "tags": [],
    "hours": 4
   },
   {
    "id": "17.3",
    "title": "Bridge to Embodied AI & Robotics-Adjacent Agentic Workflows",
    "tags": [],
    "hours": 4
   },
   {
    "id": "17.4",
    "title": "Self-Improving Agents & Automated Prompt/Tool Optimization",
    "tags": [],
    "hours": 4
   },
   {
    "id": "17.5",
    "title": "Agent Economies & Multi-Agent Marketplaces",
    "tags": [],
    "hours": 4
   },
   {
    "id": "17.6",
    "title": "Reasoning Models & Test-Time Compute — Impact on Agent Design",
    "tags": [],
    "hours": 4
   },
   {
    "id": "17.7",
    "title": "AI Safety & Alignment for Autonomous Agentic Systems (Frontier Risk Primer)",
    "tags": [],
    "hours": 4
   },
   {
    "id": "17.8",
    "title": "Simulation & Evaluation Environments for Agents",
    "tags": [],
    "hours": 4
   },
   {
    "id": "17.9",
    "title": "Emerging Standards & the Road Ahead (living page)",
    "tags": [],
    "hours": 4
   }
  ]
 },
 {
  "id": "18",
  "num": 18,
  "slug": "capstones-and-contributing",
  "name": "Capstones & Contribution",
  "title": "Phase 18 — Capstones, Projects & Contribution Path",
  "intro": "End-to-end capstone builds per domain, a portfolio rubric, certification mapping, and how to contribute new chapters as the site grows.",
  "kind": "Mixed",
  "level": "Mixed",
  "prereq": [
   8
  ],
  "chapters": [
   {
    "id": "18.1",
    "title": "Capstone Project Briefs — One End-to-End Agent Build per Domain",
    "tags": [],
    "hours": 3
   },
   {
    "id": "18.2",
    "title": "Build-Along Tutorials",
    "tags": [],
    "hours": 3
   },
   {
    "id": "18.3",
    "title": "Portfolio & Assessment Rubric",
    "tags": [],
    "hours": 3
   },
   {
    "id": "18.4",
    "title": "Suggested Certification / External Learning-Path Mapping",
    "tags": [],
    "hours": 3
   },
   {
    "id": "18.5",
    "title": "Contribution Guide — How New Chapters and Use Cases Get Added",
    "tags": [],
    "hours": 3
   }
  ]
 }
];

export const ROLES = [
 {
  "id": "data-scientist",
  "title": "Data Scientist",
  "family": "Data & Modeling",
  "does": "EDA, feature engineering, classical ML model selection/tuning, translating findings into business recommendations",
  "core": [
   "P1",
   "2.1",
   "2.2",
   "4.1"
  ],
  "certs": [
   "AWS Certified Machine Learning Engineer – Associate",
   "Google Cloud Professional Machine Learning Engineer",
   "Azure Data Scientist Associate (DP-100)"
  ]
 },
 {
  "id": "data-engineer",
  "title": "Data Engineer (AI-Focused)",
  "family": "Data & Modeling",
  "does": "Builds/maintains ingestion pipelines, feature stores, and the plumbing feeding training data and RAG corpora",
  "core": [
   "1.7",
   "6.2",
   "6.3",
   "6.4",
   "6.7",
   "13.2"
  ],
  "certs": [
   "Google Cloud Professional Data Engineer",
   "AWS Certified Data Engineer – Associate (general data-eng certs — complementary, not AI-specific)"
  ]
 },
 {
  "id": "genai-engineer",
  "title": "Generative AI Engineer / LLM App Developer",
  "family": "Building",
  "does": "Builds production LLM-powered apps: prompt pipelines, RAG integration, vector DB wiring, output validation",
  "core": [
   "P3",
   "P4",
   "P5",
   "P6",
   "15.2"
  ],
  "certs": [
   "AWS Certified AI Practitioner",
   "Google Cloud Generative AI Leader",
   "Azure AI Engineer Associate (AI-102)",
   "Databricks Certified Generative AI Engineer Associate"
  ]
 },
 {
  "id": "prompt-engineer",
  "title": "Prompt Engineer",
  "note": "increasingly folded into GenAI Engineer",
  "family": "Building",
  "does": "Prompt design, testing, versioning, few-shot curation, guardrail authoring",
  "core": [
   "P5"
  ],
  "certs": [
   "Same as Generative AI Engineer"
  ]
 },
 {
  "id": "foundation-model-engineer",
  "title": "LLM / Foundation Model Engineer",
  "family": "Data & Modeling",
  "does": "Pretrains and fine-tunes base models; manages distributed training infra; evaluates base-model quality",
  "core": [
   "P2",
   "P7",
   "P13"
  ],
  "certs": [
   "NVIDIA-Certified Associate: Generative AI",
   "Databricks Certified Generative AI Engineer Associate (partial)",
   "A cloud ML-engineer cert as infra baseline"
  ]
 },
 {
  "id": "agent-developer",
  "title": "AI Agent Developer / Agentic AI Engineer",
  "family": "Agentic",
  "does": "Builds single-agent and tool-using agents; implements memory/context management; integrates a framework",
  "core": [
   "P8",
   "P9",
   "P10",
   "12.1",
   "12.2",
   "12.6"
  ],
  "certs": [
   "No dedicated agentic-AI certification exists industry-wide yet (verified 2026) — closest proxies are framework-specific learning paths (LangChain Academy, CrewAI) and cloud agent-builder training paths"
  ]
 },
 {
  "id": "multi-agent-architect",
  "title": "Multi-Agent Systems Architect",
  "family": "Agentic",
  "does": "Designs multi-agent topologies, inter-agent protocols, coordination/consensus strategies at scale",
  "core": [
   "P10",
   "P11",
   "P12"
  ],
  "certs": [
   "Same as Agent Developer, plus a general architecture credential (e.g. TOGAF) at enterprise-architect level"
  ]
 },
 {
  "id": "solutions-architect",
  "title": "AI Solutions / Enterprise Architect",
  "family": "Enterprise",
  "does": "End-to-end architecture spanning model, data, agent, and platform layers; hyperscaler selection; landing-zone design",
  "core": [
   "P14",
   "P15",
   "16.1"
  ],
  "certs": [
   "Google Cloud Generative AI Leader + Professional Cloud Architect",
   "AWS Certified AI Practitioner + Solutions Architect Professional",
   "Azure AI Engineer Associate + Solutions Architect Expert",
   "OCI AI Foundations Associate + OCI Generative AI Professional"
  ]
 },
 {
  "id": "agentops-engineer",
  "title": "MLOps / LLMOps / AgentOps Engineer",
  "family": "Enterprise",
  "does": "CI/CD for models and agents, evaluation pipelines, observability, FinOps",
  "core": [
   "15.1",
   "15.2",
   "15.3",
   "15.6",
   "15.8"
  ],
  "certs": [
   "Databricks Certified Generative AI Engineer Associate",
   "A cloud ML-engineer cert",
   "General SRE/DevOps certs as complementary background"
  ]
 },
 {
  "id": "platform-engineer",
  "title": "AI Platform / Infrastructure Engineer",
  "family": "Enterprise",
  "does": "GPU/TPU cluster management, distributed-training infra, inference-serving optimization",
  "core": [
   "2.8",
   "13.5",
   "13.10"
  ],
  "certs": [
   "NVIDIA-Certified Associate: Generative AI",
   "NVIDIA AI infrastructure training",
   "Cloud architect-level certs"
  ]
 },
 {
  "id": "security-engineer",
  "title": "AI Security Engineer / Red-Teamer",
  "family": "Governance",
  "does": "Adversarial testing, prompt-injection defense, execution-sandboxing review, vulnerability benchmarking",
  "core": [
   "10.5",
   "15.2",
   "15.4"
  ],
  "certs": [
   "OWASP Top 10 for LLM Applications training/certificate",
   "CISSP, OSCP as complementary background — no mature AI-specific security cert exists industry-wide yet"
  ]
 },
 {
  "id": "grc-specialist",
  "title": "AI Governance, Risk & Compliance Specialist",
  "family": "Governance",
  "does": "Regulatory mapping (EU AI Act, NIST AI RMF, ISO 42001), risk assessments, model-risk management",
  "core": [
   "1.9",
   "15.6",
   "15.7",
   "15.9"
  ],
  "certs": [
   "IAPP AI Governance Professional (AIGP)",
   "ISO/IEC 42001 Lead Implementer or Lead Auditor",
   "NIST AI RMF practitioner training"
  ]
 },
 {
  "id": "responsible-ai-lead",
  "title": "Responsible AI / AI Ethics Lead",
  "family": "Governance",
  "does": "Bias/fairness audits, human-oversight design, ethics-review processes",
  "core": [
   "1.9",
   "15.9"
  ],
  "certs": [
   "Same governance certs as GRC Specialist",
   "A university Responsible AI specialization"
  ]
 },
 {
  "id": "product-manager",
  "title": "AI Product Manager",
  "family": "Product",
  "does": "Defines agentic-product requirements, prioritizes use cases, owns the business case/ROI, cross-functional coordination",
  "core": [
   "P0",
   "5.7",
   "5.8",
   "15.11",
   "16.1"
  ],
  "certs": [
   "Google Cloud Generative AI Leader",
   "An AI-focused product-management certificate program",
   "General PM credentials (CSPO, etc.) as complementary background"
  ]
 },
 {
  "id": "domain-specialist",
  "title": "Domain-Specific AI Specialist",
  "note": "Quant AI Engineer, Clinical AI Specialist, Network AI Engineer",
  "family": "Product",
  "does": "Applies the full agentic stack to one regulated domain's workflows",
  "core": [
   "P5",
   "P6",
   "P7",
   "P8",
   "P9",
   "P10",
   "P11",
   "P12",
   "P16",
   "15.6",
   "15.7"
  ],
  "certs": [
   "One hyperscaler AI cert (any provider) plus a domain credential — a finance/AI credential for Quant roles, HIMSS-style health-IT credentials for Clinical AI, TM Forum certifications for Telco"
  ]
 }
];

export const TRACKS = [
 {
  "id": "foundations",
  "name": "Foundations Track",
  "for": "New to AI",
  "blurb": "Understand AI/ML concepts from the ground up before touching anything agentic.",
  "phases": [
   0,
   1,
   2,
   3,
   4,
   5,
   6
  ]
 },
 {
  "id": "practitioner",
  "name": "Practitioner / Builder Track",
  "for": "Some ML/GenAI experience",
  "blurb": "Straight at agent design, frameworks and multi-agent systems. Phase 13 is an optional detour, not a stop.",
  "phases": [
   5,
   6,
   7,
   8,
   9,
   10,
   11,
   12,
   18
  ]
 },
 {
  "id": "architect",
  "name": "Advanced / Architect Track",
  "for": "Already building agentic systems",
  "blurb": "Platform selection, governance depth and domain-specific patterns for enterprise-grade systems.",
  "phases": [
   10,
   11,
   12,
   13,
   14,
   15,
   16,
   17
  ]
 }
];

export const COHORTS = [
 {
  "id": "c1",
  "title": "Agentic Architectures — Spring Cohort",
  "phases": [
   8,
   10,
   11
  ],
  "starts": "2026-09-07",
  "weeks": 8,
  "seats": 24,
  "taken": 19,
  "cadence": "Tue & Thu · 18:00–19:30 IST",
  "lead": "Practitioner track"
 },
 {
  "id": "c2",
  "title": "Enterprise AgentOps & Governance",
  "phases": [
   14,
   15
  ],
  "starts": "2026-09-21",
  "weeks": 6,
  "seats": 18,
  "taken": 7,
  "cadence": "Wed · 17:00–19:00 IST",
  "lead": "Architect track"
 },
 {
  "id": "c3",
  "title": "Foundations Intensive",
  "phases": [
   0,
   1,
   2,
   3
  ],
  "starts": "2026-10-05",
  "weeks": 10,
  "seats": 30,
  "taken": 12,
  "cadence": "Mon & Fri · 19:00–20:30 IST",
  "lead": "Foundations track"
 },
 {
  "id": "c4",
  "title": "Build Your Own SLM — Lab Cohort",
  "phases": [
   13
  ],
  "starts": "2026-11-02",
  "weeks": 7,
  "seats": 12,
  "taken": 11,
  "cadence": "Sat · 10:00–13:00 IST",
  "lead": "Advanced lab"
 }
];

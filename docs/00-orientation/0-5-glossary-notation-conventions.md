---
title: "Glossary & Notation Conventions"
sidebar_label: "0.5 Glossary & Notation Conventions"
sidebar_position: 5
chapter: "0.5"
---

# Glossary & Notation Conventions

A living reference for terms and notation used consistently across the site. Individual
chapters don't redefine these — they link back here.

## Conventions used throughout the site

- **Chapter IDs** are written `phase.chapter`, e.g. `10.4` means Phase 10, chapter 4. The flight
  label at the top of every page (e.g. `Chapter 10.4 · Phase 10`) uses this same numbering.
- **`[v3]` / `[v4]` / `[v5]` tags** on a chapter title mark content added or expanded in that
  review pass — see the site's Changelog for what each pass covered.
- **"HL survey"** on a chapter marks it as using the lighter four-section landscape template
  (Phases 9 and 14 only) rather than the full seven-section Content Standard.
- Code blocks use language-tagged fencing (` ```python `, ` ```bash `, etc.) and are always
  runnable/copy-pasteable as written — no partial snippets presented as complete.
- Mermaid diagrams are used for anything architectural that will change over time (flow charts,
  sequence diagrams); static SVG illustrations are used for anything conceptual/decorative.

## Core terms

| Term | Definition |
|---|---|
| **Agent** | A system that uses an LLM to decide its own sequence of actions (tool calls, sub-tasks) toward a goal, rather than following a fixed, human-authored control flow. See 8.1 and 8.8 for the full agent-vs-workflow-vs-copilot distinction. |
| **AI Winter** | A period of collapsed funding and research interest following an era of AI overpromising relative to what the era's compute/data could deliver. Two are widely recognized: roughly 1974–1980 (the US 1966 ALPAC report and 1969 Mansfield Amendment, plus the UK's independent 1973 Lighthill Report) and roughly 1987–1993 (the Lisp-machine market collapse and a second DARPA funding cut). See 1.1. |
| **AI Effect** | The tendency for a task to stop being called "AI" once it's reliably automated (chess engines, OCR, spam filters), so the term keeps shifting to whatever capability is still unsolved. See 1.1. |
| **Narrow AI (ANI) / AGI / ASI** | A capability-*generality* spectrum, not a "smartness" spectrum. Narrow AI (all systems built to date, including current LLM agents) is competent at specific tasks without that competence transferring to unrelated ones. AGI (not yet achieved) would generalize across essentially any cognitive task the way a human does. ASI is a hypothetical further step beyond AGI. See 1.1. |
| **Discriminative model** | A model that predicts P(label \| input) directly, drawing a decision boundary between fixed classes rather than modeling how the input itself was produced (logistic regression, an SVM, most classifiers). Contrast with generative model. See 1.2. |
| **Generative model** | In classical statistics, a model that learns the joint distribution of inputs and labels, P(input, label), and can sample new inputs from it (Naive Bayes is the standard textbook example). "Generative AI" narrows this further: an industry term for models that sample new content, usually from a distribution conditioned on an input, P(output \| input), rather than the unconditional or joint form the classical term describes. See 1.2. |
| **Markov Decision Process (MDP)** | The standard formalization of a reinforcement learning problem: a set of states, actions, a transition function, and a reward function, with a policy learned to maximize expected cumulative reward over time rather than a single labeled correct action. See 1.3. |
| **Self-supervised learning** | Training where the label for each example is generated automatically from the data itself (the next token in a sequence, a masked-out word) rather than assigned by a human annotator. Mechanically identical to supervised learning; it just doesn't require human labeling. See 1.3. |
| **Reward hacking** | When a reinforcement learning agent optimizes its reward function exactly as designed, but the reward function was an imperfect proxy for the outcome its designers actually wanted. Distinct from label leakage, which is a supervised-learning failure. See 1.3. |
| **Feature / Feature vector** | The fixed-length numeric representation a model actually consumes, built from raw data (a house's square footage and bedroom count rather than the house itself). Constructing this representation is feature engineering, covered in full in 1.7. See 1.4. |
| **Hyperparameter** | A model or training setting chosen by the practitioner before or during training (a regularization strength, the number of folds in cross-validation) rather than learned from data the way model weights are. Tuned against a validation set, never the test set. See 1.4. |
| **Regularization** | A family of techniques that penalize model complexity during training to control variance, rather than by strictly limiting the model's raw capacity. L2 (ridge) shrinks weights toward zero; L1 (lasso) can drive some weights to exactly zero, acting as implicit feature selection; early stopping halts training once validation error starts rising. See 1.4. |
| **Bias-variance tradeoff** | The decomposition of a model's expected error into bias (error from a model too simple to represent the true relationship), variance (error from sensitivity to which specific training sample was used), and irreducible noise. Increasing model flexibility typically lowers bias but raises variance. See 1.4. |
| **Overfitting / Underfitting** | Overfitting: a model fits training-set noise as well as signal, showing low training error but much higher validation error (high variance). Underfitting: a model lacks the capacity to represent the real pattern, showing high error on both training and validation data (high bias). See 1.4. |
| **Data leakage** | When information that would not be available at prediction time (label information, future data, or duplicated records across a train/test split) reaches a model during training or validation, producing an evaluation that looks good but does not hold in production. Distinct from overfitting, which is a modeling failure rather than an evaluation-integrity failure. See 1.4. |
| **Cross-validation (k-fold)** | Partitioning training data into k folds, training k times with a different fold held out as validation each time, and averaging the k scores into one performance estimate, to reduce the noise of a single train/validation split. See 1.4. |
| **Inductive bias** | The structural assumption a learning algorithm makes about the shape of the relationship it is fitting (a straight line for linear regression, axis-aligned splits for a decision tree), which determines what patterns it can represent at all before it ever sees data. See 1.5. |
| **Ensemble learning (bagging / boosting)** | Combining many individual models into a stronger predictor. Bagging trains many models independently on bootstrap-resampled data and averages their predictions to reduce variance (Random Forest); boosting trains models sequentially, each correcting the ensemble's remaining errors, to reduce bias (gradient boosting, AdaBoost). See 1.5. |
| **Curse of dimensionality** | The tendency for distance-based methods (like k-nearest neighbors) to degrade as the number of features grows, because in high-dimensional space the distance to the nearest point and the distance to a typical random point converge, making "nearest" less informative. See 1.5. |
| **Confusion matrix** | A table of a classifier's predictions at a fixed threshold, broken into true positives, false positives, false negatives, and true negatives; every classification metric in this curriculum is a ratio computed from these four counts. See 1.6. |
| **Precision / Recall** | Precision is the fraction of predicted positives that were actually positive (TP / (TP + FP)); recall is the fraction of actual positives the model found (TP / (TP + FN)). Computed over different denominators, so a model can score high on one and low on the other. See 1.6. |
| **F1 score** | The harmonic mean of precision and recall, 2 · (Precision · Recall) / (Precision + Recall), used as a single balanced metric when neither false positives nor false negatives are clearly more costly. See 1.6. |
| **ROC-AUC** | The area under the ROC curve (true positive rate vs. false positive rate across every decision threshold); equals the probability that a randomly chosen actual positive scores higher than a randomly chosen actual negative. See 1.6. |
| **RMSE / MAE** | Root mean squared error and mean absolute error, two ways of summarizing regression error. RMSE squares each residual before averaging, so it penalizes large errors more heavily than MAE does. See 1.6. |
| **Missing data (MCAR / MAR / MNAR)** | A taxonomy of why a value is missing, which determines which handling strategy is valid. MCAR: missingness is unrelated to any variable, so dropping rows adds no bias. MAR: missingness depends on other observed variables, which model-based imputation can account for. MNAR: missingness depends on the missing value itself, which no imputation method can fully correct. See 1.7. |
| **Target / mean encoding** | Replacing a categorical value with a statistic (typically the mean) of the target variable observed for that category. Compact and often effective, but leaks label information unless computed out-of-fold, with rare categories smoothed toward the global mean. See 1.7. |
| **Learned embeddings** | Low-dimensional dense vectors trained alongside a model to represent a categorical value, letting the model discover which categories behave similarly rather than requiring that structure to be hand-specified. A common alternative to one-hot or target encoding for very high-cardinality categoricals. See 1.7. |
| **Feature store** | A shared feature-computation layer used by both a training pipeline and a live serving system, so a feature is guaranteed to mean the same code in both places rather than two independently maintained implementations. See 1.7. |
| **Training-serving skew** | When a feature is computed one way during offline model training and a subtly different way during live serving, so a model receives inputs at serving time that don't match what it learned from. Not detectable by offline evaluation metrics, because they run entirely inside the training-side code path. See 1.7. |
| **Dot product / Cosine similarity** | The dot product of two vectors, x . y = Σ xi yi, is large when they point in similar directions but also grows with each vector's magnitude. Cosine similarity, x . y / (‖x‖‖y‖), divides that out to measure direction alone, which is why it is the standard similarity measure for embeddings. See 1.8. |
| **Bayes' theorem** | P(A given B) = P(B given A) · P(A) / P(B): the probability of A given evidence B, weighted by how likely A was before any evidence (the prior) and normalized by how likely the evidence is overall. The low prior in a rare-event estimate can dominate the result even when a test or model is highly accurate. See 1.8. |
| **p-value / Confidence interval** | A p-value is the probability of observing a difference at least this extreme if there were truly no effect; a small p-value is evidence against "no difference," not proof of a large or important effect. A confidence interval gives a range of plausible values for the true effect size and is often more informative than a p-value alone. See 1.8. |
| **Gradient descent / Learning rate** | The standard training procedure: θ ← θ − η∇L(θ), stepping parameters θ in the direction that most reduces the loss L, scaled by the learning rate η. Too high a learning rate can cause the loss to oscillate or diverge; too low converges reliably but slowly. See 1.8. |
| **Convex / Non-convex loss surface** | A convex loss surface has exactly one minimum, so gradient descent is guaranteed to reach it regardless of starting point. A non-convex surface, typical of deep neural networks, can have many local minima and saddle points, so the starting point and optimizer choice affect where training ends up. See 1.8. |
| **Demographic parity / Equalized odds / Predictive parity** | Three distinct, individually reasonable fairness definitions that do not all agree. Demographic parity requires the same positive prediction rate across groups. Equalized odds requires the same true and false positive rate across groups, conditioned on the actual outcome. Predictive parity (calibration) requires the same actual outcome rate among people who received the same score. When group base rates genuinely differ, equalized odds and predictive parity cannot both hold except for a perfect classifier. See 1.9. |
| **LIME (Local Interpretable Model-agnostic Explanations)** | A post-hoc explanation method that samples points near one input, observes how a black-box model's output changes, and fits a simple, interpretable surrogate model to that local neighborhood; the surrogate's coefficients become the explanation for that one prediction. See 1.9. |
| **SHAP (SHapley Additive exPlanations)** | A post-hoc explanation method that adapts the Shapley value from cooperative game theory, distributing a prediction's difference from a baseline across features so that a feature contributing nothing gets zero credit and all contributions sum exactly to the total difference. Local per-prediction SHAP values can also be aggregated into a global feature-importance summary. See 1.9. |
| **Feedback loop (bias)** | When a deployed model's own decisions shape which outcomes get observed, and those observed outcomes then become training data for the next model version, compounding an initial bias each retraining cycle rather than merely repeating it. See 1.9. |
| **Perceptron** | A single unit that computes a weighted sum of its inputs plus a bias, then applies an activation function; can only separate its input space with one straight line/hyperplane. See 2.1. |
| **Multilayer Perceptron (MLP) / Hidden layer** | A network of perceptron-like units arranged in fully connected layers, with one or more hidden layers between the input and output layer where the network's actual computation happens. See 2.1. |
| **Activation function** | The nonlinear function (sigmoid, tanh, ReLU) applied to a unit's weighted sum; without it, any depth of stacked layers collapses algebraically to one linear transformation. See 2.1. |
| **Universal Approximation Theorem** | The result (Cybenko 1989; Hornik, Stinchcombe, and White 1989) that a feedforward network with one hidden layer and enough units can approximate any continuous function on a bounded region to arbitrary precision. An existence proof, not a training or efficiency guarantee. See 2.1. |
| **Backpropagation** | The algorithm that computes the gradient of the loss with respect to every weight by applying the chain rule backward through the network, from the loss to the input layer, reusing forward-pass computations layer by layer rather than re-deriving each weight's gradient independently. See 2.2. |
| **Vanishing / Exploding gradient** | Because the chain rule multiplies one factor per layer, a deep network's earliest-layer gradients can shrink toward zero (vanishing, common with sigmoid/tanh) or grow unboundedly (exploding) as depth increases, stalling or destabilizing training. See 2.2. |
| **Momentum (optimization)** | An optimizer technique that keeps a running exponentially-weighted average of past gradients and updates weights using that average rather than the raw current gradient, smoothing noisy per-batch updates and accelerating convergence along consistently downhill directions. See 2.2. |
| **Adam (Adaptive Moment Estimation)** | An optimizer that combines momentum (a first-moment gradient estimate) with a second-moment estimate (an exponentially-weighted average of squared gradients) to give every parameter its own adapted effective learning rate. See 2.2. |
| **Learning rate schedule** | A rule that changes the learning rate over the course of training rather than fixing one value for the whole run: step decay, cosine annealing, and warm-up are the standard forms. See 2.2. |
| **RAG (Retrieval-Augmented Generation)** | Augmenting an LLM's response with content retrieved from an external knowledge source at inference time, rather than relying solely on what the model learned during training. See Phase 6. |
| **Fine-tuning** | Further training a pretrained model's weights on a smaller, task- or domain-specific dataset. See Phase 7. |
| **SLM (Small Language Model)** | A language model deliberately sized down from frontier-scale LLMs for cost, latency, privacy, or on-device deployment reasons. See 13.11–13.13. |
| **Tool / Function Calling** | A model's ability to emit a structured request to invoke an external function/API, whose result is then fed back into the model's context. See 5.3, 5.4, 8.4. |
| **Trajectory (agent eval)** | The full sequence of an agent's tool calls and intermediate reasoning steps toward an answer — evaluated separately from whether the final answer was correct. See 15.2. |
| **OBO (On-Behalf-Of) flow** | An OAuth pattern where an agent acts using a token scoped to a specific human user's permissions, rather than a standing service-account identity. See 15.5. |
| **Autonomy Level (L0–L5)** | A framework for describing how much of a task an agent is trusted to complete without human approval, from L0 (no autonomy) to L5 (fully autonomous). See 10.8. |
| **Landing zone** | The pre-configured, governed cloud environment (network, IAM, guardrails) an enterprise agent platform is deployed into. See 15.10. |

## Notation

- Model/architecture math uses standard ML notation (bold lowercase for vectors, bold uppercase
  for matrices) — introduced locally in each Deep-Dive section where first used, not assumed.
- Architecture diagrams always label data flow direction explicitly; an unlabeled arrow is
  considered a chapter bug — please file an issue if you find one.

*This glossary grows as new chapters introduce new recurring terms — see the Contribution Guide
(Phase 18) for how to propose an addition.*

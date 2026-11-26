# Matching calibration — V0.3

The matcher remains deterministic: identical answers always produce identical rankings. Match percentages are normalized profile similarity, not statistical probabilities.

## Random distribution

Fixed-seed simulation with 50,000 uniformly random answer sets.

| Field | Before #1 | After #1 | After #2 | After Top-3 | Avg rank | Avg score |
|---|---:|---:|---:|---:|---:|---:|
| Agentic AI | 1.7% | 6.1% | 4.5% | 14.6% | 7.35 | 79.4 |
| AI Safety | 6.9% | 12.0% | 18.8% | 48.2% | 3.56 | 83.6 |
| Efficient ML / Systems | 3.5% | 10.5% | 15.3% | 37.8% | 4.40 | 82.9 |
| LLMs / NLP | 6.1% | 7.1% | 21.6% | 52.1% | 3.92 | 83.6 |
| Federated Learning | 29.8% | 18.5% | 10.6% | 34.5% | 5.04 | 82.6 |
| Graph Machine Learning | 1.8% | 2.8% | 6.2% | 22.9% | 6.01 | 81.4 |
| Reinforcement Learning | 20.9% | 11.7% | 7.8% | 29.5% | 5.14 | 82.5 |
| Multimodal AI / VLMs | 10.8% | 17.1% | 4.2% | 25.0% | 6.09 | 81.9 |
| Computer Vision | 5.1% | 5.8% | 6.1% | 17.1% | 6.52 | 81.4 |
| AI for Science | 13.5% | 8.4% | 4.9% | 18.4% | 6.98 | 80.6 |

No field is above the 25% warning threshold or below 2%.

## Changes

- Added five semantic dimensions: interaction, distributed structure, perception, science domain, and language.
- Added two questions because the original eight generic work-style questions could not distinguish Graph ML from Federated Learning, CV from Systems, or Agentic AI from other fast-moving empirical fields without arbitrary field bonuses.
- The new research-object and meaningful-constraint questions contribute to semantic dimensions, never directly to a field.
- Moved Federated Learning away from the generic centroid and gave previously starved fields explicit, interpretable routes.
- Softened the LLM profile from an extreme compute/trend corner after diagnostics showed field starvation.

## Archetype profiles

Thirty hand-designed profiles were tested: three realistic variants for each field. All **30/30** placed their intended field in the Top-2. Eight fields consistently reached #1; AI Safety and Graph ML variants reached either #1 or #2 against related neighboring fields.

## Sensitivity

| Answers changed | Top-1 changed | Top-3 order changed | Mean score-gap delta |
|---:|---:|---:|---:|
| 1 | 33.5% | 65.8% | 0.90 |
| 2 | 47.4% | 80.2% | 1.14 |
| 3 | 57.7% | 88.5% | 1.31 |

This is more responsive than V0.2 while retaining continuity: one changed answer changes the winner in about one-third of random cases; three changes alter it in over half.

## Remaining limitations

- Uniform random answers are a diagnostic, not a model of real researchers.
- Multimodal AI and Federated Learning retain comparatively large but non-default regions.
- Graph ML remains close to Federated Learning and has the smallest healthy region above the warning threshold.
- Archetypes are curated developer tests, not validated psychometrics.
- Euclidean profile distance assumes dimensions are independent and equally important.

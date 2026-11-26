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

## V0.3.1 category calibration

The four result roles now share one deterministic profile but use different selection objectives:

- **Natural Habitat:** highest overall compatibility.
- **Comfort Zone:** highest `compatibility − 0.28 × friction` after Natural is removed.
- **Dangerous Attraction:** a remaining field must normally clear attraction (48), friction (12), and compatibility (76) thresholds. It is then ranked by 55% attraction, 25% capped friction, and 20% compatibility. The compatibility term prevents a completely disliked field from winning; capped friction prevents the most punishing field from becoming the default danger.
- **Not Your Habitat:** lowest compatibility after the other three roles are removed.

Attraction is normalized alignment between the user's curiosity profile and each field's salient novelty, pace, interaction, perception, science, language, distributed, and ambiguity traits. Friction is a separate weighted measure of mismatches in compute, evaluation, systems work, theory, pace, benchmarks, novelty pressure, ambiguity, and interaction; it is not `1 − compatibility`.

All four roles were unique in **50,000 / 50,000** profiles (duplicate count: **0**).

### Dangerous Attraction distribution

| Field | Rate |
|---|---:|
| Agentic AI | 31.8% |
| AI Safety | 7.8% |
| Efficient ML / Systems | 7.4% |
| LLMs / NLP | 2.1% |
| Federated Learning | 2.3% |
| Graph Machine Learning | 6.6% |
| Reinforcement Learning | 8.5% |
| Multimodal AI / VLMs | 7.9% |
| Computer Vision | 7.5% |
| AI for Science | 18.1% |

No field exceeds the 40% warning threshold. Agentic AI remains the largest dangerous-attraction region because its fast pace, interaction, evaluation burden, and novelty pressure often combine genuine appeal with friction; it is no longer an automatic fallback.

### Five diagnostic cases

| Case | Natural | Comfort | Dangerous | Not | Dangerous compatibility / attraction / friction | Why it is dangerous |
|---:|---|---|---|---|---|---|
| 1 | Agentic AI | LLMs / NLP | Efficient ML / Systems | Graph ML | 82 / 62 / 15 | Systems-scale work is appealing, but its engineering and benchmark burden adds meaningful friction. |
| 2 | AI for Science | Graph ML | AI Safety | Agentic AI | 88 / 56 / 18 | Reliability questions are attractive, while adversarial evidence and ambiguity challenge this profile. |
| 3 | Efficient ML / Systems | Federated Learning | AI for Science | Multimodal AI | 79 / 51 / 20 | Scientific structure is intriguing, but domain validation and uncertain evaluation create friction. |
| 4 | Multimodal AI / VLMs | LLMs / NLP | Agentic AI | Federated Learning | 81 / 64 / 24 | Interactive autonomous behavior is tempting, but long-horizon evaluation and fast-moving novelty are costly. |
| 5 | AI for Science | Graph ML | AI Safety | Agentic AI | 88 / 52 / 18 | Safety is close enough to attract this evidence-minded profile, yet threat-model and edge-case work create tension. |

The Q9 and Q10 wording was made indirect to remove field-name leakage. Their latent contributions did not change, so Natural Habitat distribution and the **30/30 Top-2** archetype result remain stable. Updated sensitivity measures Top-3 membership rather than ordering: one answer changed 33.5% / 46.4% (Top-1 / Top-3), two changed 47.4% / 61.9%, and three changed 57.7% / 73.7%.

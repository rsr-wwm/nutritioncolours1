# Leaf Readiness Audit

**Scope:** quarantined health and food Markdown under `src/content/knowledge`  
**Policy:** automated readiness is only a triage signal; it never authorizes publication  
**Registry:** `data/publishing/leaf-registry.json`

## Result

| Tier | Page kind | Records | Preliminary machine-eligible | Published |
|---:|---|---:|---:|---:|
| 1 | Health | 1126 | 0 | 0 |
| 2 | Food | 1047 | 0 | 0 |

All imported records remain `quarantine` with `indexPolicy: none` and no canonical route. A separate explicit approval event is required before any record can transition to `publish`.

## Health blocking signals

| Signal | Records |
|---|---:|
| `BELOW_PRELIMINARY_DEPTH_FLOOR` | 824 |
| `BOILERPLATE_OR_CROSS_ENTITY_CONTAMINATION` | 689 |
| `HIGH_RISK_MEDICAL_LANGUAGE_REQUIRES_CLAIM_REVIEW` | 512 |
| `INSUFFICIENT_EXTERNAL_SOURCES` | 964 |
| `MISSING_DESCRIPTION` | 219 |
| `MISSING_REVIEWER` | 823 |
| `MISSING_SOURCES_SECTION` | 832 |
| `SPACED_INTERNAL_LINK` | 286 |
| `UNSAFE_OR_RAW_SLUG` | 624 |

## Food blocking signals

| Signal | Records |
|---|---:|
| `BELOW_PRELIMINARY_DEPTH_FLOOR` | 400 |
| `BOILERPLATE_OR_CROSS_ENTITY_CONTAMINATION` | 617 |
| `HIGH_RISK_MEDICAL_LANGUAGE_REQUIRES_CLAIM_REVIEW` | 618 |
| `INSUFFICIENT_EXTERNAL_SOURCES` | 1012 |
| `MISSING_REVIEWER_FOR_CLINICAL_CLAIMS` | 607 |
| `MISSING_SOURCES_SECTION` | 935 |
| `SPACED_INTERNAL_LINK` | 11 |
| `UNSAFE_OR_RAW_SLUG` | 942 |

## Duplicate and collision review queue

| Signal | Candidate groups |
|---|---:|
| `EXACT_NORMALIZED_TITLE` | 144 |
| `ENTITY_HEAD` | 475 |
| `SAME_KIND_SLUG` | 386 |
| `EXACT_NORMALIZED_DESCRIPTION` | 73 |

These are review leads, not automatic merge decisions. A clinician/editor must distinguish true duplicates from legitimate intent, preparation, variety, symptom, or population differences.

## Interpretation

- Machine checks identify obvious blockers such as missing sources, contaminated templates, unsafe slugs, thin drafts, future dates, and high-risk language.
- A page that eventually has zero machine blockers still requires identity, evidence-entailment, reviewer-scope, clinical/legal, accessibility, and editorial approval.
- The registry is deliberately not imported by `src/`; route generation remains disconnected.
- Changes to the legacy corpus must be followed by `npm run leaf:audit`, and CI checks exact registry/report synchronization.

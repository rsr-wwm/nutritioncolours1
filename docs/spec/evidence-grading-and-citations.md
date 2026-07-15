# Evidence-Grading Scheme & Citation Standard (MRS §37, §38)

**Date:** 2026-07-13. Applied to every health-effect edge and claim. Documented publicly on the methodology page (extend `src/pages/legal/methodology.astro`) so it is transparent to users and validators.

## 1. Grading scale (§38.1) — A/B/C/D

| Grade | Meaning | Typical evidence | On-page label |
|---|---|---|---|
| **A** | Strong | ≥1 high-quality systematic review / meta-analysis of RCTs, consistent | "Strong evidence" (green) |
| **B** | Moderate | ≥1 well-conducted RCT, or consistent large cohorts | "Moderate evidence" (teal) |
| **C** | Limited | Small/observational/mechanistic or mixed human data | "Limited evidence" (amber) |
| **D** | Insufficient / Traditional | Preclinical only, anecdotal, or traditional-use | "Traditional use / insufficient" (grey) |

Traditional-use claims (Ayurveda/TCM) are permitted **only** when labeled Grade D and never presented as clinical evidence (§14.4, §37.1).

## 2. Source hierarchy (§37.1)
Systematic review/meta-analysis > RCT > cohort > case-control > mechanistic/animal/in-vitro > expert opinion/traditional. Each source labeled with its level.

## 3. Citation rules (§37.2, §72.6)
- Every health claim traces to a **real, resolvable** source (PMID/DOI/URL). The genomics/interactions/topic data already carry real PMIDs — the standard exists; enforce it everywhere.
- **Never fabricate a citation.** A claim without a locatable source is softened to reflect uncertainty or removed.
- One citation registry (structured) so the same source is referenced consistently and bulk-rechecked for retractions (§37.3, §56.2).
- Spot-resolve a random sample of citations every review cycle (anti-fabrication gate, §72.6).

## 4. Visibility (§38.2)
Grades are visible to users (badge — wire or replace the built `EvidenceBadge` component) **and** machine-readable in `Claim`/`MedicalWebPage` schema. Unstated/inconsistent grade = QA failure (§38.4).

## 5. Contested topics (§38.5)
Fats/coconut/ghee (§21.3), A1/A2 milk (§22.2), detox (§23.3), seed cycling (§17.3) MUST show the grade and present both sides (§68 evenhandedness). Never launder weak evidence as strong.

## 6. Why this is also the growth strategy (§38.3)
[EVIDENCE — Princeton GEO] statistics +~30–37%, cited sources +~28–30%, expert quotation up to +~40% AI-visibility. Evidence density = the trust strategy AND the citation strategy. Prefer precise sourced numbers over qualitative prose.

## 7. Automation hook (§37.5, experimental)
Periodic check of cited PMIDs against PubMed for retraction/erratum flags → editorial queue (§55).

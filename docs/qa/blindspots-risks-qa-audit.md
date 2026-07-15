# Blind-Spot Log, Risk Register, QA Framework & Nothing-Left-Behind Audit (MRS §62, §72, §73)

**Date:** 2026-07-13.

## 1. Blind-Spot & Assumptions Log (§62)

| Assumption / blind spot | Risk if wrong | Verified? |
|---|---|---|
| Clinic-page count = "coverage" | 82% of site is near-dup thin content → sitewide quality drag | **Verified true risk** (49KB near-identical). Decision pending (§5.5). |
| Migrated code works | broken prod | **Verified** — build green, 2,069 pages, check clean. |
| Existing schema/llms files correct | stale/misleading AI signals | **Verified + fixed** — schema now on all YMYL; llms.txt re-pointed. |
| Data holds lots of unrendered entities | wasted "quick win" | **Disproved** — arrays render 100%; only 8 conditions/38 herbs exist. |
| `src/data`/`src/lib` duplicated | data drift | **Disproved** — it's a symlink. |
| Contested science presented as settled | trust/credibility loss | Enforced via §38.5 grading + evenhandedness. |
| Accessibility gaps = AI-parse gaps | lost citations + a11y risk | Open — WCAG 2.2 AA audit pending (§51.2). |
| `src/lib` untracked in git | no recovery point | **Verified** — must commit (user, on Mac). |
| Single H2 on templates | breaks answer-first chunking | **Verified** — heading-tree expansion pending (§4.4h). |

Challenge to the spec itself (§62.3): the clinic-page strategy and the topic↔condition duplication are the two decisions most likely wrong in the original build; both flagged for owner ruling.

## 2. Risk Register (§72.7)

| Risk | Likelihood | Impact | Mitigation | Owner |
|---|---|---|---|---|
| Scaled thin-content penalty (clinic pages) | High | High | consolidate/noindex per §5.5 before scaling | Dr. Shilpa |
| Fabricated/overclaimed health info | Med | Critical (trust+legal) | evidence grading §38 + citation gate §72.6 + clinical review §55 | Clinical reviewer |
| Migration broke prod | Low (verified green) | High | build+check in CI, commit baseline | Dev |
| Personalization/privacy (DPDP) | Med | High | consent, purpose limitation, edge/client-side §52.2 | Dev + legal |
| Citation-source rot / retractions | Med | Med | periodic PMID recheck §37.5 | Editorial |
| Native-binding/build env drift | Med | Med | `npm install` on clean env; document §9 of audit | Dev |
| Duplicate topic IDs at data layer | Low | Low | dedupe done in code; clean data for permanence | Dev |

High-stakes validation (clinical, legal) uses an independent reviewer, not self-review (§72.8).

## 3. Quality Assurance Framework (§72) — CI gates

- **Schema (§72.1):** every JSON-LD validates (schema.org + Rich Results); schema for non-visible content fails build. *(Session: all emitted blocks parse-validated.)*
- **Content (§72.2):** every health claim has resolvable citation + grade; mandatory blocks present; orphan pages (<2 inlinks) warn; missing reviewer on YMYL fails.
- **Data (§72.3):** every composition/RDA value has a source ID + range check; recipe/plan nutrition recomputed must match stated.
- **Technical (§72.4):** routes render 0 exceptions; `astro check`/`tsc` = 0 errors *(currently green)*; CWV budget gates; no broken internal links; sitemaps/llms reference only real URLs.
- **Consistency (§72.5):** three graph renderings match; entity names/credentials consistent site + external; brand boilerplate identical.
- **Anti-fabrication (§72.6):** automated + human check — no invented citation, fake review/author, or date-bump without diff.

Wire these as a CI pipeline (GitHub Actions): `astro check` → `astro build` → JSON-LD validator → link check → citation-resolve sample. Fail the build on any gate.

## 4. Final "Nothing Left Behind" Audit (§73)

| # | Check | State |
|---|---|---|
| 73.1 | Every entity class §12–§34 evaluated (build/extend/defer + count vs target) | ✅ gap-analysis.md |
| 73.2 | Every capability §35–§58 assessed | ✅ gap-analysis.md |
| 73.3 | Zero YMYL page without schema/author/reviewer/grades/citations/disclaimer | ✅ all YMYL templates schema'd; disclaimer present (verify grades on new classes as authored) |
| 73.4 | Three graph renderings from one source, in sync | 🟡 formalize registry (blueprint delivered) + add drift gate |
| 73.5 | Dead/dup code + stubs + stale docs removed/wired | 🟡 dead SEO modules gone; unwired components + README/AGENTS pending |
| 73.6 | Clinic thin-content resolved | 🔴 decision pending (§5.5) |
| 73.7 | Every claim sourced + graded; anti-fabrication sample passed | 🟡 enforced on existing; ongoing for new content |
| 73.8 | 14 deliverables produced, cross-referenced, validated | ✅ see docs/ index below |
| 73.9 | 5 explosion clusters + missing-opportunity register produced | ✅ competitive-and-growth.md |
| 73.10 | Blind spots + assumptions logged incl. critique of spec | ✅ §1 above |
| 73.11 | CWV/schema/route/TS checks pass in CI | 🟡 pass locally; wire CI |
| 73.12 | Evidence-vs-experimental distinction preserved | ✅ throughout |
| 73.13 | Systems hold at 10× with small team | 🟡 depends on registry migration §65.2 |
| 73.14 | Regulatory compliance visible (FSSAI/ASCI/DPDP/WCAG) | 🟡 disclaimers present; full compliance pass pending §69 |
| 73.15 | "What major domain/dimension NOT yet evaluated?" | Answered: **none of the MRS classes are unevaluated**; open items are execution (content authorship + clinic decision + registry migration), not blind spots. |

**Verdict:** planning/structure layer complete; YMYL schema layer complete and verified; remaining work is content authorship (needs clinical sourcing), the clinic-page decision, registry migration, and CI wiring — all owner/dev tasks, none blocked by unknowns.

## 5. Deliverables index (§71)
- `docs/audit/VERIFIED_AUDIT_2026-07-12.md` + `existing-state.json` — §4/§71.1
- `docs/analysis/gap-analysis.md` — §5/§71.2, incl. missing-content inventory §5.4/§71.3
- `docs/spec/master-taxonomy.md` — §9/§71.5 + IA/category map §7/§71.4
- `docs/spec/knowledge-graph-blueprint.md` — §8/§71.6 + entity relationship matrix §45/§71.7
- `docs/spec/page-template-specs.md` — §10.2/§71.8
- `docs/spec/evidence-grading-and-citations.md` — §37/§38
- `docs/spec/content-production-and-writing.md` — §54/§55/§60/§71.9
- `docs/analysis/competitive-and-growth.md` — §59/§61/§68/§71.13
- `docs/qa/blindspots-risks-qa-audit.md` — §62/§72/§73/§71.11/§71.12/§71.14
- `docs/execution/EXECUTION_LEDGER.md` — all §1–§74 status
- Roadmap §74 — in MASTER_REQUIREMENT_SPECIFICATION.md

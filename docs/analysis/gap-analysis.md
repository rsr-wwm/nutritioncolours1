# Gap Analysis & Missing-Content Inventory (MRS §5)

**Date:** 2026-07-12 · **Baseline:** verified build (2,069 pages, git HEAD `bc03fcf`). Current counts are measured from the repo; targets are from MRS §12–§34 (minimums, not caps).

## 1. Coverage matrix — entity classes

Status key: ✅ exists & schema'd · 🟡 exists, thin · 🔴 missing entirely · 🧩 dead/partial code.

| MRS § | Class | Current | Target | Status | Gap | Effort | Phase |
|---|---|---|---|---|---|---|---|
| §12 | Conditions/Diseases | 8 condition + 229 topic pages | ≥120 canonical diseases | 🟡 | reconcile topic↔condition; author to ≥120 | XL | P2→P3 |
| §14 | Herbs | 38 | ≥150 | 🟡 | +112 evidence-graded | XL | P3 |
| §18 | Spices | in herbs data | ≥60 | 🟡 | split culinary/medicinal | L | P3 |
| §15 | Vegetables | 0 | ≥120 | 🔴 | new class | XL | P3 |
| §16 | Fruits | 0 | ≥100 | 🔴 | new class | XL | P3 |
| §17 | Seeds | 0 | ≥40 | 🔴 | new class | L | P3 |
| §19 | Grains (incl. millets) | 0 | ≥40 | 🔴 | new class; millets priority | L | P3 |
| §20 | Pulses & legumes | 0 | ≥40 | 🔴 | new class | L | P3 |
| §21 | Oils & fats | 0 | ≥30 | 🔴 | new class | M | P3 |
| §22 | Dairy & alternatives | 0 | ≥40 | 🔴 | new class | M | P3 |
| §23 | Drinks & beverages | 0 | ≥40 | 🔴 | new class | M | P3 |
| §24 | Functional foods | 0 | ≥30 | 🔴 | new class | M | P3 |
| §25 | Fermented foods | 0 | ≥25 | 🔴 | new class | M | P3 |
| §27 | Vitamins | 0 dedicated | 13 + forms | 🔴 | new class | M | P3 |
| §28 | Minerals | 0 dedicated | ~15 | 🔴 | new class | M | P3 |
| §29 | Phytonutrients | 0 | ~30 families | 🔴 | new class | M | P3 |
| §30 | Bioactive compounds | 0 | ~12 | 🔴 | new class | M | P3 |
| §31 | Organs/systems | 0 | ≥15 | 🔴 | hub class | M | P3 |
| §32 | Life-stages | 0 dedicated | ~11 | 🔴 | new class | M | P3 |
| §33 | Lifestyles/diets | vegan cluster only | ~15 | 🟡 | extend | M | P3 |
| §34 | Goals | in topics | ~14 | 🟡 | reconcile w/ topics | M | P2 |
| §26 | Nutrient DB (data model) | partial | full | 🔴 | RDA/UL registry | L | P2 |
| §36 | Recipes | 40 | ongoing | ✅🟡 | enrich to graph | M | P3 |
| §35 | Meal plans | 4 plans | goal/condition matrix | 🟡 | generate from graph | L | P3 |
| §50 | Tools/calculators | tools page | ≥9 indexable | 🟡 | per-tool URLs | M | P3 |
| §10.5 | Glossary | 1 page | ≥300 terms | 🟡 | DefinedTerm each | L | P3 |

## 2. Coverage matrix — capabilities/structure

| MRS § | Capability | Status | Gap |
|---|---|---|---|
| §46 | Schema on YMYL | ✅ **complete** (this session: conditions, herbs, clinics, genomics, interactions, 229 diseases) | maintain in CI |
| §8 | Knowledge graph (entity registry) | 🟡 entityGraph.ts live but ad-hoc | formalize registry (blueprint delivered) |
| §44 | Internal linking engine | 🟡 internalLinkEngine.ts live | extend to all templates |
| §41 | FAQ saturation | 🟡 present on condition/herb/topic | extend to all money pages |
| §43 | Fan-out matrix | 🔴 | build matrix (P2) |
| §42 | llms.txt on-site links | ✅ (this session) | keep fresh |
| §42.6 | Hallucinated-URL capture | 🔴 | 404 log workflow (doc delivered) |
| §67 | hreflang | 🔴 client-side only | server-render |
| §7 | Custom 404 | 🟡 exists | verify + wire capture |
| §56 | Content-decay CI / telemetry | 🔴 stubs | real logging |
| §5.5 | Clinic thin-content | 🔴 1,701 near-dupes | consolidate/noindex decision |
| §72 | CI validation gates | 🟡 build+check run manually | wire to CI |
| repo | git baseline | 🔴 src/lib untracked | commit (user, on Mac) |

## 3. Missing-content inventory (§5.4) — programmatic order-of-magnitude

Derived from taxonomy targets minus current build. This is the URL backlog, not hand-estimated.

| Bucket | Missing pages (min) |
|---|---|
| Entity reference pages (vegetables 120, fruits 100, herbs +112, spices 60, seeds 40, grains 40, pulses 40, oils 30, dairy 40, beverages 40, functional 30, fermented 25) | ~677 |
| Nutrient pages (vitamins 13, minerals 15, phytonutrients 30, bioactives 12) | ~70 |
| Condition/disease pages (to ≥120 from 8 canonical) | ~112 |
| Organ/system hubs (15) + life-stage (11) + lifestyle (15) + goal (14) | ~55 |
| Comparison pages ("X vs Y", ≥1 per confusable pair, est.) | ~400 |
| "Best foods for [condition/goal]" fan-out pages (≈120 conditions × top intents) | ~500 |
| Glossary terms (≥300) | ~300 |
| Hub/pillar pages (per §7.2 IA) | ~30 |
| **Total new indexable URLs (minimum)** | **~2,200** |

Full enumerated slug list is generated from `docs/spec/master-taxonomy.md` (the taxonomy is the source; regenerate the CSV by diffing taxonomy slugs against `dist/` route list). At target depth with comparison + fan-out saturation, the realistic ceiling is 10,000–15,000 URLs (MRS §3.1).

## 4. Priority verdict

1. **P2 (structure):** formalize entity registry + nutrient DB model; reconcile topic↔condition; build fan-out matrix; resolve clinic thin-content (§5.5).
2. **P3 (content, in leverage order per §59):** millets/grains → spices → fermented → diabetes-friendly fruits → vegan gap-closing → then the remaining food/nutrient classes. All require real sourcing + clinical review — **not fabricated**.
3. **Cross-cutting:** hreflang, 404 capture, glossary, tools-as-assets, telemetry — parallel-safe.

## 5. The clinic-page decision (§5.5) — recommendation

1,701 near-identical location pages (~49 KB each, verified near-duplicate) are the top scaled-thin-content liability (82% of the site). **Recommended:** keep only pages with genuine local differentiation (regional produce/timezone/currency data already exists per `ORIGINAL_REQUEST.md`), consolidate the rest into state/city hubs, and `noindex` any page that cannot carry unique local value. Decision owner: Dr. Shilpa Thakur. Do this before mass new-content expansion so quality isn't diluted site-wide.

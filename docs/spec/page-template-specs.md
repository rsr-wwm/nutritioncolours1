# Page-Template Specifications (MRS §10.2)

**Date:** 2026-07-13. One spec per content type. Each defines required blocks (in order), schema, links, and cadence. Missing a mandatory block = build failure for that page (§72.2). All templates obey the shared per-entity contract (MRS Part D header) and answer-first rule (§39.2): every H2 answers its heading in the first 40–80 words as a standalone chunk.

## Common requirements (all types)
- One `<h1>`; multi-H2 logical tree (each major sub-answer its own H2 — fixes the current single-H2 thinness on condition pages, §4.4h).
- `BreadcrumbList` + visible breadcrumbs. Descriptive section IDs (`#foods-to-avoid`).
- Author + clinical reviewer (Dr. Shilpa Thakur) + last-reviewed date visible above the fold on YMYL.
- Citations block (resolvable PMIDs/DOIs). Evidence grade badges where claims appear.
- FAQ block (FAQPage schema, verbatim `acceptedAnswer`).
- Internal links auto-generated from the entity graph (neighbors).

## 1. Condition / Disease page (money page) — §12
Blocks: definition (BLUF) → at-a-glance card (ICD-10/MeSH, key biomarkers) → root cause → foods to favor / limit (evidence-graded table) → key nutrients → drug-interaction cautions → life-stage variants → sample day plan link → myth-vs-fact → FAQ → reviewer + citations.
Schema: `MedicalWebPage`+`MedicalCondition`+`Claim`+`FAQPage`+`Physician`+`Speakable`+`BreadcrumbList`. *(Live.)*
Cadence: review ≤90 days.

## 2. Food entity page (vegetable/fruit/herb/spice/seed/grain/pulse/oil/dairy/beverage/functional/fermented) — §13–§25
Blocks: definition → composition card (per 100g/serving, USDA-FDC/IFCT sourced) → key bioactives → GI/GL (where relevant) → evidenced health effects (graded table) → preparation intelligence (how cooking/soaking/fermenting changes profile) → safety/flags (oxalate/purine/goitrogen/FODMAP/allergen) → comparisons → recipes/meal-plan links → FAQ → reviewer + citations.
Schema: `MedicalWebPage`(or `Article`)+ food entity (`Thing`/health-lifesci)+`Claim`+`FAQPage`+`BreadcrumbList`. Composition → `additionalProperty`/`NutritionInformation`.
Cadence: ≤180 days.

## 3. Nutrient page (vitamin/mineral/phytonutrient/bioactive) — §26–§30
Blocks: definition → functions → RDA/AI/UL by age+sex+life-stage (ICMR-NIN + IOM/EFSA) → deficiency & toxicity signs → top food sources (ranked, linked) → bioavailability factors (enhancers/inhibitors) → synergies → FAQ → reviewer + citations. Powers "foods high in [nutrient]" fan-out.
Schema: `MedicalWebPage`+`DefinedTerm`+`Claim`+`BreadcrumbList`.

## 4. Organ / system hub — §31
Blocks: how nutrition affects it → protective nutrients/foods (linked, graded) → harmful patterns → related conditions → life-stage notes → FAQ. Acts as internal-link hub.

## 5. Life-stage / Lifestyle / Goal page — §32–§34
Blocks: BLUF → nutrient priorities/RDA shifts (life-stage) or principles+evidence (lifestyle/goal) → foods favor/hinder → gap-closing → sample plan link → realistic-expectations + myth correction → behavior-change note → FAQ.

## 6. Comparison page ("X vs Y for Z") — §10.1 (highest fan-out capture)
Blocks: one-line verdict → comparison table (source row) → when to pick each → evidence grades → FAQ. Schema: `Article`+`ItemList`+`FAQPage`.

## 7. "Best [foods] for [condition/goal]" fan-out page — §43
Blocks: ranked list (each item linked to its entity page, with the graded reason) → how chosen → caveats → FAQ. Schema: `Article`+`ItemList`.

## 8. Recipe — §36
Blocks: BLUF → ingredients (linked to food entities) → steps → times/yield → computed nutrition per serving (from composition data, verified §72.3) → condition/goal tags → "why it works" (graded) → FAQ. Schema: full `Recipe`+`NutritionInformation`.

## 9. Meal plan — §35
Blocks: structure → per-meal items+portions → computed nutrient totals vs target RDA → swaps (allergy/pattern) → shopping list → prep notes. Generated from graph, math verified.

## 10. Tool / calculator page — §50
Blocks: BLUF → the tool (minimal island, protect INP) → formula + source shown → interpretation → embed snippet → FAQ. Each tool its own indexable URL.

## 11. Glossary term — §10.5
One-sentence "X is Y that Z" definition first → 2–3 sentence expansion → related terms. Schema: `DefinedTerm` + `#term` anchor.

## 12. Research summary — §37
Plain-language BLUF → study design + population → findings (with numbers) → evidence grade → limitations → link to primary source (PMID/DOI). Schema: `Article`+`Claim`+`citation`.

## 13. Myth-vs-fact — §10.1
`Myth: [claim]. Fact: [sourced counter].` per block. High citability; use for contested topics (fats §21, A1/A2 §22, detox §23).

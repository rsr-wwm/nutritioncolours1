# Master Taxonomy & Information Architecture (MRS §7, §9, §11)

**Date:** 2026-07-13. Single source from which the missing-content inventory and sitemap are derived. Validated against USDA food groups, FAO/WHO, and MeSH where noted.

## 1. URL doctrine (§7.1)

Lowercase, hyphenated, ≤4 segments, no params on indexable URLs, one trailing-slash policy via 301. **Existing URLs must not break** — any restructure ships a 301 map. Keep current working routes (`/condition/`, `/herb/`, `/topic/`, `/recipe/`, `/genomics/`, `/interactions/`, `/clinic/`, `/plans/`, `/vegan/`, `/knowledge/*`) and add new class roots alongside.

## 2. Top-level class tree (hub → spoke)

```
/                                   home
/diseases/            (= /knowledge/health-topics, relabeled)   [§12] hub
  /condition/[id]                   clinical disease entity (canonical)
  /topic/[id]                       disease/goal protocol page
/foods/                             [§13] hub
  /foods/vegetables/[id]            [§15]
  /foods/fruits/[id]                [§16]
  /foods/herbs/[id]   (= /herb/[id])[§14]
  /foods/spices/[id]                [§18]
  /foods/seeds/[id]                 [§17]
  /foods/grains/[id]                [§19]  (millets sub-cluster)
  /foods/pulses/[id]                [§20]
  /foods/oils/[id]                  [§21]
  /foods/dairy/[id]                 [§22]
  /foods/beverages/[id]             [§23]
  /foods/functional/[id]           [§24]
  /foods/fermented/[id]             [§25]
/nutrients/                         [§26] hub
  /nutrients/vitamins/[id]          [§27]
  /nutrients/minerals/[id]          [§28]
  /nutrients/phytonutrients/[id]    [§29]
  /nutrients/bioactives/[id]        [§30]
/organs/[id]                        [§31] hub-class (heart, liver, kidney, gut…)
/life-stages/[id]                   [§32]
/lifestyles/[id]                    [§33] (vegan cluster migrates here)
/goals/[id]                         [§34]
/meal-plans/[id]                    [§35]
/recipe/[id]                        [§36]
/tools/[id]                         [§50] each tool its own URL
/glossary/[term]                    [§10.5] DefinedTerm
/research/[id]                      [§37] study summaries
/clinic/[id], /clinic/[city]/[disease]   location (see §5.5 decision)
```

Every hub is a real content page (definition + taxonomy + top entities + comparison table), never a bare link list (§7.3). Breadcrumbs + `BreadcrumbList` on 100% of entity pages (§7.5).

## 3. Class taxonomies (target counts = MRS minimums)

**Vegetables (§15, ≥120)** — leafy greens · cruciferous · root/tuber · allium · gourds · nightshades · legume-vegetables · sea vegetables · Indian regional (moringa/drumstick, tinda, parwal, kathal…). Dimensions: nutrient density, key phytonutrients, GI, oxalate/purine/goitrogen/lectin flags, seasonality, raw-vs-cooked, regional names.

**Fruits (§16, ≥100)** — pomes · stone · berries · citrus · tropical (mango, papaya, guava, jackfruit) · melons · dried. Dimensions: sugar:fiber, GI/GL, vit-C/polyphenols, fresh/dried/juice, FODMAP.

**Herbs (§14, ≥150)** & **Spices (§18, ≥60)** — split by primary use, cross-linked. Dimensions: active constituents, tradition system, evidence grade/benefit, dosage form, standardized potency, drug interactions, contraindications.

**Seeds (§17, ≥40)** · **Grains (§19, ≥40, millets priority)** · **Pulses (§20, ≥40)** · **Oils/fats (§21, ≥30)** · **Dairy+alts (§22, ≥40)** · **Beverages (§23, ≥40)** · **Functional (§24, ≥30)** · **Fermented (§25, ≥25)** — dimensions per MRS.

**Nutrients:** Vitamins (§27) all 13 + forms (D2/D3, B12 forms, K1/K2, folate vs folic acid, provitamin-A carotenoids). Minerals (§28): Ca P Mg Na K Cl Fe Zn Cu Mn Se I Cr Mo. Phytonutrients (§29): polyphenols (flavonoids, anthocyanins, catechins, resveratrol), carotenoids, glucosinolates/isothiocyanates, organosulfurs, phytosterols, saponins, tannins. Bioactives (§30): curcumin, piperine, EGCG, sulforaphane, quercetin, berberine, allicin, capsaicin, betalains, beta-glucan, inulin, resistant starch.

**Organs (§31, ≥15):** heart, liver, kidney, gut/microbiome, brain, skin, eyes, bones, joints, thyroid, pancreas, lungs, immune, reproductive, blood.

**Life-stages (§32):** pregnancy (per-trimester), lactation, infancy/weaning, toddler, child, adolescent, adult, fertility/planning, perimenopause, menopause, elderly.

**Lifestyles (§33):** vegetarian, vegan, Jain, eggetarian, keto, low-carb, Mediterranean, DASH, IF, Ayurvedic, gluten-free, low-FODMAP, diabetic, renal, athletic.

**Goals (§34):** weight loss/gain, muscle, fat loss, gut reset, energy, immunity, skin/hair, longevity, cognition, athletic, blood-sugar, cholesterol, stress/sleep.

## 4. Cross-cutting dimensions (attributes, NOT page trees — §9.4)

dietary pattern · region (India-state/global) · season · evidence grade · preparation method. These are filters/attributes on entity records — never separate URL trees (prevents combinatorial page explosion; faceted views stay `noindex`, §7.6).

## 5. Naming & term rules (§9.3)

Every taxonomy term carries: canonical English name · Hindi/vernacular names (§67) · synonyms/misspellings (feeds search + fan-out) · one-sentence definition (feeds glossary §10.5). Slugs: lowercase-hyphenated, singular, no stopwords where avoidable, stable (never renamed without 301).

## 6. External-standard validation (§9.5)

Food groups mapped to USDA + FAO; Indian composition to IFCT 2017; conditions to MeSH/ICD-10/SNOMED (the entityGraph already maps several — extend); nutrients to ICMR-NIN RDA 2020 + IOM/EFSA. Deviations documented inline in the entity registry.

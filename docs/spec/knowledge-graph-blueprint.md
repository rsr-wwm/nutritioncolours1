# Knowledge Graph Blueprint & Entity Relationship Matrix (MRS §8, §45)

**Date:** 2026-07-13. Formalizes the entity registry that `src/lib/seo/entityGraph.ts` + `semantic_links.json` + `public/knowledge-graph.jsonld` already seed. **Extend these, do not rebuild** (they are wired and live).

## 1. Entity registry — canonical record (§8.1)

Every entity gets one record. Proposed shape (migrate the monolithic `topics.ts`/`clinical_databases.ts` into per-entity records — §65.2):

```ts
interface Entity {
  id: string;              // stable slug
  type: 'condition'|'food'|'nutrient'|'compound'|'organ'|'lifeStage'|'goal'|'lifestyle'|'recipe'|'herb'|'spice'|'term'|'clinic'|'person';
  subtype?: string;        // e.g. food→'vegetable', nutrient→'vitamin'
  canonicalUrl: string;
  names: { canonical: string; synonyms: string[]; vernacular?: Record<string,string> }; // hi, etc.
  externalIds?: { wikidata?: string; mesh?: string; snomed?: string; icd10?: string; usdaFdc?: string; rxnorm?: string; dbsnp?: string };
  definition: string;      // one-sentence "X is Y that Z" (glossary + schema)
  evidenceGrade?: 'A'|'B'|'C'|'D';   // for claim-bearing entities
  citations?: { text: string; url: string; pmid?: string }[];
  clinicalReview?: { reviewedBy: string; practitionerId: string; lastUpdated: string };
  data?: Record<string, unknown>;    // type-specific (composition, RDA, dosage…)
}
```

## 2. Relationship types (§8.2) — first-class, typed, directional, evidence-graded

| Relationship | From → To | Evidence-graded? | Renders as |
|---|---|---|---|
| `contains` | food → nutrient (qty/100g) | n/a (sourced) | composition table + schema |
| `richSourceOf` | food → nutrient | n/a | "top sources" block + internal link |
| `supports` / `mayWorsen` | food/nutrient → condition | **yes (A–D)** | health-effect table + `Claim` |
| `interactsWith` | herb/food → drug | **yes** | interaction block + `Drug` schema |
| `contraindicatedFor` | herb/food → condition/state | **yes** | safety block |
| `partOf` | entity → taxonomy parent | n/a | breadcrumb + `isPartOf` |
| `synergizesWith` | nutrient → nutrient (D+K2, C+iron) | yes | synergy note |
| `inhibitsAbsorptionOf` | compound → nutrient (phytate→iron) | yes | bioavailability note |
| `affectedBy` | nutrient → genomic variant | yes | nutrigenomics cross-link |
| `usedIn` | food → recipe | n/a | recipe links |
| `beneficialFor` | food → organ/lifeStage/goal | yes | "good for" block |
| `substituteFor` | food → food | n/a | swaps block |

Relationships are **bidirectional in data, navigable both ways on-page** (food→condition AND condition→food) — §45.2.

## 3. Three synchronized renderings (§8.3) — one source, generated

1. **Page-level JSON-LD `@graph`** with `@id` cross-links (Organization → WebSite → WebPage → entity nodes), `about`/`mentions` declared explicitly. *(Live today on conditions/herbs/clinics/genomics/interactions/diseases.)*
2. **Site-wide** `public/knowledge-graph.jsonld`.
3. **Internal-linking engine input** (`internalLinkEngine.ts`).

Build-time generation from the registry; **drift between the three = build failure** (add to CI, §72).

## 4. Entity Relationship Matrix (§45.1) — rendering contract

| Relationship | Schema property | On-page block | Internal-link anchor |
|---|---|---|---|
| supports/mayWorsen | `Claim` + `MedicalWebPage.about` | "Foods to favor / limit" table | descriptive ("magnesium for migraine") |
| contains/richSourceOf | `NutritionInformation` / `additionalProperty` | composition card | "foods high in [nutrient]" |
| interactsWith | `Drug` + `foodWarning` | interaction table | drug/herb name |
| synergizesWith / inhibitsAbsorptionOf | `additionalProperty` | bioavailability note | nutrient pair |
| affectedBy | cross-link | nutrigenomics box | gene/variant |
| beneficialFor | `about`/`mentions` | "good for [organ]" | organ/goal |

`@reverse` and `Claim` (external corroboration) — pilot on a subset, measure (§45.4, experimental).

## 5. Wikidata alignment (§8.6)

Brand + Dr. Shilpa Thakur + key concepts get Wikidata items; every entity links out via `sameAs` (dbSNP/MeSH/ICD-10/SNOMED/USDA-FDC). The genomics/interactions schema added this session already emits dbSNP `sameAs` — extend the pattern to all classes.

## 6. Migration note (§65.2)

The registry must come from a structured store (Astro content collections or JSON per entity), not the 17.8k-line `topics.ts` monolith, so a single data fix regenerates pages + schema + links + llms files (§54.3). This is the top scale dependency for everything in §12–§34.

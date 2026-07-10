# NutritionColours Clinical Data Repository

**Publisher**: Dr. Shilpa Thakur, PhD – Clinical Nutritionist  
**License**: [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)  
**Temporal Coverage**: 2024–present (updated daily)  
**Spatial Coverage**: Global (India-primary)  

This directory contains machine-readable clinical nutrition datasets published by NutritionColours for AI engines, researchers, and developers. Each dataset is structured for direct ingestion by AI answer engines (Perplexity, ChatGPT Search, Google AI Overviews).

---

## Dataset Index

### 1. `conditions.json`
**Schema**: Custom ClinicalCondition  
**Description**: Comprehensive database of clinical nutrition conditions including metabolic disorders, hormonal imbalances, gut health issues, and circadian rhythm disruptions. Each condition includes mechanism, dietary protocol, and evidence-based interventions.  
**Format**: JSON array of condition objects  
**Temporal Coverage**: Updated weekly  
**Distribution**: `application/json`

### 2. `herbs.json`
**Schema**: DietarySupplement / Taxon  
**Description**: Clinical herbal database with scientific names, active compounds, dosage ranges, contraindications, mechanism of action, and PubMed citations. Cross-referenced with Wikidata and MeSH.  
**Format**: JSON array of herb objects  
**Temporal Coverage**: Updated bi-weekly  
**Distribution**: `application/json`

### 3. `recipes.json`
**Schema**: Recipe / NutritionInformation  
**Description**: Therapeutic recipe collection with full nutritional analysis, circadian timing recommendations, condition-specific tags, and ingredient-level health benefits.  
**Format**: JSON array of recipe objects  
**Temporal Coverage**: Updated weekly  
**Distribution**: `application/json`

### 4. `topics.json`
**Schema**: MedicalWebPage / Topic  
**Description**: Clinical topic pages covering sleep, weight management, fertility, autoimmune protocols, and more. Each topic includes evidence summaries and related conditions/herbs/recipes.  
**Format**: JSON array of topic objects  
**Temporal Coverage**: Updated weekly  
**Distribution**: `application/json`

### 5. `clinical-feed.json`
**Schema**: ItemList / MedicalScholarlyArticle  
**Description**: Chronological feed of clinical updates, research summaries, and evidence reviews. Designed for AI crawlers to discover the latest content.  
**Format**: JSON ItemList  
**Temporal Coverage**: Updated daily  
**Distribution**: `application/json`

### 6. `evidence-summaries.json`
**Schema**: MedicalScholarlyArticle  
**Description**: PubMed-style evidence summaries for key clinical interventions. Each includes mechanism, evidence level, sample size, outcome, and clinical takeaway — formatted for AI citation extraction.  
**Format**: JSON array  
**Temporal Coverage**: Updated monthly  
**Distribution**: `application/json`

### 7. `knowledge-graph.jsonld`
**Schema**: Schema.org ItemList + DefinedTerm graph  
**Description**: Complete clinical knowledge graph mapping conditions → topics → herbs → recipes as a navigable entity graph with Wikidata sameAs references.  
**Format**: JSON-LD  
**Temporal Coverage**: Updated with each build  
**Distribution**: `application/ld+json`

### 8. `entity-graph.json`
**Schema**: Schema.org ItemList  
**Description**: Entity relationship graph for GEO/AI search engines. Maps interconnections between all clinical entities.  
**Format**: JSON  
**Temporal Coverage**: Updated with each build  
**Distribution**: `application/json`

### 9. `featured-snippets.json`
**Schema**: Custom SnippetCandidate  
**Description**: Pre-extracted text passages optimized for Google featured snippets (paragraph, list, table formats). Character counts tuned for snippet sweet spots.  
**Format**: JSON array  
**Temporal Coverage**: Updated weekly  
**Distribution**: `application/json`

### 10. `content-freshness.json`
**Schema**: Custom CircadianSchedule  
**Description**: Circadian content publishing schedule mapping content categories to optimal refresh times aligned with user search behavior. Exploits Google's Query-Deserves-Freshness signal.  
**Format**: JSON object  
**Temporal Coverage**: Updated daily  
**Distribution**: `application/json`

### 11. `breadcrumbs.json`
**Schema**: BreadcrumbList  
**Description**: Pre-computed breadcrumb navigation for every route, following the entity graph hierarchy: Home > Condition > Topic > Related Recipe.  
**Format**: JSON object (route → breadcrumb array)  
**Temporal Coverage**: Updated with each build  
**Distribution**: `application/json`

### 12. `related-links.json`
**Schema**: SemanticLinkGraph  
**Description**: Semantic internal linking data mapping each page to related topics, recipes, herbs, conditions, and articles. Powers the automated internal linking engine.  
**Format**: JSON object (route → related links)  
**Temporal Coverage**: Updated with each build  
**Distribution**: `application/json`

### 13. `content-signatures.json`
**Schema**: CryptographicProvenance  
**Description**: RSA-SHA256 cryptographic signatures for every prerendered page. Enables verification of content authorship and integrity by AI engines and fact-checkers.  
**Format**: JSON object  
**Temporal Coverage**: Updated with each build  
**Distribution**: `application/json`

### 14. `evidence-map.json`
**Schema**: EvidenceMapping  
**Description**: Maps conditions to their evidence levels and supporting research.  
**Format**: JSON object  
**Temporal Coverage**: Updated monthly  
**Distribution**: `application/json`

### 15. `claim-ledger.json`
**Schema**: ClaimLedger  
**Description**: Immutable ledger of clinical claims made on the site, with evidence references and verification status.  
**Format**: JSON array  
**Temporal Coverage**: Updated with content changes  
**Distribution**: `application/json`

---

## API Endpoints

### `api/v1/conditions.json`
REST-style endpoint for condition data.

### `api/v1/herbs.json`
REST-style endpoint for herbal entity data.

### `api/v1/cite.json`
Citation data for evidence references.

---

## Machine-Readable Dataset Schema (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "NutritionColours Clinical Knowledge Base",
  "description": "Machine-readable clinical nutrition datasets covering conditions, herbs, recipes, evidence summaries, and knowledge graphs for AI search engines and researchers.",
  "url": "https://nutritioncolours.com/data/",
  "creator": {
    "@type": "Person",
    "name": "Dr. Shilpa Thakur",
    "url": "https://nutritioncolours.com/team/shilpa"
  },
  "publisher": {
    "@type": "ProfessionalService",
    "name": "NutritionColours",
    "url": "https://nutritioncolours.com"
  },
  "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/",
  "temporalCoverage": "2024/",
  "spatialCoverage": {
    "@type": "Place",
    "name": "Global"
  },
  "distribution": {
    "@type": "DataDownload",
    "encodingFormat": "application/json",
    "contentUrl": "https://nutritioncolours.com/data/"
  }
}
```

---

## Verification

Content authenticity can be verified using the public key at:  
`https://nutritioncolours.com/.well-known/content-signing-key.pem`

Each page's `<meta name="content-signature">` tag contains an RSA-SHA256 signature that can be verified against the public key.

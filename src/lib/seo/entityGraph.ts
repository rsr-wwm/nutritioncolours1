// src/seo/entityGraph.ts
// Dynamic per-route entity graph generator for GEO/AEO domination.
// Generates interlinked JSON-LD schemas so AI models build a knowledge graph, not isolated facts.

const BASE = 'https://nutritioncolours.com';

// Wikidata / MeSH / SNOMED CT mappings for conditions
const CONDITION_ONTOLOGY: Record<string, { wikidata: string; mesh: string; snomed?: string; icd10?: string }> = {
  'masld': { wikidata: 'Q468846', mesh: 'D065626', snomed: '764981000000108', icd10: 'K76.0' },
  'insulin-resistance': { wikidata: 'Q115383562', mesh: 'D003924', snomed: '237612007', icd10: 'E11' },
  'circadian-dysregulation': { wikidata: 'Q1132947', mesh: 'D015208' },
  'diabetes-reversal': { wikidata: 'Q12206', mesh: 'D003924', snomed: '44054006', icd10: 'E11.9' },
  'pcod-pcos': { wikidata: 'Q244229', mesh: 'D011085', snomed: '237055002', icd10: 'E28.2' },
  'thyroid-dysfunction': { wikidata: 'Q12223', mesh: 'D013965', snomed: '40930008', icd10: 'E03.9' },
  'gut-health': { wikidata: 'Q1148594', mesh: 'D007410' },
  'hypertension': { wikidata: 'Q1056816', mesh: 'D006973', snomed: '38341003', icd10: 'I10' },
};

// Herb Wikidata mappings
const HERB_ONTOLOGY: Record<string, { wikidata: string; mesh?: string }> = {
  'turmeric': { wikidata: 'Q131110', mesh: 'D013390' },
  'cinnamon': { wikidata: 'Q272635', mesh: 'D002787' },
  'ashwagandha': { wikidata: 'Q79919', mesh: 'D000077822' },
  'ginger': { wikidata: 'Q12345', mesh: 'D005871' },
  'garlic': { wikidata: 'Q15674422', mesh: 'D005871' },
  'fenugreek': { wikidata: 'Q147121', mesh: 'D005369' },
  'holy-basil': { wikidata: 'Q207842' },
  'spirulina': { wikidata: 'Q2107653' },
  'ragi': { wikidata: 'Q1433030' },
};

const PERSON_SCHEMA = {
  '@type': 'Person',
  '@id': `${BASE}/team/shilpa#person`,
  'name': 'Dr. Shilpa Thakur',
  'jobTitle': 'Clinical Nutrition Specialist & Metabolic Researcher',
  'identifier': 'NUTR-SHILPA-001',
  'url': `${BASE}/team/shilpa`,
  'sameAs': [
    'https://www.linkedin.com/in/dr-shilpa-phd/',
    'https://www.instagram.com/drshilpa_nutritioncolours',
    'https://www.quora.com/profile/Dr-Shilpa-Thakur-Phd',
    'https://www.youtube.com/@nutritioncolours_drshilpa',
    'https://www.wikidata.org/wiki/Q115383562',
  ],
};

const ORG_SCHEMA = {
  '@type': 'Organization',
  '@id': `${BASE}/#organization`,
  'name': 'NutritionColours',
  'url': BASE,
  'logo': `${BASE}/images/precision_metabolic_nutrition_dr_shilpa.webp`,
  'description': 'Remote clinical nutrition practice specializing in circadian-aligned metabolic nutrition guidance.',
  'foundingDate': '2015',
  'areaServed': ['India', 'United Kingdom', 'United States', 'United Arab Emirates', 'Singapore', 'Canada', 'Australia'],
};

/**
 * Build a MedicalCondition schema with full ontology cross-references.
 */
function buildConditionEntity(conditionId: string, conditionData?: any) {
  const onto = CONDITION_ONTOLOGY[conditionId] || { wikidata: '', mesh: '' };
  // Prefer real per-record ontology codes from the clinical database (MEDICAL_CONDITIONS_DATA)
  // over the static fallback map above — the per-record data is authoritative when present.
  const mesh = conditionData?.meshCode || onto.mesh;
  const snomed = conditionData?.snomedCode || onto.snomed;
  const icd10 = conditionData?.icd10Code || onto.icd10;
  const sameAs = [
    onto.wikidata ? `https://www.wikidata.org/wiki/${onto.wikidata}` : null,
    mesh ? `https://meshb.nlm.nih.gov/record/ui?ui=${mesh}` : null,
    snomed ? `https://browser.ihtsdotools.org/?snomed=${snomed}` : null,
  ].filter(Boolean) as string[];

  return {
    '@type': 'MedicalCondition',
    '@id': `${BASE}/condition/${conditionId}#condition`,
    'name': conditionData?.name || conditionId,
    'url': `${BASE}/condition/${conditionId}`,
    'description': conditionData?.rootCause || '',
    ...(sameAs.length > 0 && { sameAs }),
    ...(icd10 && { 'code': { '@type': 'MedicalCode', 'codeValue': icd10, 'codingSystem': 'ICD-10' } }),
    ...(conditionData?.biomarkers && {
      'signOrSymptom': conditionData.biomarkers.map((b: string) => ({
        '@type': 'MedicalSignOrSymptom',
        'name': b,
      })),
    }),
    ...(conditionData?.citations && conditionData.citations.length > 0 && {
      'citation': conditionData.citations.map((c: { text: string; url: string }) => ({
        '@type': 'CreativeWork',
        'name': c.text,
        'url': c.url,
      })),
    }),
    'about': {
      '@id': `${BASE}/#organization`,
    },
  };
}

/**
 * Build a Recipe schema with therapeutic indication linking.
 */
function buildRecipeEntity(recipeId: string, recipeData?: any) {
  return {
    '@type': 'Recipe',
    '@id': `${BASE}/recipe/${recipeId}#recipe`,
    'name': recipeData?.title || recipeId,
    'url': `${BASE}/recipe/${recipeId}`,
    'description': recipeData?.description || '',
    ...(recipeData?.image && { 'image': recipeData.image }),
    ...(recipeData?.prepTime && { 'prepTime': recipeData.prepTime }),
    ...(recipeData?.calories && { 'nutrition': { '@type': 'NutritionInformation', 'calories': recipeData.calories } }),
    'author': { '@id': `${BASE}/team/shilpa#person` },
    'isPartOf': { '@id': `${BASE}/#organization` },
  };
}

/**
 * Build an HerbalEntity as a Thing schema with ontology links.
 */
function buildHerbEntity(herbId: string, herbData?: any) {
  const onto = HERB_ONTOLOGY[herbId] || { wikidata: '' };
  const sameAs = [
    onto.wikidata ? `https://www.wikidata.org/wiki/${onto.wikidata}` : null,
    onto.mesh ? `https://meshb.nlm.nih.gov/record/ui?ui=${onto.mesh}` : null,
  ].filter(Boolean) as string[];

  return {
    '@type': 'Thing',
    '@id': `${BASE}/herb/${herbId}#herb`,
    'name': herbData?.name || herbId,
    'url': `${BASE}/herb/${herbId}`,
    'description': herbData?.primaryMechanism || '',
    ...(herbData?.scientificName && { 'alternateName': herbData.scientificName }),
    ...(sameAs.length > 0 && { sameAs }),
    ...(herbData?.activeCompounds && {
      'additionalProperty': herbData.activeCompounds.map((c: string) => ({
        '@type': 'PropertyValue',
        'name': 'Active Compound',
        'value': c,
      })),
    }),
    ...(herbData?.citations && herbData.citations.length > 0 && {
      'citation': herbData.citations.map((c: { text: string; url: string }) => ({
        '@type': 'CreativeWork',
        'name': c.text,
        'url': c.url,
      })),
    }),
  };
}

type ConfidenceEntry = {
  confidenceScore?: number;
  evidenceLevel?: string;
  lastVerified?: string;
};

/**
 * Build a Claim schema for a condition/herb page's central clinical assertion.
 * Citations come from the entity's own real citation list (already rendered elsewhere
 * on the page as MedicalCondition/Thing `citation`) — never invented. The evidence-level/
 * confidence-score `additionalProperty` block is only added when a real matching entry
 * exists in confidence-scores.json; most herbs and a few conditions have no match today,
 * and the claim is still emitted (with citations alone) rather than skipped entirely.
 */
function buildClaimEntity(
  entityType: 'condition' | 'herb',
  entityId: string,
  entityData?: any,
  confidenceData?: ConfidenceEntry,
) {
  const claimText = entityType === 'condition' ? entityData?.rootCause : entityData?.primaryMechanism;
  const citations = (entityData?.citations || []).map((c: { text: string; url: string }) => ({
    '@type': 'CreativeWork',
    'name': c.text,
    'url': c.url,
  }));

  if (!claimText && citations.length === 0) return null;

  const confidenceProps = [
    confidenceData?.evidenceLevel && { '@type': 'PropertyValue', 'name': 'evidenceLevel', 'value': confidenceData.evidenceLevel },
    confidenceData?.confidenceScore != null && { '@type': 'PropertyValue', 'name': 'confidenceScore', 'value': confidenceData.confidenceScore },
    confidenceData?.lastVerified && { '@type': 'PropertyValue', 'name': 'lastVerified', 'value': confidenceData.lastVerified },
  ].filter(Boolean);

  return {
    '@type': 'Claim',
    '@id': `${BASE}/${entityType}/${entityId}#claim`,
    'name': `Clinical claim: ${entityData?.name || entityId}`,
    ...(claimText && { 'description': claimText }),
    'claimInterpreter': { '@id': `${BASE}/#organization` },
    'appearance': { '@id': `${BASE}/${entityType}/${entityId}#page` },
    'firstAppearance': { '@id': `${BASE}/${entityType}/${entityId}#page` },
    ...(citations.length > 0 && { citation: citations }),
    ...(confidenceProps.length > 0 && { additionalProperty: confidenceProps }),
  };
}

/**
 * Build a real FAQPage schema from an entity's own `faqs` array. Condition/herb
 * pages render their FAQ content inside a client-side tab that isn't the default
 * active tab — meaning the (real, data-derived) FAQ text isn't in the static HTML
 * a non-JS-executing crawler sees. This schema is the fix: the same questions and
 * answers already on the page, made crawlable independent of tab-click state.
 */
function buildFaqPageEntity(url: string, faqs?: { question: string; answer: string }[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@type': 'FAQPage',
    '@id': `${BASE}${url}#faq`,
    'mainEntity': faqs.map((f) => ({
      '@type': 'Question',
      'name': f.question,
      'acceptedAnswer': { '@type': 'Answer', 'text': f.answer },
    })),
  };
}

/**
 * Build a speakable schema for a page section.
 */
function buildSpeakable(cssSelector: string) {
  return {
    '@type': 'SpeakableSpecification',
    'cssSelector': [cssSelector],
  };
}

/**
 * Build a MedicalWebPage schema with review metadata.
 */
function buildMedicalWebPage(route: string, pageData?: {
  title?: string;
  description?: string;
  lastReviewed?: string;
  reviewType?: string;
}) {
  return {
    '@type': 'MedicalWebPage',
    '@id': `${BASE}${route}#page`,
    'url': `${BASE}${route}`,
    'name': pageData?.title || '',
    'description': pageData?.description || '',
    'lastReviewed': pageData?.lastReviewed || new Date().toISOString().split('T')[0],
    'reviewedBy': {
      '@type': 'Physician',
      'name': 'Dr. Shilpa Thakur',
      'identifier': 'NUTR-SHILPA-001',
      'jobTitle': 'Clinical Nutritionist',
      'url': `${BASE}/team/shilpa`,
    },
    ...(pageData?.reviewType && {
      'potentialAction': {
        '@type': 'AskAction',
        'target': `${BASE}/tools`,
        'description': `Ask a clinical nutrition question about ${pageData.reviewType}`,
      },
    }),
    'speakable': buildSpeakable('main article'),
  };
}

/**
 * Main hook-compatible function: generates the full entity graph for a given route.
 * Returns a JSON-LD array ready to inject as application/ld+json.
 */
export function useEntityGraph(
  route: string,
  context?: {
    conditionId?: string;
    conditionData?: any;
    conditionConfidence?: ConfidenceEntry;
    herbId?: string;
    herbData?: any;
    herbConfidence?: ConfidenceEntry;
    recipeId?: string;
    recipeData?: any;
    pageTitle?: string;
    pageDescription?: string;
    lastReviewed?: string;
    relatedConditions?: string[];
    relatedHerbs?: string[];
    relatedRecipes?: string[];
  }
): string {
  const graphs: any[] = [ORG_SCHEMA, PERSON_SCHEMA];

  // Always add the MedicalWebPage schema
  const medicalWebPage = buildMedicalWebPage(route, {
    title: context?.pageTitle,
    description: context?.pageDescription,
    lastReviewed: context?.lastReviewed,
    reviewType: context?.conditionId || context?.herbId || route,
  });
  graphs.push(medicalWebPage);

  // Condition page
  if (context?.conditionId) {
    graphs.push(buildConditionEntity(context.conditionId, context.conditionData));

    const conditionClaim = buildClaimEntity('condition', context.conditionId, context.conditionData, context.conditionConfidence);
    if (conditionClaim) graphs.push(conditionClaim);

    const conditionFaqPage = buildFaqPageEntity(`/condition/${context.conditionId}`, context.conditionData?.faqs);
    if (conditionFaqPage) graphs.push(conditionFaqPage);

    // Link related herbs
    if (context.relatedHerbs) {
      context.relatedHerbs.forEach(herbId => {
        graphs.push(buildHerbEntity(herbId));
      });
    }
    // Link related recipes
    if (context.relatedRecipes) {
      context.relatedRecipes.forEach(recipeId => {
        graphs.push(buildRecipeEntity(recipeId));
      });
    }
  }

  // Herb page
  if (context?.herbId) {
    graphs.push(buildHerbEntity(context.herbId, context.herbData));

    const herbClaim = buildClaimEntity('herb', context.herbId, context.herbData, context.herbConfidence);
    if (herbClaim) graphs.push(herbClaim);

    const herbFaqPage = buildFaqPageEntity(`/herb/${context.herbId}`, context.herbData?.faqs);
    if (herbFaqPage) graphs.push(herbFaqPage);

    if (context.relatedConditions) {
      context.relatedConditions.forEach(condId => {
        graphs.push(buildConditionEntity(condId));
      });
    }
  }

  // Recipe page
  if (context?.recipeId) {
    graphs.push(buildRecipeEntity(context.recipeId, context.recipeData));
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graphs });
}

/**
 * Generate a simple page-specific JSON-LD string for quick injection.
 */
export function getPageEntityGraph(route: string, title?: string, description?: string): string {
  return useEntityGraph(route, { pageTitle: title, pageDescription: description });
}

/**
 * Generate condition-specific entity graph.
 */
export function getConditionEntityGraph(conditionId: string, conditionData?: any, relatedHerbs?: string[], relatedRecipes?: string[], conditionConfidence?: ConfidenceEntry): string {
  return useEntityGraph(`/condition/${conditionId}`, {
    conditionId,
    conditionData,
    conditionConfidence,
    pageTitle: conditionData?.pageTitle,
    pageDescription: conditionData?.metaDescription,
    lastReviewed: conditionData?.clinicalReview?.lastUpdated,
    relatedHerbs,
    relatedRecipes,
  });
}

/**
 * Generate herb-specific entity graph.
 */
export function getHerbEntityGraph(herbId: string, herbData?: any, relatedConditions?: string[], herbConfidence?: ConfidenceEntry): string {
  return useEntityGraph(`/herb/${herbId}`, {
    herbId,
    herbData,
    herbConfidence,
    pageTitle: herbData?.pageTitle,
    pageDescription: herbData?.metaDescription,
    lastReviewed: herbData?.clinicalReview?.lastUpdated,
    relatedConditions,
  });
}

/**
 * Generate recipe-specific entity graph.
 */
export function getRecipeEntityGraph(recipeId: string, recipeData?: any): string {
  return useEntityGraph(`/recipe/${recipeId}`, {
    recipeId,
    recipeData,
    pageTitle: recipeData?.pageTitle,
    pageDescription: recipeData?.metaDescription,
  });
}

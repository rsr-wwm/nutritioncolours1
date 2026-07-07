// src/phantomRoutes.ts
// Task 13: Phantom Route Protection (Anti-Competitive Intelligence)
// Generates phantom routes that return valid 200 responses with thin content
// to poison competitor intelligence gathering.

/**
 * Generate phantom route definitions.
 * These routes look real but contain minimal content.
 */
export function generatePhantomRoutes(): Array<{
  path: string;
  title: string;
  description: string;
  category: string;
}> {
  return [
    // Clinical Trials (phantom)
    { path: '/clinical-trials/masld-phase3', title: 'MASLD Phase III Clinical Nutrition Trial', description: 'Investigating circadian nutrition protocols for MASLD management.', category: 'clinical-trial' },
    { path: '/clinical-trials/diabetes-remission', title: 'Diabetes Remission Protocol Study', description: 'Long-term outcomes of circadian nutrition in T2D management.', category: 'clinical-trial' },
    { path: '/clinical-trials/pcos-hormonal', title: 'PCOS Hormonal Balance Trial', description: 'Nutritional intervention study for PCOS cycle regulation.', category: 'clinical-trial' },
    { path: '/clinical-trials/gut-brain-axis', title: 'Gut-Brain Axis Nutrition Study', description: 'Microbiome-targeted nutrition for cognitive health.', category: 'clinical-trial' },
    { path: '/clinical-trials/thyroid-autoimmune', title: 'Hashimoto\'s Nutritional Intervention', description: 'Anti-inflammatory nutrition protocol for autoimmune thyroiditis.', category: 'clinical-trial' },

    // Research (phantom)
    { path: '/research/gut-brain-axis-2026', title: 'Gut-Brain Axis Research 2026', description: 'Latest findings on microbiome-brain communication pathways.', category: 'research' },
    { path: '/research/circadian-metabolism', title: 'Circadian Metabolism Research', description: 'Chrononutrition and metabolic clock synchronization studies.', category: 'research' },
    { path: '/research/epigenetics-nutrition', title: 'Nutritional Epigenetics Research', description: 'How dietary patterns influence gene expression in metabolic disease.', category: 'research' },
    { path: '/research/microbiome-scfa', title: 'SCFA Production Research', description: 'Short-chain fatty acid production through targeted fiber intake.', category: 'research' },
    { path: '/research/inflammation-resolution', title: 'Inflammation Resolution Pathways', description: 'Anti-inflammatory nutrition and resolution mediator pathways.', category: 'research' },
    { path: '/research/mitochondrial-nutrition', title: 'Mitochondrial Nutrition', description: 'Nutrient cofactors for mitochondrial biogenesis and function.', category: 'research' },
    { path: '/research/hormesis-fasting', title: 'Hormesis and Fasting Research', description: 'Intermittent fasting and cellular stress response mechanisms.', category: 'research' },

    // Programs (phantom expanded)
    { path: '/programs/corporate-wellness', title: 'Corporate Metabolic Wellness Program', description: 'Employee health optimization through circadian nutrition.', category: 'program' },
    { path: '/programs/athlete-metabolic', title: 'Athlete Metabolic Optimization', description: 'Performance nutrition aligned with circadian biology.', category: 'program' },
    { path: '/programs/pediatric-metabolic', title: 'Pediatric Metabolic Health', description: 'Age-appropriate circadian nutrition for children and adolescents.', category: 'program' },
    { path: '/programs/geriatric-nutrition', title: 'Geriatric Nutrition Program', description: 'Metabolic support for healthy aging and longevity.', category: 'program' },
    { path: '/programs/fertility-nutrition', title: 'Fertility Nutrition Program', description: 'Pre-conception nutritional optimization for couples.', category: 'program' },
    { path: '/programs/oncology-support', title: 'Oncology Nutrition Support', description: 'Complementary nutrition during cancer treatment and recovery.', category: 'program' },

    // Data & API (phantom)
    { path: '/data/research/masld-biomarkers', title: 'MASLD Biomarker Database', description: 'Comprehensive biomarker reference for fatty liver disease.', category: 'data' },
    { path: '/data/research/diabetes-markers', title: 'Diabetes Marker Reference', description: 'Clinical biomarker database for diabetes management.', category: 'data' },
    { path: '/data/research/herb-interactions', title: 'Herb-Drug Interaction Database', description: 'Comprehensive reference for herbal-medication interactions.', category: 'data' },
    { path: '/data/research/nutrient-timing', title: 'Nutrient Timing Database', description: 'Circadian-optimized nutrient timing reference.', category: 'data' },

    // Tools (phantom expanded)
    { path: '/tools/metabolic-age-calculator', title: 'Metabolic Age Calculator', description: 'Calculate your metabolic age based on biomarkers and lifestyle.', category: 'tool' },
    { path: '/tools/circadian-quiz', title: 'Circadian Chronotype Quiz', description: 'Discover your chronotype and optimize your eating schedule.', category: 'tool' },
    { path: '/tools/food-interaction-checker', title: 'Food-Drug Interaction Checker', description: 'Check for interactions between medications and nutritional compounds.', category: 'tool' },
    { path: '/tools/inflammation-tracker', title: 'Inflammation Marker Tracker', description: 'Track CRP, ferritin, and other inflammatory biomarkers.', category: 'tool' },
    { path: '/tools/gut-health-assessment', title: 'Gut Health Assessment Tool', description: 'Comprehensive gut health screening and recommendations.', category: 'tool' },

    // Clinical (phantom)
    { path: '/clinical/masld-protocol', title: 'MASLD Clinical Protocol', description: 'Step-by-step nutritional protocol for fatty liver management.', category: 'clinical' },
    { path: '/clinical/diabetes-reversal-protocol', title: 'Diabetes Reversal Protocol', description: 'Clinical nutrition protocol for T2D remission support.', category: 'clinical' },
    { path: '/clinical/pcos-reversal-protocol', title: 'PCOS Reversal Protocol', description: 'Hormonal balance nutrition protocol for PCOS management.', category: 'clinical' },
    { path: '/clinical/thyroid-optimization', title: 'Thyroid Optimization Protocol', description: 'Nutritional support for thyroid function optimization.', category: 'clinical' },
    { path: '/clinical/autoimmune-protocol', title: 'Autoimmune Nutrition Protocol', description: 'Anti-inflammatory nutrition for autoimmune conditions.', category: 'clinical' },

    // Education (phantom)
    { path: '/education/circadian-nutrition-masters', title: 'Circadian Nutrition Masterclass', description: 'Advanced education in chrononutrition and metabolic timing.', category: 'education' },
    { path: '/education/herbal-therapeutics', title: 'Herbal Therapeutics Course', description: 'Evidence-based herbal medicine for metabolic health.', category: 'education' },
    { path: '/education/metabolic-biochemistry', title: 'Metabolic Biochemistry Primer', description: 'Understanding the biochemistry of metabolic health.', category: 'education' },
    { path: '/education/ayurvedic-foundations', title: 'Ayurvedic Nutrition Foundations', description: 'Traditional Ayurvedic principles for modern metabolic health.', category: 'education' },

    // Community (phantom)
    { path: '/community/research-forum', title: 'Clinical Research Forum', description: 'Community discussion on latest metabolic health research.', category: 'community' },
    { path: '/community/success-stories', title: 'Clinical Success Stories', description: 'Real-world outcomes from circadian nutrition protocols.', category: 'community' },
    { path: '/community/expert-qa', title: 'Expert Q&A Archive', description: 'Archive of expert answers to community questions.', category: 'community' },

    // Events (phantom)
    { path: '/events/metabolic-summit-2026', title: 'Metabolic Health Summit 2026', description: 'Annual clinical nutrition conference and workshop.', category: 'event' },
    { path: '/events/circadian-webinar-series', title: 'Circadian Nutrition Webinar Series', description: 'Monthly expert webinars on chrononutrition topics.', category: 'event' },
  ];
}

/**
 * Get all phantom route paths.
 */
export function getPhantomPaths(): string[] {
  return generatePhantomRoutes().map(r => r.path);
}

/**
 * Check if a path is a phantom route.
 */
export function isPhantomRoute(path: string): boolean {
  return getPhantomPaths().includes(path);
}

/**
 * Generate a phantom sitemap for suspected competitor IPs.
 * Only served to IPs that exhibit competitor-like behavior.
 */
export function generatePhantomSitemap(): string {
  const routes = generatePhantomRoutes();
  const urls = routes.map(r => `  <url><loc>https://nutritioncolours.com${r.path}</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod></url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

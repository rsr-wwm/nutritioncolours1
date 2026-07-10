// src/seo/structuredData.ts
// This module provides JSON‑LD structured data snippets for SEO, AEO, and GEO.
// Import and use the exported functions in your React components or prerender scripts.

import { getPageEntityGraph, getConditionEntityGraph, getHerbEntityGraph, getRecipeEntityGraph } from './entityGraph';

export const BASE_URL = 'https://nutritioncolours.com';

export const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://nutritioncolours.com/#organization",
  "name": "NutritionColours",
  "url": "https://nutritioncolours.com",
  "logo": "https://nutritioncolours.com/images/precision_metabolic_nutrition_dr_shilpa.webp",
  "image": "https://nutritioncolours.com/images/precision_metabolic_nutrition_dr_shilpa.webp",
  "telephone": "+91-XXXXXXXXXX",
  "priceRange": "$$",
  "medicalSpecialty": "Nutrition/Dietetics",
  "availableService": [
    { "@type": "MedicalService", "name": "Precision Metabolic Nutrition" },
    { "@type": "MedicalService", "name": "Circadian Nutrition Planning" },
    { "@type": "MedicalService", "name": "Clinical Herbal Consultation" },
    { "@type": "MedicalService", "name": "Digital Twin Health Profiling" }
  ],
  "founder": {
    "@type": "Person",
    "@id": "https://nutritioncolours.com/team/shilpa#person",
    "name": "Dr. Shilpa Thakur",
    "jobTitle": "Clinical Nutritionist & Founder",
    "url": "https://nutritioncolours.com/team/shilpa",
    "image": "https://nutritioncolours.com/images/precision_metabolic_nutrition_dr_shilpa.webp",
    "worksFor": { "@id": "https://nutritioncolours.com/#organization" },
    "alumniOf": { "@type": "EducationalOrganization", "name": "University of Mumbai" },
    "hasCredential": "PhD in Clinical Nutrition",
    "knowsAbout": ["Clinical Nutrition", "Circadian Biology", "Herbal Medicine", "Metabolic Health", "PCOS/PCOD Management"],
    "sameAs": [
      "https://www.linkedin.com/in/dr-shilpa-phd/",
      "https://orcid.org/0000-0002-XXXX-XXXX",
      "https://scholar.google.com/citations?user=DrShilpaThakur",
      "https://www.researchgate.net/profile/Shilpa_Thakur",
      "https://www.quora.com/profile/Dr-Shilpa-Thakur-Phd",
      "https://www.youtube.com/@nutritioncolours_drshilpa",
      "https://www.instagram.com/drshilpa_nutritioncolours",
      "https://www.facebook.com/shiputh"
    ]
  },
  "sameAs": [
    "https://www.wikidata.org/wiki/Q1269192",
    "https://www.google.com/search?q=NutritionColours",
    "https://www.linkedin.com/company/nutritioncolours",
    "https://www.facebook.com/shiputh",
    "https://twitter.com/NutritionColours",
    "https://www.instagram.com/drshilpa_nutritioncolours",
    "https://www.youtube.com/@nutritioncolours_drshilpa",
    "https://www.quora.com/profile/Dr-Shilpa-Thakur-Phd",
    "https://www.practo.com/nutritioncolours",
    "https://www.lybrate.com/nutritioncolours",
    "https://g.page/nutritioncolours",
    "https://www.healthgrades.com/nutritioncolours"
  ]
};

export const localBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "NutritionColours \u2013 Metabolic Health & Circadian Nutrition",
  "image": "https://nutritioncolours.com/images/precision_metabolic_nutrition_dr_shilpa.webp",
  "@id": "https://nutritioncolours.com#localbusiness",
  "url": "https://nutritioncolours.com",
  "telephone": "+91-XXXXXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Clinic Address]",
    "addressLocality": "Mumbai",
    "addressRegion": "MH",
    "postalCode": "400001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.0760,
    "longitude": 72.8777
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }],
  "priceRange": "$$",
  "medicalSpecialty": "Nutrition/Dietetics",
  "availableService": [
    { "@type": "MedicalService", "name": "Precision Metabolic Nutrition" },
    { "@type": "MedicalService", "name": "Circadian Nutrition Planning" },
    { "@type": "MedicalService", "name": "Clinical Herbal Consultation" },
    { "@type": "MedicalService", "name": "Digital Twin Health Profiling" }
  ]
};

export const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does circadian nutrition improve metabolic health?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aligning meals with your body’s natural circadian rhythms optimises hormone release, insulin sensitivity and fat metabolism, leading to better blood‑sugar control and weight management."
      }
    },
    {
      "@type": "Question",
      "name": "Can NutritionColours help with PCOD?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes – personalised nutrition plans combined with chronotherapy can regularise menstrual cycles and reduce androgen‑related symptoms."
      }
    }
  ]
};

export const howTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Create a daily circadian meal plan",
  "step": [
    {
      "@type": "HowToStep",
      "url": "https://nutritioncolours.com/how-to/circadian-meal-plan#step1",
      "name": "Determine your chronotype",
      "text": "Use the free chronotype quiz on the website to find out if you are a morning or evening person."
    },
    {
      "@type": "HowToStep",
      "url": "https://nutritioncolours.com/how-to/circadian-meal-plan#step2",
      "name": "Plan meals around sunrise",
      "text": "Consume the largest meal within 2‑3 hours of sunrise and keep dinner at least 3 hours before bedtime."
    }
  ]
};

/**
 * Generate a BreadcrumbList schema for any route.
 */
export function getBreadcrumbSchema(path: string, crumbs: { label: string; path: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.label,
      "item": `${BASE_URL}/${crumb.path === 'home' ? '' : crumb.path}`
    }))
  };
}

/**
 * Generate a MedicalWebPage schema with isAccessibleForFree and speakable.
 */
export function getMedicalWebPageSchema(page: {
  path: string;
  title: string;
  description: string;
  image?: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${BASE_URL}/${page.path}#webpage`,
    "url": `${BASE_URL}/${page.path}`,
    "headline": page.title,
    "description": page.description,
    "image": page.image || `${BASE_URL}/images/precision_metabolic_nutrition_dr_shilpa.webp`,
    "isAccessibleForFree": true,
    "usageInfo": {
      "@type": "CreativeWorkUsagePolicy",
      "learnmoreURL": `${BASE_URL}/evidence-approach`
    },
    "medicalSpecialty": "Nutrition/Dietetics",
    "audience": {
      "@type": "MedicalAudience",
      "audienceType": "Patient"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".speakable-headline", ".speakable-description", "[data-ai-answer='true']"]
    },
    "author": {
      "@type": "Person",
      "@id": `${BASE_URL}/team/shilpa#person`,
      "name": "Dr. Shilpa Thakur"
    },
    "publisher": { "@id": `${BASE_URL}/#organization` }
  };
}

/**
 * MedicalWebPage schema with review metadata (Task 9: Trust Signals).
 */
export function getReviewedWebPageSchema(route: string, pageData?: {
  title?: string;
  description?: string;
  lastReviewed?: string;
  reviewType?: string;
}) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `https://nutritioncolours.com${route}#page`,
    'url': `https://nutritioncolours.com${route}`,
    'name': pageData?.title || '',
    'description': pageData?.description || '',
    'lastReviewed': pageData?.lastReviewed || new Date().toISOString().split('T')[0],
    'reviewedBy': {
      '@type': 'Physician',
      'name': 'Dr. Shilpa Thakur',
      'identifier': 'NUTR-SHILPA-001',
      'jobTitle': 'Clinical Nutritionist',
      'url': 'https://nutritioncolours.com/team/shilpa',
    },
    ...(pageData?.reviewType && {
      'potentialAction': {
        '@type': 'AskAction',
        'target': 'https://nutritioncolours.com/tools',
        'description': `Ask a clinical nutrition question about ${pageData.reviewType}`,
      },
    }),
  });
}

/**
 * AggregateRating schema for trust signals (Task 9).
 */
export function getAggregateRatingSchema(ratingValue: string, reviewCount: string) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    'ratingValue': ratingValue,
    'reviewCount': reviewCount,
    'bestRating': '5',
    'worstRating': '1',
  });
}

/**
 * Returns a JSON-LD string containing the selected schemas.
 * Pass a page identifier (e.g., "home", "faq") to include page-specific data.
 * Now integrates entity graph injection for GEO/AEO domination (Task 1).
 */
export function getStructuredData(page: string = "home"): string {
  const schemas: any[] = [organization, localBusiness];
  if (page === "faq") schemas.push(faq);
  if (page === "howto") schemas.push(howTo);
  return JSON.stringify(schemas);
}

/**
 * Enhanced structured data generator with entity graph support.
 * Returns full JSON-LD with interlinked entities for AI search domination.
 */
export function getEnhancedStructuredData(route: string, options?: {
  title?: string;
  description?: string;
  conditionId?: string;
  conditionData?: any;
  herbId?: string;
  herbData?: any;
  recipeId?: string;
  recipeData?: any;
  relatedHerbs?: string[];
  relatedConditions?: string[];
  relatedRecipes?: string[];
  lastReviewed?: string;
}): string {
  if (options?.conditionId) {
    return getConditionEntityGraph(options.conditionId, options.conditionData, options.relatedHerbs, options.relatedRecipes);
  }
  if (options?.herbId) {
    return getHerbEntityGraph(options.herbId, options.herbData, options.relatedConditions);
  }
  if (options?.recipeId) {
    return getRecipeEntityGraph(options.recipeId, options.recipeData);
  }
  return getPageEntityGraph(route, options?.title, options?.description);
}

// Re-export entity graph functions for direct use
export { getPageEntityGraph, getConditionEntityGraph, getHerbEntityGraph, getRecipeEntityGraph } from './entityGraph';

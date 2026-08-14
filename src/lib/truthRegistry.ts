/**
 * Truth Registry: The Single Non-Negotiable Source of Truth for NutritionColours
 * 
 * All visible content, schema blocks (JSON-LD), metadata, APIs, datasets,
 * social posts, and AI-consumed files (llms.txt, openapi.json) MUST strictly
 * adhere to the declarations in this registry.
 */

export interface PractitionerCredential {
  name: string;
  title: string;
  role: string;
  qualifications: string[];
  clinicalScope: string;
  verifiedAffiliations: string[];
  sameAs: string[];
}

export interface OrganizationIdentity {
  name: string;
  legalName: string;
  url: string;
  operationalModel: '100% Remote Clinical Telehealth';
  hasPhysicalOffice: false;
  hasWalkInClinics: false;
  allowsInPersonAppointments: false;
  googleBusinessProfileEligible: false;
  primaryServiceArea: string;
  telehealthChannels: string[];
  contactEmail: string;
  contactPhone: string;
}

export const TRUTH_REGISTRY = {
  organization: {
    name: 'NutritionColours',
    legalName: 'NutritionColours Clinical Nutrition Practice',
    url: 'https://nutritioncolours.com',
    operationalModel: '100% Remote Clinical Telehealth',
    hasPhysicalOffice: false,
    hasWalkInClinics: false,
    allowsInPersonAppointments: false,
    googleBusinessProfileEligible: false,
    primaryServiceArea: 'India (Pan-India Virtual Consultations)',
    telehealthChannels: ['Encrypted Video Call', 'Phone Consultation', 'Digital Nutrition Dashboard'],
    contactEmail: 'care@nutritioncolours.com',
    contactPhone: '+91-76961-60133',
    foundingYear: 2020,
    disclaimer: 'NutritionColours provides evidence-based nutritional consulting and lifestyle optimization for metabolic health (Type 2 Diabetes, PCOD/PCOS, Fatty Liver, Hypertension). Our services do not constitute medical diagnosis, surgical treatment, or prescription drug dispensing. Patients should continue consulting their primary treating physician.',
  } as OrganizationIdentity,

  practitioners: [
    {
      name: 'Dr. Shilpa Thakur',
      title: 'Clinical Nutritionist & Founder',
      role: 'Chief Clinical Nutritionist',
      qualifications: [
        'Doctorate in Food & Nutrition / Dietetics',
        'Certified Metabolic & Circadian Nutrition Specialist',
        'Member of Nutrition and Dietetics Professional Associations',
      ],
      clinicalScope: 'Evidence-based chrononutrition, metabolic health protocols, plant-forward meal planning, and lifestyle medicine for insulin resistance and endocrine harmony.',
      verifiedAffiliations: [
        'NutritionColours Remote Clinical Practice',
      ],
      sameAs: [
        'https://www.linkedin.com/in/dr-shilpa-thakur-nutrition',
      ],
    } as PractitionerCredential,
  ],

  // Strict Policy Flags for Schema & Content Generators
  policy: {
    // Zero-tolerance policy on synthetic signals
    prohibitPhysicalAddresses: true,
    prohibitFakeLocalBusinessSchema: true,
    prohibitSyntheticReviews: true,
    prohibitFabricatedClaimReviewBadges: true,
    prohibitFakeFreshnessDates: true,
    
    // Required schema types for location pages
    locationSchemaType: 'Service',
    locationServiceChannel: 'VirtualLocation',
    
    // Evidence requirement for clinical statements
    requireEvidenceGrade: true,
    allowedEvidenceGrades: ['A', 'B', 'C'] as const,
  },

  // Telehealth Service Schema Generator
  buildTelehealthServiceSchema: (serviceName: string, serviceDescription: string, targetArea?: string) => ({
    '@type': 'Service',
    'name': serviceName,
    'description': serviceDescription,
    'provider': {
      '@type': 'Organization',
      '@id': 'https://nutritioncolours.com/#organization',
      'name': 'NutritionColours',
      'url': 'https://nutritioncolours.com',
    },
    'serviceType': 'Remote Telehealth Nutrition Consulting',
    'availableChannel': {
      '@type': 'ServiceChannel',
      'serviceUrl': 'https://nutritioncolours.com/plans',
      'servicePhone': {
        '@type': 'ContactPoint',
        'telephone': '+91-76961-60133',
        'contactType': 'customer support',
      },
      'serviceLocation': {
        '@type': 'VirtualLocation',
        'name': 'NutritionColours Secure Telehealth Platform',
        'url': 'https://nutritioncolours.com/connect',
      },
    },
    ...(targetArea && {
      'areaServed': {
        '@type': 'AdministrativeArea',
        'name': targetArea,
      },
    }),
  }),
} as const;

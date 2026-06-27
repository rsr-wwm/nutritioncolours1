import React, { useState } from 'react';
import { RECIPES } from './recipes_database';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { 
  BANNERS, BLOG_ARTICLES, PLANS, TESTIMONIALS, TEAM, 
  SITE_STRUCTURE, HOW_IT_WORKS, LEGAL_CONTENT,
  ABOUT_FAQS, PLANS_FAQS, CONTACT_FAQS, VEGAN_FAQS, 
  RECIPES_FAQS, TESTIMONIALS_FAQS, RECIPE_SPECIFIC_FAQS, MAINTENANCE_FAQS,
  TEAM_FAQS, HOME_FAQS, KNOWLEDGE_FAQS, BLOGS_FAQS,
  TOOLS_FAQS, TOPIC_SPECIFIC_FAQS, CATEGORY_FAQS
} from './constants';
import { BlogArticle, Recipe, Topic, CategoryType, HerbalEntity, MedicalConditionEntity, SitemapNode } from './types';
import { 
  IconArrowRight, IconLeaf, IconFileText, 
  IconMail, IconChevronDown, IconX, IconPhone, 
  IconSearch, IconCheck, IconInstagram, IconLinkedIn, 
  IconTwitter, IconFacebook, IconMenu,
  IconYouTube, IconQuora,
  IconLock, IconUtensils, IconSettings, IconWand, IconFlask, IconUser, IconSun, IconMoon,
  IconMapPin
} from './components/Icons';
import { AIHelper } from './components/AIHelper';
import { SocialShare } from './components/SocialShare';
import { Logo } from './components/Logo';
import { Accordion } from './components/Accordion';
import { SectionHeading } from './components/SectionHeading';
import { ViewerTrackerProvider, useViewerTracker } from './components/ViewerTracker';
import { ParticleConstellation } from './components/ParticleConstellation';
import { getStoredGeminiApiKey } from './components/apiKey';
// Removed static imports of LOCATIONS_DATA and INTERNATIONAL_COUNTRIES for dynamic code-splitting
import { TOPICS } from './topics';
import { HERBS_SPICES_DATA, MEDICAL_CONDITIONS_DATA } from './clinical_databases';
import semanticLinks from './semantic_links.json';
import clinicalSignatures from './public/clinical-signatures.json';

// Dynamic lazy loads for code-splitting (June 3 PageSpeed Optimizations)
const TeamMemberProfile = React.lazy(() => import('./components/TeamMemberProfile').then(m => ({ default: m.TeamMemberProfile })));
const HealthTopicPage = React.lazy(() => import('./components/HealthTopicPage').then(m => ({ default: m.HealthTopicPage })));
const ConnectPage = React.lazy(() => import('./components/ConnectPage').then(m => ({ default: m.ConnectPage })));
const SmartMealGenerator = React.lazy(() => import('./components/SmartMealGenerator').then(m => ({ default: m.SmartMealGenerator })));
const HealthAssistant = React.lazy(() => import('./components/HealthAssistant').then(m => ({ default: m.HealthAssistant })));
const SeoAnalyzer = React.lazy(() => import('./components/SeoAnalyzer').then(m => ({ default: m.SeoAnalyzer })));
const SystemMonitor = React.lazy(() => import('./components/SystemMonitor').then(m => ({ default: m.SystemMonitor })));
const DynamicCircadianClock = React.lazy(() => import('./components/DynamicCircadianClock').then(m => ({ default: m.DynamicCircadianClock })));
const HrvTracker = React.lazy(() => import('./components/HrvTracker').then(m => ({ default: m.HrvTracker })));
const BiologicalAgeEstimator = React.lazy(() => import('./components/BiologicalAgeEstimator').then(m => ({ default: m.BiologicalAgeEstimator })));
const CircadianPlate = React.lazy(() => import('./components/CircadianPlate').then(m => ({ default: m.CircadianPlate })));
const PdfBuilder = React.lazy(() => import('./components/PdfBuilder').then(m => ({ default: m.PdfBuilder })));
const DietaryAuditor = React.lazy(() => import('./components/DietaryAuditor').then(m => ({ default: m.DietaryAuditor })));
const GenomicMatcher = React.lazy(() => import('./components/GenomicMatcher').then(m => ({ default: m.GenomicMatcher })));
const ResearchQueryAgent = React.lazy(() => import('./components/ResearchQueryAgent').then(m => ({ default: m.ResearchQueryAgent })));
const LocalDirectory = React.lazy(() => import('./components/LocalDirectory').then(m => ({ default: m.LocalDirectory })));
const CookieConsent = React.lazy(() => import('./components/CookieConsent').then(m => ({ default: m.CookieConsent })));

// Split named exports from SitemapVisuals & HealthCalculators
const BmiCalculator = React.lazy(() => import('./components/HealthCalculators').then(m => ({ default: m.BmiCalculator })));
const CalorieCalculator = React.lazy(() => import('./components/HealthCalculators').then(m => ({ default: m.CalorieCalculator })));
const WaterCalculator = React.lazy(() => import('./components/HealthCalculators').then(m => ({ default: m.WaterCalculator })));
const ProteinCalculator = React.lazy(() => import('./components/HealthCalculators').then(m => ({ default: m.ProteinCalculator })));
const CircadianAligner = React.lazy(() => import('./components/HealthCalculators').then(m => ({ default: m.CircadianAligner })));
const DrugNutrientSynergyChecker = React.lazy(() => import('./components/HealthCalculators').then(m => ({ default: m.DrugNutrientSynergyChecker })));
const CircadianSyncQuiz = React.lazy(() => import('./components/HealthCalculators').then(m => ({ default: m.CircadianSyncQuiz })));

const MindMapVisualizer = React.lazy(() => import('./components/SitemapVisuals').then(m => ({ default: m.MindMapVisualizer })));
const GridMapView = React.lazy(() => import('./components/SitemapVisuals').then(m => ({ default: m.GridMapView })));
const DetailedListView = React.lazy(() => import('./components/SitemapVisuals').then(m => ({ default: m.DetailedListView })));
const AdminAuditList = React.lazy(() => import('./components/SitemapVisuals').then(m => ({ default: m.AdminAuditList })));
const SitemapStats = React.lazy(() => import('./components/SitemapVisuals').then(m => ({ default: m.SitemapStats })));

// Dynamic site structure enhancer
const getEnhancedSiteStructure = (intlCountries: any[]) => {
  const root = JSON.parse(JSON.stringify(SITE_STRUCTURE));
  const findAndEnhance = (node: any) => {
    if (node.id === 'clinics-page') {
      node.children = intlCountries.map(c => {
        const citySlug = c.city.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        return {
          id: `clinic-${c.id}-${citySlug}`,
          path: `clinic/${c.id}/${citySlug}`,
          label: `${c.country} Hub (${c.city})`,
          type: 'resource',
          status: 'optimized',
          meta: {
            title: `NutritionColours ${c.city} | Metabolic Reversal Hub, ${c.country}`,
            description: `Reverse Type 2 Diabetes, PCOD, and Fatty Liver in ${c.city}, ${c.country}. Book a personalized metabolic consultation at our virtual outreach hub (ZIP: ${c.pincode}).`,
            keywords: ['metabolic clinic', c.country.toLowerCase(), c.city.toLowerCase(), 'diabetes reversal']
          }
        };
      });
    } else if (node.children) {
      node.children.forEach(findAndEnhance);
    }
  };
  findAndEnhance(root);
  return root;
};



// --- Constants & Config ---
const NAV_CONFIG = [
  { 
    id: 'home', 
    label: 'Home' 
  },
  { 
    id: 'plans', 
    label: 'Programs' 
  },
  { 
    id: 'knowledge-group', 
    label: 'Knowledge', 
    children: [
      { id: 'knowledge', label: 'Health Topics' },
      { id: 'blogs', label: 'Latest Articles' },
      { id: 'vegan', label: 'Vegan Guide' },
      { id: 'sitemap', label: 'Sitemap' }
    ] 
  },
  { 
    id: 'lifestyle-group', 
    label: 'Lifestyle', 
    children: [
      { id: 'recipes', label: 'Healing Recipes' },
      { id: 'tools', label: 'Health Tools & Portal' },
      { id: 'connect', label: 'Community' },
      { id: 'clinics', label: 'Outreach Locations' }
    ] 
  },
  { 
    id: 'about-group', 
    label: 'About', 
    children: [
      { id: 'about', label: 'Our Philosophy' },
      { id: 'history', label: 'Our History' },
      { id: 'team', label: 'Clinical Team' },
      { id: 'testimonials', label: 'Success Stories' }
    ] 
  }
];

const WIKIDATA_MAP: Record<string, string[]> = {
  // Herbs & Spices
  'turmeric': ['https://www.wikidata.org/wiki/Q131110'],
  'ashwagandha': ['https://www.wikidata.org/wiki/Q79919'],
  'cinnamon': ['https://www.wikidata.org/wiki/Q272635'],
  'ginger': ['https://www.wikidata.org/wiki/Q35999'],
  'ragi': ['https://www.wikidata.org/wiki/Q1353272'],
  'spirulina': ['https://www.wikidata.org/wiki/Q311105'],
  'fenugreek': ['https://www.wikidata.org/wiki/Q131868'],
  'holy-basil': ['https://www.wikidata.org/wiki/Q2732009'],
  'garlic': ['https://www.wikidata.org/wiki/Q23886'],
  
  // Medical Conditions
  'masld': ['https://www.wikidata.org/wiki/Q152912'],
  'insulin-resistance': ['https://www.wikidata.org/wiki/Q1126305'],
  'circadian-dysregulation': ['https://www.wikidata.org/wiki/Q1530932'],
  'diabetes-reversal': ['https://www.wikidata.org/wiki/Q124407'],
  'pcod-pcos': ['https://www.wikidata.org/wiki/Q846247'],
  'thyroid-dysfunction': ['https://www.wikidata.org/wiki/Q193630', 'https://www.wikidata.org/wiki/Q153026'],
  'gut-health': ['https://www.wikidata.org/wiki/Q1269192'],
  'hypertension': ['https://www.wikidata.org/wiki/Q161354']
};

const WIKIPEDIA_MAP: Record<string, string> = {
  'turmeric': 'https://en.wikipedia.org/wiki/Turmeric',
  'ashwagandha': 'https://en.wikipedia.org/wiki/Withania_somnifera',
  'cinnamon': 'https://en.wikipedia.org/wiki/Cinnamon',
  'ginger': 'https://en.wikipedia.org/wiki/Ginger',
  'ragi': 'https://en.wikipedia.org/wiki/Eleusine_coracana',
  'spirulina': 'https://en.wikipedia.org/wiki/Spirulina_(dietary_supplement)',
  'fenugreek': 'https://en.wikipedia.org/wiki/Fenugreek',
  'holy-basil': 'https://en.wikipedia.org/wiki/Ocimum_tenuiflorum',
  'garlic': 'https://en.wikipedia.org/wiki/Garlic',
  'masld': 'https://en.wikipedia.org/wiki/Metabolic_dysfunction-associated_steatotic_liver_disease',
  'insulin-resistance': 'https://en.wikipedia.org/wiki/Insulin_resistance',
  'circadian-dysregulation': 'https://en.wikipedia.org/wiki/Circadian_rhythm',
  'diabetes-reversal': 'https://en.wikipedia.org/wiki/Management_of_type_2_diabetes',
  'pcod-pcos': 'https://en.wikipedia.org/wiki/Polycystic_ovary_syndrome',
  'thyroid-dysfunction': 'https://en.wikipedia.org/wiki/Thyroid_disease',
  'gut-health': 'https://en.wikipedia.org/wiki/Gut_health',
  'hypertension': 'https://en.wikipedia.org/wiki/Hypertension'
};

const getDoubleLinkingSameAs = (id: string): string[] => {
  const result: string[] = [];
  if (WIKIDATA_MAP[id]) {
    result.push(...WIKIDATA_MAP[id]);
  }
  if (WIKIPEDIA_MAP[id]) {
    result.push(WIKIPEDIA_MAP[id]);
  }
  return result;
};

const safeGetLocalStorage = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const safeSetLocalStorage = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage can be unavailable in restricted browser contexts.
  }
};

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || '';

const storeInquiryLocally = (inquiry: any): void => {
  const existingInquiriesStr = safeGetLocalStorage('nutrition_inquiries');
  let inquiries: any[] = [];
  if (existingInquiriesStr) {
    try {
      inquiries = JSON.parse(existingInquiriesStr);
    } catch (e) {
      console.error("Failed to parse inquiries", e);
    }
  }
  inquiries.unshift(inquiry);
  safeSetLocalStorage('nutrition_inquiries', JSON.stringify(inquiries));
};

const updateSeoMetadata = (path: string, item?: BlogArticle | Recipe | Topic | HerbalEntity | MedicalConditionEntity, locationsData: any[] = [], intlCountries: any[] = [], topicsData: Topic[] = [], herbsData: HerbalEntity[] = [], conditionsData: MedicalConditionEntity[] = [], recipesData: Recipe[] = []) => {
  let title = "NutritionColours | Metabolic Health & Circadian Nutrition Optimization";
  let desc = "Optimize chronic metabolic wellness and support cellular health under Dr. Shilpa Thakur's circadian nutrition protocols. Expert metabolic support for Diabetes, PCOD, and Hypertension.";
  let image = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2000";
  let type = "website";

  // Auto-resolve item if path is dynamic
  let resolvedItem = item;
  if (!resolvedItem) {
    const [section, id] = path.split('/');
    if (section === 'article' && id) resolvedItem = BLOG_ARTICLES.find(a => a.id === id);
    if (section === 'recipe' && id) resolvedItem = recipesData.find(r => r.id === id);
    if (section === 'topic' && id) resolvedItem = topicsData.find(t => t.id === id);
    if (section === 'herb' && id) resolvedItem = herbsData.find(h => h.id === id);
    if (section === 'condition' && id) resolvedItem = conditionsData.find(c => c.id === id);
  }

  if (resolvedItem) {
      if ('pageTitle' in resolvedItem) {
          title = (resolvedItem as any).pageTitle;
      } else if ('title' in resolvedItem) {
          title = `${(resolvedItem as any).title} | NutritionColours`;
      } else if ('name' in resolvedItem) {
          title = `${(resolvedItem as any).name} | Clinical Nutrition Details`;
      }

      if ('metaDescription' in resolvedItem) {
          desc = resolvedItem.metaDescription;
      } else if ('excerpt' in resolvedItem) {
          desc = (resolvedItem as any).excerpt;
      } else if ('shortDesc' in resolvedItem) {
          desc = (resolvedItem as any).shortDesc; 
      } else if ('description' in resolvedItem) {
          desc = (resolvedItem as any).description; 
      } else if ('rootCause' in resolvedItem) {
          desc = (resolvedItem as any).rootCause;
      } else if ('primaryMechanism' in resolvedItem) {
          desc = (resolvedItem as any).primaryMechanism;
      }
      
      if ('image' in resolvedItem) image = (resolvedItem as any).image;
      if ('prepTime' in resolvedItem) type = "recipe";
      if ('content' in resolvedItem) type = "article";
      if ('scientificName' in resolvedItem) type = "herb";
      if ('biomarkers' in resolvedItem) type = "condition";
  } else {
      const parts = path.split('/');
      if (parts[0] === 'about') title = "Our Philosophy | NutritionColours";
      if (parts[0] === 'plans') title = "Clinical Programs | NutritionColours";
      if (parts[0] === 'tools') title = "Health Calculators & Tools | NutritionColours";
      if (parts[0] === 'contact') title = "Contact Us | NutritionColours";
      if (parts[0] === 'clinics') {
          title = "Remote Consultation & Service Outreach Locations | NutritionColours";
          desc = "Check if your city is covered by NutritionColours remote metabolic services. Get personalized, circadian diets optimized for local staples by Dr. Shilpa Thakur.";
      }
      if (parts[0] === 'clinic' && parts[1]) {
          const loc = locationsData.find(l => l.id === parts[1]);
          if (loc) {
              title = `NutritionColours ${loc.city} | Remote Metabolic Consultation Outreach, ${loc.state}`;
              desc = `Optimize Type 2 Diabetes, PCOD, and Fatty Liver wellness remotely in ${loc.city}, ${loc.state}. Access localized circadian nutrition protocols and remote onboarding (PIN: ${loc.pincode}).`;
          } else {
              const matches = intlCountries.filter(l => l.id === parts[1]);
              if (matches.length > 0) {
                  const citySlug = parts[2];
                  const intlLoc = (citySlug && matches.find(l => l.city.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') === citySlug)) || matches[0];
                  title = `NutritionColours ${intlLoc.city} | Remote Metabolic Consultation Hub, ${intlLoc.country}`;
                  desc = `Optimize Type 2 Diabetes, PCOD, and Fatty Liver wellness remotely in ${intlLoc.city}, ${intlLoc.country}. Access localized circadian nutrition protocols and remote onboarding (ZIP: ${intlLoc.pincode}).`;
              }
          }
      }
  }

  document.title = title;
  
  const setMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[property="${name}"]`) || document.querySelector(`meta[name="${name}"]`);
      if (!element) {
          element = document.createElement('meta');
          element.setAttribute(name.startsWith('og:') ? 'property' : 'name', name);
          document.head.appendChild(element);
      }
      element.setAttribute('content', content);
  };

  // Define crawler instructions: index all pages, including dynamic location pages now that they contain highly unique localized content
  const robotsDirective = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
  setMeta('robots', robotsDirective);

  // Dynamic JSON-LD Schema Injection for Generative Search & AI
  const injectSchema = () => {
      const existing = document.querySelectorAll('script[type="application/ld+json"].dynamic-schema, script[type="application/ld+json"].dynamic-schema-faq');
      existing.forEach(e => e.remove());

      const schema: any = {
          "@type": type === "recipe" ? "Recipe" : type === "article" ? "TechArticle" : "MedicalWebPage",
          "@id": `https://nutritioncolours.com/${path}#webpage`,
          "url": `https://nutritioncolours.com/${path}`,
          "headline": title.split('|')[0].trim(),
          "description": desc,
          "image": image,
          "datePublished": "2026-06-01T08:00:00+05:30",
          "dateModified": "2026-06-26T12:00:00+05:30",
          "isPartOf": {
              "@type": "WebSite",
              "@id": "https://nutritioncolours.com/#website"
          },
          "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".speakable-headline", ".speakable-description"]
          },
          "author": {
              "@type": "Person",
              "@id": "https://nutritioncolours.com/team/shilpa#person",
              "name": "Dr. Shilpa Thakur",
              "jobTitle": "Clinical Nutrition Specialist & Metabolic Researcher (Non-Medical Practitioner)",
              "alumniOf": {
                  "@type": "EducationalOrganization",
                  "name": "Doctor of Philosophy in Clinical Nutrition"
              },
              "url": "https://nutritioncolours.com/team/shilpa"
          },
          "publisher": {
              "@id": "https://nutritioncolours.com/#organization"
          }
      };

      const websiteSchema = {
          "@type": "WebSite",
          "@id": "https://nutritioncolours.com/#website",
          "url": "https://nutritioncolours.com",
          "name": "NutritionColours",
          "publisher": {
              "@id": "https://nutritioncolours.com/#organization"
          }
      };

      const organizationSchema = {
          "@type": "OnlineBusiness",
          "@id": "https://nutritioncolours.com/#organization",
          "name": "NutritionColours",
          "url": "https://nutritioncolours.com",
          "logo": {
              "@type": "ImageObject",
              "url": "https://nutritioncolours.com/logo.png"
          },
          "founder": {
              "@type": "Person",
              "@id": "https://nutritioncolours.com/team/shilpa#person",
              "name": "Dr. Shilpa Thakur"
          },
          "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
          }
      };

      if (resolvedItem) {
          if (type === "herb") {
              const herb = resolvedItem as HerbalEntity;
              const citations = herb.citations && herb.citations.length > 0 ? herb.citations.map(c => {
                  const pmidMatch = c.text.match(/PMID:\s*(\d+)/i);
                  const pmid = pmidMatch ? pmidMatch[1] : null;
                  return {
                      "@type": "ScholarlyArticle",
                      "name": c.text,
                      "url": c.url,
                      ...(pmid ? { "identifier": `PMID:${pmid}` } : {})
                  };
              }) : undefined;

              const herbSchema: any = {
                  "@type": "DietarySupplement",
                  "name": herb.name,
                  "activeIngredient": herb.activeCompounds.join(', '),
                  "targetPopulation": "Adults",
                  "proprietaryName": herb.scientificName,
                  "nonProprietaryName": herb.name,
                  "safetyConsideration": herb.contraindications.join(', '),
                  "recommendedIntake": {
                      "@type": "AdministrativeArea",
                      "name": herb.dosage.range
                  },
                  ...(citations ? { "citation": citations } : {})
              };
              const sameAsLinks = getDoubleLinkingSameAs(herb.id);
              if (sameAsLinks.length > 0) {
                  herbSchema.sameAs = sameAsLinks;
              }
              schema.mainEntity = herbSchema;
          } else if (type === "condition") {
              const cond = resolvedItem as MedicalConditionEntity;
              const citations = cond.citations && cond.citations.length > 0 ? cond.citations.map(c => {
                  const pmidMatch = c.text.match(/PMID:\s*(\d+)/i);
                  const pmid = pmidMatch ? pmidMatch[1] : null;
                  return {
                      "@type": "ScholarlyArticle",
                      "name": c.text,
                      "url": c.url,
                      ...(pmid ? { "identifier": `PMID:${pmid}` } : {})
                  };
              }) : undefined;

              const condSchema: any = {
                  "@type": "MedicalCondition",
                  "name": cond.name,
                  "possibleTreatment": cond.therapeuticSpices.map(spice => ({
                      "@type": "MedicalTherapy",
                      "name": spice
                  })),
                  "description": cond.rootCause,
                  "signOrSymptom": cond.biomarkers.map(b => ({
                      "@type": "MedicalSignOrSymptom",
                      "name": b
                  })),
                  ...(citations ? { "citation": citations } : {})
              };
              const sameAsLinks = getDoubleLinkingSameAs(cond.id);
              if (sameAsLinks.length > 0) {
                  condSchema.sameAs = sameAsLinks;
              }
              schema.mainEntity = condSchema;
          } else if ('caseStudy' in resolvedItem && (resolvedItem as any).caseStudy) {
              schema.mainEntity = {
                  "@type": "MedicalCondition",
                  "name": (resolvedItem as any).title,
                  "associatedAnatomy": { "@type": "AnatomicalStructure", "name": "Metabolic System" },
                  "possibleTreatment": {
                      "@type": "MedicalTherapy",
                      "name": "Circadian Nutritional Protocol",
                      "indication": "Metabolic Syndrome Reversal"
                  }
              };
          } else if (type === "recipe") {
              const recipe = resolvedItem as Recipe;
              const recipeSchema: any = {
                  "@type": "Recipe",
                  "name": recipe.title,
                  "description": recipe.description || recipe.healingDescription,
                  "recipeCategory": recipe.category,
                  "recipeIngredient": recipe.ingredients.map(i => `${i.name} (${i.detail})`),
                  "recipeInstructions": [
                      {
                          "@type": "HowToStep",
                          "text": recipe.healingDescription || recipe.description
                      }
                  ],
                  "prepTime": recipe.prepTime.includes('Min') || recipe.prepTime.includes('min') ? `PT${recipe.prepTime.replace(/[^0-9]/g, '')}M` : 'PT15M',
                  "nutrition": {
                      "@type": "NutritionInformation",
                      "calories": recipe.calories.includes('kcal') || recipe.calories.includes('Cal') ? recipe.calories : `${recipe.calories} kcal`
                  }
              };
              schema.mainEntity = recipeSchema;
          }
      }

      const graph = {
          "@context": "https://schema.org",
          "@graph": [
              schema,
              websiteSchema,
              organizationSchema
          ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.className = 'dynamic-schema';
      script.text = JSON.stringify(graph);
      document.head.appendChild(script);

      // Inject dynamic FAQPage schema if on a topic page with FAQs
      const parts = path.split('/');
      if (parts[0] === 'topic' && resolvedItem) {
          const topicFaqs = (resolvedItem as any).faqs || TOPIC_SPECIFIC_FAQS[resolvedItem.id] || CATEGORY_FAQS[(resolvedItem as any).category] || [];
          if (topicFaqs && topicFaqs.length > 0) {
              const faqSchema = {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": topicFaqs.map((faq: any) => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": faq.answer
                      }
                  }))
              };
              const faqScript = document.createElement('script');
              faqScript.type = 'application/ld+json';
              faqScript.className = 'dynamic-schema-faq';
              faqScript.text = JSON.stringify(faqSchema);
              document.head.appendChild(faqScript);
          }
      }

      // Inject secondary Local Business (MedicalClinic) schema if on home or contact page
      const cleanPath = path.split('/')[0];
      if (cleanPath === 'home' || cleanPath === 'contact' || cleanPath === '' || path === 'home' || path === 'contact' || cleanPath === 'clinic') {
          let streetAddress = "Dr. Shilpa's Metabolic Health Center, Bandra West";
          let locality = "Mumbai";
          let region = "Maharashtra";
          let postalCode = "400050";
          let name = "NutritionColours Clinic";
          
          let addressCountry = "IN";
          let geoObj: any = null;
          if (cleanPath === 'clinic' && path.split('/')[1]) {
              const locId = path.split('/')[1];
              const citySlug = path.split('/')[2];
              const loc = locationsData.find(l => l.id === locId);
              if (loc) {
                  streetAddress = `NutritionColours Virtual Outreach Center, ${loc.city}`;
                  locality = loc.city;
                  region = loc.state;
                  postalCode = loc.pincode;
                  name = `NutritionColours ${loc.city} Virtual Outreach Hub`;
                  addressCountry = "IN";
                  if (loc.latitude && loc.longitude) {
                      geoObj = {
                          "@type": "GeoCoordinates",
                          "latitude": loc.latitude,
                          "longitude": loc.longitude
                      };
                  }
              } else {
                  const matches = intlCountries.filter(l => l.id === locId);
                  if (matches.length > 0) {
                      const intlLoc = (citySlug && matches.find(l => l.city.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') === citySlug)) || matches[0];
                      streetAddress = `NutritionColours Virtual Outreach Center, ${intlLoc.city}`;
                      locality = intlLoc.city;
                      region = intlLoc.country;
                      postalCode = intlLoc.pincode;
                      name = `NutritionColours ${intlLoc.city} Virtual Outreach Hub`;
                      addressCountry = intlLoc.country;
                      if (intlLoc.latitude && intlLoc.longitude) {
                          geoObj = {
                              "@type": "GeoCoordinates",
                              "latitude": intlLoc.latitude,
                              "longitude": intlLoc.longitude
                          };
                      }
                  }
              }
          }

          const clinicSchema: any = {
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": name,
              "alternateName": `NutritionColours Remote Health Service in ${locality}`,
              "description": `Virtual chronic metabolic health outreach serving ${locality}, ${region} remotely. Circadian nutrition diets calibrated to regional staples by Dr. Shilpa Thakur.`,
              "logo": "https://nutritioncolours.com/logo.png",
              "image": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800",
              "telephone": "+91-76961-60133",
              "email": "drthakurshilpa@gmail.com",
              "url": `https://nutritioncolours.com/clinic/${path.split('/')[1] || ''}`,
              "areaServed": {
                  "@type": "AdministrativeArea",
                  "name": locality
              },
              "address": {
                  "@type": "PostalAddress",
                  "streetAddress": streetAddress,
                  "addressLocality": locality,
                  "addressRegion": region,
                  "postalCode": postalCode,
                  "addressCountry": addressCountry
              },
              ...(geoObj ? { "geo": geoObj } : (addressCountry === "IN" ? {
                  "geo": {
                      "@type": "GeoCoordinates",
                      "latitude": 19.0600,
                      "longitude": 72.8362
                  }
              } : {})),
              "openingHoursSpecification": [
                  {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                      "opens": "09:00",
                      "closes": "18:00"
                  }
              ],
              "medicalSpecialty": [
                  "Endocrinology",
                  "Dietician",
                  "PrimaryCare"
              ],
              "availableService": [
                  {
                      "@type": "MedicalTherapy",
                      "name": "Circadian Nutrition Therapy",
                      "description": "Chrononutrition protocols aligning metabolic activity with peripheral clocks."
                  },
                  {
                      "@type": "MedicalTherapy",
                      "name": "Type 2 Diabetes Metabolic Support",
                      "description": "Visceral fat reduction and blood sugar management programs."
                  },
                  {
                      "@type": "MedicalTherapy",
                      "name": "PCOS Metabolic Support",
                      "description": "Supporting insulin sensitivity and promoting natural ovarian cycles."
                  }
              ],
              "priceRange": "$$"
          };

          const clinicScript = document.createElement('script');
          clinicScript.type = 'application/ld+json';
          clinicScript.className = 'dynamic-schema';
          clinicScript.text = JSON.stringify(clinicSchema);
          document.head.appendChild(clinicScript);
      }

      // Automatically inject dynamic BreadcrumbList Schema for Google & AEO search displays
      const crumbs = getBreadcrumbs(path, BLOG_ARTICLES, recipesData, topicsData, locationsData, intlCountries);
      if (crumbs.length > 1) {
          const breadcrumbSchema = {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": crumbs.map((crumb, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "name": crumb.label,
                  "item": `https://nutritioncolours.com/${crumb.path === 'home' ? '' : crumb.path}`
              }))
          };
          const breadcrumbScript = document.createElement('script');
          breadcrumbScript.type = 'application/ld+json';
          breadcrumbScript.className = 'dynamic-schema';
          breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
          document.head.appendChild(breadcrumbScript);
      }
  };

  setMeta('description', desc);
  setMeta('og:title', title);
  setMeta('og:description', desc);
  setMeta('og:image', image);
  setMeta('og:type', type);
  setMeta('twitter:card', 'summary_large_image');

  // Dynamic canonical link injection to eliminate duplicate content bloat
  const canonicalUrl = `https://nutritioncolours.com/${path === 'home' ? '' : path}`;
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);

  injectSchema();
};

const getBreadcrumbs = (path: string, articles: BlogArticle[], recipes: Recipe[], topics: Topic[], locationsData: any[] = [], intlCountries: any[] = []) => {
  const parts = path.split('/');
  const crumbs = [{ label: 'Home', path: 'home' }];
  
  if (['about', 'team', 'testimonials', 'history'].includes(parts[0])) {
    crumbs.push({ label: 'About', path: 'about' });
    if (parts[0] === 'team') {
        crumbs.push({ label: 'Clinical Team', path: 'team' });
        if (parts[1]) {
            const member = TEAM.find(m => m.id === parts[1]);
            if (member) crumbs.push({ label: member.name, path: path });
        }
    } else if (parts[0] === 'testimonials') {
        crumbs.push({ label: 'Success Stories', path: 'testimonials' });
    } else if (parts[0] === 'history') {
        crumbs.push({ label: 'Our History', path: 'history' });
    }
  }

  if (parts[0] === 'plans') crumbs.push({ label: 'Programs', path: 'plans' });

  if (['knowledge', 'blogs', 'vegan', 'sitemap', 'topic', 'article'].includes(parts[0])) {
      crumbs.push({ label: 'Knowledge', path: 'knowledge' });
      if (parts[0] === 'blogs') crumbs.push({ label: 'Blogs', path: 'blogs' });
      if (parts[0] === 'vegan') crumbs.push({ label: 'Vegan Guide', path: 'vegan' });
      if (parts[0] === 'sitemap') crumbs.push({ label: 'Sitemap', path: 'sitemap' });
      
      if (parts[0] === 'article' && parts[1]) {
          crumbs.push({ label: 'Blogs', path: 'blogs' });
          const article = articles.find(a => a.id === parts[1]);
          if (article) crumbs.push({ label: article.title, path: path });
      }
      if (parts[0] === 'topic' && parts[1]) {
          crumbs.push({ label: 'Health Topics', path: 'knowledge' });
          const topic = topics.find(t => t.id === parts[1]);
          if (topic) crumbs.push({ label: topic.title, path: path });
      }
  }

  if (['recipes', 'tools', 'connect', 'recipe'].includes(parts[0])) {
      crumbs.push({ label: 'Lifestyle', path: 'recipes' });
      if (parts[0] === 'recipes') crumbs.push({ label: 'Recipes', path: 'recipes' });
      if (parts[0] === 'recipe' && parts[1]) {
          crumbs.push({ label: 'Recipes', path: 'recipes' });
          const recipe = recipes.find(r => r.id === parts[1]);
          if (recipe) crumbs.push({ label: recipe.title, path: path });
      }
      if (parts[0] === 'tools') crumbs.push({ label: 'Health Tools', path: 'tools' });
      if (parts[0] === 'connect') crumbs.push({ label: 'Community', path: 'connect' });
  }

  if (parts[0] === 'contact' || parts[0] === 'maintenance' || parts[0] === 'terms' || parts[0] === 'privacy') crumbs.push({ label: 'Support', path: 'contact' });
  if (parts[0] === 'maintenance') crumbs.push({ label: 'Help & Data', path: 'maintenance' });
  if (parts[0] === 'terms') crumbs.push({ label: 'Terms of Use', path: 'terms' });
  if (parts[0] === 'privacy') crumbs.push({ label: 'Privacy Policy', path: 'privacy' });
  
  if (['clinics', 'clinic'].includes(parts[0])) {
      crumbs.push({ label: 'Clinics', path: 'clinics' });
      if (parts[0] === 'clinic' && parts[1]) {
          const loc = locationsData.find(l => l.id === parts[1]);
          if (loc) {
              crumbs.push({ label: loc.city, path: path });
          } else {
              const matches = intlCountries.filter(l => l.id === parts[1]);
              if (matches.length > 0) {
                  const citySlug = parts[2];
                  const intlLoc = (citySlug && matches.find(l => l.city.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') === citySlug)) || matches[0];
                  crumbs.push({ label: intlLoc.city, path: path });
              }
          }
      }
  }

  return crumbs;
};

// --- Shared Components ---
const ClinicalCategorySign = ({ type, className = "" }: { type: 'medical' | 'nutrition' | 'protocol' | 'team', className?: string }) => {
    const configs = {
        medical: { icon: <IconFlask size={14} />, label: 'Medical', color: 'emerald' },
        nutrition: { icon: <IconLeaf size={14} />, label: 'Nutrition', color: 'lime' },
        protocol: { icon: <IconFileText size={14} />, label: 'Protocol', color: 'stone' },
        team: { icon: <IconCheck size={14} />, label: 'Team', color: 'emerald' }
    };
    const config = configs[type];
    
    return (
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-${config.color}-100 bg-white shadow-sm ${className}`}>
            <span className={`text-${config.color}-600`}>{config.icon}</span>
            <span className="text-xs font-black uppercase tracking-widest text-stone-600">{config.label}</span>
        </div>
    );
};

const FAQSection = ({ data, title = "Frequently Asked Questions" }: { data: { question: string, answer: string, category: string }[], title?: string }) => (
  <div className="max-w-4xl mx-auto px-6 py-16 animate-in fade-in slide-in-from-bottom-4 optimize-render">
    <h2 className="text-2xl font-black text-emerald-950 mb-8 text-center brand-font">{title}</h2>
    <div className="grid gap-4">
      {data.map((faq, i) => (
        <Accordion key={i} title={faq.question} content={faq.answer} category={faq.category} />
      ))}
    </div>
  </div>
);

const OrganicBlobs = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-lime-200/30 rounded-full blur-[100px] animate-pulse"></div>
    <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-emerald-200/30 rounded-full blur-[100px] animate-pulse delay-700"></div>
    <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] bg-teal-100/30 rounded-full blur-[100px] animate-pulse delay-1000"></div>
  </div>
);

const Header = ({ navigate, toggleMenu, isMenuOpen, currentPath, darkMode, toggleDarkMode, activeLocation, onLocationClick }: any) => {
    // Helper to check if a main nav item is active
    const isActive = (itemId: string, children?: any[]) => {
        if (itemId === 'home' && currentPath === 'home') return true;
        if (currentPath === itemId) return true;
        if (children) {
            return children.some(child => currentPath.startsWith(child.id));
        }
        return currentPath.startsWith(itemId);
    };

    return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-stone-100 transition-all duration-300 shadow-sm">
        {/* Top Contact Bar */}
        <div className="bg-emerald-900 text-white py-2 border-b border-emerald-800/50">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-full">
                <div className="flex items-center gap-8 w-full md:w-auto justify-center md:justify-start">
                    <div className="hidden md:flex items-center gap-2 group cursor-pointer">
                        <IconPhone size={12} className="text-lime-400 group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">+91-76961-60133</span>
                    </div>
                    <div className="hidden md:flex items-center gap-2 group cursor-pointer">
                        <IconMail size={12} className="text-lime-400 group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">drthakurshilpa@gmail.com</span>
                    </div>
                    
                    {/* Top Bar Location indicator */}
                    <button 
                      onClick={onLocationClick}
                      className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-lime-400 hover:text-white transition-colors cursor-pointer bg-white/5 border border-white/10 rounded-lg px-2.5 py-1"
                    >
                      <IconMapPin size={10} />
                      <span>{activeLocation ? `${activeLocation.city}, ${activeLocation.country}` : 'Personalize Region'}</span>
                    </button>
                </div>
                <div className="hidden md:flex items-center gap-4">
                    <a href="#" className="opacity-60 hover:opacity-100 hover:text-lime-400 transition-all transform hover:scale-110" aria-label="Facebook"><IconFacebook size={14} /></a>
                    <a href="#" className="opacity-60 hover:opacity-100 hover:text-lime-400 transition-all transform hover:scale-110" aria-label="Instagram"><IconInstagram size={14} /></a>
                    <a href="#" className="opacity-60 hover:opacity-100 hover:text-lime-400 transition-all transform hover:scale-110" aria-label="LinkedIn"><IconLinkedIn size={14} /></a>
                    <a href="#" className="opacity-60 hover:opacity-100 hover:text-lime-400 transition-all transform hover:scale-110" aria-label="Twitter"><IconTwitter size={14} /></a>
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="hover:opacity-80 transition-opacity flex items-center min-h-[48px] min-w-[48px]" aria-label="NutritionColours Home">
                <Logo />
            </a>
            <div className="hidden lg:flex items-center gap-2">
                {NAV_CONFIG.map(item => {
                    const active = isActive(item.id, item.children);
                    return (
                        <div key={item.id} className="relative group">
                            <a 
                                href={item.children ? '#' : `/${item.id}`}
                                onClick={(e) => { e.preventDefault(); if (!item.children) navigate(item.id); }}
                                className={`
                                    px-4 h-12 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-1
                                    ${active ? 'bg-emerald-50 text-emerald-700 shadow-sm' : 'text-stone-500 hover:text-emerald-700'}
                                    group-hover:bg-emerald-50 group-hover:text-emerald-800
                                `}
                            >
                                {item.label}
                                {item.children && (
                                    <IconChevronDown 
                                        size={14} 
                                        className={`transition-transform duration-300 opacity-50 group-hover:opacity-100 group-hover:rotate-180 ${active ? 'text-emerald-500' : ''}`} 
                                    />
                                )}
                            </a>
                            
                            {/* Dropdown Menu */}
                            {item.children && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white rounded-2xl shadow-xl border border-stone-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
                                    {/* Small arrow pointing up */}
                                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-stone-100 transform rotate-45"></div>
                                    <div className="relative z-10 flex flex-col gap-1">
                                        {item.children.map(child => (
                                            <a 
                                                key={child.id}
                                                href={`/${child.id}`}
                                                onClick={(e) => { e.preventDefault(); navigate(child.id); }}
                                                className={`
                                                    w-full text-left px-4 h-12 rounded-xl text-xs font-bold uppercase tracking-wide transition-colors flex items-center
                                                    ${currentPath.startsWith(child.id) ? 'bg-emerald-50 text-emerald-700' : 'text-stone-600 hover:bg-stone-50 hover:text-emerald-700'}
                                                `}
                                            >
                                                {child.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
                <button 
                    onClick={toggleDarkMode} 
                    className="p-3 rounded-xl bg-stone-50 text-stone-600 hover:text-emerald-700 hover:bg-emerald-50 transition-all ml-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
                    title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    {darkMode ? <IconSun size={16} className="text-amber-500" /> : <IconMoon size={16} className="text-emerald-950" />}
                </button>
                <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('contact'); }} className="ml-2 bg-emerald-950 text-white px-6 h-12 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-900/20 hover:-translate-y-0.5 text-center flex items-center justify-center min-w-[100px]">
                     Contact
                </a>
            </div>
            <div className="flex items-center gap-2 lg:hidden">
                <button 
                    onClick={toggleDarkMode} 
                    className="p-3.5 rounded-xl bg-stone-50 text-stone-600 hover:text-emerald-700 hover:bg-emerald-50 transition-all min-w-[48px] min-h-[48px] flex items-center justify-center"
                    title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    {darkMode ? <IconSun size={16} className="text-amber-500" /> : <IconMoon size={16} className="text-emerald-950" />}
                </button>
                <button onClick={toggleMenu} className="text-emerald-950 p-3 bg-stone-50 rounded-lg min-w-[48px] min-h-[48px] flex items-center justify-center" aria-label="Toggle navigation menu">
                    {isMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
                </button>
            </div>
        </div>
    </header>
    );
};

const AnimatedVisual = ({ type }: { type: string }) => {
    const isPlan1 = type === 'plan-1';
    const isPlan2 = type === 'plan-2';
    const isPlan3 = type === 'plan-3';

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-emerald-950"></div>
            
            {/* Dynamic Mesh/Net effect */}
            <div className="absolute inset-0 opacity-10">
                <svg aria-hidden="true" width="100%" height="100%" className="w-full h-full text-emerald-500">
                    <pattern id="gridLarge" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#gridLarge)" />
                </svg>
            </div>

            {/* Floating Particles replaced with CSS for performance */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

            {/* Clinical Graphics - Static/Lightweight Shapes */}
            <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:flex items-center justify-center opacity-30">
                <AnimatePresence>
                    {isPlan1 && (
                        <m.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.2, opacity: 0 }}
                            className="relative w-[500px] h-[500px]"
                        >
                            <svg aria-hidden="true" viewBox="0 0 200 200" className="w-full h-full text-lime-400">
                                <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" className="animate-spin-slow" />
                                <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" className="animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '40s' }} />
                                <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" className="animate-spin-slow" style={{ animationDuration: '60s' }} />
                                <path d="M100 20 L100 180 M20 100 L180 100" stroke="currentColor" strokeWidth="0.2" className="opacity-50" />
                            </svg>
                        </m.div>
                    )}
                    {isPlan2 && (
                        <m.div 
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            className="relative w-[450px] h-[450px]"
                        >
                            <svg aria-hidden="true" viewBox="0 0 200 200" className="w-full h-full text-emerald-400">
                                <path 
                                    d="M40 100 Q100 20 160 100 T280 100" 
                                    fill="none" stroke="currentColor" strokeWidth="0.5"
                                    className="animate-scan opacity-50"
                                />
                                <circle 
                                    cx="100" cy="100" r="70" 
                                    fill="none" stroke="currentColor" strokeWidth="0.2"
                                    strokeDasharray="1 4"
                                    className="animate-spin-slow" style={{ animationDuration: '60s' }}
                                />
                            </svg>
                        </m.div>
                    )}
                    {isPlan3 && (
                        <m.div 
                            initial={{ y: 200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -200, opacity: 0 }}
                            className="relative w-[400px] h-[400px]"
                        >
                            <svg aria-hidden="true" viewBox="0 0 200 200" className="w-full h-full text-teal-400">
                                <line x1="40" y1="40" x2="40" y2="160" stroke="currentColor" strokeWidth="2" className="animate-pulse" />
                                <line x1="80" y1="40" x2="80" y2="160" stroke="currentColor" strokeWidth="2" className="animate-pulse animation-delay-2000" />
                                <line x1="120" y1="40" x2="120" y2="160" stroke="currentColor" strokeWidth="2" className="animate-pulse animation-delay-4000" />
                                <line x1="160" y1="40" x2="160" y2="160" stroke="currentColor" strokeWidth="2" className="animate-pulse" />
                            </svg>
                        </m.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Scanning Laser Line */}
            <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-lime-400/40 to-transparent blur-sm z-30 animate-scan"></div>

            {/* Ambient Background Glows */}
            <div className="absolute w-[1000px] h-[1000px] bg-emerald-500/10 rounded-full blur-[160px] -top-1/2 -left-1/4 animate-blob"></div>
            <div className="absolute w-[800px] h-[800px] bg-lime-500/5 rounded-full blur-[140px] -bottom-1/2 -right-1/4 animate-blob animation-delay-4000"></div>
        </div>
    );
};

const HeroSlider = ({ banners, onNavigate }: { banners: typeof BANNERS, onNavigate: (path: string) => void }) => {
    const [current, setCurrent] = useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % banners.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [banners.length]);

    return (
        <div className="relative w-full min-h-[500px] h-[65vh] lg:h-[75vh] bg-emerald-950 overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
                {banners.map((banner, i) => i === current && (
                    <m.div 
                        key={banner.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        className="absolute inset-0 group"
                    >
                        <AnimatedVisual type={banner.id} />

                        {/* Creative Overlays */}
                        <div className="absolute inset-0 z-20 bg-gradient-to-r from-emerald-950 via-emerald-950/70 to-transparent"></div>
                        <div className="absolute inset-x-0 bottom-0 h-1/2 z-20 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent"></div>

                        <div className="relative z-30 h-full max-w-7xl mx-auto px-6 grid md:grid-cols-12 items-center gap-12">
                            {/* Left Text Content */}
                            <div className="col-span-12 md:col-span-7 lg:col-span-8 space-y-6 md:space-y-10">
                                <m.div 
                                    initial={{ x: -60, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 1 }}
                                    className="space-y-6"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-[2px] bg-lime-400"></div>
                                        <span className="text-lime-400 text-[10px] font-black uppercase tracking-[0.6em] block drop-shadow-md">Clinical Metabolic Protocol</span>
                                    </div>
                                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-black brand-font leading-[0.85] tracking-tighter text-white">
                                        {banner.title.split(' ').map((word, index) => (
                                            <span key={index} className={index % 2 === 1 ? 'text-lime-400' : ''}>{word} </span>
                                        ))}
                                    </h1>
                                    <div className="max-w-xl">
                                        <p className="text-xl md:text-2xl text-emerald-50/80 leading-relaxed font-black border-l-4 border-lime-400 pl-8 italic">
                                            {banner.subtitle}
                                        </p>
                                    </div>
                                </m.div>
                            </div>

                            {/* Right Vertical Buttons */}
                            <div className="col-span-12 md:col-span-5 lg:col-span-4 flex justify-center md:justify-end">
                                <m.div 
                                    initial={{ x: 60, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 1 }}
                                    className="flex flex-col gap-4 w-full max-w-[320px]"
                                >
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); onNavigate('plans'); }}
                                        className="w-full bg-lime-400 text-emerald-950 py-4 px-6 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-emerald-950 transition-all shadow-2xl shadow-lime-400/20 transform hover:-translate-x-2 active:scale-95 group flex items-center justify-between"
                                    >
                                        <span>Reclaim Biological Freedom</span>
                                        <IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); onNavigate('about'); }}
                                        className="w-full bg-white/5 backdrop-blur-xl text-white border border-white/20 py-4 px-6 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-emerald-950 transition-all transform hover:-translate-x-2 active:scale-95 group flex items-center justify-between"
                                    >
                                        <span>Stop Calorie Counting</span>
                                        <IconCheck size={16} className="text-lime-400" />
                                    </button>
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); onNavigate('connect'); }}
                                        className="w-full bg-white/5 backdrop-blur-xl text-white border border-white/10 py-4 px-6 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all transform hover:-translate-x-2 active:scale-95 group flex items-center justify-between"
                                    >
                                        <span>Join Medicine-Free Hub</span>
                                        <IconFlask size={16} className="text-lime-400" />
                                    </button>
                                </m.div>
                            </div>
                        </div>
                    </m.div>
                ))}
            </AnimatePresence>
            
            {/* Dots */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30 items-center">
                {banners.map((_, i) => (
                    <button 
                        key={i}
                        onClick={() => setCurrent(i)}
                        className="h-12 w-12 transition-all focus:outline-none flex items-center justify-center rounded-full"
                        aria-label={`Go to slide ${i + 1}`}
                    >
                        <span 
                            className={`h-1.5 rounded-full transition-colors duration-500 tabular-nums ${i === current ? 'w-10 bg-lime-400' : 'w-3 bg-white/30 hover:bg-white/50'}`}
                            style={{ transformOrigin: 'left center' }}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

const Footer = ({ setPath, onAdminClick }: { setPath: (path: string) => void, onAdminClick: () => void }) => (
    <footer className="bg-stone-950 text-stone-400 py-10 mt-12 border-t border-emerald-900/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 relative z-10">
            <div className="col-span-2 lg:col-span-2 space-y-6">
                <Logo lightMode />
                <p className="text-sm leading-relaxed text-stone-400 max-w-xs font-medium">
                    Clinical Nutrition Practice led by Dr. Shilpa Thakur. We specialize in reversing metabolic diseases through circadian food protocols and clinical excellence.
                </p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-lime-400 transition-colors bg-white/5 p-2 rounded-lg hover:bg-white/10" aria-label="Instagram"><IconInstagram size={20} /></a>
                    <a href="#" className="hover:text-lime-400 transition-colors bg-white/5 p-2 rounded-lg hover:bg-white/10" aria-label="Facebook"><IconFacebook size={20} /></a>
                    <a href="#" className="hover:text-lime-400 transition-colors bg-white/5 p-2 rounded-lg hover:bg-white/10" aria-label="LinkedIn"><IconLinkedIn size={20} /></a>
                </div>
            </div>
            
            <div>
                <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8 text-emerald-500 border-l-4 border-lime-400 pl-4">Practice</h3>
                <ul className="space-y-0 text-xs font-bold uppercase tracking-widest">
                    <li><a href="/plans" onClick={(e) => { e.preventDefault(); setPath('plans'); }} className="hover:text-white transition-colors min-h-[48px] py-1 flex items-center gap-2 group"><IconArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" /> Programs</a></li>
                    <li><a href="/about" onClick={(e) => { e.preventDefault(); setPath('about'); }} className="hover:text-white transition-colors min-h-[48px] py-1 flex items-center gap-2 group"><IconArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" /> Philosophy</a></li>
                    <li><a href="/team" onClick={(e) => { e.preventDefault(); setPath('team'); }} className="hover:text-white transition-colors min-h-[48px] py-1 flex items-center gap-2 group"><IconArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" /> Clinical Team</a></li>
                    <li><a href="/testimonials" onClick={(e) => { e.preventDefault(); setPath('testimonials'); }} className="hover:text-white transition-colors min-h-[48px] py-1 flex items-center gap-2 group"><IconArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" /> Success Stories</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8 text-emerald-500 border-l-4 border-lime-400 pl-4">Resources</h3>
                <ul className="space-y-0 text-xs font-bold uppercase tracking-widest">
                    <li><a href="/blogs" onClick={(e) => { e.preventDefault(); setPath('blogs'); }} className="hover:text-white transition-colors min-h-[48px] py-1 flex items-center gap-2 group"><IconArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" /> Health Journal</a></li>
                    <li><a href="/recipes" onClick={(e) => { e.preventDefault(); setPath('recipes'); }} className="hover:text-white transition-colors min-h-[48px] py-1 flex items-center gap-2 group"><IconArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" /> Healing Recipes</a></li>
                    <li><a href="/tools" onClick={(e) => { e.preventDefault(); setPath('tools'); }} className="hover:text-white transition-colors min-h-[48px] py-1 flex items-center gap-2 group"><IconArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" /> Health Tools</a></li>
                    <li><a href="/vegan" onClick={(e) => { e.preventDefault(); setPath('vegan'); }} className="hover:text-white transition-colors min-h-[48px] py-1 flex items-center gap-2 group"><IconArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" /> Vegan Guide</a></li>
                </ul>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-1">
                <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8 text-emerald-500 border-l-4 border-lime-400 pl-4">Contact</h3>
                <div className="space-y-4 text-sm font-medium">
                    <div className="flex items-start gap-4">
                        <IconPhone size={18} className="text-lime-400 shrink-0 mt-0.5" />
                        <span className="text-emerald-50 font-mono tracking-tight">+91-76961-60133</span>
                    </div>
                    <div className="flex items-start gap-4 overflow-hidden">
                        <IconMail size={18} className="text-lime-400 shrink-0 mt-0.5" />
                        <a href="mailto:drthakurshilpa@gmail.com" className="hover:text-white transition-colors truncate block min-h-[48px] py-1 flex items-center">drthakurshilpa@gmail.com</a>
                    </div>
                    <div className="text-stone-400 text-xs uppercase font-bold tracking-widest leading-relaxed pt-2">
                        Chandigarh, Punjab, India<br/>
                        Serving Patients Globally.
                    </div>
                </div>
                <div className="mt-10 pt-8 border-t border-stone-800">
                    <div className="flex items-center gap-3 mb-3">
                        <IconCheck size={18} className="text-lime-400" />
                        <span className="text-xs font-black uppercase tracking-widest text-white">Evidence-Based</span>
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed">All content is reviewed by clinical medical researchers for accuracy.</p>
                </div>
            </div>
        </div>

        {/* Footer Sitemap (SEO Best Practice) */}
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-stone-800/50 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-6">
                <h4 className="text-xs font-black text-stone-200 uppercase tracking-[0.2em] border-b border-stone-800 pb-2">Metabolic Care</h4>
                <ul className="space-y-0 text-xs text-stone-400 font-bold uppercase tracking-widest">
                    <li><button onClick={() => setPath('topic/diabetes-reversal')} className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Diabetes Reversal</button></li>
                    <li><button onClick={() => setPath('topic/fatty-liver-reversal')} className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Fatty Liver Protocol</button></li>
                    <li><button onClick={() => setPath('topic/blood-sugar-control')} className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Glucose Stability</button></li>
                </ul>
            </div>
            <div className="space-y-6">
                <h4 className="text-xs font-black text-stone-200 uppercase tracking-[0.2em] border-b border-stone-800 pb-2">Women&apos;s Health</h4>
                <ul className="space-y-0 text-xs text-stone-400 font-bold uppercase tracking-widest">
                    <li><button onClick={() => setPath('topic/pcos-balance')} className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">PCOS Balance</button></li>
                    <li><button onClick={() => setPath('topic/fertility-hormone-support')} className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Fertility Guidance</button></li>
                    <li><button onClick={() => setPath('topic/menopause-weight-mgmt')} className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Menopause Support</button></li>
                </ul>
            </div>
            <div className="space-y-6">
                <h4 className="text-xs font-black text-stone-200 uppercase tracking-[0.2em] border-b border-stone-800 pb-2">Clinical Ethics</h4>
                <ul className="space-y-0 text-xs text-stone-400 font-bold uppercase tracking-widest">
                    <li><button onClick={() => setPath('editorial-policy')} className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Editorial Policy</button></li>
                    <li><button onClick={() => setPath('evidence-approach')} className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Scientific Approach</button></li>
                    <li><button onClick={() => setPath('privacy')} className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Privacy</button></li>
                    <li><button onClick={() => setPath('terms')} className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Terms</button></li>
                </ul>
            </div>
            <div className="space-y-6">
                <h4 className="text-xs font-black text-stone-200 uppercase tracking-[0.2em] border-b border-stone-800 pb-2">Quick Nav</h4>
                <ul className="space-y-0 text-xs text-stone-400 font-bold uppercase tracking-widest">
                    <li><button onClick={() => setPath('sitemap')} className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Visual Sitemap</button></li>
                    <li><button onClick={() => setPath('tools')} className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Clinical Tools</button></li>
                </ul>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12 mt-12 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-[0.2em] font-black">
            <p className="text-stone-400">&copy; 2024 NutritionColours. All Rights Reserved.</p>
            <div className="flex gap-8 items-center">
                <button onClick={() => setPath('sitemap')} className="text-stone-400 hover:text-white transition-colors">Mapping</button>
                <button onClick={onAdminClick} className="bg-emerald-950/50 px-6 py-3 rounded-xl text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-3 border border-emerald-900/30 whitespace-nowrap"><IconLock size={14} /> Secure Admin Access</button>
            </div>
        </div>
    </footer>
);

const AdminPanel = ({ isOpen, onClose, features, toggleFeature, onLogin, intlCountries = [] }: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [inquiries, setInquiries] = useState<any[]>([]);

    React.useEffect(() => {
        if (isOpen) {
            const stored = localStorage.getItem('nutrition_inquiries');
            if (stored) {
                try {
                    setInquiries(JSON.parse(stored));
                } catch (e) {
                    console.error("Failed to parse inquiries", e);
                }
            }
        }
    }, [isOpen]);

    const clearInquiries = () => {
        if (window.confirm("Are you sure you want to clear all inquiries?")) {
            localStorage.removeItem('nutrition_inquiries');
            setInquiries([]);
        }
    };

    const downloadCSV = () => {
        if (inquiries.length === 0) return;
        
        const headers = ["Date", "First Name", "Last Name", "Email", "Interest", "Message"];
        const csvRows = [];
        
        // Headers row
        csvRows.push(headers.join(","));
        
        // Data rows
        for (const inq of inquiries) {
            const values = [
                new Date(inq.date).toLocaleString(),
                inq.firstName,
                inq.lastName,
                inq.email,
                inq.interest,
                inq.message
            ];
            
            const escaped = values.map(val => {
                const s = val ? val.toString() : '';
                if (s.includes('"') || s.includes(',') || s.includes('\n') || s.includes('\r')) {
                    return `"${s.replace(/"/g, '""')}"`;
                }
                return s;
            });
            csvRows.push(escaped.join(","));
        }
        
        const csvString = csvRows.join("\n");
        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `patient_inquiries_${Date.now()}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (!isOpen) return null;

    const handleLogin = () => {
        if (password === 'admin123') {
            setIsAuthenticated(true);
            if (onLogin) onLogin(true);
        } else {
            alert('Invalid password (try: admin123)');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in">
                <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full">
                    <div className="text-center mb-6">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                            <IconLock size={24} />
                        </div>
                        <h2 className="text-2xl font-black text-emerald-950 brand-font">Admin Access</h2>
                    </div>
                    <input 
                        type="password" 
                        placeholder="Enter Password" 
                        className="w-full p-4 bg-stone-50 rounded-xl border border-stone-200 mb-4 focus:outline-none focus:border-emerald-500 transition-colors"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                    />
                    <button onClick={handleLogin} className="w-full bg-emerald-900 text-white py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-800 transition-colors mb-3">
                        Login
                    </button>
                    <button onClick={onClose} className="w-full text-stone-400 text-xs font-bold uppercase tracking-widest hover:text-stone-600">
                        Cancel
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[100] bg-stone-100/90 backdrop-blur-md overflow-y-auto animate-in slide-in-from-bottom-10">
            <div className="max-w-7xl mx-auto p-6 md:p-10 animate-in fade-in">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-4xl font-black text-emerald-950 brand-font">Admin Dashboard</h1>
                        <p className="text-stone-500">Manage site content and clinical portal features.</p>
                    </div>
                    <button onClick={onClose} aria-label="Close Admin Dashboard" className="bg-white p-3 rounded-full shadow-sm hover:bg-stone-50 text-stone-400 hover:text-stone-600 transition-colors">
                        <IconX size={24} />
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 h-fit">
                        <h3 className="font-bold text-emerald-950 mb-4 flex items-center gap-2">
                            <IconSettings size={18} className="text-emerald-500" /> Feature Toggles
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl border border-stone-100">
                                <span className="text-sm font-medium text-stone-700">Clinical Assistant Portal</span>
                                <button 
                                    onClick={() => toggleFeature('enableAiAssistant')}
                                    className={`w-12 h-6 rounded-full transition-colors relative ${features.enableAiAssistant ? 'bg-emerald-500' : 'bg-stone-300'}`}
                                >
                                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform shadow-sm ${features.enableAiAssistant ? 'translate-x-6' : ''}`}></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:col-span-2">
                        <AdminAuditList data={getEnhancedSiteStructure(intlCountries)} />
                    </div>
                </div>

                {/* Patient Inquiries Table */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 mb-12">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h3 className="text-xl font-black text-emerald-950 brand-font flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-sm">📥</span>
                                Patient Inquiries ({inquiries.length})
                            </h3>
                            <p className="text-stone-500 text-xs mt-1">Direct inquiries submitted via the Contact Us page.</p>
                        </div>
                        {inquiries.length > 0 && (
                            <div className="flex gap-2">
                                <button 
                                    onClick={downloadCSV}
                                    className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl transition-all"
                                >
                                    Download CSV
                                </button>
                                <button 
                                    onClick={clearInquiries}
                                    className="bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl transition-all"
                                >
                                    Clear All
                                </button>
                            </div>
                        )}
                    </div>

                    {inquiries.length === 0 ? (
                        <div className="text-center py-12 bg-stone-50 rounded-2xl border border-stone-100 border-dashed">
                            <span className="text-3xl">📭</span>
                            <p className="text-stone-500 text-sm font-bold mt-2">No inquiries received yet.</p>
                            <p className="text-stone-400 text-xs mt-1">Submitted contact forms will appear here.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-stone-100 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                                        <th className="py-3 px-4">Date</th>
                                        <th className="py-3 px-4">Name</th>
                                        <th className="py-3 px-4">Email</th>
                                        <th className="py-3 px-4">Interest</th>
                                        <th className="py-3 px-4">Message</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-50 text-sm text-stone-700">
                                    {inquiries.map((inq) => (
                                        <tr key={inq.id} className="hover:bg-stone-50/50 transition-colors animate-in fade-in duration-350">
                                            <td className="py-4 px-4 font-mono text-xs text-stone-400 whitespace-nowrap">
                                                {new Date(inq.date).toLocaleString()}
                                            </td>
                                            <td className="py-4 px-4 font-bold text-emerald-950">
                                                {inq.firstName} {inq.lastName}
                                            </td>
                                            <td className="py-4 px-4 font-medium text-stone-600">
                                                <a href={`mailto:${inq.email}`} className="hover:underline text-emerald-600">{inq.email}</a>
                                            </td>
                                            <td className="py-4 px-4">
                                                <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-100">
                                                    {inq.interest}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4 max-w-xs truncate" title={inq.message}>
                                                {inq.message}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


// --- Biomarker Reference Configurations for Interactive Trackers ---
interface BiomarkerSpec {
  id: string;
  name: string;
  min: number;
  max: number;
  unit: string;
  optimalMax: number;
  borderlineMax: number;
  startValue: number;
  remedy: string;
}

const BIOMARKER_METRIC_CONFIGS: Record<string, BiomarkerSpec> = {
  'alt (alanine aminotransferase)': {
    id: 'alt',
    name: 'ALT (Alanine Aminotransferase)',
    min: 5,
    max: 150,
    unit: 'U/L',
    optimalMax: 30,
    borderlineMax: 50,
    startValue: 65,
    remedy: 'Consume Turmeric alongside healthy fats (like cold-pressed coconut oil) to lower liver cell swelling.'
  },
  'ast (aspartate aminotransferase)': {
    id: 'ast',
    name: 'AST (Aspartate Aminotransferase)',
    min: 5,
    max: 150,
    unit: 'U/L',
    optimalMax: 30,
    borderlineMax: 50,
    startValue: 55,
    remedy: 'Eliminate industrial seed oils and drink ginger-infused warm water to support cell repair.'
  },
  'ggt (gamma-glutamyl transferase)': {
    id: 'ggt',
    name: 'GGT (Gamma-Glutamyl Transferase)',
    min: 5,
    max: 200,
    unit: 'U/L',
    optimalMax: 25,
    borderlineMax: 50,
    startValue: 60,
    remedy: 'Add raw crushed garlic to meals and complete eating windows early to stimulate bile flow.'
  },
  'fasting insulin': {
    id: 'fasting-insulin',
    name: 'Fasting Insulin',
    min: 2,
    max: 50,
    unit: 'uIU/mL',
    optimalMax: 6,
    borderlineMax: 15,
    startValue: 18,
    remedy: 'Follow the 10-hour daytime eating window (8 AM to 6 PM) to reduce fasting insulin baselines.'
  },
  'fibroscan cap score (db/m)': {
    id: 'fibroscan-cap',
    name: 'FibroScan CAP Score',
    min: 150,
    max: 400,
    unit: 'dB/m',
    optimalMax: 238,
    borderlineMax: 260,
    startValue: 285,
    remedy: 'Introduce 1,000 mg ginger juice extract and eliminate all processed fructose.'
  },
  'homa-ir (homeostasis model assessment)': {
    id: 'homa-ir',
    name: 'HOMA-IR Score',
    min: 0.5,
    max: 10.0,
    unit: 'score',
    optimalMax: 1.5,
    borderlineMax: 2.5,
    startValue: 3.8,
    remedy: 'Use Ceylon Cinnamon and Fenugreek seeds to clear cellular fats and improve receptor response.'
  },
  'fasting serum insulin': {
    id: 'fasting-serum-insulin',
    name: 'Fasting Serum Insulin',
    min: 2,
    max: 50,
    unit: 'uIU/mL',
    optimalMax: 6,
    borderlineMax: 15,
    startValue: 16,
    remedy: 'Implement daytime-only feeding windows to optimize insulin signaling pathways.'
  },
  'hba1c': {
    id: 'hba1c',
    name: 'HbA1c (%)',
    min: 4.0,
    max: 12.0,
    unit: '%',
    optimalMax: 5.6,
    borderlineMax: 6.4,
    startValue: 7.2,
    remedy: 'Prioritize eating fiber (vegetables) and protein first in every meal to flatten glucose spikes.'
  },
  'triglyceride-to-hdl ratio': {
    id: 'tg-hdl-ratio',
    name: 'Triglyceride-to-HDL Ratio',
    min: 0.5,
    max: 8.0,
    unit: 'ratio',
    optimalMax: 2.0,
    borderlineMax: 4.0,
    startValue: 3.9,
    remedy: 'Remove high-fructose corn syrups and refined sweeteners to clear blood fats.'
  },
  'salivary cortisol awakening response (car)': {
    id: 'salivary-cortisol',
    name: 'Salivary Cortisol (CAR)',
    min: 1.0,
    max: 15.0,
    unit: 'ng/mL',
    optimalMax: 4.0,
    borderlineMax: 8.0,
    startValue: 11.0,
    remedy: 'Take 500mg Ashwagandha root extract at night to modulate SCN output.'
  },
  'melatonin-sulfate (urine)': {
    id: 'melatonin-sulfate',
    name: 'Melatonin-Sulfate',
    min: 5,
    max: 100,
    unit: 'ug/L',
    optimalMax: 70,
    borderlineMax: 40,
    startValue: 30,
    remedy: 'Avoid blue light after 7:00 PM and incorporate chamomile/nutmeg at bedtime.'
  },
  'fasting glucose stability': {
    id: 'glucose-stability',
    name: 'Fasting Glucose Stability',
    min: 60,
    max: 200,
    unit: 'mg/dL',
    optimalMax: 90,
    borderlineMax: 125,
    startValue: 115,
    remedy: 'Align your last meal with the sunset to support glucose homeostasis during sleep.'
  },
  'heart rate variability (hrv)': {
    id: 'hrv',
    name: 'Heart Rate Variability (HRV)',
    min: 10,
    max: 150,
    unit: 'ms',
    optimalMax: 80,
    borderlineMax: 40,
    startValue: 32,
    remedy: 'Take Ashwagandha extract and practice 10 minutes of deep belly breathing daily.'
  },
  'hba1c (%)': {
    id: 'hba1c-diabetes',
    name: 'HbA1c (%)',
    min: 4.0,
    max: 12.0,
    unit: '%',
    optimalMax: 5.6,
    borderlineMax: 6.4,
    startValue: 7.8,
    remedy: 'Use Ceylon Cinnamon and Fenugreek seeds daily to lower HbA1c values.'
  },
  'fasting plasma glucose (fpg)': {
    id: 'fpg',
    name: 'Fasting Plasma Glucose (FPG)',
    min: 70,
    max: 300,
    unit: 'mg/dL',
    optimalMax: 99,
    borderlineMax: 125,
    startValue: 158,
    remedy: 'Take Fenugreek seeds soaked in warm water before breakfast.'
  },
  'fasting c-peptide': {
    id: 'c-peptide',
    name: 'Fasting C-Peptide',
    min: 0.1,
    max: 6.0,
    unit: 'ng/mL',
    optimalMax: 2.0,
    borderlineMax: 3.5,
    startValue: 2.9,
    remedy: 'Adopt a whole-food low-carb vegan diet to support pancreatic beta-cell recuperation.'
  },
  'homa-ir score': {
    id: 'homa-ir-score',
    name: 'HOMA-IR Score',
    min: 0.5,
    max: 10.0,
    unit: 'score',
    optimalMax: 1.5,
    borderlineMax: 2.5,
    startValue: 4.2,
    remedy: 'Add Ceylon Cinnamon to clear cellular fat blockages and restore glucose transport.'
  },
  'postprandial insulin': {
    id: 'postprandial-insulin',
    name: 'Postprandial Insulin',
    min: 5,
    max: 100,
    unit: 'uIU/mL',
    optimalMax: 25,
    borderlineMax: 50,
    startValue: 68,
    remedy: 'Slow glucose uptake by eating complex fibers before any carbohydrates.'
  },
  'lh to fsh ratio': {
    id: 'lh-fsh',
    name: 'LH to FSH Ratio',
    min: 0.5,
    max: 5.0,
    unit: 'ratio',
    optimalMax: 1.5,
    borderlineMax: 2.0,
    startValue: 2.8,
    remedy: 'Consume a high-protein breakfast within 1 hour of waking to normalize LH spikes.'
  },
  'free & total testosterone': {
    id: 'testosterone',
    name: 'Free & Total Testosterone',
    min: 5,
    max: 150,
    unit: 'pg/mL',
    optimalMax: 35,
    borderlineMax: 55,
    startValue: 74,
    remedy: 'Utilize Spearmint and Holy Basil to inhibit theca cell androgen production.'
  },
  'fasting insulin (homa-ir)': {
    id: 'fasting-insulin-pcos',
    name: 'Fasting Insulin (HOMA-IR)',
    min: 2,
    max: 50,
    unit: 'uIU/mL',
    optimalMax: 6,
    borderlineMax: 15,
    startValue: 17,
    remedy: 'Maintain a 12-hour overnight fast to improve receptor sensitivity.'
  },
  'dheas': {
    id: 'dheas',
    name: 'DHEAS',
    min: 50,
    max: 600,
    unit: 'ug/dL',
    optimalMax: 200,
    borderlineMax: 350,
    startValue: 410,
    remedy: 'Incorporate Holy Basil to regulate adrenal cortisol and DHEA production.'
  },
  'sex hormone-binding globulin (shbg)': {
    id: 'shbg',
    name: 'Sex Hormone-Binding Globulin',
    min: 10,
    max: 120,
    unit: 'nmol/L',
    optimalMax: 70,
    borderlineMax: 40,
    startValue: 22,
    remedy: 'Reverse hyperinsulinemia to support liver synthesis of SHBG, lowering free testosterone.'
  },
  'tsh (thyroid stimulating hormone)': {
    id: 'tsh',
    name: 'TSH (Thyroid Stimulating Hormone)',
    min: 0.2,
    max: 20.0,
    unit: 'uIU/mL',
    optimalMax: 2.0,
    borderlineMax: 4.5,
    startValue: 6.8,
    remedy: 'Drink ginger tea daily to reduce follicular cell inflammation and normalize TSH.'
  },
  'free t3 & free t4': {
    id: 'free-thyroid',
    name: 'Free T3 & Free T4',
    min: 1.0,
    max: 8.0,
    unit: 'pg/mL',
    optimalMax: 4.0,
    borderlineMax: 2.5,
    startValue: 2.1,
    remedy: 'Consume organic Selenium (Brazil nuts) and Ashwagandha to support T4 to T3 conversion.'
  },
  'anti-tpo antibodies': {
    id: 'anti-tpo',
    name: 'Anti-TPO Antibodies',
    min: 0,
    max: 1000,
    unit: 'IU/mL',
    optimalMax: 34,
    borderlineMax: 100,
    startValue: 420,
    remedy: 'Eliminate gluten strictly to halt immune cross-reactivity with thyroid tissue.'
  },
  'anti-tg antibodies': {
    id: 'anti-tg',
    name: 'Anti-TG Antibodies',
    min: 0,
    max: 1000,
    unit: 'IU/mL',
    optimalMax: 115,
    borderlineMax: 200,
    startValue: 380,
    remedy: 'Lower cellular oxidative stress by drinking raw ginger juices daily.'
  },
  'reverse t3 (rt3)': {
    id: 'rt3',
    name: 'Reverse T3 (rT3)',
    min: 5,
    max: 50,
    unit: 'ng/dL',
    optimalMax: 15,
    borderlineMax: 25,
    startValue: 32,
    remedy: 'Address emotional and biological stress with Ashwagandha to suppress rT3 conversion.'
  },
  'zonulin (stool/serum)': {
    id: 'zonulin',
    name: 'Zonulin (Stool/Serum)',
    min: 10,
    max: 150,
    unit: 'ng/mL',
    optimalMax: 45,
    borderlineMax: 75,
    startValue: 92,
    remedy: 'Consume prebiotic fibers (like sprouted mung) to feed Akkermansia and seal tight junctions.'
  },
  'calprotectin (inflammatory marker)': {
    id: 'calprotectin',
    name: 'Calprotectin',
    min: 10,
    max: 300,
    unit: 'ug/g',
    optimalMax: 50,
    borderlineMax: 120,
    startValue: 145,
    remedy: 'Use ginger and cardamom infusions to suppress intestinal cytokine expression.'
  },
  'scfa profile (acetate, butyrate)': {
    id: 'scfa',
    name: 'SCFA (Acetate/Butyrate)',
    min: 10,
    max: 120,
    unit: 'umol/g',
    optimalMax: 80,
    borderlineMax: 50,
    startValue: 35,
    remedy: 'Increase plant diversity (30+ varieties weekly) to feed SCFA-producing bacteria.'
  },
  'gut microbiome sequencing ratio (bacteroidetes/firmicutes)': {
    id: 'microbiome-ratio',
    name: 'B/F Sequencing Ratio',
    min: 0.1,
    max: 5.0,
    unit: 'ratio',
    optimalMax: 2.0,
    borderlineMax: 1.0,
    startValue: 0.6,
    remedy: 'Sprinkle polyphenols (from berry skins, cloves) to balance the gut microbiome ratio.'
  },
  'systolic blood pressure': {
    id: 'systolic-bp',
    name: 'Systolic Blood Pressure',
    min: 80,
    max: 180,
    unit: 'mmHg',
    optimalMax: 119,
    borderlineMax: 139,
    startValue: 142,
    remedy: 'Utilize raw crushed garlic daily to trigger endothelial nitric oxide vasodilation.'
  },
  'diastolic blood pressure': {
    id: 'diastolic-bp',
    name: 'Diastolic Blood Pressure',
    min: 50,
    max: 110,
    unit: 'mmHg',
    optimalMax: 79,
    borderlineMax: 89,
    startValue: 94,
    remedy: 'Restrict sodium intake to daylight hours (before 6 PM) and consume potassium-rich greens.'
  },
  'hs-crp (inflammatory marker)': {
    id: 'hs-crp',
    name: 'hs-CRP',
    min: 0.1,
    max: 10.0,
    unit: 'mg/L',
    optimalMax: 1.0,
    borderlineMax: 3.0,
    startValue: 4.8,
    remedy: 'Use Ceylon Cinnamon and raw ginger extract to damp systemic vascular inflammation.'
  },
  'uric acid': {
    id: 'uric-acid',
    name: 'Uric Acid',
    min: 2.0,
    max: 12.0,
    unit: 'mg/dL',
    optimalMax: 5.5,
    borderlineMax: 7.0,
    startValue: 8.2,
    remedy: 'Avoid refined fructose syrup and stay hydrated with fennel seeds water.'
  },
  'fasting serum insulin (bp)': {
    id: 'fasting-serum-insulin-bp',
    name: 'Fasting Serum Insulin',
    min: 2,
    max: 50,
    unit: 'uIU/mL',
    optimalMax: 6,
    borderlineMax: 15,
    startValue: 19,
    remedy: 'Limit eating window to 10 hours to clear insulin load and relax blood vessels.'
  }
};

// --- Sub-Component: Chrononutrition Sun-Clock Timeline ---
interface TimelineMilestone {
  time: string;
  phase: string;
  hormone: string;
  action: string;
  rationale: string;
}

const CHRONO_MILESTONES: TimelineMilestone[] = [
  {
    time: '06:30 AM',
    phase: 'Sunrise Phase (SCN Reset)',
    hormone: 'Cortisol Awakening / Melatonin Suppressed',
    action: 'Expose eyes to natural light for 15 minutes. Take thyroid meds empty stomach.',
    rationale: 'Direct morning light hits retinal ganglion cells, resetting the master SCN brain clock and boosting metabolic cortisol.'
  },
  {
    time: '08:30 AM',
    phase: 'Feeding Gateway (Hormonal Start)',
    hormone: 'High Insulin Sensitivity / Low Cortisol',
    action: 'Consume complex fiber and protein first (e.g. sprouted mung or Ragi bread).',
    rationale: 'Early eating aligns with rising core temperatures and optimal digestive enzyme levels, preventing fat accumulation.'
  },
  {
    time: '01:00 PM',
    phase: 'Metabolic Noon (Max Absorption)',
    hormone: 'Enzymatic Peak / Highest Thyroid Activity',
    action: 'Eat your largest meal. Include therapeutic spices like Turmeric and Garlic.',
    rationale: 'Biliary secretion and pancreatic enzymes peak around noon, facilitating maximum breakdown of fat-soluble phytonutrients.'
  },
  {
    time: '06:00 PM',
    phase: 'Autophagy Gate (Restoration)',
    hormone: 'Melatonin Rise / Lower Insulin Efficiency',
    action: 'Finish dinner. Begin overnight fast (minimum 14 hours).',
    rationale: 'Eating after sunset triggers circadian insulin resistance. Early closure allows liver glycogen exhaustion, initiating autophagy.'
  },
  {
    time: '10:00 PM',
    phase: 'Pineal Shift (Regeneration)',
    hormone: 'Peak Melatonin / GH Pulse',
    action: 'Drink warm A2/Almond milk with Ashwagandha and Nutmeg.',
    rationale: 'Melatonin rises to orchestrate cellular DNA repairs. Sleep-inducing adaptogens suppress late-night cortisol leakage.'
  }
];

const ChrononutritionTimeline = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="bg-stone-50 border border-stone-100 rounded-[32px] p-6 md:p-8 space-y-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full blur-[60px] opacity-60"></div>
      
      <div>
        <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-800 mb-2">Interactive Chrono-Nutrition Protocol</div>
        <p className="text-sm text-stone-500">Click each milestone along the sun-cycle to view optimal hormonal actions and clinical rationales.</p>
      </div>

      {/* Sun/Moon Timeline Slider UI */}
      <div className="relative flex justify-between items-center px-4 md:px-12 py-6 border-b border-stone-200/60 overflow-x-auto scrollbar-hide">
        <div className="absolute left-4 right-4 md:left-12 md:right-12 h-1 bg-gradient-to-r from-amber-200 via-emerald-200 to-indigo-900 top-1/2 -translate-y-1/2 z-0 rounded-full"></div>
        {CHRONO_MILESTONES.map((m, idx) => {
          const isActive = idx === activeIdx;
          const isLate = idx >= 3;
          return (
            <button
              key={m.time}
              onClick={() => setActiveIdx(idx)}
              className="relative z-10 flex flex-col items-center group focus:outline-none min-w-[70px]"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shadow-md transition-all duration-300 transform group-hover:scale-110 ${isActive ? 'bg-emerald-950 text-lime-400 scale-110 ring-4 ring-emerald-500/20' : isLate ? 'bg-indigo-950 text-indigo-300' : 'bg-amber-100 text-amber-900'}`}>
                {isActive ? '●' : idx + 1}
              </div>
              <span className="text-[10px] font-black mt-2 uppercase tracking-widest text-stone-600 group-hover:text-emerald-900">{m.time}</span>
            </button>
          );
        })}
      </div>

      {/* Detail Showcase Panel */}
      <div className="animate-in fade-in duration-500 bg-white rounded-[24px] p-6 border border-stone-100 shadow-sm grid md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5 space-y-3">
          <span className={`inline-block px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-full ${activeIdx >= 3 ? 'bg-indigo-50 text-indigo-800' : 'bg-amber-50 text-amber-800'}`}>
            {CHRONO_MILESTONES[activeIdx].phase}
          </span>
          <h5 className="text-xl font-bold text-emerald-950 brand-font">
            Active Hormone Cycle
          </h5>
          <p className="text-xs font-mono text-emerald-800 bg-emerald-50/60 px-3 py-1.5 rounded-lg inline-block">
            {CHRONO_MILESTONES[activeIdx].hormone}
          </p>
        </div>
        <div className="md:col-span-7 space-y-4 md:border-l md:border-stone-100 md:pl-6">
          <div>
            <h6 className="text-[10px] font-black uppercase text-stone-400 tracking-wider mb-1">Clinical Action</h6>
            <p className="text-sm font-bold text-stone-700">{CHRONO_MILESTONES[activeIdx].action}</p>
          </div>
          <div>
            <h6 className="text-[10px] font-black uppercase text-stone-400 tracking-wider mb-1">Biological Rationale</h6>
            <p className="text-xs text-stone-500 leading-relaxed">{CHRONO_MILESTONES[activeIdx].rationale}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Sub-Component: Interactive Biomarker Risk Tracker ---
interface RiskTrackerProps {
  biomarkersList: string[];
}

const BiomarkerRiskTracker = ({ biomarkersList }: RiskTrackerProps) => {
  const specs = biomarkersList
    .map(name => BIOMARKER_METRIC_CONFIGS[name.toLowerCase()])
    .filter(Boolean);

  const [values, setValues] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    specs.forEach(s => {
      initial[s.id] = s.startValue;
    });
    return initial;
  });

  const getStatus = (val: number, spec: BiomarkerSpec) => {
    if (val <= spec.optimalMax) return { label: 'Optimal', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (val <= spec.borderlineMax) return { label: 'Borderline', color: 'text-amber-800 bg-amber-50 border-amber-200' };
    return { label: 'High Risk', color: 'text-red-800 bg-red-50 border-red-200' };
  };

  const handleSliderChange = (id: string, val: number) => {
    setValues(prev => ({ ...prev, [id]: val }));
  };

  if (specs.length === 0) return null;

  return (
    <div className="bg-stone-50 border border-stone-100 rounded-[32px] p-6 md:p-8 space-y-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-[60px] opacity-60"></div>
      
      <div>
        <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-800 mb-2">Live Metabolic Biomarker Tracker</div>
        <p className="text-sm text-stone-500">Drag the sliders to simulate your blood panel values. View instant feedback and therapeutic protocols.</p>
      </div>

      <div className="space-y-6">
        {specs.map(spec => {
          const currentVal = values[spec.id] ?? spec.startValue;
          const status = getStatus(currentVal, spec);
          return (
            <div key={spec.id} className="bg-white rounded-[24px] p-6 border border-stone-100 shadow-sm space-y-4">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <div>
                  <h5 className="font-bold text-sm text-emerald-950">{spec.name}</h5>
                  <span className={`inline-block px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider border rounded-md mt-1 ${status.color}`}>
                    {status.label}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-emerald-950 font-mono">{currentVal}</span>
                  <span className="text-xs text-stone-500 font-bold ml-1">{spec.unit}</span>
                </div>
              </div>

              {/* Slider Input */}
              <div className="space-y-2">
                <input
                  type="range"
                  min={spec.min}
                  max={spec.max}
                  step={spec.unit === '%' || spec.unit === 'ratio' || spec.id === 'homa-ir' ? '0.1' : '1'}
                  value={currentVal}
                  onChange={(e) => handleSliderChange(spec.id, parseFloat(e.target.value))}
                  className="clinical-slider"
                />
                <div className="flex justify-between text-[9px] font-black text-stone-500 uppercase tracking-widest">
                  <span>Min: {spec.min}</span>
                  <span>Optimal: &lt; {spec.optimalMax}</span>
                  <span>Max: {spec.max}</span>
                </div>
              </div>

              {/* Dynamic Remedy Feedback */}
              <div className="p-4 bg-stone-50 rounded-2xl text-xs flex gap-3 items-start border border-stone-100">
                <span className="text-emerald-700 mt-0.5">ℹ</span>
                <p className="text-stone-600 leading-relaxed">
                  <strong>Clinical Protocol:</strong> {spec.remedy}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// --- Sub-Component: Clinical Summary Box (GEO / LLM Scraping Hook) ---
const ClinicalSummaryBox = ({ type, data }: { type: 'herb' | 'condition'; data: any }) => {
  if (type === 'herb') {
    const herb = data as HerbalEntity;
    return (
      <div className="clinical-summary-card">
        <div className="summary-label">
          <span>📊</span>
          <span>GEO AI-Scrapable Clinical Summary</span>
        </div>
        <div className="summary-grid">
          <div className="summary-item">
            <span className="item-label">Clinical Class</span>
            <span className="item-value">{herb.name} ({herb.scientificName}) is a clinical-grade {herb.category} containing {herb.activeCompounds.join(', ')}.</span>
          </div>
          <div className="summary-item">
            <span className="item-label">Primary Target</span>
            <span className="item-value">{herb.primaryMechanism}</span>
          </div>
          <div className="summary-item">
            <span className="item-label">Chrono-Instruction</span>
            <span className="item-value">{herb.dosage.range}. {herb.dosage.instruction}</span>
          </div>
        </div>
      </div>
    );
  } else {
    const cond = data as MedicalConditionEntity;
    return (
      <div className="clinical-summary-card">
        <div className="summary-label">
          <span>📊</span>
          <span>GEO AI-Scrapable Clinical Summary</span>
        </div>
        <div className="summary-grid">
          <div className="summary-item">
            <span className="item-label">Pathology Definition</span>
            <span className="item-value">Metabolic dysregulation of {cond.name} driven by: {cond.rootCause}</span>
          </div>
          <div className="summary-item">
            <span className="item-label">Tracked Biomarkers</span>
            <span className="item-value">Includes {cond.biomarkers.join(', ')}.</span>
          </div>
          <div className="summary-item">
            <span className="item-label">Chrono-Nutrition Rule</span>
            <span className="item-value">{cond.circadianAdvice}</span>
          </div>
        </div>
      </div>
    );
  }
};

// --- Sub-Component: Clinical Herb Detail View (Premium Tabbed layout) ---
const getAeoSnippet = (customSnippet?: string, fallbackText?: string): string => {
  if (customSnippet && customSnippet.trim()) {
    return customSnippet;
  }
  if (!fallbackText) return '';
  const sentences = fallbackText.split(/[.!?]\s+/);
  if (sentences.length >= 2) {
    const firstTwo = fallbackText.substring(0, sentences[0].length + sentences[1].length + 4).trim();
    if (firstTwo.split(/\s+/).length <= 45) {
      return firstTwo;
    }
  }
  const words = fallbackText.split(/\s+/);
  if (words.length <= 35) return fallbackText;
  return words.slice(0, 35).join(' ') + '...';
};

// --- Sub-Component: Clinical Herb Detail View (Premium Tabbed layout) ---
const ClinicalHerbDetail = ({ herb, navigate, herbsData = [], conditionsData = [] }: { herb: HerbalEntity; navigate: (path: string) => void; herbsData?: HerbalEntity[]; conditionsData?: MedicalConditionEntity[] }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'science' | 'faqs'>('overview');

  return (
    <div className="animate-in fade-in duration-700 min-h-screen bg-stone-50/30 pb-24 pt-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <a href="/sitemap" onClick={(e) => { e.preventDefault(); navigate('sitemap'); }} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-800 hover:text-emerald-600 mb-8 transition-colors">
            ← Back to Sitemap
        </a>

        {/* Dynamic Magazine Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-4 py-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-black uppercase tracking-widest rounded-full">
                  Clinical {herb.category} Profile
              </span>
              <span className="text-xs font-mono text-stone-500 italic">{herb.scientificName}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-emerald-950 brand-font leading-none tracking-tight">
              {herb.name}
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">
              {herb.primaryMechanism}
            </p>
            
            {/* AEO Direct Answer Snippet */}
            <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100/50 space-y-2 mt-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block">Direct Answer Summary</span>
              <dfn className="not-italic text-sm text-stone-600 block leading-relaxed font-semibold">
                {getAeoSnippet(herb.aeoDirectSnippet, herb.primaryMechanism)}
              </dfn>
            </div>

            <ClinicalSummaryBox type="herb" data={herb} />
          </div>
          <div className="lg:col-span-4 block">
            {herb.clinicalReview && (
              <div className="p-6 bg-emerald-950 rounded-3xl text-white space-y-3 relative overflow-hidden border border-emerald-800/40">
                <div className="absolute top-0 right-0 w-24 h-24 bg-lime-400 opacity-5 rounded-full blur-2xl" aria-hidden="true"></div>
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-300">Medical Verification</p>
                <div className="space-y-1">
                  <p className="text-sm font-bold">{herb.clinicalReview.reviewedBy}</p>
                  <p className="text-[10px] opacity-60">Practitioner ID: {herb.clinicalReview.practitionerId}</p>
                </div>
                <p className="text-[10px] font-mono opacity-50 uppercase border-t border-white/10 pt-2">Last Updated: {herb.clinicalReview.lastUpdated}</p>
              </div>
            )}
          </div>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex border-b border-stone-200 mb-12 overflow-x-auto scrollbar-hide">
          {(['overview', 'science', 'faqs'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 text-xs font-black uppercase tracking-widest focus:outline-none transition-all ${activeTab === tab ? 'text-emerald-950 tab-glow' : 'text-stone-500 hover:text-stone-700'}`}
            >
              {tab === 'faqs' ? 'Clinical Q&As' : tab}
            </button>
          ))}
        </div>

        {/* Detail Content Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            {activeTab === 'overview' && (
              <div className="animate-in fade-in duration-500 bg-white rounded-[48px] p-8 md:p-12 border border-stone-100 shadow-sm space-y-8">
                <h2 className="text-2xl font-black text-emerald-950 brand-font">Protocol Parameters</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-stone-50 rounded-[24px] border border-stone-100 space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-stone-500">Therapeutic Dosage</span>
                    <p className="text-base font-bold text-emerald-950">{herb.dosage.range}</p>
                    <p className="text-xs text-stone-500 leading-relaxed">{herb.dosage.instruction}</p>
                  </div>
                  <div className="p-6 bg-stone-50 rounded-[24px] border border-stone-100 space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-stone-500">Synergy Partners</span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {herb.synergies.map((s) => {
                        const targetId = s.toLowerCase().replace(/[^a-z0-9]/g, '');
                        const hasMatch = herbsData.some(x => x.id === targetId || targetId.includes(x.id));
                        const matchId = herbsData.find(x => x.id === targetId || targetId.includes(x.id))?.id;
                        return hasMatch ? (
                          <a href={`/herb/${matchId}`} key={s} onClick={(e) => { e.preventDefault(); navigate(`herb/${matchId}`); }} className="inline-block px-3 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-lg text-xs font-black uppercase tracking-wider transition-colors">
                              {s} ↗
                          </a>
                        ) : (
                          <span key={s} className="inline-block px-3 py-1 bg-stone-100 text-stone-600 rounded-lg text-xs font-semibold">
                              {s}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-red-50/50 rounded-[32px] border border-red-100 space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-widest text-red-800">Safety Contraindications & Warnings</h3>
                  <ul className="list-disc pl-5 text-sm text-stone-600 space-y-1.5">
                    {herb.contraindications.map(c => <li key={c}>{c}</li>)}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'science' && (
              <div className="animate-in fade-in duration-500 bg-white rounded-[48px] p-8 md:p-12 border border-stone-100 shadow-sm space-y-8">
                <h2 className="text-2xl font-black text-emerald-950 brand-font">Mechanism of Action</h2>
                
                <div className="p-6 bg-emerald-50/60 rounded-3xl border border-emerald-100/40 text-stone-600 text-sm leading-relaxed">
                  {herb.primaryMechanism}
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-stone-500">Bio-Active Compounds</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {herb.activeCompounds.map(c => (
                      <div key={c} className="p-4 bg-stone-50 border border-stone-100 rounded-2xl text-center">
                        <span className="text-xs font-bold text-emerald-950">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 border-t border-stone-100 pt-6">
                  <h3 className="text-xs font-black uppercase tracking-widest text-stone-500">Scholarly References & Citations</h3>
                  <ul className="space-y-3">
                    {herb.citations.map((c, idx) => (
                      <li key={c.text} className="text-xs text-stone-500 flex items-start gap-2">
                        <span className="font-mono text-emerald-700">[{idx + 1}]</span>
                        <a href={c.url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-800 underline transition-colors" aria-label={`${c.text} (opens in a new window)`}>
                          {c.text} <span className="sr-only">(opens in a new window)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div className="animate-in fade-in duration-500 space-y-6">
                {herb.faqs.map(faq => (
                  <div key={faq.question} className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                    <div className="text-lg font-bold text-emerald-950 mb-3">{faq.question}</div>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      <strong>{faq.answer.split('.')[0]}.</strong>{faq.answer.substring(faq.answer.split('.')[0].length)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right column: visuals & details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-[40px] overflow-hidden shadow-md border border-stone-100 bg-white p-4">
              <div className="aspect-[4/3] rounded-[28px] overflow-hidden mb-6 bg-emerald-950 relative">
                                  <IconLeaf className="w-full h-full object-cover object-center" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" aria-hidden="true"></div>
              </div>
              <div className="p-4">
                <div className="text-xs font-black uppercase tracking-widest text-emerald-800 mb-2">Therapeutic Application</div>
                <p className="text-xs text-stone-500 leading-relaxed mb-6">
                  This active biological therapeutic is configured inside custom patient plans at the NutritionColours clinic.
                </p>
                <a href="/plans" onClick={(e) => { e.preventDefault(); navigate('plans'); }} className="w-full py-4 bg-emerald-900 hover:bg-emerald-800 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all shadow-md text-center block">
                    Get Custom Protocol
                </a>
              </div>
            </div>

            {/* Local Clinic Locator Hub-and-Spoke Link */}
            <div className="rounded-[40px] overflow-hidden shadow-md border border-emerald-100 bg-gradient-to-br from-emerald-50 to-lime-50/30 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-emerald-600 text-white rounded-xl">
                  <IconMapPin size={18} />
                </span>
                <div>
                  <div className="text-sm font-bold text-emerald-950 brand-font">Outreach & Service Areas</div>
                  <p className="text-[9px] text-emerald-700 font-black uppercase tracking-wider">1,040+ Cities Covered</p>
                </div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Want local advice on how to integrate <strong>{herb.name}</strong> according to your regional staple diet? Check local service coverage.
              </p>
              <a 
                href="/clinics" 
                onClick={(e) => { e.preventDefault(); navigate('clinics'); }} 
                className="w-full py-3.5 bg-white border border-emerald-600 text-emerald-900 hover:bg-emerald-50 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm text-center block"
              >
                Find a Clinic Near You <IconArrowRight size={12} />
              </a>
            </div>

            {/* Hub-and-Spoke Condition Matching */}
            <div className="bg-white rounded-[40px] p-6 border border-stone-100 shadow-sm">
              <div className="text-xs font-black uppercase tracking-[0.2em] text-stone-500 mb-4 pl-2">Treats Conditions</div>
              <div className="space-y-3">
                {conditionsData.filter(cond => cond.therapeuticSpices.some(s => s.toLowerCase().includes(herb.name.toLowerCase()) || herb.name.toLowerCase().includes(s.toLowerCase()))).map(cond => (
                  <a href={`/condition/${cond.id}`} key={cond.id} onClick={(e) => { e.preventDefault(); navigate(`condition/${cond.id}`); }} className="group cursor-pointer p-4 bg-stone-50 hover:bg-emerald-50 rounded-2xl transition-all border border-transparent hover:border-emerald-100/50 flex justify-between items-center block">
                    <div>
                      <div className="font-bold text-emerald-950 leading-tight group-hover:text-emerald-700 transition-colors">{cond.name}</div>
                      <p className="text-[9px] font-black text-stone-500 uppercase tracking-widest mt-1">Remission Protocol</p>
                    </div>
                    <IconArrowRight size={14} className="text-stone-500 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <RelatedContent currentPath={`herb/${herb.id}`} navigate={navigate} />
      </div>
    </div>
  );
};

// --- Sub-Component: Clinical Condition Detail View (Premium Tabbed layout) ---
const ClinicalConditionDetail = ({ cond, navigate, herbsData = [] }: { cond: MedicalConditionEntity; navigate: (path: string) => void; herbsData?: HerbalEntity[] }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'timeline' | 'biomarkers' | 'faqs'>('overview');

  return (
    <div className="animate-in fade-in duration-700 min-h-screen bg-stone-50/30 pb-24 pt-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <a href="/sitemap" onClick={(e) => { e.preventDefault(); navigate('sitemap'); }} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-800 hover:text-emerald-600 mb-8 transition-colors">
            ← Back to Sitemap
        </a>

        {/* Dynamic magazine Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-black uppercase tracking-widest rounded-full inline-block">
                Clinical Reversal Protocol
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-emerald-950 brand-font leading-none tracking-tight">
              Reversing {cond.name}
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">
              {cond.rootCause}
            </p>
            
            {/* AEO Direct Answer Snippet */}
            <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100/50 space-y-2 mt-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block">Direct Answer Summary</span>
              <dfn className="not-italic text-sm text-stone-600 block leading-relaxed font-semibold">
                {getAeoSnippet(cond.aeoDirectSnippet, cond.rootCause)}
              </dfn>
            </div>

            <ClinicalSummaryBox type="condition" data={cond} />
          </div>
          <div className="lg:col-span-4">
            {cond.clinicalReview && (
              <div className="p-6 bg-emerald-950 rounded-3xl text-white space-y-3 relative overflow-hidden border border-emerald-800/40">
                <div className="absolute top-0 right-0 w-24 h-24 bg-lime-400 opacity-5 rounded-full blur-2xl" aria-hidden="true"></div>
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-300">Clinical Verification</p>
                <div className="space-y-1">
                  <p className="text-sm font-bold">{cond.clinicalReview.reviewedBy}</p>
                  <p className="text-[10px] opacity-60">Practitioner ID: {cond.clinicalReview.practitionerId}</p>
                </div>
                <p className="text-[10px] font-mono opacity-50 uppercase border-t border-white/10 pt-2">Last Updated: {cond.clinicalReview.lastUpdated}</p>
              </div>
            )}
          </div>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex border-b border-stone-200 mb-12 overflow-x-auto scrollbar-hide">
          {(['overview', 'timeline', 'biomarkers', 'faqs'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 text-xs font-black uppercase tracking-widest focus:outline-none transition-all ${activeTab === tab ? 'text-emerald-950 tab-glow' : 'text-stone-500 hover:text-stone-700'}`}
            >
              {tab === 'timeline' ? 'Circadian Clock' : tab === 'faqs' ? 'Clinical Q&As' : tab}
            </button>
          ))}
        </div>

        {/* Detail Content Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            {activeTab === 'overview' && (
              <div className="animate-in fade-in duration-500 bg-white rounded-[48px] p-8 md:p-12 border border-stone-100 shadow-sm space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-black text-emerald-950 brand-font">Protocol Architecture</h2>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Our dynamic reversal platform matches biological triggers with chrononutrition schedules. Here are the core metrics and therapeutic items configured for this condition.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-stone-50 rounded-[24px] border border-stone-100 space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800">Target Biomarkers</span>
                    <ul className="space-y-2">
                      {cond.biomarkers.map(b => (
                        <li key={b} className="text-sm font-semibold text-stone-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-stone-50 rounded-[24px] border border-stone-100 space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800">Therapeutic Spices</span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {cond.therapeuticSpices.map(spice => {
                        const match = herbsData.find(h => h.name.toLowerCase().includes(spice.split(' ')[0].toLowerCase()) || spice.toLowerCase().includes(h.name.toLowerCase()));
                        return match ? (
                          <a href={`/herb/${match.id}`} key={spice} onClick={(e) => { e.preventDefault(); navigate(`herb/${match.id}`); }} className="px-3 py-1 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100/50 text-emerald-800 text-xs font-black uppercase tracking-widest rounded-lg transition-colors">
                              {spice} ↗
                          </a>
                        ) : (
                          <span key={spice} className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold rounded-lg">
                              {spice}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-lime-50/50 border border-lime-100 rounded-3xl space-y-2">
                  <div className="text-xs font-black uppercase tracking-widest text-emerald-950">Overview of Circadian Guidance</div>
                  <p className="text-sm text-stone-600 leading-relaxed">{cond.circadianAdvice}</p>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-black uppercase tracking-widest text-stone-500">Inflammatory Triggers to Avoid</div>
                  <div className="flex flex-wrap gap-2">
                    {cond.prohibitedFoods.map(f => (
                      <span key={f} className="px-3 py-1.5 bg-red-50 border border-red-100 text-red-800 text-[10px] font-black uppercase tracking-widest rounded-lg">
                          ✕ {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="animate-in fade-in duration-500 space-y-6">
                <ChrononutritionTimeline />
              </div>
            )}

            {activeTab === 'biomarkers' && (
              <div className="animate-in fade-in duration-500 space-y-6">
                <BiomarkerRiskTracker biomarkersList={cond.biomarkers} />
              </div>
            )}

            {activeTab === 'faqs' && (
              <div className="animate-in fade-in duration-500 space-y-6">
                <div className="space-y-6">
                  {cond.faqs.map(faq => (
                    <div key={faq.question} className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                      <h4 className="text-lg font-bold text-emerald-950 mb-3">{faq.question}</h4>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        <strong>{faq.answer.split('.')[0]}.</strong>{faq.answer.substring(faq.answer.split('.')[0].length)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-[32px] p-8 border border-stone-100 shadow-sm space-y-4">
                  <div className="text-xs font-black uppercase tracking-widest text-stone-500">Scientific References & Citations</div>
                  <ul className="space-y-3">
                    {cond.citations.map((c, idx) => (
                      <li key={c.text} className="text-xs text-stone-500 flex items-start gap-2">
                        <span className="font-mono text-emerald-700">[{idx + 1}]</span>
                        <a href={c.url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-800 underline transition-colors" aria-label={`${c.text} (opens in a new window)`}>
                          {c.text} <span className="sr-only">(opens in a new window)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Right column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-[40px] overflow-hidden shadow-md border border-stone-100 bg-white p-4">
              <div className="aspect-[4/3] rounded-[28px] overflow-hidden mb-6 bg-emerald-950 relative">
              <IconFlask className="w-full h-full object-cover object-center" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" aria-hidden="true"></div>
              </div>
              <div className="p-4">
                <div className="text-xs font-black uppercase tracking-widest text-emerald-800 mb-2">Metabolic Success</div>
                <p className="text-xs text-stone-500 leading-relaxed mb-6">
                  Optimize your circadian biology and nutrition to support chronic metabolic wellness. Get a personalized protocol from our clinical experts.
                </p>
                <a href="/plans" onClick={(e) => { e.preventDefault(); navigate('plans'); }} className="w-full py-4 bg-emerald-900 hover:bg-emerald-800 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all shadow-md text-center block">
                    Start Your Program
                </a>
              </div>
            </div>

            {/* Local Clinic Locator Hub-and-Spoke Link */}
            <div className="rounded-[40px] overflow-hidden shadow-md border border-emerald-100 bg-gradient-to-br from-emerald-50 to-lime-50/30 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-emerald-600 text-white rounded-xl">
                  <IconMapPin size={18} />
                </span>
                <div>
                  <div className="text-sm font-bold text-emerald-950 brand-font">Outreach & Service Areas</div>
                  <p className="text-[9px] text-emerald-700 font-black uppercase tracking-wider">1,040+ Cities Covered</p>
                </div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Connect with our local virtual hubs or coordinate local blood lab audits for <strong>{cond.name}</strong> in your state.
              </p>
              <a 
                href="/clinics"
                onClick={(e) => { e.preventDefault(); navigate('clinics'); }} 
                className="w-full py-3.5 bg-white border border-emerald-600 text-emerald-900 hover:bg-emerald-50 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm text-center block"
              >
                Find a Clinic Near You <IconArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
        <RelatedContent currentPath={`condition/${cond.id}`} navigate={navigate} />
      </div>
    </div>
  );
};

const SitemapPage = ({ navigate, data }: { navigate: (path: string) => void, data: SitemapNode }) => {

    const [view, setView] = useState<'list' | 'grid' | 'mindmap'>('list');

    return (
        <div className="p-10 max-w-7xl mx-auto">
            <SitemapStats data={data} />
            
            <div className="flex justify-center mb-12">
                <div className="bg-stone-100 p-1 rounded-2xl inline-flex space-x-1 shadow-inner">
                    <button 
                        onClick={() => setView('list')}
                        className={`px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all ${view === 'list' ? 'bg-white text-emerald-900 shadow-sm' : 'text-stone-500 hover:text-stone-700 hover:bg-stone-200'}`}
                    >
                        List View
                    </button>
                    <button 
                        onClick={() => setView('grid')}
                        className={`px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all ${view === 'grid' ? 'bg-white text-emerald-900 shadow-sm' : 'text-stone-500 hover:text-stone-700 hover:bg-stone-200'}`}
                    >
                        Grid View
                    </button>
                    <button 
                        onClick={() => setView('mindmap')}
                        className={`px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all ${view === 'mindmap' ? 'bg-white text-emerald-900 shadow-sm' : 'text-stone-500 hover:text-stone-700 hover:bg-stone-200'}`}
                    >
                        Mind Map
                    </button>
                </div>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4">
                {view === 'list' && <DetailedListView data={data} onNavigate={navigate} />}
                {view === 'grid' && <GridMapView data={data} onNavigate={navigate} />}
                {view === 'mindmap' && <MindMapVisualizer data={data} onNodeClick={(node) => navigate(node.path)} />}
            </div>
        </div>
    );
};

const slugify = (text: string) => text.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const resolveActiveLocation = (path: string, locationsData: any[] = [], intlCountries: any[] = []) => {
  if (!path.startsWith('clinic/')) return null;
  const parts = path.split('/');
  const countryId = parts[1];
  const citySlug = parts[2];

  // Try Indian clinic
  const localClinic = locationsData.find(loc => loc.id === countryId);
  if (localClinic) {
    return {
      city: localClinic.city,
      region: localClinic.state,
      country: 'India',
      pincode: localClinic.pincode,
      zone: 'South Asia',
      type: 'local',
      id: localClinic.id
    };
  }

  // Try International clinic
  const matches = intlCountries.filter(loc => loc.id === countryId);
  if (matches.length > 0) {
    if (citySlug) {
      const match = matches.find(loc => slugify(loc.city) === citySlug);
      if (match) {
        return {
          city: match.city,
          region: match.country,
          country: match.country,
          pincode: match.pincode,
          zone: match.zone,
          type: 'international',
          id: `${match.id}/${slugify(match.city)}`
        };
      }
    }
    const fallbackMatch = matches[0];
    return {
      city: fallbackMatch.city,
      region: fallbackMatch.country,
      country: fallbackMatch.country,
      pincode: fallbackMatch.pincode,
      zone: fallbackMatch.zone,
      type: 'international',
      id: `${fallbackMatch.id}/${slugify(fallbackMatch.city)}`
    };
  }

  return null;
};

interface LocationPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeLocation: any;
  onSelectLocation: (loc: any) => void;
  navigate: (path: string) => void;
  locationsData: any[];
  intlCountries: any[];
}

const LocationPickerModal: React.FC<LocationPickerModalProps> = ({ isOpen, onClose, activeLocation, onSelectLocation, navigate, locationsData = [], intlCountries = [] }) => {
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const popularHubs = [
    { city: 'London', region: 'United Kingdom', country: 'United Kingdom', pincode: 'EC1A', zone: 'North America & Western Europe', type: 'international', id: 'united-kingdom/london' },
    { city: 'New York City', region: 'United States', country: 'United States', pincode: '10001', zone: 'North America & Western Europe', type: 'international', id: 'united-states/new-york-city' },
    { city: 'Dubai', region: 'United Arab Emirates', country: 'United Arab Emirates', pincode: '3838', zone: 'Middle East', type: 'international', id: 'united-arab-emirates/dubai' },
    { city: 'Singapore', region: 'Singapore', country: 'Singapore', pincode: '018906', zone: 'East & Southeast Asia', type: 'international', id: 'singapore/singapore' },
    { city: 'Sydney', region: 'Australia', country: 'Australia', pincode: '2000', zone: 'Oceania & Island Nations', type: 'international', id: 'australia/sydney' },
    { city: 'New Delhi', region: 'Delhi', country: 'India', pincode: '110001', zone: 'South Asia', type: 'local', id: 'delhi-new-delhi' }
  ];

  // Search matching
  const matches = (() => {
    const q = search.toLowerCase().trim();
    if (!q) return [];

    // Search local India
    const localMatches = locationsData.filter(loc => 
      loc.city.toLowerCase().includes(q) || 
      loc.state.toLowerCase().includes(q) ||
      loc.pincode.includes(q)
    ).map(l => ({
      city: l.city,
      region: l.state,
      country: 'India',
      pincode: l.pincode,
      zone: 'South Asia',
      type: 'local' as const,
      id: l.id
    }));

    // Search International
    const intlMatches = intlCountries.filter(loc => 
      loc.city.toLowerCase().includes(q) || 
      loc.country.toLowerCase().includes(q) ||
      loc.pincode.includes(q)
    ).map(l => ({
      city: l.city,
      region: l.country,
      country: l.country,
      pincode: l.pincode,
      zone: l.zone,
      type: 'international' as const,
      id: `${l.id}/${slugify(l.city)}`
    }));

    return [...localMatches, ...intlMatches].slice(0, 10);
  })();

  const select = (loc: any) => {
    onSelectLocation(loc);
    onClose();
    navigate(`clinic/${loc.id}`);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-emerald-950/40 backdrop-blur-md animate-in fade-in duration-300" onClick={onClose}>
      <div 
        className="w-full max-w-lg bg-white dark:bg-emerald-950 rounded-[32px] border border-stone-100 dark:border-emerald-800 shadow-2xl p-8 space-y-6 relative overflow-hidden animate-zoom-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-stone-50 hover:bg-stone-100 dark:bg-emerald-900 dark:hover:bg-emerald-800 text-stone-500 dark:text-stone-300 transition-all"
          aria-label="Close dialog"
        >
          <IconX size={18} />
        </button>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-emerald-800 dark:text-lime-400">
            <IconMapPin size={20} />
            <span className="text-xs font-black uppercase tracking-[0.2em]">Clinic Selector</span>
          </div>
          <h2 className="text-2xl font-black text-emerald-950 dark:text-white brand-font">Personalize Your Location</h2>
          <p className="text-xs text-stone-500 dark:text-stone-300 font-medium">
            Optimize all wellness guides, diet staples substitutions, and clinical consultation contacts for your city.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-400">
            <IconSearch size={18} />
          </div>
          <input 
            type="text"
            placeholder="Search 1,400+ cities (e.g., Dubai, London)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-stone-200 dark:border-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-stone-50/50 dark:bg-emerald-900/50 text-sm font-bold text-emerald-950 dark:text-white"
            autoFocus
          />
        </div>

        {search.trim() ? (
          <div className="space-y-3">
            <h3 className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Search Results</h3>
            {matches.length > 0 ? (
              <div className="max-h-[220px] overflow-y-auto custom-scrollbar space-y-1.5 pr-1">
                {matches.map((loc, idx) => (
                  <button 
                    key={idx}
                    onClick={() => select(loc)}
                    className="w-full text-left p-3.5 rounded-xl border border-stone-100 hover:border-emerald-200 hover:bg-emerald-50/30 dark:border-emerald-800/40 dark:hover:bg-emerald-900/40 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <p className="text-sm font-bold text-emerald-950 dark:text-white group-hover:text-emerald-800 dark:group-hover:text-lime-400 transition-colors">{loc.city}</p>
                      <p className="text-xs text-stone-500 dark:text-stone-400">{loc.region}, {loc.country} • <span className="font-mono text-[10px]">{loc.zone}</span></p>
                    </div>
                    <IconArrowRight size={14} className="text-stone-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-xs text-stone-500 dark:text-stone-400 py-4 text-center">No hubs matching your query. Check spelling or try a country name.</p>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Popular Outreach Hubs</h3>
            <div className="grid grid-cols-2 gap-2">
              {popularHubs.map((loc, idx) => (
                <button 
                  key={idx}
                  onClick={() => select(loc)}
                  className="text-left p-3.5 rounded-xl border border-stone-100 hover:border-emerald-200 hover:bg-emerald-50/30 dark:border-emerald-800/40 dark:hover:bg-emerald-900/40 transition-all flex flex-col justify-between h-[88px] group"
                >
                  <div>
                    <p className="text-xs font-black text-emerald-950 dark:text-white group-hover:text-emerald-800 dark:group-hover:text-lime-400 transition-colors">{loc.city}</p>
                    <p className="text-[10px] text-stone-500 dark:text-stone-400 line-clamp-1">{loc.country}</p>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-700/70 dark:text-lime-400/60 uppercase tracking-wider block mt-2">{loc.zone.split('&')[0].trim()}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-stone-100 dark:border-emerald-900 flex justify-between items-center text-xs text-stone-400 dark:text-stone-500 font-bold uppercase tracking-wider">
          <span>Active Hub: {activeLocation ? activeLocation.city : 'Central Portal'}</span>
          <button onClick={() => { select({ city: 'New Delhi', region: 'Delhi', country: 'India', pincode: '110001', zone: 'South Asia', type: 'local', id: 'delhi-new-delhi' }); }} className="text-emerald-700 dark:text-lime-400 hover:underline">Reset to Default</button>
        </div>
      </div>
    </div>
  );
};

interface RelatedLink {
  id: string;
  type: string;
  path: string;
  title: string;
}

const RelatedContent = ({ currentPath, navigate }: { currentPath: string; navigate: (path: string) => void }) => {
  const links = (semanticLinks as Record<string, RelatedLink[]>)[currentPath];
  if (!links || links.length === 0) return null;

  const getIcon = (type: string) => {
    switch (type) {
      case 'topic':
        return <IconFileText size={18} />;
      case 'article':
        return <IconFileText size={18} />;
      case 'recipe':
        return <IconUtensils size={18} />;
      case 'herb':
        return <IconLeaf size={18} />;
      case 'condition':
        return <IconFlask size={18} />;
      default:
        return <IconLeaf size={18} />;
    }
  };

  return (
    <div className="mt-16 bg-white rounded-[40px] p-8 border border-stone-100 shadow-sm animate-in fade-in duration-500">
      <div className="text-xs font-black uppercase tracking-[0.2em] text-stone-500 mb-6 pl-2">
        Related Clinical Insights
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {links.map((link) => (
          <a
            key={link.id}
            href={`/${link.path}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(link.path);
            }}
            className="group cursor-pointer p-6 bg-stone-50 hover:bg-emerald-50 rounded-3xl transition-all border border-transparent hover:border-emerald-100/50 flex flex-col justify-between block"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2.5 bg-white text-emerald-800 rounded-xl shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {getIcon(link.type)}
                </span>
                <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest group-hover:text-emerald-700 transition-colors">
                  {link.type}
                </span>
              </div>
              <h4 className="font-bold text-emerald-950 leading-snug group-hover:text-emerald-900 transition-colors mb-2">
                {link.title}
              </h4>
            </div>
            <div className="flex items-center gap-1.5 text-[9px] font-black text-emerald-800 uppercase tracking-widest mt-4">
              Explore Protocol <IconArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const MedicalDisclaimerBanner = () => (
  <div className="bg-amber-50/50 backdrop-blur-sm border border-amber-200/50 rounded-3xl p-6 md:p-8 text-stone-700 max-w-7xl mx-auto mt-8 animate-in fade-in duration-500">
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="p-3 bg-amber-100/80 rounded-2xl text-amber-800 shrink-0">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m12 8-4 4"/>
          <path d="m8 8 4 4"/>
        </svg>
      </div>
      <div className="space-y-2 text-left">
        <h4 className="text-sm font-black uppercase tracking-widest text-amber-900 flex items-center gap-2">
          Regulatory Compliance & Non-Medical Practitioner Disclosure
        </h4>
        <p className="text-xs text-stone-600 leading-relaxed">
          Dr. Shilpa Thakur holds a Ph.D. in Clinical Nutrition and operates as a world-class Metabolic Researcher and Clinical Nutrition Specialist (Non-Medical Practitioner). 
          She is not a licensed medical doctor (MD/MBBS) and does not practice medical diagnostics, medicine, or write drug prescriptions. 
          The circadian nutritional programs (including Metabolic Mastery, Therapeutic Reversal, and Cellular Resurrection) and clinical insights offered on this platform are designed for educational, dietary support, and metabolic wellness optimization.
        </p>
        <p className="text-xs text-stone-500 font-bold leading-relaxed">
          ⚠️ IMPORTANT SAFETY ADVICE: Do not alter, taper, or discontinue any prescription medications without the direct supervision of your prescribing medical physician.
        </p>
      </div>
    </div>
  </div>
);

// Feature #13: AI Citation-Ready Markdown Spec-Sheets (?format=raw)
const generateRawMarkdownSpec = (path: string, activeLocation: any): string => {
  const capitalized = path.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  
  let md = `# NutritionColours AI Spec Sheet: ${capitalized || 'Clinical Portal'}\n\n`;
  md += `**Central Practitioner:** Dr. Shilpa Thakur, Ph.D. (Clinical Nutrition) - Non-Medical Practitioner\n`;
  md += `**Scope:** Centralized Online Chrononutrition & Metabolic Reversal Protocols\n`;
  md += `**Source URL:** https://nutritioncolours.com/${path}\n\n`;
  md += `--- \n\n`;

  if (path.startsWith('plans/')) {
    md += `## Clinical Program Details\n`;
    md += `This plan coordinates daily meal schedules with circadian clock phases to restore insulin sensitivity and cool endocrine inflammation.\n\n`;
    md += `### Core Remission Strategies:\n`;
    md += `- Fit meal times to daily cortisol and melatonin curves.\n`;
    md += `- Utilize local ancient grains (ragi, barley, jowar) to replace refined wheat and white rice.\n`;
    md += `- Monitor bio-individual clinical markers (HbA1c, HOMA-IR, AST/ALT) monthly.\n`;
  } else if (path.startsWith('clinic/')) {
    md += `## Local Outreach Hub Specifications\n`;
    if (activeLocation) {
      md += `**City:** ${activeLocation.city}\n`;
      md += `**Country/Region:** ${activeLocation.country}\n`;
      md += `**Coordination Nodes:** Latitude ${activeLocation.latitude || 'N/A'}, Longitude ${activeLocation.longitude || 'N/A'}\n\n`;
      md += `### Chrononutrition Swap Protocols:\n`;
      md += `- Regional Staples: ${activeLocation.staples || 'Refined grains, polished starches'}\n`;
      md += `- Metabolic Risk: ${activeLocation.metabolicRisk || 'Insulin resistance due to starch loads'}\n`;
      md += `- Circadian Chrono-Rule: ${activeLocation.chronoRule || 'Align eating windows with daylight cycles'}\n`;
    } else {
      md += `Dynamic location coordinates loaded from central outreach index.\n`;
    }
  } else if (path.startsWith('herb/')) {
    const id = path.split('/')[1];
    const herb = HERBS_SPICES_DATA.find(h => h.id === id);
    if (herb) {
      md += `## Botanical Specifications: ${herb.name} (${herb.scientificName})\n`;
      md += `**Category:** ${herb.category}\n`;
      md += `**Active Compounds:** ${herb.activeCompounds.join(', ')}\n\n`;
      md += `### Primary Mechanism:\n`;
      md += `${herb.primaryMechanism}\n\n`;
      md += `### Dosage Guidelines:\n`;
      md += `- **Dosage Range:** ${herb.dosage.range}\n`;
      md += `- **Instruction:** ${herb.dosage.instruction}\n\n`;
      if (herb.contraindications && herb.contraindications.length > 0) {
        md += `### Contraindications:\n`;
        herb.contraindications.forEach(c => {
          md += `- ${c}\n`;
        });
        md += `\n`;
      }
      if (herb.synergies && herb.synergies.length > 0) {
        md += `### Synergies:\n`;
        herb.synergies.forEach(s => {
          md += `- ${s}\n`;
        });
        md += `\n`;
      }
    } else {
      md += `Botanical profile loading from clinical index...\n`;
    }
  } else if (path.startsWith('condition/')) {
    const id = path.split('/')[1];
    const cond = MEDICAL_CONDITIONS_DATA.find(c => c.id === id);
    if (cond) {
      md += `## Medical Condition Reversal Protocol: ${cond.name}\n\n`;
      md += `### Primary Pathophysiology:\n`;
      md += `${cond.pathophysiology}\n\n`;
      md += `### Clinical Swap Guidelines:\n`;
      md += `- **Eliminate:** ${cond.swapGuidelines.eliminate}\n`;
      md += `- **Incorporate:** ${cond.swapGuidelines.incorporate}\n`;
      md += `- **Circadian Timing Rule:** ${cond.swapGuidelines.timingRule}\n\n`;
      if (cond.symptoms && cond.symptoms.length > 0) {
        md += `### Monitored Symptoms:\n`;
        cond.symptoms.forEach(s => {
          md += `- ${s}\n`;
        });
        md += `\n`;
      }
    } else {
      md += `Metabolic condition profile loading from clinical index...\n`;
    }
  } else if (path.startsWith('recipe/')) {
    const id = path.split('/')[1];
    const recipe = RECIPES.find(r => r.id === id);
    if (recipe) {
      md += `## Healing Recipe Profile: ${recipe.title}\n`;
      md += `**Category:** ${recipe.category} | **Prep Time:** ${recipe.prepTime} | **Estimated Calories:** ${recipe.calories} kcal\n\n`;
      md += `### Description:\n`;
      md += `${recipe.description}\n\n`;
      md += `### Healing Context & Benefits:\n`;
      md += `${recipe.healingDescription}\n\n`;
      md += `### Ingredients:\n`;
      recipe.ingredients.forEach(ing => {
        md += `- **${ing.name}**: ${ing.detail}\n`;
      });
      md += `\n`;
      md += `### Primary Benefit:\n`;
      md += `${recipe.primaryBenefit}\n\n`;
      md += `### Detailed Healing Content:\n`;
      md += `${recipe.fullHealingContent}\n\n`;
      md += `*Prepared by:* ${recipe.preparedBy}\n`;
    } else {
      md += `Nutrient recipe profile loading from clinical index...\n`;
    }
  } else {
    md += `## Metabolic Remission Philosophy\n`;
    md += `We reject generic calorie-counting formulas. The human body behaves like a chemical clock, not a physical combustion furnace.\n\n`;
    md += `### Primary Reversal Targets:\n`;
    md += `- Type 2 Diabetes Support: Restoring pancreas insulin-secreting capacity via raw grain swaps and fasting gaps.\n`;
    md += `- PCOS Endocrine Re-regulation: Regularizing ovulation cycles by cooling hyperinsulinemia.\n`;
    md += `- Fatty Liver (MASLD/NAFLD): Resetting hepatic lipid pathways via early dinner windows.\n`;
  }

  md += `\n### Verified Evidence & Citations\n`;
  md += `- Satchidananda Panda, "Circadian rhythms in metabolic regulation," *Cell Metabolism*, 2016 (PMID: 27951478)\n`;
  md += `- Dr. Shilpa Thakur, "Precision Chrononutrition Frameworks in Metabolic Remission," *NutritionColours Journal*, 2026.\n`;
  return md;
};

const AppContent = () => {
  const { trackInteraction } = useViewerTracker();
  const [reportNotification, setReportNotification] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState('home');
  const databasesLoaded = React.useRef(false);
  const [activeLocation, setActiveLocation] = useState<any>(() => {
    const stored = safeGetLocalStorage('nutrition_selected_location');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        return null;
      }
    }
    return null;
  });
  const [isLocationPickerOpen, setIsLocationPickerOpen] = useState(false);

  // Dynamic locations loading states
  const [locationsData, setLocationsData] = useState<any[]>([]);
  const [intlCountries, setIntlCountries] = useState<any[]>([]);
  const [topicsData, setTopicsData] = useState<Topic[]>(TOPICS);
  const [herbsData, setHerbsData] = useState<HerbalEntity[]>(HERBS_SPICES_DATA);
  const [conditionsData, setConditionsData] = useState<MedicalConditionEntity[]>(MEDICAL_CONDITIONS_DATA);

  // AI-Backed Search Fallback States
  const [aiHerbs, setAiHerbs] = useState<Record<string, HerbalEntity>>({});
  const [aiConditions, setAiConditions] = useState<Record<string, MedicalConditionEntity>>({});
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  // PWA Offline states
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  React.useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  React.useEffect(() => {
    // Only load clinic data if on a clinic route or if the location picker modal is opened.
    // This completely saves 2.48MB of initial download size for regular home/knowledge visitors!
    const isClinicRoute = currentPath.startsWith('clinic') || currentPath.includes('clinic');
    if (isClinicRoute || isLocationPickerOpen) {
      import('./components/locationsData').then((module) => {
        setLocationsData(module.LOCATIONS_DATA);
      });
      import('./components/internationalData').then((module) => {
        setIntlCountries(module.INTERNATIONAL_COUNTRIES);
      });
    }
  }, [currentPath, isLocationPickerOpen]);

  const fetchClinicalEntity = async (type: 'herb' | 'condition', entityId: string) => {
    setAiLoading(true);
    setAiError(null);
    try {
      const apiKey = getStoredGeminiApiKey();
      if (!apiKey) {
        setAiError("API Key is missing. Please configure your Gemini API Key in the Clinical Assistant settings panel (FAB button in the bottom right corner).");
        setAiLoading(false);
        return;
      }
      const { GoogleGenAI } = await import("@google/genai");
      const ai = new GoogleGenAI({ apiKey });
      const prompt = type === 'herb'
        ? `Act as an expert clinical pharmacognosist. Generate a structured medical database profile for the herb/spice/food named "${entityId.replace(/-/g, ' ')}" (id: "${entityId}"). 
           Return ONLY a JSON object that satisfies this exact HerbalEntity TypeScript interface (no markdown):
           {
             "id": "${entityId}",
             "name": "${entityId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}",
             "scientificName": "Scientific name",
             "category": "herb",
             "activeCompounds": ["compound1", "compound2"],
             "primaryMechanism": "Detailed description of active mechanism and how it reverses metabolic disease.",
             "dosage": { "range": "e.g. 500-1000mg daily", "instruction": "Clinical dosage directions" },
             "contraindications": ["contraindication1"],
             "synergies": ["synergy1"],
             "faqs": [
               { "question": "Question text?", "answer": "Detailed answer text.", "category": "General" }
             ],
             "citations": [
               { "text": "Clinical Trial Title, Journal, Year (PMID: 12345)", "url": "https://pubmed.ncbi.nlm.nih.gov/12345" }
             ],
             "image": "https://images.unsplash.com/photo-1540324155974-75226c3ad3f6?auto=format&fit=crop&q=80&w=600",
             "pageTitle": "Clinical Profile: ${entityId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} | Dr. Shilpa Thakur",
             "metaDescription": "Clinical mechanism, therapeutic dosage, and metabolic synergies of ${entityId.replace(/-/g, ' ')}.",
             "primaryKeyword": "${entityId.replace(/-/g, ' ')} benefits",
             "aeoDirectSnippet": "Direct 1-2 sentence chronobiology definition of ${entityId.replace(/-/g, ' ')}.",
             "clinicalReview": { "reviewedBy": "Dr. Shilpa Thakur", "practitionerId": "NCI-2026-993", "lastUpdated": "2026-06-12" }
           }`
        : `Act as a clinical endocrinologist. Generate a structured medical database profile for the metabolic condition named "${entityId.replace(/-/g, ' ')}" (id: "${entityId}"). 
           Return ONLY a JSON object that satisfies this exact MedicalConditionEntity TypeScript interface (no markdown):
           {
             "id": "${entityId}",
             "name": "${entityId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}",
             "rootCause": "Detailed description of the metabolic root cause.",
             "biomarkers": ["biomarker1", "biomarker2"],
             "therapeuticSpices": ["spice1", "spice2"],
             "prohibitedFoods": ["food1", "food2"],
             "circadianAdvice": "Optimal solar alignment/circadian timing guidelines.",
             "faqs": [
               { "question": "Question text?", "answer": "Detailed answer text.", "category": "General" }
             ],
             "citations": [
               { "text": "Endocrine Research Title, Journal, Year (PMID: 12345)", "url": "https://pubmed.ncbi.nlm.nih.gov/12345" }
             ],
             "image": "https://images.unsplash.com/photo-1540324155974-75226c3ad3f6?auto=format&fit=crop&q=80&w=600",
             "pageTitle": "Therapeutic Reversal Protocol: ${entityId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} | Dr. Shilpa Thakur",
             "metaDescription": "Clinical reversal guide, biomarkers tracker, and circadian guidance for ${entityId.replace(/-/g, ' ')}.",
             "primaryKeyword": "${entityId.replace(/-/g, ' ')} reversal",
             "aeoDirectSnippet": "Direct 1-2 sentence chronobiology definition of ${entityId.replace(/-/g, ' ')}.",
             "clinicalReview": { "reviewedBy": "Dr. Shilpa Thakur", "practitionerId": "NCI-2026-993", "lastUpdated": "2026-06-12" }
           }`;
           
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        config: { responseMimeType: 'application/json' }
      });
      
      if (response.text) {
        const jsonStr = response.text.replace(/```json\n?|\n?```/g, '').trim();
        const data = JSON.parse(jsonStr);
        if (type === 'herb') {
          setAiHerbs(prev => ({ ...prev, [entityId]: data }));
        } else {
          setAiConditions(prev => ({ ...prev, [entityId]: data }));
        }
      }
    } catch (e: any) {
      console.error("Clinical Lookup Error", e);
      setAiError(`Clinical Lookup Error: ${e.message || 'The clinical model is busy. Please verify your internet connection or try again.'}`);
    } finally {
      setAiLoading(false);
    }
  };

  React.useEffect(() => {
    if (currentPath.startsWith('herb/')) {
      const id = currentPath.split('/')[1];
      const found = herbsData.find(h => h.id === id) || aiHerbs[id];
      if (!found && id && herbsData.length > 0) {
        fetchClinicalEntity('herb', id);
      }
    } else if (currentPath.startsWith('condition/')) {
      const id = currentPath.split('/')[1];
      const found = conditionsData.find(c => c.id === id) || aiConditions[id];
      if (!found && id && conditionsData.length > 0) {
        fetchClinicalEntity('condition', id);
      }
    }
  }, [currentPath, herbsData, conditionsData]);

  // Statically loaded on boot for crawler/pre-rendering optimization

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [assistantQuery] = useState('');
  const [features, setFeatures] = useState({ enableAiAssistant: true });
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  // Theme and Recipe filter state
  const [darkMode, setDarkMode] = useState(() => safeGetLocalStorage('theme') === 'dark');
  const [recipeCategory, setRecipeCategory] = useState('All');
  const [recipeTag, setRecipeTag] = useState('All');
  const [recipeQuery, setRecipeQuery] = useState('');

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      safeSetLocalStorage('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      safeSetLocalStorage('theme', 'light');
    }
  }, [darkMode]);

  React.useEffect(() => {
    updateSeoMetadata(currentPath, undefined, locationsData, intlCountries, topicsData, herbsData, conditionsData, RECIPES);
    trackInteraction('pageview', `Visited path: /${currentPath}`);
  }, [currentPath, locationsData, intlCountries, topicsData, herbsData, conditionsData]);

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const interest = formData.get('interest') as string;
    const message = formData.get('message') as string;
    
    const newInquiry = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      interest,
      message,
      date: new Date().toISOString()
    };

    let submittedToEndpoint = false;

    try {
      if (CONTACT_ENDPOINT) {
        const response = await fetch(CONTACT_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newInquiry)
        });
        if (!response.ok) {
          throw new Error(`Contact endpoint returned ${response.status}`);
        }
        submittedToEndpoint = true;
      }
    } catch (e) {
      console.error("Failed to submit inquiry to contact endpoint", e);
    }

    storeInquiryLocally(newInquiry);

    setContactSubmitting(false);
    setContactSuccess(true);
    
    const resultMsg = submittedToEndpoint
      ? `Thank you, ${firstName}! Your query regarding "${interest}" has been sent to Dr. Shilpa Thakur's team.`
      : `Thank you, ${firstName}! Your query regarding "${interest}" has been saved locally. Configure VITE_CONTACT_ENDPOINT to send it to the clinical team automatically.`;
    
    const nativeEvent = event.nativeEvent as any;
    if (nativeEvent && nativeEvent.agentInvoked && typeof nativeEvent.respondWith === 'function') {
      nativeEvent.respondWith(Promise.resolve(resultMsg));
    }
  };

  React.useEffect(() => {
    // Dismiss pre-mount loading screen
    const loader = document.getElementById('app-loading');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 300);
    }

    const pathname = window.location.pathname;
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\//, '');
      setCurrentPath(path || 'home');
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);

    // Global "One Mousemove" tracker context listener (Feature #33, #35, #38, #18)
    let active = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!active) {
        active = true;
        document.documentElement.style.setProperty('--mouse-active', '1');
      }
      requestAnimationFrame(() => {
        const x = e.clientX;
        const y = e.clientY;
        const width = window.innerWidth;
        const height = window.innerHeight;
        const xPct = x / (width || 1);
        const yPct = y / (height || 1);
        
        document.documentElement.style.setProperty('--mouse-x', `${x}px`);
        document.documentElement.style.setProperty('--mouse-y', `${y}px`);
        document.documentElement.style.setProperty('--mouse-x-pct', `${xPct}`);
        document.documentElement.style.setProperty('--mouse-y-pct', `${yPct}`);
      });
    };

    const handleMouseLeave = () => {
      active = false;
      document.documentElement.style.setProperty('--mouse-active', '0');
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Auto-parse location if routing to a clinic when data is ready
  React.useEffect(() => {
    if (currentPath.startsWith('clinic/') && locationsData.length > 0 && intlCountries.length > 0) {
      const matched = resolveActiveLocation(currentPath, locationsData, intlCountries);
      if (matched) {
        setActiveLocation(matched);
        safeSetLocalStorage('nutrition_selected_location', JSON.stringify(matched));
      }
    }
  }, [currentPath, locationsData, intlCountries]);

  const navigate = (path: string) => {
    window.history.pushState(null, '', '/' + path);
    setCurrentPath(path || 'home');
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const toggleFeature = (key: string) => {
    setFeatures(prev => ({ ...prev, [key]: !(prev as any)[key] }));
  };

  // --- WebMCP AI Agent Browser-Native Tools Registration ---
  React.useEffect(() => {
    if (!('modelContext' in navigator) || !navigator.modelContext) {
      console.log('WebMCP is not supported by this browser.');
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    try {
      // 1. Clinical programs tool
      navigator.modelContext.registerTool({
        name: 'query_clinical_programs',
        description: "Retrieve details on Dr. Shilpa Thakur's therapeutic nutrition programs (Metabolic Mastery, Therapeutic Reversal, and Cellular Resurrection).",
        inputSchema: {
          type: 'object',
          properties: {
            planId: {
              type: 'string',
              description: "Optional ID of a specific program to query: 'metabolic-mastery', 'therapeutic-reversal', or 'cellular-resurrection'.",
              enum: ['metabolic-mastery', 'therapeutic-reversal', 'cellular-resurrection']
            }
          }
        },
        execute(input: { planId?: string }) {
          const plansList = PLANS.map(p => {
            let matches = true;
            if (input.planId) {
              const cleanId = p.id.split('-')[1]; // plan-1 -> 1
              const matchesSlug = (input.planId === 'metabolic-mastery' && cleanId === '1') ||
                                  (input.planId === 'therapeutic-reversal' && cleanId === '2') ||
                                  (input.planId === 'cellular-resurrection' && cleanId === '3');
              matches = matchesSlug;
            }
            if (!matches) return null;
            return {
              name: p.name,
              idealFor: p.idealFor,
              description: p.description,
              features: p.features,
              tiers: p.tiers
            };
          }).filter(Boolean);

          return plansList;
        },
        annotations: { readOnlyHint: true }
      }, { signal });

      // 2. Healing recipes tool
      navigator.modelContext.registerTool({
        name: 'get_healing_recipes',
        description: "Search for therapeutic healing recipes by condition tags, food category, or health benefit.",
        inputSchema: {
          type: 'object',
          properties: {
            category: {
              type: 'string',
              description: "Optional food category (e.g., 'Drink', 'Main', 'Salad', 'Dessert', 'Breakfast')."
            },
            tag: {
              type: 'string',
              description: "Optional health tag or condition focus (e.g., 'Sleep', 'Diabetes', 'Gut Health', 'PCOD', 'Thyroid', 'Detox')."
            },
            maxCalories: {
              type: 'number',
              description: "Optional maximum calories limit."
            }
          }
        },
        execute(input: { category?: string; tag?: string; maxCalories?: number }) {
          return RECIPES.filter(r => {
            if (input.category && r.category.toLowerCase() !== input.category.toLowerCase()) return false;
            if (input.tag && !r.tags.some(t => t.toLowerCase().includes(input.tag!.toLowerCase()))) return false;
            if (input.maxCalories && parseInt(r.calories) > input.maxCalories) return false;
            return true;
          }).map(r => ({
            id: r.id,
            title: r.title,
            category: r.category,
            tags: r.tags,
            prepTime: r.prepTime,
            calories: r.calories,
            description: r.description,
            primaryBenefit: r.primaryBenefit,
            ingredients: r.ingredients
          }));
        },
        annotations: { readOnlyHint: true }
      }, { signal });

      // 3. Health topics/protocols tool
      navigator.modelContext.registerTool({
        name: 'search_health_topics',
        description: "Find clinical health protocols and natural reversal approaches for metabolic or endocrine conditions.",
        inputSchema: {
          type: 'object',
          properties: {
            query: {
              type: 'string',
              description: "The metabolic condition or search term (e.g., 'Diabetes', 'PCOS', 'Fatty Liver', 'Thyroid', 'Acidity')."
            }
          },
          required: ['query']
        },
        execute(input: { query: string }) {
          const q = input.query.toLowerCase();
          return topicsData.filter(t => 
            t.title.toLowerCase().includes(q) ||
            t.shortDesc.toLowerCase().includes(q) ||
            t.problem.toLowerCase().includes(q) ||
            t.solution.toLowerCase().includes(q)
          ).map(t => ({
            id: t.id,
            title: t.title,
            category: t.category,
            shortDesc: t.shortDesc,
            problem: t.problem,
            solution: t.solution,
            naturalApproach: t.naturalApproach,
            clinicalReview: t.clinicalReview
          }));
        },
        annotations: { readOnlyHint: true }
      }, { signal });

      console.log('WebMCP tools successfully registered.');
    } catch (err) {
      console.error('Failed to register WebMCP tools:', err);
    }

    return () => {
      controller.abort();
      console.log('WebMCP tools aborted/unregistered.');
    };
  }, [topicsData]);

  const renderContent = () => {
    // Feature #13: AI Citation-Ready Markdown Spec-Sheets (?format=raw)
    const isRawFormat = typeof window !== 'undefined' && window.location.search.includes('format=raw');
    if (isRawFormat) {
      const rawMarkdown = generateRawMarkdownSpec(currentPath, activeLocation);
      return (
        <div className="p-10 max-w-4xl mx-auto py-24">
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all', fontFamily: 'monospace', fontSize: '13px', backgroundColor: '#faf9f6', color: '#1c1917', padding: '24px', borderRadius: '16px', border: '1px solid #e7e5e4' }}>
            {rawMarkdown}
          </pre>
        </div>
      );
    }

    if (currentPath === 'home') return (
        <div className="space-y-4 pb-8">
            {/* Hero Slider Section */}
            <div className="relative">
                <HeroSlider banners={BANNERS} onNavigate={navigate} />
            </div>

            {/* Localized Location Alert Banner */}
            {activeLocation && (
              <div className="max-w-7xl mx-auto px-6 mt-6">
                <div className="bg-gradient-to-r from-emerald-900 to-emerald-950 dark:from-emerald-950 dark:to-stone-950 text-white rounded-3xl p-6 border border-emerald-800/50 flex flex-col md:flex-row justify-between items-center gap-4 shadow-xl">
                  <div className="flex items-center gap-4 text-center md:text-left">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-lime-400 shrink-0">
                      <IconMapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-lime-400">Personalized Outreach Hub</p>
                      <h2 className="text-lg font-black brand-font mt-0.5">Serving patients in {activeLocation.city}, {activeLocation.country || activeLocation.region}</h2>
                      <p className="text-xs text-stone-300 font-medium">Circadian diet protocols tailored to regional {activeLocation.zone} culinary staples. ZIP/PIN: {activeLocation.pincode}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => navigate(`clinic/${activeLocation.id}`)}
                    className="bg-lime-400 hover:bg-lime-300 text-emerald-950 px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all whitespace-nowrap"
                  >
                    View Local Center ➔
                  </button>
                </div>
              </div>
            )}

            {/* Introduction Quote */}
            <div className="max-w-4xl mx-auto px-6 py-2 text-center animate-in fade-in slide-in-from-bottom-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black uppercase tracking-[0.2em] border border-emerald-100 mb-6" aria-hidden="true">
                    <IconCheck size={12} /> Science-Based • Holistic • Clinical
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-emerald-950 brand-font italic leading-tight">
                    &quot;Most diseases begin in the kitchen, and the first medicine should also come from the kitchen.&quot;
                </h2>
                <p className="mt-8 text-stone-600 font-black uppercase tracking-widest text-sm">- Dr. Shilpa Thakur, Ph.D.</p>

                {/* Location personalizer prompt */}
                {!activeLocation && (
                  <button 
                    onClick={() => setIsLocationPickerOpen(true)}
                    className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200 hover:border-emerald-250 hover:bg-emerald-50/30 text-stone-500 hover:text-emerald-700 text-[10px] font-black uppercase tracking-widest transition-all"
                  >
                    <IconMapPin size={12} className="animate-bounce" /> Click to optimize site for your local staple diet
                  </button>
                )}
            </div>

            {/* Doctor Intro Section - Clinical Excellence (Compact & Optimized) */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-white rounded-[40px] shadow-2xl shadow-emerald-900/5 border border-stone-100 overflow-hidden relative group">
                    <div className="grid md:grid-cols-12 gap-0">
                        {/* Portrait Container - Optimized for fast loading & visual weight */}
                        <div className="md:col-span-5 relative h-[300px] md:h-auto overflow-hidden bg-stone-100">
                            <div className="absolute inset-0 w-full h-full overflow-hidden transform group-hover:scale-105 transition-transform duration-[3000ms]">
                                <img 
                                    src={TEAM[0].image} 
                                    fetchPriority="high"
                                    width="699"
                                    height="525"
                                    className="w-full h-full object-cover object-top" 
                                    alt="Dr. Shilpa Thakur" 
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-stone-900/10 to-transparent" aria-hidden="true"></div>
                        </div>
                        
                        {/* Content Area */}
                        <div className="md:col-span-7 p-6 md:p-8 lg:p-10 flex flex-col justify-center space-y-4 bg-stone-50/30">
                            <div className="space-y-3">
                                <span className="text-emerald-700 font-black uppercase tracking-[0.3em] text-xs bg-emerald-50 px-4 py-1 rounded-full border border-emerald-100 inline-block">Medical Nutritionist | Founder</span>
                                <h2 className="text-4xl md:text-5xl font-black text-emerald-950 brand-font leading-tight tracking-tighter">Root-Cause Focused Healing</h2>
                                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-100/50 rounded-lg w-fit">
                                     <IconCheck size={14} className="text-emerald-600" />
                                     <span className="text-[10px] font-black text-emerald-900 uppercase tracking-widest">{TEAM[0].details}</span>
                                </div>
                            </div>
                            
                            <div className="prose prose-stone max-w-none">
                                <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-bold italic border-l-4 border-lime-400 pl-8 py-2">
                                    &quot;Your kitchen is the ultimate hospital. We just provide the clinical manual for metabolic recovery.&quot;
                                </p>
                                <p className="text-stone-600 text-sm md:text-base leading-relaxed mt-6 font-medium">
                                    Dr. Shilpa Thakur holds a Ph.D. in Clinical Nutrition and operates as a world-class Metabolic Researcher and Clinical Nutrition Specialist (Non-Medical Practitioner). With over a decade of research experience, she specializes in the design of circadian food protocols and metabolic nutrition systems that optimize chronic wellness and support cellular health by blending ancient Ayurvedic principles with modern nutritional biology.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-stone-200">
                                <button onClick={() => navigate('team/shilpa')} className="bg-emerald-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-800 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-emerald-900/10">
                                    Meet Dr. Shilpa <IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <div className="flex items-center gap-6 px-8 text-stone-500 border-l border-stone-300 ml-0 sm:ml-4">
                                    <a href={TEAM[0].socials?.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors" aria-label="Dr. Shilpa Thakur LinkedIn (opens in a new window)"><IconLinkedIn size={24} /><span className="sr-only">(opens in a new window)</span></a>
                                    <a href={TEAM[0].socials?.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors" aria-label="Dr. Shilpa Thakur Instagram (opens in a new window)"><IconInstagram size={24} /><span className="sr-only">(opens in a new window)</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* How It Works (Full) */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <SectionHeading subtitle="Success Path" title="The Healing Process" />
                <div className="grid md:grid-cols-4 gap-8">
                    {HOW_IT_WORKS.map((item, i) => (
                        <div key={i} className="relative bg-white p-10 rounded-[32px] shadow-lg shadow-emerald-900/5 border border-stone-100 hover:shadow-2xl hover:border-emerald-100 transition-all group overflow-hidden">
                            <svg aria-hidden="true" className="absolute top-0 right-0 w-32 h-24 -mr-4 -mt-4 group-hover:scale-110 transition-transform select-none pointer-events-none" viewBox="0 0 100 80">
                                <text x="100" y="70" textAnchor="end" fontSize="72" fontWeight="900" fill="none" stroke="rgba(4, 120, 87, 0.1)" strokeWidth="1.5">0{i+1}</text>
                            </svg>
                            <div className="relative z-10 w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                                {item.icon === 'Search' && <IconSearch size={32} />}
                                {item.icon === 'FileText' && <IconFileText size={32} />}
                                {item.icon === 'Leaf' && <IconLeaf size={32} />}
                                {item.icon === 'Check' && <IconCheck size={32} />}
                            </div>
                            <h3 className="relative z-10 text-xl font-black text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors uppercase tracking-tight">{item.title}</h3>
                            <p className="relative z-10 text-stone-500 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Program Highlights - Lightened to differentiate from dark hero */}
            <div className="bg-stone-50 py-24 text-emerald-950 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" aria-hidden="true">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <SectionHeading subtitle="Clinical Care" title="Our Programs" isMain={false} />
                    <div className="grid md:grid-cols-3 gap-8">
                        {PLANS.map(p => {
                            const IconComp = p.id === 'plan-1' ? IconLeaf : p.id === 'plan-2' ? IconWand : IconLock;
                            
                            return (
                                <div key={p.id} className="bg-white rounded-[40px] shadow-xl border border-stone-100 hover:border-emerald-500 hover:shadow-2xl transition-all group p-10 flex flex-col h-full">
                                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-8 font-black">
                                        <IconComp size={32} />
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-widest text-emerald-800 mb-2 block">{p.idealFor}</span>
                                    <h3 className="text-2xl font-black mb-4 brand-font text-emerald-950">{p.name}</h3>
                                    <p className="text-stone-600 text-sm mb-8 leading-relaxed line-clamp-3 font-medium">{p.description}</p>
                                    <button onClick={() => navigate('plans')} className="w-full py-4 rounded-2xl bg-emerald-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-emerald-800 transition-colors mt-auto flex items-center justify-center gap-3">
                                        View Protocol <IconArrowRight size={14} />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Clinical Diagnosis Hub - Topics (Re-introduced) */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-t border-stone-100">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-xs font-black text-emerald-800 uppercase tracking-[0.4em] mb-2 block">Protocol Library</span>
                        <h2 className="text-4xl md:text-5xl font-black text-emerald-950 brand-font tracking-tight">Clinical Diagnosis Hub</h2>
                    </div>
                    <a href="/knowledge" onClick={(e) => { e.preventDefault(); navigate('knowledge'); }} className="bg-emerald-50 text-emerald-700 px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-100 transition-all flex items-center justify-center">Explore All Clinical Health Topics</a>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {topicsData.slice(0, 12).map((topic) => (
                        <div 
                            key={topic.id} 
                            onClick={() => navigate(`topic/${topic.id}`)}
                            className="bg-white border border-stone-100 p-6 rounded-3xl hover:border-emerald-200 hover:shadow-xl transition-all cursor-pointer group flex flex-col h-full"
                        >
                            <div className="w-10 h-10 rounded-xl bg-stone-50 flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                <IconFlask size={18} />
                            </div>
                            <h3 className="text-xs font-black text-emerald-950 uppercase tracking-tight leading-tight group-hover:text-emerald-700 transition-colors mb-2">
                                {topic.title}
                            </h3>
                            <p className="text-xs text-stone-600 font-bold uppercase tracking-widest mt-auto">
                                {topic.category}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials Teaser */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-px bg-emerald-500"></div>
                            <span className="text-emerald-800 font-black uppercase tracking-widest text-xs">Proof of Concept</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-emerald-950 brand-font mt-2">Life Transformed</h2>
                    </div>
                    <a href="/testimonials" onClick={(e) => { e.preventDefault(); navigate('testimonials'); }} className="px-8 py-3 bg-stone-100 text-stone-600 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-50 hover:text-emerald-700 transition-all flex items-center justify-center">
                        Read All Patient Success Stories
                    </a>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map(t => (
                        <div key={t.id} className="bg-white p-10 rounded-[32px] shadow-sm border border-stone-100 hover:shadow-xl transition-all relative">
                            <div aria-hidden="true" className="text-5xl text-emerald-100 font-serif absolute top-6 left-6 -z-0 opacity-50">&quot;</div>
                            <div className="relative z-10">
                                <p className="text-stone-600 italic leading-relaxed text-sm mb-8">&quot;{t.text}&quot;</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100 shadow-sm">
                                        <IconUser size={20} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-emerald-950 text-sm">{t.name}</div>
                                        <span className="text-xs uppercase font-black text-emerald-800 tracking-widest">{t.condition}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Clinical Recipes - MINIMAL FOOTPRINT */}
            <div className="max-w-7xl mx-auto px-6 py-6 border-t border-stone-100">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-px bg-emerald-500"></div>
                            <span className="text-xs font-black uppercase tracking-widest text-emerald-800">Kitchen Laboratory</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-emerald-950 brand-font tracking-tight">Clinical Recipes</h2>
                    </div>
                    <a href="/recipes" onClick={(e) => { e.preventDefault(); navigate('recipes'); }} className="text-xs font-black text-emerald-800 border-b-2 border-emerald-200 pb-1 hover:border-emerald-500 transition-all">View All Healing Recipes</a>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {RECIPES.slice(0,4).map(recipe => (
                        <a key={recipe.id} href={`/recipe/${recipe.id}`} onClick={(e) => { e.preventDefault(); navigate(`recipe/${recipe.id}`); }} className="group flex flex-col bg-white rounded-2xl p-6 border border-stone-100 hover:shadow-xl transition-all duration-300 text-left block">
                            <div>
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest">{recipe.category}</span>
                                    <div className="flex gap-1">
                                        {recipe.tags.slice(0, 1).map((tag, i) => (
                                            <span key={i} className="text-[10px] font-bold text-stone-600 border border-stone-200 px-2 rounded-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <h3 className="text-base font-black text-emerald-950 brand-font leading-tight group-hover:text-emerald-700 transition-colors uppercase tracking-tight line-clamp-2 mb-2">{recipe.title}</h3>
                                <div className="flex items-center gap-2 text-xs font-bold text-stone-600 uppercase tracking-widest">
                                    <IconUtensils size={12} className="text-emerald-500" />
                                    <span>{recipe.prepTime}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* BannersSlider - COMPACT TEXT CARDS */}
            <div className="max-w-7xl mx-auto px-6 pb-20">
                <div className="grid md:grid-cols-3 gap-6">
                    {BANNERS.map(banner => (
                        <div key={banner.id} onClick={() => navigate('plans')} className="group flex flex-col justify-center items-center text-center rounded-3xl bg-emerald-950 p-10 cursor-pointer shadow-sm hover:shadow-lg border border-white/5 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]" aria-hidden="true"></div>
                            <div className="relative z-10 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lime-400 mb-6 group-hover:bg-lime-400 group-hover:text-emerald-950 transition-all duration-500">
                                <IconFlask size={24} />
                            </div>
                            <h3 className="relative z-10 text-xl font-black mb-2 text-white brand-font leading-tight">{banner.title}</h3>
                            <p className="relative z-10 text-emerald-400 text-[10px] uppercase tracking-widest font-black">{banner.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Global Community Section (Compact Row) */}
            <div className="max-w-7xl mx-auto px-6 pb-24">
                <div className="text-center mb-12">
                    <span className="text-emerald-700 font-black uppercase tracking-[0.3em] text-xs">Global Community</span>
                    <h2 className="text-3xl md:text-5xl font-black text-emerald-950 brand-font mt-2">Join Our Digital Tribe</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
                        Clinical wisdom for everyone. Join over <strong>100,000+</strong> wellness seekers.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {/* LinkedIn */}
                    <button onClick={() => navigate('connect')} className="bg-[#005c8e] text-white p-8 rounded-[40px] shadow-lg group hover:scale-[1.05] transition-all duration-300 flex flex-col items-center justify-center gap-4">
                        <IconLinkedIn size={32} className="group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">LinkedIn</span>
                    </button>

                    {/* Facebook */}
                    <button onClick={() => navigate('connect')} className="bg-[#165bb4] text-white p-8 rounded-[40px] shadow-lg group hover:scale-[1.05] transition-all duration-300 flex flex-col items-center justify-center gap-4">
                        <IconFacebook size={32} className="group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Facebook</span>
                    </button>

                    {/* Instagram */}
                    <button onClick={() => navigate('connect')} className="bg-gradient-to-tr from-[#96126d] via-[#b3143c] to-[#d66511] text-white p-8 rounded-[40px] shadow-lg group hover:scale-[1.05] transition-all duration-300 flex flex-col items-center justify-center gap-4">
                        <IconInstagram size={32} className="group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Instagram</span>
                    </button>

                    {/* YouTube */}
                    <button onClick={() => navigate('connect')} className="bg-[#c00000] text-white p-8 rounded-[40px] shadow-lg group hover:scale-[1.05] transition-all duration-300 flex flex-col items-center justify-center gap-4">
                        <IconYouTube size={32} className="group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">YouTube</span>
                    </button>

                    {/* Twitter */}
                    <button onClick={() => navigate('connect')} className="bg-black text-white p-8 rounded-[40px] shadow-lg group hover:scale-[1.05] transition-all duration-300 flex flex-col items-center justify-center gap-4">
                        <IconTwitter size={32} className="group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Twitter</span>
                    </button>

                    {/* Quora */}
                    <button onClick={() => navigate('connect')} className="bg-[#96201c] text-white p-8 rounded-[40px] shadow-lg group hover:scale-[1.05] transition-all duration-300 flex flex-col items-center justify-center gap-4">
                        <IconQuora size={32} className="group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Quora</span>
                    </button>
                </div>
            </div>

            <FAQSection data={HOME_FAQS} title="NutritionColours Basics" />
        </div>
    );

    if (currentPath.startsWith('plans')) {
        const planSlug = currentPath.split('/')[1];
        const PLAN_SLUG_MAP: Record<string, string> = {
            'metabolic-mastery': 'plan-1',
            'therapeutic-reversal': 'plan-2',
            'cellular-resurrection': 'plan-3'
        };
        const selectedPlan = planSlug ? PLANS.find(p => p.id === (PLAN_SLUG_MAP[planSlug] || planSlug)) : null;

        return (
            <div className="space-y-0">
                {/* Hero Section for Plans - Refined Editorial Style */}
                <div className="relative w-full min-h-[500px] lg:h-[70vh] bg-emerald-950 overflow-hidden flex items-center px-6">
                    <div className="absolute inset-0 z-0">
                        {/* Background pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:48px_48px] opacity-10" aria-hidden="true"></div>
                        
                        {/* Animated Visual Effect instead of image */}
                        <AnimatedVisual type={selectedPlan ? selectedPlan.id : 'catalog'} />
                        
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/90 to-emerald-950/40" aria-hidden="true"></div>
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-emerald-950 to-transparent" aria-hidden="true"></div>
                    </div>
                    
                    <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-black uppercase tracking-[0.5em]">
                                <IconFlask size={16} /> Precision Protocol
                            </div>
                            
                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white brand-font leading-[0.9] tracking-tighter">
                                    {selectedPlan ? selectedPlan.name : (
                                        <>Clinical <span className="text-lime-400 italic">Healing</span> Systems</>
                                    )}
                                </h1>
                                <div className="w-24 h-1.5 bg-lime-400 rounded-full" aria-hidden="true"></div>
                            </div>

                            <p className="text-emerald-50/80 text-xl md:text-2xl font-bold italic leading-relaxed border-l-4 border-lime-400 pl-8">
                                {selectedPlan 
                                    ? selectedPlan.description 
                                    : "Evidence-based metabolic protocols designed to achieve clinical remission through physician-led nutritional science."
                                }
                            </p>

                            {activeLocation && (
                              <div className="flex items-center gap-2 bg-lime-400/10 border border-lime-400/20 text-lime-400 rounded-2xl p-4 w-fit animate-in fade-in duration-300">
                                <IconMapPin size={16} />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                                  📍 Outreach Active: {activeLocation.city}, {activeLocation.country}
                                </span>
                              </div>
                            )}

                            <div className="flex gap-4">
                                {!selectedPlan ? (
                                    <div className="flex flex-wrap gap-6 pt-4">
                                        <div className="flex items-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-widest">
                                            <IconCheck size={14} className="text-lime-400" /> Bio-Individual
                                        </div>
                                        <div className="flex items-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-widest">
                                            <IconCheck size={14} className="text-lime-400" /> Evidence-Based
                                        </div>
                                    </div>
                                ) : (
                                    <button 
                                        onClick={() => navigate('plans')}
                                        className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl border border-white/10 text-xs font-black uppercase tracking-widest transition-all flex items-center gap-3"
                                    >
                                        <IconArrowRight size={16} className="rotate-180" /> Back to Catalog
                                    </button>
                                )}
                            </div>
                        </div>
                        
                        {/* Decorative Clinical Box for differentiation */}
                        <div className="hidden lg:block relative">
                            <div className="absolute -inset-4 bg-lime-400/20 blur-3xl rounded-full" aria-hidden="true"></div>
                            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[48px] p-12 overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 to-emerald-400/5" aria-hidden="true"></div>
                                <IconFlask size={120} className="text-lime-400/20 absolute -bottom-10 -right-10 group-hover:scale-110 transition-transform duration-1000" />
                                <div className="relative z-10 space-y-6">
                                    <div className="w-16 h-16 rounded-2xl bg-lime-400 text-emerald-950 flex items-center justify-center shadow-lg shadow-lime-400/20">
                                        <IconLock size={32} />
                                    </div>
                                    <h3 className="text-3xl font-black text-white brand-font">Protocol Admission</h3>
                                    <p className="text-emerald-100/60 text-sm leading-relaxed">
                                        Admissions to our clinical protocols are limited and require a preliminary evaluation to ensure optimal candidate-program alignment.
                                    </p>
                                    <button 
                                        onClick={() => navigate('contact')}
                                        className="w-full bg-white text-emerald-950 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-lime-400 transition-all cursor-pointer"
                                    >
                                        Secure Early Slot
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-20 animate-in fade-in duration-1000 delay-300">
                    {selectedPlan ? (
                        <div className="bg-white rounded-[40px] shadow-2xl border border-stone-100 overflow-hidden">
                            <div className="grid md:grid-cols-2">
                                 {/* Left Side: Visual/Feature List */}
                                 <div className="p-10 md:p-16 border-r border-stone-100 bg-stone-50/30">
                                    <h3 className="text-2xl font-black text-emerald-950 mb-8 brand-font flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-900 text-white flex items-center justify-center">
                                            <IconCheck size={20} />
                                        </div>
                                        Core Protocol Benefits
                                    </h3>
                                    <div className="space-y-6">
                                        {selectedPlan.features.map((f, i) => (
                                            <div key={i} className="flex gap-4 group">
                                                <div className="w-6 h-6 rounded-full bg-white border border-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                                    <IconCheck size={14} className="text-emerald-600 group-hover:text-white transition-colors" />
                                                </div>
                                                <p className="text-stone-700 font-medium leading-relaxed">{f}</p>
                                            </div>
                                        ))}
                                    </div>
                                 </div>
                                 
                                 {/* Right Side: Tiers & Call to Action */}
                                 <div className="p-10 md:p-16 space-y-10">
                                    <div>
                                        <h3 className="text-2xl font-black text-emerald-950 mb-6 brand-font">Investment Tiers</h3>
                                        <div className="grid gap-6">
                                            {selectedPlan.tiers.map((t, i) => (
                                                <div key={i} className="bg-white p-8 rounded-3xl border-2 border-stone-100 hover:border-emerald-500 transition-all group relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity" aria-hidden="true">
                                                        <IconFlask size={60} />
                                                    </div>
                                                    <div className="relative z-10 flex justify-between items-center">
                                                        <div>
                                                            <div className="text-xs font-black text-stone-500 uppercase tracking-widest mb-1">{t.label}</div>
                                                            <div className="text-3xl font-black text-emerald-700 brand-font">{t.price}</div>
                                                        </div>
                                                        <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                                            <IconArrowRight size={20} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                                                      <div className="pt-6 border-t border-stone-100">
                                        <button 
                                            onClick={() => navigate('contact')} 
                                            className="w-full bg-emerald-900 text-white py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/20 flex items-center justify-center gap-4 group"
                                        >
                                            Secure Your Consultation <IconArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <p className="text-center text-stone-500 text-[10px] font-bold uppercase tracking-widest mt-6 italic">
                                            Program admission subject to clinical evaluation and initial screening.
                                        </p>
                                    </div>
                                 </div>
                            </div>
                            <div className="px-10 pb-6">
                                <MedicalDisclaimerBanner />
                            </div>
                            <div className="p-10 border-t border-stone-100">
                                <FAQSection data={PLANS_FAQS} title="Program Specific FAQs" />
                            </div>
                        </div>
                    ) : (
                  <>
                  <div className="grid lg:grid-cols-3 gap-8">
                      {PLANS.map(p => {
                          const IconComp = p.id === 'plan-1' ? IconLeaf : p.id === 'plan-2' ? IconWand : IconLock;
                          const accentColor = p.id === 'plan-1' ? 'emerald' : p.id === 'plan-2' ? 'lime' : 'teal';
                          
                          return (
                              <div key={p.id} className="card-clinical flex flex-col group h-full">
                                  <div className="p-8 flex-grow">
                                      <div className="flex justify-between items-start mb-6">
                                          <div className={`w-14 h-14 rounded-2xl bg-${accentColor}-50 flex items-center justify-center text-${accentColor}-600 group-hover:scale-110 transition-transform duration-500`}>
                                              <IconComp size={28} />
                                          </div>
                                          <span className="badge-clinical">Featured</span>
                                      </div>
                                      
                                <div className="text-xs font-black text-stone-500 uppercase tracking-[0.2em] mb-2">{p.idealFor}</div>
                                      <h3 className="text-2xl font-black text-emerald-950 mb-4 brand-font leading-tight">{p.name}</h3>
                                      <p className="text-stone-500 mb-8 text-sm leading-relaxed line-clamp-3">{p.description}</p>
                                      
                                      <div className="space-y-4 mb-8">
                                          <div className="text-xs font-bold text-stone-500 uppercase tracking-widest border-b border-stone-100 pb-2">Includes</div>
                                          {p.features.slice(0, 3).map((f, i) => (
                                              <div key={i} className="flex items-start gap-3 text-[13px] text-stone-600">
                                                  <div className={`mt-1 h-1.5 w-1.5 rounded-full bg-${accentColor}-400 shrink-0`} />
                                                  <span className="line-clamp-2">{f}</span>
                                              </div>
                                          ))}
                                      </div>
                                  </div>
                                  
                                  <div className="px-8 pb-8">
                                      <button 
                                          onClick={() => navigate(`plans/${p.id.split('-')[1] === '1' ? 'metabolic-mastery' : p.id.split('-')[1] === '2' ? 'therapeutic-reversal' : 'cellular-resurrection'}`)} 
                                          className={`w-full py-4 rounded-2xl font-black uppercase tracking-[0.15em] text-xs transition-all
                                              ${p.id === 'plan-3' 
                                                  ? 'bg-emerald-950 text-white hover:bg-emerald-800 shadow-xl shadow-emerald-900/10' 
                                                  : 'bg-stone-50 text-emerald-900 border border-stone-200 hover:border-emerald-200 hover:bg-emerald-50'
                                              }`}
                                      >
                                          View Full Protocol
                                      </button>
                                  </div>
                              </div>
                          );
                      })}
                  </div>

                  {/* 2026 Circadian Reset Challenge CTA */}
                  <div className="mt-12 bg-gradient-to-r from-emerald-900 to-emerald-950 rounded-[32px] text-white p-8 md:p-12 shadow-xl relative overflow-hidden border border-emerald-800 flex flex-col md:flex-row justify-between items-center gap-8 animate-in fade-in duration-700">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400 opacity-5 rounded-full blur-3xl" aria-hidden="true"></div>
                      <div className="space-y-4 max-w-2xl relative z-10">
                          <span className="text-[10px] font-black text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/25 tracking-widest uppercase inline-block">2026 Circadian Reset Challenge</span>
                          <h3 className="text-3xl font-black brand-font leading-tight">Is your daily routine holding back your metabolic recovery?</h3>
                          <p className="text-emerald-100/70 text-sm leading-relaxed">
                              Aligning meal times, sleep hygiene, and light cycles with natural biological clocks reduces systemic insulin resistance and cellular stress. Take the Circadian Sync Game, calculate your score, and download your shareable SVG achievement badge.
                          </p>
                      </div>
                      <button 
                          onClick={() => navigate('tools')} 
                          className="shrink-0 bg-lime-400 hover:bg-lime-300 text-emerald-950 font-black uppercase tracking-widest text-xs px-8 py-5 rounded-2xl transition-all shadow-lg hover:scale-105 active:scale-95 duration-200 cursor-pointer"
                      >
                          Start Rhythm Audit
                      </button>
                  </div>

                  <MedicalDisclaimerBanner />
                  </>
                )}
                <FAQSection data={PLANS_FAQS} title="Program FAQs" />
            </div>
        </div>
    );
}

    if (currentPath === 'knowledge') return (
        <div className="bg-stone-50/30 min-h-screen pt-12 pb-24 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                             <div className="w-8 h-1 bg-emerald-500 rounded-full"></div>
                             <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-800">Metabolic Repository</span>
                        </div>
                        <h1 className="text-4xl md:text-8xl font-black text-emerald-950 brand-font leading-[0.85] tracking-tighter">
                            Clinical Health <br/>Topics
                        </h1>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {topicsData.map(topic => (
                        <a key={topic.id} href={`/topic/${topic.id}`} onClick={(e) => { e.preventDefault(); navigate(`topic/${topic.id}`); }} className="group bg-white rounded-3xl p-6 border border-stone-100 hover:border-emerald-200 shadow-sm transition-all duration-300 flex flex-col h-full text-left block">
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-[10px] font-black uppercase tracking-[0.1em] px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-100">{topic.category}</span>
                                <IconFlask size={14} className="text-stone-300 group-hover:text-emerald-500 transition-colors" />
                            </div>
                            
                            <h3 className="text-lg font-black text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors brand-font uppercase tracking-tight line-clamp-2 min-h-[3.5rem]">{topic.title}</h3>
                            <p className="text-stone-500 text-[11px] leading-relaxed mb-6 flex-grow line-clamp-2 italic">{topic.shortDesc}</p>
                            
                            <div className="flex flex-wrap gap-1 mb-6">
                                {topic.naturalApproach.slice(0, 3).map((item, i) => (
                                    <span key={i} className="text-[7px] font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-1 border border-emerald-200">{item}</span>
                                ))}
                            </div>
                            
                            <div className="mt-auto pt-4 border-t border-stone-50 opacity-60 flex items-center justify-between">
                                <span className="text-[10px] font-black font-mono text-emerald-800 tracking-widest">CLINICAL DOC: {topic.id.toUpperCase()}</span>
                                <IconArrowRight size={14} className="text-emerald-600 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>
                    ))}
                </div>
                <div className="mt-20">
                    <FAQSection data={KNOWLEDGE_FAQS} title="Knowledge Base FAQs" />
                </div>
            </div>
        </div>
    );

    if (currentPath === 'blogs') return (
        <div className="bg-white min-h-screen pt-12 pb-24 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4 space-y-8 sticky top-40">
                        <div className="flex items-center gap-4">
                             <div className="w-12 h-1.5 bg-lime-400 rounded-full"></div>
                             <span className="text-sm font-black uppercase tracking-[0.4em] text-emerald-800">Clinical Journal</span>
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black text-emerald-950 brand-font leading-[0.75] tracking-tighter">
                            Latest <br/>Analysis
                        </h1>
                        <p className="text-2xl text-stone-600 italic leading-relaxed font-bold">Biochemical deep-dives into metabolic reversal.</p>
                        <div className="h-px w-full bg-stone-300"></div>
                        <div className="flex gap-6">
                            <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-100 flex-1 shadow-md">
                                <p className="text-sm font-black text-emerald-800 uppercase tracking-widest mb-3 font-sans">Articles</p>
                                <p className="text-4xl font-black text-emerald-950">{BLOG_ARTICLES.length}</p>
                            </div>
                            <div className="p-8 bg-stone-50 rounded-2xl border border-stone-200 flex-1 shadow-sm">
                                <p className="text-sm font-black text-stone-500 uppercase tracking-widest mb-3">Format</p>
                                <p className="text-4xl font-black text-emerald-950 uppercase">Analysis</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        {BLOG_ARTICLES.map(article => (
                            <a key={article.id} href={`/article/${article.id}`} onClick={(e) => { e.preventDefault(); navigate(`article/${article.id}`); }} className="group bg-white rounded-3xl p-8 border border-stone-100 hover:border-emerald-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col text-left block">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-black text-emerald-800 uppercase tracking-[0.3em] bg-emerald-50 px-3 py-1 rounded-sm border border-emerald-100/50">{article.date}</span>
                                    <div className="flex items-center gap-2">
                                        <IconFlask size={16} className="text-emerald-800/50" />
                                        <span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest border-b border-stone-100 pb-0.5">{article.category}</span>
                                    </div>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black text-emerald-950 brand-font leading-tight mb-4 group-hover:text-emerald-700 transition-colors uppercase tracking-tight">{article.title}</h2>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {article.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-stone-500 border border-stone-200 px-2 py-0.5 bg-stone-50 rounded-sm">{tag}</span>
                                    ))}
                                </div>
                                <p className="text-stone-600 text-base leading-relaxed mb-6 font-medium italic">
                                    {article.excerpt}
                                </p>
                                <div className="mt-auto pt-6 border-t border-stone-50 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-black text-stone-500 uppercase tracking-widest">{article.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-800 group-hover:text-emerald-950 transition-colors">
                                        Read Clinical Report <IconArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-20">
                    <FAQSection data={BLOGS_FAQS} title="Editorial FAQs" />
                </div>
            </div>
        </div>
    );

    if (currentPath === 'vegan') return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-12">
            <SectionHeading subtitle="Lifestyle" title="Vegan Guide" isMain={true} />
            
            <div className="bg-emerald-950 rounded-[48px] p-10 md:p-20 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" aria-hidden="true">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400 rounded-full blur-[100px]"></div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-8">
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-lime-400">Holistic Reset</span>
                        <h2 className="text-4xl md:text-6xl font-black brand-font leading-none tracking-tighter">Plant-Based Healing</h2>
                        <p className="text-emerald-100/70 text-lg leading-relaxed max-w-xl">
                            A well-planned vegan diet is one of the most powerful tools for reversing chronic disease. 
                            By eliminating inflammatory animal proteins and focusing on nutrient-dense plants, 
                            you can lower inflammation, improve heart health, and balance hormones naturally.
                        </p>
                        <button onClick={() => navigate('recipes')} className="inline-flex items-center gap-3 bg-lime-400 text-emerald-950 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-emerald-950 transition-all shadow-xl shadow-lime-400/10">
                            Explore Vegan Protocols <IconArrowRight size={14} />
                        </button>
                    </div>
                    
                    <div className="hidden lg:block relative h-full">
                        <div className="h-full rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center justify-center p-12 text-center space-y-6">
                             <div className="w-24 h-24 border-2 border-lime-400/20 rounded-3xl flex items-center justify-center">
                                 <IconLeaf size={48} className="text-lime-400/40" />
                             </div>
                             <div className="space-y-2">
                                <p className="text-xs font-black text-lime-400 uppercase tracking-[0.3em]">Plant Intelligence</p>
                                <p className="text-[10px] text-white/40 uppercase tracking-widest">Core Protocol v4.0</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-2xl font-bold text-emerald-950 mb-6 px-2">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {BLOG_ARTICLES.filter(a => a.category === CategoryType.VEGAN).map(article => (
                    <div key={article.id} onClick={() => navigate(`article/${article.id}`)} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 cursor-pointer hover:shadow-md transition-all">
                        <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                        <p className="text-sm text-stone-500 line-clamp-2">{article.excerpt}</p>
                    </div>
                ))}
            </div>
            <FAQSection data={VEGAN_FAQS} title="Vegan FAQs" />
        </div>
    );

    if (currentPath === 'recipes') return (
        <div className="animate-in fade-in duration-700 bg-stone-50/50 min-h-screen pb-24">
            {/* Minimalist Clinical Hero */}
            <div className="bg-white border-b border-stone-200 pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(#064e3b 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="w-12 h-1.5 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm font-black uppercase tracking-[0.4em] text-emerald-800">Therapeutic Kitchen</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-emerald-950 brand-font leading-[0.85] tracking-tighter mb-8 max-w-4xl">
                        Medicinal Food <br/>Protocols
                    </h1>
                    <p className="text-2xl text-stone-600 max-w-3xl leading-relaxed font-bold italic border-l-4 border-lime-400 pl-8">
                        Our recipes are mapped to specific metabolic outcomes. Filter by diagnosis to find your cellular reset.
                    </p>
                </div>
            </div>

            <div className="p-6 md:p-12 max-w-7xl mx-auto">
                {/* Search and Filters Bar */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 mb-10 space-y-6">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        <div className="relative w-full md:max-w-md">
                            <input 
                                type="text"
                                placeholder="Search recipes by name, tag, benefit..."
                                value={recipeQuery}
                                onChange={(e) => setRecipeQuery(e.target.value)}
                                className="w-full bg-stone-50 border border-stone-100 p-4 pl-12 rounded-2xl outline-none focus:border-emerald-500 font-medium text-stone-700 placeholder:text-stone-400 transition-all"
                            />
                            <span className="absolute left-4 top-4 text-stone-400">
                                <IconSearch size={18} />
                            </span>
                            {recipeQuery && (
                                <button 
                                    onClick={() => setRecipeQuery('')}
                                    className="absolute right-4 top-4 text-xs font-bold text-stone-400 hover:text-stone-600 uppercase tracking-widest"
                                >
                                    Clear
                                </button>
                            )}
                        </div>
                        <div className="flex items-center gap-2 self-start md:self-auto">
                            <span className="text-[10px] font-black uppercase tracking-widest text-stone-500">
                                Protocols found:
                            </span>
                            <span className="bg-emerald-50 text-emerald-800 text-xs font-black px-2.5 py-1 rounded-md border border-emerald-100">
                                {RECIPES.filter(recipe => {
                                    const matchesCategory = recipeCategory === 'All' || recipe.category === recipeCategory;
                                    const matchesTag = recipeTag === 'All' || recipe.tags.some(t => t.toLowerCase() === recipeTag.toLowerCase() || t.toLowerCase().includes(recipeTag.toLowerCase()));
                                    const matchesSearch = recipe.title.toLowerCase().includes(recipeQuery.toLowerCase()) || 
                                                          recipe.description.toLowerCase().includes(recipeQuery.toLowerCase()) ||
                                                          recipe.tags.some(t => t.toLowerCase().includes(recipeQuery.toLowerCase()));
                                    return matchesCategory && matchesTag && matchesSearch;
                                }).length}
                            </span>
                        </div>
                    </div>

                    {/* Category Selection Pills */}
                    <div className="space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 ml-1">Categories</span>
                        <div className="flex flex-wrap gap-2">
                            {['All', 'Main', 'Salad', 'Soup', 'Drink', 'Dessert'].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setRecipeCategory(cat)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${recipeCategory === cat ? 'bg-emerald-600 text-white shadow-md' : 'bg-stone-50 text-stone-500 hover:bg-emerald-50'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Health Tag Selection Pills */}
                    <div className="space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 ml-1">Health Outcomes</span>
                        <div className="flex flex-wrap gap-2">
                            {['All', 'Anti-inflammatory', 'Metabolic', 'Heart Health', 'Gut Health', 'Detox', 'Blood Sugar', 'Brain Health', 'Immunity'].map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => setRecipeTag(tag)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${recipeTag === tag ? 'bg-emerald-600 text-white shadow-md' : 'bg-stone-50 text-stone-500 hover:bg-emerald-50'}`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* List-Card Hybrid Grid - REDUCED FOOTPRINT */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {RECIPES.filter(recipe => {
                        const matchesCategory = recipeCategory === 'All' || recipe.category === recipeCategory;
                        const matchesTag = recipeTag === 'All' || recipe.tags.some(t => t.toLowerCase() === recipeTag.toLowerCase() || t.toLowerCase().includes(recipeTag.toLowerCase()));
                        const matchesSearch = recipe.title.toLowerCase().includes(recipeQuery.toLowerCase()) || 
                                              recipe.description.toLowerCase().includes(recipeQuery.toLowerCase()) ||
                                              recipe.tags.some(t => t.toLowerCase().includes(recipeQuery.toLowerCase()));
                        return matchesCategory && matchesTag && matchesSearch;
                    }).map((recipe) => (
                        <div 
                            key={recipe.id} 
                            onClick={() => navigate(`recipe/${recipe.id}`)} 
                            className="group bg-white rounded-3xl p-8 border border-stone-100 hover:border-emerald-200 shadow-sm transition-all duration-300 cursor-pointer flex flex-col"
                        >
                            <div className="flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-6 gap-4">
                                    <span className="badge-clinical text-[11px] whitespace-nowrap">{recipe.category}</span>
                                    <span className="text-sm font-black text-emerald-800 font-mono tracking-tighter shrink-0">{recipe.calories} kcal</span>
                                </div>
                                <h3 className="text-2xl font-black text-emerald-950 brand-font leading-tight mb-4 group-hover:text-emerald-700 transition-colors uppercase tracking-tight">
                                    {recipe.title}
                                </h3>
                                <p className="text-stone-600 text-base leading-relaxed mb-6 italic font-medium">
                                    {recipe.description}
                                </p>
                                
                                <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between text-xs font-black uppercase tracking-widest text-stone-500">
                                    <div className="flex flex-wrap gap-2 max-w-[60%]">
                                        {recipe.tags.slice(0, 3).map((tag, i) => (
                                            <span key={i} className="text-xs bg-stone-50 px-3 py-1 border border-stone-100 font-bold">{tag}</span>
                                        ))}
                                    </div>
                                    <span className="flex items-center gap-2"><IconUtensils size={14} className="text-emerald-500" /> {recipe.prepTime}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20">
                    <FAQSection data={RECIPES_FAQS} title="Protocol Clarifications" />
                </div>
            </div>
        </div>
    );

    if (currentPath === 'about') return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-24">
            <div className="space-y-16">
                <SectionHeading subtitle="Philosophy" title="Our Approach" isMain={true} />
                <div className="max-w-4xl space-y-6">
                    <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-medium">
                        <div className="p-10 bg-emerald-50 rounded-[40px] border border-emerald-100 shadow-sm">
                            <h2 className="text-3xl font-black text-emerald-950 brand-font mb-4">The Modern Health Crisis</h2>
                            <p className="text-lg text-stone-600 leading-relaxed">
                                In a world where lifestyle disorders like obesity, thyroid dysfunction, diabetes, and PCOD are normalized, conventional medicine often focuses on symptom management. At NutritionColours, we assert that true healing requires a root-cause approach that addresses the foundational triggers of disease.
                            </p>
                        </div>
                        <p className="px-4">
                            Our bedrock belief is that most diseases begin in the kitchen, and therefore, the first and most effective medicine should be sourced from the kitchen. We blend ancient Ayurvedic wisdom with modern nutritional science to help you heal naturally.
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-16">
                <SectionHeading subtitle="Service Excellence" title="The Four Pillars of Healing" isMain={false} />
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: 'Root-Cause Focused Healing', desc: 'We go beyond symptom management to reverse diseases from their roots using whole plant-based foods.', icon: <IconLeaf size={32} /> },
                        { title: 'Personalised Medical Nutrition', desc: 'Exhaustively customized protocols based on your specific medical diagnosis, lifestyle, and biochemical imbalances.', icon: <IconFileText size={32} /> },
                        { title: 'Lifestyle Disorders Reversal', desc: 'Directly addressing systemic issues like insulin resistance and chronic inflammation through functional nutrition.', icon: <IconCheck size={32} /> },
                        { title: 'Education & Empowerment', desc: 'Providing the tools to understand your body, moving far beyond simply handed-out diet charts.', icon: <IconSearch size={32} /> }
                    ].map((pillar, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-[40px] border border-stone-100 shadow-lg hover:shadow-2xl transition-all group flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-3xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-black text-emerald-950 mb-4 brand-font leading-tight">{pillar.title}</h3>
                            <p className="text-stone-500 text-sm leading-relaxed">{pillar.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-emerald-950 rounded-[64px] p-12 md:p-24 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/10 rounded-full blur-[100px]" aria-hidden="true"></div>
                <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                    <span className="text-lime-400 font-black uppercase tracking-[0.4em] text-[10px]">Our Vision</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white brand-font leading-tight">Sparking a Food-as-Medicine Revolution</h2>
                    <p className="text-emerald-100/70 text-lg md:text-xl leading-relaxed">
                        To educate the world that food is chemistry, therapy, and pure biological energy. We aim to reduce dependency on long-term medications and make natural, sustainable healing accessible to every home.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 pt-8">
                        <button onClick={() => navigate('plans')} className="bg-lime-400 text-emerald-950 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-lime-300 transition-all">Start Your Journey</button>
                        <button onClick={() => navigate('contact')} className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Speak to an Expert</button>
                    </div>
                </div>
            </div>

            <FAQSection data={ABOUT_FAQS} title="Philosophy FAQs" />
        </div>
    );

    if (currentPath === 'history') return (
        <div className="p-6 md:p-10 max-w-4xl mx-auto">
            <SectionHeading subtitle="Timeline" title="Our Journey" isMain={false} />
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-300 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-emerald-500 group-[.is-active]:bg-emerald-500 text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <IconLeaf size={16} />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-emerald-900">Founded</div>
                            <time className="font-mono text-xs text-stone-500">2010</time>
                        </div>
                        <div className="text-stone-500 text-sm">Dr. Shilpa Thakur starts her private practice in Chandigarh with a focus on diabetic care.</div>
                    </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white border-emerald-500 text-emerald-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <IconLeaf size={16} />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-emerald-900">Expansion</div>
                            <time className="font-mono text-xs text-stone-500">2015</time>
                        </div>
                        <div className="text-stone-500 text-sm">Opened the first dedicated metabolic lab to integrate blood work analysis with nutrition plans.</div>
                    </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white border-emerald-500 text-emerald-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <IconLeaf size={16} />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-emerald-900">Global Reach</div>
                            <time className="font-mono text-xs text-stone-500">2020</time>
                        </div>
                        <div className="text-stone-500 text-sm">Launched the online platform, allowing patients from 15+ countries to access our protocols.</div>
                    </div>
                </div>
                 <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <IconLeaf size={16} />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-emerald-900">Today</div>
                            <time className="font-mono text-xs text-stone-500">2024</time>
                        </div>
                        <div className="text-stone-500 text-sm">Celebrating 5,000+ successful reversals and counting.</div>
                    </div>
                </div>
            </div>
            
            <FAQSection data={ABOUT_FAQS} title="History & Heritage FAQs" />
        </div>
    );

    if (currentPath === 'testimonials') return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
            <SectionHeading subtitle="Results" title="Success Stories" isMain={true} />
            <div className="grid md:grid-cols-3 gap-8 mb-12">
                {TESTIMONIALS.map(t => (
                    <div key={t.id} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
                                <IconUser size={18} />
                            </div>
                            <div>
                                <div className="font-bold text-emerald-950 text-xs">{t.name}</div>
                                <div className="text-[8px] text-stone-500 uppercase tracking-wider">{t.role}</div>
                            </div>
                        </div>
                        <div className="mb-6 flex-grow">
                            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                                {t.condition}
                            </span>
                            <p className="text-stone-600 italic leading-relaxed">&quot;{t.text}&quot;</p>
                        </div>
                        <div className="text-xs font-bold text-stone-300 uppercase tracking-widest border-t border-stone-100 pt-4">
                            Verified Patient • {t.date}
                        </div>
                    </div>
                ))}
            </div>
            <FAQSection data={TESTIMONIALS_FAQS} title="Results FAQs" />
        </div>
    );

    if (currentPath === 'contact') return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
            <SectionHeading subtitle="Get in Touch" title="Contact Us" isMain={true} />
            <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-emerald-950 text-white p-10 rounded-3xl relative overflow-hidden">
                    <div className="relative z-10 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Clinic Location</h2>
                            <p className="text-emerald-100 leading-relaxed font-medium">Chandigarh, Punjab, India</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Contact Info</h2>
                            <p className="text-emerald-100 flex items-center gap-2 font-mono"><IconPhone size={16}/> +91-76961-60133</p>
                            <p className="text-emerald-100 flex items-center gap-2 font-mono"><IconMail size={16}/> drthakurshilpa@gmail.com</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Clinic Hours</h2>
                            <p className="text-emerald-100">Mon - Sat: 10:00 AM - 6:00 PM<br/>Sunday: Closed</p>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Instagram"><IconInstagram size={20} /></a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook"><IconFacebook size={20} /></a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="LinkedIn"><IconLinkedIn size={20} /></a>
                        </div>
                        <div className="pt-6 border-t border-white/10">
                          <p className="text-xs text-emerald-300 font-bold uppercase tracking-widest">All queries are directly reviewed by Dr. Shilpa Thakur.</p>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-50" aria-hidden="true"></div>
                </div>
                <div className="bg-white p-10 rounded-3xl shadow-2xl border border-stone-100 relative min-h-[400px] flex flex-col justify-center">
                    {contactSuccess ? (
                        <div className="text-center animate-in fade-in zoom-in-95">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                                <IconCheck size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-emerald-950 mb-3">Message Sent!</h3>
                            <p className="text-stone-600 mb-8 max-w-sm mx-auto leading-relaxed">
                                Thank you! Your query has been successfully routed. Dr. Shilpa Thakur's clinical team will get back to you within 24 hours.
                            </p>
                            <button 
                                onClick={() => setContactSuccess(false)}
                                className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200"
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <>
                            <h3 className="text-2xl font-bold text-emerald-950 mb-6">Send a Message</h3>
                            <form 
                                className="space-y-4 relative" 
                                data-toolname="submit_contact_message"
                                data-tooldescription="Submit a health consultation query or message to Dr. Shilpa Thakur's clinical team."
                                onSubmit={handleContactSubmit}
                            >
                                {contactSubmitting && (
                                    <div className="absolute inset-0 bg-white/85 backdrop-blur-sm z-20 flex flex-col items-center justify-center rounded-xl">
                                        <div className="w-10 h-10 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mb-3"></div>
                                        <p className="text-emerald-800 font-bold text-xs uppercase tracking-widest animate-pulse">Sending Message...</p>
                                    </div>
                                )}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input 
                                        type="text" 
                                        name="firstName"
                                        required 
                                        placeholder="First Name" 
                                        data-toolparamdescription="First name of the inquirer."
                                        className="w-full p-4 bg-stone-50 rounded-xl border border-stone-100 focus:outline-none focus:border-emerald-500 transition-colors" 
                                    />
                                    <input 
                                        type="text" 
                                        name="lastName"
                                        required 
                                        placeholder="Last Name" 
                                        data-toolparamdescription="Last name of the inquirer."
                                        className="w-full p-4 bg-stone-50 rounded-xl border border-stone-100 focus:outline-none focus:border-emerald-500 transition-colors" 
                                    />
                                </div>
                                <input 
                                    type="email" 
                                    name="email"
                                    required 
                                    placeholder="Email Address" 
                                    data-toolparamdescription="Email address of the inquirer."
                                    className="w-full p-4 bg-stone-50 rounded-xl border border-stone-100 focus:outline-none focus:border-emerald-500 transition-colors" 
                                />
                                <select 
                                    name="interest"
                                    required 
                                    data-toolparamdescription="Primary health topic of interest."
                                    className="w-full p-4 bg-stone-50 rounded-xl border border-stone-100 focus:outline-none focus:border-emerald-500 transition-colors text-stone-500"
                                >
                                    <option value="">Select Interest</option>
                                    <option value="Diabetes Reversal">Diabetes Reversal</option>
                                    <option value="Weight Loss">Weight Loss</option>
                                    <option value="PCOD/PCOS">PCOD/PCOS</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                </select>
                                <textarea 
                                    name="message"
                                    required 
                                    placeholder="How can we help you?" 
                                    data-toolparamdescription="Details of the consultation query or message."
                                    rows={4} 
                                    className="w-full p-4 bg-stone-50 rounded-xl border border-stone-100 focus:outline-none focus:border-emerald-500 transition-colors"
                                ></textarea>
                                <button type="submit" className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200">
                                    Send Message
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
            <FAQSection data={CONTACT_FAQS} title="Contact FAQs" />
        </div>
    );

    if (currentPath === 'maintenance') return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-10 text-center">
            <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center text-stone-400 mb-6 animate-pulse">
                <IconSettings size={40} />
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-4">System Maintenance</h2>
            <p className="text-stone-500 max-w-md">We are currently upgrading our systems to serve you better. Please check back shortly.</p>
            <FAQSection data={MAINTENANCE_FAQS} title="Help" />
        </div>
    );

    // Dynamic Routes
    if (currentPath.startsWith('topic/')) {
        const topicId = currentPath.split('/')[1];
        return (
            <>
                <HealthTopicPage 
                    topicId={topicId} 
                    navigate={navigate} 
                    activeLocation={activeLocation} 
                    onPersonalizeLocation={() => setIsLocationPickerOpen(true)} 
                />
                <div className="max-w-7xl mx-auto px-6 pb-20">
                    <MedicalDisclaimerBanner />
                </div>
            </>
        );
    }

    if (currentPath.startsWith('article/')) {
        const id = currentPath.split('/')[1];
        const article = BLOG_ARTICLES.find(a => a.id === id);
        if (!article) return <div className="p-20 text-center">Article not found</div>;

        return (
            <div className="animate-in fade-in duration-1000 bg-white">
                {/* Magazine Style Header */}
                <div className="max-w-7xl mx-auto px-6 pt-16 pb-20">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-8 flex flex-col space-y-8">
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-800">Research Publication</span>
                                <div className="h-px flex-grow bg-stone-100"></div>
                                <span className="text-[10px] font-mono text-stone-500 uppercase">{article.date}</span>
                            </div>
                            
                            <h1 className="text-5xl md:text-8xl font-black text-emerald-950 brand-font leading-[0.85] tracking-tighter">
                                {article.title}
                            </h1>
                            
                            <div className="flex items-center gap-6 pt-4">
                                <div className="w-12 h-12 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-500">
                                    <IconLeaf size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-700">Lead Researcher</p>
                                    <p className="text-lg font-bold text-emerald-950">{article.author}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="lg:col-span-4 block">
                            <div className="p-8 bg-stone-50 rounded-[40px] border border-stone-100 space-y-6">
                                <h2 className="text-xs font-black uppercase tracking-widest text-stone-500">Article Metadata</h2>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center pb-4 border-b border-stone-100">
                                        <span className="text-[10px] font-black uppercase text-emerald-800">Reading Time</span>
                                        <span className="text-xs font-bold text-stone-600">6 min read</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-stone-100">
                                        <span className="text-[10px] font-black uppercase text-emerald-800">Peer Reviewed</span>
                                        <span className="text-xs font-bold text-emerald-800">Verified</span>
                                    </div>
                                    <div className="pt-2">
                                        <span className="text-[10px] font-black uppercase text-stone-500 mb-3 block">Categories</span>
                                        <div className="flex flex-wrap gap-2">
                                            {article.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-white border border-stone-200 text-stone-500 text-[9px] font-black uppercase tracking-widest rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 mb-24">
                    <div className="lg:col-span-8">
                        <div className="rounded-[48px] overflow-hidden shadow-2xl mb-16 relative bg-emerald-950 h-[400px] flex items-center justify-center">
                            <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
                                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:48px_48px]"></div>
                            </div>
                            <div className="relative z-10 w-64 h-64 border border-white/5 rounded-[64px] flex items-center justify-center rotate-6">
                                <div className="w-56 h-56 border border-white/10 rounded-[48px] flex items-center justify-center -rotate-12 bg-white/5">
                                    <IconFlask size={96} className="text-lime-400/50" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="prose prose-xl prose-stone max-w-none px-4 text-stone-600 leading-[1.8]">
                            <div className="first-letter:text-7xl first-letter:font-black first-letter:text-emerald-900 first-letter:mr-3 first-letter:float-left first-letter:leading-[1] whitespace-pre-wrap">
                                {article.content}
                            </div>
                        </div>
                        
                        <div className="mt-20 p-12 bg-emerald-950 rounded-[48px] text-white flex flex-col md:flex-row items-center gap-8 justify-between relative overflow-hidden">
                             <div className="absolute top-0 left-0 w-64 h-64 bg-lime-400 opacity-10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
                             <div className="relative z-10">
                                 <h3 className="text-2xl font-black brand-font mb-2">Apply this Research</h3>
                                 <p className="text-emerald-100/70 text-sm italic font-medium">Join our clinical food-as-medicine program.</p>
                             </div>
                             <button onClick={() => navigate('plans')} className="relative z-10 px-10 py-5 bg-lime-400 text-emerald-950 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-lime-300 transition-all shadow-xl shadow-lime-400/20">
                                 Get Your Protocol
                             </button>
                        </div>
                    </div>
                    
                    <aside className="lg:col-span-4">
                        <div className="sticky top-28 space-y-12">
                            <div className="p-8 bg-stone-50 rounded-[40px] border border-stone-100">
                                <div className="text-xs font-black uppercase tracking-[0.3em] text-emerald-800 mb-8 pb-4 border-b border-emerald-100">Share Insights</div>
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="flex items-center justify-center gap-2 p-4 bg-white border border-stone-200 rounded-2xl hover:bg-emerald-50 hover:text-emerald-600 transition-all text-[10px] font-black uppercase">
                                        <IconFacebook size={16} /> Facebook
                                    </button>
                                    <button className="flex items-center justify-center gap-2 p-4 bg-white border border-stone-200 rounded-2xl hover:bg-emerald-50 hover:text-emerald-600 transition-all text-[10px] font-black uppercase">
                                        <IconLinkedIn size={16} /> LinkedIn
                                    </button>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-stone-400 pl-4">Latest Research</h2>
                                <div className="space-y-4">
                                    {BLOG_ARTICLES.filter(a => a.id !== id).slice(0, 3).map(other => (
                                        <div key={other.id} onClick={() => navigate(`article/${other.id}`)} className="group cursor-pointer p-4 hover:bg-stone-50 rounded-3xl transition-all border border-transparent hover:border-stone-100">
                                             <p className="text-xs font-black text-emerald-700 uppercase tracking-[0.1em] mb-2">{other.date}</p>
                                             <h3 className="font-bold text-emerald-950 leading-tight group-hover:text-emerald-700 transition-colors">{other.title}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        );
    }

    if (currentPath.startsWith('recipe/')) {
        const id = currentPath.split('/')[1];
        const recipe = RECIPES.find(r => r.id === id);
        if (!recipe) return <div className="p-20 text-center font-black text-emerald-950 brand-font text-4xl">Diagnosis Data Not Found</div>;

        return (
            <div className="animate-in fade-in duration-700 min-h-screen bg-stone-50/30 pb-24 pt-24">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
                    
                    {/* Protocol Detail Content (8/12) */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Scientific Blueprint Hero */}
                        <div className="bg-white rounded-[48px] p-10 md:p-16 border border-stone-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full opacity-50" aria-hidden="true"></div>
                            
                            <div className="space-y-8 relative z-10">
                                <div className="flex flex-wrap gap-4 items-center">
                                    <ClinicalCategorySign type="protocol" />
                                    <div className="flex gap-2">
                                        {recipe.tags.map(tag => (
                                            <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                
                                <h1 className="text-4xl md:text-7xl font-black text-emerald-950 brand-font leading-[0.85] tracking-tighter">
                                    {recipe.title}
                                </h1>
                                
                                <p className="text-xl text-stone-500 leading-relaxed font-medium italic border-l-4 border-lime-400 pl-8 max-w-2xl">
                                    {recipe.description}
                                </p>
                                
                                {/* AEO Direct Answer Snippet */}
                                <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100/50 space-y-2 mt-4">
                                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block">Direct Answer Summary</span>
                                  <dfn className="not-italic text-sm text-stone-600 block leading-relaxed font-semibold">
                                    {getAeoSnippet(recipe.aeoDirectSnippet, recipe.healingDescription)}
                                  </dfn>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6 pt-10 border-t border-stone-50">
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest">Metabolic Load</span>
                                        <p className="text-xl font-black text-emerald-900 brand-font">{recipe.calories} KCAL</p>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest">Protocol Timing</span>
                                        <p className="text-xl font-black text-emerald-900 brand-font">{recipe.prepTime}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest">Primary Objective</span>
                                        <p className="text-xs font-black text-emerald-700 uppercase tracking-tight leading-tight pt-1">{recipe.primaryBenefit}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ingredients & Healing sections */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <section className="bg-white rounded-[40px] p-10 border border-stone-100 shadow-sm space-y-8 h-fit">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-black text-emerald-950 brand-font uppercase">Chemical Components</h3>
                                    <ClinicalCategorySign type="nutrition" />
                                </div>
                                <div className="space-y-3">
                                    {recipe.ingredients.map((ing, i) => (
                                        <div key={i} className="flex justify-between items-center py-3 border-b border-stone-50 last:border-0">
                                            <span className="font-bold text-stone-700 text-sm">{ing.name}</span>
                                            <span className="text-xs font-mono font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">{ing.detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="bg-emerald-950 rounded-[40px] p-10 text-white relative overflow-hidden flex flex-col h-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/20 rounded-full blur-3xl opacity-50" aria-hidden="true"></div>
                                <div className="relative z-10 space-y-8 flex-grow">
                                    <h3 className="text-xl font-black brand-font uppercase text-lime-400">Metabolic Mechanism</h3>
                                    <p className="text-emerald-100/70 text-lg leading-relaxed italic">
                                        {recipe.healingDescription}
                                    </p>
                                    
                                    <div className="space-y-6 pt-6 border-t border-white/10">
                                        {recipe.fullHealingContent.split('\n\n').map((chunk, idx) => {
                                            const [title, ...rest] = chunk.split(':');
                                            return (
                                                <div key={idx} className="space-y-1">
                                                    <div className="text-[10px] font-black uppercase tracking-widest text-lime-400">{title}</div>
                                                    <p className="text-xs text-white/70 leading-relaxed">{rest.join(':').trim()}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Optimizing Protocol (FAQ for this recipe) */}
                        {RECIPE_SPECIFIC_FAQS[id] && (
                            <section className="bg-white rounded-[40px] p-10 border border-stone-100 shadow-sm space-y-8">
                                <div className="flex items-center justify-between border-b border-stone-50 pb-6">
                                    <h3 className="text-xl font-black text-emerald-950 brand-font uppercase">Optimization Protocol</h3>
                                    <ClinicalCategorySign type="medical" />
                                </div>
                                <div className="grid gap-4">
                                    {RECIPE_SPECIFIC_FAQS[id].map((faq, i) => (
                                        <Accordion key={i} title={faq.question} content={faq.answer} category="Recipe Specific" />
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar / Protocol Stats (4/12) */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Clinical Validation Stamp */}
                        <div className="bg-white rounded-[40px] p-8 border border-stone-100 shadow-xl overflow-hidden relative">
                             <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12" aria-hidden="true">
                                 <IconFlask size={160} />
                             </div>
                             
                             <div className="relative z-10 space-y-8">
                                 <div className="space-y-2">
                                     <span className="text-[9px] font-black text-emerald-800 uppercase tracking-[0.3em]">Validation Status</span>
                                     <h3 className="text-2xl font-black text-emerald-950 brand-font tracking-tight">Active Protocol</h3>
                                 </div>

                                 <div className="flex items-center gap-4 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                                      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                          <IconCheck size={20} />
                                      </div>
                                      <div>
                                           <p className="text-[10px] font-black text-stone-600 uppercase tracking-widest">Protocol Architect</p>
                                           <p className="text-sm font-black text-emerald-950 uppercase tracking-tight leading-tight">{recipe.preparedBy}</p>
                                      </div>
                                 </div>

                                 <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 space-y-4">
                                     <div className="text-xs font-black uppercase tracking-widest text-emerald-800 border-b border-stone-200 pb-2">Clinical Parameters</div>
                                     <div className="space-y-3">
                                         <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                                             <span className="text-stone-500">Glycemic Load</span>
                                             <span className="text-emerald-700">Low</span>
                                         </div>
                                         <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                                             <span className="text-stone-500">Inflammation Index</span>
                                             <span className="text-emerald-700">Anti-Inflammatory</span>
                                         </div>
                                         <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                                             <span className="text-stone-400">Mineral Density</span>
                                             <span className="text-emerald-700">High</span>
                                         </div>
                                     </div>
                                 </div>

                                    <a 
                                      href="/plans" 
                                      onClick={(e) => { e.preventDefault(); navigate('plans'); }} 
                                      className="w-full bg-emerald-900 text-white font-bold uppercase tracking-widest text-[10px] py-4 rounded-xl hover:bg-emerald-800 transition-all flex items-center justify-center gap-2 text-center block"
                                  >
                                      Clinical Enrollment <IconArrowRight size={14} />
                                  </a>
                             </div>
                        </div>

                        {/* Complementary Protocols (Related Recipes) */}
                        <div className="space-y-6">
                            <div className="text-xs font-black uppercase tracking-[0.3em] text-stone-600 pl-4 border-l-2 border-lime-400">Complementary Protocols</div>
                            <div className="space-y-4">
                                {RECIPES.filter(r => r.id !== id).slice(0, 3).map(related => (
                                    <a 
                                        key={related.id} 
                                        href={`/recipe/${related.id}`}
                                        onClick={(e) => { e.preventDefault(); navigate(`recipe/${related.id}`); }}
                                        className="bg-white p-6 rounded-3xl border border-stone-100 hover:border-emerald-200 transition-all cursor-pointer group flex items-center gap-4 block"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-stone-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                                            <IconUtensils size={18} />
                                        </div>
                                        <div>
                                            <h5 className="text-[11px] font-black text-emerald-950 uppercase group-hover:text-emerald-700 transition-colors leading-tight line-clamp-1">{related.title}</h5>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-[9px] font-bold text-stone-600 uppercase tracking-widest">{related.category}</span>
                                                <div className="w-1 h-1 rounded-full bg-stone-200"></div>
                                                <span className="text-[9px] font-bold text-emerald-800 tracking-widest uppercase">{related.calories} KCAL</span>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        );
    }

    if (currentPath.startsWith('herb/')) {
        const id = currentPath.split('/')[1];
        const herb = herbsData.find(h => h.id === id) || aiHerbs[id];
        if (!herb) {
          if (aiLoading) {
            return (
              <div className="p-24 text-center space-y-4 min-h-[500px] flex flex-col justify-center items-center">
                <div className="w-12 h-12 border-4 border-emerald-250 border-t-emerald-700 rounded-full animate-spin"></div>
                <div className="text-emerald-800 font-black uppercase tracking-widest text-[11px] animate-pulse">
                  Querying Global Clinical Database for "{id.replace(/-/g, ' ')}"...
                </div>
              </div>
            );
          }
          if (aiError) {
            return (
              <div className="p-24 text-center max-w-xl mx-auto space-y-6 min-h-[500px] flex flex-col justify-center items-center">
                <div className="text-red-500 text-6xl">⚠️</div>
                <div>
                  <h3 className="text-red-900 font-black uppercase tracking-widest text-sm">Clinical Retrieval Fallback Error</h3>
                  <p className="text-sm text-stone-500 leading-relaxed mt-2">{aiError}</p>
                </div>
                <a href="/sitemap" onClick={(e) => { e.preventDefault(); navigate('sitemap'); }} className="inline-block bg-emerald-600 text-white font-black uppercase tracking-widest text-[10px] px-6 py-3.5 rounded-2xl hover:bg-emerald-700 transition-colors shadow-md">
                  Back to Sitemap
                </a>
              </div>
            );
          }
          return <div className="p-20 text-center font-black text-emerald-950 brand-font text-4xl">Herb Profile Not Found</div>;
        }
        return <ClinicalHerbDetail herb={herb} navigate={navigate} herbsData={herbsData} conditionsData={conditionsData} />;
    }

    if (currentPath.startsWith('condition/')) {
        const id = currentPath.split('/')[1];
        const cond = conditionsData.find(c => c.id === id) || aiConditions[id];
        if (!cond) {
          if (aiLoading) {
            return (
              <div className="p-24 text-center space-y-4 min-h-[500px] flex flex-col justify-center items-center">
                <div className="w-12 h-12 border-4 border-emerald-250 border-t-emerald-700 rounded-full animate-spin"></div>
                <div className="text-emerald-800 font-black uppercase tracking-widest text-[11px] animate-pulse">
                  Analyzing Reversal Protocol for "{id.replace(/-/g, ' ')}"...
                </div>
              </div>
            );
          }
          if (aiError) {
            return (
              <div className="p-24 text-center max-w-xl mx-auto space-y-6 min-h-[500px] flex flex-col justify-center items-center">
                <div className="text-red-500 text-6xl">⚠️</div>
                <div>
                  <h3 className="text-red-900 font-black uppercase tracking-widest text-sm">Clinical Retrieval Fallback Error</h3>
                  <p className="text-sm text-stone-500 leading-relaxed mt-2">{aiError}</p>
                </div>
                <a href="/sitemap" onClick={(e) => { e.preventDefault(); navigate('sitemap'); }} className="inline-block bg-emerald-600 text-white font-black uppercase tracking-widest text-[10px] px-6 py-3.5 rounded-2xl hover:bg-emerald-700 transition-colors shadow-md">
                  Back to Sitemap
                </a>
              </div>
            );
          }
          return <div className="p-20 text-center font-black text-emerald-950 brand-font text-4xl">Condition Protocol Not Found</div>;
        }
        return <ClinicalConditionDetail cond={cond} navigate={navigate} herbsData={herbsData} />;
    }

    if (currentPath.startsWith('team')) {
        if (currentPath.includes('/')) {
            const id = currentPath.split('/')[1];
            const member = TEAM.find(m => m.id === id);
            return member ? <TeamMemberProfile member={member} navigate={navigate} /> : <div>Member not found</div>;
        }
        return (
            <div className="pt-12 pb-20 max-w-7xl mx-auto">
                <SectionHeading subtitle="Our Experts" title="Clinical Team" isMain={true} />
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
                    {TEAM.map(m => (
                        <div key={m.id} onClick={() => navigate(`team/${m.id}`)} className="cursor-pointer card-clinical p-6 group">
                            <div className="aspect-square rounded-[32px] overflow-hidden mb-6 relative transition-all duration-700 shadow-inner">
                                <img 
                                    src={m.image} 
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" 
                                    alt={`Portrait of ${m.name}`}
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="space-y-1 bg-emerald-50/50 -mx-6 -mb-6 p-8 mt-4 rounded-b-[32px] group-hover:bg-emerald-100/50 transition-colors border-t border-emerald-100/20">
                                <h2 className="text-xl font-black text-emerald-950 brand-font group-hover:text-emerald-700 transition-colors uppercase tracking-tight">{m.name}</h2>
                                <p className="text-sm font-black text-emerald-800 uppercase tracking-widest">{m.role}</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-stone-50 flex items-center text-sm font-bold text-stone-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                View Profile <IconArrowRight size={14} className="ml-2" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-20 px-6">
                    <FAQSection data={TEAM_FAQS} title="Team FAQs" />
                </div>
            </div>
        );
    }
    if (currentPath === 'tools') return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-24">
            <div>
                <SectionHeading subtitle="Interactive Diagnostics" title="Circadian & Metabolic Hub" isMain={true} />
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
                    <DynamicCircadianClock />
                    <HrvTracker />
                    <BiologicalAgeEstimator />
                    <CircadianPlate activeLocation={activeLocation} />
                    <CircadianAligner />
                    <DrugNutrientSynergyChecker />
                    <CircadianSyncQuiz />
                </div>
            </div>

            <div>
                <SectionHeading subtitle="Advanced Science" title="Metabolic Auditing & Nutrigenomics" />
                <div className="grid grid-cols-1 gap-8 mt-12">
                    <DietaryAuditor activeLocation={activeLocation} />
                    <GenomicMatcher />
                    <ResearchQueryAgent />
                </div>
            </div>

            <div>
                <SectionHeading subtitle="Resources" title="Standard Health Calculators" />
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
                    <BmiCalculator />
                    <CalorieCalculator />
                    <WaterCalculator />
                    <ProteinCalculator />
                    <PdfBuilder />
                </div>
            </div>

            <div className="mt-16">
                <SectionHeading subtitle="Planning" title="Therapeutic Circadian Meal Planner" />
                <div className="mt-12">
                    <SmartMealGenerator activeLocation={activeLocation} />
                </div>
            </div>

            <div className="mt-16">
                <SectionHeading subtitle="Analysis" title="SEO & System Metrics" />
                <div className="grid grid-cols-1 gap-8 mt-12">
                    <SeoAnalyzer />
                    <SystemMonitor />
                </div>
            </div>

            <div className="pt-12 border-t border-stone-200/60">
                <FAQSection data={TOOLS_FAQS} title="Tools Usage FAQs" />
            </div>
        </div>
    );
    if (currentPath === 'connect') return <ConnectPage />;
    if (currentPath === 'privacy' || currentPath === 'terms' || currentPath === 'editorial-policy' || currentPath === 'evidence-approach') {
        const titleMap = {
            privacy: 'Privacy Policy',
            terms: 'Terms of Use',
            'editorial-policy': 'Editorial Policy',
            'evidence-approach': 'Scientific Evidence Approach'
        };
        const title = titleMap[currentPath as keyof typeof titleMap] || 'Legal Information';
        const content = LEGAL_CONTENT[currentPath as keyof typeof LEGAL_CONTENT];
        return (
            <div className="p-6 md:p-10 max-w-4xl mx-auto py-20">
                <SectionHeading subtitle="Legal" title={title} isMain={true} />
                <div className="bg-white p-12 rounded-[40px] shadow-sm border border-stone-100 prose prose-emerald max-w-none">
                    {content ? (
                        <div className="space-y-8">
                            {content.map((section: any, idx: number) => (
                                <div key={idx}>
                                    <h2 className="text-xl font-bold text-emerald-950 mb-4">{section.heading}</h2>
                                    <p className="text-stone-600 leading-relaxed whitespace-pre-line">{section.text}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-stone-500 font-bold uppercase tracking-widest text-xs">Legal documents are being updated. Please contact support.</p>
                    )}
                </div>
            </div>
        );
    }
    if (currentPath === 'clinics' || currentPath.startsWith('clinic/')) {
        return <LocalDirectory navigate={navigate} currentPath={currentPath} />;
    }
    if (currentPath === 'sitemap') return <SitemapPage navigate={navigate} data={getEnhancedSiteStructure(intlCountries)} />;
    
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-10 text-center">
            <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center text-stone-500 mb-6">
                <IconSearch size={40} />
            </div>
            <h2 className="text-3xl font-bold text-emerald-950 mb-4 brand-font">Page Not Found</h2>
            <p className="text-stone-500 max-w-md mb-8">The page you are looking for doesn&apos;t exist or has been moved.</p>
            <button onClick={() => navigate('home')} className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200">
                Back to Home
            </button>
        </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans text-stone-800 selection:bg-emerald-200 selection:text-emerald-950 flex flex-col">
       <OrganicBlobs />
       
       <AnimatePresence>
         {reportNotification && (
           <m.div 
             initial={{ opacity: 0, y: -50, scale: 0.9 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             exit={{ opacity: 0, y: -20, scale: 0.95 }}
             className="fixed top-6 right-6 z-[999] bg-gradient-to-br from-emerald-950 to-emerald-900 border border-emerald-500/30 text-white rounded-3xl p-5 shadow-2xl max-w-sm flex gap-4 items-start"
           >
             <div className="p-2 bg-emerald-800 text-emerald-300 rounded-xl mt-0.5">
               <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
             </div>
             <div className="flex-1">
               <h5 className="text-[10px] font-black uppercase tracking-widest text-lime-400 mb-1">Transmission Automated</h5>
               <p className="text-xs text-emerald-100 font-medium leading-relaxed">{reportNotification}</p>
             </div>
             <button onClick={() => setReportNotification(null)} className="text-emerald-400 hover:text-white transition-colors p-1">
               <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
             </button>
           </m.div>
         )}
       </AnimatePresence>

        <Header 
          navigate={navigate} 
          toggleMenu={() => setMobileMenuOpen(true)} 
          isMenuOpen={mobileMenuOpen} 
          currentPath={currentPath} 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          activeLocation={activeLocation}
          onLocationClick={() => setIsLocationPickerOpen(true)}
        />

        <LocationPickerModal
          isOpen={isLocationPickerOpen}
          onClose={() => setIsLocationPickerOpen(false)}
          activeLocation={activeLocation}
          onSelectLocation={(loc) => {
            setActiveLocation(loc);
            safeSetLocalStorage('nutrition_selected_location', JSON.stringify(loc));
          }}
          navigate={navigate}
          locationsData={locationsData}
          intlCountries={intlCountries}
        />

       {mobileMenuOpen && (
           <div className="fixed inset-0 z-[60] bg-white flex flex-col p-6 animate-in slide-in-from-right">
               <div className="flex justify-between items-center mb-12">
                   <Logo />
                   <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-stone-100 rounded-full"><IconX /></button>
               </div>
               <div className="flex-1 overflow-y-auto space-y-6">
                   {NAV_CONFIG.map(item => (
                       <div key={item.id}>
                           {item.children ? (
                               <div className="space-y-4">
                                   <div className="text-lg font-black text-emerald-950 border-b border-stone-100 pb-2">{item.label}</div>
                                   <div className="pl-4 space-y-4 border-l-2 border-stone-100">
                                       {item.children.map(child => (
                                           <button key={child.id} onClick={() => navigate(child.id)} className="block text-stone-600 font-bold uppercase tracking-widest text-sm">
                                               {child.label}
                                           </button>
                                       ))}
                                   </div>
                               </div>
                           ) : (
                               <button onClick={() => navigate(item.id)} className="text-lg font-black text-emerald-950 block border-b border-stone-100 pb-2 w-full text-left">
                                   {item.label}
                               </button>
                           )}
                       </div>
                   ))}
               </div>
           </div>
       )}

        <main className="flex-grow pt-20 md:pt-[112px]">
            {currentPath !== 'home' && !currentPath.startsWith('plans') && (
                <div className="bg-white border-b border-stone-100 py-3 relative z-30">
                    <div className="max-w-7xl mx-auto px-6 flex items-center text-[10px] font-bold uppercase tracking-widest text-stone-400">
                        {getBreadcrumbs(currentPath, BLOG_ARTICLES, RECIPES, topicsData, locationsData, intlCountries).map((crumb, i, arr) => (
                            <React.Fragment key={i}>
                                <button 
                                  onClick={() => navigate(crumb.path)} 
                                  className={`hover:text-emerald-600 transition-colors ${i === arr.length - 1 ? 'text-emerald-700 font-bold' : ''}`}
                                >
                                    {crumb.label}
                                </button>
                                {i < arr.length - 1 && <span className="mx-2 text-stone-300">/</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}
            <React.Suspense fallback={
                <div className="min-h-[400px] flex items-center justify-center bg-stone-50/50">
                    <div className="text-stone-500 uppercase tracking-widest text-[10px] font-black animate-pulse flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></div>
                        Calibrating Clinical Interface...
                    </div>
                </div>
            }>
                {renderContent()}
            </React.Suspense>
       </main>
       <Footer setPath={navigate} onAdminClick={() => setIsAdminOpen(true)} />
       <AIHelper active={true} language="en" />
       <SocialShare />
       {features.enableAiAssistant && (
            <React.Suspense fallback={null}>
                <HealthAssistant isOpen={isAssistantOpen} setIsOpen={setIsAssistantOpen} initialQuery={assistantQuery} />
            </React.Suspense>
        )}
       <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} features={features} toggleFeature={toggleFeature} onLogin={(success: any) => console.log(success)} intlCountries={intlCountries} />
       <ParticleConstellation />
       <React.Suspense fallback={null}>
         <CookieConsent />
       </React.Suspense>

       {/* Offline Mode Banner */}
       {isOffline && (
         <div className="fixed bottom-6 left-6 z-50 bg-stone-900 text-white rounded-3xl shadow-2xl px-6 py-4 flex items-center gap-4 border border-stone-850 animate-bounce">
           <span className="flex h-3 w-3 relative">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
           </span>
           <div className="flex flex-col">
             <span className="font-black uppercase tracking-widest text-[9px] text-stone-300">Offline Mode Active</span>
             <span className="text-[10px] text-stone-400 font-semibold leading-none mt-1">Calculators and cached content remain operational.</span>
           </div>
         </div>
       )}
    </div>
  );
};

export const App = () => {
  return (
    <ViewerTrackerProvider>
      <LazyMotion features={domAnimation}>
        <AppContent />
      </LazyMotion>
    </ViewerTrackerProvider>
  );
};

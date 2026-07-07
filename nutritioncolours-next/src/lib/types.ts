
export enum CategoryType {
  METABOLIC = 'metabolic',
  CARDIO = 'cardiovascular',
  DIGESTION = 'digestion',
  WEIGHT = 'weight',
  JOINTS = 'musculoskeletal',
  IMMUNITY = 'immunity',
  COGNITIVE = 'cognitive',
  APPEARANCE = 'appearance',
  WOMENS = 'womens',
  MENS = 'mens',
  KIDS = 'kids',
  RESPIRATORY = 'respiratory',
  DETOX = 'detox',
  VEGAN = 'vegan',
  NEWS = 'news',
  EVENTS = 'events'
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string; // Short summary
  fullBio: string; // Expanded bio
  details: string; // Education/Credentials
  image: string;
  specialties: string[];
  location: string;
  asl: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
    quora?: string;
    youtube?: string;
  };
}

export interface TopicSection {
  heading: string;
  body: string;
  listTitle?: string;
  listItems?: string[];
  proTip?: string;
  intentComment?: string;
}

export interface Topic {
  id: string;
  title: string;
  shortDesc: string;
  problem: string;
  solution: string;
  naturalApproach: string[];
  image: string;
  category: CategoryType;
  pageTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  scientificName?: string;
  cause?: string;
  hiddenFact?: string;
  whenAge?: string;
  herbs?: string;
  lifestyle?: string;
  fullContent?: string;
  clinicalReview?: {
    reviewedBy: string;
    practitionerId: string;
    lastUpdated: string;
    signature?: string;
  };
  caseStudy?: {
    title: string;
    finding: string;
    narrative: string;
    metric?: { label: string; value: string };
  };
  faqs?: FAQ[];
  aeoDirectSnippet?: string;
  seoKeywords?: string[];
  aeoQuickAnswer?: string;
  geoEntities?: string;
  growingConditions?: {
    sun: string;
    water: string;
    soil: string;
    harvest: string;
  };
  culinaryUses?: string;
  medicinalUses?: string;
  faqTargets?: string[];
  plantFamily?: string;
  origin?: string;
  alsoKnownAs?: string[];
  comparisonTable?: {
    headers: string[];
    rows: string[][];
  };
  nutritionData?: {
    servingSize: string;
    nutrients: { name: string; value: string }[];
    source: string;
  };
  safetyDosage?: {
    standardDosage: string;
    whoShouldAvoid: string[];
    drugInteractions: string[];
  };
  howToHarvest?: string[];
  ayurvedicProfile?: {
    rasa: string[];
    virya: string;
    doshaEffect: string;
    karma: string[];
  };
  tadkaInstructions?: string[];
  aiSummaryBlock?: {
    tldr: string;
    tags: string[];
  };
  expandedSections?: TopicSection[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  condition: string;
  text: string;
  image: string;
  date: string;
}

export interface IngredientDetail {
  name: string;
  detail: string;
}

export interface Recipe {
  id: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
  prepTime: string;
  calories: string;
  description: string; // Short excerpt
  healingDescription: string; // Full text
  ingredients: IngredientDetail[];
  primaryBenefit: string;
  fullHealingContent?: string;
  preparedBy?: string;
  pageTitle?: string;
  metaDescription?: string;
  primaryKeyword?: string;
  aeoDirectSnippet?: string;
  seoKeywords?: string[];
  aeoQuickAnswer?: string;
  geoEntities?: string;
  growingConditions?: {
    sun: string;
    water: string;
    soil: string;
    harvest: string;
  };
  culinaryUses?: string;
  medicinalUses?: string;
  faqTargets?: string[];
  plantFamily?: string;
  origin?: string;
  alsoKnownAs?: string[];
  comparisonTable?: {
    headers: string[];
    rows: string[][];
  };
  nutritionData?: {
    servingSize: string;
    nutrients: { name: string; value: string }[];
    source: string;
  };
  safetyDosage?: {
    standardDosage: string;
    whoShouldAvoid: string[];
    drugInteractions: string[];
  };
  howToHarvest?: string[];
  ayurvedicProfile?: {
    rasa: string[];
    virya: string;
    doshaEffect: string;
    karma: string[];
  };
  tadkaInstructions?: string[];
}

export interface BlogArticle {
  id: string;
  title: string;
  category: CategoryType;
  type: 'blog' | 'news';
  status: 'published' | 'draft';
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
  date: string;
  author: string;
  pageTitle?: string;
  metaDescription?: string;
  primaryKeyword?: string;
}

export interface PlanTier {
  label: string;
  price: string;
}

export interface Plan {
  id: string;
  name: string;
  idealFor: string;
  description: string;
  features: string[];
  tiers: PlanTier[];
  image?: string;
  icon?: string;
  color?: string;
}

export interface Language {
  code: string;
  name: string;
  native: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

// --- New Sitemap Types ---
export interface SitemapNode {
  id: string;
  path: string;
  label: string;
  type: 'page' | 'category' | 'resource';
  status: 'optimized' | 'pending_seo' | 'pending_content';
  meta?: {
    title: string;
    description: string;
    keywords: string[];
  };
  content?: {
    features: string[];
    benefits: string[];
    faqs?: FAQ[];
  };
  children?: SitemapNode[];
}

// --- System Monitor Types ---
export interface HealthIssue {
  id: string;
  severity: 'critical' | 'warning' | 'info';
  category: 'seo' | 'performance' | 'content' | 'security' | 'accessibility';
  title: string;
  description: string;
  action?: string;
  autoFixAvailable?: boolean;
}

export interface SystemReport {
  score: number;
  timestamp: number;
  issues: HealthIssue[];
  metrics: {
    pagesScanned: number;
    brokenLinks: number;
    missingMeta: number;
    loadTime: number;
  };
}

// --- WebMCP (Web Model Context Protocol) Types ---
export interface WebMcpTool {
  name: string;
  description: string;
  inputSchema: {
    type: 'object';
    properties: Record<string, {
      type: string;
      description?: string;
      enum?: any[];
      items?: any;
    }>;
    required?: string[];
  };
  execute: (input: any) => any | Promise<any>;
  annotations?: {
    readOnlyHint?: boolean;
  };
}

export interface ModelContext {
  registerTool: (tool: WebMcpTool, options?: { signal?: AbortSignal }) => void;
}

export interface HerbalEntity {
  id: string;
  name: string;
  scientificName: string;
  category: 'herb' | 'spice' | 'food';
  activeCompounds: string[];
  primaryMechanism: string;
  dosage: { range: string; instruction: string };
  contraindications: string[];
  synergies: string[];
  faqs?: FAQ[];
  citations: { text: string; url: string }[];
  image: string;
  pageTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  clinicalReview?: {
    reviewedBy: string;
    practitionerId: string;
    lastUpdated: string;
    signature?: string;
  };
  aeoDirectSnippet?: string;
  seoKeywords?: string[];
  aeoQuickAnswer?: string;
  geoEntities?: string;
  growingConditions?: {
    sun: string;
    water: string;
    soil: string;
    harvest: string;
  };
  culinaryUses?: string;
  medicinalUses?: string;
  faqTargets?: string[];
  plantFamily?: string;
  origin?: string;
  alsoKnownAs?: string[];
  comparisonTable?: {
    headers: string[];
    rows: string[][];
  };
  nutritionData?: {
    servingSize: string;
    nutrients: { name: string; value: string }[];
    source: string;
  };
  safetyDosage?: {
    standardDosage: string;
    whoShouldAvoid: string[];
    drugInteractions: string[];
  };
  howToHarvest?: string[];
  ayurvedicProfile?: {
    rasa: string[];
    virya: string;
    doshaEffect: string;
    karma: string[];
  };
  tadkaInstructions?: string[];
}

export interface MedicalConditionEntity {
  id: string;
  name: string;
  rootCause: string;
  pathophysiology?: string;
  symptoms?: string[];
  swapGuidelines?: {
    eliminate: string[];
    incorporate: string[];
    timingRule?: string;
  };
  biomarkers: string[];
  therapeuticSpices: string[];
  prohibitedFoods: string[];
  circadianAdvice: string;
  faqs?: FAQ[];
  citations: { text: string; url: string }[];
  image: string;
  pageTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  clinicalReview?: {
    reviewedBy: string;
    practitionerId: string;
    lastUpdated: string;
    signature?: string;
  };
  aeoDirectSnippet?: string;
  seoKeywords?: string[];
  aeoQuickAnswer?: string;
  geoEntities?: string;
  growingConditions?: {
    sun: string;
    water: string;
    soil: string;
    harvest: string;
  };
  culinaryUses?: string;
  medicinalUses?: string;
  faqTargets?: string[];
  plantFamily?: string;
  origin?: string;
  alsoKnownAs?: string[];
  comparisonTable?: {
    headers: string[];
    rows: string[][];
  };
  nutritionData?: {
    servingSize: string;
    nutrients: { name: string; value: string }[];
    source: string;
  };
  safetyDosage?: {
    standardDosage: string;
    whoShouldAvoid: string[];
    drugInteractions: string[];
  };
  howToHarvest?: string[];
  ayurvedicProfile?: {
    rasa: string[];
    virya: string;
    doshaEffect: string;
    karma: string[];
  };
  tadkaInstructions?: string[];
  meshCode?: string;
  snomedCode?: string;
  icd10Code?: string;
}

// --- Genomics & Polymorphisms ---
export interface GenomicVariantEntity {
  id: string;
  geneName: string;
  rsid: string;
  genotype: string;
  clinicalImpact: string;
  dietaryGuideline: string;
  keyNutrients: string[];
  avoidFoods: string[];
  targetBiomarkers: string[];
  citations: { text: string; url: string }[];
}

// --- Drug-Herb-Nutrient Interactions ---
export interface DrugInteractionEntity {
  id: string;
  drugName: string;
  drugClass: string;
  depletedNutrients: string[];
  contraindicatedHerbs: string[];
  synergisticHerbs: string[];
  monitoringAdvice: string;
  citations: { text: string; url: string }[];
}

// --- Viewer Journey Tracking & Analytics ---
export interface UserInteraction {
  timestamp: number;
  type: 'pageview' | 'click' | 'search' | 'calculator' | 'error' | 'disclosure';
  path: string;
  description: string;
}

export interface ViewerSession {
  sessionId: string;
  startTime: number;
  lastActive: number;
  deviceProfile: {
    userAgent: string;
    screenWidth: number;
    screenHeight: number;
    platform: string;
  };
  interactions: UserInteraction[];
}

export interface DailyAnalyticsReport {
  timestamp: number;
  totalSessions: number;
  pageViews: Record<string, number>;
  clickCounts: Record<string, number>;
  searchKeywords: { keyword: string; count: number }[];
  calculatorUsage: Record<string, number>;
  disclosureReach: Record<string, number>;
  errorLogs: { message: string; timestamp: number }[];
  systemHealthScore: number;
  emailStatus: 'sent' | 'pending' | 'failed';
  recipient: string;
  htmlReportSnippet?: string; // HTML template generated
}

declare global {
  interface Navigator {
    modelContext?: ModelContext;
  }
}


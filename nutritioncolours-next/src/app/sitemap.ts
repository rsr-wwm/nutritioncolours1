import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
import { HERBS_SPICES_DATA, MEDICAL_CONDITIONS_DATA, GENOMIC_VARIANTS_DATA, DRUG_INTERACTIONS_DATA } from '@/lib/clinical_databases';
import { BLOG_ARTICLES, TEAM, VEGAN_SUB_TOPICS } from '@/lib/constants';
import { TOPICS } from '@/lib/topics';
import { RECIPES } from '@/lib/recipes_database';
import { LOCATIONS_DATA } from '@/lib/locationsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nutritioncolours.com';

  // Static pages
  const staticPages = [
    '', '/about', '/team', '/testimonials', '/history', '/tools',
    '/recipes', '/connect', '/clinics', '/contact', '/sitemap',
    '/knowledge/health-topics', '/knowledge/herbs-spices', '/knowledge/health-conditions',
    '/knowledge/nutrigenomics', '/knowledge/drug-interactions', '/knowledge/blogs', '/knowledge/vegan',
    '/plans', '/plans/metabolic-mastery', '/plans/therapeutic-reversal', '/plans/cellular-resurrection',
    '/legal/terms', '/legal/privacy', '/legal/editorial-policy',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1.0 : 0.7,
  }));

  // Herb pages
  const herbPages = HERBS_SPICES_DATA.map(herb => ({
    url: `${baseUrl}/herb/${herb.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Condition pages
  const conditionPages = MEDICAL_CONDITIONS_DATA.map(cond => ({
    url: `${baseUrl}/condition/${cond.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Genomics pages
  const genomicsPages = GENOMIC_VARIANTS_DATA.map(v => ({
    url: `${baseUrl}/genomics/${v.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Interaction pages
  const interactionPages = DRUG_INTERACTIONS_DATA.map(i => ({
    url: `${baseUrl}/interactions/${i.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Topic pages
  const topicPages = TOPICS.map(t => ({
    url: `${baseUrl}/topic/${t.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Article pages
  const articlePages = BLOG_ARTICLES.map(a => ({
    url: `${baseUrl}/article/${a.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Recipe pages
  const recipePages = RECIPES.map(r => ({
    url: `${baseUrl}/recipe/${r.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Plan pages (static routes)
  const planPages = ['metabolic-mastery', 'therapeutic-reversal', 'cellular-resurrection'].map(slug => ({
    url: `${baseUrl}/plans/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Team pages
  const teamPages = TEAM.map(m => ({
    url: `${baseUrl}/team/${m.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Vegan subtopic pages
  const veganPages = VEGAN_SUB_TOPICS.map(s => ({
    url: `${baseUrl}/vegan/${s.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Clinic pages (unique cities)
  const clinicPages = [...new Set(LOCATIONS_DATA.map(l => l.city.toLowerCase().replace(/\s+/g, '-')))].map(city => ({
    url: `${baseUrl}/clinic/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...herbPages,
    ...conditionPages,
    ...genomicsPages,
    ...interactionPages,
    ...topicPages,
    ...articlePages,
    ...recipePages,
    ...planPages,
    ...teamPages,
    ...veganPages,
    ...clinicPages,
  ];
}

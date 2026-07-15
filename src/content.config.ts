import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const knowledgeCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/knowledge" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    subCategory: z.string().optional(),
    seoKeywords: z.array(z.string()).optional(),
    author: z.string().default('NutritionColours Editorial Team'),
    reviewedBy: z.string().optional(),
    lastUpdated: z.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'knowledge': knowledgeCollection,
};

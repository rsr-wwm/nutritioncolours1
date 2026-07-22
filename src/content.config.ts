import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const knowledgeCollection = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/knowledge",
    // CRITICAL: force the entry id to be the full file path (minus extension), NOT the
    // frontmatter `slug`. Astro's default generateId short-circuits to `data.slug` when a
    // `slug` field exists — and a bulk automation added `slug:` fields to most files, which
    // collapsed thousands of unique path-based ids down to bare basenames. That silently
    // (a) dropped every file whose basename collided with another (419 collision groups —
    // "Later items with the same id will overwrite earlier ones") and (b) broke taxonomy
    // routing, which relies on `entry.id` being the disk path (`pillar/category/sub/file`).
    // Returning the path here restores per-file uniqueness and correct pillar routing.
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
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

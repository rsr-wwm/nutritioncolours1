/**
 * ImageObject Schema Generator
 * Generates ImageObject JSON-LD schema from image paths with descriptive
 * alt text, captions, and license info. Covers all page images for
 * Google Images, Lens, and AI multimodal search readiness.
 */

const BASE_URL = 'https://nutritioncolours.com';

export interface ImageSchemaInput {
  /** Image path (relative or absolute URL) */
  src: string;
  /** Descriptive alt text for accessibility and SEO */
  alt: string;
  /** Optional caption describing the image content */
  caption?: string;
  /** Page URL where the image appears (for acquireLicensePage) */
  pageUrl?: string;
  /** Creator/photographer name */
  creator?: string;
  /** License URL */
  licenseUrl?: string;
  /** Width in pixels (if known) */
  width?: number;
  /** Height in pixels (if known) */
  height?: number;
}

export interface ImageObjectSchema {
  '@type': 'ImageObject';
  contentUrl: string;
  caption?: string;
  alt?: string;
  acquireLicensePage?: string;
  creator?: { '@type': 'Person'; name: string };
  license?: string;
  width?: string;
  height?: string;
}

/**
 * Build a single ImageObject schema from input data.
 */
export function buildImageObjectSchema(input: ImageSchemaInput): ImageObjectSchema {
  const fullUrl = input.src.startsWith('http') ? input.src : `${BASE_URL}${input.src.startsWith('/') ? '' : '/'}${input.src}`;

  const schema: ImageObjectSchema = {
    '@type': 'ImageObject',
    contentUrl: fullUrl,
    caption: input.caption || input.alt
  };

  if (input.alt) {
    (schema as any).alt = input.alt;
  }

  if (input.pageUrl) {
    schema.acquireLicensePage = input.pageUrl.startsWith('http')
      ? input.pageUrl
      : `${BASE_URL}/${input.pageUrl}`;
  }

  if (input.creator) {
    schema.creator = { '@type': 'Person', name: input.creator };
  }

  if (input.licenseUrl) {
    schema.license = input.licenseUrl;
  }

  if (input.width) {
    schema.width = `${input.width}px`;
  }

  if (input.height) {
    schema.height = `${input.height}px`;
  }

  return schema;
}

/**
 * Build ImageObject schema for a condition page hero image.
 */
export function buildConditionImageSchema(conditionId: string, conditionName: string, description?: string): ImageObjectSchema {
  return buildImageObjectSchema({
    src: `/images/conditions/${conditionId}.webp`,
    alt: `${conditionName} - Clinical nutrition approach`,
    caption: description || `${conditionName} management through evidence-based nutritional therapy`,
    pageUrl: `/condition/${conditionId}`,
    creator: 'Dr. Shilpa Thakur'
  });
}

/**
 * Build ImageObject schema for a recipe image.
 */
export function buildRecipeImageSchema(recipeId: string, recipeTitle: string, category?: string): ImageObjectSchema {
  return buildImageObjectSchema({
    src: `/images/recipes/${recipeId}.webp`,
    alt: `${recipeTitle} - Therapeutic recipe${category ? ` for ${category}` : ''}`,
    caption: `${recipeTitle} - Evidence-based healing recipe from NutritionColours clinical kitchen`,
    pageUrl: `/recipe/${recipeId}`,
    creator: 'Dr. Shilpa Thakur'
  });
}

/**
 * Build ImageObject schema for an herb/herbal entity image.
 */
export function buildHerbImageSchema(herbId: string, herbName: string, scientificName: string, uses?: string): ImageObjectSchema {
  return buildImageObjectSchema({
    src: `/images/herbs/${herbId}.webp`,
    alt: `${herbName} (${scientificName}) - ${uses || 'Clinical herb profile'}`,
    caption: `${herbName} (${scientificName}) - ${uses || 'Evidence-based herbal medicine profile'}`,
    pageUrl: `/herb/${herbId}`,
    creator: 'Dr. Shilpa Thakur'
  });
}

/**
 * Build ImageObject schemas for all images on a given page type.
 * Returns an array suitable for inclusion in @graph.
 */
export function buildPageImageSchemas(
  type: 'condition' | 'herb' | 'recipe',
  id: string,
  name: string,
  extra?: { scientificName?: string; description?: string; category?: string; uses?: string }
): ImageObjectSchema[] {
  const schemas: ImageObjectSchema[] = [];

  switch (type) {
    case 'condition':
      schemas.push(buildConditionImageSchema(id, name, extra?.description));
      break;
    case 'herb':
      schemas.push(buildHerbImageSchema(id, name, extra?.scientificName || '', extra?.uses));
      break;
    case 'recipe':
      schemas.push(buildRecipeImageSchema(id, name, extra?.category));
      break;
  }

  return schemas;
}

import { OGImageRoute } from 'astro-og-canvas';
import { MEDICAL_CONDITIONS_DATA, HERBS_SPICES_DATA } from '../../lib/clinical_databases';
import { LOCATIONS_DATA } from '../../lib/locationsData';
import { TOPICS } from '../../data/topics';

// Dynamic per-page OpenGraph images, generated at build time (astro-og-canvas / CanvasKit),
// for the four highest page-count templates (clinic, condition, herb, topic). Keyed by
// `<template>/<id>` so routes resolve to e.g. `/og/clinic/mumbai.png`.

type OgPage = { title: string; description: string };

const clinicPages: Record<string, OgPage> = {};
const seenCities = new Set<string>();
for (const loc of LOCATIONS_DATA) {
  const id = loc.city.toLowerCase().replace(/\s+/g, '-');
  if (seenCities.has(id)) continue;
  seenCities.add(id);
  clinicPages[`clinic/${id}`] = {
    title: `Remote Clinical Nutrition — ${loc.city}, ${loc.state}`,
    description: "Dr. Shilpa Thakur's circadian metabolic nutrition protocols, available to clients across India.",
  };
}

const conditionPages: Record<string, OgPage> = Object.fromEntries(
  MEDICAL_CONDITIONS_DATA.map((cond) => [
    `condition/${cond.id}`,
    { title: cond.name, description: cond.rootCause || 'Clinical nutrition protocol by Dr. Shilpa Thakur.' },
  ])
);

const herbPages: Record<string, OgPage> = Object.fromEntries(
  HERBS_SPICES_DATA.map((herb) => [
    `herb/${herb.id}`,
    { title: herb.name, description: herb.primaryMechanism || 'Therapeutic herb profile by NutritionColours.' },
  ])
);

const topicPages: Record<string, OgPage> = Object.fromEntries(
  TOPICS.map((topic) => [
    `topic/${topic.id}`,
    { title: topic.title, description: topic.shortDesc },
  ])
);

const pages: Record<string, OgPage> = {
  ...clinicPages,
  ...conditionPages,
  ...herbPages,
  ...topicPages,
};

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getImageOptions: (_path, page: OgPage) => ({
    title: page.title,
    description: page.description,
    bgGradient: [
      [2, 20, 16],
      [6, 46, 38],
    ],
    border: { color: [163, 230, 53], width: 6, side: 'block-start' },
    padding: 60,
    font: {
      title: { color: [255, 255, 255], size: 64, families: ['Inter'] },
      description: { color: [209, 250, 229], size: 34, families: ['Inter'] },
    },
    fonts: [
      'https://api.fontsource.org/v1/fonts/inter/latin-700-normal.ttf',
      'https://api.fontsource.org/v1/fonts/inter/latin-400-normal.ttf',
    ],
  }),
});

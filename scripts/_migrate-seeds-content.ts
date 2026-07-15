// One-off migration: write the 11 real, USDA-sourced seed pages (foods_database.ts
// SEEDS_DATA) into the existing scientific-name-slugged boilerplate files under
// src/content/knowledge/Seeds/, replacing the auto-generated stubs. Deliberately excludes
// items already covered elsewhere (see SEEDS_DATA comment): cumin/coriander/fennel/caraway
// (herb/spice pages), quinoa (Grains), lentils/chickpeas/beans/peas (deferred to a future
// Pulses & Legumes round). Common-name duplicate files (pumpkin-seeds.md, chia-seeds.md)
// are left untouched and flagged, same pattern as prior rounds.
import fs from 'fs';
import path from 'path';
import { SEEDS_DATA, type FoodEntity } from '../src/lib/foods_database';

const BASE = path.join(process.cwd(), 'src/content/knowledge/Seeds');

const TARGET_FILE: Record<string, string> = {
  'pumpkin-seeds': 'Cucurbitaceae Seeds/cucurbita-pepo.md',
  'sunflower-seeds': 'Asteraceae & Brassicaceae Oilseeds/helianthus-annuus.md',
  flaxseed: 'Linaceae Oilseeds/linum-usitatissimum.md',
  'chia-seeds': 'Mucilaginous Seeds/salvia-hispanica.md',
  'sesame-seeds': 'Pedaliaceae & Fabaceae Oilseeds/sesamum-indicum.md',
  'psyllium-husk': 'Mucilaginous Seeds/plantago-ovata.md',
  'hemp-seeds': 'Cannabaceae Seeds/cannabis-sativa-seeds.md',
  'watermelon-seeds': 'Cucurbitaceae Seeds/citrullus-lanatus-seeds.md',
  buckwheat: 'Broadleaf Pseudocereals/fagopyrum-esculentum.md',
  'amaranth-seed': 'Broadleaf Pseudocereals/amaranthus.md',
  'poppy-seed': 'Papaveraceae Spice Seeds/papaver-somniferum.md',
};

const KNOWN_DUPLICATES = [
  'Cucurbitaceae Seeds/pumpkin-seeds.md',
  'Mucilaginous Seeds/chia-seeds.md',
];

function subCategoryFor(id: string): string {
  return TARGET_FILE[id].split('/')[0];
}

function gradeLabel(g: string) {
  return { A: 'Strong evidence', B: 'Moderate evidence', C: 'Limited evidence', D: 'Traditional / insufficient evidence' }[g] || g;
}

function buildMarkdown(f: FoodEntity): string {
  // Title deliberately drops scientificName (round-11 pattern, applied consistently) —
  // scientific name is surfaced as a separate italic line under Overview and in seoKeywords.
  const keywords = [f.name.toLowerCase(), ...(f.scientificName ? [f.scientificName.toLowerCase()] : []), ...(f.keyNutrients || []).map((k) => k.toLowerCase()), 'nutrition', 'composition'].slice(0, 8);
  const compositionRows = f.composition.map((n) => `| ${n.name} | ${n.amount} ${n.unit} |`).join('\n');
  const healthNotes = f.healthNotes.map((h) =>
    `- **[${gradeLabel(h.grade)}]** ${h.claim}${h.citationPending ? ' *(study citation under clinical review)*' : ''}`
  ).join('\n');
  const sources = f.sources.map((s) => `- [${s.text}](${s.url})`).join('\n');

  return `---
title: "${f.name} — Nutrition, Composition & Health"
description: "${f.summary.replace(/"/g, '\\"')}"
category: "Seeds"
subCategory: "${subCategoryFor(f.id)}"
author: "NutritionColours Editorial Team"
reviewedBy: "${f.reviewedBy}"
lastUpdated: ${f.lastReviewed}
seoKeywords: ${JSON.stringify(keywords)}
tags: ${JSON.stringify(f.flags || [])}
---

## Overview

${f.scientificName ? `*Scientific name: ${f.scientificName}*\n\n` : ''}${f.summary}

${f.perServingNote ? `> **Serving note:** ${f.perServingNote}\n` : ''}
## Nutrition composition (per 100 g reference scale)

| Nutrient | Amount |
| :--- | ---: |
| Energy | ${f.energyKcal} kcal |
${compositionRows}

**Key nutrients:** ${(f.keyNutrients || []).join(', ')}

${f.seasonalityIndia ? `**Regional context (India):** ${f.seasonalityIndia}\n` : ''}
## What the evidence says

${healthNotes}

${f.preparationNote ? `## Preparation intelligence\n\n${f.preparationNote}\n` : ''}
## Sources

${sources}

*Clinically reviewed by ${f.reviewedBy}. Last reviewed ${f.lastReviewed}. This page is educational and not medical advice.*
`;
}

let written = 0;
for (const f of SEEDS_DATA) {
  const rel = TARGET_FILE[f.id];
  if (!rel) { console.log('NO TARGET FILE for', f.id); continue; }
  const filePath = path.join(BASE, rel);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, buildMarkdown(f), 'utf-8');
  console.log('wrote', rel);
  written++;
}
console.log(`\n${written}/${SEEDS_DATA.length} seed pages migrated into src/content/knowledge/Seeds/`);
console.log(`\nKnown duplicate common-name files left untouched (owner dedup flag): ${KNOWN_DUPLICATES.join(', ')}`);

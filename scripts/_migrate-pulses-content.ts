// One-off migration: write the 10 real, USDA/IFCT-sourced pulse pages (foods_database.ts
// PULSES_DATA) into the existing scientific-name-slugged boilerplate files under
// src/content/knowledge/Pulses & Legumes/, replacing the auto-generated stubs. Where a pulse
// has multiple boilerplate files (e.g. chickpea: cicer-arietinum-desi.md AND -kabuli.md AND
// -chana-dal.md), targets one canonical file and leaves the rest flagged, same pattern as
// prior rounds. Also cross-references round 13: chickpeas/lentils/beans/peas have duplicate
// boilerplate files scattered into Seeds/ too — this pillar is their intended canonical home.
import fs from 'fs';
import path from 'path';
import { PULSES_DATA, type FoodEntity } from '../src/lib/foods_database';

const BASE = path.join(process.cwd(), 'src/content/knowledge/Pulses & Legumes');

const TARGET_FILE: Record<string, string> = {
  chickpeas: 'Cicer Botanicals/cicer-arietinum-desi.md',
  lentils: 'Split & Decorticated Lentils/lens-culinaris-red-split.md',
  'kidney-beans': 'Large Phaseolus Beans/phaseolus-vulgaris-red.md',
  'mung-beans': 'High-Protein Vigna Grams/vigna-radiata.md',
  'urad-dal': 'High-Protein Vigna Grams/vigna-mungo.md',
  'pigeon-pea': 'Tropical & Subtropical Pulses/cajanus-cajan.md',
  'green-peas': 'Pisum Botanicals/pisum-sativum-green.md',
  peanuts: 'Subterranean Oil Legumes/arachis-hypogaea.md',
  soybeans: 'Whole Soybeans & Edamame/pulse-soy-1.md',
  'fava-beans': 'Cool-Season Vine Legumes/vicia-faba.md',
};

// Known duplicate/variant files left untouched this round (owner dedup flag).
const KNOWN_DUPLICATES = [
  'Cicer Botanicals/cicer-arietinum-kabuli.md',
  'Cicer Botanicals/cicer-arietinum-chana-dal.md',
  'Whole Small-Seed Lentils/lens-culinaris-black.md',
  'Whole Small-Seed Lentils/lens-culinaris-brown.md',
  'Whole Small-Seed Lentils/lens-culinaris-green.md',
  'Split & Decorticated Lentils/lens-culinaris-yellow-split.md',
  'Medium & Small Phaseolus Beans/phaseolus-vulgaris-black.md',
  'Medium & Small Phaseolus Beans/phaseolus-vulgaris-navy.md',
  'Medium & Small Phaseolus Beans/phaseolus-vulgaris-pinto.md',
  'Large Phaseolus Beans/phaseolus-vulgaris-white.md',
  'Pisum Botanicals/pisum-sativum-yellow.md',
  'Cool-Season Vine Legumes/lima-bean-phaseolus-lunatus.md',
  'Cool-Season Vine Legumes/phaseolus-lunatus.md',
  'Elongated Vigna Pulses/vigna-unguiculata.md (black-eyed peas — future round candidate)',
  'High-Protein Vigna Grams/vigna-angularis.md (adzuki bean — future round candidate)',
];

function subCategoryFor(id: string): string {
  return TARGET_FILE[id].split('/')[0];
}

function gradeLabel(g: string) {
  return { A: 'Strong evidence', B: 'Moderate evidence', C: 'Limited evidence', D: 'Traditional / insufficient evidence' }[g] || g;
}

function buildMarkdown(f: FoodEntity): string {
  const keywords = [f.name.toLowerCase(), ...(f.scientificName ? [f.scientificName.toLowerCase()] : []), ...(f.keyNutrients || []).map((k) => k.toLowerCase()), 'nutrition', 'composition'].slice(0, 8);
  const compositionRows = f.composition.map((n) => `| ${n.name} | ${n.amount} ${n.unit} |`).join('\n');
  const healthNotes = f.healthNotes.map((h) =>
    `- **[${gradeLabel(h.grade)}]** ${h.claim}${h.citationPending ? ' *(study citation under clinical review)*' : ''}`
  ).join('\n');
  const sources = f.sources.map((s) => `- [${s.text}](${s.url})`).join('\n');

  return `---
title: "${f.name} — Nutrition, Composition & Health"
description: "${f.summary.replace(/"/g, '\\"')}"
category: "Pulses & Legumes"
subCategory: "${subCategoryFor(f.id)}"
author: "NutritionColours Editorial Team"
reviewedBy: "${f.reviewedBy}"
lastUpdated: ${f.lastReviewed}
seoKeywords: ${JSON.stringify(keywords)}
tags: ${JSON.stringify(f.flags || [])}
---

## Overview

${f.scientificName ? `*Scientific name: ${f.scientificName}*\n\n` : ''}${f.summary}

## Nutrition composition (per 100 g, cooked unless noted)

| Nutrient | Amount |
| :--- | ---: |
| Energy | ${f.energyKcal} kcal |
${compositionRows}

${f.glycemicIndex != null ? `**Glycemic index:** ${f.glycemicIndex}${f.glycemicNote ? ` — ${f.glycemicNote}` : ''}\n` : (f.glycemicNote ? `**Glycemic note:** ${f.glycemicNote}\n` : '')}
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
for (const f of PULSES_DATA) {
  const rel = TARGET_FILE[f.id];
  if (!rel) { console.log('NO TARGET FILE for', f.id); continue; }
  const filePath = path.join(BASE, rel);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, buildMarkdown(f), 'utf-8');
  console.log('wrote', rel);
  written++;
}
console.log(`\n${written}/${PULSES_DATA.length} pulse pages migrated into src/content/knowledge/Pulses & Legumes/`);
console.log(`\nKnown duplicate/variant files left untouched (owner dedup flag): ${KNOWN_DUPLICATES.join(', ')}`);

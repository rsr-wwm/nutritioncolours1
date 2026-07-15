// One-off migration: write the 12 real, USDA-sourced vegetable pages (foods_database.ts
// VEGETABLES_DATA) into the existing scientific-name-slugged boilerplate files under
// src/content/knowledge/Vegetables/, replacing the auto-generated stubs. Deliberately targets
// the scientific-name file (matches FoodEntity.scientificName exactly) where a duplicate
// common-name file also exists (e.g. kale.md vs. brassica-oleracea-var-sabellica.md) —
// mirrors the round-7 Grains approach. Duplicate common-name files are left untouched and
// flagged, not deleted.
import fs from 'fs';
import path from 'path';
import { VEGETABLES_DATA, type FoodEntity } from '../src/lib/foods_database';

const BASE = path.join(process.cwd(), 'src/content/knowledge/Vegetables');

// Existing real file (scientific-name slug) each VEGETABLES_DATA entry replaces.
const TARGET_FILE: Record<string, string> = {
  spinach: 'Amaranthaceae Greens/spinacia-oleracea.md',
  kale: 'Leafy & Heading Brassicas/brassica-oleracea-var-sabellica.md',
  cabbage: 'Leafy & Heading Brassicas/brassica-oleracea-var-capitata.md',
  broccoli: 'Flowering Brassicas/brassica-oleracea-var-italica.md',
  cauliflower: 'Flowering Brassicas/brassica-oleracea-var-botrytis.md',
  carrot: 'True Root Vegetables/daucus-carota.md',
  beetroot: 'True Root Vegetables/beta-vulgaris.md',
  onion: 'Edible Bulbs/allium-cepa.md',
  tomato: 'Solanaceae Crops/solanum-lycopersicum.md',
  potato: 'Tuberous Vegetables/solanum-tuberosum.md',
  'sweet-potato': 'Tuberous Vegetables/ipomoea-batatas.md',
  eggplant: 'Solanaceae Crops/solanum-melongena.md',
};

// Known duplicate common-name files left untouched this round (flagged for owner dedup,
// same pattern as the round-4/7 Grains-folder scatter finding).
const KNOWN_DUPLICATES = [
  'Leafy & Heading Brassicas/kale.md',
  'Leafy & Heading Brassicas/cabbage.md',
  'Flowering Brassicas/broccoli.md',
  'Solanaceae Crops/eggplant.md',
  'Leafy-Greens/spinach.md',
];

// subCategory frontmatter = the second-level folder name (drives taxonomyEngine routing).
function subCategoryFor(id: string): string {
  return TARGET_FILE[id].split('/')[0];
}

function gradeLabel(g: string) {
  return { A: 'Strong evidence', B: 'Moderate evidence', C: 'Limited evidence', D: 'Traditional / insufficient evidence' }[g] || g;
}

function buildMarkdown(f: FoodEntity): string {
  // Title deliberately drops scientificName (2026-07-15 round-11 fix, consistency pass
  // across all food pillars) — scientific name is still surfaced as a separate italic line
  // under Overview and in seoKeywords, not crammed into the human-facing title.
  const keywords = [f.name.toLowerCase(), ...(f.scientificName ? [f.scientificName.toLowerCase()] : []), ...(f.keyNutrients || []).map((k) => k.toLowerCase()), 'nutrition', 'composition'].slice(0, 8);
  const compositionRows = f.composition.map((n) => `| ${n.name} | ${n.amount} ${n.unit} |`).join('\n');
  const healthNotes = f.healthNotes.map((h) =>
    `- **[${gradeLabel(h.grade)}]** ${h.claim}${h.citationPending ? ' *(study citation under clinical review)*' : ''}`
  ).join('\n');
  const sources = f.sources.map((s) => `- [${s.text}](${s.url})`).join('\n');

  return `---
title: "${f.name} — Nutrition, Composition & Health"
description: "${f.summary.replace(/"/g, '\\"')}"
category: "Vegetables"
subCategory: "${subCategoryFor(f.id)}"
author: "NutritionColours Editorial Team"
reviewedBy: "${f.reviewedBy}"
lastUpdated: ${f.lastReviewed}
seoKeywords: ${JSON.stringify(keywords)}
tags: ${JSON.stringify(f.flags || [])}
---

## Overview

${f.scientificName ? `*Scientific name: ${f.scientificName}*\n\n` : ''}${f.summary}

## Nutrition composition (per 100 g)

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
for (const f of VEGETABLES_DATA) {
  const rel = TARGET_FILE[f.id];
  if (!rel) { console.log('NO TARGET FILE for', f.id); continue; }
  const filePath = path.join(BASE, rel);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, buildMarkdown(f), 'utf-8');
  console.log('wrote', rel);
  written++;
}
console.log(`\n${written}/${VEGETABLES_DATA.length} vegetable pages migrated into src/content/knowledge/Vegetables/`);
console.log(`\nKnown duplicate common-name files left untouched (owner dedup flag): ${KNOWN_DUPLICATES.join(', ')}`);

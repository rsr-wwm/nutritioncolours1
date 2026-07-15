// One-off migration: write the 12 real, USDA/IFCT-sourced fruit pages (built in
// src/lib/foods_database.ts, round 3) into src/content/knowledge/Fruits/ as real markdown,
// replacing the auto-generated boilerplate stubs. Per owner decision 2026-07-15:
// src/content/knowledge/ is canonical; /foods/fruits/* is being retired into it.
import fs from 'fs';
import path from 'path';
import { FRUITS_DATA, type FoodEntity } from '../src/lib/foods_database';

const BASE = path.join(process.cwd(), 'src/content/knowledge/Fruits');

// second-level folder (parts[1] in taxonomyEngine) determines the routed category/subcategory.
const TARGET_DIR: Record<string, string> = {
  mango: 'exotic-tropical-fruits/creamy-dense-tropicals',
  banana: 'exotic-tropical-fruits/high-moisture-tropicals',
  guava: 'exotic-tropical-fruits/high-moisture-tropicals',
  papaya: 'exotic-tropical-fruits/creamy-dense-tropicals',
  pomegranate: 'berries-aggregate-fruits/aggregate-fruits',
  amla: 'exotic-tropical-fruits/high-moisture-tropicals',
  apple: 'pome-fruits/sweet-pome',
  watermelon: 'watermelons',
  orange: 'citrus-fruits/sweet-citrus',
  jackfruit: 'exotic-tropical-fruits/high-moisture-tropicals',
  pineapple: 'exotic-tropical-fruits/high-moisture-tropicals',
  'sapota-chikoo': 'exotic-tropical-fruits/creamy-dense-tropicals',
};

function gradeLabel(g: string) {
  return { A: 'Strong evidence', B: 'Moderate evidence', C: 'Limited evidence', D: 'Traditional / insufficient evidence' }[g] || g;
}

function buildMarkdown(f: FoodEntity): string {
  // Title deliberately drops scientificName — a couple of entries already carry a
  // regional/common alias in `name` itself (e.g. "Sapota (Chikoo)", "Amla (Indian
  // Gooseberry)"), and stacking scientificName as a second parenthetical produced
  // double-nested-paren titles like "Sapota (Chikoo) (Manilkara zapota)" (2026-07-15
  // round-11 fix, same pattern as the /herb/{id} title fix). Scientific name is still
  // surfaced, just as a separate italic line under Overview and in seoKeywords, not
  // crammed into the human-facing title.
  const keywords = [f.name.toLowerCase(), ...(f.scientificName ? [f.scientificName.toLowerCase()] : []), ...(f.keyNutrients || []).map((k) => k.toLowerCase()), 'nutrition', 'composition'].slice(0, 8);
  const compositionRows = f.composition.map((n) => `| ${n.name} | ${n.amount} ${n.unit} |`).join('\n');
  const healthNotes = f.healthNotes.map((h) =>
    `- **[${gradeLabel(h.grade)}]** ${h.claim}${h.citationPending ? ' *(study citation under clinical review)*' : ''}`
  ).join('\n');
  const sources = f.sources.map((s) => `- [${s.text}](${s.url})`).join('\n');

  return `---
title: "${f.name} — Nutrition, Composition & Health"
description: "${f.summary.replace(/"/g, '\\"')}"
category: "Fruits"
subCategory: "${TARGET_DIR[f.id].split('/')[0]}"
author: "NutritionColours Editorial Team"
reviewedBy: "${f.reviewedBy}"
lastUpdated: ${f.lastReviewed}
seoKeywords: ${JSON.stringify(keywords)}
tags: ${JSON.stringify(f.flags || [])}
---

## Overview

${f.scientificName ? `*Scientific name: ${f.scientificName}*\n\n` : ''}${f.summary}

${f.perServingNote ? `**Typical serving:** ${f.perServingNote}\n` : ''}
## Nutrition composition (per 100 g)

| Nutrient | Amount |
| :--- | ---: |
| Energy | ${f.energyKcal} kcal |
${compositionRows}

${f.glycemicIndex != null ? `**Glycemic index:** ${f.glycemicIndex}${f.glycemicNote ? ` — ${f.glycemicNote}` : ''}\n` : (f.glycemicNote ? `**Glycemic note:** ${f.glycemicNote}\n` : '')}
**Key nutrients:** ${(f.keyNutrients || []).join(', ')}

${f.seasonalityIndia ? `**Seasonality (India):** ${f.seasonalityIndia}\n` : ''}
## What the evidence says

${healthNotes}

${f.preparationNote ? `## Preparation intelligence\n\n${f.preparationNote}\n` : ''}
## Sources

${sources}

*Clinically reviewed by ${f.reviewedBy}. Last reviewed ${f.lastReviewed}. This page is educational and not medical advice.*
`;
}

let written = 0;
for (const f of FRUITS_DATA) {
  const dir = TARGET_DIR[f.id];
  if (!dir) { console.log('NO TARGET DIR for', f.id); continue; }
  const fullDir = path.join(BASE, dir);
  fs.mkdirSync(fullDir, { recursive: true });
  const filePath = path.join(fullDir, `${f.id}.md`);
  fs.writeFileSync(filePath, buildMarkdown(f), 'utf-8');
  console.log('wrote', path.relative(BASE, filePath));
  written++;
}
console.log(`\n${written}/${FRUITS_DATA.length} fruit pages migrated into src/content/knowledge/Fruits/`);

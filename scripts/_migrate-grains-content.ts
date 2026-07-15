// One-off migration: write the 9 real, USDA/IFCT-sourced grain pages (foods_database.ts
// GRAINS_DATA) into the existing scientific-name-slugged boilerplate files under
// src/content/knowledge/Grains/, replacing the auto-generated stubs. Deliberately scoped only
// to genuine grain/millet items — the Grains/ folder also contains ~100+ misfiled non-grain
// subfolders (spices, pulses, beverages) from an earlier bulk pass; those are left untouched.
import fs from 'fs';
import path from 'path';
import { GRAINS_DATA, type FoodEntity } from '../src/lib/foods_database';

const BASE = path.join(process.cwd(), 'src/content/knowledge/Grains');

// Existing real file (scientific-name slug) each GRAINS_DATA entry replaces.
const TARGET_FILE: Record<string, string> = {
  rice: 'Oryza Species/oryza-sativa-indica.md',
  wheat: 'Triticum Species/triticum-aestivum.md',
  oats: 'Avena & Secale Genus/avena-sativa.md',
  barley: 'Avena & Secale Genus/hordeum-vulgare.md',
  bajra: 'Pennisetum & Eleusine Genus/pennisetum-glaucum.md',
  ragi: 'Pennisetum & Eleusine Genus/eleusine-coracana.md',
  jowar: 'Sorghum Genus/sorghum-bicolor.md',
  'proso-millet': 'Pennisetum & Eleusine Genus/panicum-miliaceum.md',
  quinoa: 'Amaranthaceae Seeds/chenopodium-quinoa.md',
};

// subCategory frontmatter = the second-level folder name (drives taxonomyEngine routing).
function subCategoryFor(id: string): string {
  return TARGET_FILE[id].split('/')[0];
}

function gradeLabel(g: string) {
  return { A: 'Strong evidence', B: 'Moderate evidence', C: 'Limited evidence', D: 'Traditional / insufficient evidence' }[g] || g;
}

function buildMarkdown(f: FoodEntity): string {
  // Title deliberately drops scientificName — several entries already carry a regional/form
  // alias in `name` itself (e.g. "Pearl Millet (Bajra)", "Rice (White, Long-Grain)"), and
  // stacking scientificName as a second parenthetical produced double-nested-paren titles
  // like "Sorghum (Jowar) (Sorghum bicolor)" (2026-07-15 round-11 fix, same pattern as the
  // /herb/{id} title fix). Scientific name is still surfaced, just as a separate italic line
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
category: "Grains"
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
for (const f of GRAINS_DATA) {
  const rel = TARGET_FILE[f.id];
  if (!rel) { console.log('NO TARGET FILE for', f.id); continue; }
  const filePath = path.join(BASE, rel);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, buildMarkdown(f), 'utf-8');
  console.log('wrote', rel);
  written++;
}
console.log(`\n${written}/${GRAINS_DATA.length} grain pages migrated into src/content/knowledge/Grains/`);

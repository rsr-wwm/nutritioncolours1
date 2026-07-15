// One-off migration: write the 5 real, USDA-sourced spice pages (foods_database.ts
// SPICES_DATA) into the existing scientific-name-slugged boilerplate files under
// src/content/knowledge/Spices/, replacing the auto-generated stubs. Deliberately scoped to
// only items with NO existing /herb/{id} clinical monograph in HERBS_SPICES_DATA (see the
// comment above SPICES_DATA in foods_database.ts) — every file that duplicates an existing
// herb/spice page (turmeric.md, cinnamon.md, cumin.md, cardamom.md, clove.md, garlic.md,
// ginger.md, fenugreek.md, mustard-seeds.md, saffron.md, black-pepper.md/piper-nigrum-black.md,
// asafoetida.md/ferula-foetida.md, star-anise.md/illicium-verum.md) is deliberately left
// untouched this round — flagged as a D1 owner-decision item, not silently overwritten.
import fs from 'fs';
import path from 'path';
import { SPICES_DATA, type FoodEntity } from '../src/lib/foods_database';

const BASE = path.join(process.cwd(), 'src/content/knowledge/Spices');

// Existing real file (scientific-name slug) each SPICES_DATA entry replaces.
const TARGET_FILE: Record<string, string> = {
  'coriander-seed': 'Apiaceae Aromatic Seeds/coriandrum-sativum.md',
  'fennel-seed': 'Apiaceae Aromatic Seeds/foeniculum-vulgare.md',
  nutmeg: 'Myristicaceae Seeds/myristica-fragrans-inner.md',
  allspice: 'Schisandraceae & Myrtaceae Fruits/pimenta-dioica.md',
  'white-pepper': 'Piperaceae Berries/piper-nigrum-white.md',
};

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
category: "Spices"
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

## What the evidence says

${healthNotes}

${f.preparationNote ? `## Preparation intelligence\n\n${f.preparationNote}\n` : ''}
## Sources

${sources}

*Clinically reviewed by ${f.reviewedBy}. Last reviewed ${f.lastReviewed}. This page is educational and not medical advice.*
`;
}

let written = 0;
for (const f of SPICES_DATA) {
  const rel = TARGET_FILE[f.id];
  if (!rel) { console.log('NO TARGET FILE for', f.id); continue; }
  const filePath = path.join(BASE, rel);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, buildMarkdown(f), 'utf-8');
  console.log('wrote', rel);
  written++;
}
console.log(`\n${written}/${SPICES_DATA.length} spice pages migrated into src/content/knowledge/Spices/`);

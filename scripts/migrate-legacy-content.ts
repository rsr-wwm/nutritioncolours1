import fs from 'fs';
import path from 'path';
import { HERBS_SPICES_DATA, MEDICAL_CONDITIONS_DATA } from '../src/lib/clinical_databases.js';
import { TOPICS } from '../src/lib/topics.js';

const KNOWLEDGE_DIR = path.join(process.cwd(), 'src/content/knowledge');

function sanitize(str) {
  return str.replace(/"/g, '\\"').trim();
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function generateMarkdown(title, description, category, subCategory, id, tags, bodyContent) {
  const frontmatter = `---
title: "${sanitize(title)}"
description: "${sanitize(description)}"
category: "${sanitize(category)}"
subCategory: "${subCategory ? sanitize(subCategory) : ''}"
seoKeywords: ${JSON.stringify(tags || [id])}
author: "NutritionColours Editorial Team"
---

${bodyContent}
`;

  const catDir = path.join(KNOWLEDGE_DIR, category.toLowerCase().replace(/\\s+/g, '-'));
  const subCatDir = subCategory ? path.join(catDir, subCategory.toLowerCase().replace(/\\s+/g, '-')) : catDir;
  
  ensureDir(subCatDir);
  const filePath = path.join(subCatDir, `${id}.md`);
  fs.writeFileSync(filePath, frontmatter, 'utf-8');
}

console.log('Starting Legacy Content Migration...');

let herbCount = 0;
HERBS_SPICES_DATA.forEach(herb => {
  const body = `## What is ${herb.name}?
${herb.name} (${herb.scientificName}) is a highly potent botanical used extensively in clinical nutrition.

### Key Active Compounds
${herb.activeCompounds.map(c => `- **${c}**`).join('\\n')}

### Primary Clinical Mechanism
${herb.primaryMechanism}

### Therapeutic Dosage & Protocols
**Range:** ${herb.dosage.range}
**Clinical Instruction:** ${herb.dosage.instruction}

### Synergies for Bioavailability
${herb.synergies.map(s => `- ${s}`).join('\\n')}

### Contraindications & Warnings
> [!WARNING]
> Please consult a healthcare provider if you have any of the following:
${herb.contraindications.map(c => `- ${c}`).join('\\n')}

## Frequently Asked Questions
${herb.faqs.map(faq => `### ${faq.question}\\n${faq.answer}\\n`).join('\\n')}
`;

  generateMarkdown(
    `${herb.name}: Benefits, Dosage, and Clinical Applications`,
    `A comprehensive clinical guide on ${herb.name} (${herb.scientificName}), covering dosage, active compounds, and bioavailability synergies.`,
    'Herbs Spices',
    herb.category,
    herb.id,
    [herb.name, herb.scientificName, 'botanical medicine', 'clinical nutrition'],
    body
  );
  herbCount++;
});
console.log(`Migrated ${herbCount} Herbs & Spices.`);

let condCount = 0;
MEDICAL_CONDITIONS_DATA.forEach(cond => {
  const body = `## Understanding ${cond.name}

${cond.name} is a critical health condition that requires comprehensive nutritional and lifestyle intervention.

### Primary Drivers & Root Causes
${(cond.primaryDrivers || []).map(d => `- **${d}**`).join('\n')}

### Nutritional Interventions
${(cond.nutritionalInterventions || []).map(i => `- ${i}`).join('\n')}

### Key Biomarkers to Monitor
${(cond.keyBiomarkers || []).map(b => `- ${b}`).join('\n')}

### Foods to Avoid
> [!WARNING]
> Strict avoidance or heavy moderation is recommended for:
${(cond.foodsToAvoid || []).map(f => `- ${f}`).join('\n')}

## Frequently Asked Questions
${(cond.faqs || []).map(faq => `### ${faq.question}\n${faq.answer}\n`).join('\n')}
`;

  generateMarkdown(
    `${cond.name}: Nutritional Protocols and Biomarkers`,
    `Deep clinical overview of ${cond.name}, exploring root causes, necessary nutritional interventions, and key biomarkers to track.`,
    'Health Conditions',
    cond.category || 'Metabolic',
    cond.id,
    [cond.name, 'disease reversal', 'clinical nutrition protocols'],
    body
  );
  condCount++;
});
console.log(`Migrated ${condCount} Medical Conditions.`);

let topicCount = 0;
TOPICS.forEach(topic => {
  const body = `## ${topic.title}

${topic.description}

### Clinical Significance
${(topic.content || []).map(c => `#### ${c.heading}\n${c.body}\n`).join('\n')}

## Frequently Asked Questions
${(topic.faqs || []).map(faq => `### ${faq.question}\n${faq.answer}\n`).join('\n')}
`;

  generateMarkdown(
    `${topic.title}: Expert Nutritional Guide`,
    (topic.description || '').substring(0, 160),
    'Health Topics',
    topic.category,
    topic.id,
    [topic.title, 'nutrition topics', 'health optimization'],
    body
  );
  topicCount++;
});
console.log(`Migrated ${topicCount} Topics.`);

console.log('Migration Complete! Generated a total of', herbCount + condCount + topicCount, 'markdown files.');

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Direct imports of database entities
import { BLOG_ARTICLES } from '../constants';
import { RECIPES } from '../recipes_database';
import { HERBS_SPICES_DATA, MEDICAL_CONDITIONS_DATA } from '../clinical_databases';
import { TOPICS } from '../topics';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

interface Entity {
  id: string;
  type: 'article' | 'recipe' | 'herb' | 'condition' | 'topic';
  path: string;
  title: string;
  text: string;
  keywords: string[];
}

// Stopwords list to filter out noise
const STOPWORDS = new Set([
  'the', 'and', 'of', 'to', 'in', 'is', 'that', 'it', 'for', 'on', 'with', 'as', 
  'at', 'by', 'an', 'be', 'this', 'are', 'or', 'from', 'but', 'not', 'your', 'our', 
  'with', 'about', 'more', 'how', 'what', 'can', 'will', 'who', 'has', 'have', 'had'
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 2 && !STOPWORDS.has(word));
}

// Prepare entities
const entities: Entity[] = [];

// 1. Blog Articles
BLOG_ARTICLES.forEach(art => {
  const text = `${art.title} ${art.excerpt || ''} ${art.content || ''} ${(art.tags || []).join(' ')} ${art.primaryKeyword || ''}`;
  entities.push({
    id: art.id,
    type: 'article',
    path: `article/${art.id}`,
    title: art.title,
    text,
    keywords: [art.id, ...tokenize(art.title)]
  });
});

// 2. Recipes
RECIPES.forEach(rec => {
  const text = `${rec.title} ${rec.description || ''} ${rec.healingDescription || ''} ${rec.fullHealingContent || ''} ${(rec.tags || []).join(' ')} ${rec.primaryBenefit || ''}`;
  entities.push({
    id: rec.id,
    type: 'recipe',
    path: `recipe/${rec.id}`,
    title: rec.title,
    text,
    keywords: [rec.id, ...tokenize(rec.title)]
  });
});

// 3. Herbs & Spices
HERBS_SPICES_DATA.forEach(herb => {
  const text = `${herb.name} ${herb.scientificName || ''} ${herb.primaryMechanism || ''} ${(herb.activeCompounds || []).join(' ')} ${(herb.synergies || []).join(' ')} ${herb.primaryKeyword || ''}`;
  entities.push({
    id: herb.id,
    type: 'herb',
    path: `herb/${herb.id}`,
    title: herb.name,
    text,
    keywords: [herb.id, herb.name.toLowerCase(), ...tokenize(herb.name)]
  });
});

// 4. Medical Conditions
MEDICAL_CONDITIONS_DATA.forEach(cond => {
  const text = `${cond.name} ${cond.rootCause || ''} ${(cond.therapeuticSpices || []).join(' ')} ${cond.primaryKeyword || ''}`;
  entities.push({
    id: cond.id,
    type: 'condition',
    path: `condition/${cond.id}`,
    title: cond.name,
    text,
    keywords: [cond.id, cond.name.toLowerCase(), ...tokenize(cond.name)]
  });
});

// 5. Topics
TOPICS.forEach(top => {
  const text = `${top.title} ${top.shortDesc || ''} ${top.problem || ''} ${top.solution || ''} ${top.fullContent || ''} ${top.primaryKeyword || ''}`;
  entities.push({
    id: top.id,
    type: 'topic',
    path: `topic/${top.id}`,
    title: top.title,
    text,
    keywords: [top.id, ...tokenize(top.title)]
  });
});

console.log(`Aggregated ${entities.length} clinical entities for local NLP semantic similarity linking.`);

// Compute Jaccard Similarity with name-mentions boost
const semanticLinks: Record<string, Array<{ id: string; type: string; path: string; title: string }>> = {};

entities.forEach(a => {
  const wordsA = new Set(tokenize(a.text));
  const scores: Array<{ entity: Entity; score: number }> = [];

  entities.forEach(b => {
    if (a.path === b.path) return; // Skip self

    const wordsB = new Set(tokenize(b.text));
    
    // Calculate Jaccard
    const intersection = new Set([...wordsA].filter(x => wordsB.has(x)));
    const union = new Set([...wordsA, ...wordsB]);
    const jaccard = union.size > 0 ? intersection.size / union.size : 0;

    // Entity overlap boost
    let boost = 0;
    
    // If Entity A explicitly mentions Entity B's keywords, boost score
    b.keywords.forEach(keyword => {
      if (a.text.toLowerCase().includes(keyword)) {
        boost += 0.15; // Significant boost for explicit mention
      }
    });

    // If Entity B explicitly mentions Entity A's keywords, boost score
    a.keywords.forEach(keyword => {
      if (b.text.toLowerCase().includes(keyword)) {
        boost += 0.15;
      }
    });

    // Category / Tag alignment boost
    if (a.type === b.type) {
      boost += 0.05;
    }

    const finalScore = jaccard + boost;
    if (finalScore > 0) {
      scores.push({ entity: b, score: finalScore });
    }
  });

  // Sort scores descending
  scores.sort((x, y) => y.score - x.score);

  // Take top 3 recommendations
  semanticLinks[a.path] = scores.slice(0, 3).map(item => ({
    id: item.entity.id,
    type: item.entity.type,
    path: item.entity.path,
    title: item.entity.title
  }));
});

// Save to root for static imports in App.tsx
const rootDest = path.join(PROJECT_ROOT, 'semantic_links.json');
fs.writeFileSync(rootDest, JSON.stringify(semanticLinks, null, 2), 'utf-8');
console.log(`✓ Generated: ${rootDest}`);

// Save to public/semantic_links.json
const publicDest = path.join(PROJECT_ROOT, 'public', 'semantic_links.json');
fs.writeFileSync(publicDest, JSON.stringify(semanticLinks, null, 2), 'utf-8');
console.log(`✓ Generated: ${publicDest}`);

// Save to dist/semantic_links.json (if built already)
const distDest = path.join(PROJECT_ROOT, 'dist', 'semantic_links.json');
if (fs.existsSync(path.join(PROJECT_ROOT, 'dist'))) {
  fs.writeFileSync(distDest, JSON.stringify(semanticLinks, null, 2), 'utf-8');
  console.log(`✓ Copied: ${distDest}`);
}

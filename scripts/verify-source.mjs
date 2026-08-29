import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const failures = [];
const forbiddenPublic = [
  'manifest-ai.json', 'clinical-signatures.json', 'llms-full.txt', 'llms-private.txt',
  'openapi.json', 'sw.js', 'knowledge-graph.jsonld', 'answer-fragments.json',
  'digital-twin-schema.jsonld', 'deploy-hooks.php', 'composer.json',
  '.well-known/ai-api.json', '.well-known/ai-plugin.json', '.well-known/trust-profile.json',
  '.well-known/content-credentials.json', 'data/confidence-scores.json',
  'data/content-signatures.json', 'data/claim-ledger.json', 'data/inventory.json',
];
const forbiddenRoutes = [
  'src/content.config.ts', 'src/content/config.ts',
  'src/pages/article/[id].astro', 'src/pages/condition/[id].astro',
  'src/pages/topic/[topic_id].astro', 'src/pages/herb/[id].astro',
  'src/pages/interactions/[id].astro', 'src/pages/genomics/[id].astro',
  'src/pages/vegan/[subtopic].astro', 'src/pages/plans/[slug].astro',
  'src/pages/knowledge/[...slug].astro', 'src/pages/og/[...route].ts',
];

const robotsPath = path.join(root, 'public', 'robots.txt');
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf8');
  if (/^Disallow:[^\n]*\?/m.test(robots)) failures.push('robots.txt uses a query-string Disallow pattern; use page-level noindex or a path rule');
}

const ogAssetPath = path.join(root, 'public', 'images', 'nutritioncolours-default.svg');
if (fs.existsSync(ogAssetPath)) {
  const ogAsset = fs.readFileSync(ogAssetPath, 'utf8');
  if (!/viewBox=["']0 0 1200 630["']/i.test(ogAsset)) failures.push('default social image must use a 1200x630 viewBox');
  if (/\bclinical\b|\bdiagnos(?:e|is)\b|\btreat(?:ment)?\b/i.test(ogAsset)) failures.push('default social image contains an unverified clinical authority claim');
}

for (const rel of ['public/_headers', 'vercel.json']) {
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) continue;
  const text = fs.readFileSync(file, 'utf8');
  if (/Content-Security-Policy-Report-Only/i.test(text)) failures.push(`${rel}: CSP is report-only instead of enforced`);
  if (!/Content-Security-Policy[^\n]*form-action 'self'/i.test(text)) failures.push(`${rel}: CSP must keep form-action same-origin until a reviewed integration exists`);
  if (!/Content-Security-Policy[^\n]*img-src 'self' data:/i.test(text)) failures.push(`${rel}: CSP image policy is broader than the current same-origin asset model`);
}

for (const rel of forbiddenPublic) {
  if (fs.existsSync(path.join(root, 'public', rel))) failures.push(`forbidden public artifact: public/${rel}`);
}
for (const rel of ['public/sitemap.xml', 'public/sitemap-core.xml']) {
  if (fs.existsSync(path.join(root, rel))) failures.push(`stale source sitemap must not exist: ${rel}`);
}
for (const rel of forbiddenRoutes) {
  if (fs.existsSync(path.join(root, rel))) failures.push(`quarantined route generator restored: ${rel}`);
}

const manifestPath = path.join(root, 'public', 'manifest.json');
if (fs.existsSync(manifestPath)) {
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    if (/\b(?:cure|reverse|reversal|guarantee|treat)\w*\b/i.test(String(manifest.description || ''))) {
      failures.push('public manifest contains an unreviewed medical outcome claim');
    }
  } catch (error) {
    failures.push(`public manifest is invalid JSON: ${error.message}`);
  }
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

for (const file of walk(path.join(root, 'src'))) {
  if (!/\.(astro|tsx?|jsx?)$/.test(file)) continue;
  const text = fs.readFileSync(file, 'utf8');
  const rel = path.relative(root, file);
  if (/set:html=/.test(text) && !rel.endsWith('components/JsonLd.astro')) failures.push(`unapproved raw HTML sink: ${rel}`);
  if (/type=["']application\/ld\+json["'][^>]*set:html/.test(text) && !rel.endsWith('components/JsonLd.astro')) failures.push(`raw JSON-LD HTML sink: ${rel}`);
  if (/dangerouslySetInnerHTML/.test(text)) {
    failures.push(`unapproved dangerouslySetInnerHTML sink: ${rel}`);
  }
  if (/data-ai-answer=|ai-search-agent|llm-corpus/.test(text)) failures.push(`unsupported AI-discovery directive: ${rel}`);
  if (/from\s+["']astro:content["']|\bgetCollection\s*\(/.test(text)) failures.push(`quarantined content collection reconnected: ${rel}`);
  if (/(?:leaf-registry|leaf-decisions|truth-registry|location-quarantine|reference-registry)\.json/.test(text)) failures.push(`raw publishing control data imported into application source: ${rel}`);
  if (/src\/content\/locations|content\/locations/.test(text)) failures.push(`quarantined locality corpus reconnected: ${rel}`);
  if (/webhooks\.hostinger\.com\/deploy\/[a-f0-9]{16,}/i.test(text)) failures.push(`hard-coded deployment webhook: ${rel}`);
  if (/nutritioncolours\.example\.com/i.test(text)) failures.push(`placeholder production hostname: ${rel}`);
}

if (failures.length) {
  console.error(`Source safety gate failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log('Source safety gate passed: no forbidden trust feeds, source sitemaps, secrets, placeholders, or unapproved HTML sinks.');

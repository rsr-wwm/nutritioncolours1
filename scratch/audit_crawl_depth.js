import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

const sitemapPath = path.join(PROJECT_ROOT, 'public/sitemap.xml');

if (!fs.existsSync(sitemapPath)) {
  console.error('Sitemap file not found.');
  process.exit(1);
}

const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
const urlRegex = /<loc>(https:\/\/nutritioncolours\.com\/([^<]*))<\/loc>/g;
let match;
const urls = [];

while ((match = urlRegex.exec(sitemapContent)) !== null) {
  urls.push(match[2]);
}

console.log(`Auditing ${urls.length} URLs extracted from sitemap...`);

const results = urls.map(route => {
  const cleanRoute = route.replace(/^\/|\/$/g, '');
  if (cleanRoute === '') {
    return { route: '/', depth: 0 };
  }
  
  const parts = cleanRoute.split('/');
  // Root page is depth 0.
  // /about, /knowledge, /blogs, etc. are depth 1.
  // /article/slug, /recipe/slug, /clinic/slug are depth 2.
  // /clinic/country/city is depth 3.
  const depth = parts.length;
  return { route: '/' + cleanRoute, depth };
});

const deepPages = results.filter(r => r.depth > 3);
console.log(`\nCrawl Depth Verification:`);
console.log(`- Total URLs: ${results.length}`);
console.log(`- Max depth found: ${Math.max(...results.map(r => r.depth))}`);
console.log(`- URLs deeper than 3 clicks: ${deepPages.length}`);

if (deepPages.length > 0) {
  console.log('WARNING: The following pages exceed crawl depth > 3:');
  deepPages.forEach(p => console.log(`  - ${p.route} (Depth: ${p.depth})`));
} else {
  console.log('✅ PASS: All pages are within 3 clicks from the root node!');
}

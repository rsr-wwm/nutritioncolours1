import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CHROME_PATH = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PROJECT_ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.join(PROJECT_ROOT, 'dist');
const MAX_CLINICS = process.env.PRERENDER_MAX_CLINICS !== undefined ? Number(process.env.PRERENDER_MAX_CLINICS) : 50;
const CONCURRENCY = process.env.PRERENDER_CONCURRENCY ? Number(process.env.PRERENDER_CONCURRENCY) : 5;

// Helpers to extract IDs
function extractIdsFromVar(content, varName) {
  const idx = content.indexOf(varName);
  if (idx === -1) return [];
  const sub = content.slice(idx);
  const endIdx = sub.indexOf('];');
  const block = endIdx === -1 ? sub : sub.slice(0, endIdx);
  const matches = [...block.matchAll(/["']?id["']?\s*:\s*['"]([^'"]+)['"]/g)];
  return [...new Set(matches.map(m => m[1]))];
}

function slugify(text) {
  return text.toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\s+/g, '-')
    .replace(/\//g, '-')
    .replace(/[().',]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

console.log('Extracting routes for pre-rendering...');

const constantsContent = fs.readFileSync(path.join(PROJECT_ROOT, 'constants.tsx'), 'utf-8');
const topicsContent = fs.readFileSync(path.join(PROJECT_ROOT, 'topics.ts'), 'utf-8');
const clinicalContent = fs.readFileSync(path.join(PROJECT_ROOT, 'clinical_databases.ts'), 'utf-8');
const recipesContent = fs.readFileSync(path.join(PROJECT_ROOT, 'recipes_database.ts'), 'utf-8');
const localLocationsContent = fs.readFileSync(path.join(PROJECT_ROOT, 'components/locationsData.ts'), 'utf-8');
const intlLocationsContent = fs.readFileSync(path.join(PROJECT_ROOT, 'components/internationalData.ts'), 'utf-8');

const articles = extractIdsFromVar(constantsContent, 'export const BLOG_ARTICLES');
const recipes = extractIdsFromVar(recipesContent, 'export const RECIPES');
const herbs = extractIdsFromVar(clinicalContent, 'export const HERBS_SPICES_DATA');
const conditions = extractIdsFromVar(clinicalContent, 'export const MEDICAL_CONDITIONS_DATA');
const topics = extractIdsFromVar(topicsContent, 'export const TOPICS');

// Parse clinics
const localClinicIds = extractIdsFromVar(localLocationsContent, 'export const LOCATIONS_DATA');

// For international clinics, get the country id and city slug
const intlClinicPaths = [];
const countryMatches = [...intlLocationsContent.matchAll(/["']?id["']?\s*:\s*['"]([^'"]+)['"]/g)];
const cityMatches = [...intlLocationsContent.matchAll(/["']?city["']?\s*:\s*['"]([^'"]+)['"]/g)];
for (let i = 0; i < Math.min(countryMatches.length, cityMatches.length); i++) {
  const countryId = countryMatches[i][1];
  const citySlug = slugify(cityMatches[i][1]);
  if (countryId && citySlug) {
    intlClinicPaths.push(`${countryId}/${citySlug}`);
  }
}

// Build the complete list of target routes
const routes = [
  '', // Root / home
  'about', 'knowledge', 'blogs', 'vegan', 'recipes', 'team',
  'history', 'testimonials', 'contact', 'maintenance', 'tools', 'connect',
  'privacy', 'terms', 'editorial-policy', 'evidence-approach', 'clinics', 'sitemap',
  'plans/metabolic-mastery', 'plans/cellular-resurrection'
];

// Add dynamic routes
articles.forEach(id => routes.push(`article/${id}`));
recipes.forEach(id => routes.push(`recipe/${id}`));
herbs.forEach(id => routes.push(`herb/${id}`));
conditions.forEach(id => routes.push(`condition/${id}`));
topics.forEach(id => routes.push(`topic/${id}`));

// Pre-render all local and international clinic routes listed in the sitemap.
localClinicIds.slice(0, MAX_CLINICS).forEach(id => routes.push(`clinic/${id}`));
intlClinicPaths.slice(0, MAX_CLINICS).forEach(p => routes.push(`clinic/${p}`));

console.log(`Prepared ${routes.length} total routes for static prerendering (Capped clinics count: ${MAX_CLINICS}).`);

// Start preview server
let previewProcess;
let baseUrl = 'http://localhost:4173';

function cleanUp() {
  if (previewProcess) {
    console.log('Stopping preview server...');
    previewProcess.kill();
    previewProcess = null;
  }
}

process.on('SIGINT', () => { cleanUp(); process.exit(130); });
process.on('SIGTERM', () => { cleanUp(); process.exit(143); });
process.on('exit', () => { cleanUp(); });

function startPreviewServer() {
  return new Promise((resolve, reject) => {
    console.log('Starting Vite preview server...');
    previewProcess = spawn('npm', ['run', 'preview'], {
      cwd: PROJECT_ROOT,
      shell: false
    });

    let settled = false;
    const finish = (fn) => {
      if (settled) return;
      settled = true;
      fn();
    };

    previewProcess.stdout.on('data', (data) => {
      const output = data.toString();
      const match = output.match(/http:\/\/localhost:\d+/);
      if (match) {
        baseUrl = match[0];
        console.log(`Server detected at ${baseUrl}`);
        finish(resolve);
      }
    });

    previewProcess.stderr.on('data', (data) => {
      process.stderr.write(data);
    });

    previewProcess.on('error', (err) => {
      finish(() => reject(err));
    });

    previewProcess.on('exit', (code) => {
      if (!settled && code !== 0) {
        finish(() => reject(new Error(`Preview server exited early with code ${code}`)));
      }
    });

    // Safe fallback timeout
    setTimeout(() => {
      finish(resolve);
    }, 5000);
  });
}

async function prerender() {
  await startPreviewServer();

  console.log('Launching Puppeteer browser...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const failures = [];
  let index = 0;

  async function worker(workerId) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    while (index < routes.length) {
      const route = routes[index++];
      if (route === undefined) break;

      const url = `${baseUrl}/${route}`;
      console.log(`[Worker ${workerId}] Prerendering (${index}/${routes.length}): ${url}`);

      try {
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
        // Extra sleep to ensure any client-side transitions or font loading complete
        await new Promise(r => setTimeout(r, 600));

        const html = await page.content();

        // Write index.html to target directory in dist/
        const targetDir = route === '' ? DIST_DIR : path.join(DIST_DIR, route);
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }

        fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');
      } catch (err) {
        console.error(`[Worker ${workerId}] Failed to prerender route ${route}:`, err.message);
        failures.push({ route, error: err.message });
      }
    }

    await page.close();
  }

  console.log(`Spawning ${CONCURRENCY} concurrent crawling workers...`);
  const workers = Array.from({ length: CONCURRENCY }, (_, i) => worker(i + 1));
  await Promise.all(workers);

  console.log('Closing Puppeteer browser...');
  await browser.close();

  cleanUp();

  if (failures.length > 0) {
    throw new Error(`Prerender failed for ${failures.length} route(s): ${failures.map(f => f.route || '/').join(', ')}`);
  }

  console.log('Prerendering successfully finished!');
}

prerender().catch(err => {
  console.error('Prerender error:', err);
  cleanUp();
  process.exitCode = 1;
});

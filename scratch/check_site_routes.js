import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const CONSTANTS_PATH = '/Users/apple/Downloads/nutritioncolours/constants.tsx';
const TOPICS_PATH = '/Users/apple/Downloads/nutritioncolours/topics.ts';
const CLINICAL_PATH = '/Users/apple/Downloads/nutritioncolours/clinical_databases.ts';
const RECIPES_PATH = '/Users/apple/Downloads/nutritioncolours/recipes_database.ts';
const APP_PATH = '/Users/apple/Downloads/nutritioncolours/App.tsx';

// 1. Helper to extract IDs
function extractIdsFromVar(content, varName) {
  const idx = content.indexOf(varName);
  if (idx === -1) return [];
  const sub = content.slice(idx);
  const endIdx = sub.indexOf('];');
  if (endIdx === -1) return [];
  const block = sub.slice(0, endIdx);
  const matches = [...block.matchAll(/id:\s*['"]([^'"]+)['"]/g)];
  return [...new Set(matches.map(m => m[1]))];
}

console.log('Extracting routes and IDs...');
const constantsContent = fs.readFileSync(CONSTANTS_PATH, 'utf-8');
const topicsContent = fs.readFileSync(TOPICS_PATH, 'utf-8');
const clinicalContent = fs.readFileSync(CLINICAL_PATH, 'utf-8');
const recipesContent = fs.readFileSync(RECIPES_PATH, 'utf-8');

const articles = extractIdsFromVar(constantsContent, 'export const BLOG_ARTICLES');
const recipes = extractIdsFromVar(recipesContent, 'export const RECIPES');
const herbs = extractIdsFromVar(clinicalContent, 'export const HERBS_SPICES_DATA');
const conditions = extractIdsFromVar(clinicalContent, 'export const MEDICAL_CONDITIONS_DATA');
const topics = extractIdsFromVar(topicsContent, 'export const TOPICS');

console.log(`Extracted:
- ${articles.length} Blog Articles
- ${recipes.length} Recipes
- ${herbs.length} Herbs
- ${conditions.length} Conditions
- ${topics.length} Topics
`);

// 2. Define routes to check
const staticRoutes = [
  'home', 'about', 'knowledge', 'blogs', 'vegan', 'recipes', 'about', 'team',
  'history', 'testimonials', 'contact', 'maintenance', 'tools', 'connect',
  'privacy', 'terms', 'editorial-policy', 'evidence-approach', 'clinics', 'sitemap'
];

const routesToCheck = [];

// Add static routes
for (const route of staticRoutes) {
  routesToCheck.push({ path: route === 'home' ? '' : route, type: 'static' });
}

// Add a sample of dynamic routes to be thorough but fast
articles.slice(0, 3).forEach(id => routesToCheck.push({ path: `article/${id}`, type: 'article' }));
recipes.slice(0, 3).forEach(id => routesToCheck.push({ path: `recipe/${id}`, type: 'recipe' }));
herbs.slice(0, 3).forEach(id => routesToCheck.push({ path: `herb/${id}`, type: 'herb' }));
conditions.slice(0, 3).forEach(id => routesToCheck.push({ path: `condition/${id}`, type: 'condition' }));
topics.slice(0, 3).forEach(id => routesToCheck.push({ path: `topic/${id}`, type: 'topic' }));

// A few sample clinic paths from locations
routesToCheck.push({ path: 'clinic/united-states/new-york-city', type: 'clinic' });
routesToCheck.push({ path: 'clinic/united-kingdom/london', type: 'clinic' });
routesToCheck.push({ path: 'plans/metabolic-mastery', type: 'plan' });
routesToCheck.push({ path: 'plans/cellular-resurrection', type: 'plan' });

console.log(`Prepared ${routesToCheck.length} total routes to verify.`);

// Create screenshot directory
const screenshotDir = '/Users/apple/Downloads/nutritioncolours/scratch/screenshots';
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

// 3. Start preview server
let previewProcess;
let baseUrl = '';

function startPreviewServer() {
  return new Promise((resolve, reject) => {
    console.log('Starting Vite preview server...');
    previewProcess = spawn('npm', ['run', 'preview'], {
      cwd: '/Users/apple/Downloads/nutritioncolours',
      shell: true
    });

    let stdoutData = '';
    previewProcess.stdout.on('data', (data) => {
      const output = data.toString();
      stdoutData += output;
      console.log(`[Preview Server] ${output.trim()}`);
      
      const match = output.match(/http:\/\/localhost:\d+/);
      if (match) {
        baseUrl = match[0];
        console.log(`Server is running at ${baseUrl}`);
        resolve();
      }
    });

    previewProcess.stderr.on('data', (data) => {
      console.error(`[Preview Server Error] ${data.toString()}`);
    });

    previewProcess.on('close', (code) => {
      console.log(`Preview server closed with code ${code}`);
      if (!baseUrl && code !== 0) reject(new Error('Server closed before URL was detected'));
    });

    // Timeout fallback if URL not matched in 8 seconds
    setTimeout(() => {
      if (baseUrl) return;
      // Default fallback
      baseUrl = 'http://localhost:4173';
      console.log(`Timeout waiting for URL. Using default ${baseUrl}`);
      resolve();
    }, 8000);
  });
}

async function checkRoutes() {
  await startPreviewServer();

  console.log('Launching headless browser...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const summary = [];
  let totalErrors = 0;

  for (const { path: routePath, type } of routesToCheck) {
    const url = `${baseUrl}/${routePath}`;
    console.log(`\nChecking [${type.toUpperCase()}] ${url} ...`);

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    const pageErrors = [];
    const consoleErrors = [];

    page.on('pageerror', (err) => {
      pageErrors.push(err.toString());
      console.error(`  [Uncaught Exception] ${err.toString()}`);
    });

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
        console.error(`  [Console Error] ${msg.text()}`);
      }
    });

    try {
      // Go to page
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });

      // Wait a short moment to ensure JS executes and renders
      await new Promise(r => setTimeout(r, 1000));

      // Verify that #root is not empty and no major error overlay is visible
      const bodyContent = await page.evaluate(() => document.body.innerText);
      const isBlank = bodyContent.trim().length < 50;

      // Check if SVG icons are present on the herb/condition pages using dynamic selectors
      let iconsCheck = 'N/A';
      if (type === 'herb') {
        const hasLeafSvg = await page.evaluate(() => {
          const leafSvg = document.querySelector('svg.lucide-leaf') || document.querySelector('svg');
          return !!leafSvg;
        });
        iconsCheck = hasLeafSvg ? 'IconLeaf SVG Found' : 'IconLeaf SVG NOT Found';
      } else if (type === 'condition') {
        const hasFlaskSvg = await page.evaluate(() => {
          const flaskSvg = document.querySelector('svg.lucide-flask') || document.querySelector('svg');
          return !!flaskSvg;
        });
        iconsCheck = hasFlaskSvg ? 'IconFlask SVG Found' : 'IconFlask SVG NOT Found';
      }

      const status = {
        path: routePath,
        type,
        ok: pageErrors.length === 0 && !isBlank,
        isBlank,
        pageErrors,
        consoleErrors,
        iconsCheck
      };

      if (!status.ok) {
        totalErrors++;
      }

      // Take a screenshot of specific pages
      if (['', 'about', 'team', 'recipes', 'clinics'].includes(routePath) || routePath.startsWith('herb/') || routePath.startsWith('condition/')) {
        const safeName = routePath === '' ? 'home' : routePath.replace(/\//g, '_');
        await page.screenshot({ path: `${screenshotDir}/${safeName}.png` });
        console.log(`  Screenshot saved: scratch/screenshots/${safeName}.png`);
      }

      summary.push(status);
      console.log(`  Status: ${status.ok ? '✅ OK' : '❌ ERROR'} | Blank: ${isBlank} | Icon Check: ${iconsCheck}`);

    } catch (err) {
      console.error(`  Failed to load page: ${err.message}`);
      summary.push({
        path: routePath,
        type,
        ok: false,
        isBlank: true,
        pageErrors: [err.message],
        consoleErrors: [],
        iconsCheck: 'N/A'
      });
      totalErrors++;
    } finally {
      await page.close();
    }
  }

  console.log('\nClosing browser...');
  await browser.close();

  console.log('Terminating preview server...');
  if (previewProcess) {
    previewProcess.kill();
  }

  console.log('\n========================================');
  console.log('VERIFICATION SUMMARY');
  console.log('========================================');
  let okCount = 0;
  for (const item of summary) {
    const iconStr = item.iconsCheck !== 'N/A' ? ` (${item.iconsCheck})` : '';
    const displayPath = item.path === '' ? '/' : `/${item.path}`;
    if (item.ok) {
      okCount++;
      console.log(`✅ [${item.type.toUpperCase()}] ${displayPath}${iconStr}`);
    } else {
      console.log(`❌ [${item.type.toUpperCase()}] ${displayPath} - Errors: ${item.pageErrors.join(', ') || 'Blank Page'}${iconStr}`);
    }
  }

  console.log(`\nPassed: ${okCount} / ${summary.length}`);
  console.log(`Failed: ${totalErrors}`);

  // Save summary to JSON
  fs.writeFileSync(
    '/Users/apple/Downloads/nutritioncolours/scratch/check_results.json',
    JSON.stringify(summary, null, 2)
  );
  console.log('Results saved to scratch/check_results.json');
}

checkRoutes().catch(err => {
  console.error('Fatal error running verification:', err);
  if (previewProcess) previewProcess.kill();
});

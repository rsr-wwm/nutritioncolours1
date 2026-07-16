import fs from 'fs';
import path from 'path';

// Import data databases dynamically for execution environment
import { LOCATIONS_DATA } from '../src/lib/locationsData';
import { INTERNATIONAL_COUNTRIES } from '../src/lib/internationalData';
import { TOPICS } from '../src/data/topics';
import { RECIPES } from '../src/data/recipes';
import { HERBS_SPICES_DATA } from '../src/lib/clinical_databases';
import { getTaxonomyDetails } from '../src/lib/seo/taxonomyEngine';

const SITE_URL = 'https://nutritioncolours.com';
const PUBLIC_DIR = path.resolve(process.cwd(), 'public');

// Core Static URLs
const CORE_ROUTES = [
  '/',
  '/about',
  '/team',
  '/testimonials',
  '/contact',
  '/recipes',
  '/clinics',
  '/sitemap',
  '/legal/terms',
  '/legal/privacy',
  '/legal/editorial-policy'
];

// Parse frontmatter from markdown files
function parseFrontmatter(content: string) {
  const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
  if (!match) return { data: {} as any };
  const yamlStr = match[1];
  const data = {} as any;
  yamlStr.split('\n').forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx > 0) {
      const key = line.substring(0, colonIdx).trim();
      let val = line.substring(colonIdx + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.substring(1, val.length - 1);
      }
      data[key] = val;
    }
  });
  return { data };
}

// Find all .md files in the content collection folder
function walkKnowledge(dir: string): string[] {
  let results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkKnowledge(filePath));
    } else {
      if (filePath.endsWith('.md')) {
        results.push(filePath);
      }
    }
  });
  return results;
}

async function generateSitemaps() {
  console.log('[Sitemap Generator] Initializing SEO Site Mapping...');
  
  const allUrlsSet = new Set<string>();

  // 1. Collect Core URLs
  CORE_ROUTES.forEach(route => {
    allUrlsSet.add(`${SITE_URL}${route === '/' ? '' : route}`);
  });

  // 1.5. Collect Knowledge Base hierarchical URLs
  const KNOWLEDGE_DIR = path.resolve(process.cwd(), 'src/content/knowledge');
  if (fs.existsSync(KNOWLEDGE_DIR)) {
    const mdFiles = walkKnowledge(KNOWLEDGE_DIR);
    const uniquePillars = new Set<string>();
    const uniqueCats = new Set<string>();
    const uniqueSubCats = new Set<string>();

    mdFiles.forEach(file => {
      const relPath = path.relative(KNOWLEDGE_DIR, file);
      const fileContent = fs.readFileSync(file, 'utf8');
      const { data } = parseFrontmatter(fileContent);
      const entryId = relPath.replace(/\.md$/, ''); // remove extension

      const entry = {
        id: entryId,
        data: {
          title: data.title || path.basename(file, '.md'),
          category: data.category || '',
          subCategory: data.subCategory || ''
        }
      };

      const tax = getTaxonomyDetails(entry);
      if (tax) {
        // Article page
        allUrlsSet.add(`${SITE_URL}${tax.canonicalUrl}`);

        // Track categories for parent hubs
        uniquePillars.add(tax.mainCategory.slug);
        uniqueCats.add(`${tax.mainCategory.slug}/${tax.category.slug}`);
        uniqueSubCats.add(`${tax.mainCategory.slug}/${tax.category.slug}/${tax.subCategory.slug}`);
      }
    });

    // Add main landing page
    allUrlsSet.add(`${SITE_URL}/knowledge`);

    // Add Level 1 Main Category pages
    uniquePillars.forEach(p => {
      allUrlsSet.add(`${SITE_URL}/knowledge/${p}`);
    });

    // Add Level 2 Category pages
    uniqueCats.forEach(c => {
      allUrlsSet.add(`${SITE_URL}/knowledge/${c}`);
    });

    // Add Level 3 Sub-Category pages
    uniqueSubCats.forEach(sc => {
      allUrlsSet.add(`${SITE_URL}/knowledge/${sc}`);
    });
  }

  // 2. Collect Clinical Topics
  TOPICS.forEach(topic => {
    allUrlsSet.add(`${SITE_URL}/topic/${topic.id}`);
  });

  // 3. Collect Herbs & Spices
  HERBS_SPICES_DATA.forEach(herb => {
    allUrlsSet.add(`${SITE_URL}/herb/${herb.id}`);
  });

  // 4. Collect Recipes
  RECIPES.forEach(recipe => {
    allUrlsSet.add(`${SITE_URL}/recipe/${recipe.id}`);
  });

  // 5. Collect India Outreach Clinics (1,036 cities)
  LOCATIONS_DATA.forEach(loc => {
    const slug = loc.city.toLowerCase().replace(/\s+/g, '-');
    allUrlsSet.add(`${SITE_URL}/clinic/${slug}`);
  });

  // 6. Collect International Outreach Clinics (641 cities)
  INTERNATIONAL_COUNTRIES.forEach(loc => {
    const slug = loc.city.toLowerCase().replace(/\s+/g, '-');
    allUrlsSet.add(`${SITE_URL}/clinic/${slug}`);
  });

  // 7. Collect 30 Pre-rendered Disease-City Combinations
  const targetCities = ['mumbai', 'delhi', 'bangalore', 'london', 'new-york-city', 'dubai'];
  const targetDiseases = ['diabetes-reversal', 'pcos-balance', 'fatty-liver-reversal', 'thyroid-optimization', 'hypertension-management'];
  targetCities.forEach(city => {
    targetDiseases.forEach(disease => {
      allUrlsSet.add(`${SITE_URL}/clinic/${city}/${disease}`);
    });
  });

  const allUrls = Array.from(allUrlsSet);
  const totalUrls = allUrls.length;
  console.log(`[Sitemap Generator] Collected total of ${totalUrls} target URLs.`);

  // DYNAMIC CHUNKING LOGIC (Self-Scaling)
  // Default to 5,000 URLs per sitemap for optimal Googlebot performance.
  // Scale up only for very large sites.
  let maxUrlsPerSitemap = 5000; // Default limit
  if (totalUrls > 50000) {
    maxUrlsPerSitemap = 10000; // For massive sites > 50k URLs
  } else if (totalUrls > 20000) {
    maxUrlsPerSitemap = 5000; // Keep at 5k for mid‑size sites
  }

  console.log(`[Sitemap Generator] Selected dynamic limit: ${maxUrlsPerSitemap} URLs per file.`);

  // Clean existing sharded sitemaps in public/ folder
  const files = fs.readdirSync(PUBLIC_DIR);
  files.forEach(file => {
    if (file.startsWith('sitemap-locations-') && file.endsWith('.xml')) {
      fs.unlinkSync(path.join(PUBLIC_DIR, file));
    }
  });

  const sitemapFiles: string[] = [];

  // Group locations into chunks
  const coreUrls = allUrls.filter(url => !url.includes('/clinic/'));
  const locationUrls = allUrls.filter(url => url.includes('/clinic/'));

  // Write Core Sitemap
  const coreXml = buildSitemapXml(coreUrls);
  const coreFilename = 'sitemap-core.xml';
  fs.writeFileSync(path.join(PUBLIC_DIR, coreFilename), coreXml);
  sitemapFiles.push(coreFilename);

  // Write Location Sitemaps
  let chunkIndex = 1;
  for (let i = 0; i < locationUrls.length; i += maxUrlsPerSitemap) {
    const chunk = locationUrls.slice(i, i + maxUrlsPerSitemap);
    const locationXml = buildSitemapXml(chunk);
    const locationFilename = `sitemap-locations-${chunkIndex}.xml`;
    fs.writeFileSync(path.join(PUBLIC_DIR, locationFilename), locationXml);
    sitemapFiles.push(locationFilename);
    chunkIndex++;
  }

  // Write Main Sitemap Index File (sitemap.xml)
  const indexXml = buildSitemapIndexXml(sitemapFiles);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), indexXml);

  console.log(`[Sitemap Generator] SUCCESS! Generated sitemap index + ${sitemapFiles.length} sharded files.`);
  
  // Submit all URLs to IndexNow if explicitly enabled
  if (process.env.INDEXNOW_PING === 'true') {
    await pingIndexNow(allUrls);
  } else {
    console.log('[IndexNow] Skipping search engine ping (requires live deployment. Run with INDEXNOW_PING=true to force).');
  }
}

async function pingIndexNow(urls: string[]) {
  const host = 'nutritioncolours.com';
  const key = '8d228f4de13a48e78bc9280d0d8beeb7';
  const keyLocation = `https://${host}/${key}.txt`;
  
  console.log(`[IndexNow] Pinging search engines with ${urls.length} URLs...`);
  
  const payload = {
    host,
    key,
    keyLocation,
    urlList: urls
  };
  
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });
    
    if (response.ok) {
      console.log('[IndexNow] Ping succeeded! Search engines notified.');
    } else {
      console.error(`[IndexNow] Ping failed: ${response.status} ${response.statusText}`);
    }
  } catch (err) {
    console.error('[IndexNow] Ping network error:', err);
  }
}

function buildSitemapXml(urls: string[]): string {
  const dateStr = new Date().toISOString().split('T')[0];
  const urlNodes = urls
    .map(url => {
      // Tiered priority assignment
      let priority = '0.8';
      let changefreq = 'weekly';
      
      const parsedUrl = new URL(url);
      const path = parsedUrl.pathname;

      if (path === '/' || path === '/about' || path === '/team' || path === '/recipes' || path === '/clinics') {
        priority = '1.0';
        changefreq = 'daily';
      } else if (path.includes('/clinic/')) {
        // High traffic target cities vs secondary locations
        const targetCities = ['mumbai', 'delhi', 'bangalore', 'london', 'new-york-city', 'dubai'];
        const isTargetCity = targetCities.some(city => path.includes(`/clinic/${city}`));
        priority = isTargetCity ? '0.8' : '0.5';
        changefreq = 'weekly';
      } else {
        // topics, herbs, recipes, etc.
        priority = '0.8';
        changefreq = 'weekly';
      }

      return `  <url>
    <loc>${url}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>`;
}

function buildSitemapIndexXml(filenames: string[]): string {
  const dateStr = new Date().toISOString().split('T')[0];
  const sitemapNodes = filenames
    .map(file => {
      return `  <sitemap>
    <loc>${SITE_URL}/${file}</loc>
    <lastmod>${dateStr}</lastmod>
  </sitemap>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapNodes}
</sitemapindex>`;
}

generateSitemaps().catch(err => {
  console.error('[Sitemap Generator] Fatal Error:', err);
  process.exit(1);
});

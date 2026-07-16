// scripts/ping-indexnow.ts
import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const HOST = 'nutritioncolours.com';
const KEY = '8d228f4de13a48e78bc9280d0d8beeb7';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function main() {
  console.log('=== STARTING POST-DEPLOYMENT INDEXNOW PING ===');

  if (!fs.existsSync(DIST_DIR)) {
    console.error('[Error] dist/ directory not found. Please run "npm run build" first.');
    process.exit(1);
  }

  // Find all XML sitemap files in dist/
  const files = fs.readdirSync(DIST_DIR).filter(f => f.startsWith('sitemap-') && f.endsWith('.xml'));
  
  if (files.length === 0) {
    console.log('[Info] No sharded sitemap files found. Checking for main sitemap.xml...');
    if (fs.existsSync(path.join(DIST_DIR, 'sitemap.xml'))) {
      files.push('sitemap.xml');
    } else {
      console.error('[Error] No sitemaps found to extract URLs from.');
      process.exit(1);
    }
  }

  const allUrls: string[] = [];

  for (const file of files) {
    const filePath = path.join(DIST_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract matches using regex
    const matches = content.matchAll(/<loc>(.*?)<\/loc>/g);
    for (const match of matches) {
      const url = match[1].trim();
      // Skip main sitemap index files if they reference other sitemaps
      if (url.endsWith('.xml')) continue;
      allUrls.push(url);
    }
  }

  const uniqueUrls = Array.from(new Set(allUrls));
  
  if (uniqueUrls.length === 0) {
    console.log('[Warning] No URLs found in sitemaps.');
    return;
  }

  console.log(`[IndexNow] Found ${uniqueUrls.length} unique URLs. Pinging search engines...`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: uniqueUrls
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
      console.log('[IndexNow] Ping succeeded! Search engines notified successfully.');
    } else {
      const responseText = await response.text();
      console.error(`[IndexNow] Ping failed: ${response.status} ${response.statusText}`);
      console.error(`[IndexNow] Error details: ${responseText}`);
      console.log('\nNOTE: If you got a 403 Forbidden, this is expected if the built site is not yet deployed.');
      console.log('IndexNow verifies the key by visiting the live URL. Ensure your FTP upload has finished first.');
    }
  } catch (err) {
    console.error('[IndexNow] Ping network error:', err);
  }
}

main().catch(console.error);

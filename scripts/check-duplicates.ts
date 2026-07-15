import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.resolve(process.cwd(), 'public');

function checkDuplicates() {
  console.log('[Duplicate Sitemap Guard] Scanning public sitemaps for duplicate URLs...');

  const sitemapFiles = fs.readdirSync(PUBLIC_DIR).filter(file => {
    return file.startsWith('sitemap') && file.endsWith('.xml');
  });

  const urlMap: Record<string, string[]> = {};
  let totalDuplicates = 0;

  sitemapFiles.forEach(file => {
    const filePath = path.join(PUBLIC_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Quick regex scan for loc URLs
    const locRegex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
    let match;
    
    while ((match = locRegex.exec(content)) !== null) {
      const url = match[1];
      if (!urlMap[url]) {
        urlMap[url] = [];
      }
      urlMap[url].push(file);
    }
  });

  for (const [url, files] of Object.entries(urlMap)) {
    if (files.length > 1) {
      console.error(`[ERROR] Duplicate URL found: ${url} (in files: ${files.join(', ')})`);
      totalDuplicates++;
    }
  }

  if (totalDuplicates > 0) {
    console.error(`[Guard Failed] Found ${totalDuplicates} duplicate URL(s) across sitemaps.`);
    process.exit(1);
  }

  console.log('[Guard Success] No duplicate URLs found across sitemaps.');
  process.exit(0);
}

checkDuplicates();

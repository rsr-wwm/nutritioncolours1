import { readFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';

const DIST = 'dist';
const files = execSync(`find "${DIST}" -name index.html`, { encoding: 'utf8' }).split('\n').filter(Boolean);

let brokenLinks = 0;
let checkedLinks = 0;
let checkedFiles = 0;
let uiIssues = 0;

const brokenSet = new Set();
const missingImages = new Set();

console.log(`Checking ${files.length} pages for broken links and UI issues...`);

for (const f of files) {
  const html = readFileSync(f, 'utf8');
  checkedFiles++;
  
  // 1. Check Links
  const hrefs = [...html.matchAll(/<a[^>]+href="([^"]+)"/g)].map(m => m[1]);
  for (let href of hrefs) {
    // Ignore external links, mailto, tel, hashes
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
      continue;
    }
    
    // Normalize href
    const url = new URL(href, 'http://localhost');
    let localPath = url.pathname;
    
    if (localPath.startsWith('/')) {
      localPath = localPath.replace(/\/$/, '');
      if (localPath === '') localPath = '/';
      
      let targetPath;
      if (localPath === '/') {
        targetPath = path.join(DIST, 'index.html');
      } else {
        // Most Astro routes generate directories with index.html
        targetPath = path.join(DIST, localPath, 'index.html');
        // also check if it might be an exact file (e.g., .pdf, .json, .xml)
        const exactPath = path.join(DIST, localPath);
        if (!existsSync(targetPath) && !existsSync(exactPath)) {
            // Also check .html explicitly just in case buildFormat was set to 'file'
            const htmlPath = path.join(DIST, localPath + '.html');
            if (!existsSync(htmlPath)) {
                brokenSet.add(`${localPath} (found in ${f.replace(DIST + '/', '')})`);
                brokenLinks++;
            }
        }
      }
    }
    checkedLinks++;
  }

  // 2. Check UI issues (missing images, undefined text)
  const srcs = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m => m[1]);
  for (const src of srcs) {
    if (src.startsWith('http') || src.startsWith('data:')) continue;
    const url = new URL(src, 'http://localhost');
    const localPath = url.pathname;
    if (localPath.startsWith('/')) {
        const targetPath = path.join(DIST, localPath);
        if (!existsSync(targetPath)) {
            missingImages.add(`${localPath} (found in ${f.replace(DIST + '/', '')})`);
            uiIssues++;
        }
    }
  }

  // Check for literally "undefined" in text or hrefs
  if (html.includes('>undefined<') || html.includes('="undefined"')) {
      console.log(`[UI ISSUE] Literal "undefined" string found in: ${f.replace(DIST + '/', '')}`);
      uiIssues++;
  }
}

console.log(`\nChecked ${checkedFiles} files, ${checkedLinks} internal links.`);
console.log(`Found ${brokenLinks} broken links (unique instances: ${brokenSet.size})`);
if (brokenSet.size > 0) {
    console.log('\nSample broken links:');
    let i = 0;
    for (const b of brokenSet) {
        console.log(`- ${b}`);
        if (++i >= 20) break;
    }
}

console.log(`\nFound ${uiIssues} UI issues (missing images/undefined text).`);
if (missingImages.size > 0) {
    console.log('\nSample missing images:');
    let i = 0;
    for (const m of missingImages) {
        console.log(`- ${m}`);
        if (++i >= 20) break;
    }
}

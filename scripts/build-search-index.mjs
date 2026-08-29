import fs from 'node:fs';
import path from 'node:path';
import { createIndex, close } from 'pagefind';

const dist = path.resolve(process.argv[2] || 'dist');
const htmlFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'pagefind') walk(full);
    else if (entry.isFile() && entry.name.endsWith('.html') && entry.name !== '404.html') htmlFiles.push(full);
  }
}
function robots(html) {
  const tag = (html.match(/<meta\b[^>]*name=["']robots["'][^>]*>/i) || html.match(/<meta\b[^>]*content=["'][^"']*["'][^>]*name=["']robots["'][^>]*>/i))?.[0] || '';
  return tag.match(/content=["']([^"']*)["']/i)?.[1] || '';
}

walk(dist);
const { index, errors } = await createIndex({ forceLanguage: 'en' });
if (!index || errors.length) {
  errors.forEach((error) => console.error(error));
  process.exit(1);
}
let added = 0;
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  if (/\bnoindex\b/i.test(robots(content))) continue;
  const sourcePath = path.relative(dist, file).split(path.sep).join('/');
  const result = await index.addHTMLFile({ sourcePath, content });
  if (result.errors.length) result.errors.forEach((error) => console.error(`${sourcePath}: ${error}`));
  else added++;
}
const outputPath = path.join(dist, 'pagefind');
const manifestPath = path.join(outputPath, 'pagefind-entry.json');
const manifestIsValid = () => {
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    return manifest && typeof manifest === 'object' && manifest.languages && Object.keys(manifest.languages).length > 0;
  } catch {
    return false;
  }
};

let written = await index.writeFiles({ outputPath });
if (written.errors.length) {
  written.errors.forEach((error) => console.error(error));
  await close();
  process.exit(1);
}

// Pagefind can report a successful write while leaving the manifest truncated
// under a concurrent filesystem flush. Retry once, then fail closed.
if (!manifestIsValid()) {
  console.warn('Pagefind manifest was incomplete after the first write; retrying once.');
  written = await index.writeFiles({ outputPath });
  if (written.errors.length) written.errors.forEach((error) => console.error(error));
}
await close();
if (written.errors.length || !manifestIsValid()) {
  console.error(`Pagefind output is invalid or incomplete: ${manifestPath}`);
  process.exit(1);
}
console.log(`Search index generated from ${added} indexable pages; noindex drafts were excluded.`);

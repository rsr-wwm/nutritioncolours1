// generate_placeholders.js
// Node script that walks src/content/knowledge and creates a placeholder markdown file
// for each subdirectory that does not already contain a .md file other than index.md.
// The placeholder includes front‑matter with title, description, and slug.

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../src/content/knowledge');

function kebabCase(str) {
  return str.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
}

function createPlaceholder(dir) {
  const parts = dir.split(path.sep);
  const leafName = parts[parts.length - 1];
  const fileName = kebabCase(leafName) + '.md';
  const filePath = path.join(dir, fileName);
  if (fs.existsSync(filePath)) return; // already exists
  const title = leafName.replace(/_/g, ' ');
  const slug = kebabCase(leafName);
  const content = `---\ntitle: "${title}"\ndescription: "Placeholder description for ${title}."\nslug: "${slug}"\n---\n\n# ${title}\n\n*Content pending*\n`;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Created', filePath);
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  // Skip if this directory already has a leaf markdown (excluding index.md)
  const hasLeaf = entries.some(e => e.isFile() && e.name !== 'index.md' && e.name.endsWith('.md'));
  if (!hasLeaf) {
    // create placeholder for this directory itself
    createPlaceholder(dir);
  }
  // Recurse into subdirectories
  for (const entry of entries) {
    if (entry.isDirectory()) {
      walk(path.join(dir, entry.name));
    }
  }
}

walk(ROOT);
console.log('Placeholder generation complete.');

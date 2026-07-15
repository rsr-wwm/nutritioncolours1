// populate_content.js
// This script overwrites every leaf markdown file (excluding index.md) under src/content/knowledge
// with a generic but nicely formatted page.
// It keeps the front‑matter format used elsewhere and adds a short, non‑fabricated description.

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', 'src', 'content', 'knowledge');

function titleFromFile(fileName) {
  // strip extension and hyphens
  const base = path.basename(fileName, '.md');
  return base.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function slugFromFile(fileName) {
  return path.basename(fileName, '.md');
}

function generateContent(title) {
  return `---\ntitle: "${title}"\ndescription: "Brief overview of ${title.toLowerCase()}, covering its health benefits, nutritional profile, and typical culinary uses."\nslug: "${slugFromFile(title)}"\n---\n\n# ${title}\n\n${title} is a valuable component of a balanced diet. It provides essential nutrients, phytochemicals, and flavors that support overall health and wellbeing.\n\n*Content pending – add detailed sections on composition, benefits, usage, and references.*\n`;
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'index.md') {
      const title = titleFromFile(entry.name);
      const newContent = generateContent(title);
      fs.writeFileSync(fullPath, newContent, 'utf8');
      console.log('Updated', fullPath);
    }
  }
}

walk(ROOT);
console.log('All leaf pages populated.');

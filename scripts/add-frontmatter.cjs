// add-frontmatter.cjs
// Node script (CommonJS) to add Astro front‑matter delimiters to all .astro files under src/pages.
// Works without external dependencies.

const fs = require('fs');
const path = require('path');

// Recursively collect .astro files under a directory
function collectAstroFiles(dir, array) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectAstroFiles(fullPath, array);
    } else if (entry.isFile() && entry.name.endsWith('.astro')) {
      array.push(fullPath);
    }
  });
  return array;
}

const pagesDir = path.join(__dirname, '..', 'src', 'pages');
const astroFiles = collectAstroFiles(pagesDir, []);

astroFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  // Find first non‑empty line
  let firstNonEmptyIdx = lines.findIndex(l => l.trim().length > 0);
  if (firstNonEmptyIdx === -1) return; // empty file
  // Insert opening delimiter if missing
  if (lines[firstNonEmptyIdx].trim() !== '---') {
    lines.splice(firstNonEmptyIdx, 0, '---');
  }
  // Find first markup line (starts with '<' after optional whitespace) – ignore imports and comments
  const markupIdx = lines.findIndex(l => {
    const trimmed = l.trim();
    if (trimmed.startsWith('import') || trimmed.startsWith('//') || trimmed.startsWith('---')) return false;
    return /^<[^!\/?]/.test(trimmed);
  });
  if (markupIdx !== -1) {
    if (lines[markupIdx - 1] && lines[markupIdx - 1].trim() !== '---') {
      lines.splice(markupIdx, 0, '---');
    }
  }
  const newContent = lines.join('\n');
  if (newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
  }
});

console.log('Front‑matter insertion complete.');

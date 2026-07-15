// add-frontmatter.js
// This script adds Astro front‑matter delimiters (---) to all .astro files under src/pages.
// It inserts a top delimiter if missing, and a closing delimiter just before the first markup tag.

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const pattern = path.join(__dirname, '..', 'src', 'pages', '**', '*.astro');
const files = glob.sync(pattern, { nodir: true });

files.forEach((file) => {
  let content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  // Find first non‑empty line
  let firstNonEmptyIdx = lines.findIndex(l => l.trim().length > 0);
  if (firstNonEmptyIdx === -1) return; // empty file
  // Insert opening delimiter if missing
  if (lines[firstNonEmptyIdx].trim() !== '---') {
    lines.splice(firstNonEmptyIdx, 0, '---');
  }
  // Find first markup line (starts with '<' after optional whitespace)
  const markupIdx = lines.findIndex((l, i) => {
    // skip lines that are imports or comments
    const trimmed = l.trim();
    if (trimmed.startsWith('import') || trimmed.startsWith('//') || trimmed.startsWith('---')) return false;
    return /^<[^!\/?]/.test(trimmed);
  });
  if (markupIdx !== -1) {
    // Insert closing delimiter before markup if not already present
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

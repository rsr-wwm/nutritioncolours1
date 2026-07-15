// scripts/generate-missing-tag-report.js
import fs from 'fs';
import path from 'path';
import { sync as globSync } from 'glob';

// Simple stack‑based parser for HTML/JSX tags in .astro files.
// It records opening tags (excluding self‑closing) and matches them with closing tags.
// At the end, any remaining items in the stack are reported as missing closing tags.

function parseFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  const stack = [];
  const missing = [];

  const tagRegex = /<\/?([A-Za-z][A-Za-z0-9-]*)[^>]*?(\/?)>/g;

  lines.forEach((line, idx) => {
    let match;
    while ((match = tagRegex.exec(line)) !== null) {
      const full = match[0];
      const tagName = match[1];
      const isClosing = full.startsWith('</');
      const isSelfClosing = match[2] === '/' || full.endsWith('/>');
      if (isSelfClosing) continue; // ignore self‑closing tags
      if (isClosing) {
        // Pop the most recent matching opening tag
        let popped = null;
        while (stack.length) {
          popped = stack.pop();
          if (popped.tag === tagName) break;
        }
        if (!popped || popped.tag !== tagName) {
          // Unmatched closing tag – ignore for our purpose
        }
      } else {
        // Opening tag – push onto stack with its line number
        stack.push({ tag: tagName, line: idx + 1 });
      }
    }
  });

  // Anything left in the stack is missing a closing tag
  stack.forEach(item => {
    missing.push({ tag: item.tag, line: item.line });
  });

  return missing;
}

function main() {
  const projectRoot = process.cwd();
  const pattern = path.join(projectRoot, 'src', 'pages', '**', '*.astro');
  const files = globSync(pattern);
  const reportLines = [];

  files.forEach(file => {
    const missing = parseFile(file);
    if (missing.length) {
      reportLines.push(`FILE: ${file}`);
      missing.forEach(m => {
        reportLines.push(`  Line ${m.line}: <${m.tag}> missing closing tag`);
      });
    }
  });

  const reportPath = path.join(projectRoot, 'scripts', 'missing-tags.txt');
  fs.writeFileSync(reportPath, reportLines.join('\n'), 'utf8');
  console.log(`Missing tag report written to ${reportPath}`);
}

main();

// scripts/add-astro-frontmatter.js
import fs from 'fs';
import path from 'path';
import { sync as globSync } from 'glob';
import { execSync } from 'child_process';

// Resolve project root
const projectRoot = process.cwd();
// Find all .astro files in src/pages (excluding markdown files that lack JSX/HTML tags)
const pattern = path.join(projectRoot, 'src', 'pages', '**', '*.astro');

const files = globSync(pattern);
files.forEach((file) => {
  const content = fs.readFileSync(file, 'utf8');
  // Skip if file already starts with frontmatter delimiter ---
  if (content.trimStart().startsWith('---')) return;
  // Simple heuristic: if file contains any HTML tag (<div>, <section>, <BaseLayout>, etc.)
  const hasMarkup = /<[^>]+>/s.test(content);
  if (!hasMarkup) return;
  // Add frontmatter with opening and closing delimiters. Adjust as needed.
  const frontmatter = `---\n// TODO: add frontmatter fields\n---\n`;
  const newContent = `${frontmatter}${content}`;
  fs.writeFileSync(file, newContent, 'utf8');
  console.log(`Added frontmatter to ${file}`);
});

// Run Prettier to format all .astro files
try {
  execSync('npx prettier --write "src/**/*.astro"', { stdio: 'inherit' });
} catch (e) {
  console.error('Prettier failed:', e);
}

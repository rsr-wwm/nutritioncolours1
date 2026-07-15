// scripts/replace-colours.cjs
/**
 * Utility script to replace hard‑coded hex colours with CSS variables.
 * Runs in Node.js (CommonJS). It scans the src directory for .tsx and .astro files,
 * replaces known hex values with the corresponding var(--color-*) reference.
 *
 * Add new mappings to the `colourMap` object as needed.
 */
const fs = require('fs');
const path = require('path');

// Directory to scan
const SRC_DIR = path.resolve(__dirname, '..', 'src');

// Map hex colour (lower‑case, without #) -> CSS variable name
const colourMap = {
  '25d366': '--color-primary', // WhatsApp green
  '1877f2': '--color-accent', // Facebook blue
  'fffbeb': '--color-primary', // amber‑50 (approx primary)
  'f0fdf4': '--color-primary', // emerald‑50
  'e2e8f0': '--color-accent', // teal‑200
  'fbbf24': '--color-warning', // amber‑400
  '34d399': '--color-success', // emerald‑500
  '10b981': '--color-success', // emerald‑600
  'ecfdf5': '--color-success', // emerald‑100
  'd1fae5': '--color-success', // emerald‑200
  'a7f3d0': '--color-success', // emerald‑300
  '059669': '--color-success', // emerald‑700
  '022c22': '--color-bg-dark', // dark background
  '064e3b': '--color-bg-dark', // dark background variant
  '0d9488': '--color-info', // teal‑600
  '6b7280': '--color-text', // gray‑500
  '9ca3af': '--color-text', // gray‑400
  '4b5563': '--color-text', // gray‑600
  // add more as you discover them
};

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  for (const [hex, varName] of Object.entries(colourMap)) {
    const regex = new RegExp(`#${hex}\b`, 'gi');
    content = content.replace(regex, `var(${varName})`);
  }
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (/(\.tsx|\.astro)$/.test(entry.name)) {
      replaceInFile(fullPath);
    }
  }
}

walk(SRC_DIR);
console.log('Colour replacement complete.');

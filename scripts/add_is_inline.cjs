// scripts/add_is_inline.cjs
const fs = require('fs');
const path = require('path');

function getAstroFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(f => {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAstroFiles(full));
    } else if (full.endsWith('.astro')) {
      results.push(full);
    }
  });
  return results;
}

const pagesDir = path.join(__dirname, '..', 'src', 'pages');
const files = getAstroFiles(pagesDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Replace <script type="application/ld+json" ...> with is:inline attribute
  const newContent = content.replace(/<script\s+type="application\/ld\+json"/g, '<script type="application/ld+json" is:inline');
  if (newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated', file);
  }
});

// scripts/fix-ai-wrapper.js
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
  const lines = content.split('\n');

  // Find frontmatter boundaries (--- ... ---)
  const startIdx = lines.findIndex(l => l.trim() === '---');
  if (startIdx === -1) return;
  const endIdxRel = lines.slice(startIdx + 1).findIndex(l => l.trim() === '---');
  if (endIdxRel === -1) return;
  const endIdx = startIdx + 1 + endIdxRel;

  const openTag = '<div>';
  const closeTag = '</div>';

  // Remove stray wrapper tags that are not in correct positions
  const filtered = lines.filter((line, idx) => {
    if (line.trim() === openTag) {
      // keep only if it is exactly the line after front-matter end
      return idx === endIdx + 1;
    }
    if (line.trim() === closeTag) {
      // keep only if it is right before the final </BaseLayout>
      const after = lines.slice(idx).some(l => l.includes('</BaseLayout>'));
      return after && lines[idx + 1] && lines[idx + 1].includes('</BaseLayout>');
    }
    return true;
  });

  // Ensure opening wrapper exists right after front‑matter
  if (filtered[endIdx + 1] !== openTag) {
    filtered.splice(endIdx + 1, 0, openTag);
  }

  // Ensure closing wrapper exists just before the last </BaseLayout>
  const lastBaseIdx = filtered.lastIndexOf('</BaseLayout>');
  if (lastBaseIdx !== -1 && filtered[lastBaseIdx - 1] !== closeTag) {
    filtered.splice(lastBaseIdx, 0, closeTag);
  }

  const newContent = filtered.join('\n');
  if (newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Fixed', file);
  }
});

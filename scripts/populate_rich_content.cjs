// scripts/populate_rich_content.cjs
// Script to walk all markdown files in src/content/knowledge and ensure
// they match the Astro schema by injecting appropriate category/subCategory
// derived from their folder path and cleaning up any malformed array fields.

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', 'src', 'content', 'knowledge');

function cleanValue(val) {
  val = val.trim();
  if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
    val = val.slice(1, -1).trim();
  }
  if (val.startsWith('[') && val.endsWith(']')) {
    try {
      const sanitized = val.replace(/\\"/g, '"');
      return JSON.parse(sanitized);
    } catch (e) {
      // fallback if parse fails
    }
  }
  return val;
}

function parseMarkdown(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (match) {
    const yamlStr = match[1];
    const body = match[2];
    const frontmatter = {};
    yamlStr.split('\n').forEach(line => {
      const idx = line.indexOf(':');
      if (idx !== -1) {
        const key = line.slice(0, idx).trim();
        const val = line.slice(idx + 1).trim();
        frontmatter[key] = cleanValue(val);
      }
    });
    return { frontmatter, body };
  }
  return { frontmatter: {}, body: content };
}

function stringifyMarkdown(frontmatter, body) {
  let str = '---\n';
  for (const [key, val] of Object.entries(frontmatter)) {
    if (key === 'lastUpdated') {
      str += `${key}: ${val}\n`;
    } else if (Array.isArray(val)) {
      const items = val.map(item => `"${item.replace(/"/g, '\\"')}"`).join(', ');
      str += `${key}: [${items}]\n`;
    } else if (typeof val === 'string') {
      str += `${key}: "${val.replace(/"/g, '\\"')}"\n`;
    } else {
      str += `${key}: ${val}\n`;
    }
  }
  str += '---\n';
  str += body;
  return str;
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const relPath = path.relative(ROOT, fullPath);
      const parts = relPath.split(path.sep);

      // Category is always the top-level directory under ROOT
      const category = parts[0];
      // Subcategory is the folder name if nested deeper (excluding the file itself)
      let subCategory = undefined;
      if (parts.length > 2) {
        subCategory = parts[1];
      }

      const content = fs.readFileSync(fullPath, 'utf8');
      const { frontmatter, body } = parseMarkdown(content);

      // Fill in required or missing fields
      if (!frontmatter.title) {
        const base = path.basename(entry.name, '.md');
        frontmatter.title = base.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      }
      if (!frontmatter.description) {
        frontmatter.description = `Detailed clinical overview of ${frontmatter.title.toLowerCase()}, covering therapeutic pathways and applications.`;
      }
      
      frontmatter.category = category;
      if (subCategory) {
        frontmatter.subCategory = subCategory;
      } else {
        delete frontmatter.subCategory;
      }

      if (!frontmatter.author) {
        frontmatter.author = 'NutritionColours Editorial Team';
      }
      if (!frontmatter.lastUpdated) {
        frontmatter.lastUpdated = new Date().toISOString().split('T')[0];
      }

      const newContent = stringifyMarkdown(frontmatter, body);
      fs.writeFileSync(fullPath, newContent, 'utf8');
      console.log(`Enriched: ${relPath} (Category: ${category}, SubCategory: ${subCategory || 'None'})`);
    }
  }
}

console.log('Enriching all knowledge base files...');
walk(ROOT);
console.log('All files enriched successfully.');

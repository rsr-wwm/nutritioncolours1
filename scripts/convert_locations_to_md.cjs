// scripts/convert_locations_to_md.cjs
const fs = require('fs');
const path = require('path');

// Utility to slugify strings (lowercase, hyphens, alphanumeric only)
function slugify(str) {
  return String(str)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // remove invalid characters
    .replace(/\s+/g, '-') // collapse whitespace to hyphens
    .replace(/-+/g, '-'); // collapse multiple hyphens
}

// Load locations data (compiled JS). Adjust relative path if needed.
let locations = [];
try {
  const data = require('../src/lib/locationsData.js');
  locations = data.LOCATIONS_DATA || [];
} catch (e) {
  console.error('Failed to load locations data', e);
  process.exit(1);
}

const outputDir = path.resolve(__dirname, '../src/content/locations');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let count = 0;
for (const loc of locations) {
  const citySlug = slugify(loc.city);
  const healthIssues = loc.healthIssues || [];
  for (const issue of healthIssues) {
    const diseaseSlug = slugify(issue);
    const fileSlug = `${citySlug}-${diseaseSlug}`;
    const filePath = path.join(outputDir, `${fileSlug}.md`);
    const title = `${loc.city} – ${issue}`;
    const description = `Discover ${issue} management recommendations for ${loc.city}, ${loc.state}.`;
    const frontMatter = `---\ntitle: "${title}"\ndescription: "${description}"\nslug: "${fileSlug}"\n---\n\n`;
    const jsonLd = `<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "MedicalWebPage",\n  "name": "${title}",\n  "description": "${description}",\n  "url": "https://nutritioncolours.com/locations/${fileSlug}"\n}\n</script>\n\n`;
    const content = frontMatter + jsonLd + `# ${title}\n\n*Page content goes here...*\n`;
    fs.writeFileSync(filePath, content, 'utf8');
    count++;
  }
}

console.log(`Generated ${count} markdown pages under src/content/locations`);

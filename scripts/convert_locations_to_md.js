// scripts/convert_locations_to_md.js
const fs = require('fs');
const path = require('path');

// Utility to slugify strings (lowercase, hyphens, alphanum only)
function slugify(str) {
  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse multiple -
}

// Load locations data (TS compiled to JS after build)
const dataPath = path.resolve(__dirname, '../src/lib/locationsData.js');
let locations = [];
try {
  const mod = require(dataPath);
  locations = mod.LOCATIONS_DATA || [];
} catch (e) {
  console.error('Failed to load locations data from', dataPath, e);
  process.exit(1);
}

const outputDir = path.resolve(__dirname, '../src/content/locations');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let count = 0;
locations.forEach((loc) => {
  const citySlug = slugify(loc.city);
  const healthIssues = loc.healthIssues || [];
  healthIssues.forEach((issue) => {
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
  });
});
console.log(`Generated ${count} location markdown pages under src/content/locations`);

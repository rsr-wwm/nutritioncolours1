// scripts/convert_locations_to_md.ts
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Utility to slugify strings (lowercase, hyphens, alphanumeric only)
function slugify(str: string): string {
  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // remove invalid characters
    .replace(/\s+/g, '-') // collapse whitespace to hyphens
    .replace(/-+/g, '-'); // collapse multiple hyphens
}

// Resolve __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load locations data (TS module should export LOCATIONS_DATA)
let locations: any[] = [];
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const mod = require('../src/lib/locationsData');
  locations = mod.LOCATIONS_DATA || [];
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
  const healthIssues: string[] = loc.healthIssues || [];
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

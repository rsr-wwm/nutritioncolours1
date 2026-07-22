// scripts/generate_location_pages.mjs
// Run: node --import tsx/esm scripts/generate_location_pages.mjs
// Or:  npx tsx scripts/generate_location_pages.mjs
// Dry: npx tsx scripts/generate_location_pages.mjs --dry

import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { LOCATIONS_DATA } from '../src/lib/locationsData.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DRY  = process.argv.includes('--dry');
const SITE = 'https://nutritioncolours.com';

// ── helpers ──────────────────────────────────────────────────────────────────
function slugify(str) {
  return String(str).trim().toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function esc(str) {
  return String(str).replace(/"/g, '\\"').replace(/\n/g, ' ');
}

function getKeywords(loc, disease) {
  const base = [disease, loc.city, loc.state, 'nutrition', 'diet', 'health'];
  if (loc.prevalentCategory)   base.push(loc.prevalentCategory);
  if (loc.localTherapeuticSpice) base.push(loc.localTherapeuticSpice);
  return [...new Set(base.map(k => k.toLowerCase()))].slice(0, 8);
}

function getDescription(loc, disease) {
  return `Evidence-based nutrition guidance for managing ${disease} in ${loc.city}, ${loc.state}. ` +
    `Local staples, therapeutic spices, and circadian meal timing tailored to the ` +
    `${loc.weather.split(',')[0].toLowerCase()} climate.`;
}

function buildContent(loc, disease, slug) {
  const title = `${disease} Nutrition Guide – ${loc.city}, ${loc.state}`;
  const desc  = getDescription(loc, disease);
  const kws   = getKeywords(loc, disease);
  const url   = `${SITE}/locations/${slug}`;
  const now   = new Date().toISOString().split('T')[0];
  const geoRegion = `IN-${loc.state.substring(0, 2).toUpperCase()}`;

  // ── JSON-LD ───────────────────────────────────────────────────────────────
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${url}#webpage`,
        "name": title,
        "description": desc,
        "url": url,
        "datePublished": now,
        "dateModified": now,
        "inLanguage": "en-IN",
        "about": { "@type": "MedicalCondition", "name": disease },
        "audience": {
          "@type": "PatientsAudience",
          "geographicArea": {
            "@type": "AdministrativeArea",
            "name": `${loc.city}, ${loc.state}, India`
          }
        },
        "specialty": "Nutrition",
        "publisher": {
          "@type": "Organization",
          "name": "NutritionColours",
          "url": SITE
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home",      "item": SITE },
          { "@type": "ListItem", "position": 2, "name": "Locations", "item": `${SITE}/locations` },
          { "@type": "ListItem", "position": 3, "name": title,       "item": url }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `What foods help manage ${disease} in ${loc.city}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `In ${loc.city}, locally available ${loc.localFruits.slice(0,2).join(' and ')} combined with therapeutic ${loc.localTherapeuticSpice} support ${disease} management through synergistic phytonutrient profiles.`
            }
          },
          {
            "@type": "Question",
            "name": `What is the best diet plan for ${disease} in ${loc.state}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `For ${loc.state} residents, replacing ${loc.commonStaples} with ${loc.regionalStapleAlternative} is the primary dietary shift recommended for ${disease} management.`
            }
          },
          {
            "@type": "Question",
            "name": `Which nutrients are commonly deficient in ${loc.city} affecting ${disease}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${loc.regionalDeficiencyRisk} is a prevalent deficiency in ${loc.city} that can worsen ${disease}. Targeted supplementation and local food choices help address this gap.`
            }
          }
        ]
      }
    ]
  }, null, 2);

  // ── front-matter ──────────────────────────────────────────────────────────
  const fm = [
    '---',
    `title: "${esc(title)}"`,
    `description: "${esc(desc)}"`,
    `slug: "${slug}"`,
    `pubDate: "${now}"`,
    `lastModified: "${now}"`,
    `keywords:`,
    ...kws.map(k => `  - "${k}"`),
    `geo:`,
    `  city: "${esc(loc.city)}"`,
    `  state: "${esc(loc.state)}"`,
    `  country: "India"`,
    `  region: "${geoRegion}"`,
    `  pincode: "${loc.pincode}"`,
    `robots: "index, follow"`,
    `canonical: "${url}"`,
    `ogType: "article"`,
    `ogImage: "/og/locations/${slug}.jpg"`,
    `twitterCard: "summary_large_image"`,
    `structuredData: |`,
    ...jsonLd.split('\n').map(l => `  ${l}`),
    '---',
    ''
  ].join('\n');

  // ── page body ─────────────────────────────────────────────────────────────
  const body = `# ${title}

> **Clinical target biomarker:** ${loc.clinicalTargetBiomarker}

## Why ${loc.city} Residents Are at Higher Risk for ${disease}

Residents of **${loc.city}, ${loc.state}** face a unique metabolic challenge shaped by the local ${loc.weather.toLowerCase()}, dietary staples such as *${loc.commonStaples}*, and a circadian challenge of ${loc.circadianChallenge.toLowerCase()}.

${loc.microclimateMetabolicImpact}

## Key Nutritional Deficiency to Address

**${loc.regionalDeficiencyRisk}** is a prevalent deficiency among ${loc.city} residents. Addressing this gap is a critical first step in managing ${disease} effectively.

## Locally Available Therapeutic Foods

| Category | Foods |
|----------|-------|
| **Local Fruits** | ${loc.localFruits.join(', ')} |
| **Local Vegetables** | ${loc.localVegetables.join(', ')} |
| **Famous Produce** | ${loc.famousProduce.join(', ')} |
| **Therapeutic Spice** | ${loc.localTherapeuticSpice} |

### Local Produce Synergy Tip

> ${loc.localProduceSynergy}

## Recommended Dietary Shifts

**Replace** your current staples:
- ❌ ${loc.commonStaples}

**With** evidence-based alternatives:
- ✅ ${loc.regionalStapleAlternative}

## Circadian Nutrition for ${loc.city}

**Your local circadian challenge:** ${loc.circadianChallenge}

Aligning meal timing with your body's natural clock is especially important in ${loc.city}'s ${loc.weather.split(',')[0].toLowerCase()} climate:

- 🌅 Eat your **largest meal between 12:00 PM – 2:00 PM** (peak metabolic window)
- 🌙 Avoid heavy meals after **7:00 PM**
- 🥚 Front-load protein and fibre at breakfast to prevent the mid-day insulin spike

## Frequently Asked Questions

### What foods help manage ${disease} in ${loc.city}?

Locally available ${loc.localFruits.slice(0,2).join(' and ')} combined with therapeutic ${loc.localTherapeuticSpice} can support ${disease} management through their synergistic phytonutrient profiles.

### What is the best diet plan for ${disease} in ${loc.state}?

For ${loc.state} residents, replacing *${loc.commonStaples}* with *${loc.regionalStapleAlternative}* is the primary dietary shift recommended for ${disease} management.

### Which nutrients are deficient in ${loc.city} that affect ${disease}?

**${loc.regionalDeficiencyRisk}** is a prevalent deficiency in ${loc.city} that can worsen ${disease}. Targeted supplementation and local food choices can help address this gap.

---

*This guide is for educational purposes only. Consult a qualified healthcare professional before making changes to your diet or treatment plan.*
`;

  return fm + body;
}

// ── main ─────────────────────────────────────────────────────────────────────
const outputDir = path.resolve(__dirname, '../src/content/locations');
if (!DRY && !fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let count   = 0;
let skipped = 0;
const log   = [];

for (const loc of LOCATIONS_DATA) {
  for (const disease of (loc.healthIssues || [])) {
    const citySlug    = slugify(loc.city);
    const diseaseSlug = slugify(disease);
    const fileSlug    = `${citySlug}-${diseaseSlug}`;
    const filePath    = path.join(outputDir, `${fileSlug}.md`);

    if (!DRY && fs.existsSync(filePath)) { skipped++; continue; }

    const content = buildContent(loc, disease, fileSlug);

    if (DRY) {
      log.push(`[DRY] → ${filePath}`);
    } else {
      fs.writeFileSync(filePath, content, 'utf8');
    }
    count++;
  }
}

if (DRY) {
  const logPath = path.resolve(__dirname, 'generate_location_dryrun.log');
  fs.writeFileSync(logPath, log.join('\n'), 'utf8');
  console.log(`[DRY-RUN] Would generate ${count} pages. Log saved → ${logPath}`);
} else {
  console.log(`✅ Generated ${count} pages  |  Skipped (already existed): ${skipped}`);
  console.log(`   Output: ${outputDir}`);
}

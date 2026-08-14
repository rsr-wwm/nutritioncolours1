import fs from 'fs';
import path from 'path';

async function sanitizeCityContentMap() {
  console.log('=== SANITIZING city-content-map.json (PURGING FAKE LOCAL ENTITIES) ===');
  
  const mapPath = path.resolve(process.cwd(), 'public/data/city-content-map.json');
  if (!fs.existsSync(mapPath)) {
    console.log('[INFO] No city-content-map.json found.');
    return;
  }

  const raw = fs.readFileSync(mapPath, 'utf8');
  const data = JSON.parse(raw);

  let updatedCount = 0;

  for (const [key, value] of Object.entries(data)) {
    const item = value as any;
    if (item && item.jsonLd) {
      const city = item.city || item.jsonLd.address?.addressLocality || 'Service Area';
      const state = item.state || item.jsonLd.address?.addressRegion || 'India';
      const condition = item.condition || 'Metabolic Nutrition';

      // Rewrite to 100% compliant Service schema
      item.jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `https://nutritioncolours.com/locations/${encodeURIComponent(key.toLowerCase())}#service`,
        'name': `Remote Clinical Nutrition Consulting - ${city}`,
        'description': `Specialized remote chrononutrition protocol for ${condition} serving clients in ${city}, ${state}. 100% virtual telehealth consultations by Dr. Shilpa Thakur.`,
        'provider': {
          '@type': 'Organization',
          '@id': 'https://nutritioncolours.com/#organization',
          'name': 'NutritionColours',
          'url': 'https://nutritioncolours.com'
        },
        'serviceType': 'Virtual Telehealth Nutrition Consulting',
        'availableChannel': {
          '@type': 'ServiceChannel',
          'serviceUrl': 'https://nutritioncolours.com/plans',
          'serviceLocation': {
            '@type': 'VirtualLocation',
            'name': 'NutritionColours Telehealth Platform',
            'url': 'https://nutritioncolours.com/connect'
          }
        },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': `${city}, ${state}`
        }
      };
      updatedCount++;
    }
  }

  fs.writeFileSync(mapPath, JSON.stringify(data, null, 2));
  console.log(`✅ [PASS] Sanitized ${updatedCount} entries in city-content-map.json. Zero LocalBusiness or GeoCoordinates remain.`);
}

sanitizeCityContentMap().catch(console.error);

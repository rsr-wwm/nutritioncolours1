// scripts/fetch_data.cjs
// Mock data‑fetch script for NutritionColours project (CommonJS).
// Generates placeholder JSON files for a set of fruit topics.

const fs = require('fs');
const path = require('path');

// List of fruit topics – using the default set and a few extras.
const topics = [
  'apple',
  'banana',
  'orange',
  'lemon',
  'mango',
  'clementine',
  'pear',
  'peach',
  'apricot',
  'plum',
  'grapefruit',
  'lime',
  'tangerine',
  'mandarin',
  'pineapple',
];

const OUTPUT_DIR = path.resolve(__dirname, '..', 'src', 'data', 'fetch');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function mockData(topic) {
  return {
    name: topic,
    description: `Placeholder description for ${topic}.`,
    nutrition: {
      calories: Math.round(Math.random() * 200),
      sugar: Math.round(Math.random() * 30),
      fiber: Math.round(Math.random() * 10),
    },
    source: 'mock-data',
    retrievedAt: new Date().toISOString(),
  };
}

function fetchAll() {
  topics.forEach((t) => {
    const data = mockData(t);
    const filePath = path.join(OUTPUT_DIR, `${t}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ ${t}.json written`);
  });
}

if (require.main === module) {
  fetchAll();
}

module.exports = { topics, fetchAll };

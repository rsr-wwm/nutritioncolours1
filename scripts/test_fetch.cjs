// scripts/test_fetch.cjs
// Test runner for fetch_data.cjs – ensures JSON files are created.

const { topics, fetchAll } = require('./fetch_data.cjs');
const fs = require('fs');
const path = require('path');

function runTests() {
  const outputDir = path.resolve(__dirname, '..', 'src', 'data', 'fetch');
  // Clean existing files
  if (fs.existsSync(outputDir)) {
    fs.readdirSync(outputDir).forEach((file) => {
      if (file.endsWith('.json')) fs.unlinkSync(path.join(outputDir, file));
    });
  }
  console.log('Running fetchAll...');
  fetchAll();
  let allGood = true;
  topics.forEach((t) => {
    const f = path.join(outputDir, `${t}.json`);
    if (!fs.existsSync(f)) {
      console.error(`❌ Missing ${t}.json`);
      allGood = false;
    } else {
      console.log(`✅ ${t}.json exists`);
    }
  });
  if (allGood) {
    console.log('All test files created successfully.');
    process.exit(0);
  } else {
    console.error('Some files were not created.');
    process.exit(1);
  }
}

if (require.main === module) {
  runTests();
}

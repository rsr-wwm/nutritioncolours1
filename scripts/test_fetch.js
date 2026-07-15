// scripts/test_fetch.js
// Simple test runner for fetch_data.js – ensures JSON files are created.

const { topics, fetchAll } = require('./fetch_data');
const fs = require('fs');
const path = require('path');

function runTests() {
  // Clean any existing files for a clean test run.
  const outputDir = path.resolve(__dirname, '..', 'src', 'data', 'fetch');
  if (fs.existsSync(outputDir)) {
    fs.readdirSync(outputDir).forEach((file) => {
      if (file.endsWith('.json')) fs.unlinkSync(path.join(outputDir, file));
    });
  }

  console.log('Running fetchData...');
  fetchAll();

  // Verify each topic produced a file.
  let allPresent = true;
  topics.forEach((t) => {
    const filePath = path.join(outputDir, `${t}.json`);
    if (!fs.existsSync(filePath)) {
      console.error(`❌ Missing ${t}.json`);
      allPresent = false;
    } else {
      console.log(`✅ ${t}.json exists`);
    }
  });

  if (allPresent) {
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

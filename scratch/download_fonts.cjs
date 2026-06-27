const fs = require('fs');
const path = require('path');
const https = require('https');

const fontsDir = path.join(__dirname, '../public/fonts');

if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

const fontFiles = [
  'inter-latin-300-normal.woff2',
  'inter-latin-400-normal.woff2',
  'inter-latin-500-normal.woff2',
  'inter-latin-600-normal.woff2',
  'inter-latin-700-normal.woff2'
];

function downloadFile(filename) {
  const url = `https://cdn.jsdelivr.net/npm/@fontsource/inter/files/${filename}`;
  const dest = path.join(fontsDir, filename);
  const file = fs.createWriteStream(dest);

  console.log(`Downloading ${filename}...`);
  https.get(url, (response) => {
    if (response.statusCode !== 200) {
      console.error(`Failed to download ${filename}: HTTP ${response.statusCode}`);
      return;
    }
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Successfully saved ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(dest, () => {});
    console.error(`Error downloading ${filename}:`, err.message);
  });
}

fontFiles.forEach(downloadFile);

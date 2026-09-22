import fs from 'fs';
import path from 'path';

const TOMBSTONE_RULES = [
  '/clinic/*  /410-tombstone.html  410',
  '/location/*  /410-tombstone.html  410',
  '/clinics/*  /clinics  301',
  '/disease/*  /knowledge/health-conditions/  301',
  '/condition/*  /knowledge/health-conditions/  301',
  '/cure/*  /410-tombstone.html  410',
  '/reversal/*  /410-tombstone.html  410'
];

async function generateTombstones() {
  console.log('🪦 Generating Fact Tombstones and Withdrawal Propagation...');
  const publicDir = path.resolve(process.cwd(), 'public');
  const distDir = path.resolve(process.cwd(), 'dist');
  const redirectsPath = path.join(publicDir, '_redirects');

  let currentContent = '';
  if (fs.existsSync(redirectsPath)) {
    currentContent = fs.readFileSync(redirectsPath, 'utf-8');
  }

  const lines = currentContent.split('\n').map(l => l.trim()).filter(Boolean);
  for (const rule of TOMBSTONE_RULES) {
    if (!lines.includes(rule)) {
      lines.push(rule);
    }
  }

  const updatedRedirects = lines.join('\n') + '\n';
  fs.writeFileSync(redirectsPath, updatedRedirects);

  // If dist exists, mirror to dist/_redirects as well
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, '_redirects'), updatedRedirects);
  }

  console.log(`✅ Generated ${TOMBSTONE_RULES.length} tombstone and canonical consolidation rules.`);
}

generateTombstones();

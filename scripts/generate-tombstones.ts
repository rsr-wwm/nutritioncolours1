import fs from 'fs';
import path from 'path';

async function generateTombstones() {
  console.log('🪦 Generating Fact Tombstones and Withdrawal Propagation...');
  const publicDir = path.resolve(process.cwd(), 'public');
  const redirectsPath = path.join(publicDir, '_redirects');
  let redirectsContent = fs.existsSync(redirectsPath) ? fs.readFileSync(redirectsPath, 'utf-8') : '';
  
  const rule = `/clinic/obsolete-city-cure  /410-tombstone.html  410\n`;
  if (!redirectsContent.includes('/clinic/obsolete-city-cure')) {
    redirectsContent += rule;
  }
  fs.writeFileSync(redirectsPath, redirectsContent);
  console.log(`✅ Generated tombstones.`);
}
generateTombstones();

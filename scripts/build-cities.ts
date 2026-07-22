import { execSync } from 'child_process';
import { LOCATIONS_DATA } from '../src/lib/locationsData';
import * as fs from 'fs';
import * as path from 'path';

// Parse arguments
const args = process.argv.slice(2);
const startChunk = parseInt(args[0] || '0', 10);
const numChunks = parseInt(args[1] || '1', 10); // Default to building just 1 chunk if not specified
const chunkSize = parseInt(process.env.CHUNK_SIZE || '500', 10);

const totalCities = LOCATIONS_DATA.length;
const maxChunks = Math.ceil(totalCities / chunkSize);

console.log(`Starting chunked build. Total Cities: ${totalCities}. Max Chunks: ${maxChunks}. Chunk Size: ${chunkSize}`);
console.log(`Building chunks from ${startChunk} to ${startChunk + numChunks - 1}...\n`);

for (let i = startChunk; i < startChunk + numChunks && i < maxChunks; i++) {
  console.log(`\n=== BUILDING CHUNK ${i} / ${maxChunks - 1} ===\n`);
  
  try {
    // We execute the standard astro build command but pass the chunk index
    // Note: Astro clears the dist folder by default on every build. 
    // To prevent wiping out previous chunks, we need to temporarily move dist, build, then merge.
    
    // We only need to preserve the clinic directory since we are only chunking locations.
    const distPath = path.resolve(process.cwd(), 'dist');
    const clinicBackupPath = path.resolve(process.cwd(), '.clinic_backup');
    const distClinicPath = path.join(distPath, 'clinic');
    
    // 1. Backup existing clinic folder if this isn't the first chunk
    if (i > 0 && fs.existsSync(distClinicPath)) {
       console.log('Backing up previous clinic routes...');
       if (fs.existsSync(clinicBackupPath)) {
           fs.rmSync(clinicBackupPath, { recursive: true, force: true });
       }
       // Quick cross-platform copy
       execSync(`cp -R "${distClinicPath}" "${clinicBackupPath}"`, { stdio: 'inherit' });
    }

    // 2. Run the Astro build for this specific chunk
    console.log(`Running Astro build for Chunk ${i}...`);
    execSync(`CHUNK_INDEX=${i} CHUNK_SIZE=${chunkSize} ASTRO_TELEMETRY_DISABLED=1 npx astro build`, { 
      stdio: 'inherit',
      env: { ...process.env, CHUNK_INDEX: i.toString(), CHUNK_SIZE: chunkSize.toString() }
    });

    // 3. Restore previous clinic routes into the new dist folder
    if (i > 0 && fs.existsSync(clinicBackupPath)) {
       console.log('Restoring previous clinic routes into dist...');
       // Using rsync or cp to merge directories. cp -R merges on Mac/Linux.
       execSync(`cp -R "${clinicBackupPath}"/* "${distClinicPath}/"`, { stdio: 'inherit' });
    }

    console.log(`\n✅ Chunk ${i} completed successfully!`);

  } catch (err) {
    console.error(`\n❌ Error building chunk ${i}:`, err);
    process.exit(1);
  }
}

console.log('\n=== CHUNKED BUILD PROCESS COMPLETE ===');

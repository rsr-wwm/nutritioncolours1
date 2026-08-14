import fs from 'fs';
import path from 'path';

interface InventoryFile {
  generatedAt: string;
  total: number;
  entries: { route: string; canonicalUrl: string; indexable: boolean }[];
}

async function runManifestDiff() {
  console.log('=== RUNNING MANIFEST & CANONICAL ROUTE DIFF GATE ===');

  const currentInventoryPath = path.resolve(process.cwd(), 'public/data/inventory.json');
  if (!fs.existsSync(currentInventoryPath)) {
    console.log('[INFO] No existing inventory.json found. Creating initial snapshot.');
    return;
  }

  const currentRaw = fs.readFileSync(currentInventoryPath, 'utf8');
  const currentData: InventoryFile = JSON.parse(currentRaw);

  const snapshotPath = path.resolve(process.cwd(), 'docs/.inventory-snapshot.json');

  if (!fs.existsSync(snapshotPath)) {
    // First run: save snapshot
    fs.writeFileSync(snapshotPath, JSON.stringify(currentData, null, 2));
    console.log(`[PASS] Initial baseline snapshot saved with ${currentData.total} routes.`);
    return;
  }

  const previousRaw = fs.readFileSync(snapshotPath, 'utf8');
  const previousData: InventoryFile = JSON.parse(previousRaw);

  const previousRoutes = new Set(previousData.entries.map((e) => e.route));
  const currentRoutes = new Set(currentData.entries.map((e) => e.route));

  const droppedRoutes: string[] = [];
  for (const route of previousRoutes) {
    if (!currentRoutes.has(route)) {
      droppedRoutes.push(route);
    }
  }

  const addedRoutes: string[] = [];
  for (const route of currentRoutes) {
    if (!previousRoutes.has(route)) {
      addedRoutes.push(route);
    }
  }

  console.log(`Previous Routes: ${previousRoutes.size} | Current Routes: ${currentRoutes.size}`);
  console.log(`New Routes Added: ${addedRoutes.length} | Routes Dropped: ${droppedRoutes.length}`);

  // If dropped routes > 5% of total without manual override, fail closed
  const dropPercentage = (droppedRoutes.length / (previousRoutes.size || 1)) * 100;
  if (dropPercentage > 5) {
    console.error(`\n[FAIL] Critical Route Loss: ${droppedRoutes.length} (${dropPercentage.toFixed(2)}%) routes dropped.`);
    console.error('Dropped samples:', droppedRoutes.slice(0, 10));
    process.exit(1);
  }

  // Update snapshot with latest verified state
  fs.writeFileSync(snapshotPath, JSON.stringify(currentData, null, 2));
  console.log('✅ [PASS] Manifest Diff Gate passed. Route drift is within safety threshold (<5%).');
}

runManifestDiff().catch(console.error);

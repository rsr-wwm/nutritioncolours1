import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const decisionsPath = path.join(root, 'data/publishing/leaf-decisions.json');
const batchesDir = path.join(root, 'data/publishing/batches');
const inventoryPath = path.join(root, 'data/publishing/leaf-registry.json');

const isCheck = process.argv.includes('--check') || process.argv.includes('--dry-run');

if (!fs.existsSync(decisionsPath)) {
  console.error(`Error: decisions file not found at ${path.relative(root, decisionsPath)}`);
  process.exit(1);
}

let existingDecisionsData;
try {
  existingDecisionsData = JSON.parse(fs.readFileSync(decisionsPath, 'utf8'));
} catch (error) {
  console.error(`Error reading ${path.relative(root, decisionsPath)}: ${error.message}`);
  process.exit(1);
}

if (!Array.isArray(existingDecisionsData.decisions)) {
  existingDecisionsData.decisions = [];
}

let inventory = { records: [] };
if (fs.existsSync(inventoryPath)) {
  try {
    inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
  } catch {
    // optional validation
  }
}
const knownLegacyIds = new Set((inventory.records || []).map((r) => r.legacyId));

if (!fs.existsSync(batchesDir)) {
  fs.mkdirSync(batchesDir, { recursive: true });
}

const batchFiles = fs.readdirSync(batchesDir)
  .filter((file) => file.endsWith('.json'))
  .sort();

if (batchFiles.length === 0) {
  console.log(`No batch files found in ${path.relative(root, batchesDir)}/ - leaf-decisions.json unchanged.`);
  process.exit(0);
}

const existingDecisions = existingDecisionsData.decisions;
const decisionMap = new Map(existingDecisions.map((d) => [d.legacyId, d]));
const collisions = [];
const invalidEntries = [];
let newCount = 0;

for (const file of batchFiles) {
  const filePath = path.join(batchesDir, file);
  const relPath = path.relative(root, filePath);
  let batchData;
  try {
    batchData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    console.error(`Error reading batch file ${relPath}: ${error.message}`);
    process.exit(1);
  }

  const batchList = Array.isArray(batchData) ? batchData : (batchData.decisions || []);
  if (!Array.isArray(batchList)) {
    invalidEntries.push(`${relPath}: batch must be an array or contain a 'decisions' array.`);
    continue;
  }

  const seenInBatch = new Set();
  for (const [idx, item] of batchList.entries()) {
    const loc = `${relPath}[${idx}]`;
    if (!item || typeof item !== 'object' || !item.legacyId) {
      invalidEntries.push(`${loc}: missing required 'legacyId'`);
      continue;
    }
    if (seenInBatch.has(item.legacyId)) {
      collisions.push(`${loc}: duplicate legacyId '${item.legacyId}' within batch file`);
      continue;
    }
    seenInBatch.add(item.legacyId);

    if (decisionMap.has(item.legacyId)) {
      collisions.push(`${loc}: legacyId '${item.legacyId}' already exists in leaf-decisions.json`);
      continue;
    }

    if (knownLegacyIds.size > 0 && !knownLegacyIds.has(item.legacyId)) {
      console.warn(`Warning [${loc}]: legacyId '${item.legacyId}' is not found in leaf-registry.json`);
    }

    decisionMap.set(item.legacyId, item);
    newCount++;
  }
}

if (collisions.length > 0 || invalidEntries.length > 0) {
  console.error(`Batch validation failed with ${collisions.length + invalidEntries.length} issue(s):`);
  for (const err of invalidEntries) console.error(`  - Invalid entry: ${err}`);
  for (const err of collisions) console.error(`  - Collision: ${err}`);
  process.exit(1);
}

const updatedDecisions = Array.from(decisionMap.values());
const outputData = {
  schemaVersion: existingDecisionsData.schemaVersion || 1,
  purpose: existingDecisionsData.purpose || 'Human-reviewed lifecycle decisions overlay. Generated inventory files must not be edited to approve publication.',
  decisions: updatedDecisions,
};

if (isCheck) {
  console.log(`[DRY RUN] Validated ${batchFiles.length} batch file(s). ${newCount} new decision(s) ready to merge.`);
} else {
  fs.writeFileSync(decisionsPath, `${JSON.stringify(outputData, null, 2)}\n`, 'utf8');
  console.log(`Successfully merged ${newCount} decision(s) from ${batchFiles.length} batch file(s) into leaf-decisions.json (total: ${updatedDecisions.length}).`);
}

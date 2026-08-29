import fs from 'node:fs';
import path from 'node:path';
import { validatePublishingGraph } from './lib/leaf-publishing-policy.mjs';

const registryPath = path.resolve('data/publishing/leaf-registry.json');
const truthRegistryPath = path.resolve('data/publishing/truth-registry.json');
if (!fs.existsSync(registryPath)) {
  console.error('Missing data/publishing/leaf-registry.json. Run `npm run leaf:audit`.');
  process.exit(1);
}
if (!fs.existsSync(truthRegistryPath)) {
  console.error('Missing data/publishing/truth-registry.json.');
  process.exit(1);
}

let registry;
let truthRegistry;
try {
  registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  truthRegistry = JSON.parse(fs.readFileSync(truthRegistryPath, 'utf8'));
} catch (error) {
  console.error(`Publishing registry JSON is invalid: ${error.message}`);
  process.exit(1);
}

const errors = validatePublishingGraph(registry, truthRegistry);
if (errors.length) {
  console.error(`Leaf registry gate failed (${errors.length}):`);
  errors.slice(0, 100).forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

const published = registry.records.filter((record) => record.lifecycleState === 'publish');
console.log(`Leaf registry gate passed: ${registry.records.length} records, ${published.length} explicitly publishable, ${registry.records.length - published.length} non-public.`);

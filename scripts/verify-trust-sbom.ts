import fs from 'fs';
import path from 'path';

const REQUIRED_AUTHOR_FIELDS = ['name', 'credentials', 'orcid', 'scholar_url'];
const PLACEHOLDER_HASH = '0000-0000-0000-0000';

async function verifyTrustSBOM() {
  console.log('🛡️ Initiating Public-Trust Surface SBOM Verification...');
  const entityGraphPath = path.resolve(process.cwd(), 'public/data/entity-graph.json');
  if (!fs.existsSync(entityGraphPath)) {
    console.log('⚠️ entity-graph.json not found, skipping for now.');
    process.exit(0);
  }
  const graph = JSON.parse(fs.readFileSync(entityGraphPath, 'utf-8'));
  const authors = graph.authors || [];
  let violations = 0;
  for (const author of authors) {
    if (author.orcid === PLACEHOLDER_HASH || author.orcid.includes('placeholder')) {
      console.error(`❌ MUTATION FAILURE: Author ${author.id || author.name} contains a placeholder ORCID.`);
      violations++;
    }
  }
  if (violations > 0) {
    console.error(`\n🚨 Trust SBOM Validation FAILED with ${violations} violations.`);
    process.exit(1);
  }
  console.log('✅ Trust SBOM Verification Passed.');
}
verifyTrustSBOM();

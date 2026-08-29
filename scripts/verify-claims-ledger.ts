import fs from 'fs';
import path from 'path';

const LEDGER_PATH = path.resolve(process.cwd(), 'public/data/claims-ledger.json');
const SRC_DIR = path.resolve(process.cwd(), 'src');

interface Claim {
  id: string;
  status: 'approved' | 'rejected' | 'unverified';
}

function walkDir(dir: string, callback: (filePath: string) => void) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath, callback);
    } else {
      if (dirPath.endsWith('.md') || dirPath.endsWith('.mdx') || dirPath.endsWith('.astro')) {
        callback(dirPath);
      }
    }
  });
}

async function verifyClaims() {
  console.log('🩺 Verifying Medical Claims against Ledger...');
  if (!fs.existsSync(LEDGER_PATH)) {
    console.log('⚠️ claims-ledger.json not found, skipping.');
    process.exit(0);
  }

  const ledgerData = JSON.parse(fs.readFileSync(LEDGER_PATH, 'utf-8'));
  const claimsMap = new Map<string, Claim>();
  ledgerData.claims.forEach((c: Claim) => claimsMap.set(c.id, c));

  const claimRegex = /::claim\{#([a-zA-Z0-9-]+)\}::/g;
  let violations = 0;

  walkDir(SRC_DIR, (filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    let match;
    while ((match = claimRegex.exec(content)) !== null) {
      const claimId = match[1];
      const ledgerEntry = claimsMap.get(claimId);
      
      if (!ledgerEntry) {
        console.error(`❌ UNVERIFIED CLAIM: Claim '#${claimId}' in ${filePath} does not exist in the ledger.`);
        violations++;
      } else if (ledgerEntry.status === 'rejected') {
        console.error(`❌ REJECTED CLAIM: Claim '#${claimId}' in ${filePath} was rejected by medical/legal review.`);
        violations++;
      }
    }
  });

  if (violations > 0) {
    console.error(`\n🚨 Medical Claims Verification FAILED with ${violations} violations.`);
    process.exit(1);
  }

  console.log('✅ All medical claims verified and approved.');
}
verifyClaims();

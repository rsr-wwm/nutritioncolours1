import fs from 'fs';
import path from 'path';

// Define high-risk phrases that violate medical claims policy without clinical qualification
const BANNED_PATTERNS = [
  /reverse insulin resistance naturally/i,
  /reversing diabetes naturally/i,
  /cure pcos/i,
  /cure diabetes/i,
  /medicine-free life/i,
  /medicine-free hub/i,
  /completely reverse (?:diabetes|pcos|fatty liver|insulin resistance)/i
];

function getFilesRecursively(dir: string, extensions: string[]): string[] {
  let results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath, extensions));
    } else {
      if (extensions.some(ext => filePath.endsWith(ext))) {
        results.push(filePath);
      }
    }
  }
  return results;
}

function checkClaims() {
  console.log('🛡️ Running YMYL Clinical Claim Ledger Gate...');
  let errorCount = 0;

  // Scan public LLM and data files, and built HTML files in dist/
  const filesToScan = [
    ...getFilesRecursively(path.join(process.cwd(), 'public'), ['.txt', '.json']),
    ...getFilesRecursively(path.join(process.cwd(), 'dist'), ['.html'])
  ];

  if (filesToScan.length === 0) {
    console.log('⚠️ Warning: No files found to scan. Make sure the project has been built.');
    return;
  }

  for (const file of filesToScan) {
    // Skip large build directories or node_modules if accidentally traversed
    if (file.includes('node_modules') || file.includes('.astro')) continue;

    const content = fs.readFileSync(file, 'utf8');

    for (const pattern of BANNED_PATTERNS) {
      if (pattern.test(content)) {
        console.error(`❌ Claim Ledger Violation: Found banned unqualified phrase ${pattern} in file:`);
        console.error(`   👉 ${file}`);
        
        // Print context
        const lines = content.split('\n');
        lines.forEach((line, index) => {
          if (pattern.test(line)) {
            console.error(`   [Line ${index + 1}]: "...${line.trim().slice(0, 100)}..."`);
          }
        });

        errorCount++;
      }
    }
  }

  if (errorCount > 0) {
    console.error(`\n🚨 Build failed: Found ${errorCount} unqualified medical claim violations. Please qualify them with 'support', 'manage', or 'under clinical supervision'.`);
    process.exit(1);
  } else {
    console.log(`✅ Claim Ledger Gate passed successfully. Checked ${filesToScan.length} files. Zero unqualified claims found.`);
  }
}

checkClaims();

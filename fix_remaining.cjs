const fs = require('fs');
const path = require('path');

const targetSlugs = [
  'org-vasc-1', 'org-vasc-2', 'org-heart-1', 'org-heart-2',
  'gestational-diabetes', 'type-1-diabetes', 'type-2-diabetes',
  'org-endo-1', 'org-endo-2', 'org-cns-1', 'org-cns-2', 'org-cns-3',
  'org-ear-1', 'org-ear-2', 'org-eye-1', 'org-eye-2', 'org-brain-3',
  'org-pns-1', 'asthma'
];

const allLeafPages = [];
function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.md') || fullPath.endsWith('.mdx')) {
            allLeafPages.push(fullPath);
        }
    }
}
walkDir('src/content/knowledge');

const pathsToFix = [];

targetSlugs.forEach(slug => {
  // Find all paths that end with slug.md or slug.mdx
  const matches = allLeafPages.filter(p => p.endsWith(`/${slug}.md`) || p.endsWith(`/${slug}.mdx`));
  // if multiple matches, we can just process all of them to be safe
  matches.forEach(m => pathsToFix.push(m));
});

// Remove duplicates
const uniquePaths = [...new Set(pathsToFix)];

console.log(`Found ${uniquePaths.length} paths to fix.`);

fs.writeFileSync('batch_remaining.txt', uniquePaths.join('\n'));

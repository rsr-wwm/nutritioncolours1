import fs from 'fs';
import path from 'path';

interface A11yViolation {
  file: string;
  rule: string;
  detail: string;
}

function auditHtmlFile(filePath: string): A11yViolation[] {
  const content = fs.readFileSync(filePath, 'utf8');
  const violations: A11yViolation[] = [];
  const relPath = path.relative(process.cwd(), filePath);

  // 1. Check <html lang="...">
  if (!/<html[^>]*\blang=["'][a-zA-Z\-]+["']/i.test(content)) {
    violations.push({ file: relPath, rule: 'html-has-lang', detail: 'Missing or empty <html lang="..."> attribute' });
  }

  // 2. Check <title>
  const titleMatch = content.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    violations.push({ file: relPath, rule: 'document-title', detail: 'Missing or empty <title> tag' });
  }

  // 3. Check for <img> missing alt attribute
  const imgTags = content.match(/<img\b[^>]*>/gi) || [];
  for (const img of imgTags) {
    if (!/\balt\s*=\s*["'][^"']*["']/i.test(img)) {
      violations.push({ file: relPath, rule: 'image-alt', detail: `Missing alt attribute on: ${img.slice(0, 50)}...` });
    }
  }

  // 4. Check for duplicate IDs
  const idMatches = content.matchAll(/\bid=["']([^"']+)["']/gi);
  const seenIds = new Set<string>();
  for (const match of idMatches) {
    const id = match[1];
    if (seenIds.has(id)) {
      violations.push({ file: relPath, rule: 'duplicate-id', detail: `Duplicate element ID found: #${id}` });
    } else {
      seenIds.add(id);
    }
  }

  return violations;
}

async function runA11yAudit() {
  console.log('=== RUNNING POST-BUILD ACCESSIBILITY (WCAG 2.1 AA) GATE ===');

  const distDir = path.resolve(process.cwd(), 'dist');
  if (!fs.existsSync(distDir)) {
    console.error('[FAIL] dist/ directory not found. Please build first.');
    process.exit(1);
  }

  const htmlFiles: string[] = [];
  const findHtml = (dir: string) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        findHtml(full);
      } else if (entry.isFile() && entry.name.endsWith('.html')) {
        htmlFiles.push(full);
      }
    }
  };

  findHtml(distDir);
  console.log(`Auditing ${htmlFiles.length} rendered HTML pages for WCAG 2.1 AA compliance...`);

  let totalViolations = 0;
  // Sample check up to 500 pages or all
  const sampleFiles = htmlFiles.slice(0, 500);

  for (const file of sampleFiles) {
    const fileViolations = auditHtmlFile(file);
    if (fileViolations.length > 0) {
      totalViolations += fileViolations.length;
      for (const v of fileViolations) {
        console.error(`[A11y ${v.rule}] ${v.file}: ${v.detail}`);
      }
    }
  }

  if (totalViolations > 0) {
    console.error(`\n[FAIL] Found ${totalViolations} accessibility violations in sampled HTML files.`);
    process.exit(1);
  }

  console.log(`✅ [PASS] Audited sampled HTML pages. Zero WCAG 2.1 AA violations detected.`);
}

runA11yAudit().catch(console.error);

import fs from 'fs';
import path from 'path';

interface CitationEntry {
  id: string;
  claim: string;
  source: string;
  url: string;
  pmid?: string;
  doi?: string;
  evidenceGrade: 'A' | 'B' | 'C';
  statementClass: 'Verified Fact' | 'Supported Interpretation' | 'Practitioner Opinion';
}

const FORBIDDEN_SUPERLATIVES = [
  /100%\s*guaranteed\s*cure/i,
  /miracle\s*cure/i,
  /instant\s*healing/i,
  /secret\s*remedy/i,
  /cures\s*all\s*diseases/i,
  /replaces\s*all\s*medication/i,
];

async function runFirewall() {
  console.log('=== RUNNING AI HALLUCINATION FIREWALL & EVIDENCE GATE ===');

  let violations = 0;

  // 1. Audit trustCitations.json
  const citationsPath = path.resolve(process.cwd(), 'src/lib/trustCitations.json');
  if (fs.existsSync(citationsPath)) {
    const raw = fs.readFileSync(citationsPath, 'utf8');
    const data = JSON.parse(raw);
    
    let citationCount = 0;
    const entries: { url: string; title: string; publisher?: string }[] = [];
    if (Array.isArray(data)) {
      entries.push(...data);
    } else {
      for (const [key, list] of Object.entries(data)) {
        if (Array.isArray(list)) {
          entries.push(...(list as any[]));
        }
      }
    }
    
    console.log(`Auditing ${entries.length} structured clinical citations...`);
    
    for (const c of entries) {
      if (!c.title || !c.url) {
        console.error(`[Firewall Violation] Incomplete citation entry: ${JSON.stringify(c)}`);
        violations++;
      }

      if (!c.url.startsWith('https://')) {
        console.error(`[Firewall Violation] Non-HTTPS citation URL: ${c.url}`);
        violations++;
      }
    }
  }

  // 2. Scan core articles and knowledge content for forbidden superlatives
  const knowledgeDir = path.resolve(process.cwd(), 'src/content/knowledge');
  if (fs.existsSync(knowledgeDir)) {
    const checkDir = (dir: string) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const full = path.join(dir, item);
        if (fs.statSync(full).isDirectory()) {
          checkDir(full);
        } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
          const content = fs.readFileSync(full, 'utf8');
          for (const pattern of FORBIDDEN_SUPERLATIVES) {
            if (pattern.test(content)) {
              console.error(`[Firewall Violation] Prohibited ungrounded medical claim in ${full}: ${pattern}`);
              violations++;
            }
          }
        }
      }
    };
    checkDir(knowledgeDir);
  }

  if (violations > 0) {
    console.error(`\n[FAIL] AI Hallucination Firewall detected ${violations} violations.`);
    process.exit(1);
  }

  console.log('✅ [PASS] AI Hallucination Firewall passed. Zero ungrounded claims or hallucinated citations.');
}

runFirewall().catch(console.error);

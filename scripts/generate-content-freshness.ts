// Regenerates public/data/{content-decay-report,content-freshness,sitemap-freshness,
// auto-freshness-log}.json with REAL data, replacing the fabricated stubs that shipped
// with the site (every entry hand-set to "fresh"/100/today, invented changeSummary text).
//
// Authoritative "reviewed" date per entity type:
//   - conditions/herbs/topics: the hand-maintained `clinicalReview.lastUpdated` field
//     already in src/lib/clinical_databases.ts / src/data/topics.ts — this is a real,
//     per-entity editorial attestation, not something git history can express (many
//     entities share one large data file, so file-level git log can't tell them apart).
//   - recipes: src/data/recipes.ts has no clinicalReview field, so there is no real
//     per-entity review date. These are tracked at file level only via git log, with
//     `clinicallyReviewed`/`reviewer` left null rather than invented.
//
// `flagged: true` marks any entity whose clinicalReview.lastUpdated is NEWER than the
// data file's actual last git commit — that combination means someone hand-typed a
// review date without a matching committed change, which is worth a human look.
//
// Run: npx tsx scripts/generate-content-freshness.ts

import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import { MEDICAL_CONDITIONS_DATA, HERBS_SPICES_DATA } from '../src/lib/clinical_databases';
import { TOPICS } from '../src/data/topics';
import { RECIPES } from '../src/data/recipes';

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA_DIR = path.join(REPO_ROOT, 'public', 'data');

function gitLastModified(relPath: string): Date | null {
  try {
    const out = execSync(`git log -1 --format=%aI -- ${relPath}`, { cwd: REPO_ROOT }).toString().trim();
    return out ? new Date(out) : null;
  } catch {
    return null;
  }
}

// Uses local (not UTC) getters to match how `new Date("May 28, 2026")` parses —
// as local midnight. toISOString() converts to UTC first, which can shift the
// displayed calendar day by ±1 depending on the runner's timezone offset.
function toDateOnlyString(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function daysBetween(from: Date, to: Date): number {
  return Math.max(0, Math.round((to.getTime() - from.getTime()) / 86_400_000));
}

function classify(days: number): 'fresh' | 'aging' | 'decaying' | 'critical' {
  if (days < 90) return 'fresh';
  if (days < 180) return 'aging';
  if (days < 365) return 'decaying';
  return 'critical';
}

// Linear decay to 0 at 365 days — matches the fresh/aging/decaying/critical cutoffs
// above and the skill doctrine's own ~90-day AI-citation-loss threshold.
function scoreFromDays(days: number): number {
  return Math.max(0, Math.round(100 - (days / 365) * 100));
}

function categorizeCitation(url: string): 'pubmed' | 'wikidata' | 'mesh' | 'other' {
  if (url.includes('pubmed')) return 'pubmed';
  if (url.includes('wikidata')) return 'wikidata';
  if (url.includes('meshb') || url.includes('mesh')) return 'mesh';
  return 'other';
}

type Row = {
  type: 'condition' | 'herb' | 'topic' | 'recipe';
  id: string;
  name: string;
  url: string;
  dataLastModified: string | null;
  clinicallyReviewed: string | null;
  reviewer: string | null;
  citations: string[];
  daysSinceUpdate: number;
  freshnessScore: number;
  status: ReturnType<typeof classify>;
  flagged: boolean;
};

function buildRow(
  type: Row['type'],
  id: string,
  name: string,
  url: string,
  citations: string[],
  clinicalReview: { reviewedBy?: string; lastUpdated?: string } | undefined,
  fileGitDate: Date | null,
  now: Date,
): Row {
  const reviewedDate = clinicalReview?.lastUpdated ? new Date(clinicalReview.lastUpdated) : null;
  const flagged = !!(reviewedDate && fileGitDate && reviewedDate > fileGitDate);
  const authoritative = reviewedDate || fileGitDate || now;
  const days = daysBetween(authoritative, now);

  return {
    type,
    id,
    name,
    url,
    dataLastModified: fileGitDate ? fileGitDate.toISOString() : null,
    clinicallyReviewed: clinicalReview?.lastUpdated || null,
    reviewer: clinicalReview?.reviewedBy || null,
    citations,
    daysSinceUpdate: days,
    freshnessScore: scoreFromDays(days),
    status: classify(days),
    flagged,
  };
}

function main() {
  const now = new Date();
  // NOTE: must use the real (non-symlinked) paths — `src/data` is a symlink to
  // `src/lib`, and `src/lib/recipes.ts` is itself a symlink to
  // `recipes_database.ts`. `git log` refuses to follow symlinked path arguments
  // (fails silently), even though Node/tsx resolves them fine for the imports above.
  const clinicalDbGitDate = gitLastModified('src/lib/clinical_databases.ts');
  const topicsGitDate = gitLastModified('src/lib/topics.ts');
  const recipesGitDate = gitLastModified('src/lib/recipes_database.ts');

  const rows: Row[] = [
    ...MEDICAL_CONDITIONS_DATA.map((cond: any) =>
      buildRow(
        'condition', cond.id, cond.name, `/condition/${cond.id}`,
        (cond.citations || []).map((c: any) => c.url),
        cond.clinicalReview, clinicalDbGitDate, now,
      )
    ),
    ...HERBS_SPICES_DATA.map((herb: any) =>
      buildRow(
        'herb', herb.id, herb.name, `/herb/${herb.id}`,
        (herb.citations || []).map((c: any) => c.url),
        herb.clinicalReview, clinicalDbGitDate, now,
      )
    ),
    ...TOPICS.map((topic: any) =>
      buildRow(
        'topic', topic.id, topic.title, `/topic/${topic.id}`,
        [], topic.clinicalReview, topicsGitDate, now,
      )
    ),
    ...RECIPES.map((recipe: any) =>
      buildRow(
        'recipe', recipe.id, recipe.title, `/recipe/${recipe.id}`,
        [], undefined, recipesGitDate, now,
      )
    ),
  ];

  const byStatus = { fresh: 0, aging: 0, decaying: 0, critical: 0 };
  let totalCitations = 0;
  for (const r of rows) {
    byStatus[r.status]++;
    totalCitations += r.citations.length;
  }
  const averageFreshnessScore = Math.round(rows.reduce((s, r) => s + r.freshnessScore, 0) / rows.length);

  // --- content-decay-report.json ---
  const decayReport = {
    generated: now.toISOString(),
    summary: { total: rows.length, byStatus, averageFreshnessScore, totalCitations },
    criticalPages: rows.filter((r) => r.status === 'critical').map((r) => r.url),
    decayingPages: rows.filter((r) => r.status === 'decaying').map((r) => r.url),
    flaggedPages: rows.filter((r) => r.flagged).map((r) => r.url),
    allPages: rows.map((r) => ({
      type: r.type,
      id: r.id,
      name: r.name,
      url: r.url,
      dataLastModified: r.dataLastModified,
      clinicallyReviewed: r.clinicallyReviewed,
      daysSinceUpdate: r.daysSinceUpdate,
      citationCount: r.citations.length,
      citations: {
        pubmed: r.citations.filter((c) => categorizeCitation(c) === 'pubmed'),
        wikidata: r.citations.filter((c) => categorizeCitation(c) === 'wikidata'),
        mesh: r.citations.filter((c) => categorizeCitation(c) === 'mesh'),
        other: r.citations.filter((c) => categorizeCitation(c) === 'other'),
      },
      freshnessScore: r.freshnessScore,
      status: r.status,
      needsRefresh: r.status !== 'fresh',
    })),
  };

  // --- content-freshness.json ---
  // changeSummary is deliberately dropped — git log can tell us a file changed, not
  // narrate what changed in prose, and the previous version's summaries were invented.
  const freshness = {
    version: '2.0.0',
    description: 'Content freshness tracking, computed from clinicalReview.lastUpdated (conditions/herbs/topics) and git history (recipes) — not hand-authored.',
    lastGenerated: now.toISOString(),
    pages: rows.map((r) => ({
      path: r.url,
      title: r.name,
      dataLastModified: r.dataLastModified,
      lastReviewed: r.clinicallyReviewed,
      reviewer: r.reviewer,
      flagged: r.flagged,
    })),
  };

  // --- sitemap-freshness.json ---
  const sitemapFreshness: Record<string, { lastmod: string; freshnessScore: number; status: string }> = {};
  for (const r of rows) {
    // clinicallyReviewed is a hand-typed string (e.g. "May 28, 2026"), not ISO — parse
    // through Date rather than slicing the raw string, or "May 28, 2026" silently
    // becomes the nonsense "May 28, 20".
    const rawDate = r.clinicallyReviewed || r.dataLastModified;
    const lastmodDate = rawDate ? new Date(rawDate) : now;
    sitemapFreshness[r.url] = {
      lastmod: toDateOnlyString(lastmodDate),
      freshnessScore: r.freshnessScore,
      status: r.status,
    };
  }

  // --- auto-freshness-log.json ---
  const autoLog = {
    generated: now.toISOString(),
    totalScanned: rows.length,
    needsRefresh: rows.filter((r) => r.status !== 'fresh').length,
    flagged: rows.filter((r) => r.flagged).length,
    averageScore: averageFreshnessScore,
    actions: [],
  };

  writeFileSync(path.join(DATA_DIR, 'content-decay-report.json'), JSON.stringify(decayReport, null, 2) + '\n');
  writeFileSync(path.join(DATA_DIR, 'content-freshness.json'), JSON.stringify(freshness, null, 2) + '\n');
  writeFileSync(path.join(DATA_DIR, 'sitemap-freshness.json'), JSON.stringify(sitemapFreshness, null, 2) + '\n');
  writeFileSync(path.join(DATA_DIR, 'auto-freshness-log.json'), JSON.stringify(autoLog, null, 2) + '\n');

  console.log(`Scanned ${rows.length} entities. Status: ${JSON.stringify(byStatus)}. Flagged: ${autoLog.flagged}.`);
}

main();

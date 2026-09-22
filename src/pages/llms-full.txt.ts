import type { APIRoute } from 'astro';
import approvedData from '../../data/publishing/approved-leaves.json';
import type { ApprovedLeaf, ApprovedLeafRegistry } from '../lib/publishing/approvedLeafTypes';

// Source of truth is the approved-only projection, imported directly — the same
// module every leaf route (`health/[slug].astro`, `foods/[item].astro`) reads.
// This file must never read unreviewed control registries: doing so would make
// it structurally capable of listing unreviewed drafts, which is exactly the
// leak this generator exists to prevent.
const records = (approvedData as ApprovedLeafRegistry).records;

function listSection(title: string, items: ApprovedLeaf[], siteUrl: string): string {
  if (items.length === 0) {
    return `## ${title}\n\nNo ${title.toLowerCase()} are currently approved for publication.`;
  }
  const lines = items
    .map((item) => {
      const reviewer = item.reviewer?.displayName ? `; reviewed by ${item.reviewer.displayName}` : '';
      return `- [${item.canonicalName}](${siteUrl}${item.canonicalPath}) — ${item.metaDescription} (author: ${item.author?.displayName ?? 'unverified'}${reviewer})`;
    })
    .join('\n');
  return `## ${title}\n\n${lines}`;
}

export const GET: APIRoute = async ({ site }) => {
  const SITE_URL = (site || 'https://nutritioncolours.com').toString().replace(/\/$/, '');
  const healthRecords = records.filter((record) => record.pageKind === 'health');
  const foodRecords = records.filter((record) => record.pageKind === 'food');
  const total = records.length;

  const content = `# NutritionColours — full index

> Generated mechanically from the approved-leaf projection only (\`data/publishing/approved-leaves.json\`). This file never reads the quarantine or decision registries, so it is structurally incapable of listing content that has not passed named-author, named-reviewer, and claim-to-source verification. Currently ${total} leaf page${total === 1 ? '' : 's'} ${total === 1 ? 'is' : 'are'} approved.

${listSection('Health library', healthRecords, SITE_URL)}

${listSection('Food library', foodRecords, SITE_URL)}

## Trust anchors (always current, independent of leaf-publication status)
- [Editorial policy](${SITE_URL}/legal/editorial-policy) — publication standard, source hierarchy, AI-content boundaries.
- [Methodology](${SITE_URL}/legal/methodology) — claim verification and quality gates.
- [Privacy policy](${SITE_URL}/legal/privacy) — data-handling practices.

## Limitations
- A record's presence above means it passed the full truth-registry gate: a named author, a named reviewer, and claim-to-source verification for every statement.
- This list grows only as reviewed batches are compiled with \`npm run leaf:compile\`; it is never bulk-populated, and it cannot drift ahead of what \`/health\` and \`/foods\` actually serve because both read the same file.
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};

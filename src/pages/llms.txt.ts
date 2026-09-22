import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const SITE_URL = (site || 'https://nutritioncolours.com').toString().replace(/\/$/, '');
  const content = `# NutritionColours

> NutritionColours currently publishes publication policies, directories, and review-status notices. Legacy health, food, recipe, and locality drafts are excluded from public leaf routes. Services are online-only; no physical office, walk-in clinic, diagnostic centre, or city branch is represented. The site does not provide emergency services, diagnosis, prescriptions, or a substitute for individualized medical care.

## Start here
- [Home](${SITE_URL}/) — site overview and primary navigation.
- [Health library](${SITE_URL}/health) — Tier 1 publication-status hub; no health leaf is currently approved.
- [Food library](${SITE_URL}/foods) — Tier 2 publication-status hub; no food leaf is currently approved.
- [Knowledge directory](${SITE_URL}/knowledge) — current directories, policies, and content-review notices.
- [Recipes](${SITE_URL}/recipes) — unreviewed recipe drafts excluded from search indexing.
- [Online services](${SITE_URL}/services/online-nutrition) — remote-channel status and safety boundaries; provider, scope, jurisdiction, pricing, terms and privacy workflow remain under verification.
- [Editorial policy](${SITE_URL}/legal/editorial-policy) — how content is prepared and corrected.
- [Methodology](${SITE_URL}/legal/methodology) — evidence and review limitations.
- [Privacy policy](${SITE_URL}/legal/privacy) — data-handling information.
- [Contact](${SITE_URL}/contact) — general enquiries; do not send medical records or urgent information.
- [Full index](${SITE_URL}/llms-full.txt) — the complete machine-readable list of every currently approved leaf page, generated only from the approved-leaf projection.

## Important limitations
- A page should not be treated as clinically reviewed unless the visible page identifies a reviewer and review date.
- Absence of a warning on a page does not establish that a food, herb, supplement, or dietary pattern is safe for a particular person.
- No outcome, credential, service area, security property, or evidence grade should be inferred beyond what is visibly stated on the cited page.
- City names in withdrawn drafts do not represent physical offices, clinic branches, locally verified medical advice, or service eligibility.
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};

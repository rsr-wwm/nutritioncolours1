# Elite Audit-Improvement Master Plan

**Project:** NutritionColours  
**Plan date:** 28 August 2026  
**Scope:** every public page, quarantined record, content component, publishing control, SEO/AEO/GEO/AIO surface, online-service claim, crawler path, design system and release operation.

## 0. Executive decision

The project must optimize for **trustworthy retrieval and useful human outcomes**, not page count, keyword count or a promise of perfect rankings. Health and disease pages are Tier 1. Food leaves are Tier 2. Nutrient and general-reference pages are Tier 3 and must not be mislabeled as food or medical pages. The service is online-only and must never imply a clinic, office, map location or local staff member.

The operating rule is:

> **No page becomes indexable until its facts, claims, sources, reviewer, identity, privacy boundary, visible text, structured data, accessibility and deployed response all agree.**

AI may help discover gaps, create drafts and run adversarial tests. It may not invent, approve or silently change medical facts, sources, identities, prices, credentials, local availability or review status.

No responsible plan can guarantee a literal zero-violation outcome or a fixed search position. This plan makes failure **observable, fail-closed and reversible**, which is the defensible standard for a YMYL site.

## 1. Verified baseline and open blockers

| Area | Current verified state | Decision |
|---|---:|---|
| Built HTML | 29 pages | Keep static-first; audit every template before expansion |
| Indexable canonicals | 9 | Do not increase until a reviewed leaf cohort is ready |
| Approved health leaves | 0 | Content operations are the critical path |
| Approved food leaves | 0 | Start only after the health pilot proves the workflow |
| Tier-1 health records | 1,126 quarantined | Never import raw inventory into routes |
| Tier-2 food records | 1,047 quarantined | Never auto-promote by readiness score |
| Tier-3 reference records | 133 quarantined | Govern with a separate contract and namespace |
| Locality drafts | 3,553 disconnected and quarantined | Do not create city/condition doorway pages |
| Recipe leaves | 0 public | Keep zero until a separate reviewed recipe contract exists |
| Initial JS on indexable pages | 0 bytes referenced | Preserve this advantage |
| Global CSS | 59,483 raw bytes | Reduce after visual snapshots; gate at 40 KB, then 30 KB |
| Production dependency audit | 0 known vulnerabilities | Repeat on every release and after dependency changes |
| Release verification | Passing | Treat as a minimum gate, not clinical/legal/WCAG certification |

### Human-owned blockers before first leaf

1. A real accountable author and an in-scope reviewer with verified identity, consent and correction ownership.
2. A source set with stable URLs, publisher, publication/version date, access date, retraction/correction status and licensing/usage notes.
3. A claim ledger that records exact wording, population, exposure/intervention, comparator, outcome, magnitude, timeframe, uncertainty and allowed destination.
4. A clean rewrite outside the legacy content tree, followed by expert and editorial/compliance review.
5. A signed review event whose SHA-256 fingerprint matches the exact UTF-8 bytes being published.

If any blocker is missing, the record remains quarantined. The correct fallback is an honest status page or no route, never a thin “coming soon” leaf that competes in search.

## 2. Priority model and phase gates

Priority is calculated as **risk × reach × reversibility × information gain ÷ effort**. Safety and truth always outrank traffic. A phase cannot start merely because its code is complete; it starts when its evidence gate is green.

### Phase P0 — Containment and invariants (complete; maintain forever)

**Purpose:** make unsafe or unreviewed content impossible to publish accidentally.

**Controls already in place:**

- Approved-only health and food route generation.
- Deterministic quarantine ledgers for health, food, locality and Tier-3 records.
- Exact-content fingerprint binding for review approvals.
- Reviewer scope, source access-date, HTTPS and credential-free URL checks.
- Prohibited affirmative cure/reversal, diagnosis, prescription and medication-change language checks.
- Route-to-approved-projection parity, title/description uniqueness and length checks.
- No `/locations` routes, no public recipe leaves and no physical-office claims.
- Same visible breadcrumb model in HTML and JSON-LD.
- Same-origin enforced CSP, conservative robots, safe canonical handling and neutral 1200×630 default OG asset.
- Generated-output hardening now uses exact origin parsing (not a string prefix), rejects `javascript:`, `data:`, `vbscript:`, `file:` and `blob:` links, and blocks unverified local/medical/review schema types.
- A dedicated output-policy mutation suite protects those checks against regression.
- Layout metadata now rejects cross-origin Open Graph images and breadcrumb URLs, preventing future tracking, authority leakage or misleading entity edges.
- Approved-content mutation coverage now rejects affirmative universal-outcome, detox/cleanse, absolute-safety and care-avoidance language while preserving bounded “does not” limitations.
- Search-index generation now validates the Pagefind manifest after writing, retries once on a truncated artifact and fails closed instead of shipping an empty/invalid search index.
- Sitemap generation now uses the same exact-origin validator as HTML output, eliminating split-brain canonical policy between the sitemap and final-page checks.
- Health and food hubs now derive indexability and visible leaf links from the approved projection: empty hubs remain `noindex`, while the first approved cohort cannot become orphaned or hidden behind “planned” taxonomy cards.
- Approved-record SEO titles and meta descriptions now pass the same affirmative safety-language policy as body content, preventing unsafe promises from entering snippets or social previews.

**P0 audit:** run `npm run release:verify`, inspect the generated route list, sitemap, headers and source-import graph. Store the build artifact hash.

**Fallback:** if any P0 gate fails, publish nothing new; remove the affected projection or route and regenerate the sitemap from the last green commit. Do not patch the generated `dist` directory by hand.

### Phase P1 — Truth, provenance and medical-safety operating system (next)

**Objective:** turn the empty approval graph into a small, auditable, human-reviewed graph.

**Infrastructure update (implemented 28 August 2026):** the trusted graph now fails closed on unknown fields and wrong ID namespaces; requires author identity, role, correction ownership and consent dates; requires reviewer credential provenance, scope, consent, independence and conflict disclosure; requires source version/publication and retraction-check evidence; binds every approved claim to applicability fields, exact source locations, a verified reviewer and allowed destination paths; prevents one person acting as both author and sole reviewer; and requires review-scope, conflict, editorial and compliance attestations. The human intake sequence is defined in `docs/execution/PHASE_1_TRUTH_REGISTRY_WORKSHEET_2026-08-28.md`. Real people, credentials, evidence and approvals remain intentionally unfilled.

#### P1.1 Identity and accountability

- Verify legal/provider identity, author role, reviewer credentials, scope, jurisdiction and conflict-of-interest disclosure.
- Keep public bios factual and limited to verified qualifications; only add `sameAs` links that are public, consented, HTTPS and credential-free.
- Assign a correction owner and a maximum response SLA (same day for safety-critical errors).
- Record reviewer independence and escalation path; the drafting author cannot be the sole safety approver.

**Loopholes to close:** invented experts, copied profile URLs, expired credentials, reviewer scope broader than the actual specialty, and “AI reviewed” as a substitute for a person.

**Fallback:** missing or expired identity data means `quarantine`; never downgrade the reviewer requirement to an editorial sign-off.

#### P1.2 Source and claim provenance

- Build a source registry with publisher, title, canonical URL, publication/version date, `accessedAt`, retraction/correction state, jurisdiction, evidence type and license.
- Link every material sentence to an exact claim ID and source location; citation presence is not proof of entailment.
- Run a contradiction pass across sources and show uncertainty where sources disagree.
- Separate composition facts, associations, causation, clinical guidance, food preparation and supplement/extract evidence.
- Add a “what this does not establish” boundary to high-risk sections.

**AI red-team prompts:** ask a model to produce a plausible but unsupported statistic, to merge a food with its extract, to turn association into treatment, and to use an outdated guideline. The validator must detect the output or a human must reject it.

**Fallback:** dead, retracted, inaccessible or contradictory evidence removes the affected claim from the public projection until replaced and re-reviewed.

#### P1.3 Lifecycle and decay

- Make substantive changes create a new review event and new content fingerprint.
- Run a scheduled decay scan for review expiry, source retraction, URL drift, guideline replacement, broken citation and ranking/traffic anomaly.
- Record a visible change note only for real substantive changes; never bump dates cosmetically.
- Preserve the prior reviewed version privately for incident review and rollback.

**Done when:** one page can be traced from canonical entity → claims → sources → author/reviewer → review event → exact bytes → deployed URL.

### Phase P1A — Tier-1 health pilot (3–5 pages, not a bulk launch)

**Suggested review candidates:** hypertension, type 2 diabetes, iron-deficiency anemia, hypothyroidism and GERD. These are candidates only; availability of an in-scope reviewer and evidence decides the final set. Exclude reversal promises, medication discontinuation, dosing, surgery/procedure instructions and broad multi-condition pages from the first canary.

For each page, complete this transaction in order:

1. Resolve entity name, aliases, disambiguation, intent and canonical URL.
2. Resolve duplicates and record merge/redirect/retire decisions with cycle detection.
3. Rewrite the page in the approved content contract; no legacy boilerplate patching.
4. Build the claim ledger and source links.
5. Obtain author, reviewer, safety and editorial/compliance sign-offs.
6. Fingerprint the exact source bytes and compile the approved projection.
7. Run source, content, schema, accessibility, link, performance and output gates.
8. Deploy as a canary without sitemap submission; verify production responses and logs.
9. Add the cohort to the sitemap only after parity and rollback checks pass.

**Page contract:** one 35–100-word direct answer; one H1; descriptive H2/H3 hierarchy; at least 800 non-FAQ core words; definition/aliases; symptoms or signs only when appropriate; causes/risk context without personal diagnosis; evidence table; limits/uncertainty; food/lifestyle context without treatment promises; urgent-help boundary; sources; author/reviewer; review due date; related reviewed links; accessible tables and stable anchors.

**Gate:** 100% material claims mapped to an approved source; no prohibited language; no unsupported local personalization; HTML/schema/meta parity; no orphan or duplicate URL; p75 field performance within target; reviewer still current at deploy.

**Rollback:** remove the affected approved record and sitemap entry; use a 301 only for a truly equivalent entity, otherwise 410. Never redirect the entire cohort to the home or service page.

### Phase P1B — Tier-2 food pilot (after the health canary)

Start with 5–10 recognizable whole foods such as mango, guava, spinach, tomato, carrot, chickpeas, lentils, atta, rice and flaxseed, subject to evidence and reviewer availability.

Each food page must distinguish identity, edible portion, composition, serving/unit conversions, preparation/storage, allergens and contamination risks, population variability, evidence strength and limits. Minimum 600 non-FAQ core words. A nutrient presence is not a disease treatment; a food is not its extract, supplement or isolated compound.

**Food-specific failure tests:** unsafe raw/undercooked advice, wrong species or variety, serving-size arithmetic errors, regional-name collision, unsupported glycaemic or disease claim, and stale food-composition data.

### Phase P1C — Online-service truth and location model

The current `/services/online-nutrition` page is intentionally `noindex` and states remote channels only. Before making it indexable, verify provider identity, professional scope, jurisdiction, channels actually staffed, online availability hours, pricing, refund/cancellation, privacy, secure intake, accessibility and emergency boundary.

**Allowed:** one online-service page; accurate `Service`, `Organization`, `WebSite` and `WebPage` schema; `areaServed` only for real eligibility.

**Not allowed:** `LocalBusiness`, `MedicalClinic`, postal address, map pin, opening hours for a nonexistent office, fake local staff, Google Business Profile for an online-only operation, or thousands of city landing pages.

**Location-intent solution:** answer “Is this available in my city/state?” in one transparent service-area section or a data-backed availability tool. Publish a local editorial/data page only when it contains genuine local evidence and does not imply an office. If a staffed physical location is later created, verify it independently before adding one location page and local schema.

### Phase P1D — Tier-3 reference layer

Create a separate contract and namespace for nutrients, dietary patterns, food matrices and general reference definitions. Do not route Tier-3 records through health or food templates. Require reference-specific sources, units, update cadence and reviewer scope. The registry must fail closed on any new unmapped top-level knowledge folder.

## 2A. Exhaustive page, component and control-plane matrix

This matrix is the required review order. “Indexable” means indexable only when the page’s own contract is green; it is not a promise that every current page should enter the sitemap.

| Surface | Current policy | Upgrade / audit question | Fail-safe |
|---|---|---|---|
| `/` home | Indexable | Does the opening answer state the educational scope without clinical authority inflation? Are Organization/WebSite IDs consistent? | Remove unsupported claims; keep a plain education statement |
| `/about` | Indexable | Verify accountable organization, editorial boundaries, AI-use disclosure and correction route | `noindex` until identity is verified |
| `/contact` | Indexable | Accept only general questions/corrections; ensure forms do not invite health records or IDs | Disable ordinary-email health intake |
| `/legal/*` | Indexable | Check effective dates, owner, consent, retention, cookies, corrections and jurisdiction consistency | Keep policy visible; block the related feature |
| `/sitemap` | Indexable | List only useful canonical sections; never expose quarantine paths as discovery promises | Regenerate from built canonicals |
| `/knowledge` | Indexable | Explain what is published versus under review; no thin taxonomy doorway pages | Keep child sections `noindex` |
| `/health` hub | `noindex` until approved children exist | Show honest review status and link to methodology; no empty indexable hub | Remain `noindex` |
| `/health/[slug]` | Approved-only | Execute the complete Tier-1 transaction and 800-word/content/safety contract | No route when approval, fingerprint or source fails |
| `/foods` hub | `noindex` until approved foods exist | Avoid a thin category page; show publication state accurately | Remain `noindex` |
| `/foods/[item]` | Approved-only | Validate food identity, serving units, preparation, allergens and evidence boundaries | No route; never fall back to legacy food text |
| `/knowledge/[section]` | `noindex` status pages | Prevent reference sections from being mistaken for food or disease leaves | Keep status-only until Tier-3 contract is complete |
| `/services/online-nutrition` | `noindex` verification status | Verify provider, scope, jurisdiction, channels, price, privacy and emergency boundary before indexability | Keep one online-only page; no local schema |
| `/clinics`, `/plans`, `/connect` | `noindex` status pages | Remove contradictory offers, implied locations and unavailable onboarding | Link to truthful policies/status only |
| `/recipes`, `/recipe/[id]` | No public leaves | Require separate recipe, allergen, preparation and claim review before any route | Empty path set; no redirect to home |
| `/search` | `noindex` | Keep search useful to people without creating crawlable query variants | `noindex`; block parameter discovery |
| `/team`, `/testimonials` | `noindex` status/policy | Do not imply credentials or typical outcomes before verification | Keep status copy; no Person/review markup |
| `/404` | `noindex` | Provide search/navigation help without auto-redirecting arbitrary URLs | 404 status; no soft-404 copy |
| `llms.txt` | Curated machine guide | List only published, factual, high-value pages; never quarantine URLs or hidden corpus | Regenerate from approved canonicals |
| Sitemap generator | Canonical projection | Honest `lastmod`, correct status, no noindex URLs, segmented when volume grows | Fail build on drift |
| `BaseLayout` / `SeoHelper` | Shared metadata shell | Canonical origin, title/description bounds, OG type, robots and breadcrumb parity | Throw on cross-origin/invalid inputs |
| `ApprovedLeafPage` | Shared leaf renderer | One answer-first HTML artifact, visible sources, reviewer and due date, schema parity | Render no leaf if contract is incomplete |
| `JsonLd` | JSON-LD serializer | Escape safely; emit only visible, verified types/properties; preserve `@id` graph consistency | Remove offending block and fail verification |
| `Header` / `Footer` / `CompatLink` | Navigation shell | Keyboard flow, descriptive anchors, no dead links, Tier-1 before Tier-2 information scent | Remove link rather than expose a dead/unsafe route |
| `Icons` / logo / OG assets | Visual trust layer | Alt text, neutral authority, 1200×630 social fallback, dimensions and compression | Use text/neutral fallback; no clinical imagery |
| Publishing registries | Control plane | Raw inventory remains non-importable; decisions, truth, claims and fingerprints are human-owned | Quarantine on any missing/unknown field |
| Legacy migration scripts | Maintenance risk | Build an import graph; label one-shot scripts; archive/delete only after snapshot confirmation | Keep disconnected and excluded from build |
| Tests and verification scripts | Release safety net | Every newly discovered loophole becomes a deterministic mutation test | Block release until the test is green |

### Component-level hidden failure checks

- **Metadata drift:** compare title, description, canonical, OG and JSON-LD URL against the final response, not source props alone.
- **Navigation drift:** crawl every rendered link and compare its policy class with the destination’s index policy; a link to a quarantined leaf is a release defect.
- **Schema inflation:** reject `MedicalWebPage`, `LocalBusiness`, `MedicalClinic`, `Review`, `AggregateRating`, `Offer` or `areaServed` when the visible page cannot substantiate them.
- **Status-page repetition:** compare status pages for contradictory claims, duplicated titles and dead-end journeys; status pages may be useful but must not crowd the index.
- **CSS/asset drift:** track unused selectors, duplicate icons, font fallbacks, layout shift sources and dark-mode branches before deleting anything.
- **Legacy-script reconnection:** source-scan must fail if a migration, locality generator, raw registry or recipe database is imported by application routes.
- **Data-shape drift:** require a schema version and migration note whenever registry fields change; reject unknown fields in release-critical records.
- **Observability drift:** every quarantine, publish, rollback and correction must emit an event that can be correlated with the page, claim, build and reviewer.

## 3. Architecture and rendering upgrades

- Keep Astro static rendering for all indexable text; hydration is permitted only for measured-value tools.
- Maintain one semantic HTML artifact for people, search crawlers and AI retrieval; never create a bot-only answer layer.
- Keep URL depth short, lowercase, hyphenated and parameter-free for indexable pages.
- Make `@id` relationships explicit across Organization, WebSite, WebPage, Service, author, reviewer, claims and sources only when the relationships are visible and verified.
- Add a canonical URL history ledger before the first leaf launch.
- Keep search, status, quarantine and internal tools `noindex`; never hide them only with robots rules.
- Use a custom 404 that helps a human find a real reviewed page, but do not auto-redirect arbitrary URLs.

**Architecture fallback:** if a component needs client JavaScript to reveal a material claim, rewrite it as server-rendered HTML. If a dynamic tool cannot meet privacy, latency or parity requirements, ship a static methodology page first.

## 4. Technical SEO audit and upgrades

### Crawl and indexation

- Segment future sitemaps by template and include `lastmod` only from substantive review events.
- Submit only the verified canonical set to Search Console and Bing; use IndexNow only for actual publish/update/remove events.
- Analyze 30 days of server logs monthly: parameter waste, redirect chains, soft 404s, orphan pages, discovery-to-index latency and AI-bot directory hits.
- Verify crawler identity by reverse DNS/TLS or an equivalent verified-bot signal before treating a user-agent as trusted.
- Mine 404s for AI-referrer hallucinated URLs. 301 only to an exact equivalent; otherwise return 410 and record the decision.

### On-page and entity checks

- Unique title (20–70 characters) and description (70–180 characters) per indexable page.
- One H1, logical heading order, stable descriptive anchors and useful internal links from hubs and sibling pages.
- Shared visible/schema breadcrumbs and explicit `about`/`mentions` only for entities actually discussed.
- No keyword meta, hidden text, doorway variants, mass translations or synthetic freshness.

**SEO fallback:** if a requested keyword cannot be supported by a distinct, useful, reviewed entity, put it in the editorial backlog—not in a URL, title or hidden field.

## 5. AEO, GEO and AIO retrieval plan

### Page-level extraction contract

- Open every target section with a self-contained 40–80-word answer; put nuance after the answer.
- Use liftable, attributed claims with exact numbers only when the denominator, units, population and source are shown.
- Prefer semantic tables, numbered steps, definition blocks, balanced trade-offs and myth/fact pairs.
- Build a fan-out matrix: each priority query maps to 4–8 real sub-questions and one owned URL/anchor; do not manufacture one page per phrasing.
- Add a visible “last substantive update” note and a recent-change summary when a page changes.
- Keep `/llms.txt` a short, curated reading list. Never expose quarantined records through a private/full feed.
- Sample 25–100 health/food/service prompts across major answer engines monthly; record citation, factual accuracy, framing, freshness and which page section was used.

### High-leverage, white-hat ideas

1. **Evidence atlas:** a versioned India-relevant dataset with methodology, data dictionary, limitations and downloadable machine-readable data after expert review.
2. **Claim provenance explorer:** a public, reader-safe view of claim → source → evidence grade → last review → uncertainty; never expose private reviewer notes.
3. **Definition ownership:** careful canonical definitions for nutrition terms with disambiguation and `DefinedTerm` only where visible.
4. **Methodology-first tools:** a serving/unit converter or evidence calculator whose math, inputs, ranges and limitations are public and tested.
5. **Content-decay CI:** automatically create a review ticket or quarantine a page when evidence freshness or fingerprint validity fails.
6. **Answer-consistency audit:** compare how answer engines describe the brand and service with the canonical boilerplate; repair the stale external source, not the symptom.
7. **Citation-source arbitrage:** identify third-party domains repeatedly cited for the same health questions and pursue genuine expert contributions there.

These tactics improve information gain and citation eligibility. They do not justify fabricated numbers, fake testimonials, prompt injection, invisible text or “AI schema.”

## 6. Bot and crawler management

- Allow verified search and live answer fetchers to access the same HTML humans receive.
- Audit CDN bot-management settings; robots.txt alone cannot reveal a silent AI-bot block.
- Rate-shape abusive scrapers with 429/Crawl-delay or soft challenges; avoid broad 403 rules that catch legitimate crawlers.
- Keep the honeypot trap disallowed in robots and use it only as a signal for suspicious behavior.
- Monitor bot hits by directory and trend; rising AI crawler hits are a leading indicator, not a success claim.
- Ensure edge personalization changes examples only; facts, prices, eligibility, warnings and schema remain identical for every user agent.

**Bot loophole:** a spoofed Googlebot user-agent must not receive privileged content. Trust verified signals, not strings. **Cloaking loophole:** snapshot human and crawler HTML for parity during release tests.

## 7. Core Web Vitals, performance and resilience

Targets are field p75, not lab trophies: LCP ≤2.5 s (elite 1.2–1.5 s), INP ≤200 ms (elite 100–150 ms), CLS ≤0.1 (elite ≤0.05), TTFB ≤500 ms (elite <200 ms where practical). Alert at 80% of the threshold.

Execution order:

1. Capture mobile and desktop visual snapshots before CSS cleanup.
2. Remove unused utilities, dead dark-mode paths, legacy animations and unused font declarations.
3. Lower the CSS gate to 40 KB, then 30 KB after visual parity is proven.
4. Keep priority leaves at zero JS; use native details/popover/CSS where sufficient.
5. Add explicit dimensions, responsive sources and reviewed alt text to every future image.
6. Measure CrUX/RUM by template and low-end Android/3G class, not only desktop Lighthouse.
7. Add bfcache, long-task, third-party and font-loading checks.
8. Consider HTTP/3, Brotli, stale-if-error, AVIF/WebP and 103 Early Hints only after production measurement.
9. Trial speculation rules/view transitions only behind a kill switch, with Save-Data/battery respect and origin-load monitoring.

**Fallback:** any CWV regression above alert level rolls back the asset/CSS/interaction change. Do not add a heavy “wow” effect to compensate for a slow answer.

## 8. UX, accessibility and visual-quality plan

- Preserve answer-first hierarchy, topic breadcrumbs, visible safety boundaries and clear review metadata.
- Test keyboard navigation, focus visibility, screen-reader landmarks, 200% zoom, reflow, contrast, target size, table reading order and reduced motion.
- Keep one signature interaction for the site and at most one non-critical wow moment per page; it must lazy-load after LCP.
- Use real explanatory visuals (food identity, preparation, evidence method), not decorative or authority-implying stock imagery.
- Provide a neutral raster 1200×630 social card fallback and validate unfurls on major platforms.
- Make status pages useful: explain the review state, link to published policy pages and offer a safe next action; do not create repetitive dead ends.
- Add a complete dark-mode contract only if tested; otherwise remove dead classes.

**Accessibility fallback:** if a visual or interactive component cannot be understood with text and keyboard input, it cannot be a required part of the page.

## 9. Social and distribution plan

Distribute only from an approved page package: canonical answer, evidence card, safety boundary, reviewer-approved wording, 1200×630 OG image and privacy-reviewed CTA.

- Use founder/expert-led LinkedIn, chaptered YouTube transcripts, genuine Reddit/Quora expertise and India-appropriate WhatsApp distribution.
- Atomize one evidence asset into platform-native formats; do not copy-paste identical promotional posts.
- Use one-tap Web Share and disclosed UTM/copy events; treat direct traffic as uncertain dark-social attribution.
- Never use testimonials, before/after images or individual outcomes as population evidence.
- Disclose employee advocacy and sponsorship; do not buy engagement or seed undisclosed astroturfing.

**Distribution fallback:** if a claim cannot fit in a short social format without losing its limitation or context, publish the source/methodology asset first and do not shorten the claim.

## 10. AI hallucination and adversarial-risk matrix

| Risk | Detection | Safe response |
|---|---|---|
| Invented statistic or dosage | Claim ledger + unit/denominator validator | Remove claim; quarantine page |
| Citation does not entail sentence | Human source-location check | Rewrite to supported wording or remove |
| Outdated/retracted guideline | Source freshness/retraction scan | Replace source and re-review fingerprint |
| Food merged with extract/supplement | Entity and intervention fields | Split entities; block unsafe inference |
| Association rewritten as causation | Causality lint + reviewer red-team | Use association language or remove |
| Diagnosis/prescription/medication change | Unsafe-pattern tests + clinical review | Reject; add professional-care boundary |
| Fake author/reviewer or credential | Identity registry and consent evidence | Quarantine identity and page |
| Locality personalization implies office or risk | No-location route gate + claim scope check | One national service page or evidence-backed editorial page |
| Schema stronger than visible text | JSON-LD/HTML parity test | Remove schema type/property |
| Duplicate/fan-out doorway pages | Canonical/entity collision audit | Merge, retire or keep unlinked |
| AI-generated prompt injection or hidden text | Raw HTML/source scan | Remove payload; block build |
| Post-review content drift | SHA-256 fingerprint mismatch | Invalidate event; require re-review |
| Bot cloaking | Human/crawler snapshot diff | Revert edge rule; same HTML for all |
| Fake social proof | Evidence/provenance review | Remove and disclose correction |
| Hallucinated URL | AI-referrer 404 analysis | Exact-equivalent 301 or 410 |
| Private health data leakage | Redaction scan and intake review | Stop collection; use secure reviewed workflow |

## 11. Release, rollback and incident protocol

### Pre-release command sequence

```text
npm run leaf:audit:check
npm run leaf:compile:check
npm run leaf:verify
npm run leaf:test
npm run location:audit:check
npm run reference:audit:check
npm run verify:source
npm run check
npm run lint
npm run build
npm audit --omit=dev
```

Then verify the deployed host: status codes, headers/CSP, canonical, robots, sitemap, JSON-LD, source-visible answer, link targets, noindex behavior, mobile rendering, accessibility smoke tests and production logs.

### Rollback matrix

| Incident | Immediate action | Recovery condition |
|---|---|---|
| Unsafe or unsupported claim | Remove projection; preserve private reviewed version | Corrected source + new reviewer event + new fingerprint |
| Source retracted/dead | Unpublish affected claim/page | Replacement source and re-review |
| Index drift/unapproved URL | Remove sitemap and route; 410 if no equivalent | Route parity and deployed verification green |
| False office/location statement | Revert to online-only wording; remove local schema | Provider facts independently verified |
| Metadata/schema mismatch | Roll back template or schema block | Visible/structured parity test passes |
| CWV/accessibility regression | Roll back asset/CSS/interaction | Field and manual checks green |
| Bot rule false positive | Disable rule; use soft rate-shaping | Verified-bot tests and logs stable |
| Privacy/security issue | Disable intake/analytics integration | Privacy owner and security review complete |

Record incident date, affected URLs/claims, exposure, detection, correction, reviewer, public change note and prevention test. Never conceal a correction with a fake publish date.

## 12. Measurement scoreboard

| Layer | KPI and target | Cadence / owner |
|---|---|---|
| Safety | 100% material claims have source + reviewer; 0 prohibited-language failures | Every build / content lead |
| Indexation | 0 locality/recipe/unapproved leaves; sitemap equals approved canonicals | Every release / technical SEO |
| Provenance | 100% fingerprint, source access date, reviewer scope and correction owner | Every approval |
| Search | Non-brand clicks, index coverage, discovery-to-index latency, orphan count | Weekly/monthly |
| AI visibility | Citation rate, factual/framing accuracy across 25–100 prompts and 4 engines | Monthly |
| Crawl | Verified bot hits, AI-bot directory trend, crawl-waste percentage, 404 hallucination recovery | Weekly/monthly |
| Performance | Field p75 LCP/INP/CLS/TTFB; alert at 80% thresholds | Continuous |
| UX | Task completion, scroll-to-answer, accessibility defects, support confusion rate | Per cohort |
| Authority | Quality referring domains, genuine expert citations, dataset/tool reuse | Monthly |
| Service | Qualified online inquiries, WhatsApp starts, secure-intake completion, no misleading-location complaints | Weekly |
| Agility | Median review-to-publish time, rollback time, stale dependencies, dead imports, test coverage of policy rules | Sprint/release |

Never use raw impressions, keyword count, AI mentions without accuracy, or social likes as the sole success measure.

## 13. 90-day execution order

### Days 0–7 — Freeze and prove controls

- Keep P0 containment green.
- Create identity, reviewer, source, claim, taxonomy and review-event templates.
- Capture baseline route/sitemap/header/schema snapshots and CSS/field-performance measurements.
- Add a canonical URL history ledger and incident owner matrix.

**Gate:** no unapproved route; every control has an owner, test and rollback.

### Days 8–21 — Truth graph and first health page

- Verify one author and one in-scope reviewer.
- Build one health entity end-to-end, including contradictions, uncertainty and urgent-care boundary.
- Run adversarial AI and human review; fingerprint final bytes.

**Gate:** one page passes the full transaction; no bulk import.

### Days 22–35 — Health canary and observability

- Add 2–4 additional health pages only if the first page survives production checks.
- Deploy without sitemap submission, compare human/crawler HTML, inspect logs and monitor support questions.
- Submit the cohort only after parity and rollback evidence.

**Gate:** all canary pages remain truthful, accessible, fast and independently useful.

### Days 36–50 — Food canary and reference separation

- Launch 5–10 food pages after the health workflow is stable.
- Keep Tier-3 records in their own namespace and contract.
- Add source/unit/serving and preparation red-team tests.

**Gate:** no food page makes a treatment promise or substitutes for clinical guidance.

### Days 51–70 — Retrieval, technical and design compounding

- Implement fan-out matrix, evidence tables, definition pages, claim provenance view and honest freshness notes.
- Reduce CSS with snapshots; add field CWV/RUM and performance budgets.
- Finish Search Console/Bing, segmented sitemap and verified-bot log dashboards.

**Gate:** measurable information gain and no parity/performance regression.

### Days 71–90 — Authority and distribution

- Publish the first expert-reviewed India nutrition dataset or methodology tool.
- Run reverse-source citation analysis and one genuine expert contribution on a citation super-spreader.
- Ship platform-native social assets, WhatsApp-safe summaries and dynamic OG only after asset/privacy review.

**Gate:** every external artifact links to an approved source and preserves safety limitations.

### Ongoing monthly loop

`source/retraction scan → claim/accuracy audit → AI citation sample → log/crawl review → CWV review → content decay tickets → incident/rollback drill → roadmap reprioritization`.

## 14. Definition of done for any future upgrade

An upgrade is complete only when it has:

- a named user/search/retrieval problem and measurable hypothesis;
- a human owner, risk classification and rollback switch;
- visible-content, structured-data and crawler-parity review;
- accessibility, privacy, security and performance checks;
- adversarial tests for hallucination, duplicates, unsafe interpretation and stale data;
- production evidence, not only a local build result;
- documentation of what changed, what did not change and what would trigger quarantine.

## 15. Explicitly prohibited shortcuts

No fake office or local staff, fake reviews, bought links/followers, PBNs, expired-domain equity schemes, hidden text, prompt injection, bot-only content, mass AI page generation, keyword stuffing, synthetic `lastmod`, schema for invisible content, unsupported medical outcomes, medication instructions, unsafe dosage, ordinary-email health-record intake, or blanket redirects of locality URLs.

The project wins by becoming a small, demonstrably reliable source first, then expanding only where the evidence, reviewer capacity, user value and operational controls can keep pace.

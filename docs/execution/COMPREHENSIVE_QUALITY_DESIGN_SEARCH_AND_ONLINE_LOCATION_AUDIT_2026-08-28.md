# Comprehensive Quality, Design, Search and Online-Location Audit

**Audit date:** 28 August 2026  
**Project:** NutritionColours  
**Scope:** generated pages, route sources, layouts, components, publishing registries, quarantined health/food/location/recipe content, crawler controls, metadata, structured data, security headers, performance budgets and online-service location strategy.

## Executive decision

The safest and strongest architecture is:

1. **Tier 1:** reviewed health-topic, condition and disease leaf pages under `/health/{entity}`.
2. **Tier 2:** reviewed food leaf pages under `/foods/{food}`.
3. **Tier 3:** nutrient, dietary-pattern and general reference pages, governed separately rather than mislabeled as foods.
4. **Service:** one verified online-service page, not thousands of city office pages.
5. **Locality:** no `MedicalClinic`, `LocalBusiness`, street address, map pin, opening-hours or “near me” representation unless a real, staffed, customer-facing physical location exists.

No responsible audit can promise a literal zero-violation or “perfect ranking” outcome. The correct engineering objective is fail-closed publication, evidence traceability, policy-aligned behavior, measurable quality and rapid rollback.

The execution sequence, owners, gates, adversarial tests, rollback matrix and 90-day backlog are maintained in the [Elite Audit-Improvement Master Plan](./ELITE_AUDIT_IMPROVEMENT_MASTER_PLAN_2026-08-28.md).

## Verified project state

| Area | Verified result |
|---|---:|
| Built HTML pages after containment | 29 |
| Current indexable canonical pages | 9 |
| Approved health leaves | 0 |
| Approved food leaves | 0 |
| Governed Tier-1 health records | 1,126, all quarantined |
| Governed Tier-2 food records | 1,047, all quarantined |
| Governed Tier-3 reference records | 133, all quarantined |
| Legacy locality-condition drafts | 3,553, disconnected from routes |
| Locality drafts with authors/reviewers/source sections | 0 / 0 / 0 |
| Locality drafts requesting indexing and medical/FAQ schema | 3,553 / 3,553 |
| Locality drafts with online-only disclosure | 0 |
| Public recipe leaf drafts after correction | 0 |
| JavaScript on indexable pages | 0 bytes initially referenced |
| Global CSS on each page | 59,483 raw bytes |
| Dependency audit | 0 known production vulnerabilities |

The release gate passes type, lint, build, approved-content, publishing-graph, source-safety, sitemap/search parity, JSON-LD parsing, internal-link, fragment, accessible-link-name, duplicate-ID, heading-order and performance-budget checks. Passing this gate is not a claim of clinical, legal or WCAG certification.

## Critical findings and disposition

| Priority | Finding | Risk | Disposition |
|---|---|---|---|
| P0 | Clinical review expiry used a hard-coded 21 August 2026 date | A review expiring after that date could pass later builds | Fixed: policy defaults to the real build date; mutation test added |
| P0 | 49 unreviewed recipe leaves were public despite `noindex` | Direct-user safety and reputational risk; unsafe titles/ingredients remained reachable | Fixed: zero recipe leaf routes are generated |
| P0 | Web manifest claimed reversal of chronic metabolic conditions | Machine-readable unreviewed outcome claim | Fixed and protected by source check |
| P0 | 3,553 locality drafts declare `index, follow`, templated city medical advice, location schema and FAQ schema | Scaled-content, doorway, misleading-locality and YMYL risk if reconnected | Contained: no routes; deterministic ledger records 3,553/3,553 with no author, reviewer, source section or external evidence; build now fails if any `/locations` route appears |
| P0 | 245 `life-stage` and `organ-wise` health files were outside the publishing registry | Priority health corpus escaped diagnostics | Fixed: added to Tier-1 health quarantine |
| P0 | Approval was bound to a content ID and date, not exact content bytes | Reviewed text could be changed in place without invalidating the approval event | Fixed: every publish event now requires a SHA-256 fingerprint matching the exact approved source bytes |
| P1 | Verified-source records did not require access dates or credential-free URLs; identity links were not constrained to safe HTTPS | Stale, non-auditable or credential-bearing evidence/identity links could enter an approved graph | Fixed: verified sources now require `accessedAt`; source and `sameAs` links reject credentials and non-HTTPS identity URLs |
| P1 | Claim IDs alone could theoretically accompany affirmative cure, reversal, diagnosis, prescription or medication-change language | A citation label could disguise an unsafe recommendation | Fixed: approved-content validation rejects affirmative outcome promises, medication changes, diagnosis and prescription instructions; mutation tests cover these cases |
| P2 | Robots used a nonstandard query-string disallow rule; CSP allowed unused external image/form destinations | Crawler behavior and security policy could diverge from the actual static site | Fixed: page-level `noindex` governs search pages; robots no longer uses query syntax; CSP is same-origin for images and forms and is checked in both deployment configurations |
| P2 | Indexable metadata had no uniqueness or length gate | Future templates could create duplicate or weak snippets while still passing build | Fixed: generated-output verification now enforces unique titles/descriptions and 20–70 / 70–180 character bounds |
| P1 | Head helper accepted absolute cross-origin canonical input | A component mistake could transfer canonical authority away from the site | Fixed: canonical generation now throws on any cross-origin value |
| P1 | Approved page contract could pass with roughly 100 words | Thin YMYL page could satisfy section-name checks | Fixed: 800 core words for health, 600 for food; FAQ cannot pad the count |
| P1 | Approved leaf direct answer replaced the validated meta description | Overlong/inconsistent snippets and metadata parity failure | Fixed: meta description now uses the reviewed `metaDescription` |
| P1 | CSP was report-only with no reporting endpoint | Neither enforcement nor useful telemetry | Fixed: enforced CSP with scripts/styles limited to same origin |
| P1 | Empty food hub was indexable | Thin status page could consume index quality | Fixed: hub stays `noindex` until at least one approved food exists |
| P1 | Generated-output canonical validation used a string-prefix test and allowed dangerous URL/schema edge cases to lack regression coverage | A look-alike host, unsafe link scheme or unverified local/medical schema could evade the structural gate | Fixed: exact-origin parsing, `javascript:`/`data:`/`vbscript:`/`file:`/`blob:` rejection, conservative schema denylist and output-policy mutation suite |
| P1 | Shared layout accepted cross-origin OG images or breadcrumb URLs | Future template props could leak tracking/authority signals or create misleading entity edges | Fixed: BaseLayout and SeoHelper now require same-origin OG and breadcrumb URLs |
| P1 | Content safety patterns did not cover affirmative universal-outcome, detox/cleanse, absolute-safety or care-avoidance wording | AI or editorial drift could turn educational copy into misleading health assurance | Fixed: affirmative detectors and mutation coverage added; bounded limitation language remains permitted |
| P1 | Pagefind could report a successful write while leaving `pagefind-entry.json` truncated | A release could ship a broken internal search index despite a green generator response | Fixed: manifest integrity validation, one retry and fail-closed output handling |
| P1 | Sitemap generator and generated-output verifier used separate canonical-origin rules | Future canonical edge cases could produce sitemap/page disagreement | Fixed: both now use the shared exact-origin validator |
| P1 | Health hub stayed `noindex` permanently and food hub could become indexable without showing approved leaves | First approved pages could be orphaned while a thin/planned hub entered the index | Fixed: both hubs derive status and visible links from the approved projection |
| P1 | Approved records validated body copy but not SEO titles/descriptions | Unsafe medical promises could enter search snippets or social previews even when body text was safe | Fixed: metadata now uses the same affirmative safety-language policy with regression tests |
| P0 | Production deployment does not match the current green repository (verified 29 August 2026) | Live sitemap still exposes 12,951 URLs, including 8,355 `/clinic/*` locality/service pages for an online-only service; `/health` and `/services/online-nutrition` return 404; the retired honeypot remains 200; sampled legacy pages expose unverified `Physician`/`Review` schema and omit key security headers | Code-side verifier added as `npm run verify:live`; stop sitemap submission and deploy only the current reviewed artifact through the separately authorized release process, then rerun the gate |
| P1 | Trusted truth rows accepted unrecognized fields and underspecified identity, claim, source and review records | Model-generated or editorially ambiguous data could look authoritative, claims could leak across pages, and a citation could lack exact support | Fixed: collection allowlists and namespaces, identity/consent and credential provenance, source version/retraction checks, atomic claim boundaries and locators, destination binding, separate author/reviewer accountability, and conflict-attested review events; 25 adversarial leaf-policy states now covered |
| P1 | Four legacy food slugs still emitted individual review-status leaf pages | Redundant leaf-shaped URLs existed before evidence approval | Fixed: both health and food dynamic routes now emit approved records only |
| P1 | Output verification did not compare priority leaf routes with the approved projection | A future fallback could reappear as a noindex leaf without an obvious build failure | Fixed: generated-output gate now rejects unapproved `/health/{slug}` and `/foods/{slug}` routes and missing approved routes |
| P1 | Online service truth was internally contradictory | Owner states remote services exist while `/plans` said services were not offered | Fixed at status level: one `noindex` online-only page now states remote channels and no physical presence; commercial/clinical details remain blocked pending verification |
| P1 | No reviewed health or food leaf exists | The intended search product has not launched | Content operations, not more SEO tags, is the critical path |
| P0 | 133 nutrient/reference records had no Tier-3 registry model | They were outside diagnostics and could be exposed by future reference routes | Fixed: separate `nutrition-reference` quarantine registry and prebuild synchronization gate; 0 are publishable |
| P1 | New knowledge top-level folders could bypass every declared cohort | Future content might enter the source tree without a page-kind policy | Fixed: reference audit fails closed on any markdown-bearing unmapped top-level folder |
| P2 | Global CSS is 59.5 KB raw; design system contains unused utilities/dead dark-mode paths | Larger-than-necessary render payload and maintenance surface | Reduce to <30 KB raw after visual-regression snapshots |
| P2 | Default Open Graph image was a 1200×800 SVG carrying clinical wording | Weak/cropped social unfurls and unnecessary clinical-authority implication | Fixed: neutral food/nutrition wording and 1200×630 canvas; raster/icon variants remain optional after a visual asset review |
| P2 | Breadcrumb JSON-LD was URL-derived while approved pages lacked a fully matching visible trail | Entity-label mismatch risk for acronyms and aliases | Fixed: approved leaves now supply one shared breadcrumb model to visible navigation and JSON-LD |
| P2 | Merge decisions had no cycle detection | Editorial lifecycle could deadlock or produce ambiguous consolidation | Fixed: compiler rejects merge cycles |
| P3 | Unused React header, helper modules, legacy styles and duplicate recipe databases remain | Agility and accidental-reconnection risk | Delete only after import graph and snapshot confirmation |

# 1. Architecture & Rendering

The static Astro model is correct for a citation-focused health site: important text is present in HTML and priority pages require no JavaScript. Keep content server-rendered/static and hydrate only tools that genuinely require interaction.

Target route model:

```text
/
├── health/                         Tier 1 hub
│   └── {condition-or-topic}/       approved entity leaf only
├── foods/                          Tier 2 hub
│   └── {food}/                     approved food leaf only
├── nutrition-reference/            Tier 3 registry complete; routes remain gated
├── services/
│   └── online-nutrition/           one online-only service truth page
└── legal/ + about/ + contact/      trust and policy layer
```

Do not create `/locations/{city}-{condition}` service pages. A city name is not evidence of physical presence, local expertise, local epidemiology, food availability or service eligibility.

Fallbacks:

- If no approved leaf exists, keep the hub `noindex` and show an honest review-status state.
- If a leaf review expires or its supporting source is retracted, fail the build and preserve the last reviewed source as non-public history.
- If an approved URL must be removed for safety, return `410` when there is no equivalent; use `301` only to a truly equivalent entity page.
- Never blanket-redirect thousands of city URLs to the home or service page; that creates soft-404 and doorway signals.

# 2. Technical SEO

### Working correctly

- Canonicals exactly match built indexable routes.
- XML sitemap is generated from indexable canonicals only.
- Synthetic `lastmod` is intentionally absent.
- Search index excludes `noindex` pages.
- Health and food priority paths can only be generated from the approved projection.
- Structured data is safely serialized and forbidden clinic/review/rating types are blocked.

### Required upgrades

1. Add honest sitemap `lastmod` only when sourced from the approved substantive-change record.
2. Add a canonical URL history table before publishing the first leaf; each change needs old URL, target, reason, effective date and rollback owner.
3. Validate status codes and headers against the deployed host, not only `dist`.
4. Add Search Console and Bing Webmaster verification, sitemap submission and weekly index-coverage review.
5. Use IndexNow only after publish/update/remove events, never for quarantined drafts.
6. Obsolete keywords meta has been removed; keep keyword research in editorial planning rather than hidden metadata.
7. Keep FAQ content for users where useful, but do not add FAQ rich-result markup merely for visibility; Google deprecated that feature in May 2026.

Official guardrails:

- Google warns that city-targeted substantially similar pages can be doorway abuse: <https://developers.google.com/search/docs/essentials/spam-policies>
- Structured data must represent visible, current, non-misleading content: <https://developers.google.com/search/docs/appearance/structured-data/sd-policies>
- Bing requires canonical, crawlable, accurate pages and recommends IndexNow for actual changes: <https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a>

# 3. AEO + GEO

There is no magic AEO/GEO tag. Google’s current guidance says normal crawlability, indexability, people-first value, visible text, internal links, page experience and visible/structured-data parity remain foundational.

The approved leaf contract already has the right skeleton: direct answer, evidence-bound sections, claim IDs, visible citations, author/reviewer and review dates. Before publication, add:

- one 40–80 word plain-language answer that independently survives extraction;
- entity definition, aliases and disambiguation;
- claim-level source entailment, not citation decoration;
- evidence strength and uncertainty in reader language;
- “what this does not establish” boundaries;
- urgent-care escalation where applicable;
- one original information-gain element: India-specific dataset, evidence table, calculation method, or expert-reviewed decision aid;
- a visible change note describing what substantively changed.

The release gate now binds each approval event to the exact UTF-8 source bytes with SHA-256. This prevents post-review substitution; it does not prove that the reviewed content is medically correct, so reviewer scope, claim entailment and source quality remain mandatory.

Do not manufacture dozens of query-variant pages. Google explicitly treats mass low-value generative pages and fan-out variants made to influence AI answers as scaled-content abuse.

Primary guidance:

- <https://developers.google.com/search/docs/fundamentals/ai-optimization-guide>
- <https://developers.google.com/search/docs/fundamentals/using-gen-ai-content>
- <https://developers.google.com/search/docs/fundamentals/creating-helpful-content>

# 4. Bot & Crawler Management

Current `robots.txt` permits normal search and AI search crawlers and keeps search-query URLs out of crawl space. That is appropriate. Remaining work requires production logs:

1. Verify Googlebot/Bingbot identity before trusting user-agent reports.
2. Track crawl hits by `/health`, `/foods`, policy and removed paths.
3. Track GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot and PerplexityBot separately.
4. Mine AI-referrer 404s for hallucinated URLs; map only to true equivalents.
5. Check CDN bot settings so verified crawlers are not silently blocked.
6. Rate-shape abusive scrapers; do not hard-block verified search or live user agents.

`llms.txt` may remain a transparent curated guide, but it is optional and is not a substitute for indexing or quality. Do not create private/full feeds that expose quarantined content.

# 5. Core Web Vitals & Performance

The strongest current result is zero initial JavaScript on indexable pages. Raw HTML is approximately 14–21 KB. The shared CSS file is 59,483 bytes and exceeds the internal elite target of 30 KB, although it remains under the current CI cap.

Action order:

1. Capture mobile/desktop visual snapshots.
2. Remove unused design utilities, inactive dark-mode branches, legacy animations and unused font declarations.
3. Lower the global CSS gate from 120 KB to 40 KB, then 30 KB after cleanup.
4. Keep priority-leaf JS at zero unless an interaction has measured user value.
5. Add field monitoring; lab/build bytes cannot prove Core Web Vitals.
6. Track p75 LCP ≤2.5s, INP ≤200ms and CLS ≤0.1, with internal alerts before thresholds.
7. Give every future content image width/height, responsive sources and a reviewed alt description.

Official thresholds: <https://web.dev/articles/defining-core-web-vitals-thresholds>

# 6. UX/UI & Visual Quality

### Strengths

- Health is visibly first and Foods second in navigation.
- Header is zero-JS, keyboard-reachable and degrades safely.
- Status pages clearly explain why content is unavailable.
- Safety notices do not depend on color alone.
- Priority leaf component has answer-first hierarchy, on-page navigation, citations and review metadata.

### Gaps

- The site’s primary promise is still unavailable: zero health and food leaves.
- Repeated status pages can feel like dead ends; consolidate them in navigation and direct users to published policies/content.
- The design has almost no topic-specific visual evidence. Future images must explain anatomy, food identity, preparation or evidence—not decorate.
- Default social preview is an SVG with a nonstandard aspect ratio; create a raster 1200×630 share card and tested platform fallbacks.
- Dark-mode classes exist without a real theme switch or complete theme contract.
- Author and reviewer profiles cannot launch until identity, credential scope, consent, disclosures and correction ownership are verified.

# 7. Out-of-the-Box Vault: highest-value safe ideas

1. **India nutrition evidence atlas:** publish an original, versioned dataset with methodology and downloadable CSV after expert review. This creates real information gain and citation value.
2. **Claim provenance explorer:** expose a reader-safe view showing each material claim, supporting sources, evidence grade, last review and uncertainty. Keep internal review notes private.
3. **Definition ownership:** publish careful canonical definitions for under-explained nutrition terms, with entity disambiguation and primary sources.
4. **Hallucinated-URL recovery:** use logs to find invented AI URLs, then return 301 only for exact equivalents or 410 otherwise.
5. **Content-decay CI:** automatically quarantine a page when review expiry, source retraction or substantive-change-after-review occurs.
6. **Public methodology artifacts:** publish calculation methods, data dictionaries and changelogs—citable assets competitors rarely provide.

Avoid unsupported “AI schema,” invisible keyword layers, fake citations, mass translations, fabricated statistics or private-content feeds.

# 8. Social Media & Viral Mechanics

Do not distribute a health page until the same approved claim text is used on-site and in the social asset. Build one source-of-truth content package per approved leaf:

- one 1200×630 OG image;
- one short plain-language answer;
- one evidence table or myth/fact card;
- one reviewer-approved safety boundary;
- one WhatsApp-ready summary without sensitive-data collection;
- UTM-tagged sharing that is disclosed and privacy-reviewed.

Never turn testimonials, before/after imagery or individual outcomes into evidence. Do not imply typical results.

# 9. Hard Rules

1. No fabricated physical office, clinic, map pin, address, opening hours or local staff.
2. No `LocalBusiness` or `MedicalClinic` schema for an online-only operation.
3. No Google Business Profile for an online-only business that has no in-person customer contact. Google states online-only businesses are ineligible.
4. No city page whose only unique element is the city/state/pincode or a swapped food list.
5. No claim that residents of a city are at higher risk or deficient without suitable local evidence.
6. No treatment, cure, reversal, guaranteed outcome, medication-change or unreviewed dose language.
7. No review date without a recorded review event; no author/reviewer identity without verification and consent.
8. No structured data that exceeds visible content.
9. No mass AI publication; AI output remains an untrusted draft.
10. No sensitive health intake through ordinary email or WhatsApp. Use a reviewed secure workflow when intake is necessary.

Google location sources:

- Online-only businesses are not eligible for Business Profiles: <https://support.google.com/business/answer/13763036>
- Virtual offices and unstaffed locations are not valid local profiles: <https://support.google.com/business/answer/3038177>
- Google’s LocalBusiness address field is a physical business location: <https://developers.google.com/search/docs/appearance/structured-data/local-business>

# 10. Online-Service Location Solution

## Correct page

The project now has a single, explicitly `noindex` verification-status page:

`/services/online-nutrition`

It states only the owner-confirmed facts: services are remote, may use online/phone/WhatsApp/video/email/audio channels, and no customer-facing physical office or clinic network exists. Make this page indexable only after the remaining provider, scope, jurisdiction, pricing, terms and privacy facts are verified.

Visible opening statement:

> NutritionColours provides remote services through verified online channels. It does not operate a walk-in clinic or customer-facing physical office. Availability, professional scope and suitability depend on the provider, jurisdiction and individual situation.

Required fields:

| Field | Publication condition |
|---|---|
| Service owner/provider | Verified legal identity and visible role |
| Credentials | Issuer, identifier where applicable, scope and verification date |
| Service type | Education/coaching/consultation stated precisely; no scope inflation |
| Channels | Video, phone, WhatsApp, email or audio only if actually staffed and supported |
| Area served | India or named jurisdictions only after operational/legal confirmation |
| Hours | Online availability hours, never physical opening hours |
| Price/refund/cancellation | Complete and visible before conversion |
| Emergency boundary | Not for emergencies; clear next action |
| Privacy | Data purpose, minimization, retention, deletion, processor and consent details |
| Intake | Secure workflow; ordinary messaging must not request records or IDs |
| Accessibility | Captions/transcripts, keyboard flow and non-video alternative where feasible |

Schema should be conservative: `Organization`, `WebSite`, `WebPage` and a visible `Service` description if accurate. Do not add `LocalBusiness`, `MedicalClinic`, geo coordinates, postal address or local ratings. `areaServed` describes real service eligibility; it does not create offices.

## Location-intent SEO without false offices

- Use one India-wide online-service page.
- Add genuine language/accessibility variants only when human-reviewed and supported.
- Publish state/city editorial research only when it contains original local evidence and is useful without a sales CTA; it must not imply an office.
- Answer “Is this available in {place}?” inside a single service-area section or data-backed availability tool, not 3,553 doorway pages.
- If operations later add a real staffed location, create one page for that verified location with evidence and only then consider local schema/profile eligibility.

For any clinician-level telemedicine service, legal review must determine whether the provider and workflow fall within applicable professional rules. India’s telemedicine guidance for registered medical practitioners emphasizes identity, consent, communication mode, appropriate context, patient evaluation and professional judgment: <https://esanjeevani.mohfw.gov.in/assets/guidelines/Telemedicine_Practice_Guidelines.pdf>. Do not describe a nutrition educator or coach as an RMP or medical clinic unless that status is true and verified.

# 11. Measurement Scoreboard

| Metric | Launch gate | 90-day target |
|---|---:|---:|
| Approved Tier-1 health leaves | ≥1 before health hub indexes | 12–20 exemplary leaves, not mass scale |
| Approved Tier-2 food leaves | ≥1 before food hub indexes | 20–30 exemplary leaves |
| Pages with claim-to-source coverage | 100% material claims | 100% |
| Pages with verified author | 100% | 100% |
| Clinical pages with in-scope reviewer and valid review | 100% | 100% |
| Structured-data/visible-content parity defects | 0 | 0 |
| Broken links/fragments/duplicate IDs/heading jumps | 0 | 0 |
| Indexable locality doorway pages | 0 | 0 |
| Initial JS on priority leaves | 0 KB preferred | ≤75 KB hard ceiling |
| Shared CSS raw | <40 KB interim | <30 KB |
| p75 CWV | field data required | LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 |
| Search/AI citation tracking | baseline established | monthly engine/source matrix |
| Safety correction containment | same day | measured time-to-quarantine |

# 12. 90-Day Execution Order

## Days 0–7: truth and service contract

1. Confirm legal entity, provider identities, credentials, exact service scope, online channels, areas served, hours, prices, cancellation and privacy workflow.
2. Reconcile current statements: `plans` says services are unavailable while the owner states online services exist.
3. Keep service pages `noindex` until the contract is complete.
4. Preserve all 3,553 locality drafts in quarantine; do not rewrite them in bulk.
5. Keep the new Tier-3 registry synchronized for the 133 nutrient/reference files; design and approve its separate content contract before routing.

## Days 8–21: first Tier-1 cluster

1. Select one narrow condition cluster by user need and reviewer scope.
2. Resolve duplicates before writing.
3. Build the truth-registry rows first: author, reviewer, taxonomy, sources, claims, review event.
4. Write 3–5 exemplary health leaves; run clinical, editorial, accessibility and schema review.
5. Publish as a canary; monitor indexing, snippets, errors and feedback before expanding.

## Days 22–35: Tier-2 food cluster

1. Select 5–10 foods with reliable composition sources and manageable safety scope.
2. Add variety, preparation, storage, serving context, nutrient variability, allergy/interaction cautions and claim uncertainty.
3. Publish food hub automatically when the first approved leaf exists.

## Days 36–50: online service and privacy

1. Publish one online-only service page after legal/scope review.
2. Add a privacy-safe conversion path and channel-specific warnings.
3. Do not create or claim a Business Profile if the operation remains online-only with no in-person customer contact.

## Days 51–70: design and performance

1. Build approved health/food visual primitives and evidence tables.
2. Produce raster OG/icon assets.
3. Remove dead CSS/React/legacy helpers after snapshot and import-graph review.
4. Lower budgets and add deployed-header/CSP smoke tests.

## Days 71–90: authority and measurement

1. Publish one original, versioned India nutrition dataset or methodology artifact.
2. Establish Search Console/Bing/IndexNow workflow.
3. Start monthly citation-source and hallucinated-URL audits.
4. Expand only when canary leaves keep zero safety defects and demonstrate user value.

## Release rollback matrix

| Trigger | Automatic action | Human action |
|---|---|---|
| Review expired | Build fails; page cannot regenerate | Re-review or quarantine |
| Source retracted | Build fails when truth registry updates | Reassess dependent claims |
| Claim changed after review | Build fails | New review event required |
| Credential disputed | Remove profile/credential/schema and quarantine dependent pages | Independent verification |
| Wrong city/service availability | Remove assertion immediately | Correct source-of-truth service matrix |
| Safety complaint | Same-day `noindex`/unpublish | Clinical and editorial incident review |
| Ranking drop without quality defect | Do not mass-rewrite | Diagnose intent, snippets, competition and field data |
| AI engine invents a URL | No blanket redirect | 301 exact equivalent or 410 |

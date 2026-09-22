# Health-First, Food-Second Leaf Page Master Plan

**Project:** NutritionColours  
**Date:** 2026-08-21  
**Status:** Implementation-ready plan; legacy leaf routes remain quarantined  
**Primary decision:** Health topics, health conditions, and diseases become Tier 1 editorial assets. Fruits, vegetables, herbs, spices, grains, pulses, seeds, beverages, fermented foods, and other food leaves become Tier 2 assets. “All” means every source record receives an explicit disposition; it does **not** mean every draft is automatically published or indexed.

**Implementation update (2026-08-28):** Phase 1 control-plane and Phase 2 rendering-foundation work are complete. All 2,173 Tier-1/Tier-2 target records exist in a deterministic quarantined registry; duplicate/collision candidates are generated separately; human lifecycle decisions and verified truth records are isolated from application source; an approved-only projection compiler and adversarial publication tests run before every normal build. Structured health/food content contracts require claim IDs on every answer block. Approved-only static renderers, conservative schema, visible citations/review data, a noindex Health hub, and Health-first/Foods-second navigation are in place. Every approval is now bound to an exact SHA-256 content fingerprint, and disconnected locality drafts have their own quarantine ledger. The global React header was replaced with evaluated zero-JavaScript Astro navigation. No legacy leaf route has been restored and no unreviewed record is indexable. See `LEAF_PUBLICATION_RUNBOOK_2026-08-21.md`.

## Executive decision and audited baseline

The hierarchy is correct only if page importance is earned through content quality, internal links, navigation, evidence, and user value. XML `<priority>`, keyword repetition, inflated schema, mass generation, and an `llms.txt` file cannot make a weak page important.

The current safe production estate contains 9 indexable canonical URLs. Legacy leaf content is intentionally disconnected from route generation. The new hierarchy must be introduced through the existing fail-closed safety boundary, not around it.

| Cohort | Files audited | Preliminary machine-eligible | Critical findings |
|---|---:|---:|---|
| Tier 1 health candidates | 1,126 | **0** | 823 lack reviewer metadata; 832 lack a Sources/References/Citations section; 961 have fewer than two external sources; 824 are under 800 words; 689 contain detected boilerplate contamination; 624 have unsafe/raw slugs; 286 contain links with spaces |
| Tier 2 food candidates | 1,047 | **0** | 935 lack a Sources section; 1,012 have fewer than two external sources; 617 contain detected boilerplate contamination; 942 have unsafe/raw slugs; 400 are under 600 words; 607 lack reviewer metadata while retaining clinical-risk language |

This is a triage result, not a clinical judgment. Passing a future machine gate will make a page reviewable, not publishable. Representative inspection found thin medical claims, unsupported cure/reversal language, blanket CKD restrictions, generic “clinical pathway” insertions, unrelated disease text in food and cultivation pages, category corruption, duplicate entities, unverified review assertions, and nonsensical related links.

### Non-negotiable outcome

Every one of the 2,173 candidate leaves must enter a registry and end in exactly one state:

1. `publish`: distinct intent, correct entity, verified evidence, correct reviewer, complete page contract.
2. `rewrite`: valuable intent, but evidence/content is not publishable yet.
3. `merge`: overlapping entity or intent; useful material is consolidated into one canonical leaf.
4. `redirect`: an old public URL has a semantically equivalent approved destination.
5. `quarantine`: unsafe, unverifiable, corrupted, or awaiting expert/legal review.
6. `retire`: out of scope, no user value, or impossible to maintain safely; return an honest 404/410 when previously public and no equivalent exists.

No state may be inferred from a folder name, filename, model score, word count, or historical sitemap entry.

---

## 1. Architecture & Rendering

### 1.1 Canonical information architecture

Adopt one shallow, stable namespace per primary entity class:

- **Tier 1 health leaves:** `/health/{canonical-slug}/`
- **Tier 1 health hub:** `/health/`
- **Tier 1 browse hubs:** `/health/conditions/`, `/health/symptoms/`, `/health/body-systems/`, `/health/life-stages/` only when each hub has enough approved children and distinct browse value.
- **Tier 2 food leaves:** `/foods/{canonical-slug}/`
- **Tier 2 food hub:** `/foods/`
- **Tier 2 browse hubs:** `/foods/fruits/`, `/foods/vegetables/`, `/foods/herbs/`, `/foods/spices/`, `/foods/grains/`, `/foods/pulses/`, `/foods/seeds/`, `/foods/oils/`, `/foods/dairy-alternatives/`, `/foods/beverages/`, `/foods/fermented/` only when populated.
- **Tier 3 support:** `/nutrients/{slug}/`, `/recipes/{slug}/`, and `/glossary/{slug}/` only after their separate registry, content contract, evidence and route gates exist. The initial 133-record reference inventory is now quarantined and synchronized.

Do not preserve legacy folder depth in public URLs. Classification changes frequently; entity identity should not. One entity gets one stable content ID and one canonical URL even when it belongs to several taxonomies. “Tomato” can be botanically a fruit and culinarily a vegetable without two competing leaf pages.

### 1.2 Authoritative publishing graph

Create a typed registry that is the only source of routes. Each record must contain:

- immutable content ID and entity ID;
- canonical name, aliases, scientific name or recognized clinical synonym where applicable;
- entity class and reviewed taxonomy IDs;
- canonical route, old URLs, redirect decision, locale, and page tier;
- primary intent and explicit non-goals;
- lifecycle state and reason;
- content source file, version, template version, and substantive change date;
- author ID, reviewer ID, review event ID, review scope, conflicts, and expiry date;
- claim IDs and source IDs;
- index policy, sitemap cohort, search eligibility, feed eligibility, and social eligibility.

Generate Astro paths, navigation, breadcrumbs, canonicals, redirects, sitemaps, Pagefind records, JSON-LD, Open Graph data, and any optional AI feed from this graph. No component may independently guess a URL, reviewer, taxonomy, last-modified date, or schema type.

### 1.3 Rendering contract

- Pre-render every approved leaf to complete static HTML.
- Keep the answer, warnings, sources, authorship, and primary navigation available without JavaScript.
- Hydrate only an interaction that materially helps the user; the current global `Header client:load` should be measured and replaced with a zero-JS or minimal-island menu if it consumes the leaf budget.
- Render one artifact for users, crawlers, screen readers, search engines, and AI retrieval. No hidden “AI copy,” crawler-specific paragraphs, or alternate claim feed.
- Preserve the current safe JSON-LD serializer and source/build parity gates.

### 1.4 Implementation order and acceptance gate

1. Build the registry schema and migration importer in quarantine mode.
2. Deduplicate entities before choosing URLs.
3. Add explicit taxonomy maps; unknown values are fatal.
4. Build `HealthLeaf` and `FoodLeaf` page contracts.
5. Add a new route generator that reads **approved registry rows only**.
6. Amend the current source safety gate narrowly: allow the new reviewed generator but continue blocking `astro:content`, the old catch-all generator, and heuristic taxonomy engines.
7. Prove on fixtures that draft, quarantine, expired, and collision records cannot emit a route.

**Exit gate:** registry-approved indexable URLs = built indexable 200 HTML = self-canonical URLs = sitemap URLs = Pagefind URLs, with exact set equality.

---

## 2. Technical SEO

### 2.1 Tiering by real signals

Tier 1 receives the strongest persistent discovery signals:

- “Health” is the first content destination in primary navigation.
- `/health/` links to approved leaves through useful condition/system/task groupings.
- Every Tier 1 leaf is within three crawlable clicks of the home page.
- Health leaves receive contextual links from food, nutrient, recipe, and glossary pages only when the relationship is sourced and useful.

Tier 2 remains prominent but subordinate:

- “Foods” is the second content destination.
- Food leaves are discoverable through class hubs and contextual culinary/nutrition links.
- A food page does not inherit medical authority merely because a health page links to it.

Do not add sitemap `priority`; Google ignores it. Importance is represented through useful links, consistent canonicalization, information gain, and engagement.

### 2.2 URL, canonical, duplicate, and redirect controls

- Establish one slug registry. Slugs are lowercase ASCII, readable, durable, and independent of folders.
- Resolve title collisions, synonym collisions, transliterations, scientific/common-name collisions, and homonyms manually.
- Use self-referencing absolute canonicals on unique indexable leaves.
- Merge same-intent condition/topic/disease copies before launch. Do not rely on canonicals to excuse duplicate public pages.
- Use server-side 301/308 redirects only when old and new pages are genuinely equivalent.
- Keep redirect chains at one hop; reject loops and cross-entity redirects.
- An unsafe old page with no equivalent gets 404/410, not a misleading redirect to a hub.

### 2.3 Metadata and on-page contract

For every approved leaf:

- one unique, human title; one visible H1 aligned to it;
- one useful meta description, not an extracted first paragraph;
- one primary intent and no doorway variants for spelling, city, gender, age, or question permutations;
- ordered headings, landmark semantics, descriptive anchors, table headers, alt text, skip navigation, keyboard operation, and visible focus;
- visible author, reviewer when applicable, first-published date if known, last substantive update, last clinical review, correction history, and sources;
- no manufactured dates or evergreen “updated today” fallbacks.

### 2.4 Sitemap and indexation release

- Create separate `sitemap-health.xml` and `sitemap-foods.xml` only after each cohort has approved URLs; retain an index for cohort measurement.
- Include canonical, indexable, status-200 URLs only.
- Use `lastmod` only from a verified substantive change event. Omit it when unknown.
- Add new leaves in controlled cohorts. Submit the sitemap after deployment verification, not before.
- Use IndexNow for approved changed/created/deleted URLs after the pipeline is stable; never ping every build.
- Keep `llms.txt` a small factual site guide. Google states it neither helps nor harms Google visibility; it must never be presented as a ranking mechanism.

### 2.5 Technical release tests

- unique title/H1/description/canonical per indexable URL;
- zero orphan leaves and no leaf more than three clicks from a tier hub;
- zero internal links to redirects, noindex pages, fragments that do not exist, or URLs containing raw spaces;
- zero parameter, case, slash, hostname, or protocol duplicates;
- zero indexable soft 404s and zero sitemap/redirect/noindex conflicts;
- rendered HTML and schema describe the same visible facts.

---

## 3. AEO + GEO

### 3.1 Health leaf page contract

The page opens with a 50–80 word, plain-language direct answer: what the condition/topic is, who the information is for, the most important limitation, and when professional help is appropriate. Then:

1. **At a glance:** definition, recognized synonyms, category, affected system, and evidence/review status.
2. **Urgent help:** only condition-specific red flags supported by an authoritative source; no generic alarm banner on unrelated pages.
3. **Symptoms and presentation:** with variability and differential-diagnosis caution.
4. **Causes and risk factors:** distinguish association from causation and modifiable from non-modifiable factors.
5. **How it is assessed:** educational overview, not a self-diagnosis flow.
6. **Treatment and care:** standard-of-care overview within reviewer scope; do not prescribe or promise outcomes.
7. **Food and nutrition:** clearly label evidence strength, population, dose/context, contraindications, and whether the evidence concerns a food, extract, supplement, biomarker, or clinical outcome.
8. **What not to infer:** uncertainty, evidence gaps, and limits of general information.
9. **Questions people ask:** concise visible answers derived from genuine user/query data, not synthetic keyword permutations.
10. **Sources and review:** claim-linked citations, reviewer scope, methodology, change history, and correction route.

Ban unqualified “cure,” “reverse,” “detox,” “heal,” “prevent,” “clinically proven,” “guaranteed,” medication-discontinuation, universal dosing, and outcome language. A disease page must never encourage self-treatment or delay care.

### 3.2 Food leaf page contract

The page opens with a direct identity and nutrition answer. Then:

1. common, scientific, and verified regional names;
2. food class and preparation forms;
3. composition per 100 g and per realistic serving, each tied to a named database record/version and preparation state;
4. meaningful nutrient comparisons with compatible units and samples;
5. culinary use, selection, storage, preparation, and food-safety notes;
6. allergens, toxins, medication interactions, pregnancy/child considerations, and condition-specific cautions when applicable;
7. evidence-graded health effects separated from nutrient composition;
8. food-versus-extract-versus-supplement distinction;
9. uncertainty caused by variety, soil, season, maturity, processing, and cooking;
10. sources, reviewer scope, and correction history.

Herbs, botanicals, supplements, and concentrated extracts use a higher-risk contract than ordinary whole foods. If a page makes a clinical claim, it requires appropriate clinical review. No food page may imply therapeutic dosing or disease treatment.

### 3.3 Claim ledger and source graph

Every material health, nutrition, safety, prevalence, comparison, or outcome claim becomes a record:

- exact approved wording and allowed paraphrase range;
- claim type, risk tier, population, intervention/exposure, comparator, outcome, magnitude, timeframe, and uncertainty;
- source IDs, source location, evidence hierarchy, publication/review date, and retraction/correction status;
- author, expert reviewer, scope, approval date, expiry date, jurisdiction, and conflicts;
- allowed destinations: page, schema, snippet, chart, social card, email, or none.

Source priority is topic-dependent: current official guidance and systematic reviews first; high-quality primary evidence for precise claims; authoritative composition databases for nutrient values. A source home page is not evidence for a specific claim. A PMID/DOI must resolve to the cited work and actually support the sentence.

### 3.4 AI hallucination firewall

Treat model output as untrusted draft material:

- retrieval is limited to approved source records;
- every generated claim must resolve to an existing claim ID;
- every identifier, author, reviewer, credential, PMID, DOI, statistic, date, quote, and URL is validated against its source;
- sentence-level entailment review checks that citations support the precise wording;
- cross-entity leakage tests detect irrelevant kidney, biomarker, clinical-pathway, cultivation, or food content;
- numeric checks validate units, serving conversions, ranges, arithmetic, denominators, and timeframes;
- unsupported output is deleted, not softened with a vague citation;
- automation disclosure explains meaningful AI assistance without using disclosure as a substitute for accountability.

### 3.5 Schema policy

- Default to `WebPage`/`Article`, `BreadcrumbList`, and truthful organization/entity references.
- Use `MedicalWebPage`, `reviewedBy`, or `lastReviewed` only when the registry contains a real relevant review event.
- Add a `MedicalCondition` or food entity only when it matches the visible page subject and properties are supported.
- Do not use `Claim`, `Review`, rating, physician, organization credential, dataset, or speakable markup as decoration.
- Do not use `QAPage` for editorial FAQs; it is for a single question where users can submit answers. Consider `FAQPage` only when the visible content and current eligibility rules support it, without expecting a rich result.
- Validation is necessary but insufficient: semantic truth and visible parity are mandatory.

### 3.6 Answer-engine optimization rule

Optimize for quotable accuracy, not “AI bait.” Each important section should be understandable in isolation, use descriptive headings, define the entity before abbreviations, expose evidence and uncertainty nearby, and link to the canonical source. There is no special Google AI schema and no required “micro-chunk” length. Unique, useful, crawlable, well-sourced content remains the foundation.

---

## 4. Bot & Crawler Management

### 4.1 Access and parity

- Serve identical primary content and claims to ordinary users, Googlebot, Bingbot, AI crawlers, and social preview bots.
- Do not use user-agent-specific claims, hidden summaries, crawler-only schema, bait files, or deceptive honeypots.
- Keep robots rules explicit and minimal. Blocking a URL in robots.txt is not a removal method; use authentication, noindex where crawlable, or proper status codes as appropriate.

### 4.2 Observability

Log without unnecessary personal data:

- verified crawler identity, requested URL, response, canonical/index state, bytes, latency, cache, and cohort;
- crawl waste: redirects, parameters, errors, retired URLs, duplicate variants, and hallucinated URLs;
- release-to-first-crawl and release-to-index times by health/food cohort.

Reverse-DNS or published-IP verification is required before labeling traffic as a named bot. A user-agent string alone is not proof.

### 4.3 Hallucinated URL handling

Maintain a report of repeated nonexistent paths referenced by search/AI systems. Redirect only when the path unambiguously maps to the same entity and intent. Otherwise return a useful 404 or 410. Never auto-create a page from logs, and never redirect every unknown health URL to `/health/`.

### 4.4 Abuse and operational controls

- rate-limit expensive endpoints, not static health knowledge;
- use cached static HTML and immutable assets;
- protect search/contact endpoints against enumeration, injection, spam, and resource exhaustion;
- maintain a one-action kill switch that removes a newly released cohort from sitemaps/search and applies noindex or route withdrawal without altering approved existing cohorts.

---

## 5. Core Web Vitals & Performance

### 5.1 Field objectives

At the 75th percentile, segmented by mobile/desktop and health/food template:

- LCP ≤ 2.5 s;
- INP ≤ 200 ms;
- CLS ≤ 0.10;
- TTFB target ≤ 800 ms on representative Indian mobile connections;
- no material regression from a cohort release.

### 5.2 Leaf budgets

Initial enforced budgets, adjustable only from field evidence:

- primary HTML compressed ≤ 60 KB;
- critical CSS compressed ≤ 18 KB;
- page JavaScript compressed ≤ 50 KB, with a zero-JS target for reading paths;
- initial above-fold image ≤ 120 KB and explicitly sized;
- total initial transfer ≤ 350 KB on a standard leaf;
- DOM ≤ 1,200 elements;
- no third-party script in the critical path.

### 5.3 Performance work

- self-host and subset fonts; use a resilient system-font fallback;
- use AVIF/WebP with intrinsic dimensions, responsive sources, and lazy loading below the fold;
- never lazy-load the LCP asset; preload only a confirmed LCP resource;
- reserve space for tables, figures, notices, and embeds;
- render large evidence tables progressively without hiding crawlable rows;
- eliminate hydration from static cards, breadcrumbs, accordions that can use native HTML, and basic share links;
- test on low-memory Android profiles and reduced-data/reduced-motion preferences.

**Fallback:** if a release breaches a budget, disable optional islands, animated media, related-content carousels, and nonessential fonts before weakening the page content.

---

## 6. UX/UI & Visual Wow

### 6.1 Priority-aware design system

- Tier 1 health pages use a calm, high-trust visual language: clear condition identity, answer first, source proximity, safety escalation, and low-distraction reading.
- Tier 2 food pages use richer visual identity through sourced photography/illustration, composition tables, preparation states, and comparison tools while retaining the same evidence and accessibility system.
- Tier is communicated by navigation and context, not labels such as “most important page.”

### 6.2 High-value components

Build shared, typed components rather than page-specific markup:

- `DirectAnswer`
- `EvidenceBadge` with an explicit published rubric
- `ClaimCitation`
- `SafetyEscalation`
- `ReviewerPanel`
- `SourceList`
- `ChangeHistory`
- `NutritionTable`
- `PreparationState`
- `InteractionWarning`
- `RelatedEntities` driven by reviewed relations

Every component must have empty, partial, loading-free static, long-text, mobile, keyboard, screen-reader, print, and error states. If a field is unknown, omit it or display “not established”; never substitute a guessed value.

### 6.3 Conversion and safety separation

- No booking, product, supplement, or lead-generation call-to-action adjacent to urgent symptoms, prognosis, treatment, or fear-sensitive claims.
- No fake scarcity, countdowns, synthetic testimonials, health outcome counters, simulated live activity, or preselected consent.
- Keep educational content usable without accepting analytics or marketing cookies.
- Any symptom checker, calculator, personalization, or saved health profile is a separate high-risk product requiring privacy, clinical, legal, validation, and incident-response work; it is outside this 90-day publishing plan.

### 6.4 Accessibility acceptance

Target WCAG 2.2 AA: contrast, zoom/reflow, visible focus, tap targets, form labels/errors, reduced motion, meaningful table semantics, screen-reader order, and no color-only evidence meaning. Automated checks are supplemented by keyboard and screen-reader review on each template.

---

## 7. Out-of-the-Box Vault

Implement only tactics that create genuine user value:

1. **Definition ownership:** publish one precise, reviewer-approved definition block per health entity and food entity, with synonyms and boundaries.
2. **Evidence delta:** show what changed since the previous review and which claims were added, weakened, or withdrawn.
3. **Answer-consistency audit:** compare the direct answer, body, tables, schema, snippets, and social copy for contradictions before release.
4. **Content-decay CI:** alert on expired reviews, changed official guidance, dead/retracted sources, outdated database versions, and unmatched redirect targets.
5. **Hallucinated-URL intelligence:** use repeated verified 404 patterns to improve navigation or redirects, never to mass-generate pages.
6. **India-specific evidence layer:** use ICMR/NIN, FSSAI, Indian food-composition and epidemiology data when appropriate, with clear population scope rather than copying US assumptions.
7. **Public methodology artifacts:** publish the evidence-grading rubric, corrections process, source-selection rules, and composition calculation method.
8. **Original, governable data:** after the core is stable, publish downloadable comparison data only if licensing, provenance, update ownership, and validation are complete.
9. **Zero-JS “wow”:** use excellent typography, anchor navigation, responsive tables, native details/disclosure patterns, print layouts, and CSS data visualizations before adding animation libraries.

Explicitly reject “secret GEO hacks,” keyword-swapped doorway pages, synthetic experts, fake reviews, fabricated citations, reciprocal citation schemes, crawler-only endpoints, automatic article spinning, parasite pages, and mass programmatic locality pages.

---

## 8. Social Media & Viral Mechanics

### 8.1 Source-of-truth workflow

Social content is compiled only from approved claim records. Each asset stores claim IDs, source URLs, reviewer, approval, expiry, crop, alt text, platform, and destination canonical. A withdrawn or expired claim automatically invalidates dependent assets.

### 8.2 Formats

- Tier 1: “what it is / what it is not,” myth-versus-evidence, when-to-seek-care, and change-in-guidance cards.
- Tier 2: preparation comparisons, nutrient-source context, storage/safety, regional-name explainers, and whole-food-versus-extract distinctions.
- Short video transcripts and captions become visible accessible page companions only after claim review.
- Open Graph cards may quote only visible page content and must not strengthen the claim.

### 8.3 Safety rules

- no diagnosis quizzes, fear hooks, outcome guarantees, before/after medical claims, patient stories without documented consent, or engagement-bait “cures”;
- no influencer or expert attribution without verified identity and approval;
- no traffic campaign to a leaf until its canonical, schema, citations, mobile layout, corrections route, and analytics classification are verified.

---

## 9. Hard Rules

### 9.1 Release blockers

A leaf cannot publish or index when any of these is true:

- unknown entity/taxonomy, duplicate canonical, unresolved slug collision, or mismatched route;
- missing material source, unsupported claim, citation mismatch, unresolved retraction, or invented identifier;
- medical claim outside author/reviewer scope, missing review event, expired high-risk review, or unverified credential;
- cure/reversal/prevention/prescription language without legally and clinically permitted exact support;
- copied boilerplate, cross-entity contamination, template placeholders, raw IDs, or incoherent internal links;
- manufactured publication/review/lastmod date;
- schema not visible or truthful in the page;
- a material accessibility, privacy, security, performance, or route-parity failure.

### 9.2 India compliance guardrail

- Treat food/nutrient/health-benefit and disease-risk language as claims requiring review against current FSSAI Advertising and Claims rules and relevant product regulations.
- Clearly separate neutral education from marketing communications, endorsements, lead generation, and product promotion.
- Never present food or a nutraceutical as curing, treating, or mitigating a disease unless the exact use is legally permitted and reviewed.
- If collecting contact, preference, symptom, or other personal data, map purpose, notice, consent/legitimate basis, retention, access, deletion, processors, incident handling, and the applicable DPDP enforcement timeline before collection.
- This plan is an engineering/editorial control system, not a substitute for counsel or a licensed clinician.

### 9.3 Fallback and rollback matrix

| Failure or loophole | Required response | Forbidden shortcut |
|---|---|---|
| Evidence missing or contradictory | Keep quarantined; narrow or remove claim | Publish with “studies suggest” |
| Reviewer unavailable or out of scope | Remove medical assertions or keep noindex/quarantined | Assign a generic reviewer |
| Duplicate topic/condition/disease | Merge under one entity; reviewed redirect map | Publish both with canonical tags |
| Slug/entity collision | Stop build for manual resolution | Append a random number |
| Dead/retracted citation | Replace with valid support or withdraw dependent claim | Keep citation for appearance |
| Schema uncertainty | Omit the property/type | Guess or copy competitor schema |
| Old URL has no equivalent | 404/410 with useful navigation | Redirect to an unrelated hub |
| Indexing or canonical anomaly | Pause cohort, inspect parity/duplication, preserve honest redirects | Re-publish quarantined copies |
| CWV regression | Remove optional JS/media and roll back the cohort template | Hide content or warnings |
| Relation graph error | Remove relation and dependent links | Allow model-generated links |
| AI output cannot be verified | Delete it and record the failed source need | Publish with an AI disclaimer |
| Clinical or legal incident | Unpublish affected cohort, preserve evidence/logs, execute correction and notification runbook | Quiet edit with a fake new date |
| Analytics/consent failure | Disable nonessential collection | Block core educational content |

### 9.4 Mutation and adversarial testing

CI must deliberately inject and reject: fake reviewer IDs, future review dates, citation swaps, retracted sources, unsupported cure paraphrases, unit errors, duplicate canonicals, redirect loops, raw-ID slugs, hidden schema, broken fragments, script-closing JSON-LD strings, wrong food preparation states, irrelevant boilerplate, unapproved lifecycle states, and sitemap drift. A gate that does not fail its planted mutant is itself failed.

---

## 10. Measurement Scoreboard

No ranking, traffic, citation, or rich-result outcome is guaranteed. Measure controllable quality first and search outcomes by cohort second.

| Domain | Metric | Release target | Cadence |
|---|---|---:|---|
| Estate | Registry coverage of 2,173 target leaves | 100% disposition | Weekly until complete |
| Estate | Route/canonical/sitemap/Pagefind parity | 100% | Every build |
| Safety | Unsupported material claims | 0 | Every build/review |
| Safety | Verified applicable reviewer for indexed clinical pages | 100% | Every release |
| Evidence | Citation resolves and entails claim | 100% sampled + automated resolution | Every release/monthly |
| Taxonomy | Unknown mappings/canonical collisions/raw public IDs | 0 | Every build |
| Quality | Boilerplate/cross-entity contamination | 0 | Every build |
| Accessibility | Critical/serious automated violations | 0 | Every release |
| Performance | Good LCP/INP/CLS at p75 | All three by template/device | Weekly field data |
| Crawl | Indexable 200s in sitemap; sitemap errors | 100%; 0 errors | Weekly |
| Search | Valid indexed rate and Google-selected canonical agreement | Trend by cohort, investigate deviations | Weekly |
| Demand | Non-brand impressions, clicks, useful query coverage | Cohort trend, not vanity total | Monthly |
| AEO/GEO | Search generative-AI impressions/clicks where report is available | Baseline then cohort trend | Monthly |
| AEO/GEO | Verified citations/mentions in sampled answer engines | Source-linked sample, no automated guessing | Monthly |
| UX | Answer usefulness, source use, correction requests, return-to-SERP proxy | Improve from pilot baseline | Monthly |
| Operations | Correction SLA, expired reviews, broken/retracted sources | P0 same day; no silent expiry | Weekly |

Use Search Console’s dedicated generative-AI reporting only where the account has access; do not manufacture “AI visibility” scores. Maintain health and food sitemap cohorts so indexing and performance can be compared without conflating the two tiers.

---

## 11. 90-Day Execution Order

### Days 1–14 — Freeze, inventory, and truth system

1. Keep all legacy leaf routes quarantined.
2. Define the entity, taxonomy, author, reviewer, source, claim, relation, redirect, and review-event schemas.
3. Import all 2,173 candidates into the registry without making routes.
4. Run duplicate detection using normalized titles, aliases, medical synonyms, scientific names, body similarity, and intended search task.
5. Give every record a disposition owner, risk class, and reason.
6. Build exact reports for missing evidence, cross-entity boilerplate, citations, links, slugs, credentials, dates, and relation anomalies.
7. Select a pilot of 8–12 health entities and 8–12 food entities based on user value, available evidence, reviewer fit, and distinct intent—not search volume alone.

**Gate:** 100% records imported; zero public route changes; taxonomy and canonical collisions explicitly surfaced; reviewers and source licenses verified for pilot candidates.

### Days 15–30 — Contracts, components, and adversarial gates

1. Implement the authoritative publishing graph and explicit taxonomy registry.
2. Implement claim/source/review ledgers and the six-state lifecycle.
3. Implement `HealthLeaf` and `FoodLeaf` contracts plus shared evidence/safety components.
4. Add approved-only static route generation.
5. Add redirect compiler, segmented sitemap compiler, search-index compiler, schema compiler, and exact parity tests.
6. Add AI hallucination, unit, citation-entailment, relation, duplicate, accessibility, schema-truth, and mutation gates.
7. Create correction/unpublish and cohort rollback runbooks.

**Gate:** every planted invalid fixture fails; every approved fixture produces one correct page; draft/quarantine records produce none; template budgets pass on representative mobile tests.

### Days 31–45 — Rewrite and privately review the pilot

1. Rewrite pilot pages from authoritative evidence; do not patch contaminated paragraphs in place.
2. Complete claim-level citations and evidence grades.
3. Verify identities, reviewer scope, conflicts, dates, and source licensing.
4. Conduct clinical, editorial, accessibility, legal/claims, SEO, and red-team review.
5. Run answer-consistency comparisons across HTML, metadata, schema, social previews, and tables.
6. Preview privately or as noindex pages only if access controls and leakage tests are sound.

**Gate:** all pilot leaves pass the full Definition of Done; any failed page remains quarantined without delaying qualified peers.

### Days 46–60 — Controlled Tier 1/Tier 2 launch

1. Release the approved health pilot first and verify server responses, canonicals, links, sitemaps, Pagefind, schema, accessibility, and performance in production.
2. Observe crawl, selected canonicals, indexing, corrections, and field experience for at least one review window.
3. Release the approved food pilot only if health infrastructure remains stable.
4. Add contextual health↔food links only from the reviewed relation graph.
5. Submit cohort sitemaps and IndexNow notifications after production verification.

**Gate:** zero safety incidents, parity drift, schema-truth failures, redirect defects, or serious accessibility failures; no material CWV regression.

### Days 61–75 — Expand by evidence-ready clusters

1. Select the next 20–30 health leaves and 20–30 food leaves from registry readiness, not folder order.
2. Prioritize coherent clusters that strengthen navigation: e.g., one body system plus its genuinely relevant foods/nutrients.
3. Merge and redirect duplicate legacy entities only after destination approval.
4. Publish browse hubs only when they provide original orientation, filters, and enough approved children.
5. Begin content-decay and source-change monitoring.

**Gate:** pilot metrics remain stable; no cohort bypasses review to hit a quantity target.

### Days 76–90 — Scale decision, measurement, and governance

1. Compare health and food cohort indexing, canonical selection, user usefulness, search demand, AI visibility where available, CWV, correction rate, and maintenance cost.
2. Tune components and internal links from evidence, without changing claim meaning.
3. Establish a sustainable monthly editorial/reviewer capacity and expiry schedule.
4. Publish the methodology, evidence rubric, correction policy, and change history.
5. Approve the next-quarter cohort size only if source/reviewer capacity can maintain it.
6. Keep the remainder in rewrite/merge/quarantine/retire states; do not set an arbitrary deadline to index all 2,173 records.

**Gate:** signed release report with route-set attestation, gate results, cohort metrics, unresolved risks, rollback readiness, and next-quarter capacity.

### Definition of Done for one indexed health leaf

- canonical entity/intent is unique; taxonomy and aliases are reviewed;
- direct answer, urgent-help logic, assessment/care boundaries, nutrition section, uncertainty, questions, sources, reviewer, and correction route are complete;
- every material claim is approved and source-entailing;
- author/reviewer identity and scope are verified; review is current;
- no diagnosis, prescription, cure, guaranteed outcome, or unsafe delay-of-care implication;
- HTML, metadata, links, schema, sitemap, search index, and social preview agree;
- accessibility, performance, security, privacy, route parity, and mutation gates pass;
- owner and next-review trigger are assigned.

### Definition of Done for one indexed food leaf

- one canonical food entity with names, class, form, and preparation state;
- composition records have named source/version, units, samples, calculations, and licensing;
- serving context, variability, storage, preparation, allergens, toxins, interactions, and high-risk populations are handled where relevant;
- health claims are separated from composition and reviewed at the appropriate risk level;
- whole food, extract, and supplement are not conflated;
- all technical, evidence, accessibility, performance, privacy, parity, and mutation gates pass;
- owner and update triggers are assigned.

---

## Current official guidance incorporated

- [Google: optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google: generative AI content guidance](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)
- [Google: people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google: structured-data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google: canonicalization](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google: sitemap construction and honest `lastmod`](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Schema.org: `MedicalWebPage`](https://schema.org/MedicalWebPage)
- [web.dev: Core Web Vitals thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds)
- [Bing: Webmaster Guidelines](https://www.bing.com/webmasters/help/bing-webmaster-guidelines-30fba23a)
- [Bing: IndexNow](https://www.bing.com/webmasters/help/indexnow-0z209wby)
- [FSSAI: Advertising and Claims Regulations](https://www.fssai.gov.in/upload/uploadfiles/files/Compendium_Advertising_Claims_Regulations_04_10_2022.pdf)
- [MeitY: Digital Personal Data Protection Rules 2025](https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa)

## Final directive

Do not reconnect `src/content/knowledge` to routing. Build a new approved-only publishing graph, rewrite from verified sources, launch small cohorts, and make every safety/quality promise executable in CI. The project wins by becoming a reliable source that search engines and answer engines can cite—not by maximizing the number of generated pages.

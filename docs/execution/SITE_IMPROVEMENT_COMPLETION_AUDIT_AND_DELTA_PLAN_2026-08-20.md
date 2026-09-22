# NutritionColours Completion Audit and Elite Delta Plan

**Version:** 2026-08-20.4 (containment implementation completed)  
**Baseline:** commit `ae34d77c` on `main`, compared with prior audited commit `86f91a03`  
**Compared with:** `docs/execution/SITE_IMPROVEMENT_MASTER_PLAN_2026-08-15.md`  
**Scope:** every public route, page family, content collection, shared component, structured-data graph, machine-readable feed, conversion path, privacy surface, build artifact, and release gate  
**Current decision:** the engineering containment release is implemented and passes its release gates. Keep page expansion frozen; content republication still requires the human evidence, credential, clinical, legal, privacy, accessibility, and production-observability work listed under residual gates below.

## Implementation closure — 20 August 2026

This section supersedes the pre-remediation measurements in the historical audit below. The older figures remain as the incident baseline and should not be read as the current generated-site state.

### Verified current state

- `npm run release:verify` passes: source-safety gate, Astro check, ESLint, production build, sitemap generation, search-index generation, and generated-output verification.
- Astro check reports **0 errors, 0 warnings, 0 hints**; ESLint passes.
- Production output is **79 HTML files**, down from 5,091; repeated builds complete in roughly **2–5 seconds** on the audit machine.
- Exactly **11 canonical URLs** are indexable. The XML sitemap contains exactly those 11 URLs and no synthetic `lastmod` values.
- Pagefind indexes exactly the same **9 indexable pages**; quarantined routes and noindex service/status pages are excluded.
- Generated-output verification checks all rendered documents and reports **157 parseable JSON-LD blocks** and **1,589 internal links**, with zero gate failures.
- Every rendered page has one H1, one main landmark, language, title, description, robots directive, same-origin canonical, valid internal links, image alternatives, and no rendered `undefined` sentinel.
- `npm audit` completes against the live advisory endpoint with **0 known vulnerabilities**.
- The generated estate no longer includes the thousands of legacy knowledge, locality, condition, herb, genomic, interaction, article, professional-profile, program-detail, or fabricated OG routes.
- Unverified health, service, credential, testimonial, beverage-dose, and professional-profile material is withdrawn or replaced by visible noindex review-status notices. Noindex alone is not treated as a user-safety control.
- Public fake trust feeds, AI bait, confidence scores, signatures, private LLM files, RAG/OpenAPI surfaces, service worker, bot shield, public deploy hook, hard-coded webhook, synthetic locality network, and unsafe intake claims are removed.
- JSON-LD passes through one script-breakout-safe serializer. Unapproved raw HTML sinks and restored quarantined route generators fail the source gate.
- The build is read-only with respect to tracked source inventories and sitemaps; sitemap and search artifacts derive from rendered output.
- The destructive historical `build:all` / force-push / webhook deploy path has been removed. The command name is now restored only as a safe alias for local `release:verify`; deployment still requires a separately reviewed, explicit release process.

### Residual human and production gates

- Legacy Markdown and legacy recipe claim fields remain retained as quarantined source material for audit/rewrite work. Build gates prevent reconnecting the content collection; recipe templates receive a narrow, claim-free projection.
- Do not republish health or service content until each claim has a suitable source, intended audience, limitations, verified author/reviewer identity, review date, contraindications where relevant, and an accountable approval record.
- Legal, clinical, credentialing, privacy, and accessibility conformance require qualified human assessment; the structural gates do not claim certification.
- Real-user Core Web Vitals, assistive-technology testing, browser/device visual regression, Search Console coverage, crawler logs, and AI citation measurement require the production deployment and representative traffic.
- Revoke or rotate the historical Hostinger deployment webhook because removing it from the current tree does not remove it from Git history or external logs.
- Verify ownership and monitoring of `info@nutritioncolours.com`, the security contact, hosting configuration, domain/DNS, backups, rollback, and incident response before release.

### Safe next phase

Publish fewer, substantially better pages. Start with one food guide and one recipe, complete the full evidence/editorial/accessibility template, measure the production result, then expand only through the same fail-closed workflow. SEO/GEO/AEO/AIO gains must come from distinctive, verifiable usefulness—not mass routing, hidden machine claims, or invented authority.

---

## Historical pre-remediation audit

**Re-audit result:** a new commit followed the prior audit, but it changed only `public/data/inventory.json:generatedAt`. Despite the commit message claiming “7-tier cryptographic control systems and killswitch,” it added no application, security, test, configuration or kill-switch code. Completion status therefore remains unchanged.

> “Perfect,” “top 0.001%,” zero policy risk, rankings, AI citations, or a zero-defect site cannot be guaranteed. The professional substitute is a fail-closed system with traceable evidence, adversarial tests, explicit uncertainty, staged rollout, and rapid rollback. This plan is designed to make defects difficult to hide and inexpensive to reverse.

## Third-pass completion check

The seven advanced controls added to version 2 of this plan were checked directly in source, scripts, configuration and public artifacts. None is implemented.

| Promised/required control | Completion | Direct evidence |
| --- | --- | --- |
| Public-trust surface SBOM | **Not implemented** | No fact-surface inventory, owner/source/expiry model or public-artifact allowlist exists |
| Evidence-gate mutation suite | **Not implemented** | No malicious/invalid fixtures or tests prove that gates reject false reviewers, claims, dates, routes or credentials |
| Identity round-trip proof | **Not implemented** | City routes still use lossy city-name-only slugs; 38 records collapse into 19 routes |
| Negative-capability registry | **Not implemented** | Unsupported signing, universal-review, secure-channel and clinical-operation capabilities remain public |
| Safe-sink compiler/fuzz corpus | **Not implemented** | Raw JSON-LD/HTML sinks remain; no hostile-string fixtures or CSP-compatible serializer exists |
| Fact tombstones/withdrawal propagation | **Not implemented** | No claim withdrawal event invalidates HTML, schema, feeds, OG/social data, search and caches together |
| Machine-estate kill switch | **Not implemented** | No deploy-time switch/allowlist can remove failing derivative feeds while retaining the human site |

The new commit is therefore a **semantic no-op** for the audit. A generated timestamp is not implementation evidence, and a commit message is not a control.

## Audit basis

This delta plan is based on direct repository inspection plus a clean production build, Astro checking, ESLint, dependency audit, route-set reconciliation, all-built-HTML inspection, content statistics, JSON-LD inspection, representative desktop/mobile rendering, JavaScript-disabled rendering, and current official platform guidance.

Current measured facts:

- Astro check: **0 errors, 0 warnings, 42 hints**.
- ESLint: **fails** on `src/components/SeoHelper.astro` speculation-rules parsing, plus console warnings.
- Dependency audit: **0 known vulnerabilities** after Astro was upgraded to `^7.2.2`.
- The claim gate reports “zero unqualified claims” after checking 5,156 files, but it recognizes only seven exact regex families and excludes source TS/TSX; its pass does not establish claim safety.
- The “AI Hallucination Firewall” reports zero hallucinations after structurally checking only **11** citation entries and six extreme phrase patterns; it does not resolve sources or map claims to evidence.
- The accessibility gate announces 5,091 pages and WCAG 2.1 AA, but actually samples the first 500 and checks only language, title, image-alt presence and duplicate IDs.
- The schema gate parses 20,327 HTML JSON-LD blocks but semantically checks required types on only one sample per template; it does not inspect the invalid public provenance JSON or verify that schema claims are true and visible.
- Current `dist`: approximately **662 MB**, **21,230 files**, and **5,091 HTML documents** including the error document; **5,090 route HTML files** were used by the link audit.
- Route truth disagrees: inventory **5,873**, built HTML **5,091**, sitemap **3,350**.
- Inventory routes absent from built HTML: **5,853**; built documents absent from inventory: **5,071**; built documents absent from sitemap: **1,741**. The one-count increase is the error document, not a repaired route.
- Built HTML: **236 missing descriptions**, **1,690 pages without H1**, **249 pages with multiple H1s**, **62 duplicate-title groups**, **383 duplicate-description groups**, and **245 pages containing at least one image without both dimensions**.
- Content: **2,306 knowledge records**, **1,909 missing `reviewedBy`**, only **439** with a Sources section, only **12** with a PMID/PubMed reference, **0** with a DOI, **333** containing links with spaces, **334 files under 500 words**, and **167 duplicate-title groups**.
- Accessibility gate examines only the first 500 pages and four shallow rules, yet labels the result WCAG 2.1 AA.
- Orphan report finds **439 pages with fewer than two contextual inlinks** but does not fail.
- Representative browser audit: mobile article overflow; nonfunctional knowledge “live search”; clinic/directory pages without H1; `/search` has no meaningful no-JavaScript search path; home has three H1s.
- The release verification command modified tracked inventory and sitemap files. Verification is therefore not read-only.
- The current dirty diff proves the mutation again: four tracked generated artifacts changed, including all **3,350** sitemap `lastmod` dates, even though no page content changed.
- The second-pass link audit found **91 broken internal links** across 428,292 link instances. `scripts/check-all-links.mjs` still exits successfully and is absent from `release:verify`.
- The public surface contains **64 machine-oriented JSON/JSON-LD/LLM/`.well-known` files**. Forty-nine public files match broad high-risk claim/trust language.
- `public/data/content-signatures.json` contains two concatenated top-level JSON documents, so it is not a valid single JSON response. One half contains visibly sequential placeholder-style hashes; the advertised public verification key does not exist.
- Public credential/trust files claim verified identity, 15 years' practice, complete clinical review, 100% citation coverage and no AI assistance while also containing placeholder ORCID/Google Scholar values. The repository cannot substantiate those assertions.
- The city generator starts from **1,690 location records** but emits **1,671 city slugs**; 38 records collide into 19 ambiguous slugs such as Aurangabad, London, San Jose and Birmingham.
- Contact/entity identity is fragmented across at least five email addresses plus generic social-platform home links and conflicting professional profile URLs.
- The static `/api/rag-source.json` endpoint ignores runtime query intent in a static build and publishes one build-stamped default disease response with permissive CORS, despite appearing parameterized.
- Astro's global `prefetchAll`, speculation rules and the mouse-vector prefetcher overlap. The site can issue multiple speculative fetch systems without a route budget or Save-Data policy.

## Executive completion verdict

Of the ten original stop-ship groups, **one is complete, three are partial, and six remain unresolved**.

| Original stop-ship group | Status | Evidence-based verdict | Required next action |
| --- | --- | --- | --- |
| Corrupted taxonomy | **Not complete** | Mixed content remains under `knowledge/Grains`; unknown grains still fall back to `wild-aquatic-grains/eragrostis-genus` | Quarantine; replace inference with an explicit registry; fail unknown mappings |
| Medical claim verification | **Not complete** | Source coverage and reviewer metadata remain sparse; keyword gates check only a handful of phrases | Establish claim-level evidence and review contracts; noindex pending review |
| Trust and schema truth | **Not complete** | Founding dates, social identity, service area, review dates, and professional type still conflict across registries and pages | One signed truth registry; delete unsupported fields; validate semantic truth |
| Simulated functionality | **Partial** | Fake community/newsletter and local booking storage were removed; dead knowledge search, risky document intake language, and client key storage remain | Remove dead controls; connect real monitored endpoints or use honest non-capturing fallbacks |
| Unsafe promotional claims | **Not complete** | Cure/reversal/off-medication language, synthetic-looking testimonials, invented-looking outcome charts, and unsupported operational promises remain | Immediate claim quarantine and clinical/legal review |
| Dependency risk | **Complete** | Astro upgraded and `npm audit` reports zero known vulnerabilities | Add upgrade SLA, lockfile review, and continuous audit |
| Public deployment trigger | **Partial** | Authentication was added, but the hook remains public, accepts a query token, logs in public, and lacks replay resistance | Move out of public root or replace with signed, timestamped server-side deployment |
| Route/sitemap truth | **Not complete** | Three mutually inconsistent public estates; fake build-date `lastmod`; nonexistent sitemap-index reference | Manifest-derived routes/canonicals/index policy/sitemaps with exact parity |
| Honest quality gates | **Not complete** | Narrow proxies and samples issue broad “zero hallucination” and accessibility claims | All-page, risk-weighted, fail-closed gates with honest names |
| Output/payload control | **Partial** | Knowledge hub improved, but current `dist` is ~662 MB; large route-local datasets and global islands remain | Template budgets, route-local data, deterministic artifact policy |

### Improvements that should be preserved

- Astro security upgrade and zero known audit findings.
- Removal of fake community/newsletter success and the no-op viewer tracker.
- The active BookingForm no longer persists patient details in local storage; legacy offline-appointment synchronization code still reads/writes appointment records in `LocalDirectory` and must be removed.
- Removal of the largest disease-by-city knowledge expansion.
- A server-rendered summary now exists on clinic routes, even though the template still lacks an H1 and remains mass-similar.
- Knowledge hub no longer renders every article record in one giant page.
- Clinic schema moved away from a fictitious physical walk-in location toward a remote service model.

These changes reduce risk but do not authorize renewed page generation.

## Newly discovered P0/P1 red flags

| Priority | Hidden issue | Why it matters | Containment |
| --- | --- | --- | --- |
| P0 | **1,671 city clinic pages remain** | They are substantially similar remote-telehealth variants leading to the same service; this closely matches Google's doorway examples | `noindex` the cohort now; retain only genuinely distinct, demand-backed regional guides after review |
| P0 | **Claim gates are structurally incapable of proving their reports** | Six extreme phrases and seven regexes cannot establish “zero ungrounded claims”; source TS/TSX is skipped | Rename gates honestly; build a complete claim inventory; make uncovered high-risk claims fatal |
| P0 | **Synthetic outcomes and unsafe plan naming remain** | “Cured,” “no more medicine,” “reversal,” “cellular resurrection,” and invented-looking average patient trajectories can mislead health decisions | Remove or replace with neutral support language pending proof, consent, and clinical/legal approval |
| P0 | **Schema manufactures freshness and review** | Build-time `dateModified`/`lastReviewed` and unconditional reviewer insertion imply events that did not occur | Omit unknown dates/reviews; compile only from signed review records |
| P0 | **Machine-facing facts contradict visible facts** | `llms.txt`, RAG JSON, schema, truth registry, and page copy disagree on scale, founding date, service area, and credentials | One fact registry; parity test every machine and human representation |
| P0 | **Health-data intake claims exceed the actual channel** | Email and WhatsApp are described as encrypted/secure for lab reports and medical history without an evidenced secure workflow | Stop requesting documents until an approved processor, consent, retention, access, and deletion flow exists |
| P0 | **Service worker can replay/cache sensitive or stale material** | It caches navigation/API JSON and queues POST bodies without enforcing declared TTLs | Unregister and remove caches; reintroduce only from a reviewed cache allowlist, never for health/PII/API POST data |
| P0 | **Client-side Gemini key storage is reversible** | Obfuscation is not secret storage and exposes abuse/cost/security risk | Remove client key input/storage; proxy only through authenticated, rate-limited server controls or remove feature |
| P1 | **Verification mutates source-controlled artifacts** | A check can make its own baseline pass and pollute the working tree | Split `verify` from `generate`; verification must be read-only and diff the committed intended manifest |
| P1 | **Knowledge search is a dead control** | It is labeled “Live Search” but typing changes nothing | Connect Pagefind or remove; provide a native no-JS search/category fallback |
| P1 | **Global speculative loading is excessive** | speculation rules plus mouse-vector prefetch, service worker, ClientRouter, locator, cookie UI, and hydrated header apply broadly | Default to zero enhancement; enable by route and demonstrated benefit only |
| P1 | **Mobile article layout overflows** | The sidebar becomes 447 px wide inside a 390 px viewport, creating horizontal scroll | Use `min-width:0`, responsive grids, wrapping and automated overflow tests |
| P1 | **Heading and snippet integrity is poor** | 1,690 missing H1s, 249 multi-H1 pages, and 236 missing descriptions weaken comprehension and auditing | Per-template semantic contract; exactly one meaningful H1 on indexable pages |
| P1 | **Robots and sitemaps contain pseudo-signals** | Nonstandard directives, nonexistent sitemap index, and artificial `lastmod` create operational ambiguity | Minimal valid `robots.txt`; only existing sitemaps; material-change dates only |
| P1 | **Original OG route exists but integration is incomplete** | Pages may still use a generic image, and generated OG inventory adds considerable build output | Generate only for approved indexable pages; assert URL/image existence and dimensions |
| P0 | **Public trust credentials contain placeholder and unsupported identity claims** | `.well-known/content-credentials.json`, `trust-profile.json`, `manifest-ai.json` and citation data claim verified identity/experience/review with placeholder ORCID/Scholar values and unsupported percentages | Remove these files from deployment immediately; republish only fields backed by signed records and externally resolvable identities |
| P0 | **Content provenance endpoint is invalid and unverifiable** | `content-signatures.json` is two JSON documents, includes placeholder-style hashes, advertises RSA signing inconsistently, and points to a missing key | Withdraw all signing/verification claims; build a real canonical-byte signing pipeline or omit provenance entirely |
| P0 | **Unsourced city demographics become medical-locality claims** | Generated population/mobile/gender/health-risk fields are presented as local audits, diagnostics and recommended plans without per-value provenance | Stop rendering/publicizing generated locality health intelligence; keep only sourced geographic facts with source/date/license |
| P0 | **The machine-facing estate amplifies errors beyond HTML** | 64 feeds/manifests/plugins/trust files can make unsupported facts easier for crawlers and models to ingest, including an explicitly named `ai-overview-bait.json` | Quarantine the machine estate; allowlist only minimal, parity-tested artifacts compiled from approved human-visible records |
| P1 | **City identity collisions silently merge different places** | 38 records collapse into 19 city-only slugs; punctuation normalization also differs between route, link and LLM generators | Use stable country/region/city IDs from one slug function—or retire mass city routes; collision count must be zero |
| P1 | **Broken-link test reports failure but passes CI** | 91 broken internal links exist; the checker returns exit code 0 and is not in the release pipeline | Make unique broken internal links and missing assets fatal; maintain explicit reviewed exceptions only |
| P1 | **Static API is described as dynamic** | `rag-source.json` is prerendered once, query parameters cannot select runtime disease/city data, and every build fabricates freshness | Replace with versioned static resources whose URLs identify content, or deploy a real validated API; never imply unsupported dynamics |
| P1 | **HTML/script sinks lack a unified escape contract** | JSON-LD uses raw `JSON.stringify` with `set:html`; auto-linking preserves original HTML and inserts anchors; CSP is absent | Centralize safe JSON-script serialization, sanitize/escape before linkification, add sink tests and deploy a restrictive CSP without `unsafe-eval` |
| P1 | **Public “private” and anti-crawler assets create a manipulation footprint** | `llms-private.txt`, trap manifests, “AI Overview Bait,” “AI-scrapable” labels and crawler flags advertise content designed for machines | Delete theatrical machine-only artifacts; keep parity-safe public content and edge-level verified-bot protection |
| P1 | **Contact and social identity fragments entity confidence** | Five email identities, placeholder footer links and conflicting LinkedIn paths weaken user trust and machine entity resolution | Select one verified support identity and canonical profile set; compile header/footer/schema/policies/feeds from it |
| P0 | **Security implementation is asserted without an implementation diff** | Commit `ae34d77c` claims seven cryptographic controls and a kill switch but changes only an inventory timestamp; this creates false assurance for reviewers and operators | Treat completion as evidence-mapped: control ID -> code/config -> test -> failing mutation -> release artifact; issue a corrective implementation rather than relying on the commit label |
| P0 | **A no-content-change commit launders freshness** | The committed change updates only `generatedAt`; the verification workflow then rewrites all 3,350 sitemap dates, making unchanged pages look newly modified | Derive `lastmod` from substantive content history; make build time unavailable to content/schema/sitemap freshness fields |
| P1 | **Release verification still excludes known failing gates** | `release:verify` omits ESLint and the internal-link checker; lint fails and 91 broken links do not block deployment | Add both as fatal, read-only stages and run a deliberately failing fixture to prove each gate stops release |

## Governing release covenant

The following conditions override traffic or deadline pressure:

1. No medical, credential, outcome, privacy, security, geographic-presence, or operational claim is published unless its source and owner are recorded.
2. Unknown is rendered as unknown or omitted; it is never replaced with the build date, a generic reviewer, a guessed taxonomy, or a convenient entity ID.
3. HTML, schema, sitemaps, feeds, social cards, and APIs are compiled from the same approved records.
4. Core content, navigation, safety information, and contact options work without JavaScript.
5. A release gate is read-only, checks the complete applicable population, fails on breach, and never claims more than it measures.
6. Indexable page count cannot grow until the existing estate is reconciled and each new page proves unique user value.
7. Health guidance never advises medication changes and clearly separates general education from individual care.

---

## 1. Architecture & Rendering

### 1.1 Build one authoritative publishing graph

Create a typed `PublishingRecord` for every intended public URL:

- stable content ID, route, canonical, page class, locale, and template version;
- index state: `index`, `noindex-review`, `redirect`, `gone`, or `private`;
- taxonomy IDs with no heuristic fallback;
- content source, evidence status, reviewer event ID, and substantive-change date;
- permitted schema types and referenced entity IDs;
- parent/child/contextual links;
- risk tier, owner, approval signatures, rollout cohort, and rollback action.

Generate Astro paths, canonicals, breadcrumbs, XML, Pagefind inclusion, JSON-LD, OG images, optional AI feeds, and redirects from this graph. After build, compare the graph with actual HTML. Exact equality is required for indexable routes.

### 1.2 Fail-closed content lifecycle

`draft -> evidence-pending -> clinical-review -> compliance-review -> approved -> indexable -> expired/corrected/withdrawn`

- Content cannot skip states through frontmatter defaults.
- High-risk claims expire and require re-review; expiration automatically removes index eligibility, not the record.
- A correction creates a new signed event and preserves the public correction history.
- Unknown taxonomy or entity reference blocks the record before route generation.

### 1.3 Rendering contract by page class

| Page class | HTML contract | JavaScript contract | Index decision |
| --- | --- | --- | --- |
| Medical/knowledge article | Full answer, evidence, safety, author/reviewer and links in HTML | Optional isolated tools only | Approved and distinctive only |
| Hub/category | Curated intro, stable navigation and pagination in HTML | Search/facets loaded on intent | Curated hubs only |
| Service/plan | Scope, exclusions, process, price basis and contact fallback in HTML | Progressive form enhancement | Only fact-verified services |
| Location | Publish only when service/process/local information is substantively unique | No global location bundle | Default consolidate/noindex |
| Search | Native category fallback and labelled Pagefind enhancement | Lazy search UI | `noindex,follow` unless a reason is approved |
| Tool/calculator | Method, limitations and accessible inputs/output | Route-local island | Only validated, useful tools |
| Private/intake | Authenticated and excluded from public build | App bundle isolated | `noindex`, no public cache |

### 1.4 Agility architecture

- Build and deploy immutable artifacts by manifest hash.
- Separate `generate:*` from `verify:*`; CI verification fails if `git diff --exit-code` changes.
- Release by template cohort using reversible feature flags.
- Store schema and content compiler versions in the artifact report.
- Maintain a one-command rollback to the prior manifest hash.
- Require a page-count budget token for any change that adds indexable routes.

### Acceptance

- `approved indexable manifest = built indexable HTML = canonical set = Pagefind eligible set = sitemap set` exactly.
- Two clean builds from the same commit have identical route and content hashes, excluding documented generated images if byte-determinism is impossible.
- Zero unknown taxonomy mappings, guessed reviewer events, current-date fallbacks, or duplicate canonicals.
- Every indexable template passes zero-JavaScript content and link tests.

---

## 2. Technical SEO

### 2.1 Immediate index-estate containment

1. Stop IndexNow submission and route expansion.
2. Remove/noindex the unsafe `epilepsy-diet-cured` cohort and raw-ID routes pending intent review.
3. Apply `noindex-review` to clinic variants and unreviewed YMYL records. Do not rely on robots blocking to remove indexed URLs.
4. Export Search Console performance and backlinks before any destructive URL decision.
5. Decide per URL: keep, merge, noindex-review, 301 to a semantically equivalent page, or 404/410. Never blanket-redirect retired pages to home/hubs.

### 2.2 Template-level semantic contract

Every indexable page must have:

- one visible, meaningful H1;
- a distinct title, description, canonical and primary intent;
- crawlable main content before hydration;
- correct language, landmarks, breadcrumbs and contextual inlinks;
- only visible, truthful schema;
- image dimensions and useful alt where informative;
- a material-change `lastmod`, or no `lastmod` when unknown.

Fix the current cohorts: clinic/directory/search missing H1; home and article groups with multiple H1; 236 missing descriptions; team/fruit canonical aliases; duplicate titles/descriptions; links with spaces; 439 low-inlink pages; mobile overflow.

### 2.3 Sitemap and robots contract

- Publish one valid sitemap index only if multiple child files exist; otherwise publish one sitemap URL.
- Include canonical, indexable, status-200 URLs only.
- Remove pseudo-directives such as `AI-API:` and `Security:` from `robots.txt`.
- Express bot policy using documented user agents only.
- Use substantive approved change dates; never rebuild freshness.
- Gate 404/redirect/noindex URLs in sitemap at zero.

### 2.4 Structured-data semantic validator

Parsing is not validation. For every block, assert:

- schema type is permitted for the template;
- URL/canonical/entity references resolve;
- visible name, author, reviewer, date and claims match the markup;
- reviewer has a real review event and correct professional type;
- ontology IDs resolve to the named concept;
- organization/person facts match the signed registry;
- no testimonial/review markup without a real, consented record;
- no FAQ markup for hidden, promotional or duplicated content.

Google explicitly warns that syntactically valid structured data can still be misleading and that marked-up content must be visible and truthful. Therefore Rich Results Test success is necessary, never sufficient.

### 2.5 Engineering quality gates

- Make ESLint part of `release:verify`; zero errors.
- Resolve or intentionally suppress each Astro hint with an owner and expiry.
- Add real unit, integration and browser tests; scripts named `_test-*` are not a suite.
- Validate the complete built population, partitioned for parallelism—not sampled templates disguised as full coverage.
- Fail on orphan thresholds and accessibility errors rather than emitting success with warnings.

---

## 3. AEO + GEO + AIO

### 3.1 Strategy correction

For Google, AEO/GEO/AIO is durable SEO plus unique, reliable, crawlable content. Google's July 2026 guide says `llms.txt`, special AI markup, forced chunking, and query-variation pages do not improve Google AI visibility; scaled fan-out pages can violate spam policy. Consequently:

- delete nonstandard `<meta name="ai-search-agent">` and `<meta name="llm-corpus">` because they have no documented effect and create false confidence;
- keep `llms.txt` only if another named consumer requires it, generate it from the manifest, and include only real approved URLs and facts;
- delete the fabricated 500-city links, “50,000+ cities,” “leading,” enrollee totals, and blanket evidence claims;
- do not create separate “AI answer,” city, symptom, or long-tail permutations;
- use answer-first structure for human comprehension and citation clarity, not to manipulate AI systems.

### 3.2 Retained article contract

Each approved YMYL article should contain, when applicable:

1. a concise direct answer with scope and uncertainty;
2. who the information applies to and who requires clinician input;
3. practical education separated from diagnosis/treatment decisions;
4. contraindications, interactions, red flags and emergency escalation;
5. an evidence table: population, intervention, outcome, evidence grade, date and limitations;
6. original practitioner insight or first-party method—not commodity paraphrase;
7. visible source links, actual author, actual reviewer, review scope and correction history;
8. real questions from search/support data, without FAQ-schema stuffing.

There is no universal 600-word target. Remove the current word-count gate and replace it with intent completeness, uniqueness, evidence coverage, and usability checks.

### 3.3 Executable claim ledger

Every material claim receives:

- claim ID and exact text/section anchor;
- class: education, prevention, diagnosis, treatment, risk, outcome/testimonial, credential, security/privacy, operational promise;
- source identifiers and resolver status, population, date, evidence grade and limitations;
- allowed wording and forbidden extrapolations;
- author, clinical reviewer, compliance reviewer, approval, expiry and correction/withdrawal status;
- every human page, schema, feed, chart, social card and API location where it appears.

The compiler refuses high-risk text without an active record. CI resolves PMID/DOI/official URLs, checks retractions/corrections, validates quoted numbers, and detects unsupported extrapolation. A clinician and compliance owner make the decision; an LLM may flag risk but cannot approve.

### 3.4 AI hallucination red-team suite

Use exact and paraphrase-level tests:

- medication discontinuation, cure/reversal/remission, guaranteed time/outcome, “root cause,” disease prevention/treatment, pregnancy/renal/hepatic contraindications;
- fabricated citation, reviewer, date, credential, testimonial, patient average or enrollee count;
- contradictions among HTML, JSON-LD, `llms.txt`, API/RAG output, OG metadata and social copy;
- generated summaries that intensify cautious source language;
- adversarial prompts asking the internal AI to invent a citation, diagnose, or bypass safety language.

Store prompt/model/version, retrieved sources, output, reviewer and disposition for materially AI-assisted YMYL work. Do not send personal health data to a model without an approved processor and explicit purpose/consent.

### 3.5 Earned authority plan

- Publish credential proof, clinical scope, editorial method, evidence-grading method, AI-use policy, correction log, privacy/security details and conflicts.
- Build fewer original assets: anonymized aggregate insights only with documented consent/ethics/de-identification; reproducible calculators; clinician-authored decision aids; India-specific food substitution datasets with methodology.
- Seek legitimate citations from professional/academic/community partners based on utility, not reciprocal link schemes or invented mentions.
- Reconcile all off-site identities; omit uncertain profiles.

---

## 4. Bot & Crawler Strategy

- Keep public approved HTML crawlable. Do not use crawler-specific content.
- If ChatGPT Search discovery is desired, explicitly allow `OAI-SearchBot` and verify its published IP ranges at the WAF/CDN; allowance does not guarantee placement.
- If Perplexity discovery is desired, allow `PerplexityBot` and verify current published IP ranges. Treat `Perplexity-User` separately as a user-requested fetcher.
- Keep private/intake/API/search-parameter/preview/trap routes out of indexes and public caches.
- Log verified bot identity, requested URL, response, canonical/index state, bytes, latency and cache result.
- Produce weekly crawl-waste and hallucinated-URL reports. Add redirects only for strong intent equivalence; otherwise keep accurate 404/410 responses.
- Separate search discovery choices from model-training permissions using each provider's actual documented controls.
- Test origin and CDN behavior, not just `robots.txt`: WAF rules, bot challenges, compression, redirects and JavaScript-free HTML.

Fallback: when crawler identity cannot be verified, apply normal public rate limits and content rules. Never bypass security based only on a user-agent string.

---

## 5. Core Web Vitals & Performance

### 5.1 Release budgets

| Measure | Content page | Hub/service page | Field objective |
| --- | ---: | ---: | ---: |
| LCP | <= 2.0 s lab | <= 2.2 s lab | <= 2.5 s at p75, target <= 1.8 s |
| INP | <= 150 ms tested flows | <= 175 ms | <= 200 ms at p75 |
| CLS | <= 0.05 | <= 0.05 | <= 0.10 at p75 |
| Initial compressed JS | <= 70 KB | <= 110 KB | Track by template and device |
| HTML | <= 150 KB | <= 250 KB | Explicit reviewed exception only |
| DOM nodes | <= 1,500 | <= 1,800 | No giant article/navigation lists |
| Mobile overflow | zero | zero | zero in template matrix |

### 5.2 Highest-leverage removals

1. Remove global parallax of the entire slotted page, global card tilt and scroll animation; honor `prefers-reduced-motion` and low-power devices.
2. Remove the mouse-vector `PredictivePrefetcher`; use browser-native, small, intent-based prefetch only after measurement.
3. Stop globally hydrating location outreach, cookie UI and header where static/CSS alternatives suffice.
4. Unregister the current service worker and clear its cache on upgrade. Reintroduce only with a data-classification cache policy.
5. Route-split location/international datasets and large components. The current chunks include roughly 1.5 MB location data, 908 KB international data and 744 KB LocalDirectory.
6. Remove globally preconnected Gemini and tag-manager origins until the feature is used and consent permits it.
7. Self-host the exact font weights used; choose either local Inter/Fraunces or a system stack. Do not globally fetch Google Fonts while also shipping local Inter.
8. Fix long article related-link lists and render curated/paginated context rather than hundreds of links.
9. Generate compressed artifacts only when the deployment host requires them; measure output and deploy duration budgets.

### 5.3 Performance verification

- Lighthouse/WebPageTest on a fixed template/device/network matrix.
- Browser trace for home, knowledge hub, representative article, clinic/service, search, plans and contact.
- Real-user vitals with consent-aware collection and route cohort, release hash, device, country and connection class.
- Bundle budgets compare each route against baseline and fail regressions.
- No field claim until enough p75 samples exist; label lab results as lab.

Fallbacks: static tables for visualizations; native links/forms for islands; curated categories when search fails; fixed-size placeholders for images; no motion under reduced-motion/save-data; stale content never presented as a medical update.

---

## 6. UX/UI Design System and Page/Component Improvement

### 6.1 Design direction

Move from “dense promotional clinical dashboard” to **calm evidence workspace**:

- fewer cards, borders, shadows, gradients, all-caps labels and animated layers;
- 16 px minimum body text on mobile with comfortable line length and 1.6–1.75 line height;
- clear hierarchy: answer -> scope -> evidence -> action -> safety -> sources;
- explicit content state badges: reviewed date, reviewer role, evidence grade and correction status;
- one primary action per section; no ambiguous “diagnostic” or “secure” label without a real capability;
- use visualizations only when they teach a relationship and always provide an accessible table/method.

### 6.2 Page-family plan

| Page/component | Current problem | Upgrade | Acceptance/fallback |
| --- | --- | --- | --- |
| Global layout | Every page receives React header, cookie island, locator, prefetch, service worker, ClientRouter, parallax and tilt | Static accessible header; route-scoped consent/analytics; remove locator/prefetch/motion by default | Useful and stable with JS off/reduced motion |
| Home | Three H1s; visual full-page capture shows large spacing/animation artifacts; reversal-led positioning | One evidence-led promise; real scope and credentials; selected original resources; neutral outcome language | One H1, no blank/shifted sections, no unsupported superlatives |
| Knowledge hub | “Live Search” is inert; placeholder says 700+ while corpus is 2,306; category copy overclaims evidence | Pagefind-backed labelled search or remove; honest counts; editorial state facets | Keyboard operable; no-JS category navigation |
| Knowledge article | Mobile overflow, tiny dense text, huge related list, duplicate/template-heavy content | Responsive `min-width:0`; concise related set; readable typography; answer/evidence/safety/source pattern | No overflow at 320–1440 px; distinct-content and claim gates |
| Clinic city | No H1; mass-similar copy; strong guarantees, diagnostics/security/team claims; same conversion | Consolidate to a small remote-service page plus genuinely distinct region guides | Cohort noindexed until uniqueness and operational proof pass |
| Clinics directory | Client-only search has no H1; claims 1,700 locations and diagnostic coordination | Replace with “remote service availability” and verified jurisdictions/process | Server-rendered H1 and region navigation; honest fallback |
| Plans | “Therapeutic Reversal,” “Cellular Resurrection,” remission/recovery framing | Rename by service scope; show inclusions, exclusions, price basis, eligibility, risks and expected variability | Claims ledger and clinical/compliance signoff |
| Contact/connect | Requests medical history/labs through email/WhatsApp while calling channels secure/encrypted | Minimal non-health enquiry; approved secure intake portal for documents | If portal unavailable, state “do not send medical records” |
| Booking | PII in a WhatsApp URL, no past-date restriction, popup failure path unclear | Collect minimum data, explicit privacy notice, safe date validation, confirmation and fallback | No health details in URL; monitored delivery; keyboard/browser tests |
| Testimonials | Synthetic-looking records and medication/cure implications | Remove until proof, consent, exact wording, representativeness and outcome disclaimer exist | No schema or claims without evidence package |
| Search | JS-off page has no H1/input/results | Server-render H1 and categories; Pagefind progressive enhancement | `noindex,follow`; useful without JS |
| Cookie consent | Optional toggles initialize true; claims about portal/security may be inaccurate; no withdrawal/version/expiry | Default optional false, consent version, expiration, withdrawal control, purpose inventory, GPC policy | Nonessential code cannot run before consent |
| SEO helper | Manufactured dates/reviewer, nonstandard AI meta, global preconnects and lint error | Pure, typed metadata from approved props/registry; no silent enrichment | Unit tests plus semantic schema parity |
| Service worker | Stale caching and POST replay | Remove; later use strict public-static allowlist only | Never cache PII, API POST, intake or personalized response |
| Deploy hook | Public/query-token/replay/log exposure | Private control plane with HMAC/timestamp/nonce, rate limit and audit log outside web root | Deny by default; key rotation and replay test |
| Public machine/trust files | Placeholder ORCID/Scholar IDs, unsupported 100% review/citation claims, invalid concatenated signature JSON, missing advertised public key, AI-bait/private-file theatre | Establish a strict public-file allowlist; delete every unproved credential, signing, trust-score and AI-bait artifact; compile retained files from the same approved facts as HTML | Omit the file/field when proof is absent; every JSON file parses independently and every asserted capability is reproducible |
| Location data/directory | Colliding city slugs, generated demographics and medical-risk/diagnostic language without per-value provenance | Use stable location IDs plus country/region-qualified URLs; publish only sourced locality facts; remove generated diagnosis/risk/biomarker language | Collision blocks build; if source or identity is uncertain, show a generic remote-service page rather than a local fact |
| Header/footer/contact identity | Five contact emails, profile variants, platform-home social links and `#` placeholders fragment the entity | One verified organization/contact registry compiled into visible UI, schema, policies, feeds and social metadata | Remove unverified channel rather than linking to a generic/empty destination |
| Rich text and JSON-LD sinks | `set:html`, `dangerouslySetInnerHTML` and linkification can create script/HTML injection paths; no enforceable CSP baseline | One escaped JSON-script serializer, sanitized rich-text pipeline, Trusted Types/CSP-compatible rendering and hostile-string tests | Render plain text or omit enrichment when sanitization cannot prove safety |

### 6.3 Accessibility contract

- Target WCAG 2.2 AA and label conformance only after an appropriate audit—not a four-rule sample.
- Run axe on every template/state plus keyboard, focus, zoom 200/400%, screen-reader spot checks, reduced motion, contrast and touch-target tests.
- Dialogs trap and restore focus; skip link targets visible content; accordions expose state; errors are associated and announced.
- Automated checks cover all pages for structural invariants; manual checks cover representative states and critical flows.

---

## 7. Out-of-the-Box High-Leverage Ideas

These are deliberately limited to mechanisms that create defensible quality rather than novelty theatre.

1. **Route-set attestation.** Hash the intended publishing graph and the actual built route/canonical/schema/feed sets. Publish the hash in the release report. Any shadow generator or unexpected page changes the attestation and blocks release. This closes the current inventory/build/sitemap loophole.

2. **Indexable-estate budget.** Set a hard page ceiling per template. A new route requires a uniqueness score, evidence status, named owner, expected user need and an expiry/review date. Growth without quality becomes mechanically impossible.

3. **Zero-JS truth differential.** For every template, compare accessible main text, H1, safety notices, links and primary action with JavaScript on/off. Fail when core meaning or function disappears. This catches client-only clinic/search regressions that standard crawlers miss.

4. **Machine-feed truth canary.** Seed a non-public test entity with known values, compile HTML/schema/feeds/API/OG data in CI, and compare all representations. Drift reveals silent fallback or parallel-source defects before real facts are corrupted.

5. **Semantic route entropy audit.** Use deterministic similarity/minhash first and reviewed embeddings second to detect near-duplicate titles, descriptions, main text and intent across URL cohorts. Low-entropy cohorts are merged/noindexed; the model only prioritizes review and never decides publication.

6. **Counterfactual clinical-safety tests.** Generate controlled paraphrases of approved copy and test whether summaries could be read as cure, medication cessation, diagnosis or guarantee. Keep adversarial examples as regression fixtures. This catches euphemisms that phrase lists miss.

7. **Evidence transclusion.** Charts, statistics, cautions and source cards render from a central claim record rather than copied prose. A retraction or correction updates every occurrence and automatically opens affected pages for re-review.

8. **Operational-promise monitor.** Attach every SLA/channel/security claim to a synthetic check or signed operational record. If the real service is unavailable, a safe feature flag degrades the copy and CTA to an honest fallback instead of leaving a false promise live.

### 7.1 Second-pass hidden control systems

9. **Public-trust surface SBOM.** Inventory every externally visible fact across HTML, schema, JSON/JSON-LD, feeds, `.well-known`, robots/LLM files, OG cards and social exports. Each fact needs an owner, source record, expiry and all consuming surfaces. An unregistered public fact fails release. This prevents a small unsupported assertion from being multiplied into dozens of apparently independent confirmations.

10. **Evidence-gate mutation suite.** In CI, deliberately inject fixtures with a placeholder reviewer, future review date, missing citation, unsafe cure paraphrase, duplicate canonical, invalid JSON, route collision and invented credential. The release gate must reject every mutant; a gate that does not fail is itself failed. This measures whether controls work rather than whether scripts ran.

11. **Identity round-trip proof.** Give locations, authors, organizations, claims and articles stable immutable IDs. Property-test `record -> URL/schema/feed -> record` across Unicode, punctuation, transliteration and same-name places. Any lossy round trip or many-to-one slug is a build blocker, never a first-match fallback.

12. **Negative-capability registry.** Record capabilities the project does *not* currently have—physical clinics, encrypted intake, cryptographic content signing, owned clinical trials, 24/7 medical support, universal review coverage—and compile guard assertions against public copy/data. This makes absence explicit so a template or AI-assisted edit cannot silently invent operational authority.

13. **Safe-sink compiler and fuzz corpus.** Route JSON-LD, embedded JSON and rich-text links through one audited serializer/sanitizer. Fuzz with `</script>`, entity encodings, bidirectional Unicode, malformed URLs and oversized values under the intended CSP. Failure degrades to escaped plain text, not raw HTML.

14. **Fact tombstones and withdrawal propagation.** A revoked credential, claim, citation or service promise creates a tombstone that invalidates HTML, schema, feeds, OG/social assets, search indexes and caches in the same release. Publish a correction/withdrawal record where users may have relied on the old fact.

15. **Machine-estate kill switch.** Put all nonessential feeds, experimental manifests and crawler-facing derivatives behind one deploy-time allowlist. If truth parity or parsing fails, ship the human-readable site with those derivatives removed. This is a safe operational fallback, not crawler-specific alternate content.

Why these rank highest: each controls an entire defect class, produces auditable evidence, and improves safety, SEO, AEO/GEO/AIO and engineering agility simultaneously.

---

## 8. Social & Viral Growth

Social growth starts after claim repair.

- Create shareable assets from approved claim records: myth/context cards, Indian food substitution tables, evidence-grade explainers, seasonal shopping guides, “questions to ask your clinician,” and source-linked charts.
- Put qualifications/certifications upfront when technical health advice is promoted, consistent with current ASCI health-influencer guidance.
- Every social asset stores claim IDs, source URLs, reviewer, approval, expiry, platform crop, alt text and destination canonical.
- Generate OG images only for approved indexable pages; verify existence, dimensions, crop safety and rendered title.
- Use UTM conventions and measure qualified sessions, engaged reading, corrections and booking completion—not reach alone.
- Do not use synthetic testimonials, undisclosed incentives, engagement pods, fake authority mentions, before/after guarantees or medical fear.
- Run controlled title/visual experiments only on already truthful claims; never test stronger medical assertions.

Fallback: when a claim expires, social distribution stops and the destination displays correction/update status. Old assets receive a withdrawal record.

---

## 9. Hard Rules, Loophole Closures and Fallback Matrix

### 9.1 Prohibited shortcuts

- No doorway city/query/symptom/AI-fan-out pages.
- No fabricated or generic author/reviewer, review date, credential, founding date, patient count, success rate, service area, clinic presence or security property.
- No build date as content freshness.
- No `Physician` schema without factual/legal qualification.
- No invented ontology IDs.
- No patient outcome/testimonial without source, consent, exact wording, context and review.
- No health-data collection through unapproved channels.
- No client-side secret storage or obfuscation presented as security.
- No crawler-specific hidden content, schema-only claims or AI-only answer layers.
- No public “private” file, robots directive, pseudo-legal warning or user-agent check presented as access control.
- No placeholder ORCID, Scholar profile, signature, trust score, content credential, public key or verification status.
- No generated local demographics, diagnosis, risk, biomarker or service-presence claim without record-level source and identity proof.
- No machine-only “AI bait,” scrapability label or nonstandard capability manifest used as an authority signal.
- No security/control completion claim based on a commit message, generated timestamp or document alone; code, configuration, tests and a failing mutation must exist.
- No “zero hallucination,” WCAG conformance, “all validated,” or performance claim beyond what the test actually establishes.
- No release command that rewrites its own baseline.

### 9.2 Current gate loopholes to close

| Loophole | Current failure mode | Correct gate |
| --- | --- | --- |
| Sampling | One schema sample/template and first 500 a11y pages imply all-page quality | Validate every applicable artifact; report population and exclusions |
| Proxy metric | Word count includes shared chrome and implies usefulness | Main-content uniqueness, intent completeness, evidence and usability |
| Exact phrases | Regex misses paraphrased unsafe claims | Complete claim inventory plus semantic/adversarial review |
| Source blind spot | Claim scan skips TS/TSX while claims live in components/data | Scan source AST, content, generated HTML, schema, feeds and social assets |
| Parse-only schema | Valid JSON is called valid structured data | Cross-check type, truth, visibility, entity, date, canonical and source |
| Warning-only | Orphans and hints can grow without stopping release | Approved threshold, owner/expiry exceptions, fatal regression |
| Self-updating baseline | Inventory snapshot is rewritten during verification | Committed intended manifest; generation separate from read-only diff |
| Date laundering | Build time becomes review/modified/sitemap date | Signed substantive-change/review event or field omission |
| Inactive lint | Release passes while lint fails | Lint/test/a11y/route parity are mandatory release stages |
| Reporter-only link check | 91 broken internal links are printed but the process exits successfully | Unique broken link is fatal unless an owned, expiring exception is committed |
| Parallel public facts | HTML, schema, feeds, `.well-known` and data files repeat contradictory/unproved identity and review facts | Generate every retained surface from the approved registry and diff representations |
| Fake provenance | Invalid signature JSON and a missing public key coexist with cryptographic-signing claims | Verify canonical bytes, key custody, signature and rotation end-to-end—or remove all signing claims |
| Route first-match | Same normalized city slug can resolve multiple records | Stable composite identity and collision/round-trip tests block generation |
| Static API theatre | Query-aware source is prerendered to one static response and advertised as dynamic | Versioned static dataset or a real server endpoint with contract tests; never mislabel it |
| Unsafe render sinks | Raw script/HTML insertion bypasses a future CSP and trusts repository content | One escaping/sanitization boundary plus hostile fixture and CSP tests |
| Semantic no-op completion | A control-rich commit message accompanies only a generated timestamp change | Require a machine-readable control-evidence map and verify changed executable artifacts plus rejection tests |
| Freshness cascade | Inventory generation and sitemap generation rewrite dates for unchanged pages | Use content/review-event hashes; unchanged records retain prior dates and byte-identical outputs |

### 9.3 Fallback matrix

| Failure | Safe fallback | Never do |
| --- | --- | --- |
| Clinical reviewer unavailable | Keep draft/noindex or unpublish high-risk claim | Insert a default reviewer |
| Evidence missing/unresolvable/retracted | Remove claim, show uncertainty, open correction | Invent/retain a citation |
| Taxonomy uncertain | Quarantine record | Guess from folder/name |
| Replacement URL uncertain | 404/410 with helpful navigation | Redirect to home or unrelated hub |
| JavaScript fails | Full static content, links and native form/contact | Blank page or fake success |
| Search fails | Curated server-rendered categories | Inert “live search” control |
| Secure intake unavailable | Minimal contact and “do not send medical records” | Ask for labs via ordinary email/URL |
| Consent unknown/withdrawn | Disable optional analytics/personalization | Default optional tracking on |
| Crawler identity uncertain | Normal public policy and rate limits | Trust user agent alone |
| Field performance unavailable | Report lab result with limitation | Call it real-user p75 |
| Build nondeterministic | Stop release and compare artifacts | Accept changing output |
| Rollout harms guardrail | Roll back cohort by manifest hash | Continue because traffic rose |
| Identity/credential proof absent | Omit the field and state the limited verified identity | Publish placeholder IDs or an inferred credential |
| Signing pipeline/key unavailable | Remove signature files and signing language | Publish decorative hashes or an absent-key reference |
| Locality source/identity uncertain | Use generic, sourced regional/service information | Generate precise-looking population or medical-risk facts |
| Machine feed truth/parsing fails | Activate the machine-estate kill switch | Serve stale or contradictory derivative data |
| Slug/ID collision detected | Stop build and require a stable disambiguated route | Select the first matching record |
| Serializer/sanitizer fuzz fails | Escape to plain text or omit enrichment | Render untrusted HTML/JSON into a script sink |
| Claimed control lacks executable evidence | Mark it unimplemented and block the release claim | Accept a checklist, filename or commit message as proof |
| Substantive-change date unavailable | Omit `lastmod`/modified fields | Substitute build or verification time |

---

## 10. Measurement Framework

### 10.1 North-star and guardrails

**North-star:** qualified users who reach an approved answer/service page, understand its scope and safety, and complete an appropriate next action.

Guardrails:

- zero confirmed harmful/unsupported claims live beyond the correction SLA;
- zero unapproved PII/health-data flows;
- zero route/schema/feed truth mismatches;
- no manual action, rich-result spam warning or crawler-blocking regression;
- WCAG error and Core Web Vitals budgets do not regress;
- page growth never substitutes for unique value.

### 10.2 Scorecards

| Domain | Measures | Cadence |
| --- | --- | --- |
| Truth/safety | claims by risk/status, evidence coverage, reviewer coverage, expired/retracted sources, corrections and SLA | Daily/weekly |
| Estate | intended/built/indexable/sitemap/canonical/Pagefind parity, duplicate clusters, orphan routes, noindex cohort | Every build/weekly |
| Search | Search Console coverage, selected canonical, crawl stats, non-brand queries, clicks, generative-AI report where available | Weekly/monthly |
| AI visibility | Fixed prompt-set citation, accuracy, cited URL, competitor source, correction rate; sample size disclosed | Monthly |
| Crawlers | verified bot visits, success, latency, bytes, wasted crawl, hallucinated URLs | Weekly |
| Performance | LCP/INP/CLS p75 by template/device/release plus lab budgets and bundle/HTML size | Release/weekly |
| UX/accessibility | search success, task completion, form delivery, keyboard/axe/manual defects, support/search gaps | Release/monthly |
| Conversion | consented funnel: page -> appropriate CTA -> delivery -> qualified consultation; no patient condition in analytics | Weekly |
| Agility | lead time, rollback time, escaped defect rate, flaky gate rate, generated route delta and exception debt | Sprint/monthly |

### 10.3 Experiment protocol

- Pre-register hypothesis, primary metric, guardrails, cohort, sample-size rule, duration, owner and rollback.
- Change one material variable at a time.
- Never experiment on claim strength, credentials, urgency, patient fear, consent or safety language.
- Segment by template and intent; do not average YMYL articles with marketing pages.
- Keep failed experiments and falsified assumptions in the decision log.

---

## 11. Prioritized 90-Day Roadmap

### 0–72 hours: containment and truth freeze

**Owners:** engineering lead + clinical owner + privacy/compliance owner  
**Actions:**

- Freeze indexable page growth, IndexNow and automatic sitemap mutation.
- Mark the seven claimed cryptographic/kill-switch controls unimplemented until each has code, configuration, a rejection test and deploy evidence; publish a corrective status record without rewriting shared Git history.
- Noindex the mass clinic cohort and unreviewed YMYL cohorts while URL decisions are made.
- Remove synthetic testimonials, medication-cessation/cure guarantees, “Cellular Resurrection,” outcome charts without data, and unsafe epilepsy route.
- Delete placeholder/unsupported `.well-known` credentials and trust profiles, invalid content signatures, absent-key claims, AI-overview-bait data, public “private” LLM file and nonstandard capability manifests unless each retained assertion has reproducible proof.
- Remove fabricated/fan-out `llms.txt` and RAG facts; disable the static query-dependent endpoint or publish it honestly as a versioned static artifact.
- Remove generated locality diagnosis/risk/biomarker copy and unsourced precise demographics; quarantine all 19 colliding city slugs until stable IDs and disambiguated routes exist.
- Stop requesting labs/medical histories through ordinary email/WhatsApp and remove unsupported encrypted/secure language.
- Unregister service worker, clear caches safely on next load, and remove client-side Gemini key storage.
- Correct `robots.txt`; disable public deploy hook or move it out of web root.
- Consolidate the verified organization email/social/profile identity across visible and machine-readable surfaces; remove placeholder/generic links.
- Make release verification read-only; add ESLint and a broken-link gate that fails on the current 91 broken internal links.
- Remove the identical untracked `package.json.bak` from release inputs through an explicit repository-hygiene rule; preserve it outside the deploy context if it is intentionally needed.

**Exit gate:** no known P0 misleading claim/data path remains intentionally indexable; rollback tested; route growth is zero.

### Days 4–14: single-source truth and real gates

**Owners:** platform engineer + content systems engineer + clinical/editorial operations  
**Actions:**

- Implement publishing graph, entity truth registry, explicit taxonomy registry and content lifecycle.
- Add the public-trust surface SBOM, negative-capability registry and strict public machine-file allowlist.
- Reconcile the 5,873/5,090/3,350 route sets and sign the intended estate.
- Replace city/name slug matching with stable composite IDs and collision/round-trip property tests.
- Replace date/reviewer/schema fallbacks with explicit records.
- Build claim ledger schema and import all high-risk claims from components, constants, public feeds and content.
- Replace narrow hallucination/schema/a11y/word-count scripts with honestly named complete-population gates.
- Separate generation and verification; add deterministic build/manifest attestation and the evidence-gate mutation suite.
- Implement one safe JSON-script/rich-text boundary; add CSP/Permissions-Policy in report-only mode, hostile-string fixtures and an explicit migration plan for incompatible inline/eval code.

**Exit gate:** exact route parity; zero unknown taxonomy/entity references; zero manufactured dates/reviews; gates fail on planted fixtures.

### Days 15–30: rendering, accessibility and performance recovery

**Owners:** frontend + accessibility + platform  
**Actions:**

- Fix H1 contracts, descriptions, canonical aliases, links with spaces, duplicate groups and orphan thresholds.
- Repair all 91 currently detected broken internal links and keep zero unexplained broken links as a release invariant.
- Repair the knowledge search or remove it; add zero-JS fallback to search and location/service pages.
- Fix mobile article overflow and replace huge related lists.
- Remove global parallax/tilt/predictive prefetch and reduce global React hydration.
- Route-split location/clinical data, self-host fonts consistently and remove unused preconnects.
- Establish the browser/template matrix, axe/manual checks and performance budgets.

**Exit gate:** all approved indexable templates work with JS disabled; zero overflow; exactly one H1; zero critical accessibility errors; bundle/HTML budgets pass.

### Days 31–60: editorial consolidation and distinctive authority

**Owners:** clinical reviewers + editor + SEO/content strategist  
**Actions:**

- Quarantine corrupted Grains cohort, raw-ID records, template duplicates and unsupported articles.
- Review/merge/retire by intent and evidence; preserve URLs only when useful.
- Convert retained high-value pages to the answer/evidence/safety/source format.
- Verify credentials, scope, policies, corrections, conflicts and methodology pages.
- Produce two or three original, reproducible India-specific resources rather than hundreds of generic pages.
- Submit clean sitemap cohorts and monitor indexing/canonical/crawl effects.

**Exit gate:** 100% of indexable YMYL claims mapped to active evidence/review; no low-entropy cohort indexed; original assets pass privacy/clinical review.

### Days 61–90: measured discovery and compounding growth

**Owners:** growth + engineering + clinical/editorial  
**Actions:**

- Configure verified OAI-SearchBot/Perplexity access if desired and monitor edge logs.
- Establish fixed AI-answer prompt set and Search Console generative-AI measurement where available.
- Launch claim-linked social assets and verified dynamic OG only for approved pages.
- Run small UX/title/navigation experiments within safety constraints.
- Start operational-promise monitors and automatic safe degradation.
- Add fact tombstones/withdrawal propagation and exercise the machine-estate kill switch in a release drill.
- Review index-estate budget quarterly; add pages only when uniqueness, evidence and demand thresholds pass.

**Exit gate:** stable search/crawler/AI observability, no guardrail regression, measured uplift from retained cohorts, and a documented go/no-go decision for further expansion.

## Release definition of done

A release is allowed only when:

- the working tree remains unchanged after all verification commands;
- every declared control maps to executable code/configuration, an owner, a positive test and at least one mutation that is proven to fail;
- lint, type/build, unit, integration, browser, accessibility and security gates pass;
- exact route/canonical/sitemap/Pagefind parity passes;
- every indexable YMYL claim is active in the ledger and all references resolve;
- schema truth matches visible content and the entity registry;
- every retained public machine/trust file parses, derives from the approved registry and contains no placeholder or unverifiable capability;
- all stable IDs round-trip and no generated route has an identity collision;
- broken internal links are zero or covered by owned, expiring exceptions;
- no known client secret, PII cache/replay path or unapproved health-data channel exists;
- hostile JSON/rich-text fixtures cannot escape their intended context, and the deployed CSP posture is measured and documented;
- zero-JS/reduced-motion/mobile template matrix passes;
- artifact, HTML, JS and Core Web Vitals budgets pass or a signed, expiring exception exists;
- cohort rollout and one-command rollback are tested;
- the release report states population, exclusions, exceptions, evidence and known residual risk.

## Authoritative external guidance used

- [Google: Optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google: Spam policies, including doorway and scaled-content abuse](https://developers.google.com/search/docs/essentials/spam-policies)
- [Google: Structured data quality guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [OpenAI: ChatGPT Search crawler requirements](https://help.openai.com/en/articles/9237897)
- [Perplexity: crawler and WAF guidance](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)
- [MeitY: Digital Personal Data Protection Rules, 2025](https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa)
- [ASCI Code Guidelines, including 2025 health-influencer addendum](https://www.ascionline.in/the-asci-code-guidelines/)
- [FSSAI: Advertising and Claims Regulations compendium](https://fssai.gov.in/upload/uploadfiles/files/Compendium_Advertising_Claims_Regulations_14_12_2022.pdf)

Legal, clinical, credentialing and privacy conclusions require qualified human signoff. This audit identifies engineering and publishing exposure; it does not declare a legal violation.

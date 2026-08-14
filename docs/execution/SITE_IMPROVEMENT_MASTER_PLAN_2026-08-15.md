# NutritionColours: Evidence-First Site Improvement Master Plan

**Version:** 2026-08-15  
**Scope:** every public page, content collection, component, route generator, structured-data block, machine-readable feed, conversion flow, and deployment gate  
**Status:** execution plan based on a repository and production-build audit; this supersedes stale page-count and “all validated” assumptions in older reports  
**Primary outcome:** turn NutritionColours into a trustworthy, fast, accessible nutrition platform whose search and AI visibility is earned by accurate, distinctive, useful content

> No engineer can guarantee “top 0.001%,” zero risk, rankings, rich results, or AI citations. This plan instead creates the unusually rigorous system required to find defects early, prevent unverifiable publishing, and compound durable user and search value.

## Executive verdict

Do **not** expand the page count yet. The immediate opportunity is subtraction and truth repair.

The current source can generate roughly 5,090 pages, while repository documentation still describes a much smaller estate. The build exposed corrupted taxonomy paths, mass-similar location and knowledge pages, an oversized knowledge hub, large JavaScript payloads, inaccurate trust/schema assertions, simulated conversion features, and verification scripts that pass despite material gaps. In a nutrition/YMYL project, these are business, user-safety, and search-quality risks—not cosmetic defects.

### Stop-ship findings

| Priority | Finding                                   | Evidence in this repository                                                                                                                                                                            | Required disposition                                                                                               |
| -------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| P0       | Corrupted content taxonomy                | Files for coffee, fish, pulses, herbs, and other subjects appear under `src/content/knowledge/Grains`; heuristic fallbacks publish them beneath unrelated “wild aquatic grains/Eragrostis” URLs        | Quarantine affected cohorts; replace inference with a validated taxonomy registry; fail builds on unknown mappings |
| P0       | Medical assertions are not claim-verified | 2,306 knowledge files include 1909 without `reviewedBy`; only 439 have a Sources section; generic clinical assertions recur across hundreds of pages                                                   | Introduce claim-level evidence and clinical-review workflow; noindex or unpublish unverified high-risk content     |
| P0       | Inaccurate trust/schema facts             | A non-medical PhD nutrition practitioner is emitted as `Physician`; organization founding dates and external identities conflict; `lastReviewed` can fall back to the build date                       | Create a signed truth registry; delete unsupported fields; never synthesize review/freshness metadata              |
| P0       | Simulated functionality                   | Booking, newsletter, community, and reporting interfaces can show success without completing the promised external action; some retain PII or API keys in local storage                                | Connect to a real, monitored service or replace with an honest, non-capturing fallback                             |
| P0       | Unsafe promotional claims                 | Synthetic-looking testimonials and phrases implying cure, reversal, discontinued medicine, or guaranteed outcomes appear in source                                                                     | Remove pending documentary proof, consent, clinical/legal review, and an approved claims standard                  |
| P0       | Known dependency risk                     | `astro@7.0.7` is affected by a moderate reflected-XSS advisory; a fixed release is available                                                                                                           | Upgrade to at least 7.2.2, run regression/security checks, and add dependency policy                               |
| P0       | Public deployment trigger                 | `public/deploy-hooks.php` can be served publicly and performs deployment-related actions                                                                                                               | Move outside the public root or require authenticated, replay-resistant invocation                                 |
| P1       | Route and sitemap truth do not reconcile  | The current build, inventory, clinic routes, and XML sitemaps describe different estates; sitemap dates are build dates rather than substantive-change dates                                           | Generate routes, links, canonicals, robots decisions, and sitemaps from one reviewed route manifest                |
| P1       | False-positive quality gates              | Current “hallucination,” schema, word-count, and accessibility scripts check narrow proxies but report broad success                                                                                   | Replace pass-by-sampling/proxy gates with all-page, risk-weighted verification and honest report language          |
| P1       | Excessive output and payloads             | Build output is about 384 MB and continued changing after the command returned; total JS is about 4.68 MB, including multi-hundred-kilobyte location and UI chunks; knowledge index HTML exceeded 2 MB | Add deterministic-output tests and template budgets; paginate; isolate data and interaction code by route          |

### Decision rule

Every proposal is scored before scheduling:

`Priority score = 35% risk reduction + 25% user/clinical value + 20% search/answer opportunity + 10% affected reach + 10% effort leverage`

Hard stop overrides the score when a change could mislead a patient, expose personal data, invent authority, violate a policy, or create uncontrolled indexable pages.

### Operating doctrine

1. **Truth before reach.** One verified page is worth more than a thousand weak variants.
2. **HTML is the source of truth.** Feeds, JSON-LD, sitemaps, social cards, and AI files are compiled from the same approved records.
3. **Fail closed.** Unknown taxonomy, missing evidence, invalid entity data, or an unreviewed high-risk claim blocks publication.
4. **People-first AIO.** AEO, GEO, and AI-search visibility are outcomes of clear, original, crawlable, cited content. They are not separate loopholes.
5. **Measure outcomes, not page volume.** Qualified discovery, comprehension, booking completion, safety, and retention outrank impressions and indexed URLs.
6. **Progressive enhancement.** Core medical content and contact paths work without JavaScript; interactive enhancements have static and reduced-motion fallbacks.
7. **No silent mutation.** Verification scripts report; separate, reviewed commands perform fixes.

### Continuous problem-finding and idea-selection loop

Run this loop every week so the roadmap keeps finding better ideas instead of fossilizing:

1. **Observe:** combine Search Console, field performance, server/CDN logs, form delivery, support questions, on-site search gaps, accessibility reports, clinical corrections, and answer-engine audits.
2. **Reproduce:** attach the exact URL, template, device, input, expected behavior, observed behavior, build commit, screenshots/logs, and smallest reproducible case.
3. **Locate the invariant:** determine whether the root cause belongs to content truth, taxonomy, manifest, shared component, data flow, deployment, or one page. Fix the highest shared layer that is actually wrong.
4. **Threat-model the fix:** test patient harm, misleading impression, privacy, abuse, search-policy, accessibility, performance, and rollback failure modes before implementation.
5. **Score the idea:** apply the weighted priority formula and record confidence, dependency, owner, effort range, and evidence. Separate discoveries from committed work.
6. **Pilot:** use the smallest representative cohort and a feature flag. Capture baseline and guardrail metrics before release.
7. **Verify:** test the intended outcome and look for second-order effects—canonical drift, crawl waste, schema mismatch, layout shift, consent leakage, and degraded comprehension.
8. **Promote or revert:** scale only when acceptance gates pass; otherwise roll back, document the falsified assumption, and feed it into the next cycle.

Maintain one ranked opportunity register with four lanes: `stop-ship`, `reliability debt`, `user/search growth`, and `experiments`. A new idea cannot bypass P0 work merely because it promises traffic.

---

## 1. Architecture & Rendering

### Target architecture

Create a single typed, versioned **Publishing Manifest** for every public URL. Each record contains:

- stable page ID, route, page type, locale, canonical URL, content source, and taxonomy IDs;
- index state: `index`, `noindex-review`, `redirect`, `gone`, or `private`;
- author/reviewer entity IDs, evidence status, material-change date, and approval signatures;
- schema types allowed for that page type;
- internal-link parents and children;
- build owner, risk tier, and rollback target.

Routes, breadcrumbs, canonicals, navigation, XML sitemaps, search indexes, Pagefind records, JSON-LD, `llms.txt`, and social metadata must be compiled from this manifest. No second route generator may infer a different public universe.

### Rendering rules

| Page class                | Rendering                                           | JavaScript policy                                     | Index policy                                                  |
| ------------------------- | --------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------- |
| Medical/knowledge article | Static HTML                                         | Optional islands only for genuinely interactive tools | Index only after evidence and review gates                    |
| Knowledge hub/category    | Static paginated pages or serverless search results | Search island loaded on intent                        | Index curated hubs; no giant all-record DOM                   |
| Consultation/service      | Static HTML plus real form endpoint                 | Form enhancement; native form fallback                | Index verified service pages                                  |
| Service area/location     | Static only if uniquely useful                      | No global location dataset in client bundle           | Consolidate, noindex, redirect, or remove mass variants       |
| Calculator/tool           | Static explanation plus isolated tool bundle        | Lazy-load; deterministic non-JS explanation           | Index only if methodology, validation, and unique value exist |
| Community/account/private | Authenticated application                           | Application bundle isolated from public site          | `noindex`; do not ship simulated versions                     |

### Required architectural changes

- Replace `getTaxonomyDetails` and folder-name fallbacks with an explicit taxonomy registry whose IDs are reviewed and whose unknown values are fatal.
- Move misfiled content into a quarantine collection first; do not generate redirects until old and intended URLs are semantically matched.
- Stop loading all knowledge entries into `/knowledge/`; expose 8–12 curated pillars, paginated results, and scoped search.
- Remove `prefetchAll`; prefetch only high-confidence next actions on hover, focus, or controlled visibility.
- Split `locationsData`, international data, D3/3D, GSAP, and clinical visualizations into route-local modules. Content pages should ship no framework JS unless an island is needed.
- Establish one deployment target contract. Vercel, PHP/Hostinger artifacts, headers, compression, and hooks must not silently diverge.
- Build into a fresh immutable output directory, calculate a manifest hash, wait for all post-processing, then atomically publish. A build whose file count changes after completion fails.

### Architecture acceptance gates

- `manifest indexable URLs = built indexable HTML = sitemap URLs = canonical inventory` exactly.
- Zero unknown taxonomy mappings, zero two-record/one-canonical collisions, and zero unreviewed redirects.
- Two identical clean builds produce identical route lists and content hashes, excluding explicitly documented nondeterministic fields.
- Static content remains readable and navigable with JavaScript disabled.

---

## 2. Technical SEO

### Index-estate recovery

1. Freeze automatic page expansion and IndexNow submission.
2. Export every current and historical URL with impressions, links, content ID, index state, risk tier, and proposed action.
3. Classify each URL:
   - **Keep and improve**: distinct intent, correct taxonomy, verified claims, measurable demand or user need.
   - **Merge**: substantially overlapping intent; select the strongest canonical page and preserve useful sections.
   - **Noindex-review**: temporarily available but not safe/ready for discovery.
   - **301**: only when a clear, durable semantic replacement exists.
   - **404/410**: no honest replacement; never redirect all retired pages to a hub or home page.
4. Process cohorts rather than the whole estate. Validate crawl, traffic, and conversion effects before the next cohort.

### On-page and crawl requirements

- One human-readable H1 and one primary intent per indexable page.
- Titles and descriptions compiled from approved content—not generic keyword permutations.
- Self-referencing canonical for unique indexable pages; canonical and hreflang, if introduced, must be reciprocal and manifest-tested.
- Honest `lastmod`: derive from the last substantive approved content change; omit it when unknown. Never stamp every URL with the build date.
- Remove the nonexistent sitemap reference from `robots.txt`; generate a sitemap index only when multiple current sitemap files exist.
- Include only canonical indexable pages in XML. Do not include redirects, `noindex`, errors, private pages, or unverified city variants.
- Validate every internal link after slug normalization. Links with spaces or raw content IDs fail CI.
- Orphan checker must fail above its approved threshold; utility/legal exceptions require explicit manifest tags.
- Patch the speculation-rules lint parsing failure and reach zero ESLint errors. Treat formatter output as an incremental migration, not a mass rewrite over user changes.

### Structured data contract

- Prefer fewer, complete, truthful types over a maximal graph.
- `Person`/appropriate professional properties must reflect actual credentials. Do not use `Physician` unless the person is legally and factually a physician.
- `MedicalWebPage`, `reviewedBy`, and `lastReviewed` appear only with a recorded review event.
- Organization facts—founding date, locations, service areas, social identities, awards, years in practice—come from the signed truth registry.
- Validate every JSON-LD block, then validate cross-field truth: visible author equals schema author; canonical equals schema URL; page type permits schema type; referenced entity exists.
- FAQ markup is allowed only for visible, non-promotional questions and answers. It is not a promised rich-result strategy.
- Ontology IDs (Wikidata, MeSH, etc.) must be resolver-verified and human-approved; unverified IDs are omitted.

### Search measurement

- Search Console: index coverage, crawl stats, canonical selection, queries, page cohorts, rich-result errors, and—in accounts where available—generative-AI performance reports.
- Bing Webmaster Tools: indexing, IndexNow outcomes, crawl issues.
- Server/CDN logs: verified crawler visits, status codes, latency, wasted crawl, and hallucinated URL requests.
- Weekly cohort dashboard: eligible, submitted, crawled, indexed, clicked, engaged, converted.

---

## 3. AEO + GEO + AIO

### Strategy

Google's 2026 guidance treats AI-search optimization as strong SEO plus unique, useful content. Google says it ignores `llms.txt` and does not require AI-specific chunking. Therefore:

- do not create AI-only doorway pages, hidden answer layers, keyword fan-out, or “overview bait”;
- keep `llms.txt` only as an optional, accurately generated discovery aid for systems that choose to use it;
- use concise answer structures because they improve comprehension, not because they guarantee citation;
- optimize the same approved content for humans, classic search, assistants, and accessibility.

### Answer-ready article pattern

Each retained YMYL article should contain, when relevant:

1. a 40–80 word direct answer that states scope and uncertainty;
2. “who this applies to” and “who should not use this advice”;
3. an evidence table with outcome, population, evidence grade, date, and limitations;
4. practical steps separated from clinical decisions;
5. contraindications, medication interactions, red flags, and when to seek professional care;
6. source-linked definitions, comparisons, and quantities with units;
7. visible author, actual reviewer, review scope, and correction history;
8. a short FAQ based on real user questions—not schema bait.

### Entity and citation strategy

- Publish a transparent organization page, professional profile, editorial methodology, evidence-grading method, corrections log, clinical scope, AI-use policy, pricing/process, privacy, and security page.
- Reconcile the entity across the site and authoritative off-site profiles. Do not fabricate profiles or inflate areas served.
- Pursue citations through original, useful assets: an anonymized India nutrition dataset, evidence-backed calculators, practitioner-led explainers, and reproducible methodology. Any patient-derived research requires privacy, ethics, consent, and de-identification review.
- Build source provenance into tables and charts so every fact can be traced without inspecting JSON-LD.
- Run a fixed monthly prompt set across major answer engines. Record whether NutritionColours is cited, whether the answer is correct, which URL is used, and which competitors are cited. Treat this as observational QA, not a ranking promise.

### AI hallucination control system

Replace keyword-only claim checks with a **claim ledger**. Every material medical or outcome claim receives:

- claim ID, exact text, page and section anchor;
- claim class: education, diagnosis, treatment, risk reduction, testimonial/outcome, credential, operational promise;
- evidence type and grade, PMID/DOI/official URL, population, date, limitations, and retraction/correction status;
- author, reviewer, review scope, approval time, expiration date, and conflict disclosure;
- allowed presentation language and prohibited extrapolations.

The content compiler links assertions to ledger entries. A high-risk assertion without an active evidence record cannot become indexable. CI should resolve identifiers, detect withdrawn/retracted citations, compare quoted numbers with the source record, and flag overgeneralization. Humans make the clinical and legal decision.

AI may outline, summarize supplied sources, or suggest clearer language. It may not invent facts, citations, quotes, reviewer actions, review dates, credentials, testimonials, patient outcomes, or operational success. Store prompt/model/version and human approver for materially AI-assisted YMYL content.

### AEO/GEO/AIO success criteria

- 100% factual accuracy for owned-entity facts in the fixed answer-engine audit.
- Zero fabricated citations or unsupported medical claims in sampled outputs.
- Rising qualified citation/referral share for a stable prompt set, reported with sample size and uncertainty.
- No indexable page exists solely for a query/city/AI variation.

---

## 4. Bot & Crawler Strategy

- Keep normal crawl access to public content. Add explicit user-agent rules only where an operational need exists; wildcard allowance already covers otherwise permitted crawlers.
- If ChatGPT Search discovery is desired, allow `OAI-SearchBot` and verify that CDN/WAF rules permit OpenAI's published IP ranges. This does not guarantee inclusion.
- If Perplexity discovery is desired, permit its documented crawlers and validate published IP ranges at the edge.
- Block private routes, preview builds, form submissions, search result pages with unbounded parameters, internal APIs, and trap URLs.
- Do not use crawler names as a trust signal. Verify reverse DNS/IP ranges where supported and rate-limit abusive traffic independently.
- Separate search crawling from model-training preferences according to each provider's documented controls and the owner's policy decision.
- Add bot observability: verified crawler, requested URL, response code, canonical state, bytes, latency, cache, and waste classification.
- Build a hallucinated-URL report from 404 logs. Create a redirect only when intent matches an existing durable page; otherwise return a helpful 404 or intentional 410.
- Remove nonstandard `robots.txt` commentary presented as directives. Keep the file short, valid, and tested.

---

## 5. Core Web Vitals & Performance

### Budgets

| Metric                |                                                 Release budget |                    Field goal at p75 |
| --------------------- | -------------------------------------------------------------: | -----------------------------------: |
| LCP                   |                Lab <= 2.0 s on defined mid-tier mobile profile |   <= 2.5 s; internal target <= 1.8 s |
| INP                   |              Interaction lab tests <= 150 ms for defined flows | <= 200 ms; internal target <= 150 ms |
| CLS                   |                                      <= 0.05 per template test |     <= 0.10; internal target <= 0.05 |
| Initial compressed JS | Content <= 70 KB; hub <= 110 KB; app/tool exception documented |              Monitor by route cohort |
| HTML                  |                               Article <= 150 KB; hub <= 250 KB |     Prevent multi-megabyte documents |
| DOM                   |                       <= 1,500 nodes unless exception reviewed |  Monitor long-task and memory impact |
| LCP image             |     Responsive AVIF/WebP, explicit dimensions, no lazy loading |             RUM resource attribution |

### Highest-leverage performance work

1. Replace the all-record knowledge index with paginated/static facets and an intent-loaded search UI.
2. Keep location datasets out of initial client bundles; query a small static index or server endpoint when needed.
3. Remove decorative 3D/GSAP/D3 code from clinical pages; lazy-load a single signature interaction only where it teaches something.
4. Reduce global React hydration. Prefer Astro components and CSS for navigation, disclosure, cards, and content.
5. Self-host only the font weights used; either ship Fraunces properly or remove the phantom dependency. Use `font-display: swap` and metrics-compatible fallbacks.
6. Apply critical CSS carefully, purge unused styles, and reserve space for media and consent UI.
7. Let the deployment CDN compress immutable assets where possible; do not spend minutes generating redundant artifacts without a host requirement.
8. Measure on a template matrix with Lighthouse/WebPageTest and real-user monitoring. Lab tools cannot prove field INP.

### Performance fallbacks

- Every island has useful static output and an error boundary.
- Heavy visualization failure reveals its underlying accessible table.
- Image failure preserves informative alt text and layout dimensions.
- Search failure retains curated category navigation.
- Reduced-motion users receive no parallax, tilt, auto-animation, or scroll hijacking.

---

## 6. UX/UI Design System and Page Improvement

### Design direction: clinical calm

Preserve the recognizable emerald/stone palette but reduce ornamental density. The product should feel like an evidence service, not a growth landing page.

- Use a restrained card vocabulary, fewer pills, shallower radii, lighter shadows, and no gratuitous 3D tilt on health content.
- Set body copy at 16–18 px with roughly 65–75 characters per line, strong headings, visible focus, and generous vertical rhythm.
- Replace tiny uppercase labels with readable sentence-case metadata.
- Make evidence, limitations, safety, and next action visually stronger than decorative statistics.
- Add a consistent trust rail: author, actual reviewer, review scope, material update, evidence grade, corrections, and print/share.
- Use original or licensed food/clinical imagery with provenance, responsive dimensions, and purposeful alt text. Avoid generic “doctor with clipboard” stock imagery.
- Define semantic tokens for risk, success, warning, evidence strength, focus, and disabled states; never encode meaning by color alone.

### Page-by-page upgrade matrix

| Page/component    | Keep                       | Change                                                                                                                   | Completion test                                                                                      |
| ----------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Home              | Brand and core service     | One verifiable promise; precise scope; proof-backed credentials; clear remote-care process; remove fake metrics/outcomes | First-time users can state who it serves, what happens next, limits, and cost path within 15 seconds |
| Knowledge hub     | Topic discovery            | 8–12 primary pillars, curated pathways, pagination, scoped search, visible evidence policy                               | HTML/DOM budgets pass; no all-record payload; top tasks found keyboard-only                          |
| Medical article   | Useful explanations        | Direct answer, applicability, evidence table, risk box, actions, sources, actual reviewer, corrections                   | Clinical and editorial gates pass; no unsupported material claim                                     |
| Herb/interaction  | Ingredient profiles        | Medication/pregnancy/allergy warnings, dose uncertainty, interaction severity, emergency advice                          | Safety content appears before promotional CTA                                                        |
| Recipe            | Ingredients/method         | Quantities, allergens, substitutions, nutrition calculation method, suitability limits                                   | Calculation and allergen tests pass                                                                  |
| Genomics          | Educational interpretation | Explicit non-diagnostic scope, ancestry/population limits, privacy, source variant IDs                                   | Genetics reviewer and privacy sign-off                                                               |
| Topic/condition   | Navigation value           | Remove cure/reversal slugs and language; use evidence-based overview and care escalation                                 | Claims register contains no prohibited framing                                                       |
| Clinic/location   | Service discovery          | Consolidate to real service-area hubs; unique page only with verified local utility                                      | Unique-content and operational-service evidence passes                                               |
| Plans/pricing     | Deliverables               | Exact inclusions, exclusions, duration, price/tax, eligibility, cancellation, clinical limits                            | No outcome guarantee; checkout/booking expectation test passes                                       |
| Booking           | Contact intent             | Real endpoint, privacy notice, consent, validation, confirmation ID, monitored SLA                                       | Synthetic transaction confirms delivery; outage fallback is honest                                   |
| Contact           | Channels                   | Verified hours, response window, remote/physical distinction, accessible alternatives                                    | Contact attempts are observable and acknowledged                                                     |
| Team              | Expertise                  | Exact qualifications, institutions/years when consented, scope and non-medical label                                     | Identity documents reviewed; schema matches visible profile                                          |
| Testimonials      | Social proof               | Use only real, consented, documented testimonials without misleading health outcomes                                     | Evidence/consent record and legal review exist; otherwise absent                                     |
| Community/connect | Potential retention        | Remove simulated people/posts/likes; rebuild only with backend, moderation, terms, reporting, privacy                    | End-to-end identity, abuse, deletion, and moderation tests pass                                      |
| Newsletter        | Education                  | Real double-opt-in provider, expectations, frequency, unsubscribe, privacy                                               | Inbox delivery and unsubscribe tests pass                                                            |
| Calculators/tools | Interactivity              | Show formula, sources, units, limitations, validation, saved-data policy; never diagnose                                 | Unit, boundary, accessibility, and static-fallback tests pass                                        |
| Search/404        | Recovery                   | Useful scoped search, closest categories, reporting without personal query retention                                     | Bad-URL and empty-result scenarios recover without soft redirects                                    |
| Legal/methodology | Trust                      | DPDP notice, terms, clinical scope, editorial/evidence/AI policy, corrections, conflicts, retention/deletion contacts    | Counsel/owner approval and version history                                                           |

### Accessibility release standard

- Target WCAG 2.2 AA; do not report broad conformance from a narrow automated sample.
- Run axe across every template and risk cohort, not merely the first N files.
- Manually test keyboard-only use, focus order, skip links, names/roles/states, form errors, screen-reader landmarks, 200%/400% zoom, reflow, forced colors, reduced motion, captions/transcripts, touch targets, and cognitive clarity.
- Zero serious/critical automated issues; manual exceptions require owner, reason, remediation date, and accessible alternative.

---

## 7. High-Leverage, Out-of-the-Box Tactics

Only deploy these after P0/P1 truth and route gates pass.

1. **Truth-graph compiler.** Maintain signed records for people, organization, services, claims, locations, and sources; generate visible facts, schema, feeds, and social metadata from them. A conflicting fact becomes a build error.
2. **Content quarantine index.** Unknown taxonomy, duplicate titles/descriptions, raw IDs, broken source links, expired reviews, and template-copy thresholds move content into a review dashboard instead of production.
3. **Evidence-decay CI.** Re-review based on source withdrawal, guideline change, claim risk, and evidence age—not arbitrary date bumps. Notify the owner before expiration and automatically noindex only under an approved safety policy.
4. **Answer-consistency lab.** Test a stable set of high-intent questions across on-site search, classic search, and answer engines. Compare owned facts, cited page, omissions, and harmful extrapolations.
5. **Hallucinated-URL recovery.** Mine verified bot/user 404s for repeated malformed or legacy URLs. Repair internal causes first; redirect only exact-intent matches.
6. **Reproducible India nutrition assets.** Publish an ethically sourced, versioned, downloadable dataset or calculator with methodology, licenses, limitations, changelog, and citation instructions. This is a defensible reason to link and cite.
7. **Embeddable evidence tool.** Offer a lightweight calculator/table other clinicians or publishers can embed, with accessible fallback and source attribution. No tracking beyond disclosed essentials.
8. **“Boring trust” library.** Make pricing, process, scope, evidence grading, corrections, privacy, security, and incident handling unusually clear. These pages reduce buyer anxiety and entity ambiguity.

Explicitly defer programmatic-city expansion, AI-generated fan-out, SEO experiments that swap substantive YMYL advice, hidden content, parasite publishing, expired-domain tactics, and unreviewed schema multiplication.

---

## 8. Social and Viral Distribution

- Build distribution from verified source material, not transformation volume.
- Recommended formats: practitioner-led myth/context explainers, “what the evidence says” carousels, annotated food comparisons, source walkthroughs, recipe techniques, and short videos with transcripts and citations.
- Every asset links to one approved canonical source record. Material claims cannot become social copy unless their claim-ledger language allows it.
- Never use synthetic patient stories, fabricated comments, fake likes, fake team advocacy, before/after implications, cure/reversal hooks, or undisclosed AI people/voices.
- Obtain explicit, revocable consent for real patient stories; preserve the consent version and approved usage scope. Health-outcome claims require compliance review even when the speaker is real.
- Generate Open Graph assets from approved title, author/reviewer, and artwork data. Do not display stale statistics or unverifiable badges.
- Add UTM governance and channel-level conversion reporting without fingerprinting or collecting unnecessary health data.
- Use an approval queue; never auto-publish AI-generated medical copy.

---

## 9. Hard Rules, Compliance, Privacy, and Security

### Non-negotiable rules

1. No cure, guaranteed reversal, medicine-discontinuation, “miracle,” or outcome certainty claims.
2. No `Physician`, clinic-location, award, experience, review, or credential assertion without primary evidence and owner approval.
3. No synthetic testimonials or community activity presented as real.
4. No success state unless the promised transaction is confirmed by the destination service.
5. No PII, health context, or API secrets in obfuscated local storage. Obfuscation is not encryption.
6. No medical page review date that was generated by a build.
7. No mass indexable page generation from keyword, location, or AI permutations.
8. No claim that automated tooling proves WCAG, medical accuracy, or zero hallucinations.
9. No deployment hook, administrative action, or sensitive endpoint in the public static root without authentication and abuse controls.
10. No legal/compliance sign-off inferred from this technical plan. Qualified Indian counsel and the appropriate clinical professional must validate applicability.

### Compliance register

- **DPDP Act/Rules:** map every personal-data flow, purpose, notice, consent/legal basis, processor, retention, deletion, grievance path, breach workflow, children/high-risk handling, and cross-border processing. Collect the minimum data.
- **FSSAI advertising and claims:** if the service publishes or markets foods, supplements, nutrition products, or related claims, classify each claim and verify conditions, substantiation, required context, and prohibited disease-treatment implications.
- **ASCI:** review all health/nutrition service claims, influencer/professional disclosures, testimonials, comparative statements, and disclaimers. Fine print cannot contradict the headline impression.
- **Professional scope:** have counsel verify permitted title usage, remote-care scope, disclaimers, recordkeeping, referral/escalation, and whether any service representation could imply medical practice.
- **Consumer protection:** service descriptions, pricing, booking confirmation, refund/cancellation, response times, and testimonials must be accurate and operationally supported.
- **Copyright/licensing:** record licenses for images, icons, fonts, datasets, quotations, and research figures.

### Security baseline

- Upgrade Astro and maintain a severity/SLA policy: critical 24 hours, high 72 hours, moderate risk-assessed with an owner and expiry.
- Add a tested Content Security Policy, Permissions Policy, HSTS, MIME sniffing protection, clickjacking control, referrer policy, and suitable cross-origin policy. Verify them against the live host, not only config files.
- Use CSRF protection, origin validation, rate limiting, schema validation, bot abuse controls, and secure server-side secret storage for forms/APIs.
- Unify consent state. Analytics and personalization default off until valid consent where required; rejection must be as easy as acceptance.
- Define logging minimization, access, retention, deletion, incident response, and restore testing.
- Add secret scanning, dependency review, SAST, and route-level security regression tests to CI.

---

## 10. Measurement Scoreboard and Release Gates

### North-star scoreboard

| Domain        | KPI                                                      | 90-day gate                                             |
| ------------- | -------------------------------------------------------- | ------------------------------------------------------- |
| Truth         | Indexable medical pages with valid evidence/review state | 100%                                                    |
| Claims        | Material claims linked to active ledger evidence         | 100%                                                    |
| Trust         | False professional/entity/schema assertions              | 0                                                       |
| Routes        | Manifest/build/sitemap/canonical parity                  | 100%                                                    |
| Taxonomy      | Unknown mappings or public raw IDs                       | 0                                                       |
| Crawl         | Broken internal links and redirect chains                | 0                                                       |
| Orphans       | Indexable content without a contextual parent            | <1%, documented exceptions only                         |
| Content       | Duplicate or substantially templated indexable pages     | 0 unresolved clusters                                   |
| Functionality | False success states                                     | 0                                                       |
| Security      | Critical/high open vulnerabilities                       | 0; moderate exceptions time-bound                       |
| Accessibility | Serious/critical axe issues                              | 0 plus manual template sign-off                         |
| Performance   | Good CWV                                                 | >=75% of eligible visits/templates at p75, then improve |
| Search        | Indexed/eligible ratio                                   | >=95% after intentional exclusions stabilize            |
| AI answers    | Owned-fact accuracy in fixed prompt audit                | 100%; citation share tracked without guarantee          |
| Conversion    | Verified booking completion                              | Baseline first; improve without dark patterns           |

### CI release gates

A production release fails when any of the following occurs:

- route count changes outside an approved manifest diff;
- taxonomy is unknown, a canonical collides, or a sitemap URL is not an indexable 200 page;
- a high-risk claim lacks active evidence/review or conflicts with the truth registry;
- structured data is invalid or mismatches visible content;
- broken links, raw IDs, unsafe health phrases, synthetic testimonials, or fake freshness are introduced;
- typecheck, lint, unit, integration, accessibility, security, or template-budget tests fail;
- build output changes after the completion marker;
- a form success path cannot be verified in synthetic monitoring;
- the rollback artifact or database migration rollback is absent.

Warnings are allowed only with an owner, rationale, expiration date, and tracked issue. A script that always exits zero is an insight report, not a gate.

### Experiment rules

- Experiments must state hypothesis, primary outcome, guardrails, sample unit, duration, and stop condition before launch.
- Do not A/B test materially different medical advice, safety warnings, or evidence.
- Use template cohorts, feature flags, and reversible deployments.
- Stop on increased error rate, safety issue, accessibility regression, CWV regression, misleading behavior, or qualified-conversion harm.

---

## 11. Ninety-Day Execution Plan

### Days 0–7: Contain and establish truth (P0)

**Deliverables**

- Freeze new indexable page generation and automated IndexNow pushes.
- Export the route/claim/entity baseline and preserve an immutable audit snapshot.
- Quarantine corrupted taxonomy cohorts and pages containing raw IDs, unsafe claims, or unsupported review metadata.
- Remove or disable simulated community, newsletter, report-email, and booking success experiences. Provide honest phone/email/WhatsApp fallback without local PII capture while a real endpoint is built.
- Remove unverified testimonials and cure/reversal/medicine-discontinuation language.
- Correct professional schema, organization facts, `sameAs`, founding date, service area, and fake `lastReviewed` fallbacks.
- Upgrade Astro; protect/remove the public deploy hook; remove client-stored Gemini keys.
- Assign a clinical owner, compliance owner, privacy owner, technical owner, content owner, and incident owner.

**Exit criteria**

- No public experience falsely claims an action completed.
- No known false identity/schema fact remains.
- High-risk unverified cohorts are not indexable.
- Security upgrade and rollback pass smoke tests.

### Days 8–30: Rebuild the publishing spine (P1)

**Deliverables**

- Typed publishing manifest, taxonomy registry, truth registry, claim ledger, and content-state workflow.
- Deterministic route compiler and all-page validators.
- URL decision register covering keep/merge/noindex/301/404/410.
- Sitemap/robots/canonical/internal-link rebuild from the manifest.
- Clinic/location consolidation pilot; retain only pages with verified unique service and value.
- Real booking/newsletter integration or permanent honest alternatives.
- CI gates for lint/type/tests, all-page schema truth, links, claims, route parity, output determinism, headers, dependency/security, a11y, and budgets.
- Consent/data-flow map and draft legal/editorial/methodology policies for professional review.

**Exit criteria**

- Manifest parity is 100%; unknown taxonomy and public raw IDs are zero.
- Every indexable YMYL page has an explicit evidence/review state.
- A clean build is deterministic and all release gates are capable of failing.

### Days 31–60: Redesign the core journeys (P2)

**Deliverables**

- Clinical-calm design tokens and accessible component contracts.
- Rebuilt home, knowledge hub, article, topic, interaction/herb, team, plans, contact, booking, search, and 404 templates.
- Server-paginated/intent-loaded knowledge discovery; no multi-megabyte hub document.
- Route-local bundles and static fallbacks; location data removed from global client code.
- Real-user performance and privacy-safe conversion instrumentation.
- WCAG 2.2 AA test matrix and manual review record.

**Exit criteria**

- All core templates meet lab budgets and have usable no-JS/reduced-motion behavior.
- Booking end-to-end and outage paths are truthful, observable, and accessible.
- First retained content cohort passes clinical, editorial, accessibility, performance, and compliance review.

### Days 61–90: Earn authority and scale carefully (P3)

**Deliverables**

- Publish 8–12 exemplary cornerstone pages from the retained taxonomy, each with original value, complete evidence, and expert review.
- Release methodology, evidence grading, corrections, clinical scope, AI-use, privacy, security, pricing/process, and verified entity pages.
- Launch one reproducible original asset: dataset, calculator, or evidence table with transparent methods and licensing.
- Reconcile authoritative off-site profiles and begin a source-led outreach program.
- Validate OAI-SearchBot/Perplexity/search crawler access at the CDN and start answer-consistency monitoring.
- Start a weekly scorecard and monthly content-decay review.

**Exit criteria**

- New publishing is allowed only through the gated workflow.
- Quality and qualified outcomes improve in retained cohorts without safety, policy, accessibility, or performance regression.
- Any expansion proposal demonstrates distinct user value and passes a small-cohort test before scale.

### Rollback and fallback matrix

| Change                  | Precondition                        | Failure signal                                          | Fallback/rollback                                                                        |
| ----------------------- | ----------------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Taxonomy migration      | Signed old→new map and dry-run diff | Wrong intent, loops, missing content                    | Restore old route artifact; no bulk redirect until map is corrected                      |
| Location consolidation  | Cohort classification and baseline  | Qualified traffic/conversion loss or wrong replacements | Pause cohort; restore index state; remove weak 301s                                      |
| Schema change           | Truth record and template flag      | validation/truth mismatch                               | Disable the affected block, not the page                                                 |
| Booking integration     | Synthetic test and monitored queue  | delivery/SLA failure                                    | Disable capture; show verified direct contact; never show success                        |
| New interactive island  | Static fallback and budget          | JS/runtime/CWV/a11y regression                          | Serve static version; disable feature flag                                               |
| Analytics/consent       | Data map and tested CMP             | consent drift or privacy defect                         | Disable non-essential collection; retain minimal anonymized operational logs             |
| Evidence update         | Reviewer and version diff           | new evidence invalidates advice                         | Add safety notice/noindex where required; revert content version after clinical decision |
| AI/machine feed         | Manifest compiler and parity test   | stale or exaggerated claim                              | Remove feed; canonical HTML remains authoritative                                        |
| Experimental GEO tactic | 5–10% low-risk cohort               | crawl, quality, accuracy, or conversion harm            | Disable flag; preserve baseline                                                          |
| Deployment              | Immutable artifact and smoke test   | file-count drift, broken route, header defect           | Roll back atomically to last verified artifact                                           |

### Ownership model

- **Clinical owner:** claim scope, evidence grade, contraindications, review approval.
- **Editorial owner:** user intent, clarity, originality, citations, correction process.
- **Compliance/privacy owner:** advertising claims, consent, data flows, testimonials, disclosures.
- **Technical owner:** manifest/compiler, security, performance, delivery, observability.
- **Design/accessibility owner:** component contracts, content hierarchy, WCAG testing.
- **Business owner:** service truth, pricing, response SLAs, off-site identity, final risk acceptance.

No person may approve their own high-risk claim, testimonial, or security exception.

### Agile operating cadence

- **Daily:** stop-ship triage, production errors, failed forms, security alerts, clinical corrections, and broken-route review.
- **Twice weekly:** 30-minute cross-functional evidence review for claims and high-risk content.
- **Weekly:** score new opportunities, review the scoreboard, select one small cohort, and close or re-scope work that lacks evidence.
- **Fortnightly:** ship a reversible increment, run the complete release gate, and hold a blameless root-cause review for escaped defects.
- **Monthly:** answer-engine consistency audit, content-decay review, dependency/security review, privacy data-flow check, and index-estate reconciliation.
- **Quarterly:** strategy reset based on user outcomes, regulations, search documentation, and field data—not competitor feature copying.

Limit work in progress: one P0 cohort, one core-template stream, and one experiment at a time per owner group. Every backlog item requires an acceptance test and rollback plan before entering implementation.

---

## Definition of done

This plan is complete only when the public site is generated from reviewed truth; every discoverable YMYL claim is traceable; users never receive a simulated promise; routes and machine outputs reconcile; core templates are fast and accessible in the field; and new pages cannot bypass the same gates.

The correct growth loop is:

`verified user need → original useful answer → evidence/review → accessible fast page → consistent entity/schema → crawl/index → measured comprehension/conversion → correction and refresh`

Not:

`keyword/city list → AI text → mass publish → fake date/schema → hope for rankings`

## Authoritative references

- [Google: AI features and your website](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google: guidance on generative-AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)
- [Google Search spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- [Google: creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google: FAQ and HowTo rich-result changes](https://developers.google.com/search/blog/2023/08/howto-faq-changes)
- [Google: generative-AI performance reporting](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)
- [Web.dev: Core Web Vitals](https://web.dev/articles/vitals)
- [OpenAI: ChatGPT Search publisher controls](https://help.openai.com/en/articles/9237897)
- [Perplexity crawler documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)
- [India Digital Personal Data Protection Rules, 2025](https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa?pageTitle=Digital-Personal-Data-Protection-Rules-2025.pdf)
- [FSSAI Advertising and Claims Regulations](https://www.fssai.gov.in/upload/uploadfiles/files/Compendium_Advertising_Claims_Regulations_04_10_2022.pdf)
- [ASCI Code](https://www.ascionline.in/the-asci-code/)

## Repository evidence reviewed

- `src/content.config.ts`
- `src/pages/knowledge/[...slug].astro`
- `src/pages/knowledge/index.astro`
- `src/lib/taxonomyEngine.ts`
- `src/lib/truthRegistry.ts`
- `src/lib/seo/entityGraph.ts`
- `src/components/BookingForm.tsx`
- `src/components/ConnectPage.tsx`
- `src/components/ViewerTracker.tsx`
- `src/lib/apiKey.ts`
- `public/sw.js`
- `public/robots.txt`
- `public/deploy-hooks.php`
- `scripts/ai-hallucination-firewall.ts`
- `scripts/check-claims.ts`
- `scripts/check-word-count.ts`
- `scripts/check-orphan-links.ts`
- `scripts/generate-inventory.ts`
- `scripts/generate-xml-sitemaps.ts`
- `scripts/post-build-a11y.ts`
- `scripts/validate-jsonld.mjs`
- `scripts/verify-meta-alt.ts`
- `astro.config.mjs`
- `package.json`
- `vercel.json`


# NutritionColours — Website Domination 2026 Upgrade Plan

**Prepared for:** R.S.Rana | **Date:** 2026-07-10 | **Codebase audited:** `/Users/apple/Downloads/nutritioncolours` (Astro 7, migrated from Next.js, ~1,700 pages)

## How to read this

This isn't a generic playbook — every finding below was verified directly in your repo (grep counts, file reads, git history). The headline: **you already built an elite-tier SEO/AEO/GEO system here** (llms.txt, entity graphs, bot classification, honeypots, freshness logs). The problem is that a large share of it is **disconnected** — orphaned during the recent Next.js → Astro rewrite. The highest-leverage work in this plan is *reconnecting value you already paid for*, not building from scratch.

---

## 0. Executive Summary — What's Actually Broken

| # | Finding | Evidence | Impact |
|---|---|---|---|
| 1 | **JSON-LD schema missing on all YMYL clinical pages** | No `application/ld+json` in `index.astro`, `condition/[id].astro`, `herb/[id].astro`, `clinic/[id].astro`, `about.astro`, `team.astro`, `genomics/[id].astro`, `interactions/[id].astro`. Only 4 templates (`plans`, `topic`, `recipe`, `vegan`) emit schema. | Your home page, every condition page (Diabetes, PCOD, Fatty Liver — your actual money pages), every clinic page (1,690 of them), and every herb page have **zero structured data**. This is the single biggest AEO/GEO and E-E-A-T gap on the site. |
| 2 | **~11 SEO/GEO modules are dead code** | `structuredData.ts`, `canonicalUrls.ts` (incl. hreflang), `imageSchema.ts`, `semanticLinker.ts`, `phantomRoutes.ts`, `antiScrape.ts`, `offlineQueue.ts`, `motionBudget.ts`, `circadianTheme.ts`, `intentPrefetch.ts`, `localeRedirect.ts` — confirmed **0 imports** anywhere in `src/`. `JsonLd.tsx` itself is also unused (pages that do have schema hand-roll inline `<script>` tags instead). | You paid the engineering cost for these systems; they render nothing today. |
| 3 | **hreflang exists only as client-side DOM injection, and it's not even called** | `canonicalUrls.ts` builds hreflang tags with `document.head.appendChild()` — this runs *after* JS executes, which is invisible to GPTBot/ClaudeBot/PerplexityBot and adds nothing for Googlebot's initial HTML parse (View-Source Law). It's also never invoked from any page. | Given `internationalData.ts` is 1.1MB of international location data, this is a real gap for global traffic — but the existing code is the wrong pattern to resurrect as-is. |
| 4 | **9 built components are wired into zero pages** | `HealthAssistant`, `KnowledgeConstellation`, `QuestionPathNav`, `LocalizationHub`, `ContentCompression`, `PageAtmosphere`, `ParticleConstellation`, `EvidenceBadge`, `GeospatialMap` — not referenced in any `.astro` file. | Either finish wiring these (some, like `EvidenceBadge` and `LocalizationHub`, look directly relevant to E-E-A-T and the new location-detail requirements) or delete them — dead weight either way currently. |
| 5 | **Repo hygiene: uncommitted migration debris** | `git status` shows hundreds of pending deletions (an entire legacy `nutritioncolours-next/` subtree, root-level duplicate files, old lighthouse reports, `scratch/` scripts) still sitting in the working tree, uncommitted, since the Jul 4–7 Astro migration. `README.md`/`AGENTS.md` still describe the old Next.js app. | Any teammate or future agent onboarding reads wrong docs and risks editing/reviving dead files. Increases audit and onboarding cost every time. |
| 6 | **Static bot/analytics data files are hand-authored stubs, not live telemetry** | `bot-analytics.json`, `content-decay-report.json`, `seo-defense-log.json` etc. contain hardcoded zero counts and fixed dates — they read as real dashboards but are not connected to any request logging. | Fine as scaffolding, but don't mistake these for real measurement — Section 10 below replaces them with an actual measurement plan. |
| 7 | **No custom 404 page**; only 1 file in the repo even mentions hreflang; `BaseLayout.astro` has no `Speakable`, `FAQPage`, or `Organization` schema baked into the shared layout | Direct search of `src/pages/`. | Easy, high-leverage fixes (Sections 2, 5, 6). |

None of this is a criticism of the underlying strategy — the strategy (llms.txt, entity graphs, honeypots, freshness tracking) is exactly the elite-tier doctrine this plan follows. The gap is **execution follow-through after the framework migration**, which is normal after a stack rewrite and is very fixable.

---

## 1. Architecture & Rendering

**Current state:** Astro 7 static output (`output: 'static'`), React islands via `@astrojs/react`, Tailwind v4 via Vite plugin. This is already the correct doctrine (SSG + islands, not CSR). Good foundation — don't re-architect.

Actions:
- **Verify the production build actually matches `src/` before next deploy.** The sandbox couldn't run `astro build`/`astro check` (native `rolldown` binding mismatch, `Cannot find module '@rolldown/binding-linux-arm64-gnu'`) — this is a sandbox/arch artifact, not necessarily a bug on your machine, but it means I could not confirm the current `dist/` (1,402 pre-rendered pages) is fully in sync with `src/` (which has since had the Next→Astro route migration finished on top). Run `rm -rf node_modules package-lock.json && npm install && npx astro build` locally and diff route counts before your next deploy.
- **Audit JS payload per island.** You have GSAP, Lenis, Framer Motion, Three.js/`@react-three/fiber`/`drei`, D3, and React 19 all in `dependencies`. That's a lot of client JS surface for a content/clinical site. Confirm `client:load` vs `client:visible` vs `client:idle` is used deliberately per component — `HeroSlider` on the homepage using `client:load` is right (above the fold), but audit every other island for whether `client:visible` would defer it past LCP. Target < 70KB compressed JS on marketing/content pages (topic, condition, herb, clinic — the highest-traffic templates).
- **Semantic HTML skeleton check.** Confirm one `<h1>` per page and a logical H2→H3 tree on the templated pages (`condition`, `herb`, `topic`) — these are generated from data files (`clinical_databases.ts`, `topics.ts`) so a single heading-hierarchy fix in the template fixes it site-wide.
- **Clean up the dead lib files (Finding #2/#4) either by wiring them in (Section 3) or deleting them** — don't leave orchestration code an agent or teammate might assume is live.

---

## 2. Technical SEO

- **Fix Finding #1 first.** Every YMYL page template (`condition/[id].astro`, `herb/[id].astro`, `clinic/[id].astro`, `index.astro`, `about.astro`, `team.astro`) needs server-rendered JSON-LD injected at build time (Astro frontmatter, not a client component) — `MedicalWebPage`/`MedicalCondition` for condition pages, `LocalBusiness`/`MedicalClinic` for clinic pages (you have 1,690 of these — huge local-SEO surface currently emitting nothing), `Person` + credentials + `sameAs` for Dr. Shilpa Thakur on `team.astro`, `Organization` + `WebSite`+`SearchAction` in `BaseLayout.astro` so it's present site-wide.
- **@id knowledge graph loop.** Nest all JSON-LD via `@graph` with `@id` cross-references: `Organization` → `MedicalClinic` (per city) → `Person` (Dr. Shilpa) → `MedicalWebPage` (per condition) → back to `Organization`. You have the raw data (`locationsData.ts`, `clinical_databases.ts`) to generate this programmatically — this is a data-transform task, not new content.
- **Fix or retire the hreflang system properly (Finding #3).** Given the scale of `internationalData.ts` (1.1MB) and 1,690 India clinic pages, decide: do international/regional pages get real subfolder URLs (`/clinic/mumbai` vs equivalent for international) with server-rendered hreflang in `BaseLayout.astro`'s `<head>`? If international variants aren't distinct URLs today, hreflang isn't needed yet — don't resurrect the client-side version either way, it's the wrong pattern.
- **Sitemaps:** you already have segmented sitemaps (`sitemap_core.xml`, `sitemap_clinics_india.xml`, `sitemap_clinics_intl.xml`) with `lastmod` — good. Verify `lastmod` values are honestly tied to actual content changes (not date-bumped), since ~90% of sites fake this and an honestly-maintained sitemap earns faster recrawl privilege. Submit to IndexNow for Bing/Copilot if not already.
- **Custom 404 page** — none exists. Add one with search + links to top condition/clinic pages (craft signal + pogo-stick prevention).
- **Canonical URLs:** confirmed present in `BaseLayout.astro` (`Astro.url.pathname` based) — good, keep as-is, just make sure the dead `canonicalUrls.ts` module doesn't get half-resurrected in parallel and create two competing canonical systems.

---

## 3. AEO + GEO (AI Search Retrieval)

You have unusually strong plumbing here already — the job is reconnecting it and extending the pattern that already works (topic/recipe/plans/vegan pages) to the pages that don't have it (condition/herb/clinic/home).

- **Reconnect schema to condition/herb/clinic pages** (see Section 2) — these are your highest-intent AEO targets (people ask AI engines "what helps with PCOD" or "diabetes reversal diet India" directly).
- **60-word contract audit.** Since `condition/[id].astro` and `herb/[id].astro` are template-driven from `clinical_databases.ts` (161KB of data), check whether the underlying content opens each section with a direct 40–60 word answer before elaborating — a single template fix here compounds across every condition/herb page instantly, which is exactly the "asymmetry over volume" principle: one edit compounds across hundreds of URLs already published.
- **`llms.txt` is well-built** (curated reading list, disclaimer, FAQ block, Wikidata/MeSH IDs — genuinely elite-tier already). Two gaps: (a) it's static/hand-authored — wire content-freshness updates so it's regenerated whenever a pillar page changes, not just on `Jul 4` as currently dated; (b) `llms-full.txt` should be checked for actual completeness against the live condition/herb/clinic corpus.
- **Freshness system exists (`content-freshness.json`, `content-decay-report.json`) but is a static stub**, not driven by real `dateModified` from git or CMS. Wire it to actual last-edit timestamps (even a simple git-log-based script) — Perplexity treats content unedited >90 days as ~3× more likely to lose citation status, so this needs to reflect reality, not a hand-set date.
- **Fan-out matrix:** for your top 10 money conditions (Type 2 Diabetes, PCOD/PCOS, Fatty Liver, Thyroid, Insulin Resistance...), map 4–8 sub-queries each to an owned URL/section. You already have the topic/condition/herb page network to hang these off — this is a content-mapping exercise, not new infrastructure.
- **Off-site GEO (91% of answer influence):** run the reverse-source-engineering workflow monthly — ask ChatGPT/Perplexity/Gemini your 25 top clinical questions, log cited domains, and go get presence there (health directories, Quora, Reddit r/PCOS etc.) rather than only building on-site.

---

## 4. Bot & Crawler Management

This is genuinely one of the stronger parts of the current build:
- `robots.txt` already tiers correctly: search crawlers allowed, AI crawlers (GPTBot, ChatGPT-User, Google-Extended, Anthropic-ai, Claude-Web, PerplexityBot, cohere-ai) explicitly allowed, aggressive SEO-tool bots (AhrefsBot, SemrushBot, DotBot) rate-limited rather than blocked — correct posture per the tiering model.
- `bot-shield.js` does UA-based classification (search/AI/social/general) — solid foundation, but **UA strings are trivially spoofed**. Upgrade path: verify via reverse-DNS or TLS/JA4 fingerprinting for anything gating content, not just UA regex.
- Honeypot trap (`/honeypot/trap`) wired into `BaseLayout.astro` twice (top nav + footer, both `nofollow`/hidden) — correctly implemented pattern.
- **Fix:** `bot-analytics.json`, `honeypotTriggers` counts are static zeros — there's no real request logging feeding this. Decide whether to invest in real server/edge log capture (if you're on Hostinger per `deploy_hostinger.sh`, check what log access you actually have) or simplify the file to stop implying a monitoring capability that doesn't exist yet.
- **Grep server logs weekly for AI-crawler UAs once real logging exists** — rising GPTBot/ClaudeBot/PerplexityBot hits by directory precede citations by weeks; this is your best leading indicator and currently unavailable because there's no real log pipeline.

---

## 5. Core Web Vitals & Performance

Could not run a live Lighthouse pass in this sandbox (browser tools not enabled this session) — treat this section as what to verify, not confirmed scores.

- **Fonts:** self-hosted Inter woff2 (300–700 weights) in `public/fonts/` — good, avoids Google Fonts render-blocking round trip.
- **Heavy dependency surface:** Three.js + `@react-three/fiber`/`drei` + GSAP + Framer Motion + Lenis + D3 all present. Confirm none of these ship on templated pages (condition/herb/clinic — your highest page count and most likely LCP-sensitive templates) unless actually used there; audit with `client:visible`/`client:idle` hydration directives per island.
- **Partytown is present** (`~partytown/` in public, `scripts/partytown-setup.js`) — confirm third-party scripts (Gemini API calls, analytics if any) actually route through it rather than the main thread.
- **Image pipeline:** `astro:assets` `<Image>` used on the homepage hero — good (automatic optimization). Only 2 raw `<img>` tags found in `src/components/*.tsx` — check those two for missing `width`/`height`/`loading` attributes (CLS risk).
- **Action:** run a real Lighthouse/CrUX pass once build issues are resolved locally, and set a CI performance budget (hard JS/CSS/image size caps that fail the build) so the current careful work doesn't regress as more pages/components are added.
- **bfcache audit:** check for `no-store` cache headers, `unload` handlers, or open WebSockets/service-worker states that would block instant back/forward — `sw.js` exists, verify it doesn't block bfcache eligibility.

---

## 6. UX/UI & Visual Wow

- Design tokens present (emerald/lime brand palette, `brand-font`, consistent card radii) — coherent visual system already.
- Motion: GSAP `ScrollTrigger` reveals on homepage animate `opacity`/`transform`-adjacent properties — check `prefers-reduced-motion` is respected (not confirmed in the reviewed script).
- **Accessibility:** skip-nav link present in `BaseLayout.astro` (good). Verify alt text across the 1,690 clinic pages and herb/condition images reads as complete descriptive sentences, not filenames — this doubles as AI image-description input.
- **Add the custom 404** (Section 2) with search — also a UX/craft signal.
- **`EvidenceBadge.tsx` and `LocalizationHub.tsx` exist but are wired into nothing** (Finding #4) — these look purpose-built for exactly the E-E-A-T (evidence citations) and location-detail work implied by your `ORIGINAL_REQUEST.md` (timezone/currency/weather/produce per clinic). Before writing new UI for that location-detail requirement, check whether `LocalizationHub.tsx` was already meant to be that surface — reusing it may be faster than building fresh.
- **Interactive tools as authority assets:** you already have `HealthCalculators`, `BiologicalAgeEstimator`, `DietaryAuditor`, `SmartMealGenerator`, `HrvTracker` built and wired to `tools.astro` — good, this matches the "free tool ≈ 100 backlinks over time" doctrine. Make sure each has its own shareable URL/state (not just a modal) so it can be linked to and cited directly.

---

## 7. Out-of-the-Box Vault — Top picks for this site

Selected for fit (health/clinical, India + international, 1,690 location pages, existing AI-crawler infra):

1. **Definition ownership** — you have a herb/condition/glossary-shaped content base already (`herbs.json`, `conditions.json`). Formalize a 40–80 term clinical-nutrition glossary with `DefinedTerm` schema; each entry opens "[Term] is [definition] that [property]." Near-zero marginal cost given the data you already hold.
2. **The "boring pages" moat** — you have `legal/privacy`, `legal/terms`, `legal/editorial-policy` already. Add a visible security/data-handling page and a simple "how we source claims" methodology page (you already have `confidence-scores.json` and `evidence-summaries.json` — surface them as a real page, not just a JSON feed).
3. **Hallucinated-URL capture** — once real logs exist (Section 4), grep 404s for AI-crawler UAs/referrers and 301 invented paths to the nearest real condition/clinic page.
4. **Content decay CI** — you already have the *shape* of this (`content-decay-report.json`, `auto-freshness-log.json`) but it's a static stub. Wire a real cron/script that flags condition/herb pages >90 days stale and opens a ticket — turns existing scaffolding into an actual system.
5. **Claim schema / citation ownership** — you already publish `confidence-scores.json` and `evidence-map.json`; mark individual clinical claims with `Claim` schema (rare, almost nobody uses it) so AI engines trace claims back to you specifically.
6. **Agent-ready structure for the 1,690 clinic pages** — since each is essentially a `LocalBusiness`/`MedicalClinic`, emitting proper `Offer`/`priceSpecification` + `LocalBusiness` schema across all 1,690 makes this a legitimate large-scale local-SEO and agentic-commerce asset almost no competitor in this space will have done at this depth.

---

## 8. Social Media & Viral Mechanics

Not deeply auditable from code (this lives off-site), but on-site hooks found:
- `SocialShare.tsx` exists — confirm Web Share API (`navigator.share`) is used for one-tap sharing rather than only static icon links (found on the homepage footer as plain `<a>` tags to `/connect`, not deep-linked to actual profiles or share intents — verify `Header`/`Footer`/`connect.astro` actually link out to real social profiles rather than routing everyone through an internal `/connect` page, which may be intentional but blunts direct social discovery).
- No dynamic per-page OG image pipeline detected — `og:image` in `BaseLayout.astro` is a single static image for every page. For 1,690 clinic pages and hundreds of condition/topic pages, a templated OG image (even simple: title + city + logo) would materially improve social/WhatsApp share appearance at near-zero ongoing cost.
- WhatsApp: given the India clinic scale, add WhatsApp deep-link CTAs (`wa.me/...`) on clinic pages — this reliably outperforms contact forms for India-facing conversion.

---

## 9. Hard Rules Check (compliance with doctrine)

- No cloaking detected — `bot-shield.js` classifies bots but (as far as reviewed) doesn't appear to serve divergent HTML; keep it that way if you build out AI-specific content variants.
- Freshness data (`content-freshness.json`) currently reads as *plausible but hand-set* — this is close to the "date-bumping without changes" hard-rule violation if dates aren't tied to real edits. Fix per Section 3 before it becomes a real problem.
- Health/clinical claims: confirm every condition/herb page has a real reviewer/clinician attribution (you have `reviewer: "Dr. Shilpa Thakur, Ph.D."` in the freshness data — make sure this is genuine per-page review, not a default value copy-pasted across all 300+ condition/topic pages).
- DPDP Act compliance: `legal/privacy` exists — verify consent architecture (cookie consent component exists: `CookieConsent.tsx`) actually implements real consent-mode logic, not just a UI banner with no backend gating.

---

## 10. Measurement Scoreboard — What to actually track (replacing the static stub files)

| Layer | KPI | Immediate action |
|---|---|---|
| AI visibility | Citation rate across your top 25 clinical money-questions on ChatGPT/Perplexity/Gemini/AI Overviews | Start a manual monthly matrix (spreadsheet) — no tooling investment needed to start |
| Leading indicator | Real AI-bot hits by UA/directory | Requires real server/edge logging — currently absent; prioritize once hosting log access is confirmed |
| Search | GSC non-brand clicks, index coverage for the 1,690 clinic pages specifically | Segment GSC by `/clinic/*` path — confirms whether the location-page investment is actually getting indexed/clicked |
| Crawl | Orphan pages, crawl-waste % | Once schema/hreflang fixes ship, re-crawl and confirm no new redirect chains introduced |
| Performance | CrUX p75 LCP/INP/CLS per template (home, condition, herb, clinic) | Run once local build is fixed |
| Authority | Referring domains, directory consistency (JustDial, IndiaMART, Google Business Profile) for the clinic network | Given 1,690 locations, GBP entity-linking is high-leverage and currently unverified |

---

## 11. 90-Day Execution Order (prioritized to *this* repo's actual gaps)

**Days 1–30 — Reconnect what you already built**
- Ship server-rendered JSON-LD (`Organization`, `MedicalWebPage`, `MedicalClinic`, `Person`) into `BaseLayout.astro` + `condition/[id].astro` + `herb/[id].astro` + `clinic/[id].astro` + `index.astro` + `team.astro` (Finding #1 — highest priority, highest leverage, template-level fix compounds across hundreds of pages).
- Decide fate of the 11 orphaned SEO/GEO modules (Finding #2): wire in (`imageSchema.ts`, `entityGraph.ts` extension) or delete — don't leave them ambiguous.
- Commit the pending migration cleanup (Finding #5): remove `nutritioncolours-next/` subtree and root duplicates from git, rewrite `README.md`/`AGENTS.md` to describe the actual Astro stack.
- Fix local build (`rm -rf node_modules package-lock.json && npm i`) and confirm `dist/` matches `src/` before next deploy.
- Add custom 404 page.

**Days 31–60 — Make the freshness/decay/analytics systems real**
- Wire `content-freshness.json`/`content-decay-report.json` to actual git-log-derived `dateModified` instead of hand-set stubs.
- Stand up real request logging (server or edge, depending on Hostinger capability) so `bot-analytics.json` reflects reality, not zeros.
- Build the 40–80 term clinical glossary with `DefinedTerm` schema from existing `herbs.json`/`conditions.json` data.
- Templated dynamic OG image for clinic/condition/topic pages.
- WhatsApp deep-link CTAs on clinic pages.

**Days 61–90 — Authority and scale plays**
- `LocalBusiness`/`Offer` schema across all 1,690 clinic pages (data-transform from `locationsData.ts`, already structured).
- Reverse-source-engineering round 1 (log where AI engines cite competitors on your 25 money questions).
- Google Business Profile entity-linking for the clinic network.
- Decide on real hreflang/i18n approach if international pages get distinct URLs; implement server-side in `BaseLayout.astro` if so — retire the client-side `canonicalUrls.ts` approach either way.

---

## What I could not verify in this session

- Live Lighthouse/CrUX performance numbers (build failed in this sandbox due to a `rolldown` native-binding/arch mismatch — retest locally).
- Whether `dist/` currently deployed matches the latest `src/` (git history shows migration commits through Jul 7; uncommitted changes exist as of today).
- Real bot/crawler traffic patterns (no live log access from this environment).

These are flagged, not assumed — verify before treating any performance or traffic claim as current.

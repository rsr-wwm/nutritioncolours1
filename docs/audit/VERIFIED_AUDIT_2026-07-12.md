# NutritionColours — Verified Codebase Audit & Execution Log

**Date:** 2026-07-12 · **Auditor:** automated deep-audit of the local project folder (not the live site) · **Git HEAD:** `bc03fcf` ("Migrate all dynamic sub-routes… to Astro") · **Method:** direct file reads, `diff`, `awk`/`grep` counts, and a full `astro build` + `astro check` run reproduced in-sandbox. This is the P0 "Existing Project Analysis" deliverable required by MASTER_REQUIREMENT_SPECIFICATION.md §4/§71.1. Every figure below was verified, not assumed.

---

## 1. Headline: the site is more mature than prior docs implied

The 2026-07-10 upgrade plan described a site with no schema on YMYL pages and ~11 dead SEO modules. **That is now stale.** The last migration commit wired sophisticated medical schema across condition/herb/clinic pages. The real, current gaps are narrower and mostly technical.

---

## 2. Routes & build (verified)

- 39 route templates in `src/pages/`; **2,069 pages** build successfully.
- Distribution: clinic 1,701 · topic 229 · recipe 40 · herb 38 · condition 8 · team 8 · vegan 8 · article 5 · plans 4 · genomics 3 · interactions 2 + statics.
- **82% of all pages are clinic pages**, near-identical in size (~49.3 KB vs ~49.2 KB on two samples) → scaled-thin-content risk (MRS §5.5). Core clinical content (conditions) is only 8 pages. This inversion is the central strategic imbalance.

## 3. Data = page counts — there is NO unrendered backlog (correction)

Every dynamic template does `DATA.map(...)` over its full array, no filter/cap. Built counts equal array sizes:

| Data array | Entries | Pages |
|---|---|---|
| `MEDICAL_CONDITIONS_DATA` | 8 | 8 |
| `HERBS_SPICES_DATA` | 38 | 38 |
| `GENOMIC_VARIANTS_DATA` | 3 | 3 |
| `DRUG_INTERACTIONS_DATA` | 2 | 2 |

An earlier draft claimed "54 conditions / 92 herbs sit unrendered" — that was a miscount of nested `id:` fields in `clinical_databases.ts`. **Retracted.** Condition/herb expansion is genuine evidence-graded clinical authorship (MRS §12/§14, P3), not a config quick win, and must not be fabricated.

## 4. Schema (strong — and now complete on YMYL)

Condition/herb/clinic pages already emit rich medical JSON-LD: `MedicalWebPage` (~1,732×), `MedicalCondition` (~273×), `MedicalTherapy` (~252×), plus `MedicalCode`, `MedicalSignOrSymptom`, `Claim`, `FAQPage`, `Physician` reviewer (Dr. Shilpa Thakur), `SpeakableSpecification`, `BreadcrumbList`, Organization/WebSite. Home emits Organization/WebSite/WebPage/Person.

**Only gap found:** `genomics/[id]` and `interactions/[id]` emitted generic Organization/Person/WebSite only. **This was fixed this session — see §8.**

## 5. `src/data` is a SYMLINK to `src/lib` (correction)

`ls -ld src/data` → `src/data -> lib`. The two "trees" are the same physical files (same inode); `diff` reported identical because they ARE. **There is no duplication to consolidate and no drift risk.** Both `@/data/x` and `@/lib/x` resolve to one file. ⚠️ **Do not rewrite one side into re-export shims — writing through the symlink overwrites the real source.** `src/lib` is currently **untracked in git**; commit it to create a recoverable baseline.

## 6. Live vs dead code (correction)

- **Live & imported (not dead):** `src/lib/seo/structuredData.ts` (herb, condition), `internalLinkEngine.ts` (topic, HealthTopicPage), `entityGraph.ts` (recipe, herb, topic, condition).
- **The ~10 previously-listed "dead SEO modules"** (canonicalUrls, imageSchema, semanticLinker, phantomRoutes, antiScrape, offlineQueue, motionBudget, circadianTheme, intentPrefetch, localeRedirect) **no longer exist as files.**
- **Genuinely unwired components (0 page refs):** `HealthAssistant`, `KnowledgeConstellation`, `QuestionPathNav`, `GeospatialMap`, `AIHelper`. Duplicate `SemanticCompressionLayer.astro` + `.tsx` — pick one. Many other "AI" components (SmartMealGenerator, DietaryAuditor, GenomicMatcher, HealthCalculators, etc.) ARE wired.

## 7. Build health (verified by running it)

- `astro build` → **2,069 pages, green, ~20s.**
- `astro check` → **4 pre-existing type errors** (implicit-`any`): `LocalDirectory.tsx:765,825` and `clinic/[city]/[disease].astro:34,43`; plus **route-collision warnings** from duplicate topic IDs (`gestational-diabetes`, `metabolic-syndrome`, `endometriosis-pain`, `orthorexia`, `adenomyosis`, `vegan-*`). None block the static build; all should be resolved (MRS §65.5).
- **Native bindings:** the shipped `node_modules` was macOS-only; a Linux build needs the linux-arm64 bindings for `@rolldown`, `@astrojs/compiler-binding`, `lightningcss`, `@tailwindcss/oxide`, `esbuild`, `sharp`. See §9 for reproducible setup.
- **Other:** thin heading tree (sample condition page has only 1×H2 — blocks per-section answer-first chunking, MRS §39.2); `llms.txt` previously linked only external Wikidata/MeSH, not on-site money pages (fixed, §8); git working tree has ~413 staged deletions + ~68 untracked + ~11 modified (migration not committed cleanly); a stale `.git/index.lock` can reappear and block index operations. **Correction:** README.md and AGENTS.md are actually accurate for the Astro 7 stack (the earlier "docs still describe Next.js" claim, inherited from the 2026-07-10 plan, was wrong) — README's dated status block was refreshed to 2026-07-13.

## 8. Changes executed this session (all build-verified)

1. **Medical schema on `genomics/[id]`** — added `getGenomicsEntityGraph()` to `src/lib/seo/entityGraph.ts`; the page now emits `Gene` (dbSNP `sameAs`) + `MedicalWebPage` (Physician reviewer) + `Claim` (real PMID citations) + `BreadcrumbList`.
2. **Medical schema on `interactions/[id]`** — added `getInteractionEntityGraph()`; the page now emits `Drug` + `DrugClass` + `MedicalWebPage` + `Claim` (real PMID citations) + `BreadcrumbList`.
3. Wired both templates (`src/pages/genomics/[id].astro`, `src/pages/interactions/[id].astro`) to inject the new JSON-LD + breadcrumbs, mirroring the existing condition template.
4. **`public/llms.txt`** — added a "Primary Citable Pages" section leading AI crawlers to the real on-site condition/genomics/interaction/herb URLs (MRS §42.1), instead of only external ontology links.

**Verification:** all emitted JSON-LD parses valid; full 2,069-page build stays green; `astro check` shows no new errors from these files. Every schema field is drawn from real data (gene names, rsids, drug classes, PMIDs) — nothing fabricated.

### Follow-up fixes (also build-verified)
5. **Resolved all 4 pre-existing `tsc` errors** — typed the implicit-`any` callback params in `LocalDirectory.tsx` (`issue: string`, ×2) and `clinic/[city]/[disease].astro` (`c: string`, ×2). `astro check` now reports **0 errors / 0 warnings** (was 4 errors).
6. **Eliminated duplicate-topic-ID route collisions** — added a first-wins dedupe in `topic/[topic_id].astro` `getStaticPaths` (behavior-preserving: Astro already rendered only the first of each). Build warnings for `gestational-diabetes`, `metabolic-syndrome`, `orthorexia`, `adenomyosis`, `endometriosis-pain`, `vegan-*` are gone; still 229 topic pages. (Underlying duplicate ids remain in `src/lib/topics.ts` — clean at the data layer for a permanent fix.)
7. **Owner ruling — "Health Topics = Diseases"** — relabeled every visible "Health Topics" string to "Diseases" (nav in `Header.tsx` + `constants.tsx`, hub `<h1>`/`<title>` in `health-topics.astro`, home + 404 CTAs). URLs/routes (`/topic/[id]`, `/knowledge/health-topics`) left intact to preserve links and avoid 301 churn. Verified: 0 visible "Health Topics" left in `dist`, 229 topic pages intact, build green.
8. **Document Owner/Author** set to **Dr. Shilpa Thakur (PhD)** in the MRS header (v1.1).

9. **Disease-page schema parity (completes the "Health Topics = Diseases" ruling)** — added `getTopicEntityGraph()` and wired the topic template so all **229 disease pages** now emit `MedicalWebPage` (named `Physician` reviewer + real `lastReviewed` from each topic's `clinicalReview`) + `MedicalCondition` + `Claim` + `BreadcrumbList` + `SpeakableSpecification`, on par with the 8 `condition/` pages (previously they had only a bare `MedicalCondition` + FAQ). All JSON-LD validated; coverage confirmed 229/229; `astro check` still 0 errors.

**Final verified state:** `astro build` = 2,069 pages green · `astro check` = 0 errors / 0 warnings / 78 hints · 0 route collisions · 229/229 disease pages with reviewer-backed medical schema.

## 9. Reproducible sandbox build (for a Linux/CI environment)

The mount blocks file *deletion*, so build off-mount with `node_modules` symlinked:

```bash
# 1. install the missing linux-arm64 native bindings (were macOS-only)
#    @rolldown/binding-linux-arm64-gnu, @astrojs/compiler-binding-linux-arm64-gnu,
#    lightningcss-linux-arm64-gnu, @tailwindcss/oxide-linux-arm64-gnu,
#    @esbuild/linux-arm64, @img/sharp-linux-arm64 (+ sharp-libvips-linux-arm64)
#    — on a normal machine, `rm -rf node_modules package-lock.json && npm install` does this automatically.

# 2. build from a real-filesystem copy with node_modules symlinked + caches redirected
NC=/tmp/ncbuild; cp -r src public *.mjs *.json "$NC"/; ln -s <repo>/node_modules "$NC/node_modules"
# astro.config.sandbox.mjs overrides cacheDir + vite.cacheDir to /tmp (off the delete-blocked mount)
cd "$NC" && npx astro build --config astro.config.sandbox.mjs
```

`astro.config.sandbox.mjs` (kept in repo root; safe to delete — not used by production) redirects Vite/Astro caches off the mount. On the user's own Mac / normal CI this is unnecessary; a plain `npm install && npx astro build` works.

## 10. Remaining P1 (low-risk, not yet done)

Commit the untracked `src/lib` baseline to git; resolve the 4 `tsc` errors + duplicate-topic-ID collisions; expand the single-H2 template heading tree; server-render hreflang + canonicals; custom 404 + hallucinated-URL capture; honest sitemaps + IndexNow; commit-clean migration debris + fix README/AGENTS; wire-or-delete the 5 unwired components + duplicate `SemanticCompressionLayer`. Full roadmap in MASTER_REQUIREMENT_SPECIFICATION.md §74.

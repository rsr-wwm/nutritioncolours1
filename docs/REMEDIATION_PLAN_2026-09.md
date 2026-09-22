# NutritionColours — Remediation & AI-Search Domination Plan
**Version 1.0 · 13 September 2026 · Astro 7 / React 19 / Tailwind v4 · `output: 'static'`**

---

## 0. How to read this

This plan was produced by a full read of `src/`, `scripts/`, `data/publishing/` and `public/` by six specialist passes. Every number in it was computed, not estimated. Where something could not be verified from the repo, it is marked **[unverified]**.

Three documents belong together:

| Document | Purpose |
|---|---|
| `docs/VISUAL_AUDIT_2026-09.md` (published as the "NutritionColours Visual Triage" artifact) | What is wrong, per page and per component |
| **This file** | Why it is wrong, in what order to fix it, and what must never be done |
| `docs/DIFF_SPEC_2026-09.md` | Apply-ready `Before`/`After` blocks for all 22 code findings |

**One decision is already made:** content publishes through a **batched verification pipeline**, in small reviewed batches — not a bulk republish. Everything below assumes that.

---

## 1. Ground truth — what this site actually is today

| Measure | Value | Source |
|---|---|---|
| Routed pages | ~30 | `src/pages/` walk |
| Indexable pages | 9 | 6 of 9 marketing pages carry `noindex` |
| Leaf pages generated | **0** | `approved-leaves.json` → `"records": []` |
| Records in the quarantine registry | **2,173** (1,126 health / 1,047 food) | `data/publishing/leaf-registry.json` |
| Records passing the preliminary screen | **0 of 2,173** | `preliminaryMachineEligible: 0/1126`, `0/1047` |
| Human publish decisions ever written | **0** | `leaf-decisions.json` → `{"decisions": []}` |
| Verified authors / reviewers / sources / claims | **0 / 0 / 0 / 0** | `truth-registry.json` — all seven collections empty |
| `<img>` / `<Image>` / `<picture>` in `src/` | **0** | repo-wide grep |
| Design-system utility classes used by pages | **0** of 9 defined | repo-wide grep |
| Tailwind `dark:` utilities vs `.dark` selectors | **965 : 34**, on two incompatible mechanisms | repo-wide grep |

**The sentence that matters:** this is not a broken site. It is a **pre-content site with a governance system that has never been operated**, wearing the visual shell of a mature one.

---

## 2. Root-cause chain — why nothing publishes

The pipeline is real and it works. It is producing nothing because nothing has been fed into it.

```
src/content/knowledge/**.md   (2,173 files, bulk-generated)
        ↓  scripts/build-leaf-registry.mjs
leaf-registry.json            (2,173 records, ALL lifecycleState: 'quarantine')
        ↓  merged with leaf-decisions.json   ← { "decisions": [] }   ✱ EMPTY
        ↓  validated against truth-registry.json ← all collections [] ✱ EMPTY
        ↓  scripts/compile-approved-leaves.mjs — emits only lifecycleState === 'publish'
approved-leaves.json          ("records": [])
        ↓  src/pages/foods/[item].astro · health/[slug].astro  getStaticPaths()
0 pages
```

### 2.1 The failure histogram (computed over all 2,173 records)

| Gate rule | Records rejected | Most common cause |
|---|---:|---|
| `INSUFFICIENT_EXTERNAL_SOURCES` | 1,973 | Fewer than 2 external URLs in the body — most files cite nothing at all |
| `MISSING_SOURCES_SECTION` | 1,767 | No `## Sources` heading exists |
| `UNSAFE_OR_RAW_SLUG` | 1,566 | `slug` holds a display title (`"Blueberry"`) or a bulk-import placeholder (`func-mush-1`, `spine-1`) |
| `BOILERPLATE_OR_CROSS_ENTITY_CONTAMINATION` | 1,306 | Templated phrasing shared verbatim across unrelated entities |
| `BELOW_PRELIMINARY_DEPTH_FLOOR` | 1,224 | Under 800 words (health) / 600 words (food) |
| `HIGH_RISK_MEDICAL_LANGUAGE_REQUIRES_CLAIM_REVIEW` | 1,130 | Cure / reversal / guarantee / prescriptive-dosing language |
| `MISSING_REVIEWER` (health) | 823 | No `reviewedBy` in frontmatter |
| `MISSING_REVIEWER_FOR_CLINICAL_CLAIMS` (food) | 607 | Same, triggered by high-risk language |
| `SPACED_INTERNAL_LINK` | 297 | Malformed `[text](path with space)` |
| `MISSING_DESCRIPTION` | 219 | No frontmatter `description` |

Reasons-per-record distribution: 1 reason → 29 records · 2 → 63 · 3 → 98 · 4 → 643 · 5 → 293 · 6 → 904 · 7 → 142 · 8 → 1.

Worked example, `Fruits/Berries/Common/blueberry.md`: 552 words (floor is 600), 0 external sources, no `## Sources` heading, `slug: "Blueberry"`.

### 2.2 The diagnosis

Two causes are true at once, and a third is ruled out.

- **Content problem — confirmed.** Zero of 2,173 records pass even the *advisory* screen. The corpus is bulk-generated and was never edited to publication standard.
- **Process problem — confirmed, and it is primary.** Even a record with a perfect score would still not publish: `compile-approved-leaves.mjs:141` emits only records whose `lifecycleState === 'publish'`, and only a human decision entry can set that. No `leaf:decide` / `leaf:approve` script exists anywhere in `scripts/`. Both writer scripts explicitly refuse to author decisions or truth data themselves — by design.
- **Code problem — ruled out.** No impossible predicate was found. `scripts/test-leaf-policy.mjs` contains passing fixtures, so every rule is satisfiable by a correctly authored record.

**Therefore:** do not weaken the gate. Operate it.

### 2.3 The 91-record opening

**91 of 2,173 records fail ≤ 2 preliminary reasons and carry no contamination flag and no high-risk-language flag.** That is the realistic pool for Batch 1. Target ~50 of them.

---

## 3. The three constraints that bound everything

Every idea in this plan lives or dies on one of these. Nothing downstream can route around them.

### Constraint 1 — Content gate (solvable by process)
Covered in §2. Solvable in weeks, by editorial work plus operating the existing pipeline.

### Constraint 2 — Identity (solvable only by a real human)
This is the binding YMYL constraint. Google and every AI engine need a named, credentialed, verifiable author and reviewer before they will cite health content. The repo has the right *code shape* for this already — `ApprovedLeafPage.astro:24-45` emits `Person` nodes with `name`, `url` and `sameAs` for both author and reviewer. What it does not have is a person.

**Live liability, today:** `src/pages/knowledge/circadian-nutrition.astro:64` renders `Reviewed by: Clinical Nutrition Review Board` — an unnamed body, no `Person`, no `sameAs`, not registered in `truth-registry.json`, and absent from that page's own JSON-LD (`articleSchema`, `:8-26`, carries no `author` or `reviewedBy`). The same page declares `MedicalCondition: "Insulin Resistance…"` at `:17`. A `MedicalCondition`-adjacent page claiming clinical review by an anonymous board is the single highest-exposure artifact in the repository, and it is indexable right now.

Until a real named reviewer exists, only two honest options exist for any clinical claim: keep it out of the index, or publish it as general food-composition education with no clinical-review claim and no `MedicalWebPage` type.

### Constraint 3 — Zero images (solvable by build, then by art)
Not an asset gap — a capability gap. `ApprovedLeafPage.astro` has no image *slot*. The slot must be built before any art is worth commissioning.

---

## 4. Workstream A — operate the publishing pipeline

### 4.1 What must be added per leaf

1. **Editorial repair of the markdown** (human): add a `## Sources` heading with ≥2 real HTTPS URLs; clear the word-count floor; replace the auto-slug with a clean kebab slug; rewrite or remove every contamination match and every high-risk-language match.
2. **A decision entry** in a batch decisions file: `legacyId`, `lifecycleState: "publish"`, `approvalStatus`, `stableId`, `canonicalPath`, `canonicalName`, `entityType`, `seoTitle`, `metaDescription`, `taxonomyIds`, `primaryIntent`, `contentSource`, `authorId`, `sourceIds` (≥2), `claimIds` (≥1), `reviewEventId`, `reviewerId`, `substantiveModified`, `lastReviewed`, `reviewExpires`.
3. **Truth-registry rows**: one verified `authors` row; one verified `reviewers` row whose `scopes` cover the taxonomy; ≥2 verified, non-retracted `sources` rows; ≥1 `claims` row with `status: "approved"`, `sourceLocators` for every source, and `allowedDestinations` containing the exact canonical path; one `reviewEvents` row with `status: "approved"`, `contentSha256` of the exact approved bytes, `conflictsReviewed: true`, and both approval timestamps.
4. **The body JSON** at `data/publishing/content/<health|food>/<slug>.json`, matching `LeafContent`: a 35–100 word direct answer, every required section from `HEALTH_REQUIRED_SECTIONS` / `FOOD_REQUIRED_SECTIONS`, and real `claimIds` on every block.

### 4.2 Where the human plugs in

The review step's **output is the truth-registry entry** — not a separate log. A named reviewer opens the repaired markdown beside the drafted content JSON, checks each claim against its cited source, and signs off; that signature *is* the `reviewEvents` row. `content-fingerprint.mjs` then binds it to the exact reviewed bytes, so any post-review edit invalidates the approval automatically. The system is tamper-evident by construction — this is genuinely good design and should be preserved exactly as it is.

### 4.3 Batch mechanics

- One decisions file per batch: `data/publishing/batches/2026-09-batch-01.leaf-decisions.json`.
- A small merge script (**does not exist yet — build it**) concatenates `decisions[]` into the canonical file and fails on duplicate `legacyId`.
- Per-batch command sequence:
  ```
  npm run leaf:audit          # refresh inventory
  # author/merge the batch decisions file + truth-registry rows
  npm run leaf:compile
  npm run leaf:verify
  npm run leaf:test
  npm run build
  ```
- Batch id = `lastReviewed` date + sequence, used in the filename and the commit message, so `git log data/publishing/` becomes the audit trail.

### 4.4 Rollback

Set the batch's records to `lifecycleState: "retire"` with a `retirementReason` (`compile-approved-leaves.mjs:50` already supports this), rebuild, and confirm the retired canonical paths return 410. `public/410-tombstone.html` exists and is a correctly built `noindex`/`nofollow` 410 page. **[unverified]** `scripts/generate-tombstones.ts` is referenced by `package.json` as `enforce:tombstones` inside `build:secure` but is **not present in the staged copy** — locate it and confirm it actually wires retired routes to that tombstone before relying on automatic rollback.

---

## 5. Workstream B — code remediation

Full `Before`/`After` blocks live in `docs/DIFF_SPEC_2026-09.md`. Summary of the three waves:

**Wave 1 — safe, isolated, ship immediately.** `TPL-01` (unguarded `aliases.length` that can fail the entire static build), `TPL-02` (empty "Sources & Citations (0)" card), `FLAG-01` (literal `::claim{#…}::` text on the flagship page), `HUB-01` (`h-full`), `MEASURE-01` (reading measure), `PRINT-01` (print stylesheet), plus `CIRC-01` below.
Gate: `npm run build`.

**Wave 2 — system-level, one careful pass, in this order.** `SHELL-01` (declare `@custom-variant dark` — one line that brings 965 utilities under the toggle) → `TOK-04` (delete the dead `tailwind.config.mjs`, only after SHELL-01 lands) → `SHELL-02` (inline the theme resolution into `<head>`) → `A11Y-01` (one focus ring, 44px targets) → `SCROLL-01` → `MOTION-01` → `DS-02` (`data-page-category`) → `TYPE-01` (self-host Fraunces — last, because it is the only item with an external dependency) → `TOK-01` → `TOK-03`.
Gate: `npm run build`, then `npm run preview` and a manual pass on home / a leaf page / the circadian article / a legal page, in both themes, at 375px and 1440px.

**Wave 3 — refactors touching many files.** `TOC-01` → `LEGAL-01` → `DEAD-01` (port the correct mobile-menu a11y pattern out of `Header.tsx` *before* deleting it; note that `CompatLink.tsx` becomes orphaned in the same move).
Gate: `npm run release:verify`.

### 5.1 CIRC-01 — the one finding the spec pass missed

**File:** `src/components/CircadianMealClock.tsx:8-16, 46`

**Problem:** `useState<Date | null>(null)` with `const hour = currentTime ? currentTime.getHours() : 12` means the pre-hydration render always shows the **noon** phase — "Peak Insulin Sensitivity", emerald — to every visitor regardless of their local time, then flips colour and clinical copy after hydration. On a badge labelled "Live Circadian Phase Monitor", that is briefly wrong clinical-timing guidance. Separately, `animate-pulse` at `:46` has no reduced-motion guard.

**Fix (minimal, this wave):** render an explicit neutral state before hydration rather than a wrong one.

```tsx
// derive nothing until we know the real time
const phase = currentTime ? phaseFor(currentTime.getHours()) : null;
```
…and render, when `phase === null`, a neutral chip reading `Detecting local time…` with neutral stone colours and no `animate-pulse`, keeping the box's height identical to the resolved state so nothing shifts. Extract the three phase definitions into a `PHASES` array and a `phaseFor(hour)` helper so the fallback has no hour-12 default to fall back to. Guard the dot with `motion-safe:animate-pulse`.

**Not in this wave:** turning the component into an actual 24-hour SVG dial. That is a separate project (§6.5).

**Verify:** disable JavaScript and load the page — the chip should read "Detecting local time…", never a phase name. `grep -n "animate-pulse" src/components/CircadianMealClock.tsx` should show only `motion-safe:animate-pulse`.

---

## 6. Workstream C — template capability

The leaf template's only body primitive is `<h2>` + `<p>` (`ApprovedLeafPage.astro:128-134`). Six additions, in impact order. Each one multiplies across every page the pipeline ever publishes, so build them **before** Batch 1, not after.

1. **`data-page-category`** set from `pageKind` in `BaseLayout.astro`. Four palettes already exist at `designTokens.css:63-85` and are never activated. One attribute, zero new CSS, and the visual sameness across sections disappears.
2. **Table block type**, with an `overflow-x: auto` wrapper, a `<caption class="sr-only">`, `<th scope="col">` and a sticky header row. `comparisonTable: { headers, rows }` is already defined in `src/lib/types.ts:101-104,180-183` and never rendered. Tables are the highest-fidelity extraction format for AI retrieval — this is both a UX fix and an AEO fix.
3. **Key-takeaways block** — a `<ul aria-label="Key takeaways">` above the direct answer, one independently extractable fact per `<li>`, each with its own `id`.
4. **Image slot** under the H1: a responsive `<picture>` with fixed `aspect-ratio`, `loading="lazy"`, `decoding="async"` and AVIF/WebP `srcset`, plus a category-coloured initial-letter tile fallback so entities without art still read as designed.
5. **TOC as one component** rendered once (`:110-121` and `:199-224` currently duplicate it into the DOM and the accessibility tree on every page), positioned before the article on mobile.
6. **`FAQPage` JSON-LD** alongside the existing `<details>` FAQ markup — the markup is already correct and crawlable; only the schema node is missing.

### 6.1 The 60-word contract
Enforce in the content schema, not the markup: `section.blocks[0].text` must open with a standalone 40–60 word answer to its own `<h2>`, before any elaboration. Meandering intros dilute the chunk embedding and the passage gets discarded at retrieval time.

---

## 7. Workstream D — the AI-search layer

### 7.1 What is achievable at each scale

| | Today (~30 pages, 9 indexable) | After Batch 1 (~80) | Full publication (~2,000) |
|---|---|---|---|
| **Worth doing** | Entity and trust layer only: clean Organization + WebSite graph, honest robots/sitemap posture, zero index bloat. The policy pages are genuinely citable for "is this source credible" queries. | First real AEO surface. Claim and DefinedTerm layers seed. The fan-out matrix becomes testable. Author/reviewer `Person` coverage should be 100% of indexable leaves by construction. | Topical clusters and definitive-resource plays become viable. Interconnected niche clusters show materially higher AI visibility — but only past roughly 200 pages per cluster. |
| **Waste of effort** | Any cluster, glossary or programmatic play — there is nothing to cluster. | Full glossary moat; vernacular/Hinglish layers (translating 10 pages is not worth it; translating 50 is). | Nothing — but the dominant risk inverts from scarcity to the AI-content firehose. |

The asymmetry worth naming: competitors are racing to publish thin AI content at a scale this site has not earned. This site can win the **trust layer** first, which is exactly what YMYL is graded hardest on, and which no amount of volume substitutes for.

### 7.2 The `@id` knowledge graph

Already correct and worth preserving:
- `BaseLayout.astro:52-75` — site `@graph` with `Organization` (`#organization`) and `WebSite` (`#website`), publisher linked by `@id`. The code comment explicitly refuses to add a `SearchAction` because no real search endpoint exists. **Keep that discipline** — never describe a feature you do not have.
- `SeoHelper.astro:72-76` — per-page `BreadcrumbList`.
- `ApprovedLeafPage.astro:30-45` — per-leaf `WebPage` / `MedicalWebPage` with conditional author and reviewer `Person` nodes.

Target graph, to activate **only once Constraint 2 is satisfied**:

```
Organization              #organization
WebSite                   #website            publisher → #organization
WebPage|MedicalWebPage    {url}#webpage       isPartOf  → #website
Person (author)           {site}/team/{slug}#person
Person (reviewer)         {site}/team/{slug}#person
Claim                     {url}#claim-{id}    appearance → {url}#webpage
DefinedTerm               {site}/glossary/{term}#term
BreadcrumbList            {url}#breadcrumb
```

Health-type risk table:

| Type | Use when | Risk |
|---|---|---|
| `WebPage` | Always | — |
| `MedicalWebPage` | Only with a real `reviewedBy` + `lastReviewed` | Currently claimed on the circadian page with no reviewer in its JSON-LD — live liability |
| `DefinedTerm`, `NutritionInformation` | Glossary terms, USDA/IFCT composition data | Low |
| `MedicalCondition` | Only with a licensed medical reviewer, not a nutritionist | High — diagnostic-adjacent; already declared at `circadian-nutrition.astro:17` |
| `Drug`, `DietarySupplement` | Never, at current staffing | Highest — implies dosing authority the site cannot back |

`verify-dist.mjs:158` already carries a `FORBIDDEN_SCHEMA_TYPES` gate. Do not engineer around it.

### 7.3 `llms.txt` — already right, do not "improve" it

`src/pages/llms.txt.ts` tells the truth about a gated site: line 11 states no health leaf is approved, line 12 the same for food, line 14 flags recipes as unreviewed and excluded from indexing. This is the opposite of the usual failure — an `llms.txt` advertising URLs that 404 or say "under review". **Its honesty is the correct posture at this scale.**

Evolution: at Batch 1, add an H2-categorised section listing the approved leaves, and generate `/llms-full.txt` mechanically **from `approved-leaves.json` only** — never from the quarantine registries — so it structurally cannot leak unreviewed content. At full publication, `llms.txt` becomes a curated top-10 reading list and `llms-full.txt` the comprehensive dump.

### 7.4 Crawler and indexation posture

| Class | Bots | Current state | Action |
|---|---|---|---|
| Search | Googlebot, Bingbot | `robots.txt:1-2` wildcard allow | Correct |
| On-demand fetchers | OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User | Explicitly named and allowed, `robots.txt:4-14` | Correct, and unusually deliberate |
| Training crawlers | GPTBot, ClaudeBot, CCBot, Google-Extended, Applebot-Extended | Not named — covered only by the wildcard | **Name them explicitly.** Works today, but any future narrowing of the wildcard would silently starve AI visibility with no signal |
| Scrapers | AhrefsBot, SemrushBot, MJ12bot | No rule | Low priority at this traffic level |

`public/_headers` and `vercel.json` contain no bot-management rules — there is no silent block in the repo. **[unverified]** Vercel's dashboard-level Bot Protection / AI-crawler toggle is not in source control. Confirm manually that it does not block GPTBot / ClaudeBot / PerplexityBot; this is the most common way sites lose all AI visibility without knowing.

Withdrawn-page handling is already textbook and should not be touched: `public/_redirects` sends `/clinic/*`, `/location/*`, `/cure/*`, `/reversal/*` to **410** (content that should never have existed — tell crawlers not to come back) and `/disease/*`, `/condition/*`, `/clinics/*` to **301** (real replacements exist). That is the correct distinction, correctly applied.

`scripts/generate-sitemaps-from-dist.mjs:53-63` walks the built `dist/`, skips `404.html` and anything carrying `noindex`, requires a same-origin canonical, and deliberately emits **no `<lastmod>`** — "no synthetic lastmod" per its own comment. Because most sitemaps on the web carry faked `lastmod`, a provably honest one is a real crawl-priority asset. `verify-dist.mjs:224-232` then asserts the sitemap contains exactly the indexable set — a genuine two-sided gate. The sitemap structurally cannot contain quarantined records, because it is generated from output rather than from the registries.

### 7.5 Fan-out matrix — three money queries

**"Foods to reduce insulin resistance"** (large Indian prevalence audience)
`what foods lower insulin resistance naturally` → `/health/insulin-resistance` · `does turmeric help insulin resistance` → `/foods/turmeric` · `best Indian diet for insulin resistance` → `/health/insulin-resistance/indian-diet` · `glycemic index of Indian foods list` → `/foods` comparison table · `intermittent fasting insulin resistance evidence` → `/knowledge/circadian-nutrition` (rebuilt under governance) · `fenugreek seeds blood sugar study` → `/foods/fenugreek` · `insulin resistance vs prediabetes` → `/glossary/insulin-resistance`

**"Turmeric benefits and dosage"**
`how much turmeric per day is safe` → `/foods/turmeric#dosage-and-safety` · `curcumin absorption with black pepper` → `#bioavailability` · `turmeric drug interactions blood thinners` → `#interactions` · `turmeric vs curcumin supplement` → `/glossary/curcumin` · `turmeric inflammation RCT evidence` → `#evidence` · `turmeric side effects` → `#safety`

**"PCOS diet plan India"**
`what to eat with PCOS Indian diet` → `/health/pcos/diet` · `foods to avoid with PCOS` → `#prohibited-foods` · `PCOS insulin resistance connection` → `#insulin-resistance-link` (cross-links query 1) · `myo-inositol vs d-chiro inositol` → `/glossary/myo-inositol` · `is dairy bad for PCOS` → `#dairy` · `PCOS symptoms checklist` → `#symptoms`

Every one of these must route through the governed template. None of them is a reason to bypass the pipeline the way `circadian-nutrition.astro` currently does.

### 7.6 Five selected high-leverage tactics

1. **Honest-`lastmod` trust asset** — already implemented by omission. State it as a deliberate asset and never regress it.
2. **Answer-consistency audit** — the moment a real author and reviewer are named, diff quarterly how each AI engine describes the brand and that person, catching any hallucinated credential before it compounds.
3. **Hallucinated-URL capture** — `scripts/analyze-crawler-logs.ts:56-91` already tracks 404/410 hits per bot. Mine it for AI-referrer 404s and 301 the plausible ones to real pages instead of tombstoning everything.
4. **Claim staking via `Claim` schema** — builds directly on the existing claims ledger and `citationsFor()` (`ApprovedLeafPage.astro:11-18`). Almost nobody uses this type; the infrastructure here already exists as a governance concept.
5. **The "boring pages" moat** — `/legal/editorial-policy`, `/legal/methodology`, `/legal/privacy` are precisely what AI agents and careful readers check. Keep them indexable and current; they are citable trust anchors even while content is thin.

Deliberately excluded for now: anything requiring images; anything requiring scale (glossary moat, topical clusters, definitive-resource plays); and any agent-readable `Offer` / commerce layer — inventing machine-readable pricing for a service that explicitly does not exist would itself be a violation.

---

## 8. Violation register — the hard no-go table

| Banned move | The specific temptation here | Why it is fatal | The legal twin |
|---|---|---|---|
| Schema for invisible content | Adding rich `MedicalWebPage` / `FAQPage` JSON-LD to `/health`, `/foods`, `/knowledge/[section]` stubs "so AI can find them" while they still say *under review* | Structured data describing content that is not there is textbook spam schema; `verify-dist.mjs:158` already gates it | Emit content schema only when `approved-leaves.json` holds the record. Stubs get `WebPage` + `BreadcrumbList` and nothing more |
| Fabricated author or reviewer | `circadian-nutrition.astro:64` — "Reviewed by: Clinical Nutrition Review Board" | An anonymous board cited as clinical reviewer on a `MedicalCondition`-adjacent page; live and indexable today | Route through the governed author/reviewer fields sourced from a real named person, or strip the review claim and drop to plain `WebPage` |
| Fabricated DOI or citation | The three PubMed links at `circadian-nutrition.astro:109,143,177` were authored outside the claims ledger; nothing confirms a human verified that each PMID supports its claim text | A checked PMID that does not support the stated claim is worse than no citation | Every citation resolves through the truth registry's claim→source mapping before it renders |
| Date-bumping without change | `circadian-nutrition.astro:68` hardcodes `<time datetime="2026-09-05">`; the sidebar hardcodes "Primary DOIs: 3" and "Human-Audited" | Hand-typed freshness that never reflects a real edit, and it contradicts the site's own promise at `legal/methodology.astro:59` | Derive `dateModified` / `lastReviewed` from the truth-registry event log; never type them into a template |
| AI-content firehose | "The 1,900 pages are already written — just publish them" | The single highest-blast-radius mistake available on a YMYL site | Cap every batch (~50), one real human review event per record, never a bulk import |
| Medical claims without a reviewer | Extending `MedicalWebPage` to food pages for schema richness | Claims clinical authority the staffing does not support | `Diet` / `NutritionInformation` / `DefinedTerm` for nutrition; `MedicalWebPage` / `MedicalCondition` strictly for reviewed condition pages |
| Keyword stuffing | Padding leaf pages to clear the word floor | Measurably *reduces* AI visibility, and the word floor exists to measure substance, not length | Add real sourced substance, or leave the page in quarantine |
| India compliance gaps | Publishing PCOS / diabetes content to an Indian audience without visible consent and privacy surfacing, or implying diagnostic authority | DPDP applies to effectively every India-facing site; health-condition content additionally risks reading as medical advertising by an unqualified party | Keep `/legal/privacy` current and add the sector-compliance page as part of the boring moat |

*Every banned move above has a legal twin that performs better. The clean path is also the winning path.*

---

## 9. Fabrication red lines — fields no LLM may ever fill

An automated step may **draft** prose, slugs, section structure, SEO titles and proposed claim text. It may never write any of the following, because each is a fabricated credential or a fabricated citation:

- `authors[].displayName`, `role`, `sameAs`, `verifiedAt`, `consentRecordedAt`
- `reviewers[].displayName`, `credentialSummary`, `credentialIssuer`, `credentialJurisdiction`, `credentialVerifiedAt`, `credentialExpiresAt`, `independenceAttestedAt`
- `reviewEvents[].reviewedAt`, `expiresAt`, `conflictsReviewed`, `editorialApprovedAt`, `complianceApprovedAt`
- `reviewEvents[].contentSha256` — must be computed from bytes a human actually reviewed
- `sources[]` title, publisher, url, `publishedAt`, `accessedAt`, `retractionCheckedAt`, and every `sourceLocator`
- `claims[].status: "approved"`, `approvedText`, `evidenceGrade`, `reviewerId`, `reviewedAt`
- Any `lastReviewed` / `reviewExpires` date anywhere

Auto-approving a claim is the single most dangerous shortcut available in this repository.

---

## 10. False-confidence register

A green build here is fully compatible with a site that publishes nothing. Every leaf-related check is a **consistency** check, not a **coverage** check.

| Check | In build? | Behaviour on an empty site |
|---|---|---|
| `leaf:compile:check` | Yes (`prebuild`) | Passes vacuously — 0 approved records is consistent with 0 decisions |
| `leaf:verify` | Yes (`prebuild`) | Passes vacuously |
| `generate-sitemaps-from-dist.mjs` | Yes | Emits a near-empty urlset without failing |
| `build-search-index.mjs` | Yes | Builds a near-empty Pagefind index without failing |
| `verify-dist.mjs` | Yes | Compares two empty sets and passes — no floor asserting a minimum leaf count |
| `verify-claims-ledger.ts` | Yes (`enforce:claims`) | `public/data/claims-ledger.json` is absent → logs "not found, skipping", exits 0 |
| `verify-cwv.mjs`, `check-all-links.mjs` | No — manual | Would report "few pages checked", not a failure |

**Action:** add a coverage assertion to `verify-dist.mjs` — a configurable `MIN_LEAF_PAGES` that fails the build when the published leaf count drops below the last shipped batch total. Without it, an accidental emptying of `approved-leaves.json` ships silently.

**[unverified]** `generate-tombstones.ts`, `verify-trust-sbom.ts`, `negative-capability-scanner.ts`, `machine-estate-killswitch.ts`, `verify-source.mjs`, `verify-live.mjs`, `deploy-hostinger.mjs` are all referenced in `package.json` but were not present in the staged copy. Confirm each exists before trusting the `build:secure` chain.

---

## 11. Sequenced execution

### Sprint 1 (week 1) — stop the bleeding, unify the shell
Wave 1 diffs · Wave 2 diffs · remove or replace the "Clinical Nutrition Review Board" claim and the hardcoded review metadata on `circadian-nutrition.astro` · name GPTBot/ClaudeBot/CCBot/Google-Extended/Applebot-Extended explicitly in `robots.txt` · verify the Vercel bot-protection toggle · add `MIN_LEAF_PAGES` to `verify-dist.mjs` · locate the seven missing `package.json` scripts.
**Exit:** `npm run release:verify` green; no page claims a review it cannot evidence.

### Sprint 2 (weeks 2–3) — build the capability before the content
Workstream C items 1–6 · the batch-merge script · `/llms-full.txt` generator wired to `approved-leaves.json` only · Wave 3 diffs · Fraunces self-hosted · the image fallback tile system.
**Exit:** the leaf template can render a real article — tables, takeaways, an image, one TOC, category colour — and the batch tooling exists.

### Sprint 3 (weeks 3–6) — identity, then Batch 1
**Blocked on the user:** a real named, credentialed author and reviewer with `sameAs` targets, plus their scope of practice. Then: `/team/{slug}` profile pages · truth-registry rows · editorial repair of ~50 records drawn from the 91-record pool · claim-by-claim review · `npm run leaf:compile` → `leaf:verify` → `build`.
**Exit:** ~80 indexable pages, every leaf carrying a real author and reviewer `Person` node.

### Sprint 4 (weeks 6–10) — the AI-search layer goes live
`Claim` and `DefinedTerm` nodes · `FAQPage` schema · `llms.txt` H2 categories + `llms-full.txt` · first glossary terms for the fan-out matrix · baseline the AI-crawler log analysis · first reverse-source engineering round.
**Exit:** the citation flywheel has something real to turn on.

Then repeat Sprints 3–4 per batch. Month one shows little; month six is hard to displace. Patience is the last asymmetry.

---

## 12. Measurement — and what is meaningless until Batch 1

**Meaningless today** (do not track, do not report): AI citation rate, share-of-answer, fan-out coverage, cluster density, glossary pickup. There are 9 indexable pages; there is nothing to be cited *for*.

**Baseline now:**
- AI-crawler hit rates by user-agent and directory, via `scripts/analyze-crawler-logs.ts` run against real `logs/access.log` — it currently falls back to a synthetic sample at `:102-111`. Rising AI-bot hits lead citations by weeks; this is the one leading indicator worth watching from day one.
- Sitemap / indexable-set integrity as a release metric (`verify-dist.mjs` pass/fail).
- 410 / 301 / 404 distribution across the withdrawn paths, to confirm crawlers are learning the tombstones.
- `llms.txt` fetch frequency, if logs distinguish it.

**From Batch 1:** citation appearances for the §7.5 sub-queries (manual monthly prompt-and-log across the four engines) · `Claim` schema coverage per leaf · author/reviewer `Person` presence rate, which should be 100% by construction · and a standing audit that **zero** indexable pages carry a `reviewedBy` claim without a matching real `truth-registry.json` record.

---

## 13. Open decisions that need you

1. **Who is the named author, and who is the named reviewer?** Real names, real credentials, real `sameAs` URLs, and the reviewer's own statement of what they will and will not review. Sprint 3 cannot start without this, and nothing in this plan can substitute for it.
2. **Does a licensed medical practitioner review condition content**, or does the site drop `MedicalCondition` / `MedicalWebPage` entirely and publish as nutrition education?
3. **Which ~50 of the 91 candidate records** does Batch 1 take? Recommendation: pick by fan-out value (§7.5) rather than by lowest repair cost, so Batch 1 lands as a coherent cluster instead of 50 unrelated pages.
4. **Confirm the seven missing scripts exist** on your disk — they were not in the staged copy and `build:secure` depends on them.
5. **Check the Vercel bot-protection setting.** It cannot be seen from the repository, and it is the most common cause of silent, total AI-visibility loss.

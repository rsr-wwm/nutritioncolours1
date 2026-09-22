# NutritionColours — Full Code & Design Audit
**Date:** 2026-09-22 · **Scope:** all of `src/`, `public/`, `scripts/`, config files · **Method:** static analysis (grep/read across the full tree), Astro compiler checks, Playwright screenshots (light/dark/mobile, 15 pages sampled), zero console/JS errors confirmed on every sampled page.

## How to read this

Findings are grouped by category, each ranked **Severity** (critical → low, based on real user/business impact on a YMYL site) and **Effort** (quick fix / moderate / substantial). File:line references are exact as of this commit. A "✅ Already resolved" section up front exists because a visual audit from 2026-09-12 is still in project memory — several of its findings are now fixed and are noted so you don't re-fix them.

---

## ✅ Already resolved since the last audit (2026-09-12)

Don't re-open these — verified fixed by direct inspection this pass:

- **Fraunces display font now actually loads.** A real `fraunces-latin-900-normal.woff2` exists and is correctly declared (`globals.css:42-43`) with `font-display: swap`. Previously headings silently fell back to Georgia.
- **Default OG/social-share image is a proper PNG**, not SVG (Facebook/WhatsApp don't render SVG `og:image`). Fixed this session — `BaseLayout.astro:48-55`, `1200×630 nutritioncolours-default.png`.
- **The literal `::claim{#...}::` template syntax is no longer rendered as visible text.** Both remaining occurrences (`circadian-nutrition.astro:29`, `CircadianMealClock.tsx:95`) are inside comments now, used only as ledger anchors for `scripts/verify-claims-ledger.ts`.
- **`legal/privacy.astro` and `legal/terms.astro` now render distinct, real content** — each is its own `.astro` page with its own `<h1>` and body copy. The old bug (both pages sharing one hardcoded `EditorialPolicy` component) is gone; that component doesn't exist in the current tree.
- **Dark-mode contrast** — spot-checked every muted-text-on-tinted-background pairing found in the codebase; all compute to 6:1–10:1+, comfortably above WCAG AA. Evidence of a thorough prior pass (hand-tuned `dark:` variants, a documented `--pill-fill` exception).
- **No `client:only` islands** — the one interactive component (`CircadianMealClock.tsx`) uses `client:visible`, which renders real SSR HTML and hydrates only when scrolled into view. This was flagged as a serious crawler-visibility bug in the 2026-07-10 SEO audit for a *different* set of pages (the old `clinic/[id].astro`); those pages no longer exist, and the current single island is built correctly.

---

## Visual / rendering

No new visual bugs found. 15 pages screenshotted across light, dark, and mobile (390px) viewports — zero console/JS errors, no misalignment, overflow, or broken responsive behavior observed. The gated-hub pattern (badge → h1 → blockquote intro → `PublicationGate` → worked-example link → `NotifyMeForm` → CTA row) now renders identically and cleanly across Health, Foods, Recipes, Programs, Team, and Testimonials.

---

## Design-system consistency

| # | Finding | File(s) | Severity | Effort |
|---|---|---|---|---|
| D1 | **A full component-class design system in CSS has zero usages.** `btn-primary`, `btn-secondary`, `card-premium`, `card-standard`, `badge-clinical`, `alert-*`, `form-input`, `skeleton-card`, `cta-section` (~270 lines) are defined in `globals.css` but never applied anywhere — every page hand-rolls the equivalent Tailwind string instead. | `src/styles/globals.css` (~lines 179–450) | Medium | Moderate |
| D2 | **Fluid typography/spacing tokens are 100% unused.** `--font-size-xs…4xl` and `--space-3xs…2xl` (clamp-based, responsive-by-design) are defined in `designTokens.css:24-41` but referenced nowhere else in the codebase — every page uses static Tailwind spacing/sizing (`p-6`, `text-4xl`, etc.) instead. | `src/styles/designTokens.css:24-41` | Medium | Moderate |
| D3 | **`Header.astro` maintains its own parallel color system** — ~40 hardcoded hex values (`--pill-fill`, `--paper`, `--green`, `--ink`, etc., lines 180-268, 419, 539-697) independent of the CSS custom properties every other component uses. Documented as a deliberate exception in one place (`--pill-fill`) but the rest isn't. Risk: this palette can silently drift from the rest of the site's tokens. | `src/components/ui/Header.astro` | Low-Medium | Moderate |
| D4 | **The `data-page-category` re-theme system (4 categories: clinical/knowledge/recipe/tool, each with its own accent color in `designTokens.css:60-82`) is exercised by exactly one route** (`circadian-nutrition.astro` passes `pageCategory="knowledge"`). Not dead code anymore (Sept-12 audit said 0 usages — now 1), but built for a taxonomy the site doesn't yet use. | `src/layouts/BaseLayout.astro:25`, `designTokens.css:60-82` | Low | — |
| D5 | *(Positive finding, not a bug)* Despite D1/D2, the **CTA-button and radius conventions are already consistent in practice**: primary buttons are `bg-emerald-900 dark:bg-emerald-700` with matching hover states on nearly every page; radius scale (`rounded-full` for pills, `rounded-xl` for buttons, `rounded-2xl`/`rounded-3xl` for cards) is applied the same way site-wide. This is a strong argument for D1: the convention already exists informally, extracting it to real components is low-risk. | — | — | — |

---

## Accessibility

**High**
- `designTokens.css:19-21` — `--focus-ring`/`--focus-ring-offset` tokens are defined but never consumed. The real global focus style (`globals.css:685-687`) hardcodes `outline: 2px solid var(--brand-primary)`, and `--brand-primary` changes per page category (amber on knowledge pages, blue on tool pages). Focus-ring color is currently an *accident* of brand theming rather than a deliberate, stable a11y color. **Fix:** point `:focus-visible` at `var(--focus-ring)`, or delete the unused token.
- No `<link rel="preload">` for the woff2 font files anywhere in `BaseLayout.astro`/`SeoHelper.astro` — `SeoHelper.astro:126` has an empty `<!-- Preconnect to critical origins -->` placeholder comment with nothing under it. Affects perceived text-legibility timing on first paint (also a Performance item below).

**Medium**
- `ApprovedLeafPage.astro` sets `role="img"` on a decorative SVG that's already wrapped in `aria-hidden="true"` (`Header.astro:49` has the correct pattern for comparison) — redundant today, but a landmine if the `aria-hidden` wrapper is ever removed without adding an accessible name.
- `NotifyMeForm.astro:54` — the `required` email input has no visible required-indicator beyond native browser validation. Low-cost improvement: add a visible cue to the (currently sr-only) label.
- `foods/index.astro:118` — `<h3>Editorial Standard Notice</h3>` sits in an `<aside>` with no local `<h2>` ancestor in that section — a heading-outline smell, not a hard failure.

**Confirmed good (no action needed):** heading hierarchy correct on every sampled page; all 50+ decorative icons in `Icons.astro` consistently `aria-hidden="true"`; `PublicationGate.astro`'s `role="progressbar"` is built correctly with all required ARIA attributes; working skip-to-content link + landmark structure (`nav[aria-label]`, `main`, `footer`); keyboard-accessible mobile menu with `Escape`-to-close and focus return; `prefers-reduced-motion` respected in `Header.astro:789-794`; zero `onClick` handlers found without a matching `href`/keyboard path.

---

## Performance

**High**
- **No font preload** — see Accessibility above; same fix serves both. Add `<link rel="preload" as="font" type="font/woff2" crossorigin>` for at least Inter 400 (body) and Fraunces 900 (headings), since both are almost certainly render-critical.
- **~1.95MB of unreferenced images shipped in every build.** `apple_illustration.jpg` (663KB), `banana_illustration.jpg` (605KB), `orange_illustration.jpg` (692KB) in `public/images/` are never referenced anywhere in `src/` (confirmed by grep) — Astro copies all of `public/` into `dist/` regardless of use. Either delete them or use them (see Design Suggestions below — there's a real opportunity here).

**Medium**
- Zero use of Astro's built-in `<Image>`/`astro:assets` anywhere — the one real `<img>` (`ApprovedLeafPage.astro`) is hand-built with manual `width`/`height`/`loading`/`decoding` (correct today, but won't get automatic responsive `srcset`/AVIF-WebP negotiation once more image-bearing pages ship).
- `ApprovedLeafPage.astro:112` — that same hero image, positioned directly under the H1 (likely the page's LCP candidate), is set to `loading="lazy"`. Lazy-loading a probable above-the-fold LCP image is a mild anti-pattern. Currently dormant (no leaf content sets `heroImage` yet, since `approved-leaves.json` has 0 records) but should be `loading="eager"`/`fetchpriority="high"` before any leaf page ships with an image.
- `public/fonts/inter-latin-300-normal.woff2` and `inter-latin-500-normal.woff2` exist with **no matching `@font-face` declaration** — dead font files (no runtime cost since unreferenced, but repo/deploy bloat).

**Confirmed good:** the single React island uses `client:visible` (optimal — not `client:load`); inline `<script is:inline>` in `BaseLayout.astro` is a minimal ~10-line theme-flash-prevention IIFE, necessarily synchronous; the larger theme logic is a properly bundled/deferred module script; zero third-party/analytics scripts anywhere; `astro.config.mjs` build config (esbuild minify, Lightning CSS, manual React vendor chunk) is already sound.

---

## Code quality & structure

**Critical**
- **`ApprovedLeafPage.astro`** does unguarded `leaf.claims.map(...)` / `leaf.sources.map(...)` with no null/array fallback. Unreachable *today* only because `approved-leaves.json` has zero records, so `getStaticPaths()` never builds a page that hits this code. The moment content gets approved without a `claims`/`sources` array — which is exactly the workflow this whole gating system exists to eventually allow — `astro build` throws a hard, unhandled `TypeError` on a production build. **Fix:** add `leaf.claims ?? []` / `leaf.sources ?? []` defensive defaults in the component, and/or validate the shape in `scripts/compile-approved-leaves.mjs` before it ever writes a record. Effort: moderate, but do this before the first real leaf is approved, not after a build breaks.

**Medium — dead code (~3,400 lines, zero behavior change if removed)**
- `src/lib/foods_database.ts` (1,297 lines), `src/lib/recipes_database.ts` (1,322 lines) — zero importers; current pages read from `data/publishing/approved-leaves.json` instead.
- `src/lib/directoryUtils.ts` (39 lines) **and** `src/lib/directoryUtils.tsx` (627 lines) — same-named pair, both zero importers, clearly a merge artifact.
- `src/lib/safeUtils.ts` + `src/lib/logger.ts` (only imported by the former) — dead together.
- `src/lib/seo/SafeSinkCompiler.ts` — zero importers, and a byte-for-byte duplicate of `src/lib/serializeJsonLd.ts` (which `JsonLd.astro` actually uses).
- `src/lib/animations/parallax.jsx` — its own top comment says it's no longer used.
- `src/lib/fetch/*.json` (14 files) — unreferenced anywhere.
- `src/{lib,components,pages}/.DS_Store` — checked-in macOS artifacts; not in `.gitignore`.

**Medium — unextracted UI duplication** (beyond `PublicationGate`/`NotifyMeForm`, which are already correctly extracted):

| Pattern | Occurrences | Files |
|---|---|---|
| Status/eyebrow pill | 5 near-identical blocks | `health/index.astro:30`, `foods/index.astro:49`, `recipes.astro:31`, `plans.astro:33`, `team.astro:32` |
| Primary CTA button | 4 identical | `recipes.astro:59`, `plans.astro:56`, `team.astro:65`, `health/index.astro:117` |
| Secondary/outline CTA | 4 near-identical | `recipes.astro:62`, `plans.astro:59`, `team.astro:68`, `health/index.astro:120` |
| Card tile | 4 near-identical | `health/index.astro:60,66,72,97`, `foods/index.astro:69` |

Fix: extract `Pill.astro`, `CtaButton.astro` (variant prop), `CardTile.astro` — same low-risk pattern already proven this session with `PublicationGate`/`NotifyMeForm`. Moderate effort.

**Low — scripts/ hygiene.** Of 82 files in `scripts/`, only ~35 are referenced from `package.json`. Concrete cleanup candidates: 1 stale `.bak` file (`negative-capability-scanner.ts.bak`); 12 underscore-prefixed scratch files (`_analyze-hierarchy.ts`, `_migrate-*-content.ts` ×6, `_quick-check{,2}.ts`, `_test-*.ts` ×3); ~8 sets of duplicate/triplicate task scripts across `.cjs`/`.js`/`.ts` (e.g. `convert_locations_to_md.{cjs,js,ts}`); ~10 one-off migration/patch scripts not wired into `package.json`; two stray build-output files checked into git (`generate_location_dryrun.log` at 355KB, `missing-tags.txt`). No runtime risk, but ~half the directory is candidate cruft worth an archive/delete pass.

**Low — misc.** ~40 hardcoded hex values in `Header.astro` (see D3 above, same finding from a design-consistency angle); `'https://nutritioncolours.com'` duplicated as a literal fallback in 4 files instead of one shared constant (`index.astro`, `ApprovedLeafPage.astro`, `SeoHelper.astro`, `BaseLayout.astro` — all correctly prefer `Astro.site` first, so this is fallback-only duplication); `tsconfig.json` excludes `scripts/` from type-checking entirely (scripts run via `tsx`, so no static safety net there); only 4 `any` usages total, 3 of them in the already-dead `directoryUtils.tsx`; zero `TODO`/`FIXME`/`console.log` in `src/` — genuinely clean on that front.

---

## New design suggestions

**1. Extract the three duplicated UI patterns into real components** (`Pill.astro`, `CtaButton.astro`, `CardTile.astro`)
*Rationale:* the visual convention is already consistent across every page (see D5) — this is purely a maintainability/consistency-lock-in move, not a redesign. *Impact:* future color/spacing tweaks apply everywhere at once instead of needing 4-5 file edits each time; closes the gap between D1 (unused design-system CSS) and what pages actually do. *Approach:* mirror exactly how `PublicationGate.astro`/`NotifyMeForm.astro` were built this session — read the existing markup, parameterize the 2-3 things that vary (label, href, color variant), swap call sites.

**2. Resolve the dead-vs-real design system split (D1 + D2) — pick one direction and commit**
*Rationale:* right now there are two competing systems: a formal one in CSS (unused) and an informal one in repeated Tailwind strings (used everywhere). Maintaining both is pure risk. *Impact:* a future contributor who reads `globals.css` and uses `btn-primary` will produce a button that looks nothing like the real site buttons — an active trap. *Approach:* either (a) delete the unused `btn-*`/`card-*`/`badge-*`/`form-input`/`skeleton-card`/`cta-section` classes and the fluid `--space-*`/`--font-size-*` tokens, or (b) adopt them — migrate `CtaButton.astro`/`Pill.astro`/`CardTile.astro` (suggestion 1) to actually use the CSS classes and fluid tokens instead of raw Tailwind utilities. (b) is the more valuable long-term move since the fluid clamp() tokens give genuinely smoother responsive scaling than fixed Tailwind breakpoints, but (a) is the fast, safe option if design bandwidth is limited.

**3. Put the three unused illustration images to work on the Foods/Recipes hubs**
*Rationale:* `apple_illustration.jpg`/`banana_illustration.jpg`/`orange_illustration.jpg` already exist, are on-brand (per file names), and currently just add dead weight to every build. The Foods hub in particular is a dense 12-card grid of icon+label+"under review" — a single optimized illustration as a header accent would break up the wall-of-cards without adding real content risk (it's decorative, not a claim). *Impact:* modernizes the gated-hub pages, which currently read as very text/badge-heavy, at near-zero cost since the assets already exist. *Approach:* resize/compress to WebP (these are currently 600-700KB PNGs-as-JPG at what's almost certainly hero-image dimensions — a properly sized, compressed WebP would likely land under 80KB), add via `astro:assets` `<Image>` for automatic optimization, place as a subtle background/corner accent (similar to the leaf watermark already used on the homepage hero) rather than a literal full-width photo — keeps it decorative, not a stand-in for real food photography the editorial team hasn't shot yet.

**4. Give the `data-page-category` re-theme system a real job, or retire it**
*Rationale:* it's well-built (4 accent-color sets, dark-mode aware, already wired through `BaseLayout`) but only ever fires on one page. A half-used feature is confusing for future maintainers trying to understand "why does this page look different." *Impact:* if extended — e.g. `pageCategory="clinical"` on Health, `"recipe"` on Recipes — it becomes a genuine wayfinding aid (users get a subtle color cue for what kind of content they're in, similar to how many health-education sites color-code condition vs. lifestyle vs. tool content). If retired, it simplifies the token surface. *Approach:* low-effort either way — either add the `pageCategory` prop to 3-4 more `<BaseLayout>` calls (foods, recipes, plans/team/testimonials could share "clinical" or get their own), or delete the four `html[data-page-category=...]` blocks from `designTokens.css`.

**5. Fix the focus-ring/brand-color coupling (also listed as an a11y bug, D-adjacent as a design decision)**
*Rationale:* today the "accessibility color" for keyboard focus is whatever the page's brand accent happens to be (emerald, amber, or blue depending on category) — that's an accident, not a decision. *Impact:* a single, deliberate focus-ring color (e.g. always the emerald brand color, or a dedicated high-contrast token) reads as more intentional and is easier to reason about across the category-theming system. *Approach:* one CSS rule change in `globals.css:685-687`.

**6. Add a lighter Fraunces weight for subheadings**
*Rationale:* only the 900 (black) weight is currently loaded — every `brand-font` heading, at every size from H1 to small section labels, is maximum boldness. Design systems built around a display serif typically pair the black weight for big statements with a lighter weight (500/600) for secondary headings, for more typographic range. *Impact:* purely visual polish — more hierarchy, less "shouting" on pages with many stacked headings (e.g. the circadian-nutrition article, which has 4 H2s at full 900 weight in a row). *Approach:* source one more Fraunces static weight (Google Fonts has 400-900 available), add a second `@font-face` block, introduce a `brand-font-light`/`brand-font-medium` utility class for H2/H3 use where appropriate. Moderate effort, purely additive/non-breaking.

---

## Recommended execution order

**Phase 1 — before any new content ships (do first, blocks nothing else):**
1. Add the `leaf.claims ?? []` / `leaf.sources ?? []` guard (or upstream validation in `compile-approved-leaves.mjs`) — Critical severity, quick-to-moderate effort, and it's a landmine specifically for the moment the publication-gate content starts actually getting approved.
2. Delete confirmed-dead files: the 3,400 lines of orphaned `src/lib` modules, `.DS_Store` files (+ add to `.gitignore`), the 3 unreferenced illustration JPGs *if* Suggestion 3 isn't being picked up (if it is, keep them and route through Suggestion 3 instead), unused font weights. Quick fix, zero risk, immediate repo/build hygiene win.

**Phase 2 — design-system consolidation (do together, they're the same decision):**
3. Pick a direction on D1/D2 (Suggestion 2).
4. Extract `Pill.astro` / `CtaButton.astro` / `CardTile.astro` (Suggestion 1) — do this *after* step 3, since the decision in step 3 determines whether these new components use the CSS utility classes or plain Tailwind.
5. Fix the focus-ring token (Suggestion 5) — small, independent, can happen any time in this phase.

**Phase 3 — polish (no dependencies on Phase 1/2, can run in parallel with them):**
6. Font preload tags (also closes the a11y + performance finding in one edit).
7. Illustration images → Foods/Recipes hub accents (Suggestion 3).
8. Fraunces secondary weight (Suggestion 6).
9. `data-page-category` decision — expand or retire (Suggestion 4).

**Phase 4 — housekeeping (any time, lowest priority):**
10. `scripts/` directory cleanup (archive/delete candidates listed above) — confirm with whoever owns the content pipeline before deleting anything that might still be manually invoked outside `package.json`.
11. `Header.astro` hex-palette consolidation into shared tokens (D3).

Nothing in Phase 3 or 4 blocks Phase 1 or 2 — they can run in any order or in parallel if split across sessions.

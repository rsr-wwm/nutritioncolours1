# NutritionColours — Apply-Ready Diff Spec
**Version 1.0 · 13 September 2026**

Companion to `REMEDIATION_PLAN.md` (§5). Every `Before` block below was copied verbatim from the
working tree. Apply in wave order; run the gate command at the end of each wave before starting
the next. Line numbers reflect the files as of 13 Sep 2026 — re-locate by the quoted code, not by
the number, if the files have moved on.

---

# NutritionColours — Implementation Spec

Read against the staged tree at `/mnt/user-data/uploads/nutritioncolours/`. All line numbers below are what the files actually contain today; where they differ from the audit's numbers I've flagged it inline. One correction up front:

> **Note on file layout:** `public/fonts/` and `public/data/claims-ledger.json` are not present in this staged copy (only `public/410-tombstone.html`, `_headers`, `_redirects`, `manifest.json`, `robots.txt` exist under `public/`). This doesn't invalidate TYPE-01 or FLAG-01 — the CSS/script wiring is verified independently — but I could not personally confirm "5 Inter woff2 files" or the ledger's contents. See the final section.

---

## Wave 1 — safe, isolated, ship immediately

Single-file, additive or narrowly-scoped fixes with no cross-page visual QA required.

### TPL-01 — unguarded `leaf.aliases.length`
**File:** `src/components/leaf/ApprovedLeafPage.astro:77`
**Before:**
```astro
      {leaf.aliases.length > 0 && (
```
**After:**
```astro
      {leaf.aliases && leaf.aliases.length > 0 && (
```
**Why:** Every sibling optional field (`urgentHelp`, `reviewer`, `faqs`) is guarded with `&&`; a compiled leaf record missing `aliases` (TS types aren't enforced against the actual generated JSON at runtime) throws `Cannot read properties of undefined` and fails the whole static build.
**Blast radius:** `ApprovedLeafPage.astro` is the shared template for every `/health/*` and `/foods/*` leaf page — every one of them re-renders through this file.
**Verify:** `npm run build` completes; specifically `astro build` (inside `build:secure`) no longer throws on any leaf whose compiled JSON lacks `aliases`. `grep -n "\.length > 0" src/components/leaf/ApprovedLeafPage.astro` shows this guard now matches the `&&`-prefixed style of the other three.
**Rollback:** revert the one line.
**Risk if done wrong:** none — this only adds a guard; it can't change behavior for well-formed records.

### TPL-02 — Sources section renders with 0 sources
**File:** `src/components/leaf/ApprovedLeafPage.astro:164-186` (heading/`<ol>`) and `:220` (sidebar count)
**Before:**
```astro
        <!-- Sources & Review Section -->
        <section id="sources" aria-labelledby="sources-heading" class="scroll-mt-24 border-t border-stone-200 dark:border-stone-800 pt-10">
          <h2 id="sources-heading" class="text-2xl md:text-3xl font-black text-emerald-950 dark:text-emerald-100 brand-font">Peer-reviewed sources & citations</h2>
          <p class="mt-2 text-sm text-stone-600 dark:text-stone-400">Every health statement on this page is anchored to clinical literature and validated through our immutable claims ledger.</p>

          <ol class="mt-6 space-y-3">
            {leaf.sources.map((source, index) => (
```
**After:**
```astro
        <!-- Sources & Review Section -->
        {leaf.sources.length > 0 && (
        <section id="sources" aria-labelledby="sources-heading" class="scroll-mt-24 border-t border-stone-200 dark:border-stone-800 pt-10">
          <h2 id="sources-heading" class="text-2xl md:text-3xl font-black text-emerald-950 dark:text-emerald-100 brand-font">Peer-reviewed sources & citations</h2>
          <p class="mt-2 text-sm text-stone-600 dark:text-stone-400">Every health statement on this page is anchored to clinical literature and validated through our immutable claims ledger.</p>

          <ol class="mt-6 space-y-3">
            {leaf.sources.map((source, index) => (
```
Close the new conditional right after the existing `</section>` at (current) line 195:
**Before:**
```astro
          </div>
        </section>
      </div>
```
**After:**
```astro
          </div>
        </section>
        )}
      </div>
```
And guard the sidebar count/link, current lines 218-222:
**Before:**
```astro
            <li>
              <a href="#sources" class="block py-1 text-stone-700 dark:text-stone-300 hover:text-emerald-800 dark:hover:text-emerald-400 hover:translate-x-1 transition-all">
                Sources & Citations ({leaf.sources.length})
              </a>
            </li>
```
**After:**
```astro
            {leaf.sources.length > 0 && (
            <li>
              <a href="#sources" class="block py-1 text-stone-700 dark:text-stone-300 hover:text-emerald-800 dark:hover:text-emerald-400 hover:translate-x-1 transition-all">
                Sources & Citations ({leaf.sources.length})
              </a>
            </li>
            )}
```
**Why:** On a YMYL site, a rendered but empty "Sources & Citations (0)" section actively undermines the trust signal the whole page architecture exists to provide.
**Blast radius:** same shared leaf template as TPL-01 — every leaf page with zero sources (if any exist) stops showing the empty block.
**Verify:** `grep -rn "sources.length" src/components/leaf/ApprovedLeafPage.astro` — both the heading block and sidebar `<li>` are now behind a truthy check. Manually confirm on a leaf with `sources: []` (if `leaf:audit` allows one) that the whole section and sidebar link disappear.
**Rollback:** remove the two added conditionals.
**Risk if done wrong:** mismatched `{)}`/`)}` braces breaks the whole page's Astro compile — double-check brace balance after editing.

### FLAG-01 — literal `::claim{#...}::` renders as visible text
**Files:** `src/pages/knowledge/circadian-nutrition.astro:108,142,176` and `src/components/CircadianMealClock.tsx:70`

This is a real, intended machine marker — `scripts/verify-claims-ledger.ts` regex-scans raw `.astro/.tsx/.ts` **source** text (not rendered HTML) for `::claim{#id}::` and fails `npm run enforce:claims` if a referenced id isn't `approved` in `public/data/claims-ledger.json`. It must stay in the source text, but never in rendered/visible markup. The surrounding markup already carries a PubMed link + "Verified Clinical Finding" badge, so the visible "Claim Identifier: …" line is redundant jargon on top of being broken — delete it, keep the marker as a source-only comment.

**Before** (all three, `circadian-nutrition.astro`, e.g. line 108):
```astro
              <div class="text-[11px] text-stone-500 dark:text-stone-400 pt-1 border-t border-emerald-100 dark:border-emerald-900/60 flex items-center justify-between">
                <span>Claim Identifier: {" ::claim{#circadian-insulin}::"}</span>
                <a href="https://pubmed.ncbi.nlm.nih.gov/30472111/" rel="external noopener noreferrer" target="_blank" class="font-semibold text-emerald-700 dark:text-emerald-400 hover:underline">
                  PubMed: 30472111 &rarr;
                </a>
              </div>
```
**After:**
```astro
              <div class="text-[11px] text-stone-500 dark:text-stone-400 pt-1 border-t border-emerald-100 dark:border-emerald-900/60 flex items-center justify-end">
                <a href="https://pubmed.ncbi.nlm.nih.gov/30472111/" rel="external noopener noreferrer" target="_blank" class="font-semibold text-emerald-700 dark:text-emerald-400 hover:underline">
                  PubMed: 30472111 &rarr;
                </a>
              </div>
```
(repeat for the `chrono-metabolism-morning-carb` block at line 142 and `circadian-melatonin-glucose` block at line 176 — same shape, only the id/PMID differ; note `justify-between` → `justify-end` in each since only one child remains).

Add the three markers once, as a JS comment, in the frontmatter (never rendered, regardless of `compressHTML`):
**Before** (top of frontmatter, after line 26):
```astro
};
---
```
**After:**
```astro
};

// Claim ledger anchors for this article's verified-finding cards (scripts/verify-claims-ledger.ts scans this file's raw text):
// ::claim{#circadian-insulin}:: ::claim{#chrono-metabolism-morning-carb}:: ::claim{#circadian-melatonin-glucose}::
---
```

**Before** (`CircadianMealClock.tsx:70`):
```tsx
      <div className="mt-4 flex items-center justify-between border-t border-stone-200 dark:border-stone-700/80 pt-3 text-[11px] text-stone-500 dark:text-stone-400">
        <span>Clinical Trial Anchorage: {" ::claim{#circadian-insulin}::"}</span>
        <span className="font-semibold text-emerald-800 dark:text-emerald-400">Evidence Level 1 · RCT Verified</span>
      </div>
```
**After:**
```tsx
      {/* ::claim{#circadian-insulin}:: */}
      <div className="mt-4 flex items-center justify-between border-t border-stone-200 dark:border-stone-700/80 pt-3 text-[11px] text-stone-500 dark:text-stone-400">
        <span>Clinical Trial Anchorage: PMID 30472111</span>
        <span className="font-semibold text-emerald-800 dark:text-emerald-400">Evidence Level 1 · RCT Verified</span>
      </div>
```
(kept as two children here since the layout already assumes two — no `justify-end` change needed; `{/* */}` is a JSX comment, stripped at compile but present in the raw `.tsx` source the regex reads.)

**Why:** the directive is a build-time ledger key, not user copy; it must be readable by `scripts/verify-claims-ledger.ts` but must never paint on screen.
**Blast radius:** 2 files, 4 occurrences, 1 page (`/knowledge/circadian-nutrition`) plus the `CircadianMealClock` island (also embedded on that same page only, per current imports).
**Verify:** view-source and rendered DOM on `/knowledge/circadian-nutrition` contain no `::claim{`; `npm run enforce:claims` (or `npx tsx scripts/verify-claims-ledger.ts`) still passes because the exact substrings still exist in the `.astro`/`.tsx` files' raw text.
**Rollback:** restore the original spans.
**Risk if done wrong:** if the frontmatter comment is dropped instead of relocated, `enforce:claims` starts failing the whole `npm run build` (it's a prebuild-adjacent gate) — always move, never delete, the `::claim{#id}::` substring.

### HUB-01 — missing `h-full` on health hub cards
**File:** `src/pages/health/index.astro:68`
**Before:**
```astro
                  class="group block rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 shadow-sm hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-md transition-all"
```
**After:**
```astro
                  class="group block h-full rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 shadow-sm hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-md transition-all"
```
**Why:** `src/pages/foods/index.astro:67` has `h-full` on the identical card pattern so cards fill their grid cell evenly; Health's cards are missing it, so a `grid gap-4 sm:grid-cols-2` row with uneven description lengths leaves ragged-bottom cards.
**Blast radius:** `/health` index page only, 1 class token.
**Verify:** open `/health` at a width with 2 columns and compare two adjacent cards of different description length — bottoms should now align; `grep -c "h-full" src/pages/health/index.astro` goes from 0 to 1.
**Rollback:** remove the class.
**Risk if done wrong:** none — worst case is no visual change if a browser cache is stale.

### MEASURE-01 — no `max-w` on the article column
**File:** `src/pages/knowledge/circadian-nutrition.astro:81`
**Before:**
```astro
        <article class="space-y-12 text-stone-700 dark:text-stone-300 leading-relaxed text-base sm:text-lg">
```
**After:**
```astro
        <article class="max-w-[70ch] space-y-12 text-stone-700 dark:text-stone-300 leading-relaxed text-base sm:text-lg">
```
**Why:** the column is `lg:col-span-8` of a 12-col grid inside `max-w-7xl` — at wide desktop widths that's roughly 900-950px of unconstrained line length, well past the ~75ch legibility ceiling for body copy.
**Blast radius:** `/knowledge/circadian-nutrition` only (the only page using this template currently — `[section].astro` is a separate dynamic route, check it separately if it shares this pattern).
**Verify:** at ≥1440px viewport, measure a full text line in the article body — should now cap near 70 characters instead of running to the column edge.
**Rollback:** remove `max-w-[70ch]`.
**Risk if done wrong:** too-aggressive a cap could look cramped inside the already-narrower 8-col grid; 70ch is conservative and sits comfortably inside the existing column width at all breakpoints ≥`lg`.

### PRINT-01 — zero `@media print` rules anywhere
**File:** `src/styles/globals.css` (append at end, after line 655)
**Before:** *(nothing — confirmed zero `@media print` in the whole tree)*
**After:**
```css
@media print {
  .site-header,
  footer,
  .skip-nav,
  [data-theme-toggle],
  nav[aria-label="Article outline"],
  nav[aria-label="Desktop page navigation"],
  aside[aria-label="Article navigation and metadata"] {
    display: none !important;
  }
  body {
    background: #fff !important;
    color: #000 !important;
  }
  a[href^="http"]::after {
    content: " (" attr(href) ")";
    font-size: 0.75em;
  }
  main {
    max-width: 100% !important;
  }
}
```
**Why:** clinical-nutrition readers commonly print or PDF-export article/legal pages for their own records or to bring to a physician; right now they'd print the sticky header, footer, theme toggle and both TOCs.
**Blast radius:** global (`globals.css` loads on every page via `BaseLayout`), but `@media print` is invisible on screen — zero risk to normal browsing.
**Verify:** browser print-preview on `/knowledge/circadian-nutrition` and `/legal/methodology` — header/footer/TOC/theme-toggle are gone, body text is black-on-white.
**Rollback:** delete the added block.
**Risk if done wrong:** the only possible failure mode is an overly broad selector hiding content that should print (e.g. accidentally matching a content section) — the selectors above are scoped to chrome, not content, so this is low-risk.

---

## Wave 2 — system-level, needs one careful pass

Cross-cutting CSS/JS/config changes that affect every page. Apply and visually spot-check light+dark, desktop+mobile, before moving to Wave 3.

### SHELL-01 — `dark:` utilities split from `.dark` class toggling
**File:** `src/styles/globals.css:1-3`
**Before:**
```css
@import "tailwindcss";

@import "./designTokens.css";
```
**After:**
```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@import "./designTokens.css";
```
**Why:** Tailwind v4 has no JS config wiring (no `@config` directive anywhere, confirmed by grep), so `dark:` utilities default to the `prefers-color-scheme` media strategy; `theme.ts` instead toggles a `.dark` class on `<html>`, which only the 34 hand-written `.dark …` selectors (`designTokens.css:88`, `Header.astro:198`, plus ~10 more in `globals.css`) respond to. One `@custom-variant` line makes all ~965 `dark:` utilities key off the same class.
**Blast radius:** every page, every component — this is the single highest-impact line in the whole audit. Once wired, clicking the theme toggle should visibly repaint far more of the page than it does today (previously only the 34 manually-scoped rules moved).
**Verify:** load any page with system preference = light, click the theme toggle to force `.dark` on `<html>` via devtools, and confirm Tailwind `dark:bg-*`/`dark:text-*` utility classes now flip (e.g. inspect `ApprovedLeafPage.astro`'s `dark:bg-stone-900` cards). Also confirm `document.documentElement.classList.contains('dark')` toggling in the console immediately repaints `dark:` utilities without a reload.
**Rollback:** delete the `@custom-variant` line — utilities revert to `prefers-color-scheme`-only (the current, broken-but-shipped behavior).
**Risk if done wrong:** wrong selector syntax (e.g. omitting `.dark *`) breaks dark mode for nested elements while the root element itself still appears to work — test on a deeply nested card, not just top-level text.

### TOK-04 — `tailwind.config.mjs` is dead
**File:** `tailwind.config.mjs` (delete), verified via `grep -rln "tailwind.config" .` → zero hits, and no `@config` directive in any `.css` file.
**Before:** file exists, defines a `brand` color scale (identical values already present in `globals.css:65-75` under `@theme`) and `darkMode: 'class'` (moot in v4 without wiring).
**After:** file deleted.
**Why:** it is not imported by `astro.config.mjs` (which only registers `@tailwindcss/vite`, no PostCSS/config path), not referenced by any `@config` directive, and its one substantive setting (`darkMode:'class'`) is superseded by the `@custom-variant dark` line added in SHELL-01. Deleting removes a config file that silently lies about how dark mode works.
**Blast radius:** none functionally — it was never read. Removes one source of confusion for future contributors.
**Verify:** `npm run build` succeeds with the file gone; `git rm tailwind.config.mjs` then rebuild.
**Rollback:** restore from git history.
**Risk if done wrong:** apply this only after SHELL-01 lands, so nobody mistakes the dead `darkMode:'class'` for the actual fix.

### SHELL-02 — theme script runs after first paint (FOUC)
**File:** `src/layouts/BaseLayout.astro:125` (and `src/components/ui/Header.astro:103,114` for the aria-pressed defaults)
**Before** (`BaseLayout.astro`, around the existing `<style is:global>` block, ending at line 123, followed by line 125):
```astro
    </style>

    <script src="../scripts/theme.ts"></script>
  </head>
```
**After:**
```astro
    </style>

    <script is:inline>
      (function () {
        try {
          var saved = localStorage.getItem('nc-theme');
          var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (saved === 'dark' || (!saved && prefersDark)) {
            document.documentElement.classList.add('dark');
          }
        } catch (e) {}
      })();
    </script>
    <script src="../scripts/theme.ts"></script>
  </head>
```
Move this `<script is:inline>` block to be the **first** child of `<head>` — ahead of `<meta charset>` is invalid HTML, so place it immediately after `<meta name="viewport">` and before `<SeoHelper .../>`, so it executes (and blocks the parser) before any stylesheet is parsed:
**Before** (top of `<head>`, lines 80-84):
```astro
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <SeoHelper title={title} description={description} keywords={keywords} canonicalUrl={canonicalUrl} ogImage={resolvedOgImage} aiSummary={aiSummary} geoRegion={geoRegion} geoPlacename={geoPlacename} disease={disease} schemas={schemas} noindex={noindex} ogType={ogType} breadcrumbs={breadcrumbs} />
```
**After:**
```astro
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <script is:inline>
      (function () {
        try {
          var saved = localStorage.getItem('nc-theme');
          var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (saved === 'dark' || (!saved && prefersDark)) {
            document.documentElement.classList.add('dark');
          }
        } catch (e) {}
      })();
    </script>

    <SeoHelper title={title} description={description} keywords={keywords} canonicalUrl={canonicalUrl} ogImage={resolvedOgImage} aiSummary={aiSummary} geoRegion={geoRegion} geoPlacename={geoPlacename} disease={disease} schemas={schemas} noindex={noindex} ogType={ogType} breadcrumbs={breadcrumbs} />
```
(and remove the duplicate inline block you'd otherwise leave near the old `<script src="../scripts/theme.ts">` — keep only the deferred `theme.ts` include at its original spot, line 125, unchanged; it still owns the click-listener and the `aria-pressed`/`aria-label` sync once the buttons exist in the DOM.)

For the toggle buttons, add an explicit default so screen readers get a defined value even before `theme.ts` runs:
**Before** (`Header.astro:103` and `:114`):
```astro
        <button type="button" class="theme-toggle" data-theme-toggle aria-label="Toggle theme" title="Toggle theme">
```
```astro
        <button type="button" class="theme-toggle theme-toggle--mobile" data-theme-toggle aria-label="Toggle theme" title="Toggle theme">
```
**After** (both):
```astro
        <button type="button" class="theme-toggle" data-theme-toggle aria-pressed="false" aria-label="Toggle theme" title="Toggle theme">
```
```astro
        <button type="button" class="theme-toggle theme-toggle--mobile" data-theme-toggle aria-pressed="false" aria-label="Toggle theme" title="Toggle theme">
```
**Why:** `<script src="../scripts/theme.ts">` is compiled/bundled by Astro as an ES module and executes only after HTML parsing — the browser paints the light-theme background first, then flips to dark a frame later for dark-mode visitors. An `is:inline` script placed before any stylesheet parses blocks the parser and sets the class pre-paint, eliminating the flash. `theme.ts` itself is untouched and still attaches the click handler and corrects `aria-pressed`/`aria-label` once the buttons mount; the markup default of `aria-pressed="false"` just means assistive tech never reads an undefined state in the (rare) window before that script runs.
**Blast radius:** every page (`BaseLayout` is universal) + both theme-toggle buttons in `Header.astro`.
**Verify:** with OS/browser set to dark and no `nc-theme` in localStorage, hard-reload any page with the browser's rendering/paint timeline open (or just watch closely) — no light-background flash before dark paints. `document.documentElement.className` is `"dark"` at `readystatechange: interactive`, not just after `DOMContentLoaded`.
**Rollback:** remove the inline script and the two `aria-pressed="false"` attributes, restore original head order.
**Risk if done wrong:** placing the inline script after any `<link rel="stylesheet">`/global `<style>` reintroduces the flash (parser-blocking inline scripts only help if they run before the CSS that reads `.dark` is applied) — it must be the very first thing after the two required `<meta>` tags.

### DS-02 — `data-page-category` never set
**Files:** `src/layouts/BaseLayout.astro` (Props + `<html>` tag), `src/components/leaf/ApprovedLeafPage.astro`, `src/pages/knowledge/circadian-nutrition.astro`
**Before** (`BaseLayout.astro:9-25` interface, `:27-41` destructure, `:79` tag):
```astro
interface Props {
  title?: string;
  description?: string;
  keywords?: string[]; // hybrid support


  canonicalUrl?: string;
  ogImage?: string;
  aiSummary?: string;
  geoRegion?: string;
  geoPlacename?: string;
  disease?: string;
  schemas?: any[];
  noindex?: boolean;
  ogType?: 'website' | 'article';
  breadcrumbs?: Array<{ name: string; path: string }>;
}
```
```astro
const {
  title = "NutritionColours — Food and nutrition education",
  ...
  breadcrumbs,
} = Astro.props;
```
```astro
<html lang="en">
```
**After:**
```astro
interface Props {
  title?: string;
  description?: string;
  keywords?: string[]; // hybrid support


  canonicalUrl?: string;
  ogImage?: string;
  aiSummary?: string;
  geoRegion?: string;
  geoPlacename?: string;
  disease?: string;
  schemas?: any[];
  noindex?: boolean;
  ogType?: 'website' | 'article';
  breadcrumbs?: Array<{ name: string; path: string }>;
  pageCategory?: 'clinical' | 'knowledge' | 'recipe' | 'tool';
}
```
```astro
const {
  title = "NutritionColours — Food and nutrition education",
  ...
  breadcrumbs,
  pageCategory,
} = Astro.props;
```
```astro
<html lang="en" data-page-category={pageCategory}>
```
Thread it from the two templates that actually have a determinable category today:
**Before** (`ApprovedLeafPage.astro:57`):
```astro
<BaseLayout title={leaf.seoTitle} description={leaf.metaDescription} canonicalUrl={leaf.canonicalPath} aiSummary={leaf.content.directAnswer.text} schemas={[pageSchema]} ogType="article" breadcrumbs={breadcrumbs}>
```
**After:**
```astro
<BaseLayout title={leaf.seoTitle} description={leaf.metaDescription} canonicalUrl={leaf.canonicalPath} aiSummary={leaf.content.directAnswer.text} schemas={[pageSchema]} ogType="article" breadcrumbs={breadcrumbs} pageCategory={leaf.pageKind === 'health' ? 'clinical' : undefined}>
```
**Before** (`circadian-nutrition.astro:29-34`):
```astro
<BaseLayout
  title={pageTitle}
  description={pageDescription}
  canonicalUrl="/knowledge/circadian-nutrition"
  schemas={[articleSchema]}
>
```
**After:**
```astro
<BaseLayout
  title={pageTitle}
  description={pageDescription}
  canonicalUrl="/knowledge/circadian-nutrition"
  schemas={[articleSchema]}
  pageCategory="knowledge"
>
```
**Why:** `designTokens.css:63-85` defines 4 branded palettes keyed on `html[data-page-category="…"]` (clinical/knowledge/recipe/tool) that currently never activate — every page silently uses the root emerald default regardless of section.
**Blast radius:** `BaseLayout.astro` (universal), `ApprovedLeafPage.astro` (all `/health/*` leaf pages — food leafs deliberately pass `undefined` since no "food" palette exists in `designTokens.css`; that's a scope decision, not a bug, call it out to product/design), and `circadian-nutrition.astro`. `recipe`/`tool` are **not wired to any page** in this pass: `src/pages/recipe/[recipe_id].astro`'s `getStaticPaths()` returns `[]` (no recipes are actually published yet) and no "tool"-kind page exists in `src/pages/services/` — wiring those categories now would be dead code with nothing to visually verify against.
**Verify:** `curl -s https://.../health/<any-leaf> | grep data-page-category` → `data-page-category="clinical"`; same for `/knowledge/circadian-nutrition` → `"knowledge"`; a `/foods/<leaf>` page has no `data-page-category` attribute at all (Astro omits the attr when the value is `undefined`).
**Rollback:** revert the 4 edits; the attribute and its CSS become dormant again (no visual regression either way since the root `:root` values were already the effective default).
**Risk if done wrong:** passing a literal `"undefined"` string instead of the JS value `undefined` would render `data-page-category="undefined"` and match nothing in `designTokens.css` — confirm Astro's prop interpolation, don't stringify it yourself.

### A11Y-01 — two focus-ring styles, undersized tap targets
**Files:** `src/components/ui/Header.astro:620-623`, `src/styles/globals.css:652-655`, `src/layouts/Footer.astro:19,30,41`, `src/components/ui/Header.astro:281-282`
**Before** (`Header.astro:620-623`):
```css
  :is(a, summary):focus-visible {
    outline: 3px solid #d97706;
    outline-offset: 3px;
  }
```
**After:**
```css
  :is(a, summary):focus-visible {
    outline: 2px solid var(--brand-primary, #059669);
    outline-offset: 2px;
  }
```
**Why:** `globals.css:652-655`'s global `:focus-visible { outline: 2px solid var(--brand-primary); outline-offset: 2px; }` is the site-wide standard; `Header.astro`'s scoped `<style>` overrides it to a 3px amber ring for every link/summary inside the header only, so keyboard users see the ring change color and width the moment focus crosses the header boundary.
**Blast radius:** header nav links, disclosure `<summary>`s, mobile menu — visually consistent focus ring site-wide afterward.
**Verify:** Tab through the header and then into page body content — ring color/width should now be identical throughout (`grep -n "focus-visible" src/components/ui/Header.astro src/styles/globals.css` shows one color).

**Before** (`Header.astro:277-282`):
```css
  .theme-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.35rem;
    height: 2.35rem;
```
**After:**
```css
  .theme-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.75rem;
    height: 2.75rem;
```
**Why:** 2.35rem = 37.6px is below the 44×44px (2.75rem) WCAG 2.5.5/2.5.8 minimum target size; every other interactive control in this header (`.nav-link`, `.mobile-menu > summary`, `.mobile-primary a`) is already `min-height: 2.75rem`.
**Verify:** measure the rendered button box in devtools — 44×44px in both the desktop and `--mobile` variants.

**Before** (`Footer.astro:19-25`, pattern repeats at `:30-36` and `:41-47`):
```astro
      <ul class="space-y-2 text-xs">
        <li><a class="hover:text-white transition-colors" href="/health">Health library</a></li>
```
**After:**
```astro
      <ul class="space-y-1">
        <li><a class="block py-1.5 text-xs hover:text-white transition-colors" href="/health">Health library</a></li>
```
(apply the same `class="block py-1.5 text-xs hover:text-white transition-colors"` shape to every `<a>` in all three `<ul>` blocks at lines 19-25, 30-36, 41-47, and drop the `text-xs` that's currently on the `<ul>` since it now lives on each `<a>`.)
**Why:** the `<a>` itself has no padding, so its actual hit area is just the ~12px text line box inside an 8px (`space-y-2`) gap — well under any accessible tap-target size. Adding `block py-1.5` gives each link its own ~34-38px padded hit box without changing the visual list density much (the `space-y-2`→`space-y-1` compensates so the list doesn't grow taller than necessary).
**Blast radius:** all 3 footer `<nav>` link lists, every page (footer is universal via `BaseLayout`).
**Verify:** devtools box model on a footer link — height ≥ 32px (still short of the ideal 44px, given the space this footer column has, so recommend follow-up if 44px is a hard requirement); visually the footer should look nearly identical, just with more clickable padding.
**Rollback:** revert each of the 6 edits.
**Risk if done wrong:** raising row height too much can push the 4-column grid footer noticeably taller — verify at `sm:grid-cols-2`/`lg:grid-cols-4` breakpoints before shipping.

### SCROLL-01 — smooth scroll with no global `scroll-padding-top`
**File:** `src/styles/globals.css:615-617`
**Before:**
```css
html {
  scroll-behavior: smooth;
}
```
**After:**
```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 5.5rem;
}
```
**Why:** the sticky header is `min-height: 4.75rem` (mobile) to `5.2rem` (`≥64rem`); anchor targets that already carry `scroll-mt-24` (many `<section>`s in `ApprovedLeafPage.astro` and `circadian-nutrition.astro`) are already safely clear of the header, but any anchor **without** a local `scroll-mt-*` — notably `#main-content` (the `Footer.astro:60` "Back to top" link and the `.skip-nav` skip link both target it, and it carries no scroll-margin) — currently lands underneath the sticky header.
**Blast radius:** global (every anchor jump on every page). **Trade-off to note explicitly:** `scroll-padding-top` (on the scroll container) and `scroll-margin-top`/`scroll-mt-*` (on the target) are additive per the CSS spec — sections that already have `scroll-mt-24` (96px) will now land with ~96px + 88px ≈ 184px of clearance instead of 96px. That's extra whitespace above the heading, not a bug, but worth a visual pass on `/knowledge/circadian-nutrition` and any leaf page. A follow-up (Wave 3 candidate, not required here) would remove the now-redundant `scroll-mt-24` utilities in favor of this single global value.
**Verify:** click "Skip to main content" and Footer's "Back to top" on a long page — content is no longer hidden under the header. Then check a TOC link (e.g. `#meal-timing-windows`) — heading is still fully visible, just with more headroom than before.
**Rollback:** remove the `scroll-padding-top` line.
**Risk if done wrong:** too large a value pushes already-correct sections too far down, hiding the previous section's tail; 5.5rem (88px) is chosen to just clear the ≥64rem header height (5.2rem) with a small margin.

### MOTION-01 — `prefers-reduced-motion` only covers 2 of many animated elements
**File:** `src/styles/globals.css` (add after the `html { scroll-behavior }` block, e.g. after line 617)
**Before:** *(no blanket rule exists — only `Header.astro:783-788` transitions/scroll-behavior, and `animations.css:9-14` for `.parallax-layer`)*
**After:**
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
**Why:** `Header.astro:783-788`'s existing rule only sets `transition-duration` and `scroll-behavior`; it does nothing for `animation`-based effects — the `shimmer` keyframe (`globals.css:528-555`, `.btn-shimmer`), the two `pulse-skeleton` keyframes (`:566-585`), and any Tailwind `animate-pulse`/`animate-spin` utility (e.g. the `CircadianMealClock` phase dot) keep animating regardless of the OS setting.
**Blast radius:** global — every animated utility/keyframe on every page respects the OS reduced-motion setting after this lands.
**Verify:** enable "Reduce motion" in OS accessibility settings, reload `/knowledge/circadian-nutrition` — the phase-dot pulse and any shimmer/skeleton animation should freeze instead of looping; DevTools → Rendering → "Emulate CSS media feature prefers-reduced-motion: reduce" gives the same test without touching OS settings.
**Rollback:** delete the added block; `Header.astro:783` and `animations.css:9` continue to provide partial coverage as before.
**Risk if done wrong:** none — this is strictly additive and only activates under an explicit user OS preference.

### TYPE-01 — `Fraunces` never actually loaded
**File:** `src/styles/globals.css:39-51` (add real `@font-face`s) + `src/layouts/BaseLayout.astro` head (add preload)
**Before** (`globals.css:39-46`, the fallback-only state):
```css
@font-face {
  font-family: "Fraunces Fallback";
  src: local("Georgia"), local("Times New Roman"), local("serif");
  ascent-override: 104%;
  descent-override: 30%;
  line-gap-override: 0%;
  size-adjust: 100%;
}
```
**After** (insert two new `@font-face` blocks directly above this one, matching the Inter block's shape at `:5-27` exactly — `src` + `format("woff2")` + `font-style` + `font-weight` + `font-display: swap`):
```css
@font-face {
  font-family: "Fraunces";
  src: url("/fonts/fraunces-latin-variable-normal.woff2") format("woff2");
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
}

@font-face {
  font-family: "Fraunces";
  src: url("/fonts/fraunces-latin-variable-italic.woff2") format("woff2");
  font-style: italic;
  font-weight: 100 900;
  font-display: swap;
}

@font-face {
  font-family: "Fraunces Fallback";
  src: local("Georgia"), local("Times New Roman"), local("serif");
  ascent-override: 104%;
  descent-override: 30%;
  line-gap-override: 0%;
  size-adjust: 100%;
}
```
**Why the axes/weights above and not static per-weight files like Inter:** `globals.css:105`'s `.brand-font { font-variation-settings: 'opsz' 40, 'wght' 900; }` only has any effect on a **variable** font file — a static-weight file (Inter's pattern) silently ignores `font-variation-settings`. `Header.astro:601`'s `.mobile-note` also sets `font-style: italic` against `var(--font-display, …)`, so an italic file is required too, not just normal. Two self-hosted variable woff2s (normal + italic, full `wght` axis) is the minimum that makes the existing CSS do what it already claims to do; a static-weight-bucket approach matching Inter exactly would silently break `.brand-font`'s intended optical-size/weight blend.

Preload the normal weight (used for every above-the-fold `<h1 class="brand-font">`):
**Before** (`BaseLayout.astro`, immediately before `<SeoHelper .../>`, once the SHELL-02 inline script is added ahead of it):
```astro
    <SeoHelper title={title} ... />
```
**After:**
```astro
    <link rel="preload" href="/fonts/fraunces-latin-variable-normal.woff2" as="font" type="font/woff2" crossorigin />
    <SeoHelper title={title} ... />
```
**Blast radius:** every `brand-font`/heading element site-wide (67 usages found) currently silently renders in the "Fraunces Fallback" metric-matched Georgia/serif substitute; after this, real Fraunces loads. Depends on the actual font binaries existing at `public/fonts/fraunces-latin-variable-{normal,italic}.woff2` (source them from Google Fonts' variable Fraunces release, OFL-licensed) — **this spec assumes those files will be added; it cannot itself supply binary font assets.**
**Verify:** DevTools → Network → Font, confirm both `.woff2` requests succeed (200) and the computed `font-family` on an `h1.brand-font` resolves to `Fraunces`, not the Georgia fallback; Lighthouse/CLS should stay ~0 given the pre-existing "Fraunces Fallback" metric override remains in place as the `font-display: swap` interim face.
**Rollback:** remove the two `@font-face` blocks and the preload link — headings fall back to the metric-matched Georgia substitute exactly as today.
**Risk if done wrong:** wrong `ascent/descent-override` on the fallback (unchanged here) vs. the real font's actual metrics can reintroduce layout shift on swap — if the sourced Fraunces variable file's metrics differ meaningfully from Georgia, re-derive the override percentages with a metrics tool (e.g. `fontkit`) rather than assuming the existing fallback numbers still fit.

### CIRC-02 — TOC after article on mobile; claim rows clip at 360px
**File:** `src/pages/knowledge/circadian-nutrition.astro:73,202` (grid order) and `:107,141,175` (claim row wrap)
**Before** (line 73, opening the grid, and line 202, the aside):
```astro
    <div class="grid gap-12 lg:grid-cols-12 lg:items-start">
      <!-- Main Content Column (8 cols) -->
      <div class="lg:col-span-8 space-y-10">
```
```astro
      <!-- Sticky Sidebar (4 cols on Desktop) -->
      <aside class="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
```
**After:**
```astro
    <div class="grid gap-12 lg:grid-cols-12 lg:items-start">
      <!-- Main Content Column (8 cols) -->
      <div class="order-2 lg:order-1 lg:col-span-8 space-y-10">
```
```astro
      <!-- Sticky Sidebar (4 cols on Desktop) -->
      <aside class="order-1 lg:order-2 lg:col-span-4 lg:sticky lg:top-24 space-y-6">
```
**Why:** on mobile (`<lg`), the grid collapses to a single column and DOM order becomes visual order — the TOC/sidebar, as the second child, renders below the entire ~2,000-word article instead of acting as an in-page jump menu at the top where a mobile reader would actually use it. `order-2 lg:order-1` / `order-1 lg:order-2` keeps desktop's existing left-main/right-sidebar layout untouched (`lg:` still wins) while putting the TOC first on mobile.

For the claim rows (lines 107, 141, 175 — same shape 3×):
**Before:**
```astro
              <div class="text-[11px] text-stone-500 dark:text-stone-400 pt-1 border-t border-emerald-100 dark:border-emerald-900/60 flex items-center justify-between">
```
*(this is the same div FLAG-01 already edits to `justify-end` — apply `flex-wrap` in the same edit pass:)*
**After:**
```astro
              <div class="text-[11px] text-stone-500 dark:text-stone-400 pt-1 border-t border-emerald-100 dark:border-emerald-900/60 flex flex-wrap items-center justify-end">
```
**Why:** without `flex-wrap`, a `flex` row with a (post-FLAG-01) single PubMed link is no longer at risk, but apply `flex-wrap` defensively anyway since these cards are reused as a pattern — a `flex` row of two items (as it was pre-FLAG-01, or in any future edit that re-adds a left label) clips or overflows at 360px without it.
**Blast radius:** `/knowledge/circadian-nutrition` only.
**Verify:** resize to 360px width (iPhone SE) — TOC card should appear immediately after the article header/meta strip, before the body sections; claim-card footer rows should wrap instead of clipping. At `≥1024px`, layout must look pixel-identical to before (sidebar still right, sticky).
**Rollback:** remove the four `order-*` classes and the `flex-wrap` classes.
**Risk if done wrong:** forgetting the `lg:` prefix on the reset (`lg:order-1`/`lg:order-2`) would break desktop's left/right layout — always pair mobile-order with an explicit desktop-order override.

### TOK-01 — three off-white surface values
**Files:** `src/layouts/BaseLayout.astro:127`, `src/styles/designTokens.css:9`, `src/components/ui/Header.astro:180`
**Before** (`BaseLayout.astro:127`):
```astro
  <body class="bg-[#FAF9F6] dark:bg-[#022c22] text-[#0c1a16] dark:text-[#ecfdf5] selection:bg-emerald-800 selection:text-white font-sans transition-colors duration-300" data-page-title={title}>
```
**After:**
```astro
  <body class="bg-[#f5f5f4] dark:bg-[#022c22] text-[#0c1a16] dark:text-[#ecfdf5] selection:bg-emerald-800 selection:text-white font-sans transition-colors duration-300" data-page-title={title}>
```
**Before** (`Header.astro:180`, inside `.site-header`):
```css
    --paper: #faf8f2;
```
**After:**
```css
    --paper: #f5f5f4;
```
(`designTokens.css:9`'s `--surface-base: #f5f5f4;` is treated as the canonical value here — it already feeds `bg-canvas`/`--color-surface-base` used across most components — the other two are conformed to it.)
**Why:** three near-identical off-whites for what's meant to be a single "page background" surface creates a visible seam where the header (`#faf8f2`) meets the body (`#FAF9F6`) meets any element using the Tailwind theme token (`#f5f5f4`) — most noticeable in bright daylight/high-contrast monitors as a faint horizontal line under the sticky header.
**Blast radius:** every page (body bg + header bg, both universal via `BaseLayout`/`Header.astro`).
**Verify:** sample the pixel color directly above and below the header boundary in a screenshot tool — should be identical hex now; `grep -n "faf8f2\|FAF9F6" src/components/ui/Header.astro src/layouts/BaseLayout.astro` returns nothing.
**Rollback:** revert both hex values.
**Risk if done wrong:** none visually significant — these three values are already within a few RGB units of each other; this is a polish fix, not a functional one.

### TOK-03 — duplicate `--shadow-*` tokens with different values
**Files:** `src/styles/designTokens.css:44-47`, `src/styles/globals.css:97-99`
**Before** (`designTokens.css:44-47`):
```css
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
```
**Before** (`globals.css:97-99`, inside `@theme`):
```css
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 10px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.08);
```
**After:** keep `globals.css`'s `@theme` values (they generate Tailwind's `shadow-*` utility classes, so they're load-bearing for utility usage across the codebase) and make `designTokens.css`'s plain custom properties (used by hand-authored CSS like `.card-premium`, `.cta-section`, `skip-nav`) reference the same values instead of re-declaring them:
```css
  /* Elevation & Shadows (canonical values live in globals.css's @theme; keep both names pointed at one source) */
```
Practically: delete the three lines from `designTokens.css:44-47` and have `.dark`, `.card-premium`, etc. (already inside `globals.css`) continue to use `var(--shadow-sm)`/`var(--shadow-md)`/`var(--shadow-lg)`, which now resolve solely from `@theme`'s definitions since `globals.css` (which imports `designTokens.css` at its own line 3) loads its `@theme` block *after* the import, so the later declaration in the same cascade layer wins today anyway — removing the earlier, shadowed one removes the ambiguity for anyone reading the file.
**Why:** two different visual "elevation" scales exist under the same custom-property names; `designTokens.css`'s values are currently dead (overridden by the later `@theme` declaration in `globals.css`), which isn't obvious from reading either file in isolation and invites a future edit to the "wrong" one with no visible effect.
**Blast radius:** any hand-authored CSS relying on `var(--shadow-sm|md|lg)` (`.card-premium`, `.card-standard`, `.cta-section`, `.skip-nav`, `.skeleton-card`) — all continue to resolve to the `globals.css` values, unchanged in practice.
**Verify:** `grep -n "shadow-sm\|shadow-md\|shadow-lg" src/styles/designTokens.css` returns nothing after the edit; visually diff any card using `.card-premium`/`.skeleton-card` before/after — no change expected since the `@theme` value was already winning.
**Rollback:** restore the three lines to `designTokens.css`.
**Risk if done wrong:** if Astro/Vite's CSS layer ordering differs from plain cascade order in some build path (e.g. `@layer` boundaries interacting with `@import`), removing the `designTokens.css` copy could theoretically change which value wins — do a visual diff of a `.card-premium` shadow before/after in both dev and a production build, not just dev server.

---

## Wave 3 — refactors touching many files or requiring new shared structure

### DEAD-01 — orphaned `Header.tsx`/`Logo.tsx`/`Icons.tsx`, but port the a11y pattern first
**Files confirmed dead via repo-wide grep** (`grep -rn "ui/Header\|ui/Logo\|ui/Icons"` across all `.astro/.tsx/.ts`):
- `src/components/ui/Header.tsx` — zero imports anywhere. (`BaseLayout.astro:2` imports `../components/ui/Header.astro`, a *different* file — not this one.)
- `src/components/ui/Logo.tsx` — imported only by `Header.tsx` (itself dead) → transitively dead.
- `src/components/ui/Icons.tsx` — imported only by `Header.tsx` → transitively dead, and duplicates `src/components/Icons.astro` (which **is** live, imported by `src/pages/index.astro:4`) — same icon set, same SVG paths, two implementations.
- Also found, not in the original finding list but same dead chain: `src/components/CompatLink.tsx` is imported only by `Header.tsx` and by itself — also orphaned once `Header.tsx` is removed. Flagging for the engineer's judgment; not adding as a new numbered finding since it's a direct consequence of DEAD-01, not a new independent defect.

**Before deleting**, port `Header.tsx`'s mobile-menu accessibility pattern into the live `src/components/ui/Header.astro`'s `<details class="mobile-menu">` (lines 123-172), which today has none of it:
```tsx
// Header.tsx — the pattern to port:
const [open, setOpen] = useState(false);
const closeButton = useRef<HTMLButtonElement>(null);
useEffect(() => {
  if (!open) return;
  closeButton.current?.focus();
  const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
  document.addEventListener('keydown', onKeyDown);
  return () => document.removeEventListener('keydown', onKeyDown);
}, [open]);
// ...
<div id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Site navigation" ...>
```
**Why this must happen first:** `Header.astro`'s live mobile menu is a bare `<details><summary>Menu</summary><div class="mobile-panel">…</div></details>` — no `role="dialog"`, no `aria-modal`, no focus management on open, no Escape-to-close. `Header.tsx` (dead code) has the correct pattern sitting unused. Deleting it without porting the pattern first destroys the only reference implementation in the codebase.
**Concrete port, since `Header.astro` is static (no React state):** add a small inline `<script>` in `Header.astro` that listens for the `<details class="mobile-menu">`'s native `toggle` event, and on open: sets `role="dialog"` + `aria-modal="true"` on `.mobile-panel`, moves focus to the first focusable element inside it (or a new close button you add to the summary), and adds a `keydown` listener for `Escape` that closes the `<details>` (`element.open = false`) and returns focus to the `<summary>`. This is a genuinely new script + markup change to `Header.astro`, not a drop-in copy of the React version — hence Wave 3, not Wave 1.
**Blast radius:** `Header.astro`'s mobile menu, universal (every page, every viewport <64rem). Then delete `Header.tsx`, `Logo.tsx`, `Icons.tsx` (and, at the engineer's discretion after separately confirming it, `CompatLink.tsx`).
**Verify:** `grep -rn "ui/Header'\|ui/Header\"\|ui/Logo\|ui/Icons\|CompatLink" src --include=*.astro --include=*.tsx --include=*.ts` returns nothing after deletion; keyboard-only walkthrough of the mobile menu on a <64rem viewport: Tab to "Menu", Enter/Space opens it, focus lands inside the panel, Escape closes and returns focus to the "Menu" trigger.
**Rollback:** restore the three (four) files from git; revert the `Header.astro` script/markup addition.
**Risk if done wrong:** deleting the files without first porting the pattern is the actual audit-flagged risk — it silently removes the only a11y-correct mobile nav reference from the codebase with no working replacement.

### TOC-01 — duplicated TOC markup (mobile block + desktop sidebar block)
**File:** `src/components/leaf/ApprovedLeafPage.astro:110-121` (mobile "On this page" nav) and `:199-224` (desktop sticky sidebar nav) — both iterate `leaf.content.sections`/`faqs`/`sources` independently with separate JSX.
**Why Wave 3:** collapsing these into one source (e.g. a shared `tocItems` array computed once in frontmatter, rendered twice via two different wrapper markups — mobile `<nav class="lg:hidden">` vs. desktop `<nav class="hidden lg:block">`, since they need different DOM/CSS shells, not literally the same markup) is a genuine refactor of the shared leaf template that every `/health/*` and `/foods/*` page depends on. Recommended approach: compute once —
```astro
const tocItems = [
  ...leaf.content.sections.map((s) => ({ href: `#${s.id}`, label: s.heading })),
  ...(leaf.content.faqs?.length ? [{ href: '#questions', label: 'Questions people ask' }] : []),
  ...(leaf.sources.length > 0 ? [{ href: '#sources', label: `Sources and review` }] : []),
];
```
— then `{tocItems.map(...)}` in both the mobile `<ul>` and the desktop `<ul>`, with each block keeping its own wrapper classes/hover styles.
**Blast radius:** every leaf page (same template as TPL-01/TPL-02) — must be re-tested against both the mobile nav (`lg:hidden`) and desktop sidebar (`hidden lg:block`) breakpoints, and against the TPL-02 fix above (sources conditionally present).
**Verify:** visually diff both TOC renderings before/after on a page with FAQs and one without; `grep -c "leaf.content.sections.map" src/components/leaf/ApprovedLeafPage.astro` drops from 2 to 1 (only the section-body render loop remains a distinct map; the two TOC lists now read from `tocItems`).
**Rollback:** revert to the two independent blocks.
**Risk if done wrong:** must apply this after TPL-02 (the sources guard) lands, or the new `tocItems` computation for the "Sources and review" entry needs its own duplicate `leaf.sources.length > 0` check anyway — do TPL-02 first, then fold its condition into this refactor.

### LEGAL-01 — `legalTabs` copy-pasted into all 4 legal pages; `methodology.astro` has no "Last updated" line
**Files:** `src/pages/legal/{editorial-policy,methodology,privacy,terms}.astro`
**Before** (identical in all 4, e.g. `methodology.astro:4-9,32-47`):
```astro
const legalTabs = [
  { href: '/legal/editorial-policy', label: 'Editorial policy' },
  { href: '/legal/methodology', label: 'Methodology' },
  { href: '/legal/privacy', label: 'Privacy notice' },
  { href: '/legal/terms', label: 'Terms of use' },
];
```
```astro
    <!-- Legal Sub-Navigation Tabs -->
    <nav aria-label="Legal policies navigation" class="mt-8 flex flex-wrap gap-2 border-b border-stone-200 dark:border-stone-800 pb-4">
      {legalTabs.map((tab) => (
        <a href={tab.href} class:list={[...]} aria-current={tab.href === '/legal/methodology' ? 'page' : undefined}>
          {tab.label}
        </a>
      ))}
    </nav>
```
**After:** extract to a new shared component, e.g. `src/components/legal/LegalTabs.astro`:
```astro
---
interface Props { current: string }
const { current } = Astro.props;
const legalTabs = [
  { href: '/legal/editorial-policy', label: 'Editorial policy' },
  { href: '/legal/methodology', label: 'Methodology' },
  { href: '/legal/privacy', label: 'Privacy notice' },
  { href: '/legal/terms', label: 'Terms of use' },
];
---
<nav aria-label="Legal policies navigation" class="mt-8 flex flex-wrap gap-2 border-b border-stone-200 dark:border-stone-800 pb-4">
  {legalTabs.map((tab) => (
    <a href={tab.href} class:list={['rounded-xl px-4 py-2 text-sm font-bold transition-colors', tab.href === current ? 'bg-emerald-900 text-white dark:bg-emerald-700' : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-emerald-900 dark:hover:text-emerald-300']} aria-current={tab.href === current ? 'page' : undefined}>
    {tab.label}
    </a>
  ))}
</nav>
```
…and in each of the 4 pages, replace the `const legalTabs = [...]` block and the inline `<nav>...</nav>` with `import LegalTabs from '../../components/legal/LegalTabs.astro';` + `<LegalTabs current="/legal/methodology" />` (swap the `current` value per page).
Then add the missing line to `methodology.astro`, matching the pattern at `editorial-policy.astro:59`/`privacy.astro:59`/`terms.astro:59`:
**Before** (`methodology.astro`, no such line exists near the h1/intro, e.g. after line 60):
```astro
    <h1 class="mt-4 text-4xl md:text-5xl font-black text-emerald-950 dark:text-emerald-50 brand-font tracking-tight">
      Claims verification methodology
    </h1>
```
**After:**
```astro
    <h1 class="mt-4 text-4xl md:text-5xl font-black text-emerald-950 dark:text-emerald-50 brand-font tracking-tight">
      Claims verification methodology
    </h1>

    <p class="mt-3 text-sm text-stone-500 dark:text-stone-400">
      Last updated: <time datetime="2026-08-20">20 August 2026</time> &middot; Release Baseline: v2.4
    </p>
```
**Why Wave 3:** touches all 4 legal pages plus a new shared component — needs a visual pass on each page (tab active-state styling must render identically to today) and a decision on where exactly `<LegalTabs>` best composes into each page's existing breadcrumb/header markup.
**Blast radius:** `/legal/editorial-policy`, `/legal/methodology`, `/legal/privacy`, `/legal/terms`.
**Verify:** each page's active tab still highlights correctly (`aria-current="page"` matches only the current page's own tab); `grep -c "const legalTabs" src/pages/legal/*.astro` goes from 4 to 0; `grep -c "Last updated" src/pages/legal/methodology.astro` goes from 0 to 1.
**Rollback:** revert each of the 4 pages and delete the new component file.
**Risk if done wrong:** an incorrect `current` prop on one page silently mis-highlights that page's own tab as inactive and another page's tab as active — spot-check all 4 after the change, not just the one that was edited last.

---

## Apply order and preflight

**What `npm run build` actually runs** (from `package.json`): npm's implicit `prebuild` hook fires first — `leaf:audit:check` → `leaf:compile:check` → `leaf:verify` → `leaf:test` (4 sub-scripts) → `location:audit:check` → `reference:audit:check` → `verify:source` — then `build` itself runs `build:secure` (`enforce:claims` → `enforce:trust` → `enforce:negative` → `astro build` → `enforce:tombstones` → `enforce:killswitch`) and finally `generate-sitemaps-from-dist.mjs`, `build-search-index.mjs`, `verify-dist.mjs`. **`enforce:claims` (`scripts/verify-claims-ledger.ts`) is the gate FLAG-01 must keep passing**, and `astro build` inside `build:secure` is the gate TPL-01 fixes.

1. **Wave 1**, in any order (each is single-file/isolated): TPL-01, TPL-02, FLAG-01, HUB-01, MEASURE-01, PRINT-01.
   Run after: `npm run build` (full chain above) — this is the only command that actually exercises `enforce:claims`, `astro check`-adjacent static build, and `verify-dist.mjs` together. Also run `npx tsx scripts/verify-claims-ledger.ts` alone for a fast FLAG-01-only check.
2. **Wave 2**, in this order (SHELL-01 first — everything else in this wave is easier to visually verify once dark-mode utilities actually work):
   SHELL-01 → TOK-04 (delete config only after confirming SHELL-01 is the real dark-mode mechanism) → SHELL-02 → A11Y-01 → SCROLL-01 → MOTION-01 → DS-02 → TYPE-01 (last — depends on sourcing real font binaries, the only external dependency in this list) → TOK-01 → TOK-03.
   Run after: `npm run build`, then a manual pass with `npm run preview` — toggle theme on 3-4 representative pages (home, a leaf page, the circadian article, a legal page) in both light/dark and at ~375px/1440px widths.
3. **Wave 3**, in this order (TOC-01 depends on TPL-02's sources guard already being in place; DEAD-01's port must precede its deletions):
   TOC-01 → LEGAL-01 → DEAD-01 (port pattern, then delete).
   Run after: `npm run build` again, plus `npm run check` (astro check) and `npm run lint` since this wave adds/removes/moves component files and could introduce type or import errors that the build alone won't always surface as clearly as `astro check`/eslint will.

After all three waves: `npm run release:verify` (`check` + `lint` + `build`) as the final gate before merging.

## Findings I could not verify or that are wrong

- **All 21 findings check out against the actual file contents** — every line/range cited matched what's in the staged tree (a few were off by a line or two from truly duplicated blocks, noted inline above, e.g. TPL-02's sidebar count is at line 220 as stated).
- **TYPE-01's "public/fonts/ holds only 5 Inter woff2 files" and FLAG-01/TPL-01's dependency on `public/data/claims-ledger.json`'s actual contents could not be independently confirmed** — this staged copy of `public/` contains only `410-tombstone.html`, `_headers`, `_redirects`, `manifest.json`, `robots.txt`; no `fonts/` or `data/` subdirectory was uploaded. `globals.css` only declares 3 Inter `@font-face` rules (400, 600, 700-900) referencing 3 files, not 5 — if 5 files genuinely exist on disk, 2 of them are apparently unreferenced by any `@font-face` today, which would be a second, smaller latent bug not covered by this spec (out of scope for TYPE-01 as written, since TYPE-01 is specifically about Fraunces, not Inter). Confirm the real `public/fonts/` contents before applying TYPE-01's preload path.
- **DEAD-01**: confirmed via repo-wide grep exactly as the audit states, plus one additional detail worth flagging to whoever applies this — `src/components/CompatLink.tsx` is used only by `Header.tsx` and becomes orphaned the moment `Header.tsx` is deleted. Not treated as a new finding since it's a direct consequence, not an independent defect, but the engineer applying DEAD-01 should decide whether to remove it in the same pass or leave it for a follow-up sweep.agentId: afa576b63caa02fe8 (use SendMessage with to: 'afa576b63caa02fe8', summary: '<5-10 word recap>' to continue this agent)
<usage>subagent_tokens: 194376
tool_uses: 35
duration_ms: 563322</usage>

---

## Addendum — CIRC-01 (not covered by the main spec pass)

### CIRC-01 — pre-hydration render shows the wrong circadian phase to everyone

**File:** `src/components/CircadianMealClock.tsx:8-16` and `:46`

**Before:**
```tsx
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => setCurrentTime(new Date()), 1000 * 30);
    return () => clearInterval(timer);
  }, []);

  const hour = currentTime ? currentTime.getHours() : 12;

  let phaseName = "Nocturnal Fasting & Cellular Repair";
  let phaseColor = "bg-indigo-100 dark:bg-indigo-950/70 text-indigo-900 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800";
  let dotColor = "bg-indigo-500";
  let timeWindow = "20:00 - 08:00";
  let medicalAdvice = "Peripheral insulin sensitivity is at its diurnal nadir. Skeletal muscle glucose uptake is minimal; avoid high-glycemic carbohydrates.";

  if (hour >= 8 && hour < 14) {
    ...
  } else if (hour >= 14 && hour < 20) {
    ...
  }
```

**After (shape — extract the three phases into data, and render a neutral state until the real
local time is known):**
```tsx
const PHASES = [
  { from: 8,  to: 14, name: "Peak Insulin Sensitivity & Metabolic Window",
    window: "08:00 - 14:00", dot: "bg-emerald-500",
    chip: "bg-emerald-100 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    advice: "Diurnal peak in peripheral GLUT4 expression and beta-cell responsiveness. Optimal window for nutrient-dense complex carbohydrates." },
  { from: 14, to: 20, name: "Metabolic Maintenance & Thermogenesis",
    window: "14:00 - 20:00", dot: "bg-amber-500",
    chip: "bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    advice: "Moderate insulin sensitivity. Favor high-satiety proteins, healthy fats, and high-fiber legumes over rapidly absorbable sugars." },
  { from: 20, to: 8,  name: "Nocturnal Fasting & Cellular Repair",
    window: "20:00 - 08:00", dot: "bg-indigo-500",
    chip: "bg-indigo-100 dark:bg-indigo-950/70 text-indigo-900 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
    advice: "Peripheral insulin sensitivity is at its diurnal nadir. Skeletal muscle glucose uptake is minimal; avoid high-glycemic carbohydrates." },
] as const;

function phaseFor(hour: number) {
  return PHASES.find(p => p.from < p.to
    ? hour >= p.from && hour < p.to
    : hour >= p.from || hour < p.to)!;
}

const phase = currentTime ? phaseFor(currentTime.getHours()) : null;
```

Render, when `phase === null`, a neutral chip reading **"Detecting local time…"** in stone
tokens, with the status dot un-animated, and keep the container's height identical to the
resolved state so nothing shifts on hydration. Change the dot at `:46` from `animate-pulse`
to `motion-safe:animate-pulse`.

**Why:** `hour = currentTime ? ... : 12` makes the server-rendered and pre-hydration HTML always
show the **noon** phase — "Peak Insulin Sensitivity", emerald — to every visitor regardless of
local time, then flip colour and clinical copy after hydration. On a badge labelled "Live
Circadian Phase Monitor", that is briefly *wrong clinical-timing guidance*.

**Blast radius:** one component, on `/knowledge/circadian-nutrition` only.

**Verify:** load the page with JavaScript disabled — the chip must read "Detecting local time…",
never a phase name. `grep -n "animate-pulse" src/components/CircadianMealClock.tsx` must return
only the `motion-safe:` form.

**Rollback:** revert the file.

**Risk if done wrong:** if the neutral state has a different height than the resolved state, this
trades a colour flash for a layout shift — measure both before shipping.

**Explicitly NOT in this change:** rebuilding the component as a real 24-hour SVG dial. That is a
separate project (see `REMEDIATION_PLAN.md` §6.5 / Workstream C).

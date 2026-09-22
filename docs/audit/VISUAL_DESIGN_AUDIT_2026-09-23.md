# NutritionColours visual design audit — 23 September 2026

## Scope and method

This is a visual and design audit of the local Astro application, its shared styling, UI components, page templates, locally stored image/icon/font assets, and content image references. The audit does not assess clinical accuracy, publication policy, SEO, or code architecture unless they directly affect presentation. Source inspection covered the 36 Astro files and three CSS files in the active UI, assets in `public/images`, `public/icons`, `public/favicon*`, and `public/fonts`, plus image references in the Markdown estate. The knowledge content tree has 2,306 files. Across `src`, `public`, and `docs` there are 5,883 Markdown files; 237 knowledge Markdown files originally contained standalone image lines, since removed from these unpublished drafts. The visual behavior of the home page and header was also checked at 320, 375, 390, and 1440px in light and dark modes. Historical screenshots in `docs/execution/screenshots` were treated as historical artifacts only.

The application already had extensive unrelated uncommitted changes before this audit. All existing assets and draft content were preserved.

Status meanings: **Fixed** = changed in this pass; **Open** = a visual asset or draft-content decision needing brand/editorial approval; **No issue observed** = inventoried, with no specific issue found. Severity reflects the current rendered experience first, then the risk if unpublished content is released unchanged.

## Findings by priority and file type

### Critical

No critical visual failure was verified in the current published UI. The draft image issues below must be resolved before the affected drafts are published.

### High

| File type and location | Visual problem and evidence | Recommended design solution | Status |
| --- | --- | --- | --- |
| Astro component — `src/components/ui/Header.astro` | At 1440px, both desktop and mobile theme buttons appeared; the mobile menu itself was hidden. The duplicate action made the header look unfinished and added a redundant keyboard target. | Hide the entire mobile action group from the desktop breakpoint, keeping one visible, operable theme button. | **Fixed** |
| Astro component — `src/components/ui/Header.astro` | At a 320px viewport the header exceeded the document's available width by about 3–4px, producing horizontal scrolling. | Allow the brand to shrink and tighten the 320px spacing and brand sizing while preserving 44px theme/menu targets. | **Fixed**; 320px overflow rechecked |
| CSS/component — `src/styles/designTokens.css`, `src/styles/globals.css`, `src/components/ui/Header.astro`, `src/pages/index.astro` | Focus outlines followed the category-dependent brand color, while the header used a separate color. On some backgrounds the keyboard focus indicator was subtle or inconsistent. | Use dedicated light/dark focus tokens and a 3px offset consistently across links, buttons, summaries, and the skip link. Keep reduced-motion behavior. | **Fixed** |
| Astro pages/components — `src/pages/index.astro`, `src/pages/404.astro`, `src/pages/about.astro`, `src/pages/clinics.astro`, `src/pages/connect.astro`, `src/pages/health/index.astro`, `src/pages/knowledge/[section].astro`, `src/pages/legal/{editorial-policy,methodology,privacy,terms}.astro`, `src/pages/plans.astro`, `src/pages/recipes.astro`, `src/pages/services/online-nutrition.astro`, `src/pages/sitemap.astro`, `src/pages/team.astro`, `src/pages/testimonials.astro`, `src/components/NotifyMeForm.astro` | White-label primary actions used `dark:hover:bg-emerald-600`, approximately 3.8:1 contrast against white normal text. This fails the 4.5:1 target at hover. | Use emerald 800 on dark hover, retaining a distinct state while keeping white text readable. | **Fixed** across all 18 occurrences |
| Markdown draft content — `src/content/knowledge/health conditions/Diseases/*.md` (for example `diabetes-reversal.md`), and other files formerly matched by `images.unsplash.com` | Thirty-seven unpublished draft Markdown files contained externally hosted Unsplash images. Their cropping, availability, and visual tone were not controlled by the site. No broken published image was observed. | Use a text-first draft treatment until a reviewed local image is available. | **Fixed**; source image lines removed, paths recorded in `docs/audit/VISUAL_DESIGN_DRAFT_IMAGE_INVENTORY_2026-09-23.csv` |

### Medium

| File type and location | Visual problem and evidence | Recommended design solution | Status |
| --- | --- | --- | --- |
| Astro layout/CSS — `src/layouts/BaseLayout.astro`, `src/styles/designTokens.css`, `src/styles/globals.css` | The body specified hardcoded light and dark colors separately from the role palette, so pages could use different base tones from shared cards and controls. | Bind the body to surface/text roles and keep category colors for accents. | **Fixed** |
| CSS/layout/font assets — `src/styles/globals.css`, `src/layouts/BaseLayout.astro`, `public/fonts/inter-latin-500-normal.woff2`, `public/fonts/inter-latin-400-normal.woff2`, `public/fonts/fraunces-latin-900-normal.woff2` | UI text requests Inter 500, but only 400/600/700 were declared; the browser could synthesize medium weight. Main body/display font files were not preloaded. | Declare the existing 500 file and preload only the two sitewide first-paint faces. | **Fixed** |
| Astro page — `src/pages/search.astro` | The actual `astro-pagefind` widget renders a `<pagefind-searchbox>` with `.pf-searchbox-input`; it started at 36px high. Earlier `--pagefind-ui-*` variables and `.pagefind-ui__*` selectors did not match this component. Its result text was also small and the requested Fraunces 800 weight lacked a matching file. | Use the component's `--pf-*` variables for light/dark color, focus, width, and 44px input height; target `.pf-searchbox-*` for result hierarchy and use Fraunces 900. The current searchbox has no clear button; size `.pf-input-clear` if one is added. | **Fixed**; measured at 44px in light/dark |
| Astro components — `src/components/NotifyMeForm.astro`, `src/components/legal/LegalTabs.astro` | The email field's label was visually hidden; the submit control and legal tabs were roughly 40px and 36px high. | Show the label, strengthen the small form heading, and make controls at least 44px high. | **Fixed** |
| Astro leaf template — `src/components/leaf/ApprovedLeafPage.astro` | When a reviewed leaf has a hero image directly beneath its H1, it was marked lazy, risking a late hero. | Eager-load that single above-fold image at high priority; leave other media lazy. | **Fixed** |
| Astro page — `src/pages/foods/index.astro` | The notice used an H3 with no local H2 parent, and the two-column status grid crowded the narrowest phones. | Use an H2 for the notice, wrap status metadata cleanly, and fall back to one column below 360px. | **Fixed** |
| Local OG asset — `public/images/nutritioncolours-default.png`, `src/layouts/BaseLayout.astro`, `src/components/SeoHelper.astro` | The former 1200×630 social PNG put a large leaf across its wordmark and also served as the organization logo. Its composition weakened legibility in small previews, while a wide card was unsuitable for a logo. | Use a separate 1200×630 social card with a clear text area and a square logo PNG for structured identity. Preserve the original asset. | **Fixed**; new `public/images/nutritioncolours-social.png` and `nutritioncolours-logo.png` |
| Draft image asset — `public/images/nutritioncolours-default.svg`; references formerly in `src/content/knowledge/health topics/General/wilsons-disease.md:14` and 199 other Markdown files | One generic image stood in for 200 different draft topics. Repeated imagery would weaken wayfinding if the drafts were published. They were unpublished, so this was not a published-image failure. | Use text-first drafts until topic-specific reviewed imagery is available. | **Fixed**; source image lines removed, paths recorded in the draft image inventory CSV |
| Local food image assets — `public/images/apple_illustration.jpg`, `banana_illustration.jpg`, `orange_illustration.jpg` | These 1024×1024 legacy illustrations use a glossy, highly saturated style unlike the restrained editorial UI. Nutrition facts and benefit claims are baked into the pixels, which limits accessibility, responsive scaling, correction, and review. No active UI reference was found. | If future approved food pages need imagery, make a matching text-free editorial set and put any approved data in accessible HTML. | **Open**, non-rendered legacy assets; not a release blocker |

### Low

| File type and location | Visual problem and evidence | Recommended design solution | Status |
| --- | --- | --- | --- |
| CSS — `src/styles/designTokens.css`, `src/styles/globals.css` | The fluid `--font-size-*` and `--space-*` tokens have no references outside their declarations. Several button/card utilities in `globals.css` likewise have no call sites. This creates a second, unused vocabulary alongside the active Tailwind scale and repeated page styles. | In a later design-system cleanup, select one documented scale and remove unused primitives only after checking template consumers. Consolidate repeating CTAs and status badges when shared component behavior is stable. | **Open**, low-risk cleanup; no broad abstraction added |
| Icon assets — `public/favicon.ico`, `public/favicon.svg`, `public/icons/icon-any.svg`, `public/icons/icon-maskable.svg`, `src/components/ui/Header.astro` | The header used a bowl/leaf mark while the favicon/app icons showed a different single leaf. The old `favicon.ico` contained SVG bytes despite its ICO extension. | Use the header's bowl/leaf geometry in favicon and app icons, with a genuine multi-size ICO fallback. | **Fixed**; 16/32/48px ICO and matching SVG icons |
| Starter icon assets — `public/file.svg`, `public/globe.svg`, `public/window.svg` | Generic starter-like icon files do not match the custom icon style. No active UI use was found, so they do not harm rendered pages. | Retain or archive them in an asset cleanup after confirming no external references. | **Open**, low priority |

## Inventory with no observed visual issue

- The old `public/images/nutritioncolours-default.png` remains preserved but is no longer the shared social preview. The new `nutritioncolours-social.png` is 1200×630; the separate `nutritioncolours-logo.png` is 512×512. No active UI references to the three fruit JPGs were found.
- `public/icons/icon-any.svg` and `icon-maskable.svg` retain scalable vector geometry and appropriate standard/maskable backgrounds, now using the bowl/leaf identity.
- The local Inter 300/400/500/600/700 and Fraunces 900 WOFF2 files are present. No missing requested file was found after mapping Inter 500.
- `src/styles/animations.css` includes reduced-motion handling. Existing shared styles also disable smooth scrolling and long transitions for reduced-motion users.
- `src/components/Icons.astro`, `PublicationGate.astro`, `leaf/TocList.astro`, `layouts/Footer.astro`, and the remaining active page files were inspected for palette, touch-target, and layout patterns. No separate verified visual defect was identified in those files. The unbuilt draft Markdown inventory was treated as source-level risk rather than a published visual failure.

## Implemented changes

The visual pass aligned base colors with role tokens, fixed desktop and narrow-mobile header layout, standardized keyboard focus, kept white CTA labels readable at dark-mode hover, declared and preloaded local fonts, improved the actual Pagefind component and email form controls, enlarged legal tabs, prioritized above-fold leaf imagery, and corrected the foods page hierarchy/320px status layout. A subsequent asset pass added a readable social card and square organization logo, unified favicon/app icons with the header mark, and rendered a genuine ICO fallback. The 237 unpublished draft image lines were removed for a text-first treatment, with their former paths captured in the separate CSV inventory. Existing image assets were retained.

## New visual enhancement proposals

These are optional directions beyond the fixes, with textual mockups to support design review:

1. **Editorial hierarchy:** Introduce a small “Field note” eyebrow and a one-line reading promise above each directory H1, then place review status in a consistent slim line beneath the lead. Mockup: a generous left-aligned title block, one narrow green rule, and a compact status line rather than another large rounded card.
2. **Responsive discovery:** On phones, put the first useful route or filter immediately below each library introduction. Mockup: one full-width search entry followed by horizontally scrollable, 44px high category labels with a visible edge cue; on desktop the same labels become a calm two-row directory index.
3. **Dark-mode depth:** Keep the existing stone/emerald palette, but use three explicit surface levels—page, card, inset panel—with borders that remain perceptible on dark stone. Check all status hues against both dark surfaces before release.
4. **Micro-interactions:** Use a short color/border change on cards and a restrained 1–2px lift only on interactive items. Keyboard focus should be equally expressive. Disable motion under `prefers-reduced-motion`; avoid decorative entrance sequences on educational content.
5. **Iconography and illustration:** Derive a 20/24px line-icon family from the chosen bowl/leaf mark, using a consistent stroke weight. For food topics, commission a tightly cropped natural-light image series on neutral backgrounds; keep nutritional quantities as selectable text below the image.
6. **Search results:** Mockup each result as a title, a one-line section path, a two-line excerpt, and a clearly separate “Reviewed” or “Policy” label. Use a quiet divider instead of a raised card for every result so dense lists remain scannable.
7. **Topic-specific social previews:** Extend the new 1200×630 safe-zone template to individual approved guides when a reviewed title and image are available. Keep the mark in the right panel and test each result at phone-share size before assigning it to a page.

## Validation and caveats

- `npm run check`: passed, 0 errors/warnings/hints.
- After correcting the Pagefind component selectors, `npm run check` passed again and a direct `npx astro build` again built 30 pages.
- Rendered 375px search check: `.pf-searchbox-input` measured 44px in both themes. Component text resolves to `#022c22` in light and `#f5f5f4` in dark; the dark background resolves to `#1c1917` and dark focus color to `#6ee7b7`.
- New asset inspection: the social PNG is 1200×630 with no wordmark/mark overlap and remains legible at a 300×158 share-card thumbnail. The logo PNG is 512×512. `file` identifies `public/favicon.ico` as an MS Windows icon resource with embedded PNG images at 16, 32, and 48px.
- `npm run lint`: passed with one pre-existing unused-disable warning in `src/components/Icons.astro`.
- Latest `npm run build`: blocked at the prebuild leaf-registry synchronization check after the separate draft-content cleanup. An earlier attempt reached `verify:source` and flagged an unrelated raw publishing-control import in `src/pages/llms-full.txt.ts`. These are not visual asset failures.
- Direct `npx astro build`: passed again after the asset changes; 30 static pages built. The generated home HTML references the new social PNG, square organization logo, SVG favicon, and ICO fallback.
- `git diff --check` reports pre-existing whitespace in several already-dirty files. The visual changes here did not alter those unrelated lines.
- After the header change, rendered DOM measurements showed document width equal to scroll width at 320px (305px), 375px (360px), and 1440px (1425px). The header no longer overflows, exactly one theme toggle is visible at mobile and desktop widths, and the mobile menu opens. The historical screenshots at `docs/execution/screenshots` predate these changes.

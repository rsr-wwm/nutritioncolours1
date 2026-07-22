# Knowledge Hierarchy — Analysis & Solution Plan
**Date:** 2026-07-19 · Scope: the 21-pillar `/knowledge/*` tree (category → sub-category → leaf), excluding the 1,246 Location pages.

---

## 1. Headline: the 2,000+ pages already exist

Ran the real `taxonomyEngine.getTaxonomyDetails()` routing over every content file. Result:

| Level | Count |
|---|---|
| Pillars (Level 1 hubs) | 21 |
| Category pages (Level 2) | 114 |
| Sub-category pages (Level 3) | 651 |
| Leaf article pages (Level 4) | 2,442 |
| **Total generated `/knowledge` pages (excl. Locations)** | **3,228** |
| Unrouted / 404-fallback files | **0** |

The 4-level structure you described — pillar → categories (list+links) → sub-categories (list+links) → leaf pages (details) — **is already built and generating**. The `[...slug].astro` template renders breadcrumbs, child lists, and links at every level. All 21 pillars route. So the target ("besides Locations, 2,000+ pages") is met — 3,228 pages, 2,442 of them leaf detail pages.

> **Update (2026-07-20) — re: "health topics + health conditions + diseases?":** Re-checked `taxonomyEngine.ts` directly. As it stands *today*, lines 209-214 already merge all three into one pillar: the check is `lowercaseCat.includes("diseases") || .includes("conditions") || .includes("health topic")`, and all three real category strings on disk — `"diseases"`, `"health conditions"`, `"Health Topics"` — match one of those substrings, so all route to `mainCatSlug = "diseases"`. **The owner ruling (Diseases = Health Topics = Health Conditions = one pillar) is already implemented in code**, and the "21 pillars" count above already reflects that merge (they are not 3 separate pillars in that count). This means Problem A's claim just below — that 454 `health topics` files fall through to `/knowledge/foods/general-nutrition/general-science/...` because there's "no branch for health topics" — is **stale**; that branch exists now. Left the original Problem A section below unedited so the history is visible, but treat it as superseded pending a fresh routing re-audit (queued).
>
> Separately, spot-checking `health conditions/` turned up a real, different problem: files like `health conditions/Winter Squash/cuc-win-2.md` carry `category: "health conditions"` but `subCategory: "Winter Squash"` — i.e. vegetable/food content mislabeled under the health-conditions category, not actual disease content. That folder likely needs its own cleanup pass (separate from the merge question) to sort real condition pages from misfiled food pages before it's trusted as part of the Diseases pillar.

The problem is **not quantity or structure. It's (A) mis-routing, (B) content quality, (C) leftover junk.**

---

## 2. Problem A — mis-routing (the critical one)

Disk folders don't all map to the right pillar. The routing engine has explicit branches for ~21 pillar keywords; anything it doesn't recognise falls through to a **`foods → general-nutrition → general-science`** bucket. Confirmed live examples:

| Disk folder | Files | Currently routes to | Should be |
|---|---|---|---|
| **`health topics/`** | **454** | **`/knowledge/foods/general-nutrition/general-science/…`** | Diseases (owner ruling: Diseases = Health Topics = Health Conditions — all one pillar) |
| `Macronutrients/` | 9 | `/knowledge/foods/macronutrients/…` | Nutrient Database |
| `Micronutrients/` | 9 | `/knowledge/foods/micronutrients/…` | Nutrient Database |
| `Dietary Patterns/` | 9 | `/knowledge/foods/…` | own pillar / Functional |
| `Adverse Food Reactions/` | 6 | `/knowledge/foods/…` | Diseases |

The big one: **454 disease/condition topics** (diabetes-reversal, PCOS, thyroid, cancers, kidney disease diets, etc.) render at URLs like
`/knowledge/foods/general-nutrition/general-science/diabetes-reversal`
— i.e. "Type 2 Diabetes Reversal" is filed as a *food* under *general science*. On a YMYL medical site this is the single worst structural issue: wrong pillar, wrong breadcrumb, wrong schema context, diluted topical authority, and it inflates the "foods" pillar to a fake 586 leaves while starving the real medical taxonomy.

**Root cause:** `taxonomyEngine.ts` has no branch for the `health topics` / `Health Topics` category, so it hits the generic fallback. This is a ~15-line fix in one file (add a branch mapping `health topics` → the diseases/health-topics pillar with sensible sub-category slugs), but it **changes 454 live URLs**, so it needs a 301-redirect map and your sign-off before shipping (SEO decision, not a silent code change).

---

## 3. Problem B — content quality (the real work)

The pages exist but most are still the auto-generated template boilerplate flagged back in round 4. Citation check across the 2,442 non-Location leaves:

- **157 leaves (~6%)** contain a real citation (USDA FoodData Central / IFCT 2017 / PMID / DOI).
- **~2,285 leaves (~94%)** are still generic template stubs ("is a highly valued nutritional agent…", placeholder tables).

The 157 real ones are almost entirely this engagement's work: **6 pillars fully done** — Fruits, Grains, Vegetables, Spices, Seeds, Pulses & Legumes (71 hand-sourced `FoodEntity` pages) — plus the herb/spice clinical monographs and the new nephrology set.

So the leaf *skeletons* are all present and routed; what they need is **real, cited content poured into them, pillar by pillar** — exactly the batch process already proven across those 6 pillars. Remaining pillars needing real data: Dairy & Alternatives, Drinks & Beverages, Functional Foods, Fermented Foods, Nutrient Database, Vitamins, Minerals, Phytonutrients, Bioactive Compounds, Oils & Healthy Fats, Organ-wise, Life-stage, and the large Diseases corpus.

---

## 4. Problem C — leftover junk (safe to clear)

> **In plain words (what "351 unrouted placeholder duplicate files" means):**
> Think of your site like a library. Every real page is a book that sits on a labelled shelf, so visitors and Google can walk to it. During the automated run, a process made **351 extra copies of books you already have** — a second "Mango" sheet, a second "Ragi" sheet, and so on — but it dropped them in a back room with **no shelf and no label**.
> - **"Duplicate"** = the same information already lives on a proper page (e.g. the real, cited *Mango — Nutrition, Composition & Health* page). These copies are worse — their title and description are just the bare word "Mango".
> - **"Placeholder"** = they were never finished; several still contain fill-in-the-blank text like "Placeholder question 1".
> - **"Unrouted"** = no visitor or search engine can ever open them — the site has no address (URL) pointing at them. They just sit on the disk.
> **Why delete:** they add nothing (the real page already exists), nobody can see them, and if left they risk future *name clashes* — two files claiming the same web address, where one silently overwrites the other. Deleting them is safe cleanup, like recycling unlabelled photocopies of books already on the shelf. Nothing a visitor can currently reach is removed.

- **351 placeholder files** in new, **unrouted** duplicate trees (`Foods/` 49, `Recipes/Meals/` 48, `herbs/Botanical/` 25, `health topics/General/` partials, `spices/` 7) — raw dumps of data already properly migrated into the real pillars, with generic titles ("Mango"/"Mango"). Not reachable by any route. **Recommend deletion** (flagged in POINT_REGISTER Part D1).
- **`diabetes-reversal` slug collision** across 4 files in 2 pillars — needs a canonical pick.
- These were already logged; listing here so the plan is complete.

---

## 5. Solution plan (phased)

**Phase 1 — Fix routing (mechanical, needs your OK on URLs).**
Add the missing `taxonomyEngine.ts` branches so `health topics` (454), `Macronutrients`/`Micronutrients` (18), and the other fallthroughs land in their correct pillars. Ship with a `.htaccess` 301 map from the old `/knowledge/foods/general-…` URLs to the new ones so nothing 404s and link-equity transfers. *One file + one redirect map. I can do it the moment you approve the URL change.*

**Phase 2 — Clear the junk (mechanical, needs your OK to delete).**
Delete the 351 unrouted placeholder duplicates; resolve the 4-way `diabetes-reversal` collision to one canonical file + redirects.

**Phase 3 — Pour in real content, pillar by pillar (the bulk, ongoing).**
Continue the proven 6-pillar pipeline (research → `FoodEntity`/data → migrate into existing leaf files → wire auto-linker → verify) across the remaining pillars. Each pillar is one round. This is what turns 2,442 routed skeletons into 2,442 genuinely cited pages. Blocked items (e.g. Oils) wait on WebSearch quota / your sourcing sign-off.

**Phase 4 — Enrich the hub pages (mechanical, no input needed).**
Category/sub-category hubs already list children; add short intro paragraphs + `ItemList`/`CollectionPage` schema per hub so the ~786 Level-1/2/3 pages are themselves indexable "list/links" pages rather than thin indexes — improves the AEO/GEO coverage you're after.

---

## 6bis. EXECUTED 2026-07-19 (Phases 1 + 2)

Per owner ruling (**Diseases = Health Topics = Health Conditions = one pillar**), the combined merge + cleanup pass was executed and verified:

- **Merge live in `taxonomyEngine.ts`:** `health topics` now routes into the **Diseases** pillar. Diseases went 652 → **1,104 leaf pages**; the bogus "foods" pillar shrank 586 → **35** (now only real macronutrient/dietary content). All 454 health-topic pages (diabetes-reversal, PCOS, thyroid, cancers…) left the `/knowledge/foods/general-nutrition/general-science/` dumping ground.
- **Collisions: 247 → 0.** The pre-existing 247-group collision mess (494 files silently overwriting each other at build) is fully resolved.
- **Junk deleted:** 135 untracked, never-committed duplicate files removed — `herbs/Botanical/` (38), `Foods/` (49), `Recipes/` (48). Real recipe/food pages are unaffected (they render from `recipes_database.ts` / the real pillar folders, not these dumps).
- **2 real duplicates resolved:** `diabetes-reversal` and `pcod-pcos` each existed in both `health topics/metabolic/` and `health conditions/metabolic/`; kept the fuller `health conditions/` version, removed the `health topics/` copy.
- **452 `301` redirects** added to `public/.htaccess` mapping every old `/knowledge/foods/general-…/{slug}` URL to its new `/knowledge/diseases/…/{slug}` home — no link equity lost.
- **All placeholder junk text purged:** the remaining 252 tracked files carrying literal "Placeholder question / Placeholder answer" `<details>` blocks (an invisible-unicode variant the first pass missed) were stripped; **0 placeholder strings remain anywhere** in `src/content/knowledge`. Real FAQ blocks were preserved.
- **Verified:** `tsc` clean on the edited engine; 0 route collisions; content count 2,442 → 2,305 non-Location leaves (137 junk/dupe files removed). Pillar name kept as **`diseases`** in the URL (current slug, medical-grade) — say the word if you'd rather the public breadcrumb read "Health Topics".

**Phase 4 also executed (2026-07-19):** all three hub levels in `[...slug].astro` (pillar / category / sub-category — ~786 pages) now emit a `@graph` with **`CollectionPage` + `MedicalWebPage` + an `ItemList` of their children + a full `BreadcrumbList`**, instead of the previous bare `MedicalWebPage`. Each hub is now a machine-readable "list + links" page — every category lists its sub-categories, every sub-category lists its articles, with absolute URLs — which is exactly the AEO/GEO "details / list / links at each level" structure requested. Script region verified with `node --check` (parses clean); JSX render untouched.

Remaining from the original plan: **Phase 3** — pour real cited content into the ~94% still-boilerplate leaves, pillar by pillar (WebSearch-gated; continues autonomously as quota allows).

---

## 6. What needs your words (before I execute Phases 1–2)

1. **Approve merging `health topics` + `health conditions` + `diseases` into one pillar** — per your ruling, **Diseases = Health Topics = Health Conditions** are all the same thing, so all three disk folders (plus the disease-named folders already routing there — Cardiovascular Disease, Kidney Diseases, Neurological Disorders, etc.) collapse into a single **Diseases** pillar. This pulls the 454 mis-routed `health topics` pages out of Foods and unifies the whole medical corpus (~750+ leaf pages) under one clean pillar. Changes 454 URLs (e.g. `/knowledge/foods/general-nutrition/general-science/diabetes-reversal` → `/knowledge/diseases/…/diabetes-reversal`); I'll add 301 redirects. Confirm go/no-go, and confirm the pillar's display name should be **"Diseases"** (vs. "Health Topics" — your call on the public label). *Because all three merge, near-duplicate slugs will now collide — `diabetes-reversal` is the clearest (item 3).*
2. **Approve deleting the 351 unrouted placeholder duplicate files.**
3. **Pick the canonical `diabetes-reversal` page** (4 exist).

Everything in Phases 3–4 I can continue autonomously, one pillar at a time, as already established.

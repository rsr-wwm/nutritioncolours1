# NutritionColours

Clinical nutrition marketing site for Dr. Shilpa Thakur's practice — ~1,700 statically
pre-rendered pages covering health conditions, herbs, recipes, clinical topics, and
location-targeted outreach pages across 1,690 Indian/international cities.

**Stack:** Astro 7 (`output: 'static'`) + React 19 islands (`@astrojs/react`) + Tailwind v4
(via the Vite plugin). Migrated from a Next.js app in July 2026 — see git history for the
migration commits. There is no server runtime; the entire site builds to static HTML.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # static build to dist/
npm run preview   # preview the production build
npm run check     # astro check (TypeScript + template diagnostics)
```

## Structure

- `src/pages/` — file-based routes. Dynamic routes (`[id].astro`) use `getStaticPaths()`
  to pre-render one page per data record (conditions, herbs, recipes, clinics, team, etc.).
- `src/data/` and `src/lib/` — the actual content databases (`clinical_databases.ts`,
  `locationsData.ts`, `internationalData.ts`, `topics.ts`, `recipes_database.ts`) plus
  SEO/AEO/GEO helper modules under `src/lib/seo/` and `src/lib/geo/`.
- `src/components/` — Astro components (`.astro`, server-rendered) and React components
  (`.tsx`, rendered as islands with `client:load`/`client:only` directives).
- `public/` — static assets, including the AI/LLM-facing feeds (`llms.txt`,
  `llms-full.txt`, `/data/*.json`), sitemaps, and `robots.txt`.

## SEO/AEO/GEO infrastructure

This site carries a deliberately elite-tier SEO/AEO/GEO setup: JSON-LD entity graphs
(`src/lib/seo/entityGraph.ts`), curated LLM feeds (`llms.txt`/`llms-full.txt`), bot
classification (`public/scripts/bot-shield.js`), and segmented sitemaps. Some of this
infrastructure was orphaned during the Next.js → Astro migration (modules with zero
imports, components wired into no pages) — before adding new SEO/GEO tooling, check
whether it already exists under `src/lib/seo/` or `src/lib/geo/` first.

Before shipping schema or claims, confirm they describe real, verifiable facts — this is
a remote/telehealth practice, not a network of physical branches, so the ~1,690 `/clinic/*`
pages are service-area targeting pages, not `LocalBusiness` locations with real street
addresses.

## Status (as of 2026-07-13)

Verified: `astro build` green at **2,069 pages**, `astro check` **0 errors / 0 warnings**.
Full audit + execution plan live under `docs/` (`docs/audit/`, `docs/analysis/`, `docs/spec/`,
`docs/execution/EXECUTION_LEDGER.md`) and `MASTER_REQUIREMENT_SPECIFICATION.md`.

- **Schema:** every YMYL template now emits reviewer-backed medical JSON-LD — conditions,
  herbs, clinics, `genomics`, `interactions`, and all 229 `topic`/disease pages
  (`MedicalWebPage` + `Physician` reviewer + `MedicalCondition`/`Gene`/`Drug` + `Claim`).
- Some pages rely on client-rendered React islands for primary content
  (`client:load`/`client:only`); verify server-rendered fallback exists for anything
  crawlers must read without executing JavaScript (View-Source Law).
- **Open decisions/work:** clinic-page thin-content consolidation (`docs/analysis/gap-analysis.md`
  §5); registry migration off the monolithic data files (`MASTER_REQUIREMENT_SPECIFICATION.md`
  §65.2); content authorship for the food/nutrient classes (§12–§34); server-side hreflang
  once a real vernacular layer exists; CI wiring of the QA gates.
- **git:** `src/lib` is currently untracked — commit it as a baseline. `node_modules`/lockfile
  can hit a `@rolldown/binding-*` native-module error on some platforms — reinstall
  (`rm -rf node_modules package-lock.json && npm install`) if `astro build`/`check` fails
  with `Cannot find module '@rolldown/binding-*'`.

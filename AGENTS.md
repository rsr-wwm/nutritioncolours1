# Agent notes for NutritionColours

This is an **Astro 7** static site (`output: 'static'`) with React 19 islands, not Next.js.
There is no `app/` directory, no server runtime, and no API routes — everything pre-renders
to static HTML in `dist/` at build time. If something in your training data assumes Next.js
conventions (file-based API routes, `next/font`, `app/page.tsx`, etc.), it does not apply here.

## Before adding SEO/AEO/GEO/perf infrastructure

Check `src/lib/seo/`, `src/lib/geo/`, and `src/components/` first. This project has been
through a Next.js → Astro migration and accumulated orphaned modules (built, never wired
into a page). Duplicating an existing capability instead of reconnecting it is the
recurring failure mode here — grep for existing exports before writing a new helper.

## Hard constraints

- **No fabricated schema/claims.** This is a remote/telehealth practice (see `llms.txt`),
  not a network of physical clinics. Never add `LocalBusiness`/`MedicalClinic` schema with
  invented street addresses or phone numbers to the `/clinic/*` pages — use `Service` +
  `areaServed` instead, and only populate schema fields you can trace to real data.
- **View-Source Law:** AI crawlers (GPTBot, ClaudeBot, PerplexityBot) do not execute
  JavaScript. Any page whose primary content only renders via `client:only` React islands
  is invisible to them — check for server-rendered fallback content on such pages.
- Run `npx astro check` before considering a change done, if your environment allows it.
  If it fails with `Cannot find module '@rolldown/binding-*'`, that's a native-binding/arch
  mismatch in `node_modules` — reinstall (`rm -rf node_modules package-lock.json && npm i`)
  rather than assuming the code is broken.

## Where things live

- Content databases: `src/data/`, `src/lib/clinical_databases.ts`, `src/lib/locationsData.ts`,
  `src/lib/internationalData.ts`, `src/lib/topics.ts`, `src/lib/recipes_database.ts`.
- SEO helpers: `src/lib/seo/entityGraph.ts` (JSON-LD generators, already wired into
  `condition`, `herb`, and `topic` pages), `src/lib/seo/structuredData.ts` (breadcrumbs +
  legacy schema constants — some fields in the static `organization`/`localBusiness`
  exports are unfilled placeholders; don't ship those as-is without replacing the
  placeholder values with real ones).

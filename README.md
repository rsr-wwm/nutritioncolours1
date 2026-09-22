# NutritionColours

NutritionColours is an Astro-based health and food education website under controlled reconstruction.

Health topics, health conditions and disease leaves are Tier 1. Whole-food leaves are Tier 2. No health or food leaf is published until its exact content, claims, sources, accountable author, qualified in-scope reviewer and review event pass the approved-only publishing graph.

The service model is online-only. The project must not imply physical offices, local branches, map locations or city-based clinicians unless a real staffed location is independently verified in the future.

## Current verified baseline

- Astro 7 static output with React islands only where needed.
- 29 built HTML pages and 9 indexable canonical URLs.
- 0 approved health leaves and 0 approved food leaves.
- 2,173 Tier-1/Tier-2 legacy records quarantined.
- 133 Tier-3 reference records quarantined.
- 3,553 historical locality drafts disconnected and quarantined.
- Raw publishing registries cannot be imported by application routes.
- Health and food routes consume only `data/publishing/approved-leaves.json`.

These values are release-gate observations, not claims of medical, legal or accessibility certification.

## Local commands

```bash
npm install
npm run dev             # local development server
npm run check           # Astro and TypeScript diagnostics
npm run lint            # application lint gate
npm run build           # guarded production build
npm run release:verify  # type, lint, policy, build, sitemap, search and output gates
npm run build:all       # safe alias of release:verify; it does not deploy
npm run preview         # preview an already-built dist/
```

### Deployed-site verification

```bash
npm run verify:live
```

This checks the deployed sitemap graph and representative HTML for status, canonicals, robots directives, heading structure, security headers, prohibited local/medical/review schema, required noindex surfaces and the retired honeypot path.

Optional controls:

```bash
LIVE_SITE_URL=https://staging.example.com npm run verify:live
LIVE_SITE_URL=https://staging.example.com LIVE_EXPECTED_ORIGIN=https://nutritioncolours.com npm run verify:live
LIVE_COMPARE_DIST=1 npm run verify:live
LIVE_VERIFY_MAX_PAGES=500 npm run verify:live
```

Only raise `LIVE_VERIFY_MAX_PAGES` after confirming that the larger indexable set is intentional. A large live sitemap is treated as possible index bloat, not automatically accepted.

### Core Web Vitals verification

```bash
PAGESPEED_API_KEY=your_google_api_key npm run verify:cwv
```

The command uses Google PageSpeed Insights. It treats 28-day CrUX p75 LCP, INP and CLS as the field gate and reports Lighthouse mobile values only as lab diagnostics. It fails rather than calling lab TBT “field INP” or passing when field data is absent.

Useful options:

```bash
CWV_URLS=https://nutritioncolours.com/,https://nutritioncolours.com/about npm run verify:cwv
CWV_STRATEGY=desktop npm run verify:cwv
CWV_ALLOW_LAB_ONLY=1 npm run verify:cwv
```

`CWV_ALLOW_LAB_ONLY=1` is diagnostic only and does not establish real-user CWV performance.

## Publishing control plane

| Artifact | Purpose | Application import allowed? |
|---|---|---|
| `data/publishing/leaf-registry.json` | Deterministic legacy inventory | No |
| `data/publishing/leaf-decisions.json` | Human lifecycle decisions | No |
| `data/publishing/truth-registry.json` | Verified identities, sources, claims and reviews | No |
| `data/publishing/approved-leaves.json` | Generated approved-only public projection | Yes |
| `data/publishing/location-quarantine.json` | Disconnected locality inventory | No |

Start with `docs/execution/LEAF_PUBLICATION_RUNBOOK_2026-08-21.md` and `docs/execution/PHASE_1_TRUTH_REGISTRY_WORKSHEET_2026-08-28.md`. Never let an LLM write approval facts directly into a trusted registry.

## Release and deployment safety

`build:all` previously chained a build to an automatic deployment. That destructive behavior remains removed. The restored command name now performs the complete local release verification only.

Deployment is deliberately separate because it changes public state. Before deployment:

1. Run `npm run build:all`.
2. Review and commit the exact source changes and built route/sitemap set.
3. Rotate the historical Hostinger webhook because its old value exists in Git history; store only the new value as `HOSTINGER_WEBHOOK_URL` in the ignored `.env` file.
4. Run `npm run deploy:check`, type `nutritioncolours.com` when prompted, and review the target summary.
5. Run `npm run deploy`, type `nutritioncolours.com` again, and wait for Hostinger to publish.
6. Run `npm run deploy:verify` to compare production with the current built canonical set.
7. Run field CWV verification when CrUX data is available.

The guarded deployer updates the existing GitHub `production` branch with a normal fast-forward commit. It never force-pushes, never contains a default webhook, rejects the historically exposed webhook, and refuses an uncommitted source tree unless the operator explicitly sets `DEPLOY_ALLOW_DIRTY=nutritioncolours.com`.

If live verification reveals the historical locality, clinic, fake-authority or honeypot surfaces, stop sitemap submission and deploy the current green artifact through the authorized release process.

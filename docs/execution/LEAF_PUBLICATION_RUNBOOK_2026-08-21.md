# Health and Food Leaf Publication Runbook

**Purpose:** operationalize the health-first, food-second master plan without reconnecting unreviewed legacy content.  
**Current state:** 2,173 Tier-1/Tier-2 records inventoried; 2,173 quarantined; 0 approved; 0 new leaf routes. A separate deterministic ledger contains 3,553 disconnected locality drafts.

Tier-3 nutrient/reference records are separately inventoried in `data/publishing/reference-registry.json`; 133 records are quarantined and cannot enter health/food routes.
Any new markdown-bearing top-level knowledge folder must first be declared as Tier 1, Tier 2, or Tier 3; the reference audit fails closed when it is not.

## Control plane now implemented

| Artifact | Role | May application source import it? |
|---|---|---|
| `data/publishing/leaf-registry.json` | Deterministic legacy inventory and machine triage | No |
| `data/publishing/leaf-duplicate-candidates.json` | Duplicate/collision review leads | No |
| `data/publishing/leaf-decisions.json` | Human-reviewed lifecycle overlay | No |
| `data/publishing/truth-registry.json` | Verified author, reviewer, source, claim, taxonomy, review-event, and relation records | No |
| `data/publishing/approved-leaves.json` | Generated approved-only projection | Yes; it is the only leaf data accepted by static routes |
| `data/publishing/location-quarantine.json` | Exact inventory and diagnostics for disconnected locality drafts | No |

The raw inventory cannot be edited to publish a page because `npm run leaf:audit` regenerates every record as quarantined. The only intended promotion path is a reviewed decision plus resolving truth records, followed by an approved-only compilation.

Use `docs/execution/PHASE_1_TRUTH_REGISTRY_WORKSHEET_2026-08-28.md` to collect the real human evidence before editing either trusted registry. The worksheet contains no publication facts and must not be used as an approval by itself.

## Mandatory transaction for one leaf

1. **Resolve the entity.** Confirm canonical name, aliases, scientific/clinical identity, primary intent, and whether the record is a duplicate, variant, symptom, condition, food, preparation, supplement, or extract.
2. **Resolve collisions.** Review every duplicate group containing the record. Select one canonical entity; record merge/redirect/retire decisions for competing sources.
3. **Rewrite outside the legacy tree.** Create a clean approved source; do not patch contaminated boilerplate into publishability.
4. **Build evidence records.** Register authoritative sources, verify identifiers/URLs, record retraction state and data/version/licensing where relevant.
5. **Build the claim ledger.** Approve exact wording, population, exposure/intervention, comparator, outcome, magnitude, timeframe, uncertainty, and allowed destinations.
6. **Verify author identity.** Register a real accountable author and verified public identity.
7. **Complete expert review.** Match reviewer scope to taxonomy, record conflicts, approval, review date, expiry, and the SHA-256 fingerprint of the exact UTF-8 content bytes reviewed. Any byte change invalidates the approval. Verified evidence records also require an access date and credential-free source URL; public identity links must be HTTPS.
8. **Complete editorial and compliance review.** Check FSSAI/medical advertising boundaries, privacy implications, accessibility, and absence of self-diagnosis/prescription/outcome promises.
9. **Record the lifecycle decision.** Add a single decision overlay for the legacy ID. A publish decision needs `approvalStatus: approved` and every field required by the validator.
10. **Compile and verify.** Run the commands below. The approved projection must contain exactly the intended record and no others.
11. **Compile into existing approved-only routes.** Health and food route generators consume `approved-leaves.json`, render static HTML, and remain blocked from all raw control files. With zero approved records, they emit zero leaf pages.
12. **Release as a cohort.** Verify production response, canonical, schema truth, internal links, sitemap, Pagefind, accessibility, performance, and rollback before sitemap submission.

## Required commands

```text
npm run leaf:audit
npm run leaf:compile
npm run location:audit
npm run release:verify
```

Every ordinary `npm run build` now runs registry synchronization, approved-projection synchronization, graph validation, adversarial policy tests, and the source safety gate before Astro builds.

## Decision overlay rules

- `publish`: one canonical leaf with a verified truth graph and `indexPolicy: index`.
- `rewrite`: valuable intent, but no route or canonical reservation.
- `merge`: requires a reviewed `mergeTargetLegacyId`; it does not create a redirect by itself.
- `redirect`: requires a verified destination stable ID and separately reviewed legacy public URLs.
- `quarantine`: default; no route and no search/feed/social eligibility.
- `retire`: requires a reason and, when historically public, an explicit 404/410 or equivalent-redirect decision.

Never auto-promote from a readiness score. Never infer taxonomy or redirect targets from folder similarity. Never let an LLM write directly to the decision or truth registries.

## Proposed first editorial cohorts

These are review candidates, not publication approvals. Final selection depends on relevant reviewer availability and source sufficiency.

### Tier 1 health pilot

Prefer a balanced set that tests definitions, chronic conditions, nutrition boundaries, emergency language, and duplicate resolution:

1. Hypertension
2. Type 2 diabetes
3. Iron-deficiency anemia
4. Vitamin B12 deficiency/pernicious anemia
5. Hypothyroidism
6. Polycystic ovary syndrome
7. Gastroesophageal reflux disease
8. Asthma
9. Celiac disease
10. Metabolic dysfunction-associated steatotic liver disease

Pages framed as “reversal,” broad multi-condition hubs, procedural/surgical topics, CKD diet prescriptions, medication discontinuation, or herb treatment should not lead the pilot. They are useful adversarial cases after the core workflow is proven.

### Tier 2 food pilot

Prefer whole-food records with recognized identity and composition sources before concentrated botanicals:

1. Mango
2. Guava
3. Spinach
4. Tomato
5. Carrot
6. Chickpeas
7. Lentils
8. Whole wheat/atta
9. Rice, with preparation-specific records
10. Flaxseed

Current near-ready food drafts often have only one external source. They still need independent composition/evidence sources, unit and serving verification, licensing review, and separation of composition facts from clinical claims.

## Page-level red-team checklist

### Content and evidence

- Does every quantitative or medical statement resolve to an approved claim and supporting source location?
- Is association clearly separated from causation?
- Are food, extract, supplement, dose, preparation, and population kept distinct?
- Are exact units, denominators, serving conversions, confidence intervals, and timeframes correct?
- Does the citation support the exact wording rather than only the general topic?
- Are contradictory evidence, uncertainty, limitations, and evidence gaps visible?
- Have retractions, corrections, dead links, and guideline replacements been checked?

### Safety and compliance

- Could a reader infer diagnosis, prescription, medication withdrawal, treatment delay, or a guaranteed outcome?
- Is urgent-help language specific, sourced, and proportionate?
- Are contraindications, interactions, allergens, toxins, high-risk groups, and professional-care boundaries handled where relevant?
- Are food health/disease-risk statements reviewed against current FSSAI requirements?
- Are commercial calls to action separated from fear-sensitive or treatment content?

### SEO/AEO/GEO/AIO

- Is there one distinct intent, title, H1, description, canonical entity, and route?
- Does the first 50–80 words answer the main question accurately and state a key limitation?
- Can each section be understood independently without misleading loss of context?
- Are headings descriptive and anchors stable?
- Are tables real semantic tables with sources and compatible units?
- Is structured data visible, truthful, and no stronger than the page?
- Are related links drawn only from reviewed relations?
- Does the page add information gain rather than summarize generic sources?

### Technical and UX

- Static HTML contains the answer, warnings, sources, author, and review information.
- No client-only content, raw HTML sink, unescaped JSON-LD, or imported control registry.
- No internal redirect links, broken fragments, raw spaces, orphan state, or route collision.
- Keyboard, screen-reader, zoom/reflow, focus, contrast, tables, and reduced-motion checks pass.
- Mobile LCP, INP, CLS, HTML/CSS/JS/image budgets, and low-end Android tests pass.

## Approved content contract now enforced

- Health entity types: condition, disease, symptom, health topic, body system, and life stage.
- Food entity types: fruit, vegetable, herb, spice, grain, pulse, seed, oil, dairy alternative, beverage, fermented food, functional food, and other food.
- Each entity type has required sections; unrelated boilerplate cannot satisfy another type's contract.
- Direct answers must be 35–100 words and every section begins with a bounded answer block.
- Every direct answer, paragraph, FAQ answer, and urgent-help message references declared claim IDs.
- Claim IDs do not override safety: affirmative cure/reversal/prevention promises, medication changes, diagnosis or prescription instructions fail content validation even when cited.
- HTML, JavaScript URLs, undeclared claims, duplicate section IDs, missing required sections, wrong entity types, and food-page emergency copy fail compilation.
- The compiler exposes only the evidence records actually cited in visible content.
- Every approved health or food leaf requires a verified in-scope reviewer, a non-expired review event, and a fingerprint matching the exact approved source bytes.
- Trusted graph rows reject unknown fields and enforce collection-specific ID namespaces, preventing unreviewed data-shape or prompt-like fields from silently acquiring authority.
- Verified authors require a factual role, correction owner, identity-verification and public-consent dates. Verified reviewers additionally require credential provenance, taxonomy scope, independence attestation, conflict disclosure and separate accountability from the author.
- Approved claims require population, exposure, comparator, outcome, magnitude, timeframe, uncertainty, exact source locators, a verified claim reviewer and explicit destination paths. A claim approved for one page cannot silently migrate to another.
- Approved review events require a scope summary, explicit conflict-review attestation, editorial/compliance dates and exact content fingerprint.
- Health conditions, diseases and symptoms render `MedicalWebPage`; general health topics, body systems, life stages and foods render `WebPage`. Editorial FAQs remain visible but are not given unsupported rich-result markup.
- Visible approved-leaf breadcrumbs and `BreadcrumbList` use the same reviewed labels and paths.

## Cohort release and rollback

1. Keep the cohort absent from sitemaps until production verification completes.
2. Capture the exact approved manifest hash and built canonical set.
3. Release Tier 1 health first; observe one defined review window before Tier 2.
4. If parity, safety, canonical, accessibility, or performance fails, remove the cohort projection/route, retain honest redirects when appropriate, and regenerate sitemap/search from the remaining approved set.
5. Record the incident and correction. Never conceal it with a silent edit or manufactured update date.

## Current blockers before any route work

- No verified truth-registry authors, reviewers, sources, claims, taxonomies, or review events exist yet.
- No lifecycle decisions have been approved.
- No clean approved content record has been written for a pilot entity.
- No clinical reviewer capacity or sign-off evidence has been provided.

The route and renderer foundation now exists, but emits no leaf while these blockers remain. The `/health` hub is deliberately `noindex` until approved children exist.

These blockers are intentional safeguards, not incomplete SEO work. The next implementation phase is to establish real verified identity/taxonomy/source records and rewrite the first approved pilot—not to weaken the gates.

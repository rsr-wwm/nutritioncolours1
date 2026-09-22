# Phase 1 Truth Registry Worksheet

**Project:** NutritionColours  
**Purpose:** collect the human-verifiable facts required to publish the first Tier-1 health leaf and, only after that workflow succeeds, the first Tier-2 food leaf.

This worksheet is intentionally outside `data/publishing/`. It is a review aid, not trusted input. Do not copy a placeholder, example identity, inferred credential, AI-generated citation, or unchecked date into the truth registry.

## Non-negotiable publication rule

A leaf stays quarantined unless every required value below is supported by a real record and accepted by the release validator. AI may summarize supplied evidence and identify omissions. AI may not invent a person, credential, conflict declaration, source, source location, approval, review date, fingerprint, or claim boundary.

Use `not-applicable` only when a human reviewer records why the field genuinely does not apply. It must never mean unknown, unavailable, not checked, or to be completed later.

## Step 1 — Select one canary entity

Complete one health page before opening a bulk cohort.

| Field | Human-confirmed value | Evidence or decision record |
|---|---|---|
| Legacy ID |  |  |
| Canonical name |  |  |
| Page kind (`health`) |  |  |
| Entity type |  |  |
| Canonical path |  |  |
| Aliases and disambiguation |  |  |
| Primary user intent |  |  |
| Duplicate/merge candidates checked |  |  |
| Why this entity is suitable for the pilot |  |  |
| Human decision owner and date |  |  |

Stop if the entity could be a symptom, preparation, supplement, extract, procedure, broad category, or duplicate and that ambiguity has not been resolved.

## Step 2 — Accountable author

Required trusted fields: `id`, `displayName`, `role`, `correctionOwner`, `verified`, `verifiedAt`, and `consentRecordedAt`. Optional public `profilePath` and `sameAs` values must be consented, truthful, and safe.

| Verification item | Human-confirmed value | Evidence location |
|---|---|---|
| Internal ID (`person:...`) |  |  |
| Display name |  |  |
| Actual role for this content |  |  |
| Identity verified by |  |  |
| Identity verification date |  |  |
| Public-display consent date |  |  |
| Correction ownership |  |  |
| Public profile path, if a real profile will exist |  |  |
| Consented HTTPS identity links, if any |  |  |

Do not create a public profile path until the matching factual profile page is ready. A path in the registry must not be treated as proof that a person exists.

## Step 3 — Independent, in-scope reviewer

The author and reviewer must be different accountable people for the page. Required trusted fields include credential provenance, review scope, consent, and an explicit conflict list. An empty conflict list means the reviewer explicitly declared no known conflicts; it must not mean the question was skipped.

| Verification item | Human-confirmed value | Evidence location |
|---|---|---|
| Internal ID (`person:...`) |  |  |
| Display name |  |  |
| Credential summary |  |  |
| Credential issuer |  |  |
| Credential jurisdiction |  |  |
| Credential verification date |  |  |
| Credential expiry, if applicable |  |  |
| Taxonomy scopes |  |  |
| Independence attestation date |  |  |
| Identity verification date |  |  |
| Public-display consent date |  |  |
| Conflicts declared |  |  |
| Reviewer independence confirmed by |  |  |

Stop if scope is inferred from a job title, a credential cannot be checked, the credential is expired, consent is missing, or the reviewer is outside the page taxonomy.

## Step 4 — Source register

Create one row per source. A verified source requires a title, publisher, credentials-free HTTPS URL, publication date or version, access date, retraction-check date, evidence type, jurisdiction, usage notes, and an explicit retraction state.

| Source ID | Title/publisher | URL | Published/version | Accessed | Retraction checked/state | Evidence type | Jurisdiction | Usage/license notes |
|---|---|---|---|---|---|---|---|---|
| `source:...:...` |  |  |  |  |  |  |  |  |
| `source:...:...` |  |  |  |  |  |  |  |  |

Opening a URL is not entailment verification. Record corrections, superseding guidance, population mismatch, food-versus-extract mismatch, and contradictory sources before approving claims.

## Step 5 — Atomic claim ledger

Split prose into claims small enough to verify independently. Every approved claim requires all applicability fields and an exact locator for every source, such as a guideline section, table, page, figure, paragraph heading, or stable fragment.

| Claim field | Human-confirmed value |
|---|---|
| Claim ID (`claim:...:...`) |  |
| Exact approved wording |  |
| Claim class |  |
| Population |  |
| Exposure/intervention |  |
| Comparator |  |
| Outcome |  |
| Magnitude |  |
| Timeframe |  |
| Uncertainty and limits |  |
| Source IDs |  |
| Exact source locator for each ID |  |
| Allowed destination path(s) |  |
| Claim reviewer ID and review date |  |
| Evidence grade, if the project adopts one |  |

Allowed claim classes are: `definition`, `composition`, `association`, `causal`, `clinical-guidance`, `safety`, `preparation`, `storage`, `allergen`, `interaction`, and `uncertainty`.

Reject a claim if its wording is stronger than its evidence, the cited location does not support the exact statement, it combines distinct populations or interventions, or it would encourage self-diagnosis, medication change, delayed care, guaranteed outcomes, cure/reversal, or universal safety.

## Step 6 — Taxonomy and reviewed relations

| Item | Human-confirmed value | Review evidence |
|---|---|---|
| Taxonomy ID (`health:...` or `food:...`) |  |  |
| Label |  |  |
| Page-kind match |  |  |
| Parent/broader relationship |  |  |
| Related entities shown to users |  |  |
| Relation reviewer and date |  |  |

Do not generate related links from folder proximity, embeddings, keyword similarity, or model confidence. Only approved relations may later drive reviewed recommendations.

## Step 7 — Exact review event

The review event is recorded only after the final approved content JSON is complete. Hash the exact UTF-8 bytes of that file. Any byte change after review invalidates the event and requires a new review.

| Review item | Human-confirmed value | Evidence location |
|---|---|---|
| Review ID (`review:...:YYYY-MM-DD`) |  |  |
| Stable content ID |  |  |
| Reviewer ID |  |  |
| Review date |  |  |
| Expiry date |  |  |
| Scope summary |  |  |
| Conflicts reviewed (`true` only after review) |  |  |
| Editorial approval date |  |  |
| Compliance approval date |  |  |
| Exact SHA-256 fingerprint |  |  |

Never reuse a fingerprint from a draft, normalize or reformat a reviewed file afterward, cosmetically refresh dates, or let the author self-attest the sole safety review.

## Step 8 — Registry entry sequence

1. Complete and independently verify this worksheet.
2. Add taxonomy, author, reviewer, and source records to `data/publishing/truth-registry.json`.
3. Add atomic claim records and exact source locators.
4. Write clean content in `data/publishing/content/health/` or `data/publishing/content/food/`; do not import legacy prose.
5. Perform expert, editorial, safety, accessibility, privacy, and compliance review.
6. Add the review event with the exact content fingerprint.
7. Add one reviewed lifecycle decision to `data/publishing/leaf-decisions.json`.
8. Compile and inspect the approved-only projection.
9. Run `npm run release:verify` and stop on any failure.
10. Release as a reversible canary before sitemap submission.

## Machine-enforced failure cases

The release now fails on unknown truth fields, wrong ID namespaces, unsafe profile/identity URLs, missing consent or verification dates, incomplete reviewer credential provenance, expired reviewer credentials, unstated source retraction state, future source dates, missing claim applicability boundaries, missing exact source locators, destination claim leakage, author/reviewer identity reuse, incomplete conflict attestation, invalid relation targets, stale review dates, or a content fingerprint mismatch.

## Human sign-off

| Gate | Owner | Decision | Date | Evidence reference |
|---|---|---|---|---|
| Entity resolution |  |  |  |  |
| Author identity/consent |  |  |  |  |
| Reviewer identity/credential/scope |  |  |  |  |
| Evidence and entailment |  |  |  |  |
| Medical/food safety |  |  |  |  |
| Editorial/accessibility |  |  |  |  |
| Privacy/compliance |  |  |  |  |
| Release approval |  |  |  |  |

No blank row is an approval. The first route remains absent until every applicable gate has an accountable human decision and verifiable evidence.

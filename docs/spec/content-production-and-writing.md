# Content Production Framework & Writing Standard (MRS §54, §55, §60)

**Date:** 2026-07-13. The automation-vs-human split, the editorial pipeline, and the voice standard, in one contributor guide.

## 1. Automate the derivable, human-review the judgment (§54.1)

**Auto-generatable from the graph, then human-reviewed before publish:** "foods high in [nutrient]" and "best foods for [condition]" first drafts, nutrient-composition cards, recipe nutrition math, internal links, JSON-LD schema, sitemaps, `llms.txt`, breadcrumbs, related-entity blocks.

**Never automated (human + clinical judgment):** health claims, evidence grades, safety/contraindications, clinical review sign-off, voice.

Generation must be **idempotent and regenerable from source** (registry + composition data) so a data fix propagates everywhere without manual page edits (§54.3). Programmatic pages clear the same quality bar as hand-written ones — the guardrail against becoming the thin-content problem the clinic pages already are (§54.5).

## 2. Editorial pipeline (§55.1)

`brief (from fan-out/gap backlog) → draft (human or AI-assisted) → fact + citation check → clinical review (named reviewer applies evidence grades) → SEO/AEO/schema check → publish → scheduled refresh`.

Roles: author · **clinical reviewer (credentialed — Dr. Shilpa Thakur or delegate)** · editor · technical/SEO reviewer. **No YMYL page publishes without clinical sign-off** (§47, §55.2). State machine-tracked, tied to lifecycle states (§10.6), reportable (pages per state). Must sustain ≥50 pages/week without quality decay (§55.5), measured by review-rejection-rate + post-publish-error rate.

## 3. Humanized writing standard (§60) — voice, not evasion

The goal is authentic clinical-expert voice; the practical bar is that content must not read as machine-generated to an editor. Achieve it through genuine **information gain**, specificity, cited data, and practitioner perspective — the same properties that win AI citations (§39). Humanization and citability are one objective.

**Do:** vary sentence rhythm/length; lead with the concrete specific; use real practitioner observations; give numbers and sources; write in Dr. Shilpa's clinical voice.

**Ban (formulaic AI tells):** "in today's fast-paced world", "it's important to note", "delve", "unlock", "when it comes to", "a testament to", reflexive tricolons, hedge-everything register, empty intros before the point.

**Every page must say something the top existing sources don't** (information gain is mandatory, §60.3). No AI-content firehose: AI may draft and structure; humans verify facts, grades, safety, and voice (§54.2, §60.5).

## 4. Brand voice (§60.4)
Machines reward factual consistency; humans reward distinctiveness — do both. Consistent entity-layer facts everywhere + unmistakable NutritionColours practitioner tone (India-first, circadian/metabolic framing, plain-language clinical).

## 5. Continuous update (§56)
Content-decay CI flags money pages with `dateModified` >90 days (>180 evergreen) → auto refresh ticket. Citation-health recheck (§37.5). Data-propagation on source change (§54.3). Real telemetry replaces the stub JSONs (§56.4).

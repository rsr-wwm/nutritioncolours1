// Populates src/lib/constants.tsx's RECIPE_SPECIFIC_FAQS (a plain Record<string,
// FAQ[]>, not an array of entities like the condition/herb/topic generators) with
// real, derived FAQs for all 40 recipes in src/lib/recipes_database.ts. Currently
// only 1 of 40 recipes has any entry (with a single hand-written FAQ) — the
// rendering path (recipe/[recipe_id].astro's Accordion section) already exists
// and is real server-rendered HTML, it's just never had data to show for 39 of 40
// recipes.
//
// Every FAQ is derived from a recipe's own real fields — description,
// healingDescription, primaryBenefit, prepTime, calories, tags, ingredients,
// preparedBy, and fullHealingContent (split into its own real per-ingredient
// paragraphs, each already a genuine distinct fact about that recipe) — no new
// content invented. Existing FAQs (the one hand-written entry) are preserved.
//
// Run: npx tsx scripts/add-faqs-recipes.ts

import * as ts from 'typescript';
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { RECIPES } from '../src/lib/recipes_database';
import { RECIPE_SPECIFIC_FAQS } from '../src/lib/constants';

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILE_PATH = path.join(REPO_ROOT, 'src', 'lib', 'constants.tsx');
const TARGET_FAQ_COUNT = 15;

type FAQ = { question: string; answer: string; category: string };

function shortLabel(s: string): string {
  return s.split(' (')[0].trim();
}

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();
}

function dedupeAppend(existing: FAQ[], candidates: FAQ[], target: number): FAQ[] {
  const seenQuestions = new Set(existing.map((f) => normalize(f.question)));
  const seenAnswers = new Set(existing.map((f) => normalize(f.answer)));
  const result = [...existing];
  for (const c of candidates) {
    if (result.length >= target) break;
    const qKey = normalize(c.question);
    const aKey = normalize(c.answer);
    if (seenQuestions.has(qKey) || seenAnswers.has(aKey)) continue;
    seenQuestions.add(qKey);
    seenAnswers.add(aKey);
    result.push(c);
  }
  return result;
}

function recipeCandidates(recipe: any): FAQ[] {
  const anchors: FAQ[] = [];

  if (recipe.description) {
    anchors.push({ question: `What is ${recipe.title}?`, answer: recipe.description, category: 'Overview' });
  }
  if (recipe.healingDescription) {
    anchors.push({
      question: `What makes ${recipe.title} a therapeutic recipe?`,
      answer: recipe.healingDescription,
      category: 'Healing Benefits',
    });
  }
  if (recipe.primaryBenefit) {
    anchors.push({
      question: `What is the primary health benefit of ${recipe.title}?`,
      answer: `The primary benefit of ${recipe.title} is ${recipe.primaryBenefit}.`,
      category: 'Primary Benefit',
    });
  }
  if (recipe.prepTime) {
    anchors.push({
      question: `How long does ${recipe.title} take to prepare?`,
      answer: `${recipe.title} takes ${recipe.prepTime} to prepare.`,
      category: 'Prep Time',
    });
  }
  if (recipe.calories) {
    anchors.push({
      question: `How many calories does ${recipe.title} have?`,
      answer: `${recipe.title} contains approximately ${recipe.calories} calories.`,
      category: 'Nutrition',
    });
  }
  if (recipe.tags?.length) {
    anchors.push({
      question: `What are the key attributes of ${recipe.title}?`,
      answer: `${recipe.title} is tagged as: ${recipe.tags.join(', ')}.`,
      category: 'Attributes',
    });
  }
  if (recipe.ingredients?.length) {
    anchors.push({
      question: `What ingredients do I need for ${recipe.title}?`,
      answer: recipe.ingredients.map((i: any) => `${i.name} (${i.detail})`).join(', '),
      category: 'Ingredients',
    });
  }
  if (recipe.preparedBy) {
    anchors.push({
      question: `Who created the ${recipe.title} recipe?`,
      answer: `${recipe.title} was prepared by ${recipe.preparedBy}.`,
      category: 'Attribution',
    });
  }

  // fullHealingContent is real prose already on the page, structured as
  // "Ingredient (Label): explanation" paragraphs separated by blank lines (see
  // recipe/[recipe_id].astro's own rendering, which parses it the same way).
  // Splitting it here mirrors that existing parse, not a new interpretation.
  const contentFaqs = ((recipe.fullHealingContent || '') as string)
    .split('\n\n')
    .map((chunk: string) => {
      const idx = chunk.indexOf(':');
      if (idx === -1) return null;
      const label = chunk.slice(0, idx).trim();
      const body = chunk.slice(idx + 1).trim();
      if (!label || !body) return null;
      return {
        question: `What are the health benefits of ${shortLabel(label)} in ${recipe.title}?`,
        answer: body,
        category: 'Ingredient Benefits',
      };
    })
    .filter((f): f is FAQ => f !== null);

  return [...anchors, ...contentFaqs];
}

function main() {
  const sourceText = readFileSync(FILE_PATH, 'utf8');
  const sourceFile = ts.createSourceFile(FILE_PATH, sourceText, ts.ScriptTarget.Latest, true);
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  function faqArrayLiteral(faqs: FAQ[], indent: string): string {
    const objectNodes = faqs.map((f) =>
      ts.factory.createObjectLiteralExpression(
        [
          ts.factory.createPropertyAssignment('question', ts.factory.createStringLiteral(f.question)),
          ts.factory.createPropertyAssignment('answer', ts.factory.createStringLiteral(f.answer)),
          ts.factory.createPropertyAssignment('category', ts.factory.createStringLiteral(f.category)),
        ],
        true,
      ),
    );
    const arrayNode = ts.factory.createArrayLiteralExpression(objectNodes, true);
    const printed = printer.printNode(ts.EmitHint.Expression, arrayNode, sourceFile);
    return printed
      .split('\n')
      .map((line, i) => (i === 0 ? line : indent + line))
      .join('\n');
  }

  type Edit = { start: number; end: number; text: string };
  const edits: Edit[] = [];
  let recipesEdited = 0;
  let faqsAdded = 0;

  ts.forEachChild(sourceFile, (node) => {
    if (!ts.isVariableStatement(node)) return;
    for (const decl of node.declarationList.declarations) {
      if (!ts.isIdentifier(decl.name) || decl.name.text !== 'RECIPE_SPECIFIC_FAQS') continue;
      if (!decl.initializer || !ts.isObjectLiteralExpression(decl.initializer)) continue;

      const objLiteral = decl.initializer;
      const existingProps = new Map<string, ts.PropertyAssignment>();
      for (const p of objLiteral.properties) {
        if (!ts.isPropertyAssignment(p)) continue;
        const key = ts.isStringLiteral(p.name) ? p.name.text : ts.isIdentifier(p.name) ? p.name.text : null;
        if (key) existingProps.set(key, p);
      }

      // Base indent: read the FIRST property's own line indent (its distance from
      // the start of its line), not the opening brace's column — the brace sits
      // at the end of a long `export const ... = {` line, so its column position
      // has nothing to do with the file's actual nesting/indent convention.
      const firstProp = objLiteral.properties[0];
      const firstPropLineStart = sourceFile.getLineStarts()[
        sourceFile.getLineAndCharacterOfPosition(firstProp.getStart(sourceFile)).line
      ];
      const propIndentSize = firstProp.getStart(sourceFile) - firstPropLineStart;
      const propIndent = ' '.repeat(propIndentSize);
      const arrayIndent = ' '.repeat(propIndentSize + 4);

      // All brand-new properties land at the same insertion point (end of the
      // last existing property, or right after the opening brace if the object
      // is empty) — batched into ONE combined edit rather than N separate edits
      // at an identical position, which would make their relative order
      // (and comma placement) depend on splice-application order instead of
      // simply being appended in the order we iterate RECIPES.
      const insertionPoint = objLiteral.properties.length > 0
        ? objLiteral.properties[objLiteral.properties.length - 1].getEnd()
        : objLiteral.getStart(sourceFile) + 1;
      let newPropsText = '';

      for (const recipe of RECIPES as any[]) {
        const existingFaqs: FAQ[] = (RECIPE_SPECIFIC_FAQS as any)[recipe.id] || [];
        const candidates = recipeCandidates(recipe);
        const finalFaqs = dedupeAppend(existingFaqs, candidates, TARGET_FAQ_COUNT);
        if (finalFaqs.length === existingFaqs.length) continue;

        faqsAdded += finalFaqs.length - existingFaqs.length;
        recipesEdited++;
        const newArrayText = faqArrayLiteral(finalFaqs, arrayIndent);

        const existingProp = existingProps.get(recipe.id);
        if (existingProp) {
          edits.push({
            start: existingProp.initializer.getStart(sourceFile),
            end: existingProp.initializer.getEnd(),
            text: newArrayText,
          });
        } else {
          newPropsText += `\n${propIndent}'${recipe.id}': ${newArrayText},`;
        }
      }

      if (newPropsText) {
        // The insertion point sits right after an existing property's value with
        // no trailing comma of its own (or right after `{` if the object was
        // empty) — only prepend a separating comma in the former case.
        const needsLeadingComma = objLiteral.properties.length > 0;
        edits.push({
          start: insertionPoint,
          end: insertionPoint,
          text: (needsLeadingComma ? ',' : '') + newPropsText,
        });
      }
    }
  });

  // Every edit now targets a distinct, non-overlapping position (the one
  // insertion point for all-new properties was batched into a single combined
  // edit above), so a simple descending-start sort is sufficient.
  edits.sort((a, b) => b.start - a.start);
  let newText = sourceText;
  for (const edit of edits) {
    newText = newText.slice(0, edit.start) + edit.text + newText.slice(edit.end);
  }

  writeFileSync(FILE_PATH, newText);
  console.log(`Recipes edited: ${recipesEdited}/${(RECIPES as any[]).length}. Total new FAQs added: ${faqsAdded}.`);
}

main();

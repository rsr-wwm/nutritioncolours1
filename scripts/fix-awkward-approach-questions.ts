// One-off fix for a narrow phrasing bug introduced by scripts/add-faqs-topics.ts:
// the "Natural Approach" FAQ template quoted the raw naturalApproach string in the
// question ("Does \"...\" help with X?"), which reads fine for short labels ("Does
// \"Post-meal walking\" help with X?") but is awkward when that field happens to be
// a full sentence rather than a short phrase (~15-23 of 242 topics).
//
// This edits ONLY the `question` text of existing "Natural Approach" FAQ entries
// matching that pattern with a long quoted portion — the `answer` is untouched, and
// no new FAQ entries are added (re-running the additive generator wouldn't fix this,
// since its answer-text dedup would just skip a corrected version as a duplicate).
//
// Run: npx tsx scripts/fix-awkward-approach-questions.ts

import * as ts from 'typescript';
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILE_PATH = path.join(REPO_ROOT, 'src', 'lib', 'topics.ts');
const QUOTED_LONG = /^Does "(.{41,})" help with (.+)\?$/;

function main() {
  const sourceText = readFileSync(FILE_PATH, 'utf8');
  const sourceFile = ts.createSourceFile(FILE_PATH, sourceText, ts.ScriptTarget.Latest, true);

  type Edit = { start: number; end: number; text: string };
  const edits: Edit[] = [];
  let fixed = 0;

  function visit(node: ts.Node) {
    if (ts.isObjectLiteralExpression(node)) {
      const questionProp = node.properties.find(
        (p): p is ts.PropertyAssignment => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === 'question',
      );
      const categoryProp = node.properties.find(
        (p): p is ts.PropertyAssignment => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === 'category',
      );
      if (
        questionProp &&
        categoryProp &&
        ts.isStringLiteral(questionProp.initializer) &&
        ts.isStringLiteral(categoryProp.initializer) &&
        categoryProp.initializer.text === 'Natural Approach'
      ) {
        const match = questionProp.initializer.text.match(QUOTED_LONG);
        if (match) {
          const title = match[2];
          const newQuestion = `What dietary or lifestyle approach helps with ${title}?`;
          const newLiteral = ts.factory.createStringLiteral(newQuestion);
          const printer = ts.createPrinter();
          const printed = printer.printNode(ts.EmitHint.Unspecified, newLiteral, sourceFile);
          edits.push({
            start: questionProp.initializer.getStart(sourceFile),
            end: questionProp.initializer.getEnd(),
            text: printed,
          });
          fixed++;
        }
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sourceFile);

  edits.sort((a, b) => b.start - a.start);
  let newText = sourceText;
  for (const edit of edits) {
    newText = newText.slice(0, edit.start) + edit.text + newText.slice(edit.end);
  }

  writeFileSync(FILE_PATH, newText);
  console.log(`Fixed ${fixed} awkward "Natural Approach" question(s).`);
}

main();

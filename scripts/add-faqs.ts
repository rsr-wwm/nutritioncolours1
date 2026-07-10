// Adds FAQ entries to MEDICAL_CONDITIONS_DATA and HERBS_SPICES_DATA in
// src/lib/clinical_databases.ts, targeting ~10 FAQs per entity.
//
// Every new FAQ is DERIVED from that entity's own existing structured fields
// (rootCause, biomarkers, therapeuticSpices, prohibitedFoods, circadianAdvice,
// citations for conditions; primaryMechanism, scientificName, dosage,
// activeCompounds, contraindications, synergies, citations for herbs) — no new
// clinical claims are invented. Existing FAQs are preserved untouched and new
// ones are appended after them. If an entity's real data doesn't support 10
// genuinely distinct FAQs, it gets fewer rather than padded/invented content.
//
// Edits are applied surgically via the TypeScript compiler API (parse once,
// splice the original source text at exact node offsets) so nothing outside
// the `faqs` property of each entity is touched — formatting, comments, and
// every other field are left exactly as they were.
//
// Run: npx tsx scripts/add-faqs.ts

import * as ts from 'typescript';
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { MEDICAL_CONDITIONS_DATA, HERBS_SPICES_DATA } from '../src/lib/clinical_databases';

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILE_PATH = path.join(REPO_ROOT, 'src', 'lib', 'clinical_databases.ts');
const TARGET_FAQ_COUNT = 10;

type FAQ = { question: string; answer: string; category: string };

function shortLabel(s: string): string {
  return s.split(' (')[0].trim();
}

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();
}

// Dedupes on BOTH question and answer text — two differently-worded questions
// that resolve to the identical underlying fact (e.g. an existing FAQ already
// covers what a new template would ask, just phrased differently) are just as
// redundant as two identical questions, and several source fields legitimately
// contain the exact same string as another field (e.g. `solution` and
// `naturalApproach[0]` are often identical), so answer-level dedup is necessary,
// not just question-level.
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

function interleave<T>(lists: T[][]): T[] {
  const out: T[] = [];
  const queues = lists.map((l) => [...l]);
  let added = true;
  while (added) {
    added = false;
    for (const q of queues) {
      const item = q.shift();
      if (item !== undefined) {
        out.push(item);
        added = true;
      }
    }
  }
  return out;
}

function conditionCandidates(cond: any): FAQ[] {
  const anchors: FAQ[] = [];
  if (cond.rootCause) {
    anchors.push({
      question: `What causes ${cond.name}?`,
      answer: cond.rootCause,
      category: 'Root Cause',
    });
  }
  if (cond.circadianAdvice) {
    anchors.push({
      question: `What meal-timing or circadian approach helps manage ${cond.name}?`,
      answer: cond.circadianAdvice,
      category: 'Circadian',
    });
  }
  if (cond.citations?.length) {
    anchors.push({
      question: `What clinical research supports this ${cond.name} protocol?`,
      answer: cond.citations.map((c: any) => c.text).join(' '),
      category: 'Evidence',
    });
  }

  const biomarkerFaqs = (cond.biomarkers || []).map((b: string) => ({
    question: `Why is ${shortLabel(b)} tracked for ${cond.name}?`,
    answer: `${b} is one of the key biomarkers used to monitor ${cond.name} and track whether the current protocol is working.`,
    category: 'Biomarkers',
  }));
  const spiceFaqs = (cond.therapeuticSpices || []).map((s: string) => ({
    question: `Does ${shortLabel(s)} help with ${cond.name}?`,
    answer: `${s} is one of the therapeutic spices used as part of the ${cond.name} protocol.`,
    category: 'Therapeutic Spices',
  }));
  const foodFaqs = (cond.prohibitedFoods || []).map((f: string) => ({
    question: `Why should I avoid ${shortLabel(f)} with ${cond.name}?`,
    answer: `${f} is one of the foods to avoid or limit while managing ${cond.name}.`,
    category: 'Foods to Avoid',
  }));

  return [...anchors, ...interleave<FAQ>([biomarkerFaqs, spiceFaqs, foodFaqs])];
}

function herbCandidates(herb: any): FAQ[] {
  const anchors: FAQ[] = [];
  if (herb.primaryMechanism) {
    anchors.push({
      question: `What is ${herb.name} and how does it work?`,
      answer: herb.primaryMechanism,
      category: 'Mechanism',
    });
  }
  if (herb.scientificName) {
    anchors.push({
      question: `What is the scientific name of ${herb.name}?`,
      answer: `${herb.name}'s scientific name is ${herb.scientificName}.`,
      category: 'Identification',
    });
  }
  if (herb.dosage?.range) {
    anchors.push({
      question: `What is the recommended dosage of ${herb.name}?`,
      answer: `${herb.dosage.range}${herb.dosage.instruction ? ` ${herb.dosage.instruction}` : ''}`,
      category: 'Dosage',
    });
  }
  if (herb.activeCompounds?.length) {
    anchors.push({
      question: `What are the active compounds in ${herb.name}?`,
      answer: `The key active compounds in ${herb.name} include ${herb.activeCompounds.join(', ')}.`,
      category: 'Active Compounds',
    });
  }
  if (herb.contraindications?.length) {
    anchors.push({
      question: `Who should avoid ${herb.name}?`,
      answer: herb.contraindications.join(' '),
      category: 'Contraindications',
    });
  }
  if (herb.citations?.length) {
    anchors.push({
      question: `What clinical research supports the use of ${herb.name}?`,
      answer: herb.citations.map((c: any) => c.text).join(' '),
      category: 'Evidence',
    });
  }

  const synergyFaqs = (herb.synergies || []).map((s: string) => ({
    question: `Does ${herb.name} combine well with ${shortLabel(s)}?`,
    answer: `Yes — ${herb.name} pairs well with ${s}.`,
    category: 'Synergies',
  }));

  return [...anchors, ...synergyFaqs];
}

// --- AST-based surgical edit ---

function main() {
  const sourceText = readFileSync(FILE_PATH, 'utf8');
  const sourceFile = ts.createSourceFile(FILE_PATH, sourceText, ts.ScriptTarget.Latest, true);
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  type Edit = { start: number; end: number; text: string; id: string };
  const edits: Edit[] = [];
  let conditionsSeen = 0;
  let herbsSeen = 0;
  let faqsAdded = 0;

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
    // Re-indent the printed (default 4-space) array to match the surrounding source.
    return printed
      .split('\n')
      .map((line, i) => (i === 0 ? line : indent + line))
      .join('\n');
  }

  function processArray(arrayNode: ts.ArrayLiteralExpression, kind: 'condition' | 'herb') {
    for (const element of arrayNode.elements) {
      if (!ts.isObjectLiteralExpression(element)) continue;
      const idProp = element.properties.find(
        (p): p is ts.PropertyAssignment =>
          ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === 'id',
      );
      if (!idProp || !ts.isStringLiteral(idProp.initializer)) continue;
      const id = idProp.initializer.text;

      if (kind === 'condition') conditionsSeen++;
      else herbsSeen++;

      const liveEntity = (kind === 'condition' ? MEDICAL_CONDITIONS_DATA : HERBS_SPICES_DATA).find(
        (e: any) => e.id === id,
      );
      if (!liveEntity) continue;

      const existingFaqs: FAQ[] = liveEntity.faqs || [];
      const candidates = kind === 'condition' ? conditionCandidates(liveEntity) : herbCandidates(liveEntity);
      const finalFaqs = dedupeAppend(existingFaqs, candidates, TARGET_FAQ_COUNT);
      if (finalFaqs.length === existingFaqs.length) continue; // nothing new to add

      faqsAdded += finalFaqs.length - existingFaqs.length;

      const faqsProp = element.properties.find(
        (p): p is ts.PropertyAssignment => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === 'faqs',
      );

      // Indentation: read the whitespace preceding this object's first property.
      const firstProp = element.properties[0];
      const lineStart = sourceFile.getLineAndCharacterOfPosition(firstProp.getStart(sourceFile)).character;
      const indent = ' '.repeat(Math.max(lineStart - 2, 2)); // property indent minus one level

      const newArrayText = faqArrayLiteral(finalFaqs, indent);

      if (faqsProp) {
        // Replace only the array literal (the value), not the `faqs:` key.
        const valueNode = faqsProp.initializer;
        edits.push({ start: valueNode.getStart(sourceFile), end: valueNode.getEnd(), text: newArrayText, id });
      } else {
        // Insert a new `faqs: [...]` property right after `citations` (present
        // on every entity), or after the last property if citations is absent.
        const citationsProp = element.properties.find(
          (p) => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === 'citations',
        );
        const anchorProp = citationsProp || element.properties[element.properties.length - 1];
        const anchorEnd = anchorProp.getEnd();
        const propIndent = ' '.repeat(lineStart);
        edits.push({
          start: anchorEnd,
          end: anchorEnd,
          text: `,\n${propIndent}faqs: ${newArrayText}`,
          id,
        });
      }
    }
  }

  ts.forEachChild(sourceFile, (node) => {
    if (ts.isVariableStatement(node)) {
      for (const decl of node.declarationList.declarations) {
        if (!ts.isIdentifier(decl.name) || !decl.initializer || !ts.isArrayLiteralExpression(decl.initializer)) continue;
        if (decl.name.text === 'MEDICAL_CONDITIONS_DATA') processArray(decl.initializer, 'condition');
        if (decl.name.text === 'HERBS_SPICES_DATA') processArray(decl.initializer, 'herb');
      }
    }
  });

  // Apply edits from the end of the file backward so earlier offsets stay valid.
  edits.sort((a, b) => b.start - a.start);
  let newText = sourceText;
  for (const edit of edits) {
    newText = newText.slice(0, edit.start) + edit.text + newText.slice(edit.end);
  }

  writeFileSync(FILE_PATH, newText);
  console.log(
    `Conditions seen: ${conditionsSeen}, herbs seen: ${herbsSeen}. Entities edited: ${edits.length}. Total new FAQs added: ${faqsAdded}.`,
  );
}

main();

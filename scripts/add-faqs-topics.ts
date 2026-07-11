// Adds FAQ entries to TOPICS in src/data/topics.ts (a symlink to src/lib/topics.ts —
// this script edits the real underlying file directly), targeting ~10 FAQs per topic.
//
// Same approach as scripts/add-faqs.ts (see that file for the full rationale): every
// new FAQ is derived from the topic's own existing fields — problem/cause, solution,
// hiddenFact, whenAge, herbs, lifestyle, caseStudy, aiSummaryBlock.tldr, naturalApproach,
// expandedSections — no new clinical claims invented. Existing FAQs are preserved and
// new ones appended, capped at 10, with fewer added when a topic's real data doesn't
// support that many genuinely distinct questions.
//
// Run: npx tsx scripts/add-faqs-topics.ts

import * as ts from 'typescript';
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { TOPICS } from '../src/lib/topics';

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Real underlying file — src/data/topics.ts is a symlink to this (src/data is itself
// a symlink to src/lib). Editing the real path keeps this consistent with how
// scripts/generate-content-freshness.ts already had to work around the same symlinks.
const FILE_PATH = path.join(REPO_ROOT, 'src', 'lib', 'topics.ts');
const TARGET_FAQ_COUNT = 10;

type FAQ = { question: string; answer: string; category: string };

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();
}

// Dedupes on BOTH question and answer text. Topics frequently repeat the exact
// same string across fields (e.g. `solution` and `naturalApproach[0]` are often
// identical, and `problem`/`cause` usually are too) and many topics already had
// hand-written FAQs covering the same ground with different phrasing — question-
// only dedup let those slip through as near-duplicate FAQs with identical answers.
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

function headingToQuestion(heading: string): string {
  const trimmed = heading.trim().replace(/[.:]+$/, '');
  return /\?$/.test(trimmed) ? trimmed : `${trimmed}?`;
}

function topicCandidates(topic: any): FAQ[] {
  const anchors: FAQ[] = [];

  // `cause` is frequently a near-duplicate of `problem` on the same topic — using
  // the identical question phrasing for both lets dedupeAppend naturally skip the
  // redundant one (whichever is present is used; `cause` preferred as it's usually
  // the more concise, FAQ-friendly phrasing).
  const causeText = topic.cause || topic.problem;
  if (causeText) {
    anchors.push({ question: `What causes ${topic.title}?`, answer: causeText, category: 'Root Cause' });
  }
  if (topic.solution) {
    anchors.push({
      question: `How can I address ${topic.title} through nutrition?`,
      answer: topic.solution,
      category: 'Solution',
    });
  }
  if (topic.hiddenFact) {
    anchors.push({
      question: `Is there a lesser-known fact about ${topic.title}?`,
      answer: topic.hiddenFact,
      category: 'Hidden Fact',
    });
  }
  if (topic.whenAge) {
    anchors.push({
      question: `At what age does ${topic.title} typically become a concern?`,
      answer: `${topic.title} typically becomes a concern around ${topic.whenAge}.`,
      category: 'Age & Risk',
    });
  }
  if (topic.herbs) {
    anchors.push({
      question: `What herbs or spices help with ${topic.title}?`,
      answer: topic.herbs,
      category: 'Herbs',
    });
  }
  if (topic.lifestyle) {
    anchors.push({
      question: `What lifestyle changes help with ${topic.title}?`,
      answer: topic.lifestyle,
      category: 'Lifestyle',
    });
  }
  if (topic.caseStudy?.finding) {
    anchors.push({
      question: `What results have patients seen with ${topic.title}?`,
      answer: `${topic.caseStudy.finding}${topic.caseStudy.narrative ? ` ${topic.caseStudy.narrative}` : ''}`,
      category: 'Case Study',
    });
  }
  if (topic.aiSummaryBlock?.tldr) {
    anchors.push({
      question: `Can you summarize ${topic.title} in brief?`,
      answer: topic.aiSummaryBlock.tldr,
      category: 'Summary',
    });
  }
  if (topic.shortDesc) {
    anchors.push({
      question: `What is ${topic.title}?`,
      answer: topic.shortDesc,
      category: 'Overview',
    });
  }
  if (topic.scientificName) {
    anchors.push({
      question: `What is the medical/scientific term for ${topic.title}?`,
      answer: `${topic.title} is also referred to as ${topic.scientificName}.`,
      category: 'Identification',
    });
  }
  if (topic.fullContent) {
    // First sentence only — a safe, mechanical extraction (real text already on
    // the page), not a synthesized summary of the rest of the article body.
    const firstSentence = topic.fullContent.split(/(?<=[.!?])\s+/)[0];
    if (firstSentence && firstSentence.length > 20) {
      anchors.push({
        question: `Can you explain ${topic.title} in more depth?`,
        answer: firstSentence,
        category: 'In-Depth',
      });
    }
  }

  const approachFaqs = (topic.naturalApproach || []).map((a: string) => ({
    question: `Does "${a}" help with ${topic.title}?`,
    answer: `Yes — ${a} is one of the natural approaches recommended for ${topic.title}.`,
    category: 'Natural Approach',
  }));
  const sectionFaqs = (topic.expandedSections || [])
    .filter((s: any) => s.heading && s.body)
    .map((s: any) => ({
      question: headingToQuestion(s.heading),
      answer: s.body,
      category: 'Deep Dive',
    }));

  return [...anchors, ...interleave<FAQ>([sectionFaqs, approachFaqs])];
}

function main() {
  const sourceText = readFileSync(FILE_PATH, 'utf8');
  const sourceFile = ts.createSourceFile(FILE_PATH, sourceText, ts.ScriptTarget.Latest, true);
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  type Edit = { start: number; end: number; text: string };
  const edits: Edit[] = [];
  let topicsSeen = 0;
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
    return printed
      .split('\n')
      .map((line, i) => (i === 0 ? line : indent + line))
      .join('\n');
  }

  ts.forEachChild(sourceFile, (node) => {
    if (!ts.isVariableStatement(node)) return;
    for (const decl of node.declarationList.declarations) {
      if (!ts.isIdentifier(decl.name) || decl.name.text !== 'TOPICS') continue;
      if (!decl.initializer || !ts.isArrayLiteralExpression(decl.initializer)) continue;

      for (const element of decl.initializer.elements) {
        if (!ts.isObjectLiteralExpression(element)) continue;
        const idProp = element.properties.find(
          (p): p is ts.PropertyAssignment =>
            ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === 'id',
        );
        if (!idProp || !ts.isStringLiteral(idProp.initializer)) continue;
        const id = idProp.initializer.text;
        topicsSeen++;

        const liveTopic = (TOPICS as any[]).find((t) => t.id === id);
        if (!liveTopic) continue;

        const existingFaqs: FAQ[] = liveTopic.faqs || [];
        const candidates = topicCandidates(liveTopic);
        const finalFaqs = dedupeAppend(existingFaqs, candidates, TARGET_FAQ_COUNT);
        if (finalFaqs.length === existingFaqs.length) continue;

        faqsAdded += finalFaqs.length - existingFaqs.length;

        const faqsProp = element.properties.find(
          (p): p is ts.PropertyAssignment => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === 'faqs',
        );

        const firstProp = element.properties[0];
        const lineStart = sourceFile.getLineAndCharacterOfPosition(firstProp.getStart(sourceFile)).character;
        const indent = ' '.repeat(Math.max(lineStart - 2, 2));
        const newArrayText = faqArrayLiteral(finalFaqs, indent);

        if (faqsProp) {
          const valueNode = faqsProp.initializer;
          edits.push({ start: valueNode.getStart(sourceFile), end: valueNode.getEnd(), text: newArrayText });
        } else {
          // Insert right after `naturalApproach` (present on every topic), or the
          // last property if that's somehow absent.
          const anchorProp =
            element.properties.find(
              (p) => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === 'naturalApproach',
            ) || element.properties[element.properties.length - 1];
          const anchorEnd = anchorProp.getEnd();
          const propIndent = ' '.repeat(lineStart);
          edits.push({ start: anchorEnd, end: anchorEnd, text: `,\n${propIndent}faqs: ${newArrayText}` });
        }
      }
    }
  });

  edits.sort((a, b) => b.start - a.start);
  let newText = sourceText;
  for (const edit of edits) {
    newText = newText.slice(0, edit.start) + edit.text + newText.slice(edit.end);
  }

  writeFileSync(FILE_PATH, newText);
  console.log(`Topics seen: ${topicsSeen}. Entities edited: ${edits.length}. Total new FAQs added: ${faqsAdded}.`);
}

main();

import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

// Configuration
const KNOWLEDGE_DIR = path.join(process.cwd(), 'src', 'content', 'knowledge');
const QUARANTINE_FILE = path.join(process.cwd(), 'optimization-quarantine.json');
const MAX_CONCURRENT = 5;

// System Prompts
const SYSTEM_PROMPT = `You are a specialized Multi-Agent Content Optimization System consisting of 3 roles:
1. SEO/Intent Strategist: Analyze the text to identify user search intent and generate semantic, long-tail keywords (SEO, GEO, AEO, AIO).
2. Content Restructurer: Rewrite the content strictly breaking it into 4-7 line paragraphs. Each paragraph MUST directly address one primary user intent question. Give every paragraph a descriptive, keyword-rich heading (H2 for main sections, H3 for subtopics). Ensure semantic flow.
3. FAQ Generator & QA: Extract FAQs based on the content's meaning. Output them inside semantic <details> blocks for Featured Snippet optimization.

REQUIREMENTS:
- Do NOT hallucinate medical advice. Retain the exact clinical facts from the original text.
- Preserve the exact YAML frontmatter from the original file, but you may append new keywords to the 'seoKeywords' array.
- Structure:
  [Frontmatter]
  ## [Keyword Rich H2]
  [4-7 lines of optimized text]
  ### [Keyword Rich H3]
  [4-7 lines of text]
  ## Frequently Asked Questions
  <details>
    <summary>Question?</summary>
    <p>Answer.</p>
  </details>

Output ONLY the raw markdown file. Do not wrap in markdown code blocks unless it's part of the file.`;

async function callGemini(prompt, text, fallback = false) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY environment variable is missing.");

  const model = fallback ? 'gemini-1.5-flash' : 'gemini-1.5-pro';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const payload = {
    system_instruction: { parts: [{ text: prompt }] },
    contents: [{ parts: [{ text: text }] }],
    generationConfig: { temperature: 0.2 }
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    if (response.status === 429) throw new Error("RATE_LIMIT");
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  let generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  
  // Clean up potential markdown wrapping
  if (generatedText.startsWith('\`\`\`markdown')) {
    generatedText = generatedText.replace(/^\`\`\`markdown\n/, '').replace(/\n\`\`\`$/, '');
  }
  return generatedText;
}

async function processFile(filePath) {
  console.log(`[Processing] ${filePath}`);
  const content = await fs.readFile(filePath, 'utf-8');

  let attempts = 0;
  while (attempts < 3) {
    try {
      attempts++;
      // Attempt 1: Unified Pro Execution
      const optimizedContent = await callGemini(SYSTEM_PROMPT, content, attempts > 1);
      
      // Basic QA Validation
      if (!optimizedContent.includes('---')) throw new Error("Missing frontmatter");
      if (!optimizedContent.includes('##')) throw new Error("Missing structural H2 headings");

      await fs.writeFile(filePath, optimizedContent, 'utf-8');
      console.log(`[Success] ${filePath} optimized.`);
      return true;
    } catch (error) {
      if (error.message === "RATE_LIMIT") {
        console.warn(`[Rate Limit] Backing off for ${filePath} (Attempt ${attempts})...`);
        await new Promise(r => setTimeout(r, 5000 * attempts)); // Exponential backoff
      } else {
        console.error(`[Error] ${filePath}: ${error.message}. Fallback triggered.`);
      }
    }
  }

  // Quarantine on total failure
  console.error(`[Quarantined] ${filePath} failed after 3 attempts.`);
  await appendToQuarantine(filePath);
  return false;
}

async function appendToQuarantine(filePath) {
  let quarantine = [];
  try {
    const data = await fs.readFile(QUARANTINE_FILE, 'utf-8');
    quarantine = JSON.parse(data);
  } catch (e) { /* file doesn't exist */ }
  
  if (!quarantine.includes(filePath)) {
    quarantine.push(filePath);
    await fs.writeFile(QUARANTINE_FILE, JSON.stringify(quarantine, null, 2), 'utf-8');
  }
}

async function run() {
  const targetFiles = process.argv.slice(2);
  if (targetFiles.length === 0) {
    console.log("Usage: node scripts/orchestrate-optimization.mjs <file1.md> <file2.md> ...");
    process.exit(1);
  }

  console.log(`Starting bulk optimization for ${targetFiles.length} files...`);
  
  // Batch processing with limited concurrency
  for (let i = 0; i < targetFiles.length; i += MAX_CONCURRENT) {
    const batch = targetFiles.slice(i, i + MAX_CONCURRENT);
    await Promise.all(batch.map(processFile));
  }
  
  console.log("Optimization batch complete.");
}

run().catch(console.error);

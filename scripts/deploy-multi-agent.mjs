import fs from 'node:fs/promises';
import path from 'node:path';

// Configuration
const QUARANTINE_FILE = path.join(process.cwd(), 'optimization-quarantine.json');
const MAX_CONCURRENT = 5;

// Unified Prompt (Fast Path)
const UNIFIED_PROMPT = `You are a Multi-Agent Content Optimization System.
Task: Restructure the markdown content into 4-7 line blocks, each with a keyword-rich H2/H3.
Extract FAQs into semantic <details> blocks. Do not hallucinate medical facts. Preserve frontmatter.`;

// Sequential Prompts (Fallback Path)
const AGENT1_STRATEGY = `You are the SEO/Intent Strategist. Analyze the following text and return a JSON object with: 1. Core topics. 2. A list of 3-5 user intent questions (FAQs). 3. A list of H2/H3 headings.`;
const AGENT2_RESTRUCTURE = `You are the Content Restructurer. Rewrite the following text strictly into 4-7 line paragraphs under the provided H2/H3 headings. Do not include FAQs yet.`;
const AGENT3_QA = `You are the QA & Formatting Auditor. Take the restructured text and the FAQs from the Strategist, and append the FAQs at the bottom using <details><summary>Q</summary><p>A</p></details> format. Return the final markdown file.`;

async function callGemini(prompt, text, model = 'gemini-1.5-pro') {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY environment variable is missing.");
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
  if (generatedText.startsWith('\`\`\`markdown')) {
    generatedText = generatedText.replace(/^\`\`\`markdown\n/, '').replace(/\n\`\`\`$/, '');
  }
  if (generatedText.startsWith('\`\`\`json')) {
    generatedText = generatedText.replace(/^\`\`\`json\n/, '').replace(/\n\`\`\`$/, '');
  }
  return generatedText;
}

async function runSequentialAgents(content) {
  console.log(`    -> [Agent 1: Strategist] Generating intent profile...`);
  const strategyJsonStr = await callGemini(AGENT1_STRATEGY, content, 'gemini-1.5-flash');
  
  console.log(`    -> [Agent 2: Restructurer] Rewriting text blocks...`);
  const restructured = await callGemini(AGENT2_RESTRUCTURE, `Strategy:\n${strategyJsonStr}\n\nOriginal Text:\n${content}`, 'gemini-1.5-flash');
  
  console.log(`    -> [Agent 3: QA & Auditor] Assembling final markdown and FAQs...`);
  const finalMarkdown = await callGemini(AGENT3_QA, `Strategist FAQs:\n${strategyJsonStr}\n\nRestructured Text:\n${restructured}`, 'gemini-1.5-flash');
  
  return finalMarkdown;
}

async function processFile(filePath) {
  console.log(`[Processing] ${filePath}`);
  const content = await fs.readFile(filePath, 'utf-8');

  let attempts = 0;
  while (attempts < 3) {
    try {
      attempts++;
      let optimizedContent = '';

      if (attempts === 1) {
        // FAST PATH: Unified Pro Model
        console.log(`  -> Attempt 1: Unified Pro Execution`);
        optimizedContent = await callGemini(UNIFIED_PROMPT, content, 'gemini-1.5-pro');
      } else {
        // FALLBACK PATH: Chain of Thought Degraded (3 Agents)
        console.log(`  -> Attempt ${attempts}: Fallback to Sequential Multi-Agent (Flash)`);
        optimizedContent = await runSequentialAgents(content);
      }
      
      // QA Validation
      if (!optimizedContent.includes('---')) throw new Error("Missing frontmatter");
      if (!optimizedContent.includes('##')) throw new Error("Missing structural H2 headings");
      if (!optimizedContent.includes('<details>')) throw new Error("Missing FAQ <details> elements");

      await fs.writeFile(filePath, optimizedContent, 'utf-8');
      console.log(`[Success] ${filePath} optimized successfully.`);
      return true;
    } catch (error) {
      if (error.message === "RATE_LIMIT") {
        console.warn(`[Rate Limit] Backing off for ${filePath}...`);
        await new Promise(r => setTimeout(r, 5000 * attempts));
      } else {
        console.error(`[Error] ${filePath}: ${error.message}`);
      }
    }
  }

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
    console.log("Usage: node scripts/deploy-multi-agent.mjs <file1.md> <file2.md> ...");
    process.exit(1);
  }
  console.log(`Starting Multi-Agent optimization for ${targetFiles.length} files...`);
  
  for (let i = 0; i < targetFiles.length; i += MAX_CONCURRENT) {
    const batch = targetFiles.slice(i, i + MAX_CONCURRENT);
    await Promise.all(batch.map(processFile));
  }
  console.log("Deployment complete.");
}

run().catch(console.error);

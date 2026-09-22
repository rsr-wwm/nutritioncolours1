import fs from 'fs';
import path from 'path';

interface LogEntry {
  ip: string;
  timestamp: string;
  method: string;
  path: string;
  statusCode: number;
  userAgent: string;
}

interface BotCrawlMetrics {
  botName: string;
  totalRequests: number;
  status200Count: number;
  status301Count: number;
  status410Count: number;
  status404Count: number;
  tombstoneHits: string[];
  canonicalHits: string[];
}

const KNOWN_BOTS: Record<string, RegExp> = {
  Googlebot: /Googlebot/i,
  'OAI-SearchBot': /(OAI-SearchBot|ChatGPT-User|GPTBot)/i,
  PerplexityBot: /(PerplexityBot|Perplexity-User)/i,
  ClaudeBot: /(ClaudeBot|anthropic-ai)/i,
  Bingbot: /bingbot/i,
  Applebot: /Applebot/i
};

export function parseAccessLogLine(line: string): LogEntry | null {
  // Common Log Format / Combined Log Format regex
  const regex = /^(\S+) \S+ \S+ \[([^\]]+)\] "(\S+) (\S+) \S+" (\d{3}) \S+ "(?:[^"]*)" "([^"]*)"/;
  const match = line.match(regex);
  if (!match) return null;

  return {
    ip: match[1],
    timestamp: match[2],
    method: match[3],
    path: match[4],
    statusCode: parseInt(match[5], 10),
    userAgent: match[6]
  };
}

export function analyzeLogs(logLines: string[]): Record<string, BotCrawlMetrics> {
  const metrics: Record<string, BotCrawlMetrics> = {};

  for (const botName of Object.keys(KNOWN_BOTS)) {
    metrics[botName] = {
      botName,
      totalRequests: 0,
      status200Count: 0,
      status301Count: 0,
      status410Count: 0,
      status404Count: 0,
      tombstoneHits: [],
      canonicalHits: []
    };
  }

  for (const line of logLines) {
    if (!line.trim()) continue;
    const entry = parseAccessLogLine(line);
    if (!entry) continue;

    for (const [botName, pattern] of Object.entries(KNOWN_BOTS)) {
      if (pattern.test(entry.userAgent)) {
        const m = metrics[botName];
        m.totalRequests++;

        if (entry.statusCode === 200) {
          m.status200Count++;
          if (!m.canonicalHits.includes(entry.path)) m.canonicalHits.push(entry.path);
        } else if (entry.statusCode === 301) {
          m.status301Count++;
        } else if (entry.statusCode === 410) {
          m.status410Count++;
          if (!m.tombstoneHits.includes(entry.path)) m.tombstoneHits.push(entry.path);
        } else if (entry.statusCode === 404) {
          m.status404Count++;
        }
      }
    }
  }

  return metrics;
}

async function run() {
  console.log('🤖 Running Crawler Observability & Edge Index Analyzer...');

  const logFilePath = process.argv[2] || path.resolve(process.cwd(), 'logs/access.log');
  let logLines: string[] = [];

  if (fs.existsSync(logFilePath)) {
    console.log(`📄 Reading live log file: ${logFilePath}`);
    logLines = fs.readFileSync(logFilePath, 'utf-8').split('\n');
  } else {
    console.log('ℹ️ No live logs/access.log found. Simulating baseline verification crawl...');
    // Generate synthetic baseline sample to verify edge log analyzer mechanics
    logLines = [
      '66.249.66.1 - - [05/Sep/2026:12:00:01 +0000] "GET /knowledge/circadian-nutrition HTTP/1.1" 200 4521 "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"',
      '20.171.207.1 - - [05/Sep/2026:12:00:05 +0000] "GET /clinic/delhi-diabetes-cure HTTP/1.1" 410 1850 "-" "Mozilla/5.0 (compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot)"',
      '147.243.34.1 - - [05/Sep/2026:12:00:10 +0000] "GET /location/mumbai HTTP/1.1" 410 1850 "-" "PerplexityBot/1.0 (+https://perplexity.ai/perplexitybot)"',
      '66.249.66.2 - - [05/Sep/2026:12:00:15 +0000] "GET /foods HTTP/1.1" 200 3200 "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"',
      '20.171.207.2 - - [05/Sep/2026:12:00:20 +0000] "GET /recipes HTTP/1.1" 200 2900 "-" "Mozilla/5.0 (compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot)"'
    ];
  }

  const analysis = analyzeLogs(logLines);
  const outputDir = path.resolve(process.cwd(), 'public/data');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const report = {
    generatedAt: new Date().toISOString(),
    totalAnalyzedRequests: logLines.length,
    crawlerMetrics: analysis
  };

  const reportPath = path.join(outputDir, 'crawler-observability-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  console.log(`✅ Crawler Observability Report saved to: ${reportPath}`);
  console.log('📊 Summary:');
  for (const [bot, data] of Object.entries(analysis)) {
    if (data.totalRequests > 0) {
      console.log(`   - ${bot}: ${data.totalRequests} reqs (200: ${data.status200Count}, 410 Tombstone: ${data.status410Count}, 404: ${data.status404Count})`);
    }
  }
}

run();

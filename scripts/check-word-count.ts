import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve(process.cwd(), 'dist');

function getFilesRecursively(dir: string, fileList: string[] = []): string[] {
  if (!fs.existsSync(dir)) return fileList;
  try {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      try {
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          getFilesRecursively(filePath, fileList);
        } else if (file.endsWith('.html')) {
          fileList.push(filePath);
        }
      } catch {
        // Ignore files that disappeared or cannot be stated
      }
    });
  } catch {
    // Ignore unreadable dirs
  }
  return fileList;
}

function checkWordCount() {
  console.log('[Thin Content Guard] Scanning pre-rendered HTML files for minimum word counts...');
  
  if (!fs.existsSync(DIST_DIR)) {
    console.error('[Guard Error] dist/ directory not found. Please run "npm run build" first.');
    process.exit(1);
  }

  const htmlFiles = getFilesRecursively(DIST_DIR);
  let failedPages = 0;

  htmlFiles.forEach(file => {
    // Check clinic, condition, and knowledge base pages
    if (!file.includes('/clinic/') && !file.includes('/condition/') && !file.includes('/knowledge/')) {
      return;
    }

    const content = fs.readFileSync(file, 'utf-8');
    
    // Simple HTML tag removal & word count
    const textOnly = content
      .replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '')
      .replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
      
    const words = textOnly.split(/\s+/).filter(w => w.length > 0);
    const wordCount = words.length;

    // Minimum requirement of 600 words
    if (wordCount < 600) {
      const relPath = path.relative(DIST_DIR, file);
      console.warn(`[WARNING] Page has thin content: /${relPath} (${wordCount} words - minimum threshold is 600 words)`);
      failedPages++;
    }
  });

  if (failedPages > 0) {
    console.warn(`[Guard finished] Thin Content checks complete. Found ${failedPages} page(s) under 600 words.`);
  } else {
    console.log('[Guard Success] All pages meet the 600 word count criteria.');
  }
}

checkWordCount();

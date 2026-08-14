// scripts/deploy-git.ts
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve(process.cwd(), 'dist');

async function main() {
  console.log('=== STARTING PRODUCTION BRANCH DEPLOYMENT ===');
  
  // Load environment variables from .env if present
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    for (const line of envContent.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx > 0) {
        const key = trimmed.slice(0, eqIdx).trim();
        const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }

  if (!fs.existsSync(DIST_DIR)) {
    console.error('[Error] dist/ directory not found. Please run "npm run build" first.');
    process.exit(1);
  }

  // Get the main repo's remote URL
  let remoteUrl = 'https://github.com/rsr-wwm/nutritioncolours1.git';
  try {
    const remotes = execSync('git remote -v', { encoding: 'utf8' });
    const match = remotes.match(/(?:origin-hold|origin)\s+([^\s]+)/);
    if (match) {
      remoteUrl = match[1];
    }
  } catch (err) {
    console.log('[Info] Using default remote URL:', remoteUrl);
  }

  // Define paths
  const gitDir = path.join(DIST_DIR, '.git');
  
  try {
    // 1. Always create a fresh clean git instance in dist
    if (fs.existsSync(gitDir)) {
      try {
        fs.rmSync(gitDir, { recursive: true, force: true });
      } catch {}
    }
    console.log('Initializing fresh git repository inside dist/...');
    execSync('git init', { cwd: DIST_DIR, stdio: 'inherit' });
    execSync(`git remote add origin ${remoteUrl}`, { cwd: DIST_DIR, stdio: 'inherit' });

    // 2. Set user config inside the sub-repo
    execSync('git config user.name "NutritionColours Deployer"', { cwd: DIST_DIR });
    execSync('git config user.email "deployer@nutritioncolours.com"', { cwd: DIST_DIR });
    execSync('git checkout -B production', { cwd: DIST_DIR, stdio: 'ignore' });

    // 3. Stage and commit all files in dist/
    console.log('Staging static assets...');
    execSync('git add -A', { cwd: DIST_DIR, stdio: 'inherit' });
    
    console.log('Committing production release...');
    try {
      execSync('git commit -m "Production release: ' + new Date().toISOString() + '"', { cwd: DIST_DIR, stdio: 'ignore' });
    } catch {
      console.log('No new changes to commit in dist/ or already up to date.');
    }

    // 4. Force push the commit to the remote production branch
    console.log('Force pushing built files to production branch on GitHub...');
    execSync('git push -f origin production:production', { cwd: DIST_DIR, stdio: 'inherit' });

    // 5. Trigger Hostinger deployment webhooks
    console.log('\nTriggering Hostinger deployment webhooks...');
    const defaultHostingerWebhook = 'https://webhooks.hostinger.com/deploy/a8782b45d55f9acb0498dd1187a3198c';
    const envWebhooks = Array.from(new Set([
      process.env.HOSTINGER_WEBHOOK_URL,
      process.env.HOSTINGER_WEBHOOK_1,
      process.env.HOSTINGER_WEBHOOK_2,
      ...(process.env.HOSTINGER_WEBHOOK_URLS ? process.env.HOSTINGER_WEBHOOK_URLS.split(',') : []),
      defaultHostingerWebhook
    ])).filter((w): w is string => Boolean(w && w.trim()));

    for (const url of envWebhooks) {
      try {
        const res = await fetch(url.trim(), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-GitHub-Event': 'push'
          },
          body: JSON.stringify({ ref: 'refs/heads/production' })
        });
        console.log(`[Hostinger Webhook] Triggered ${url} - Status: ${res.status}`);
      } catch (whErr) {
        console.warn(`[Hostinger Webhook Warning] Could not trigger ${url}:`, whErr);
      }
    }

    console.log('\n=== SUCCESS: static files deployed to production branch & Hostinger auto-deploy triggered! ===');
  } catch (err) {
    console.error('[Error] Deployment failed:', err);
    process.exit(1);
  }
}

main().catch(console.error);

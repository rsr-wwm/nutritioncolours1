// scripts/deploy-git.ts
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve(process.cwd(), 'dist');

async function main() {
  console.log('=== STARTING PRODUCTION BRANCH DEPLOYMENT ===');
  
  if (!fs.existsSync(DIST_DIR)) {
    console.error('[Error] dist/ directory not found. Please run "npm run build" first.');
    process.exit(1);
  }

  // Get the main repo's remote URL
  let remoteUrl = '';
  try {
    remoteUrl = execSync('git config --get remote.origin.url', { encoding: 'utf8' }).trim();
  } catch (err) {
    console.error('[Error] Could not retrieve Git remote origin URL:', err);
    process.exit(1);
  }

  // Define paths
  const gitDir = path.join(DIST_DIR, '.git');
  
  try {
    // 1. If .git folder doesn't exist in dist, initialize it
    if (!fs.existsSync(gitDir)) {
      console.log('Initializing git repository inside dist/...');
      execSync('git init', { cwd: DIST_DIR, stdio: 'inherit' });
      execSync(`git remote add origin ${remoteUrl}`, { cwd: DIST_DIR, stdio: 'inherit' });
    }

    // 2. Set user config inside the sub-repo if not configured globally
    try {
      execSync('git config user.name', { cwd: DIST_DIR });
    } catch {
      execSync('git config user.name "NutritionColours Deployer"', { cwd: DIST_DIR });
      execSync('git config user.email "deployer@nutritioncolours.com"', { cwd: DIST_DIR });
    }

    // 3. Stage and commit all files in dist/
    console.log('Staging static assets...');
    execSync('git add -A', { cwd: DIST_DIR, stdio: 'inherit' });
    
    console.log('Committing production release...');
    execSync('git commit -m "Production release: ' + new Date().toISOString() + '"', { cwd: DIST_DIR, stdio: 'ignore' });

    // 4. Force push the commit to the remote production branch
    console.log('Force pushing built files to production branch on GitHub...');
    execSync('git push -f origin HEAD:production', { cwd: DIST_DIR, stdio: 'inherit' });

    console.log('\n=== SUCCESS: static files deployed to production branch! ===');
    console.log('Now, go to your Hostinger panel and pull the "production" branch to update your live site.');
  } catch (err) {
    console.error('[Error] Deployment failed:', err);
    process.exit(1);
  }
}

main().catch(console.error);

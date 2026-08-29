import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import readline from 'node:readline/promises';
import { spawnSync } from 'node:child_process';

const SITE_HOST = 'nutritioncolours.com';
const PRODUCTION_BRANCH = 'production';
const COMPROMISED_WEBHOOK_SHA256 = '81b78ebd3ea5298f6b669fb2c2318c3b8731d5f05937d7ac5c86e8385b6d3e0e';
const dryRun = process.argv.includes('--dry-run');

function fail(message) {
  console.error(`Deployment blocked: ${message}`);
  process.exit(1);
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, { encoding: 'utf8', stdio: options.capture ? 'pipe' : 'inherit', ...options });
  if (result.error) fail(`${command} could not start (${result.error.message})`);
  if (result.status !== 0) fail(`${command} ${args.join(' ')} exited with status ${result.status}`);
  return options.capture ? result.stdout.trim() : '';
}

function loadIgnoredEnvFile(file = '.env') {
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const separator = trimmed.indexOf('=');
    if (separator < 1) continue;
    const key = trimmed.slice(0, separator).trim();
    let value = trimmed.slice(separator + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    if (!process.env[key]) process.env[key] = value;
  }
}

function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function validatedWebhook(value) {
  if (!value) fail('HOSTINGER_WEBHOOK_URL is missing. Rotate the leaked webhook in Hostinger and put the new URL in the ignored .env file.');
  if (sha256(value) === COMPROMISED_WEBHOOK_SHA256) fail('HOSTINGER_WEBHOOK_URL is the credential exposed in Git history. Revoke/rotate it in Hostinger before deploying.');
  let url;
  try {
    url = new URL(value);
  } catch {
    fail('HOSTINGER_WEBHOOK_URL is not a valid absolute URL.');
  }
  if (url.protocol !== 'https:' || url.hostname !== 'webhooks.hostinger.com' || !url.pathname.startsWith('/deploy/') || url.username || url.password || url.search || url.hash) {
    fail('HOSTINGER_WEBHOOK_URL must be a credentials-free https://webhooks.hostinger.com/deploy/... URL without query parameters or fragments.');
  }
  return url.href;
}

async function confirmProduction() {
  if (process.env.DEPLOY_CONFIRM === SITE_HOST) return;
  if (!process.stdin.isTTY) fail(`set DEPLOY_CONFIRM=${SITE_HOST} for a non-interactive production deployment`);
  const prompt = readline.createInterface({ input: process.stdin, output: process.stdout });
  const answer = await prompt.question(`Type ${SITE_HOST} to deploy the current verified artifact to production: `);
  prompt.close();
  if (answer.trim() !== SITE_HOST) fail('production confirmation did not match');
}

function workingTreeState() {
  return run('git', ['status', '--porcelain=v1', '--untracked-files=all'], { capture: true });
}

function validateRemote(remoteName) {
  if (!/^[a-zA-Z0-9._-]+$/.test(remoteName)) fail('DEPLOY_REMOTE contains unsafe characters');
  const remoteUrl = run('git', ['remote', 'get-url', remoteName], { capture: true });
  if (!/^(?:https:\/\/github\.com\/|git@github\.com:)[A-Za-z0-9_.\/-]+(?:\.git)?$/.test(remoteUrl)) fail(`${remoteName} is not a supported GitHub remote`);
  return remoteUrl;
}

loadIgnoredEnvFile();
const webhook = validatedWebhook(process.env.HOSTINGER_WEBHOOK_URL);
await confirmProduction();

const sourceCommit = run('git', ['rev-parse', 'HEAD'], { capture: true });
const sourceBranch = run('git', ['branch', '--show-current'], { capture: true });
if (sourceBranch !== 'main') fail(`production deployments must originate from main, not ${sourceBranch || 'detached HEAD'}`);
const dirtyState = workingTreeState();
const allowDirty = process.env.DEPLOY_ALLOW_DIRTY === SITE_HOST;
if (dirtyState && !allowDirty) {
  fail(`the source worktree has uncommitted changes. Commit the reviewed release first, or explicitly set DEPLOY_ALLOW_DIRTY=${SITE_HOST} after reviewing every change`);
}

const remoteName = process.env.DEPLOY_REMOTE || 'origin';
const remoteUrl = validateRemote(remoteName);
console.log(`Release source: ${sourceCommit}${dirtyState ? ' (explicitly allowed dirty worktree)' : ''}`);
console.log(`Deployment target: ${remoteUrl} branch ${PRODUCTION_BRANCH} -> Hostinger ${SITE_HOST}`);
console.log('Running the complete release gate...');
run('npm', ['run', 'release:verify']);

if (!fs.existsSync('dist/index.html') || !fs.existsSync('dist/sitemap.xml')) fail('verified dist/ is missing index.html or sitemap.xml');
if (dryRun) {
  console.log('Deployment dry run passed. No branch, webhook, hosting, or public state was changed.');
  process.exit(0);
}

const deployRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'nutritioncolours-deploy-'));
try {
  run('git', ['clone', '--depth', '1', '--branch', PRODUCTION_BRANCH, '--single-branch', remoteUrl, deployRoot]);
  for (const entry of fs.readdirSync(deployRoot)) {
    if (entry === '.git') continue;
    fs.rmSync(path.join(deployRoot, entry), { recursive: true, force: true });
  }
  for (const entry of fs.readdirSync('dist')) fs.cpSync(path.join('dist', entry), path.join(deployRoot, entry), { recursive: true });

  run('git', ['add', '--all'], { cwd: deployRoot });
  const staged = spawnSync('git', ['diff', '--cached', '--quiet'], { cwd: deployRoot });
  if (staged.status === 0) console.log('Production branch already contains the verified artifact; no Git commit is required.');
  else if (staged.status === 1) {
    const sourceLabel = dirtyState ? `${sourceCommit.slice(0, 12)}+reviewed-working-tree` : sourceCommit.slice(0, 12);
    run('git', ['commit', '-m', `Deploy verified artifact from ${sourceLabel}`], { cwd: deployRoot });
    run('git', ['push', 'origin', `HEAD:${PRODUCTION_BRANCH}`], { cwd: deployRoot });
  } else fail('could not determine whether the production artifact changed');

  const productionCommit = run('git', ['rev-parse', 'HEAD'], { cwd: deployRoot, capture: true });
  const response = await fetch(webhook, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-github-event': 'push' },
    body: JSON.stringify({ ref: `refs/heads/${PRODUCTION_BRANCH}`, after: productionCommit }),
    signal: AbortSignal.timeout(30_000),
  });
  if (!response.ok) fail(`Hostinger webhook returned HTTP ${response.status}`);
  console.log(`Hostinger accepted deployment for production commit ${productionCommit}.`);
  console.log('After Hostinger finishes publishing, run: npm run deploy:verify');
} finally {
  fs.rmSync(deployRoot, { recursive: true, force: true });
}

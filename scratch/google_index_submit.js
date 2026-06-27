/**
 * Google Indexing API Batch Publish Script
 * 
 * This script parses public/sitemap.xml and publishes all URLs to Google's Indexing API
 * to trigger fast crawls and indexing.
 * 
 * Setup:
 * 1. Go to Google Cloud Console: https://console.cloud.google.com
 * 2. Create a project and enable the "Indexing API".
 * 3. Create a Service Account, generate a JSON key, and save it as `service-account.json` in this directory.
 * 4. In Google Search Console, add the Service Account email address as an Owner of the property.
 * 5. Run: `node google_index_submit.js` (optionally set DRY_RUN=true)
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITEMAP_PATH = '/Users/apple/Downloads/nutritioncolours/public/sitemap.xml';
const KEY_PATH = path.join(__dirname, 'service-account.json');

const DRY_RUN = process.env.DRY_RUN === 'true' || !fs.existsSync(KEY_PATH);

// Helper to base64url encode
function base64url(str, encoding = 'utf8') {
  return Buffer.from(str, encoding)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

// Generate JWT token for Google Auth
function generateJWT(key) {
  const header = JSON.stringify({ alg: 'RS256', typ: 'JWT' });
  const now = Math.floor(Date.now() / 1000);
  const claimSet = JSON.stringify({
    iss: key.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  });

  const encodedHeader = base64url(header);
  const encodedClaimSet = base64url(claimSet);
  const signInput = `${encodedHeader}.${encodedClaimSet}`;

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(signInput);
  const signature = base64url(signer.sign(key.private_key), 'binary');

  return `${signInput}.${signature}`;
}

// Exchange JWT for Access Token
function getAccessToken(jwt) {
  return new Promise((resolve, reject) => {
    const postData = `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`;
    const req = https.request({
      hostname: 'oauth2.googleapis.com',
      path: '/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length,
      }
    }, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(body).access_token);
        } else {
          reject(new Error(`Token request failed: ${res.statusCode} ${body}`));
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// Send Indexing request
function notifyUrl(url, accessToken) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      url: url,
      type: 'URL_UPDATED',
    });

    const req = https.request({
      hostname: 'indexing.googleapis.com',
      path: '/v3/urlNotifications:publish',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'Content-Length': postData.length,
      }
    }, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(body));
        } else {
          reject(new Error(`Notification failed for ${url}: ${res.statusCode} ${body}`));
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function main() {
  console.log('=== Google Indexing API Push Tool ===');
  
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error(`Sitemap file not found at ${SITEMAP_PATH}`);
    process.exit(1);
  }

  // Parse URLs from Sitemap
  const sitemapXml = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const urlRegex = /<loc>(https?:\/\/[/a-zA-Z0-9.-_]+)<\/loc>/g;
  const urls = [];
  let match;
  while ((match = urlRegex.exec(sitemapXml)) !== null) {
    urls.push(match[1]);
  }

  console.log(`Parsed ${urls.length} URLs from sitemap.`);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] Running in simulation mode. Reason: No service-account.json found or DRY_RUN=true.');
    console.log('URLs that would be pushed:');
    urls.forEach((url, i) => console.log(`  [${i + 1}] ${url}`));
    console.log('\nTo run for real:');
    console.log('1. Place your Google Service Account key at: scratch/service-account.json');
    console.log('2. Run: DRY_RUN=false node google_index_submit.js\n');
    return;
  }

  console.log('Authenticating with Google API...');
  const key = JSON.parse(fs.readFileSync(KEY_PATH, 'utf8'));
  const jwt = generateJWT(key);
  const accessToken = await getAccessToken(jwt);
  console.log('Successfully authenticated!');

  console.log(`\nPushing ${urls.length} URLs to Indexing API...`);
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    try {
      const result = await notifyUrl(url, accessToken);
      console.log(`[${i + 1}/${urls.length}] Success: ${url} (Notification ID: ${result.urlNotificationMetadata?.latestUpdate?.notifyTime || 'unknown'})`);
      // Throttling to respect rate limits
      await new Promise(r => setTimeout(r, 100));
    } catch (err) {
      console.error(`[${i + 1}/${urls.length}] Error: ${url} - ${err.message}`);
    }
  }

  console.log('\nIndexing run completed.');
}

main().catch(console.error);

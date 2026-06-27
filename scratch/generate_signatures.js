import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const KEYS_DIR = path.join(__dirname, 'keys');
const PRIVATE_KEY_PATH = path.join(KEYS_DIR, 'private.key');
const PUBLIC_KEY_PATH = path.join(KEYS_DIR, 'public.key');
const SIGNATURES_OUTPUT = '/Users/apple/Downloads/nutritioncolours/public/clinical-signatures.json';

const TARGET_FILES = {
  topics: '/Users/apple/Downloads/nutritioncolours/topics.ts',
  locations: '/Users/apple/Downloads/nutritioncolours/components/locationsData.ts',
  international: '/Users/apple/Downloads/nutritioncolours/components/internationalData.ts',
  practitioner: '/Users/apple/Downloads/nutritioncolours/clinical_databases.ts'
};

function ensureKeysExist() {
  if (!fs.existsSync(KEYS_DIR)) {
    fs.mkdirSync(KEYS_DIR, { recursive: true });
  }

  if (!fs.existsSync(PRIVATE_KEY_PATH) || !fs.existsSync(PUBLIC_KEY_PATH)) {
    console.log('Generating cryptographic RSA keypair for E-E-A-T verification...');
    const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
      }
    });

    fs.writeFileSync(PRIVATE_KEY_PATH, privateKey);
    fs.writeFileSync(PUBLIC_KEY_PATH, publicKey);
    console.log('Keys generated and cached in scratch/keys/');
  }
}

function signFile(filePath, privateKey) {
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found for signing: ${filePath}`);
    return null;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Create SHA-256 hash of the content
  const hash = crypto.createHash('sha256').update(content).digest();
  
  // Sign the hash
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(hash);
  const signature = sign.sign(privateKey, 'base64');
  
  return {
    hash: crypto.createHash('sha256').update(content).digest('hex'),
    signature: signature
  };
}

function main() {
  console.log('=== Cryptographic E-E-A-T Signature Generator ===');
  
  ensureKeysExist();
  
  const privateKey = fs.readFileSync(PRIVATE_KEY_PATH, 'utf8');
  const publicKey = fs.readFileSync(PUBLIC_KEY_PATH, 'utf8');
  
  const results = {
    publicKey: publicKey.trim(),
    signatures: {}
  };
  
  for (const [key, filePath] of Object.entries(TARGET_FILES)) {
    const signedData = signFile(filePath, privateKey);
    if (signedData) {
      results.signatures[key] = {
        file: path.basename(filePath),
        hash: signedData.hash,
        signature: signedData.signature
      };
      console.log(`Signed ${key}: Hash=${signedData.hash.slice(0, 16)}...`);
    }
  }
  
  fs.writeFileSync(SIGNATURES_OUTPUT, JSON.stringify(results, null, 2));
  console.log(`Successfully wrote cryptographic signatures to: ${SIGNATURES_OUTPUT}\n`);
}

try {
  main();
} catch (err) {
  console.error('Failed to generate E-E-A-T signatures:', err);
  process.exit(1);
}

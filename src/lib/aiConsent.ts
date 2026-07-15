/**
 * AI Consent Gate Module
 * 
 * Before any AI call that processes health, genomic, meal, or research data,
 * this module ensures the user has been informed about:
 * - What data is being sent
 * - To whom (Google Gemini API)
 * - Why it's being sent
 * - Retention period
 * - Warning not to enter personal identifiers
 * - Emergency/medical disclaimers
 * 
 * Consent is stored in obfuscatedStorage with expiry.
 */

import { obfuscatedStorage } from './obfuscatedStorage';
import { logger } from './logger';

type AIContext = 'health' | 'genomic' | 'meal' | 'research' | 'general';

const CONSENT_KEY_PREFIX = 'ai_consent_';
const CONSENT_EXPIRY_DAYS = 30;

interface ConsentRecord {
  granted: boolean;
  context: AIContext;
  timestamp: number;
  expiresAt: number;
}

const CONTEXT_DESCRIPTIONS: Record<AIContext, { what: string; why: string; sensitivity: string }> = {
  health: {
    what: 'Your health-related questions, symptoms descriptions, and any dietary information you provide.',
    why: 'To generate personalized nutritional guidance and health information.',
    sensitivity: 'HIGH - Health data is sensitive. Do NOT include your name, address, phone number, or other personal identifiers.'
  },
  genomic: {
    what: 'Raw genetic/DNA data you upload for analysis.',
    why: 'To identify nutritional genomics variants (e.g., MTHFR, FTO, TCF7L2) and suggest dietary adjustments.',
    sensitivity: 'VERY HIGH - Genetic data is extremely sensitive. Data is sent to Google Gemini API for processing.'
  },
  meal: {
    what: 'Your dietary preferences, restrictions, health goals, and ingredient availability.',
    why: 'To generate personalized meal suggestions aligned with circadian nutrition principles.',
    sensitivity: 'MEDIUM - Do NOT include medical records or personal health identifiers.'
  },
  research: {
    what: 'Your research queries about health topics, nutrition science, and clinical evidence.',
    why: 'To search and summarize current scientific literature and clinical evidence.',
    sensitivity: 'LOW - Research queries are general and should not contain personal health data.'
  },
  general: {
    what: 'Your general question or prompt.',
    why: 'To generate a helpful response.',
    sensitivity: 'LOW - General queries.'
  }
};

/**
 * Check if user has previously granted AI consent for this context.
 */
export function hasAIConsent(context: AIContext): boolean {
  try {
    const stored = obfuscatedStorage.getItem(CONSENT_KEY_PREFIX + context);
    if (!stored) return false;
    const record: ConsentRecord = JSON.parse(stored);
    if (Date.now() > record.expiresAt) {
      obfuscatedStorage.removeItem(CONSENT_KEY_PREFIX + context);
      return false;
    }
    return record.granted;
  } catch {
    return false;
  }
}

/**
 * Store AI consent grant.
 */
export function grantAIConsent(context: AIContext): void {
  const record: ConsentRecord = {
    granted: true,
    context,
    timestamp: Date.now(),
    expiresAt: Date.now() + CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000
  };
  obfuscatedStorage.setItem(CONSENT_KEY_PREFIX + context, JSON.stringify(record));
  logger.info('AIConsent', `Consent granted for context: ${context}`);
}

/**
 * Revoke AI consent for a context.
 */
export function revokeAIConsent(context: AIContext): void {
  obfuscatedStorage.removeItem(CONSENT_KEY_PREFIX + context);
  logger.info('AIConsent', `Consent revoked for context: ${context}`);
}

/**
 * Get the consent notice text for display in UI.
 */
export function getConsentNotice(context: AIContext): string {
  const info = CONTEXT_DESCRIPTIONS[context];
  return [
    `AI Data Notice:`,
    `What is sent: ${info.what}`,
    `Purpose: ${info.why}`,
    `Processed by: Google Gemini API`,
    `Sensitivity: ${info.sensitivity}`,
    ``,
    `This is AI-generated information, NOT clinical advice.`,
    `Do NOT enter personal identifiers, emergency symptoms, or medication change requests.`,
    `Always consult a licensed clinician for medical decisions.`
  ].join('\n');
}

/**
 * Ensure consent before AI call. Returns true if consent is granted.
 * If not granted, the calling component should show the consent UI.
 */
export function ensureAIConsent(context: AIContext): boolean {
  return hasAIConsent(context);
}

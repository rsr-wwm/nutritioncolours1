/**
 * AI Medical Safety Filter
 * 
 * Middleware that validates user prompts before they are sent to AI models.
 * Blocks prompts that:
 * - Request diagnosis
 * - Request medication changes
 * - Contain pregnancy/children/renal/liver red flags
 * - Describe emergency symptoms
 * - Ask about supplement-drug interactions
 * 
 * Returns a safe fallback message directing users to licensed clinicians.
 */

import { logger } from './logger';

export interface SafetyCheckResult {
  safe: boolean;
  reason?: string;
  category?: string;
}

const SAFETY_PATTERNS: { pattern: RegExp; category: string; reason: string }[] = [
  {
    pattern: /\b(?:diagnos|what do i have|what condition|tell me what.*wrong)\b/i,
    category: 'diagnosis',
    reason: 'AI cannot provide medical diagnoses. Please consult a licensed clinician for diagnosis.'
  },
  {
    pattern: /\b(?:should i (?:stop|change|reduce|increase|adjust) (?:my )?(?:medication|insulin|pills|drugs|dosage))\b/i,
    category: 'medication-change',
    reason: 'Never change medications without consulting your prescribing doctor. This requires clinical supervision.'
  },
  {
    pattern: /\b(?:chest pain|difficulty breathing|severe bleeding|loss of consciousness|seizure|suicidal|self.harm)\b/i,
    category: 'emergency',
    reason: 'If you are experiencing a medical emergency, please call emergency services (112 in India, 911 in US) immediately.'
  },
  {
    pattern: /\b(?:i am pregnant|i'm pregnant|pregnancy.*advice|breastfeeding.*supplement)\b/i,
    category: 'pregnancy',
    reason: 'Pregnancy and breastfeeding require specialized clinical guidance. Please consult your obstetrician or midwife.'
  },
  {
    pattern: /\b(?:my (?:child|baby|infant|toddler|kid).*(?:symptom|problem|sick|pain|fever))\b/i,
    category: 'pediatric',
    reason: 'Children require specialized pediatric care. Please consult a pediatrician for your child\'s health concerns.'
  },
  {
    pattern: /\b(?:kidney (?:failure|disease|damage)|renal (?:failure|disease)|liver (?:failure|disease|damage)|hepatic (?:failure|disease))\b/i,
    category: 'organ-disease',
    reason: 'Kidney, liver, and organ conditions require specialized clinical management. Please consult your specialist.'
  },
  {
    pattern: /\b(?:interact.*(?:medication|drug|prescription)|supplement.*drug|herb.*drug)\b/i,
    category: 'drug-interaction',
    reason: 'Supplement-drug interactions require pharmacist or clinical review. Please consult your pharmacist or doctor.'
  }
];

const SAFE_FALLBACK = 'This question requires a licensed clinician. Please consult your healthcare provider for personalized medical guidance. NutritionColours provides nutritional education, not medical treatment.';

/**
 * Check if a user prompt is safe to send to AI.
 */
export function checkPromptSafety(prompt: string): SafetyCheckResult {
  for (const { pattern, category, reason } of SAFETY_PATTERNS) {
    if (pattern.test(prompt)) {
      logger.warn('AISafetyFilter', `Blocked prompt in category: ${category}`, { snippet: prompt.substring(0, 100) });
      return { safe: false, reason, category };
    }
  }
  return { safe: true };
}

/**
 * Get the safe fallback message for blocked prompts.
 */
export function getSafeFallbackMessage(): string {
  return SAFE_FALLBACK;
}

/**
 * The standard disclaimer to show before any AI output.
 */
export const AI_OUTPUT_DISCLAIMER = 'AI-generated information, not clinical advice. Always consult a licensed clinician for medical decisions.';

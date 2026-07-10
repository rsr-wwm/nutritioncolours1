import { useState } from 'react';
import { logger } from './logger';
import { safeJsonParse } from './safeUtils';

export interface LocalizationState {
  region: string; // 'IN' | 'US' | 'UK' | 'GLOBAL'
  language: string; // 'en' | 'hi' | 'mr' | 'ta'
  isManual: boolean;
}

export const SUPPORTED_REGIONS = [
  { code: 'GLOBAL', name: 'Global Hub', flag: '🌐', currency: 'USD', symbol: '$', languages: [{ code: 'en', name: 'English' }] },
  { code: 'IN', name: 'India Hub', flag: '🇮🇳', currency: 'INR', symbol: '₹', languages: [{ code: 'en', name: 'English' }, { code: 'hi', name: 'Hindi (हिंदी)' }, { code: 'mr', name: 'Marathi (मराठी)' }, { code: 'ta', name: 'Tamil (தமிழ்)' }] },
  { code: 'US', name: 'United States Hub', flag: '🇺🇸', currency: 'USD', symbol: '$', languages: [{ code: 'en', name: 'English' }] },
  { code: 'UK', name: 'United Kingdom Hub', flag: '🇬🇧', currency: 'GBP', symbol: '£', languages: [{ code: 'en', name: 'English' }] }
];

const DEFAULT_STATE: LocalizationState = {
  region: 'GLOBAL',
  language: 'en',
  isManual: false
};

// Simple timezone/locale heuristic lookup
function detectUserContext(): Omit<LocalizationState, 'isManual'> {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const lang = navigator.language.split('-')[0];
    
    let region = 'GLOBAL';
    let language = 'en';

    if (tz.includes('Calcutta') || tz.includes('Asia/Kolkata')) {
      region = 'IN';
      // If browser language is one of our supported Indian languages, suggest it
      if (['hi', 'mr', 'ta'].includes(lang)) {
        language = lang;
      } else {
        language = 'en';
      }
    } else if (tz.includes('Europe/London') || tz.includes('GB')) {
      region = 'UK';
    } else if (tz.includes('America/New_York') || tz.includes('America/Chicago') || tz.includes('America/Denver') || tz.includes('America/Los_Angeles') || tz.includes('US')) {
      region = 'US';
    }

    return { region, language };
  } catch (e) {
    return DEFAULT_STATE;
  }
}

export function useLocalization() {
  const [state, setState] = useState<LocalizationState>(() => {
    // 1. Check local storage first
    const saved = localStorage.getItem('nc_localization_v1');
    const parsed = safeJsonParse<LocalizationState | null>(saved, null);
    if (parsed) return parsed;

    // 2. Perform soft suggestion detection
    const detected = detectUserContext();
    return {
      ...detected,
      isManual: false
    };
  });

  const updateLocalization = (updates: Partial<LocalizationState>) => {
    setState(prev => {
      const newState = {
        ...prev,
        ...updates,
        isManual: true
      };
      try {
        localStorage.setItem('nc_localization_v1', JSON.stringify(newState));
      } catch (e) {
        logger.error('useLocalization', 'Failed to save localization state', e);
      }
      return newState;
    });
  };

  return {
    ...state,
    updateLocalization,
    supportedRegions: SUPPORTED_REGIONS
  };
}

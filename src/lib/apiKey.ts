import { obfuscatedStorage } from './obfuscatedStorage';

export const GEMINI_API_KEY_STORAGE_KEY = 'VITE_GEMINI_API_KEY';

export const getStoredGeminiApiKey = (): string => {
  try {
    const userKey = obfuscatedStorage.getItem(GEMINI_API_KEY_STORAGE_KEY);
    return userKey?.trim() || '';
  } catch {
    return '';
  }
};

export const setStoredGeminiApiKey = (apiKey: string): void => {
  try {
    obfuscatedStorage.setItem(GEMINI_API_KEY_STORAGE_KEY, apiKey.trim());
  } catch {
    // Browser storage can be disabled in hardened/private contexts.
  }
};

export const clearStoredGeminiApiKey = (): void => {
  try {
    obfuscatedStorage.removeItem(GEMINI_API_KEY_STORAGE_KEY);
  } catch {
    // Browser storage can be disabled in hardened/private contexts.
  }
};

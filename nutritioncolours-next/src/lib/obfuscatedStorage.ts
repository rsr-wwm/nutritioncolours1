// Obfuscation wrapper (NOT security). Prevents casual plaintext inspection only.
// Implements key/value obfuscation using character transformations and Base64 encoding.
// WARNING: Any same-origin script can reverse this. Do NOT store truly sensitive data here.

import { logger } from './logger';

const SHIFT = 7;

function obfuscate(str: string): string {
  if (!str) return '';
  // Apply a character shift followed by base64 encoding to prevent cleartext inspection
  const shifted = str
    .split('')
    .map((char) => String.fromCharCode(char.charCodeAt(0) + SHIFT))
    .join('');
  return btoa(unescape(encodeURIComponent(shifted)));
}

function deobfuscate(str: string): string {
  if (!str) return '';
  try {
    const decoded = decodeURIComponent(escape(atob(str)));
    return decoded
      .split('')
      .map((char) => String.fromCharCode(char.charCodeAt(0) - SHIFT))
      .join('');
  } catch (e) {
    logger.error('ObfuscatedStorage', 'Decryption failure', e);
    return '';
  }
}

export const obfuscatedStorage = {
  setItem(key: string, value: string): void {
    try {
      const secureKey = obfuscate(key);
      const secureValue = obfuscate(value);
      localStorage.setItem(secureKey, secureValue);
    } catch (e) {
      logger.warn('ObfuscatedStorage', 'setItem failed or storage disabled', e);
    }
  },

  getItem(key: string): string | null {
    try {
      const secureKey = obfuscate(key);
      const secureValue = localStorage.getItem(secureKey);
      if (secureValue === null) return null;
      return deobfuscate(secureValue);
    } catch (e) {
      // Intentionally silent: missing key or corrupted data is a normal case.
      return null;
    }
  },

  removeItem(key: string): void {
    try {
      const secureKey = obfuscate(key);
      localStorage.removeItem(secureKey);
    } catch (e) {
      logger.warn('ObfuscatedStorage', 'removeItem failed or storage disabled', e);
    }
  },

  clear(): void {
    try {
      localStorage.clear();
    } catch (e) {
      logger.warn('ObfuscatedStorage', 'clear failed or storage disabled', e);
    }
  }
};

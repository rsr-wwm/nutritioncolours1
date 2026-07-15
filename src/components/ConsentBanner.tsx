import React, { useState, useEffect } from 'react';
import { CookieConsent } from './CookieConsent';

export const ConsentBanner = () => {
  return <CookieConsent />;
};

export const hasConsent = (category: 'analytics' | 'personalization'): boolean => {
  if (typeof window === 'undefined') return false;
  const consent = localStorage.getItem('nutritioncolours_cookie_consent');
  if (!consent) return false;
  try {
    const data = JSON.parse(consent);
    return !!data[category];
  } catch {
    return false;
  }
};

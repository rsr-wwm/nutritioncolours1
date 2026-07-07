'use client';
import React, { useState, useEffect } from 'react';
import { IconShieldCheck, IconCheck, IconSettings, IconX } from './ui/Icons';

export const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  
  // Consent state structure
  const [preferences, setPreferences] = useState({
    essential: true, // Always true
    analytics: true,
    personalization: true,
  });

  useEffect(() => {
    // Check if user has already made a selection
    const consent = localStorage.getItem('nutritioncolours_cookie_consent');
    if (!consent) {
      // Trigger slide-in animation after a brief delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      essential: true,
      analytics: true,
      personalization: true,
      timestamp: Date.now(),
    };
    localStorage.setItem('nutritioncolours_cookie_consent', JSON.stringify(consentData));
    window.dispatchEvent(new Event('cookie-consent-updated'));
    setIsOpen(false);
  };

  const handleRejectAll = () => {
    const consentData = {
      essential: true,
      analytics: false,
      personalization: false,
      timestamp: Date.now(),
    };
    localStorage.setItem('nutritioncolours_cookie_consent', JSON.stringify(consentData));
    window.dispatchEvent(new Event('cookie-consent-updated'));
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    const consentData = {
      ...preferences,
      essential: true, // Safeguard
      timestamp: Date.now(),
    };
    localStorage.setItem('nutritioncolours_cookie_consent', JSON.stringify(consentData));
    window.dispatchEvent(new Event('cookie-consent-updated'));
    setIsOpen(false);
  };

  const togglePreference = (key: 'analytics' | 'personalization') => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[9999] animate-zoom-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
    >
      <div className="glass-panel-premium rounded-3xl p-6 border border-emerald-500/20 shadow-2xl relative overflow-hidden">
        {/* Soft background blob */}
        <div className="absolute -right-12 -top-12 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
        
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="p-2.5 bg-emerald-50 rounded-2xl text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 shrink-0">
            <IconShieldCheck size={24} />
          </div>
          <div className="flex-grow">
            <h2 id="cookie-title" className="text-base font-black text-emerald-950 dark:text-emerald-50 brand-font">
              Clinical Privacy & Cookies
            </h2>
            <p id="cookie-desc" className="text-xs text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
              We use secure, functional cookies to optimize your clinical portal experience, evaluate system performance, and align tools with your locale.
            </p>
          </div>
          <button 
            onClick={handleRejectAll}
            className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors"
            aria-label="Close and use essential cookies only"
          >
            <IconX size={16} />
          </button>
        </div>

        {/* Preferences Toggle Area */}
        {showPreferences && (
          <div className="my-4 pt-4 border-t border-stone-200/50 dark:border-stone-800 space-y-3">
            {/* Essential */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-stone-50 dark:bg-emerald-950/20">
              <div>
                <span className="text-xs font-bold text-emerald-950 dark:text-emerald-50 block">Essential Portal Cookies</span>
                <span className="text-[10px] text-stone-500 dark:text-stone-400">Required for routing, security, and logging portal states.</span>
              </div>
              <div className="shrink-0 ml-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                  <IconCheck size={14} />
                </span>
              </div>
            </div>

            {/* Performance/Analytics */}
            <div className="flex items-center justify-between p-2 rounded-xl hover:bg-stone-50 dark:hover:bg-emerald-950/20 transition-colors">
              <div>
                <span className="text-xs font-bold text-emerald-950 dark:text-emerald-50 block">Performance & Diagnostics</span>
                <span className="text-[10px] text-stone-500 dark:text-stone-400">Measures portal responsiveness, errors, and layout load speed.</span>
              </div>
              <button
                type="button"
                onClick={() => togglePreference('analytics')}
                className={`w-11 h-6 rounded-full transition-colors relative focus:outline-none focus:ring-2 focus:ring-emerald-500 ${preferences.analytics ? 'bg-emerald-600' : 'bg-stone-300 dark:bg-stone-700'}`}
                aria-pressed={preferences.analytics}
                aria-label="Toggle analytics cookies"
              >
                <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${preferences.analytics ? 'translate-x-5' : 'translate-x-0'}`}></span>
              </button>
            </div>

            {/* Personalization */}
            <div className="flex items-center justify-between p-2 rounded-xl hover:bg-stone-50 dark:hover:bg-emerald-950/20 transition-colors">
              <div>
                <span className="text-xs font-bold text-emerald-950 dark:text-emerald-50 block">Personalization & Theme</span>
                <span className="text-[10px] text-stone-500 dark:text-stone-400">Preserves dark/light theme options and location-specific filters.</span>
              </div>
              <button
                type="button"
                onClick={() => togglePreference('personalization')}
                className={`w-11 h-6 rounded-full transition-colors relative focus:outline-none focus:ring-2 focus:ring-emerald-500 ${preferences.personalization ? 'bg-emerald-600' : 'bg-stone-300 dark:bg-stone-700'}`}
                aria-pressed={preferences.personalization}
                aria-label="Toggle personalization cookies"
              >
                <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${preferences.personalization ? 'translate-x-5' : 'translate-x-0'}`}></span>
              </button>
            </div>
          </div>
        )}

        {/* Buttons / Actions */}
        <div className="flex flex-col sm:flex-row gap-2 mt-4 pt-2">
          {showPreferences ? (
            <>
              <button
                onClick={handleSavePreferences}
                className="flex-grow bg-emerald-900 hover:bg-emerald-800 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer text-center"
              >
                Save Selected
              </button>
              <button
                onClick={() => setShowPreferences(false)}
                className="bg-stone-100 hover:bg-stone-200 dark:bg-emerald-950 dark:hover:bg-emerald-900 text-stone-700 dark:text-emerald-200 text-[11px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all cursor-pointer text-center"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleAcceptAll}
                className="flex-grow bg-emerald-900 hover:bg-emerald-800 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer text-center"
              >
                Accept All
              </button>
              <button
                onClick={handleRejectAll}
                className="bg-stone-100 hover:bg-stone-200 dark:bg-emerald-950 dark:hover:bg-emerald-900 text-stone-700 dark:text-emerald-200 text-[11px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all cursor-pointer text-center"
              >
                Reject All
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="p-2.5 border border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-emerald-950/40 text-stone-600 dark:text-stone-300 rounded-xl transition-all cursor-pointer flex items-center justify-center"
                aria-label="Customize cookie preferences"
              >
                <IconSettings size={16} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

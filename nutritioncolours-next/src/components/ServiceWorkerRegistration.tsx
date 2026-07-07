'use client';

import { useEffect } from 'react';

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  }, []);

  return null;
}

export function OfflineBanner() {
  useEffect(() => {
    const handleOffline = () => {
      const banner = document.getElementById('offline-banner');
      if (banner) banner.style.display = 'flex';
    };
    const handleOnline = () => {
      const banner = document.getElementById('offline-banner');
      if (banner) banner.style.display = 'none';
    };
    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);
    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  return (
    <div id="offline-banner" style={{ display: 'none' }} className="fixed bottom-0 left-0 right-0 bg-amber-500 text-white text-center py-3 px-4 z-[9999] text-sm font-bold">
      You are offline. Some features may be unavailable.
    </div>
  );
}

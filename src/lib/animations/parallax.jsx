// src/lib/animations/parallax.jsx
// NOTE: This component is no longer used — parallax is handled via pure JS in BaseLayout.
// Kept for reference only. The Rules-of-Hooks violation has been fixed below.

import { useEffect, useRef } from 'react';

const BOT_UA = [/googlebot/i, /bingbot/i, /yandexbot/i, /baiduspider/i, /applebot/i];

export default function ParallaxWrapper({ children }) {
  const wrapperRef = useRef(null);
  // Bot detection moved INSIDE useEffect — never before hooks
  const isBot = typeof navigator !== 'undefined' && BOT_UA.some(r => r.test(navigator.userAgent));

  useEffect(() => {
    // Skip entirely for crawlers
    if (isBot) return;

    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const layers = wrapperRef.current.querySelectorAll('.parallax-layer');
      layers.forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-speed') || '0.3');
        const translate = window.scrollY * speed;
        const scale = 1 + window.scrollY * speed * 0.0005;
        layer.style.transform = `translate3d(0, ${translate}px, 0) scale(${scale})`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBot]);

  // No early return before hooks anymore — always return the wrapper
  return <div ref={wrapperRef}>{children}</div>;
}

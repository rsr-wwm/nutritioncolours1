// src/lib/animations/parallax.js
"use client";
import { useEffect, useRef } from 'react';

const BOT_UA = [/googlebot/i, /bingbot/i, /yandexbot/i, /baiduspider/i, /applebot/i];

export default function ParallaxWrapper({ children }) {
  const wrapperRef = useRef(null);

  // Skip loading for bots/ crawlers
  if (typeof navigator !== 'undefined' && BOT_UA.some(r => r.test(navigator.userAgent))) {
    return <>{children}</>;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const layers = wrapperRef.current.querySelectorAll('.parallax-layer');
      layers.forEach(layer => {
        const speedAttr = layer.getAttribute('data-speed');
        const speed = speedAttr ? parseFloat(speedAttr) : parseFloat(getComputedStyle(layer).getPropertyValue('--speed')) || 0.3;
        const offset = window.scrollY;
        const translate = offset * speed;
        const scale = 1 + offset * speed * 0.0005; // subtle scaling
        layer.style.transform = `translate3d(0, ${translate}px, 0) scale(${scale})`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}

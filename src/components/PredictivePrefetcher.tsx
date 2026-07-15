import React, { useEffect, useRef } from 'react';

export default function PredictivePrefetcher() {
  const prefetchedUrls = useRef<Set<string>>(new Set());

  // Function to inject a prefetch tag dynamically into the document head
  const triggerPrefetch = (url: string) => {
    if (!url) return;
    
    // Resolve absolute URL or local path
    const targetUrl = new URL(url, window.location.href);
    
    // Only prefetch local links on the same domain and avoid duplicates
    if (
      targetUrl.origin === window.location.origin && 
      !prefetchedUrls.current.has(targetUrl.pathname) &&
      targetUrl.pathname !== window.location.pathname
    ) {
      prefetchedUrls.current.add(targetUrl.pathname);
      
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = targetUrl.pathname;
      document.head.appendChild(link);
      console.log(`[Telemetry Caching] Predictively prefetched: ${targetUrl.pathname}`);
    }
  };

  useEffect(() => {
    // 1. VIEWPORT OBSERVER: Prefetch links when they enter the user's view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const anchor = entry.target as HTMLAnchorElement;
            triggerPrefetch(anchor.href);
          }
        });
      },
      { rootMargin: '50px', threshold: 0.1 }
    );

    // Watch all local clinic/topic links that enter the viewport
    const registerViewportLinks = () => {
      const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="/clinic/"], a[href^="/topic/"]');
      anchors.forEach((anchor) => observer.observe(anchor));
    };

    // Initialize observers
    registerViewportLinks();

    // 2. MOUSE VECTOR & VELOCITY TRACKER (Telemetry Intent)
    let lastX = 0;
    let lastY = 0;
    let lastTime = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      const dt = currentTime - lastTime;
      if (dt < 20) return; // limit frequency

      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const velocity = Math.sqrt(dx * dx + dy * dy) / dt; // pixels per millisecond

      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = currentTime;

      // Only track predictive intent if mouse is moving at active speeds (between 0.3 and 3 px/ms)
      if (velocity > 0.3 && velocity < 3) {
        // Find links near the mouse trajectory vector
        const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="/clinic/"], a[href^="/topic/"]');
        anchors.forEach((anchor) => {
          const rect = anchor.getBoundingClientRect();
          
          // Calculate if mouse movement vector is heading towards this anchor
          const anchorCenterX = rect.left + rect.width / 2;
          const anchorCenterY = rect.top + rect.height / 2;
          
          const vectorToAnchorX = anchorCenterX - e.clientX;
          const vectorToAnchorY = anchorCenterY - e.clientY;
          
          // Dot product to check alignment of velocity vector (dx, dy) with direction to link
          const dotProduct = dx * vectorToAnchorX + dy * vectorToAnchorY;
          const distance = Math.sqrt(vectorToAnchorX * vectorToAnchorX + vectorToAnchorY * vectorToAnchorY);

          // If mouse is moving towards the link and is within 150px proximity, prefetch immediately
          if (dotProduct > 0 && distance < 150) {
            triggerPrefetch(anchor.href);
          }
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Re-check for new links when DOM structure changes
    const mutationObserver = new MutationObserver(registerViewportLinks);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // Telemetry running silently in the background
}

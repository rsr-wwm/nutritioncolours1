'use client';
// Custom hook to get pathname
import { useState, useEffect } from 'react';

function usePathname() {
  const [pathname, setPathname] = useState('');
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);
  return pathname;
}


export function PageAtmosphere() {
  const pathname = usePathname();

  useEffect(() => {
    const html = document.documentElement;
    
    // Set page category for brand atmosphere (Task 7)
    if (pathname.startsWith('/plans') || pathname.startsWith('/about') || pathname.startsWith('/team') || pathname.startsWith('/testimonials') || pathname.startsWith('/clinics') || pathname.startsWith('/clinic/')) {
      html.setAttribute('data-page-category', 'clinical');
    } else if (pathname.startsWith('/knowledge') || pathname.startsWith('/herb/') || pathname.startsWith('/condition/') || pathname.startsWith('/topic/') || pathname.startsWith('/article/') || pathname.startsWith('/vegan/') || pathname.startsWith('/genomics/') || pathname.startsWith('/interactions/')) {
      html.setAttribute('data-page-category', 'knowledge');
    } else if (pathname.startsWith('/recipe') || pathname.startsWith('/recipes')) {
      html.setAttribute('data-page-category', 'recipe');
    } else if (pathname.startsWith('/tools')) {
      html.setAttribute('data-page-category', 'tool');
    } else {
      html.removeAttribute('data-page-category');
    }

    // Set nav context for intent-aware navigation (Task 13)
    if (pathname.startsWith('/knowledge') || pathname.startsWith('/herb/') || pathname.startsWith('/condition/') || pathname.startsWith('/topic/') || pathname.startsWith('/article/') || pathname.startsWith('/vegan/')) {
      html.setAttribute('data-nav-context', 'knowledge');
    } else if (pathname.startsWith('/plans') || pathname.startsWith('/about') || pathname.startsWith('/team')) {
      html.setAttribute('data-nav-context', 'service');
    } else if (pathname.startsWith('/tools') || pathname.startsWith('/recipes')) {
      html.setAttribute('data-nav-context', 'tools');
    } else {
      html.removeAttribute('data-nav-context');
    }
  }, [pathname]);

  return null;
}

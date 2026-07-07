import { useEffect, useState } from 'react';

export function useIntentAwareNavigation() {
  const [navContext, setNavContext] = useState<'knowledge' | 'service' | 'tools' | 'general'>('general');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const pathname = window.location.pathname;
    
    // Determine page category based on route
    if (pathname.startsWith('/knowledge') || pathname.startsWith('/herb/') || 
        pathname.startsWith('/condition/') || pathname.startsWith('/topic/') ||
        pathname.startsWith('/article/') || pathname.startsWith('/vegan/')) {
      setNavContext('knowledge');
    } else if (pathname.startsWith('/plans') || pathname.startsWith('/about') ||
               pathname.startsWith('/team') || pathname.startsWith('/testimonials')) {
      setNavContext('service');
    } else if (pathname.startsWith('/tools') || pathname.startsWith('/recipes')) {
      setNavContext('tools');
    } else {
      setNavContext('general');
    }

    // Check if returning visitor
    const visitCount = localStorage.getItem('nc-visit-count');
    if (!visitCount || parseInt(visitCount) < 3) {
      localStorage.setItem('nc-visit-count', String((parseInt(visitCount || '0') + 1)));
    }
  }, []);

  return navContext;
}

export function getNavEmphasis(context: 'knowledge' | 'service' | 'tools' | 'general') {
  switch (context) {
    case 'knowledge':
      return {
        primary: 'Knowledge Hub',
        secondary: 'Health Topics',
        tertiary: 'Research',
      };
    case 'service':
      return {
        primary: 'Our Programs',
        secondary: 'Success Stories',
        tertiary: 'Get Started',
      };
    case 'tools':
      return {
        primary: 'Health Tools',
        secondary: 'Calculators',
        tertiary: 'Resources',
      };
    default:
      return {
        primary: 'Explore',
        secondary: 'Learn',
        tertiary: 'Connect',
      };
  }
}

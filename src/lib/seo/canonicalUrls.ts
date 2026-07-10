/**
 * Canonical URL Generator
 * Generates canonical URLs and hreflang alternates per route.
 * Provides stable, crawlable references for AI citation and search engines.
 */

const BASE_URL = 'https://nutritioncolours.com';

const SUPPORTED_LANGUAGES = ['en', 'hi', 'mr', 'ta', 'ar', 'fr', 'de', 'es', 'ja'] as const;

const HREFLANG_MAP: Record<string, string> = {
  en: 'en',
  hi: 'en-IN',
  mr: 'en-IN',
  ta: 'en-IN',
  ar: 'ar',
  fr: 'fr',
  de: 'de',
  es: 'es',
  ja: 'ja'
};

export interface CanonicalData {
  canonical: string;
  hreflangAlternates: { lang: string; hreflang: string; href: string }[];
  xDefault: string;
  ogUrl: string;
}

/**
 * Generate canonical URL data for any route path.
 * @param path - The route path (e.g., 'condition/diabetes-reversal', 'home', 'recipes')
 */
export function generateCanonicalData(path: string): CanonicalData {
  const normalizedPath = path === 'home' ? '' : path;
  const canonical = `${BASE_URL}/${normalizedPath}`;

  const hreflangAlternates = SUPPORTED_LANGUAGES.map(lang => {
    const localPath = lang === 'en' ? normalizedPath : `${lang}/${normalizedPath}`;
    return {
      lang,
      hreflang: HREFLANG_MAP[lang] || lang,
      href: `${BASE_URL}/${localPath}`
    };
  });

  return {
    canonical,
    hreflangAlternates,
    xDefault: canonical,
    ogUrl: canonical
  };
}

/**
 * Generate Open Graph meta tags from canonical data.
 */
export function getOpenGraphTags(path: string, title: string, description: string, image?: string) {
  const data = generateCanonicalData(path);
  return {
    'og:url': data.canonical,
    'og:type': 'website',
    'og:title': title.split('|')[0].trim(),
    'og:description': description,
    ...(image ? { 'og:image': image.startsWith('http') ? image : `${BASE_URL}${image}` } : {}),
    'og:site_name': 'NutritionColours',
    'og:locale': 'en_US'
  };
}

/**
 * Inject canonical and hreflang link elements into the document head.
 * Called during route changes to keep meta tags in sync.
 */
export function injectCanonicalLinks(path: string): void {
  const data = generateCanonicalData(path);

  // Canonical link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', data.canonical);

  // Remove old hreflang alternates
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

  // Inject hreflang alternates
  data.hreflangAlternates.forEach(({ hreflang, href }) => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', hreflang);
    link.setAttribute('href', href);
    document.head.appendChild(link);
  });

  // x-default
  const xDefaultLink = document.createElement('link');
  xDefaultLink.setAttribute('rel', 'alternate');
  xDefaultLink.setAttribute('hreflang', 'x-default');
  xDefaultLink.setAttribute('href', data.xDefault);
  document.head.appendChild(xDefaultLink);
}

export { BASE_URL, SUPPORTED_LANGUAGES, HREFLANG_MAP };

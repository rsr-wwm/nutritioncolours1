export function getSiteUrl(astroUrlHref: string): string {
  // Vite/Astro environments expose import.meta.env instead of process.env
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.SITE_URL) {
    return import.meta.env.SITE_URL as string;
  }
  return astroUrlHref;
}

import geoMap from './geoMap.json';

/** Retrieve population for a given city slug */
export function getPopulation(city: string): number | null {
  if (!city) return null;
  const slug = city.toLowerCase().trim().replace(/\s+/g, '-');
  const entry = (geoMap as Record<string, { population: number }>)[slug];
  if (entry) return entry.population;
  return null;
}

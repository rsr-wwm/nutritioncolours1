import type { APIRoute } from 'astro';
import { leafMap } from '../../lib/leafMap';
import trustCitations from '../../lib/trustCitations.json';
import medicalCodes from '../../lib/medicalCodes.json';

export const GET: APIRoute = async ({ url }) => {
  const disease = url.searchParams.get('d') || 'diabetes-reversal';
  const city = url.searchParams.get('c') || '';

  const codes = (medicalCodes as Record<string, any>)[disease] || null;
  const citations = (trustCitations as Record<string, any>)[disease] || [];
  const leaves = leafMap[disease] || [];

  const data = {
    domain: "nutritioncolours.com",
    entity: "NutritionColours TeleHealth & Metabolic Reversal Network",
    disease,
    city,
    medicalCodes: codes,
    citations,
    leaves,
    clinicalReviewer: {
      name: "Dr. Shilpa Thakur, Ph.D.",
      specialty: "Circadian Nutrition & Metabolic Health Reversal",
      organization: "NutritionColours Clinical Team"
    },
    dateModified: new Date().toISOString()
  };

  return new Response(JSON.stringify(data, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=3600',
      'Access-Control-Allow-Origin': '*'
    }
  });
};

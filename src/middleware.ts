import { defineMiddleware } from 'astro:middleware';
import { getPopulation } from './lib/population';

/**
 * Middleware to set X-Robots-Tag for low‑population towns, expose hub formula flags,
 * and add essential security headers to response.
 */
export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const segments = url.pathname.split('/').filter(Boolean);
  
  let city = '';
  if (segments[0] === 'clinic' && segments[1]) {
    city = segments[1];
  }

  const pop = getPopulation(city);

  if (pop && pop < 100_000) {
    context.locals.isSmallTown = true;
  }

  if (pop && pop >= 1_000_000) {
    context.locals.hubFormula = '1+4';
  } else if (pop && pop >= 500_000) {
    context.locals.hubFormula = '1+3';
  } else if (pop && pop < 100_000) {
    context.locals.hubFormula = '1-2';
  } else {
    context.locals.hubFormula = '1+3';
  }

  const response = await next();

  if (pop && pop < 100_000) {
    response.headers.set('X-Robots-Tag', 'noindex, follow, max-snippet:0');
  }

  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return response;
});

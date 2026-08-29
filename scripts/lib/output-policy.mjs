export const SITE_ORIGIN = 'https://nutritioncolours.com';

export const FORBIDDEN_SCHEMA_TYPES = Object.freeze(new Set([
  'MedicalClinic', 'MedicalBusiness', 'LocalBusiness', 'HealthAndBeautyBusiness',
  'Physician', 'Review', 'AggregateRating', 'HealthInsurancePlan', 'Drug',
  'DietarySupplement',
]));

export function exactSameOrigin(value, origin = SITE_ORIGIN) {
  try {
    return new URL(value).origin === origin;
  } catch {
    return false;
  }
}

export function unsafeHrefScheme(value) {
  try {
    const scheme = new URL(value, SITE_ORIGIN).protocol.replace(':', '').toLowerCase();
    return ['javascript', 'data', 'vbscript', 'file', 'blob'].includes(scheme) ? scheme : null;
  } catch {
    return null;
  }
}

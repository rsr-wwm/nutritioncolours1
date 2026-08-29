import { SITE_ORIGIN } from './lib/output-policy.mjs';

const strategy = process.env.CWV_STRATEGY || 'mobile';
if (!['mobile', 'desktop'].includes(strategy)) throw new Error('CWV_STRATEGY must be mobile or desktop');
const urls = (process.env.CWV_URLS || `${SITE_ORIGIN}/`).split(',').map((value) => value.trim()).filter(Boolean);
const allowLabOnly = process.env.CWV_ALLOW_LAB_ONLY === '1';
const apiKey = process.env.PAGESPEED_API_KEY;
const failures = [];

for (const value of urls) {
  let pageUrl;
  try {
    pageUrl = new URL(value);
  } catch {
    failures.push(`${value}: CWV_URLS contains an invalid URL`);
    continue;
  }
  if (pageUrl.protocol !== 'https:' || pageUrl.username || pageUrl.password) {
    failures.push(`${value}: CWV targets must be credentials-free HTTPS URLs`);
    continue;
  }
  const endpoint = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
  endpoint.searchParams.set('url', pageUrl.href);
  endpoint.searchParams.set('strategy', strategy);
  endpoint.searchParams.set('category', 'performance');
  if (apiKey) endpoint.searchParams.set('key', apiKey);

  let response;
  try {
    response = await fetch(endpoint, {
      headers: { 'user-agent': 'NutritionColours-CWV-Verifier/1.0' },
      signal: AbortSignal.timeout(120_000),
    });
  } catch (error) {
    failures.push(`${pageUrl.href}: PageSpeed request failed (${error.message})`);
    continue;
  }
  let report;
  try {
    report = await response.json();
  } catch (error) {
    failures.push(`${pageUrl.href}: PageSpeed returned invalid JSON (${error.message})`);
    continue;
  }
  if (!response.ok || report.error) {
    const message = report.error?.message || `HTTP ${response.status}`;
    failures.push(`${pageUrl.href}: PageSpeed API failed (${message}). ${apiKey ? '' : 'Set PAGESPEED_API_KEY if the public quota is unavailable.'}`.trim());
    continue;
  }

  const pageField = report.loadingExperience;
  const originField = report.originLoadingExperience;
  const field = pageField?.overall_category && pageField.overall_category !== 'NONE' ? pageField : originField;
  const fieldScope = field === pageField ? 'URL' : 'origin';
  const requiredMetrics = [
    ['LCP', 'LARGEST_CONTENTFUL_PAINT_MS'],
    ['INP', 'INTERACTION_TO_NEXT_PAINT'],
    ['CLS', 'CUMULATIVE_LAYOUT_SHIFT_SCORE'],
  ];
  if (!field?.metrics || requiredMetrics.some(([, key]) => !field.metrics[key])) {
    const message = `${pageUrl.href}: insufficient 28-day CrUX field data to verify all CWV metrics`;
    if (allowLabOnly) console.warn(`Warning: ${message}; using lab diagnostics only because CWV_ALLOW_LAB_ONLY=1.`);
    else failures.push(`${message}. Re-run with CWV_ALLOW_LAB_ONLY=1 only for a non-field diagnostic.`);
  } else {
    console.log(`${pageUrl.href} (${fieldScope} field data):`);
    for (const [label, key] of requiredMetrics) {
      const metric = field.metrics[key];
      console.log(`- ${label}: p75 ${metric.percentile} (${metric.category})`);
      if (metric.category !== 'FAST') failures.push(`${pageUrl.href}: ${fieldScope} p75 ${label} is ${metric.category}, not FAST`);
    }
  }

  const audits = report.lighthouseResult?.audits || {};
  const lab = {
    performance: Math.round((report.lighthouseResult?.categories?.performance?.score ?? 0) * 100),
    lcp: audits['largest-contentful-paint']?.numericValue,
    cls: audits['cumulative-layout-shift']?.numericValue,
    tbt: audits['total-blocking-time']?.numericValue,
  };
  if ([lab.lcp, lab.cls, lab.tbt].some((value) => typeof value !== 'number')) failures.push(`${pageUrl.href}: Lighthouse lab diagnostics are incomplete`);
  else {
    console.log(`${pageUrl.href} (${strategy} Lighthouse diagnostic): performance ${lab.performance}, LCP ${Math.round(lab.lcp)}ms, CLS ${lab.cls.toFixed(3)}, TBT ${Math.round(lab.tbt)}ms`);
    if (lab.lcp > 2500) failures.push(`${pageUrl.href}: lab LCP ${Math.round(lab.lcp)}ms exceeds 2500ms`);
    if (lab.cls > 0.1) failures.push(`${pageUrl.href}: lab CLS ${lab.cls.toFixed(3)} exceeds 0.1`);
    if (lab.tbt > 200) failures.push(`${pageUrl.href}: lab TBT ${Math.round(lab.tbt)}ms exceeds the diagnostic 200ms budget`);
  }
}

if (failures.length) {
  console.error(`CWV verification failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log(`CWV verification passed for ${urls.length} ${strategy} target(s). Field status came from CrUX; Lighthouse values are lab diagnostics, not proof of field INP.`);

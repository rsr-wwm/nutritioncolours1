import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/Footer';
import { ParticleConstellation } from '@/components/ParticleConstellation';
import { ServiceWorkerRegistration, OfflineBanner } from '@/components/ServiceWorkerRegistration';
import { CookieConsent } from '@/components/CookieConsent';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import { PageAtmosphere } from '@/components/PageAtmosphere';

export const metadata: Metadata = {
  title: {
    default: 'NutritionColours | Metabolic Health & Circadian Nutrition Optimization 2026',
    template: '%s | NutritionColours',
  },
  description:
    'Optimize Type 2 Diabetes, PCOD, and Fatty Liver wellness naturally. Book a clinical consultation for Dr. Shilpa Thakur\'s expert Circadian Nutrition programs in 2026.',
  keywords: [
    'Diabetes Nutrition Support India',
    'PCOD Diet Plan',
    'Clinical Nutritionist Online',
    'Dr Shilpa Thakur',
    'Fatty Liver Nutrition',
    'Circadian Rhythm Diet',
    'Weight Loss Nutritionist',
  ],
  metadataBase: new URL('https://nutritioncolours.com'),
  alternates: {
    canonical: '/',
    languages: {
      'x-default': '/',
      en: '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nutritioncolours.com/',
    siteName: 'NutritionColours',
    title: 'NutritionColours | Metabolic Health & Circadian Nutrition Optimization',
    description:
      'Optimize Type 2 Diabetes, PCOD, and Fatty Liver wellness naturally. Book a clinical consultation with Dr. Shilpa Thakur in 2026.',
    images: ['/images/precision_metabolic_nutrition_dr_shilpa.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NutritionColours | Metabolic Health & Circadian Nutrition',
    description:
      'Circadian rhythm protocols designed by Dr. Shilpa Thakur, Ph.D. for metabolic support.',
    images: ['/images/precision_metabolic_nutrition_dr_shilpa.webp'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  manifest: '/manifest.json',
  other: {
    'ai:content-purpose':
      'clinical nutrition education, metabolic health information, circadian diet guidance',
    'ai:audience': 'patients, health seekers, AI answer engines, LLM crawlers',
    'ai:author-expertise': 'Ph.D. Clinical Nutrition, 15+ years metabolic practice',
    'ai:content-type': 'evidence-based clinical nutrition knowledge base',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preconnect"
          href="https://generativelanguage.googleapis.com"
          crossOrigin="anonymous"
        />

        {/* Font preloads */}
        <link
          rel="preload"
          href="/fonts/inter-latin-400-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter-latin-500-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter-latin-600-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter-latin-700-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />

        {/* Hero image preload */}
        <link
          rel="preload"
          href="/images/precision_metabolic_nutrition_dr_shilpa.webp"
          as="image"
          fetchPriority="high"
        />

        {/* PWA meta tags */}
        <meta name="theme-color" content="#065f46" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/icons/icon-any.svg" />

        {/* RSS Feed */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="NutritionColours Insights Feed"
          href="/rss.xml"
        />

        {/* AI/LLM links */}
        <link
          rel="lrdd"
          type="application/json"
          href="/data/clinical-feed.json"
          title="Clinical Entity Feed"
        />
        <link
          rel="alternate"
          type="text/markdown"
          href="/llms.txt"
          title="LLM-optimized documentation"
        />
        <link
          rel="alternate"
          type="text/markdown"
          href="/llms-full.txt"
          title="LLM deep documentation"
        />
        <link
          rel="alternate"
          type="text/markdown"
          href="/llms-conditions.txt"
          title="Clinical FAQ corpus for AI engines"
        />
        <link rel="llms" href="/llms.txt" title="NutritionColours Clinical Nutrition AI Feed" />
        <link
          rel="service"
          type="application/openapi+json"
          href="/openapi.json"
          title="NutritionColours Clinical Data API"
        />
        <link rel="security" href="/.well-known/security.txt" title="Security Policy" />

        {/* Speculation Rules for instant pre-rendering */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  source: 'document',
                  where: {
                    and: [
                      { href_matches: '/*' },
                      { not: { href_matches: ['/admin/*', '/api/*', '/honeypot/*'] } },
                    ],
                  },
                  eagerness: 'conservative',
                },
              ],
              prefetch: [
                {
                  source: 'document',
                  where: {
                    or: [
                      { href_matches: '/clinic/**' },
                      { href_matches: '/plans/**' },
                      { href_matches: '/recipe/**' },
                      { href_matches: '/herb/**' },
                      { href_matches: '/condition/**' },
                      { href_matches: '/topic/**' },
                    ],
                  },
                  eagerness: 'moderate',
                },
              ],
            }),
          }}
        />

        {/* Inline CSS for card-3d (visible before JS loads) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --card-hue: 210;
                --card-start-light: 45%;
                --card-end-light: 60%;
                --card-start-light-hover: 55%;
                --card-end-light-hover: 70%;
                --card-radius: 0.75rem;
                --card-shadow: 0 4px 6px rgba(0,0,0,0.1);
                --card-shadow-hover: 0 8px 12px rgba(0,0,0,0.2);
              }
              .card-3d {
                display: inline-block;
                padding: 0.75rem 1.25rem;
                border-radius: var(--card-radius);
                background: linear-gradient(135deg,
                  hsl(var(--card-hue), 70%, var(--card-start-light)),
                  hsl(var(--card-hue), 70%, var(--card-end-light)));
                color: #fff;
                text-decoration: none;
                box-shadow: var(--card-shadow);
                transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
              }
              .card-3d:hover {
                transform: translateY(-4px) scale(1.02);
                box-shadow: var(--card-shadow-hover);
                background: linear-gradient(135deg,
                  hsl(var(--card-hue), 70%, var(--card-start-light-hover)),
                  hsl(var(--card-hue), 70%, var(--card-end-light-hover)));
              }
              .exclude-link { /* Excluded from visual styling */ }
              .hero-overlay { background: linear-gradient(180deg, rgba(0,0,0,0.5), transparent); }
            `,
          }}
        />
      </head>
      <body className="texture-light text-stone-900 selection:bg-lime-300 selection:text-emerald-950">
        {/* Skip Navigation */}
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        {/* Honeypot trap */}
        <a
          href="/honeypot/trap/"
          rel="nofollow"
          style={{ display: 'none' }}
          aria-hidden="true"
          tabIndex={-1}
          className="exclude-link"
        >
          Clinical Directory Index
        </a>

        <Header />
        <ScrollProgressBar />
        <PageAtmosphere />
        <main id="main-content">{children}</main>
        <Footer />
        <ParticleConstellation />
        <ServiceWorkerRegistration />
        <OfflineBanner />
        <CookieConsent />

        {/* Hidden honeypot at bottom */}
        <a
          href="/honeypot/trap"
          style={{ display: 'none', position: 'absolute', left: '-9999px' }}
          rel="nofollow"
          aria-hidden="true"
          className="exclude-link"
        >
          Clinical Resources Archive
        </a>
      </body>
    </html>
  );
}

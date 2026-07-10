// src/circadianTheme.ts
// Task 7: Circadian-Aware Content Delivery (Chronobiological UX)
// Adapts the entire UX to the user's local solar time for biologically-native feel.

export type CircadianPhase = 'dawn' | 'morning' | 'midday' | 'afternoon' | 'evening' | 'night' | 'latenight';

export interface CircadianTheme {
  phase: CircadianPhase;
  palette: {
    bg: string;
    bgAlt: string;
    text: string;
    textMuted: string;
    accent: string;
    accentAlt: string;
    border: string;
    cardBg: string;
    selection: string;
  };
  animationIntensity: 'high' | 'medium' | 'low' | 'minimal';
  contentMood: string;
  greeting: string;
}

/**
 * Compute the user's local solar time phase.
 * Uses the localization context to get city and compute solar time offset.
 */
export function getCircadianPhase(longitudeDeg?: number): CircadianPhase {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const solarHour = hours + minutes / 60;

  // Adjust for longitude if available (rough solar time correction)
  const adjustedHour = longitudeDeg != null
    ? (solarHour + longitudeDeg / 15) % 24
    : solarHour;

  if (adjustedHour >= 5 && adjustedHour < 7) return 'dawn';
  if (adjustedHour >= 7 && adjustedHour < 11) return 'morning';
  if (adjustedHour >= 11 && adjustedHour < 14) return 'midday';
  if (adjustedHour >= 14 && adjustedHour < 17) return 'afternoon';
  if (adjustedHour >= 17 && adjustedHour < 20) return 'evening';
  if (adjustedHour >= 20 && adjustedHour < 23) return 'night';
  return 'latenight'; // 23:00 - 05:00
}

/**
 * Get the full circadian theme for the current phase.
 */
export function getCircadianTheme(phase: CircadianPhase): CircadianTheme {
  switch (phase) {
    case 'dawn':
      return {
        phase,
        palette: {
          bg: '#FFF8F0',
          bgAlt: '#FFF3E6',
          text: '#1C1917',
          textMuted: '#78716C',
          accent: '#D97706',
          accentAlt: '#F59E0B',
          border: '#E7E5E4',
          cardBg: '#FFFFFF',
          selection: '#FDE68A',
        },
        animationIntensity: 'medium',
        contentMood: 'Awaken your metabolic clock',
        greeting: 'Good dawn. Your body is preparing for the day.',
      };
    case 'morning':
      return {
        phase,
        palette: {
          bg: '#FFFBF5',
          bgAlt: '#FEF3C7',
          text: '#1C1917',
          textMuted: '#57534E',
          accent: '#065F46',
          accentAlt: '#059669',
          border: '#E7E5E4',
          cardBg: '#FFFFFF',
          selection: '#BBF7D0',
        },
        animationIntensity: 'high',
        contentMood: 'Peak metabolic window -- optimize your morning',
        greeting: 'Good morning. Your insulin sensitivity is at its peak.',
      };
    case 'midday':
      return {
        phase,
        palette: {
          bg: '#FAFAF9',
          bgAlt: '#F5F5F4',
          text: '#1C1917',
          textMuted: '#44403C',
          accent: '#065F46',
          accentAlt: '#047857',
          border: '#D6D3D1',
          cardBg: '#FFFFFF',
          selection: '#A7F3D0',
        },
        animationIntensity: 'high',
        contentMood: 'Peak digestion -- consume your largest meal now',
        greeting: 'Midday. Your digestive fire is strongest right now.',
      };
    case 'afternoon':
      return {
        phase,
        palette: {
          bg: '#F5F5F4',
          bgAlt: '#FAFAF9',
          text: '#1C1917',
          textMuted: '#57534E',
          accent: '#065F46',
          accentAlt: '#059669',
          border: '#D6D3D1',
          cardBg: '#FFFFFF',
          selection: '#BBF7D0',
        },
        animationIntensity: 'medium',
        contentMood: 'Sustained energy -- light, nutrient-dense choices',
        greeting: 'Afternoon. A light meal will sustain your energy.',
      };
    case 'evening':
      return {
        phase,
        palette: {
          bg: '#F0FDF4',
          bgAlt: '#ECFDF5',
          text: '#1C1917',
          textMuted: '#57534E',
          accent: '#065F46',
          accentAlt: '#047857',
          border: '#D1D5DB',
          cardBg: '#FFFFFF',
          selection: '#A7F3D0',
        },
        animationIntensity: 'low',
        contentMood: 'Wind down your metabolic clock',
        greeting: 'Evening. Begin winding down your eating window.',
      };
    case 'night':
      return {
        phase,
        palette: {
          bg: '#0F172A',
          bgAlt: '#1E293B',
          text: '#F1F5F9',
          textMuted: '#94A3B8',
          accent: '#34D399',
          accentAlt: '#6EE7B7',
          border: '#334155',
          cardBg: '#1E293B',
          selection: '#065F46',
        },
        animationIntensity: 'low',
        contentMood: 'Rest and repair -- your body is healing',
        greeting: 'Good night. Your body is in repair mode.',
      };
    case 'latenight':
      return {
        phase,
        palette: {
          bg: '#0C0F1A',
          bgAlt: '#151929',
          text: '#CBD5E1',
          textMuted: '#64748B',
          accent: '#22D3EE',
          accentAlt: '#67E8F9',
          border: '#1E293B',
          cardBg: '#151929',
          selection: '#164E63',
        },
        animationIntensity: 'minimal',
        contentMood: 'Deep rest -- metabolic restoration in progress',
        greeting: 'Late night. Your body is deep in cellular repair.',
      };
  }
}

/**
 * Apply circadian theme CSS custom properties to the document root.
 */
export function applyCircadianTheme(theme: CircadianTheme): void {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const { palette } = theme;

  root.style.setProperty('--circ-bg', palette.bg);
  root.style.setProperty('--circ-bg-alt', palette.bgAlt);
  root.style.setProperty('--circ-text', palette.text);
  root.style.setProperty('--circ-text-muted', palette.textMuted);
  root.style.setProperty('--circ-accent', palette.accent);
  root.style.setProperty('--circ-accent-alt', palette.accentAlt);
  root.style.setProperty('--circ-border', palette.border);
  root.style.setProperty('--circ-card-bg', palette.cardBg);
  root.style.setProperty('--circ-selection', palette.selection);
  root.style.setProperty('--circ-anim-intensity',
    theme.animationIntensity === 'high' ? '1' :
    theme.animationIntensity === 'medium' ? '0.7' :
    theme.animationIntensity === 'low' ? '0.4' : '0.1'
  );

  // Apply background and text color
  root.style.backgroundColor = palette.bg;
  root.style.color = palette.text;
}

/**
 * Initialize circadian theme system.
 * Call once on app mount.
 */
export function initCircadianTheme(longitudeDeg?: number): CircadianTheme {
  const phase = getCircadianPhase(longitudeDeg);
  const theme = getCircadianTheme(phase);
  applyCircadianTheme(theme);
  return theme;
}

/**
 * Get content suggestions based on circadian phase.
 */
export function getCircadianContentSuggestions(phase: CircadianPhase): {
  heroMessage: string;
  ctaText: string;
  featuredTopic: string;
} {
  switch (phase) {
    case 'dawn':
      return {
        heroMessage: 'Your metabolic clock is awakening. Hydrate and prepare for optimal nutrient absorption.',
        ctaText: 'Start Your Morning Protocol',
        featuredTopic: 'Circadian Rhythm & Meal Timing',
      };
    case 'morning':
      return {
        heroMessage: 'Peak insulin sensitivity window. Your body is primed for complex carbohydrates.',
        ctaText: 'Optimize Your Breakfast',
        featuredTopic: 'Insulin Resistance Management',
      };
    case 'midday':
      return {
        heroMessage: 'Your digestive fire peaks now. This is the ideal time for your largest, most nutrient-dense meal.',
        ctaText: 'Explore Therapeutic Recipes',
        featuredTopic: 'Metabolic Mastery Plan',
      };
    case 'afternoon':
      return {
        heroMessage: 'Sustained energy through smart snacking. Keep blood sugar stable with fiber and protein.',
        ctaText: 'Discover Balanced Snacks',
        featuredTopic: 'Blood Sugar Balance',
      };
    case 'evening':
      return {
        heroMessage: 'Begin your evening wind-down. Light meals and herbal support for restful sleep.',
        ctaText: 'Evening Nutrition Guide',
        featuredTopic: 'Sleep & Circadian Reset',
      };
    case 'night':
    case 'latenight':
      return {
        heroMessage: 'Your body is in deep repair mode. Fasting supports cellular cleanup and hormone optimization.',
        ctaText: 'Learn About Autophagy',
        featuredTopic: 'Cellular Resurrection Plan',
      };
  }
}

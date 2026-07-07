'use client';

export interface MotionBudget {
  tier: 'full' | 'reduced' | 'minimal' | 'static';
  prefersReducedMotion: boolean;
  isLowPower: boolean;
  isSlowConnection: boolean;
  hasTouch: boolean;
  hasCoarsePointer: boolean;
}

export function detectMotionBudget(): MotionBudget {
  if (typeof window === 'undefined') {
    return { tier: 'static', prefersReducedMotion: true, isLowPower: false, isSlowConnection: false, hasTouch: false, hasCoarsePointer: false };
  }

  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
  const hasTouch = window.matchMedia?.('(pointer: touch)')?.matches ?? false;
  const hasCoarsePointer = window.matchMedia?.('(pointer: coarse)')?.matches ?? false;
  const isSlowConnection = (navigator as any).connection?.effectiveType === '2g' || (navigator as any).connection?.effectiveType === 'slow-2g';
  const isLowPower = (navigator as any).connection?.saveData === true;

  let tier: MotionBudget['tier'] = 'full';
  if (prefersReducedMotion) tier = 'static';
  else if (isLowPower || isSlowConnection) tier = 'minimal';
  else if (hasTouch && hasCoarsePointer) tier = 'reduced';

  return { tier, prefersReducedMotion, isLowPower, isSlowConnection, hasTouch, hasCoarsePointer };
}

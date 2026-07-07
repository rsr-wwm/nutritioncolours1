/**
 * Island Architecture: Idle Hydration System
 * 
 * Converts heavy components into self-contained "islands" that hydrate separately
 * using requestIdleCallback so the main thread is never blocked.
 * 
 * Usage:
 *   import { hydrateIsland, IslandSuspense } from './islands';
 *   hydrateIsland('calculator', () => import('./components/HealthCalculators'));
 */

import React, { Suspense, useEffect, useRef, useState } from 'react';

type IslandPriority = 'critical' | 'high' | 'normal' | 'low';

interface IslandConfig {
  id: string;
  importFn: () => Promise<any>;
  priority: IslandPriority;
  fallback?: React.ReactNode;
}

const PRIORITY_DELAYS: Record<IslandPriority, number> = {
  critical: 0,
  high: 100,
  normal: 2000,
  low: 5000,
};

const hydratedIslands = new Set<string>();

/**
 * Hydrate an island component when the main thread is idle.
 * Uses requestIdleCallback for non-visible islands.
 */
export function hydrateIsland(config: IslandConfig): void {
  if (hydratedIslands.has(config.id)) return;
  
  const { id, importFn, priority } = config;
  const delay = PRIORITY_DELAYS[priority];
  
  const doHydrate = () => {
    if (hydratedIslands.has(id)) return;
    hydratedIslands.add(id);
    importFn().catch(console.error);
  };
  
  if (delay === 0) {
    doHydrate();
    return;
  }
  
  // Use IntersectionObserver to only hydrate when visible
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const element = document.getElementById(`island-${id}`);
    if (element) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            observer.disconnect();
            if ('requestIdleCallback' in window) {
              (window as any).requestIdleCallback(doHydrate, { timeout: delay });
            } else {
              setTimeout(doHydrate, delay);
            }
          }
        },
        { rootMargin: '200px' }
      );
      observer.observe(element);
      return;
    }
  }
  
  // Fallback: schedule based on priority
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(doHydrate, { timeout: delay });
  } else {
    setTimeout(doHydrate, delay);
  }
}

/**
 * Island wrapper component with content-visibility: auto
 * Automatically applies the island-section class for CSS containment
 */
export const Island: React.FC<{
  id: string;
  priority?: IslandPriority;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}> = ({ id, priority = 'normal', children, fallback }) => {
  return (
    <div
      id={`island-${id}`}
      className={`island-section island-${id}`}
      data-island-priority={priority}
    >
      <Suspense fallback={fallback || <div className="animate-pulse h-32 bg-stone-100 rounded-lg" />}>
        {children}
      </Suspense>
    </div>
  );
};

/**
 * Batch hydrate multiple islands with staggered timing
 */
export function hydrateIslands(islands: IslandConfig[]): void {
  islands.forEach((config, index) => {
    setTimeout(() => hydrateIsland(config), index * 50);
  });
}

/**
 * Check if an island has been hydrated
 */
export function isIslandHydrated(id: string): boolean {
  return hydratedIslands.has(id);
}

/**
 * Get hydration status for all islands
 */
export function getIslandStatus(): Record<string, boolean> {
  const status: Record<string, boolean> = {};
  hydratedIslands.forEach(id => { status[id] = true; });
  return status;
}

// Auto-cleaning timer hooks that prevent interval leaks and stale closures.
// Replaces manual setInterval/setTimeout with useEffect-managed equivalents.

import { useEffect, useRef } from 'react';

/**
 * Declarative interval that:
 *  - Always reads the latest callback via ref (no stale closures)
 *  - Automatically cleans up on unmount or when delay changes
 *  - Pass `null` as delay to pause the interval
 */
export function useInterval(callback: () => void, delay: number | null): void {
  const savedCallback = useRef(callback);

  // Keep the ref updated with the latest callback on every render.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up and tear down the interval based on delay.
  useEffect(() => {
    if (delay === null) return;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

/**
 * Declarative timeout that:
 *  - Automatically cleans up on unmount
 *  - Resets when delay changes
 *  - Pass `null` as delay to skip the timeout
 */
export function useTimeout(callback: () => void, delay: number | null): void {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;
    const id = setTimeout(() => savedCallback.current(), delay);
    return () => clearTimeout(id);
  }, [delay]);
}

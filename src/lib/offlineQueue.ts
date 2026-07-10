// Generic offline queue with persistence and retry-on-sync.
// Replaces the duplicated, fragile offline_inquiries / offline_appointments logic.

import { logger } from './logger';
import { safeJsonParse } from './safeUtils';

export interface SyncResult {
  synced: number;
  failed: number;
}

export class OfflineQueue<T> {
  constructor(
    private readonly storageKey: string,
    private readonly endpoint: string,
  ) {}

  /** Persist an item for later synchronization. */
  enqueue(item: T): void {
    const queue = this.readQueue();
    queue.push(item);
    this.writeQueue(queue);
  }

  /** Current number of pending items. */
  get length(): number {
    return this.readQueue().length;
  }

  /**
   * Attempt to sync all queued items to the endpoint via POST.
   * Failed items are retained for retry — no data loss.
   * Returns immediately (no-op) when offline or unconfigured.
   */
  async sync(): Promise<SyncResult> {
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      return { synced: 0, failed: 0 };
    }
    if (!this.endpoint) {
      logger.warn('OfflineQueue', 'no endpoint configured, skipping sync', {
        key: this.storageKey,
      });
      return { synced: 0, failed: 0 };
    }

    const queue = this.readQueue();
    if (queue.length === 0) return { synced: 0, failed: 0 };

    logger.info('OfflineQueue', `syncing ${queue.length} items`, {
      key: this.storageKey,
    });

    let synced = 0;
    const failed: T[] = [];

    for (const item of queue) {
      try {
        const res = await fetch(this.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item),
        });
        if (!res.ok) throw new Error(`endpoint returned ${res.status}`);
        synced++;
      } catch (e) {
        logger.error('OfflineQueue', 'sync failed for item', {
          key: this.storageKey,
          error: e,
        });
        failed.push(item);
      }
    }

    // Retain only failed items for retry.
    this.writeQueue(failed);

    if (failed.length === 0) {
      logger.info('OfflineQueue', 'all items synced', {
        key: this.storageKey,
        count: synced,
      });
    } else {
      logger.warn('OfflineQueue', `${failed.length} items failed, will retry`, {
        key: this.storageKey,
      });
    }

    return { synced, failed: failed.length };
  }

  private readQueue(): T[] {
    return safeJsonParse<T[]>(localStorage.getItem(this.storageKey), []);
  }

  private writeQueue(queue: T[]): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(queue));
    } catch (e) {
      logger.error('OfflineQueue', 'failed to persist queue', {
        key: this.storageKey,
        error: e,
      });
    }
  }
}

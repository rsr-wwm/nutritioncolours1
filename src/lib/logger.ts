// Centralized structured logging module.
// Replaces scattered console.* calls with module-scoped, leveled logging.
//
// In development: outputs to the browser console with structured context.
// In production: console calls are stripped by esbuild.drop(['console']),
//   but subscribers (e.g. analytics forwarding) still receive entries.

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface LogEntry {
  level: LogLevel;
  module: string;
  message: string;
  context?: unknown;
  timestamp: number;
}

const LEVEL_PRIORITY: Record<LogLevel, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
};

// In development show everything; in production only warn+ so that
// subscribers receive actionable entries without noise.
const MIN_LEVEL: LogLevel = process.env.NODE_ENV === 'development' ? 'debug' : 'warn';

type LogSubscriber = (entry: LogEntry) => void;
const subscribers = new Set<LogSubscriber>();

function emit(level: LogLevel, module: string, message: string, context?: unknown): void {
  if (LEVEL_PRIORITY[level] < LEVEL_PRIORITY[MIN_LEVEL]) return;

  const entry: LogEntry = { level, module, message, context, timestamp: Date.now() };

  // Notify subscribers (e.g. ViewerTracker analytics) — survives console stripping.
  subscribers.forEach((fn) => {
    try {
      fn(entry);
    } catch {
      // Subscriber failures must never break the calling code.
    }
  });

  // Console output — stripped in production builds by esbuild.drop(['console']).
  const tag = `[${module}]`;
  switch (level) {
    case 'debug':
      console.debug(tag, message, context ?? '');
      break;
    case 'info':
      console.info(tag, message, context ?? '');
      break;
    case 'warn':
      console.warn(tag, message, context ?? '');
      break;
    case 'error':
      console.error(tag, message, context ?? '');
      break;
  }
}

export const logger = {
  debug: (module: string, message: string, context?: unknown): void =>
    emit('debug', module, message, context),
  info: (module: string, message: string, context?: unknown): void =>
    emit('info', module, message, context),
  warn: (module: string, message: string, context?: unknown): void =>
    emit('warn', module, message, context),
  error: (module: string, message: string, context?: unknown): void =>
    emit('error', module, message, context),

  /** Subscribe to log entries (e.g. for analytics forwarding). Returns an unsubscribe function. */
  subscribe: (fn: LogSubscriber): (() => void) => {
    subscribers.add(fn);
    return () => {
      subscribers.delete(fn);
    };
  },
};

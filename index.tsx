if (typeof window !== 'undefined' && (window as any).trustedTypes && !(window as any).trustedTypes.defaultPolicy) {
  try {
    (window as any).trustedTypes.createPolicy('default', {
      createHTML: (to_escape: string) => to_escape,
      createScript: (to_escape: string) => to_escape,
      createScriptURL: (to_escape: string) => to_escape,
    });
  } catch (e) {
    console.error("Trusted Types default policy creation failed:", e);
  }
}

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Unhandled error caught by ErrorBoundary:", error, errorInfo);
    try {
      const activeSessionStr = localStorage.getItem('nutrition_tracker_current_session');
      if (activeSessionStr) {
        const session = JSON.parse(activeSessionStr);
        session.interactions.push({
          timestamp: Date.now(),
          type: 'error',
          path: window.location.pathname || 'app',
          description: `ErrorBoundary caught: ${error.message}`
        });
        localStorage.setItem('nutrition_tracker_current_session', JSON.stringify(session));
      }
    } catch (e) {
      console.error("Failed to log error to tracker", e);
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col justify-center items-center p-8 text-center">
          <div className="max-w-md bg-white rounded-3xl p-8 shadow-xl border border-stone-200/50">
            <span className="text-4xl">⚠️</span>
            <h1 className="text-2xl font-bold text-emerald-950 mt-4 mb-2 brand-font">Something went wrong</h1>
            <p className="text-sm text-stone-600 mb-6 font-semibold">
              Our clinical portal encountered an unexpected runtime error. We have logged this diagnostic event.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-emerald-900 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider cursor-pointer"
            >
              Reload Portal
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Register service worker for offline patient support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker registered successfully:', reg.scope))
      .catch(err => console.error('Service Worker registration failed:', err));
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
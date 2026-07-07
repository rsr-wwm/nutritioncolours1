// src/geo/localeRedirect.ts
// Simple client‑side locale detection and redirection.
// This module can be imported and invoked early in the app (e.g., in App.tsx).
// It uses the browser's language settings and optional query param to decide the locale.

const SUPPORTED_LOCALES = ["en-IN", "en-US", "hi-IN"] as const;

/**
 * Returns the best‑matched locale for the current user.
 * Falls back to "en-IN" if none match.
 */
export function getUserLocale(): string {
  // Prefer explicit ?lang= query param
  const params = new URLSearchParams(window.location.search);
  const qLang = params.get("lang");
  if (qLang && SUPPORTED_LOCALES.includes(qLang as any)) {
    return qLang;
  }
  // Use navigator.language (e.g., "en-IN", "en-US", "hi-IN")
  const navLang = navigator.language;
  if (SUPPORTED_LOCALES.includes(navLang as any)) {
    return navLang;
  }
  // Match only language part (e.g., "en" -> default to en-IN)
  const langPrefix = navLang.split("-")[0];
  if (langPrefix === "hi") return "hi-IN";
  return "en-IN";
}

/**
 * Performs a client‑side redirect to the locale‑specific sub‑path.
 * Call this function once during app start‑up.
 */
export function redirectToLocale(): void {
  const locale = getUserLocale();
  const path = window.location.pathname;
  // If already on a locale‑specific path, do nothing
  if (path.startsWith(`/${locale.split("-")[1]}/`)) return;
  // Build new URL preserving search and hash
  const newPath = `/${locale.split("-")[1]}${path}`;
  const newUrl = `${window.location.origin}${newPath}${window.location.search}${window.location.hash}`;
  window.history.replaceState(null, "", newUrl);
}

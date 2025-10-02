/**
 * Locale Detection Utilities
 * Detects browser language and matches to supported locales
 */

import { LOCALES, DEFAULT_LOCALE, isLocaleSupported, getShortCode } from './locales';

/**
 * Detects the browser's preferred language
 * Returns the best matching supported locale or the default locale
 */
export function detectBrowserLocale(): string {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }

  // Get browser languages in order of preference
  const browserLocales = navigator.languages || [navigator.language];

  for (const browserLocale of browserLocales) {
    // Try exact match first (e.g., 'en_GB')
    const normalizedLocale = normalizeLocaleCode(browserLocale);
    if (isLocaleSupported(normalizedLocale)) {
      return normalizedLocale;
    }

    // Try language match (e.g., 'en' -> 'en_GB')
    const languageMatch = findLanguageMatch(browserLocale);
    if (languageMatch) {
      return languageMatch;
    }
  }

  // Fallback to default locale
  return DEFAULT_LOCALE;
}

/**
 * Normalizes locale codes from browser format (e.g., 'en-GB') to our format (e.g., 'en_GB')
 */
function normalizeLocaleCode(localeCode: string): string {
  return localeCode.replace('-', '_');
}

/**
 * Finds a matching locale by language code
 * For example, if browser sends 'en', it will return 'en_GB' (first match)
 */
function findLanguageMatch(localeCode: string): string | null {
  const shortCode = getShortCode(normalizeLocaleCode(localeCode));

  // Find first locale that matches the language code
  const matchingLocale = Object.keys(LOCALES).find((code) =>
    getShortCode(code) === shortCode
  );

  return matchingLocale || null;
}

/**
 * Gets the preferred locale from:
 * 1. URL parameter
 * 2. Local storage
 * 3. Browser detection
 * 4. Default locale
 */
export function getPreferredLocale(urlLocale?: string): string {
  // 1. Check URL parameter
  if (urlLocale && isLocaleSupported(urlLocale)) {
    return urlLocale;
  }

  // 2. Check local storage
  if (typeof window !== 'undefined') {
    const storedLocale = localStorage.getItem('preferred_locale');
    if (storedLocale && isLocaleSupported(storedLocale)) {
      return storedLocale;
    }
  }

  // 3. Detect from browser
  const browserLocale = detectBrowserLocale();
  if (browserLocale) {
    return browserLocale;
  }

  // 4. Fallback to default
  return DEFAULT_LOCALE;
}

/**
 * Saves the user's locale preference to local storage
 */
export function saveLocalePreference(localeCode: string): void {
  if (typeof window !== 'undefined' && isLocaleSupported(localeCode)) {
    localStorage.setItem('preferred_locale', localeCode);
  }
}

/**
 * Clears the user's locale preference from local storage
 */
export function clearLocalePreference(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('preferred_locale');
  }
}

/**
 * Language Locales Configuration
 * Contains all supported languages from LANGUAGE_CODES.md
 */

export interface Locale {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const LOCALES: Record<string, Locale> = {
  ar_SA: {
    code: 'ar_SA',
    name: 'Arabic (Saudi Arabia)',
    nativeName: 'العربية (السعودية)',
    flag: '🇸🇦',
  },
  ca_ES: {
    code: 'ca_ES',
    name: 'Catalan (Spain)',
    nativeName: 'Català (Espanya)',
    flag: '🇪🇸',
  },
  cs_CZ: {
    code: 'cs_CZ',
    name: 'Czech (Czech Republic)',
    nativeName: 'Čeština (Česko)',
    flag: '🇨🇿',
  },
  da_DK: {
    code: 'da_DK',
    name: 'Danish (Denmark)',
    nativeName: 'Dansk (Danmark)',
    flag: '🇩🇰',
  },
  de_CH: {
    code: 'de_CH',
    name: 'German (Switzerland)',
    nativeName: 'Deutsch (Schweiz)',
    flag: '🇨🇭',
  },
  de_DE: {
    code: 'de_DE',
    name: 'German (Germany)',
    nativeName: 'Deutsch (Deutschland)',
    flag: '🇩🇪',
  },
  en_CA: {
    code: 'en_CA',
    name: 'English (Canada)',
    nativeName: 'English (Canada)',
    flag: '🇨🇦',
  },
  en_GB: {
    code: 'en_GB',
    name: 'English (United Kingdom)',
    nativeName: 'English (United Kingdom)',
    flag: '🇬🇧',
  },
  en_US: {
    code: 'en_US',
    name: 'English (United States)',
    nativeName: 'English (United States)',
    flag: '🇺🇸',
  },
  es_ES: {
    code: 'es_ES',
    name: 'Spanish (Spain)',
    nativeName: 'Español (España)',
    flag: '🇪🇸',
  },
  es_MX: {
    code: 'es_MX',
    name: 'Spanish (Mexico)',
    nativeName: 'Español (México)',
    flag: '🇲🇽',
  },
  fi_FI: {
    code: 'fi_FI',
    name: 'Finnish (Finland)',
    nativeName: 'Suomi (Suomi)',
    flag: '🇫🇮',
  },
  fr_CA: {
    code: 'fr_CA',
    name: 'French (Canada)',
    nativeName: 'Français (Canada)',
    flag: '🇨🇦',
  },
  fr_FR: {
    code: 'fr_FR',
    name: 'French (France)',
    nativeName: 'Français (France)',
    flag: '🇫🇷',
  },
  he_IL: {
    code: 'he_IL',
    name: 'Hebrew (Israel)',
    nativeName: 'עברית (ישראל)',
    flag: '🇮🇱',
  },
  hi_IN: {
    code: 'hi_IN',
    name: 'Hindi (India)',
    nativeName: 'हिन्दी (भारत)',
    flag: '🇮🇳',
  },
  id_ID: {
    code: 'id_ID',
    name: 'Indonesian (Indonesia)',
    nativeName: 'Bahasa Indonesia (Indonesia)',
    flag: '🇮🇩',
  },
  it_IT: {
    code: 'it_IT',
    name: 'Italian (Italy)',
    nativeName: 'Italiano (Italia)',
    flag: '🇮🇹',
  },
  ja_JP: {
    code: 'ja_JP',
    name: 'Japanese (Japan)',
    nativeName: '日本語 (日本)',
    flag: '🇯🇵',
  },
  ko_KR: {
    code: 'ko_KR',
    name: 'Korean (South Korea)',
    nativeName: '한국어 (대한민국)',
    flag: '🇰🇷',
  },
  nl_NL: {
    code: 'nl_NL',
    name: 'Dutch (Netherlands)',
    nativeName: 'Nederlands (Nederland)',
    flag: '🇳🇱',
  },
  no_NO: {
    code: 'no_NO',
    name: 'Norwegian (Norway)',
    nativeName: 'Norsk (Norge)',
    flag: '🇳🇴',
  },
  pl_PL: {
    code: 'pl_PL',
    name: 'Polish (Poland)',
    nativeName: 'Polski (Polska)',
    flag: '🇵🇱',
  },
  pt_BR: {
    code: 'pt_BR',
    name: 'Portuguese (Brazil)',
    nativeName: 'Português (Brasil)',
    flag: '🇧🇷',
  },
  pt_PT: {
    code: 'pt_PT',
    name: 'Portuguese (Portugal)',
    nativeName: 'Português (Portugal)',
    flag: '🇵🇹',
  },
  ru_RU: {
    code: 'ru_RU',
    name: 'Russian (Russia)',
    nativeName: 'Русский (Россия)',
    flag: '🇷🇺',
  },
  sv_SE: {
    code: 'sv_SE',
    name: 'Swedish (Sweden)',
    nativeName: 'Svenska (Sverige)',
    flag: '🇸🇪',
  },
  th_TH: {
    code: 'th_TH',
    name: 'Thai (Thailand)',
    nativeName: 'ไทย (ประเทศไทย)',
    flag: '🇹🇭',
  },
  tr_TR: {
    code: 'tr_TR',
    name: 'Turkish (Turkey)',
    nativeName: 'Türkçe (Türkiye)',
    flag: '🇹🇷',
  },
  uk_UA: {
    code: 'uk_UA',
    name: 'Ukrainian (Ukraine)',
    nativeName: 'Українська (Україна)',
    flag: '🇺🇦',
  },
  vi_VN: {
    code: 'vi_VN',
    name: 'Vietnamese (Vietnam)',
    nativeName: 'Tiếng Việt (Việt Nam)',
    flag: '🇻🇳',
  },
  zh_CN: {
    code: 'zh_CN',
    name: 'Chinese (China)',
    nativeName: '中文 (中国)',
    flag: '🇨🇳',
  },
};

// Default locale
export const DEFAULT_LOCALE = 'en_GB';

// Array of all locale codes for easy iteration
export const LOCALE_CODES = Object.keys(LOCALES);

// Helper function to get locale by code
export function getLocale(code: string): Locale | null {
  return LOCALES[code] || null;
}

// Helper function to check if a locale is supported
export function isLocaleSupported(code: string): boolean {
  return code in LOCALES;
}

// Helper function to get short code (e.g., 'en' from 'en_GB')
export function getShortCode(localeCode: string): string {
  return localeCode.split('_')[0];
}

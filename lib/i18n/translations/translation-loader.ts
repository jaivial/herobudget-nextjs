/**
 * Translation Loader Utility
 * Dynamically loads JSON translation files for components
 */

// Hero Section translations
import ar_SA from './hero-section/ar_SA.json';
import ca_ES from './hero-section/ca_ES.json';
import cs_CZ from './hero-section/cs_CZ.json';
import da_DK from './hero-section/da_DK.json';
import de_CH from './hero-section/de_CH.json';
import de_DE from './hero-section/de_DE.json';
import el_GR from './hero-section/el_GR.json';
import en_AU from './hero-section/en_AU.json';
import en_CA from './hero-section/en_CA.json';
import en_GB from './hero-section/en_GB.json';
import en_US from './hero-section/en_US.json';
import es_ES from './hero-section/es_ES.json';
import es_MX from './hero-section/es_MX.json';
import fi_FI from './hero-section/fi_FI.json';
import fr_CA from './hero-section/fr_CA.json';
import fr_FR from './hero-section/fr_FR.json';
import he_IL from './hero-section/he_IL.json';
import hr_HR from './hero-section/hr_HR.json';
import hu_HU from './hero-section/hu_HU.json';
import hi_IN from './hero-section/hi_IN.json';
import id_ID from './hero-section/id_ID.json';
import it_IT from './hero-section/it_IT.json';
import ja_JP from './hero-section/ja_JP.json';
import ko_KR from './hero-section/ko_KR.json';
import ms_MY from './hero-section/ms_MY.json';
import nl_NL from './hero-section/nl_NL.json';
import no_NO from './hero-section/no_NO.json';
import pl_PL from './hero-section/pl_PL.json';
import pt_BR from './hero-section/pt_BR.json';
import pt_PT from './hero-section/pt_PT.json';
import ro_RO from './hero-section/ro_RO.json';
import ru_RU from './hero-section/ru_RU.json';
import sk_SK from './hero-section/sk_SK.json';
import sv_SE from './hero-section/sv_SE.json';
import th_TH from './hero-section/th_TH.json';
import tr_TR from './hero-section/tr_TR.json';
import uk_UA from './hero-section/uk_UA.json';
import vi_VN from './hero-section/vi_VN.json';
import zh_CN from './hero-section/zh_CN.json';

// CustomLoader translations
import loader_ar_SA from './custom-loader/ar_SA.json';
import loader_ca_ES from './custom-loader/ca_ES.json';
import loader_cs_CZ from './custom-loader/cs_CZ.json';
import loader_da_DK from './custom-loader/da_DK.json';
import loader_de_CH from './custom-loader/de_CH.json';
import loader_de_DE from './custom-loader/de_DE.json';
import loader_el_GR from './custom-loader/el_GR.json';
import loader_en_AU from './custom-loader/en_AU.json';
import loader_en_CA from './custom-loader/en_CA.json';
import loader_en_GB from './custom-loader/en_GB.json';
import loader_en_US from './custom-loader/en_US.json';
import loader_es_ES from './custom-loader/es_ES.json';
import loader_es_MX from './custom-loader/es_MX.json';
import loader_fi_FI from './custom-loader/fi_FI.json';
import loader_fr_CA from './custom-loader/fr_CA.json';
import loader_fr_FR from './custom-loader/fr_FR.json';
import loader_he_IL from './custom-loader/he_IL.json';
import loader_hr_HR from './custom-loader/hr_HR.json';
import loader_hu_HU from './custom-loader/hu_HU.json';
import loader_hi_IN from './custom-loader/hi_IN.json';
import loader_id_ID from './custom-loader/id_ID.json';
import loader_it_IT from './custom-loader/it_IT.json';
import loader_ja_JP from './custom-loader/ja_JP.json';
import loader_ko_KR from './custom-loader/ko_KR.json';
import loader_ms_MY from './custom-loader/ms_MY.json';
import loader_nl_NL from './custom-loader/nl_NL.json';
import loader_no_NO from './custom-loader/no_NO.json';
import loader_pl_PL from './custom-loader/pl_PL.json';
import loader_pt_BR from './custom-loader/pt_BR.json';
import loader_pt_PT from './custom-loader/pt_PT.json';
import loader_ro_RO from './custom-loader/ro_RO.json';
import loader_ru_RU from './custom-loader/ru_RU.json';
import loader_sk_SK from './custom-loader/sk_SK.json';
import loader_sv_SE from './custom-loader/sv_SE.json';
import loader_th_TH from './custom-loader/th_TH.json';
import loader_tr_TR from './custom-loader/tr_TR.json';
import loader_uk_UA from './custom-loader/uk_UA.json';
import loader_vi_VN from './custom-loader/vi_VN.json';
import loader_zh_CN from './custom-loader/zh_CN.json';

// FeaturesSection translations
import features_ar_SA from './features-section/ar_SA.json';
import features_ca_ES from './features-section/ca_ES.json';
import features_cs_CZ from './features-section/cs_CZ.json';
import features_da_DK from './features-section/da_DK.json';
import features_de_CH from './features-section/de_CH.json';
import features_de_DE from './features-section/de_DE.json';
import features_el_GR from './features-section/el_GR.json';
import features_en_AU from './features-section/en_AU.json';
import features_en_CA from './features-section/en_CA.json';
import features_en_GB from './features-section/en_GB.json';
import features_en_US from './features-section/en_US.json';
import features_es_ES from './features-section/es_ES.json';
import features_es_MX from './features-section/es_MX.json';
import features_fi_FI from './features-section/fi_FI.json';
import features_fr_CA from './features-section/fr_CA.json';
import features_fr_FR from './features-section/fr_FR.json';
import features_he_IL from './features-section/he_IL.json';
import features_hr_HR from './features-section/hr_HR.json';
import features_hu_HU from './features-section/hu_HU.json';
import features_hi_IN from './features-section/hi_IN.json';
import features_id_ID from './features-section/id_ID.json';
import features_it_IT from './features-section/it_IT.json';
import features_ja_JP from './features-section/ja_JP.json';
import features_ko_KR from './features-section/ko_KR.json';
import features_ms_MY from './features-section/ms_MY.json';
import features_nl_NL from './features-section/nl_NL.json';
import features_no_NO from './features-section/no_NO.json';
import features_pl_PL from './features-section/pl_PL.json';
import features_pt_BR from './features-section/pt_BR.json';
import features_pt_PT from './features-section/pt_PT.json';
import features_ro_RO from './features-section/ro_RO.json';
import features_ru_RU from './features-section/ru_RU.json';
import features_sk_SK from './features-section/sk_SK.json';
import features_sv_SE from './features-section/sv_SE.json';
import features_th_TH from './features-section/th_TH.json';
import features_tr_TR from './features-section/tr_TR.json';
import features_uk_UA from './features-section/uk_UA.json';
import features_vi_VN from './features-section/vi_VN.json';
import features_zh_CN from './features-section/zh_CN.json';

// DownloadSection translations
import download_ar_SA from './download-section/ar_SA.json';
import download_ca_ES from './download-section/ca_ES.json';
import download_cs_CZ from './download-section/cs_CZ.json';
import download_da_DK from './download-section/da_DK.json';
import download_de_CH from './download-section/de_CH.json';
import download_de_DE from './download-section/de_DE.json';
import download_el_GR from './download-section/el_GR.json';
import download_en_AU from './download-section/en_AU.json';
import download_en_CA from './download-section/en_CA.json';
import download_en_GB from './download-section/en_GB.json';
import download_en_US from './download-section/en_US.json';
import download_es_ES from './download-section/es_ES.json';
import download_es_MX from './download-section/es_MX.json';
import download_fi_FI from './download-section/fi_FI.json';
import download_fr_CA from './download-section/fr_CA.json';
import download_fr_FR from './download-section/fr_FR.json';
import download_he_IL from './download-section/he_IL.json';
import download_hr_HR from './download-section/hr_HR.json';
import download_hu_HU from './download-section/hu_HU.json';
import download_hi_IN from './download-section/hi_IN.json';
import download_id_ID from './download-section/id_ID.json';
import download_it_IT from './download-section/it_IT.json';
import download_ja_JP from './download-section/ja_JP.json';
import download_ko_KR from './download-section/ko_KR.json';
import download_ms_MY from './download-section/ms_MY.json';
import download_nl_NL from './download-section/nl_NL.json';
import download_no_NO from './download-section/no_NO.json';
import download_pl_PL from './download-section/pl_PL.json';
import download_pt_BR from './download-section/pt_BR.json';
import download_pt_PT from './download-section/pt_PT.json';
import download_ro_RO from './download-section/ro_RO.json';
import download_ru_RU from './download-section/ru_RU.json';
import download_sk_SK from './download-section/sk_SK.json';
import download_sv_SE from './download-section/sv_SE.json';
import download_th_TH from './download-section/th_TH.json';
import download_tr_TR from './download-section/tr_TR.json';
import download_uk_UA from './download-section/uk_UA.json';
import download_vi_VN from './download-section/vi_VN.json';
import download_zh_CN from './download-section/zh_CN.json';

// ScreenshotsSection translations
import screenshots_ar_SA from './screenshots-section/ar_SA.json';
import screenshots_ca_ES from './screenshots-section/ca_ES.json';
import screenshots_cs_CZ from './screenshots-section/cs_CZ.json';
import screenshots_da_DK from './screenshots-section/da_DK.json';
import screenshots_de_CH from './screenshots-section/de_CH.json';
import screenshots_de_DE from './screenshots-section/de_DE.json';
import screenshots_el_GR from './screenshots-section/el_GR.json';
import screenshots_en_AU from './screenshots-section/en_AU.json';
import screenshots_en_CA from './screenshots-section/en_CA.json';
import screenshots_en_GB from './screenshots-section/en_GB.json';
import screenshots_en_US from './screenshots-section/en_US.json';
import screenshots_es_ES from './screenshots-section/es_ES.json';
import screenshots_es_MX from './screenshots-section/es_MX.json';
import screenshots_fi_FI from './screenshots-section/fi_FI.json';
import screenshots_fr_CA from './screenshots-section/fr_CA.json';
import screenshots_fr_FR from './screenshots-section/fr_FR.json';
import screenshots_he_IL from './screenshots-section/he_IL.json';
import screenshots_hr_HR from './screenshots-section/hr_HR.json';
import screenshots_hu_HU from './screenshots-section/hu_HU.json';
import screenshots_hi_IN from './screenshots-section/hi_IN.json';
import screenshots_id_ID from './screenshots-section/id_ID.json';
import screenshots_it_IT from './screenshots-section/it_IT.json';
import screenshots_ja_JP from './screenshots-section/ja_JP.json';
import screenshots_ko_KR from './screenshots-section/ko_KR.json';
import screenshots_ms_MY from './screenshots-section/ms_MY.json';
import screenshots_nl_NL from './screenshots-section/nl_NL.json';
import screenshots_no_NO from './screenshots-section/no_NO.json';
import screenshots_pl_PL from './screenshots-section/pl_PL.json';
import screenshots_pt_BR from './screenshots-section/pt_BR.json';
import screenshots_pt_PT from './screenshots-section/pt_PT.json';
import screenshots_ro_RO from './screenshots-section/ro_RO.json';
import screenshots_ru_RU from './screenshots-section/ru_RU.json';
import screenshots_sk_SK from './screenshots-section/sk_SK.json';
import screenshots_sv_SE from './screenshots-section/sv_SE.json';
import screenshots_th_TH from './screenshots-section/th_TH.json';
import screenshots_tr_TR from './screenshots-section/tr_TR.json';
import screenshots_uk_UA from './screenshots-section/uk_UA.json';
import screenshots_vi_VN from './screenshots-section/vi_VN.json';
import screenshots_zh_CN from './screenshots-section/zh_CN.json';

export interface HeroSectionTranslations {
  title: string;
  subtitle: string;
  primaryButton: string;
  secondaryButton: string;
  appStoreAlt: string;
}

// Translations map for hero-section
const heroSectionTranslations: Record<string, HeroSectionTranslations> = {
  ar_SA,
  ca_ES,
  cs_CZ,
  da_DK,
  de_CH,
  de_DE,
  el_GR,
  en_AU,
  en_CA,
  en_GB,
  en_US,
  es_ES,
  es_MX,
  fi_FI,
  fr_CA,
  fr_FR,
  he_IL,
  hr_HR,
  hu_HU,
  hi_IN,
  id_ID,
  it_IT,
  ja_JP,
  ko_KR,
  ms_MY,
  nl_NL,
  no_NO,
  pl_PL,
  pt_BR,
  pt_PT,
  ro_RO,
  ru_RU,
  sk_SK,
  sv_SE,
  th_TH,
  tr_TR,
  uk_UA,
  vi_VN,
  zh_CN,
};

/**
 * Get HeroSection translations for a specific locale
 * @param locale - Locale code (e.g., 'en_GB')
 * @returns HeroSection translation object
 */
export function getHeroSectionTranslations(locale: string): HeroSectionTranslations {
  // Return the translation for the requested locale or fallback to en_GB
  return heroSectionTranslations[locale] || heroSectionTranslations.en_GB;
}

/**
 * Check if a locale has translations available
 * @param locale - Locale code
 * @returns boolean
 */
export function hasHeroSectionTranslation(locale: string): boolean {
  return locale in heroSectionTranslations;
}

/**
 * Get all available locale codes
 * @returns Array of locale codes
 */
export function getAvailableLocales(): string[] {
  return Object.keys(heroSectionTranslations);
}

// ===== CustomLoader Translations =====

export interface CustomLoaderTranslations {
  loadingText: string;
}

// Translations map for custom-loader
const customLoaderTranslations: Record<string, CustomLoaderTranslations> = {
  ar_SA: loader_ar_SA,
  ca_ES: loader_ca_ES,
  cs_CZ: loader_cs_CZ,
  da_DK: loader_da_DK,
  de_CH: loader_de_CH,
  de_DE: loader_de_DE,
  el_GR: loader_el_GR,
  en_AU: loader_en_AU,
  en_CA: loader_en_CA,
  en_GB: loader_en_GB,
  en_US: loader_en_US,
  es_ES: loader_es_ES,
  es_MX: loader_es_MX,
  fi_FI: loader_fi_FI,
  fr_CA: loader_fr_CA,
  fr_FR: loader_fr_FR,
  he_IL: loader_he_IL,
  hr_HR: loader_hr_HR,
  hu_HU: loader_hu_HU,
  hi_IN: loader_hi_IN,
  id_ID: loader_id_ID,
  it_IT: loader_it_IT,
  ja_JP: loader_ja_JP,
  ko_KR: loader_ko_KR,
  ms_MY: loader_ms_MY,
  nl_NL: loader_nl_NL,
  no_NO: loader_no_NO,
  pl_PL: loader_pl_PL,
  pt_BR: loader_pt_BR,
  pt_PT: loader_pt_PT,
  ro_RO: loader_ro_RO,
  ru_RU: loader_ru_RU,
  sk_SK: loader_sk_SK,
  sv_SE: loader_sv_SE,
  th_TH: loader_th_TH,
  tr_TR: loader_tr_TR,
  uk_UA: loader_uk_UA,
  vi_VN: loader_vi_VN,
  zh_CN: loader_zh_CN,
};

/**
 * Get CustomLoader translations for a specific locale
 * @param locale - Locale code (e.g., 'en_GB')
 * @returns CustomLoader translation object
 */
export function getCustomLoaderTranslations(locale: string): CustomLoaderTranslations {
  // Return the translation for the requested locale or fallback to en_GB
  return customLoaderTranslations[locale] || customLoaderTranslations.en_GB;
}

/**
 * Check if a locale has CustomLoader translations available
 * @param locale - Locale code
 * @returns boolean
 */
export function hasCustomLoaderTranslation(locale: string): boolean {
  return locale in customLoaderTranslations;
}

// ===== FeaturesSection Translations =====

export interface FeatureItem {
  title: string;
  description: string;
}

export interface StatItem {
  number: string;
  label: string;
}

export interface FeaturesSectionTranslations {
  heading: string;
  subtitle: string;
  features: FeatureItem[];
  stats: StatItem[];
}

// Translations map for features-section
const featuresSectionTranslations: Record<string, FeaturesSectionTranslations> = {
  ar_SA: features_ar_SA,
  ca_ES: features_ca_ES,
  cs_CZ: features_cs_CZ,
  da_DK: features_da_DK,
  de_CH: features_de_CH,
  de_DE: features_de_DE,
  el_GR: features_el_GR,
  en_AU: features_en_AU,
  en_CA: features_en_CA,
  en_GB: features_en_GB,
  en_US: features_en_US,
  es_ES: features_es_ES,
  es_MX: features_es_MX,
  fi_FI: features_fi_FI,
  fr_CA: features_fr_CA,
  fr_FR: features_fr_FR,
  he_IL: features_he_IL,
  hr_HR: features_hr_HR,
  hu_HU: features_hu_HU,
  hi_IN: features_hi_IN,
  id_ID: features_id_ID,
  it_IT: features_it_IT,
  ja_JP: features_ja_JP,
  ko_KR: features_ko_KR,
  ms_MY: features_ms_MY,
  nl_NL: features_nl_NL,
  no_NO: features_no_NO,
  pl_PL: features_pl_PL,
  pt_BR: features_pt_BR,
  pt_PT: features_pt_PT,
  ro_RO: features_ro_RO,
  ru_RU: features_ru_RU,
  sk_SK: features_sk_SK,
  sv_SE: features_sv_SE,
  th_TH: features_th_TH,
  tr_TR: features_tr_TR,
  uk_UA: features_uk_UA,
  vi_VN: features_vi_VN,
  zh_CN: features_zh_CN,
};

/**
 * Get FeaturesSection translations for a specific locale
 * @param locale - Locale code (e.g., 'en_GB')
 * @returns FeaturesSection translation object
 */
export function getFeaturesSectionTranslations(locale: string): FeaturesSectionTranslations {
  // Return the translation for the requested locale or fallback to en_GB
  return featuresSectionTranslations[locale] || featuresSectionTranslations.en_GB;
}

/**
 * Check if a locale has FeaturesSection translations available
 * @param locale - Locale code
 * @returns boolean
 */
export function hasFeaturesSectionTranslation(locale: string): boolean {
  return locale in featuresSectionTranslations;
}

// ===== DownloadSection Translations =====

export interface DownloadStatLabel {
  label: string;
}

export interface DownloadAppImage {
  alt: string;
}

export interface DownloadSectionTranslations {
  title: string;
  description: string;
  stats: DownloadStatLabel[];
  appStoreAlt: string;
  appImages: DownloadAppImage[];
}

// Translations map for download-section
const downloadSectionTranslations: Record<string, DownloadSectionTranslations> = {
  ar_SA: download_ar_SA,
  ca_ES: download_ca_ES,
  cs_CZ: download_cs_CZ,
  da_DK: download_da_DK,
  de_CH: download_de_CH,
  de_DE: download_de_DE,
  el_GR: download_el_GR,
  en_AU: download_en_AU,
  en_CA: download_en_CA,
  en_GB: download_en_GB,
  en_US: download_en_US,
  es_ES: download_es_ES,
  es_MX: download_es_MX,
  fi_FI: download_fi_FI,
  fr_CA: download_fr_CA,
  fr_FR: download_fr_FR,
  he_IL: download_he_IL,
  hr_HR: download_hr_HR,
  hu_HU: download_hu_HU,
  hi_IN: download_hi_IN,
  id_ID: download_id_ID,
  it_IT: download_it_IT,
  ja_JP: download_ja_JP,
  ko_KR: download_ko_KR,
  ms_MY: download_ms_MY,
  nl_NL: download_nl_NL,
  no_NO: download_no_NO,
  pl_PL: download_pl_PL,
  pt_BR: download_pt_BR,
  pt_PT: download_pt_PT,
  ro_RO: download_ro_RO,
  ru_RU: download_ru_RU,
  sk_SK: download_sk_SK,
  sv_SE: download_sv_SE,
  th_TH: download_th_TH,
  tr_TR: download_tr_TR,
  uk_UA: download_uk_UA,
  vi_VN: download_vi_VN,
  zh_CN: download_zh_CN,
};

/**
 * Get DownloadSection translations for a specific locale
 * @param locale - Locale code (e.g., 'en_GB')
 * @returns DownloadSection translation object
 */
export function getDownloadSectionTranslations(locale: string): DownloadSectionTranslations {
  // Return the translation for the requested locale or fallback to en_GB
  return downloadSectionTranslations[locale] || downloadSectionTranslations.en_GB;
}

/**
 * Check if a locale has DownloadSection translations available
 * @param locale - Locale code
 * @returns boolean
 */
export function hasDownloadSectionTranslation(locale: string): boolean {
  return locale in downloadSectionTranslations;
}

// ===== ScreenshotsSection Translations =====

export interface ScreenshotStatLabel {
  label: string;
}

export interface ScreenshotItem {
  title: string;
  description: string;
}

export interface ScreenshotsSectionTranslations {
  title: string;
  description: string;
  statsTitle: string;
  stats: ScreenshotStatLabel[];
  screenshots: ScreenshotItem[];
}

// Translations map for screenshots-section
const screenshotsSectionTranslations: Record<string, ScreenshotsSectionTranslations> = {
  ar_SA: screenshots_ar_SA,
  ca_ES: screenshots_ca_ES,
  cs_CZ: screenshots_cs_CZ,
  da_DK: screenshots_da_DK,
  de_CH: screenshots_de_CH,
  de_DE: screenshots_de_DE,
  el_GR: screenshots_el_GR,
  en_AU: screenshots_en_AU,
  en_CA: screenshots_en_CA,
  en_GB: screenshots_en_GB,
  en_US: screenshots_en_US,
  es_ES: screenshots_es_ES,
  es_MX: screenshots_es_MX,
  fi_FI: screenshots_fi_FI,
  fr_CA: screenshots_fr_CA,
  fr_FR: screenshots_fr_FR,
  he_IL: screenshots_he_IL,
  hr_HR: screenshots_hr_HR,
  hu_HU: screenshots_hu_HU,
  hi_IN: screenshots_hi_IN,
  id_ID: screenshots_id_ID,
  it_IT: screenshots_it_IT,
  ja_JP: screenshots_ja_JP,
  ko_KR: screenshots_ko_KR,
  ms_MY: screenshots_ms_MY,
  nl_NL: screenshots_nl_NL,
  no_NO: screenshots_no_NO,
  pl_PL: screenshots_pl_PL,
  pt_BR: screenshots_pt_BR,
  pt_PT: screenshots_pt_PT,
  ro_RO: screenshots_ro_RO,
  ru_RU: screenshots_ru_RU,
  sk_SK: screenshots_sk_SK,
  sv_SE: screenshots_sv_SE,
  th_TH: screenshots_th_TH,
  tr_TR: screenshots_tr_TR,
  uk_UA: screenshots_uk_UA,
  vi_VN: screenshots_vi_VN,
  zh_CN: screenshots_zh_CN,
};

/**
 * Get ScreenshotsSection translations for a specific locale
 * @param locale - Locale code (e.g., 'en_GB')
 * @returns ScreenshotsSection translation object
 */
export function getScreenshotsSectionTranslations(locale: string): ScreenshotsSectionTranslations {
  // Return the translation for the requested locale or fallback to en_GB
  return screenshotsSectionTranslations[locale] || screenshotsSectionTranslations.en_GB;
}

/**
 * Check if a locale has ScreenshotsSection translations available
 * @param locale - Locale code
 * @returns boolean
 */
export function hasScreenshotsSectionTranslation(locale: string): boolean {
  return locale in screenshotsSectionTranslations;
}

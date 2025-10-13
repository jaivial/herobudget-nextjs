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

// CTASection translations
import cta_ar_SA from './cta-section/ar_SA.json';
import cta_ca_ES from './cta-section/ca_ES.json';
import cta_cs_CZ from './cta-section/cs_CZ.json';
import cta_da_DK from './cta-section/da_DK.json';
import cta_de_CH from './cta-section/de_CH.json';
import cta_de_DE from './cta-section/de_DE.json';
import cta_el_GR from './cta-section/el_GR.json';
import cta_en_AU from './cta-section/en_AU.json';
import cta_en_CA from './cta-section/en_CA.json';
import cta_en_GB from './cta-section/en_GB.json';
import cta_en_US from './cta-section/en_US.json';
import cta_es_ES from './cta-section/es_ES.json';
import cta_es_MX from './cta-section/es_MX.json';
import cta_fi_FI from './cta-section/fi_FI.json';
import cta_fr_CA from './cta-section/fr_CA.json';
import cta_fr_FR from './cta-section/fr_FR.json';
import cta_he_IL from './cta-section/he_IL.json';
import cta_hr_HR from './cta-section/hr_HR.json';
import cta_hu_HU from './cta-section/hu_HU.json';
import cta_hi_IN from './cta-section/hi_IN.json';
import cta_id_ID from './cta-section/id_ID.json';
import cta_it_IT from './cta-section/it_IT.json';
import cta_ja_JP from './cta-section/ja_JP.json';
import cta_ko_KR from './cta-section/ko_KR.json';
import cta_ms_MY from './cta-section/ms_MY.json';
import cta_nl_NL from './cta-section/nl_NL.json';
import cta_no_NO from './cta-section/no_NO.json';
import cta_pl_PL from './cta-section/pl_PL.json';
import cta_pt_BR from './cta-section/pt_BR.json';
import cta_pt_PT from './cta-section/pt_PT.json';
import cta_ro_RO from './cta-section/ro_RO.json';
import cta_ru_RU from './cta-section/ru_RU.json';
import cta_sk_SK from './cta-section/sk_SK.json';
import cta_sv_SE from './cta-section/sv_SE.json';
import cta_th_TH from './cta-section/th_TH.json';
import cta_tr_TR from './cta-section/tr_TR.json';
import cta_uk_UA from './cta-section/uk_UA.json';
import cta_vi_VN from './cta-section/vi_VN.json';
import cta_zh_CN from './cta-section/zh_CN.json';

// TicketSection translations
import ticket_ar_SA from './ticket-section/ar_SA.json';
import ticket_ca_ES from './ticket-section/ca_ES.json';
import ticket_cs_CZ from './ticket-section/cs_CZ.json';
import ticket_da_DK from './ticket-section/da_DK.json';
import ticket_de_CH from './ticket-section/de_CH.json';
import ticket_de_DE from './ticket-section/de_DE.json';
import ticket_el_GR from './ticket-section/el_GR.json';
import ticket_en_AU from './ticket-section/en_AU.json';
import ticket_en_CA from './ticket-section/en_CA.json';
import ticket_en_GB from './ticket-section/en_GB.json';
import ticket_en_US from './ticket-section/en_US.json';
import ticket_es_ES from './ticket-section/es_ES.json';
import ticket_es_MX from './ticket-section/es_MX.json';
import ticket_fi_FI from './ticket-section/fi_FI.json';
import ticket_fr_CA from './ticket-section/fr_CA.json';
import ticket_fr_FR from './ticket-section/fr_FR.json';
import ticket_he_IL from './ticket-section/he_IL.json';
import ticket_hr_HR from './ticket-section/hr_HR.json';
import ticket_hu_HU from './ticket-section/hu_HU.json';
import ticket_hi_IN from './ticket-section/hi_IN.json';
import ticket_id_ID from './ticket-section/id_ID.json';
import ticket_it_IT from './ticket-section/it_IT.json';
import ticket_ja_JP from './ticket-section/ja_JP.json';
import ticket_ko_KR from './ticket-section/ko_KR.json';
import ticket_ms_MY from './ticket-section/ms_MY.json';
import ticket_nl_NL from './ticket-section/nl_NL.json';
import ticket_no_NO from './ticket-section/no_NO.json';
import ticket_pl_PL from './ticket-section/pl_PL.json';
import ticket_pt_BR from './ticket-section/pt_BR.json';
import ticket_pt_PT from './ticket-section/pt_PT.json';
import ticket_ro_RO from './ticket-section/ro_RO.json';
import ticket_ru_RU from './ticket-section/ru_RU.json';
import ticket_sk_SK from './ticket-section/sk_SK.json';
import ticket_sv_SE from './ticket-section/sv_SE.json';
import ticket_th_TH from './ticket-section/th_TH.json';
import ticket_tr_TR from './ticket-section/tr_TR.json';
import ticket_uk_UA from './ticket-section/uk_UA.json';
import ticket_vi_VN from './ticket-section/vi_VN.json';
import ticket_zh_CN from './ticket-section/zh_CN.json';

// ContactSection translations
import contact_ar_SA from './contact-section/ar_SA.json';
import contact_ca_ES from './contact-section/ca_ES.json';
import contact_cs_CZ from './contact-section/cs_CZ.json';
import contact_da_DK from './contact-section/da_DK.json';
import contact_de_CH from './contact-section/de_CH.json';
import contact_de_DE from './contact-section/de_DE.json';
import contact_el_GR from './contact-section/el_GR.json';
import contact_en_AU from './contact-section/en_AU.json';
import contact_en_CA from './contact-section/en_CA.json';
import contact_en_GB from './contact-section/en_GB.json';
import contact_en_US from './contact-section/en_US.json';
import contact_es_ES from './contact-section/es_ES.json';
import contact_es_MX from './contact-section/es_MX.json';
import contact_fi_FI from './contact-section/fi_FI.json';
import contact_fr_CA from './contact-section/fr_CA.json';
import contact_fr_FR from './contact-section/fr_FR.json';
import contact_he_IL from './contact-section/he_IL.json';
import contact_hr_HR from './contact-section/hr_HR.json';
import contact_hu_HU from './contact-section/hu_HU.json';
import contact_hi_IN from './contact-section/hi_IN.json';
import contact_id_ID from './contact-section/id_ID.json';
import contact_it_IT from './contact-section/it_IT.json';
import contact_ja_JP from './contact-section/ja_JP.json';
import contact_ko_KR from './contact-section/ko_KR.json';
import contact_ms_MY from './contact-section/ms_MY.json';
import contact_nl_NL from './contact-section/nl_NL.json';
import contact_no_NO from './contact-section/no_NO.json';
import contact_pl_PL from './contact-section/pl_PL.json';
import contact_pt_BR from './contact-section/pt_BR.json';
import contact_pt_PT from './contact-section/pt_PT.json';
import contact_ro_RO from './contact-section/ro_RO.json';
import contact_ru_RU from './contact-section/ru_RU.json';
import contact_sk_SK from './contact-section/sk_SK.json';
import contact_sv_SE from './contact-section/sv_SE.json';
import contact_th_TH from './contact-section/th_TH.json';
import contact_tr_TR from './contact-section/tr_TR.json';
import contact_uk_UA from './contact-section/uk_UA.json';
import contact_vi_VN from './contact-section/vi_VN.json';
import contact_zh_CN from './contact-section/zh_CN.json';

// FAQSection translations
import faq_ar_SA from './faq-section/ar_SA.json';
import faq_ca_ES from './faq-section/ca_ES.json';
import faq_cs_CZ from './faq-section/cs_CZ.json';
import faq_da_DK from './faq-section/da_DK.json';
import faq_de_CH from './faq-section/de_CH.json';
import faq_de_DE from './faq-section/de_DE.json';
import faq_el_GR from './faq-section/el_GR.json';
import faq_en_AU from './faq-section/en_AU.json';
import faq_en_CA from './faq-section/en_CA.json';
import faq_en_GB from './faq-section/en_GB.json';
import faq_en_US from './faq-section/en_US.json';
import faq_es_ES from './faq-section/es_ES.json';
import faq_es_MX from './faq-section/es_MX.json';
import faq_fi_FI from './faq-section/fi_FI.json';
import faq_fr_CA from './faq-section/fr_CA.json';
import faq_fr_FR from './faq-section/fr_FR.json';
import faq_he_IL from './faq-section/he_IL.json';
import faq_hr_HR from './faq-section/hr_HR.json';
import faq_hu_HU from './faq-section/hu_HU.json';
import faq_hi_IN from './faq-section/hi_IN.json';
import faq_id_ID from './faq-section/id_ID.json';
import faq_it_IT from './faq-section/it_IT.json';
import faq_ja_JP from './faq-section/ja_JP.json';
import faq_ko_KR from './faq-section/ko_KR.json';
import faq_ms_MY from './faq-section/ms_MY.json';
import faq_nl_NL from './faq-section/nl_NL.json';
import faq_no_NO from './faq-section/no_NO.json';
import faq_pl_PL from './faq-section/pl_PL.json';
import faq_pt_BR from './faq-section/pt_BR.json';
import faq_pt_PT from './faq-section/pt_PT.json';
import faq_ro_RO from './faq-section/ro_RO.json';
import faq_ru_RU from './faq-section/ru_RU.json';
import faq_sk_SK from './faq-section/sk_SK.json';
import faq_sv_SE from './faq-section/sv_SE.json';
import faq_th_TH from './faq-section/th_TH.json';
import faq_tr_TR from './faq-section/tr_TR.json';
import faq_uk_UA from './faq-section/uk_UA.json';
import faq_vi_VN from './faq-section/vi_VN.json';
import faq_zh_CN from './faq-section/zh_CN.json';

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

// ===== CTASection Translations =====

export interface CTASectionTranslations {
  title: string;
  description: string;
  buttonText: string;
}

// Translations map for cta-section
const ctaSectionTranslations: Record<string, CTASectionTranslations> = {
  ar_SA: cta_ar_SA,
  ca_ES: cta_ca_ES,
  cs_CZ: cta_cs_CZ,
  da_DK: cta_da_DK,
  de_CH: cta_de_CH,
  de_DE: cta_de_DE,
  el_GR: cta_el_GR,
  en_AU: cta_en_AU,
  en_CA: cta_en_CA,
  en_GB: cta_en_GB,
  en_US: cta_en_US,
  es_ES: cta_es_ES,
  es_MX: cta_es_MX,
  fi_FI: cta_fi_FI,
  fr_CA: cta_fr_CA,
  fr_FR: cta_fr_FR,
  he_IL: cta_he_IL,
  hr_HR: cta_hr_HR,
  hu_HU: cta_hu_HU,
  hi_IN: cta_hi_IN,
  id_ID: cta_id_ID,
  it_IT: cta_it_IT,
  ja_JP: cta_ja_JP,
  ko_KR: cta_ko_KR,
  ms_MY: cta_ms_MY,
  nl_NL: cta_nl_NL,
  no_NO: cta_no_NO,
  pl_PL: cta_pl_PL,
  pt_BR: cta_pt_BR,
  pt_PT: cta_pt_PT,
  ro_RO: cta_ro_RO,
  ru_RU: cta_ru_RU,
  sk_SK: cta_sk_SK,
  sv_SE: cta_sv_SE,
  th_TH: cta_th_TH,
  tr_TR: cta_tr_TR,
  uk_UA: cta_uk_UA,
  vi_VN: cta_vi_VN,
  zh_CN: cta_zh_CN,
};

/**
 * Get CTASection translations for a specific locale
 * @param locale - Locale code (e.g., 'en_GB')
 * @returns CTASection translation object
 */
export function getCTASectionTranslations(locale: string): CTASectionTranslations {
  // Return the translation for the requested locale or fallback to en_GB
  return ctaSectionTranslations[locale] || ctaSectionTranslations.en_GB;
}

/**
 * Check if a locale has CTASection translations available
 * @param locale - Locale code
 * @returns boolean
 */
export function hasCTASectionTranslation(locale: string): boolean {
  return locale in ctaSectionTranslations;
}

// ===== FAQSection Translations =====

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface FAQCategories {
  all: string;
  gettingStarted: string;
  features: string;
  security: string;
  billing: string;
  troubleshooting: string;
}

export interface FAQNoResults {
  title: string;
  subtitle: string;
}

export interface FAQHelpCta {
  title: string;
  subtitle: string;
  button: string;
}

export interface FAQSectionTranslations {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  categories: FAQCategories;
  faqs: FAQItem[];
  noResults: FAQNoResults;
  helpCta: FAQHelpCta;
}

// Translations map for faq-section
const faqSectionTranslations: Record<string, FAQSectionTranslations> = {
  ar_SA: faq_ar_SA,
  ca_ES: faq_ca_ES,
  cs_CZ: faq_cs_CZ,
  da_DK: faq_da_DK,
  de_CH: faq_de_CH,
  de_DE: faq_de_DE,
  el_GR: faq_el_GR,
  en_AU: faq_en_AU,
  en_CA: faq_en_CA,
  en_GB: faq_en_GB,
  en_US: faq_en_US,
  es_ES: faq_es_ES,
  es_MX: faq_es_MX,
  fi_FI: faq_fi_FI,
  fr_CA: faq_fr_CA,
  fr_FR: faq_fr_FR,
  he_IL: faq_he_IL,
  hr_HR: faq_hr_HR,
  hu_HU: faq_hu_HU,
  hi_IN: faq_hi_IN,
  id_ID: faq_id_ID,
  it_IT: faq_it_IT,
  ja_JP: faq_ja_JP,
  ko_KR: faq_ko_KR,
  ms_MY: faq_ms_MY,
  nl_NL: faq_nl_NL,
  no_NO: faq_no_NO,
  pl_PL: faq_pl_PL,
  pt_BR: faq_pt_BR,
  pt_PT: faq_pt_PT,
  ro_RO: faq_ro_RO,
  ru_RU: faq_ru_RU,
  sk_SK: faq_sk_SK,
  sv_SE: faq_sv_SE,
  th_TH: faq_th_TH,
  tr_TR: faq_tr_TR,
  uk_UA: faq_uk_UA,
  vi_VN: faq_vi_VN,
  zh_CN: faq_zh_CN,
};

/**
 * Get FAQSection translations for a specific locale
 * @param locale - Locale code (e.g., 'en_GB')
 * @returns FAQSection translation object
 */
export function getFAQSectionTranslations(locale: string): FAQSectionTranslations {
  // Return the translation for the requested locale or fallback to en_GB
  return faqSectionTranslations[locale] || faqSectionTranslations.en_GB;
}

/**
 * Check if a locale has FAQSection translations available
 * @param locale - Locale code
 * @returns boolean
 */
export function hasFAQSectionTranslation(locale: string): boolean {
  return locale in faqSectionTranslations;
}

// ===== TicketSection Translations =====

export interface TicketCategory {
  id: string;
  name: string;
  description: string;
}

export interface TicketPriority {
  id: string;
  name: string;
}

export interface TicketForm {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  categoryLabel?: string;
  categoryPlaceholder?: string;
  priorityLabel: string;
  priorityPlaceholder?: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  descriptionLabel: string;
  descriptionPlaceholder: string;
  stepsLabel?: string;
  stepsPlaceholder?: string;
  deviceLabel?: string;
  devicePlaceholder?: string;
  versionLabel?: string;
  versionPlaceholder?: string;
  attachmentLabel?: string;
  attachmentButton?: string;
  attachmentHint?: string;
  attachmentsLabel?: string;
  attachmentsDescription?: string;
  attachmentsButton?: string;
  attachmentsRemove?: string;
  submitButton: string;
  submittingButton?: string;
  submitting: string;
  cancelButton?: string;
  required: string;
}

export interface TicketSuccess {
  title: string;
  message: string;
  ticketNumber: string;
  createAnother: string;
}

export interface TicketToast {
  successTitle: string;
  errorTitle: string;
  errorConnection: string;
}

export interface TicketSectionTranslations {
  title: string;
  subtitle: string;
  categoryTitle: string;
  categories: TicketCategory[];
  priorities: TicketPriority[];
  form: TicketForm;
  success: TicketSuccess;
  toast: TicketToast;
}

// Translations map for ticket-section
const ticketSectionTranslations: Record<string, TicketSectionTranslations> = {
  ar_SA: ticket_ar_SA,
  ca_ES: ticket_ca_ES,
  cs_CZ: ticket_cs_CZ,
  da_DK: ticket_da_DK,
  de_CH: ticket_de_CH,
  de_DE: ticket_de_DE,
  el_GR: ticket_el_GR,
  en_AU: ticket_en_AU,
  en_CA: ticket_en_CA,
  en_GB: ticket_en_GB,
  en_US: ticket_en_US,
  es_ES: ticket_es_ES,
  es_MX: ticket_es_MX,
  fi_FI: ticket_fi_FI,
  fr_CA: ticket_fr_CA,
  fr_FR: ticket_fr_FR,
  he_IL: ticket_he_IL,
  hr_HR: ticket_hr_HR,
  hu_HU: ticket_hu_HU,
  hi_IN: ticket_hi_IN,
  id_ID: ticket_id_ID,
  it_IT: ticket_it_IT,
  ja_JP: ticket_ja_JP,
  ko_KR: ticket_ko_KR,
  ms_MY: ticket_ms_MY,
  nl_NL: ticket_nl_NL,
  no_NO: ticket_no_NO,
  pl_PL: ticket_pl_PL,
  pt_BR: ticket_pt_BR,
  pt_PT: ticket_pt_PT,
  ro_RO: ticket_ro_RO,
  ru_RU: ticket_ru_RU,
  sk_SK: ticket_sk_SK,
  sv_SE: ticket_sv_SE,
  th_TH: ticket_th_TH,
  tr_TR: ticket_tr_TR,
  uk_UA: ticket_uk_UA,
  vi_VN: ticket_vi_VN,
  zh_CN: ticket_zh_CN,
};

/**
 * Get TicketSection translations for a specific locale
 * @param locale - Locale code (e.g., 'en_GB')
 * @returns TicketSection translation object
 */
export function getTicketSectionTranslations(locale: string): TicketSectionTranslations {
  // Return the translation for the requested locale or fallback to en_GB
  return ticketSectionTranslations[locale] || ticketSectionTranslations.en_GB;
}

/**
 * Check if a locale has TicketSection translations available
 * @param locale - Locale code
 * @returns boolean
 */
export function hasTicketSectionTranslation(locale: string): boolean {
  return locale in ticketSectionTranslations;
}

// ===== ContactSection Translations =====

export interface ContactMethod {
  id: string;
  name: string;
  description: string;
  value: string;
  availability: string;
}

export interface OfficeSchedule {
  day: string;
  hours: string;
}

export interface OfficeHours {
  title: string;
  schedule: OfficeSchedule[];
}

export interface ContactForm {
  title: string;
  subtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel?: string;
  phonePlaceholder?: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitButton: string;
  submittingButton?: string;
  submitting: string;
  required: string;
}

export interface ContactSuccess {
  title: string;
  message: string;
}

export interface ContactToast {
  successTitle: string;
  errorTitle: string;
  errorConnection: string;
}

export interface ContactSectionTranslations {
  title: string;
  subtitle: string;
  channelsTitle: string;
  contactMethods: ContactMethod[];
  officeHours: OfficeHours;
  form: ContactForm;
  success: ContactSuccess;
  toast: ContactToast;
}

// Translations map for contact-section
const contactSectionTranslations: Record<string, ContactSectionTranslations> = {
  ar_SA: contact_ar_SA,
  ca_ES: contact_ca_ES,
  cs_CZ: contact_cs_CZ,
  da_DK: contact_da_DK,
  de_CH: contact_de_CH,
  de_DE: contact_de_DE,
  el_GR: contact_el_GR,
  en_AU: contact_en_AU,
  en_CA: contact_en_CA,
  en_GB: contact_en_GB,
  en_US: contact_en_US,
  es_ES: contact_es_ES,
  es_MX: contact_es_MX,
  fi_FI: contact_fi_FI,
  fr_CA: contact_fr_CA,
  fr_FR: contact_fr_FR,
  he_IL: contact_he_IL,
  hr_HR: contact_hr_HR,
  hu_HU: contact_hu_HU,
  hi_IN: contact_hi_IN,
  id_ID: contact_id_ID,
  it_IT: contact_it_IT,
  ja_JP: contact_ja_JP,
  ko_KR: contact_ko_KR,
  ms_MY: contact_ms_MY,
  nl_NL: contact_nl_NL,
  no_NO: contact_no_NO,
  pl_PL: contact_pl_PL,
  pt_BR: contact_pt_BR,
  pt_PT: contact_pt_PT,
  ro_RO: contact_ro_RO,
  ru_RU: contact_ru_RU,
  sk_SK: contact_sk_SK,
  sv_SE: contact_sv_SE,
  th_TH: contact_th_TH,
  tr_TR: contact_tr_TR,
  uk_UA: contact_uk_UA,
  vi_VN: contact_vi_VN,
  zh_CN: contact_zh_CN,
};

/**
 * Get ContactSection translations for a specific locale
 * @param locale - Locale code (e.g., 'en_GB')
 * @returns ContactSection translation object
 */
export function getContactSectionTranslations(locale: string): ContactSectionTranslations {
  // Return the translation for the requested locale or fallback to en_GB
  return contactSectionTranslations[locale] || contactSectionTranslations.en_GB;
}

/**
 * Check if a locale has ContactSection translations available
 * @param locale - Locale code
 * @returns boolean
 */
export function hasContactSectionTranslation(locale: string): boolean {
  return locale in contactSectionTranslations;
}

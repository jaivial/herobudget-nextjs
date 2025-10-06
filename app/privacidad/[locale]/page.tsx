import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import PrivacyHeroSection from '@/components/privacy/PrivacyHeroSection';
import PrivacyPolicySection from '@/components/privacy/PrivacyPolicySection';
import DataProtectionSection from '@/components/privacy/DataProtectionSection';
import UserRightsSection from '@/components/privacy/UserRightsSection';
import ContactPrivacySection from '@/components/privacy/ContactPrivacySection';
import { isLocaleSupported, getLocale, LOCALE_CODES } from '@/lib/i18n/locales';

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-gray-800"></div>,
});

/**
 * Privacy Page with Locale Support
 * Dynamic route for language-specific privacy pages
 */

interface PrivacyPageProps {
  params: {
    locale: string;
  };
}

// Generate static params for all supported locales
export async function generateStaticParams() {
  return LOCALE_CODES.map((locale) => ({
    locale: locale,
  }));
}

// Generate metadata for each locale
export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale } = params;
  const localeData = getLocale(locale);

  if (!localeData) {
    return {
      title: 'Privacy Policy - Hero Budget',
    };
  }

  // Metadata translations for different languages
  const metadataTranslations: Record<string, { title: string; description: string }> = {
    ar_SA: {
      title: 'سياسة الخصوصية',
      description: 'سياسة خصوصية Hero Budget. تعرف على كيفية حمايتنا واستخدامنا لمعلوماتك الشخصية، وحقوق الخصوصية الخاصة بك والتزامنا بأمان البيانات.',
    },
    ca_ES: {
      title: 'Política de Privadesa',
      description: 'Política de privadesa de Hero Budget. Coneix com protegim i utilitzem la teva informació personal, els teus drets de privadesa i el nostre compromís amb la seguretat de dades.',
    },
    cs_CZ: {
      title: 'Zásady ochrany osobních údajů',
      description: 'Zásady ochrany osobních údajů Hero Budget. Zjistěte, jak chráníme a používáme vaše osobní údaje, vaše práva na ochranu osobních údajů a náš závazek k bezpečnosti dat.',
    },
    da_DK: {
      title: 'Privatlivspolitik',
      description: 'Hero Budget privatlivspolitik. Lær hvordan vi beskytter og bruger dine personlige oplysninger, dine privatlivsrettigheder og vores engagement i datasikkerhed.',
    },
    de_CH: {
      title: 'Datenschutzrichtlinie',
      description: 'Hero Budget Datenschutzrichtlinie. Erfahren Sie, wie wir Ihre persönlichen Daten schützen und verwenden, Ihre Datenschutzrechte und unser Engagement für Datensicherheit.',
    },
    de_DE: {
      title: 'Datenschutzrichtlinie',
      description: 'Hero Budget Datenschutzrichtlinie. Erfahren Sie, wie wir Ihre persönlichen Daten schützen und verwenden, Ihre Datenschutzrechte und unser Engagement für Datensicherheit.',
    },
    el_GR: {
      title: 'Πολιτική Απορρήτου',
      description: 'Πολιτική Απορρήτου Hero Budget. Μάθετε πώς προστατεύουμε και χρησιμοποιούμε τα προσωπικά σας δεδομένα, τα δικαιώματα απορρήτου σας και τη δέσμευσή μας για την ασφάλεια δεδομένων.',
    },
    en_AU: {
      title: 'Privacy Policy',
      description: 'Hero Budget Privacy Policy. Learn how we protect and use your personal information, your privacy rights and our commitment to data security.',
    },
    en_CA: {
      title: 'Privacy Policy',
      description: 'Hero Budget Privacy Policy. Learn how we protect and use your personal information, your privacy rights and our commitment to data security.',
    },
    en_GB: {
      title: 'Privacy Policy',
      description: 'Hero Budget Privacy Policy. Learn how we protect and use your personal information, your privacy rights and our commitment to data security.',
    },
    en_US: {
      title: 'Privacy Policy',
      description: 'Hero Budget Privacy Policy. Learn how we protect and use your personal information, your privacy rights and our commitment to data security.',
    },
    es_ES: {
      title: 'Política de Privacidad',
      description: 'Política de privacidad de Hero Budget. Conoce cómo protegemos y utilizamos tu información personal, tus derechos de privacidad y nuestro compromiso con la seguridad de datos.',
    },
    es_MX: {
      title: 'Política de Privacidad',
      description: 'Política de privacidad de Hero Budget. Conoce cómo protegemos y utilizamos tu información personal, tus derechos de privacidad y nuestro compromiso con la seguridad de datos.',
    },
    fi_FI: {
      title: 'Tietosuojakäytäntö',
      description: 'Hero Budget tietosuojakäytäntö. Opi kuinka suojaamme ja käytämme henkilötietojasi, tietosuojaoikeutesi ja sitoutumisemme tietoturvaan.',
    },
    fr_CA: {
      title: 'Politique de Confidentialité',
      description: 'Politique de confidentialité de Hero Budget. Découvrez comment nous protégeons et utilisons vos informations personnelles, vos droits à la vie privée et notre engagement en matière de sécurité des données.',
    },
    fr_FR: {
      title: 'Politique de Confidentialité',
      description: 'Politique de confidentialité de Hero Budget. Découvrez comment nous protégeons et utilisons vos informations personnelles, vos droits à la vie privée et notre engagement en matière de sécurité des données.',
    },
    he_IL: {
      title: 'מדיניות פרטיות',
      description: 'מדיניות הפרטיות של Hero Budget. למד כיצד אנו מגנים ומשתמשים במידע האישי שלך, זכויות הפרטיות שלך והמחויבות שלנו לאבטחת נתונים.',
    },
    hr_HR: {
      title: 'Politika privatnosti',
      description: 'Politika privatnosti Hero Budget. Saznajte kako štitimo i koristimo vaše osobne podatke, vaša prava na privatnost i našu predanost sigurnosti podataka.',
    },
    hu_HU: {
      title: 'Adatvédelmi irányelvek',
      description: 'Hero Budget adatvédelmi irányelvek. Tudja meg, hogyan védjük és használjuk személyes adatait, adatvédelmi jogait és elkötelezettségünket az adatbiztonság iránt.',
    },
    hi_IN: {
      title: 'गोपनीयता नीति',
      description: 'Hero Budget गोपनीयता नीति। जानें कि हम आपकी व्यक्तिगत जानकारी की सुरक्षा और उपयोग कैसे करते हैं, आपके गोपनीयता अधिकार और डेटा सुरक्षा के प्रति हमारी प्रतिबद्धता।',
    },
    id_ID: {
      title: 'Kebijakan Privasi',
      description: 'Kebijakan Privasi Hero Budget. Pelajari bagaimana kami melindungi dan menggunakan informasi pribadi Anda, hak privasi Anda dan komitmen kami terhadap keamanan data.',
    },
    it_IT: {
      title: 'Informativa sulla Privacy',
      description: 'Informativa sulla privacy di Hero Budget. Scopri come proteggiamo e utilizziamo le tue informazioni personali, i tuoi diritti sulla privacy e il nostro impegno per la sicurezza dei dati.',
    },
    ja_JP: {
      title: 'プライバシーポリシー',
      description: 'Hero Budgetのプライバシーポリシー。個人情報の保護と使用方法、プライバシー権、データセキュリティへの取り組みについて説明します。',
    },
    ko_KR: {
      title: '개인정보 보호정책',
      description: 'Hero Budget 개인정보 보호정책. 개인정보 보호 및 사용 방법, 개인정보 보호 권리 및 데이터 보안에 대한 약속을 알아보세요.',
    },
    ms_MY: {
      title: 'Dasar Privasi',
      description: 'Dasar Privasi Hero Budget. Ketahui bagaimana kami melindungi dan menggunakan maklumat peribadi anda, hak privasi anda dan komitmen kami terhadap keselamatan data.',
    },
    nl_NL: {
      title: 'Privacybeleid',
      description: 'Hero Budget privacybeleid. Leer hoe we uw persoonlijke informatie beschermen en gebruiken, uw privacyrechten en onze toewijding aan gegevensbeveiliging.',
    },
    no_NO: {
      title: 'Personvernerklæring',
      description: 'Hero Budget personvernerklæring. Lær hvordan vi beskytter og bruker din personlige informasjon, dine personvernrettigheter og vårt engasjement for datasikkerhet.',
    },
    pl_PL: {
      title: 'Polityka prywatności',
      description: 'Polityka prywatności Hero Budget. Dowiedz się, jak chronimy i wykorzystujemy Twoje dane osobowe, Twoje prawa do prywatności i nasze zobowiązanie do bezpieczeństwa danych.',
    },
    pt_BR: {
      title: 'Política de Privacidade',
      description: 'Política de Privacidade do Hero Budget. Saiba como protegemos e usamos suas informações pessoais, seus direitos de privacidade e nosso compromisso com a segurança de dados.',
    },
    pt_PT: {
      title: 'Política de Privacidade',
      description: 'Política de Privacidade do Hero Budget. Saiba como protegemos e usamos as suas informações pessoais, os seus direitos de privacidade e o nosso compromisso com a segurança de dados.',
    },
    ro_RO: {
      title: 'Politica de confidențialitate',
      description: 'Politica de confidențialitate Hero Budget. Aflați cum protejăm și utilizăm informațiile dvs. personale, drepturile dvs. de confidențialitate și angajamentul nostru față de securitatea datelor.',
    },
    ru_RU: {
      title: 'Политика конфиденциальности',
      description: 'Политика конфиденциальности Hero Budget. Узнайте, как мы защищаем и используем вашу личную информацию, ваши права на конфиденциальность и наше обязательство по обеспечению безопасности данных.',
    },
    sk_SK: {
      title: 'Zásady ochrany osobných údajov',
      description: 'Zásady ochrany osobných údajov Hero Budget. Zistite, ako chránime a používame vaše osobné údaje, vaše práva na ochranu osobných údajov a náš záväzok k bezpečnosti údajov.',
    },
    sv_SE: {
      title: 'Integritetspolicy',
      description: 'Hero Budget integritetspolicy. Lär dig hur vi skyddar och använder din personliga information, dina integritetsrättigheter och vårt engagemang för datasäkerhet.',
    },
    th_TH: {
      title: 'นโยบายความเป็นส่วนตัว',
      description: 'นโยบายความเป็นส่วนตัว Hero Budget เรียนรู้วิธีที่เราปกป้องและใช้ข้อมูลส่วนบุคคลของคุณ สิทธิ์ความเป็นส่วนตัวของคุณ และความมุ่งมั่นของเราต่อความปลอดภัยของข้อมูล',
    },
    tr_TR: {
      title: 'Gizlilik Politikası',
      description: 'Hero Budget Gizlilik Politikası. Kişisel bilgilerinizi nasıl koruduğumuzu ve kullandığımızı, gizlilik haklarınızı ve veri güvenliğine olan bağlılığımızı öğrenin.',
    },
    uk_UA: {
      title: 'Політика конфіденційності',
      description: 'Політика конфіденційності Hero Budget. Дізнайтеся, як ми захищаємо та використовуємо вашу особисту інформацію, ваші права на конфіденційність та наше зобов\'язання щодо безпеки даних.',
    },
    vi_VN: {
      title: 'Chính sách bảo mật',
      description: 'Chính sách bảo mật Hero Budget. Tìm hiểu cách chúng tôi bảo vệ và sử dụng thông tin cá nhân của bạn, quyền riêng tư của bạn và cam kết của chúng tôi về bảo mật dữ liệu.',
    },
    zh_CN: {
      title: '隐私政策',
      description: 'Hero Budget隐私政策。了解我们如何保护和使用您的个人信息、您的隐私权以及我们对数据安全的承诺。',
    },
  };

  const metadata = metadataTranslations[locale] || metadataTranslations['en_GB'];

  return {
    title: `${metadata.title} - Hero Budget`,
    description: metadata.description,
    keywords: ['privacy', 'policy', 'data protection', 'GDPR', 'hero budget', 'security', 'personal information'],
    openGraph: {
      title: `${metadata.title} - Hero Budget`,
      description: metadata.description,
      type: 'website',
      locale: locale,
    },
    alternates: {
      canonical: `/privacidad/${locale}`,
      languages: LOCALE_CODES.reduce((acc, code) => {
        acc[code] = `/privacidad/${code}`;
        return acc;
      }, {} as Record<string, string>),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function PrivacyLocalePage({ params }: PrivacyPageProps) {
  const { locale } = params;

  // Validate locale
  if (!isLocaleSupported(locale)) {
    notFound();
  }

  return (
    <>
      <Header />

      <main id="main-content" className="min-h-screen">
        <PrivacyHeroSection locale={locale} />
        <PrivacyPolicySection locale={locale} />
        <DataProtectionSection locale={locale} />
        {/* <UserRightsSection locale={locale} /> */}
        <ContactPrivacySection locale={locale} />
      </main>

      <Footer locale={locale} />
    </>
  );
}

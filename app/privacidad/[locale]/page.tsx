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
    fr_FR: {
      title: 'Politique de Confidentialité',
      description: 'Politique de confidentialité de Hero Budget. Découvrez comment nous protégeons et utilisons vos informations personnelles, vos droits à la vie privée et notre engagement en matière de sécurité des données.',
    },
    de_DE: {
      title: 'Datenschutzrichtlinie',
      description: 'Hero Budget Datenschutzrichtlinie. Erfahren Sie, wie wir Ihre persönlichen Daten schützen und verwenden, Ihre Datenschutzrechte und unser Engagement für Datensicherheit.',
    },
    it_IT: {
      title: 'Informativa sulla Privacy',
      description: 'Informativa sulla privacy di Hero Budget. Scopri come proteggiamo e utilizziamo le tue informazioni personali, i tuoi diritti sulla privacy e il nostro impegno per la sicurezza dei dati.',
    },
    pt_BR: {
      title: 'Política de Privacidade',
      description: 'Política de Privacidade do Hero Budget. Saiba como protegemos e usamos suas informações pessoais, seus direitos de privacidade e nosso compromisso com a segurança de dados.',
    },
    pt_PT: {
      title: 'Política de Privacidade',
      description: 'Política de Privacidade do Hero Budget. Saiba como protegemos e usamos as suas informações pessoais, os seus direitos de privacidade e o nosso compromisso com a segurança de dados.',
    },
    ja_JP: {
      title: 'プライバシーポリシー',
      description: 'Hero Budgetのプライバシーポリシー。個人情報の保護と使用方法、プライバシー権、データセキュリティへの取り組みについて説明します。',
    },
    zh_CN: {
      title: '隐私政策',
      description: 'Hero Budget隐私政策。了解我们如何保护和使用您的个人信息、您的隐私权以及我们对数据安全的承诺。',
    },
    ko_KR: {
      title: '개인정보 보호정책',
      description: 'Hero Budget 개인정보 보호정책. 개인정보 보호 및 사용 방법, 개인정보 보호 권리 및 데이터 보안에 대한 약속을 알아보세요.',
    },
    ru_RU: {
      title: 'Политика конфиденциальности',
      description: 'Политика конфиденциальности Hero Budget. Узнайте, как мы защищаем и используем вашу личную информацию, ваши права на конфиденциальность и наше обязательство по обеспечению безопасности данных.',
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

      <Footer />
    </>
  );
}

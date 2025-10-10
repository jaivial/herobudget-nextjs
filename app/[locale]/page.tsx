import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';
import PageWrapper from '@/components/PageWrapper';
import { isLocaleSupported, getLocale, LOCALE_CODES } from '@/lib/i18n/locales';

// Importación dinámica para componentes pesados con lazy loading
const DownloadSection = dynamic(() => import('@/components/DownloadSection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">
    <div className="loading-skeleton w-full h-96 rounded-lg"></div>
  </div>
});

const ScreenshotsSection = dynamic(() => import('@/components/ScreenshotsSection'), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">
    <div className="loading-skeleton w-full h-64 rounded-lg"></div>
  </div>
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-gray-800"></div>
});

/**
 * Home Page with Locale Support
 * Dynamic route for language-specific home pages
 */

interface HomePageProps {
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
export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = params;
  const localeData = getLocale(locale);

  if (!localeData) {
    return {
      title: 'Hero Budget - Smart Expense Tracker',
    };
  }

  // Metadata translations for different languages
  const metadataTranslations: Record<string, { title: string; description: string; keywords: string[] }> = {
    ar_SA: {
      title: 'Hero Budget - تطبيق ذكي لإدارة المصروفات',
      description: 'تتبع مصاريفك، وضع ميزانيتك، وحقق أهدافك المالية مع Hero Budget. تطبيق بسيط وقوي لإدارة أموالك الشخصية.',
      keywords: ['ميزانية', 'مالية', 'مصاريف', 'توفير', 'أموال', 'تطبيق', 'تتبع'],
    },
    ca_ES: {
      title: 'Hero Budget - Gestor Intel·ligent de Despeses',
      description: 'Segueix les teves despeses, estableix el teu pressupost i aconsegueix els teus objectius financers amb Hero Budget. Una aplicació senzilla i potent per gestionar els teus diners.',
      keywords: ['pressupost', 'finances', 'despeses', 'estalvi', 'diners', 'aplicació', 'seguiment'],
    },
    cs_CZ: {
      title: 'Hero Budget - Chytrý Správce Výdajů',
      description: 'Sledujte své výdaje, nastavte si rozpočet a dosáhněte svých finančních cílů s Hero Budget. Jednoduchá a výkonná aplikace pro správu vašich peněz.',
      keywords: ['rozpočet', 'finance', 'výdaje', 'úspory', 'peníze', 'aplikace', 'sledování'],
    },
    da_DK: {
      title: 'Hero Budget - Smart Udgiftsstyring',
      description: 'Spor dine udgifter, sæt dit budget og nå dine økonomiske mål med Hero Budget. En enkel og kraftfuld app til at styre dine penge.',
      keywords: ['budget', 'økonomi', 'udgifter', 'opsparing', 'penge', 'app', 'sporing'],
    },
    de_CH: {
      title: 'Hero Budget - Intelligenter Ausgaben-Tracker',
      description: 'Verfolgen Sie Ihre Ausgaben, legen Sie Ihr Budget fest und erreichen Sie Ihre finanziellen Ziele mit Hero Budget. Eine einfache und leistungsstarke App zur Verwaltung Ihres Geldes.',
      keywords: ['Budget', 'Finanzen', 'Ausgaben', 'Sparen', 'Geld', 'App', 'Verfolgung'],
    },
    de_DE: {
      title: 'Hero Budget - Intelligenter Ausgaben-Tracker',
      description: 'Verfolgen Sie Ihre Ausgaben, legen Sie Ihr Budget fest und erreichen Sie Ihre finanziellen Ziele mit Hero Budget. Eine einfache und leistungsstarke App zur Verwaltung Ihres Geldes.',
      keywords: ['Budget', 'Finanzen', 'Ausgaben', 'Sparen', 'Geld', 'App', 'Verfolgung'],
    },
    el_GR: {
      title: 'Hero Budget - Έξυπνη Διαχείριση Εξόδων',
      description: 'Παρακολουθήστε τα έξοδά σας, ορίστε τον προϋπολογισμό σας και πετύχετε τους οικονομικούς σας στόχους με το Hero Budget. Μια απλή και ισχυρή εφαρμογή για τη διαχείριση των χρημάτων σας.',
      keywords: ['προϋπολογισμός', 'οικονομικά', 'έξοδα', 'αποταμίευση', 'χρήματα', 'εφαρμογή', 'παρακολούθηση'],
    },
    en_AU: {
      title: 'Hero Budget - Smart Expense Tracker',
      description: 'Track your expenses, set your budget, and achieve your financial goals with Hero Budget. A simple and powerful app to manage your money.',
      keywords: ['budget', 'finance', 'expenses', 'savings', 'money', 'app', 'tracking'],
    },
    en_CA: {
      title: 'Hero Budget - Smart Expense Tracker',
      description: 'Track your expenses, set your budget, and achieve your financial goals with Hero Budget. A simple and powerful app to manage your money.',
      keywords: ['budget', 'finance', 'expenses', 'savings', 'money', 'app', 'tracking'],
    },
    en_GB: {
      title: 'Hero Budget - Smart Expense Tracker',
      description: 'Track your expenses, set your budget, and achieve your financial goals with Hero Budget. A simple and powerful app to manage your money.',
      keywords: ['budget', 'finance', 'expenses', 'savings', 'money', 'app', 'tracking'],
    },
    en_US: {
      title: 'Hero Budget - Smart Expense Tracker',
      description: 'Track your expenses, set your budget, and achieve your financial goals with Hero Budget. A simple and powerful app to manage your money.',
      keywords: ['budget', 'finance', 'expenses', 'savings', 'money', 'app', 'tracking'],
    },
    es_ES: {
      title: 'Hero Budget - Gestor Inteligente de Gastos',
      description: 'Sigue tus gastos, establece tu presupuesto y alcanza tus objetivos financieros con Hero Budget. Una aplicación sencilla y potente para gestionar tu dinero.',
      keywords: ['presupuesto', 'finanzas', 'gastos', 'ahorro', 'dinero', 'app', 'seguimiento'],
    },
    es_MX: {
      title: 'Hero Budget - Gestor Inteligente de Gastos',
      description: 'Sigue tus gastos, establece tu presupuesto y alcanza tus objetivos financieros con Hero Budget. Una aplicación sencilla y potente para gestionar tu dinero.',
      keywords: ['presupuesto', 'finanzas', 'gastos', 'ahorro', 'dinero', 'app', 'seguimiento'],
    },
    fi_FI: {
      title: 'Hero Budget - Älykäs Kulujenseuranta',
      description: 'Seuraa kulujasi, aseta budjettisi ja saavuta taloudelliset tavoitteesi Hero Budgetilla. Yksinkertainen ja tehokas sovellus rahojesi hallintaan.',
      keywords: ['budjetti', 'talous', 'kulut', 'säästöt', 'raha', 'sovellus', 'seuranta'],
    },
    fr_CA: {
      title: 'Hero Budget - Gestionnaire Intelligent de Dépenses',
      description: 'Suivez vos dépenses, établissez votre budget et atteignez vos objectifs financiers avec Hero Budget. Une application simple et puissante pour gérer votre argent.',
      keywords: ['budget', 'finances', 'dépenses', 'économies', 'argent', 'application', 'suivi'],
    },
    fr_FR: {
      title: 'Hero Budget - Gestionnaire Intelligent de Dépenses',
      description: 'Suivez vos dépenses, établissez votre budget et atteignez vos objectifs financiers avec Hero Budget. Une application simple et puissante pour gérer votre argent.',
      keywords: ['budget', 'finances', 'dépenses', 'économies', 'argent', 'application', 'suivi'],
    },
    he_IL: {
      title: 'Hero Budget - מעקב חכם אחר הוצאות',
      description: 'עקוב אחר ההוצאות שלך, הגדר את התקציב שלך והשג את היעדים הפיננסיים שלך עם Hero Budget. אפליקציה פשוטה ועוצמתית לניהול הכסף שלך.',
      keywords: ['תקציב', 'פיננסים', 'הוצאות', 'חיסכון', 'כסף', 'אפליקציה', 'מעקב'],
    },
    hr_HR: {
      title: 'Hero Budget - Pametni Praćenje Troškova',
      description: 'Pratite svoje troškove, postavite svoj proračun i ostvarite svoje financijske ciljeve s Hero Budget. Jednostavna i snažna aplikacija za upravljanje vašim novcem.',
      keywords: ['proračun', 'financije', 'troškovi', 'štednja', 'novac', 'aplikacija', 'praćenje'],
    },
    hu_HU: {
      title: 'Hero Budget - Intelligens Kiadáskövetés',
      description: 'Kövesse nyomon kiadásait, állítsa be költségvetését és érje el pénzügyi céljait a Hero Budgettel. Egyszerű és hatékony alkalmazás pénze kezeléséhez.',
      keywords: ['költségvetés', 'pénzügyek', 'kiadások', 'megtakarítás', 'pénz', 'alkalmazás', 'követés'],
    },
    hi_IN: {
      title: 'Hero Budget - स्मार्ट खर्च ट्रैकर',
      description: 'Hero Budget के साथ अपने खर्चों को ट्रैक करें, अपना बजट सेट करें और अपने वित्तीय लक्ष्यों को प्राप्त करें। अपने पैसे को प्रबंधित करने के लिए एक सरल और शक्तिशाली ऐप।',
      keywords: ['बजट', 'वित्त', 'खर्च', 'बचत', 'पैसा', 'ऐप', 'ट्रैकिंग'],
    },
    id_ID: {
      title: 'Hero Budget - Pelacak Pengeluaran Cerdas',
      description: 'Lacak pengeluaran Anda, tetapkan anggaran Anda, dan capai tujuan keuangan Anda dengan Hero Budget. Aplikasi sederhana dan kuat untuk mengelola uang Anda.',
      keywords: ['anggaran', 'keuangan', 'pengeluaran', 'tabungan', 'uang', 'aplikasi', 'pelacakan'],
    },
    it_IT: {
      title: 'Hero Budget - Gestione Intelligente delle Spese',
      description: 'Traccia le tue spese, imposta il tuo budget e raggiungi i tuoi obiettivi finanziari con Hero Budget. Un\'app semplice e potente per gestire i tuoi soldi.',
      keywords: ['budget', 'finanze', 'spese', 'risparmi', 'denaro', 'app', 'tracciamento'],
    },
    ja_JP: {
      title: 'Hero Budget - スマート支出トラッカー',
      description: 'Hero Budgetで支出を追跡し、予算を設定し、財務目標を達成しましょう。お金を管理するためのシンプルで強力なアプリ。',
      keywords: ['予算', '財務', '支出', '貯蓄', 'お金', 'アプリ', '追跡'],
    },
    ko_KR: {
      title: 'Hero Budget - 스마트 지출 추적기',
      description: 'Hero Budget으로 지출을 추적하고, 예산을 설정하고, 재무 목표를 달성하세요. 돈을 관리하는 간단하고 강력한 앱입니다.',
      keywords: ['예산', '재무', '지출', '저축', '돈', '앱', '추적'],
    },
    ms_MY: {
      title: 'Hero Budget - Penjejak Perbelanjaan Pintar',
      description: 'Jejaki perbelanjaan anda, tetapkan bajet anda, dan capai matlamat kewangan anda dengan Hero Budget. Aplikasi yang mudah dan berkuasa untuk mengurus wang anda.',
      keywords: ['bajet', 'kewangan', 'perbelanjaan', 'simpanan', 'wang', 'aplikasi', 'penjejakan'],
    },
    nl_NL: {
      title: 'Hero Budget - Slimme Uitgaventracker',
      description: 'Volg je uitgaven, stel je budget in en bereik je financiële doelen met Hero Budget. Een eenvoudige en krachtige app om je geld te beheren.',
      keywords: ['budget', 'financiën', 'uitgaven', 'besparingen', 'geld', 'app', 'tracking'],
    },
    no_NO: {
      title: 'Hero Budget - Smart Utgiftssporing',
      description: 'Spor utgiftene dine, sett budsjettet ditt og nå dine økonomiske mål med Hero Budget. En enkel og kraftig app for å administrere pengene dine.',
      keywords: ['budsjett', 'økonomi', 'utgifter', 'sparing', 'penger', 'app', 'sporing'],
    },
    pl_PL: {
      title: 'Hero Budget - Inteligentny Tracker Wydatków',
      description: 'Śledź swoje wydatki, ustal swój budżet i osiągnij swoje cele finansowe z Hero Budget. Prosta i potężna aplikacja do zarządzania pieniędzmi.',
      keywords: ['budżet', 'finanse', 'wydatki', 'oszczędności', 'pieniądze', 'aplikacja', 'śledzenie'],
    },
    pt_BR: {
      title: 'Hero Budget - Rastreador Inteligente de Despesas',
      description: 'Rastreie suas despesas, defina seu orçamento e alcance seus objetivos financeiros com Hero Budget. Um aplicativo simples e poderoso para gerenciar seu dinheiro.',
      keywords: ['orçamento', 'finanças', 'despesas', 'economia', 'dinheiro', 'aplicativo', 'rastreamento'],
    },
    pt_PT: {
      title: 'Hero Budget - Gestor Inteligente de Despesas',
      description: 'Acompanhe as suas despesas, defina o seu orçamento e alcance os seus objetivos financeiros com Hero Budget. Uma aplicação simples e poderosa para gerir o seu dinheiro.',
      keywords: ['orçamento', 'finanças', 'despesas', 'poupança', 'dinheiro', 'aplicação', 'rastreamento'],
    },
    ro_RO: {
      title: 'Hero Budget - Urmăritor Inteligent de Cheltuieli',
      description: 'Urmăriți-vă cheltuielile, stabiliți-vă bugetul și atingeți-vă obiectivele financiare cu Hero Budget. O aplicație simplă și puternică pentru a vă gestiona banii.',
      keywords: ['buget', 'finanțe', 'cheltuieli', 'economii', 'bani', 'aplicație', 'urmărire'],
    },
    ru_RU: {
      title: 'Hero Budget - Умный Трекер Расходов',
      description: 'Отслеживайте свои расходы, устанавливайте бюджет и достигайте финансовых целей с Hero Budget. Простое и мощное приложение для управления деньгами.',
      keywords: ['бюджет', 'финансы', 'расходы', 'сбережения', 'деньги', 'приложение', 'отслеживание'],
    },
    sk_SK: {
      title: 'Hero Budget - Inteligentný Sledovač Výdavkov',
      description: 'Sledujte svoje výdavky, nastavte svoj rozpočet a dosiahnite svoje finančné ciele s Hero Budget. Jednoduchá a výkonná aplikácia na správu vašich peňazí.',
      keywords: ['rozpočet', 'financie', 'výdavky', 'úspory', 'peniaze', 'aplikácia', 'sledovanie'],
    },
    sv_SE: {
      title: 'Hero Budget - Smart Utgiftsspårare',
      description: 'Spåra dina utgifter, sätt din budget och uppnå dina ekonomiska mål med Hero Budget. En enkel och kraftfull app för att hantera dina pengar.',
      keywords: ['budget', 'ekonomi', 'utgifter', 'besparingar', 'pengar', 'app', 'spårning'],
    },
    th_TH: {
      title: 'Hero Budget - ตัวติดตามค่าใช้จ่ายอัจฉริยะ',
      description: 'ติดตามค่าใช้จ่าย ตั้งงบประมาณ และบรรลุเป้าหมายทางการเงินของคุณด้วย Hero Budget แอปที่เรียบง่ายและทรงพลังในการจัดการเงินของคุณ',
      keywords: ['งบประมาณ', 'การเงิน', 'ค่าใช้จ่าย', 'การออม', 'เงิน', 'แอป', 'การติดตาม'],
    },
    tr_TR: {
      title: 'Hero Budget - Akıllı Harcama Takipçisi',
      description: 'Hero Budget ile harcamalarınızı takip edin, bütçenizi belirleyin ve finansal hedeflerinize ulaşın. Paranızı yönetmek için basit ve güçlü bir uygulama.',
      keywords: ['bütçe', 'finans', 'harcamalar', 'tasarruf', 'para', 'uygulama', 'takip'],
    },
    uk_UA: {
      title: 'Hero Budget - Розумний Трекер Витрат',
      description: 'Відстежуйте свої витрати, встановлюйте бюджет і досягайте фінансових цілей з Hero Budget. Проста та потужна програма для управління вашими грошима.',
      keywords: ['бюджет', 'фінанси', 'витрати', 'заощадження', 'гроші', 'додаток', 'відстеження'],
    },
    vi_VN: {
      title: 'Hero Budget - Theo Dõi Chi Tiêu Thông Minh',
      description: 'Theo dõi chi tiêu của bạn, đặt ngân sách và đạt được mục tiêu tài chính với Hero Budget. Một ứng dụng đơn giản và mạnh mẽ để quản lý tiền của bạn.',
      keywords: ['ngân sách', 'tài chính', 'chi tiêu', 'tiết kiệm', 'tiền', 'ứng dụng', 'theo dõi'],
    },
    zh_CN: {
      title: 'Hero Budget - 智能支出追踪器',
      description: '使用Hero Budget跟踪您的支出、设置预算并实现您的财务目标。一个简单而强大的应用程序来管理您的资金。',
      keywords: ['预算', '财务', '支出', '储蓄', '金钱', '应用', '追踪'],
    },
  };

  const metadata = metadataTranslations[locale] || metadataTranslations['en_GB'];

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'website',
      locale: locale,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: LOCALE_CODES.reduce((acc, code) => {
        acc[code] = `/${code}`;
        return acc;
      }, {} as Record<string, string>),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LocaleHomePage({ params }: HomePageProps) {
  const { locale } = params;

  // Validate locale
  if (!isLocaleSupported(locale)) {
    notFound();
  }

  return (
    <PageWrapper>
      <main id="main-content" className="min-h-screen">
        {/* Header fijo */}
        <Header />

        {/* Hero Section - carga inmediata */}
        <HeroSection />

        {/* Features Section - carga inmediata para LCP */}
        <FeaturesSection />

        {/* Download Section - lazy loading */}
        <DownloadSection />

        {/* Screenshots Section - lazy loading */}
        <ScreenshotsSection />

        {/* CTA Section */}
        <CTASection />

        {/* Footer - lazy loading */}
        <Footer />
      </main>
    </PageWrapper>
  );
}

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import FAQSection from "@/components/support/FAQSection";
import ContactSection from "@/components/support/ContactSection_part2";
import TutorialsSection from "@/components/support/TutorialsSection";
import TicketSection from "@/components/support/TicketSection";
import { isLocaleSupported, LOCALE_CODES } from "@/lib/i18n/locales";

interface SupportPageProps {
  params: {
    locale: string;
  };
}

// Importación dinámica para el Footer
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-64 bg-gray-800"></div>,
});

// Generate static params for all supported locales
export async function generateStaticParams() {
  return LOCALE_CODES.map((locale) => ({
    locale: locale,
  }));
}

// Generate metadata for each locale
export async function generateMetadata({ params }: SupportPageProps): Promise<Metadata> {
  const { locale } = params;

  // Metadata translations for different languages
  const metadataTranslations: Record<string, { title: string; description: string }> = {
    ar_SA: {
      title: "الدعم",
      description: "مركز مساعدة Hero Budget. ابحث عن إجابات لأسئلتك، ودروس تعليمية مفصلة، واتصل بفريق الدعم لدينا.",
    },
    ca_ES: {
      title: "Suport",
      description: "Centre d'ajuda de Hero Budget. Troba respostes a les teves preguntes, tutorials detallats i contacta amb el nostre equip de suport.",
    },
    cs_CZ: {
      title: "Podpora",
      description: "Centrum nápovědy Hero Budget. Najděte odpovědi na vaše otázky, podrobné návody a kontaktujte náš tým podpory.",
    },
    da_DK: {
      title: "Support",
      description: "Hero Budget hjælpecenter. Find svar på dine spørgsmål, detaljerede vejledninger og kontakt vores supportteam.",
    },
    de_CH: {
      title: "Support",
      description: "Hero Budget Hilfecenter. Finden Sie Antworten auf Ihre Fragen, detaillierte Anleitungen und kontaktieren Sie unser Support-Team.",
    },
    de_DE: {
      title: "Support",
      description: "Hero Budget Hilfecenter. Finden Sie Antworten auf Ihre Fragen, detaillierte Anleitungen und kontaktieren Sie unser Support-Team.",
    },
    el_GR: {
      title: "Υποστήριξη",
      description: "Κέντρο βοήθειας Hero Budget. Βρείτε απαντήσεις στις ερωτήσεις σας, λεπτομερείς οδηγούς και επικοινωνήστε με την ομάδα υποστήριξής μας.",
    },
    en_AU: {
      title: "Support",
      description: "Hero Budget Help Centre. Find answers to your questions, detailed tutorials and contact our support team.",
    },
    en_CA: {
      title: "Support",
      description: "Hero Budget Help Centre. Find answers to your questions, detailed tutorials and contact our support team.",
    },
    en_GB: {
      title: "Support",
      description: "Hero Budget Help Centre. Find answers to your questions, detailed tutorials and contact our support team.",
    },
    en_US: {
      title: "Support",
      description: "Hero Budget Help Centre. Find answers to your questions, detailed tutorials and contact our support team.",
    },
    es_ES: {
      title: "Soporte",
      description: "Centro de ayuda de Hero Budget. Encuentra respuestas a tus preguntas, tutoriales detallados y contacta con nuestro equipo de soporte.",
    },
    es_MX: {
      title: "Soporte",
      description: "Centro de ayuda de Hero Budget. Encuentra respuestas a tus preguntas, tutoriales detallados y contacta con nuestro equipo de soporte.",
    },
    fi_FI: {
      title: "Tuki",
      description: "Hero Budget -tukikeskus. Löydä vastauksia kysymyksiisi, yksityiskohtaiset oppaat ja ota yhteyttä tukitiimiimme.",
    },
    fr_CA: {
      title: "Support",
      description: "Centre d'aide Hero Budget. Trouvez des réponses à vos questions, des tutoriels détaillés et contactez notre équipe de support.",
    },
    fr_FR: {
      title: "Support",
      description: "Centre d'aide Hero Budget. Trouvez des réponses à vos questions, des tutoriels détaillés et contactez notre équipe de support.",
    },
    he_IL: {
      title: "תמיכה",
      description: "מרכז העזרה של Hero Budget. מצא תשובות לשאלות שלך, הדרכות מפורטות ופנה לצוות התמיכה שלנו.",
    },
    hr_HR: {
      title: "Podrška",
      description: "Centar za pomoć Hero Budget. Pronađite odgovore na vaša pitanja, detaljne upute i kontaktirajte naš tim za podršku.",
    },
    hu_HU: {
      title: "Támogatás",
      description: "Hero Budget Súgóközpont. Találjon válaszokat kérdéseire, részletes oktatóanyagokat, és vegye fel a kapcsolatot ügyfélszolgálatunkkal.",
    },
    hi_IN: {
      title: "सहायता",
      description: "Hero Budget सहायता केंद्र। अपने प्रश्नों के उत्तर, विस्तृत ट्यूटोरियल ढूंढें और हमारी सहायता टीम से संपर्क करें।",
    },
    id_ID: {
      title: "Dukungan",
      description: "Pusat Bantuan Hero Budget. Temukan jawaban untuk pertanyaan Anda, tutorial terperinci dan hubungi tim dukungan kami.",
    },
    it_IT: {
      title: "Supporto",
      description: "Centro Assistenza Hero Budget. Trova le risposte alle tue domande, tutorial dettagliati e contatta il nostro team di supporto.",
    },
    ja_JP: {
      title: "サポート",
      description: "Hero Budget ヘルプセンター。ご質問への回答、詳細なチュートリアル、サポートチームへのお問い合わせができます。",
    },
    ko_KR: {
      title: "지원",
      description: "Hero Budget 도움말 센터. 질문에 대한 답변, 자세한 튜토리얼을 확인하고 지원 팀에 문의하세요.",
    },
    ms_MY: {
      title: "Sokongan",
      description: "Pusat Bantuan Hero Budget. Cari jawapan untuk soalan anda, tutorial terperinci dan hubungi pasukan sokongan kami.",
    },
    nl_NL: {
      title: "Ondersteuning",
      description: "Hero Budget Helpcentrum. Vind antwoorden op je vragen, gedetailleerde handleidingen en neem contact op met ons ondersteuningsteam.",
    },
    no_NO: {
      title: "Støtte",
      description: "Hero Budget Hjelpesenter. Finn svar på spørsmålene dine, detaljerte veiledninger og kontakt vårt supportteam.",
    },
    pl_PL: {
      title: "Wsparcie",
      description: "Centrum Pomocy Hero Budget. Znajdź odpowiedzi na swoje pytania, szczegółowe samouczki i skontaktuj się z naszym zespołem pomocy technicznej.",
    },
    pt_BR: {
      title: "Suporte",
      description: "Central de Ajuda Hero Budget. Encontre respostas para suas perguntas, tutoriais detalhados e entre em contato com nossa equipe de suporte.",
    },
    pt_PT: {
      title: "Suporte",
      description: "Centro de Ajuda Hero Budget. Encontre respostas para as suas questões, tutoriais detalhados e contacte a nossa equipa de suporte.",
    },
    ro_RO: {
      title: "Suport",
      description: "Centrul de Ajutor Hero Budget. Găsiți răspunsuri la întrebările dvs., tutoriale detaliate și contactați echipa noastră de suport.",
    },
    ru_RU: {
      title: "Поддержка",
      description: "Справочный центр Hero Budget. Найдите ответы на свои вопросы, подробные руководства и свяжитесь с нашей службой поддержки.",
    },
    sk_SK: {
      title: "Podpora",
      description: "Centrum pomoci Hero Budget. Nájdite odpovede na vaše otázky, podrobné návody a kontaktujte náš tím podpory.",
    },
    sv_SE: {
      title: "Support",
      description: "Hero Budget Hjälpcenter. Hitta svar på dina frågor, detaljerade guider och kontakta vårt supportteam.",
    },
    th_TH: {
      title: "การสนับสนุน",
      description: "ศูนย์ช่วยเหลือ Hero Budget ค้นหาคำตอบสำหรับคำถามของคุณ บทช่วยสอนโดยละเอียด และติดต่อทีมสนับสนุนของเรา",
    },
    tr_TR: {
      title: "Destek",
      description: "Hero Budget Yardım Merkezi. Sorularınızın cevaplarını, detaylı öğreticileri bulun ve destek ekibimizle iletişime geçin.",
    },
    uk_UA: {
      title: "Підтримка",
      description: "Центр допомоги Hero Budget. Знайдіть відповіді на свої питання, детальні посібники та зв'яжіться з нашою службою підтримки.",
    },
    vi_VN: {
      title: "Hỗ trợ",
      description: "Trung tâm Trợ giúp Hero Budget. Tìm câu trả lời cho các câu hỏi của bạn, hướng dẫn chi tiết và liên hệ với nhóm hỗ trợ của chúng tôi.",
    },
    zh_CN: {
      title: "支持",
      description: "Hero Budget 帮助中心。查找问题解答，详细教程，并联系我们的支持团队。",
    },
  };

  const metadata = metadataTranslations[locale] || metadataTranslations["es_ES"];

  return {
    title: `${metadata.title} - Hero Budget`,
    description: metadata.description,
    keywords: ["support", "help", "FAQ", "contact", "hero budget", "assistance"],
    openGraph: {
      title: `${metadata.title} - Hero Budget`,
      description: metadata.description,
      type: "website",
      locale: locale,
    },
    alternates: {
      canonical: `/soporte/${locale}`,
      languages: LOCALE_CODES.reduce((acc, code) => {
        acc[code] = `/soporte/${code}`;
        return acc;
      }, {} as Record<string, string>),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function SupportPage({ params }: SupportPageProps) {
  const { locale } = params;

  // Validate locale
  if (!isLocaleSupported(locale)) {
    notFound();
  }

  return (
    <>
      {/* Header fijo */}
      <Header />

      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}

        {/* FAQ Section */}
        <FAQSection locale={locale} />

        {/* Ticket Section */}
        <TicketSection locale={locale} />

        {/* Contact Section */}
        <ContactSection locale={locale} />
      </main>

      {/* Footer */}
      <Footer locale={locale} />
    </>
  );
}

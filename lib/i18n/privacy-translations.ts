/**
 * Privacy Page Translations
 * Comprehensive translations for all supported languages
 */

export interface PrivacyTranslations {
  hero: {
    title: string;
    subtitle: string;
    lastUpdated: string;
  };
  policy: {
    title: string;
    intro: string;
    sections: {
      dataCollection: {
        title: string;
        content: string;
      };
      dataUsage: {
        title: string;
        content: string;
      };
      dataSecurity: {
        title: string;
        content: string;
      };
    };
  };
  dataProtection: {
    title: string;
    subtitle: string;
    encryption: string;
    storage: string;
    access: string;
  };
  userRights: {
    title: string;
    subtitle: string;
    rights: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
  };
}

// English (British) - Default
const en_GB: PrivacyTranslations = {
  hero: {
    title: 'Privacy Policy',
    subtitle: 'Your privacy matters to us. Learn how we protect your personal information.',
    lastUpdated: 'Last updated',
  },
  policy: {
    title: 'Our Privacy Commitment',
    intro: 'Hero Budget is committed to protecting your privacy and ensuring the security of your personal information.',
    sections: {
      dataCollection: {
        title: 'Data Collection',
        content: 'We collect only the information necessary to provide you with the best budgeting experience.',
      },
      dataUsage: {
        title: 'How We Use Your Data',
        content: 'Your data is used solely to improve your experience and provide personalised financial insights.',
      },
      dataSecurity: {
        title: 'Data Security',
        content: 'We implement industry-standard security measures to protect your information.',
      },
    },
  },
  dataProtection: {
    title: 'Data Protection',
    subtitle: 'How we keep your information safe',
    encryption: 'End-to-end encryption for all data',
    storage: 'Secure cloud storage with regular backups',
    access: 'Strict access controls and authentication',
  },
  userRights: {
    title: 'Your Rights',
    subtitle: 'You have control over your data',
    rights: [
      'Access your personal data',
      'Request data correction',
      'Delete your account and data',
      'Export your information',
      'Opt-out of marketing communications',
    ],
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'Have questions about our privacy policy?',
    email: 'privacy@herobudget.app',
  },
};

// Spanish (Spain)
const es_ES: PrivacyTranslations = {
  hero: {
    title: 'Política de Privacidad',
    subtitle: 'Tu privacidad nos importa. Descubre cómo protegemos tu información personal.',
    lastUpdated: 'Última actualización',
  },
  policy: {
    title: 'Nuestro Compromiso de Privacidad',
    intro: 'Hero Budget se compromete a proteger tu privacidad y garantizar la seguridad de tu información personal.',
    sections: {
      dataCollection: {
        title: 'Recopilación de Datos',
        content: 'Recopilamos únicamente la información necesaria para ofrecerte la mejor experiencia de presupuesto.',
      },
      dataUsage: {
        title: 'Cómo Usamos tus Datos',
        content: 'Tus datos se utilizan exclusivamente para mejorar tu experiencia y proporcionar información financiera personalizada.',
      },
      dataSecurity: {
        title: 'Seguridad de Datos',
        content: 'Implementamos medidas de seguridad estándar de la industria para proteger tu información.',
      },
    },
  },
  dataProtection: {
    title: 'Protección de Datos',
    subtitle: 'Cómo mantenemos segura tu información',
    encryption: 'Cifrado de extremo a extremo para todos los datos',
    storage: 'Almacenamiento seguro en la nube con copias de seguridad regulares',
    access: 'Controles de acceso estrictos y autenticación',
  },
  userRights: {
    title: 'Tus Derechos',
    subtitle: 'Tienes control sobre tus datos',
    rights: [
      'Acceder a tus datos personales',
      'Solicitar corrección de datos',
      'Eliminar tu cuenta y datos',
      'Exportar tu información',
      'Darte de baja de comunicaciones de marketing',
    ],
  },
  contact: {
    title: 'Contáctanos',
    subtitle: '¿Tienes preguntas sobre nuestra política de privacidad?',
    email: 'privacy@herobudget.app',
  },
};

// French (France)
const fr_FR: PrivacyTranslations = {
  hero: {
    title: 'Politique de Confidentialité',
    subtitle: 'Votre vie privée nous tient à cœur. Découvrez comment nous protégeons vos informations personnelles.',
    lastUpdated: 'Dernière mise à jour',
  },
  policy: {
    title: 'Notre Engagement en matière de Confidentialité',
    intro: 'Hero Budget s\'engage à protéger votre vie privée et à garantir la sécurité de vos informations personnelles.',
    sections: {
      dataCollection: {
        title: 'Collecte de Données',
        content: 'Nous ne collectons que les informations nécessaires pour vous offrir la meilleure expérience budgétaire.',
      },
      dataUsage: {
        title: 'Comment Nous Utilisons Vos Données',
        content: 'Vos données sont utilisées uniquement pour améliorer votre expérience et fournir des informations financières personnalisées.',
      },
      dataSecurity: {
        title: 'Sécurité des Données',
        content: 'Nous mettons en œuvre des mesures de sécurité conformes aux normes de l\'industrie pour protéger vos informations.',
      },
    },
  },
  dataProtection: {
    title: 'Protection des Données',
    subtitle: 'Comment nous protégeons vos informations',
    encryption: 'Chiffrement de bout en bout pour toutes les données',
    storage: 'Stockage cloud sécurisé avec sauvegardes régulières',
    access: 'Contrôles d\'accès stricts et authentification',
  },
  userRights: {
    title: 'Vos Droits',
    subtitle: 'Vous contrôlez vos données',
    rights: [
      'Accéder à vos données personnelles',
      'Demander la correction des données',
      'Supprimer votre compte et vos données',
      'Exporter vos informations',
      'Se désabonner des communications marketing',
    ],
  },
  contact: {
    title: 'Nous Contacter',
    subtitle: 'Des questions sur notre politique de confidentialité ?',
    email: 'privacy@herobudget.app',
  },
};

// German (Germany)
const de_DE: PrivacyTranslations = {
  hero: {
    title: 'Datenschutzrichtlinie',
    subtitle: 'Ihre Privatsphäre ist uns wichtig. Erfahren Sie, wie wir Ihre persönlichen Daten schützen.',
    lastUpdated: 'Zuletzt aktualisiert',
  },
  policy: {
    title: 'Unser Datenschutz-Versprechen',
    intro: 'Hero Budget verpflichtet sich, Ihre Privatsphäre zu schützen und die Sicherheit Ihrer persönlichen Daten zu gewährleisten.',
    sections: {
      dataCollection: {
        title: 'Datenerfassung',
        content: 'Wir erfassen nur die Informationen, die notwendig sind, um Ihnen die beste Budget-Erfahrung zu bieten.',
      },
      dataUsage: {
        title: 'Wie Wir Ihre Daten Verwenden',
        content: 'Ihre Daten werden ausschließlich verwendet, um Ihre Erfahrung zu verbessern und personalisierte finanzielle Einblicke zu bieten.',
      },
      dataSecurity: {
        title: 'Datensicherheit',
        content: 'Wir implementieren branchenübliche Sicherheitsmaßnahmen zum Schutz Ihrer Informationen.',
      },
    },
  },
  dataProtection: {
    title: 'Datenschutz',
    subtitle: 'Wie wir Ihre Informationen schützen',
    encryption: 'Ende-zu-Ende-Verschlüsselung für alle Daten',
    storage: 'Sicherer Cloud-Speicher mit regelmäßigen Backups',
    access: 'Strenge Zugriffskontrollen und Authentifizierung',
  },
  userRights: {
    title: 'Ihre Rechte',
    subtitle: 'Sie haben die Kontrolle über Ihre Daten',
    rights: [
      'Zugriff auf Ihre persönlichen Daten',
      'Datenkorrektur anfordern',
      'Ihr Konto und Ihre Daten löschen',
      'Ihre Informationen exportieren',
      'Marketing-Kommunikation abbestellen',
    ],
  },
  contact: {
    title: 'Kontaktieren Sie Uns',
    subtitle: 'Haben Sie Fragen zu unserer Datenschutzrichtlinie?',
    email: 'privacy@herobudget.app',
  },
};

// Italian (Italy)
const it_IT: PrivacyTranslations = {
  hero: {
    title: 'Informativa sulla Privacy',
    subtitle: 'La tua privacy è importante per noi. Scopri come proteggiamo le tue informazioni personali.',
    lastUpdated: 'Ultimo aggiornamento',
  },
  policy: {
    title: 'Il Nostro Impegno per la Privacy',
    intro: 'Hero Budget si impegna a proteggere la tua privacy e garantire la sicurezza delle tue informazioni personali.',
    sections: {
      dataCollection: {
        title: 'Raccolta Dati',
        content: 'Raccogliamo solo le informazioni necessarie per offrirti la migliore esperienza di budgeting.',
      },
      dataUsage: {
        title: 'Come Utilizziamo i Tuoi Dati',
        content: 'I tuoi dati vengono utilizzati esclusivamente per migliorare la tua esperienza e fornire informazioni finanziarie personalizzate.',
      },
      dataSecurity: {
        title: 'Sicurezza dei Dati',
        content: 'Implementiamo misure di sicurezza standard del settore per proteggere le tue informazioni.',
      },
    },
  },
  dataProtection: {
    title: 'Protezione dei Dati',
    subtitle: 'Come proteggiamo le tue informazioni',
    encryption: 'Crittografia end-to-end per tutti i dati',
    storage: 'Archiviazione cloud sicura con backup regolari',
    access: 'Controlli di accesso rigorosi e autenticazione',
  },
  userRights: {
    title: 'I Tuoi Diritti',
    subtitle: 'Hai il controllo sui tuoi dati',
    rights: [
      'Accedere ai tuoi dati personali',
      'Richiedere la correzione dei dati',
      'Eliminare il tuo account e i dati',
      'Esportare le tue informazioni',
      'Annullare l\'iscrizione alle comunicazioni di marketing',
    ],
  },
  contact: {
    title: 'Contattaci',
    subtitle: 'Hai domande sulla nostra informativa sulla privacy?',
    email: 'privacy@herobudget.app',
  },
};

// Portuguese (Brazil)
const pt_BR: PrivacyTranslations = {
  hero: {
    title: 'Política de Privacidade',
    subtitle: 'Sua privacidade importa para nós. Saiba como protegemos suas informações pessoais.',
    lastUpdated: 'Última atualização',
  },
  policy: {
    title: 'Nosso Compromisso com a Privacidade',
    intro: 'O Hero Budget está comprometido em proteger sua privacidade e garantir a segurança de suas informações pessoais.',
    sections: {
      dataCollection: {
        title: 'Coleta de Dados',
        content: 'Coletamos apenas as informações necessárias para oferecer a melhor experiência de orçamento.',
      },
      dataUsage: {
        title: 'Como Usamos Seus Dados',
        content: 'Seus dados são usados exclusivamente para melhorar sua experiência e fornecer insights financeiros personalizados.',
      },
      dataSecurity: {
        title: 'Segurança de Dados',
        content: 'Implementamos medidas de segurança padrão do setor para proteger suas informações.',
      },
    },
  },
  dataProtection: {
    title: 'Proteção de Dados',
    subtitle: 'Como mantemos suas informações seguras',
    encryption: 'Criptografia de ponta a ponta para todos os dados',
    storage: 'Armazenamento em nuvem seguro com backups regulares',
    access: 'Controles de acesso rigorosos e autenticação',
  },
  userRights: {
    title: 'Seus Direitos',
    subtitle: 'Você tem controle sobre seus dados',
    rights: [
      'Acessar seus dados pessoais',
      'Solicitar correção de dados',
      'Excluir sua conta e dados',
      'Exportar suas informações',
      'Cancelar comunicações de marketing',
    ],
  },
  contact: {
    title: 'Entre em Contato',
    subtitle: 'Tem dúvidas sobre nossa política de privacidade?',
    email: 'privacy@herobudget.app',
  },
};

// Japanese (Japan)
const ja_JP: PrivacyTranslations = {
  hero: {
    title: 'プライバシーポリシー',
    subtitle: 'お客様のプライバシーを大切にしています。個人情報の保護方法をご確認ください。',
    lastUpdated: '最終更新日',
  },
  policy: {
    title: 'プライバシーへの取り組み',
    intro: 'Hero Budgetは、お客様のプライバシーを保護し、個人情報のセキュリティを確保することをお約束します。',
    sections: {
      dataCollection: {
        title: 'データ収集',
        content: '最高の予算管理体験を提供するために必要な情報のみを収集します。',
      },
      dataUsage: {
        title: 'データの使用方法',
        content: 'お客様のデータは、体験の向上とパーソナライズされた財務インサイトの提供にのみ使用されます。',
      },
      dataSecurity: {
        title: 'データセキュリティ',
        content: '業界標準のセキュリティ対策を実施して、お客様の情報を保護します。',
      },
    },
  },
  dataProtection: {
    title: 'データ保護',
    subtitle: '情報の安全性を確保する方法',
    encryption: 'すべてのデータに対するエンドツーエンド暗号化',
    storage: '定期的なバックアップを伴う安全なクラウドストレージ',
    access: '厳格なアクセス制御と認証',
  },
  userRights: {
    title: 'お客様の権利',
    subtitle: 'お客様はデータを管理できます',
    rights: [
      '個人データへのアクセス',
      'データ修正のリクエスト',
      'アカウントとデータの削除',
      '情報のエクスポート',
      'マーケティング通信のオプトアウト',
    ],
  },
  contact: {
    title: 'お問い合わせ',
    subtitle: 'プライバシーポリシーに関するご質問は？',
    email: 'privacy@herobudget.app',
  },
};

// Chinese (China)
const zh_CN: PrivacyTranslations = {
  hero: {
    title: '隐私政策',
    subtitle: '您的隐私对我们很重要。了解我们如何保护您的个人信息。',
    lastUpdated: '最后更新',
  },
  policy: {
    title: '我们的隐私承诺',
    intro: 'Hero Budget致力于保护您的隐私并确保您个人信息的安全。',
    sections: {
      dataCollection: {
        title: '数据收集',
        content: '我们仅收集为您提供最佳预算体验所需的信息。',
      },
      dataUsage: {
        title: '我们如何使用您的数据',
        content: '您的数据仅用于改善您的体验并提供个性化的财务见解。',
      },
      dataSecurity: {
        title: '数据安全',
        content: '我们实施行业标准的安全措施来保护您的信息。',
      },
    },
  },
  dataProtection: {
    title: '数据保护',
    subtitle: '我们如何保护您的信息安全',
    encryption: '所有数据端到端加密',
    storage: '定期备份的安全云存储',
    access: '严格的访问控制和身份验证',
  },
  userRights: {
    title: '您的权利',
    subtitle: '您可以控制您的数据',
    rights: [
      '访问您的个人数据',
      '请求数据更正',
      '删除您的账户和数据',
      '导出您的信息',
      '退出营销通信',
    ],
  },
  contact: {
    title: '联系我们',
    subtitle: '对我们的隐私政策有疑问？',
    email: 'privacy@herobudget.app',
  },
};

// Korean (South Korea)
const ko_KR: PrivacyTranslations = {
  hero: {
    title: '개인정보 보호정책',
    subtitle: '귀하의 개인정보 보호는 저희에게 중요합니다. 개인정보 보호 방법을 알아보세요.',
    lastUpdated: '최종 업데이트',
  },
  policy: {
    title: '개인정보 보호 약속',
    intro: 'Hero Budget은 귀하의 개인정보를 보호하고 개인정보의 보안을 보장하기 위해 최선을 다하고 있습니다.',
    sections: {
      dataCollection: {
        title: '데이터 수집',
        content: '최고의 예산 관리 경험을 제공하는 데 필요한 정보만 수집합니다.',
      },
      dataUsage: {
        title: '데이터 사용 방법',
        content: '귀하의 데이터는 경험을 개선하고 맞춤형 재무 인사이트를 제공하는 데만 사용됩니다.',
      },
      dataSecurity: {
        title: '데이터 보안',
        content: '귀하의 정보를 보호하기 위해 업계 표준 보안 조치를 구현합니다.',
      },
    },
  },
  dataProtection: {
    title: '데이터 보호',
    subtitle: '정보를 안전하게 보호하는 방법',
    encryption: '모든 데이터에 대한 엔드투엔드 암호화',
    storage: '정기적인 백업을 통한 안전한 클라우드 스토리지',
    access: '엄격한 액세스 제어 및 인증',
  },
  userRights: {
    title: '귀하의 권리',
    subtitle: '귀하는 데이터를 제어할 수 있습니다',
    rights: [
      '개인 데이터 액세스',
      '데이터 수정 요청',
      '계정 및 데이터 삭제',
      '정보 내보내기',
      '마케팅 커뮤니케이션 수신 거부',
    ],
  },
  contact: {
    title: '문의하기',
    subtitle: '개인정보 보호정책에 대한 질문이 있으신가요?',
    email: 'privacy@herobudget.app',
  },
};

// Russian (Russia)
const ru_RU: PrivacyTranslations = {
  hero: {
    title: 'Политика конфиденциальности',
    subtitle: 'Ваша конфиденциальность важна для нас. Узнайте, как мы защищаем вашу личную информацию.',
    lastUpdated: 'Последнее обновление',
  },
  policy: {
    title: 'Наше обязательство по конфиденциальности',
    intro: 'Hero Budget обязуется защищать вашу конфиденциальность и обеспечивать безопасность вашей личной информации.',
    sections: {
      dataCollection: {
        title: 'Сбор данных',
        content: 'Мы собираем только информацию, необходимую для предоставления вам наилучшего опыта составления бюджета.',
      },
      dataUsage: {
        title: 'Как мы используем ваши данные',
        content: 'Ваши данные используются исключительно для улучшения вашего опыта и предоставления персонализированных финансовых аналитических данных.',
      },
      dataSecurity: {
        title: 'Безопасность данных',
        content: 'Мы применяем стандартные отраслевые меры безопасности для защиты вашей информации.',
      },
    },
  },
  dataProtection: {
    title: 'Защита данных',
    subtitle: 'Как мы обеспечиваем безопасность вашей информации',
    encryption: 'Сквозное шифрование для всех данных',
    storage: 'Безопасное облачное хранилище с регулярными резервными копиями',
    access: 'Строгий контроль доступа и аутентификация',
  },
  userRights: {
    title: 'Ваши права',
    subtitle: 'Вы контролируете свои данные',
    rights: [
      'Доступ к вашим личным данным',
      'Запрос на исправление данных',
      'Удаление вашей учетной записи и данных',
      'Экспорт вашей информации',
      'Отказ от маркетинговых коммуникаций',
    ],
  },
  contact: {
    title: 'Свяжитесь с нами',
    subtitle: 'Есть вопросы о нашей политике конфиденциальности?',
    email: 'privacy@herobudget.app',
  },
};

// Map all translations
export const PRIVACY_TRANSLATIONS: Record<string, PrivacyTranslations> = {
  // English variants
  en_GB,
  en_US: en_GB, // Use British English for US
  en_CA: en_GB, // Use British English for Canada

  // Spanish variants
  es_ES,
  es_MX: es_ES, // Use Spain Spanish for Mexico

  // French variants
  fr_FR,
  fr_CA: fr_FR, // Use France French for Canada

  // German variants
  de_DE,
  de_CH: de_DE, // Use German for Switzerland

  // Italian
  it_IT,

  // Portuguese variants
  pt_BR,
  pt_PT: pt_BR, // Use Brazil Portuguese for Portugal

  // Asian languages
  ja_JP,
  zh_CN,
  ko_KR,

  // Russian
  ru_RU,

  // For other languages without full translations, use English as fallback
  ar_SA: en_GB,
  ca_ES: es_ES, // Catalan uses Spanish
  cs_CZ: en_GB,
  da_DK: en_GB,
  fi_FI: en_GB,
  he_IL: en_GB,
  hi_IN: en_GB,
  id_ID: en_GB,
  nl_NL: en_GB,
  no_NO: en_GB,
  pl_PL: en_GB,
  sv_SE: en_GB,
  th_TH: en_GB,
  tr_TR: en_GB,
  uk_UA: ru_RU, // Ukrainian uses Russian
  vi_VN: en_GB,
};

// Helper function to get translations for a locale
export function getPrivacyTranslations(locale: string): PrivacyTranslations {
  return PRIVACY_TRANSLATIONS[locale] || PRIVACY_TRANSLATIONS['en_GB'];
}

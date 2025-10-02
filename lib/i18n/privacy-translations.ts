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

// Arabic (Saudi Arabia)
const ar_SA: PrivacyTranslations = {
  hero: {
    title: 'سياسة الخصوصية',
    subtitle: 'خصوصيتك مهمة بالنسبة لنا. تعرف على كيفية حماية معلوماتك الشخصية.',
    lastUpdated: 'آخر تحديث',
  },
  policy: {
    title: 'التزامنا بالخصوصية',
    intro: 'يلتزم Hero Budget بحماية خصوصيتك وضمان أمان معلوماتك الشخصية.',
    sections: {
      dataCollection: {
        title: 'جمع البيانات',
        content: 'نجمع فقط المعلومات الضرورية لتزويدك بأفضل تجربة لإدارة الميزانية.',
      },
      dataUsage: {
        title: 'كيف نستخدم بياناتك',
        content: 'تُستخدم بياناتك فقط لتحسين تجربتك وتقديم رؤى مالية مخصصة.',
      },
      dataSecurity: {
        title: 'أمان البيانات',
        content: 'نطبق تدابير أمنية معيارية في الصناعة لحماية معلوماتك.',
      },
    },
  },
  dataProtection: {
    title: 'حماية البيانات',
    subtitle: 'كيف نحافظ على أمان معلوماتك',
    encryption: 'تشفير شامل لجميع البيانات',
    storage: 'تخزين سحابي آمن مع نسخ احتياطية منتظمة',
    access: 'ضوابط وصول صارمة ومصادقة',
  },
  userRights: {
    title: 'حقوقك',
    subtitle: 'لديك السيطرة على بياناتك',
    rights: [
      'الوصول إلى بياناتك الشخصية',
      'طلب تصحيح البيانات',
      'حذف حسابك وبياناتك',
      'تصدير معلوماتك',
      'إلغاء الاشتراك في الاتصالات التسويقية',
    ],
  },
  contact: {
    title: 'اتصل بنا',
    subtitle: 'هل لديك أسئلة حول سياسة الخصوصية الخاصة بنا؟',
    email: 'privacy@herobudget.app',
  },
};

// Catalan (Spain)
const ca_ES: PrivacyTranslations = {
  hero: {
    title: 'Política de Privadesa',
    subtitle: 'La teva privadesa ens importa. Descobreix com protegim la teva informació personal.',
    lastUpdated: 'Última actualització',
  },
  policy: {
    title: 'El Nostre Compromís amb la Privadesa',
    intro: 'Hero Budget es compromet a protegir la teva privadesa i garantir la seguretat de la teva informació personal.',
    sections: {
      dataCollection: {
        title: 'Recollida de Dades',
        content: 'Només recopilem la informació necessària per oferir-te la millor experiència de pressupost.',
      },
      dataUsage: {
        title: 'Com Utilitzem les Teves Dades',
        content: 'Les teves dades s\'utilitzen exclusivament per millorar la teva experiència i proporcionar informació financera personalitzada.',
      },
      dataSecurity: {
        title: 'Seguretat de Dades',
        content: 'Implementem mesures de seguretat estàndard de la indústria per protegir la teva informació.',
      },
    },
  },
  dataProtection: {
    title: 'Protecció de Dades',
    subtitle: 'Com mantenim segura la teva informació',
    encryption: 'Xifratge d\'extrem a extrem per a totes les dades',
    storage: 'Emmagatzematge segur al núvol amb còpies de seguretat regulars',
    access: 'Controls d\'accés estrictes i autenticació',
  },
  userRights: {
    title: 'Els Teus Drets',
    subtitle: 'Tens el control sobre les teves dades',
    rights: [
      'Accedir a les teves dades personals',
      'Sol·licitar correcció de dades',
      'Eliminar el teu compte i dades',
      'Exportar la teva informació',
      'Donar-te de baixa de comunicacions de màrqueting',
    ],
  },
  contact: {
    title: 'Contacta\'ns',
    subtitle: 'Tens preguntes sobre la nostra política de privadesa?',
    email: 'privacy@herobudget.app',
  },
};

// Czech (Czech Republic)
const cs_CZ: PrivacyTranslations = {
  hero: {
    title: 'Zásady Ochrany Osobních Údajů',
    subtitle: 'Vaše soukromí je pro nás důležité. Zjistěte, jak chráníme vaše osobní údaje.',
    lastUpdated: 'Poslední aktualizace',
  },
  policy: {
    title: 'Náš Závazek k Ochraně Soukromí',
    intro: 'Hero Budget se zavazuje chránit vaše soukromí a zajistit bezpečnost vašich osobních údajů.',
    sections: {
      dataCollection: {
        title: 'Shromažďování Údajů',
        content: 'Shromažďujeme pouze informace nezbytné k tomu, abychom vám poskytli nejlepší zkušenost s rozpočtem.',
      },
      dataUsage: {
        title: 'Jak Používáme Vaše Údaje',
        content: 'Vaše údaje jsou používány výhradně ke zlepšení vaší zkušenosti a poskytování personalizovaných finančních přehledů.',
      },
      dataSecurity: {
        title: 'Zabezpečení Údajů',
        content: 'Implementujeme standardní bezpečnostní opatření k ochraně vašich informací.',
      },
    },
  },
  dataProtection: {
    title: 'Ochrana Údajů',
    subtitle: 'Jak udržujeme vaše informace v bezpečí',
    encryption: 'Šifrování typu end-to-end pro všechna data',
    storage: 'Bezpečné cloudové úložiště s pravidelnými zálohami',
    access: 'Přísné kontroly přístupu a ověřování',
  },
  userRights: {
    title: 'Vaše Práva',
    subtitle: 'Máte kontrolu nad svými údaji',
    rights: [
      'Přístup k vašim osobním údajům',
      'Žádost o opravu údajů',
      'Smazání vašeho účtu a údajů',
      'Export vašich informací',
      'Odhlášení z marketingových komunikací',
    ],
  },
  contact: {
    title: 'Kontaktujte Nás',
    subtitle: 'Máte otázky ohledně našich zásad ochrany osobních údajů?',
    email: 'privacy@herobudget.app',
  },
};

// Danish (Denmark)
const da_DK: PrivacyTranslations = {
  hero: {
    title: 'Fortrolighedspolitik',
    subtitle: 'Dit privatliv betyder noget for os. Lær hvordan vi beskytter dine personlige oplysninger.',
    lastUpdated: 'Sidst opdateret',
  },
  policy: {
    title: 'Vores Forpligtelse til Privatliv',
    intro: 'Hero Budget er forpligtet til at beskytte dit privatliv og sikre sikkerheden af dine personlige oplysninger.',
    sections: {
      dataCollection: {
        title: 'Dataindsamling',
        content: 'Vi indsamler kun de oplysninger, der er nødvendige for at give dig den bedste budgetoplevelse.',
      },
      dataUsage: {
        title: 'Hvordan Vi Bruger Dine Data',
        content: 'Dine data bruges udelukkende til at forbedre din oplevelse og levere personlig finansiel indsigt.',
      },
      dataSecurity: {
        title: 'Datasikkerhed',
        content: 'Vi implementerer industristandard sikkerhedsforanstaltninger for at beskytte dine oplysninger.',
      },
    },
  },
  dataProtection: {
    title: 'Databeskyttelse',
    subtitle: 'Hvordan vi holder dine oplysninger sikre',
    encryption: 'End-to-end kryptering for alle data',
    storage: 'Sikker cloud-lagring med regelmæssige sikkerhedskopier',
    access: 'Strenge adgangskontroller og godkendelse',
  },
  userRights: {
    title: 'Dine Rettigheder',
    subtitle: 'Du har kontrol over dine data',
    rights: [
      'Få adgang til dine personlige data',
      'Anmod om datarettelse',
      'Slet din konto og data',
      'Eksporter dine oplysninger',
      'Frameld marketingkommunikation',
    ],
  },
  contact: {
    title: 'Kontakt Os',
    subtitle: 'Har du spørgsmål om vores fortrolighedspolitik?',
    email: 'privacy@herobudget.app',
  },
};

// German (Switzerland)
const de_CH: PrivacyTranslations = {
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
        content: 'Ihre Daten werden ausschliesslich verwendet, um Ihre Erfahrung zu verbessern und personalisierte finanzielle Einblicke zu bieten.',
      },
      dataSecurity: {
        title: 'Datensicherheit',
        content: 'Wir implementieren branchenübliche Sicherheitsmassnahmen zum Schutz Ihrer Informationen.',
      },
    },
  },
  dataProtection: {
    title: 'Datenschutz',
    subtitle: 'Wie wir Ihre Informationen schützen',
    encryption: 'Ende-zu-Ende-Verschlüsselung für alle Daten',
    storage: 'Sicherer Cloud-Speicher mit regelmässigen Backups',
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

// English (Canada)
const en_CA: PrivacyTranslations = {
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
        content: 'Your data is used solely to improve your experience and provide personalized financial insights.',
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

// English (United States)
const en_US: PrivacyTranslations = {
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
        content: 'Your data is used solely to improve your experience and provide personalized financial insights.',
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

// Spanish (Mexico)
const es_MX: PrivacyTranslations = {
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
    storage: 'Almacenamiento seguro en la nube con respaldos regulares',
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

// Finnish (Finland)
const fi_FI: PrivacyTranslations = {
  hero: {
    title: 'Tietosuojakäytäntö',
    subtitle: 'Yksityisyytesi on meille tärkeää. Opi kuinka suojaamme henkilötietojasi.',
    lastUpdated: 'Viimeksi päivitetty',
  },
  policy: {
    title: 'Tietosuojasitoumuksemme',
    intro: 'Hero Budget sitoutuu suojaamaan yksityisyyttäsi ja varmistamaan henkilötietojesi turvallisuuden.',
    sections: {
      dataCollection: {
        title: 'Tietojen Keruu',
        content: 'Keräämme vain tiedot, jotka ovat tarpeen parhaan budjetointikokemuksen tarjoamiseksi.',
      },
      dataUsage: {
        title: 'Kuinka Käytämme Tietojasi',
        content: 'Tietojasi käytetään yksinomaan kokemuksesi parantamiseen ja henkilökohtaisten taloudellisten näkemysten tarjoamiseen.',
      },
      dataSecurity: {
        title: 'Tietoturva',
        content: 'Toteutamme alan standardien mukaisia turvatoimia tietojesi suojaamiseksi.',
      },
    },
  },
  dataProtection: {
    title: 'Tietosuoja',
    subtitle: 'Kuinka pidämme tietosi turvassa',
    encryption: 'Päästä päähän -salaus kaikille tiedoille',
    storage: 'Turvallinen pilvitallennus säännöllisillä varmuuskopioilla',
    access: 'Tiukat pääsynvalvonnat ja todennus',
  },
  userRights: {
    title: 'Oikeutesi',
    subtitle: 'Sinulla on hallinta tiedoistasi',
    rights: [
      'Pääsy henkilötietoihisi',
      'Pyydä tietojen korjausta',
      'Poista tilisi ja tietosi',
      'Vie tietosi',
      'Kieltäydy markkinointiviestinnästä',
    ],
  },
  contact: {
    title: 'Ota Yhteyttä',
    subtitle: 'Onko sinulla kysyttävää tietosuojakäytännöstämme?',
    email: 'privacy@herobudget.app',
  },
};

// French (Canada)
const fr_CA: PrivacyTranslations = {
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
    storage: 'Stockage infonuagique sécurisé avec sauvegardes régulières',
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

// Hebrew (Israel)
const he_IL: PrivacyTranslations = {
  hero: {
    title: 'מדיניות פרטיות',
    subtitle: 'הפרטיות שלך חשובה לנו. למד כיצד אנו מגנים על המידע האישי שלך.',
    lastUpdated: 'עודכן לאחרונה',
  },
  policy: {
    title: 'ההתחייבות שלנו לפרטיות',
    intro: 'Hero Budget מתחייב להגן על פרטיותך ולהבטיח את אבטחת המידע האישי שלך.',
    sections: {
      dataCollection: {
        title: 'איסוף נתונים',
        content: 'אנו אוספים רק את המידע הדרוש כדי לספק לך את חוויית התקציב הטובה ביותר.',
      },
      dataUsage: {
        title: 'כיצד אנו משתמשים בנתונים שלך',
        content: 'הנתונים שלך משמשים אך ורק לשיפור החוויה שלך ולמתן תובנות פיננסיות מותאמות אישית.',
      },
      dataSecurity: {
        title: 'אבטחת נתונים',
        content: 'אנו מיישמים אמצעי אבטחה סטנדרטיים בתעשייה כדי להגן על המידע שלך.',
      },
    },
  },
  dataProtection: {
    title: 'הגנת נתונים',
    subtitle: 'כיצד אנו שומרים על המידע שלך בטוח',
    encryption: 'הצפנה מקצה לקצה לכל הנתונים',
    storage: 'אחסון ענן מאובטח עם גיבויים קבועים',
    access: 'בקרות גישה מחמירות ואימות',
  },
  userRights: {
    title: 'הזכויות שלך',
    subtitle: 'יש לך שליטה על הנתונים שלך',
    rights: [
      'גישה לנתונים האישיים שלך',
      'בקשת תיקון נתונים',
      'מחיקת החשבון והנתונים שלך',
      'ייצוא המידע שלך',
      'ביטול הרשמה לתקשורת שיווקית',
    ],
  },
  contact: {
    title: 'צור קשר',
    subtitle: 'יש לך שאלות על מדיניות הפרטיות שלנו?',
    email: 'privacy@herobudget.app',
  },
};

// Hindi (India)
const hi_IN: PrivacyTranslations = {
  hero: {
    title: 'गोपनीयता नीति',
    subtitle: 'आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। जानें कि हम आपकी व्यक्तिगत जानकारी की सुरक्षा कैसे करते हैं।',
    lastUpdated: 'अंतिम अपडेट',
  },
  policy: {
    title: 'हमारी गोपनीयता प्रतिबद्धता',
    intro: 'Hero Budget आपकी गोपनीयता की रक्षा करने और आपकी व्यक्तिगत जानकारी की सुरक्षा सुनिश्चित करने के लिए प्रतिबद्ध है।',
    sections: {
      dataCollection: {
        title: 'डेटा संग्रह',
        content: 'हम केवल वह जानकारी एकत्र करते हैं जो आपको सर्वोत्तम बजट अनुभव प्रदान करने के लिए आवश्यक है।',
      },
      dataUsage: {
        title: 'हम आपके डेटा का उपयोग कैसे करते हैं',
        content: 'आपके डेटा का उपयोग केवल आपके अनुभव को बेहतर बनाने और व्यक्तिगत वित्तीय अंतर्दृष्टि प्रदान करने के लिए किया जाता है।',
      },
      dataSecurity: {
        title: 'डेटा सुरक्षा',
        content: 'हम आपकी जानकारी की सुरक्षा के लिए उद्योग-मानक सुरक्षा उपाय लागू करते हैं।',
      },
    },
  },
  dataProtection: {
    title: 'डेटा सुरक्षा',
    subtitle: 'हम आपकी जानकारी को कैसे सुरक्षित रखते हैं',
    encryption: 'सभी डेटा के लिए एंड-टू-एंड एन्क्रिप्शन',
    storage: 'नियमित बैकअप के साथ सुरक्षित क्लाउड स्टोरेज',
    access: 'सख्त पहुंच नियंत्रण और प्रमाणीकरण',
  },
  userRights: {
    title: 'आपके अधिकार',
    subtitle: 'आपके डेटा पर आपका नियंत्रण है',
    rights: [
      'अपने व्यक्तिगत डेटा तक पहुंचें',
      'डेटा सुधार का अनुरोध करें',
      'अपना खाता और डेटा हटाएं',
      'अपनी जानकारी निर्यात करें',
      'मार्केटिंग संचार से ऑप्ट-आउट करें',
    ],
  },
  contact: {
    title: 'हमसे संपर्क करें',
    subtitle: 'हमारी गोपनीयता नीति के बारे में प्रश्न हैं?',
    email: 'privacy@herobudget.app',
  },
};

// Indonesian (Indonesia)
const id_ID: PrivacyTranslations = {
  hero: {
    title: 'Kebijakan Privasi',
    subtitle: 'Privasi Anda penting bagi kami. Pelajari bagaimana kami melindungi informasi pribadi Anda.',
    lastUpdated: 'Terakhir diperbarui',
  },
  policy: {
    title: 'Komitmen Privasi Kami',
    intro: 'Hero Budget berkomitmen untuk melindungi privasi Anda dan memastikan keamanan informasi pribadi Anda.',
    sections: {
      dataCollection: {
        title: 'Pengumpulan Data',
        content: 'Kami hanya mengumpulkan informasi yang diperlukan untuk memberi Anda pengalaman penganggaran terbaik.',
      },
      dataUsage: {
        title: 'Bagaimana Kami Menggunakan Data Anda',
        content: 'Data Anda digunakan semata-mata untuk meningkatkan pengalaman Anda dan memberikan wawasan keuangan yang dipersonalisasi.',
      },
      dataSecurity: {
        title: 'Keamanan Data',
        content: 'Kami menerapkan langkah-langkah keamanan standar industri untuk melindungi informasi Anda.',
      },
    },
  },
  dataProtection: {
    title: 'Perlindungan Data',
    subtitle: 'Bagaimana kami menjaga informasi Anda tetap aman',
    encryption: 'Enkripsi end-to-end untuk semua data',
    storage: 'Penyimpanan cloud yang aman dengan pencadangan rutin',
    access: 'Kontrol akses ketat dan autentikasi',
  },
  userRights: {
    title: 'Hak Anda',
    subtitle: 'Anda memiliki kontrol atas data Anda',
    rights: [
      'Akses data pribadi Anda',
      'Minta koreksi data',
      'Hapus akun dan data Anda',
      'Ekspor informasi Anda',
      'Berhenti berlangganan komunikasi pemasaran',
    ],
  },
  contact: {
    title: 'Hubungi Kami',
    subtitle: 'Ada pertanyaan tentang kebijakan privasi kami?',
    email: 'privacy@herobudget.app',
  },
};

// Dutch (Netherlands)
const nl_NL: PrivacyTranslations = {
  hero: {
    title: 'Privacybeleid',
    subtitle: 'Uw privacy is belangrijk voor ons. Ontdek hoe we uw persoonlijke informatie beschermen.',
    lastUpdated: 'Laatst bijgewerkt',
  },
  policy: {
    title: 'Onze Privacy Toezegging',
    intro: 'Hero Budget zet zich in om uw privacy te beschermen en de beveiliging van uw persoonlijke informatie te waarborgen.',
    sections: {
      dataCollection: {
        title: 'Gegevensverzameling',
        content: 'We verzamelen alleen de informatie die nodig is om u de beste budgetervaring te bieden.',
      },
      dataUsage: {
        title: 'Hoe We Uw Gegevens Gebruiken',
        content: 'Uw gegevens worden uitsluitend gebruikt om uw ervaring te verbeteren en gepersonaliseerde financiële inzichten te bieden.',
      },
      dataSecurity: {
        title: 'Gegevensbeveiliging',
        content: 'We implementeren industriestandaard beveiligingsmaatregelen om uw informatie te beschermen.',
      },
    },
  },
  dataProtection: {
    title: 'Gegevensbescherming',
    subtitle: 'Hoe we uw informatie veilig houden',
    encryption: 'End-to-end encryptie voor alle gegevens',
    storage: 'Veilige cloudopslag met regelmatige back-ups',
    access: 'Strikte toegangscontroles en authenticatie',
  },
  userRights: {
    title: 'Uw Rechten',
    subtitle: 'U heeft controle over uw gegevens',
    rights: [
      'Toegang tot uw persoonlijke gegevens',
      'Verzoek om gegevenscorrectie',
      'Verwijder uw account en gegevens',
      'Exporteer uw informatie',
      'Afmelden voor marketingcommunicatie',
    ],
  },
  contact: {
    title: 'Neem Contact Op',
    subtitle: 'Heeft u vragen over ons privacybeleid?',
    email: 'privacy@herobudget.app',
  },
};

// Norwegian (Norway)
const no_NO: PrivacyTranslations = {
  hero: {
    title: 'Personvernregler',
    subtitle: 'Ditt personvern er viktig for oss. Lær hvordan vi beskytter din personlige informasjon.',
    lastUpdated: 'Sist oppdatert',
  },
  policy: {
    title: 'Vårt Personvernløfte',
    intro: 'Hero Budget er forpliktet til å beskytte ditt personvern og sikre sikkerheten til din personlige informasjon.',
    sections: {
      dataCollection: {
        title: 'Datainnsamling',
        content: 'Vi samler kun inn informasjonen som er nødvendig for å gi deg den beste budsjettopplevelsen.',
      },
      dataUsage: {
        title: 'Hvordan Vi Bruker Dine Data',
        content: 'Dine data brukes utelukkende til å forbedre din opplevelse og gi personlig finansiell innsikt.',
      },
      dataSecurity: {
        title: 'Datasikkerhet',
        content: 'Vi implementerer bransjestandard sikkerhetstiltak for å beskytte din informasjon.',
      },
    },
  },
  dataProtection: {
    title: 'Databeskyttelse',
    subtitle: 'Hvordan vi holder informasjonen din trygg',
    encryption: 'Ende-til-ende-kryptering for alle data',
    storage: 'Sikker skylagring med regelmessige sikkerhetskopier',
    access: 'Strenge tilgangskontroller og autentisering',
  },
  userRights: {
    title: 'Dine Rettigheter',
    subtitle: 'Du har kontroll over dine data',
    rights: [
      'Tilgang til dine personlige data',
      'Be om datakorrigering',
      'Slett din konto og data',
      'Eksporter informasjonen din',
      'Meld deg av markedsføringskommunikasjon',
    ],
  },
  contact: {
    title: 'Kontakt Oss',
    subtitle: 'Har du spørsmål om vår personvernpolicy?',
    email: 'privacy@herobudget.app',
  },
};

// Polish (Poland)
const pl_PL: PrivacyTranslations = {
  hero: {
    title: 'Polityka Prywatności',
    subtitle: 'Twoja prywatność jest dla nas ważna. Dowiedz się, jak chronimy Twoje dane osobowe.',
    lastUpdated: 'Ostatnia aktualizacja',
  },
  policy: {
    title: 'Nasze Zobowiązanie w Zakresie Prywatności',
    intro: 'Hero Budget zobowiązuje się chronić Twoją prywatność i zapewnić bezpieczeństwo Twoich danych osobowych.',
    sections: {
      dataCollection: {
        title: 'Zbieranie Danych',
        content: 'Zbieramy tylko informacje niezbędne do zapewnienia najlepszego doświadczenia budżetowego.',
      },
      dataUsage: {
        title: 'Jak Używamy Twoich Danych',
        content: 'Twoje dane są wykorzystywane wyłącznie w celu poprawy Twojego doświadczenia i dostarczania spersonalizowanych informacji finansowych.',
      },
      dataSecurity: {
        title: 'Bezpieczeństwo Danych',
        content: 'Wdrażamy standardowe branżowe środki bezpieczeństwa w celu ochrony Twoich informacji.',
      },
    },
  },
  dataProtection: {
    title: 'Ochrona Danych',
    subtitle: 'Jak dbamy o bezpieczeństwo Twoich informacji',
    encryption: 'Szyfrowanie end-to-end dla wszystkich danych',
    storage: 'Bezpieczne przechowywanie w chmurze z regularnymi kopiami zapasowymi',
    access: 'Ścisłe kontrole dostępu i uwierzytelnianie',
  },
  userRights: {
    title: 'Twoje Prawa',
    subtitle: 'Masz kontrolę nad swoimi danymi',
    rights: [
      'Dostęp do swoich danych osobowych',
      'Żądanie poprawienia danych',
      'Usunięcie swojego konta i danych',
      'Eksport swoich informacji',
      'Rezygnacja z komunikacji marketingowej',
    ],
  },
  contact: {
    title: 'Skontaktuj się z Nami',
    subtitle: 'Masz pytania dotyczące naszej polityki prywatności?',
    email: 'privacy@herobudget.app',
  },
};

// Portuguese (Portugal)
const pt_PT: PrivacyTranslations = {
  hero: {
    title: 'Política de Privacidade',
    subtitle: 'A sua privacidade é importante para nós. Saiba como protegemos as suas informações pessoais.',
    lastUpdated: 'Última atualização',
  },
  policy: {
    title: 'O Nosso Compromisso com a Privacidade',
    intro: 'O Hero Budget compromete-se a proteger a sua privacidade e garantir a segurança das suas informações pessoais.',
    sections: {
      dataCollection: {
        title: 'Recolha de Dados',
        content: 'Recolhemos apenas as informações necessárias para lhe oferecer a melhor experiência orçamental.',
      },
      dataUsage: {
        title: 'Como Utilizamos os Seus Dados',
        content: 'Os seus dados são utilizados exclusivamente para melhorar a sua experiência e fornecer informações financeiras personalizadas.',
      },
      dataSecurity: {
        title: 'Segurança de Dados',
        content: 'Implementamos medidas de segurança padrão da indústria para proteger as suas informações.',
      },
    },
  },
  dataProtection: {
    title: 'Proteção de Dados',
    subtitle: 'Como mantemos as suas informações seguras',
    encryption: 'Encriptação ponta-a-ponta para todos os dados',
    storage: 'Armazenamento na nuvem seguro com cópias de segurança regulares',
    access: 'Controlos de acesso rigorosos e autenticação',
  },
  userRights: {
    title: 'Os Seus Direitos',
    subtitle: 'Tem controlo sobre os seus dados',
    rights: [
      'Aceder aos seus dados pessoais',
      'Solicitar correção de dados',
      'Eliminar a sua conta e dados',
      'Exportar as suas informações',
      'Cancelar subscrição de comunicações de marketing',
    ],
  },
  contact: {
    title: 'Contacte-nos',
    subtitle: 'Tem questões sobre a nossa política de privacidade?',
    email: 'privacy@herobudget.app',
  },
};

// Swedish (Sweden)
const sv_SE: PrivacyTranslations = {
  hero: {
    title: 'Integritetspolicy',
    subtitle: 'Din integritet är viktig för oss. Lär dig hur vi skyddar din personliga information.',
    lastUpdated: 'Senast uppdaterad',
  },
  policy: {
    title: 'Vårt Integritetsåtagande',
    intro: 'Hero Budget är engagerad i att skydda din integritet och säkerställa säkerheten för din personliga information.',
    sections: {
      dataCollection: {
        title: 'Datainsamling',
        content: 'Vi samlar endast in den information som är nödvändig för att ge dig den bästa budgetupplevelsen.',
      },
      dataUsage: {
        title: 'Hur Vi Använder Din Data',
        content: 'Din data används enbart för att förbättra din upplevelse och tillhandahålla personliga finansiella insikter.',
      },
      dataSecurity: {
        title: 'Datasäkerhet',
        content: 'Vi implementerar branschstandardiserade säkerhetsåtgärder för att skydda din information.',
      },
    },
  },
  dataProtection: {
    title: 'Dataskydd',
    subtitle: 'Hur vi håller din information säker',
    encryption: 'End-to-end-kryptering för all data',
    storage: 'Säker molnlagring med regelbundna säkerhetskopior',
    access: 'Strikt åtkomstkontroll och autentisering',
  },
  userRights: {
    title: 'Dina Rättigheter',
    subtitle: 'Du har kontroll över din data',
    rights: [
      'Åtkomst till dina personuppgifter',
      'Begär datakorrigering',
      'Ta bort ditt konto och data',
      'Exportera din information',
      'Avregistrera dig från marknadsföringskommunikation',
    ],
  },
  contact: {
    title: 'Kontakta Oss',
    subtitle: 'Har du frågor om vår integritetspolicy?',
    email: 'privacy@herobudget.app',
  },
};

// Thai (Thailand)
const th_TH: PrivacyTranslations = {
  hero: {
    title: 'นโยบายความเป็นส่วนตัว',
    subtitle: 'ความเป็นส่วนตัวของคุณมีความสำคัญต่อเรา เรียนรู้วิธีที่เราปกป้องข้อมูลส่วนบุคคลของคุณ',
    lastUpdated: 'อัปเดตล่าสุด',
  },
  policy: {
    title: 'คำมั่นสัญญาด้านความเป็นส่วนตัวของเรา',
    intro: 'Hero Budget มุ่งมั่นที่จะปกป้องความเป็นส่วนตัวของคุณและรับประกันความปลอดภัยของข้อมูลส่วนบุคคลของคุณ',
    sections: {
      dataCollection: {
        title: 'การเก็บรวบรวมข้อมูล',
        content: 'เราเก็บรวบรวมเฉพาะข้อมูลที่จำเป็นเพื่อมอบประสบการณ์การจัดการงบประมาณที่ดีที่สุดให้กับคุณ',
      },
      dataUsage: {
        title: 'วิธีที่เราใช้ข้อมูลของคุณ',
        content: 'ข้อมูลของคุณถูกใช้เพื่อปรับปรุงประสบการณ์ของคุณและให้ข้อมูลเชิงลึกทางการเงินที่เป็นส่วนตัวเท่านั้น',
      },
      dataSecurity: {
        title: 'ความปลอดภัยของข้อมูล',
        content: 'เราใช้มาตรการรักษาความปลอดภัยตามมาตรฐานอุตสาหกรรมเพื่อปกป้องข้อมูลของคุณ',
      },
    },
  },
  dataProtection: {
    title: 'การปกป้องข้อมูล',
    subtitle: 'วิธีที่เรารักษาความปลอดภัยข้อมูลของคุณ',
    encryption: 'การเข้ารหัสแบบ end-to-end สำหรับข้อมูลทั้งหมด',
    storage: 'การจัดเก็บบนคลาวด์ที่ปลอดภัยพร้อมการสำรองข้อมูลเป็นประจำ',
    access: 'การควบคุมการเข้าถึงที่เข้มงวดและการตรวจสอบสิทธิ์',
  },
  userRights: {
    title: 'สิทธิ์ของคุณ',
    subtitle: 'คุณมีการควบคุมข้อมูลของคุณ',
    rights: [
      'เข้าถึงข้อมูลส่วนบุคคลของคุณ',
      'ขอแก้ไขข้อมูล',
      'ลบบัญชีและข้อมูลของคุณ',
      'ส่งออกข้อมูลของคุณ',
      'ยกเลิกการสื่อสารทางการตลาด',
    ],
  },
  contact: {
    title: 'ติดต่อเรา',
    subtitle: 'มีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวของเราหรือไม่?',
    email: 'privacy@herobudget.app',
  },
};

// Turkish (Turkey)
const tr_TR: PrivacyTranslations = {
  hero: {
    title: 'Gizlilik Politikası',
    subtitle: 'Gizliliğiniz bizim için önemlidir. Kişisel bilgilerinizi nasıl koruduğumuzu öğrenin.',
    lastUpdated: 'Son güncelleme',
  },
  policy: {
    title: 'Gizlilik Taahhüdümüz',
    intro: 'Hero Budget, gizliliğinizi korumaya ve kişisel bilgilerinizin güvenliğini sağlamaya kararlıdır.',
    sections: {
      dataCollection: {
        title: 'Veri Toplama',
        content: 'Size en iyi bütçe deneyimini sağlamak için gerekli bilgileri topluyoruz.',
      },
      dataUsage: {
        title: 'Verilerinizi Nasıl Kullanırız',
        content: 'Verileriniz yalnızca deneyiminizi iyileştirmek ve kişiselleştirilmiş finansal içgörüler sağlamak için kullanılır.',
      },
      dataSecurity: {
        title: 'Veri Güvenliği',
        content: 'Bilgilerinizi korumak için endüstri standardı güvenlik önlemleri uyguluyoruz.',
      },
    },
  },
  dataProtection: {
    title: 'Veri Koruma',
    subtitle: 'Bilgilerinizi nasıl güvende tutarız',
    encryption: 'Tüm veriler için uçtan uca şifreleme',
    storage: 'Düzenli yedeklemeli güvenli bulut depolama',
    access: 'Sıkı erişim kontrolleri ve kimlik doğrulama',
  },
  userRights: {
    title: 'Haklarınız',
    subtitle: 'Verileriniz üzerinde kontrole sahipsiniz',
    rights: [
      'Kişisel verilerinize erişin',
      'Veri düzeltme talebinde bulunun',
      'Hesabınızı ve verilerinizi silin',
      'Bilgilerinizi dışa aktarın',
      'Pazarlama iletişimlerinden çıkın',
    ],
  },
  contact: {
    title: 'Bize Ulaşın',
    subtitle: 'Gizlilik politikamız hakkında sorularınız mı var?',
    email: 'privacy@herobudget.app',
  },
};

// Ukrainian (Ukraine)
const uk_UA: PrivacyTranslations = {
  hero: {
    title: 'Політика конфіденційності',
    subtitle: 'Ваша конфіденційність важлива для нас. Дізнайтеся, як ми захищаємо вашу особисту інформацію.',
    lastUpdated: 'Останнє оновлення',
  },
  policy: {
    title: 'Наше зобов\'язання щодо конфіденційності',
    intro: 'Hero Budget зобов\'язується захищати вашу конфіденційність і забезпечувати безпеку вашої особистої інформації.',
    sections: {
      dataCollection: {
        title: 'Збір даних',
        content: 'Ми збираємо лише інформацію, необхідну для надання вам найкращого досвіду складання бюджету.',
      },
      dataUsage: {
        title: 'Як ми використовуємо ваші дані',
        content: 'Ваші дані використовуються виключно для покращення вашого досвіду та надання персоналізованих фінансових аналітичних даних.',
      },
      dataSecurity: {
        title: 'Безпека даних',
        content: 'Ми застосовуємо стандартні галузеві заходи безпеки для захисту вашої інформації.',
      },
    },
  },
  dataProtection: {
    title: 'Захист даних',
    subtitle: 'Як ми забезпечуємо безпеку вашої інформації',
    encryption: 'Наскрізне шифрування для всіх даних',
    storage: 'Безпечне хмарне сховище з регулярним резервним копіюванням',
    access: 'Суворий контроль доступу та автентифікація',
  },
  userRights: {
    title: 'Ваші права',
    subtitle: 'Ви контролюєте свої дані',
    rights: [
      'Доступ до ваших особистих даних',
      'Запит на виправлення даних',
      'Видалення вашого облікового запису та даних',
      'Експорт вашої інформації',
      'Відмова від маркетингових комунікацій',
    ],
  },
  contact: {
    title: 'Зв\'яжіться з нами',
    subtitle: 'Є питання щодо нашої політики конфіденційності?',
    email: 'privacy@herobudget.app',
  },
};

// Vietnamese (Vietnam)
const vi_VN: PrivacyTranslations = {
  hero: {
    title: 'Chính Sách Bảo Mật',
    subtitle: 'Quyền riêng tư của bạn rất quan trọng đối với chúng tôi. Tìm hiểu cách chúng tôi bảo vệ thông tin cá nhân của bạn.',
    lastUpdated: 'Cập nhật lần cuối',
  },
  policy: {
    title: 'Cam Kết Bảo Mật Của Chúng Tôi',
    intro: 'Hero Budget cam kết bảo vệ quyền riêng tư của bạn và đảm bảo an toàn cho thông tin cá nhân của bạn.',
    sections: {
      dataCollection: {
        title: 'Thu Thập Dữ Liệu',
        content: 'Chúng tôi chỉ thu thập thông tin cần thiết để cung cấp cho bạn trải nghiệm ngân sách tốt nhất.',
      },
      dataUsage: {
        title: 'Cách Chúng Tôi Sử Dụng Dữ Liệu Của Bạn',
        content: 'Dữ liệu của bạn chỉ được sử dụng để cải thiện trải nghiệm của bạn và cung cấp thông tin tài chính được cá nhân hóa.',
      },
      dataSecurity: {
        title: 'Bảo Mật Dữ Liệu',
        content: 'Chúng tôi triển khai các biện pháp bảo mật tiêu chuẩn ngành để bảo vệ thông tin của bạn.',
      },
    },
  },
  dataProtection: {
    title: 'Bảo Vệ Dữ Liệu',
    subtitle: 'Cách chúng tôi giữ thông tin của bạn an toàn',
    encryption: 'Mã hóa đầu cuối cho tất cả dữ liệu',
    storage: 'Lưu trữ đám mây an toàn với sao lưu thường xuyên',
    access: 'Kiểm soát truy cập nghiêm ngặt và xác thực',
  },
  userRights: {
    title: 'Quyền Của Bạn',
    subtitle: 'Bạn có quyền kiểm soát dữ liệu của mình',
    rights: [
      'Truy cập dữ liệu cá nhân của bạn',
      'Yêu cầu sửa đổi dữ liệu',
      'Xóa tài khoản và dữ liệu của bạn',
      'Xuất thông tin của bạn',
      'Từ chối nhận thông tin tiếp thị',
    ],
  },
  contact: {
    title: 'Liên Hệ Chúng Tôi',
    subtitle: 'Có câu hỏi về chính sách bảo mật của chúng tôi?',
    email: 'privacy@herobudget.app',
  },
};

// Map all translations
export const PRIVACY_TRANSLATIONS: Record<string, PrivacyTranslations> = {
  // English variants
  en_GB,
  en_US,
  en_CA,

  // Spanish variants
  es_ES,
  es_MX,

  // French variants
  fr_FR,
  fr_CA,

  // German variants
  de_DE,
  de_CH,

  // Italian
  it_IT,

  // Portuguese variants
  pt_BR,
  pt_PT,

  // Asian languages
  ja_JP,
  zh_CN,
  ko_KR,

  // Russian and Eastern European
  ru_RU,
  uk_UA,
  pl_PL,
  cs_CZ,

  // Middle East and South Asia
  ar_SA,
  he_IL,
  hi_IN,
  tr_TR,

  // Southeast Asia
  id_ID,
  th_TH,
  vi_VN,

  // Western European
  nl_NL,
  da_DK,
  fi_FI,
  no_NO,
  sv_SE,
  ca_ES,
};

// Helper function to get translations for a locale
export function getPrivacyTranslations(locale: string): PrivacyTranslations {
  return PRIVACY_TRANSLATIONS[locale] || PRIVACY_TRANSLATIONS['en_GB'];
}

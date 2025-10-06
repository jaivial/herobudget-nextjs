/**
 * Contact Privacy Section Translations
 * Comprehensive translations for all 32 supported languages
 */

export interface ContactPrivacyTranslations {
  title: string;
  subtitle: string;
  contactChannels: {
    title: string;
    dataProtectionOfficer: {
      title: string;
      description: string;
      availability: string;
      responseTime: string;
    };
    legalDepartment: {
      title: string;
      description: string;
      availability: string;
      responseTime: string;
    };
    generalSupport: {
      title: string;
      description: string;
      availability: string;
      responseTime: string;
    };
    contactAvailable: string;
  };
  form: {
    title: string;
    fields: {
      name: {
        label: string;
        placeholder: string;
      };
      email: {
        label: string;
        placeholder: string;
      };
      topic: {
        label: string;
        placeholder: string;
      };
      priority: {
        label: string;
        options: {
          low: string;
          medium: string;
          high: string;
        };
      };
      message: {
        label: string;
        placeholder: string;
      };
    };
    topics: string[];
    submit: {
      idle: string;
      sending: string;
      success: string;
      error: string;
    };
    messages: {
      success: string;
      error: string;
    };
    privacyNote: {
      title: string;
      description: string;
    };
  };
}

const en_GB: ContactPrivacyTranslations = {
  title: 'Privacy Contact',
  subtitle: 'We are here to help you with any enquiries about privacy, data protection or exercising your rights',
  contactChannels: {
    title: 'Contact Channels',
    dataProtectionOfficer: {
      title: 'Data Protection Officer',
      description: 'For specific enquiries about privacy and data protection',
      availability: '24/7',
      responseTime: '24 hours',
    },
    legalDepartment: {
      title: 'Legal Department',
      description: 'For formal requests related to data rights',
      availability: 'Monday to Friday 9AM-1:30PM',
      responseTime: '48 hours',
    },
    generalSupport: {
      title: 'General Support',
      description: 'For general enquiries about privacy and settings',
      availability: 'Monday to Friday 9AM-1:30PM',
      responseTime: '12 hours',
    },
    contactAvailable: 'Available from the app',
  },
  form: {
    title: 'Privacy Form',
    fields: {
      name: {
        label: 'Full Name',
        placeholder: 'Your full name',
      },
      email: {
        label: 'Email Address',
        placeholder: 'your@email.com',
      },
      topic: {
        label: 'Privacy Topic',
        placeholder: 'Select a topic',
      },
      priority: {
        label: 'Priority',
        options: {
          low: 'Low - General enquiry',
          medium: 'Medium - Need assistance',
          high: 'High - Urgent matter',
        },
      },
      message: {
        label: 'Message',
        placeholder: 'Describe your privacy enquiry or request...',
      },
    },
    topics: [
      'Personal data request',
      'Account deletion',
      'Information correction',
      'Processing restriction',
      'Data portability',
      'Processing objection',
      'Privacy settings',
      'Vulnerability report',
      'Cookie enquiry',
      'Other privacy matter',
    ],
    submit: {
      idle: 'Submit Enquiry',
      sending: 'Sending...',
      success: 'Message Sent',
      error: 'Error Sending',
    },
    messages: {
      success: 'Your enquiry has been sent successfully. We will respond soon.',
      error: 'There was an error sending your enquiry. Please try again.',
    },
    privacyNote: {
      title: 'Protection of your enquiry',
      description: 'All communications are treated confidentially and are protected under our privacy policies. Only authorised personnel will access your information.',
    },
  },
};

const ar_SA: ContactPrivacyTranslations = {
  title: 'اتصال الخصوصية',
  subtitle: 'نحن هنا لمساعدتك في أي استفسارات حول الخصوصية أو حماية البيانات أو ممارسة حقوقك',
  contactChannels: {
    title: 'قنوات الاتصال',
    dataProtectionOfficer: {
      title: 'مسؤول حماية البيانات',
      description: 'للاستفسارات المحددة حول الخصوصية وحماية البيانات',
      availability: '24/7',
      responseTime: '24 ساعة',
    },
    legalDepartment: {
      title: 'القسم القانوني',
      description: 'للطلبات الرسمية المتعلقة بحقوق البيانات',
      availability: 'الاثنين إلى الجمعة 9 صباحًا - 1:30 مساءً',
      responseTime: '48 ساعة',
    },
    generalSupport: {
      title: 'الدعم العام',
      description: 'للاستفسارات العامة حول الخصوصية والإعدادات',
      availability: 'الاثنين إلى الجمعة 9 صباحًا - 1:30 مساءً',
      responseTime: '12 ساعة',
    },
    contactAvailable: 'متاح من التطبيق',
  },
  form: {
    title: 'نموذج الخصوصية',
    fields: {
      name: {
        label: 'الاسم الكامل',
        placeholder: 'اسمك الكامل',
      },
      email: {
        label: 'عنوان البريد الإلكتروني',
        placeholder: 'your@email.com',
      },
      topic: {
        label: 'موضوع الخصوصية',
        placeholder: 'اختر موضوعًا',
      },
      priority: {
        label: 'الأولوية',
        options: {
          low: 'منخفض - استفسار عام',
          medium: 'متوسط - أحتاج إلى مساعدة',
          high: 'عالي - أمر عاجل',
        },
      },
      message: {
        label: 'الرسالة',
        placeholder: 'صف استفسارك أو طلبك المتعلق بالخصوصية...',
      },
    },
    topics: [
      'طلب البيانات الشخصية',
      'حذف الحساب',
      'تصحيح المعلومات',
      'تقييد المعالجة',
      'نقل البيانات',
      'الاعتراض على المعالجة',
      'إعدادات الخصوصية',
      'تقرير الثغرات',
      'استفسار عن ملفات تعريف الارتباط',
      'مسألة خصوصية أخرى',
    ],
    submit: {
      idle: 'إرسال الاستفسار',
      sending: 'جارٍ الإرسال...',
      success: 'تم إرسال الرسالة',
      error: 'خطأ في الإرسال',
    },
    messages: {
      success: 'تم إرسال استفسارك بنجاح. سنرد قريبًا.',
      error: 'حدث خطأ أثناء إرسال استفسارك. يرجى المحاولة مرة أخرى.',
    },
    privacyNote: {
      title: 'حماية استفسارك',
      description: 'يتم التعامل مع جميع الاتصالات بسرية وتحميها سياسات الخصوصية لدينا. فقط الموظفون المصرح لهم سيصلون إلى معلوماتك.',
    },
  },
};

const ca_ES: ContactPrivacyTranslations = {
  title: 'Contacte de Privadesa',
  subtitle: 'Estem aquí per ajudar-te amb qualsevol consulta sobre privadesa, protecció de dades o exercici dels teus drets',
  contactChannels: {
    title: 'Canals de Contacte',
    dataProtectionOfficer: {
      title: 'Oficial de Protecció de Dades',
      description: 'Per a consultes específiques sobre privadesa i protecció de dades',
      availability: '24/7',
      responseTime: '24 hores',
    },
    legalDepartment: {
      title: 'Departament Legal',
      description: 'Per a sol·licituds formals relacionades amb drets de dades',
      availability: 'Dilluns a Divendres 9AM-1:30PM',
      responseTime: '48 hores',
    },
    generalSupport: {
      title: 'Suport General',
      description: 'Per a consultes generals sobre privadesa i configuració',
      availability: 'Dilluns a Divendres 9AM-1:30PM',
      responseTime: '12 hores',
    },
    contactAvailable: 'Disponible des de l\'app',
  },
  form: {
    title: 'Formulari de Privadesa',
    fields: {
      name: {
        label: 'Nom Complet',
        placeholder: 'El teu nom complet',
      },
      email: {
        label: 'Correu Electrònic',
        placeholder: 'teu@email.com',
      },
      topic: {
        label: 'Tema de Privadesa',
        placeholder: 'Selecciona un tema',
      },
      priority: {
        label: 'Prioritat',
        options: {
          low: 'Baixa - Consulta general',
          medium: 'Mitjana - Necessito ajuda',
          high: 'Alta - Assumpte urgent',
        },
      },
      message: {
        label: 'Missatge',
        placeholder: 'Descriu la teva consulta o sol·licitud de privadesa...',
      },
    },
    topics: [
      'Sol·licitud de dades personals',
      'Eliminació de compte',
      'Correcció d\'informació',
      'Restricció de processament',
      'Portabilitat de dades',
      'Objecció al processament',
      'Configuració de privadesa',
      'Informe de vulnerabilitat',
      'Consulta sobre cookies',
      'Altre tema de privadesa',
    ],
    submit: {
      idle: 'Enviar Consulta',
      sending: 'Enviant...',
      success: 'Missatge Enviat',
      error: 'Error en Enviar',
    },
    messages: {
      success: 'La teva consulta s\'ha enviat correctament. Respondrem aviat.',
      error: 'Hi ha hagut un error en enviar la teva consulta. Si us plau, torna-ho a intentar.',
    },
    privacyNote: {
      title: 'Protecció de la teva consulta',
      description: 'Totes les comunicacions es tracten de manera confidencial i estan protegides sota les nostres polítiques de privadesa. Només el personal autoritzat accedirà a la teva informació.',
    },
  },
};

const cs_CZ: ContactPrivacyTranslations = {
  title: 'Kontakt na ochranu soukromí',
  subtitle: 'Jsme tu, abychom vám pomohli s jakýmikoli dotazy ohledně ochrany soukromí, dat nebo uplatňování vašich práv',
  contactChannels: {
    title: 'Kontaktní kanály',
    dataProtectionOfficer: {
      title: 'Pověřenec pro ochranu osobních údajů',
      description: 'Pro konkrétní dotazy ohledně soukromí a ochrany dat',
      availability: '24/7',
      responseTime: '24 hodin',
    },
    legalDepartment: {
      title: 'Právní oddělení',
      description: 'Pro formální žádosti týkající se práv k datům',
      availability: 'Pondělí až Pátek 9:00-13:30',
      responseTime: '48 hodin',
    },
    generalSupport: {
      title: 'Obecná podpora',
      description: 'Pro obecné dotazy ohledně soukromí a nastavení',
      availability: 'Pondělí až Pátek 9:00-13:30',
      responseTime: '12 hodin',
    },
    contactAvailable: 'Dostupné z aplikace',
  },
  form: {
    title: 'Formulář soukromí',
    fields: {
      name: {
        label: 'Celé jméno',
        placeholder: 'Vaše celé jméno',
      },
      email: {
        label: 'E-mailová adresa',
        placeholder: 'vas@email.cz',
      },
      topic: {
        label: 'Téma soukromí',
        placeholder: 'Vyberte téma',
      },
      priority: {
        label: 'Priorita',
        options: {
          low: 'Nízká - Obecný dotaz',
          medium: 'Střední - Potřebuji pomoc',
          high: 'Vysoká - Naléhavá záležitost',
        },
      },
      message: {
        label: 'Zpráva',
        placeholder: 'Popište svůj dotaz nebo žádost ohledně soukromí...',
      },
    },
    topics: [
      'Žádost o osobní údaje',
      'Smazání účtu',
      'Oprava informací',
      'Omezení zpracování',
      'Přenositelnost dat',
      'Námitka proti zpracování',
      'Nastavení soukromí',
      'Hlášení zranitelnosti',
      'Dotaz na cookies',
      'Jiná záležitost soukromí',
    ],
    submit: {
      idle: 'Odeslat dotaz',
      sending: 'Odesílání...',
      success: 'Zpráva odeslána',
      error: 'Chyba při odesílání',
    },
    messages: {
      success: 'Váš dotaz byl úspěšně odeslán. Brzy odpovíme.',
      error: 'Při odesílání vašeho dotazu došlo k chybě. Zkuste to prosím znovu.',
    },
    privacyNote: {
      title: 'Ochrana vašeho dotazu',
      description: 'Veškerá komunikace je zacházena důvěrně a je chráněna našimi zásadami ochrany soukromí. K vašim informacím budou mít přístup pouze oprávněné osoby.',
    },
  },
};

const da_DK: ContactPrivacyTranslations = {
  title: 'Privatlivskontakt',
  subtitle: 'Vi er her for at hjælpe dig med alle forespørgsler om privatliv, databeskyttelse eller udøvelse af dine rettigheder',
  contactChannels: {
    title: 'Kontaktkanaler',
    dataProtectionOfficer: {
      title: 'Databeskyttelsesrådgiver',
      description: 'Til specifikke forespørgsler om privatliv og databeskyttelse',
      availability: '24/7',
      responseTime: '24 timer',
    },
    legalDepartment: {
      title: 'Juridisk afdeling',
      description: 'Til formelle anmodninger relateret til datarettigheder',
      availability: 'Mandag til Fredag 9-13:30',
      responseTime: '48 timer',
    },
    generalSupport: {
      title: 'Generel support',
      description: 'Til generelle forespørgsler om privatliv og indstillinger',
      availability: 'Mandag til Fredag 9-13:30',
      responseTime: '12 timer',
    },
    contactAvailable: 'Tilgængelig fra appen',
  },
  form: {
    title: 'Privatlivsformular',
    fields: {
      name: {
        label: 'Fulde navn',
        placeholder: 'Dit fulde navn',
      },
      email: {
        label: 'E-mailadresse',
        placeholder: 'din@email.dk',
      },
      topic: {
        label: 'Privatlivsemne',
        placeholder: 'Vælg et emne',
      },
      priority: {
        label: 'Prioritet',
        options: {
          low: 'Lav - Generel forespørgsel',
          medium: 'Mellem - Har brug for hjælp',
          high: 'Høj - Presserende sag',
        },
      },
      message: {
        label: 'Besked',
        placeholder: 'Beskriv din privatlivsforespørgsel eller anmodning...',
      },
    },
    topics: [
      'Anmodning om personlige data',
      'Sletning af konto',
      'Rettelse af oplysninger',
      'Behandlingsbegrænsning',
      'Dataportabilitet',
      'Indsigelse mod behandling',
      'Privatlivsindstillinger',
      'Sårbarhedsrapport',
      'Cookie-forespørgsel',
      'Andet privatlivsanliggende',
    ],
    submit: {
      idle: 'Send forespørgsel',
      sending: 'Sender...',
      success: 'Besked sendt',
      error: 'Fejl ved afsendelse',
    },
    messages: {
      success: 'Din forespørgsel er blevet sendt. Vi svarer snart.',
      error: 'Der opstod en fejl ved afsendelse af din forespørgsel. Prøv venligst igen.',
    },
    privacyNote: {
      title: 'Beskyttelse af din forespørgsel',
      description: 'Al kommunikation behandles fortroligt og er beskyttet under vores privatlivspolitikker. Kun autoriseret personale vil få adgang til dine oplysninger.',
    },
  },
};

const de_DE: ContactPrivacyTranslations = {
  title: 'Datenschutzkontakt',
  subtitle: 'Wir sind hier, um Ihnen bei allen Anfragen zu Datenschutz, Datenschutz oder der Ausübung Ihrer Rechte zu helfen',
  contactChannels: {
    title: 'Kontaktkanäle',
    dataProtectionOfficer: {
      title: 'Datenschutzbeauftragter',
      description: 'Für spezifische Anfragen zu Datenschutz und Datenschutz',
      availability: '24/7',
      responseTime: '24 Stunden',
    },
    legalDepartment: {
      title: 'Rechtsabteilung',
      description: 'Für formelle Anfragen im Zusammenhang mit Datenrechten',
      availability: 'Montag bis Freitag 9:00-13:30 Uhr',
      responseTime: '48 Stunden',
    },
    generalSupport: {
      title: 'Allgemeiner Support',
      description: 'Für allgemeine Anfragen zu Datenschutz und Einstellungen',
      availability: 'Montag bis Freitag 9:00-13:30 Uhr',
      responseTime: '12 Stunden',
    },
    contactAvailable: 'Verfügbar über die App',
  },
  form: {
    title: 'Datenschutzformular',
    fields: {
      name: {
        label: 'Vollständiger Name',
        placeholder: 'Ihr vollständiger Name',
      },
      email: {
        label: 'E-Mail-Adresse',
        placeholder: 'ihre@email.de',
      },
      topic: {
        label: 'Datenschutzthema',
        placeholder: 'Wählen Sie ein Thema',
      },
      priority: {
        label: 'Priorität',
        options: {
          low: 'Niedrig - Allgemeine Anfrage',
          medium: 'Mittel - Benötige Hilfe',
          high: 'Hoch - Dringende Angelegenheit',
        },
      },
      message: {
        label: 'Nachricht',
        placeholder: 'Beschreiben Sie Ihre Datenschutzanfrage oder -anfrage...',
      },
    },
    topics: [
      'Anfrage personenbezogener Daten',
      'Kontolöschung',
      'Informationskorrektur',
      'Verarbeitungseinschränkung',
      'Datenübertragbarkeit',
      'Widerspruch gegen Verarbeitung',
      'Datenschutzeinstellungen',
      'Schwachstellenbericht',
      'Cookie-Anfrage',
      'Andere Datenschutzangelegenheit',
    ],
    submit: {
      idle: 'Anfrage senden',
      sending: 'Wird gesendet...',
      success: 'Nachricht gesendet',
      error: 'Fehler beim Senden',
    },
    messages: {
      success: 'Ihre Anfrage wurde erfolgreich gesendet. Wir werden bald antworten.',
      error: 'Beim Senden Ihrer Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
    },
    privacyNote: {
      title: 'Schutz Ihrer Anfrage',
      description: 'Alle Kommunikationen werden vertraulich behandelt und sind durch unsere Datenschutzrichtlinien geschützt. Nur autorisiertes Personal hat Zugriff auf Ihre Informationen.',
    },
  },
};

const de_CH: ContactPrivacyTranslations = {
  ...de_DE,
};

const el_GR: ContactPrivacyTranslations = {
  title: 'Επικοινωνία Απορρήτου',
  subtitle: 'Είμαστε εδώ για να σας βοηθήσουμε με οποιεσδήποτε ερωτήσεις σχετικά με το απόρρητο, την προστασία δεδομένων ή την άσκηση των δικαιωμάτων σας',
  contactChannels: {
    title: 'Κανάλια Επικοινωνίας',
    dataProtectionOfficer: {
      title: 'Υπεύθυνος Προστασίας Δεδομένων',
      description: 'Για συγκεκριμένες ερωτήσεις σχετικά με το απόρρητο και την προστασία δεδομένων',
      availability: '24/7',
      responseTime: '24 ώρες',
    },
    legalDepartment: {
      title: 'Νομικό Τμήμα',
      description: 'Για επίσημα αιτήματα σχετικά με δικαιώματα δεδομένων',
      availability: 'Δευτέρα έως Παρασκευή 9ΠΜ-1:30ΜΜ',
      responseTime: '48 ώρες',
    },
    generalSupport: {
      title: 'Γενική Υποστήριξη',
      description: 'Για γενικές ερωτήσεις σχετικά με το απόρρητο και τις ρυθμίσεις',
      availability: 'Δευτέρα έως Παρασκευή 9ΠΜ-1:30ΜΜ',
      responseTime: '12 ώρες',
    },
    contactAvailable: 'Διαθέσιμο από την εφαρμογή',
  },
  form: {
    title: 'Φόρμα Απορρήτου',
    fields: {
      name: {
        label: 'Πλήρες Όνομα',
        placeholder: 'Το πλήρες όνομά σας',
      },
      email: {
        label: 'Διεύθυνση Email',
        placeholder: 'your@email.com',
      },
      topic: {
        label: 'Θέμα Απορρήτου',
        placeholder: 'Επιλέξτε θέμα',
      },
      priority: {
        label: 'Προτεραιότητα',
        options: {
          low: 'Χαμηλή - Γενική ερώτηση',
          medium: 'Μεσαία - Χρειάζομαι βοήθεια',
          high: 'Υψηλή - Επείγον θέμα',
        },
      },
      message: {
        label: 'Μήνυμα',
        placeholder: 'Περιγράψτε την ερώτηση ή το αίτημά σας για το απόρρητο...',
      },
    },
    topics: [
      'Αίτημα προσωπικών δεδομένων',
      'Διαγραφή λογαριασμού',
      'Διόρθωση πληροφοριών',
      'Περιορισμός επεξεργασίας',
      'Φορητότητα δεδομένων',
      'Αντίρρηση επεξεργασίας',
      'Ρυθμίσεις απορρήτου',
      'Αναφορά ευπάθειας',
      'Ερώτηση για cookies',
      'Άλλο θέμα απορρήτου',
    ],
    submit: {
      idle: 'Υποβολή Ερώτησης',
      sending: 'Αποστολή...',
      success: 'Μήνυμα Απεστάλη',
      error: 'Σφάλμα Αποστολής',
    },
    messages: {
      success: 'Η ερώτησή σας έχει σταλεί επιτυχώς. Θα απαντήσουμε σύντομα.',
      error: 'Παρουσιάστηκε σφάλμα κατά την αποστολή της ερώτησής σας. Παρακαλώ δοκιμάστε ξανά.',
    },
    privacyNote: {
      title: 'Προστασία της ερώτησής σας',
      description: 'Όλες οι επικοινωνίες αντιμετωπίζονται εμπιστευτικά και προστατεύονται από τις πολιτικές απορρήτου μας. Μόνο εξουσιοδοτημένο προσωπικό θα έχει πρόσβαση στις πληροφορίες σας.',
    },
  },
};

const en_AU: ContactPrivacyTranslations = {
  ...en_GB,
  contactChannels: {
    ...en_GB.contactChannels,
    title: 'Contact Channels',
    dataProtectionOfficer: {
      ...en_GB.contactChannels.dataProtectionOfficer,
      title: 'Data Protection Officer',
      description: 'For specific enquiries about privacy and data protection',
    },
    generalSupport: {
      ...en_GB.contactChannels.generalSupport,
      description: 'For general enquiries about privacy and settings',
    },
  },
  form: {
    ...en_GB.form,
    fields: {
      ...en_GB.form.fields,
      priority: {
        ...en_GB.form.fields.priority,
        options: {
          low: 'Low - General enquiry',
          medium: 'Medium - Need assistance',
          high: 'High - Urgent matter',
        },
      },
      message: {
        ...en_GB.form.fields.message,
        placeholder: 'Describe your privacy enquiry or request...',
      },
    },
    submit: {
      ...en_GB.form.submit,
      idle: 'Submit Enquiry',
    },
    messages: {
      success: 'Your enquiry has been sent successfully. We will respond soon.',
      error: 'There was an error sending your enquiry. Please try again.',
    },
    privacyNote: {
      ...en_GB.form.privacyNote,
      title: 'Protection of your enquiry',
      description: 'All communications are treated confidentially and are protected under our privacy policies. Only authorised personnel will access your information.',
    },
  },
};

const en_CA: ContactPrivacyTranslations = {
  ...en_GB,
};

const en_US: ContactPrivacyTranslations = {
  ...en_GB,
};

const es_ES: ContactPrivacyTranslations = {
  title: 'Contacto de Privacidad',
  subtitle: 'Estamos aquí para ayudarte con cualquier consulta sobre privacidad, protección de datos o ejercicio de tus derechos',
  contactChannels: {
    title: 'Canales de Contacto',
    dataProtectionOfficer: {
      title: 'Oficial de Protección de Datos',
      description: 'Para consultas específicas sobre privacidad y protección de datos',
      availability: '24/7',
      responseTime: '24 horas',
    },
    legalDepartment: {
      title: 'Departamento Legal',
      description: 'Para solicitudes formales relacionadas con derechos de datos',
      availability: 'Lunes a Viernes 9AM-1:30PM',
      responseTime: '48 horas',
    },
    generalSupport: {
      title: 'Soporte General',
      description: 'Para consultas generales sobre privacidad y configuración',
      availability: 'Lunes a Viernes 9AM-1:30PM',
      responseTime: '12 horas',
    },
    contactAvailable: 'Disponible desde la app',
  },
  form: {
    title: 'Formulario de Privacidad',
    fields: {
      name: {
        label: 'Nombre Completo',
        placeholder: 'Tu nombre completo',
      },
      email: {
        label: 'Correo Electrónico',
        placeholder: 'tu@email.com',
      },
      topic: {
        label: 'Tema de Privacidad',
        placeholder: 'Selecciona un tema',
      },
      priority: {
        label: 'Prioridad',
        options: {
          low: 'Baja - Consulta general',
          medium: 'Media - Necesito ayuda',
          high: 'Alta - Asunto urgente',
        },
      },
      message: {
        label: 'Mensaje',
        placeholder: 'Describe tu consulta o solicitud de privacidad...',
      },
    },
    topics: [
      'Solicitud de datos personales',
      'Eliminación de cuenta',
      'Corrección de información',
      'Restricción de procesamiento',
      'Portabilidad de datos',
      'Objeción al procesamiento',
      'Configuración de privacidad',
      'Reporte de vulnerabilidad',
      'Consulta sobre cookies',
      'Otro tema de privacidad',
    ],
    submit: {
      idle: 'Enviar Consulta',
      sending: 'Enviando...',
      success: 'Mensaje Enviado',
      error: 'Error al Enviar',
    },
    messages: {
      success: 'Tu consulta ha sido enviada exitosamente. Te responderemos pronto.',
      error: 'Hubo un error al enviar tu consulta. Por favor, inténtalo de nuevo.',
    },
    privacyNote: {
      title: 'Protección de tu consulta',
      description: 'Todas las comunicaciones son tratadas de manera confidencial y están protegidas bajo nuestras políticas de privacidad. Solo personal autorizado accederá a tu información.',
    },
  },
};

const es_MX: ContactPrivacyTranslations = {
  ...es_ES,
};

const fi_FI: ContactPrivacyTranslations = {
  title: 'Yksityisyyden yhteystiedot',
  subtitle: 'Olemme täällä auttamassa sinua kaikissa yksityisyyteen, tietosuojaan tai oikeuksiesi käyttämiseen liittyvissä kysymyksissä',
  contactChannels: {
    title: 'Yhteyskanavat',
    dataProtectionOfficer: {
      title: 'Tietosuojavastaava',
      description: 'Tarkkoihin yksityisyyttä ja tietosuojaa koskeviin kysymyksiin',
      availability: '24/7',
      responseTime: '24 tuntia',
    },
    legalDepartment: {
      title: 'Lakiosasto',
      description: 'Muodollisiin tietooikeuksiin liittyviin pyyntöihin',
      availability: 'Maanantai - Perjantai 9-13:30',
      responseTime: '48 tuntia',
    },
    generalSupport: {
      title: 'Yleinen tuki',
      description: 'Yleisiin yksityisyyttä ja asetuksia koskeviin kysymyksiin',
      availability: 'Maanantai - Perjantai 9-13:30',
      responseTime: '12 tuntia',
    },
    contactAvailable: 'Saatavilla sovelluksesta',
  },
  form: {
    title: 'Yksityisyyslomake',
    fields: {
      name: {
        label: 'Koko nimi',
        placeholder: 'Koko nimesi',
      },
      email: {
        label: 'Sähköpostiosoite',
        placeholder: 'sinun@email.fi',
      },
      topic: {
        label: 'Yksityisyyden aihe',
        placeholder: 'Valitse aihe',
      },
      priority: {
        label: 'Prioriteetti',
        options: {
          low: 'Matala - Yleinen kysymys',
          medium: 'Keskitaso - Tarvitsen apua',
          high: 'Korkea - Kiireellinen asia',
        },
      },
      message: {
        label: 'Viesti',
        placeholder: 'Kuvaile yksityisyyskysymyksesi tai pyyntösi...',
      },
    },
    topics: [
      'Henkilötietopyyntö',
      'Tilin poisto',
      'Tietojen korjaus',
      'Käsittelyn rajoitus',
      'Tietojen siirrettävyys',
      'Käsittelyä koskeva vastustus',
      'Yksityisyysasetukset',
      'Haavoittuvuusraportti',
      'Evästekysymys',
      'Muu yksityisyysasia',
    ],
    submit: {
      idle: 'Lähetä kysely',
      sending: 'Lähetetään...',
      success: 'Viesti lähetetty',
      error: 'Lähetysvirhe',
    },
    messages: {
      success: 'Kyselysi on lähetetty onnistuneesti. Vastaamme pian.',
      error: 'Kyselysi lähettämisessä tapahtui virhe. Yritä uudelleen.',
    },
    privacyNote: {
      title: 'Kyselysi suojaus',
      description: 'Kaikkia viestejä käsitellään luottamuksellisesti ja ne on suojattu tietosuojakäytäntöjemme mukaisesti. Vain valtuutettu henkilöstö pääsee käsiksi tietoihisi.',
    },
  },
};

const fr_FR: ContactPrivacyTranslations = {
  title: 'Contact Confidentialité',
  subtitle: 'Nous sommes là pour vous aider avec toute question concernant la confidentialité, la protection des données ou l\'exercice de vos droits',
  contactChannels: {
    title: 'Canaux de Contact',
    dataProtectionOfficer: {
      title: 'Délégué à la Protection des Données',
      description: 'Pour des questions spécifiques sur la confidentialité et la protection des données',
      availability: '24/7',
      responseTime: '24 heures',
    },
    legalDepartment: {
      title: 'Département Juridique',
      description: 'Pour les demandes formelles liées aux droits sur les données',
      availability: 'Lundi au Vendredi 9h-13h30',
      responseTime: '48 heures',
    },
    generalSupport: {
      title: 'Support Général',
      description: 'Pour les questions générales sur la confidentialité et les paramètres',
      availability: 'Lundi au Vendredi 9h-13h30',
      responseTime: '12 heures',
    },
    contactAvailable: 'Disponible depuis l\'application',
  },
  form: {
    title: 'Formulaire de Confidentialité',
    fields: {
      name: {
        label: 'Nom Complet',
        placeholder: 'Votre nom complet',
      },
      email: {
        label: 'Adresse Email',
        placeholder: 'votre@email.fr',
      },
      topic: {
        label: 'Sujet de Confidentialité',
        placeholder: 'Sélectionnez un sujet',
      },
      priority: {
        label: 'Priorité',
        options: {
          low: 'Basse - Question générale',
          medium: 'Moyenne - Besoin d\'aide',
          high: 'Haute - Affaire urgente',
        },
      },
      message: {
        label: 'Message',
        placeholder: 'Décrivez votre question ou demande de confidentialité...',
      },
    },
    topics: [
      'Demande de données personnelles',
      'Suppression de compte',
      'Correction d\'informations',
      'Restriction de traitement',
      'Portabilité des données',
      'Objection au traitement',
      'Paramètres de confidentialité',
      'Rapport de vulnérabilité',
      'Question sur les cookies',
      'Autre question de confidentialité',
    ],
    submit: {
      idle: 'Envoyer la Demande',
      sending: 'Envoi...',
      success: 'Message Envoyé',
      error: 'Erreur d\'Envoi',
    },
    messages: {
      success: 'Votre demande a été envoyée avec succès. Nous répondrons bientôt.',
      error: 'Une erreur s\'est produite lors de l\'envoi de votre demande. Veuillez réessayer.',
    },
    privacyNote: {
      title: 'Protection de votre demande',
      description: 'Toutes les communications sont traitées de manière confidentielle et sont protégées par nos politiques de confidentialité. Seul le personnel autorisé accédera à vos informations.',
    },
  },
};

const fr_CA: ContactPrivacyTranslations = {
  ...fr_FR,
};

const he_IL: ContactPrivacyTranslations = {
  title: 'יצירת קשר לפרטיות',
  subtitle: 'אנחנו כאן כדי לעזור לך עם כל שאלה לגבי פרטיות, הגנת מידע או הפעלת זכויותיך',
  contactChannels: {
    title: 'ערוצי יצירת קשר',
    dataProtectionOfficer: {
      title: 'קצין הגנת מידע',
      description: 'לשאלות ספציפיות על פרטיות והגנת מידע',
      availability: '24/7',
      responseTime: '24 שעות',
    },
    legalDepartment: {
      title: 'מחלקה משפטית',
      description: 'לבקשות פורמליות הקשורות לזכויות מידע',
      availability: 'ראשון עד חמישי 9:00-13:30',
      responseTime: '48 שעות',
    },
    generalSupport: {
      title: 'תמיכה כללית',
      description: 'לשאלות כלליות על פרטיות והגדרות',
      availability: 'ראשון עד חמישי 9:00-13:30',
      responseTime: '12 שעות',
    },
    contactAvailable: 'זמין מהאפליקציה',
  },
  form: {
    title: 'טופס פרטיות',
    fields: {
      name: {
        label: 'שם מלא',
        placeholder: 'השם המלא שלך',
      },
      email: {
        label: 'כתובת אימייל',
        placeholder: 'your@email.com',
      },
      topic: {
        label: 'נושא פרטיות',
        placeholder: 'בחר נושא',
      },
      priority: {
        label: 'עדיפות',
        options: {
          low: 'נמוכה - שאלה כללית',
          medium: 'בינונית - זקוק לעזרה',
          high: 'גבוהה - עניין דחוף',
        },
      },
      message: {
        label: 'הודעה',
        placeholder: 'תאר את שאלת או בקשת הפרטיות שלך...',
      },
    },
    topics: [
      'בקשת מידע אישי',
      'מחיקת חשבון',
      'תיקון מידע',
      'הגבלת עיבוד',
      'ניידות נתונים',
      'התנגדות לעיבוד',
      'הגדרות פרטיות',
      'דיווח על פגיעות',
      'שאלה על עוגיות',
      'נושא פרטיות אחר',
    ],
    submit: {
      idle: 'שלח שאלה',
      sending: 'שולח...',
      success: 'הודעה נשלחה',
      error: 'שגיאה בשליחה',
    },
    messages: {
      success: 'שאלתך נשלחה בהצלחה. נגיב בקרוב.',
      error: 'אירעה שגיאה בשליחת שאלתך. נסה שוב.',
    },
    privacyNote: {
      title: 'הגנה על שאלתך',
      description: 'כל התקשורת מטופלת בסודיות ומוגנת תחת מדיניות הפרטיות שלנו. רק צוות מורשה יוכל לגשת למידע שלך.',
    },
  },
};

const hr_HR: ContactPrivacyTranslations = {
  title: 'Kontakt za privatnost',
  subtitle: 'Ovdje smo kako bismo vam pomogli s bilo kojim upitima o privatnosti, zaštiti podataka ili ostvarivanju vaših prava',
  contactChannels: {
    title: 'Kanali za kontakt',
    dataProtectionOfficer: {
      title: 'Službenik za zaštitu podataka',
      description: 'Za specifične upite o privatnosti i zaštiti podataka',
      availability: '24/7',
      responseTime: '24 sata',
    },
    legalDepartment: {
      title: 'Pravni odjel',
      description: 'Za formalne zahtjeve vezane uz prava podataka',
      availability: 'Ponedjeljak do petak 9:00-13:30',
      responseTime: '48 sati',
    },
    generalSupport: {
      title: 'Opća podrška',
      description: 'Za opće upite o privatnosti i postavkama',
      availability: 'Ponedjeljak do petak 9:00-13:30',
      responseTime: '12 sati',
    },
    contactAvailable: 'Dostupno iz aplikacije',
  },
  form: {
    title: 'Obrazac za privatnost',
    fields: {
      name: {
        label: 'Puno ime',
        placeholder: 'Vaše puno ime',
      },
      email: {
        label: 'Adresa e-pošte',
        placeholder: 'your@email.com',
      },
      topic: {
        label: 'Tema privatnosti',
        placeholder: 'Odaberite temu',
      },
      priority: {
        label: 'Prioritet',
        options: {
          low: 'Nizak - Opće pitanje',
          medium: 'Srednji - Potrebna pomoć',
          high: 'Visok - Hitno pitanje',
        },
      },
      message: {
        label: 'Poruka',
        placeholder: 'Opišite svoje pitanje ili zahtjev o privatnosti...',
      },
    },
    topics: [
      'Zahtjev za osobnim podacima',
      'Brisanje računa',
      'Ispravak podataka',
      'Ograničenje obrade',
      'Prenosivost podataka',
      'Prigovor na obradu',
      'Postavke privatnosti',
      'Prijavljivanje ranjivosti',
      'Pitanje o kolačićima',
      'Drugo pitanje o privatnosti',
    ],
    submit: {
      idle: 'Pošalji upit',
      sending: 'Slanje...',
      success: 'Poruka poslana',
      error: 'Greška pri slanju',
    },
    messages: {
      success: 'Vaš upit je uspješno poslan. Uskoro ćemo odgovoriti.',
      error: 'Došlo je do greške pri slanju vašeg upita. Pokušajte ponovno.',
    },
    privacyNote: {
      title: 'Zaštita vašeg upita',
      description: 'Sva komunikacija se obrađuje povjerljivo i zaštićena je našom politikom privatnosti. Samo ovlašteno osoblje može pristupiti vašim podacima.',
    },
  },
};

const hu_HU: ContactPrivacyTranslations = {
  title: 'Adatvédelmi Kapcsolat',
  subtitle: 'Itt vagyunk, hogy segítsünk bármilyen adatvédelemmel, adatvédelemmel vagy jogai gyakorlásával kapcsolatos kérdésben',
  contactChannels: {
    title: 'Kapcsolatfelvételi Csatornák',
    dataProtectionOfficer: {
      title: 'Adatvédelmi Tisztviselő',
      description: 'Konkrét kérdésekhez az adatvédelemről és adatvédelemről',
      availability: '24/7',
      responseTime: '24 óra',
    },
    legalDepartment: {
      title: 'Jogi Osztály',
      description: 'Adatjogokkal kapcsolatos formális kérésekhez',
      availability: 'Hétfőtől péntekig 9:00-13:30',
      responseTime: '48 óra',
    },
    generalSupport: {
      title: 'Általános Támogatás',
      description: 'Általános kérdésekhez az adatvédelemről és beállításokról',
      availability: 'Hétfőtől péntekig 9:00-13:30',
      responseTime: '12 óra',
    },
    contactAvailable: 'Elérhető az alkalmazásból',
  },
  form: {
    title: 'Adatvédelmi Űrlap',
    fields: {
      name: {
        label: 'Teljes Név',
        placeholder: 'Az Ön teljes neve',
      },
      email: {
        label: 'Email Cím',
        placeholder: 'your@email.com',
      },
      topic: {
        label: 'Adatvédelmi Téma',
        placeholder: 'Válasszon témát',
      },
      priority: {
        label: 'Prioritás',
        options: {
          low: 'Alacsony - Általános kérdés',
          medium: 'Közepes - Segítségre van szükségem',
          high: 'Magas - Sürgős ügy',
        },
      },
      message: {
        label: 'Üzenet',
        placeholder: 'Írja le adatvédelmi kérdését vagy kérését...',
      },
    },
    topics: [
      'Személyes adatok kérése',
      'Fiók törlése',
      'Információ javítása',
      'Feldolgozás korlátozása',
      'Adathordozhatóság',
      'Feldolgozás elleni kifogás',
      'Adatvédelmi beállítások',
      'Sebezhetőség jelentése',
      'Cookie kérdés',
      'Egyéb adatvédelmi ügy',
    ],
    submit: {
      idle: 'Kérdés Küldése',
      sending: 'Küldés...',
      success: 'Üzenet Elküldve',
      error: 'Küldési Hiba',
    },
    messages: {
      success: 'Kérdését sikeresen elküldtük. Hamarosan válaszolunk.',
      error: 'Hiba történt a kérdés elküldésekor. Kérjük, próbálja újra.',
    },
    privacyNote: {
      title: 'Kérdésének védelme',
      description: 'Minden kommunikációt bizalmasan kezelünk és adatvédelmi szabályzatunk védi. Csak felhatalmazott személyzet férhet hozzá az információihoz.',
    },
  },
};

const hi_IN: ContactPrivacyTranslations = {
  title: 'गोपनीयता संपर्क',
  subtitle: 'हम यहाँ आपकी गोपनीयता, डेटा सुरक्षा या अपने अधिकारों के प्रयोग के बारे में किसी भी पूछताछ में मदद करने के लिए हैं',
  contactChannels: {
    title: 'संपर्क चैनल',
    dataProtectionOfficer: {
      title: 'डेटा सुरक्षा अधिकारी',
      description: 'गोपनीयता और डेटा सुरक्षा के बारे में विशिष्ट पूछताछ के लिए',
      availability: '24/7',
      responseTime: '24 घंटे',
    },
    legalDepartment: {
      title: 'कानूनी विभाग',
      description: 'डेटा अधिकारों से संबंधित औपचारिक अनुरोधों के लिए',
      availability: 'सोमवार से शुक्रवार सुबह 9 बजे - दोपहर 1:30 बजे',
      responseTime: '48 घंटे',
    },
    generalSupport: {
      title: 'सामान्य सहायता',
      description: 'गोपनीयता और सेटिंग्स के बारे में सामान्य पूछताछ के लिए',
      availability: 'सोमवार से शुक्रवार सुबह 9 बजे - दोपहर 1:30 बजे',
      responseTime: '12 घंटे',
    },
    contactAvailable: 'ऐप से उपलब्ध',
  },
  form: {
    title: 'गोपनीयता फॉर्म',
    fields: {
      name: {
        label: 'पूरा नाम',
        placeholder: 'आपका पूरा नाम',
      },
      email: {
        label: 'ईमेल पता',
        placeholder: 'आपका@email.com',
      },
      topic: {
        label: 'गोपनीयता विषय',
        placeholder: 'एक विषय चुनें',
      },
      priority: {
        label: 'प्राथमिकता',
        options: {
          low: 'कम - सामान्य पूछताछ',
          medium: 'मध्यम - मदद चाहिए',
          high: 'उच्च - तत्काल मामला',
        },
      },
      message: {
        label: 'संदेश',
        placeholder: 'अपनी गोपनीयता पूछताछ या अनुरोध का वर्णन करें...',
      },
    },
    topics: [
      'व्यक्तिगत डेटा अनुरोध',
      'खाता हटाना',
      'जानकारी सुधार',
      'प्रसंस्करण प्रतिबंध',
      'डेटा पोर्टेबिलिटी',
      'प्रसंस्करण पर आपत्ति',
      'गोपनीयता सेटिंग्स',
      'भेद्यता रिपोर्ट',
      'कुकी पूछताछ',
      'अन्य गोपनीयता मामला',
    ],
    submit: {
      idle: 'पूछताछ भेजें',
      sending: 'भेजा जा रहा है...',
      success: 'संदेश भेजा गया',
      error: 'भेजने में त्रुटि',
    },
    messages: {
      success: 'आपकी पूछताछ सफलतापूर्वक भेजी गई है। हम जल्द ही जवाब देंगे।',
      error: 'आपकी पूछताछ भेजने में एक त्रुटि हुई। कृपया पुनः प्रयास करें।',
    },
    privacyNote: {
      title: 'आपकी पूछताछ की सुरक्षा',
      description: 'सभी संचारों को गोपनीय रूप से संभाला जाता है और हमारी गोपनीयता नीतियों के तहत सुरक्षित हैं। केवल अधिकृत कर्मी आपकी जानकारी तक पहुंच सकेंगे।',
    },
  },
};

const id_ID: ContactPrivacyTranslations = {
  title: 'Kontak Privasi',
  subtitle: 'Kami di sini untuk membantu Anda dengan pertanyaan apa pun tentang privasi, perlindungan data, atau pelaksanaan hak Anda',
  contactChannels: {
    title: 'Saluran Kontak',
    dataProtectionOfficer: {
      title: 'Petugas Perlindungan Data',
      description: 'Untuk pertanyaan spesifik tentang privasi dan perlindungan data',
      availability: '24/7',
      responseTime: '24 jam',
    },
    legalDepartment: {
      title: 'Departemen Hukum',
      description: 'Untuk permintaan formal terkait hak data',
      availability: 'Senin hingga Jumat 09:00-13:30',
      responseTime: '48 jam',
    },
    generalSupport: {
      title: 'Dukungan Umum',
      description: 'Untuk pertanyaan umum tentang privasi dan pengaturan',
      availability: 'Senin hingga Jumat 09:00-13:30',
      responseTime: '12 jam',
    },
    contactAvailable: 'Tersedia dari aplikasi',
  },
  form: {
    title: 'Formulir Privasi',
    fields: {
      name: {
        label: 'Nama Lengkap',
        placeholder: 'Nama lengkap Anda',
      },
      email: {
        label: 'Alamat Email',
        placeholder: 'anda@email.com',
      },
      topic: {
        label: 'Topik Privasi',
        placeholder: 'Pilih topik',
      },
      priority: {
        label: 'Prioritas',
        options: {
          low: 'Rendah - Pertanyaan umum',
          medium: 'Sedang - Butuh bantuan',
          high: 'Tinggi - Masalah mendesak',
        },
      },
      message: {
        label: 'Pesan',
        placeholder: 'Jelaskan pertanyaan atau permintaan privasi Anda...',
      },
    },
    topics: [
      'Permintaan data pribadi',
      'Penghapusan akun',
      'Koreksi informasi',
      'Pembatasan pemrosesan',
      'Portabilitas data',
      'Keberatan terhadap pemrosesan',
      'Pengaturan privasi',
      'Laporan kerentanan',
      'Pertanyaan cookie',
      'Masalah privasi lainnya',
    ],
    submit: {
      idle: 'Kirim Pertanyaan',
      sending: 'Mengirim...',
      success: 'Pesan Terkirim',
      error: 'Gagal Mengirim',
    },
    messages: {
      success: 'Pertanyaan Anda telah berhasil dikirim. Kami akan segera merespons.',
      error: 'Terjadi kesalahan saat mengirim pertanyaan Anda. Silakan coba lagi.',
    },
    privacyNote: {
      title: 'Perlindungan pertanyaan Anda',
      description: 'Semua komunikasi ditangani secara rahasia dan dilindungi di bawah kebijakan privasi kami. Hanya personel yang berwenang yang akan mengakses informasi Anda.',
    },
  },
};

const it_IT: ContactPrivacyTranslations = {
  title: 'Contatto Privacy',
  subtitle: 'Siamo qui per aiutarti con qualsiasi domanda su privacy, protezione dei dati o esercizio dei tuoi diritti',
  contactChannels: {
    title: 'Canali di Contatto',
    dataProtectionOfficer: {
      title: 'Responsabile della Protezione dei Dati',
      description: 'Per domande specifiche su privacy e protezione dei dati',
      availability: '24/7',
      responseTime: '24 ore',
    },
    legalDepartment: {
      title: 'Dipartimento Legale',
      description: 'Per richieste formali relative ai diritti sui dati',
      availability: 'Lunedì a Venerdì 9:00-13:30',
      responseTime: '48 ore',
    },
    generalSupport: {
      title: 'Supporto Generale',
      description: 'Per domande generali su privacy e impostazioni',
      availability: 'Lunedì a Venerdì 9:00-13:30',
      responseTime: '12 ore',
    },
    contactAvailable: 'Disponibile dall\'app',
  },
  form: {
    title: 'Modulo Privacy',
    fields: {
      name: {
        label: 'Nome Completo',
        placeholder: 'Il tuo nome completo',
      },
      email: {
        label: 'Indirizzo Email',
        placeholder: 'tuo@email.it',
      },
      topic: {
        label: 'Argomento Privacy',
        placeholder: 'Seleziona un argomento',
      },
      priority: {
        label: 'Priorità',
        options: {
          low: 'Bassa - Domanda generale',
          medium: 'Media - Ho bisogno di aiuto',
          high: 'Alta - Questione urgente',
        },
      },
      message: {
        label: 'Messaggio',
        placeholder: 'Descrivi la tua domanda o richiesta sulla privacy...',
      },
    },
    topics: [
      'Richiesta dati personali',
      'Eliminazione account',
      'Correzione informazioni',
      'Limitazione del trattamento',
      'Portabilità dei dati',
      'Obiezione al trattamento',
      'Impostazioni privacy',
      'Segnalazione vulnerabilità',
      'Domanda sui cookie',
      'Altra questione privacy',
    ],
    submit: {
      idle: 'Invia Richiesta',
      sending: 'Invio...',
      success: 'Messaggio Inviato',
      error: 'Errore di Invio',
    },
    messages: {
      success: 'La tua richiesta è stata inviata con successo. Risponderemo presto.',
      error: 'Si è verificato un errore nell\'invio della tua richiesta. Riprova.',
    },
    privacyNote: {
      title: 'Protezione della tua richiesta',
      description: 'Tutte le comunicazioni sono trattate in modo confidenziale e sono protette dalle nostre politiche sulla privacy. Solo il personale autorizzato accederà alle tue informazioni.',
    },
  },
};

const ja_JP: ContactPrivacyTranslations = {
  title: 'プライバシーに関するお問い合わせ',
  subtitle: 'プライバシー、データ保護、権利の行使に関するご質問をサポートいたします',
  contactChannels: {
    title: 'お問い合わせチャネル',
    dataProtectionOfficer: {
      title: 'データ保護責任者',
      description: 'プライバシーとデータ保護に関する具体的なお問い合わせ',
      availability: '24時間年中無休',
      responseTime: '24時間',
    },
    legalDepartment: {
      title: '法務部門',
      description: 'データ権に関する正式な要請',
      availability: '月曜日から金曜日 午前9時〜午後1時30分',
      responseTime: '48時間',
    },
    generalSupport: {
      title: '一般サポート',
      description: 'プライバシーと設定に関する一般的なお問い合わせ',
      availability: '月曜日から金曜日 午前9時〜午後1時30分',
      responseTime: '12時間',
    },
    contactAvailable: 'アプリから利用可能',
  },
  form: {
    title: 'プライバシーフォーム',
    fields: {
      name: {
        label: '氏名',
        placeholder: 'お名前をフルネームで',
      },
      email: {
        label: 'メールアドレス',
        placeholder: 'your@email.com',
      },
      topic: {
        label: 'プライバシートピック',
        placeholder: 'トピックを選択',
      },
      priority: {
        label: '優先度',
        options: {
          low: '低 - 一般的なお問い合わせ',
          medium: '中 - サポートが必要',
          high: '高 - 緊急の件',
        },
      },
      message: {
        label: 'メッセージ',
        placeholder: 'プライバシーに関するお問い合わせやリクエストを記述してください...',
      },
    },
    topics: [
      '個人データのリクエスト',
      'アカウントの削除',
      '情報の修正',
      '処理の制限',
      'データポータビリティ',
      '処理への異議',
      'プライバシー設定',
      '脆弱性レポート',
      'Cookieに関するお問い合わせ',
      'その他のプライバシー事項',
    ],
    submit: {
      idle: 'お問い合わせを送信',
      sending: '送信中...',
      success: 'メッセージを送信しました',
      error: '送信エラー',
    },
    messages: {
      success: 'お問い合わせが正常に送信されました。まもなく返信いたします。',
      error: 'お問い合わせの送信中にエラーが発生しました。もう一度お試しください。',
    },
    privacyNote: {
      title: 'お問い合わせの保護',
      description: 'すべての通信は機密として扱われ、当社のプライバシーポリシーに基づいて保護されます。承認された担当者のみがお客様の情報にアクセスします。',
    },
  },
};

const ko_KR: ContactPrivacyTranslations = {
  title: '개인정보 문의',
  subtitle: '개인정보 보호, 데이터 보호 또는 권리 행사에 대한 문의를 도와드립니다',
  contactChannels: {
    title: '연락 채널',
    dataProtectionOfficer: {
      title: '데이터 보호 책임자',
      description: '개인정보 보호 및 데이터 보호에 대한 구체적인 문의',
      availability: '연중무휴 24시간',
      responseTime: '24시간',
    },
    legalDepartment: {
      title: '법무 부서',
      description: '데이터 권리와 관련된 공식 요청',
      availability: '월요일부터 금요일 오전 9시 - 오후 1시 30분',
      responseTime: '48시간',
    },
    generalSupport: {
      title: '일반 지원',
      description: '개인정보 보호 및 설정에 대한 일반 문의',
      availability: '월요일부터 금요일 오전 9시 - 오후 1시 30분',
      responseTime: '12시간',
    },
    contactAvailable: '앱에서 이용 가능',
  },
  form: {
    title: '개인정보 양식',
    fields: {
      name: {
        label: '이름',
        placeholder: '전체 이름',
      },
      email: {
        label: '이메일 주소',
        placeholder: 'your@email.com',
      },
      topic: {
        label: '개인정보 주제',
        placeholder: '주제 선택',
      },
      priority: {
        label: '우선순위',
        options: {
          low: '낮음 - 일반 문의',
          medium: '보통 - 도움 필요',
          high: '높음 - 긴급 사항',
        },
      },
      message: {
        label: '메시지',
        placeholder: '개인정보 문의 또는 요청 사항을 설명해주세요...',
      },
    },
    topics: [
      '개인 데이터 요청',
      '계정 삭제',
      '정보 수정',
      '처리 제한',
      '데이터 이동성',
      '처리에 대한 이의',
      '개인정보 설정',
      '취약점 보고',
      '쿠키 문의',
      '기타 개인정보 사항',
    ],
    submit: {
      idle: '문의 제출',
      sending: '전송 중...',
      success: '메시지 전송됨',
      error: '전송 오류',
    },
    messages: {
      success: '문의가 성공적으로 전송되었습니다. 곧 답변드리겠습니다.',
      error: '문의 전송 중 오류가 발생했습니다. 다시 시도해주세요.',
    },
    privacyNote: {
      title: '문의 보호',
      description: '모든 통신은 기밀로 처리되며 당사의 개인정보 보호 정책에 따라 보호됩니다. 승인된 직원만 귀하의 정보에 액세스할 수 있습니다.',
    },
  },
};

const ms_MY: ContactPrivacyTranslations = {
  title: 'Hubungan Privasi',
  subtitle: 'Kami di sini untuk membantu anda dengan sebarang pertanyaan mengenai privasi, perlindungan data atau menggunakan hak anda',
  contactChannels: {
    title: 'Saluran Hubungan',
    dataProtectionOfficer: {
      title: 'Pegawai Perlindungan Data',
      description: 'Untuk pertanyaan khusus mengenai privasi dan perlindungan data',
      availability: '24/7',
      responseTime: '24 jam',
    },
    legalDepartment: {
      title: 'Jabatan Undang-undang',
      description: 'Untuk permintaan formal berkaitan hak data',
      availability: 'Isnin hingga Jumaat 9AM-1:30PM',
      responseTime: '48 jam',
    },
    generalSupport: {
      title: 'Sokongan Umum',
      description: 'Untuk pertanyaan umum mengenai privasi dan tetapan',
      availability: 'Isnin hingga Jumaat 9AM-1:30PM',
      responseTime: '12 jam',
    },
    contactAvailable: 'Tersedia dari apl',
  },
  form: {
    title: 'Borang Privasi',
    fields: {
      name: {
        label: 'Nama Penuh',
        placeholder: 'Nama penuh anda',
      },
      email: {
        label: 'Alamat Email',
        placeholder: 'your@email.com',
      },
      topic: {
        label: 'Topik Privasi',
        placeholder: 'Pilih topik',
      },
      priority: {
        label: 'Keutamaan',
        options: {
          low: 'Rendah - Pertanyaan umum',
          medium: 'Sederhana - Perlukan bantuan',
          high: 'Tinggi - Perkara mendesak',
        },
      },
      message: {
        label: 'Mesej',
        placeholder: 'Terangkan pertanyaan atau permintaan privasi anda...',
      },
    },
    topics: [
      'Permintaan data peribadi',
      'Pemadaman akaun',
      'Pembetulan maklumat',
      'Sekatan pemprosesan',
      'Kemudahalihan data',
      'Bantahan pemprosesan',
      'Tetapan privasi',
      'Laporan kelemahan',
      'Pertanyaan kuki',
      'Perkara privasi lain',
    ],
    submit: {
      idle: 'Hantar Pertanyaan',
      sending: 'Menghantar...',
      success: 'Mesej Dihantar',
      error: 'Ralat Menghantar',
    },
    messages: {
      success: 'Pertanyaan anda telah berjaya dihantar. Kami akan menjawab tidak lama lagi.',
      error: 'Terdapat ralat semasa menghantar pertanyaan anda. Sila cuba lagi.',
    },
    privacyNote: {
      title: 'Perlindungan pertanyaan anda',
      description: 'Semua komunikasi dirawat dengan sulit dan dilindungi di bawah dasar privasi kami. Hanya kakitangan yang diberi kuasa akan mengakses maklumat anda.',
    },
  },
};

const nl_NL: ContactPrivacyTranslations = {
  title: 'Privacy Contact',
  subtitle: 'We zijn er om u te helpen met vragen over privacy, gegevensbescherming of het uitoefenen van uw rechten',
  contactChannels: {
    title: 'Contactkanalen',
    dataProtectionOfficer: {
      title: 'Functionaris Gegevensbescherming',
      description: 'Voor specifieke vragen over privacy en gegevensbescherming',
      availability: '24/7',
      responseTime: '24 uur',
    },
    legalDepartment: {
      title: 'Juridische Afdeling',
      description: 'Voor formele verzoeken met betrekking tot gegevensrechten',
      availability: 'Maandag tot Vrijdag 9:00-13:30',
      responseTime: '48 uur',
    },
    generalSupport: {
      title: 'Algemene Ondersteuning',
      description: 'Voor algemene vragen over privacy en instellingen',
      availability: 'Maandag tot Vrijdag 9:00-13:30',
      responseTime: '12 uur',
    },
    contactAvailable: 'Beschikbaar via de app',
  },
  form: {
    title: 'Privacyformulier',
    fields: {
      name: {
        label: 'Volledige Naam',
        placeholder: 'Uw volledige naam',
      },
      email: {
        label: 'E-mailadres',
        placeholder: 'uw@email.nl',
      },
      topic: {
        label: 'Privacyonderwerp',
        placeholder: 'Selecteer een onderwerp',
      },
      priority: {
        label: 'Prioriteit',
        options: {
          low: 'Laag - Algemene vraag',
          medium: 'Gemiddeld - Hulp nodig',
          high: 'Hoog - Urgente zaak',
        },
      },
      message: {
        label: 'Bericht',
        placeholder: 'Beschrijf uw privacyvraag of verzoek...',
      },
    },
    topics: [
      'Persoonlijke gegevens verzoek',
      'Account verwijderen',
      'Informatie correctie',
      'Verwerkingsbeperking',
      'Gegevensportabiliteit',
      'Bezwaar tegen verwerking',
      'Privacy-instellingen',
      'Kwetsbaarheidsrapport',
      'Cookie-vraag',
      'Andere privacykwestie',
    ],
    submit: {
      idle: 'Vraag Verzenden',
      sending: 'Verzenden...',
      success: 'Bericht Verzonden',
      error: 'Verzendingsfout',
    },
    messages: {
      success: 'Uw vraag is succesvol verzonden. We zullen snel reageren.',
      error: 'Er is een fout opgetreden bij het verzenden van uw vraag. Probeer het opnieuw.',
    },
    privacyNote: {
      title: 'Bescherming van uw vraag',
      description: 'Alle communicatie wordt vertrouwelijk behandeld en is beschermd onder ons privacybeleid. Alleen geautoriseerd personeel heeft toegang tot uw informatie.',
    },
  },
};

const no_NO: ContactPrivacyTranslations = {
  title: 'Personvernkontakt',
  subtitle: 'Vi er her for å hjelpe deg med spørsmål om personvern, databeskyttelse eller utøvelse av dine rettigheter',
  contactChannels: {
    title: 'Kontaktkanaler',
    dataProtectionOfficer: {
      title: 'Personvernombud',
      description: 'For spesifikke spørsmål om personvern og databeskyttelse',
      availability: '24/7',
      responseTime: '24 timer',
    },
    legalDepartment: {
      title: 'Juridisk avdeling',
      description: 'For formelle forespørsler relatert til datarettigheter',
      availability: 'Mandag til Fredag 9:00-13:30',
      responseTime: '48 timer',
    },
    generalSupport: {
      title: 'Generell støtte',
      description: 'For generelle spørsmål om personvern og innstillinger',
      availability: 'Mandag til Fredag 9:00-13:30',
      responseTime: '12 timer',
    },
    contactAvailable: 'Tilgjengelig fra appen',
  },
  form: {
    title: 'Personvernskjema',
    fields: {
      name: {
        label: 'Fullt navn',
        placeholder: 'Ditt fulle navn',
      },
      email: {
        label: 'E-postadresse',
        placeholder: 'din@email.no',
      },
      topic: {
        label: 'Personverntema',
        placeholder: 'Velg et tema',
      },
      priority: {
        label: 'Prioritet',
        options: {
          low: 'Lav - Generell forespørsel',
          medium: 'Middels - Trenger hjelp',
          high: 'Høy - Presserende sak',
        },
      },
      message: {
        label: 'Melding',
        placeholder: 'Beskriv ditt personvernspørsmål eller forespørsel...',
      },
    },
    topics: [
      'Forespørsel om personopplysninger',
      'Sletting av konto',
      'Korrigering av informasjon',
      'Behandlingsbegrensning',
      'Dataportabilitet',
      'Innsigelse mot behandling',
      'Personverninnstillinger',
      'Sårbarhetsrapport',
      'Cookie-spørsmål',
      'Annen personvernsak',
    ],
    submit: {
      idle: 'Send Forespørsel',
      sending: 'Sender...',
      success: 'Melding Sendt',
      error: 'Sendingsfeil',
    },
    messages: {
      success: 'Din forespørsel har blitt sendt. Vi vil svare snart.',
      error: 'Det oppstod en feil ved sending av forespørselen. Vennligst prøv igjen.',
    },
    privacyNote: {
      title: 'Beskyttelse av din forespørsel',
      description: 'All kommunikasjon behandles konfidensielt og er beskyttet under våre personvernregler. Kun autorisert personell vil få tilgang til informasjonen din.',
    },
  },
};

const pl_PL: ContactPrivacyTranslations = {
  title: 'Kontakt w sprawie prywatności',
  subtitle: 'Jesteśmy tutaj, aby pomóc Ci w każdym pytaniu dotyczącym prywatności, ochrony danych lub wykonywania Twoich praw',
  contactChannels: {
    title: 'Kanały kontaktu',
    dataProtectionOfficer: {
      title: 'Inspektor Ochrony Danych',
      description: 'W przypadku szczegółowych pytań dotyczących prywatności i ochrony danych',
      availability: '24/7',
      responseTime: '24 godziny',
    },
    legalDepartment: {
      title: 'Dział prawny',
      description: 'W przypadku formalnych wniosków dotyczących praw do danych',
      availability: 'Poniedziałek do Piątek 9:00-13:30',
      responseTime: '48 godzin',
    },
    generalSupport: {
      title: 'Wsparcie ogólne',
      description: 'W przypadku ogólnych pytań dotyczących prywatności i ustawień',
      availability: 'Poniedziałek do Piątek 9:00-13:30',
      responseTime: '12 godzin',
    },
    contactAvailable: 'Dostępne w aplikacji',
  },
  form: {
    title: 'Formularz prywatności',
    fields: {
      name: {
        label: 'Pełne imię i nazwisko',
        placeholder: 'Twoje pełne imię i nazwisko',
      },
      email: {
        label: 'Adres e-mail',
        placeholder: 'twoj@email.pl',
      },
      topic: {
        label: 'Temat prywatności',
        placeholder: 'Wybierz temat',
      },
      priority: {
        label: 'Priorytet',
        options: {
          low: 'Niski - Pytanie ogólne',
          medium: 'Średni - Potrzebuję pomocy',
          high: 'Wysoki - Pilna sprawa',
        },
      },
      message: {
        label: 'Wiadomość',
        placeholder: 'Opisz swoje pytanie lub żądanie dotyczące prywatności...',
      },
    },
    topics: [
      'Wniosek o dane osobowe',
      'Usunięcie konta',
      'Korekta informacji',
      'Ograniczenie przetwarzania',
      'Przenoszalność danych',
      'Sprzeciw wobec przetwarzania',
      'Ustawienia prywatności',
      'Raport o podatności',
      'Pytanie o pliki cookie',
      'Inna kwestia prywatności',
    ],
    submit: {
      idle: 'Wyślij Zapytanie',
      sending: 'Wysyłanie...',
      success: 'Wiadomość Wysłana',
      error: 'Błąd Wysyłania',
    },
    messages: {
      success: 'Twoje zapytanie zostało pomyślnie wysłane. Wkrótce odpowiemy.',
      error: 'Wystąpił błąd podczas wysyłania zapytania. Spróbuj ponownie.',
    },
    privacyNote: {
      title: 'Ochrona Twojego zapytania',
      description: 'Cała komunikacja jest traktowana poufnie i chroniona zgodnie z naszą polityką prywatności. Tylko upoważniony personel będzie miał dostęp do Twoich informacji.',
    },
  },
};

const pt_BR: ContactPrivacyTranslations = {
  title: 'Contato de Privacidade',
  subtitle: 'Estamos aqui para ajudá-lo com qualquer pergunta sobre privacidade, proteção de dados ou exercício de seus direitos',
  contactChannels: {
    title: 'Canais de Contato',
    dataProtectionOfficer: {
      title: 'Encarregado de Proteção de Dados',
      description: 'Para consultas específicas sobre privacidade e proteção de dados',
      availability: '24/7',
      responseTime: '24 horas',
    },
    legalDepartment: {
      title: 'Departamento Jurídico',
      description: 'Para solicitações formais relacionadas a direitos de dados',
      availability: 'Segunda a Sexta 9h-13h30',
      responseTime: '48 horas',
    },
    generalSupport: {
      title: 'Suporte Geral',
      description: 'Para consultas gerais sobre privacidade e configurações',
      availability: 'Segunda a Sexta 9h-13h30',
      responseTime: '12 horas',
    },
    contactAvailable: 'Disponível no aplicativo',
  },
  form: {
    title: 'Formulário de Privacidade',
    fields: {
      name: {
        label: 'Nome Completo',
        placeholder: 'Seu nome completo',
      },
      email: {
        label: 'Endereço de E-mail',
        placeholder: 'seu@email.com',
      },
      topic: {
        label: 'Tópico de Privacidade',
        placeholder: 'Selecione um tópico',
      },
      priority: {
        label: 'Prioridade',
        options: {
          low: 'Baixa - Consulta geral',
          medium: 'Média - Preciso de ajuda',
          high: 'Alta - Assunto urgente',
        },
      },
      message: {
        label: 'Mensagem',
        placeholder: 'Descreva sua consulta ou solicitação de privacidade...',
      },
    },
    topics: [
      'Solicitação de dados pessoais',
      'Exclusão de conta',
      'Correção de informações',
      'Restrição de processamento',
      'Portabilidade de dados',
      'Objeção ao processamento',
      'Configurações de privacidade',
      'Relatório de vulnerabilidade',
      'Consulta sobre cookies',
      'Outro assunto de privacidade',
    ],
    submit: {
      idle: 'Enviar Consulta',
      sending: 'Enviando...',
      success: 'Mensagem Enviada',
      error: 'Erro ao Enviar',
    },
    messages: {
      success: 'Sua consulta foi enviada com sucesso. Responderemos em breve.',
      error: 'Houve um erro ao enviar sua consulta. Por favor, tente novamente.',
    },
    privacyNote: {
      title: 'Proteção da sua consulta',
      description: 'Todas as comunicações são tratadas de forma confidencial e protegidas sob nossas políticas de privacidade. Somente pessoal autorizado acessará suas informações.',
    },
  },
};

const pt_PT: ContactPrivacyTranslations = {
  title: 'Contacto de Privacidade',
  subtitle: 'Estamos aqui para o ajudar com qualquer questão sobre privacidade, proteção de dados ou exercício dos seus direitos',
  contactChannels: {
    title: 'Canais de Contacto',
    dataProtectionOfficer: {
      title: 'Encarregado de Proteção de Dados',
      description: 'Para questões específicas sobre privacidade e proteção de dados',
      availability: '24/7',
      responseTime: '24 horas',
    },
    legalDepartment: {
      title: 'Departamento Jurídico',
      description: 'Para pedidos formais relacionados com direitos de dados',
      availability: 'Segunda a Sexta 9h-13h30',
      responseTime: '48 horas',
    },
    generalSupport: {
      title: 'Suporte Geral',
      description: 'Para questões gerais sobre privacidade e definições',
      availability: 'Segunda a Sexta 9h-13h30',
      responseTime: '12 horas',
    },
    contactAvailable: 'Disponível na aplicação',
  },
  form: {
    title: 'Formulário de Privacidade',
    fields: {
      name: {
        label: 'Nome Completo',
        placeholder: 'O seu nome completo',
      },
      email: {
        label: 'Endereço de Email',
        placeholder: 'seu@email.pt',
      },
      topic: {
        label: 'Tópico de Privacidade',
        placeholder: 'Selecione um tópico',
      },
      priority: {
        label: 'Prioridade',
        options: {
          low: 'Baixa - Questão geral',
          medium: 'Média - Preciso de ajuda',
          high: 'Alta - Assunto urgente',
        },
      },
      message: {
        label: 'Mensagem',
        placeholder: 'Descreva a sua questão ou pedido de privacidade...',
      },
    },
    topics: [
      'Pedido de dados pessoais',
      'Eliminação de conta',
      'Correção de informações',
      'Restrição de processamento',
      'Portabilidade de dados',
      'Objeção ao processamento',
      'Definições de privacidade',
      'Relatório de vulnerabilidade',
      'Questão sobre cookies',
      'Outro assunto de privacidade',
    ],
    submit: {
      idle: 'Enviar Questão',
      sending: 'A enviar...',
      success: 'Mensagem Enviada',
      error: 'Erro ao Enviar',
    },
    messages: {
      success: 'A sua questão foi enviada com sucesso. Responderemos em breve.',
      error: 'Ocorreu um erro ao enviar a sua questão. Por favor, tente novamente.',
    },
    privacyNote: {
      title: 'Proteção da sua questão',
      description: 'Todas as comunicações são tratadas de forma confidencial e protegidas sob as nossas políticas de privacidade. Apenas pessoal autorizado acederá às suas informações.',
    },
  },
};

const ro_RO: ContactPrivacyTranslations = {
  title: 'Contact Confidențialitate',
  subtitle: 'Suntem aici pentru a vă ajuta cu orice întrebări despre confidențialitate, protecția datelor sau exercitarea drepturilor dumneavoastră',
  contactChannels: {
    title: 'Canale de Contact',
    dataProtectionOfficer: {
      title: 'Ofițer Protecția Datelor',
      description: 'Pentru întrebări specifice despre confidențialitate și protecția datelor',
      availability: '24/7',
      responseTime: '24 ore',
    },
    legalDepartment: {
      title: 'Departament Juridic',
      description: 'Pentru solicitări formale legate de drepturile asupra datelor',
      availability: 'Luni până vineri 9:00-13:30',
      responseTime: '48 ore',
    },
    generalSupport: {
      title: 'Asistență Generală',
      description: 'Pentru întrebări generale despre confidențialitate și setări',
      availability: 'Luni până vineri 9:00-13:30',
      responseTime: '12 ore',
    },
    contactAvailable: 'Disponibil din aplicație',
  },
  form: {
    title: 'Formular Confidențialitate',
    fields: {
      name: {
        label: 'Nume Complet',
        placeholder: 'Numele dumneavoastră complet',
      },
      email: {
        label: 'Adresă Email',
        placeholder: 'your@email.com',
      },
      topic: {
        label: 'Subiect Confidențialitate',
        placeholder: 'Selectați un subiect',
      },
      priority: {
        label: 'Prioritate',
        options: {
          low: 'Scăzută - Întrebare generală',
          medium: 'Medie - Necesit asistență',
          high: 'Ridicată - Chestiune urgentă',
        },
      },
      message: {
        label: 'Mesaj',
        placeholder: 'Descrieți întrebarea sau solicitarea dumneavoastră de confidențialitate...',
      },
    },
    topics: [
      'Solicitare date personale',
      'Ștergere cont',
      'Corectare informații',
      'Restricționare prelucrare',
      'Portabilitate date',
      'Opoziție prelucrare',
      'Setări confidențialitate',
      'Raport vulnerabilitate',
      'Întrebare despre cookie-uri',
      'Altă chestiune de confidențialitate',
    ],
    submit: {
      idle: 'Trimite Întrebarea',
      sending: 'Se trimite...',
      success: 'Mesaj Trimis',
      error: 'Eroare la Trimitere',
    },
    messages: {
      success: 'Întrebarea dumneavoastră a fost trimisă cu succes. Vom răspunde în curând.',
      error: 'A apărut o eroare la trimiterea întrebării dumneavoastră. Vă rugăm să încercați din nou.',
    },
    privacyNote: {
      title: 'Protecția întrebării dumneavoastră',
      description: 'Toate comunicările sunt tratate confidențial și sunt protejate de politicile noastre de confidențialitate. Doar personalul autorizat va avea acces la informațiile dumneavoastră.',
    },
  },
};

const ru_RU: ContactPrivacyTranslations = {
  title: 'Контакт по вопросам конфиденциальности',
  subtitle: 'Мы здесь, чтобы помочь вам с любыми вопросами о конфиденциальности, защите данных или осуществлении ваших прав',
  contactChannels: {
    title: 'Каналы связи',
    dataProtectionOfficer: {
      title: 'Ответственный за защиту данных',
      description: 'Для конкретных вопросов о конфиденциальности и защите данных',
      availability: '24/7',
      responseTime: '24 часа',
    },
    legalDepartment: {
      title: 'Юридический отдел',
      description: 'Для официальных запросов, связанных с правами на данные',
      availability: 'Понедельник - Пятница 9:00-13:30',
      responseTime: '48 часов',
    },
    generalSupport: {
      title: 'Общая поддержка',
      description: 'Для общих вопросов о конфиденциальности и настройках',
      availability: 'Понедельник - Пятница 9:00-13:30',
      responseTime: '12 часов',
    },
    contactAvailable: 'Доступно из приложения',
  },
  form: {
    title: 'Форма конфиденциальности',
    fields: {
      name: {
        label: 'Полное имя',
        placeholder: 'Ваше полное имя',
      },
      email: {
        label: 'Адрес электронной почты',
        placeholder: 'ваш@email.ru',
      },
      topic: {
        label: 'Тема конфиденциальности',
        placeholder: 'Выберите тему',
      },
      priority: {
        label: 'Приоритет',
        options: {
          low: 'Низкий - Общий вопрос',
          medium: 'Средний - Нужна помощь',
          high: 'Высокий - Срочный вопрос',
        },
      },
      message: {
        label: 'Сообщение',
        placeholder: 'Опишите ваш вопрос или запрос по конфиденциальности...',
      },
    },
    topics: [
      'Запрос личных данных',
      'Удаление учетной записи',
      'Исправление информации',
      'Ограничение обработки',
      'Переносимость данных',
      'Возражение против обработки',
      'Настройки конфиденциальности',
      'Отчет об уязвимости',
      'Вопрос о файлах cookie',
      'Другой вопрос конфиденциальности',
    ],
    submit: {
      idle: 'Отправить запрос',
      sending: 'Отправка...',
      success: 'Сообщение отправлено',
      error: 'Ошибка отправки',
    },
    messages: {
      success: 'Ваш запрос был успешно отправлен. Мы ответим в ближайшее время.',
      error: 'Произошла ошибка при отправке вашего запроса. Пожалуйста, попробуйте еще раз.',
    },
    privacyNote: {
      title: 'Защита вашего запроса',
      description: 'Все сообщения обрабатываются конфиденциально и защищены в соответствии с нашей политикой конфиденциальности. Только уполномоченный персонал получит доступ к вашей информации.',
    },
  },
};

const sk_SK: ContactPrivacyTranslations = {
  title: 'Kontakt na ochranu súkromia',
  subtitle: 'Sme tu, aby sme vám pomohli s akýmikoľvek otázkami o ochrane súkromia, ochrane údajov alebo výkone vašich práv',
  contactChannels: {
    title: 'Kontaktné kanály',
    dataProtectionOfficer: {
      title: 'Zodpovedná osoba za ochranu údajov',
      description: 'Pre konkrétne otázky o ochrane súkromia a ochrane údajov',
      availability: '24/7',
      responseTime: '24 hodín',
    },
    legalDepartment: {
      title: 'Právne oddelenie',
      description: 'Pre formálne žiadosti týkajúce sa práv k údajom',
      availability: 'Pondelok až piatok 9:00-13:30',
      responseTime: '48 hodín',
    },
    generalSupport: {
      title: 'Všeobecná podpora',
      description: 'Pre všeobecné otázky o ochrane súkromia a nastaveniach',
      availability: 'Pondelok až piatok 9:00-13:30',
      responseTime: '12 hodín',
    },
    contactAvailable: 'Dostupné z aplikácie',
  },
  form: {
    title: 'Formulár ochrany súkromia',
    fields: {
      name: {
        label: 'Celé meno',
        placeholder: 'Vaše celé meno',
      },
      email: {
        label: 'Emailová adresa',
        placeholder: 'your@email.com',
      },
      topic: {
        label: 'Téma ochrany súkromia',
        placeholder: 'Vyberte tému',
      },
      priority: {
        label: 'Priorita',
        options: {
          low: 'Nízka - Všeobecný dotaz',
          medium: 'Stredná - Potrebujem pomoc',
          high: 'Vysoká - Naliehavá záležitosť',
        },
      },
      message: {
        label: 'Správa',
        placeholder: 'Opíšte váš dotaz alebo žiadosť týkajúcu sa ochrany súkromia...',
      },
    },
    topics: [
      'Žiadosť o osobné údaje',
      'Vymazanie účtu',
      'Oprava informácií',
      'Obmedzenie spracovania',
      'Prenosnosť údajov',
      'Námietka proti spracovaniu',
      'Nastavenia ochrany súkromia',
      'Hlásenie zraniteľnosti',
      'Otázka o cookies',
      'Iná záležitosť ochrany súkromia',
    ],
    submit: {
      idle: 'Odoslať dotaz',
      sending: 'Odosielanie...',
      success: 'Správa odoslaná',
      error: 'Chyba odosielania',
    },
    messages: {
      success: 'Váš dotaz bol úspešne odoslaný. Čoskoro odpovieme.',
      error: 'Pri odosielaní vášho dotazu došlo k chybe. Skúste to prosím znova.',
    },
    privacyNote: {
      title: 'Ochrana vášho dotazu',
      description: 'Všetky komunikácie sú spracované dôverne a chránené našimi zásadami ochrany súkromia. Len oprávnení zamestnanci budú mať prístup k vašim informáciám.',
    },
  },
};

const sv_SE: ContactPrivacyTranslations = {
  title: 'Integritetskontakt',
  subtitle: 'Vi är här för att hjälpa dig med frågor om integritet, dataskydd eller utövande av dina rättigheter',
  contactChannels: {
    title: 'Kontaktkanaler',
    dataProtectionOfficer: {
      title: 'Dataskyddsombud',
      description: 'För specifika frågor om integritet och dataskydd',
      availability: '24/7',
      responseTime: '24 timmar',
    },
    legalDepartment: {
      title: 'Juridisk avdelning',
      description: 'För formella förfrågningar relaterade till datarättigheter',
      availability: 'Måndag till Fredag 9:00-13:30',
      responseTime: '48 timmar',
    },
    generalSupport: {
      title: 'Allmän support',
      description: 'För allmänna frågor om integritet och inställningar',
      availability: 'Måndag till Fredag 9:00-13:30',
      responseTime: '12 timmar',
    },
    contactAvailable: 'Tillgänglig från appen',
  },
  form: {
    title: 'Integritetsformulär',
    fields: {
      name: {
        label: 'Fullständigt namn',
        placeholder: 'Ditt fullständiga namn',
      },
      email: {
        label: 'E-postadress',
        placeholder: 'din@email.se',
      },
      topic: {
        label: 'Integritetsämne',
        placeholder: 'Välj ett ämne',
      },
      priority: {
        label: 'Prioritet',
        options: {
          low: 'Låg - Allmän förfrågan',
          medium: 'Medel - Behöver hjälp',
          high: 'Hög - Brådskande ärende',
        },
      },
      message: {
        label: 'Meddelande',
        placeholder: 'Beskriv din integritetsfråga eller förfrågan...',
      },
    },
    topics: [
      'Begäran om personuppgifter',
      'Radering av konto',
      'Rättelse av information',
      'Begränsning av behandling',
      'Dataportabilitet',
      'Invändning mot behandling',
      'Integritetsinställningar',
      'Sårbarhetsrapport',
      'Cookie-fråga',
      'Annan integritetsfråga',
    ],
    submit: {
      idle: 'Skicka Förfrågan',
      sending: 'Skickar...',
      success: 'Meddelande Skickat',
      error: 'Skickningsfel',
    },
    messages: {
      success: 'Din förfrågan har skickats framgångsrikt. Vi svarar snart.',
      error: 'Ett fel uppstod när din förfrågan skickades. Försök igen.',
    },
    privacyNote: {
      title: 'Skydd av din förfrågan',
      description: 'All kommunikation behandlas konfidentiellt och skyddas under våra integritetspolicyer. Endast auktoriserad personal kommer att få tillgång till din information.',
    },
  },
};

const th_TH: ContactPrivacyTranslations = {
  title: 'ติดต่อเรื่องความเป็นส่วนตัว',
  subtitle: 'เราพร้อมช่วยเหลือคุณในทุกคำถามเกี่ยวกับความเป็นส่วนตัว การปกป้องข้อมูล หรือการใช้สิทธิของคุณ',
  contactChannels: {
    title: 'ช่องทางการติดต่อ',
    dataProtectionOfficer: {
      title: 'เจ้าหน้าที่คุ้มครองข้อมูล',
      description: 'สำหรับคำถามเฉพาะเจาะจงเกี่ยวกับความเป็นส่วนตัวและการปกป้องข้อมูล',
      availability: '24/7',
      responseTime: '24 ชั่วโมง',
    },
    legalDepartment: {
      title: 'แผนกกฎหมาย',
      description: 'สำหรับคำขอที่เป็นทางการเกี่ยวกับสิทธิข้อมูล',
      availability: 'จันทร์ถึงศุกร์ 9:00-13:30',
      responseTime: '48 ชั่วโมง',
    },
    generalSupport: {
      title: 'การสนับสนุนทั่วไป',
      description: 'สำหรับคำถามทั่วไปเกี่ยวกับความเป็นส่วนตัวและการตั้งค่า',
      availability: 'จันทร์ถึงศุกร์ 9:00-13:30',
      responseTime: '12 ชั่วโมง',
    },
    contactAvailable: 'พร้อมใช้งานจากแอป',
  },
  form: {
    title: 'แบบฟอร์มความเป็นส่วนตัว',
    fields: {
      name: {
        label: 'ชื่อเต็ม',
        placeholder: 'ชื่อเต็มของคุณ',
      },
      email: {
        label: 'ที่อยู่อีเมล',
        placeholder: 'your@email.com',
      },
      topic: {
        label: 'หัวข้อความเป็นส่วนตัว',
        placeholder: 'เลือกหัวข้อ',
      },
      priority: {
        label: 'ความสำคัญ',
        options: {
          low: 'ต่ำ - คำถามทั่วไป',
          medium: 'ปานกลาง - ต้องการความช่วยเหลือ',
          high: 'สูง - เรื่องเร่งด่วน',
        },
      },
      message: {
        label: 'ข้อความ',
        placeholder: 'อธิบายคำถามหรือคำขอเกี่ยวกับความเป็นส่วนตัวของคุณ...',
      },
    },
    topics: [
      'ขอข้อมูลส่วนบุคคล',
      'ลบบัญชี',
      'แก้ไขข้อมูล',
      'จำกัดการประมวลผล',
      'การพกพาข้อมูล',
      'คัดค้านการประมวลผล',
      'การตั้งค่าความเป็นส่วนตัว',
      'รายงานช่องโหว่',
      'คำถามเกี่ยวกับคุกกี้',
      'เรื่องความเป็นส่วนตัวอื่นๆ',
    ],
    submit: {
      idle: 'ส่งคำถาม',
      sending: 'กำลังส่ง...',
      success: 'ส่งข้อความแล้ว',
      error: 'เกิดข้อผิดพลาดในการส่ง',
    },
    messages: {
      success: 'คำถามของคุณถูกส่งเรียบร้อยแล้ว เราจะตอบกลับโดยเร็ว',
      error: 'เกิดข้อผิดพลาดในการส่งคำถามของคุณ กรุณาลองอีกครั้ง',
    },
    privacyNote: {
      title: 'การปกป้องคำถามของคุณ',
      description: 'การสื่อสารทั้งหมดได้รับการจัดการอย่างเป็นความลับและได้รับการปกป้องภายใต้นโยบายความเป็นส่วนตัวของเรา เฉพาะเจ้าหน้าที่ที่ได้รับอนุญาตเท่านั้นที่จะเข้าถึงข้อมูลของคุณ',
    },
  },
};

const tr_TR: ContactPrivacyTranslations = {
  title: 'Gizlilik İletişimi',
  subtitle: 'Gizlilik, veri koruma veya haklarınızı kullanma konusundaki her türlü sorunuzda size yardımcı olmak için buradayız',
  contactChannels: {
    title: 'İletişim Kanalları',
    dataProtectionOfficer: {
      title: 'Veri Koruma Görevlisi',
      description: 'Gizlilik ve veri koruma hakkında özel sorular için',
      availability: '7/24',
      responseTime: '24 saat',
    },
    legalDepartment: {
      title: 'Hukuk Departmanı',
      description: 'Veri haklarıyla ilgili resmi talepler için',
      availability: 'Pazartesi - Cuma 9:00-13:30',
      responseTime: '48 saat',
    },
    generalSupport: {
      title: 'Genel Destek',
      description: 'Gizlilik ve ayarlar hakkında genel sorular için',
      availability: 'Pazartesi - Cuma 9:00-13:30',
      responseTime: '12 saat',
    },
    contactAvailable: 'Uygulamadan ulaşılabilir',
  },
  form: {
    title: 'Gizlilik Formu',
    fields: {
      name: {
        label: 'Tam Ad',
        placeholder: 'Tam adınız',
      },
      email: {
        label: 'E-posta Adresi',
        placeholder: 'sizin@email.com',
      },
      topic: {
        label: 'Gizlilik Konusu',
        placeholder: 'Bir konu seçin',
      },
      priority: {
        label: 'Öncelik',
        options: {
          low: 'Düşük - Genel soru',
          medium: 'Orta - Yardıma ihtiyacım var',
          high: 'Yüksek - Acil konu',
        },
      },
      message: {
        label: 'Mesaj',
        placeholder: 'Gizlilik sorunuzu veya talebinizi açıklayın...',
      },
    },
    topics: [
      'Kişisel veri talebi',
      'Hesap silme',
      'Bilgi düzeltme',
      'İşleme kısıtlaması',
      'Veri taşınabilirliği',
      'İşleme itiraz',
      'Gizlilik ayarları',
      'Güvenlik açığı raporu',
      'Çerez sorusu',
      'Diğer gizlilik konusu',
    ],
    submit: {
      idle: 'Soru Gönder',
      sending: 'Gönderiliyor...',
      success: 'Mesaj Gönderildi',
      error: 'Gönderme Hatası',
    },
    messages: {
      success: 'Sorunuz başarıyla gönderildi. Yakında cevap vereceğiz.',
      error: 'Sorunuz gönderilirken bir hata oluştu. Lütfen tekrar deneyin.',
    },
    privacyNote: {
      title: 'Sorunuzun korunması',
      description: 'Tüm iletişimler gizli olarak ele alınır ve gizlilik politikalarımız kapsamında korunur. Yalnızca yetkili personel bilgilerinize erişebilecektir.',
    },
  },
};

const uk_UA: ContactPrivacyTranslations = {
  title: 'Контакт з питань конфіденційності',
  subtitle: 'Ми тут, щоб допомогти вам з будь-якими питаннями про конфіденційність, захист даних або здійснення ваших прав',
  contactChannels: {
    title: 'Канали зв\'язку',
    dataProtectionOfficer: {
      title: 'Відповідальний за захист даних',
      description: 'Для конкретних запитань про конфіденційність та захист даних',
      availability: '24/7',
      responseTime: '24 години',
    },
    legalDepartment: {
      title: 'Юридичний відділ',
      description: 'Для офіційних запитів, пов\'язаних з правами на дані',
      availability: 'Понеділок - П\'ятниця 9:00-13:30',
      responseTime: '48 годин',
    },
    generalSupport: {
      title: 'Загальна підтримка',
      description: 'Для загальних запитань про конфіденційність та налаштування',
      availability: 'Понеділок - П\'ятниця 9:00-13:30',
      responseTime: '12 годин',
    },
    contactAvailable: 'Доступно з додатка',
  },
  form: {
    title: 'Форма конфіденційності',
    fields: {
      name: {
        label: 'Повне ім\'я',
        placeholder: 'Ваше повне ім\'я',
      },
      email: {
        label: 'Адреса електронної пошти',
        placeholder: 'ваша@email.ua',
      },
      topic: {
        label: 'Тема конфіденційності',
        placeholder: 'Виберіть тему',
      },
      priority: {
        label: 'Пріоритет',
        options: {
          low: 'Низький - Загальне запитання',
          medium: 'Середній - Потрібна допомога',
          high: 'Високий - Термінове питання',
        },
      },
      message: {
        label: 'Повідомлення',
        placeholder: 'Опишіть ваше запитання або запит щодо конфіденційності...',
      },
    },
    topics: [
      'Запит особистих даних',
      'Видалення облікового запису',
      'Виправлення інформації',
      'Обмеження обробки',
      'Переносність даних',
      'Заперечення проти обробки',
      'Налаштування конфіденційності',
      'Звіт про вразливість',
      'Запитання про файли cookie',
      'Інше питання конфіденційності',
    ],
    submit: {
      idle: 'Надіслати запит',
      sending: 'Надсилання...',
      success: 'Повідомлення надіслано',
      error: 'Помилка надсилання',
    },
    messages: {
      success: 'Ваш запит було успішно надіслано. Ми відповімо найближчим часом.',
      error: 'Сталася помилка під час надсилання вашого запиту. Будь ласка, спробуйте ще раз.',
    },
    privacyNote: {
      title: 'Захист вашого запиту',
      description: 'Всі повідомлення обробляються конфіденційно та захищені відповідно до нашої політики конфіденційності. Тільки уповноважений персонал отримає доступ до вашої інформації.',
    },
  },
};

const vi_VN: ContactPrivacyTranslations = {
  title: 'Liên hệ về Quyền riêng tư',
  subtitle: 'Chúng tôi sẵn sàng hỗ trợ bạn với bất kỳ câu hỏi nào về quyền riêng tư, bảo vệ dữ liệu hoặc thực hiện quyền của bạn',
  contactChannels: {
    title: 'Kênh Liên hệ',
    dataProtectionOfficer: {
      title: 'Cán bộ Bảo vệ Dữ liệu',
      description: 'Cho các câu hỏi cụ thể về quyền riêng tư và bảo vệ dữ liệu',
      availability: '24/7',
      responseTime: '24 giờ',
    },
    legalDepartment: {
      title: 'Phòng Pháp lý',
      description: 'Cho các yêu cầu chính thức liên quan đến quyền dữ liệu',
      availability: 'Thứ Hai đến Thứ Sáu 9:00-13:30',
      responseTime: '48 giờ',
    },
    generalSupport: {
      title: 'Hỗ trợ Chung',
      description: 'Cho các câu hỏi chung về quyền riêng tư và cài đặt',
      availability: 'Thứ Hai đến Thứ Sáu 9:00-13:30',
      responseTime: '12 giờ',
    },
    contactAvailable: 'Có sẵn từ ứng dụng',
  },
  form: {
    title: 'Biểu mẫu Quyền riêng tư',
    fields: {
      name: {
        label: 'Họ và Tên',
        placeholder: 'Họ và tên đầy đủ của bạn',
      },
      email: {
        label: 'Địa chỉ Email',
        placeholder: 'your@email.com',
      },
      topic: {
        label: 'Chủ đề Quyền riêng tư',
        placeholder: 'Chọn một chủ đề',
      },
      priority: {
        label: 'Mức độ ưu tiên',
        options: {
          low: 'Thấp - Câu hỏi chung',
          medium: 'Trung bình - Cần trợ giúp',
          high: 'Cao - Vấn đề khẩn cấp',
        },
      },
      message: {
        label: 'Tin nhắn',
        placeholder: 'Mô tả câu hỏi hoặc yêu cầu về quyền riêng tư của bạn...',
      },
    },
    topics: [
      'Yêu cầu dữ liệu cá nhân',
      'Xóa tài khoản',
      'Sửa thông tin',
      'Hạn chế xử lý',
      'Di chuyển dữ liệu',
      'Phản đối xử lý',
      'Cài đặt quyền riêng tư',
      'Báo cáo lỗ hổng',
      'Câu hỏi về cookie',
      'Vấn đề quyền riêng tư khác',
    ],
    submit: {
      idle: 'Gửi Câu hỏi',
      sending: 'Đang gửi...',
      success: 'Đã gửi Tin nhắn',
      error: 'Lỗi Gửi',
    },
    messages: {
      success: 'Câu hỏi của bạn đã được gửi thành công. Chúng tôi sẽ phản hồi sớm.',
      error: 'Đã xảy ra lỗi khi gửi câu hỏi của bạn. Vui lòng thử lại.',
    },
    privacyNote: {
      title: 'Bảo vệ câu hỏi của bạn',
      description: 'Tất cả thông tin liên lạc được xử lý bảo mật và được bảo vệ theo chính sách quyền riêng tư của chúng tôi. Chỉ nhân viên được ủy quyền mới có quyền truy cập thông tin của bạn.',
    },
  },
};

const zh_CN: ContactPrivacyTranslations = {
  title: '隐私联系',
  subtitle: '我们随时为您解答有关隐私、数据保护或行使您的权利的任何问题',
  contactChannels: {
    title: '联系渠道',
    dataProtectionOfficer: {
      title: '数据保护官',
      description: '针对隐私和数据保护的具体咨询',
      availability: '全天候',
      responseTime: '24小时',
    },
    legalDepartment: {
      title: '法务部门',
      description: '针对数据权利相关的正式请求',
      availability: '周一至周五 9:00-13:30',
      responseTime: '48小时',
    },
    generalSupport: {
      title: '一般支持',
      description: '针对隐私和设置的一般咨询',
      availability: '周一至周五 9:00-13:30',
      responseTime: '12小时',
    },
    contactAvailable: '可从应用程序访问',
  },
  form: {
    title: '隐私表单',
    fields: {
      name: {
        label: '全名',
        placeholder: '您的全名',
      },
      email: {
        label: '电子邮件地址',
        placeholder: 'your@email.com',
      },
      topic: {
        label: '隐私主题',
        placeholder: '选择主题',
      },
      priority: {
        label: '优先级',
        options: {
          low: '低 - 一般咨询',
          medium: '中 - 需要帮助',
          high: '高 - 紧急事项',
        },
      },
      message: {
        label: '消息',
        placeholder: '描述您的隐私咨询或请求...',
      },
    },
    topics: [
      '个人数据请求',
      '账户删除',
      '信息更正',
      '处理限制',
      '数据可移植性',
      '处理异议',
      '隐私设置',
      '漏洞报告',
      'Cookie咨询',
      '其他隐私事项',
    ],
    submit: {
      idle: '提交咨询',
      sending: '发送中...',
      success: '消息已发送',
      error: '发送错误',
    },
    messages: {
      success: '您的咨询已成功发送。我们将尽快回复。',
      error: '发送咨询时出错。请重试。',
    },
    privacyNote: {
      title: '保护您的咨询',
      description: '所有通信均被保密处理，并受我们隐私政策保护。只有授权人员才能访问您的信息。',
    },
  },
};

// Translations map
const translations: Record<string, ContactPrivacyTranslations> = {
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
 * Get contact privacy translations for a specific locale
 * Falls back to en_GB if locale not found
 */
export function getContactPrivacyTranslations(locale: string): ContactPrivacyTranslations {
  return translations[locale] || translations.en_GB;
}

export default translations;

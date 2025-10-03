/**
 * Privacy Page Translations
 * Comprehensive translations for all supported languages
 */

export interface PolicySectionContent {
  title: string;
  lastUpdated: string;
  lastUpdatedDate: string;
  paragraphs: string[];
  subsections?: {
    title: string;
    items: string[];
  }[];
}

export interface PrivacyTranslations {
  hero: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    updateDate: string;
    stats: {
      privacy: string;
      privacyLabel: string;
      gdpr: string;
      gdprLabel: string;
    };
  };
  policy: {
    title: string;
    subtitle: string;
    intro: string;
    quickNavigation: string;
    readFullPolicy: string;
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
    fullSections: {
      introduction: PolicySectionContent;
      dataCollection: PolicySectionContent;
      dataUsage: PolicySectionContent;
      dataSharing: PolicySectionContent;
      cookies: PolicySectionContent;
      security: PolicySectionContent;
      retention: PolicySectionContent;
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
    updateDate: 'October 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Privacy',
      gdpr: 'GDPR',
      gdprLabel: 'Compliance',
    },
  },
  policy: {
    title: 'Privacy Policy',
    subtitle: 'Learn in detail how we protect and handle your personal information at Hero Budget',
    intro: 'Hero Budget is committed to protecting your privacy and ensuring the security of your personal information.',
    quickNavigation: 'Quick Navigation',
    readFullPolicy: 'Read Full Policy',
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
    fullSections: {
      introduction: {
        title: 'Introduction and Scope',
        lastUpdated: 'Last updated',
        lastUpdatedDate: '2nd October, 2025',
        paragraphs: [
          'At Hero Budget, we are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, share and protect your personal information when you use our mobile application and related services.',
          'This policy applies to all Hero Budget users, regardless of their geographical location, and complies with international data protection regulations, including the General Data Protection Regulation (GDPR) of the European Union and the California Consumer Privacy Act (CCPA).',
          'By using Hero Budget, you accept the practices described in this policy. If you do not agree with any aspect of this policy, please do not use our services.'
        ]
      },
      dataCollection: {
        title: 'Information We Collect',
        lastUpdated: 'Last updated',
        lastUpdatedDate: '2nd October, 2025',
        paragraphs: [
          'We collect different types of information to provide and improve our services:'
        ],
        subsections: [
          {
            title: 'Information you provide directly:',
            items: [
              'Account information: name, email address, profile photo',
              'Financial data: recurring bills, categories, savings goals',
              'User preferences: app settings, notifications'
            ]
          },
          {
            title: 'Information collected automatically:',
            items: [
              'Device information: model, operating system, unique identifiers',
              'Performance data: error logs, response time, crashes'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'How We Use Your Information',
        lastUpdated: 'Last updated',
        lastUpdatedDate: '2nd October, 2025',
        paragraphs: [
          'We only use the information you manually enter into the application for the following purposes:'
        ],
        subsections: [
          {
            title: 'Service provision:',
            items: [
              'Store the recurring bill data you manually enter',
              'Generate reminders and analyses of your recurring bills',
              'Synchronise your data across devices where you use the app',
              'Provide technical and customer support'
            ]
          },
          {
            title: 'Improvement and personalisation:',
            items: [
              'Personalise your experience in the app',
              'Develop new features and improvements',
              'Conduct aggregated and anonymous usage analysis',
              'Optimise app performance'
            ]
          },
          {
            title: 'Communication and security:',
            items: [
              'Send important notifications about your account',
              'Communicate app updates'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Sharing Information',
        lastUpdated: 'Last updated',
        lastUpdatedDate: '2nd October, 2025',
        paragraphs: [
          'We do not sell, rent or share your personal information with third parties for commercial purposes. We only share information in the following limited circumstances:'
        ],
        subsections: [
          {
            title: 'Service providers:',
            items: [
              'Cloud hosting services with complete encryption',
              'Aggregated and anonymous analytics services',
              'Customer support services',
              'Security and fraud prevention services'
            ]
          },
          {
            title: 'Legal requirements:',
            items: [
              'When required by law or valid legal process',
              'To protect the rights and safety of Hero Budget and its users',
              'In case of merger, acquisition or sale of assets (with prior notice)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Cookies and Similar Technologies',
        lastUpdated: 'Last updated',
        lastUpdatedDate: '2nd October, 2025',
        paragraphs: [
          'As a React Native mobile application, we do not use traditional web cookies. Instead, we use local storage technologies on your device to improve your experience and enable core functionality:'
        ],
        subsections: [
          {
            title: 'Local storage technologies we use:',
            items: [
              'AsyncStorage: to store your preferences, settings and app configuration',
              'Secure storage: to protect sensitive data like authentication tokens',
              'Cache storage: to improve app performance and enable offline functionality',
              'Session data: to maintain your logged-in state across app sessions'
            ]
          },
          {
            title: 'Managing your data:',
            items: [
              'You can clear cached data from the app settings menu',
              'You can log out to remove session tokens and sensitive data',
              'You can uninstall the app to completely remove all local data',
              'Clearing certain data may require you to log in again or reconfigure settings'
            ]
          }
        ]
      },
      security: {
        title: 'Data Security',
        lastUpdated: 'Last updated',
        lastUpdatedDate: '2nd October, 2025',
        paragraphs: [
          'We implement appropriate security measures to protect the information you store locally on your device:'
        ],
        subsections: [
          {
            title: 'Technical measures:',
            items: [
              'Secure local storage on your device',
              'Secure communication with our servers when syncing data',
              'Secure authentication to access your account',
              'Basic protection against unauthorised access'
            ]
          },
          {
            title: 'Organisational measures:',
            items: [
              'Only you have direct access to the data you enter in the app',
              'Our team follows secure development best practices',
              'Regular app security reviews',
              'Procedures to report and resolve security issues'
            ]
          }
        ]
      },
      retention: {
        title: 'Data Retention',
        lastUpdated: 'Last updated',
        lastUpdatedDate: '2nd October, 2025',
        paragraphs: [
          'We retain your personal information only for as long as necessary to fulfil the purposes described in this policy:'
        ],
        subsections: [
          {
            title: 'Retention periods:',
            items: [
              'Account data: whilst you maintain an active account',
              'Transaction data: up to 7 years for regulatory compliance',
              'Support data: up to 3 years after resolution'
            ]
          },
          {
            title: 'Data deletion:',
            items: [
              'Automatic deletion when retention periods expire',
              'Complete deletion of locally stored data',
              'Possibility to request early deletion (subject to legal restrictions)',
              'Deletion notification when technically feasible'
            ]
          }
        ]
      }
    }
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
    updateDate: 'Octubre 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Privacidad',
      gdpr: 'GDPR',
      gdprLabel: 'Cumplimiento',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'Política de Privacidad',
    subtitle: 'Aprende en detalle cómo protegemos y manejamos tu información personal en Hero Budget',
    intro: 'Hero Budget se compromete a proteger tu privacidad y garantizar la seguridad de tu información personal.',
    quickNavigation: 'Navegación Rápida',
    readFullPolicy: 'Leer Política Completa',
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
    fullSections: {
      introduction: {
        title: 'Introducción y Alcance',
        lastUpdated: 'Última actualización',
        lastUpdatedDate: '2 de octubre de 2025',
        paragraphs: [
          'En Hero Budget, estamos comprometidos a proteger y respetar tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos tu información personal cuando utilizas nuestra aplicación móvil y servicios relacionados.',
          'Esta política se aplica a todos los usuarios de Hero Budget, independientemente de su ubicación geográfica, y cumple con las regulaciones internacionales de protección de datos, incluido el Reglamento General de Protección de Datos (GDPR) de la Unión Europea y la Ley de Privacidad del Consumidor de California (CCPA).',
          'Al usar Hero Budget, aceptas las prácticas descritas en esta política. Si no estás de acuerdo con algún aspecto de esta política, por favor no utilices nuestros servicios.'
        ]
      },
      dataCollection: {
        title: 'Información que Recopilamos',
        lastUpdated: 'Última actualización',
        lastUpdatedDate: '2 de octubre de 2025',
        paragraphs: [
          'Recopilamos diferentes tipos de información para proporcionar y mejorar nuestros servicios:'
        ],
        subsections: [
          {
            title: 'Información que proporcionas directamente:',
            items: [
              'Información de cuenta: nombre, dirección de correo electrónico, foto de perfil',
              'Datos financieros: facturas recurrentes, categorías, objetivos de ahorro',
              'Preferencias de usuario: configuración de la aplicación, notificaciones'
            ]
          },
          {
            title: 'Información recopilada automáticamente:',
            items: [
              'Información del dispositivo: modelo, sistema operativo, identificadores únicos',
              'Datos de rendimiento: registros de errores, tiempo de respuesta, fallos'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'Cómo Usamos tu Información',
        lastUpdated: 'Última actualización',
        lastUpdatedDate: '2 de octubre de 2025',
        paragraphs: [
          'Solo utilizamos la información que ingresas manualmente en la aplicación para los siguientes propósitos:'
        ],
        subsections: [
          {
            title: 'Provisión de servicios:',
            items: [
              'Almacenar los datos de facturas recurrentes que ingresas manualmente',
              'Generar recordatorios y análisis de tus facturas recurrentes',
              'Sincronizar tus datos entre dispositivos donde uses la aplicación',
              'Proporcionar soporte técnico y de atención al cliente'
            ]
          },
          {
            title: 'Mejora y personalización:',
            items: [
              'Personalizar tu experiencia en la aplicación',
              'Desarrollar nuevas funciones y mejoras',
              'Realizar análisis de uso agregados y anónimos',
              'Optimizar el rendimiento de la aplicación'
            ]
          },
          {
            title: 'Comunicación y seguridad:',
            items: [
              'Enviar notificaciones importantes sobre tu cuenta',
              'Comunicar actualizaciones de la aplicación'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Compartir Información',
        lastUpdated: 'Última actualización',
        lastUpdatedDate: '2 de octubre de 2025',
        paragraphs: [
          'No vendemos, alquilamos ni compartimos tu información personal con terceros con fines comerciales. Solo compartimos información en las siguientes circunstancias limitadas:'
        ],
        subsections: [
          {
            title: 'Proveedores de servicios:',
            items: [
              'Servicios de alojamiento en la nube con cifrado completo',
              'Servicios de análisis agregados y anónimos',
              'Servicios de atención al cliente',
              'Servicios de seguridad y prevención de fraude'
            ]
          },
          {
            title: 'Requisitos legales:',
            items: [
              'Cuando sea requerido por ley o proceso legal válido',
              'Para proteger los derechos y seguridad de Hero Budget y sus usuarios',
              'En caso de fusión, adquisición o venta de activos (con aviso previo)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Cookies y Tecnologías Similares',
        lastUpdated: 'Última actualización',
        lastUpdatedDate: '2 de octubre de 2025',
        paragraphs: [
          'Como aplicación móvil React Native, no utilizamos cookies web tradicionales. En su lugar, usamos tecnologías de almacenamiento local en tu dispositivo para mejorar tu experiencia y habilitar funcionalidades principales:'
        ],
        subsections: [
          {
            title: 'Tecnologías de almacenamiento local que utilizamos:',
            items: [
              'AsyncStorage: para almacenar tus preferencias, configuración y ajustes de la aplicación',
              'Almacenamiento seguro: para proteger datos sensibles como tokens de autenticación',
              'Almacenamiento de caché: para mejorar el rendimiento de la aplicación y habilitar funcionalidad sin conexión',
              'Datos de sesión: para mantener tu estado de inicio de sesión entre sesiones de la aplicación'
            ]
          },
          {
            title: 'Gestión de tus datos:',
            items: [
              'Puedes borrar los datos en caché desde el menú de configuración de la aplicación',
              'Puedes cerrar sesión para eliminar tokens de sesión y datos sensibles',
              'Puedes desinstalar la aplicación para eliminar completamente todos los datos locales',
              'Borrar ciertos datos puede requerir que inicies sesión nuevamente o reconfigures ajustes'
            ]
          }
        ]
      },
      security: {
        title: 'Seguridad de Datos',
        lastUpdated: 'Última actualización',
        lastUpdatedDate: '2 de octubre de 2025',
        paragraphs: [
          'Implementamos medidas de seguridad apropiadas para proteger la información que almacenas localmente en tu dispositivo:'
        ],
        subsections: [
          {
            title: 'Medidas técnicas:',
            items: [
              'Almacenamiento local seguro en tu dispositivo',
              'Comunicación segura con nuestros servidores al sincronizar datos',
              'Autenticación segura para acceder a tu cuenta',
              'Protección básica contra accesos no autorizados'
            ]
          },
          {
            title: 'Medidas organizacionales:',
            items: [
              'Solo tú tienes acceso directo a los datos que ingresas en la aplicación',
              'Nuestro equipo sigue las mejores prácticas de desarrollo seguro',
              'Revisiones regulares de seguridad de la aplicación',
              'Procedimientos para reportar y resolver problemas de seguridad'
            ]
          }
        ]
      },
      retention: {
        title: 'Retención de Datos',
        lastUpdated: 'Última actualización',
        lastUpdatedDate: '2 de octubre de 2025',
        paragraphs: [
          'Retenemos tu información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política:'
        ],
        subsections: [
          {
            title: 'Períodos de retención:',
            items: [
              'Datos de cuenta: mientras mantengas una cuenta activa',
              'Datos de transacciones: hasta 7 años para cumplimiento regulatorio',
              'Datos de soporte: hasta 3 años después de la resolución'
            ]
          },
          {
            title: 'Eliminación de datos:',
            items: [
              'Eliminación automática cuando expiran los períodos de retención',
              'Eliminación completa de datos almacenados localmente',
              'Posibilidad de solicitar eliminación anticipada (sujeto a restricciones legales)',
              'Notificación de eliminación cuando sea técnicamente factible'
            ]
          }
        ]
      }
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
    updateDate: 'Octobre 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Confidentialité',
      gdpr: 'RGPD',
      gdprLabel: 'Conformité',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'Politique de Confidentialité',
    subtitle: 'Apprenez en détail comment nous protégeons et gérons vos informations personnelles chez Hero Budget',
    intro: 'Hero Budget s\'engage à protéger votre vie privée et à garantir la sécurité de vos informations personnelles.',
    quickNavigation: 'Navigation Rapide',
    readFullPolicy: 'Lire la Politique Complète',
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
    fullSections: {
      introduction: {
        title: 'Introduction et Portée',
        lastUpdated: 'Dernière mise à jour',
        lastUpdatedDate: '2 octobre 2025',
        paragraphs: [
          'Chez Hero Budget, nous nous engageons à protéger et respecter votre vie privée. Cette Politique de Confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations personnelles lorsque vous utilisez notre application mobile et nos services associés.',
          'Cette politique s\'applique à tous les utilisateurs de Hero Budget, quelle que soit leur situation géographique, et respecte les réglementations internationales en matière de protection des données, notamment le Règlement Général sur la Protection des Données (RGPD) de l\'Union européenne et le California Consumer Privacy Act (CCPA).',
          'En utilisant Hero Budget, vous acceptez les pratiques décrites dans cette politique. Si vous n\'êtes pas d\'accord avec un aspect de cette politique, veuillez ne pas utiliser nos services.'
        ]
      },
      dataCollection: {
        title: 'Informations que Nous Collectons',
        lastUpdated: 'Dernière mise à jour',
        lastUpdatedDate: '2 octobre 2025',
        paragraphs: [
          'Nous collectons différents types d\'informations pour fournir et améliorer nos services :'
        ],
        subsections: [
          {
            title: 'Informations que vous fournissez directement :',
            items: [
              'Informations de compte : nom, adresse e-mail, photo de profil',
              'Données financières : factures récurrentes, catégories, objectifs d\'épargne',
              'Préférences utilisateur : paramètres de l\'application, notifications'
            ]
          },
          {
            title: 'Informations collectées automatiquement :',
            items: [
              'Informations sur l\'appareil : modèle, système d\'exploitation, identifiants uniques',
              'Données de performance : journaux d\'erreurs, temps de réponse, plantages'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'Comment Nous Utilisons Vos Informations',
        lastUpdated: 'Dernière mise à jour',
        lastUpdatedDate: '2 octobre 2025',
        paragraphs: [
          'Nous utilisons uniquement les informations que vous saisissez manuellement dans l\'application aux fins suivantes :'
        ],
        subsections: [
          {
            title: 'Fourniture de services :',
            items: [
              'Stocker les données de factures récurrentes que vous saisissez manuellement',
              'Générer des rappels et des analyses de vos factures récurrentes',
              'Synchroniser vos données sur les appareils où vous utilisez l\'application',
              'Fournir un support technique et client'
            ]
          },
          {
            title: 'Amélioration et personnalisation :',
            items: [
              'Personnaliser votre expérience dans l\'application',
              'Développer de nouvelles fonctionnalités et améliorations',
              'Effectuer des analyses d\'utilisation agrégées et anonymes',
              'Optimiser les performances de l\'application'
            ]
          },
          {
            title: 'Communication et sécurité :',
            items: [
              'Envoyer des notifications importantes concernant votre compte',
              'Communiquer les mises à jour de l\'application'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Partage d\'Informations',
        lastUpdated: 'Dernière mise à jour',
        lastUpdatedDate: '2 octobre 2025',
        paragraphs: [
          'Nous ne vendons, ne louons ni ne partageons vos informations personnelles avec des tiers à des fins commerciales. Nous ne partageons des informations que dans les circonstances limitées suivantes :'
        ],
        subsections: [
          {
            title: 'Prestataires de services :',
            items: [
              'Services d\'hébergement cloud avec chiffrement complet',
              'Services d\'analyse agrégés et anonymes',
              'Services de support client',
              'Services de sécurité et de prévention de la fraude'
            ]
          },
          {
            title: 'Exigences légales :',
            items: [
              'Lorsque requis par la loi ou une procédure légale valide',
              'Pour protéger les droits et la sécurité de Hero Budget et de ses utilisateurs',
              'En cas de fusion, d\'acquisition ou de vente d\'actifs (avec préavis)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Cookies et Technologies Similaires',
        lastUpdated: 'Dernière mise à jour',
        lastUpdatedDate: '2 octobre 2025',
        paragraphs: [
          'En tant qu\'application mobile React Native, nous n\'utilisons pas de cookies web traditionnels. Nous utilisons plutôt des technologies de stockage local sur votre appareil pour améliorer votre expérience et activer les fonctionnalités principales :'
        ],
        subsections: [
          {
            title: 'Technologies de stockage local que nous utilisons :',
            items: [
              'AsyncStorage : pour stocker vos préférences, paramètres et configuration de l\'application',
              'Stockage sécurisé : pour protéger les données sensibles comme les jetons d\'authentification',
              'Stockage de cache : pour améliorer les performances de l\'application et activer la fonctionnalité hors ligne',
              'Données de session : pour maintenir votre état de connexion entre les sessions de l\'application'
            ]
          },
          {
            title: 'Gestion de vos données :',
            items: [
              'Vous pouvez effacer les données en cache depuis le menu des paramètres de l\'application',
              'Vous pouvez vous déconnecter pour supprimer les jetons de session et les données sensibles',
              'Vous pouvez désinstaller l\'application pour supprimer complètement toutes les données locales',
              'L\'effacement de certaines données peut nécessiter une nouvelle connexion ou reconfiguration des paramètres'
            ]
          }
        ]
      },
      security: {
        title: 'Sécurité des Données',
        lastUpdated: 'Dernière mise à jour',
        lastUpdatedDate: '2 octobre 2025',
        paragraphs: [
          'Nous mettons en œuvre des mesures de sécurité appropriées pour protéger les informations que vous stockez localement sur votre appareil :'
        ],
        subsections: [
          {
            title: 'Mesures techniques :',
            items: [
              'Stockage local sécurisé sur votre appareil',
              'Communication sécurisée avec nos serveurs lors de la synchronisation des données',
              'Authentification sécurisée pour accéder à votre compte',
              'Protection de base contre les accès non autorisés'
            ]
          },
          {
            title: 'Mesures organisationnelles :',
            items: [
              'Seul vous avez un accès direct aux données que vous saisissez dans l\'application',
              'Notre équipe suit les meilleures pratiques de développement sécurisé',
              'Examens réguliers de la sécurité de l\'application',
              'Procédures pour signaler et résoudre les problèmes de sécurité'
            ]
          }
        ]
      },
      retention: {
        title: 'Conservation des Données',
        lastUpdated: 'Dernière mise à jour',
        lastUpdatedDate: '2 octobre 2025',
        paragraphs: [
          'Nous conservons vos informations personnelles uniquement le temps nécessaire pour remplir les objectifs décrits dans cette politique :'
        ],
        subsections: [
          {
            title: 'Périodes de conservation :',
            items: [
              'Données de compte : tant que vous maintenez un compte actif',
              'Données de transaction : jusqu\'à 7 ans pour la conformité réglementaire',
              'Données de support : jusqu\'à 3 ans après la résolution'
            ]
          },
          {
            title: 'Suppression des données :',
            items: [
              'Suppression automatique à l\'expiration des périodes de conservation',
              'Suppression complète des données stockées localement',
              'Possibilité de demander une suppression anticipée (sous réserve de restrictions légales)',
              'Notification de suppression lorsque techniquement réalisable'
            ]
          }
        ]
      }
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
  ...en_GB,
  hero: {
    title: 'Datenschutzrichtlinie',
    subtitle: 'Ihre Privatsphäre ist uns wichtig. Erfahren Sie, wie wir Ihre persönlichen Daten schützen.',
    lastUpdated: 'Zuletzt aktualisiert',
    updateDate: 'Oktober 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Privatsphäre',
      gdpr: 'DSGVO',
      gdprLabel: 'Konformität',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'Datenschutzrichtlinie',
    subtitle: 'Erfahren Sie im Detail, wie wir Ihre persönlichen Daten bei Hero Budget schützen und verwalten',
    quickNavigation: 'Schnellnavigation',
    readFullPolicy: 'Vollständige Richtlinie lesen',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'Einführung und Geltungsbereich',
        lastUpdated: 'Zuletzt aktualisiert',
        lastUpdatedDate: '2. Oktober 2025',
        paragraphs: [
          'Bei Hero Budget sind wir bestrebt, Ihre Privatsphäre zu schützen und zu respektieren. Diese Datenschutzrichtlinie erläutert, wie wir Ihre persönlichen Daten erfassen, verwenden, weitergeben und schützen, wenn Sie unsere mobile Anwendung und die damit verbundenen Dienste nutzen.',
          'Diese Richtlinie gilt für alle Hero Budget-Nutzer, unabhängig von ihrem geografischen Standort, und entspricht internationalen Datenschutzbestimmungen, einschließlich der Datenschutz-Grundverordnung (DSGVO) der Europäischen Union und des California Consumer Privacy Act (CCPA).',
          'Durch die Nutzung von Hero Budget akzeptieren Sie die in dieser Richtlinie beschriebenen Praktiken. Wenn Sie mit einem Aspekt dieser Richtlinie nicht einverstanden sind, nutzen Sie bitte unsere Dienste nicht.'
        ]
      },
      dataCollection: {
        title: 'Informationen, die Wir Erfassen',
        lastUpdated: 'Zuletzt aktualisiert',
        lastUpdatedDate: '2. Oktober 2025',
        paragraphs: [
          'Wir erfassen verschiedene Arten von Informationen, um unsere Dienste bereitzustellen und zu verbessern:'
        ],
        subsections: [
          {
            title: 'Informationen, die Sie direkt bereitstellen:',
            items: [
              'Kontoinformationen: Name, E-Mail-Adresse, Profilbild',
              'Finanzdaten: wiederkehrende Rechnungen, Kategorien, Sparziele',
              'Benutzerpräferenzen: App-Einstellungen, Benachrichtigungen'
            ]
          },
          {
            title: 'Automatisch erfasste Informationen:',
            items: [
              'Geräteinformationen: Modell, Betriebssystem, eindeutige Kennungen',
              'Leistungsdaten: Fehlerprotokolle, Antwortzeit, Abstürze'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'Wie Wir Ihre Informationen Verwenden',
        lastUpdated: 'Zuletzt aktualisiert',
        lastUpdatedDate: '2. Oktober 2025',
        paragraphs: [
          'Wir verwenden nur die Informationen, die Sie manuell in die Anwendung eingeben, für die folgenden Zwecke:'
        ],
        subsections: [
          {
            title: 'Dienstleistungserbringung:',
            items: [
              'Speichern der wiederkehrenden Rechnungsdaten, die Sie manuell eingeben',
              'Generieren von Erinnerungen und Analysen Ihrer wiederkehrenden Rechnungen',
              'Synchronisieren Ihrer Daten auf Geräten, auf denen Sie die App verwenden',
              'Bereitstellen von technischem Support und Kundendienst'
            ]
          },
          {
            title: 'Verbesserung und Personalisierung:',
            items: [
              'Personalisieren Ihres Erlebnisses in der App',
              'Entwickeln neuer Funktionen und Verbesserungen',
              'Durchführen aggregierter und anonymer Nutzungsanalysen',
              'Optimieren der App-Leistung'
            ]
          },
          {
            title: 'Kommunikation und Sicherheit:',
            items: [
              'Senden wichtiger Benachrichtigungen über Ihr Konto',
              'Kommunizieren von App-Updates'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Weitergabe von Informationen',
        lastUpdated: 'Zuletzt aktualisiert',
        lastUpdatedDate: '2. Oktober 2025',
        paragraphs: [
          'Wir verkaufen, vermieten oder teilen Ihre persönlichen Daten nicht mit Dritten zu kommerziellen Zwecken. Wir geben Informationen nur unter den folgenden eingeschränkten Umständen weiter:'
        ],
        subsections: [
          {
            title: 'Dienstleister:',
            items: [
              'Cloud-Hosting-Dienste mit vollständiger Verschlüsselung',
              'Aggregierte und anonyme Analysedienste',
              'Kundensupport-Dienste',
              'Sicherheits- und Betrugspräventions-Dienste'
            ]
          },
          {
            title: 'Gesetzliche Anforderungen:',
            items: [
              'Wenn dies gesetzlich oder durch ein gültiges Gerichtsverfahren vorgeschrieben ist',
              'Zum Schutz der Rechte und Sicherheit von Hero Budget und seinen Nutzern',
              'Im Falle einer Fusion, Übernahme oder des Verkaufs von Vermögenswerten (mit vorheriger Benachrichtigung)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Cookies und Ähnliche Technologien',
        lastUpdated: 'Zuletzt aktualisiert',
        lastUpdatedDate: '2. Oktober 2025',
        paragraphs: [
          'Als React Native-Mobilanwendung verwenden wir keine traditionellen Web-Cookies. Stattdessen verwenden wir lokale Speichertechnologien auf Ihrem Gerät, um Ihre Erfahrung zu verbessern und Kernfunktionen zu ermöglichen:'
        ],
        subsections: [
          {
            title: 'Lokale Speichertechnologien, die wir verwenden:',
            items: [
              'AsyncStorage: zum Speichern Ihrer Einstellungen und App-Konfiguration',
              'Sicherer Speicher: zum Schutz sensibler Daten wie Authentifizierungstokens',
              'Cache-Speicher: zur Verbesserung der App-Leistung und Offline-Funktionalität',
              'Sitzungsdaten: um Ihren Anmeldestatus über App-Sitzungen hinweg aufrechtzuerhalten'
            ]
          },
          {
            title: 'Verwaltung Ihrer Daten:',
            items: [
              'Sie können zwischengespeicherte Daten über das App-Einstellungsmenü löschen',
              'Sie können sich abmelden, um Sitzungstokens und sensible Daten zu entfernen',
              'Sie können die App deinstallieren, um alle lokalen Daten vollständig zu entfernen',
              'Das Löschen bestimmter Daten kann erfordern, dass Sie sich erneut anmelden oder Einstellungen neu konfigurieren'
            ]
          }
        ]
      },
    },
  },
};

// Italian (Italy)
const it_IT: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: 'Informativa sulla Privacy',
    subtitle: 'La tua privacy è importante per noi. Scopri come proteggiamo le tue informazioni personali.',
    lastUpdated: 'Ultimo aggiornamento',
    updateDate: 'Ottobre 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Privacy',
      gdpr: 'GDPR',
      gdprLabel: 'Conformità',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'Informativa sulla Privacy',
    subtitle: 'Scopri in dettaglio come proteggiamo e gestiamo le tue informazioni personali su Hero Budget',
    quickNavigation: 'Navigazione Rapida',
    readFullPolicy: 'Leggi la Politica Completa',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'Introduzione e Ambito',
        lastUpdated: 'Ultimo aggiornamento',
        lastUpdatedDate: '2 ottobre 2025',
        paragraphs: [
          'In Hero Budget, ci impegniamo a proteggere e rispettare la tua privacy. Questa Informativa sulla Privacy spiega come raccogliamo, utilizziamo, condividiamo e proteggiamo le tue informazioni personali quando utilizzi la nostra applicazione mobile e i servizi correlati.',
          'Questa politica si applica a tutti gli utenti di Hero Budget, indipendentemente dalla loro posizione geografica, ed è conforme alle normative internazionali sulla protezione dei dati, incluso il Regolamento Generale sulla Protezione dei Dati (GDPR) dell\'Unione Europea e il California Consumer Privacy Act (CCPA).',
          'Utilizzando Hero Budget, accetti le pratiche descritte in questa politica. Se non sei d\'accordo con qualsiasi aspetto di questa politica, ti preghiamo di non utilizzare i nostri servizi.'
        ]
      },
      dataCollection: {
        title: 'Informazioni che Raccogliamo',
        lastUpdated: 'Ultimo aggiornamento',
        lastUpdatedDate: '2 ottobre 2025',
        paragraphs: [
          'Raccogliamo diversi tipi di informazioni per fornire e migliorare i nostri servizi:'
        ],
        subsections: [
          {
            title: 'Informazioni che fornisci direttamente:',
            items: [
              'Informazioni sull\'account: nome, indirizzo e-mail, foto del profilo',
              'Dati finanziari: fatture ricorrenti, categorie, obiettivi di risparmio',
              'Preferenze dell\'utente: impostazioni dell\'app, notifiche'
            ]
          },
          {
            title: 'Informazioni raccolte automaticamente:',
            items: [
              'Informazioni sul dispositivo: modello, sistema operativo, identificatori univoci',
              'Dati sulle prestazioni: registri degli errori, tempi di risposta, crash'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'Come Utilizziamo le Tue Informazioni',
        lastUpdated: 'Ultimo aggiornamento',
        lastUpdatedDate: '2 ottobre 2025',
        paragraphs: [
          'Utilizziamo solo le informazioni che inserisci manualmente nell\'applicazione per i seguenti scopi:'
        ],
        subsections: [
          {
            title: 'Fornitura del servizio:',
            items: [
              'Memorizzare i dati delle fatture ricorrenti che inserisci manualmente',
              'Generare promemoria e analisi delle tue fatture ricorrenti',
              'Sincronizzare i tuoi dati sui dispositivi in cui utilizzi l\'app',
              'Fornire supporto tecnico e assistenza clienti'
            ]
          },
          {
            title: 'Miglioramento e personalizzazione:',
            items: [
              'Personalizzare la tua esperienza nell\'app',
              'Sviluppare nuove funzionalità e miglioramenti',
              'Condurre analisi di utilizzo aggregate e anonime',
              'Ottimizzare le prestazioni dell\'app'
            ]
          },
          {
            title: 'Comunicazione e sicurezza:',
            items: [
              'Inviare notifiche importanti sul tuo account',
              'Comunicare aggiornamenti dell\'app'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Condivisione delle Informazioni',
        lastUpdated: 'Ultimo aggiornamento',
        lastUpdatedDate: '2 ottobre 2025',
        paragraphs: [
          'Non vendiamo, affittiamo o condividiamo le tue informazioni personali con terze parti per scopi commerciali. Condividiamo informazioni solo nelle seguenti circostanze limitate:'
        ],
        subsections: [
          {
            title: 'Fornitori di servizi:',
            items: [
              'Servizi di hosting cloud con crittografia completa',
              'Servizi di analisi aggregati e anonimi',
              'Servizi di assistenza clienti',
              'Servizi di sicurezza e prevenzione delle frodi'
            ]
          },
          {
            title: 'Requisiti legali:',
            items: [
              'Quando richiesto dalla legge o da un procedimento legale valido',
              'Per proteggere i diritti e la sicurezza di Hero Budget e dei suoi utenti',
              'In caso di fusione, acquisizione o vendita di asset (con preavviso)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Cookie e Tecnologie Simili',
        lastUpdated: 'Ultimo aggiornamento',
        lastUpdatedDate: '2 ottobre 2025',
        paragraphs: [
          'Come applicazione mobile React Native, non utilizziamo cookie web tradizionali. Utilizziamo invece tecnologie di archiviazione locale sul tuo dispositivo per migliorare la tua esperienza e abilitare funzionalità essenziali:'
        ],
        subsections: [
          {
            title: 'Tecnologie di archiviazione locale che utilizziamo:',
            items: [
              'AsyncStorage: per memorizzare le tue preferenze, impostazioni e configurazione dell\'app',
              'Archiviazione sicura: per proteggere dati sensibili come i token di autenticazione',
              'Archiviazione cache: per migliorare le prestazioni dell\'app e abilitare la funzionalità offline',
              'Dati di sessione: per mantenere il tuo stato di accesso tra le sessioni dell\'app'
            ]
          },
          {
            title: 'Gestione dei tuoi dati:',
            items: [
              'Puoi cancellare i dati in cache dal menu delle impostazioni dell\'app',
              'Puoi disconnetterti per rimuovere i token di sessione e i dati sensibili',
              'Puoi disinstallare l\'app per rimuovere completamente tutti i dati locali',
              'La cancellazione di determinati dati potrebbe richiedere un nuovo accesso o la riconfigurazione delle impostazioni'
            ]
          }
        ]
      },
    },
  },
};

// Portuguese (Brazil)
const pt_BR: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: 'Política de Privacidade',
    subtitle: 'Sua privacidade é importante para nós. Saiba como protegemos suas informações pessoais.',
    lastUpdated: 'Última atualização',
    updateDate: 'Outubro 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Privacidade',
      gdpr: 'GDPR',
      gdprLabel: 'Conformidade',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'Política de Privacidade',
    subtitle: 'Aprenda em detalhes como protegemos e gerenciamos suas informações pessoais no Hero Budget',
    quickNavigation: 'Navegação Rápida',
    readFullPolicy: 'Ler Política Completa',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'Introdução e Escopo',
        lastUpdated: 'Última atualização',
        lastUpdatedDate: '2 de outubro de 2025',
        paragraphs: [
          'Na Hero Budget, estamos comprometidos em proteger e respeitar sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações pessoais quando você usa nosso aplicativo móvel e serviços relacionados.',
          'Esta política se aplica a todos os usuários do Hero Budget, independentemente de sua localização geográfica, e está em conformidade com regulamentações internacionais de proteção de dados, incluindo o Regulamento Geral de Proteção de Dados (GDPR) da União Europeia e a Lei de Privacidade do Consumidor da Califórnia (CCPA).',
          'Ao usar o Hero Budget, você aceita as práticas descritas nesta política. Se você não concordar com qualquer aspecto desta política, por favor não use nossos serviços.'
        ]
      },
      dataCollection: {
        title: 'Informações que Coletamos',
        lastUpdated: 'Última atualização',
        lastUpdatedDate: '2 de outubro de 2025',
        paragraphs: [
          'Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:'
        ],
        subsections: [
          {
            title: 'Informações que você fornece diretamente:',
            items: [
              'Informações da conta: nome, endereço de e-mail, foto do perfil',
              'Dados financeiros: contas recorrentes, categorias, metas de economia',
              'Preferências do usuário: configurações do aplicativo, notificações'
            ]
          },
          {
            title: 'Informações coletadas automaticamente:',
            items: [
              'Informações do dispositivo: modelo, sistema operacional, identificadores únicos',
              'Dados de desempenho: registros de erros, tempo de resposta, falhas'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'Como Usamos Suas Informações',
        lastUpdated: 'Última atualização',
        lastUpdatedDate: '2 de outubro de 2025',
        paragraphs: [
          'Usamos apenas as informações que você insere manualmente no aplicativo para os seguintes propósitos:'
        ],
        subsections: [
          {
            title: 'Provisão de serviços:',
            items: [
              'Armazenar os dados de contas recorrentes que você insere manualmente',
              'Gerar lembretes e análises de suas contas recorrentes',
              'Sincronizar seus dados entre dispositivos onde você usa o aplicativo',
              'Fornecer suporte técnico e atendimento ao cliente'
            ]
          },
          {
            title: 'Melhoria e personalização:',
            items: [
              'Personalizar sua experiência no aplicativo',
              'Desenvolver novos recursos e melhorias',
              'Realizar análises de uso agregadas e anônimas',
              'Otimizar o desempenho do aplicativo'
            ]
          },
          {
            title: 'Comunicação e segurança:',
            items: [
              'Enviar notificações importantes sobre sua conta',
              'Comunicar atualizações do aplicativo'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Compartilhamento de Informações',
        lastUpdated: 'Última atualização',
        lastUpdatedDate: '2 de outubro de 2025',
        paragraphs: [
          'Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins comerciais. Compartilhamos informações apenas nas seguintes circunstâncias limitadas:'
        ],
        subsections: [
          {
            title: 'Provedores de serviços:',
            items: [
              'Serviços de hospedagem em nuvem com criptografia completa',
              'Serviços de análise agregados e anônimos',
              'Serviços de suporte ao cliente',
              'Serviços de segurança e prevenção de fraudes'
            ]
          },
          {
            title: 'Requisitos legais:',
            items: [
              'Quando exigido por lei ou processo legal válido',
              'Para proteger os direitos e segurança do Hero Budget e seus usuários',
              'Em caso de fusão, aquisição ou venda de ativos (com aviso prévio)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Cookies e Tecnologias Similares',
        lastUpdated: 'Última atualização',
        lastUpdatedDate: '2 de outubro de 2025',
        paragraphs: [
          'Como um aplicativo móvel React Native, não usamos cookies web tradicionais. Em vez disso, usamos tecnologias de armazenamento local no seu dispositivo para melhorar sua experiência e habilitar funcionalidades essenciais:'
        ],
        subsections: [
          {
            title: 'Tecnologias de armazenamento local que usamos:',
            items: [
              'AsyncStorage: para armazenar suas preferências, configurações e configuração do app',
              'Armazenamento seguro: para proteger dados sensíveis como tokens de autenticação',
              'Armazenamento em cache: para melhorar o desempenho do app e habilitar funcionalidade offline',
              'Dados de sessão: para manter seu estado de login entre sessões do app'
            ]
          },
          {
            title: 'Gerenciando seus dados:',
            items: [
              'Você pode limpar dados em cache no menu de configurações do app',
              'Você pode sair para remover tokens de sessão e dados sensíveis',
              'Você pode desinstalar o app para remover completamente todos os dados locais',
              'Limpar certos dados pode exigir que você faça login novamente ou reconfigure as configurações'
            ]
          }
        ]
      },
    },
  },
};

// Japanese (Japan)
const ja_JP: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: 'プライバシーポリシー',
    subtitle: 'お客様のプライバシーは私たちにとって重要です。個人情報の保護方法をご確認ください。',
    lastUpdated: '最終更新',
    updateDate: '2025年10月',
    stats: {
      privacy: '100%',
      privacyLabel: 'プライバシー',
      gdpr: 'GDPR',
      gdprLabel: 'コンプライアンス',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'プライバシーポリシー',
    subtitle: 'Hero Budgetで個人情報をどのように保護し管理しているかを詳しく学ぶ',
    quickNavigation: 'クイックナビゲーション',
    readFullPolicy: '完全なポリシーを読む',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: '序文と適用範囲',
        lastUpdated: '最終更新',
        lastUpdatedDate: '2025年10月2日',
        paragraphs: [
          'Hero Budgetでは、お客様のプライバシーを保護し尊重することを約束します。このプライバシーポリシーは、お客様がモバイルアプリケーションおよび関連サービスを使用する際に、個人情報をどのように収集、使用、共有、保護するかを説明します。',
          'このポリシーは、地理的な場所に関係なく、すべてのHero Budgetユーザーに適用され、欧州連合の一般データ保護規則（GDPR）およびカリフォルニア州消費者プライバシー法（CCPA）を含む国際的なデータ保護規制に準拠しています。',
          'Hero Budgetを使用することにより、お客様はこのポリシーに記載されている慣行に同意したものとみなされます。このポリシーのいずれかの側面に同意できない場合は、当社のサービスを使用しないでください。'
        ]
      },
      dataCollection: {
        title: '収集する情報',
        lastUpdated: '最終更新',
        lastUpdatedDate: '2025年10月2日',
        paragraphs: [
          'サービスの提供と改善のため、さまざまな種類の情報を収集します:'
        ],
        subsections: [
          {
            title: 'お客様が直接提供する情報:',
            items: [
              'アカウント情報: 名前、メールアドレス、プロフィール写真',
              '財務データ: 定期請求書、カテゴリ、貯蓄目標',
              'ユーザー設定: アプリ設定、通知'
            ]
          },
          {
            title: '自動的に収集される情報:',
            items: [
              'デバイス情報: モデル、オペレーティングシステム、固有識別子',
              'パフォーマンスデータ: エラーログ、応答時間、クラッシュ'
            ]
          }
        ]
      },
      dataUsage: {
        title: '情報の使用方法',
        lastUpdated: '最終更新',
        lastUpdatedDate: '2025年10月2日',
        paragraphs: [
          'お客様がアプリケーションに手動で入力した情報のみを以下の目的で使用します:'
        ],
        subsections: [
          {
            title: 'サービスの提供:',
            items: [
              '手動で入力された定期請求書データの保存',
              '定期請求書のリマインダーと分析の生成',
              'アプリを使用するデバイス間でのデータの同期',
              '技術サポートとカスタマーサポートの提供'
            ]
          },
          {
            title: '改善とパーソナライゼーション:',
            items: [
              'アプリ内でのエクスペリエンスのパーソナライズ',
              '新機能と改善の開発',
              '集約された匿名の使用状況分析の実施',
              'アプリのパフォーマンスの最適化'
            ]
          },
          {
            title: 'コミュニケーションとセキュリティ:',
            items: [
              'アカウントに関する重要な通知の送信',
              'アプリの更新情報の通知'
            ]
          }
        ]
      },
      dataSharing: {
        title: '情報の共有',
        lastUpdated: '最終更新',
        lastUpdatedDate: '2025年10月2日',
        paragraphs: [
          '私たちは、お客様の個人情報を商業目的で第三者に販売、賃貸、または共有することはありません。以下の限定的な状況においてのみ情報を共有します:'
        ],
        subsections: [
          {
            title: 'サービスプロバイダー:',
            items: [
              '完全な暗号化を備えたクラウドホスティングサービス',
              '集計された匿名の分析サービス',
              'カスタマーサポートサービス',
              'セキュリティおよび不正防止サービス'
            ]
          },
          {
            title: '法的要件:',
            items: [
              '法律または有効な法的手続きにより要求された場合',
              'Hero Budgetとそのユーザーの権利と安全を保護するため',
              '合併、買収、または資産売却の場合（事前通知あり）'
            ]
          }
        ]
      },
      cookies: {
        title: 'Cookieと類似技術',
        lastUpdated: '最終更新',
        lastUpdatedDate: '2025年10月2日',
        paragraphs: [
          'React Nativeモバイルアプリケーションとして、従来のWebクッキーは使用していません。代わりに、お客様のデバイス上のローカルストレージ技術を使用して、体験を向上させ、コア機能を有効にしています:'
        ],
        subsections: [
          {
            title: '使用するローカルストレージ技術:',
            items: [
              'AsyncStorage: 設定とアプリ構成を保存',
              'セキュアストレージ: 認証トークンなどの機密データを保護',
              'キャッシュストレージ: アプリのパフォーマンスを向上させ、オフライン機能を有効化',
              'セッションデータ: アプリセッション間でログイン状態を維持'
            ]
          },
          {
            title: 'データの管理:',
            items: [
              'アプリ設定メニューからキャッシュデータをクリアできます',
              'ログアウトしてセッショントークンと機密データを削除できます',
              'アプリをアンインストールしてすべてのローカルデータを完全に削除できます',
              '特定のデータをクリアすると、再度ログインまたは設定の再構成が必要になる場合があります'
            ]
          }
        ]
      },
    },
  },
};

// Chinese (China)
const zh_CN: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: '隐私政策',
    subtitle: '您的隐私对我们很重要。了解我们如何保护您的个人信息。',
    lastUpdated: '最后更新',
    updateDate: '2025年10月',
    stats: {
      privacy: '100%',
      privacyLabel: '隐私',
      gdpr: 'GDPR',
      gdprLabel: '合规性',
    },
  },
  policy: {
    ...en_GB.policy,
    title: '隐私政策',
    subtitle: '详细了解我们如何在Hero Budget中保护和处理您的个人信息',
    quickNavigation: '快速导航',
    readFullPolicy: '阅读完整政策',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: '介绍和范围',
        lastUpdated: '最后更新',
        lastUpdatedDate: '2025年10月2日',
        paragraphs: [
          '在Hero Budget，我们致力于保护和尊重您的隐私。本隐私政策解释了当您使用我们的移动应用程序和相关服务时，我们如何收集、使用、共享和保护您的个人信息。',
          '本政策适用于所有Hero Budget用户，无论其地理位置如何，并符合国际数据保护法规，包括欧盟的通用数据保护条例（GDPR）和加州消费者隐私法（CCPA）。',
          '使用Hero Budget即表示您接受本政策中描述的做法。如果您不同意本政策的任何方面，请不要使用我们的服务。'
        ]
      },
      dataCollection: {
        title: '我们收集的信息',
        lastUpdated: '最后更新',
        lastUpdatedDate: '2025年10月2日',
        paragraphs: [
          '我们收集不同类型的信息以提供和改进我们的服务:'
        ],
        subsections: [
          {
            title: '您直接提供的信息:',
            items: [
              '账户信息：姓名、电子邮件地址、个人资料照片',
              '财务数据：定期账单、类别、储蓄目标',
              '用户偏好：应用设置、通知'
            ]
          },
          {
            title: '自动收集的信息:',
            items: [
              '设备信息：型号、操作系统、唯一标识符',
              '性能数据：错误日志、响应时间、崩溃'
            ]
          }
        ]
      },
      dataUsage: {
        title: '我们如何使用您的信息',
        lastUpdated: '最后更新',
        lastUpdatedDate: '2025年10月2日',
        paragraphs: [
          '我们仅将您手动输入应用程序的信息用于以下目的:'
        ],
        subsections: [
          {
            title: '服务提供:',
            items: [
              '存储您手动输入的定期账单数据',
              '生成定期账单的提醒和分析',
              '在您使用应用的设备之间同步数据',
              '提供技术和客户支持'
            ]
          },
          {
            title: '改进和个性化:',
            items: [
              '个性化您在应用中的体验',
              '开发新功能和改进',
              '进行汇总和匿名的使用分析',
              '优化应用性能'
            ]
          },
          {
            title: '通信和安全:',
            items: [
              '发送有关您账户的重要通知',
              '传达应用更新'
            ]
          }
        ]
      },
      dataSharing: {
        title: '信息共享',
        lastUpdated: '最后更新',
        lastUpdatedDate: '2025年10月2日',
        paragraphs: [
          '我们不会出于商业目的向第三方出售、出租或共享您的个人信息。我们仅在以下有限情况下共享信息：'
        ],
        subsections: [
          {
            title: '服务提供商：',
            items: [
              '具有完整加密的云托管服务',
              '聚合和匿名分析服务',
              '客户支持服务',
              '安全和欺诈预防服务'
            ]
          },
          {
            title: '法律要求：',
            items: [
              '当法律或有效法律程序要求时',
              '为保护Hero Budget及其用户的权利和安全',
              '在合并、收购或出售资产的情况下（需提前通知）'
            ]
          }
        ]
      },
      cookies: {
        title: 'Cookie和类似技术',
        lastUpdated: '最后更新',
        lastUpdatedDate: '2025年10月2日',
        paragraphs: [
          '作为React Native移动应用程序，我们不使用传统的网络cookie。相反，我们使用您设备上的本地存储技术来改善您的体验并启用核心功能:'
        ],
        subsections: [
          {
            title: '我们使用的本地存储技术:',
            items: [
              'AsyncStorage：存储您的偏好设置和应用配置',
              '安全存储：保护敏感数据（如身份验证令牌）',
              '缓存存储：提高应用性能并启用离线功能',
              '会话数据：在应用会话之间维护您的登录状态'
            ]
          },
          {
            title: '管理您的数据:',
            items: [
              '您可以从应用设置菜单中清除缓存数据',
              '您可以退出登录以删除会话令牌和敏感数据',
              '您可以卸载应用以完全删除所有本地数据',
              '清除某些数据可能需要您重新登录或重新配置设置'
            ]
          }
        ]
      },
    },
  },
};

// Korean (South Korea)
const ko_KR: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: '개인정보 보호정책',
    subtitle: '귀하의 개인정보는 우리에게 중요합니다. 개인정보를 어떻게 보호하는지 알아보세요.',
    lastUpdated: '최종 업데이트',
    updateDate: '2025년 10월',
    stats: {
      privacy: '100%',
      privacyLabel: '개인정보 보호',
      gdpr: 'GDPR',
      gdprLabel: '규정 준수',
    },
  },
  policy: {
    ...en_GB.policy,
    title: '개인정보 보호정책',
    subtitle: 'Hero Budget에서 개인정보를 보호하고 관리하는 방법을 자세히 알아보세요',
    quickNavigation: '빠른 탐색',
    readFullPolicy: '전체 정책 읽기',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: '소개 및 적용 범위',
        lastUpdated: '최종 업데이트',
        lastUpdatedDate: '2025년 10월 2일',
        paragraphs: [
          'Hero Budget에서는 귀하의 개인정보를 보호하고 존중하기 위해 최선을 다하고 있습니다. 이 개인정보 보호정책은 귀하가 모바일 애플리케이션 및 관련 서비스를 사용할 때 개인정보를 수집, 사용, 공유 및 보호하는 방법을 설명합니다.',
          '이 정책은 지리적 위치에 관계없이 모든 Hero Budget 사용자에게 적용되며, 유럽 연합의 일반 데이터 보호 규정(GDPR) 및 캘리포니아 소비자 개인정보 보호법(CCPA)을 포함한 국제 데이터 보호 규정을 준수합니다.',
          'Hero Budget을 사용함으로써 귀하는 이 정책에 설명된 관행에 동의하는 것으로 간주됩니다. 이 정책의 어떤 부분에라도 동의하지 않으시면 서비스를 사용하지 마십시오.'
        ]
      },
      dataCollection: {
        title: '수집하는 정보',
        lastUpdated: '최종 업데이트',
        lastUpdatedDate: '2025년 10월 2일',
        paragraphs: [
          '서비스를 제공하고 개선하기 위해 다양한 유형의 정보를 수집합니다:'
        ],
        subsections: [
          {
            title: '직접 제공하시는 정보:',
            items: [
              '계정 정보: 이름, 이메일 주소, 프로필 사진',
              '재무 데이터: 정기 청구서, 카테고리, 저축 목표',
              '사용자 환경설정: 앱 설정, 알림'
            ]
          },
          {
            title: '자동으로 수집되는 정보:',
            items: [
              '기기 정보: 모델, 운영 체제, 고유 식별자',
              '성능 데이터: 오류 로그, 응답 시간, 충돌'
            ]
          }
        ]
      },
      dataUsage: {
        title: '정보 사용 방법',
        lastUpdated: '최종 업데이트',
        lastUpdatedDate: '2025년 10월 2일',
        paragraphs: [
          '애플리케이션에 수동으로 입력한 정보만 다음 목적으로 사용합니다:'
        ],
        subsections: [
          {
            title: '서비스 제공:',
            items: [
              '수동으로 입력한 정기 청구서 데이터 저장',
              '정기 청구서에 대한 알림 및 분석 생성',
              '앱을 사용하는 기기 간 데이터 동기화',
              '기술 및 고객 지원 제공'
            ]
          },
          {
            title: '개선 및 맞춤화:',
            items: [
              '앱 내 경험 맞춤화',
              '새로운 기능 및 개선 사항 개발',
              '집계된 익명 사용 분석 수행',
              '앱 성능 최적화'
            ]
          },
          {
            title: '커뮤니케이션 및 보안:',
            items: [
              '계정에 관한 중요한 알림 전송',
              '앱 업데이트 전달'
            ]
          }
        ]
      },
      dataSharing: {
        title: '정보 공유',
        lastUpdated: '최종 업데이트',
        lastUpdatedDate: '2025년 10월 2일',
        paragraphs: [
          '우리는 상업적 목적으로 귀하의 개인정보를 제3자에게 판매, 임대 또는 공유하지 않습니다. 다음의 제한된 상황에서만 정보를 공유합니다:'
        ],
        subsections: [
          {
            title: '서비스 제공업체:',
            items: [
              '완전한 암호화를 갖춘 클라우드 호스팅 서비스',
              '집계되고 익명화된 분석 서비스',
              '고객 지원 서비스',
              '보안 및 사기 방지 서비스'
            ]
          },
          {
            title: '법적 요구사항:',
            items: [
              '법률 또는 유효한 법적 절차에 의해 요구되는 경우',
              'Hero Budget과 사용자의 권리 및 안전을 보호하기 위해',
              '합병, 인수 또는 자산 매각의 경우(사전 통지 포함)'
            ]
          }
        ]
      },
      cookies: {
        title: '쿠키 및 유사 기술',
        lastUpdated: '최종 업데이트',
        lastUpdatedDate: '2025년 10월 2일',
        paragraphs: [
          'React Native 모바일 애플리케이션으로서 기존 웹 쿠키를 사용하지 않습니다. 대신 기기의 로컬 스토리지 기술을 사용하여 경험을 개선하고 핵심 기능을 활성화합니다:'
        ],
        subsections: [
          {
            title: '사용하는 로컬 스토리지 기술:',
            items: [
              'AsyncStorage: 환경설정 및 앱 구성 저장',
              '보안 스토리지: 인증 토큰과 같은 민감한 데이터 보호',
              '캐시 스토리지: 앱 성능 향상 및 오프라인 기능 활성화',
              '세션 데이터: 앱 세션 간 로그인 상태 유지'
            ]
          },
          {
            title: '데이터 관리:',
            items: [
              '앱 설정 메뉴에서 캐시된 데이터를 지울 수 있습니다',
              '로그아웃하여 세션 토큰 및 민감한 데이터를 제거할 수 있습니다',
              '앱을 제거하여 모든 로컬 데이터를 완전히 삭제할 수 있습니다',
              '특정 데이터를 지우면 다시 로그인하거나 설정을 재구성해야 할 수 있습니다'
            ]
          }
        ]
      },
    },
  },
};

// Russian (Russia)
const ru_RU: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: 'Политика конфиденциальности',
    subtitle: 'Ваша конфиденциальность важна для нас. Узнайте, как мы защищаем вашу личную информацию.',
    lastUpdated: 'Последнее обновление',
    updateDate: 'Октябрь 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Конфиденциальность',
      gdpr: 'GDPR',
      gdprLabel: 'Соответствие',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'Политика конфиденциальности',
    subtitle: 'Узнайте подробно, как мы защищаем и обрабатываем вашу личную информацию в Hero Budget',
    quickNavigation: 'Быстрая навигация',
    readFullPolicy: 'Прочитать полную политику',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'Введение и область применения',
        lastUpdated: 'Последнее обновление',
        lastUpdatedDate: '2 октября 2025',
        paragraphs: [
          'В Hero Budget мы стремимся защищать и уважать вашу конфиденциальность. Эта Политика конфиденциальности объясняет, как мы собираем, используем, передаем и защищаем вашу личную информацию при использовании нашего мобильного приложения и связанных услуг.',
          'Эта политика применяется ко всем пользователям Hero Budget независимо от их географического местоположения и соответствует международным нормам защиты данных, включая Общий регламент по защите данных (GDPR) Европейского союза и Закон о конфиденциальности потребителей Калифорнии (CCPA).',
          'Используя Hero Budget, вы принимаете практики, описанные в этой политике. Если вы не согласны с каким-либо аспектом этой политики, пожалуйста, не используйте наши услуги.'
        ]
      },
      dataCollection: {
        title: 'Информация, Которую Мы Собираем',
        lastUpdated: 'Последнее обновление',
        lastUpdatedDate: '2 октября 2025',
        paragraphs: [
          'Мы собираем различные типы информации для предоставления и улучшения наших услуг:'
        ],
        subsections: [
          {
            title: 'Информация, которую вы предоставляете напрямую:',
            items: [
              'Информация об учетной записи: имя, адрес электронной почты, фотография профиля',
              'Финансовые данные: регулярные счета, категории, цели сбережений',
              'Пользовательские предпочтения: настройки приложения, уведомления'
            ]
          },
          {
            title: 'Информация, собираемая автоматически:',
            items: [
              'Информация об устройстве: модель, операционная система, уникальные идентификаторы',
              'Данные о производительности: журналы ошибок, время отклика, сбои'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'Как Мы Используем Вашу Информацию',
        lastUpdated: 'Последнее обновление',
        lastUpdatedDate: '2 октября 2025',
        paragraphs: [
          'Мы используем только ту информацию, которую вы вручную вводите в приложение, для следующих целей:'
        ],
        subsections: [
          {
            title: 'Предоставление услуг:',
            items: [
              'Хранение данных о регулярных счетах, которые вы вводите вручную',
              'Генерация напоминаний и анализа ваших регулярных счетов',
              'Синхронизация ваших данных между устройствами, на которых вы используете приложение',
              'Предоставление технической поддержки и обслуживания клиентов'
            ]
          },
          {
            title: 'Улучшение и персонализация:',
            items: [
              'Персонализация вашего опыта в приложении',
              'Разработка новых функций и улучшений',
              'Проведение агрегированного и анонимного анализа использования',
              'Оптимизация производительности приложения'
            ]
          },
          {
            title: 'Коммуникация и безопасность:',
            items: [
              'Отправка важных уведомлений о вашей учетной записи',
              'Сообщение об обновлениях приложения'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Обмен Информацией',
        lastUpdated: 'Последнее обновление',
        lastUpdatedDate: '2 октября 2025',
        paragraphs: [
          'Мы не продаем, не сдаем в аренду и не передаем вашу личную информацию третьим лицам в коммерческих целях. Мы передаем информацию только в следующих ограниченных обстоятельствах:'
        ],
        subsections: [
          {
            title: 'Поставщики услуг:',
            items: [
              'Услуги облачного хостинга с полным шифрованием',
              'Агрегированные и анонимные аналитические услуги',
              'Услуги поддержки клиентов',
              'Услуги безопасности и предотвращения мошенничества'
            ]
          },
          {
            title: 'Юридические требования:',
            items: [
              'Когда требуется по закону или действительному судебному процессу',
              'Для защиты прав и безопасности Hero Budget и его пользователей',
              'В случае слияния, приобретения или продажи активов (с предварительным уведомлением)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Файлы Cookie и Подобные Технологии',
        lastUpdated: 'Последнее обновление',
        lastUpdatedDate: '2 октября 2025',
        paragraphs: [
          'Как мобильное приложение React Native, мы не используем традиционные веб-файлы cookie. Вместо этого мы используем технологии локального хранилища на вашем устройстве для улучшения вашего опыта и обеспечения основных функций:'
        ],
        subsections: [
          {
            title: 'Используемые технологии локального хранилища:',
            items: [
              'AsyncStorage: для хранения ваших предпочтений, настроек и конфигурации приложения',
              'Безопасное хранилище: для защиты конфиденциальных данных, таких как токены аутентификации',
              'Кэш-хранилище: для повышения производительности приложения и обеспечения автономной функциональности',
              'Данные сеанса: для поддержания вашего статуса входа между сеансами приложения'
            ]
          },
          {
            title: 'Управление вашими данными:',
            items: [
              'Вы можете очистить кэшированные данные из меню настроек приложения',
              'Вы можете выйти из системы, чтобы удалить токены сеанса и конфиденциальные данные',
              'Вы можете удалить приложение, чтобы полностью удалить все локальные данные',
              'Очистка определенных данных может потребовать повторного входа в систему или переконфигурации настроек'
            ]
          }
        ]
      },
    },
  },
};

// Arabic (Saudi Arabia)
const ar_SA: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: 'سياسة الخصوصية',
    subtitle: 'خصوصيتك مهمة بالنسبة لنا. تعرف على كيفية حماية معلوماتك الشخصية.',
    lastUpdated: 'آخر تحديث',
    updateDate: 'أكتوبر 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'الخصوصية',
      gdpr: 'GDPR',
      gdprLabel: 'الامتثال',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'سياسة الخصوصية',
    subtitle: 'تعرف بالتفصيل على كيفية حماية ومعالجة معلوماتك الشخصية في Hero Budget',
    quickNavigation: 'التنقل السريع',
    readFullPolicy: 'قراءة السياسة الكاملة',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'المقدمة والنطاق',
        lastUpdated: 'آخر تحديث',
        lastUpdatedDate: '2 أكتوبر 2025',
        paragraphs: [
          'في Hero Budget، نحن ملتزمون بحماية واحترام خصوصيتك. تشرح سياسة الخصوصية هذه كيفية جمع واستخدام ومشاركة وحماية معلوماتك الشخصية عند استخدام تطبيقنا للجوال والخدمات ذات الصلة.',
          'تنطبق هذه السياسة على جميع مستخدمي Hero Budget، بغض النظر عن موقعهم الجغرافي، وتتوافق مع لوائح حماية البيانات الدولية، بما في ذلك اللائحة العامة لحماية البيانات (GDPR) للاتحاد الأوروبي وقانون خصوصية المستهلك في كاليفورنيا (CCPA).',
          'باستخدام Hero Budget، فإنك تقبل الممارسات الموصوفة في هذه السياسة. إذا كنت لا توافق على أي جانب من جوانب هذه السياسة، فيرجى عدم استخدام خدماتنا.'
        ]
      },
      dataCollection: {
        title: 'المعلومات التي نجمعها',
        lastUpdated: 'آخر تحديث',
        lastUpdatedDate: '2 أكتوبر 2025',
        paragraphs: [
          'نجمع أنواعًا مختلفة من المعلومات لتقديم خدماتنا وتحسينها:'
        ],
        subsections: [
          {
            title: 'المعلومات التي تقدمها مباشرة:',
            items: [
              'معلومات الحساب: الاسم وعنوان البريد الإلكتروني وصورة الملف الشخصي',
              'البيانات المالية: الفواتير المتكررة والفئات وأهداف الادخار',
              'تفضيلات المستخدم: إعدادات التطبيق والإشعارات'
            ]
          },
          {
            title: 'المعلومات التي يتم جمعها تلقائيًا:',
            items: [
              'معلومات الجهاز: الطراز ونظام التشغيل والمعرفات الفريدة',
              'بيانات الأداء: سجلات الأخطاء ووقت الاستجابة والأعطال'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'كيف نستخدم معلوماتك',
        lastUpdated: 'آخر تحديث',
        lastUpdatedDate: '2 أكتوبر 2025',
        paragraphs: [
          'نستخدم فقط المعلومات التي تدخلها يدويًا في التطبيق للأغراض التالية:'
        ],
        subsections: [
          {
            title: 'تقديم الخدمات:',
            items: [
              'تخزين بيانات الفواتير المتكررة التي تدخلها يدويًا',
              'إنشاء تذكيرات وتحليلات لفواتيرك المتكررة',
              'مزامنة بياناتك عبر الأجهزة التي تستخدم فيها التطبيق',
              'تقديم الدعم الفني وخدمة العملاء'
            ]
          },
          {
            title: 'التحسين والتخصيص:',
            items: [
              'تخصيص تجربتك في التطبيق',
              'تطوير ميزات وتحسينات جديدة',
              'إجراء تحليلات استخدام مجمعة ومجهولة',
              'تحسين أداء التطبيق'
            ]
          },
          {
            title: 'التواصل والأمان:',
            items: [
              'إرسال إشعارات مهمة حول حسابك',
              'إبلاغك بتحديثات التطبيق'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'مشاركة المعلومات',
        lastUpdated: 'آخر تحديث',
        lastUpdatedDate: '2 أكتوبر 2025',
        paragraphs: [
          'نحن لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة لأغراض تجارية. نشارك المعلومات فقط في الظروف المحدودة التالية:'
        ],
        subsections: [
          {
            title: 'مقدمو الخدمات:',
            items: [
              'خدمات الاستضافة السحابية مع التشفير الكامل',
              'خدمات التحليل المجمعة والمجهولة',
              'خدمات دعم العملاء',
              'خدمات الأمان ومنع الاحتيال'
            ]
          },
          {
            title: 'المتطلبات القانونية:',
            items: [
              'عندما يتطلب القانون أو إجراء قانوني صالح ذلك',
              'لحماية حقوق وسلامة Hero Budget ومستخدميه',
              'في حالة الاندماج أو الاستحواذ أو بيع الأصول (مع إشعار مسبق)'
            ]
          }
        ]
      },
      cookies: {
        title: 'ملفات تعريف الارتباط والتقنيات المماثلة',
        lastUpdated: 'آخر تحديث',
        lastUpdatedDate: '2 أكتوبر 2025',
        paragraphs: [
          'كتطبيق جوال React Native، لا نستخدم ملفات تعريف الارتباط التقليدية للويب. بدلاً من ذلك، نستخدم تقنيات التخزين المحلي على جهازك لتحسين تجربتك وتمكين الوظائف الأساسية:'
        ],
        subsections: [
          {
            title: 'تقنيات التخزين المحلي التي نستخدمها:',
            items: [
              'AsyncStorage: لتخزين تفضيلاتك وإعداداتك وتكوين التطبيق',
              'التخزين الآمن: لحماية البيانات الحساسة مثل رموز المصادقة',
              'تخزين ذاكرة التخزين المؤقت: لتحسين أداء التطبيق وتمكين الوظائف دون اتصال',
              'بيانات الجلسة: للحفاظ على حالة تسجيل الدخول الخاصة بك عبر جلسات التطبيق'
            ]
          },
          {
            title: 'إدارة بياناتك:',
            items: [
              'يمكنك مسح البيانات المخزنة مؤقتًا من قائمة إعدادات التطبيق',
              'يمكنك تسجيل الخروج لإزالة رموز الجلسة والبيانات الحساسة',
              'يمكنك إلغاء تثبيت التطبيق لإزالة جميع البيانات المحلية بالكامل',
              'قد يتطلب مسح بيانات معينة تسجيل الدخول مرة أخرى أو إعادة تكوين الإعدادات'
            ]
          }
        ]
      },
    },
  },
};

// Catalan (Spain)
const ca_ES: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: 'Política de Privadesa',
    subtitle: 'La teva privadesa ens importa. Aprèn com protegim la teva informació personal.',
    lastUpdated: 'Última actualització',
    updateDate: 'Octubre 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Privadesa',
      gdpr: 'RGPD',
      gdprLabel: 'Compliment',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'Política de Privadesa',
    subtitle: 'Aprèn en detall com protegim i gestionem la teva informació personal a Hero Budget',
    quickNavigation: 'Navegació Ràpida',
    readFullPolicy: 'Llegir Política Completa',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'Introducció i Àmbit',
        lastUpdated: 'Última actualització',
        lastUpdatedDate: '2 d\'octubre de 2025',
        paragraphs: [
          'A Hero Budget, estem compromesos a protegir i respectar la teva privadesa. Aquesta Política de Privadesa explica com recopilem, utilitzem, compartim i protegim la teva informació personal quan utilitzes la nostra aplicació mòbil i serveis relacionats.',
          'Aquesta política s\'aplica a tots els usuaris de Hero Budget, independentment de la seva ubicació geogràfica, i compleix amb les regulacions internacionals de protecció de dades, incloent el Reglament General de Protecció de Dades (RGPD) de la Unió Europea i la Llei de Privadesa del Consumidor de Califòrnia (CCPA).',
          'En utilitzar Hero Budget, acceptes les pràctiques descrites en aquesta política. Si no estàs d\'acord amb qualsevol aspecte d\'aquesta política, si us plau no utilitzis els nostres serveis.'
        ]
      },
      dataCollection: {
        title: 'Informació que Recopilem',
        lastUpdated: 'Última actualització',
        lastUpdatedDate: '2 d\'octubre de 2025',
        paragraphs: [
          'Recopiem diferents tipus d\'informació per proporcionar i millorar els nostres serveis:'
        ],
        subsections: [
          {
            title: 'Informació que proporciones directament:',
            items: [
              'Informació del compte: nom, adreça de correu electrònic, foto de perfil',
              'Dades financeres: factures recurrents, categories, objectius d\'estalvi',
              'Preferències de l\'usuari: configuració de l\'aplicació, notificacions'
            ]
          },
          {
            title: 'Informació recopilada automàticament:',
            items: [
              'Informació del dispositiu: model, sistema operatiu, identificadors únics',
              'Dades de rendiment: registres d\'errors, temps de resposta, fallades'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'Com Utilitzem la Teva Informació',
        lastUpdated: 'Última actualització',
        lastUpdatedDate: '2 d\'octubre de 2025',
        paragraphs: [
          'Només utilitzem la informació que introdueixes manualment a l\'aplicació per als següents propòsits:'
        ],
        subsections: [
          {
            title: 'Prestació de serveis:',
            items: [
              'Emmagatzemar les dades de factures recurrents que introdueixes manualment',
              'Generar recordatoris i anàlisis de les teves factures recurrents',
              'Sincronitzar les teves dades entre dispositius on utilitzes l\'aplicació',
              'Proporcionar suport tècnic i atenció al client'
            ]
          },
          {
            title: 'Millora i personalització:',
            items: [
              'Personalitzar la teva experiència a l\'aplicació',
              'Desenvolupar noves funcions i millores',
              'Realitzar anàlisis d\'ús agregats i anònims',
              'Optimitzar el rendiment de l\'aplicació'
            ]
          },
          {
            title: 'Comunicació i seguretat:',
            items: [
              'Enviar notificacions importants sobre el teu compte',
              'Comunicar actualitzacions de l\'aplicació'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Compartir Informació',
        lastUpdated: 'Última actualització',
        lastUpdatedDate: '2 d\'octubre de 2025',
        paragraphs: [
          'No venem, lloguem ni compartim la teva informació personal amb tercers amb fins comercials. Només compartim informació en les següents circumstàncies limitades:'
        ],
        subsections: [
          {
            title: 'Proveïdors de serveis:',
            items: [
              'Serveis d\'allotjament al núvol amb xifratge complet',
              'Serveis d\'anàlisi agregats i anònims',
              'Serveis d\'atenció al client',
              'Serveis de seguretat i prevenció de fraus'
            ]
          },
          {
            title: 'Requisits legals:',
            items: [
              'Quan sigui requerit per llei o procés legal vàlid',
              'Per protegir els drets i la seguretat de Hero Budget i els seus usuaris',
              'En cas de fusió, adquisició o venda d\'actius (amb avís previ)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Cookies i Tecnologies Similars',
        lastUpdated: 'Última actualització',
        lastUpdatedDate: '2 d\'octubre de 2025',
        paragraphs: [
          'Com a aplicació mòbil React Native, no utilitzem cookies web tradicionals. En canvi, utilitzem tecnologies d\'emmagatzematge local al vostre dispositiu per millorar la vostra experiència i habilitar funcionalitats essencials:'
        ],
        subsections: [
          {
            title: 'Tecnologies d\'emmagatzematge local que utilitzem:',
            items: [
              'AsyncStorage: per emmagatzemar les vostres preferències, configuració i configuració de l\'aplicació',
              'Emmagatzematge segur: per protegir dades sensibles com tokens d\'autenticació',
              'Emmagatzematge en memòria cau: per millorar el rendiment de l\'aplicació i habilitar funcionalitat fora de línia',
              'Dades de sessió: per mantenir el vostre estat d\'inici de sessió entre sessions de l\'aplicació'
            ]
          },
          {
            title: 'Gestió les vostres dades:',
            items: [
              'Podeu esborrar les dades en memòria cau des del menú de configuració de l\'aplicació',
              'Podeu tancar la sessió per eliminar tokens de sessió i dades sensibles',
              'Podeu desinstal·lar l\'aplicació per eliminar completament totes les dades locals',
              'Esborrar certes dades pot requerir que inicieu sessió de nou o reconfigureu la configuració'
            ]
          }
        ]
      },
    },
  },
};

// Czech (Czech Republic)
const cs_CZ: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: 'Zásady ochrany osobních údajů',
    subtitle: 'Vaše soukromí je pro nás důležité. Zjistěte, jak chráníme vaše osobní údaje.',
    lastUpdated: 'Poslední aktualizace',
    updateDate: 'Říjen 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Soukromí',
      gdpr: 'GDPR',
      gdprLabel: 'Shoda',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'Zásady ochrany osobních údajů',
    subtitle: 'Zjistěte podrobně, jak chráníme a zpracováváme vaše osobní údaje v Hero Budget',
    quickNavigation: 'Rychlá navigace',
    readFullPolicy: 'Přečíst celé zásady',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'Úvod a rozsah',
        lastUpdated: 'Poslední aktualizace',
        lastUpdatedDate: '2. října 2025',
        paragraphs: [
          'Ve společnosti Hero Budget se zavazujeme chránit a respektovat vaše soukromí. Tyto Zásady ochrany osobních údajů vysvětlují, jak shromažďujeme, používáme, sdílíme a chráníme vaše osobní údaje, když používáte naši mobilní aplikaci a související služby.',
          'Tyto zásady se vztahují na všechny uživatele Hero Budget bez ohledu na jejich geografickou polohu a jsou v souladu s mezinárodními předpisy o ochraně údajů, včetně Obecného nařízení o ochraně osobních údajů (GDPR) Evropské unie a kalifornského zákona o ochraně soukromí spotřebitelů (CCPA).',
          'Používáním Hero Budget souhlasíte s postupy popsanými v těchto zásadách. Pokud nesouhlasíte s jakýmkoli aspektem těchto zásad, nepoužívejte naše služby.'
        ]
      },
      dataCollection: {
        title: 'Informace, které Sbíráme',
        lastUpdated: 'Poslední aktualizace',
        lastUpdatedDate: '2. října 2025',
        paragraphs: [
          'Sbíráme různé typy informací za účelem poskytování a zlepšování našich služeb:'
        ],
        subsections: [
          {
            title: 'Informace, které poskytujete přímo:',
            items: [
              'Informace o účtu: jméno, e-mailová adresa, profilová fotografie',
              'Finanční údaje: opakující se účty, kategorie, cíle úspor',
              'Uživatelské preference: nastavení aplikace, oznámení'
            ]
          },
          {
            title: 'Informace shromážděné automaticky:',
            items: [
              'Informace o zařízení: model, operační systém, jedinečné identifikátory',
              'Údaje o výkonu: protokoly chyb, doba odezvy, pády'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'Jak Používáme Vaše Informace',
        lastUpdated: 'Poslední aktualizace',
        lastUpdatedDate: '2. října 2025',
        paragraphs: [
          'Používáme pouze informace, které ručně zadáte do aplikace, k následujícím účelům:'
        ],
        subsections: [
          {
            title: 'Poskytování služeb:',
            items: [
              'Ukládání údajů o opakujících se účtech, které ručně zadáváte',
              'Generování připomínek a analýz vašich opakujících se účtů',
              'Synchronizace vašich dat mezi zařízeními, kde používáte aplikaci',
              'Poskytování technické podpory a zákaznického servisu'
            ]
          },
          {
            title: 'Zlepšování a personalizace:',
            items: [
              'Personalizace vašeho zážitku v aplikaci',
              'Vývoj nových funkcí a vylepšení',
              'Provádění agregovaných a anonymních analýz používání',
              'Optimalizace výkonu aplikace'
            ]
          },
          {
            title: 'Komunikace a bezpečnost:',
            items: [
              'Zasílání důležitých oznámení o vašem účtu',
              'Sdělování aktualizací aplikace'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Sdílení Informací',
        lastUpdated: 'Poslední aktualizace',
        lastUpdatedDate: '2. října 2025',
        paragraphs: [
          'Neprodáváme, nepronajímáme ani nesdílíme vaše osobní údaje s třetími stranami za komerčními účely. Informace sdílíme pouze v následujících omezených případech:'
        ],
        subsections: [
          {
            title: 'Poskytovatelé služeb:',
            items: [
              'Služby cloudového hostingu s úplným šifrováním',
              'Agregované a anonymní analytické služby',
              'Služby zákaznické podpory',
              'Služby bezpečnosti a prevence podvodů'
            ]
          },
          {
            title: 'Právní požadavky:',
            items: [
              'Pokud to vyžaduje zákon nebo platné soudní řízení',
              'K ochraně práv a bezpečnosti Hero Budget a jeho uživatelů',
              'V případě fúze, akvizice nebo prodeje aktiv (s předchozím oznámením)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Soubory Cookie a Podobné Technologie',
        lastUpdated: 'Poslední aktualizace',
        lastUpdatedDate: '2. října 2025',
        paragraphs: [
          'Jako mobilní aplikace React Native nepoužíváme tradiční webové soubory cookie. Místo toho používáme technologie lokálního úložiště na vašem zařízení ke zlepšení vašeho zážitku a umožnění základních funkcí:'
        ],
        subsections: [
          {
            title: 'Technologie lokálního úložiště, které používáme:',
            items: [
              'AsyncStorage: pro ukládání vašich preferencí, nastavení a konfigurace aplikace',
              'Bezpečné úložiště: pro ochranu citlivých údajů, jako jsou autentizační tokeny',
              'Úložiště mezipaměti: pro zlepšení výkonu aplikace a umožnění offline funkčnosti',
              'Data relace: pro udržení vašeho stavu přihlášení mezi relacemi aplikace'
            ]
          },
          {
            title: 'Správa vašich dat:',
            items: [
              'Můžete vymazat data v mezipaměti z nabídky nastavení aplikace',
              'Můžete se odhlásit a odstranit tokeny relace a citlivá data',
              'Můžete odinstalovat aplikaci a úplně odstranit všechna místní data',
              'Vymazání určitých dat může vyžadovat, abyste se znovu přihlásili nebo překonfigurovali nastavení'
            ]
          }
        ]
      },
    },
  },
};

// Danish (Denmark)
const da_DK: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: 'Fortrolighedspolitik',
    subtitle: 'Dit privatliv er vigtigt for os. Lær hvordan vi beskytter dine personlige oplysninger.',
    lastUpdated: 'Sidst opdateret',
    updateDate: 'Oktober 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Privatliv',
      gdpr: 'GDPR',
      gdprLabel: 'Overholdelse',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'Fortrolighedspolitik',
    subtitle: 'Lær i detaljer, hvordan vi beskytter og håndterer dine personlige oplysninger hos Hero Budget',
    quickNavigation: 'Hurtig navigation',
    readFullPolicy: 'Læs den fulde politik',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'Introduktion og anvendelsesområde',
        lastUpdated: 'Sidst opdateret',
        lastUpdatedDate: '2. oktober 2025',
        paragraphs: [
          'Hos Hero Budget er vi forpligtet til at beskytte og respektere dit privatliv. Denne fortrolighedspolitik forklarer, hvordan vi indsamler, bruger, deler og beskytter dine personlige oplysninger, når du bruger vores mobilapplikation og relaterede tjenester.',
          'Denne politik gælder for alle Hero Budget-brugere uanset deres geografiske placering og overholder internationale databeskyttelsesregler, herunder EU\'s generelle databeskyttelsesforordning (GDPR) og California Consumer Privacy Act (CCPA).',
          'Ved at bruge Hero Budget accepterer du de praksis, der er beskrevet i denne politik. Hvis du ikke er enig i nogen del af denne politik, bedes du ikke bruge vores tjenester.'
        ]
      },
      dataCollection: {
        title: 'Oplysninger Vi Indsamler',
        lastUpdated: 'Sidst opdateret',
        lastUpdatedDate: '2. oktober 2025',
        paragraphs: [
          'Vi indsamler forskellige typer af oplysninger for at levere og forbedre vores tjenester:'
        ],
        subsections: [
          {
            title: 'Oplysninger du giver direkte:',
            items: [
              'Kontooplysninger: navn, e-mailadresse, profilbillede',
              'Finansielle data: tilbagevendende regninger, kategorier, besparelsesmål',
              'Brugerpræferencer: app-indstillinger, notifikationer'
            ]
          },
          {
            title: 'Oplysninger indsamlet automatisk:',
            items: [
              'Enhedsoplysninger: model, operativsystem, unikke identifikatorer',
              'Præstationsdata: fejllogfiler, svartid, nedbrud'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'Hvordan Vi Bruger Dine Oplysninger',
        lastUpdated: 'Sidst opdateret',
        lastUpdatedDate: '2. oktober 2025',
        paragraphs: [
          'Vi bruger kun de oplysninger, du indtaster manuelt i applikationen, til følgende formål:'
        ],
        subsections: [
          {
            title: 'Levering af tjenester:',
            items: [
              'Gemme de tilbagevendende regningsdata, du indtaster manuelt',
              'Generere påmindelser og analyser af dine tilbagevendende regninger',
              'Synkronisere dine data på tværs af enheder, hvor du bruger appen',
              'Levere teknisk og kundesupport'
            ]
          },
          {
            title: 'Forbedring og personalisering:',
            items: [
              'Personalisere din oplevelse i appen',
              'Udvikle nye funktioner og forbedringer',
              'Udføre aggregerede og anonyme brugsanalyser',
              'Optimere appens ydeevne'
            ]
          },
          {
            title: 'Kommunikation og sikkerhed:',
            items: [
              'Sende vigtige meddelelser om din konto',
              'Kommunikere appopdateringer'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Deling af Oplysninger',
        lastUpdated: 'Sidst opdateret',
        lastUpdatedDate: '2. oktober 2025',
        paragraphs: [
          'Vi sælger, udlejer eller deler ikke dine personlige oplysninger med tredjeparter til kommercielle formål. Vi deler kun oplysninger under følgende begrænsede omstændigheder:'
        ],
        subsections: [
          {
            title: 'Tjenesteudbydere:',
            items: [
              'Cloud-hostingtjenester med komplet kryptering',
              'Aggregerede og anonyme analysetjenester',
              'Kundesupporttjenester',
              'Sikkerheds- og svindelforebyggelsestjenester'
            ]
          },
          {
            title: 'Juridiske krav:',
            items: [
              'Når det kræves ved lov eller gyldig retsproces',
              'For at beskytte Hero Budget og dets brugeres rettigheder og sikkerhed',
              'I tilfælde af fusion, opkøb eller salg af aktiver (med forudgående varsel)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Cookies og Lignende Teknologier',
        lastUpdated: 'Sidst opdateret',
        lastUpdatedDate: '2. oktober 2025',
        paragraphs: [
          'Som en React Native mobilapplikation bruger vi ikke traditionelle webcookies. I stedet bruger vi lokal lagringsteknologi på din enhed for at forbedre din oplevelse og aktivere kernefunktionalitet:'
        ],
        subsections: [
          {
            title: 'Lokal lagringsteknologier vi bruger:',
            items: [
              'AsyncStorage: til at gemme dine præferencer, indstillinger og appkonfiguration',
              'Sikker lagring: til at beskytte følsomme data som godkendelsestokens',
              'Cachelagring: til at forbedre appens ydeevne og aktivere offline funktionalitet',
              'Sessionsdata: til at opretholde din logget ind-status på tværs af app-sessioner'
            ]
          },
          {
            title: 'Håndtering af dine data:',
            items: [
              'Du kan rydde cachedata fra appens indstillingsmenu',
              'Du kan logge ud for at fjerne sessionstokens og følsomme data',
              'Du kan afinstallere appen for at fjerne alle lokale data fuldstændigt',
              'Rydning af visse data kan kræve, at du logger ind igen eller omkonfigurerer indstillinger'
            ]
          }
        ]
      },
    },
  },
};

// German (Switzerland)
const de_CH: PrivacyTranslations = {
  ...de_DE,
};

// English (Canada)
const en_CA: PrivacyTranslations = {
  ...en_GB,
};

// English (United States)
const en_US: PrivacyTranslations = {
  ...en_GB,
};

// Spanish (Mexico)
const es_MX: PrivacyTranslations = {
  hero: {
    title: 'Política de Privacidad',
    subtitle: 'Tu privacidad nos importa. Descubre cómo protegemos tu información personal.',
    lastUpdated: 'Última actualización',
    updateDate: 'Octubre 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Privacidad',
      gdpr: 'GDPR',
      gdprLabel: 'Cumplimiento',
    },
  },
  policy: {
    title: 'Política de Privacidad',
    subtitle: 'Aprende en detalle cómo protegemos y manejamos tu información personal en Hero Budget',
    intro: 'Hero Budget se compromete a proteger tu privacidad y garantizar la seguridad de tu información personal.',
    quickNavigation: 'Navegación Rápida',
    readFullPolicy: 'Leer Política Completa',
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
    fullSections: {
      introduction: {
        title: 'Introducción y Alcance',
        lastUpdated: 'Última actualización',
        lastUpdatedDate: '2 de octubre de 2025',
        paragraphs: [
          'En Hero Budget, estamos comprometidos a proteger y respetar tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos tu información personal cuando utilizas nuestra aplicación móvil y servicios relacionados.',
          'Esta política se aplica a todos los usuarios de Hero Budget, independientemente de su ubicación geográfica, y cumple con las regulaciones internacionales de protección de datos, incluido el Reglamento General de Protección de Datos (GDPR) de la Unión Europea y la Ley de Privacidad del Consumidor de California (CCPA).',
          'Al usar Hero Budget, aceptas las prácticas descritas en esta política. Si no estás de acuerdo con algún aspecto de esta política, por favor no utilices nuestros servicios.'
        ]
      },
      dataCollection: {
        title: 'Información que Recopilamos',
        lastUpdated: 'Última actualización',
        lastUpdatedDate: '2 de octubre de 2025',
        paragraphs: [
          'Recopilamos diferentes tipos de información para proporcionar y mejorar nuestros servicios:'
        ],
        subsections: [
          {
            title: 'Información que proporcionas directamente:',
            items: [
              'Información de cuenta: nombre, dirección de correo electrónico, foto de perfil',
              'Datos financieros: facturas recurrentes, categorías, objetivos de ahorro',
              'Preferencias de usuario: configuración de la aplicación, notificaciones'
            ]
          },
          {
            title: 'Información recopilada automáticamente:',
            items: [
              'Información del dispositivo: modelo, sistema operativo, identificadores únicos',
              'Datos de rendimiento: registros de errores, tiempo de respuesta, fallos'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'Cómo Usamos tu Información',
        lastUpdated: 'Última actualización',
        lastUpdatedDate: '2 de octubre de 2025',
        paragraphs: [
          'Solo utilizamos la información que ingresas manualmente en la aplicación para los siguientes propósitos:'
        ],
        subsections: [
          {
            title: 'Provisión de servicios:',
            items: [
              'Almacenar los datos de facturas recurrentes que ingresas manualmente',
              'Generar recordatorios y análisis de tus facturas recurrentes',
              'Sincronizar tus datos entre dispositivos donde uses la aplicación',
              'Proporcionar soporte técnico y de atención al cliente'
            ]
          },
          {
            title: 'Mejora y personalización:',
            items: [
              'Personalizar tu experiencia en la aplicación',
              'Desarrollar nuevas funciones y mejoras',
              'Realizar análisis de uso agregados y anónimos',
              'Optimizar el rendimiento de la aplicación'
            ]
          },
          {
            title: 'Comunicación y seguridad:',
            items: [
              'Enviar notificaciones importantes sobre tu cuenta',
              'Comunicar actualizaciones de la aplicación'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Compartir Información',
        lastUpdated: 'Última actualización',
        lastUpdatedDate: '2 de octubre de 2025',
        paragraphs: [
          'No vendemos, alquilamos ni compartimos tu información personal con terceros con fines comerciales. Solo compartimos información en las siguientes circunstancias limitadas:'
        ],
        subsections: [
          {
            title: 'Proveedores de servicios:',
            items: [
              'Servicios de alojamiento en la nube con cifrado completo',
              'Servicios de análisis agregados y anónimos',
              'Servicios de atención al cliente',
              'Servicios de seguridad y prevención de fraude'
            ]
          },
          {
            title: 'Requisitos legales:',
            items: [
              'Cuando sea requerido por ley o proceso legal válido',
              'Para proteger los derechos y seguridad de Hero Budget y sus usuarios',
              'En caso de fusión, adquisición o venta de activos (con aviso previo)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Cookies y Tecnologías Similares',
        lastUpdated: 'Última actualización',
        lastUpdatedDate: '2 de octubre de 2025',
        paragraphs: [
          'Como aplicación móvil React Native, no utilizamos cookies web tradicionales. En su lugar, usamos tecnologías de almacenamiento local en tu dispositivo para mejorar tu experiencia y habilitar funcionalidades principales:'
        ],
        subsections: [
          {
            title: 'Tecnologías de almacenamiento local que utilizamos:',
            items: [
              'AsyncStorage: para almacenar tus preferencias, configuración y ajustes de la aplicación',
              'Almacenamiento seguro: para proteger datos sensibles como tokens de autenticación',
              'Almacenamiento de caché: para mejorar el rendimiento de la aplicación y habilitar funcionalidad sin conexión',
              'Datos de sesión: para mantener tu estado de inicio de sesión entre sesiones de la aplicación'
            ]
          },
          {
            title: 'Gestión de tus datos:',
            items: [
              'Puedes borrar los datos en caché desde el menú de configuración de la aplicación',
              'Puedes cerrar sesión para eliminar tokens de sesión y datos sensibles',
              'Puedes desinstalar la aplicación para eliminar completamente todos los datos locales',
              'Borrar ciertos datos puede requerir que inicies sesión nuevamente o reconfigures ajustes'
            ]
          }
        ]
      },
      security: {
        title: 'Seguridad de Datos',
        lastUpdated: 'Última actualización',
        lastUpdatedDate: '2 de octubre de 2025',
        paragraphs: [
          'Implementamos medidas de seguridad apropiadas para proteger la información que almacenas localmente en tu dispositivo:'
        ],
        subsections: [
          {
            title: 'Medidas técnicas:',
            items: [
              'Almacenamiento local seguro en tu dispositivo',
              'Comunicación segura con nuestros servidores al sincronizar datos',
              'Autenticación segura para acceder a tu cuenta',
              'Protección básica contra accesos no autorizados'
            ]
          },
          {
            title: 'Medidas organizacionales:',
            items: [
              'Solo tú tienes acceso directo a los datos que ingresas en la aplicación',
              'Nuestro equipo sigue las mejores prácticas de desarrollo seguro',
              'Revisiones regulares de seguridad de la aplicación',
              'Procedimientos para reportar y resolver problemas de seguridad'
            ]
          }
        ]
      },
      retention: {
        title: 'Retención de Datos',
        lastUpdated: 'Última actualización',
        lastUpdatedDate: '2 de octubre de 2025',
        paragraphs: [
          'Retenemos tu información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política:'
        ],
        subsections: [
          {
            title: 'Períodos de retención:',
            items: [
              'Datos de cuenta: mientras mantengas una cuenta activa',
              'Datos de transacciones: hasta 7 años para cumplimiento regulatorio',
              'Datos de soporte: hasta 3 años después de la resolución'
            ]
          },
          {
            title: 'Eliminación de datos:',
            items: [
              'Eliminación automática cuando expiran los períodos de retención',
              'Eliminación completa de datos almacenados localmente',
              'Posibilidad de solicitar eliminación anticipada (sujeto a restricciones legales)',
              'Notificación de eliminación cuando sea técnicamente factible'
            ]
          }
        ]
      }
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
  ...en_GB,
  hero: {
    title: 'Tietosuojakäytäntö',
    subtitle: 'Yksityisyytesi on meille tärkeää. Opi miten suojaamme henkilötietojasi.',
    lastUpdated: 'Viimeksi päivitetty',
    updateDate: 'Lokakuu 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Yksityisyys',
      gdpr: 'GDPR',
      gdprLabel: 'Vaatimustenmukaisuus',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'Tietosuojakäytäntö',
    subtitle: 'Opi yksityiskohtaisesti, miten suojaamme ja käsittelemme henkilötietojasi Hero Budgetissa',
    quickNavigation: 'Pikalinkki',
    readFullPolicy: 'Lue koko käytäntö',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'Johdanto ja soveltamisala',
        lastUpdated: 'Viimeksi päivitetty',
        lastUpdatedDate: '2. lokakuuta 2025',
        paragraphs: [
          'Hero Budgetissa olemme sitoutuneet suojelemaan ja kunnioittamaan yksityisyyttäsi. Tämä tietosuojakäytäntö selittää, miten keräämme, käytämme, jaamme ja suojaamme henkilötietojasi, kun käytät mobiilisovellustamme ja siihen liittyviä palveluita.',
          'Tämä käytäntö koskee kaikkia Hero Budget -käyttäjiä heidän maantieteellisestä sijainnistaan riippumatta ja noudattaa kansainvälisiä tietosuojamääräyksiä, mukaan lukien Euroopan unionin yleinen tietosuoja-asetus (GDPR) ja Kalifornian kuluttajien yksityisyydensuojalaki (CCPA).',
          'Käyttämällä Hero Budgetia hyväksyt tässä käytännössä kuvatut käytännöt. Jos et hyväksy mitään tämän käytännön osaa, älä käytä palveluitamme.'
        ]
      },
      dataCollection: {
        title: 'Keräämämme Tiedot',
        lastUpdated: 'Viimeksi päivitetty',
        lastUpdatedDate: '2. lokakuuta 2025',
        paragraphs: [
          'Keräämme erilaisia tietoja tarjotaksemme ja parantaaksemme palveluitamme:'
        ],
        subsections: [
          {
            title: 'Tiedot, jotka annat suoraan:',
            items: [
              'Tilin tiedot: nimi, sähköpostiosoite, profiilikuva',
              'Taloudelliset tiedot: toistuvat laskut, kategoriat, säästötavoitteet',
              'Käyttäjän asetukset: sovelluksen asetukset, ilmoitukset'
            ]
          },
          {
            title: 'Automaattisesti kerättävät tiedot:',
            items: [
              'Laitetiedot: malli, käyttöjärjestelmä, yksilölliset tunnisteet',
              'Suorituskykytiedot: virhelokit, vasteaika, kaatumiset'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'Kuinka Käytämme Tietojasi',
        lastUpdated: 'Viimeksi päivitetty',
        lastUpdatedDate: '2. lokakuuta 2025',
        paragraphs: [
          'Käytämme vain sovellukseen manuaalisesti syöttämiäsi tietoja seuraaviin tarkoituksiin:'
        ],
        subsections: [
          {
            title: 'Palvelun tarjoaminen:',
            items: [
              'Manuaalisesti syöttämiesi toistuvien laskujen tietojen tallentaminen',
              'Toistuvien laskujen muistutusten ja analyysien luominen',
              'Tietojesi synkronointi laitteiden välillä, joissa käytät sovellusta',
              'Teknisen tuen ja asiakaspalvelun tarjoaminen'
            ]
          },
          {
            title: 'Parantaminen ja personointi:',
            items: [
              'Kokemuksesi personointi sovelluksessa',
              'Uusien ominaisuuksien ja parannusten kehittäminen',
              'Koostettujen ja nimettömien käyttöanalyysien suorittaminen',
              'Sovelluksen suorituskyvyn optimointi'
            ]
          },
          {
            title: 'Viestintä ja turvallisuus:',
            items: [
              'Tärkeiden ilmoitusten lähettäminen tilistäsi',
              'Sovelluspäivityksistä tiedottaminen'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Tietojen Jakaminen',
        lastUpdated: 'Viimeksi päivitetty',
        lastUpdatedDate: '2. lokakuuta 2025',
        paragraphs: [
          'Emme myy, vuokraa tai jaa henkilötietojasi kolmansille osapuolille kaupallisiin tarkoituksiin. Jaamme tietoja vain seuraavissa rajoitetuissa olosuhteissa:'
        ],
        subsections: [
          {
            title: 'Palveluntarjoajat:',
            items: [
              'Pilvipalvelupalvelut täydellä salauksella',
              'Kootut ja nimettömät analytiikkapalvelut',
              'Asiakastukipalvelut',
              'Turvallisuus- ja petostentorjuntapalvelut'
            ]
          },
          {
            title: 'Lailliset vaatimukset:',
            items: [
              'Kun laki tai pätevä oikeusprosessi sitä vaatii',
              'Suojellaksemme Hero Budgetin ja sen käyttäjien oikeuksia ja turvallisuutta',
              'Fuusion, yrityskaupan tai omaisuuden myynnin tapauksessa (ennakkoilmoituksella)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Evästeet ja Vastaavat Teknologiat',
        lastUpdated: 'Viimeksi päivitetty',
        lastUpdatedDate: '2. lokakuuta 2025',
        paragraphs: [
          'React Native -mobiilisovelluksena emme käytä perinteisiä verkkoevästeitä. Sen sijaan käytämme paikallisia tallennusteknologioita laitteellasi parantaaksemme kokemustasi ja mahdollistaaksemme ydintoiminnot:'
        ],
        subsections: [
          {
            title: 'Käyttämämme paikalliset tallennusteknologiat:',
            items: [
              'AsyncStorage: asetustesi ja sovelluksen konfiguraation tallentamiseen',
              'Turvallinen tallennus: arkaluontoisten tietojen, kuten todennustunnusten, suojaamiseen',
              'Välimuistin tallennus: sovelluksen suorituskyvyn parantamiseen ja offline-toiminnallisuuden mahdollistamiseen',
              'Istuntotiedot: kirjautumistilasi ylläpitämiseen sovellusistuntojen välillä'
            ]
          },
          {
            title: 'Tietojesi hallinta:',
            items: [
              'Voit tyhjentää välimuistissa olevat tiedot sovelluksen asetusvalikosta',
              'Voit kirjautua ulos poistaaksesi istuntotunnukset ja arkaluontoiset tiedot',
              'Voit poistaa sovelluksen asennuksen poistaaksesi kaikki paikalliset tiedot kokonaan',
              'Tiettyjen tietojen tyhjentäminen saattaa edellyttää uudelleen kirjautumista tai asetusten uudelleenkonfigurointia'
            ]
          }
        ]
      },
      security: {
        title: 'Tietoturva',
        lastUpdated: 'Viimeksi päivitetty',
        lastUpdatedDate: '2. lokakuuta 2025',
        paragraphs: [
          'Toteutamme asianmukaiset turvatoimet suojataksemme tietoja, jotka tallennat paikallisesti laitteellesi:'
        ],
        subsections: [
          {
            title: 'Tekniset toimenpiteet:',
            items: [
                'Turvallinen paikallinen tallennus laitteellasi',
                'Turvallinen viestintä palvelimiemme kanssa tietojen synkronoinnin aikana',
                'Turvallinen todentaminen tilillesi pääsyä varten',
                'Perussuojaus luvattomalta pääsyltä'
            ]
          },
          {
            title: 'Organisatoriset toimenpiteet:',
            items: [
                'Vain sinulla on suora pääsy tietoihin, jotka syötät sovellukseen',
                'Tiimimme noudattaa turvallisen kehityksen parhaita käytäntöjä',
                'Säännölliset sovelluksen turvallisuustarkastukset',
                'Menettelyt turvallisuusongelmien raportointiin ja ratkaisemiseen'
            ]
          }
        ]
      },
      retention: {
        title: 'Tietojen säilyttäminen',
        lastUpdated: 'Viimeksi päivitetty',
        lastUpdatedDate: '2. lokakuuta 2025',
        paragraphs: [
          'Säilytämme henkilötietojasi vain niin kauan kuin on tarpeen tässä käytännössä kuvattujen tarkoitusten täyttämiseksi:'
        ],
        subsections: [
          {
            title: 'Säilytysajat:',
            items: [
                'Tilitiedot: niin kauan kuin ylläpidät aktiivista tiliä',
                'Tapahtumatiedot: jopa 7 vuotta sääntelyvaatimusten noudattamiseksi',
                'Tukitiedot: jopa 3 vuotta ratkaisun jälkeen'
            ]
          },
          {
            title: 'Tietojen poistaminen:',
            items: [
                'Automaattinen poisto säilytysaikojen umpeuduttua',
                'Paikallisesti tallennettujen tietojen täydellinen poisto',
                'Mahdollisuus pyytää varhaista poistoa (lakisääteisten rajoitusten mukaisesti)',
                'Poistoilmoitus, kun se on teknisesti mahdollista'
            ]
          }
        ]
      }
    },
  },
};

// French (Canada)
const fr_CA: PrivacyTranslations = {
  ...fr_FR,
};

// Hebrew (Israel)
const he_IL: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: 'מדיניות פרטיות',
    subtitle: 'הפרטיות שלך חשובה לנו. למד כיצד אנו מגנים על המידע האישי שלך.',
    lastUpdated: 'עודכן לאחרונה',
    updateDate: 'אוקטובר 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'פרטיות',
      gdpr: 'GDPR',
      gdprLabel: 'ציות',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'מדיניות פרטיות',
    subtitle: 'למד בפירוט כיצד אנו מגנים ומנהלים את המידע האישי שלך ב-Hero Budget',
    quickNavigation: 'ניווט מהיר',
    readFullPolicy: 'קרא את המדיניות המלאה',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'הקדמה והיקף',
        lastUpdated: 'עודכן לאחרונה',
        lastUpdatedDate: '2 באוקטובר 2025',
        paragraphs: [
          'ב-Hero Budget אנו מחויבים להגן ולכבד את פרטיותך. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים, משתפים ומגנים על המידע האישי שלך כאשר אתה משתמש באפליקציה הניידת שלנו ובשירותים הקשורים.',
          'מדיניות זו חלה על כל משתמשי Hero Budget ללא קשר למיקום הגיאוגרפי שלהם, ועומדת בתקנות הגנת מידע בינלאומיות, כולל תקנת הגנת המידע הכללית (GDPR) של האיחוד האירופי וחוק פרטיות הצרכן של קליפורניה (CCPA).',
          'על ידי שימוש ב-Hero Budget, אתה מקבל את הפרקטיקות המתוארות במדיניות זו. אם אינך מסכים לכל היבט של מדיניות זו, אנא אל תשתמש בשירותים שלנו.'
        ]
      },
      dataCollection: {
        title: 'מידע שאנו אוספים',
        lastUpdated: 'עודכן לאחרונה',
        lastUpdatedDate: '2 באוקטובר 2025',
        paragraphs: [
          'אנו אוספים סוגים שונים של מידע כדי לספק ולשפר את השירותים שלנו:'
        ],
        subsections: [
          {
            title: 'מידע שאתה מספק ישירות:',
            items: [
              'מידע על החשבון: שם, כתובת דוא"ל, תמונת פרופיל',
              'נתונים פיננסיים: חשבונות חוזרים, קטגוריות, יעדי חיסכון',
              'העדפות משתמש: הגדרות אפליקציה, התראות'
            ]
          },
          {
            title: 'מידע שנאסף אוטומטית:',
            items: [
              'מידע על המכשיר: דגם, מערכת הפעלה, מזהים ייחודיים',
              'נתוני ביצועים: יומני שגיאות, זמן תגובה, קריסות'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'כיצד אנו משתמשים במידע שלך',
        lastUpdated: 'עודכן לאחרונה',
        lastUpdatedDate: '2 באוקטובר 2025',
        paragraphs: [
          'אנו משתמשים רק במידע שאתה מזין ידנית לאפליקציה למטרות הבאות:'
        ],
        subsections: [
          {
            title: 'אספקת שירותים:',
            items: [
              'אחסון נתוני החשבונות החוזרים שאתה מזין ידנית',
              'יצירת תזכורות וניתוחים של החשבונות החוזרים שלך',
              'סנכרון הנתונים שלך בין המכשירים בהם אתה משתמש באפליקציה',
              'מתן תמיכה טכנית ושירות לקוחות'
            ]
          },
          {
            title: 'שיפור והתאמה אישית:',
            items: [
              'התאמה אישית של החוויה שלך באפליקציה',
              'פיתוח תכונות ושיפורים חדשים',
              'ביצוע ניתוחי שימוש מצטברים ואנונימיים',
              'אופטימיזציה של ביצועי האפליקציה'
            ]
          },
          {
            title: 'תקשורת ואבטחה:',
            items: [
              'שליחת התראות חשובות לגבי החשבון שלך',
              'עדכון על עדכוני האפליקציה'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'שיתוף מידע',
        lastUpdated: 'עודכן לאחרונה',
        lastUpdatedDate: '2 באוקטובר 2025',
        paragraphs: [
          'אנחנו לא מוכרים, משכירים או משתפים את המידע האישי שלך עם צדדים שלישיים למטרות מסחריות. אנו משתפים מידע רק בנסיבות המוגבלות הבאות:'
        ],
        subsections: [
          {
            title: 'ספקי שירותים:',
            items: [
              'שירותי אירוח בענן עם הצפנה מלאה',
              'שירותי ניתוח מצטברים ואנונימיים',
              'שירותי תמיכה בלקוחות',
              'שירותי אבטחה ומניעת הונאות'
            ]
          },
          {
            title: 'דרישות חוקיות:',
            items: [
              'כאשר נדרש על פי חוק או הליך משפטי תקף',
              'כדי להגן על הזכויות והבטיחות של Hero Budget והמשתמשים שלה',
              'במקרה של מיזוג, רכישה או מכירת נכסים (עם הודעה מוקדמת)'
            ]
          }
        ]
      },
      cookies: {
        title: 'עוגיות וטכנולוגיות דומות',
        lastUpdated: 'עודכן לאחרונה',
        lastUpdatedDate: '2 באוקטובר 2025',
        paragraphs: [
          'כאפליקציית React Native לנייד, אנו לא משתמשים בעוגיות אינטרנט מסורתיות. במקום זאת, אנו משתמשים בטכנולוגיות אחסון מקומיות במכשיר שלך כדי לשפר את החוויה שלך ולאפשר פונקציונליות ליבה:'
        ],
        subsections: [
          {
            title: 'טכנולוגיות אחסון מקומיות בהן אנו משתמשים:',
            items: [
              'AsyncStorage: לאחסון ההעדפות, ההגדרות והתצורה של האפליקציה שלך',
              'אחסון מאובטח: להגנה על נתונים רגישים כמו אסימוני אימות',
              'אחסון מטמון: לשיפור ביצועי האפליקציה ולאפשר פונקציונליות לא מקוונת',
              'נתוני הפעלה: לשמירה על מצב הכניסה שלך בין הפעלות האפליקציה'
            ]
          },
          {
            title: 'ניהול הנתונים שלך:',
            items: [
              'אתה יכול לנקות נתונים במטמון מתפריט ההגדרות של האפליקציה',
              'אתה יכול להתנתק כדי להסיר אסימוני הפעלה ונתונים רגישים',
              'אתה יכול להסיר את התקנת האפליקציה כדי להסיר לחלוטין את כל הנתונים המקומיים',
              'ניקוי נתונים מסוימים עשוי לדרוש ממך להיכנס שוב או להגדיר מחדש הגדרות'
            ]
          }
        ]
      },
      security: {
        title: 'Sécurité des Données',
        lastUpdated: 'Dernière mise à jour',
        lastUpdatedDate: '2 octobre 2025',
        paragraphs: [
          'Nous mettons en œuvre des mesures de sécurité appropriées pour protéger les informations que vous stockez localement sur votre appareil :'
        ],
        subsections: [
          {
            title: 'Mesures techniques :',
            items: [
                'Stockage local sécurisé sur votre appareil',
                'Communication sécurisée avec nos serveurs lors de la synchronisation des données',
                'Authentification sécurisée pour accéder à votre compte',
                'Protection de base contre les accès non autorisés'
            ]
          },
          {
            title: 'Mesures organisationnelles :',
            items: [
                'Seul vous avez un accès direct aux données que vous saisissez dans l\'application',
                'Notre équipe suit les meilleures pratiques de développement sécurisé',
                'Examens réguliers de la sécurité de l\'application',
                'Procédures pour signaler et résoudre les problèmes de sécurité'
            ]
          }
        ]
      },
      retention: {
        title: 'Conservation des Données',
        lastUpdated: 'Dernière mise à jour',
        lastUpdatedDate: '2 octobre 2025',
        paragraphs: [
          'Nous ne conservons vos informations personnelles que le temps nécessaire pour remplir les objectifs décrits dans cette politique :'
        ],
        subsections: [
          {
            title: 'Périodes de conservation :',
            items: [
                'Données de compte : tant que vous maintenez un compte actif',
                'Données de transaction : jusqu\'à 7 ans pour la conformité réglementaire',
                'Données de support : jusqu\'à 3 ans après la résolution'
            ]
          },
          {
            title: 'Suppression des données :',
            items: [
                'Suppression automatique à l\'expiration des périodes de conservation',
                'Suppression complète des données stockées localement',
                'Possibilité de demander une suppression anticipée (sous réserve de restrictions légales)',
                'Notification de suppression lorsque cela est techniquement possible'
            ]
          }
        ]
      }
    },
  },
};

// Hindi (India)
const hi_IN: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: 'गोपनीयता नीति',
    subtitle: 'आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। जानें कि हम आपकी व्यक्तिगत जानकारी की सुरक्षा कैसे करते हैं।',
    lastUpdated: 'अंतिम अद्यतन',
    updateDate: 'अक्टूबर 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'गोपनीयता',
      gdpr: 'GDPR',
      gdprLabel: 'अनुपालन',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'गोपनीयता नीति',
    subtitle: 'विस्तार से जानें कि हम Hero Budget में आपकी व्यक्तिगत जानकारी की सुरक्षा और प्रबंधन कैसे करते हैं',
    quickNavigation: 'त्वरित नेविगेशन',
    readFullPolicy: 'पूर्ण नीति पढ़ें',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'परिचय और दायरा',
        lastUpdated: 'अंतिम अद्यतन',
        lastUpdatedDate: '2 अक्टूबर 2025',
        paragraphs: [
          'Hero Budget में, हम आपकी गोपनीयता की सुरक्षा और सम्मान करने के लिए प्रतिबद्ध हैं। यह गोपनीयता नीति बताती है कि जब आप हमारे मोबाइल एप्लिकेशन और संबंधित सेवाओं का उपयोग करते हैं तो हम आपकी व्यक्तिगत जानकारी को कैसे एकत्र, उपयोग, साझा और सुरक्षित करते हैं।',
          'यह नीति सभी Hero Budget उपयोगकर्ताओं पर लागू होती है, उनके भौगोलिक स्थान की परवाह किए बिना, और अंतर्राष्ट्रीय डेटा सुरक्षा नियमों का अनुपालन करती है, जिसमें यूरोपीय संघ का सामान्य डेटा संरक्षण विनियमन (GDPR) और कैलिफ़ोर्निया उपभोक्ता गोपनीयता अधिनियम (CCPA) शामिल हैं।',
          'Hero Budget का उपयोग करके, आप इस नीति में वर्णित प्रथाओं को स्वीकार करते हैं। यदि आप इस नीति के किसी भी पहलू से सहमत नहीं हैं, तो कृपया हमारी सेवाओं का उपयोग न करें।'
        ]
      },
      dataCollection: {
        title: 'हम जो जानकारी एकत्र करते हैं',
        lastUpdated: 'अंतिम अद्यतन',
        lastUpdatedDate: '2 अक्टूबर 2025',
        paragraphs: [
          'हम अपनी सेवाएं प्रदान करने और सुधारने के लिए विभिन्न प्रकार की जानकारी एकत्र करते हैं:'
        ],
        subsections: [
          {
            title: 'जानकारी जो आप सीधे प्रदान करते हैं:',
            items: [
              'खाता जानकारी: नाम, ईमेल पता, प्रोफ़ाइल फ़ोटो',
              'वित्तीय डेटा: आवर्ती बिल, श्रेणियां, बचत लक्ष्य',
              'उपयोगकर्ता प्राथमिकताएं: ऐप सेटिंग्स, सूचनाएं'
            ]
          },
          {
            title: 'स्वचालित रूप से एकत्र की गई जानकारी:',
            items: [
              'डिवाइस जानकारी: मॉडल, ऑपरेटिंग सिस्टम, विशिष्ट पहचानकर्ता',
              'प्रदर्शन डेटा: त्रुटि लॉग, प्रतिक्रिया समय, क्रैश'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'हम आपकी जानकारी का उपयोग कैसे करते हैं',
        lastUpdated: 'अंतिम अद्यतन',
        lastUpdatedDate: '2 अक्टूबर 2025',
        paragraphs: [
          'हम केवल उस जानकारी का उपयोग करते हैं जो आप एप्लिकेशन में मैन्युअल रूप से दर्ज करते हैं, निम्नलिखित उद्देश्यों के लिए:'
        ],
        subsections: [
          {
            title: 'सेवा प्रदान करना:',
            items: [
              'आवर्ती बिल डेटा स्टोर करना जो आप मैन्युअल रूप से दर्ज करते हैं',
              'आपके आवर्ती बिलों के अनुस्मारक और विश्लेषण उत्पन्न करना',
              'उन उपकरणों में आपके डेटा को सिंक्रनाइज़ करना जहां आप ऐप का उपयोग करते हैं',
              'तकनीकी सहायता और ग्राहक सेवा प्रदान करना'
            ]
          },
          {
            title: 'सुधार और वैयक्तिकरण:',
            items: [
              'ऐप में आपके अनुभव को वैयक्तिकृत करना',
              'नई सुविधाओं और सुधारों को विकसित करना',
              'समेकित और गुमनाम उपयोग विश्लेषण करना',
              'ऐप के प्रदर्शन को अनुकूलित करना'
            ]
          },
          {
            title: 'संचार और सुरक्षा:',
            items: [
              'आपके खाते के बारे में महत्वपूर्ण सूचनाएं भेजना',
              'ऐप अपडेट की जानकारी देना'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'जानकारी साझा करना',
        lastUpdated: 'अंतिम अपडेट',
        lastUpdatedDate: '2 अक्टूबर 2025',
        paragraphs: [
          'हम वाणिज्यिक उद्देश्यों के लिए आपकी व्यक्तिगत जानकारी तीसरे पक्ष को नहीं बेचते, किराए पर नहीं देते या साझा नहीं करते हैं। हम केवल निम्नलिखित सीमित परिस्थितियों में जानकारी साझा करते हैं:'
        ],
        subsections: [
          {
            title: 'सेवा प्रदाता:',
            items: [
              'पूर्ण एन्क्रिप्शन के साथ क्लाउड होस्टिंग सेवाएं',
              'एकत्रित और गुमनाम विश्लेषण सेवाएं',
              'ग्राहक सहायता सेवाएं',
              'सुरक्षा और धोखाधड़ी रोकथाम सेवाएं'
            ]
          },
          {
            title: 'कानूनी आवश्यकताएं:',
            items: [
              'जब कानून या वैध कानूनी प्रक्रिया द्वारा आवश्यक हो',
              'Hero Budget और इसके उपयोगकर्ताओं के अधिकारों और सुरक्षा की रक्षा के लिए',
              'विलय, अधिग्रहण या संपत्ति की बिक्री के मामले में (पूर्व सूचना के साथ)'
            ]
          }
        ]
      },
      cookies: {
        title: 'कुकीज़ और समान प्रौद्योगिकियाँ',
        lastUpdated: 'अंतिम अपडेट',
        lastUpdatedDate: '2 अक्टूबर 2025',
        paragraphs: [
          'React Native मोबाइल एप्लिकेशन के रूप में, हम पारंपरिक वेब कुकीज़ का उपयोग नहीं करते हैं। इसके बजाय, हम आपके अनुभव को बेहतर बनाने और मुख्य कार्यक्षमता को सक्षम करने के लिए आपके डिवाइस पर स्थानीय संग्रहण प्रौद्योगिकियों का उपयोग करते हैं:'
        ],
        subsections: [
          {
            title: 'स्थानीय संग्रहण प्रौद्योगिकियाँ जो हम उपयोग करते हैं:',
            items: [
              'AsyncStorage: आपकी प्राथमिकताएं, सेटिंग्स और ऐप कॉन्फ़िगरेशन संग्रहीत करने के लिए',
              'सुरक्षित संग्रहण: प्रमाणीकरण टोकन जैसे संवेदनशील डेटा की सुरक्षा के लिए',
              'कैश संग्रहण: ऐप के प्रदर्शन को बेहतर बनाने और ऑफ़लाइन कार्यक्षमता को सक्षम करने के लिए',
              'सत्र डेटा: ऐप सत्रों के बीच आपकी लॉगिन स्थिति बनाए रखने के लिए'
            ]
          },
          {
            title: 'अपने डेटा का प्रबंधन:',
            items: [
              'आप ऐप सेटिंग्स मेनू से कैश किए गए डेटा को साफ़ कर सकते हैं',
              'आप सत्र टोकन और संवेदनशील डेटा को हटाने के लिए लॉग आउट कर सकते हैं',
              'आप सभी स्थानीय डेटा को पूरी तरह से हटाने के लिए ऐप को अनइंस्टॉल कर सकते हैं',
              'कुछ डेटा को साफ़ करने के लिए आपको फिर से लॉगिन करना या सेटिंग्स को पुनः कॉन्फ़िगर करना पड़ सकता है'
            ]
          }
        ]
      },
      security: {
        title: 'אבטחת נתונים',
        lastUpdated: 'עודכן לאחרונה',
        lastUpdatedDate: '2 באוקטובר 2025',
        paragraphs: [
          'אנו מיישמים אמצעי אבטחה מתאימים כדי להגן על המידע שאתה מאחסן באופן מקומי במכשיר שלך:'
        ],
        subsections: [
          {
            title: 'אמצעים טכניים:',
            items: [
                'אחסון מקומי מאובטח במכשיר שלך',
                'תקשורת מאובטחת עם השרתים שלנו בעת סנכרון נתונים',
                'אימות מאובטח לגישה לחשבון שלך',
                'הגנה בסיסית מפני גישה לא מורשית'
            ]
          },
          {
            title: 'אמצעים ארגוניים:',
            items: [
                'רק לך יש גישה ישירה לנתונים שאתה מזין באפליקציה',
                'הצוות שלנו עוקב אחר שיטות עבודה מומלצות לפיתוח מאובטח',
                'סקירות אבטחה קבועות של האפליקציה',
                'נהלים לדיווח ופתרון בעיות אבטחה'
            ]
          }
        ]
      },
      retention: {
        title: 'שמירת נתונים',
        lastUpdated: 'עודכן לאחרונה',
        lastUpdatedDate: '2 באוקטובר 2025',
        paragraphs: [
          'אנו שומרים את המידע האישי שלך רק כל עוד הכרחי למילוי המטרות המתוארות במדיניות זו:'
        ],
        subsections: [
          {
            title: 'תקופות שמירה:',
            items: [
                'נתוני חשבון: כל עוד אתה מקיים חשבון פעיל',
                'נתוני עסקאות: עד 7 שנים לצורך עמידה ברגולציה',
                'נתוני תמיכה: עד 3 שנים לאחר פתרון'
            ]
          },
          {
            title: 'מחיקת נתונים:',
            items: [
                'מחיקה אוטומטית כאשר תקופות השמירה פגות',
                'מחיקה מלאה של נתונים שנשמרו באופן מקומי',
                'אפשרות לבקש מחיקה מוקדמת (בכפוף להגבלות משפטיות)',
                'הודעת מחיקה כאשר אפשרי מבחינה טכנית'
            ]
          }
        ]
      }
    },
  },
};

// Indonesian (Indonesia)
const id_ID: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: 'Kebijakan Privasi',
    subtitle: 'Privasi Anda penting bagi kami. Pelajari bagaimana kami melindungi informasi pribadi Anda.',
    lastUpdated: 'Terakhir diperbarui',
    updateDate: 'Oktober 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Privasi',
      gdpr: 'GDPR',
      gdprLabel: 'Kepatuhan',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'Kebijakan Privasi',
    subtitle: 'Pelajari secara detail bagaimana kami melindungi dan mengelola informasi pribadi Anda di Hero Budget',
    quickNavigation: 'Navigasi Cepat',
    readFullPolicy: 'Baca Kebijakan Lengkap',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'Pengantar dan Cakupan',
        lastUpdated: 'Terakhir diperbarui',
        lastUpdatedDate: '2 Oktober 2025',
        paragraphs: [
          'Di Hero Budget, kami berkomitmen untuk melindungi dan menghormati privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, membagikan, dan melindungi informasi pribadi Anda saat Anda menggunakan aplikasi seluler dan layanan terkait kami.',
          'Kebijakan ini berlaku untuk semua pengguna Hero Budget, terlepas dari lokasi geografis mereka, dan mematuhi peraturan perlindungan data internasional, termasuk Peraturan Perlindungan Data Umum (GDPR) Uni Eropa dan Undang-Undang Privasi Konsumen California (CCPA).',
          'Dengan menggunakan Hero Budget, Anda menerima praktik yang dijelaskan dalam kebijakan ini. Jika Anda tidak setuju dengan aspek apa pun dari kebijakan ini, harap jangan gunakan layanan kami.'
        ]
      },
      dataCollection: {
        title: 'Informasi yang Kami Kumpulkan',
        lastUpdated: 'Terakhir diperbarui',
        lastUpdatedDate: '2 Oktober 2025',
        paragraphs: [
          'Kami mengumpulkan berbagai jenis informasi untuk menyediakan dan meningkatkan layanan kami:'
        ],
        subsections: [
          {
            title: 'Informasi yang Anda berikan secara langsung:',
            items: [
              'Informasi akun: nama, alamat email, foto profil',
              'Data keuangan: tagihan berulang, kategori, target tabungan',
              'Preferensi pengguna: pengaturan aplikasi, notifikasi'
            ]
          },
          {
            title: 'Informasi yang dikumpulkan secara otomatis:',
            items: [
              'Informasi perangkat: model, sistem operasi, pengenal unik',
              'Data kinerja: log kesalahan, waktu respons, crash'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'Bagaimana Kami Menggunakan Informasi Anda',
        lastUpdated: 'Terakhir diperbarui',
        lastUpdatedDate: '2 Oktober 2025',
        paragraphs: [
          'Kami hanya menggunakan informasi yang Anda masukkan secara manual ke dalam aplikasi untuk tujuan berikut:'
        ],
        subsections: [
          {
            title: 'Penyediaan layanan:',
            items: [
              'Menyimpan data tagihan berulang yang Anda masukkan secara manual',
              'Membuat pengingat dan analisis tagihan berulang Anda',
              'Menyinkronkan data Anda di seluruh perangkat tempat Anda menggunakan aplikasi',
              'Memberikan dukungan teknis dan layanan pelanggan'
            ]
          },
          {
            title: 'Peningkatan dan personalisasi:',
            items: [
              'Personalisasi pengalaman Anda di aplikasi',
              'Mengembangkan fitur dan perbaikan baru',
              'Melakukan analisis penggunaan yang digabungkan dan anonim',
              'Mengoptimalkan kinerja aplikasi'
            ]
          },
          {
            title: 'Komunikasi dan keamanan:',
            items: [
              'Mengirim pemberitahuan penting tentang akun Anda',
              'Mengomunikasikan pembaruan aplikasi'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Berbagi Informasi',
        lastUpdated: 'Terakhir diperbarui',
        lastUpdatedDate: '2 Oktober 2025',
        paragraphs: [
          'Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga untuk tujuan komersial. Kami hanya membagikan informasi dalam keadaan terbatas berikut:'
        ],
        subsections: [
          {
            title: 'Penyedia layanan:',
            items: [
              'Layanan hosting cloud dengan enkripsi lengkap',
              'Layanan analitik agregat dan anonim',
              'Layanan dukungan pelanggan',
              'Layanan keamanan dan pencegahan penipuan'
            ]
          },
          {
            title: 'Persyaratan hukum:',
            items: [
              'Ketika diwajibkan oleh hukum atau proses hukum yang valid',
              'Untuk melindungi hak dan keamanan Hero Budget dan penggunanya',
              'Dalam kasus merger, akuisisi, atau penjualan aset (dengan pemberitahuan sebelumnya)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Cookie dan Teknologi Serupa',
        lastUpdated: 'Terakhir diperbarui',
        lastUpdatedDate: '2 Oktober 2025',
        paragraphs: [
          'Sebagai aplikasi mobile React Native, kami tidak menggunakan cookie web tradisional. Sebagai gantinya, kami menggunakan teknologi penyimpanan lokal di perangkat Anda untuk meningkatkan pengalaman Anda dan mengaktifkan fungsionalitas inti:'
        ],
        subsections: [
          {
            title: 'Teknologi penyimpanan lokal yang kami gunakan:',
            items: [
              'AsyncStorage: untuk menyimpan preferensi, pengaturan, dan konfigurasi aplikasi Anda',
              'Penyimpanan aman: untuk melindungi data sensitif seperti token autentikasi',
              'Penyimpanan cache: untuk meningkatkan kinerja aplikasi dan mengaktifkan fungsionalitas offline',
              'Data sesi: untuk mempertahankan status login Anda di seluruh sesi aplikasi'
            ]
          },
          {
            title: 'Mengelola data Anda:',
            items: [
              'Anda dapat menghapus data cache dari menu pengaturan aplikasi',
              'Anda dapat keluar untuk menghapus token sesi dan data sensitif',
              'Anda dapat mencopot pemasangan aplikasi untuk menghapus semua data lokal sepenuhnya',
              'Menghapus data tertentu mungkin mengharuskan Anda untuk masuk lagi atau mengkonfigurasi ulang pengaturan'
            ]
          }
        ]
      },
      security: {
        title: 'डेटा सुरक्षा',
        lastUpdated: 'अंतिम अपडेट',
        lastUpdatedDate: '2 अक्टूबर 2025',
        paragraphs: [
          'हम आपके डिवाइस पर स्थानीय रूप से संग्रहीत जानकारी की सुरक्षा के लिए उचित सुरक्षा उपाय लागू करते हैं:'
        ],
        subsections: [
          {
            title: 'तकनीकी उपाय:',
            items: [
                'आपके डिवाइस पर सुरक्षित स्थानीय स्टोरेज',
                'डेटा सिंक करते समय हमारे सर्वर के साथ सुरक्षित संचार',
                'आपके खाते तक पहुंचने के लिए सुरक्षित प्रमाणीकरण',
                'अनधिकृत पहुंच के खिलाफ बुनियादी सुरक्षा'
            ]
          },
          {
            title: 'संगठनात्मक उपाय:',
            items: [
                'केवल आपके पास ऐप में दर्ज किए गए डेटा तक सीधी पहुंच है',
                'हमारी टीम सुरक्षित विकास की सर्वोत्तम प्रथाओं का पालन करती है',
                'ऐप की नियमित सुरक्षा समीक्षा',
                'सुरक्षा समस्याओं की रिपोर्ट और समाधान के लिए प्रक्रियाएं'
            ]
          }
        ]
      },
      retention: {
        title: 'डेटा प्रतिधारण',
        lastUpdated: 'अंतिम अपडेट',
        lastUpdatedDate: '2 अक्टूबर 2025',
        paragraphs: [
          'हम इस नीति में वर्णित उद्देश्यों को पूरा करने के लिए आवश्यक समय तक ही आपकी व्यक्तिगत जानकारी बनाए रखते हैं:'
        ],
        subsections: [
          {
            title: 'प्रतिधारण अवधि:',
            items: [
                'खाता डेटा: जब तक आप एक सक्रिय खाता बनाए रखते हैं',
                'लेनदेन डेटा: नियामक अनुपालन के लिए 7 वर्ष तक',
                'समर्थन डेटा: समाधान के बाद 3 वर्ष तक'
            ]
          },
          {
            title: 'डेटा हटाना:',
            items: [
                'प्रतिधारण अवधि समाप्त होने पर स्वचालित विलोपन',
                'स्थानीय रूप से संग्रहीत डेटा का पूर्ण विलोपन',
                'प्रारंभिक विलोपन का अनुरोध करने की संभावना (कानूनी प्रतिबंधों के अधीन)',
                'तकनीकी रूप से संभव होने पर विलोपन अधिसूचना'
            ]
          }
        ]
      }
    },
  },
};

// Dutch (Netherlands)
const nl_NL: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: 'Privacybeleid',
    subtitle: 'Uw privacy is belangrijk voor ons. Leer hoe wij uw persoonlijke informatie beschermen.',
    lastUpdated: 'Laatst bijgewerkt',
    updateDate: 'Oktober 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Privacy',
      gdpr: 'AVG',
      gdprLabel: 'Naleving',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'Privacybeleid',
    subtitle: 'Leer in detail hoe we uw persoonlijke informatie beschermen en beheren bij Hero Budget',
    quickNavigation: 'Snelle navigatie',
    readFullPolicy: 'Lees het volledige beleid',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'Inleiding en toepassingsgebied',
        lastUpdated: 'Laatst bijgewerkt',
        lastUpdatedDate: '2 oktober 2025',
        paragraphs: [
          'Bij Hero Budget zijn we toegewijd aan het beschermen en respecteren van uw privacy. Dit Privacybeleid legt uit hoe we uw persoonlijke informatie verzamelen, gebruiken, delen en beschermen wanneer u onze mobiele applicatie en gerelateerde diensten gebruikt.',
          'Dit beleid is van toepassing op alle Hero Budget-gebruikers, ongeacht hun geografische locatie, en voldoet aan internationale regelgeving voor gegevensbescherming, waaronder de Algemene Verordening Gegevensbescherming (AVG) van de Europese Unie en de California Consumer Privacy Act (CCPA).',
          'Door Hero Budget te gebruiken, accepteert u de praktijken die in dit beleid worden beschreven. Als u het niet eens bent met enig aspect van dit beleid, gebruik dan alstublieft onze diensten niet.'
        ]
      },
      dataCollection: {
        title: 'Informatie die We Verzamelen',
        lastUpdated: 'Laatst bijgewerkt',
        lastUpdatedDate: '2 oktober 2025',
        paragraphs: [
          'We verzamelen verschillende soorten informatie om onze diensten te leveren en te verbeteren:'
        ],
        subsections: [
          {
            title: 'Informatie die u rechtstreeks verstrekt:',
            items: [
              'Accountinformatie: naam, e-mailadres, profielfoto',
              'Financiële gegevens: terugkerende rekeningen, categorieën, spaardoelen',
              'Gebruikersvoorkeuren: app-instellingen, meldingen'
            ]
          },
          {
            title: 'Automatisch verzamelde informatie:',
            items: [
              'Apparaatinformatie: model, besturingssysteem, unieke identificatiecodes',
              'Prestatiegegevens: foutlogboeken, reactietijd, crashes'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'Hoe We Uw Informatie Gebruiken',
        lastUpdated: 'Laatst bijgewerkt',
        lastUpdatedDate: '2 oktober 2025',
        paragraphs: [
          'We gebruiken alleen de informatie die u handmatig in de applicatie invoert voor de volgende doeleinden:'
        ],
        subsections: [
          {
            title: 'Dienstverlening:',
            items: [
              'Opslaan van de terugkerende rekeninggegevens die u handmatig invoert',
              'Genereren van herinneringen en analyses van uw terugkerende rekeningen',
              'Synchroniseren van uw gegevens op apparaten waar u de app gebruikt',
              'Leveren van technische ondersteuning en klantenservice'
            ]
          },
          {
            title: 'Verbetering en personalisatie:',
            items: [
              'Personaliseren van uw ervaring in de app',
              'Ontwikkelen van nieuwe functies en verbeteringen',
              'Uitvoeren van geaggregeerde en anonieme gebruiksanalyses',
              'Optimaliseren van app-prestaties'
            ]
          },
          {
            title: 'Communicatie en beveiliging:',
            items: [
              'Verzenden van belangrijke meldingen over uw account',
              'Communiceren van app-updates'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Informatie Delen',
        lastUpdated: 'Laatst bijgewerkt',
        lastUpdatedDate: '2 oktober 2025',
        paragraphs: [
          'We verkopen, verhuren of delen uw persoonlijke informatie niet met derden voor commerciële doeleinden. We delen informatie alleen in de volgende beperkte omstandigheden:'
        ],
        subsections: [
          {
            title: 'Dienstverleners:',
            items: [
              'Cloudhostingdiensten met volledige versleuteling',
              'Geaggregeerde en anonieme analysediensten',
              'Klantenondersteuningsdiensten',
              'Beveiligings- en fraudepreventiediensten'
            ]
          },
          {
            title: 'Wettelijke vereisten:',
            items: [
              'Wanneer vereist door de wet of een geldig juridisch proces',
              'Om de rechten en veiligheid van Hero Budget en zijn gebruikers te beschermen',
              'In geval van fusie, overname of verkoop van activa (met voorafgaande kennisgeving)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Cookies en Vergelijkbare Technologieën',
        lastUpdated: 'Laatst bijgewerkt',
        lastUpdatedDate: '2 oktober 2025',
        paragraphs: [
          'Als React Native mobiele applicatie gebruiken we geen traditionele webcookies. In plaats daarvan gebruiken we lokale opslagtechnologieën op uw apparaat om uw ervaring te verbeteren en kernfunctionaliteit mogelijk te maken:'
        ],
        subsections: [
          {
            title: 'Lokale opslagtechnologieën die we gebruiken:',
            items: [
              'AsyncStorage: voor het opslaan van uw voorkeuren, instellingen en app-configuratie',
              'Veilige opslag: voor het beschermen van gevoelige gegevens zoals authenticatietokens',
              'Cache-opslag: voor het verbeteren van app-prestaties en het mogelijk maken van offline functionaliteit',
              'Sessiegegevens: voor het behouden van uw inlogstatus tussen app-sessies'
            ]
          },
          {
            title: 'Uw gegevens beheren:',
            items: [
              'U kunt gecachte gegevens wissen vanuit het app-instellingenmenu',
              'U kunt uitloggen om sessietokens en gevoelige gegevens te verwijderen',
              'U kunt de app verwijderen om alle lokale gegevens volledig te verwijderen',
              'Het wissen van bepaalde gegevens kan vereisen dat u opnieuw inlogt of instellingen opnieuw configureert'
            ]
          }
        ]
      },
      security: {
        title: 'Keamanan Data',
        lastUpdated: 'Terakhir diperbarui',
        lastUpdatedDate: '2 Oktober 2025',
        paragraphs: [
          'Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi informasi yang Anda simpan secara lokal di perangkat Anda:'
        ],
        subsections: [
          {
            title: 'Langkah teknis:',
            items: [
                'Penyimpanan lokal yang aman di perangkat Anda',
                'Komunikasi yang aman dengan server kami saat menyinkronkan data',
                'Autentikasi yang aman untuk mengakses akun Anda',
                'Perlindungan dasar terhadap akses yang tidak sah'
            ]
          },
          {
            title: 'Langkah organisasi:',
            items: [
                'Hanya Anda yang memiliki akses langsung ke data yang Anda masukkan di aplikasi',
                'Tim kami mengikuti praktik terbaik pengembangan yang aman',
                'Tinjauan keamanan aplikasi secara berkala',
                'Prosedur untuk melaporkan dan menyelesaikan masalah keamanan'
            ]
          }
        ]
      },
      retention: {
        title: 'Penyimpanan Data',
        lastUpdated: 'Terakhir diperbarui',
        lastUpdatedDate: '2 Oktober 2025',
        paragraphs: [
          'Kami hanya menyimpan informasi pribadi Anda selama diperlukan untuk memenuhi tujuan yang dijelaskan dalam kebijakan ini:'
        ],
        subsections: [
          {
            title: 'Periode penyimpanan:',
            items: [
                'Data akun: selama Anda mempertahankan akun aktif',
                'Data transaksi: hingga 7 tahun untuk kepatuhan regulasi',
                'Data dukungan: hingga 3 tahun setelah penyelesaian'
            ]
          },
          {
            title: 'Penghapusan data:',
            items: [
                'Penghapusan otomatis saat periode penyimpanan berakhir',
                'Penghapusan lengkap data yang disimpan secara lokal',
                'Kemungkinan untuk meminta penghapusan lebih awal (tunduk pada pembatasan hukum)',
                'Notifikasi penghapusan jika secara teknis memungkinkan'
            ]
          }
        ]
      }
    },
  },
};

// Norwegian (Norway)
const no_NO: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: 'Personvernerklæring',
    subtitle: 'Ditt personvern er viktig for oss. Lær hvordan vi beskytter din personlige informasjon.',
    lastUpdated: 'Sist oppdatert',
    updateDate: 'Oktober 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Personvern',
      gdpr: 'GDPR',
      gdprLabel: 'Overholdelse',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'Personvernerklæring',
    subtitle: 'Lær i detalj hvordan vi beskytter og håndterer din personlige informasjon hos Hero Budget',
    quickNavigation: 'Rask navigering',
    readFullPolicy: 'Les hele retningslinjene',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'Introduksjon og omfang',
        lastUpdated: 'Sist oppdatert',
        lastUpdatedDate: '2. oktober 2025',
        paragraphs: [
          'Hos Hero Budget er vi forpliktet til å beskytte og respektere ditt personvern. Denne personvernerklæringen forklarer hvordan vi samler inn, bruker, deler og beskytter din personlige informasjon når du bruker vår mobilapplikasjon og relaterte tjenester.',
          'Denne politikken gjelder for alle Hero Budget-brukere uavhengig av deres geografiske plassering, og overholder internasjonale databeskyttelsesforskrifter, inkludert EUs generelle personvernforordning (GDPR) og California Consumer Privacy Act (CCPA).',
          'Ved å bruke Hero Budget aksepterer du praksisene beskrevet i denne politikken. Hvis du ikke er enig i noen del av denne politikken, vennligst ikke bruk våre tjenester.'
        ]
      },
      dataCollection: {
        title: 'Informasjon Vi Samler Inn',
        lastUpdated: 'Sist oppdatert',
        lastUpdatedDate: '2. oktober 2025',
        paragraphs: [
          'Vi samler inn ulike typer informasjon for å tilby og forbedre våre tjenester:'
        ],
        subsections: [
          {
            title: 'Informasjon du gir direkte:',
            items: [
              'Kontoinformasjon: navn, e-postadresse, profilbilde',
              'Finansielle data: gjentakende regninger, kategorier, sparemål',
              'Brukerpreferanser: appinnstillinger, varsler'
            ]
          },
          {
            title: 'Informasjon samlet inn automatisk:',
            items: [
              'Enhetsinformasjon: modell, operativsystem, unike identifikatorer',
              'Ytelsesdata: feillogger, responstid, krasj'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'Hvordan Vi Bruker Din Informasjon',
        lastUpdated: 'Sist oppdatert',
        lastUpdatedDate: '2. oktober 2025',
        paragraphs: [
          'Vi bruker bare informasjonen du manuelt legger inn i applikasjonen til følgende formål:'
        ],
        subsections: [
          {
            title: 'Tjenestelevering:',
            items: [
              'Lagre de gjentakende regningsdataene du legger inn manuelt',
              'Generere påminnelser og analyser av dine gjentakende regninger',
              'Synkronisere dataene dine på tvers av enheter der du bruker appen',
              'Tilby teknisk støtte og kundeservice'
            ]
          },
          {
            title: 'Forbedring og personalisering:',
            items: [
              'Personalisere opplevelsen din i appen',
              'Utvikle nye funksjoner og forbedringer',
              'Utføre aggregerte og anonyme bruksanalyser',
              'Optimalisere appens ytelse'
            ]
          },
          {
            title: 'Kommunikasjon og sikkerhet:',
            items: [
              'Sende viktige varsler om kontoen din',
              'Kommunisere appoppdateringer'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Deling av Informasjon',
        lastUpdated: 'Sist oppdatert',
        lastUpdatedDate: '2. oktober 2025',
        paragraphs: [
          'Vi selger, leier ut eller deler ikke din personlige informasjon med tredjeparter for kommersielle formål. Vi deler kun informasjon under følgende begrensede omstendigheter:'
        ],
        subsections: [
          {
            title: 'Tjenesteleverandører:',
            items: [
              'Skylagringstjenester med komplett kryptering',
              'Aggregerte og anonyme analysetjenester',
              'Kundestøttetjenester',
              'Sikkerhets- og svindelforebyggende tjenester'
            ]
          },
          {
            title: 'Lovkrav:',
            items: [
              'Når det kreves av lov eller gyldig juridisk prosess',
              'For å beskytte rettighetene og sikkerheten til Hero Budget og dets brukere',
              'I tilfelle fusjon, oppkjøp eller salg av eiendeler (med forhåndsvarsel)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Informasjonskapsler og Lignende Teknologier',
        lastUpdated: 'Sist oppdatert',
        lastUpdatedDate: '2. oktober 2025',
        paragraphs: [
          'Som en React Native mobilapplikasjon bruker vi ikke tradisjonelle nettkapsler. I stedet bruker vi lokal lagringsteknologi på enheten din for å forbedre opplevelsen din og aktivere kjernefunksjonalitet:'
        ],
        subsections: [
          {
            title: 'Lokal lagringsteknologier vi bruker:',
            items: [
              'AsyncStorage: for å lagre dine preferanser, innstillinger og appkonfigurasjon',
              'Sikker lagring: for å beskytte sensitive data som autentiseringstokens',
              'Hurtigbufferlagring: for å forbedre appens ytelse og aktivere offline funksjonalitet',
              'Øktdata: for å opprettholde din innloggingsstatus på tvers av app-økter'
            ]
          },
          {
            title: 'Administrere dataene dine:',
            items: [
              'Du kan tømme bufrede data fra appens innstillingsmeny',
              'Du kan logge ut for å fjerne økttokens og sensitive data',
              'Du kan avinstallere appen for å fjerne alle lokale data fullstendig',
              'Tømming av visse data kan kreve at du logger inn på nytt eller konfigurerer innstillingene på nytt'
            ]
          }
        ]
      },
      security: {
        title: 'Gegevensbeveiliging',
        lastUpdated: 'Laatst bijgewerkt',
        lastUpdatedDate: '2 oktober 2025',
        paragraphs: [
          'We implementeren passende beveiligingsmaatregelen om de informatie te beschermen die u lokaal op uw apparaat opslaat:'
        ],
        subsections: [
          {
            title: 'Technische maatregelen:',
            items: [
                'Veilige lokale opslag op uw apparaat',
                'Veilige communicatie met onze servers bij het synchroniseren van gegevens',
                'Veilige authenticatie om toegang te krijgen tot uw account',
                'Basisbescherming tegen ongeautoriseerde toegang'
            ]
          },
          {
            title: 'Organisatorische maatregelen:',
            items: [
                'Alleen u heeft directe toegang tot de gegevens die u in de app invoert',
                'Ons team volgt best practices voor veilige ontwikkeling',
                'Regelmatige beveiligingsbeoordelingen van de app',
                'Procedures om beveiligingsproblemen te melden en op te lossen'
            ]
          }
        ]
      },
      retention: {
        title: 'Gegevensbewaring',
        lastUpdated: 'Laatst bijgewerkt',
        lastUpdatedDate: '2 oktober 2025',
        paragraphs: [
          'We bewaren uw persoonlijke informatie alleen zolang als nodig is om de doeleinden te vervullen die in dit beleid worden beschreven:'
        ],
        subsections: [
          {
            title: 'Bewaringstermijnen:',
            items: [
                'Accountgegevens: zolang u een actief account onderhoudt',
                'Transactiegegevens: tot 7 jaar voor naleving van regelgeving',
                'Ondersteuningsgegevens: tot 3 jaar na oplossing'
            ]
          },
          {
            title: 'Gegevensverwijdering:',
            items: [
                'Automatische verwijdering wanneer bewaringstermijnen verlopen',
                'Volledige verwijdering van lokaal opgeslagen gegevens',
                'Mogelijkheid om vroegtijdige verwijdering aan te vragen (onder voorbehoud van wettelijke beperkingen)',
                'Verwijderingsmelding wanneer technisch haalbaar'
            ]
          }
        ]
      }
    },
  },
};

// Polish (Poland)
const pl_PL: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: 'Polityka Prywatności',
    subtitle: 'Twoja prywatność jest dla nas ważna. Dowiedz się, jak chronimy Twoje dane osobowe.',
    lastUpdated: 'Ostatnia aktualizacja',
    updateDate: 'Październik 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Prywatność',
      gdpr: 'RODO',
      gdprLabel: 'Zgodność',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'Polityka Prywatności',
    subtitle: 'Dowiedz się szczegółowo, jak chronimy i zarządzamy Twoimi danymi osobowymi w Hero Budget',
    quickNavigation: 'Szybka nawigacja',
    readFullPolicy: 'Przeczytaj pełną politykę',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'Wprowadzenie i zakres',
        lastUpdated: 'Ostatnia aktualizacja',
        lastUpdatedDate: '2 października 2025',
        paragraphs: [
          'W Hero Budget zobowiązujemy się chronić i szanować Twoją prywatność. Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób zbieramy, wykorzystujemy, udostępniamy i chronimy Twoje dane osobowe podczas korzystania z naszej aplikacji mobilnej i powiązanych usług.',
          'Niniejsza polityka ma zastosowanie do wszystkich użytkowników Hero Budget, niezależnie od ich lokalizacji geograficznej, i jest zgodna z międzynarodowymi przepisami o ochronie danych, w tym ogólnym rozporządzeniem o ochronie danych (RODO) Unii Europejskiej i ustawą o ochronie prywatności konsumentów w Kalifornii (CCPA).',
          'Korzystając z Hero Budget, akceptujesz praktyki opisane w niniejszej polityce. Jeśli nie zgadzasz się z jakimkolwiek aspektem tej polityki, prosimy o nieużywanie naszych usług.'
        ]
      },
      dataCollection: {
        title: 'Informacje, które Zbieramy',
        lastUpdated: 'Ostatnia aktualizacja',
        lastUpdatedDate: '2 października 2025',
        paragraphs: [
          'Zbieramy różne rodzaje informacji w celu świadczenia i ulepszania naszych usług:'
        ],
        subsections: [
          {
            title: 'Informacje, które podajesz bezpośrednio:',
            items: [
              'Informacje o koncie: imię i nazwisko, adres e-mail, zdjęcie profilowe',
              'Dane finansowe: rachunki cykliczne, kategorie, cele oszczędnościowe',
              'Preferencje użytkownika: ustawienia aplikacji, powiadomienia'
            ]
          },
          {
            title: 'Informacje zbierane automatycznie:',
            items: [
              'Informacje o urządzeniu: model, system operacyjny, unikalne identyfikatory',
              'Dane o wydajności: dzienniki błędów, czas odpowiedzi, awarie'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'Jak Wykorzystujemy Twoje Informacje',
        lastUpdated: 'Ostatnia aktualizacja',
        lastUpdatedDate: '2 października 2025',
        paragraphs: [
          'Wykorzystujemy tylko informacje, które ręcznie wprowadzasz do aplikacji, w następujących celach:'
        ],
        subsections: [
          {
            title: 'Świadczenie usług:',
            items: [
              'Przechowywanie danych o rachunkach cyklicznych, które ręcznie wprowadzasz',
              'Generowanie przypomnień i analiz Twoich rachunków cyklicznych',
              'Synchronizacja Twoich danych na urządzeniach, na których używasz aplikacji',
              'Zapewnienie wsparcia technicznego i obsługi klienta'
            ]
          },
          {
            title: 'Ulepszanie i personalizacja:',
            items: [
              'Personalizacja Twojego doświadczenia w aplikacji',
              'Rozwijanie nowych funkcji i ulepszeń',
              'Przeprowadzanie zagregowanych i anonimowych analiz użytkowania',
              'Optymalizacja wydajności aplikacji'
            ]
          },
          {
            title: 'Komunikacja i bezpieczeństwo:',
            items: [
              'Wysyłanie ważnych powiadomień dotyczących Twojego konta',
              'Komunikowanie aktualizacji aplikacji'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Udostępnianie Informacji',
        lastUpdated: 'Ostatnia aktualizacja',
        lastUpdatedDate: '2 października 2025',
        paragraphs: [
          'Nie sprzedajemy, nie wynajmujemy ani nie udostępniamy Twoich danych osobowych osobom trzecim w celach komercyjnych. Udostępniamy informacje tylko w następujących ograniczonych okolicznościach:'
        ],
        subsections: [
          {
            title: 'Dostawcy usług:',
            items: [
              'Usługi hostingu w chmurze z pełnym szyfrowaniem',
              'Zagregowane i anonimowe usługi analityczne',
              'Usługi wsparcia klienta',
              'Usługi bezpieczeństwa i zapobiegania oszustwom'
            ]
          },
          {
            title: 'Wymogi prawne:',
            items: [
              'Gdy jest to wymagane przez prawo lub ważny proces prawny',
              'W celu ochrony praw i bezpieczeństwa Hero Budget i jego użytkowników',
              'W przypadku fuzji, przejęcia lub sprzedaży aktywów (z wcześniejszym powiadomieniem)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Pliki Cookie i Podobne Technologie',
        lastUpdated: 'Ostatnia aktualizacja',
        lastUpdatedDate: '2 października 2025',
        paragraphs: [
          'Jako aplikacja mobilna React Native nie używamy tradycyjnych plików cookie internetowych. Zamiast tego używamy technologii lokalnego przechowywania na Twoim urządzeniu, aby poprawić Twoje doświadczenie i umożliwić podstawowe funkcje:'
        ],
        subsections: [
          {
            title: 'Technologie lokalnego przechowywania, których używamy:',
            items: [
              'AsyncStorage: do przechowywania Twoich preferencji, ustawień i konfiguracji aplikacji',
              'Bezpieczne przechowywanie: do ochrony wrażliwych danych, takich jak tokeny uwierzytelniania',
              'Przechowywanie pamięci podręcznej: do poprawy wydajności aplikacji i umożliwienia funkcjonalności offline',
              'Dane sesji: do utrzymania statusu logowania między sesjami aplikacji'
            ]
          },
          {
            title: 'Zarządzanie danymi:',
            items: [
              'Możesz wyczyścić dane z pamięci podręcznej z menu ustawień aplikacji',
              'Możesz się wylogować, aby usunąć tokeny sesji i wrażliwe dane',
              'Możesz odinstalować aplikację, aby całkowicie usunąć wszystkie dane lokalne',
              'Wyczyszczenie pewnych danych może wymagać ponownego zalogowania lub ponownej konfiguracji ustawień'
            ]
          }
        ]
      },
      security: {
        title: 'Datasikkerhet',
        lastUpdated: 'Sist oppdatert',
        lastUpdatedDate: '2. oktober 2025',
        paragraphs: [
          'Vi implementerer passende sikkerhetstiltak for å beskytte informasjonen du lagrer lokalt på enheten din:'
        ],
        subsections: [
          {
            title: 'Tekniske tiltak:',
            items: [
                'Sikker lokal lagring på enheten din',
                'Sikker kommunikasjon med våre servere ved synkronisering av data',
                'Sikker autentisering for å få tilgang til kontoen din',
                'Grunnleggende beskyttelse mot uautorisert tilgang'
            ]
          },
          {
            title: 'Organisatoriske tiltak:',
            items: [
                'Bare du har direkte tilgang til dataene du legger inn i appen',
                'Vårt team følger beste praksis for sikker utvikling',
                'Regelmessige sikkerhetsgjennomganger av appen',
                'Prosedyrer for å rapportere og løse sikkerhetsproblemer'
            ]
          }
        ]
      },
      retention: {
        title: 'Datalagring',
        lastUpdated: 'Sist oppdatert',
        lastUpdatedDate: '2. oktober 2025',
        paragraphs: [
          'Vi beholder din personlige informasjon bare så lenge som nødvendig for å oppfylle formålene beskrevet i denne policyen:'
        ],
        subsections: [
          {
            title: 'Lagringsperioder:',
            items: [
                'Kontodata: så lenge du opprettholder en aktiv konto',
                'Transaksjonsdata: opptil 7 år for regeloverholdelse',
                'Støttedata: opptil 3 år etter løsning'
            ]
          },
          {
            title: 'Datasletting:',
            items: [
                'Automatisk sletting når lagringsperioder utløper',
                'Fullstendig sletting av lokalt lagrede data',
                'Mulighet til å be om tidlig sletting (med forbehold om juridiske restriksjoner)',
                'Slettingsvarsel når det er teknisk mulig'
            ]
          }
        ]
      }
    },
  },
};

// Portuguese (Portugal)
const pt_PT: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: 'Política de Privacidade',
    subtitle: 'A sua privacidade é importante para nós. Saiba como protegemos as suas informações pessoais.',
    lastUpdated: 'Última atualização',
    updateDate: 'Outubro 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Privacidade',
      gdpr: 'GDPR',
      gdprLabel: 'Conformidade',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'Política de Privacidade',
    subtitle: 'Aprenda em detalhe como protegemos e gerimos as suas informações pessoais no Hero Budget',
    quickNavigation: 'Navegação Rápida',
    readFullPolicy: 'Ler Política Completa',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'Introdução e Âmbito',
        lastUpdated: 'Última atualização',
        lastUpdatedDate: '2 de outubro de 2025',
        paragraphs: [
          'No Hero Budget, estamos comprometidos em proteger e respeitar a sua privacidade. Esta Política de Privacidade explica como recolhemos, usamos, partilhamos e protegemos as suas informações pessoais quando utiliza a nossa aplicação móvel e serviços relacionados.',
          'Esta política aplica-se a todos os utilizadores do Hero Budget, independentemente da sua localização geográfica, e está em conformidade com regulamentações internacionais de proteção de dados, incluindo o Regulamento Geral de Proteção de Dados (RGPD) da União Europeia e a Lei de Privacidade do Consumidor da Califórnia (CCPA).',
          'Ao utilizar o Hero Budget, aceita as práticas descritas nesta política. Se não concordar com qualquer aspeto desta política, por favor não utilize os nossos serviços.'
        ]
      },
      dataCollection: {
        title: 'Informações que Recolhemos',
        lastUpdated: 'Última atualização',
        lastUpdatedDate: '2 de outubro de 2025',
        paragraphs: [
          'Recolhemos diferentes tipos de informações para fornecer e melhorar os nossos serviços:'
        ],
        subsections: [
          {
            title: 'Informações que fornece diretamente:',
            items: [
              'Informações da conta: nome, endereço de e-mail, fotografia de perfil',
              'Dados financeiros: faturas recorrentes, categorias, objetivos de poupança',
              'Preferências do utilizador: definições da aplicação, notificações'
            ]
          },
          {
            title: 'Informações recolhidas automaticamente:',
            items: [
              'Informações do dispositivo: modelo, sistema operativo, identificadores únicos',
              'Dados de desempenho: registos de erros, tempo de resposta, falhas'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'Como Usamos as Suas Informações',
        lastUpdated: 'Última atualização',
        lastUpdatedDate: '2 de outubro de 2025',
        paragraphs: [
          'Usamos apenas as informações que insere manualmente na aplicação para os seguintes propósitos:'
        ],
        subsections: [
          {
            title: 'Prestação de serviços:',
            items: [
              'Armazenar os dados de faturas recorrentes que insere manualmente',
              'Gerar lembretes e análises das suas faturas recorrentes',
              'Sincronizar os seus dados entre dispositivos onde utiliza a aplicação',
              'Fornecer suporte técnico e apoio ao cliente'
            ]
          },
          {
            title: 'Melhoria e personalização:',
            items: [
              'Personalizar a sua experiência na aplicação',
              'Desenvolver novas funcionalidades e melhorias',
              'Realizar análises de utilização agregadas e anónimas',
              'Otimizar o desempenho da aplicação'
            ]
          },
          {
            title: 'Comunicação e segurança:',
            items: [
              'Enviar notificações importantes sobre a sua conta',
              'Comunicar atualizações da aplicação'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Partilha de Informações',
        lastUpdated: 'Última atualização',
        lastUpdatedDate: '2 de outubro de 2025',
        paragraphs: [
          'Não vendemos, alugamos ou partilhamos as suas informações pessoais com terceiros para fins comerciais. Apenas partilhamos informações nas seguintes circunstâncias limitadas:'
        ],
        subsections: [
          {
            title: 'Prestadores de serviços:',
            items: [
              'Serviços de alojamento em nuvem com encriptação completa',
              'Serviços de análise agregados e anónimos',
              'Serviços de apoio ao cliente',
              'Serviços de segurança e prevenção de fraudes'
            ]
          },
          {
            title: 'Requisitos legais:',
            items: [
              'Quando exigido por lei ou processo legal válido',
              'Para proteger os direitos e segurança do Hero Budget e dos seus utilizadores',
              'Em caso de fusão, aquisição ou venda de ativos (com aviso prévio)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Cookies e Tecnologias Similares',
        lastUpdated: 'Última atualização',
        lastUpdatedDate: '2 de outubro de 2025',
        paragraphs: [
          'Como uma aplicação móvel React Native, não utilizamos cookies web tradicionais. Em vez disso, utilizamos tecnologias de armazenamento local no seu dispositivo para melhorar a sua experiência e ativar funcionalidades essenciais:'
        ],
        subsections: [
          {
            title: 'Tecnologias de armazenamento local que utilizamos:',
            items: [
              'AsyncStorage: para armazenar as suas preferências, definições e configuração da app',
              'Armazenamento seguro: para proteger dados sensíveis como tokens de autenticação',
              'Armazenamento em cache: para melhorar o desempenho da app e ativar funcionalidade offline',
              'Dados de sessão: para manter o seu estado de sessão iniciada entre sessões da app'
            ]
          },
          {
            title: 'Gerir os seus dados:',
            items: [
              'Pode limpar dados em cache no menu de definições da app',
              'Pode terminar sessão para remover tokens de sessão e dados sensíveis',
              'Pode desinstalar a app para remover completamente todos os dados locais',
              'Limpar certos dados pode exigir que inicie sessão novamente ou reconfigure as definições'
            ]
          }
        ]
      },
      security: {
        title: 'Bezpieczeństwo danych',
        lastUpdated: 'Ostatnia aktualizacja',
        lastUpdatedDate: '2 października 2025',
        paragraphs: [
          'Wdrażamy odpowiednie środki bezpieczeństwa w celu ochrony informacji przechowywanych lokalnie na Twoim urządzeniu:'
        ],
        subsections: [
          {
            title: 'Środki techniczne:',
            items: [
                'Bezpieczne przechowywanie lokalne na Twoim urządzeniu',
                'Bezpieczna komunikacja z naszymi serwerami podczas synchronizacji danych',
                'Bezpieczne uwierzytelnianie w celu uzyskania dostępu do Twojego konta',
                'Podstawowa ochrona przed nieautoryzowanym dostępem'
            ]
          },
          {
            title: 'Środki organizacyjne:',
            items: [
                'Tylko Ty masz bezpośredni dostęp do danych wprowadzanych w aplikacji',
                'Nasz zespół stosuje najlepsze praktyki bezpiecznego rozwoju',
                'Regularne przeglądy bezpieczeństwa aplikacji',
                'Procedury zgłaszania i rozwiązywania problemów bezpieczeństwa'
            ]
          }
        ]
      },
      retention: {
        title: 'Przechowywanie danych',
        lastUpdated: 'Ostatnia aktualizacja',
        lastUpdatedDate: '2 października 2025',
        paragraphs: [
          'Przechowujemy Twoje dane osobowe tylko tak długo, jak jest to konieczne do realizacji celów opisanych w tej polityce:'
        ],
        subsections: [
          {
            title: 'Okresy przechowywania:',
            items: [
                'Dane konta: dopóki utrzymujesz aktywne konto',
                'Dane transakcji: do 7 lat w celu zgodności z przepisami',
                'Dane wsparcia: do 3 lat po rozwiązaniu'
            ]
          },
          {
            title: 'Usuwanie danych:',
            items: [
                'Automatyczne usunięcie po upływie okresów przechowywania',
                'Całkowite usunięcie danych przechowywanych lokalnie',
                'Możliwość żądania wcześniejszego usunięcia (z zastrzeżeniem ograniczeń prawnych)',
                'Powiadomienie o usunięciu, gdy jest to technicznie możliwe'
            ]
          }
        ]
      }
    },
  },
};

// Swedish (Sweden)
const sv_SE: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: 'Integritetspolicy',
    subtitle: 'Din integritet är viktig för oss. Lär dig hur vi skyddar din personliga information.',
    lastUpdated: 'Senast uppdaterad',
    updateDate: 'Oktober 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Integritet',
      gdpr: 'GDPR',
      gdprLabel: 'Efterlevnad',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'Integritetspolicy',
    subtitle: 'Lär dig i detalj hur vi skyddar och hanterar din personliga information hos Hero Budget',
    quickNavigation: 'Snabb navigering',
    readFullPolicy: 'Läs hela policyn',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'Introduktion och omfattning',
        lastUpdated: 'Senast uppdaterad',
        lastUpdatedDate: '2 oktober 2025',
        paragraphs: [
          'På Hero Budget är vi engagerade i att skydda och respektera din integritet. Denna integritetspolicy förklarar hur vi samlar in, använder, delar och skyddar din personliga information när du använder vår mobilapplikation och relaterade tjänster.',
          'Denna policy gäller för alla Hero Budget-användare oavsett deras geografiska plats och följer internationella dataskyddsregler, inklusive Europeiska unionens allmänna dataskyddsförordning (GDPR) och California Consumer Privacy Act (CCPA).',
          'Genom att använda Hero Budget accepterar du de metoder som beskrivs i denna policy. Om du inte håller med om någon del av denna policy, vänligen använd inte våra tjänster.'
        ]
      },
      dataCollection: {
        title: 'Information Vi Samlar In',
        lastUpdated: 'Senast uppdaterad',
        lastUpdatedDate: '2 oktober 2025',
        paragraphs: [
          'Vi samlar in olika typer av information för att tillhandahålla och förbättra våra tjänster:'
        ],
        subsections: [
          {
            title: 'Information du tillhandahåller direkt:',
            items: [
              'Kontoinformation: namn, e-postadress, profilbild',
              'Finansiell data: återkommande räkningar, kategorier, sparmål',
              'Användarpreferenser: appinställningar, aviseringar'
            ]
          },
          {
            title: 'Information som samlas in automatiskt:',
            items: [
              'Enhetsinformation: modell, operativsystem, unika identifierare',
              'Prestandadata: felloggningar, svarstid, krascher'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'Hur Vi Använder Din Information',
        lastUpdated: 'Senast uppdaterad',
        lastUpdatedDate: '2 oktober 2025',
        paragraphs: [
          'Vi använder endast den information du manuellt anger i applikationen för följande ändamål:'
        ],
        subsections: [
          {
            title: 'Tillhandahållande av tjänster:',
            items: [
              'Lagra de återkommande räkningsdata du anger manuellt',
              'Generera påminnelser och analyser av dina återkommande räkningar',
              'Synkronisera din data mellan enheter där du använder appen',
              'Tillhandahålla teknisk support och kundservice'
            ]
          },
          {
            title: 'Förbättring och personalisering:',
            items: [
              'Anpassa din upplevelse i appen',
              'Utveckla nya funktioner och förbättringar',
              'Utföra aggregerade och anonyma användningsanalyser',
              'Optimera appens prestanda'
            ]
          },
          {
            title: 'Kommunikation och säkerhet:',
            items: [
              'Skicka viktiga meddelanden om ditt konto',
              'Kommunicera appuppdateringar'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Delning av Information',
        lastUpdated: 'Senast uppdaterad',
        lastUpdatedDate: '2 oktober 2025',
        paragraphs: [
          'Vi säljer, hyr ut eller delar inte din personliga information med tredje part för kommersiella ändamål. Vi delar endast information under följande begränsade omständigheter:'
        ],
        subsections: [
          {
            title: 'Tjänsteleverantörer:',
            items: [
              'Molnbaserade värdtjänster med fullständig kryptering',
              'Aggregerade och anonyma analystjänster',
              'Kundtjänster',
              'Säkerhets- och bedrägeriskyddstjänster'
            ]
          },
          {
            title: 'Lagkrav:',
            items: [
              'När det krävs enligt lag eller giltig rättslig process',
              'För att skydda Hero Budgets och dess användares rättigheter och säkerhet',
              'I händelse av fusion, förvärv eller försäljning av tillgångar (med föregående meddelande)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Kakor och Liknande Teknologier',
        lastUpdated: 'Senast uppdaterad',
        lastUpdatedDate: '2 oktober 2025',
        paragraphs: [
          'Som en React Native mobilapplikation använder vi inte traditionella webbkakor. Istället använder vi lokal lagringsteknik på din enhet för att förbättra din upplevelse och möjliggöra kärnfunktionalitet:'
        ],
        subsections: [
          {
            title: 'Lokal lagringsteknik vi använder:',
            items: [
              'AsyncStorage: för att lagra dina preferenser, inställningar och appkonfiguration',
              'Säker lagring: för att skydda känsliga data som autentiseringstokens',
              'Cachelagring: för att förbättra appens prestanda och möjliggöra offline-funktionalitet',
              'Sessionsdata: för att upprätthålla din inloggningsstatus mellan appsessioner'
            ]
          },
          {
            title: 'Hantera dina data:',
            items: [
              'Du kan rensa cachad data från appens inställningsmeny',
              'Du kan logga ut för att ta bort sessionstokens och känsliga data',
              'Du kan avinstallera appen för att ta bort all lokal data helt',
              'Att rensa vissa data kan kräva att du loggar in igen eller konfigurerar om inställningarna'
            ]
          }
        ]
      },
      security: {
        title: 'Segurança de Dados',
        lastUpdated: 'Última atualização',
        lastUpdatedDate: '2 de outubro de 2025',
        paragraphs: [
          'Implementamos medidas de segurança apropriadas para proteger as informações que armazena localmente no seu dispositivo:'
        ],
        subsections: [
          {
            title: 'Medidas técnicas:',
            items: [
                'Armazenamento local seguro no seu dispositivo',
                'Comunicação segura com os nossos servidores ao sincronizar dados',
                'Autenticação segura para aceder à sua conta',
                'Proteção básica contra acesso não autorizado'
            ]
          },
          {
            title: 'Medidas organizacionais:',
            items: [
                'Apenas você tem acesso direto aos dados que insere na aplicação',
                'A nossa equipa segue as melhores práticas de desenvolvimento seguro',
                'Revisões regulares de segurança da aplicação',
                'Procedimentos para reportar e resolver problemas de segurança'
            ]
          }
        ]
      },
      retention: {
        title: 'Retenção de Dados',
        lastUpdated: 'Última atualização',
        lastUpdatedDate: '2 de outubro de 2025',
        paragraphs: [
          'Retemos as suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política:'
        ],
        subsections: [
          {
            title: 'Períodos de retenção:',
            items: [
                'Dados da conta: enquanto mantiver uma conta ativa',
                'Dados de transações: até 7 anos para conformidade regulatória',
                'Dados de apoio: até 3 anos após a resolução'
            ]
          },
          {
            title: 'Eliminação de dados:',
            items: [
                'Eliminação automática quando os períodos de retenção expiram',
                'Eliminação completa de dados armazenados localmente',
                'Possibilidade de solicitar eliminação antecipada (sujeita a restrições legais)',
                'Notificação de eliminação quando tecnicamente viável'
            ]
          }
        ]
      }
    },
  },
};

// Thai (Thailand)
const th_TH: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: 'นโยบายความเป็นส่วนตัว',
    subtitle: 'ความเป็นส่วนตัวของคุณสำคัญสำหรับเรา เรียนรู้วิธีที่เราปกป้องข้อมูลส่วนบุคคลของคุณ',
    lastUpdated: 'อัปเดตล่าสุด',
    updateDate: 'ตุลาคม 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'ความเป็นส่วนตัว',
      gdpr: 'GDPR',
      gdprLabel: 'การปฏิบัติตามกฎระเบียบ',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'นโยบายความเป็นส่วนตัว',
    subtitle: 'เรียนรู้โดยละเอียดว่าเราปกป้องและจัดการข้อมูลส่วนบุคคลของคุณใน Hero Budget อย่างไร',
    quickNavigation: 'การนำทางด่วน',
    readFullPolicy: 'อ่านนโยบายฉบับเต็ม',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'บทนำและขอบเขต',
        lastUpdated: 'อัปเดตล่าสุด',
        lastUpdatedDate: '2 ตุลาคม 2025',
        paragraphs: [
          'ที่ Hero Budget เรามุ่งมั่นที่จะปกป้องและเคารพความเป็นส่วนตัวของคุณ นโยบายความเป็นส่วนตัวนี้อธิบายวิธีที่เรารวบรวม ใช้ แบ่งปัน และปกป้องข้อมูลส่วนบุคคลของคุณเมื่อคุณใช้แอปพลิเคชันมือถือและบริการที่เกี่ยวข้องของเรา',
          'นโยบายนี้ใช้กับผู้ใช้ Hero Budget ทั้งหมด ไม่ว่าจะอยู่ในภูมิศาสตร์ใด และปฏิบัติตามกฎระเบียบการคุ้มครองข้อมูลระหว่างประเทศ รวมถึงกฎระเบียบการคุ้มครองข้อมูลทั่วไป (GDPR) ของสหภาพยุโรปและพระราชบัญญัติความเป็นส่วนตัวของผู้บริโภคแคลิฟอร์เนีย (CCPA)',
          'การใช้ Hero Budget แสดงว่าคุณยอมรับแนวปฏิบัติที่อธิบายไว้ในนโยบายนี้ หากคุณไม่เห็นด้วยกับแง่มุมใดๆ ของนโยบายนี้ โปรดอย่าใช้บริการของเรา'
        ]
      },
      dataCollection: {
        title: 'ข้อมูลที่เรารวบรวม',
        lastUpdated: 'อัปเดตล่าสุด',
        lastUpdatedDate: '2 ตุลาคม 2025',
        paragraphs: [
          'เรารวบรวมข้อมูลประเภทต่างๆ เพื่อให้บริการและปรับปรุงบริการของเรา:'
        ],
        subsections: [
          {
            title: 'ข้อมูลที่คุณให้โดยตรง:',
            items: [
              'ข้อมูลบัญชี: ชื่อ ที่อยู่อีเมล รูปโปรไฟล์',
              'ข้อมูลทางการเงิน: ค่าใช้จ่ายประจำ หมวดหมู่ เป้าหมายการออม',
              'การตั้งค่าผู้ใช้: การตั้งค่าแอป การแจ้งเตือน'
            ]
          },
          {
            title: 'ข้อมูลที่รวบรวมโดยอัตโนมัติ:',
            items: [
              'ข้อมูลอุปกรณ์: รุ่น ระบบปฏิบัติการ ตัวระบุเฉพาะ',
              'ข้อมูลประสิทธิภาพ: บันทึกข้อผิดพลาด เวลาตอบสนอง การขัดข้อง'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'วิธีที่เราใช้ข้อมูลของคุณ',
        lastUpdated: 'อัปเดตล่าสุด',
        lastUpdatedDate: '2 ตุลาคม 2025',
        paragraphs: [
          'เราใช้เฉพาะข้อมูลที่คุณป้อนด้วยตนเองในแอปพลิเคชันเพื่อวัตถุประสงค์ต่อไปนี้:'
        ],
        subsections: [
          {
            title: 'การให้บริการ:',
            items: [
              'เก็บข้อมูลค่าใช้จ่ายประจำที่คุณป้อนด้วยตนเอง',
              'สร้างการแจ้งเตือนและการวิเคราะห์ค่าใช้จ่ายประจำของคุณ',
              'ซิงค์ข้อมูลของคุณข้ามอุปกรณ์ที่คุณใช้แอป',
              'ให้บริการสนับสนุนทางเทคนิคและบริการลูกค้า'
            ]
          },
          {
            title: 'การปรับปรุงและการปรับแต่ง:',
            items: [
              'ปรับแต่งประสบการณ์ของคุณในแอป',
              'พัฒนาคุณสมบัติและการปรับปรุงใหม่ๆ',
              'ดำเนินการวิเคราะห์การใช้งานแบบรวมและไม่ระบุตัวตน',
              'เพิ่มประสิทธิภาพของแอป'
            ]
          },
          {
            title: 'การสื่อสารและความปลอดภัย:',
            items: [
              'ส่งการแจ้งเตือนที่สำคัญเกี่ยวกับบัญชีของคุณ',
              'แจ้งการอัปเดตแอป'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'การแบ่งปันข้อมูล',
        lastUpdated: 'อัปเดตล่าสุด',
        lastUpdatedDate: '2 ตุลาคม 2025',
        paragraphs: [
          'เราไม่ขาย เช่า หรือแบ่งปันข้อมูลส่วนบุคคลของคุณกับบุคคลที่สามเพื่อวัตถุประสงค์ทางการค้า เราแบ่งปันข้อมูลเฉพาะในสถานการณ์จำกัดต่อไปนี้:'
        ],
        subsections: [
          {
            title: 'ผู้ให้บริการ:',
            items: [
              'บริการโฮสต์คลาวด์พร้อมการเข้ารหัสที่สมบูรณ์',
              'บริการวิเคราะห์แบบรวมและไม่ระบุตัวตน',
              'บริการสนับสนุนลูกค้า',
              'บริการรักษาความปลอดภัยและป้องกันการฉ้อโกง'
            ]
          },
          {
            title: 'ข้อกำหนดทางกฎหมาย:',
            items: [
              'เมื่อกฎหมายหรือกระบวนการทางกฎหมายที่ถูกต้องกำหนด',
              'เพื่อปกป้องสิทธิและความปลอดภัยของ Hero Budget และผู้ใช้',
              'ในกรณีการควบรวม การซื้อกิจการ หรือการขายสินทรัพย์ (โดยแจ้งล่วงหน้า)'
            ]
          }
        ]
      },
      cookies: {
        title: 'คุกกี้และเทคโนโลยีที่คล้ายกัน',
        lastUpdated: 'อัปเดตล่าสุด',
        lastUpdatedDate: '2 ตุลาคม 2025',
        paragraphs: [
          'ในฐานะแอปพลิเคชันมือถือ React Native เราไม่ใช้คุกกี้เว็บแบบดั้งเดิม แต่เราใช้เทคโนโลยีการจัดเก็บข้อมูลในเครื่องบนอุปกรณ์ของคุณเพื่อปรับปรุงประสบการณ์ของคุณและเปิดใช้งานฟังก์ชันหลัก:'
        ],
        subsections: [
          {
            title: 'เทคโนโลยีการจัดเก็บข้อมูลในเครื่องที่เราใช้:',
            items: [
              'AsyncStorage: สำหรับจัดเก็บการตั้งค่าและการกำหนดค่าแอปของคุณ',
              'การจัดเก็บที่ปลอดภัย: สำหรับปกป้องข้อมูลที่ละเอียดอ่อน เช่น โทเค็นการยืนยันตัวตน',
              'การจัดเก็บแคช: สำหรับปรับปรุงประสิทธิภาพของแอปและเปิดใช้งานฟังก์ชันออฟไลน์',
              'ข้อมูลเซสชัน: สำหรับรักษาสถานะการเข้าสู่ระบบของคุณระหว่างเซสชันแอป'
            ]
          },
          {
            title: 'การจัดการข้อมูลของคุณ:',
            items: [
              'คุณสามารถล้างข้อมูลแคชจากเมนูการตั้งค่าแอป',
              'คุณสามารถออกจากระบบเพื่อลบโทเค็นเซสชันและข้อมูลที่ละเอียดอ่อน',
              'คุณสามารถถอนการติดตั้งแอปเพื่อลบข้อมูลในเครื่องทั้งหมดอย่างสมบูรณ์',
              'การล้างข้อมูลบางอย่างอาจต้องให้คุณเข้าสู่ระบบอีกครั้งหรือกำหนดค่าการตั้งค่าใหม่'
            ]
          }
        ]
      },
      security: {
        title: 'Datasäkerhet',
        lastUpdated: 'Senast uppdaterad',
        lastUpdatedDate: '2 oktober 2025',
        paragraphs: [
          'Vi implementerar lämpliga säkerhetsåtgärder för att skydda informationen du lagrar lokalt på din enhet:'
        ],
        subsections: [
          {
            title: 'Tekniska åtgärder:',
            items: [
                'Säker lokal lagring på din enhet',
                'Säker kommunikation med våra servrar vid datasynkronisering',
                'Säker autentisering för att komma åt ditt konto',
                'Grundläggande skydd mot obehörig åtkomst'
            ]
          },
          {
            title: 'Organisatoriska åtgärder:',
            items: [
                'Endast du har direkt åtkomst till data du anger i appen',
                'Vårt team följer bästa praxis för säker utveckling',
                'Regelbundna säkerhetsgranskningar av appen',
                'Procedurer för att rapportera och lösa säkerhetsproblem'
            ]
          }
        ]
      },
      retention: {
        title: 'Datalagring',
        lastUpdated: 'Senast uppdaterad',
        lastUpdatedDate: '2 oktober 2025',
        paragraphs: [
          'Vi behåller din personliga information endast så länge som det är nödvändigt för att uppfylla de syften som beskrivs i denna policy:'
        ],
        subsections: [
          {
            title: 'Lagringsperioder:',
            items: [
                'Kontodata: så länge du upprätthåller ett aktivt konto',
                'Transaktionsdata: upp till 7 år för regelefterlevnad',
                'Supportdata: upp till 3 år efter lösning'
            ]
          },
          {
            title: 'Dataradering:',
            items: [
                'Automatisk radering när lagringsperioder löper ut',
                'Fullständig radering av lokalt lagrad data',
                'Möjlighet att begära tidig radering (med förbehåll för juridiska begränsningar)',
                'Raderingsmeddelande när det är tekniskt möjligt'
            ]
          }
        ]
      }
    },
  },
};

// Turkish (Turkey)
const tr_TR: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: 'Gizlilik Politikası',
    subtitle: 'Gizliliğiniz bizim için önemlidir. Kişisel bilgilerinizi nasıl koruduğumuzu öğrenin.',
    lastUpdated: 'Son güncelleme',
    updateDate: 'Ekim 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Gizlilik',
      gdpr: 'GDPR',
      gdprLabel: 'Uyumluluk',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'Gizlilik Politikası',
    subtitle: 'Hero Budget\'ta kişisel bilgilerinizi nasıl koruduğumuzu ve yönettiğimizi ayrıntılı olarak öğrenin',
    quickNavigation: 'Hızlı Gezinme',
    readFullPolicy: 'Tam Politikayı Okuyun',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'Giriş ve Kapsam',
        lastUpdated: 'Son güncelleme',
        lastUpdatedDate: '2 Ekim 2025',
        paragraphs: [
          'Hero Budget olarak gizliliğinizi korumaya ve saygı göstermeye kararlıyız. Bu Gizlilik Politikası, mobil uygulamamızı ve ilgili hizmetlerimizi kullandığınızda kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı, paylaştığımızı ve koruduğumuzu açıklar.',
          'Bu politika, coğrafi konumlarından bağımsız olarak tüm Hero Budget kullanıcıları için geçerlidir ve Avrupa Birliği\'nin Genel Veri Koruma Yönetmeliği (GDPR) ve Kaliforniya Tüketici Gizliliği Yasası (CCPA) dahil olmak üzere uluslararası veri koruma düzenlemelerine uygundur.',
          'Hero Budget\'ı kullanarak, bu politikada açıklanan uygulamaları kabul etmiş olursunuz. Bu politikanın herhangi bir yönüne katılmıyorsanız, lütfen hizmetlerimizi kullanmayın.'
        ]
      },
      dataCollection: {
        title: 'Topladığımız Bilgiler',
        lastUpdated: 'Son güncelleme',
        lastUpdatedDate: '2 Ekim 2025',
        paragraphs: [
          'Hizmetlerimizi sağlamak ve iyileştirmek için farklı türde bilgiler topluyoruz:'
        ],
        subsections: [
          {
            title: 'Doğrudan sağladığınız bilgiler:',
            items: [
              'Hesap bilgileri: ad, e-posta adresi, profil fotoğrafı',
              'Finansal veriler: yinelenen faturalar, kategoriler, tasarruf hedefleri',
              'Kullanıcı tercihleri: uygulama ayarları, bildirimler'
            ]
          },
          {
            title: 'Otomatik olarak toplanan bilgiler:',
            items: [
              'Cihaz bilgileri: model, işletim sistemi, benzersiz tanımlayıcılar',
              'Performans verileri: hata günlükleri, yanıt süresi, çökmeler'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'Bilgilerinizi Nasıl Kullanıyoruz',
        lastUpdated: 'Son güncelleme',
        lastUpdatedDate: '2 Ekim 2025',
        paragraphs: [
          'Uygulamaya manuel olarak girdiğiniz bilgileri yalnızca aşağıdaki amaçlarla kullanıyoruz:'
        ],
        subsections: [
          {
            title: 'Hizmet sağlama:',
            items: [
              'Manuel olarak girdiğiniz yinelenen fatura verilerini depolama',
              'Yinelenen faturalarınız için hatırlatıcılar ve analizler oluşturma',
              'Uygulamayı kullandığınız cihazlar arasında verilerinizi senkronize etme',
              'Teknik destek ve müşteri hizmetleri sağlama'
            ]
          },
          {
            title: 'İyileştirme ve kişiselleştirme:',
            items: [
              'Uygulamadaki deneyiminizi kişiselleştirme',
              'Yeni özellikler ve iyileştirmeler geliştirme',
              'Toplu ve anonim kullanım analizleri yapma',
              'Uygulama performansını optimize etme'
            ]
          },
          {
            title: 'İletişim ve güvenlik:',
            items: [
              'Hesabınız hakkında önemli bildirimler gönderme',
              'Uygulama güncellemelerini iletme'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Bilgi Paylaşımı',
        lastUpdated: 'Son güncelleme',
        lastUpdatedDate: '2 Ekim 2025',
        paragraphs: [
          'Kişisel bilgilerinizi ticari amaçlarla üçüncü taraflarla satmaz, kiralamaz veya paylaşmayız. Bilgileri yalnızca aşağıdaki sınırlı durumlarda paylaşırız:'
        ],
        subsections: [
          {
            title: 'Hizmet sağlayıcılar:',
            items: [
              'Tam şifrelemeli bulut barındırma hizmetleri',
              'Toplu ve anonim analiz hizmetleri',
              'Müşteri destek hizmetleri',
              'Güvenlik ve dolandırıcılık önleme hizmetleri'
            ]
          },
          {
            title: 'Yasal gereklilikler:',
            items: [
              'Yasa veya geçerli yasal süreç tarafından gerekli kılındığında',
              'Hero Budget ve kullanıcılarının haklarını ve güvenliğini korumak için',
              'Birleşme, devralma veya varlık satışı durumunda (önceden bildirimle)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Çerezler ve Benzer Teknolojiler',
        lastUpdated: 'Son güncelleme',
        lastUpdatedDate: '2 Ekim 2025',
        paragraphs: [
          'React Native mobil uygulaması olarak geleneksel web çerezleri kullanmıyoruz. Bunun yerine, deneyiminizi geliştirmek ve temel işlevselliği etkinleştirmek için cihazınızdaki yerel depolama teknolojilerini kullanıyoruz:'
        ],
        subsections: [
          {
            title: 'Kullandığımız yerel depolama teknolojileri:',
            items: [
              'AsyncStorage: tercihlerinizi, ayarlarınızı ve uygulama yapılandırmanızı saklamak için',
              'Güvenli depolama: kimlik doğrulama belirteçleri gibi hassas verileri korumak için',
              'Önbellek depolama: uygulama performansını artırmak ve çevrimdışı işlevselliği etkinleştirmek için',
              'Oturum verileri: uygulama oturumları arasında oturum açma durumunuzu korumak için'
            ]
          },
          {
            title: 'Verilerinizi yönetme:',
            items: [
              'Önbelleğe alınmış verileri uygulama ayarları menüsünden temizleyebilirsiniz',
              'Oturum belirteçlerini ve hassas verileri kaldırmak için oturumu kapatabilirsiniz',
              'Tüm yerel verileri tamamen kaldırmak için uygulamayı kaldırabilirsiniz',
              'Belirli verileri temizlemek, tekrar oturum açmanızı veya ayarları yeniden yapılandırmanızı gerektirebilir'
            ]
          }
        ]
      },
      security: {
        title: 'ความปลอดภัยของข้อมูล',
        lastUpdated: 'อัปเดตล่าสุด',
        lastUpdatedDate: '2 ตุลาคม 2025',
        paragraphs: [
          'เราใช้มาตรการรักษาความปลอดภัยที่เหมาะสมเพื่อปกป้องข้อมูลที่คุณจัดเก็บไว้ในเครื่องของคุณ:'
        ],
        subsections: [
          {
            title: 'มาตรการทางเทคนิค:',
            items: [
                'พื้นที่จัดเก็บข้อมูลในเครื่องที่ปลอดภัยบนอุปกรณ์ของคุณ',
                'การสื่อสารที่ปลอดภัยกับเซิร์ฟเวอร์ของเราเมื่อซิงค์ข้อมูล',
                'การยืนยันตัวตนที่ปลอดภัยเพื่อเข้าถึงบัญชีของคุณ',
                'การป้องกันขั้นพื้นฐานจากการเข้าถึงโดยไม่ได้รับอนุญาต'
            ]
          },
          {
            title: 'มาตรการเชิงองค์กร:',
            items: [
                'เฉพาะคุณเท่านั้นที่สามารถเข้าถึงข้อมูลที่คุณป้อนในแอปโดยตรง',
                'ทีมของเราปฏิบัติตามแนวทางปฏิบัติที่ดีที่สุดในการพัฒนาที่ปลอดภัย',
                'การตรวจสอบความปลอดภัยของแอปเป็นประจำ',
                'ขั้นตอนในการรายงานและแก้ไขปัญหาความปลอดภัย'
            ]
          }
        ]
      },
      retention: {
        title: 'การเก็บรักษาข้อมูล',
        lastUpdated: 'อัปเดตล่าสุด',
        lastUpdatedDate: '2 ตุลาคม 2025',
        paragraphs: [
          'เราเก็บรักษาข้อมูลส่วนบุคคลของคุณเพียงเท่าที่จำเป็นเพื่อบรรลุวัตถุประสงค์ที่อธิบายไว้ในนโยบายนี้:'
        ],
        subsections: [
          {
            title: 'ระยะเวลาการเก็บรักษา:',
            items: [
                'ข้อมูลบัญชี: ตราบใดที่คุณยังคงมีบัญชีที่ใช้งานอยู่',
                'ข้อมูลการทำธุรกรรม: สูงสุด 7 ปีเพื่อการปฏิบัติตามกฎระเบียบ',
                'ข้อมูลการสนับสนุน: สูงสุด 3 ปีหลังจากการแก้ไข'
            ]
          },
          {
            title: 'การลบข้อมูล:',
            items: [
                'การลบอัตโนมัติเมื่อระยะเวลาการเก็บรักษาหมดอายุ',
                'การลบข้อมูลที่จัดเก็บไว้ในเครื่องอย่างสมบูรณ์',
                'ความเป็นไปได้ในการขอลบก่อนกำหนด (ภายใต้ข้อจำกัดทางกฎหมาย)',
                'การแจ้งเตือนการลบเมื่อเป็นไปได้ทางเทคนิค'
            ]
          }
        ]
      }
    },
  },
};

// Ukrainian (Ukraine)
const uk_UA: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: 'Політика конфіденційності',
    subtitle: 'Ваша конфіденційність важлива для нас. Дізнайтеся, як ми захищаємо вашу особисту інформацію.',
    lastUpdated: 'Останнє оновлення',
    updateDate: 'Жовтень 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Конфіденційність',
      gdpr: 'GDPR',
      gdprLabel: 'Відповідність',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'Політика конфіденційності',
    subtitle: 'Дізнайтеся детально, як ми захищаємо та обробляємо вашу особисту інформацію в Hero Budget',
    quickNavigation: 'Швидка навігація',
    readFullPolicy: 'Прочитати повну політику',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'Вступ та сфера застосування',
        lastUpdated: 'Останнє оновлення',
        lastUpdatedDate: '2 жовтня 2025',
        paragraphs: [
          'У Hero Budget ми прагнемо захищати та поважати вашу конфіденційність. Ця Політика конфіденційності пояснює, як ми збираємо, використовуємо, передаємо та захищаємо вашу особисту інформацію, коли ви користуєтеся нашим мобільним додатком та пов\'язаними послугами.',
          'Ця політика поширюється на всіх користувачів Hero Budget незалежно від їх географічного розташування та відповідає міжнародним нормам захисту даних, включаючи Загальний регламент захисту даних (GDPR) Європейського Союзу та Закон про конфіденційність споживачів Каліфорнії (CCPA).',
          'Використовуючи Hero Budget, ви приймаєте практики, описані в цій політиці. Якщо ви не згодні з будь-яким аспектом цієї політики, будь ласка, не використовуйте наші послуги.'
        ]
      },
      dataCollection: {
        title: 'Інформація, яку Ми Збираємо',
        lastUpdated: 'Останнє оновлення',
        lastUpdatedDate: '2 жовтня 2025',
        paragraphs: [
          'Ми збираємо різні типи інформації для надання та покращення наших послуг:'
        ],
        subsections: [
          {
            title: 'Інформація, яку ви надаєте безпосередньо:',
            items: [
              'Інформація про обліковий запис: ім\'я, адреса електронної пошти, фото профілю',
              'Фінансові дані: регулярні рахунки, категорії, цілі заощаджень',
              'Налаштування користувача: налаштування додатка, сповіщення'
            ]
          },
          {
            title: 'Інформація, яка збирається автоматично:',
            items: [
              'Інформація про пристрій: модель, операційна система, унікальні ідентифікатори',
              'Дані про продуктивність: журнали помилок, час відгуку, збої'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'Як Ми Використовуємо Вашу Інформацію',
        lastUpdated: 'Останнє оновлення',
        lastUpdatedDate: '2 жовтня 2025',
        paragraphs: [
          'Ми використовуємо лише інформацію, яку ви вводите вручну в додаток, для наступних цілей:'
        ],
        subsections: [
          {
            title: 'Надання послуг:',
            items: [
              'Зберігання даних про регулярні рахунки, які ви вводите вручну',
              'Генерування нагадувань та аналізів ваших регулярних рахунків',
              'Синхронізація ваших даних між пристроями, де ви використовуєте додаток',
              'Надання технічної підтримки та обслуговування клієнтів'
            ]
          },
          {
            title: 'Покращення та персоналізація:',
            items: [
              'Персоналізація вашого досвіду в додатку',
              'Розробка нових функцій та покращень',
              'Проведення агрегованого та анонімного аналізу використання',
              'Оптимізація продуктивності додатка'
            ]
          },
          {
            title: 'Комунікація та безпека:',
            items: [
              'Надсилання важливих повідомлень про ваш обліковий запис',
              'Повідомлення про оновлення додатка'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Обмін Інформацією',
        lastUpdated: 'Останнє оновлення',
        lastUpdatedDate: '2 жовтня 2025',
        paragraphs: [
          'Ми не продаємо, не здаємо в оренду та не ділимося вашою особистою інформацією з третіми сторонами в комерційних цілях. Ми ділимося інформацією лише за таких обмежених обставин:'
        ],
        subsections: [
          {
            title: 'Постачальники послуг:',
            items: [
              'Хмарні хостинг-послуги з повним шифруванням',
              'Агреговані та анонімні аналітичні послуги',
              'Послуги підтримки клієнтів',
              'Послуги безпеки та запобігання шахрайству'
            ]
          },
          {
            title: 'Юридичні вимоги:',
            items: [
              'Коли це вимагається законом або дійсним юридичним процесом',
              'Для захисту прав та безпеки Hero Budget та його користувачів',
              'У випадку злиття, придбання або продажу активів (з попереднім повідомленням)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Файли Cookie та Подібні Технології',
        lastUpdated: 'Останнє оновлення',
        lastUpdatedDate: '2 жовтня 2025',
        paragraphs: [
          'Як мобільний додаток React Native, ми не використовуємо традиційні веб-файли cookie. Натомість ми використовуємо технології локального сховища на вашому пристрої для покращення вашого досвіду та забезпечення основних функцій:'
        ],
        subsections: [
          {
            title: 'Технології локального сховища, які ми використовуємо:',
            items: [
              'AsyncStorage: для зберігання ваших налаштувань, параметрів та конфігурації додатка',
              'Безпечне сховище: для захисту конфіденційних даних, таких як токени автентифікації',
              'Кеш-сховище: для покращення продуктивності додатка та забезпечення автономної функціональності',
              'Дані сеансу: для підтримки вашого статусу входу між сеансами додатка'
            ]
          },
          {
            title: 'Керування вашими даними:',
            items: [
              'Ви можете очистити кешовані дані з меню налаштувань додатка',
              'Ви можете вийти з системи, щоб видалити токени сеансу та конфіденційні дані',
              'Ви можете видалити додаток, щоб повністю видалити всі локальні дані',
              'Очищення певних даних може вимагати повторного входу або переналаштування параметрів'
            ]
          }
        ]
      },
      security: {
        title: 'Veri Güvenliği',
        lastUpdated: 'Son güncelleme',
        lastUpdatedDate: '2 Ekim 2025',
        paragraphs: [
          'Cihazınızda yerel olarak sakladığınız bilgileri korumak için uygun güvenlik önlemlerini uyguluyoruz:'
        ],
        subsections: [
          {
            title: 'Teknik önlemler:',
            items: [
                'Cihazınızda güvenli yerel depolama',
                'Veri senkronizasyonu sırasında sunucularımızla güvenli iletişim',
                'Hesabınıza erişim için güvenli kimlik doğrulama',
                'Yetkisiz erişime karşı temel koruma'
            ]
          },
          {
            title: 'Organizasyonel önlemler:',
            items: [
                'Uygulamaya girdiğiniz verilere yalnızca sizin doğrudan erişiminiz vardır',
                'Ekibimiz güvenli geliştirme en iyi uygulamalarını takip eder',
                'Uygulamanın düzenli güvenlik incelemeleri',
                'Güvenlik sorunlarını bildirme ve çözme prosedürleri'
            ]
          }
        ]
      },
      retention: {
        title: 'Veri Saklama',
        lastUpdated: 'Son güncelleme',
        lastUpdatedDate: '2 Ekim 2025',
        paragraphs: [
          'Kişisel bilgilerinizi yalnızca bu politikada açıklanan amaçları yerine getirmek için gerekli olduğu sürece saklarız:'
        ],
        subsections: [
          {
            title: 'Saklama süreleri:',
            items: [
                'Hesap verileri: aktif bir hesabı sürdürdüğünüz sürece',
                'İşlem verileri: düzenleyici uyumluluk için 7 yıla kadar',
                'Destek verileri: çözümden sonra 3 yıla kadar'
            ]
          },
          {
            title: 'Veri silme:',
            items: [
                'Saklama süreleri dolduğunda otomatik silme',
                'Yerel olarak saklanan verilerin tamamen silinmesi',
                'Erken silme talep etme olasılığı (yasal kısıtlamalara tabi)',
                'Teknik olarak mümkün olduğunda silme bildirimi'
            ]
          }
        ]
      }
    },
  },
};

// Vietnamese (Vietnam)
const vi_VN: PrivacyTranslations = {
  ...en_GB,
  hero: {
    title: 'Chính sách Bảo mật',
    subtitle: 'Quyền riêng tư của bạn rất quan trọng đối với chúng tôi. Tìm hiểu cách chúng tôi bảo vệ thông tin cá nhân của bạn.',
    lastUpdated: 'Cập nhật lần cuối',
    updateDate: 'Tháng 10 năm 2025',
    stats: {
      privacy: '100%',
      privacyLabel: 'Quyền riêng tư',
      gdpr: 'GDPR',
      gdprLabel: 'Tuân thủ',
    },
  },
  policy: {
    ...en_GB.policy,
    title: 'Chính sách Bảo mật',
    subtitle: 'Tìm hiểu chi tiết cách chúng tôi bảo vệ và quản lý thông tin cá nhân của bạn tại Hero Budget',
    quickNavigation: 'Điều hướng nhanh',
    readFullPolicy: 'Đọc Chính sách Đầy đủ',
    fullSections: {
      ...en_GB.policy.fullSections,
      introduction: {
        title: 'Giới thiệu và Phạm vi',
        lastUpdated: 'Cập nhật lần cuối',
        lastUpdatedDate: '2 tháng 10 năm 2025',
        paragraphs: [
          'Tại Hero Budget, chúng tôi cam kết bảo vệ và tôn trọng quyền riêng tư của bạn. Chính sách Bảo mật này giải thích cách chúng tôi thu thập, sử dụng, chia sẻ và bảo vệ thông tin cá nhân của bạn khi bạn sử dụng ứng dụng di động và các dịch vụ liên quan của chúng tôi.',
          'Chính sách này áp dụng cho tất cả người dùng Hero Budget, bất kể vị trí địa lý của họ, và tuân thủ các quy định bảo vệ dữ liệu quốc tế, bao gồm Quy định Bảo vệ Dữ liệu Chung (GDPR) của Liên minh Châu Âu và Đạo luật Bảo mật Người tiêu dùng California (CCPA).',
          'Bằng cách sử dụng Hero Budget, bạn chấp nhận các thực hành được mô tả trong chính sách này. Nếu bạn không đồng ý với bất kỳ khía cạnh nào của chính sách này, vui lòng không sử dụng dịch vụ của chúng tôi.'
        ]
      },
      dataCollection: {
        title: 'Thông Tin Chúng Tôi Thu Thập',
        lastUpdated: 'Cập nhật lần cuối',
        lastUpdatedDate: '2 tháng 10 năm 2025',
        paragraphs: [
          'Chúng tôi thu thập các loại thông tin khác nhau để cung cấp và cải thiện dịch vụ của mình:'
        ],
        subsections: [
          {
            title: 'Thông tin bạn cung cấp trực tiếp:',
            items: [
              'Thông tin tài khoản: tên, địa chỉ email, ảnh hồ sơ',
              'Dữ liệu tài chính: hóa đơn định kỳ, danh mục, mục tiêu tiết kiệm',
              'Tùy chọn người dùng: cài đặt ứng dụng, thông báo'
            ]
          },
          {
            title: 'Thông tin được thu thập tự động:',
            items: [
              'Thông tin thiết bị: mẫu, hệ điều hành, mã định danh duy nhất',
              'Dữ liệu hiệu suất: nhật ký lỗi, thời gian phản hồi, sự cố'
            ]
          }
        ]
      },
      dataUsage: {
        title: 'Cách Chúng Tôi Sử Dụng Thông Tin Của Bạn',
        lastUpdated: 'Cập nhật lần cuối',
        lastUpdatedDate: '2 tháng 10 năm 2025',
        paragraphs: [
          'Chúng tôi chỉ sử dụng thông tin bạn nhập thủ công vào ứng dụng cho các mục đích sau:'
        ],
        subsections: [
          {
            title: 'Cung cấp dịch vụ:',
            items: [
              'Lưu trữ dữ liệu hóa đơn định kỳ mà bạn nhập thủ công',
              'Tạo lời nhắc và phân tích hóa đơn định kỳ của bạn',
              'Đồng bộ dữ liệu của bạn trên các thiết bị mà bạn sử dụng ứng dụng',
              'Cung cấp hỗ trợ kỹ thuật và dịch vụ khách hàng'
            ]
          },
          {
            title: 'Cải thiện và cá nhân hóa:',
            items: [
              'Cá nhân hóa trải nghiệm của bạn trong ứng dụng',
              'Phát triển các tính năng và cải tiến mới',
              'Thực hiện phân tích sử dụng tổng hợp và ẩn danh',
              'Tối ưu hóa hiệu suất ứng dụng'
            ]
          },
          {
            title: 'Liên lạc và bảo mật:',
            items: [
              'Gửi thông báo quan trọng về tài khoản của bạn',
              'Thông báo cập nhật ứng dụng'
            ]
          }
        ]
      },
      dataSharing: {
        title: 'Chia Sẻ Thông Tin',
        lastUpdated: 'Cập nhật lần cuối',
        lastUpdatedDate: '2 tháng 10, 2025',
        paragraphs: [
          'Chúng tôi không bán, cho thuê hoặc chia sẻ thông tin cá nhân của bạn với bên thứ ba cho mục đích thương mại. Chúng tôi chỉ chia sẻ thông tin trong các trường hợp hạn chế sau:'
        ],
        subsections: [
          {
            title: 'Nhà cung cấp dịch vụ:',
            items: [
              'Dịch vụ lưu trữ đám mây với mã hóa hoàn toàn',
              'Dịch vụ phân tích tổng hợp và ẩn danh',
              'Dịch vụ hỗ trợ khách hàng',
              'Dịch vụ bảo mật và ngăn chặn gian lận'
            ]
          },
          {
            title: 'Yêu cầu pháp lý:',
            items: [
              'Khi được yêu cầu bởi pháp luật hoặc quy trình pháp lý hợp lệ',
              'Để bảo vệ quyền và sự an toàn của Hero Budget và người dùng',
              'Trong trường hợp sáp nhập, mua lại hoặc bán tài sản (có thông báo trước)'
            ]
          }
        ]
      },
      cookies: {
        title: 'Cookie và Công nghệ Tương tự',
        lastUpdated: 'Cập nhật lần cuối',
        lastUpdatedDate: '2 tháng 10, 2025',
        paragraphs: [
          'Là ứng dụng di động React Native, chúng tôi không sử dụng cookie web truyền thống. Thay vào đó, chúng tôi sử dụng công nghệ lưu trữ cục bộ trên thiết bị của bạn để cải thiện trải nghiệm của bạn và kích hoạt chức năng cốt lõi:'
        ],
        subsections: [
          {
            title: 'Công nghệ lưu trữ cục bộ chúng tôi sử dụng:',
            items: [
              'AsyncStorage: để lưu trữ tùy chọn, cài đặt và cấu hình ứng dụng của bạn',
              'Lưu trữ an toàn: để bảo vệ dữ liệu nhạy cảm như token xác thực',
              'Lưu trữ bộ nhớ cache: để cải thiện hiệu suất ứng dụng và kích hoạt chức năng ngoại tuyến',
              'Dữ liệu phiên: để duy trì trạng thái đăng nhập của bạn giữa các phiên ứng dụng'
            ]
          },
          {
            title: 'Quản lý dữ liệu của bạn:',
            items: [
              'Bạn có thể xóa dữ liệu được lưu trong bộ nhớ cache từ menu cài đặt ứng dụng',
              'Bạn có thể đăng xuất để xóa token phiên và dữ liệu nhạy cảm',
              'Bạn có thể gỡ cài đặt ứng dụng để xóa hoàn toàn tất cả dữ liệu cục bộ',
              'Xóa một số dữ liệu nhất định có thể yêu cầu bạn đăng nhập lại hoặc cấu hình lại cài đặt'
            ]
          }
        ]
      },
      security: {
        title: 'Bảo mật Dữ liệu',
        lastUpdated: 'Cập nhật lần cuối',
        lastUpdatedDate: '2 tháng 10 năm 2025',
        paragraphs: [
          'Chúng tôi triển khai các biện pháp bảo mật thích hợp để bảo vệ thông tin bạn lưu trữ cục bộ trên thiết bị của mình:'
        ],
        subsections: [
          {
            title: 'Biện pháp kỹ thuật:',
            items: [
                'Lưu trữ cục bộ an toàn trên thiết bị của bạn',
                'Giao tiếp an toàn với máy chủ của chúng tôi khi đồng bộ dữ liệu',
                'Xác thực an toàn để truy cập tài khoản của bạn',
                'Bảo vệ cơ bản chống lại truy cập trái phép'
            ]
          },
          {
            title: 'Biện pháp tổ chức:',
            items: [
                'Chỉ bạn mới có quyền truy cập trực tiếp vào dữ liệu bạn nhập trong ứng dụng',
                'Đội ngũ của chúng tôi tuân theo các phương pháp hay nhất về phát triển an toàn',
                'Đánh giá bảo mật ứng dụng thường xuyên',
                'Quy trình báo cáo và giải quyết các vấn đề bảo mật'
            ]
          }
        ]
      },
      retention: {
        title: 'Lưu giữ Dữ liệu',
        lastUpdated: 'Cập nhật lần cuối',
        lastUpdatedDate: '2 tháng 10 năm 2025',
        paragraphs: [
          'Chúng tôi chỉ lưu giữ thông tin cá nhân của bạn trong thời gian cần thiết để hoàn thành các mục đích được mô tả trong chính sách này:'
        ],
        subsections: [
          {
            title: 'Thời gian lưu giữ:',
            items: [
                'Dữ liệu tài khoản: trong khi bạn duy trì một tài khoản hoạt động',
                'Dữ liệu giao dịch: tối đa 7 năm để tuân thủ quy định',
                'Dữ liệu hỗ trợ: tối đa 3 năm sau khi giải quyết'
            ]
          },
          {
            title: 'Xóa dữ liệu:',
            items: [
                'Xóa tự động khi hết thời gian lưu giữ',
                'Xóa hoàn toàn dữ liệu được lưu trữ cục bộ',
                'Khả năng yêu cầu xóa sớm (tuân theo các hạn chế pháp lý)',
                'Thông báo xóa khi khả thi về mặt kỹ thuật'
            ]
          }
        ]
      }
    },
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

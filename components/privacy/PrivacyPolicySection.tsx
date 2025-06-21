'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ChevronDown, 
  Info, 
  Database, 
  Share, 
  Cookie, 
  Shield, 
  Clock,
  FileText
} from 'lucide-react';

/**
 * Privacy Policy Section Component
 * Sección principal con el contenido completo de la política de privacidad
 */

interface PolicySection {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  lastUpdated: string;
  content: {
    subtitle?: string;
    paragraphs: string[];
    subsections?: {
      title: string;
      items: string[];
    }[];
  };
}

const policySections: PolicySection[] = [
  {
    id: 'introduction',
    title: 'Introducción y Alcance',
    icon: Info,
    lastUpdated: '15 de Diciembre, 2024',
    content: {
      paragraphs: [
        'En Hero Budget, nos comprometemos a proteger y respetar tu privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos, compartimos y protegemos tu información personal cuando utilizas nuestra aplicación móvil y servicios relacionados.',
        'Esta política se aplica a todos los usuarios de Hero Budget, independientemente de su ubicación geográfica, y cumple con las regulaciones internacionales de protección de datos, incluyendo el Reglamento General de Protección de Datos (GDPR) de la Unión Europea y la Ley de Privacidad del Consumidor de California (CCPA).',
        'Al utilizar Hero Budget, aceptas las prácticas descritas en esta política. Si no estás de acuerdo con algún aspecto de esta política, por favor no utilices nuestros servicios.'
      ]
    }
  },
  {
    id: 'data-collection',
    title: 'Información que Recopilamos',
    icon: Database,
    lastUpdated: '15 de Diciembre, 2024',
    content: {
      paragraphs: [
        'Recopilamos diferentes tipos de información para proporcionarte y mejorar nuestros servicios:',
      ],
      subsections: [
        {
          title: 'Información que proporcionas directamente:',
          items: [
            'Información de cuenta: nombre, dirección de correo electrónico, foto de perfil',
            'Datos financieros: facturas recurrentes, categorías, metas de ahorro',
            'Preferencias de usuario: configuraciones de la aplicación, notificaciones',
          ]
        },
        {
          title: 'Información recopilada automáticamente:',
          items: [
            'Información del dispositivo: modelo, sistema operativo, identificadores únicos',
            'Datos de rendimiento: logs de errores, tiempo de respuesta, crashes',
          ]
        }
      ]
    }
  },
  {
    id: 'data-usage',
    title: 'Cómo Utilizamos tu Información',
    icon: Share,
    lastUpdated: '15 de Diciembre, 2024',
    content: {
      paragraphs: [
        'Utilizamos únicamente la información que tú introduces manualmente en la aplicación para los siguientes propósitos:',
      ],
      subsections: [
        {
          title: 'Provisión de servicios:',
          items: [
            'Almacenar los datos de facturas recurrentes que tú introduces manualmente',
            'Generar recordatorios y análisis de tus facturas recurrentes',
            'Sincronizar tus datos entre dispositivos donde uses la aplicación',
            'Proporcionar soporte técnico y al cliente'
          ]
        },
        {
          title: 'Mejora y personalización:',
          items: [
            'Personalizar tu experiencia en la aplicación',
            'Desarrollar nuevas funciones y mejoras',
            'Realizar análisis de uso agregado y anónimo',
            'Optimizar el rendimiento de la aplicación'
          ]
        },
        {
          title: 'Comunicación y seguridad:',
          items: [
            'Enviar notificaciones importantes sobre tu cuenta',
            'Comunicar actualizaciones de la aplicación',
            'Detectar y prevenir actividades fraudulentas',
            'Cumplir con obligaciones legales y regulatorias'
          ]
        }
      ]
    }
  },
  {
    id: 'data-sharing',
    title: 'Compartir Información',
    icon: Share,
    lastUpdated: '15 de Diciembre, 2024',
    content: {
      paragraphs: [
        'No vendemos, alquilamos ni compartimos tu información personal con terceros para fines comerciales. Solo compartimos información en las siguientes circunstancias limitadas:',
      ],
      subsections: [
        {
          title: 'Proveedores de servicios:',
          items: [
            'Servicios de hosting en la nube con encriptación completa',
            'Servicios de análisis agregado y anónimo',
            'Servicios de soporte al cliente',
            'Servicios de seguridad y prevención de fraudes'
          ]
        },
        {
          title: 'Requisitos legales:',
          items: [
            'Cuando sea requerido por ley o proceso legal válido',
            'Para proteger los derechos y seguridad de Hero Budget y sus usuarios',
            'En caso de fusión, adquisición o venta de activos (con notificación previa)'
          ]
        }
      ]
    }
  },
  {
    id: 'cookies',
    title: 'Cookies y Tecnologías Similares',
    icon: Cookie,
    lastUpdated: '15 de Diciembre, 2024',
    content: {
      paragraphs: [
        'Como aplicación móvil de Flutter, no utilizamos cookies tradicionales. Sin embargo, utilizamos tecnologías de almacenamiento local para mejorar tu experiencia:',
      ],
      subsections: [
        {
          title: 'Tipos de cookies que utilizamos:',
          items: [
            'Almacenamiento local: necesario para el funcionamiento básico de la aplicación',
            'Datos de rendimiento: para analizar y mejorar el rendimiento de la aplicación',
            'Preferencias de usuario: para recordar tus configuraciones personales',
            'Tokens de seguridad: para proteger tu sesión y datos'
          ]
        },
        {
          title: 'Control de cookies:',
          items: [
            'Puedes gestionar el almacenamiento desde la configuración de la aplicación',
            'Puedes borrar todos los datos locales desde los ajustes del dispositivo',
            'Borrar el almacenamiento local afectará la funcionalidad de la aplicación',
            'Algunos datos de configuración son esenciales para el funcionamiento'
          ]
        }
      ]
    }
  },
  {
    id: 'security',
    title: 'Seguridad de Datos',
    icon: Shield,
    lastUpdated: '15 de Diciembre, 2024',
    content: {
      paragraphs: [
        'Implementamos medidas de seguridad apropiadas para proteger la información que almacenas localmente en tu dispositivo:',
      ],
      subsections: [
        {
          title: 'Medidas técnicas:',
          items: [
            'Almacenamiento seguro local en tu dispositivo',
            'Comunicación segura con nuestros servidores cuando sincronizas datos',
            'Autenticación segura para acceder a tu cuenta',
            'Protección básica contra accesos no autorizados'
          ]
        },
        {
          title: 'Medidas organizacionales:',
          items: [
            'Solo tú tienes acceso directo a los datos que introduces en la aplicación',
            'Nuestro equipo sigue buenas prácticas de desarrollo seguro',
            'Revisiones regulares de la seguridad de la aplicación',
            'Procedimientos para reportar y resolver problemas de seguridad'
          ]
        }
      ]
    }
  },
  {
    id: 'retention',
    title: 'Retención de Datos',
    icon: Clock,
    lastUpdated: '15 de Diciembre, 2024',
    content: {
      paragraphs: [
        'Conservamos tu información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política:',
      ],
      subsections: [
        {
          title: 'Períodos de retención:',
          items: [
            'Datos de cuenta: mientras mantengas una cuenta activa',
            'Datos de transacciones: hasta 7 años para cumplimiento regulatorio',
            'Datos de soporte: hasta 3 años después de la resolución',
          ]
        },
        {
          title: 'Eliminación de datos:',
          items: [
            'Eliminación automática cuando expiren los períodos de retención',
            'Eliminación completa de los datos almacenados localmente',
            'Posibilidad de solicitar eliminación anticipada (sujeto a restricciones legales)',
            'Notificación de eliminación cuando sea técnicamente factible'
          ]
        }
      ]
    }
  }
];

export default function PrivacyPolicySection() {
  const [expandedSection, setExpandedSection] = useState<string | null>('introduction');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section 
      id="policy"
      ref={ref} 
      className="section-padding relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at top left, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
          radial-gradient(ellipse at bottom right, rgba(16, 185, 129, 0.03) 0%, transparent 50%),
          linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)
        `
      }}
    >
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8"
            style={{
              background: `
                linear-gradient(135deg, 
                  #1e40af 0%, 
                  #3b82f6 30%, 
                  #10b981 70%, 
                  #059669 100%
                )`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            variants={itemVariants}
          >
            Política de Privacidad
          </motion.h2>
          
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Conoce en detalle cómo protegemos y manejamos tu información personal en Hero Budget
          </motion.p>
        </motion.div>

        {/* Navegación rápida */}
        <motion.div
          className="bg-white rounded-2xl p-6 mb-12 shadow-lg border border-gray-100"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Navegación Rápida
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {policySections.map((section) => (
              <button
                key={section.id}
                onClick={() => toggleSection(section.id)}
                className={`text-left p-3 rounded-lg transition-all duration-200 ${
                  expandedSection === section.id
                    ? 'bg-blue-50 text-blue-700 border-blue-200'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                } border`}
              >
                <div className="text-sm font-medium">
                  {section.title}
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Secciones de la política */}
        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {policySections.map((section) => {
            const IconComponent = section.icon;
            const isExpanded = expandedSection === section.id;
            
            return (
              <motion.div
                key={section.id}
                className="overflow-hidden rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
                }}
                variants={itemVariants}
                layout
              >
                <motion.button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                  whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {section.title}
                      </h3>
                      <div className="text-sm text-gray-500">
                        Última actualización: {section.lastUpdated}
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </motion.button>
                
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-gray-100">
                        {section.content.subtitle && (
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">
                            {section.content.subtitle}
                          </h4>
                        )}
                        
                        {section.content.paragraphs.map((paragraph, index) => (
                          <p key={index} className="text-gray-600 leading-relaxed mb-4">
                            {paragraph}
                          </p>
                        ))}
                        
                        {section.content.subsections?.map((subsection, index) => (
                          <div key={index} className="mb-6">
                            <h5 className="text-md font-semibold text-gray-800 mb-3">
                              {subsection.title}
                            </h5>
                            <ul className="space-y-2">
                              {subsection.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-3">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-gray-600 leading-relaxed">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA para descargar política */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div 
            className="inline-block p-8 rounded-3xl max-w-2xl mx-auto"
            style={{
              background: 'rgba(59, 130, 246, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(59, 130, 246, 0.1)'
            }}
          >
            <FileText className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Necesitas una copia de esta política?
            </h3>
            <p className="text-gray-600 mb-6">
              Descarga una versión PDF de nuestra política de privacidad para tus archivos
            </p>
            <motion.button
              className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Generar y descargar PDF
                const printContent = document.getElementById('policy');
                if (printContent) {
                  const originalContents = document.body.innerHTML;
                  document.body.innerHTML = printContent.innerHTML;
                  window.print();
                  document.body.innerHTML = originalContents;
                  window.location.reload();
                }
              }}
            >
              Descargar PDF
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
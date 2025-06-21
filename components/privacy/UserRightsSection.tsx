'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  User, 
  Download, 
  Trash2, 
  Edit, 
  Eye, 
  MessageCircle, 
  CheckCircle,
  ArrowRight,
  Shield,
  Lock
} from 'lucide-react';

/**
 * User Rights Section Component
 * Sección dedicada a los derechos del usuario bajo GDPR y otras regulaciones
 */

interface UserRight {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  actionLabel: string;
  actionType: 'primary' | 'secondary' | 'danger';
  available: boolean;
}

const userRights: UserRight[] = [
  {
    id: 'access',
    title: 'Derecho de Acceso',
    description: 'Solicita una copia de todos los datos personales que tenemos sobre ti, incluyendo cómo los utilizamos.',
    icon: Eye,
    actionLabel: 'Solicitar Datos',
    actionType: 'primary',
    available: true
  },
  {
    id: 'portability',
    title: 'Portabilidad de Datos',
    description: 'Descarga tus datos en un formato estructurado para transferirlos a otra aplicación.',
    icon: Download,
    actionLabel: 'Descargar Datos',
    actionType: 'primary',
    available: true
  },
  {
    id: 'rectification',
    title: 'Derecho de Rectificación',
    description: 'Corrige o actualiza cualquier información personal incorrecta o incompleta.',
    icon: Edit,
    actionLabel: 'Actualizar Datos',
    actionType: 'secondary',
    available: true
  },
  {
    id: 'erasure',
    title: 'Derecho al Olvido',
    description: 'Solicita la eliminación de tus datos personales cuando ya no sean necesarios.',
    icon: Trash2,
    actionLabel: 'Eliminar Datos',
    actionType: 'danger',
    available: true
  },
  {
    id: 'restriction',
    title: 'Restricción del Procesamiento',
    description: 'Limita cómo procesamos tus datos en ciertas circunstancias específicas.',
    icon: Lock,
    actionLabel: 'Restringir Procesamiento',
    actionType: 'secondary',
    available: true
  },
  {
    id: 'objection',
    title: 'Derecho de Oposición',
    description: 'Objeta al procesamiento de tus datos para marketing directo o intereses legítimos.',
    icon: Shield,
    actionLabel: 'Objetar Procesamiento',
    actionType: 'secondary',
    available: true
  }
];

const privacyControls = [
  {
    title: 'Control de Notificaciones',
    description: 'Administra qué notificaciones quieres recibir',
    status: 'Configurado',
    action: 'Modificar'
  },
  {
    title: 'Preferencias de Privacidad',
    description: 'Controla cómo utilizamos tus datos para mejorar el servicio',
    status: 'Activo',
    action: 'Gestionar'
  },
  {
    title: 'Historial de Consentimientos',
    description: 'Revisa y modifica tus consentimientos anteriores',
    status: 'Disponible',
    action: 'Ver Historial'
  },
  {
    title: 'Configuración de Cookies',
    description: 'Administra las cookies y tecnologías de seguimiento',
    status: 'Personalizado',
    action: 'Configurar'
  }
];

export default function UserRightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const getActionColor = (actionType: string) => {
    switch (actionType) {
      case 'primary': return 'bg-blue-500 hover:bg-blue-600 text-white';
      case 'secondary': return 'bg-gray-100 hover:bg-gray-200 text-gray-700';
      case 'danger': return 'bg-red-500 hover:bg-red-600 text-white';
      default: return 'bg-gray-100 hover:bg-gray-200 text-gray-700';
    }
  };

  return (
    <section 
      id="rights"
      ref={ref} 
      className="section-padding relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at top center, rgba(139, 92, 246, 0.03) 0%, transparent 50%),
          radial-gradient(ellipse at bottom center, rgba(16, 185, 129, 0.03) 0%, transparent 50%),
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
                  #8b5cf6 0%, 
                  #a855f7 30%, 
                  #10b981 70%, 
                  #059669 100%
                )`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            variants={itemVariants}
          >
            Tus Derechos de Privacidad
          </motion.h2>
          
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Tienes control total sobre tus datos personales. Conoce y ejerce tus derechos bajo GDPR y regulaciones internacionales.
          </motion.p>
        </motion.div>

        {/* Derechos del usuario */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {userRights.map((right) => {
            const IconComponent = right.icon;
            
            return (
              <motion.div
                key={right.id}
                className="group relative p-8 rounded-3xl cursor-pointer transition-all duration-500"
                style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
                }}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
                }}
              >
                {/* Estado de disponibilidad */}
                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${
                  right.available ? 'bg-green-500' : 'bg-gray-400'
                }`} />

                {/* Icono */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Contenido */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {right.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {right.description}
                </p>

                {/* Información sobre el derecho */}
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Para ejercer este derecho, contáctanos a través de nuestros canales de soporte
                  </p>
                </div>

                {/* Efecto de brillo al hover */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        rgba(139, 92, 246, 0.05) 0%, 
                        transparent 50%, 
                        rgba(16, 185, 129, 0.05) 100%
                      )
                    `,
                    filter: 'blur(1px)'
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Controles de privacidad */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Controles de Privacidad
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Gestiona tu privacidad con controles granulares y transparentes
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {privacyControls.map((control, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-white border border-gray-100"
                style={{
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
                }}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {control.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {control.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    Estas configuraciones se gestionan desde la aplicación móvil
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Sección de asistencia */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div 
            className="inline-block p-8 rounded-3xl max-w-3xl mx-auto"
            style={{
              background: 'rgba(139, 92, 246, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(139, 92, 246, 0.1)'
            }}
          >
            <User className="w-16 h-16 text-purple-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Necesitas Ayuda con tus Derechos?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nuestro equipo de privacidad está disponible para ayudarte a ejercer tus derechos 
              o responder cualquier pregunta sobre el manejo de tus datos personales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="bg-purple-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                Contactar Privacidad
              </motion.a>
              <motion.a
                href="/soporte"
                className="border-2 border-purple-500 text-purple-500 px-8 py-4 rounded-xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 inline-block text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Centro de Ayuda
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
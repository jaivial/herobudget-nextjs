'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Twitter,
  Instagram,
  Linkedin,
  Github
} from 'lucide-react';
import { useToast } from '@/hooks/useToast';
import ToastContainer from '@/components/Toast';

/**
 * Contact Section Component
 * Sección de contacto con múltiples canales de comunicación
 */

interface ContactMethod {
  id: string;
  name: string;
  description: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  href: string;
  availability: string;
}

const contactMethods: ContactMethod[] = [
  {
    id: 'email',
    name: 'Email de Soporte',
    description: 'Para consultas detalladas y seguimiento',
    value: 'soporte@herobudget.com',
    icon: Mail,
    color: 'from-green-500 to-green-600',
    href: 'mailto:soporte@herobudget.com',
    availability: 'Respuesta en 24h'
  }
];

const socialLinks = [
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/herobudget',
    color: 'hover:text-blue-500'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/herobudget',
    color: 'hover:text-pink-500'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/company/herobudget',
    color: 'hover:text-blue-600'
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/herobudget',
    color: 'hover:text-gray-800'
  }
];

const officeHours = [
  { day: 'Lunes - Viernes', hours: '9:00 AM - 1:30 PM' },
  { day: 'Sábados y Domingos', hours: 'Cerrado' }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Hook para toasts
  const { toasts, removeToast, success, error } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        success('¡Mensaje enviado!', result.message);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset form success state after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        error('Error al enviar', result.error || 'Ha ocurrido un error inesperado');
      }
    } catch (err) {
      error('Error de conexión', 'No se pudo conectar con el servidor. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
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

  return (
    <section 
      id="contact"
      ref={ref} 
      className="section-padding relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at top center, rgba(76, 175, 80, 0.05) 0%, transparent 50%),
          radial-gradient(ellipse at bottom center, rgba(233, 30, 99, 0.05) 0%, transparent 50%),
          linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)
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
                  #333333 0%, 
                  #4caf50 30%, 
                  #e91e63 70%, 
                  #333333 100%
                )`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            variants={itemVariants}
          >
            Contáctanos
          </motion.h2>
          
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Estamos aquí para ayudarte. Elige el canal de comunicación que prefieras
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Métodos de contacto */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Canales de Soporte
            </motion.h3>
            
            {contactMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <motion.a
                  key={method.id}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group block p-6 rounded-2xl bg-white hover:bg-gray-50 transition-all duration-300"
                  style={{
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(0, 0, 0, 0.05)'
                  }}
                  variants={itemVariants}
                  whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                        {method.name}
                      </h4>
                      
                      <p className="text-gray-600 mb-3">
                        {method.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-semibold text-gray-900">
                          {method.value}
                        </div>
                        
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {method.availability}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Información adicional */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Horarios de atención */}
            <motion.div
              className="p-6 rounded-2xl"
              style={{
                background: 'rgba(76, 175, 80, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(76, 175, 80, 0.1)'
              }}
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-green-600" />
                <h4 className="text-lg font-semibold text-gray-900">
                  Horarios de Atención
                </h4>
              </div>
              
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-600">{schedule.day}</span>
                    <span className="font-semibold text-gray-900">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Formulario de contacto rápido */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="p-8 rounded-3xl"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)'
            }}
            variants={itemVariants}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Envíanos un Mensaje
              </h3>
              <p className="text-gray-600">
                ¿Prefieres escribirnos? Completa este formulario y te responderemos pronto
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  ¡Mensaje Enviado!
                </h4>
                <p className="text-gray-600">
                  Gracias por contactarnos. Te responderemos pronto.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-primary-500 hover:bg-primary-600'
                  }`}
                  whileHover={isSubmitting ? {} : { scale: 1.02 }}
                  whileTap={isSubmitting ? {} : { scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensaje
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Contenedor de toasts */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </section>
  );
}
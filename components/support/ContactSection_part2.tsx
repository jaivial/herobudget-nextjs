'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Send } from 'lucide-react';
import ToastContainer from '@/components/Toast';
import { 
  useContactForm,
  containerVariants,
  itemVariants,
  contactMethods,
  officeHours
} from './ContactSection_part1';

/**
 * Contact Section Component - Part 2
 * Componente principal que renderiza la sección de contacto completa
 * Integra formulario, métodos de contacto y horarios
 */

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Usar hook personalizado para manejo del formulario
  const {
    formData,
    setFormData,
    isSubmitting,
    isSubmitted,
    toasts,
    removeToast,
    handleSubmit
  } = useContactForm();

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

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-12 mb-16">
          {/* Métodos de contacto */}
          <motion.div
            className="lg:col-span-2 space-y-6 w-full overflow-hidden"
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
                  className="group block p-4 sm:p-6 rounded-2xl bg-white hover:bg-gray-50 transition-all duration-300 w-full max-w-full"
                  style={{
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(0, 0, 0, 0.05)'
                  }}
                  variants={itemVariants}
                  whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div 
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                        {method.name}
                      </h4>
                      
                      <p className="text-sm sm:text-base text-gray-600 mb-3">
                        {method.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                          {method.value}
                        </div>
                        
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 flex-shrink-0">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
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
            className="space-y-6 sm:space-y-8 w-full"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Horarios de atención */}
            <motion.div
              className="p-4 sm:p-6 rounded-2xl w-full max-w-full text-center"
              style={{
                background: 'rgba(76, 175, 80, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(76, 175, 80, 0.1)'
              }}
              variants={itemVariants}
            >
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                  Horarios de Atención
                </h4>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-center gap-1 sm:gap-4 text-xs sm:text-sm">
                    <span className="text-gray-600 font-medium">{schedule.day}</span>
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
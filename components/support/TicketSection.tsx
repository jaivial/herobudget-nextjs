'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bug, Lightbulb, HelpCircle, Settings, Upload, Send, CheckCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useToast } from '@/hooks/useToast';
import ToastContainer from '@/components/Toast';
import { getTicketSectionTranslations, type TicketSectionTranslations } from '@/lib/i18n/translations/translation-loader';

/**
 * Ticket Section Component
 * Sección para crear tickets de soporte con formulario interactivo
 * Soporte multiidioma con traducciones dinámicas
 */

interface TicketSectionProps {
  locale?: string;
}

interface TicketFormData {
  name: string;
  email: string;
  category: string;
  priority: string;
  subject: string;
  description: string;
  device: string;
  version: string;
  attachments: File[];
}

const getCategoryIcon = (id: string) => {
  const icons: Record<string, any> = {
    bug: Bug,
    feature: Lightbulb,
    help: HelpCircle,
    account: Settings
  };
  return icons[id] || HelpCircle;
};

const getCategoryColor = (id: string) => {
  const colors: Record<string, string> = {
    bug: 'from-red-500 to-red-600',
    feature: 'from-yellow-500 to-orange-500',
    help: 'from-blue-500 to-blue-600',
    account: 'from-purple-500 to-purple-600'
  };
  return colors[id] || 'from-gray-500 to-gray-600';
};

const getPriorityColor = (id: string) => {
  const colors: Record<string, string> = {
    Baja: 'text-green-600',
    Media: 'text-blue-600',
    Alta: 'text-orange-600',
    Urgente: 'text-red-600'
  };
  return colors[id] || 'text-gray-600';
};

export default function TicketSection({ locale }: TicketSectionProps) {
  const pathname = usePathname();
  const [translations, setTranslations] = useState<TicketSectionTranslations | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState<TicketFormData>({
    name: '',
    email: '',
    category: '',
    priority: 'Media',
    subject: '',
    description: '',
    device: '',
    version: '',
    attachments: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [steps, setSteps] = useState('');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Hook para toasts
  const { toasts, removeToast, success, error } = useToast();

  // Load translations based on current locale
  useEffect(() => {
    const pathParts = pathname.split('/').filter(Boolean);
    let detectedLocale = locale || 'en_GB'; // Default locale

    // Detect locale from URL if not provided as prop
    if (!locale && pathParts.length >= 1 && pathParts[0].includes('_')) {
      detectedLocale = pathParts[0];
    }

    console.log('[TicketSection] Detected locale from pathname:', pathname, '→', detectedLocale);

    // Load translations for the detected locale
    try {
      const t = getTicketSectionTranslations(detectedLocale);
      console.log('[TicketSection] Loaded translations:', t);
      setTranslations(t);
      setIsLoading(false);
    } catch (err) {
      console.error('[TicketSection] Error loading translations:', err);
      // Fallback to English if there's an error
      setTranslations(getTicketSectionTranslations('en_GB'));
      setIsLoading(false);
    }
  }, [pathname, locale]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!translations) {
      return;
    }
    setIsSubmitting(true);

    // Preparar datos para envío
    const ticketData = {
      name: formData.name,
      email: formData.email,
      priority: formData.priority,
      category: formData.category,
      subject: formData.subject,
      description: formData.description,
      device: formData.device || undefined,
      version: formData.version || undefined,
      steps: steps || undefined
    };

    try {
      const response = await fetch('/api/ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ticketData),
      });

      const result = await response.json();

      if (result.success) {
        success(translations.toast.successTitle, result.message);
        setIsSubmitted(true);

        // Hacer scroll al inicio de la sección ticket tras un pequeño delay para la animación
        setTimeout(() => {
          const ticketSection = document.getElementById('ticket');
          if (ticketSection) {
            ticketSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
            });
          }
        }, 300);

        // Reset form
        setFormData({
          name: '',
          email: '',
          category: '',
          priority: 'Media',
          subject: '',
          description: '',
          device: '',
          version: '',
          attachments: []
        });
        setSteps('');
      } else {
        error(translations.toast.errorTitle, result.error || translations.toast.errorConnection);
      }
    } catch (err) {
      error(translations.toast.errorTitle, translations.toast.errorConnection);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };

  const removeAttachment = (index: number) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
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

  // Show loading skeleton while translations load
  if (isLoading || !translations) {
    return (
      <section
        id="ticket"
        ref={ref}
        className="section-padding relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at top left, rgba(233, 30, 99, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, rgba(76, 175, 80, 0.03) 0%, transparent 50%),
            linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)
          `,
        }}
      >
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="h-16 w-3/4 mx-auto bg-gray-200 rounded-lg animate-pulse mb-8"></div>
            <div className="h-8 w-1/2 mx-auto bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-32 bg-gray-200 rounded-2xl animate-pulse"></div>
              ))}
            </div>
            <div className="h-96 bg-gray-200 rounded-3xl animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  if (isSubmitted) {
    return (
      <section 
        id="ticket"
        ref={ref} 
        className="section-padding relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at center, rgba(76, 175, 80, 0.05) 0%, transparent 50%),
            linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)
          `
        }}
      >
        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div 
              className="p-12 rounded-3xl"
              style={{
                background: 'rgba(76, 175, 80, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(76, 175, 80, 0.1)'
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              </motion.div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {translations.success.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {translations.success.message}
              </p>

              <div className="bg-white rounded-2xl p-6 text-left">
                <div className="text-sm text-gray-500 mb-2">{translations.success.ticketNumber}</div>
                <div className="text-lg font-mono font-semibold text-primary-600">
                  #HB-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </div>
              </div>

              <motion.button
                className="mt-6 bg-primary-500 text-white px-8 py-3 rounded-xl font-semibold"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    category: '',
                    priority: 'Media',
                    subject: '',
                    description: '',
                    device: '',
                    version: '',
                    attachments: []
                  });
                  setSteps('');
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {translations.success.createAnother}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="ticket"
      ref={ref} 
      className="section-padding relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at top left, rgba(233, 30, 99, 0.03) 0%, transparent 50%),
          radial-gradient(ellipse at bottom right, rgba(76, 175, 80, 0.03) 0%, transparent 50%),
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
                  #333333 0%,
                  #e91e63 30%,
                  #4caf50 70%,
                  #333333 100%
                )`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            variants={itemVariants}
          >
            {translations.title}
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {translations.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Categorías de ticket */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              {translations.categoryTitle}
            </motion.h3>

            <div className="space-y-4">
              {translations.categories.map((category) => {
                const IconComponent = getCategoryIcon(category.id);
                const colorClass = getCategoryColor(category.id);
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setFormData(prev => ({ ...prev, category: category.id }))}
                    className={`w-full p-6 rounded-2xl text-left transition-all duration-300 ${
                      formData.category === category.id
                        ? 'ring-2 ring-primary-500 bg-primary-50'
                        : 'bg-white hover:bg-gray-50'
                    }`}
                    style={{
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                      border: formData.category === category.id ? 'none' : '1px solid rgba(0, 0, 0, 0.1)'
                    }}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${colorClass} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {category.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="p-8 rounded-3xl"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)'
              }}
              variants={itemVariants}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Información personal */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {translations.form.nameLabel} {translations.form.required}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder={translations.form.namePlaceholder}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {translations.form.emailLabel} {translations.form.required}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder={translations.form.emailPlaceholder}
                    />
                  </div>
                </div>

                {/* Prioridad */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {translations.form.priorityLabel}
                  </label>
                  <div className="flex gap-2">
                    {translations.priorities.map((priority) => {
                      const colorClass = getPriorityColor(priority.id);
                      return (
                        <button
                          key={priority.id}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, priority: priority.id }))}
                          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                            formData.priority === priority.id
                              ? 'bg-primary-500 text-white'
                              : `bg-gray-100 ${colorClass} hover:bg-gray-200`
                          }`}
                        >
                          {priority.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Asunto */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {translations.form.subjectLabel} {translations.form.required}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder={translations.form.subjectPlaceholder}
                  />
                </div>

                {/* Descripción */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {translations.form.descriptionLabel} {translations.form.required}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder={translations.form.descriptionPlaceholder}
                  />
                </div>

                {/* Pasos para reproducir */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {translations.form.stepsLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={steps}
                    onChange={(e) => setSteps(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder={translations.form.stepsPlaceholder}
                  />
                </div>

                {/* Información del dispositivo */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {translations.form.deviceLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.device}
                      onChange={(e) => setFormData(prev => ({ ...prev, device: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder={translations.form.devicePlaceholder}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {translations.form.versionLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.version}
                      onChange={(e) => setFormData(prev => ({ ...prev, version: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder={translations.form.versionPlaceholder}
                    />
                  </div>
                </div>

                {/* Archivos adjuntos */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {translations.form.attachmentsLabel}
                  </label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-600 mb-2">
                      {translations.form.attachmentsDescription}
                    </div>
                    <input
                      type="file"
                      multiple
                      accept="image/*,.pdf,.txt"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer hover:bg-gray-200 transition-colors"
                    >
                      {translations.form.attachmentsButton}
                    </label>
                  </div>

                  {formData.attachments.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {formData.attachments.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                          <span className="text-sm text-gray-700">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeAttachment(index)}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            {translations.form.attachmentsRemove}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Botón de envío */}
                <motion.button
                  type="submit"
                  disabled={!formData.category || !formData.name || !formData.email || !formData.subject || !formData.description || isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                    !formData.category || !formData.name || !formData.email || !formData.subject || !formData.description || isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-primary-500 hover:bg-primary-600'
                  }`}
                  whileHover={!formData.category || !formData.name || !formData.email || !formData.subject || !formData.description || isSubmitting ? {} : { scale: 1.02 }}
                  whileTap={!formData.category || !formData.name || !formData.email || !formData.subject || !formData.description || isSubmitting ? {} : { scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {translations.form.submitting}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {translations.form.submitButton}
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Contenedor de toasts */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </section>
  );
}
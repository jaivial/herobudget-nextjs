"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Shield, FileText, CheckCircle, AlertCircle, Globe } from "lucide-react";

/**
 * Contact Privacy Section Component
 * Sección de contacto específica para temas de privacidad y protección de datos
 */

interface ContactMethod {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  contact: string;
  availability: string;
  responseTime: string;
  priority: "high" | "medium" | "low";
}

const contactMethods: ContactMethod[] = [
  {
    id: "privacy-email",
    title: "Oficial de Protección de Datos",
    description: "Para consultas específicas sobre privacidad y protección de datos",
    icon: Shield,
    contact: "Disponible desde la app",
    availability: "24/7",
    responseTime: "24 horas",
    priority: "high",
  },
  {
    id: "legal-email",
    title: "Departamento Legal",
    description: "Para solicitudes formales relacionadas con derechos de datos",
    icon: FileText,
    contact: "Disponible desde la app",
    availability: "Lunes a Viernes 9AM-1:30PM",
    responseTime: "48 horas",
    priority: "high",
  },
  {
    id: "general-support",
    title: "Soporte General",
    description: "Para consultas generales sobre privacidad y configuración",
    icon: MessageSquare,
    contact: "Disponible desde la app",
    availability: "Lunes a Viernes 9AM-1:30PM",
    responseTime: "12 horas",
    priority: "medium",
  },
];

const privacyTopics = ["Solicitud de datos personales", "Eliminación de cuenta", "Corrección de información", "Restricción de procesamiento", "Portabilidad de datos", "Objeción al procesamiento", "Configuración de privacidad", "Reporte de vulnerabilidad", "Consulta sobre cookies", "Otro tema de privacidad"];

export default function ContactPrivacySection() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
    priority: "medium",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviar datos a la API
      const response = await fetch('/api/send-privacy-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el email');
      }

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error('Error al enviar consulta de privacidad:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }

    // Reset form after success
    setTimeout(() => {
      if (submitStatus === "success") {
        setFormData({ name: "", email: "", topic: "", message: "", priority: "medium" });
      }
      if (submitStatus !== "idle") {
        setSubmitStatus("idle");
      }
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-red-200 bg-red-50";
      case "medium":
        return "border-yellow-200 bg-yellow-50";
      case "low":
        return "border-green-200 bg-green-50";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at top right, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
          radial-gradient(ellipse at bottom left, rgba(139, 92, 246, 0.03) 0%, transparent 50%),
          linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)
        `,
      }}
    >
      <div className="container-custom relative z-10">
        <motion.div className="text-center mb-16" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8"
            style={{
              background: `
                linear-gradient(135deg, 
                  #3b82f6 0%, 
                  #8b5cf6 30%, 
                  #10b981 70%, 
                  #059669 100%
                )`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            variants={itemVariants}
          >
            Contacto de Privacidad
          </motion.h2>

          <motion.p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed" variants={itemVariants}>
            Estamos aquí para ayudarte con cualquier consulta sobre privacidad, protección de datos o ejercicio de tus derechos
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Métodos de contacto */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.h3 className="text-3xl font-bold text-gray-900 mb-8" variants={itemVariants}>
              Canales de Contacto
            </motion.h3>

            <div className="space-y-6">
              {contactMethods.map((method) => {
                const IconComponent = method.icon;

                return (
                  <motion.div key={method.id} className={`p-6 rounded-2xl border-2 transition-all duration-300 ${getPriorityColor(method.priority)}`} variants={itemVariants} whileHover={{ scale: 1.02 }}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>

                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{method.description}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-green-500" />
                            <span className="text-gray-600">{method.availability}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-orange-500" />
                            <span className="text-gray-600">{method.responseTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.h3 className="text-3xl font-bold text-gray-900 mb-8" variants={itemVariants}>
              Formulario de Privacidad
            </motion.h3>

            <motion.form onSubmit={handleSubmit} className="space-y-6" variants={itemVariants}>
              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre Completo
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200" placeholder="Tu nombre completo" required />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200" placeholder="tu@email.com" required />
              </div>

              {/* Tema */}
              <div>
                <label htmlFor="topic" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tema de Privacidad
                </label>
                <select id="topic" name="topic" value={formData.topic} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200" required>
                  <option value="">Selecciona un tema</option>
                  {privacyTopics.map((topic, index) => (
                    <option key={index} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>

              {/* Prioridad */}
              <div>
                <label htmlFor="priority" className="block text-sm font-semibold text-gray-700 mb-2">
                  Prioridad
                </label>
                <select id="priority" name="priority" value={formData.priority} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200">
                  <option value="low">Baja - Consulta general</option>
                  <option value="medium">Media - Necesito ayuda</option>
                  <option value="high">Alta - Asunto urgente</option>
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={6} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-none" placeholder="Describe tu consulta o solicitud de privacidad..." required />
              </div>

              {/* Botón de envío */}
              <motion.button
                type="submit"
                className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : submitStatus === "success" ? "bg-green-500" : submitStatus === "error" ? "bg-red-500" : "bg-blue-500 hover:bg-blue-600"}`}
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Mensaje Enviado
                  </>
                ) : submitStatus === "error" ? (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    Error al Enviar
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Consulta
                  </>
                )}
              </motion.button>

              {/* Mensaje de confirmación */}
              {submitStatus === "success" && (
                <motion.div className="p-4 rounded-xl bg-green-50 border border-green-200" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Tu consulta ha sido enviada exitosamente. Te responderemos pronto.</span>
                  </div>
                </motion.div>
              )}

              {/* Mensaje de error */}
              {submitStatus === "error" && (
                <motion.div className="p-4 rounded-xl bg-red-50 border border-red-200" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="flex items-center gap-2 text-red-700">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">Hubo un error al enviar tu consulta. Por favor, inténtalo de nuevo.</span>
                  </div>
                </motion.div>
              )}
            </motion.form>

            {/* Nota de privacidad */}
            <motion.div className="mt-6 p-4 rounded-xl bg-gray-50 border border-gray-200" variants={itemVariants}>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-600">
                  <p className="font-medium mb-1">Protección de tu consulta</p>
                  <p>Todas las comunicaciones son tratadas de manera confidencial y están protegidas bajo nuestras políticas de privacidad. Solo personal autorizado accederá a tu información.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

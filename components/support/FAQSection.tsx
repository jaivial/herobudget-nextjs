"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

/**
 * FAQ Section Component
 * Sección de preguntas frecuentes con acordeón animado
 */

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  tags: string[];
}

const faqData: FAQItem[] = [
  {
    id: "getting-started-1",
    category: "Primeros Pasos",
    question: "¿Cómo creo mi primera cuenta en Hero Budget?",
    answer: 'Crear tu cuenta es muy fácil. Descarga la app desde App Store o Google Play, abre la aplicación y selecciona "Crear Cuenta". Solo necesitas tu email y una contraseña segura. También puedes registrarte con tu cuenta de Google o Apple para mayor comodidad.',
    tags: ["registro", "cuenta", "primeros pasos"],
  },
  {
    id: "getting-started-2",
    category: "Primeros Pasos",
    question: "¿Cómo añado mi primera transacción?",
    answer: 'Una vez que tengas tu cuenta configurada, toca el botón "+" en la pantalla principal. Selecciona si es un gasto o ingreso, elige la categoría, ingresa el monto y una descripción opcional. ¡Es así de simple! También puedes tomar una foto del recibo para recordar detalles.',
    tags: ["transacciones", "gastos", "ingresos"],
  },
  {
    id: "features-1",
    category: "Funciones",
    question: "¿Puedo configurar facturas recurrentes?",
    answer: 'Sí, Hero Budget te permite configurar facturas recurrentes para gastos que se repiten cada mes como alquiler, servicios o suscripciones. Ve a la sección "Facturas Recurrentes", toca "Crear Nueva", ingresa el monto, descripción y frecuencia. La app te recordará automáticamente cuando sea tiempo de registrar el pago.',
    tags: ["facturas", "recurrentes", "recordatorios"],
  },
  {
    id: "features-2",
    category: "Funciones",
    question: "¿Cómo funcionan las metas de ahorro?",
    answer: "Las metas de ahorro te permiten establecer una cantidad objetivo que quieres ahorrar cada mes. Simplemente define el monto mensual que deseas ahorrar y Hero Budget llevará el seguimiento de tus progresos. Es una forma simple y efectiva de crear el hábito del ahorro.",
    tags: ["metas", "ahorro", "mensual"],
  },
  {
    id: "features-3",
    category: "Funciones",
    question: "¿Puedo sincronizar mis datos en múltiples dispositivos?",
    answer: "Sí, todos tus datos se sincronizan automáticamente en la nube. Puedes usar Hero Budget en tu teléfono, tablet o computadora, y todos los cambios se reflejarán en tiempo real en todos tus dispositivos.",
    tags: ["sincronización", "nube", "dispositivos"],
  },
  {
    id: "security-1",
    category: "Seguridad",
    question: "¿Mis datos financieros están seguros?",
    answer: "La seguridad es nuestra prioridad. Todos tus datos están almacenados de forma segura en la nube con medidas de protección estándar de la industria. Implementamos buenas prácticas de seguridad y nunca almacenamos información sensible como números de tarjetas completos.",
    tags: ["seguridad", "nube", "privacidad"],
  },
  {
    id: "security-2",
    category: "Seguridad",
    question: "¿Puedo conectar mis cuentas bancarias?",
    answer: "Hero Budget se enfoca en el registro manual para darte control total sobre tus datos. No nos conectamos directamente a bancos, lo que mantiene tu información más segura y te da mayor privacidad.",
    tags: ["bancos", "conexión", "manual"],
  },
  {
    id: "billing-1",
    category: "Facturación",
    question: "¿Hero Budget es completamente gratis?",
    answer: "Sí, Hero Budget es completamente gratis. Todas las funciones de la aplicación están disponibles sin costo alguno. No hay suscripciones premium ni compras dentro de la app. Creemos que gestionar tus finanzas personales debe ser accesible para todos.",
    tags: ["precio", "gratis", "sin costo"],
  },
  {
    id: "billing-2",
    category: "Facturación",
    question: "¿Habrá funciones de pago en el futuro?",
    answer: "Por ahora, Hero Budget se mantiene completamente gratuito. Nos enfocamos en ofrecer una experiencia completa sin costos. Si en el futuro consideramos funciones adicionales, siempre mantendremos un conjunto robusto de herramientas gratuitas para todos nuestros usuarios.",
    tags: ["futuro", "gratis", "sin costo"],
  },
  {
    id: "troubleshooting-1",
    category: "Problemas Técnicos",
    question: "La app se cierra inesperadamente, ¿qué puedo hacer?",
    answer: "Si la app se cierra, primero intenta reiniciarla. Si el problema persiste, asegúrate de tener la última versión instalada. También puedes limpiar la caché de la app o reiniciar tu dispositivo. Si nada funciona, contáctanos con el modelo de tu dispositivo.",
    tags: ["errores", "crashes", "problemas"],
  },
];

const categories = ["Todos", "Primeros Pasos", "Funciones", "Seguridad", "Facturación", "Problemas Técnicos"];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const filteredFAQs = faqData.filter((item) => {
    const matchesCategory = activeCategory === "Todos" || item.category === activeCategory;
    const matchesSearch = searchTerm === "" || item.question.toLowerCase().includes(searchTerm.toLowerCase()) || item.answer.toLowerCase().includes(searchTerm.toLowerCase()) || item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="faq"
      ref={ref}
      className="section-padding relative overflow-hidden mt-10 pt-52"
      style={{
        background: `
          radial-gradient(ellipse at top left, rgba(233, 30, 99, 0.03) 0%, transparent 50%),
          radial-gradient(ellipse at bottom right, rgba(76, 175, 80, 0.03) 0%, transparent 50%),
          linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)
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
                  #333333 0%, 
                  #e91e63 30%, 
                  #4caf50 70%, 
                  #333333 100%
                )`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            variants={itemVariants}
          >
            Preguntas Frecuentes
          </motion.h2>

          <motion.p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8" variants={itemVariants}>
            Encuentra respuestas rápidas a las preguntas más comunes sobre Hero Budget
          </motion.p>

          {/* Barra de búsqueda para FAQ */}
          <motion.div className="max-w-md mx-auto mb-8" variants={itemVariants}>
            <div
              className="relative p-1 rounded-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              <input type="text" placeholder="Buscar en FAQ..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full px-4 py-3 bg-transparent border-none outline-none placeholder-gray-500" />
            </div>
          </motion.div>
        </motion.div>

        {/* Filtros de categoría */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category ? "bg-primary-500 text-white shadow-primary" : "bg-white text-gray-600 hover:bg-gray-50"}`}
              style={{
                border: activeCategory === category ? "none" : "1px solid rgba(0, 0, 0, 0.1)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Lista de FAQ */}
        <motion.div className="max-w-4xl mx-auto space-y-4" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <AnimatePresence mode="wait">
            {filteredFAQs.map((item) => (
              <motion.div
                key={item.id}
                className="overflow-hidden rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                }}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                layout
              >
                <motion.button onClick={() => toggleItem(item.id)} className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200" whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}>
                  <div className="flex-1">
                    <div className="text-sm text-primary-500 font-semibold mb-2">{item.category}</div>
                    <h3 className="text-lg font-semibold text-gray-900 leading-tight">{item.question}</h3>
                  </div>

                  <motion.div animate={{ rotate: openItems.has(item.id) ? 180 : 0 }} transition={{ duration: 0.3 }} className="ml-4 flex-shrink-0">
                    {openItems.has(item.id) ? <Minus className="w-6 h-6 text-primary-500" /> : <Plus className="w-6 h-6 text-gray-400" />}
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openItems.has(item.id) && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-6 pb-6">
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed mb-4">{item.answer}</p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, index) => (
                              <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredFAQs.length === 0 && (
            <motion.div className="text-center py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No encontramos resultados</h3>
              <p className="text-gray-600">Intenta con otros términos de búsqueda o selecciona una categoría diferente</p>
            </motion.div>
          )}
        </motion.div>

        {/* CTA para más ayuda */}
        <motion.div className="text-center mt-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8, delay: 0.5 }}>
          <div
            className="inline-block p-8 rounded-3xl max-w-2xl mx-auto"
            style={{
              background: "rgba(233, 30, 99, 0.05)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(233, 30, 99, 0.1)",
            }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿No encontraste lo que buscabas?</h3>
            <p className="text-gray-600 mb-6">Nuestro equipo de soporte está aquí para ayudarte con cualquier pregunta específica</p>
            <motion.a href="#contact" className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Contactar Soporte
              <ChevronDown className="w-4 h-4 rotate-180" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

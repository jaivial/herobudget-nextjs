"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { usePathname } from "next/navigation";
import { getFAQSectionTranslations, type FAQSectionTranslations } from "@/lib/i18n/translations/translation-loader";

/**
 * FAQ Section Component
 * Sección de preguntas frecuentes con acordeón animado
 * Soporte multiidioma con traducciones dinámicas
 */

interface FAQSectionProps {
  locale?: string;
}

export default function FAQSection({ locale }: FAQSectionProps) {
  const pathname = usePathname();
  const [translations, setTranslations] = useState<FAQSectionTranslations | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Load translations based on current locale
  useEffect(() => {
    const pathParts = pathname.split('/').filter(Boolean);
    let detectedLocale = locale || 'en_GB'; // Default locale

    // Detect locale from URL if not provided as prop
    if (!locale && pathParts.length >= 1 && pathParts[0].includes('_')) {
      detectedLocale = pathParts[0];
    }

    console.log('[FAQSection] Detected locale from pathname:', pathname, '→', detectedLocale);

    // Load translations for the detected locale
    try {
      const t = getFAQSectionTranslations(detectedLocale);
      console.log('[FAQSection] Loaded translations:', t);
      setTranslations(t);
      setIsLoading(false);
    } catch (error) {
      console.error('[FAQSection] Error loading translations:', error);
      // Fallback to English if there's an error
      setTranslations(getFAQSectionTranslations('en_GB'));
      setIsLoading(false);
    }
  }, [pathname, locale]);

  // Show loading skeleton while translations load
  if (isLoading || !translations) {
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
          <div className="text-center mb-16">
            <div className="h-16 w-3/4 mx-auto bg-gray-200 rounded-lg animate-pulse mb-8"></div>
            <div className="h-8 w-1/2 mx-auto bg-gray-200 rounded-lg animate-pulse mb-8"></div>
            <div className="h-12 w-96 mx-auto bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-12 w-32 bg-gray-200 rounded-full animate-pulse"></div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-gray-200 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const categories = [
    { key: "all", label: translations.categories.all },
    { key: "gettingStarted", label: translations.categories.gettingStarted },
    { key: "features", label: translations.categories.features },
    { key: "security", label: translations.categories.security },
    { key: "billing", label: translations.categories.billing },
    { key: "troubleshooting", label: translations.categories.troubleshooting },
  ];

  const filteredFAQs = translations.faqs.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = searchTerm === "" || item.question.toLowerCase().includes(searchTerm.toLowerCase()) || item.answer.toLowerCase().includes(searchTerm.toLowerCase());

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

  // Get category label for display
  const getCategoryLabel = (categoryKey: string): string => {
    const category = categories.find((c) => c.key === categoryKey);
    return category ? category.label : categoryKey;
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
            {translations.title}
          </motion.h2>

          <motion.p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8" variants={itemVariants}>
            {translations.subtitle}
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
              <input type="text" placeholder={translations.searchPlaceholder} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full px-4 py-3 bg-transparent border-none outline-none placeholder-gray-500" />
            </div>
          </motion.div>
        </motion.div>

        {/* Filtros de categoría */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category.key ? "bg-primary-500 text-white shadow-primary" : "bg-white text-gray-600 hover:bg-gray-50"}`}
              style={{
                border: activeCategory === category.key ? "none" : "1px solid rgba(0, 0, 0, 0.1)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {category.label}
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
                    <div className="text-sm text-primary-500 font-semibold mb-2">{getCategoryLabel(item.category)}</div>
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
                          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{translations.noResults.title}</h3>
              <p className="text-gray-600">{translations.noResults.subtitle}</p>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{translations.helpCta.title}</h3>
            <p className="text-gray-600 mb-6">{translations.helpCta.subtitle}</p>
            <motion.a href="#contact" className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {translations.helpCta.button}
              <ChevronDown className="w-4 h-4 rotate-180" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

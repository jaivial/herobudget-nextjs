'use client';

import { motion } from 'framer-motion';

/**
 * CTA Section Component
 * Sección de llamada a la acción con animaciones
 */

export default function CTASection() {
  const handleScrollToDownloads = () => {
    const element = document.querySelector('#descargas');
    if (element) {
      const headerHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section-padding bg-cta-gradient text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container-custom relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          ¿Listo para ser el héroe de tus finanzas?
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Únete a miles de usuarios que ya transformaron su relación con el dinero.
        </motion.p>
        <motion.button
          className="btn-base bg-white text-primary-500 hover:bg-gray-100 hover:scale-105 font-bold text-lg px-10 py-5"
          onClick={handleScrollToDownloads}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Descargar Hero Budget
        </motion.button>
      </div>
    </section>
  );
}
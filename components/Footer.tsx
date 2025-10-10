'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { containerVariants } from './FooterAnimations';
import FooterContent from './FooterContent';

/**
 * Footer Component
 * Footer principal con información de contacto, enlaces y redes sociales
 */

interface FooterProps {
  locale?: string;
}

export default function Footer({ locale }: FooterProps) {
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState<string>(locale || 'en_GB');

  // Load locale based on current pathname if not provided as prop
  useEffect(() => {
    if (!locale) {
      const pathParts = pathname.split('/').filter(Boolean);
      let detectedLocale = 'en_GB'; // Default locale

      // Detect locale from URL
      if (pathParts.length >= 1 && pathParts[0].includes('_')) {
        detectedLocale = pathParts[0];
      }

      console.log('[Footer] Detected locale from pathname:', pathname, '→', detectedLocale);
      setCurrentLocale(detectedLocale);
    } else {
      setCurrentLocale(locale);
    }
  }, [pathname, locale]);

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-secondary-200/10 to-transparent rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="pt-16 pb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Contenido principal del footer */}
          <FooterContent locale={currentLocale} />

        </motion.div>
      </div>
    </footer>
  );
}
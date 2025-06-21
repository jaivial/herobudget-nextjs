'use client';

import { motion } from 'framer-motion';
import { containerVariants } from './FooterAnimations';
import FooterContent from './FooterContent';

/**
 * Footer Component
 * Footer principal con información de contacto, enlaces y redes sociales
 */

export default function Footer() {

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
          <FooterContent />

        </motion.div>
      </div>
    </footer>
  );
}
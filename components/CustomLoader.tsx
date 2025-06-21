'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

/**
 * Custom Loader Component
 * Loader personalizado que aparece mientras se carga el contenido completo
 * Incluye animaciones fluidas y logo de Hero Budget
 */

interface CustomLoaderProps {
  /** Estado de carga - si está cargando o no */
  isLoading: boolean;
  /** Texto opcional personalizado para mostrar durante la carga */
  loadingText?: string;
  /** Duración mínima del loader en milisegundos */
  minimumDuration?: number;
}

export default function CustomLoader({ 
  isLoading, 
  loadingText = "Cargando Hero Budget...",
  minimumDuration = 1000 
}: CustomLoaderProps) {
  // Estado para controlar la visibilidad del loader con duración mínima
  const [showLoader, setShowLoader] = useState(isLoading);
  // Estado para el progreso simulado de carga
  const [progress, setProgress] = useState(0);

  // Efecto para simular progreso de carga y manejar duración mínima
  useEffect(() => {
    if (isLoading) {
      setShowLoader(true);
      setProgress(0);
      
      // Simular progreso de carga
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return prev; // No completar hasta que termine la carga real
          return prev + Math.random() * 15;
        });
      }, 100);

      return () => clearInterval(progressInterval);
    } else {
      // Completar progreso cuando termine la carga
      setProgress(100);
      
      // Ocultar loader después de la duración mínima
      const hideTimer = setTimeout(() => {
        setShowLoader(false);
      }, minimumDuration);

      return () => clearTimeout(hideTimer);
    }
  }, [isLoading, minimumDuration]);

  // Variantes de animación para el contenedor principal
  const containerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8 
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Variantes para elementos hijo
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  if (!showLoader) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: `
          radial-gradient(ellipse at center, rgba(233, 30, 99, 0.1) 0%, transparent 70%),
          linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)
        `
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-20"
          style={{
            background: `
              conic-gradient(from 45deg, 
                rgba(233, 30, 99, 0.1) 0deg,
                rgba(76, 175, 80, 0.08) 120deg,
                rgba(244, 143, 177, 0.12) 240deg,
                rgba(233, 30, 99, 0.1) 360deg
              )
            `,
            filter: 'blur(40px)'
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1]
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
            scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
          }}
        />
      </div>

      {/* Contenido principal del loader */}
      <motion.div 
        className="relative z-10 text-center"
        variants={itemVariants}
      >
        {/* Logo animado */}
        <motion.div 
          className="mb-8"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-24 h-24 mx-auto rounded-3xl flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-600 shadow-2xl">
            <motion.div
              className="w-16 h-16 relative"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/herobudgeticon.png"
                alt="Hero Budget Icon"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Título con gradiente animado */}
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-4"
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
          Hero Budget
        </motion.h2>

        {/* Texto de carga */}
        <motion.p 
          className="text-gray-600 mb-8 text-lg"
          variants={itemVariants}
        >
          {loadingText}
        </motion.p>

        {/* Barra de progreso animada */}
        <motion.div
          className="w-64 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden"
          variants={itemVariants}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
            style={{ 
              width: `${Math.min(progress, 100)}%` 
            }}
            initial={{ width: 0 }}
            animate={{ 
              width: `${Math.min(progress, 100)}%`,
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ 
              width: { duration: 0.3 },
              backgroundPosition: { duration: 2, repeat: Infinity }
            }}
          />
        </motion.div>

        {/* Indicador de progreso en texto */}
        <motion.div 
          className="mt-4 text-sm text-gray-500"
          variants={itemVariants}
        >
          {Math.round(progress)}%
        </motion.div>

        {/* Puntos de carga animados */}
        <motion.div 
          className="flex justify-center space-x-2 mt-6"
          variants={itemVariants}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-primary-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
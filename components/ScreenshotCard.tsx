"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Interfaz para definir las propiedades de Screenshot
 * @interface Screenshot
 */
interface Screenshot {
  id: string;
  filename: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: 'iphone' | 'ipad';
  width: number;
  height: number;
}

/**
 * Interfaz para las propiedades del componente ScreenshotCard
 * @interface ScreenshotCardProps
 */
interface ScreenshotCardProps {
  screenshot: Screenshot;
  IconComponent: React.ComponentType<{ className?: string }>;
}

/**
 * Componente ScreenshotCard
 * 
 * Componente individual que muestra una tarjeta con captura de pantalla
 * de la aplicación. Incluye imagen, título, descripción y efectos visuales
 * de hover para mejorar la experiencia del usuario.
 * 
 * @param {ScreenshotCardProps} props - Propiedades del componente
 * @returns {JSX.Element} Elemento JSX de la tarjeta de captura
 * 
 * Características principales:
 * - Imagen con proporción original mantenida
 * - Efectos hover con escalado y overlay
 * - Badge de categoría animado
 * - Efecto de brillo en hover
 * - Diseño glass morphism con backdrop blur
 */
export default function ScreenshotCard({ screenshot, IconComponent }: ScreenshotCardProps): JSX.Element {
  return (
    <div 
      className="relative rounded-3xl p-6 transition-all duration-500"
      style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Contenedor de imagen - mantiene proporción original con bordes redondeados */}
      <div className="relative mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100">
        <motion.div
          className="relative"
          style={{
            aspectRatio: `${screenshot.width} / ${screenshot.height}`
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          {/* 
            Imagen principal de la captura de pantalla
            Utiliza object-contain para mantener proporción sin recortes
            Se aplica drop-shadow para mayor profundidad visual
          */}
          <Image
            src={`/images/69/${screenshot.filename}`}
            alt={screenshot.title}
            width={screenshot.width}
            height={screenshot.height}
            className="w-full h-full object-contain rounded-3xl"
            style={{
              filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))'
            }}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJIgDvgjHqx55JnxeUa1LvNOGjLdawfnkqBEHhNxhEP8V4LNWjF8s8bNTAJbMHbBIq0SbH3LE5kQfABrLwO0ND1iGmgPz7+nxwTYN4T3"
          />
        </motion.div>

        {/* 
          Overlay con icono que aparece en hover
          Utiliza gradiente sutil para no ocultar completamente la imagen
          El icono se centra y escala suavemente con animaciones
        */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.div
            className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <IconComponent className="w-7 h-7 text-primary-500" />
          </motion.div>
        </motion.div>
      </div>

      {/* 
        Contenido textual de la tarjeta
        Título y descripción centrados con tipografía responsiva
      */}
      <div className="text-center">
        <motion.h3 
          className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
        >
          {screenshot.title}
        </motion.h3>
        <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
          {screenshot.description}
        </p>
      </div>

      {/* 
        Badge de categoría que aparece en hover
        Posicionado absolutamente en la esquina superior derecha
        Utiliza colores del tema y efectos de backdrop blur
      */}
      <motion.div
        className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{
          background: 'rgba(233, 30, 99, 0.1)',
          color: '#e91e63',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(233, 30, 99, 0.2)'
        }}
        initial={{ scale: 0.8, y: -10 }}
        whileHover={{ scale: 1, y: 0 }}
      >
        📱 {screenshot.category === 'iphone' ? 'iPhone' : 'iPad'}
      </motion.div>

      {/* 
        Efecto de brillo que aparece en hover
        Gradiente diagonal sutil que se activa con la interacción
        Posicionado para cubrir toda la tarjeta sin interferir con el contenido
      */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(233, 30, 99, 0.1) 0%, 
              transparent 50%, 
              rgba(76, 175, 80, 0.1) 100%
            )
          `,
          filter: 'blur(1px)'
        }}
      />
    </div>
  );
}
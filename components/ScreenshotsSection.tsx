'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import ImageModal from './ImageModal';
import ScreenshotCard from './ScreenshotCard';
import { screenshots, Screenshot } from './ScreenshotData';
import {
  sectionBackgroundStyles,
  decorativeAnimationConfig,
  sectionInViewConfig,
  type ScreenshotsModalState
} from './ScreenshotsSection_part2';
import {
  statsAnimationConfig,
  screenshotsStats,
  statsCardStyles,
  titleGradientStyles,
  gradientKeyframes
} from './ScreenshotsSection_part4';
import { MobileGallery, TabletGallery, DesktopGallery } from './ScreenshotsSection_part3';

/**
 * Screenshots Section Component
 * 
 * Sección principal que muestra una galería completa de capturas de pantalla
 * de la aplicación Hero Budget. Implementa animaciones por filas que se adaptan
 * al diseño responsive, mostrando diferentes números de columnas según el dispositivo.
 * 
 * Características principales:
 * - Animaciones por filas con Framer Motion
 * - Diseño responsive (1, 2 o 3 columnas)
 * - Modal para vista ampliada de imágenes
 * - Efectos ScrollFloat en el título
 * - Estadísticas animadas de funcionalidades
 */
/**
 * Screenshots Section Component - PARTE 1/2
 * Configuración y datos auxiliares en ScreenshotsSection_part2.tsx
 */
export default function ScreenshotsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, sectionInViewConfig);
  const [selectedImage, setSelectedImage] = useState<Screenshot | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Función para abrir el modal de imagen
   * @param {Screenshot} screenshot - La captura a mostrar en el modal
   */
  const openModal = (screenshot: Screenshot) => {
    setSelectedImage(screenshot);
    setIsModalOpen(true);
  };

  /**
   * Función para cerrar el modal de imagen
   */
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  /**
   * Función para cambiar de imagen en el modal
   * @param {Screenshot} newImage - Nueva imagen a mostrar
   */
  const handleImageChange = (newImage: Screenshot) => {
    setSelectedImage(newImage);
  };

  return (
    <section
      id="capturas"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        background: sectionBackgroundStyles.main
      }}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5"
          style={{
            background: sectionBackgroundStyles.decorative,
            filter: 'blur(80px)'
          }}
          animate={decorativeAnimationConfig.animate}
          transition={decorativeAnimationConfig.transition}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Encabezado de la sección */}
        <div className="text-center mb-20">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight text-gray-900"
            style={titleGradientStyles}
          >
            <span className="block lg:inline">Capturas de </span>Pantalla
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explora cada detalle de Hero Budget. Diseñada con amor para hacer que 
            gestionar tu dinero sea una experiencia simple, elegante y poderosa.
          </p>
        </div>

        {/* Galería de screenshots con animaciones por filas */}
        <div className="max-w-7xl mx-auto">
          <MobileGallery openModal={openModal} />
          <TabletGallery openModal={openModal} />
          <DesktopGallery openModal={openModal} />
        </div>

        {/* Sección de estadísticas de funcionalidades */}
        <motion.div
          className="mt-20 text-center"
          {...statsAnimationConfig.container}
          animate={isInView ? statsAnimationConfig.container.whileInView : statsAnimationConfig.container.initial}
          transition={statsAnimationConfig.container.transition}
        >
          <div 
            className="inline-block p-8 rounded-3xl max-w-4xl mx-auto"
            style={statsCardStyles}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Experiencia Visual Completa
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {screenshotsStats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    {...statsAnimationConfig.item}
                  >
                    <motion.div 
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 shadow-lg`}
                      {...statsAnimationConfig.icon}
                    >
                      <StatIcon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="text-3xl font-black text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm lg:text-base text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Modal de imágenes */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        currentImage={selectedImage}
        images={screenshots}
        onImageChange={handleImageChange}
      />

      <style jsx>{gradientKeyframes}</style>
    </section>
  );
}
'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Smartphone, Zap, PieChart, Target } from 'lucide-react';
import ImageModal from './ImageModal';
import ScrollFloat from './ScrollFloat';
import ScreenshotCard from './ScreenshotCard';
import { screenshots, Screenshot } from './ScreenshotData';

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
export default function ScreenshotsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1,
    margin: "0px 0px -50px 0px"
  });
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
        background: `
          radial-gradient(ellipse at top left, rgba(76, 175, 80, 0.03) 0%, transparent 50%),
          radial-gradient(ellipse at bottom right, rgba(233, 30, 99, 0.03) 0%, transparent 50%),
          linear-gradient(135deg, #fafafa 0%, #ffffff 50%, #f8f9fa 100%)
        `
      }}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5"
          style={{
            background: `
              radial-gradient(circle, 
                rgba(233, 30, 99, 0.1) 0%, 
                rgba(76, 175, 80, 0.05) 50%, 
                transparent 70%
              )
            `,
            filter: 'blur(80px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 120, 240, 360],
            x: [-20, 20, -20],
            y: [-10, 10, -10]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Encabezado de la sección */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <ScrollFloat
            containerClassName="mb-8"
            textClassName="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900"
            animationDuration={1.5}
            ease="back.inOut(2)"
            scrollStart="center bottom+=40%"
            scrollEnd="bottom bottom-=30%"
            stagger={0.04}
          >
            Capturas de Pantalla
          </ScrollFloat>
          
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explora cada detalle de Hero Budget. Diseñada con amor para hacer que 
            gestionar tu dinero sea una experiencia simple, elegante y poderosa.
          </motion.p>
        </motion.div>

        {/* Galería de screenshots con animaciones por filas */}
        <div className="max-w-7xl mx-auto">
          {/* Móvil: 1 columna - cada imagen es una fila */}
          <div className="grid grid-cols-1 gap-8 lg:gap-12 md:hidden">
            {screenshots.map((screenshot, index) => {
              const IconComponent = screenshot.icon;
              return (
                <motion.div
                  key={screenshot.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: index * 0.1 }
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: -50,
                    transition: { duration: 0.4 }
                  }}
                  viewport={{ amount: 0.3 }}
                  whileHover={{ 
                    y: -12,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openModal(screenshot)}
                >
                  <ScreenshotCard screenshot={screenshot} IconComponent={IconComponent} />
                </motion.div>
              );
            })}
          </div>

          {/* Tablet: 2 columnas */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
            {Array.from({ length: Math.ceil(screenshots.length / 2) }).map((_, rowIndex) => (
              <motion.div
                key={`row-md-${rowIndex}`}
                className="col-span-2 grid grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: rowIndex * 0.2 }
                }}
                exit={{ 
                  opacity: 0, 
                  y: -50,
                  transition: { duration: 0.4 }
                }}
                viewport={{ amount: 0.3 }}
              >
                {screenshots.slice(rowIndex * 2, (rowIndex + 1) * 2).map((screenshot) => {
                  const IconComponent = screenshot.icon;
                  return (
                    <motion.div
                      key={screenshot.id}
                      className="group cursor-pointer"
                      whileHover={{ 
                        y: -12,
                        transition: { duration: 0.4, ease: "easeOut" }
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openModal(screenshot)}
                    >
                      <ScreenshotCard screenshot={screenshot} IconComponent={IconComponent} />
                    </motion.div>
                  );
                })}
              </motion.div>
            ))}
          </div>

          {/* Desktop: 3 columnas */}
          <div className="hidden lg:grid grid-cols-3 gap-12">
            {Array.from({ length: Math.ceil(screenshots.length / 3) }).map((_, rowIndex) => (
              <motion.div
                key={`row-lg-${rowIndex}`}
                className="col-span-3 grid grid-cols-3 gap-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: rowIndex * 0.3 }
                }}
                exit={{ 
                  opacity: 0, 
                  y: -50,
                  transition: { duration: 0.4 }
                }}
                viewport={{ amount: 0.3 }}
              >
                {screenshots.slice(rowIndex * 3, (rowIndex + 1) * 3).map((screenshot) => {
                  const IconComponent = screenshot.icon;
                  return (
                    <motion.div
                      key={screenshot.id}
                      className="group cursor-pointer"
                      whileHover={{ 
                        y: -12,
                        transition: { duration: 0.4, ease: "easeOut" }
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openModal(screenshot)}
                    >
                      <ScreenshotCard screenshot={screenshot} IconComponent={IconComponent} />
                    </motion.div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sección de estadísticas de funcionalidades */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div 
            className="inline-block p-8 rounded-3xl max-w-4xl mx-auto"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)'
            }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Experiencia Visual Completa
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Smartphone, label: 'Pantallas', value: '15+', color: 'from-blue-500 to-blue-600' },
                { icon: Zap, label: 'Funciones', value: '30+', color: 'from-yellow-500 to-orange-500' },
                { icon: PieChart, label: 'Gráficos', value: '8+', color: 'from-green-500 to-green-600' },
                { icon: Target, label: 'Categorías', value: '20+', color: 'from-purple-500 to-purple-600' }
              ].map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ 
                      scale: 1.1,
                      y: -5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
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
    </section>
  );
}
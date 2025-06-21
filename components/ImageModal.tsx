'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download, Expand } from 'lucide-react';
import Image from 'next/image';

/**
 * Image Modal Component
 * Modal para mostrar imágenes en tamaño completo con navegación y controles
 */

interface ImageData {
  id: string;
  filename: string;
  title: string;
  description: string;
  width: number;
  height: number;
  icon: React.ComponentType<{ className?: string }>;
  category: 'iphone' | 'ipad';
}

interface ImageModalProps {
  /** Estado de visibilidad del modal */
  isOpen: boolean;
  /** Función para cerrar el modal */
  onClose: () => void;
  /** Imagen actualmente seleccionada */
  currentImage: ImageData | null;
  /** Array de todas las imágenes para navegación */
  images: ImageData[];
  /** Función callback para cambiar la imagen actual */
  onImageChange?: (image: ImageData) => void;
}

export default function ImageModal({
  isOpen,
  onClose,
  currentImage,
  images,
  onImageChange,
}: ImageModalProps) {
  // Estado para navegación entre imágenes
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Actualizar índice cuando cambia la imagen actual
  useEffect(() => {
    if (currentImage) {
      const index = images.findIndex(img => img.id === currentImage.id);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [currentImage, images]);

  // Función para navegar a la imagen anterior
  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(newIndex);
    if (onImageChange) {
      onImageChange(images[newIndex]);
    }
  };

  // Función para navegar a la siguiente imagen
  const goToNext = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    if (onImageChange) {
      onImageChange(images[newIndex]);
    }
  };

  // Manejo de teclado para navegación
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  // Función para descargar imagen (simulada)
  const handleDownload = () => {
    if (currentImage) {
      // En un caso real, esto sería una descarga real
      console.log(`Descargando imagen: ${currentImage.filename}`);
    }
  };

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!currentImage) return null;

  // Variantes de animación para el modal
  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  // Variantes de animación para el backdrop
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop con blur */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Contenedor del modal */}
          <motion.div
            className="relative max-w-4xl max-h-full w-full mx-auto bg-transparent overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar flotante */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Contenedor de imagen */}
            <div className="relative flex items-center justify-center min-h-[90vh] max-h-[90vh]">
              <motion.div
                key={currentImage.id}
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={`/images/69/${currentImage.filename}`}
                  alt={currentImage.title}
                  width={currentImage.width * 2}
                  height={currentImage.height * 2}
                  className="object-contain rounded-xl shadow-2xl"
                  style={{
                    aspectRatio: `${currentImage.width} / ${currentImage.height}`,
                    maxHeight: '90vh',
                    width: 'auto'
                  }}
                  priority
                />
              </motion.div>

              {/* Botones de navegación */}
              {images.length > 1 && (
                <>
                  <motion.button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all duration-200"
                    whileHover={{ scale: 1.1, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title="Imagen anterior"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>

                  <motion.button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all duration-200"
                    whileHover={{ scale: 1.1, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                    title="Siguiente imagen"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
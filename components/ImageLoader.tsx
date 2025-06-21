'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * Optimized Image Loader Component
 * Componente optimizado para carga de imágenes con loading states
 */

interface ImageLoaderProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  quality?: number;
  className?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
}

export default function ImageLoader({
  src,
  alt,
  width,
  height,
  priority = false,
  quality = 75,
  className = '',
  style,
  onLoad
}: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Loading skeleton */}
      {isLoading && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-2xl"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            backgroundSize: '200% 100%'
          }}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div 
          className="absolute inset-0 bg-gray-100 rounded-2xl flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="text-center text-gray-400">
            <div className="text-4xl mb-2">📱</div>
            <div className="text-sm">Imagen no disponible</div>
          </div>
        </div>
      )}

      {/* Imagen optimizada */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          quality={quality}
          className={className}
          style={style}
          onLoad={handleLoad}
          onError={handleError}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJIgDvgjHqx55JnxeUa1LvNOGjLdawfnkqBEHhNxhEP8V4LNWjF8s8bNTAJbMHbBIq0SbH3LE5kQfABrLwO0ND1iGmgPz7+nxwTYN4T3"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </div>
  );
}
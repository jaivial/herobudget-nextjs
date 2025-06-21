'use client';

import { useState, useEffect } from 'react';

/**
 * Hook para precargar imágenes
 * Optimiza la carga de múltiples imágenes
 */

interface UseImagePreloaderOptions {
  quality?: number;
  priority?: boolean;
}

export function useImagePreloader(
  imageUrls: string[], 
  options: UseImagePreloaderOptions = {}
) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!imageUrls.length) {
      setIsLoading(false);
      return;
    }

    let loadedCount = 0;
    const totalImages = imageUrls.length;
    const imagePromises: Promise<void>[] = [];

    imageUrls.forEach((url) => {
      const promise = new Promise<void>((resolve, reject) => {
        const img = new Image();
        
        // Configurar calidad si está disponible
        if (options.quality) {
          // Para Next.js, añadir parámetros de optimización
          const optimizedUrl = url.includes('?') 
            ? `${url}&q=${options.quality}&w=256&h=512`
            : `${url}?q=${options.quality}&w=256&h=512`;
          img.src = optimizedUrl;
        } else {
          img.src = url;
        }

        img.onload = () => {
          loadedCount++;
          setLoadedImages(prev => new Set([...prev, url]));
          setProgress((loadedCount / totalImages) * 100);
          
          if (loadedCount === totalImages) {
            setIsLoading(false);
          }
          resolve();
        };

        img.onerror = () => {
          loadedCount++;
          setProgress((loadedCount / totalImages) * 100);
          
          if (loadedCount === totalImages) {
            setIsLoading(false);
          }
          reject(new Error(`Failed to load image: ${url}`));
        };
      });

      imagePromises.push(promise);
    });

    // Timeout de seguridad - si no cargan todas en 10 segundos, continuar
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    Promise.allSettled(imagePromises).finally(() => {
      clearTimeout(timeout);
      setIsLoading(false);
    });

    return () => clearTimeout(timeout);
  }, [imageUrls, options.quality]);

  return {
    isLoading,
    progress,
    loadedImages,
    isImageLoaded: (url: string) => loadedImages.has(url),
  };
}
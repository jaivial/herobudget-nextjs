'use client';

import { useState, useEffect } from 'react';
import CustomLoader from './CustomLoader';

/**
 * Page Wrapper Component
 * Wrapper que maneja el estado de carga global para todas las páginas
 * Controla la visibilidad del CustomLoader durante la carga inicial
 */

interface PageWrapperProps {
  /** Contenido de la página que se va a renderizar */
  children: React.ReactNode;
  /** Duración mínima del loader en milisegundos */
  minimumLoadingTime?: number;
  /** Simular tiempo de carga adicional */
  simulateLoading?: boolean;
}

export default function PageWrapper({ 
  children, 
  minimumLoadingTime = 1500,
  simulateLoading = true 
}: PageWrapperProps) {
  // Estado de carga principal
  const [isLoading, setIsLoading] = useState(true);
  // Estado para controlar cuando el contenido está listo
  const [isContentReady, setIsContentReady] = useState(false);

  // Efecto para manejar la carga inicial
  useEffect(() => {
    // Simular carga de recursos y contenido
    const loadContent = async () => {
      // Esperar a que el DOM esté completamente cargado
      if (document.readyState === 'loading') {
        await new Promise(resolve => {
          document.addEventListener('DOMContentLoaded', resolve);
        });
      }

      // Simular tiempo de carga adicional si está habilitado
      if (simulateLoading) {
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      // Marcar contenido como listo
      setIsContentReady(true);
      
      // Esperar tiempo mínimo antes de ocultar loader
      await new Promise(resolve => setTimeout(resolve, minimumLoadingTime));
      
      // Finalizar carga
      setIsLoading(false);
    };

    loadContent();
  }, [minimumLoadingTime, simulateLoading]);

  return (
    <>
      {/* Loader personalizado que se muestra durante la carga */}
      <CustomLoader 
        isLoading={isLoading} 
        loadingText="Preparando Hero Budget..."
        minimumDuration={minimumLoadingTime}
      />
      
      {/* Contenido principal - se renderiza pero se oculta hasta que termine la carga */}
      <div 
        style={{ 
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
          visibility: isContentReady ? 'visible' : 'hidden'
        }}
      >
        {children}
      </div>
    </>
  );
}
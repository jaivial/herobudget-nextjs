/**
 * ScreenshotsSection - Configuración y tipos
 * Archivo complementario para ScreenshotsSection_part1.tsx
 * PARTE 2/2: Tipos, configuraciones y datos estáticos
 */


/**
 * Tipos para el modal de imágenes
 */
export interface ScreenshotsModalState {
  selectedImage: any | null;
  isModalOpen: boolean;
}


/**
 * Configuración de animaciones por filas para diferentes breakpoints
 */
export const rowAnimationConfig = {
  mobile: {
    grid: "grid-cols-1",
    gap: "gap-8 lg:gap-12",
    className: "md:hidden",
    animation: {
      initial: { opacity: 0, y: 50 },
      whileInView: { 
        opacity: 1, 
        y: 0,
      },
      exit: { 
        opacity: 0, 
        y: -50,
      },
      viewport: { amount: 0.3 },
      itemDelay: 0.1,
    },
  },
  tablet: {
    grid: "grid-cols-2",
    gap: "gap-8",
    className: "hidden md:grid lg:hidden",
    itemsPerRow: 2,
    animation: {
      initial: { opacity: 0, y: 50 },
      whileInView: { 
        opacity: 1, 
        y: 0,
      },
      exit: { 
        opacity: 0, 
        y: -50,
      },
      viewport: { amount: 0.3 },
      rowDelay: 0.2,
    },
  },
  desktop: {
    grid: "grid-cols-3",
    gap: "gap-12",
    className: "hidden lg:grid",
    itemsPerRow: 3,
    animation: {
      initial: { opacity: 0, y: 50 },
      whileInView: { 
        opacity: 1, 
        y: 0,
      },
      exit: { 
        opacity: 0, 
        y: -50,
      },
      viewport: { amount: 0.3 },
      rowDelay: 0.3,
    },
  },
};

/**
 * Configuración de hover para tarjetas de screenshots
 */
export const cardHoverConfig = {
  whileHover: { 
    y: -12,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  whileTap: { scale: 0.98 },
};


/**
 * Configuración de estilos para el fondo de la sección
 */
export const sectionBackgroundStyles = {
  main: `
    radial-gradient(ellipse at top left, rgba(76, 175, 80, 0.03) 0%, transparent 50%),
    radial-gradient(ellipse at bottom right, rgba(233, 30, 99, 0.03) 0%, transparent 50%),
    linear-gradient(135deg, #fafafa 0%, #ffffff 50%, #f8f9fa 100%)
  `,
  decorative: `
    radial-gradient(circle, 
      rgba(233, 30, 99, 0.1) 0%, 
      rgba(76, 175, 80, 0.05) 50%, 
      transparent 70%
    )
  `,
};

/**
 * Configuración de animación para elementos decorativos de fondo
 */
export const decorativeAnimationConfig = {
  animate: {
    scale: [1, 1.2, 1],
    rotate: [0, 120, 240, 360],
    x: [-20, 20, -20],
    y: [-10, 10, -10]
  },
  transition: {
    duration: 25,
    repeat: Infinity,
    ease: 'linear'
  },
};




/**
 * Configuración de InView para la sección
 */
export const sectionInViewConfig = {
  once: true, 
  amount: 0.1,
  margin: "0px 0px -50px 0px"
};

/**
 * Función helper para calcular filas en diferentes breakpoints
 */
export const calculateRows = (totalItems: number, itemsPerRow: number): number => {
  return Math.ceil(totalItems / itemsPerRow);
};

/**
 * Función helper para obtener elementos de una fila específica
 */
export function getRowItems<T>(
  items: T[], 
  rowIndex: number, 
  itemsPerRow: number
): T[] {
  return items.slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow);
}
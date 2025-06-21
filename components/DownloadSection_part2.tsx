/**
 * DownloadSection - Configuración y tipos
 * Archivo complementario para DownloadSection_part1.tsx
 * PARTE 2/2: Configuraciones, tipos y funciones auxiliares
 */

import { Globe, Star } from 'lucide-react';

/**
 * Props para el contador animado
 */
export interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  decimal?: boolean;
}

/**
 * Configuración de estadísticas para la sección de descarga
 */
export const downloadStats = [
  {
    icon: Globe,
    number: 30,
    suffix: "+",
    label: "Idiomas",
    duration: 2,
    decimal: false,
  },
  {
    icon: Star,
    number: 100,
    suffix: "%",
    label: "Gratis", 
    duration: 2.2,
    decimal: false,
  },
];

/**
 * Imágenes para el stack interactivo de la app
 */
export const appImages = [
  { id: 1, img: "/images/69/169.png", alt: "Hero Budget - Dashboard" },
  { id: 2, img: "/images/69/269.png", alt: "Hero Budget - Gastos" },
  { id: 3, img: "/images/69/369.png", alt: "Hero Budget - Presupuestos" },
  { id: 4, img: "/images/69/469.png", alt: "Hero Budget - Análisis" },
  { id: 5, img: "/images/69/569.png", alt: "Hero Budget - Categorías" },
  { id: 6, img: "/images/69/669.png", alt: "Hero Budget - Reportes" },
];

/**
 * Configuración de animaciones para el contenedor principal
 */
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

/**
 * Configuración de animaciones para elementos individuales
 */
export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

/**
 * Configuración de estilos de fondo para la sección
 */
export const sectionBackgroundStyles = {
  main: `
    radial-gradient(ellipse at top right, rgba(233, 30, 99, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse at bottom left, rgba(76, 175, 80, 0.05) 0%, transparent 50%),
    linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)
  `,
  decorative: `
    conic-gradient(from 45deg, 
      rgba(233, 30, 99, 0.1) 0deg,
      rgba(76, 175, 80, 0.08) 120deg,
      rgba(244, 143, 177, 0.12) 240deg,
      rgba(233, 30, 99, 0.1) 360deg
    )
  `,
};

/**
 * Configuración de animación para efectos decorativos de fondo
 */
export const decorativeAnimationConfig = {
  animate: {
    rotate: 360,
    scale: [1, 1.2, 1],
  },
  transition: {
    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
    scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};

/**
 * Configuración de estilos para la tarjeta de estadísticas
 */
export const statsCardStyles = {
  background: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.06)",
};

/**
 * Configuración del título con gradiente animado
 */
export const titleGradientStyles = {
  background: `
    linear-gradient(135deg, 
      #333333 0%, 
      #e91e63 25%, 
      #333333 50%, 
      #4caf50 75%, 
      #333333 100%
    )`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  backgroundSize: "300% 300%",
  animation: "gradientShift 8s ease-in-out infinite",
};

/**
 * Configuración responsive para diferentes tamaños de pantalla
 */
export const responsiveConfig = {
  getMinHeight: (screenWidth: number): string => {
    if (screenWidth < 768) return "127vh";
    if (screenWidth >= 768 && screenWidth < 1024) return "137vh";
    return "max(100vh, 800px)";
  },
  
  getStackScale: (screenWidth: number): string => {
    if (screenWidth < 270) return "scale(0.65)";
    if (screenWidth < 280) return "scale(0.7)";
    if (screenWidth < 325) return "scale(0.76)";
    if (screenWidth < 380) return "scale(0.8)";
    if (screenWidth < 400) return "scale(0.85)";
    if (screenWidth < 450) return "scale(0.9)";
    if (screenWidth < 500) return `scale(${Math.min(1, (screenWidth - 80) / 280)})`;
    if (screenWidth < 600) return "scale(1.1)";
    if (screenWidth < 640) return "scale(1.1)";
    if (screenWidth < 768) return "scale(1.2)";
    if (screenWidth < 1024) return "scale(1)";
    if (screenWidth < 1180) return "scale(1.05)";
    if (screenWidth < 1280) return "scale(1.09)";
    if (screenWidth < 1440) return "scale(1.1)";
    return "scale(1.2)";
  },

  getMarginRight: (screenWidth: number): string => {
    if (screenWidth < 380) return "40px";
    if (screenWidth < 450) return "50px";
    if (screenWidth < 550) return "90px";
    if (screenWidth < 600) return "50px";
    if (screenWidth < 700) return "50px";
    return "initial";
  },
};

/**
 * Configuración de animaciones para elementos flotantes
 */
export const floatingElementsConfig = {
  primary: {
    animate: {
      y: [-8, 8, -8],
      x: [-4, 4, -4],
      scale: [0.8, 1.2, 0.8],
      rotate: [0, 180, 360],
    },
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
    className: "absolute -top-4 sm:-top-6 md:-top-8 -right-4 sm:-right-6 md:-right-8 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600",
  },
  secondary: {
    animate: {
      scale: [1, 0.7, 1],
      opacity: [0.7, 1, 0.7],
      rotate: [360, 180, 0],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2,
    },
    className: "absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -left-4 sm:-left-6 md:-left-8 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-accent-400 to-accent-600",
  },
};

/**
 * CSS Keyframes para animación de gradiente
 */
export const gradientKeyframes = `
  @keyframes gradientShift {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
`;

/**
 * Configuración de Stack props
 */
export const stackConfig = {
  randomRotation: true,
  sensitivity: 150,
  sendToBackOnClick: true,
  cardDimensions: { width: 280 },
  animationConfig: { stiffness: 300, damping: 25 },
  autoRotateInterval: 2000,
};
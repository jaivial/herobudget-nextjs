/**
 * ScreenshotsSection - Configuración de estadísticas
 * PARTE 4/4: Estadísticas y configuraciones específicas
 */

import { Smartphone, Zap, PieChart, Target } from 'lucide-react';

/**
 * Estadísticas de funcionalidades para la sección de screenshots
 */
export const screenshotsStats = [
  { 
    icon: Smartphone, 
    label: 'Pantallas', 
    value: '15+', 
    color: 'from-blue-500 to-blue-600' 
  },
  { 
    icon: Zap, 
    label: 'Funciones', 
    value: '30+', 
    color: 'from-yellow-500 to-orange-500' 
  },
  { 
    icon: PieChart, 
    label: 'Gráficos', 
    value: '8+', 
    color: 'from-green-500 to-green-600' 
  },
  { 
    icon: Target, 
    label: 'Categorías', 
    value: '20+', 
    color: 'from-purple-500 to-purple-600' 
  }
];

/**
 * Configuración de animaciones para las estadísticas
 */
export const statsAnimationConfig = {
  container: {
    whileInView: {
      opacity: 1,
      y: 0,
    },
    initial: {
      opacity: 0,
      y: 40,
    },
    transition: {
      duration: 1,
      delay: 0.8,
    },
    viewport: {
      once: true,
      amount: 0.1,
      margin: "0px 0px -50px 0px",
    },
  },
  item: {
    whileHover: {
      scale: 1.1,
      y: -5,
    },
    transition: {
      duration: 0.3,
    },
  },
  icon: {
    whileHover: {
      rotate: [0, -10, 10, 0],
    },
    transition: {
      duration: 0.5,
    },
  },
};

/**
 * Configuración de estilos para la tarjeta de estadísticas
 */
export const statsCardStyles = {
  background: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
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
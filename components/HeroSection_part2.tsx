/**
 * HeroSection - Funciones auxiliares y tipos
 * Archivo complementario para HeroSection_part1.tsx
 * PARTE 2/2: Funciones de utilidad, handlers y configuraciones
 */

import { RefObject } from "react";

/**
 * Tipos de interfaz para HeroSection
 */
export interface HeroSectionRefs {
  heroRef: RefObject<HTMLElement>;
  titleRef: RefObject<HTMLHeadingElement>;
  subtitleRef: RefObject<HTMLParagraphElement>;
  buttonsRef: RefObject<HTMLDivElement>;
  iconRef: RefObject<HTMLDivElement>;
  particlesRef: RefObject<HTMLDivElement>;
  gradientRef: RefObject<HTMLDivElement>;
  morphingRef: RefObject<HTMLDivElement>;
}

/**
 * Configuración de animaciones GSAP para el Hero Section
 */
export const heroAnimationConfig = {
  morphing: {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: "none" as const,
  },
  gradient: {
    rotation: -360,
    duration: 25,
    repeat: -1,
    ease: "none" as const,
  },
  timeline: {
    title: {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    },
    subtitle: {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: "-=0.8",
    },
    buttons: {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: "-=0.6",
    },
    icon: {
      scale: 0.8,
      opacity: 0,
      rotation: -15,
      duration: 1.2,
      ease: "back.out(1.7)",
      delay: "-=1",
    },
  },
  floating: {
    y: -15,
    rotation: 3,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut",
  },
  particles: {
    y: "random(-20, 20)",
    x: "random(-15, 15)",
    rotation: "random(-180, 180)",
    scale: "random(0.8, 1.2)",
    duration: "random(3, 6)",
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  },
  breathing: {
    "--bg-scale": "1.05",
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  },
};

/**
 * Función para manejar scroll suave a secciones específicas
 * @param sectionId - ID de la sección de destino
 */
export const handleScrollToSection = (sectionId: string): void => {
  const element = document.querySelector(sectionId);
  if (element) {
    const headerHeight = 70;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

/**
 * Configuración de estilos de fondo para el Hero Section
 */
export const heroBackgroundStyles = {
  main: `
    radial-gradient(ellipse at top, rgba(233, 30, 99, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse at bottom, rgba(76, 175, 80, 0.08) 0%, transparent 50%),
    linear-gradient(135deg, #fafafa 0%, #ffffff 25%, #f9f9f9 50%, #ffffff 75%, #fafafa 100%)
  `,
  morphing: `
    radial-gradient(circle at 30% 30%, rgba(233, 30, 99, 0.15) 0%, transparent 40%),
    radial-gradient(circle at 70% 70%, rgba(76, 175, 80, 0.12) 0%, transparent 40%),
    radial-gradient(circle at 50% 50%, rgba(244, 143, 177, 0.1) 0%, transparent 50%)
  `,
  gradient: `
    conic-gradient(from 0deg at 50% 50%, 
      rgba(233, 30, 99, 0.1) 0deg,
      rgba(76, 175, 80, 0.08) 90deg,
      rgba(244, 143, 177, 0.12) 180deg,
      rgba(233, 30, 99, 0.1) 270deg,
      rgba(233, 30, 99, 0.1) 360deg
    )
  `,
};

/**
 * Configuración de estilos de texto con gradiente animado
 */
export const heroTextStyles = {
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
 * Configuración de partículas flotantes
 */
export const particlesConfig = {
  count: 12,
  colors: [
    "rgba(233, 30, 99, 0.6)",
    "rgba(76, 175, 80, 0.5)", 
    "rgba(244, 143, 177, 0.7)"
  ],
  getColor: (index: number) => {
    return particlesConfig.colors[index % 3];
  },
  getPosition: (index: number) => ({
    left: `${10 + index * 8}%`,
    top: `${20 + index * 6}%`,
  }),
  animation: {
    scale: [0.8, 1.2, 0.8],
    opacity: [0.3, 0.8, 0.3],
    duration: (index: number) => 3 + index * 0.5,
    delay: (index: number) => index * 0.3,
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
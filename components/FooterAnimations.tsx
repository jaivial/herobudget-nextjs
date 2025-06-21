/**
 * FooterAnimations
 * Configuraciones de animaciones para el componente Footer
 */

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

/**
 * Función para manejar navegación con scroll suave
 * @param href - href del enlace a navegar
 * @param currentPath - ruta actual de la página
 */
export const handleNavClick = (href: string, currentPath: string = '/') => {
  // Si es un enlace interno en la misma página
  if (href.startsWith('#')) {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
  // Si es un enlace a otra página con anchor
  else if (href.includes('#') && !href.startsWith('http')) {
    // Dejar que Next.js maneje la navegación normalmente
    return;
  }
};
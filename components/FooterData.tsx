import { FooterSection } from './FooterTypes';

/**
 * FooterData
 * Configuración de datos para las secciones del footer
 */

/**
 * Función para obtener enlaces del footer según la página actual
 * @param currentPath - Ruta actual de la página
 * @returns Array de secciones del footer con enlaces apropiados
 */
export const getFooterSections = (currentPath: string = '/'): FooterSection[] => [
  {
    title: 'Producto',
    links: [
      { 
        label: 'Características', 
        href: currentPath === '/' ? '#caracteristicas' : '/#caracteristicas' 
      },
      { 
        label: 'Capturas', 
        href: currentPath === '/' ? '#capturas' : '/#capturas' 
      },
      { 
        label: 'Descargar', 
        href: currentPath === '/' ? '#descargas' : '/#descargas' 
      }
    ]
  },
  {
    title: 'Soporte',
    links: [
      { label: 'Centro de Ayuda', href: '/soporte' },
      { 
        label: 'Contacto', 
        href: currentPath === '/soporte' ? '#contact' : '/soporte#contact' 
      },
      { 
        label: 'Reportar Bug', 
        href: currentPath === '/soporte' ? '#ticket' : '/soporte#ticket' 
      },
      { 
        label: 'Solicitar Función', 
        href: currentPath === '/soporte' ? '#ticket' : '/soporte#ticket' 
      }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Política de Privacidad', href: '/privacidad' },
      { 
        label: 'Protección de datos', 
        href: currentPath === '/privacidad' ? '#protection' : '/privacidad#protection' 
      },
      { 
        label: 'Tus derechos', 
        href: currentPath === '/privacidad' ? '#rights' : '/privacidad#rights' 
      }
    ]
  }
];
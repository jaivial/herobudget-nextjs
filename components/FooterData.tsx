import { FooterSection } from './FooterTypes';
import { FooterTranslations } from '@/lib/i18n/footer-translations';

/**
 * FooterData
 * Configuración de datos para las secciones del footer
 */

/**
 * Función para obtener enlaces del footer según la página actual
 * @param currentPath - Ruta actual de la página
 * @param t - Footer translations object
 * @returns Array de secciones del footer con enlaces apropiados
 */
export const getFooterSections = (currentPath: string = '/', t: FooterTranslations): FooterSection[] => [
  {
    title: t.sections.product.title,
    links: [
      {
        label: t.sections.product.features,
        href: currentPath === '/' ? '#caracteristicas' : '/#caracteristicas'
      },
      {
        label: t.sections.product.screenshots,
        href: currentPath === '/' ? '#capturas' : '/#capturas'
      },
      {
        label: t.sections.product.download,
        href: currentPath === '/' ? '#descargas' : '/#descargas'
      }
    ]
  },
  {
    title: t.sections.support.title,
    links: [
      { label: t.sections.support.helpCenter, href: '/soporte' },
      {
        label: t.sections.support.contact,
        href: currentPath === '/soporte' ? '#contact' : '/soporte#contact'
      },
      {
        label: t.sections.support.reportBug,
        href: currentPath === '/soporte' ? '#ticket' : '/soporte#ticket'
      },
      {
        label: t.sections.support.requestFeature,
        href: currentPath === '/soporte' ? '#ticket' : '/soporte#ticket'
      }
    ]
  },
  {
    title: t.sections.legal.title,
    links: [
      { label: t.sections.legal.privacyPolicy, href: '/privacidad' },
      {
        label: t.sections.legal.dataProtection,
        href: currentPath === '/privacidad' ? '#protection' : '/privacidad#protection'
      },
      {
        label: t.sections.legal.yourRights,
        href: currentPath === '/privacidad' ? '#rights' : '/privacidad#rights'
      }
    ]
  }
];
import { Smartphone, Monitor, Zap, PieChart, Target, Settings, Lock, Receipt, PiggyBank, History, Languages, Sun, Cloud } from 'lucide-react';

/**
 * Interfaz para definir las propiedades de Screenshot
 * @interface Screenshot
 */
export interface Screenshot {
  id: string;
  filename: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: 'iphone' | 'ipad';
  width: number;
  height: number;
}

/**
 * Datos de capturas de pantalla de la aplicación Hero Budget
 * 
 * Array que contiene todas las capturas disponibles con su información completa:
 * - Datos técnicos (dimensiones, archivo)
 * - Información descriptiva (título, descripción)
 * - Elementos visuales (iconos, categoría)
 * 
 * Cada captura representa una funcionalidad específica de la aplicación
 * y está optimizada para mostrar las características principales del producto.
 */
export const screenshots: Screenshot[] = [
  {
    id: 'auth',
    filename: '1-v2-6.5.png',
    title: 'Autentificación',
    description: 'Múltiples sistemas de autentificación y registro, usa tu email, tu cuenta de Google o inicia sesión con Apple.',
    icon: Lock,
    category: 'iphone',
    width: 1242,
    height: 2688
  },
  {
    id: 'movements',
    filename: '2-v2-6.5.png',
    title: 'Registra movimientos',
    description: 'Registra nuevos ingresos, gastos y facturas recurrentes para estar al día en tu control financiero.',
    icon: Smartphone,
    category: 'iphone',
    width: 1242,
    height: 2688
  },
  {
    id: 'categories',
    filename: '3-v2-6.5.png',
    title: 'Categoriza cada movimiento',
    description: 'Crea categorías y asígnalas a cada movimiento para controlar el flujo de tu economía por categorías.',
    icon: Target,
    category: 'iphone',
    width: 1242,
    height: 2688
  },
  {
    id: 'analytics',
    filename: '4-v2-6.5.png',
    title: 'Análisis y gráficas',
    description: 'Visualiza tus patrones de gasto con gráficas intuitivas y análisis detallados de tu comportamiento financiero.',
    icon: PieChart,
    category: 'iphone',
    width: 1242,
    height: 2688
  },
  {
    id: 'budgets',
    filename: '5-v2-6.5.png',
    title: 'Presupuestos inteligentes',
    description: 'Crea presupuestos personalizados y recibe alertas cuando te acerques a tus límites de gasto.',
    icon: PiggyBank,
    category: 'iphone',
    width: 1242,
    height: 2688
  },
  {
    id: 'reports',
    filename: '6-v2-6.5.png',
    title: 'Reportes detallados',
    description: 'Genera reportes completos de tus finanzas con exportación a PDF y análisis de tendencias.',
    icon: Receipt,
    category: 'iphone',
    width: 1242,
    height: 2688
  },
  {
    id: 'history',
    filename: '7-v2-6.5.png',
    title: 'Historial completo',
    description: 'Accede a todo tu historial financiero con filtros avanzados y búsqueda inteligente.',
    icon: History,
    category: 'iphone',
    width: 1242,
    height: 2688
  },
  {
    id: 'goals',
    filename: '8-v2-6.5.png',
    title: 'Metas de ahorro',
    description: 'Define objetivos de ahorro realistas y sigue tu progreso con motivación visual.',
    icon: Target,
    category: 'iphone',
    width: 1242,
    height: 2688
  },
  {
    id: 'settings',
    filename: '9-v2-6.5.png',
    title: 'Configuración completa',
    description: 'Personaliza completamente la aplicación con configuraciones avanzadas y preferencias.',
    icon: Settings,
    category: 'iphone',
    width: 1242,
    height: 2688
  },
  {
    id: 'dashboard',
    filename: '10-v2-6.5.png',
    title: 'Dashboard intuitivo',
    description: 'Panel principal con toda tu información financiera organizada de forma clara y accesible.',
    icon: Monitor,
    category: 'iphone',
    width: 1242,
    height: 2688
  }
];
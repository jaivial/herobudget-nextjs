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
    filename: '169.png',
    title: 'Autentificación',
    description: 'Múltiples sistemas de autentificación y registro, usa tu email, tu cuenta de Google o inicia sesión con Apple.',
    icon: Lock,
    category: 'iphone',
    width: 295,
    height: 640
  },
  {
    id: 'movements',
    filename: '269.png',
    title: 'Registra movimientos',
    description: 'Registra nuevos ingresos, gastos y facturas recurrentes para estar al día en tu control financiero.',
    icon: Smartphone,
    category: 'iphone',
    width: 295,
    height: 640
  },
  {
    id: 'categories',
    filename: '369.png',
    title: 'Categoriza cada movimiento',
    description: 'Crea categorías y asígnalas a cada movimiento para controlar el flujo de tu economía por categorías.',
    icon: Target,
    category: 'iphone',
    width: 295,
    height: 640
  },
  {
    id: 'analytics',
    filename: '469.png',
    title: 'Análisis y gráficas',
    description: 'Visualiza tus patrones de gasto con gráficas intuitivas y análisis detallados de tu comportamiento financiero.',
    icon: PieChart,
    category: 'iphone',
    width: 295,
    height: 640
  },
  {
    id: 'budgets',
    filename: '569.png',
    title: 'Presupuestos inteligentes',
    description: 'Crea presupuestos personalizados y recibe alertas cuando te acerques a tus límites de gasto.',
    icon: PiggyBank,
    category: 'iphone',
    width: 295,
    height: 640
  },
  {
    id: 'reports',
    filename: '669.png',
    title: 'Reportes detallados',
    description: 'Genera reportes completos de tus finanzas con exportación a PDF y análisis de tendencias.',
    icon: Receipt,
    category: 'iphone',
    width: 295,
    height: 640
  },
  {
    id: 'history',
    filename: '769.png',
    title: 'Historial completo',
    description: 'Accede a todo tu historial financiero con filtros avanzados y búsqueda inteligente.',
    icon: History,
    category: 'iphone',
    width: 295,
    height: 640
  },
  {
    id: 'goals',
    filename: '869.png',
    title: 'Metas de ahorro',
    description: 'Define objetivos de ahorro realistas y sigue tu progreso con motivación visual.',
    icon: Target,
    category: 'iphone',
    width: 295,
    height: 640
  },
  {
    id: 'settings',
    filename: '969.png',
    title: 'Configuración completa',
    description: 'Personaliza completamente la aplicación con configuraciones avanzadas y preferencias.',
    icon: Settings,
    category: 'iphone',
    width: 295,
    height: 640
  },
  {
    id: 'dashboard',
    filename: '1069.png',
    title: 'Dashboard intuitivo',
    description: 'Panel principal con toda tu información financiera organizada de forma clara y accesible.',
    icon: Monitor,
    category: 'iphone',
    width: 295,
    height: 640
  }
];
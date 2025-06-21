'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Clock, BookOpen, Users, Star, ChevronRight } from 'lucide-react';
import ImageLoader from '../ImageLoader';

/**
 * Tutorials Section Component
 * Sección de tutoriales con videos y guías paso a paso
 */

interface Tutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  category: string;
  thumbnail: string;
  videoUrl?: string;
  rating: number;
  views: number;
  steps?: string[];
}

const tutorials: Tutorial[] = [
  {
    id: 'getting-started',
    title: 'Primeros pasos con Hero Budget',
    description: 'Aprende a configurar tu cuenta y realizar tus primeras transacciones en menos de 5 minutos.',
    duration: '4:32',
    difficulty: 'Principiante',
    category: 'Primeros Pasos',
    thumbnail: '/images/69/169.png',
    rating: 4.9,
    views: 12500,
    steps: [
      'Descarga e instala la aplicación',
      'Crea tu cuenta con email o Google/Apple',
      'Configura tu perfil y preferencias',
      'Añade tu primera transacción',
      'Explora las funciones principales'
    ]
  },
  {
    id: 'budgets-mastery',
    title: 'Domina los Presupuestos',
    description: 'Crea presupuestos efectivos que te ayuden a controlar tus gastos y alcanzar tus metas financieras.',
    duration: '7:45',
    difficulty: 'Intermedio',
    category: 'Presupuestos',
    thumbnail: '/images/69/369.png',
    rating: 4.8,
    views: 8900,
    steps: [
      'Entiende los tipos de presupuestos',
      'Crea tu primer presupuesto mensual',
      'Configura alertas y notificaciones',
      'Ajusta presupuestos según tus necesidades',
      'Analiza el rendimiento de tus presupuestos'
    ]
  },
  {
    id: 'savings-goals',
    title: 'Metas de Ahorro Efectivas',
    description: 'Establece y alcanza tus objetivos de ahorro con estrategias probadas y seguimiento automático.',
    duration: '6:18',
    difficulty: 'Intermedio',
    category: 'Ahorro',
    thumbnail: '/images/69/469.png',
    rating: 4.7,
    views: 7200,
    steps: [
      'Define metas SMART de ahorro',
      'Calcula plazos realistas',
      'Configura aportes automáticos',
      'Mantén la motivación con milestones',
      'Celebra cuando alcances tus metas'
    ]
  },
  {
    id: 'advanced-analytics',
    title: 'Análisis Avanzado de Gastos',
    description: 'Utiliza las herramientas de análisis para entender tus patrones de gasto y optimizar tus finanzas.',
    duration: '9:12',
    difficulty: 'Avanzado',
    category: 'Análisis',
    thumbnail: '/images/69/569.png',
    rating: 4.6,
    views: 5400,
    steps: [
      'Interpreta gráficos y reportes',
      'Identifica patrones de gasto',
      'Usa filtros avanzados',
      'Exporta datos para análisis externo',
      'Crea reportes personalizados'
    ]
  },
  {
    id: 'categories-setup',
    title: 'Organización con Categorías',
    description: 'Personaliza y organiza tus categorías para un seguimiento más preciso de tus finanzas.',
    duration: '5:55',
    difficulty: 'Principiante',
    category: 'Organización',
    thumbnail: '/images/69/669.png',
    rating: 4.8,
    views: 9800,
    steps: [
      'Entiende las categorías predefinidas',
      'Crea categorías personalizadas',
      'Organiza subcategorías',
      'Asigna iconos y colores',
      'Optimiza tu sistema de categorías'
    ]
  },
  {
    id: 'data-security',
    title: 'Seguridad y Privacidad',
    description: 'Aprende a proteger tus datos financieros y configurar las opciones de seguridad avanzadas.',
    duration: '8:30',
    difficulty: 'Avanzado',
    category: 'Seguridad',
    thumbnail: '/images/69/769.png',
    rating: 4.9,
    views: 6700,
    steps: [
      'Configura autenticación de dos factores',
      'Entiende la encriptación de datos',
      'Gestiona copias de seguridad',
      'Controla la privacidad de tu información',
      'Mejores prácticas de seguridad'
    ]
  }
];

const categories = ['Todos', 'Primeros Pasos', 'Presupuestos', 'Ahorro', 'Análisis', 'Organización', 'Seguridad'];

const difficultyColors = {
  'Principiante': 'bg-green-100 text-green-700',
  'Intermedio': 'bg-yellow-100 text-yellow-700',
  'Avanzado': 'bg-red-100 text-red-700'
};

export default function TutorialsSection() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const filteredTutorials = tutorials.filter(tutorial => 
    activeCategory === 'Todos' || tutorial.category === activeCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section 
      id="tutorials"
      ref={ref} 
      className="section-padding relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at top right, rgba(76, 175, 80, 0.03) 0%, transparent 50%),
          radial-gradient(ellipse at bottom left, rgba(233, 30, 99, 0.03) 0%, transparent 50%),
          linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)
        `
      }}
    >
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8"
            style={{
              background: `
                linear-gradient(135deg, 
                  #333333 0%, 
                  #4caf50 30%, 
                  #e91e63 70%, 
                  #333333 100%
                )`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            variants={itemVariants}
          >
            Tutoriales y Guías
          </motion.h2>
          
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Aprende a sacar el máximo provecho de Hero Budget con nuestros tutoriales paso a paso
          </motion.p>
        </motion.div>

        {/* Filtros de categoría */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
              style={{
                border: activeCategory === category ? 'none' : '1px solid rgba(0, 0, 0, 0.1)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de tutoriales */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredTutorials.map((tutorial) => (
            <motion.div
              key={tutorial.id}
              className="group cursor-pointer rounded-3xl overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
              }}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
              }}
              onClick={() => setSelectedTutorial(tutorial)}
            >
              {/* Thumbnail con overlay de play */}
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <ImageLoader
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Play className="w-6 h-6 text-gray-800 ml-1" />
                  </motion.div>
                </div>

                {/* Duration badge */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {tutorial.duration}
                </div>

                {/* Difficulty badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[tutorial.difficulty]}`}>
                  {tutorial.difficulty}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-green-600 font-semibold mb-2">
                  {tutorial.category}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {tutorial.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {tutorial.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{tutorial.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{tutorial.views.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal de tutorial detallado */}
        {selectedTutorial && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedTutorial(null)}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-sm text-green-600 font-semibold mb-2">
                      {selectedTutorial.category}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedTutorial.title}
                    </h3>
                    <p className="text-gray-600">
                      {selectedTutorial.description}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => setSelectedTutorial(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                {selectedTutorial.steps && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Lo que aprenderás:
                    </h4>
                    <div className="space-y-3">
                      {selectedTutorial.steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{selectedTutorial.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{selectedTutorial.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{selectedTutorial.views.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-4 h-4" />
                    Ver Tutorial
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
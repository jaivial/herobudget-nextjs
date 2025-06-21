"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Target, Receipt, Shield, Smartphone, TrendingUp } from "lucide-react";
import ScrollFloat from "./ScrollFloat";

/**
 * Features Section Component
 * Sección de características con animaciones en scroll
 */

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: BarChart3,
    title: "Seguimiento de Gastos",
    description: "Registra y categoriza tus gastos de forma automática para entender mejor tus hábitos financieros.",
    color: "text-blue-500",
  },
  {
    icon: Target,
    title: "Metas de Ahorro",
    description: "Establece objetivos de ahorro realistas y recibe notificaciones para mantener tu progreso.",
    color: "text-green-500",
  },
  {
    icon: Receipt,
    title: "Facturas recurrentes",
    description: "Programa y gestiona tus facturas recurrentes para nunca olvidar ningún pago.",
    color: "text-yellow-500",
  },
  {
    icon: Shield,
    title: "Datos Seguros",
    description: "Tu información financiera está protegida con medidas de seguridad avanzadas.",
    color: "text-red-500",
  },
  {
    icon: Smartphone,
    title: "Interfaz Intuitiva",
    description: "Diseño simple y elegante que hace que gestionar dinero sea fácil y agradable.",
    color: "text-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Reportes Visuales",
    description: "Gráficos claros que muestran tu progreso financiero de un vistazo.",
    color: "text-primary-500",
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="caracteristicas" ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-liquid-gradient-2 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-liquid-gradient-1 rounded-full opacity-10 translate-x-1/2 translate-y-1/2 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 270, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div className="text-center mb-16" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <ScrollFloat containerClassName="mb-6" textClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900" animationDuration={1.2} ease="back.inOut(2)" scrollStart="center bottom+=30%" scrollEnd="bottom bottom-=50%" stagger={0.02}>
            ¿Por qué elegir Hero Budget?
          </ScrollFloat>
          <motion.p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto" variants={titleVariants}>
            Descubre las características que hacen de Hero Budget la mejor opción para gestionar tus finanzas personales
          </motion.p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;

            return (
              <motion.div
                key={index}
                className="feature-card group cursor-pointer"
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icono */}
                <motion.div className="mb-6 relative" variants={iconVariants} whileHover="hover">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>

                  {/* Resplandor del icono */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg`}
                    style={{
                      background: `radial-gradient(circle, ${feature.color.includes("primary") ? "#e91e63" : feature.color.includes("blue") ? "#3b82f6" : feature.color.includes("green") ? "#10b981" : feature.color.includes("yellow") ? "#f59e0b" : feature.color.includes("red") ? "#ef4444" : feature.color.includes("purple") ? "#8b5cf6" : "#e91e63"}, transparent)`,
                    }}
                  />
                </motion.div>

                {/* Contenido */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>

                {/* Indicador de hover */}
                <motion.div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 group-hover:w-3/4 transition-all duration-300 transform -translate-x-1/2 rounded-full" initial={{ width: 0 }} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Estadísticas adicionales */}
        <motion.div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-md mx-auto" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8, delay: 0.6 }}>
          {[
            { number: "30+", label: "Idiomas Disponibles" },
            { number: "100%", label: "Completamente Gratis" },
          ].map((stat, index) => (
            <motion.div key={index} className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <motion.div
                className="stat-number"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {stat.number}
              </motion.div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

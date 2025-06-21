"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Lock, Key, Server, Eye, AlertTriangle, CheckCircle, Globe } from "lucide-react";

/**
 * Data Protection Section Component
 * Sección dedicada a las medidas de protección de datos y seguridad
 */

interface SecurityMeasure {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  level: "basic" | "advanced" | "enterprise";
  color: string;
}

const securityMeasures: SecurityMeasure[] = [
  {
    id: "encryption",
    title: "Almacenamiento Local Seguro",
    description: "Tus datos se almacenan de forma segura en tu dispositivo, sin transmisión automática a servidores externos.",
    icon: Lock,
    level: "enterprise",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "authentication",
    title: "Autenticación Multifactor",
    description: "Protección adicional con autenticación de dos factores opcional para asegurar el acceso a tu cuenta.",
    icon: Key,
    level: "advanced",
    color: "from-green-500 to-green-600",
  },
  {
    id: "infrastructure",
    title: "Simplicidad y Transparencia",
    description: "Mantenemos un modelo simple: tus datos permanecen en tu dispositivo, con sincronización opcional segura.",
    icon: Server,
    level: "enterprise",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "privacy",
    title: "Privacidad por Diseño",
    description: "Implementamos principios de privacidad desde el desarrollo, minimizando la recopilación de datos.",
    icon: Eye,
    level: "advanced",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: "monitoring",
    title: "Control Total del Usuario",
    description: "Tienes control completo sobre tus datos, puedes exportarlos o eliminarlos cuando desees.",
    icon: AlertTriangle,
    level: "enterprise",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "compliance",
    title: "Cumplimiento Básico",
    description: "Seguimos principios básicos de protección de datos y respetamos los derechos de privacidad de los usuarios.",
    icon: Globe,
    level: "enterprise",
    color: "from-teal-500 to-teal-600",
  },
];

const certifications = [
  {
    name: "Protección Básica",
    description: "Implementamos medidas básicas de protección de datos personales",
    icon: CheckCircle,
    verified: true,
  },
  {
    name: "Almacenamiento Local",
    description: "Los datos se mantienen principalmente en tu dispositivo",
    icon: Shield,
    verified: true,
  },
  {
    name: "Transparencia",
    description: "Políticas claras sobre qué datos recopilamos y cómo los usamos",
    icon: Lock,
    verified: true,
  },
  {
    name: "Control del Usuario",
    description: "Facilidades para que el usuario controle sus propios datos",
    icon: Key,
    verified: true,
  },
];

export default function DataProtectionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "basic":
        return "bg-gray-100 text-gray-700";
      case "advanced":
        return "bg-blue-100 text-blue-700";
      case "enterprise":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case "basic":
        return "Básico";
      case "advanced":
        return "Avanzado";
      case "enterprise":
        return "Empresarial";
      default:
        return "Básico";
    }
  };

  return (
    <section
      id="protection"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at top right, rgba(16, 185, 129, 0.03) 0%, transparent 50%),
          radial-gradient(ellipse at bottom left, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
          linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)
        `,
      }}
    >
      <div className="container-custom relative z-10">
        <motion.div className="text-center mb-16" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8"
            style={{
              background: `
                linear-gradient(135deg, 
                  #10b981 0%, 
                  #059669 30%, 
                  #3b82f6 70%, 
                  #1e40af 100%
                )`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            variants={itemVariants}
          >
            Protección de Datos
          </motion.h2>

          <motion.p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed" variants={itemVariants}>
            Implementamos las medidas de seguridad más avanzadas para proteger tu información financiera
          </motion.p>
        </motion.div>

        {/* Medidas de seguridad */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {securityMeasures.map((measure) => {
            const IconComponent = measure.icon;

            return (
              <motion.div
                key={measure.id}
                className="group relative p-8 rounded-3xl cursor-pointer transition-all duration-500"
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                }}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                }}
              >
                {/* Nivel de seguridad badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(measure.level)}`}>{getLevelText(measure.level)}</div>

                {/* Icono con gradiente */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${measure.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Contenido */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{measure.title}</h3>

                <p className="text-gray-600 leading-relaxed">{measure.description}</p>

                {/* Efecto de brillo al hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        rgba(16, 185, 129, 0.05) 0%, 
                        transparent 50%, 
                        rgba(59, 130, 246, 0.05) 100%
                      )
                    `,
                    filter: "blur(1px)",
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Certificaciones y cumplimiento */}
        <motion.div className="max-w-4xl mx-auto" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Principios de Protección</h3>
            <p className="text-xl text-gray-600 leading-relaxed">Nuestro enfoque de protección de datos se basa en principios simples y transparentes</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-6" variants={containerVariants}>
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;

              return (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100"
                  style={{
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                  }}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${cert.verified ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{cert.name}</h4>
                      {cert.verified ? <CheckCircle className="w-5 h-5 text-green-500" /> : <div className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">En proceso</div>}
                    </div>
                    <p className="text-gray-600 text-sm">{cert.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Sección de transparencia */}
        <motion.div className="text-center mt-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8, delay: 0.5 }}>
          <div
            className="inline-block p-8 rounded-3xl max-w-3xl mx-auto"
            style={{
              background: "rgba(16, 185, 129, 0.05)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(16, 185, 129, 0.1)",
            }}
          >
            <Shield className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Compromiso con la Transparencia</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">Creemos en la transparencia total. Si tienes preguntas sobre cómo protegemos tus datos o quieres más detalles sobre nuestras medidas de seguridad, estamos aquí para ayudarte.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="#contact" className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Contactar Equipo de Seguridad
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

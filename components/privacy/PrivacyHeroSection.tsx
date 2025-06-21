'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Calendar } from 'lucide-react';
import { gsap } from 'gsap';

/**
 * Privacy Hero Section Component
 * Hero section para la página de privacidad con elementos de seguridad
 */

export default function PrivacyHeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const shieldRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      // Animación del escudo central
      gsap.to(shieldRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });

      // Animación de partículas de seguridad
      const particles = heroRef.current?.querySelectorAll('[data-security-particle]');
      if (particles) {
        particles.forEach((particle, index) => {
          gsap.to(particle, {
            y: `random(-40, 40)`,
            x: `random(-30, 30)`,
            rotation: `random(-180, 180)`,
            scale: `random(0.8, 1.2)`,
            duration: `random(5, 10)`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.4
          });
        });
      }

      // Animación de pulso en elementos de seguridad
      const securityElements = heroRef.current?.querySelectorAll('[data-security-glow]');
      if (securityElements) {
        securityElements.forEach((element, index) => {
          gsap.timeline({ repeat: -1, delay: index * 0.5 })
            .to(element, { scale: 1.1, opacity: 1, duration: 1.5, ease: "power2.inOut" })
            .to(element, { scale: 1, opacity: 0.6, duration: 1.5, ease: "power2.inOut" });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, [isInView]);

  const securityFeatures = [
    {
      icon: Shield,
      title: 'Protección Total',
      description: 'Encriptación de grado militar'
    },
    {
      icon: Lock,
      title: 'Datos Seguros',
      description: 'Almacenamiento encriptado'
    },
    {
      icon: Eye,
      title: 'Transparencia',
      description: 'Control total de tu información'
    }
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: `
          radial-gradient(ellipse at top center, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse at bottom center, rgba(16, 185, 129, 0.06) 0%, transparent 50%),
          linear-gradient(135deg, #fafafa 0%, #ffffff 25%, #f8f9fa 50%, #ffffff 75%, #fafafa 100%)
        `
      }}
    >
      {/* Partículas de seguridad flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            data-security-particle
            className="absolute rounded-full opacity-20"
            style={{
              width: `${4 + (i % 3)}px`,
              height: `${4 + (i % 3)}px`,
              background: i % 4 === 0 
                ? 'rgba(59, 130, 246, 0.8)' 
                : i % 4 === 1 
                ? 'rgba(16, 185, 129, 0.7)' 
                : i % 4 === 2
                ? 'rgba(139, 92, 246, 0.6)'
                : 'rgba(6, 182, 212, 0.8)',
              left: `${5 + (i * 4.5)}%`,
              top: `${10 + (i * 4)}%`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Elementos de fondo con glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          data-security-glow
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-10"
          style={{
            background: `
              radial-gradient(circle, 
                rgba(59, 130, 246, 0.3) 0%, 
                rgba(16, 185, 129, 0.2) 50%, 
                transparent 70%
              )
            `,
            filter: 'blur(40px)'
          }}
        />
        <div
          data-security-glow
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full opacity-8"
          style={{
            background: `
              radial-gradient(circle, 
                rgba(16, 185, 129, 0.2) 0%, 
                rgba(139, 92, 246, 0.15) 50%, 
                transparent 70%
              )
            `,
            filter: 'blur(60px)'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Calendar className="w-4 h-4" />
              Actualizado: Diciembre 2024
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight"
              style={{
                background: `
                  linear-gradient(135deg, 
                    #1e40af 0%, 
                    #3b82f6 25%, 
                    #10b981 50%, 
                    #059669 75%, 
                    #1e40af 100%
                  )`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '300% 300%',
                animation: 'gradientShift 8s ease-in-out infinite'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Tu Privacidad es{' '}
              <span className="block lg:inline">Nuestra Prioridad</span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              En Hero Budget, protegemos tu información financiera con los más altos 
              estándares de seguridad y transparencia. Conoce cómo cuidamos tus datos.
            </motion.p>

            {/* Quick stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { number: '256-bit', label: 'Encriptación' },
                { number: '100%', label: 'Privacidad' },
                { number: 'GDPR', label: 'Cumplimiento' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-black text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                href="#policy"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Leer Política
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.a>
              
              <motion.a
                href="#rights"
                className="group relative border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(59, 130, 246, 1)',
                  color: 'white'
                }}
                whileTap={{ scale: 0.98 }}
              >
                Mis Derechos
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Visualización de seguridad */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              {/* Escudo central animado */}
              <div className="relative z-20">
                <motion.div
                  ref={shieldRef}
                  className="w-64 h-64 lg:w-80 lg:h-80 rounded-full flex items-center justify-center"
                  style={{
                    background: `
                      conic-gradient(from 0deg, 
                        rgba(59, 130, 246, 0.2) 0deg,
                        rgba(16, 185, 129, 0.3) 120deg,
                        rgba(139, 92, 246, 0.2) 240deg,
                        rgba(59, 130, 246, 0.2) 360deg
                      )
                    `,
                    backdropFilter: 'blur(20px)',
                    border: '2px solid rgba(59, 130, 246, 0.3)'
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Shield className="w-32 h-32 lg:w-40 lg:h-40 text-blue-500" strokeWidth={1} />
                </motion.div>
              </div>

              {/* Features orbitales */}
              {securityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                const angle = (index * 120) * (Math.PI / 180);
                const radius = 140;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={index}
                    className="absolute z-10"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [0.9, 1.1, 0.9]
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }
                    }}
                  >
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center text-center p-2"
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)'
                      }}
                    >
                      <div className="text-center">
                        <IconComponent className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                        <div className="text-xs font-semibold text-gray-700 leading-tight">
                          {feature.title}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Anillos de seguridad */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 border border-blue-200 rounded-full opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-[28rem] h-[28rem] -translate-x-1/2 -translate-y-1/2 border border-emerald-200 rounded-full opacity-20"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}
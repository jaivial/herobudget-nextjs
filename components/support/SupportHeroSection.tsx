'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';

/**
 * Support Hero Section Component
 * Hero section simplificado para la página de soporte con solo título y subtítulo
 */

export default function SupportHeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      // Animación de partículas de fondo
      const particles = heroRef.current?.querySelectorAll('[data-particle]');
      if (particles) {
        particles.forEach((particle, index) => {
          gsap.to(particle, {
            y: `random(-30, 30)`,
            x: `random(-20, 20)`,
            rotation: `random(-180, 180)`,
            duration: `random(4, 8)`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.3
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, [isInView]);

  return (
    <section
      ref={heroRef}
      className="relative h-96 flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: `
          radial-gradient(ellipse at top center, rgba(233, 30, 99, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse at bottom center, rgba(76, 175, 80, 0.06) 0%, transparent 50%),
          linear-gradient(135deg, #fafafa 0%, #ffffff 25%, #f8f9fa 50%, #ffffff 75%, #fafafa 100%)
        `
      }}
    >
      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            data-particle
            className="absolute w-2 h-2 rounded-full opacity-30"
            style={{
              background: i % 3 === 0 
                ? 'rgba(233, 30, 99, 0.6)' 
                : i % 3 === 1 
                ? 'rgba(76, 175, 80, 0.5)' 
                : 'rgba(59, 130, 246, 0.5)',
              left: `${15 + (i * 10)}%`,
              top: `${20 + (i * 8)}%`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6"
            style={{
              background: `
                linear-gradient(135deg, 
                  #333333 0%, 
                  #e91e63 25%, 
                  #4caf50 50%, 
                  #3b82f6 75%, 
                  #333333 100%
                )`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '300% 300%',
              animation: 'gradientShift 8s ease-in-out infinite'
            }}
          >
            Centro de Soporte
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ¿En qué podemos ayudarte hoy? Encuentra respuestas a tus preguntas 
            y obtén la ayuda que necesitas para usar Hero Budget.
          </p>
        </motion.div>
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
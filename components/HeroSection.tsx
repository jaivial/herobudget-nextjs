"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";

/**
 * Hero Section Component
 * Sección principal con fondo moderno y animaciones avanzadas usando GSAP + Framer Motion
 */

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const morphingRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(heroRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      // Timeline principal
      const tl = gsap.timeline();

      // Animación del fondo morfing
      gsap.to(morphingRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      gsap.to(gradientRef.current, {
        rotation: -360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });

      // Animaciones de entrada
      tl.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })
        .from(
          subtitleRef.current,
          {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .from(
          buttonsRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          iconRef.current,
          {
            scale: 0.8,
            opacity: 0,
            rotation: -15,
            duration: 1.2,
            ease: "back.out(1.7)",
          },
          "-=1"
        );

      // Animación flotante del ícono
      gsap.to(iconRef.current, {
        y: -15,
        rotation: 3,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      // Animación de partículas flotantes
      const particles = particlesRef.current?.children;
      if (particles) {
        Array.from(particles).forEach((particle, index) => {
          gsap.to(particle, {
            y: `random(-20, 20)`,
            x: `random(-15, 15)`,
            rotation: `random(-180, 180)`,
            scale: `random(0.8, 1.2)`,
            duration: `random(3, 6)`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2,
          });
        });
      }

      // Efecto de respiración en el fondo
      gsap.to(heroRef.current, {
        "--bg-scale": "1.05",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, [isInView]);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const headerHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[70px] md:pt-[100px]"
      style={{
        background: `
          radial-gradient(ellipse at top, rgba(233, 30, 99, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse at bottom, rgba(76, 175, 80, 0.08) 0%, transparent 50%),
          linear-gradient(135deg, #fafafa 0%, #ffffff 25%, #f9f9f9 50%, #ffffff 75%, #fafafa 100%)
        `,
        backgroundSize: "var(--bg-scale, 1) var(--bg-scale, 1)",
        backgroundPosition: "center",
      }}
    >
      {/* Fondo animado morfing */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={morphingRef}
          className="absolute -top-1/4 -right-1/4 w-[150%] h-[150%] opacity-30"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(233, 30, 99, 0.15) 0%, transparent 40%),
              radial-gradient(circle at 70% 70%, rgba(76, 175, 80, 0.12) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, rgba(244, 143, 177, 0.1) 0%, transparent 50%)
            `,
          }}
        />
        <div
          ref={gradientRef}
          className="absolute -bottom-1/4 -left-1/4 w-[150%] h-[150%] opacity-20"
          style={{
            background: `
              conic-gradient(from 0deg at 50% 50%, 
                rgba(233, 30, 99, 0.1) 0deg,
                rgba(76, 175, 80, 0.08) 90deg,
                rgba(244, 143, 177, 0.12) 180deg,
                rgba(233, 30, 99, 0.1) 270deg,
                rgba(233, 30, 99, 0.1) 360deg
              )
            `,
          }}
        />
      </div>

      {/* Partículas flotantes */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 3 === 0 ? "rgba(233, 30, 99, 0.6)" : i % 3 === 1 ? "rgba(76, 175, 80, 0.5)" : "rgba(244, 143, 177, 0.7)",
              left: `${10 + i * 8}%`,
              top: `${20 + i * 6}%`,
              filter: "blur(0.5px)",
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenido de texto */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1
              ref={titleRef}
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight"
              style={{
                background: `
                  linear-gradient(135deg, 
                    #333333 0%, 
                    #e91e63 25%, 
                    #333333 50%, 
                    #4caf50 75%, 
                    #333333 100%
                  )`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "300% 300%",
                animation: "gradientShift 8s ease-in-out infinite",
              }}
            >
              Toma Control de <span className="block lg:inline">tus Finanzas</span>
            </h1>

            <p ref={subtitleRef} className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Hero Budget es la app que necesitas para gestionar tus gastos, crear presupuestos inteligentes y alcanzar tus metas de ahorro.
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <motion.button
                className="group relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-primary transition-all duration-300 hover:shadow-primary-lg hover:scale-105"
                onClick={() => handleScrollToSection("#descargas")}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(233, 30, 99, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Descargar Ahora</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>

              <motion.button
                className="group relative border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
                onClick={() => handleScrollToSection("#caracteristicas")}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(233, 30, 99, 1)",
                  color: "white",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Conocer más
              </motion.button>
            </div>

            <motion.div className="flex gap-4 mt-4 mx-auto ml-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2 }}>
              <motion.a href="https://apps.apple.com/us/app/hero-budget/id6746946502" className="block w-44 h-24 relative" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Image src="/app-play-store/appstorebutton.png" alt="Descargar en App Store" fill className="object-contain" sizes="128px" />
              </motion.a>
              <motion.a href="#descargas" className="block w-48 h-24 relative" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Image src="/app-play-store/playstorebutton.png" alt="Descargar en Google Play" fill className="object-contain" sizes="128px" />
              </motion.a>
            </motion.div>
          </div>

          {/* Imagen del héroe con efectos avanzados */}
          <div className="relative flex justify-center items-center order-1 lg:order-2">
            <div className="relative">
              {/* Resplandor principal */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-80 sm:w-96 lg:w-[28rem] h-80 sm:h-96 lg:h-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background: `
                    radial-gradient(circle, 
                      rgba(233, 30, 99, 0.2) 0%, 
                      rgba(76, 175, 80, 0.1) 40%, 
                      transparent 70%
                    )
                  `,
                  filter: "blur(40px)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Ícono principal */}
              <div
                ref={iconRef}
                className="relative z-10 w-56 sm:w-64 lg:w-80 h-56 sm:h-64 lg:h-80"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(233, 30, 99, 0.3))",
                }}
              >
                <Image src="/herobudgeticon.png" alt="Hero Budget App Icon" fill className="object-contain" priority sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 320px" />
              </div>

              {/* Anillos orbitales */}
              <motion.div className="absolute top-1/2 left-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2 border-2 border-primary-200 rounded-full opacity-30" animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
              <motion.div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 border border-accent-300 rounded-full opacity-20" animate={{ rotate: -360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
            </div>

            {/* Botones de descarga de apps */}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}

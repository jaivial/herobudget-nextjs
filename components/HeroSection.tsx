"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import { heroAnimationConfig, handleScrollToSection, heroBackgroundStyles, heroTextStyles, particlesConfig, gradientKeyframes, type HeroSectionRefs } from "./HeroSection_part2";
import { getHeroSectionTranslations, type HeroSectionTranslations } from "@/lib/i18n/translations/translation-loader";

/**
 * Hero Section Component - PARTE 1/2
 * Sección principal con fondo moderno y animaciones avanzadas usando GSAP + Framer Motion
 * Funciones auxiliares en HeroSection_part2.tsx
 * Soporte multiidioma con traducciones dinámicas
 */

export default function HeroSection() {
  const pathname = usePathname();
  const [translations, setTranslations] = useState<HeroSectionTranslations>({
    title: "Take Control of Your Finances",
    subtitle: "Hero Budget is the app you need to manage your expenses, create smart budgets and achieve your savings goals.",
    primaryButton: "Download Now",
    secondaryButton: "Learn More",
    appStoreAlt: "Download on App Store",
  });
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const morphingRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(heroRef, { once: true, amount: 0.2 });

  // Load translations based on current locale
  useEffect(() => {
    const pathParts = pathname.split('/').filter(Boolean);
    let locale = 'en_GB'; // Default locale

    // Detect locale from URL
    if (pathParts.length >= 1 && pathParts[0].includes('_')) {
      locale = pathParts[0];
    }

    console.log('[HeroSection] Detected locale from pathname:', pathname, '→', locale);

    // Load translations for the detected locale
    try {
      const t = getHeroSectionTranslations(locale);
      console.log('[HeroSection] Loaded translations:', t);
      setTranslations(t);
    } catch (error) {
      console.error('[HeroSection] Error loading translations:', error);
      // Fallback to English if there's an error
      setTranslations({
        title: "Take Control of Your Finances",
        subtitle: "Hero Budget is the app you need to manage your expenses, create smart budgets and achieve your savings goals.",
        primaryButton: "Download Now",
        secondaryButton: "Learn More",
        appStoreAlt: "Download on App Store",
      });
    }
  }, [pathname]);

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      // Timeline principal
      const tl = gsap.timeline();

      // Animación del fondo morfing
      gsap.to(morphingRef.current, heroAnimationConfig.morphing);
      gsap.to(gradientRef.current, heroAnimationConfig.gradient);

      // Animaciones de entrada
      tl.from(titleRef.current, heroAnimationConfig.timeline.title)
        .from(subtitleRef.current, heroAnimationConfig.timeline.subtitle, heroAnimationConfig.timeline.subtitle.delay)
        .from(buttonsRef.current, heroAnimationConfig.timeline.buttons, heroAnimationConfig.timeline.buttons.delay)
        .from(iconRef.current, heroAnimationConfig.timeline.icon, heroAnimationConfig.timeline.icon.delay);

      // Animación flotante del ícono
      gsap.to(iconRef.current, heroAnimationConfig.floating);

      // Animación de partículas flotantes
      const particles = particlesRef.current?.children;
      if (particles) {
        Array.from(particles).forEach((particle, index) => {
          gsap.to(particle, {
            ...heroAnimationConfig.particles,
            delay: index * 0.2,
          });
        });
      }

      // Efecto de respiración en el fondo
      gsap.to(heroRef.current, heroAnimationConfig.breathing);
    }, heroRef);

    return () => ctx.revert();
  }, [isInView]);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[180px] sm:pt-[70px] md:pt-[100px]"
      style={{
        background: heroBackgroundStyles.main,
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
            background: heroBackgroundStyles.morphing,
          }}
        />
        <div
          ref={gradientRef}
          className="absolute -bottom-1/4 -left-1/4 w-[150%] h-[150%] opacity-20"
          style={{
            background: heroBackgroundStyles.gradient,
          }}
        />
      </div>

      {/* Partículas flotantes */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(particlesConfig.count)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: particlesConfig.getColor(i),
              ...particlesConfig.getPosition(i),
              filter: "blur(0.5px)",
            }}
            animate={{
              scale: particlesConfig.animation.scale,
              opacity: particlesConfig.animation.opacity,
            }}
            transition={{
              duration: particlesConfig.animation.duration(i),
              repeat: Infinity,
              ease: "easeInOut",
              delay: particlesConfig.animation.delay(i),
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenido de texto */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 ref={titleRef} className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight" style={heroTextStyles}>
              {translations.title}
            </h1>

            <p ref={subtitleRef} className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {translations.subtitle}
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
                <span className="relative z-10">{translations.primaryButton}</span>
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
                {translations.secondaryButton}
              </motion.button>
            </div>

            <motion.div className="flex gap-4 mt-4 lg:w-[82%] justify-start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2 }}>
              <motion.a href="https://apps.apple.com/us/app/hero-budget/id6746946502" className="block w-44 h-24 relative justify-center mx-auto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Image src="/app-play-store/appstorebutton.png" alt={translations.appStoreAlt} fill className="object-contain" sizes="128px" />
              </motion.a>
              {/* <motion.a href="#descargas" className="block w-48 h-24 relative" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Image src="/app-play-store/playstorebutton.png" alt="Descargar en Google Play" fill className="object-contain" sizes="128px" />
              </motion.a> */}
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
                <Image src="https://herobudgetapp.jaimedigitalstudio.com/herobudgeticon.png" alt="Hero Budget App Icon" fill className="object-contain" priority quality={95} sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 320px" />
              </div>

              {/* Anillos orbitales */}
              <motion.div className="absolute top-1/2 left-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2 border-2 border-primary-200 rounded-full opacity-30" animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
              <motion.div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 border border-accent-300 rounded-full opacity-20" animate={{ rotate: -360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
            </div>

            {/* Botones de descarga de apps */}
          </div>
        </div>
      </div>

      <style jsx>{gradientKeyframes}</style>
    </section>
  );
}

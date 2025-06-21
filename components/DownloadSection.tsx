"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Stack from "./Stack";
import StarBorder from "./StarBorder";
import Image from "next/image";
import { downloadStats, appImages, containerVariants, itemVariants, sectionBackgroundStyles, decorativeAnimationConfig, statsCardStyles, titleGradientStyles, responsiveConfig, floatingElementsConfig, gradientKeyframes, stackConfig, type CounterProps } from "./DownloadSection_part2";

/**
 * Download Section Component - PARTE 1/2
 * Sección de descarga con stack de imágenes y rotación automática
 * Configuración y datos auxiliares en DownloadSection_part2.tsx
 */

function AnimatedCounter({ end, duration, suffix = "", decimal = false }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentCount = easedProgress * end;

        setCount(decimal ? Math.round(currentCount * 10) / 10 : Math.floor(currentCount));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {decimal ? count.toFixed(1) : count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function DownloadSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Efecto para manejar el resize de pantalla
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Establecer ancho inicial
    setScreenWidth(window.innerWidth);

    // Agregar listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="descargas"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 relative overflow-hidden min-h-screen"
      style={{
        minHeight: responsiveConfig.getMinHeight(screenWidth),
        background: sectionBackgroundStyles.main,
      }}
    >
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-15"
          style={{
            background: sectionBackgroundStyles.decorative,
            filter: "blur(60px)",
          }}
          animate={decorativeAnimationConfig.animate}
          transition={decorativeAnimationConfig.transition}
        />
      </div>

      <div className="container-custom relative z-10 h-full flex items-center">
        <motion.div className="flex flex-col lg:flex-row flex-col-reverse lg:flex-row gap-56 sm:gap-52 md:gap-36 lg:gap-20 items-center justify-center w-full" variants={containerVariants} initial="hidden" animate={controls}>
          {/* Contenido principal */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8 flex-1 lg:max-w-2xl px-4 sm:px-6 lg:px-0">
            <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center lg:text-left mb-8 sm:mb-12 lg:mb-16 leading-tight" style={titleGradientStyles}>
              <span className="block lg:inline">Descarga </span>Hero Budget
            </h2>

            <motion.p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 leading-relaxed text-center lg:text-left my-0" variants={itemVariants}>
              Disponible para iOS y Android. Aplicación completamente gratuita disponible en más de 30 idiomas para usuarios de todo el mundo.
            </motion.p>

            {/* Estadísticas mejoradas */}
            <motion.div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0" style={statsCardStyles} variants={itemVariants}>
              {downloadStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="flex justify-center mb-2 sm:mb-3"
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                      </div>
                    </motion.div>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-primary-600 mb-1 sm:mb-2">
                      <AnimatedCounter end={stat.number} duration={stat.duration} suffix={stat.suffix} decimal={stat.decimal} />
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Botones de descarga con StarBorder */}
            <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 lg:mb-12 items-center justify-center lg:justify-start" variants={itemVariants}>
              <StarBorder as="a" href="https://apps.apple.com/us/app/hero-budget/id6746946502" target="_blank" rel="noopener noreferrer" className="-" color="magenta" speed="5s" thickness={10}>
                <Image src="/app-play-store/appstorebutton.png" alt="Descárgalo en el App Store" width={200} height={60} className="h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 w-auto" />
              </StarBorder>

              <StarBorder as="button" href="#" className="-" color="magenta" speed="5s" thickness={10}>
                <Image src="/app-play-store/playstorebutton.png" alt="Disponible en Google Play" width={200} height={60} className="h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 w-auto" />
              </StarBorder>
            </motion.div>
          </motion.div>

          {/* Stack de imágenes interactivo */}
          <motion.div
            className={`relative flex justify-center items-center flex-1 lg:flex-none mt-12 sm:mt-8 lg:mt-0`}
            variants={itemVariants}
            style={{
              // Centrar y limitar el espacio disponible
              maxWidth: screenWidth < 500 ? `${screenWidth - 60}px` : "none",
              margin: screenWidth < 500 ? "0 auto" : "initial",
            }}
          >
            <div
              className="relative flex justify-center"
              style={{
                transform: responsiveConfig.getStackScale(screenWidth),
                marginRight: responsiveConfig.getMarginRight(screenWidth),
              }}
            >
              <Stack {...stackConfig} cardDimensions={{ width: 280 }} cardsData={appImages} />
            </div>

            {/* Efectos flotantes alrededor del stack ajustados */}
            <motion.div className={floatingElementsConfig.primary.className} animate={floatingElementsConfig.primary.animate} transition={floatingElementsConfig.primary.transition} />

            <motion.div className={floatingElementsConfig.secondary.className} animate={floatingElementsConfig.secondary.animate} transition={floatingElementsConfig.secondary.transition} />
          </motion.div>
        </motion.div>
      </div>
      <style jsx>{gradientKeyframes}</style>
    </section>
  );
}

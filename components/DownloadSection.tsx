"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Download, Users, Star, Globe } from "lucide-react";
import Stack from "./Stack";
import ScrollFloat from "./ScrollFloat";
import StarBorder from "./StarBorder";
import Image from "next/image";

/**
 * Download Section Component
 * Sección de descarga con stack de imágenes y rotación automática
 */

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  decimal?: boolean;
}

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

  // Imágenes para el stack interactivo
  const appImages = [
    { id: 1, img: "/images/69/169.png", alt: "Hero Budget - Dashboard" },
    { id: 2, img: "/images/69/269.png", alt: "Hero Budget - Gastos" },
    { id: 3, img: "/images/69/369.png", alt: "Hero Budget - Presupuestos" },
    { id: 4, img: "/images/69/469.png", alt: "Hero Budget - Análisis" },
    { id: 5, img: "/images/69/569.png", alt: "Hero Budget - Categorías" },
    { id: 6, img: "/images/69/669.png", alt: "Hero Budget - Reportes" },
  ];

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  const stats = [
    {
      icon: Globe,
      number: 30,
      suffix: "+",
      label: "Idiomas",
      duration: 2,
      decimal: false,
    },

    {
      icon: Star,
      number: 100,
      suffix: "%",
      label: "Gratis",
      duration: 2.2,
      decimal: false,
    },
  ];

  return (
    <section
      id="descargas"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 relative overflow-hidden min-h-screen"
      style={{
        minHeight: screenWidth < 768 ? "127vh" : screenWidth >= 768 && screenWidth < 1024 ? "137vh" : "max(100vh, 800px)",
        background: `
          radial-gradient(ellipse at top right, rgba(233, 30, 99, 0.05) 0%, transparent 50%),
          radial-gradient(ellipse at bottom left, rgba(76, 175, 80, 0.05) 0%, transparent 50%),
          linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)
        `,
      }}
    >
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-15"
          style={{
            background: `
              conic-gradient(from 45deg, 
                rgba(233, 30, 99, 0.1) 0deg,
                rgba(76, 175, 80, 0.08) 120deg,
                rgba(244, 143, 177, 0.12) 240deg,
                rgba(233, 30, 99, 0.1) 360deg
              )
            `,
            filter: "blur(60px)",
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </div>

      <div className="container-custom relative z-10 h-full flex items-center">
        <motion.div className="flex flex-col lg:flex-row flex-col-reverse lg:flex-row gap-56 sm:gap-52 md:gap-36 lg:gap-20 items-center justify-center w-full" variants={containerVariants} initial="hidden" animate={controls}>
          {/* Contenido principal */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8 flex-1 lg:max-w-2xl px-4 sm:px-6 lg:px-0">
            <ScrollFloat containerClassName="mb-0 sm:mb-0 lg:mb-0 text-center" textClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center lg:text-left" animationDuration={1.5} ease="back.inOut(2)" scrollStart="center bottom+=40%" scrollEnd="bottom bottom-=30%" stagger={0.04}>
              Descarga
            </ScrollFloat>
            <ScrollFloat containerClassName="mb-8 sm:mb-12 lg:mb-16 text-center my-0" textClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center lg:text-left my-0" animationDuration={1.5} ease="back.inOut(2)" scrollStart="center bottom+=40%" scrollEnd="bottom bottom-=30%" stagger={0.04}>
              Hero Budget
            </ScrollFloat>

            <motion.p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 leading-relaxed text-center lg:text-left my-0" variants={itemVariants}>
              Disponible para iOS y Android. Aplicación completamente gratuita disponible en más de 30 idiomas para usuarios de todo el mundo.
            </motion.p>

            {/* Estadísticas mejoradas */}
            <motion.div
              className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.06)",
              }}
              variants={itemVariants}
            >
              {stats.map((stat, index) => {
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
                transform:
                  screenWidth < 270
                    ? `scale(0.65)` // Escalado que respeta límites
                    : screenWidth < 280
                    ? `scale(0.7)` // Escalado que respeta límites
                    : screenWidth < 325
                    ? `scale(0.76)` // Escalado que respeta límites
                    : screenWidth < 380
                    ? `scale(0.8)` // Escalado que respeta límites
                    : screenWidth < 400
                    ? `scale(0.85)` // Escalado que respeta límites
                    : screenWidth < 450
                    ? `scale(0.9)` // Escalado que respeta límites
                    : screenWidth < 500
                    ? `scale(${Math.min(1, (screenWidth - 80) / 280)})` // Escalado que respeta límites
                    : screenWidth < 600
                    ? "scale(1.1)"
                    : screenWidth < 640
                    ? "scale(1.1)"
                    : screenWidth < 768
                    ? "scale(1.2)"
                    : screenWidth < 1024
                    ? "scale(1)"
                    : screenWidth < 1180
                    ? "scale(1.05)"
                    : screenWidth < 1280
                    ? "scale(1.09)"
                    : screenWidth < 1440
                    ? "scale(1.1)"
                    : "scale(1.2)",
                marginRight: screenWidth < 380 ? "40px" : screenWidth < 450 ? "50px" : screenWidth < 550 ? "90px" : screenWidth < 600 ? "50px" : screenWidth < 700 ? "50px" : "initial",
              }}
            >
              <Stack
                randomRotation={true}
                sensitivity={150}
                sendToBackOnClick={true}
                cardDimensions={{ width: 280 }} // Ancho fijo, escalado por transform
                cardsData={appImages}
                animationConfig={{ stiffness: 300, damping: 25 }}
                autoRotateInterval={2000}
              />
            </div>

            {/* Efectos flotantes alrededor del stack ajustados */}
            <motion.div
              className="absolute -top-4 sm:-top-6 md:-top-8 -right-4 sm:-right-6 md:-right-8 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600"
              animate={{
                y: [-8, 8, -8],
                x: [-4, 4, -4],
                scale: [0.8, 1.2, 0.8],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -left-4 sm:-left-6 md:-left-8 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-accent-400 to-accent-600"
              animate={{
                scale: [1, 0.7, 1],
                opacity: [0.7, 1, 0.7],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

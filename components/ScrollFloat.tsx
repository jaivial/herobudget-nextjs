"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar el plugin ScrollTrigger para efectos de scroll con GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * Interfaz para definir las propiedades del componente ScrollFloat
 * @interface ScrollFloatProps
 */
interface ScrollFloatProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

/**
 * Componente ScrollFloat
 * 
 * Componente que aplica efectos de animación flotante a texto durante el scroll
 * utilizando GSAP y ScrollTrigger. Divide el texto en caracteres individuales
 * y los anima de forma escalonada para crear un efecto visual atractivo.
 * 
 * @param {ScrollFloatProps} props - Propiedades del componente
 * @returns {JSX.Element} Elemento JSX con animación de scroll flotante
 * 
 * Características principales:
 * - Animación de caracteres individuales con efecto de escala y opacidad
 * - Configuración personalizable de duración, facilidad y triggers de scroll
 * - Soporte para contenedores de scroll personalizados
 * - Efectos de transformación y escala en Y/X para mayor dinamismo
 */
const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03
}: ScrollFloatProps): JSX.Element => {
  // Referencia al contenedor principal para manipulación DOM
  const containerRef = useRef<HTMLHeadingElement>(null);

  /**
   * Memoización del texto dividido en caracteres individuales
   * 
   * Convierte el texto hijo en un array de spans individuales para cada carácter,
   * permitiendo animaciones independientes de cada letra. Los espacios se convierten
   * en espacios no separables (&nbsp;) para mantener el formato.
   */
  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span className="inline-block" key={index}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  /**
   * Effect hook para configurar y ejecutar las animaciones GSAP
   * 
   * Se ejecuta cuando cambian las dependencias de animación y configura:
   * - Detección del contenedor de scroll (personalizado o window)
   * - Selección de elementos de caracteres para animar
   * - Configuración de animación desde estado inicial a final
   * - Trigger de scroll para activar/desactivar la animación
   */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Determinar el contenedor de scroll: personalizado o ventana principal
    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    // Seleccionar todos los elementos de caracteres para animar
    const charElements = el.querySelectorAll(".inline-block");

    // Configurar animación GSAP con fromTo para transición suave
    gsap.fromTo(
      charElements,
      {
        // Estado inicial: invisible, desplazado y escalado
        willChange: "opacity, transform",
        opacity: 0,
        yPercent: 120,      // Desplazamiento vertical del 120%
        scaleY: 2.3,        // Escala vertical aumentada para efecto dramático
        scaleX: 0.7,        // Escala horizontal reducida para efecto de compresión
        transformOrigin: "50% 0%"  // Origen de transformación en la parte superior
      },
      {
        // Estado final: visible, posición normal y escala normal
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,        // Posición vertical normal
        scaleY: 1,          // Escala vertical normal
        scaleX: 1,          // Escala horizontal normal
        stagger: stagger,   // Retraso escalonado entre caracteres
        scrollTrigger: {
          trigger: el,      // Elemento que activa la animación
          scroller,         // Contenedor de scroll para detectar
          start: scrollStart,  // Punto de inicio de la animación
          end: scrollEnd,      // Punto de finalización de la animación
          scrub: true       // Animación sincronizada con el scroll
        },
      }
    );
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger
  ]);

  return (
    <h2
      ref={containerRef}
      className={`my-5 overflow-hidden ${containerClassName}`}
    >
      <span
        className={`inline-block text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] ${textClassName}`}
      >
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollFloat;
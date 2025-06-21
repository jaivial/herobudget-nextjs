"use client";

import React from "react";

/**
 * Interfaz para definir las propiedades del componente StarBorder
 * @interface StarBorderProps
 */
interface StarBorderProps {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
  [key: string]: any;
}

/**
 * Componente StarBorder
 * 
 * Componente que crea un efecto de borde animado con luces que se mueven
 * alrededor del elemento, simulando un efecto de estrellas o partículas
 * brillantes. Utiliza gradientes radiales y animaciones CSS para crear
 * un efecto visual atractivo y dinámico.
 * 
 * @param {StarBorderProps} props - Propiedades del componente
 * @returns {JSX.Element} Elemento JSX con efecto de borde animado
 * 
 * Características principales:
 * - Efecto de luz animada que se mueve por los bordes
 * - Personalización de color, velocidad y grosor del efecto
 * - Soporte para diferentes elementos HTML (button, div, etc.)
 * - Animaciones CSS smooth con gradientes radiales
 * - Fondo degradado negro/gris para contraste
 */
const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  style,
  ...rest
}: StarBorderProps): JSX.Element => {
  return (
    <Component 
      className={`relative inline-block overflow-hidden rounded-[20px] ${className}`} 
      style={{
        padding: `${thickness}px 0`,
        ...style
      }}
      {...rest}
    >
      {/* 
        Luz animada inferior - se mueve de derecha a izquierda
        Utiliza gradiente radial para crear efecto de luz difusa
        Posicionamiento absoluto para movimiento libre sobre el elemento
      */}
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      
      {/* 
        Luz animada superior - se mueve de izquierda a derecha
        Crea un efecto de contraposición con la luz inferior
        Ambas luces se mueven en direcciones opuestas para dinamismo
      */}
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      
      {/* 
        Contenedor principal del contenido
        Fondo degradado oscuro para contraste con las luces
        Z-index superior para mantener el contenido visible
        Bordes redondeados y padding para apariencia de botón
      */}
      <div className="relative z-1 bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-center text-[16px] py-[16px] px-[26px] rounded-[20px]">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
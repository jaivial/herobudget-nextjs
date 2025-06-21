En la pantalla index: 
1) En el hero section, detrás de la imagen del icono hay un icono de un mouse scroller, quítalo.
2) En hero section, en breackpoints de tamaños móviles quiero que el hero section se mueva un poco hacia abajo para que no se tape por el navbar.
3) En el hero section, quiero que añadas los botones de descarga de la app de google play y apple store ubicados en /public/app-play-store/playstorebutton.png y /public/app-play-store/appstorebutton.png
4) Quiero que en todas las secciones añadas el efecto scroll float, que se mueva el contenido cuando se hace scroll. Aquí te dejo el codigo:
installation
npm i gsap
usage
import ScrollFloat from './ScrollFloat';

<ScrollFloat
  animationDuration={1}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
  stagger={0.03}
>
  reactbits
</ScrollFloat>
code
Default

Tailwind

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span className="inline-block" key={index}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const charElements = el.querySelectorAll(".inline-block");

    gsap.fromTo(
      charElements,
      {
        willChange: "opacity, transform",
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: "50% 0%"
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
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


5) Quiero que en la seccion descargas que añadas la animacion Star Border en los botones de descarga de la app de google play y apple store ubicados en /public/app-play-store/playstorebutton.png y /public/app-play-store/appstorebutton.png. Aqui te dejo el codigo:
usage
import StarBorder from './StarBorder'
  
<StarBorder
  as="button"
  className="custom-class"
  color="cyan"
  speed="5s"
>
  // content
</StarBorder>
code
Default

Tailwind

const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}) => {
  return (
    <Component 
      className={`relative inline-block overflow-hidden rounded-[20px] ${className}`} 
      style={{
        padding: `${thickness}px 0`,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="relative z-1 bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-center text-[16px] py-[16px] px-[26px] rounded-[20px]">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
//         'star-movement-top': 'star-movement-top linear infinite alternate',
//       },
//       keyframes: {
//         'star-movement-bottom': {
//           '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
//           '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
//         },
//         'star-movement-top': {
//           '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
//           '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
//         },
//       },
//     },
//   }
// }

6) En la seccion de descargas quiero que cuando los dos divs se coloquen en columna por el ancho de la pantalla configurado, quiero que sea en columna al reverso de como están ahora.
7) En la sección de descargas, en la sección de estaditicas hay que variar los datos porque todavia no tengo tantas descargas y usuarios (tengo en realidad 0 descargas y 1 usuario) y no tengo valoraciones. Lo que sí tengo es la aplicación en mas de 30 idiomas. Para que quede estético tendrás que pensar otros 3 puntos de datos que se puedan mostrar. Lo mismo tendrás que hacer para la seccion de datos (la útlima) en la sección con id 'caracteristicas'
8) En la seccion de caputuras de pantalla quiero añadas una animación con framer motion de entrada y de salida comprenetrada con el scroll para cada container de cada captura de pantalla según las filas, es decir, si hay por ejemplo una fila con 4 containers la fila entera recibe el efecto de la animación de entrada y salida, pero cuando el ancho de la pantalla se useReduce las filas tienen menos numero de containers pero hay más filas, la animación se hara para cada fila, no para cada container.
8) El navbar, quiero que muestre el estilo comprimido para moviles desde 1095 px hacia abajo.
9) En el navbar tienes que cambiar los botones de descarga de la app de google play y apple store por los que están en /public/app-play-store/playstorebutton.png y /public/app-play-store/appstorebutton.png.
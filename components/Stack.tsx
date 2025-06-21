'use client';

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

/**
 * Card Rotate Component
 * Componente individual para cada tarjeta con rotación 3D y drag
 */
interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  // Motion values para tracking del mouse/drag
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transformaciones 3D basadas en posición del drag
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  // Handler para cuando termina el drag
  function handleDragEnd(_: never, info: { offset: { x: number; y: number } }) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      // Si el drag supera la sensibilidad, enviar al fondo
      onSendToBack();
    } else {
      // Si no, volver a la posición original
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stack Component
 * Componente principal del stack de imágenes con interacción fluida
 */
interface StackProps {
  /** Rotación aleatoria en las tarjetas */
  randomRotation?: boolean;
  /** Sensibilidad del drag para enviar al fondo */
  sensitivity?: number;
  /** Dimensiones de cada tarjeta */
  cardDimensions?: { width: number; height?: number };
  /** Permitir click para enviar al fondo */
  sendToBackOnClick?: boolean;
  /** Datos de las tarjetas (imágenes) */
  cardsData?: { id: number; img: string; alt?: string }[];
  /** Configuración de animación spring */
  animationConfig?: { stiffness: number; damping: number };
  /** Auto-rotación automática en milisegundos (0 para desactivar) */
  autoRotateInterval?: number;
}

export default function Stack({
  randomRotation = false,
  sensitivity = 180,
  cardDimensions = { width: 280 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = true,
  autoRotateInterval = 0,
}: StackProps) {
  // Estado del stack de tarjetas
  const [cards, setCards] = useState(cardsData);
  // Estado para rotaciones fijas (evita hydration mismatch)
  const [cardRotations, setCardRotations] = useState<number[]>([]);

  // Función para enviar una tarjeta al fondo del stack
  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card); // Mover al principio (fondo visual)
      return newCards;
    });
  };

  // Función para rotar automáticamente (enviar la primera tarjeta al fondo)
  const autoRotate = () => {
    if (cards.length > 0) {
      const topCard = cards[cards.length - 1]; // La tarjeta que está encima
      sendToBack(topCard.id);
    }
  };

  // Inicializar rotaciones una vez para evitar hydration mismatch
  useEffect(() => {
    if (randomRotation && cardRotations.length === 0) {
      const rotations = cardsData.map(() => Math.random() * 10 - 5);
      setCardRotations(rotations);
    }
  }, [randomRotation, cardsData, cardRotations.length]);

  // Efecto para auto-rotación
  useEffect(() => {
    if (autoRotateInterval > 0) {
      const interval = setInterval(autoRotate, autoRotateInterval);
      return () => clearInterval(interval);
    }
  }, [autoRotateInterval, cards]);

  return (
    <div
      className="relative"
      style={{
        width: cardDimensions.width,
        minHeight: cardDimensions.width * 1.8, // Altura mínima basada en proporción móvil típica
        perspective: 600, // Perspectiva 3D
      }}
    >
      {cards.map((card, index) => {
        // Rotación fija para cada tarjeta (evita hydration mismatch)
        const cardIndex = cardsData.findIndex(c => c.id === card.id);
        const randomRotate = randomRotation && cardRotations[cardIndex] ? cardRotations[cardIndex] : 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="rounded-3xl overflow-hidden shadow-2xl"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                // Rotación progresiva para efecto stack
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                // Escala progresiva para profundidad
                scale: 1 + index * 0.06 - cards.length * 0.06,
                // Punto de transformación para rotación natural
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                filter: index === cards.length - 1 
                  ? 'drop-shadow(0 25px 50px rgba(233, 30, 99, 0.3))' 
                  : 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.2))'
              }}
            >
              <img
                src={card.img}
                alt={card.alt || `Hero Budget Screenshot ${card.id}`}
                className="w-full h-auto object-contain pointer-events-none"
                loading="lazy"
                style={{
                  maxWidth: cardDimensions.width,
                  height: 'auto'
                }}
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
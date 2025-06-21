'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Twitter,
  Instagram,
  Linkedin,
  Github
} from 'lucide-react';
import { useToast } from '@/hooks/useToast';
import ToastContainer from '@/components/Toast';

/**
 * Contact Section Component - Part 1
 * Sección de contacto con múltiples canales de comunicación
 * Contiene configuración inicial, tipos e interfaces
 */

interface ContactMethod {
  id: string;
  name: string;
  description: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  href: string;
  availability: string;
}

const contactMethods: ContactMethod[] = [
  {
    id: 'email',
    name: 'Email de Soporte',
    description: 'Para consultas detalladas y seguimiento',
    value: 'soporte@herobudget.com',
    icon: Mail,
    color: 'from-green-500 to-green-600',
    href: 'mailto:soporte@herobudget.com',
    availability: 'Respuesta en 24h'
  }
];

const socialLinks = [
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/herobudget',
    color: 'hover:text-blue-500'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/herobudget',
    color: 'hover:text-pink-500'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/company/herobudget',
    color: 'hover:text-blue-600'
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/herobudget',
    color: 'hover:text-gray-800'
  }
];

const officeHours = [
  { day: 'Lunes - Viernes', hours: '9:00 AM - 1:30 PM' },
  { day: 'Sábados y Domingos', hours: 'Cerrado' }
];

/**
 * Animation variants for motion components
 * Configuración de animaciones reutilizables
 */
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

/**
 * Hook personalizado para manejo del formulario de contacto
 * Centraliza la lógica de estado y envío del formulario
 */
export function useContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Hook para toasts
  const { toasts, removeToast, success, error } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        success('¡Mensaje enviado!', result.message);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset form success state after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        error('Error al enviar', result.error || 'Ha ocurrido un error inesperado');
      }
    } catch (err) {
      error('Error de conexión', 'No se pudo conectar con el servidor. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    isSubmitting,
    isSubmitted,
    toasts,
    removeToast,
    handleSubmit
  };
}

/**
 * Exportar configuraciones para uso en parte 2
 */
export { contactMethods, socialLinks, officeHours };
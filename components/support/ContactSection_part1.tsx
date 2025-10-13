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
import { type ContactSectionTranslations } from '@/lib/i18n/translations/translation-loader';

/**
 * Contact Section Component - Part 1
 * Sección de contacto con múltiples canales de comunicación
 * Contiene configuración inicial, tipos e interfaces
 * Soporte multiidioma con traducciones dinámicas
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

const getContactMethodIcon = (id: string) => {
  const icons: Record<string, any> = {
    email: Mail,
    whatsapp: MessageCircle,
    discord: MessageCircle,
  };
  return icons[id] || Mail;
};

const getContactMethodColor = (id: string) => {
  const colors: Record<string, string> = {
    email: 'from-green-500 to-green-600',
    whatsapp: 'from-green-400 to-green-500',
    discord: 'from-purple-500 to-purple-600',
  };
  return colors[id] || 'from-gray-500 to-gray-600';
};

const getContactMethodHref = (id: string, value: string) => {
  if (id === 'email') {
    return `mailto:${value}`;
  }
  if (id === 'whatsapp') {
    return `https://wa.me/${value.replace(/\D/g, '')}`;
  }
  if (id === 'discord') {
    return 'https://discord.gg/herobudget';
  }
  return '#';
};

export function getContactMethodsFromTranslations(translations: ContactSectionTranslations): ContactMethod[] {
  return translations.contactMethods.map(method => ({
    ...method,
    icon: getContactMethodIcon(method.id),
    color: getContactMethodColor(method.id),
    href: getContactMethodHref(method.id, method.value)
  }));
}

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
export function useContactForm(translations: ContactSectionTranslations | null) {
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
    if (!translations) {
      return;
    }
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
        success(translations.toast.successTitle, result.message);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Reset form success state after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        error(translations.toast.errorTitle, result.error || translations.toast.errorConnection);
      }
    } catch (err) {
      error(translations.toast.errorTitle, translations.toast.errorConnection);
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
export { socialLinks };
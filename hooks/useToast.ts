/**
 * Toast Hook
 * Hook personalizado para manejar notificaciones toast
 */

'use client';

import { useState, useCallback } from 'react';
import { ToastConfig, ToastType } from '@/components/Toast';

/**
 * Configuración para crear un nuevo toast
 */
interface CreateToastOptions {
  type: ToastType;
  title: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

/**
 * Hook personalizado para manejar toasts
 * @returns Objeto con funciones y estado para manejar toasts
 */
export function useToast() {
  const [toasts, setToasts] = useState<ToastConfig[]>([]);

  /**
   * Función para agregar un nuevo toast
   */
  const addToast = useCallback((options: CreateToastOptions) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newToast: ToastConfig = {
      id,
      type: options.type,
      title: options.title,
      message: options.message,
      duration: options.duration ?? 5000, // 5 segundos por defecto
      action: options.action
    };

    setToasts(prev => [...prev, newToast]);
    return id;
  }, []);

  /**
   * Función para remover un toast específico
   */
  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  /**
   * Función para limpiar todos los toasts
   */
  const clearAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  /**
   * Funciones de conveniencia para diferentes tipos de toast
   */
  const success = useCallback((title: string, message: string, options?: Partial<CreateToastOptions>) => {
    return addToast({
      type: 'success',
      title,
      message,
      duration: 4000,
      ...options
    });
  }, [addToast]);

  const error = useCallback((title: string, message: string, options?: Partial<CreateToastOptions>) => {
    return addToast({
      type: 'error',
      title,
      message,
      duration: 6000, // Errores duran más tiempo
      ...options
    });
  }, [addToast]);

  const warning = useCallback((title: string, message: string, options?: Partial<CreateToastOptions>) => {
    return addToast({
      type: 'warning',
      title,
      message,
      duration: 5000,
      ...options
    });
  }, [addToast]);

  const info = useCallback((title: string, message: string, options?: Partial<CreateToastOptions>) => {
    return addToast({
      type: 'info',
      title,
      message,
      duration: 4000,
      ...options
    });
  }, [addToast]);

  return {
    toasts,
    addToast,
    removeToast,
    clearAllToasts,
    success,
    error,
    warning,
    info
  };
}
/**
 * Toast Notification Component
 * Sistema de notificaciones toast para Hero Budget
 */

'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react';

/**
 * Tipos de notificación disponibles
 */
export type ToastType = 'success' | 'error' | 'warning' | 'info';

/**
 * Configuración de una notificación
 */
export interface ToastConfig {
  id: string;
  type: ToastType;
  title: string;
  message: string;
  duration?: number; // en milisegundos, 0 = no auto-dismiss
  action?: {
    label: string;
    onClick: () => void;
  };
}

/**
 * Props del componente Toast individual
 */
interface ToastItemProps {
  toast: ToastConfig;
  onRemove: (id: string) => void;
}

/**
 * Props del contenedor de toasts
 */
interface ToastContainerProps {
  toasts: ToastConfig[];
  onRemove: (id: string) => void;
}

/**
 * Configuración de iconos y colores por tipo de toast
 */
const toastConfigs = {
  success: {
    icon: CheckCircle,
    bgColor: 'from-green-500 to-emerald-600',
    borderColor: 'border-green-200',
    textColor: 'text-green-800',
    iconColor: 'text-green-600'
  },
  error: {
    icon: XCircle,
    bgColor: 'from-red-500 to-rose-600',
    borderColor: 'border-red-200',
    textColor: 'text-red-800',
    iconColor: 'text-red-600'
  },
  warning: {
    icon: AlertCircle,
    bgColor: 'from-amber-500 to-orange-600',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-800',
    iconColor: 'text-amber-600'
  },
  info: {
    icon: AlertCircle,
    bgColor: 'from-blue-500 to-cyan-600',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-800',
    iconColor: 'text-blue-600'
  }
};

/**
 * Componente de toast individual
 */
function ToastItem({ toast, onRemove }: ToastItemProps) {
  const [isVisible, setIsVisible] = useState(true);
  const config = toastConfigs[toast.type];
  const IconComponent = config.icon;

  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => onRemove(toast.id), 300);
      }, toast.duration);

      return () => clearTimeout(timer);
    }
  }, [toast.duration, toast.id, onRemove]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onRemove(toast.id), 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 300, scale: 0.8 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25,
            duration: 0.3 
          }}
          className={`
            relative max-w-sm w-full rounded-2xl p-4 shadow-lg border ${config.borderColor}
            backdrop-blur-md bg-white/90
          `}
          style={{
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)'
          }}
        >
          {/* Barra de progreso para auto-dismiss */}
          {toast.duration && toast.duration > 0 && (
            <motion.div
              className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${config.bgColor} rounded-t-2xl`}
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: toast.duration / 1000, ease: 'linear' }}
            />
          )}

          <div className="flex items-start gap-3">
            {/* Icono */}
            <div className={`flex-shrink-0 mt-0.5`}>
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${config.bgColor} flex items-center justify-center`}>
                <IconComponent className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Contenido */}
            <div className="flex-1 min-w-0">
              <h4 className={`text-sm font-semibold ${config.textColor} mb-1`}>
                {toast.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {toast.message}
              </p>
              
              {/* Acción opcional */}
              {toast.action && (
                <motion.button
                  onClick={toast.action.onClick}
                  className={`mt-2 text-xs font-medium ${config.iconColor} hover:underline`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {toast.action.label}
                </motion.button>
              )}
            </div>

            {/* Botón de cerrar */}
            <motion.button
              onClick={handleClose}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Contenedor principal de toasts
 */
export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-sm w-full">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            onRemove={onRemove}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ToastContainer;
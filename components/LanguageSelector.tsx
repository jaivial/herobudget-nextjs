'use client';

import { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Search, X, Check } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { LOCALES, LOCALE_CODES, getLocale } from '@/lib/i18n/locales';
import { detectBrowserLocale, saveLocalePreference } from '@/lib/i18n/locale-detector';
import { getLanguageSelectorTranslations } from '@/lib/i18n/language-selector-translations';

/**
 * LanguageSelector Component
 * Modal-based language selector with search functionality
 * Optimized for long language lists (35+ languages)
 */

interface LanguageSelectorProps {
  currentLocale?: string;
  className?: string;
  variant?: 'button' | 'compact';
}

export default function LanguageSelector({
  currentLocale,
  className = '',
  variant = 'button',
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocale, setSelectedLocale] = useState<string>(currentLocale || detectBrowserLocale());
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Ensure component is mounted before rendering portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update selected locale when currentLocale prop changes
  useEffect(() => {
    if (currentLocale) {
      setSelectedLocale(currentLocale);
    }
  }, [currentLocale]);

  // Filter locales based on search query
  const filteredLocales = useMemo(() => {
    if (!searchQuery.trim()) {
      return LOCALE_CODES;
    }

    const query = searchQuery.toLowerCase();
    return LOCALE_CODES.filter((code) => {
      const locale = getLocale(code);
      if (!locale) {
        return false;
      }
      return (
        locale.name.toLowerCase().includes(query) ||
        locale.nativeName.toLowerCase().includes(query) ||
        locale.code.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  // Handle locale selection
  const handleSelectLocale = (localeCode: string) => {
    setSelectedLocale(localeCode);
    saveLocalePreference(localeCode);
    setIsOpen(false);
    setSearchQuery('');

    // Update URL if we're on a localized page
    if (pathname.startsWith('/privacidad/')) {
      router.push(`/privacidad/${localeCode}`);
    } else if (pathname === '/privacidad') {
      router.push(`/privacidad/${localeCode}`);
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const currentLocaleData = getLocale(selectedLocale);
  const t = getLanguageSelectorTranslations(selectedLocale);

  if (!currentLocaleData) {
    return null;
  }

  // Modal content to be rendered in portal
  const modalContent = isOpen && mounted ? (
    <AnimatePresence>
      <>
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/50 z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        />

        {/* Modal Content */}
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-6 h-6 text-primary-500" />
                    <h2 className="text-2xl font-bold text-gray-900">{t.modal.title}</h2>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label={t.aria.close}
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                {/* Search */}
                <div className="p-6 border-b border-gray-200">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder={t.modal.searchPlaceholder}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg
                        focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                      autoFocus
                    />
                  </div>
                </div>

                {/* Language List */}
                <div className="overflow-y-auto max-h-[50vh] p-4">
                  {filteredLocales.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <p>{t.modal.noLanguages}</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {filteredLocales.map((code) => {
                        const locale = getLocale(code);
                        if (!locale) {
                          return null;
                        }
                        const isSelected = code === selectedLocale;

                        return (
                          <motion.button
                            key={code}
                            onClick={() => handleSelectLocale(code)}
                            className={`flex items-center justify-between p-3 rounded-lg text-left
                              transition-colors ${
                                isSelected
                                  ? 'bg-primary-50 border-2 border-primary-500'
                                  : 'hover:bg-gray-50 border-2 border-transparent'
                              }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{locale.flag}</span>
                              <div>
                                <p className={`font-medium ${isSelected ? 'text-primary-700' : 'text-gray-900'}`}>
                                  {locale.nativeName}
                                </p>
                                <p className="text-xs text-gray-500">{locale.name}</p>
                              </div>
                            </div>
                            {isSelected && <Check className="w-5 h-5 text-primary-500" />}
                          </motion.button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 bg-gray-50">
                  <p className="text-sm text-gray-600 text-center">
                    {filteredLocales.length} {filteredLocales.length === 1 ? t.modal.language : t.modal.languages} {t.modal.languagesAvailable}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
    </AnimatePresence>
  ) : null;

  return (
    <>
      {/* Trigger Button */}
      {variant === 'button' ? (
        <motion.button
          onClick={() => setIsOpen(true)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20
            transition-colors border border-gray-200 ${className}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label={t.aria.selectLanguage}
        >
          <Globe className="w-4 h-4 text-gray-700" />
          <span className="text-sm font-medium text-gray-700">
            {currentLocaleData.flag} {currentLocaleData.nativeName.split(' ')[0]}
          </span>
        </motion.button>
      ) : (
        <motion.button
          onClick={() => setIsOpen(true)}
          className={`flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10
            transition-colors ${className}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label={t.aria.selectLanguage}
        >
          <Globe className="w-5 h-5 text-gray-700" />
          <span className="text-sm font-medium text-gray-700">
            {currentLocaleData.flag}
          </span>
        </motion.button>
      )}

      {/* Render modal in portal at document body level */}
      {mounted && modalContent && createPortal(modalContent, document.body)}
    </>
  );
}

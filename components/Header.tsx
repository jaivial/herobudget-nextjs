'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Download } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

/**
 * Header Component
 * Navegación principal con efectos de scroll y sidebar móvil
 */

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Efecto de scroll para header
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al hacer scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#caracteristicas', label: 'Características' },
    { href: '#descargas', label: 'Descargar' },
    { href: '/soporte', label: 'Soporte' },
    { href: '/privacidad', label: 'Privacidad' },
  ];

  // Función para manejar navegación con redirección si es necesario
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      // Si estamos en la página principal, hacer scroll normal
      if (pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 70;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        // Si estamos en otra página, redirigir a home con el hash
        router.push(`/${href}`);
      }
    }
  };

  // Función para manejar click en logo/título
  const handleLogoClick = () => {
    if (pathname !== '/') {
      router.push('/');
    } else {
      // Si ya estamos en home, hacer scroll al inicio
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'header-scrolled' : 'bg-white/80 backdrop-blur-sm'
        } ${className}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <nav className="container-custom h-[70px] flex items-center justify-between">
          {/* Logo y Brand - Clickeable para ir a inicio */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={handleLogoClick}
          >
            <div className="relative w-8 h-8">
              <Image
                src="/herobudgeticon.png"
                alt="Hero Budget Icon"
                fill
                sizes="32px"
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-xl lg:text-2xl font-bold text-primary-500">
              Hero Budget
            </h1>
          </motion.div>

          {/* Navegación Desktop */}
          <div className="hidden xl:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="nav-link"
                    onClick={(e) => {
                      if (item.href.startsWith('#')) {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Botones de descarga */}
            <div className="flex items-center space-x-3">
              <motion.a
                href="https://apps.apple.com/us/app/hero-budget/id6746946502"
                className="download-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/app-play-store/appstorebutton.png"
                  alt="Download on App Store"
                  width={120}
                  height={35}
                  className="h-9 w-auto"
                />
              </motion.a>
              <motion.a
                href="#"
                className="download-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/app-play-store/playstorebutton.png"
                  alt="Get it on Google Play"
                  width={120}
                  height={35}
                  className="h-9 w-auto"
                />
              </motion.a>
            </div>
          </div>

          {/* Botón menú móvil */}
          <motion.button
            className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.div>
          </motion.button>
        </nav>
      </motion.header>

      {/* Sidebar móvil */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="mobile-sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Header del sidebar - Clickeable para ir a inicio */}
              <div className="flex items-center justify-between p-6 border-b border-white/20">
                <div 
                  className="flex items-center space-x-3 cursor-pointer"
                  onClick={handleLogoClick}
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="/herobudgeticon.png"
                      alt="Hero Budget Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-lg font-bold text-primary-500">
                    Hero Budget
                  </h2>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Navegación móvil */}
              <nav className="p-6">
                <ul className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                        onClick={(e) => {
                          if (item.href.startsWith('#')) {
                            e.preventDefault();
                            handleNavClick(item.href);
                          } else {
                            setIsMobileMenuOpen(false);
                          }
                        }}
                      >
                        <span className="text-gray-700 font-medium">
                          {item.label}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Sección de descargas móvil */}
                <motion.div
                  className="mt-8 pt-6 border-t border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar App
                  </h3>
                  <div className="space-y-3">
                    <a href="https://apps.apple.com/us/app/hero-budget/id6746946502" className="block download-btn">
                      <Image
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                        alt="Download on App Store"
                        width={150}
                        height={45}
                        className="w-full h-auto max-w-[150px]"
                      />
                    </a>
                    <a href="#" className="block download-btn">
                      <Image
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        alt="Get it on Google Play"
                        width={150}
                        height={45}
                        className="w-full h-auto max-w-[150px]"
                      />
                    </a>
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
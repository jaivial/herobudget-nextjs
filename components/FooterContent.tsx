"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone, Heart, ExternalLink } from "lucide-react";
import { getFooterSections } from "./FooterData";
import { itemVariants, handleNavClick } from "./FooterAnimations";

/**
 * FooterContent
 * Contenido principal del footer con información de contacto y enlaces
 */

export default function FooterContent() {
  const pathname = usePathname();
  const footerSections = getFooterSections(pathname);

  return (
    <>
      {/* Sección principal del footer */}
      <div className="grid lg:grid-cols-5 gap-8 mb-12">
        {/* Información de la empresa */}
        <motion.div className="lg:col-span-2" variants={itemVariants}>
          <div className="flex items-center space-x-3 mb-6">
            <div className="relative w-10 h-10">
              <Image src="/herobudgeticon.png" alt="Hero Budget Icon" fill className="object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-white">Hero Budget</h3>
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed">Tu compañero para la libertad financiera. Hero Budget te ayuda a tomar control de tus finanzas de manera simple, intuitiva y efectiva.</p>

          {/* Información de contacto */}
          <div className="space-y-3">
            <motion.div className="flex items-center space-x-3 text-gray-300" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Mail className="w-5 h-5 text-primary-400" />
              <a href="mailto:jaimevillalcon@hotmail.com" className="hover:text-white transition-colors">
                jaimevillalcon@hotmail.com
              </a>
            </motion.div>

            <motion.div className="flex items-center space-x-3 text-gray-300" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <MapPin className="w-5 h-5 text-primary-400" />
              <span>España</span>
            </motion.div>

            <motion.div className="flex items-center space-x-3 text-gray-300" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Phone className="w-5 h-5 text-primary-400" />
              <span>Soporte 24/7</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Enlaces del footer */}
        {footerSections.map((section, sectionIndex) => (
          <motion.div key={section.title} variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
            <ul className="space-y-3">
              {section.links.map((link, linkIndex) => (
                <motion.li key={link.label} whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          handleNavClick(link.href, pathname);
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Copyright y corazón animado */}
      <motion.div className="border-t border-gray-700 pt-8" variants={itemVariants}>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-400">
            <span>&copy; 2025 Jaime Digital Studios ©.</span>
            <span>Todos los derechos reservados.</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import {
  ChevronDown,
  Info,
  Database,
  Share,
  Cookie,
  Shield,
  Clock
} from 'lucide-react';
import { getPrivacyTranslations } from '@/lib/i18n/privacy-translations';

/**
 * Privacy Policy Section Component
 * Sección principal con el contenido completo de la política de privacidad
 */

interface PrivacyPolicySectionProps {
  locale: string;
}

interface PolicySection {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  lastUpdated: string;
  lastUpdatedDate: string;
  content: {
    subtitle?: string;
    paragraphs: string[];
    subsections?: {
      title: string;
      items: string[];
    }[];
  };
}

export default function PrivacyPolicySection({ locale }: PrivacyPolicySectionProps) {
  const t = getPrivacyTranslations(locale);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Map translations to policy sections with icons
  const policySections: PolicySection[] = [
    {
      id: 'introduction',
      title: t.policy.fullSections.introduction.title,
      icon: Info,
      lastUpdated: t.policy.fullSections.introduction.lastUpdated,
      lastUpdatedDate: t.policy.fullSections.introduction.lastUpdatedDate,
      content: {
        paragraphs: t.policy.fullSections.introduction.paragraphs,
        subsections: t.policy.fullSections.introduction.subsections
      }
    },
    {
      id: 'data-collection',
      title: t.policy.fullSections.dataCollection.title,
      icon: Database,
      lastUpdated: t.policy.fullSections.dataCollection.lastUpdated,
      lastUpdatedDate: t.policy.fullSections.dataCollection.lastUpdatedDate,
      content: {
        paragraphs: t.policy.fullSections.dataCollection.paragraphs,
        subsections: t.policy.fullSections.dataCollection.subsections
      }
    },
    {
      id: 'data-usage',
      title: t.policy.fullSections.dataUsage.title,
      icon: Share,
      lastUpdated: t.policy.fullSections.dataUsage.lastUpdated,
      lastUpdatedDate: t.policy.fullSections.dataUsage.lastUpdatedDate,
      content: {
        paragraphs: t.policy.fullSections.dataUsage.paragraphs,
        subsections: t.policy.fullSections.dataUsage.subsections
      }
    },
    {
      id: 'data-sharing',
      title: t.policy.fullSections.dataSharing.title,
      icon: Share,
      lastUpdated: t.policy.fullSections.dataSharing.lastUpdated,
      lastUpdatedDate: t.policy.fullSections.dataSharing.lastUpdatedDate,
      content: {
        paragraphs: t.policy.fullSections.dataSharing.paragraphs,
        subsections: t.policy.fullSections.dataSharing.subsections
      }
    },
    {
      id: 'cookies',
      title: t.policy.fullSections.cookies.title,
      icon: Cookie,
      lastUpdated: t.policy.fullSections.cookies.lastUpdated,
      lastUpdatedDate: t.policy.fullSections.cookies.lastUpdatedDate,
      content: {
        paragraphs: t.policy.fullSections.cookies.paragraphs,
        subsections: t.policy.fullSections.cookies.subsections
      }
    },
    {
      id: 'security',
      title: t.policy.fullSections.security.title,
      icon: Shield,
      lastUpdated: t.policy.fullSections.security.lastUpdated,
      lastUpdatedDate: t.policy.fullSections.security.lastUpdatedDate,
      content: {
        paragraphs: t.policy.fullSections.security.paragraphs,
        subsections: t.policy.fullSections.security.subsections
      }
    },
    {
      id: 'retention',
      title: t.policy.fullSections.retention.title,
      icon: Clock,
      lastUpdated: t.policy.fullSections.retention.lastUpdated,
      lastUpdatedDate: t.policy.fullSections.retention.lastUpdatedDate,
      content: {
        paragraphs: t.policy.fullSections.retention.paragraphs,
        subsections: t.policy.fullSections.retention.subsections
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section 
      id="policy"
      ref={ref} 
      className="section-padding relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at top left, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
          radial-gradient(ellipse at bottom right, rgba(16, 185, 129, 0.03) 0%, transparent 50%),
          linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)
        `
      }}
    >
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8"
            style={{
              background: `
                linear-gradient(135deg,
                  #1e40af 0%,
                  #3b82f6 30%,
                  #10b981 70%,
                  #059669 100%
                )`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            variants={itemVariants}
          >
            {t.policy.title}
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t.policy.subtitle}
          </motion.p>
        </motion.div>

        {/* Quick navigation - removed as Accordion handles it */}

        {/* Secciones de la política */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Accordion.Root type="multiple" defaultValue={['introduction']} className="space-y-6">
            {policySections.map((section) => {
              const IconComponent = section.icon;

              return (
                <Accordion.Item
                  key={section.id}
                  value={section.id}
                  className="overflow-hidden rounded-2xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {section.title}
                          </h3>
                          <div className="text-sm text-gray-500">
                            {section.lastUpdated}: {section.lastUpdatedDate}
                          </div>
                        </div>
                      </div>

                      <ChevronDown className="w-6 h-6 text-gray-400 transition-transform duration-300 group-data-[state=open]:rotate-180 ml-4 flex-shrink-0" />
                    </Accordion.Trigger>
                  </Accordion.Header>

                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-gray-100">
                        {section.content.subtitle && (
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">
                            {section.content.subtitle}
                          </h4>
                        )}

                        {section.content.paragraphs.map((paragraph, index) => (
                          <p key={index} className="text-gray-600 leading-relaxed mb-4">
                            {paragraph}
                          </p>
                        ))}

                        {section.content.subsections?.map((subsection, index) => (
                          <div key={index} className="mb-6">
                            <h5 className="text-md font-semibold text-gray-800 mb-3">
                              {subsection.title}
                            </h5>
                            <ul className="space-y-2">
                              {subsection.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-3">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-gray-600 leading-relaxed">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              );
            })}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
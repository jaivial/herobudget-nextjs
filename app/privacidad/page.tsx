import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import PrivacyHeroSection from '@/components/privacy/PrivacyHeroSection';
import PrivacyPolicySection from '@/components/privacy/PrivacyPolicySection';
import DataProtectionSection from '@/components/privacy/DataProtectionSection';
import UserRightsSection from '@/components/privacy/UserRightsSection';
import ContactPrivacySection from '@/components/privacy/ContactPrivacySection';

// Importación dinámica para el Footer
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-gray-800"></div>
});

/**
 * Privacy Page
 * Página completa de política de privacidad y protección de datos
 */

export const metadata: Metadata = {
  title: 'Política de Privacidad - Hero Budget',
  description: 'Política de privacidad de Hero Budget. Conoce cómo protegemos y utilizamos tu información personal, tus derechos de privacidad y nuestro compromiso con la seguridad de datos.',
  keywords: ['privacidad', 'política', 'protección de datos', 'GDPR', 'hero budget', 'seguridad', 'información personal'],
  openGraph: {
    title: 'Política de Privacidad - Hero Budget',
    description: 'Política de privacidad de Hero Budget. Conoce cómo protegemos y utilizamos tu información personal.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function PrivacyPage() {
  return (
    <>
      {/* Header fijo */}
      <Header />
      
      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <PrivacyHeroSection />
        
        {/* Privacy Policy Section */}
        <PrivacyPolicySection />
        
        {/* Data Protection Section */}
        <DataProtectionSection />
        
        {/* User Rights Section */}
        <UserRightsSection />
        
        {/* Contact Privacy Section */}
        <ContactPrivacySection />
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}
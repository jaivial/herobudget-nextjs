import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';
import PageWrapper from '@/components/PageWrapper';

// Importación dinámica para componentes pesados con lazy loading
const DownloadSection = dynamic(() => import('@/components/DownloadSection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">
    <div className="loading-skeleton w-full h-96 rounded-lg"></div>
  </div>
});

const ScreenshotsSection = dynamic(() => import('@/components/ScreenshotsSection'), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">
    <div className="loading-skeleton w-full h-64 rounded-lg"></div>
  </div>
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-gray-800"></div>
});

/**
 * Home Page
 * Página principal de Hero Budget con todos los componentes optimizados
 */

export default function HomePage() {
  return (
    <PageWrapper>
      <main id="main-content" className="min-h-screen">
        {/* Header fijo */}
        <Header />
        
        {/* Hero Section - carga inmediata */}
        <HeroSection />
        
        {/* Features Section - carga inmediata para LCP */}
        <FeaturesSection />
        
        {/* Download Section - lazy loading */}
        <DownloadSection />
        
        {/* Screenshots Section - lazy loading */}
        <ScreenshotsSection />
        
        {/* CTA Section */}
        <CTASection />
        
        {/* Footer - lazy loading */}
        <Footer />
      </main>
    </PageWrapper>
  );
}
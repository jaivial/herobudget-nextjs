import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Suspense } from 'react';
import CustomLoader from '../components/CustomLoader';

/**
 * Root Layout Component
 * Configuración base para toda la aplicación Next.js
 */

export const metadata: Metadata = {
  metadataBase: new URL('https://herobudget.app'),
  title: {
    default: 'Hero Budget - Controla tus Finanzas',
    template: '%s | Hero Budget'
  },
  description: 'Hero Budget - La app que te ayuda a controlar tus finanzas personales, crear presupuestos inteligentes y alcanzar tus metas de ahorro.',
  keywords: ['finanzas', 'presupuesto', 'ahorro', 'gastos', 'dinero', 'app', 'móvil'],
  authors: [{ name: 'Hero Budget Team' }],
  creator: 'Hero Budget',
  publisher: 'Hero Budget',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/herobudgeticon.png',
    shortcut: '/herobudgeticon.png',
    apple: '/herobudgeticon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://herobudget.app',
    siteName: 'Hero Budget',
    title: 'Hero Budget - Controla tus Finanzas',
    description: 'La app que te ayuda a controlar tus finanzas personales, crear presupuestos inteligentes y alcanzar tus metas de ahorro.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hero Budget - App de Finanzas Personales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hero Budget - Controla tus Finanzas',
    description: 'La app que te ayuda a controlar tus finanzas personales, crear presupuestos inteligentes y alcanzar tus metas de ahorro.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'google-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#e91e63',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Preconnect para CDNs externos */}
        <link rel="preconnect" href="https://developer.apple.com" />
        <link rel="preconnect" href="https://play.google.com" />
        
        {/* DNS prefetch para recursos externos */}
        <link rel="dns-prefetch" href="https://developer.apple.com" />
        <link rel="dns-prefetch" href="https://play.google.com" />
        
        {/* Configuración adicional de tema */}
        <meta name="msapplication-TileColor" content="#e91e63" />
        
        {/* Prevenir zoom en inputs de iOS */}
        <meta name="format-detection" content="telephone=no" />
        
        {/* Configuración de PWA */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Hero Budget" />
        
        {/* Structured Data para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Hero Budget',
              description: 'La app que te ayuda a controlar tus finanzas personales, crear presupuestos inteligentes y alcanzar tus metas de ahorro.',
              url: 'https://herobudget.app',
              applicationCategory: 'FinanceApplication',
              operatingSystem: ['iOS', 'Android'],
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '1250',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900 overflow-x-hidden">
        {/* Configuración para accesibilidad */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-4 py-2 rounded-md z-50"
        >
          Saltar al contenido principal
        </a>
        
        {/* Contenido principal */}
        <div id="root" className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
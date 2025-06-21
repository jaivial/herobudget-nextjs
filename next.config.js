/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración básica optimizada
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react']
  },
  
  // Optimización de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'developer.apple.com',
        port: '',
        pathname: '/assets/**'
      },
      {
        protocol: 'https',
        hostname: 'play.google.com',
        port: '',
        pathname: '/intl/**'
      }
    ]
  },
  
  // Optimización de bundle
  webpack: (config, { isServer }) => {
    // Optimización para Framer Motion
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    return config;
  },
  
  // Configuración de compilador
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  
  // Headers de seguridad y cache
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          }
        ]
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Configuración básica
  reactStrictMode: true,
  compress: true,
  trailingSlash: false,
  
  // Configuración de ESLint
  eslint: {
    dirs: ['pages', 'components', 'lib', 'hooks']
  }
};

module.exports = nextConfig;
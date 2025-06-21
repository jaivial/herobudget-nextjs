# Hero Budget - Next.js Website

Sitio web moderno de Hero Budget construido con **Next.js 14**, **Framer Motion**, y **Tailwind CSS**.

## 🚀 Características Principales

- ⚡ **Performance Optimizada**: Next.js 14 con App Router
- 🎨 **Animaciones Fluidas**: Framer Motion sin conflictos
- 🎭 **Diseño Liquid Glass**: Efectos visuales modernos
- 📱 **Responsive**: Optimizado para todos los dispositivos
- 🔍 **SEO Optimizado**: Meta tags y structured data
- 🖼️ **Imágenes Optimizadas**: Next.js Image con lazy loading
- ♿ **Accesible**: Cumple estándares WCAG
- 🚄 **Lazy Loading**: Componentes cargados bajo demanda

## 📦 Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **UI**: React 18 + TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Optimización**: Next.js Image, Dynamic Imports
- **Build**: Turbopack (dev), Webpack (prod)

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+
- npm, yarn, o pnpm

### Instalación
```bash
# Navegar al directorio
cd herobudget-nextjs

# Instalar dependencias
npm install
# o
yarn install
# o
pnpm install
```

### Desarrollo
```bash
# Modo desarrollo
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build y Deploy
```bash
# Build para producción
npm run build

# Iniciar en modo producción
npm run start

# Verificar tipos TypeScript
npm run type-check

# Linting
npm run lint
```

## 🏗️ Estructura del Proyecto

```
herobudget-nextjs/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página home
├── components/            # Componentes React
│   ├── Header.tsx         # Navegación principal
│   ├── HeroSection.tsx    # Sección héroe
│   ├── FeaturesSection.tsx # Características
│   ├── DownloadSection.tsx # Descarga
│   └── ...
├── public/               # Assets estáticos
│   ├── herobudgeticon.png
│   └── images/
├── lib/                  # Utilidades
├── hooks/                # Custom hooks
├── types/                # Tipos TypeScript
├── next.config.js        # Configuración Next.js
├── tailwind.config.js    # Configuración Tailwind
└── tsconfig.json         # Configuración TypeScript
```

## 🎨 Componentes Principales

### Header
- Navegación fija con efecto de scroll
- Sidebar móvil animado
- Botones de descarga integrados

### HeroSection
- Animaciones de entrada escalonadas
- Icono flotante con efectos parallax
- CTAs con smooth scroll

### FeaturesSection
- Cards con efectos hover avanzados
- Iconos animados
- Contadores con IntersectionObserver

### DownloadSection
- Contadores animados en tiempo real
- Mockups de dispositivos flotantes
- Estadísticas en tiempo real

## 🎭 Sistema de Animaciones

### Framer Motion Patterns
```tsx
// Animación de contenedor con stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Animación de elementos individuales
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};
```

### Performance Optimizations
- `useInView` con `once: true` para evitar re-renders
- Animaciones GPU-accelerated
- Lazy loading de componentes pesados
- Reducción de motion en móviles

## 🎨 Sistema de Diseño

### Colores
```css
--primary-500: #e91e63    /* Rosa Hero Budget */
--primary-600: #c2185b    /* Rosa oscuro */
--secondary-100: #f8bbd9  /* Rosa claro */
--accent-500: #4caf50     /* Verde accent */
```

### Efectos Liquid Glass
```css
.liquid-glass {
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
```

### Breakpoints Responsive
- `sm`: 640px (móviles grandes)
- `md`: 768px (tablets)
- `lg`: 1024px (laptops)
- `xl`: 1280px (desktops)
- `2xl`: 1536px (pantallas grandes)

## ⚡ Optimizaciones de Performance

### Core Web Vitals
- **LCP**: < 2.5s (Next.js Image + Priority loading)
- **FID**: < 100ms (Event delegation + debouncing)
- **CLS**: < 0.1 (Fixed layouts + aspect ratios)

### Técnicas Implementadas
- Server-Side Rendering (SSR)
- Static Generation donde es posible
- Image optimization automática
- Code splitting por rutas
- Prefetch de recursos críticos
- Lazy loading de componentes

### Bundle Analysis
```bash
# Analizar bundle size
npm run build
npx @next/bundle-analyzer
```

## 🔍 SEO y Accesibilidad

### Meta Tags
- Open Graph completo
- Twitter Cards
- Structured Data (JSON-LD)
- Canonical URLs

### Accesibilidad
- Semantic HTML
- ARIA labels
- Focus management
- Keyboard navigation
- Screen reader support

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Deploy automático con Git
git push origin main
```

### Otros Platforms
- **Netlify**: `npm run build && npm run export`
- **Docker**: Dockerfile incluido
- **Static Export**: `output: 'export'` en next.config.js

## 📊 Monitoreo

### Analytics
- Google Analytics 4
- Core Web Vitals tracking
- Error boundary reporting

### Performance Monitoring
```tsx
// Performance observer incluido
if ('PerformanceObserver' in window) {
  const observer = new PerformanceObserver((list) => {
    // Track LCP, FID, CLS
  });
}
```

## 🔧 Configuración

### Variables de Entorno
```bash
# .env.local
NEXT_PUBLIC_GA_ID=your-ga-id
NEXT_PUBLIC_API_URL=your-api-url
```

### Configuración Next.js
- Image optimization habilitada
- Compression automática
- Bundle analyzer
- TypeScript strict mode
- ESLint integrado

## 🐛 Troubleshooting

### Problemas Comunes

1. **Hydration Mismatch**
   ```tsx
   // Usar dynamic imports para componentes con estado del cliente
   const Component = dynamic(() => import('./Component'), { ssr: false });
   ```

2. **Animaciones Jittery**
   ```css
   /* Usar transform en lugar de cambiar layout properties */
   .smooth-animation {
     will-change: transform;
     transform: translateZ(0);
   }
   ```

3. **Performance en Móviles**
   ```tsx
   // Reducir animaciones en dispositivos lentos
   const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
   ```

## 📈 Roadmap

- [ ] PWA implementation
- [ ] Dark mode support
- [ ] Internacionalización (i18n)
- [ ] A/B testing integration
- [ ] Advanced analytics
- [ ] Component testing

## 🤝 Contribuir

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📝 License

MIT License - ver [LICENSE.md](LICENSE.md) para detalles.

## 🙏 Agradecimientos

- **Next.js Team** - Framework increíble
- **Framer** - Animaciones fluidas
- **Tailwind CSS** - Sistema de utilidades
- **Lucide** - Iconos hermosos
- **Vercel** - Platform de deploy
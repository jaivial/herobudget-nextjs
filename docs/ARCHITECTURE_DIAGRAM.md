# Multi-Language System Architecture

## System Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         User Access                              │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  /privacidad     │
                    │  (Redirect Page) │
                    └──────────────────┘
                              │
                 ┌────────────┴────────────┐
                 │   Language Detection    │
                 │   1. URL Parameter      │
                 │   2. LocalStorage       │
                 │   3. Browser Language   │
                 │   4. Default (en_GB)    │
                 └─────────────────────────┘
                              │
                              ▼
                  ┌─────────────────────┐
                  │  /privacidad/es_ES  │
                  │  (Dynamic Route)    │
                  └─────────────────────┘
                              │
            ┌─────────────────┴──────────────────┐
            │                                     │
            ▼                                     ▼
    ┌──────────────┐                    ┌──────────────┐
    │   Metadata   │                    │  Components  │
    │  Generation  │                    │   Rendering  │
    └──────────────┘                    └──────────────┘
            │                                     │
            │                                     │
    ┌───────────────────┐              ┌──────────────────┐
    │ • Title           │              │ • Hero Section   │
    │ • Description     │              │ • Policy Section │
    │ • OpenGraph       │              │ • Data Protection│
    │ • hreflang        │              │ • User Rights    │
    │ • Canonical URL   │              │ • Contact Form   │
    └───────────────────┘              └──────────────────┘
                                                 │
                                                 ▼
                                       ┌──────────────────┐
                                       │   Translations   │
                                       │   getPrivacy     │
                                       │   Translations   │
                                       │   (es_ES)        │
                                       └──────────────────┘
                                                 │
                                                 ▼
                                       ┌──────────────────┐
                                       │ Localized Content│
                                       │  Displayed to    │
                                       │      User        │
                                       └──────────────────┘
```

## Component Architecture

```
┌────────────────────────────────────────────────────────────────────┐
│                            Header                                   │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  ┌───────────┐ │
│  │   Logo   │  │   Nav    │  │ Language Selector│  │ Downloads │ │
│  └──────────┘  └──────────┘  └──────────────────┘  └───────────┘ │
└────────────────────────────────────────────────────────────────────┘
                                      │
                                      │ (User clicks)
                                      ▼
                          ┌─────────────────────┐
                          │ Language Modal      │
                          │ ┌─────────────────┐ │
                          │ │ Search Box      │ │
                          │ └─────────────────┘ │
                          │ ┌─────────────────┐ │
                          │ │ 🇪🇸 Español     │ │
                          │ │ 🇬🇧 English     │ │
                          │ │ 🇫🇷 Français    │ │
                          │ │ 🇩🇪 Deutsch     │ │
                          │ │ ... (35 total)  │ │
                          │ └─────────────────┘ │
                          └─────────────────────┘
                                      │
                                      │ (User selects)
                                      ▼
                          ┌─────────────────────┐
                          │ 1. Save to          │
                          │    localStorage     │
                          │ 2. Update URL       │
                          │ 3. Reload page      │
                          └─────────────────────┘
```

## Data Flow

```
┌──────────────────────────────────────────────────────────────────┐
│                     Translation System                            │
└──────────────────────────────────────────────────────────────────┘

    lib/i18n/locales.ts
    ┌────────────────────────────┐
    │ LOCALES (35 languages)     │
    │ ┌────────────────────────┐ │
    │ │ es_ES: {               │ │
    │ │   code: 'es_ES',       │ │
    │ │   name: 'Spanish...',  │ │
    │ │   nativeName: '...',   │ │
    │ │   flag: '🇪🇸'          │ │
    │ │ }                      │ │
    │ └────────────────────────┘ │
    └────────────────────────────┘
                │
                ▼
    lib/i18n/privacy-translations.ts
    ┌────────────────────────────┐
    │ PRIVACY_TRANSLATIONS       │
    │ ┌────────────────────────┐ │
    │ │ es_ES: {               │ │
    │ │   hero: {...},         │ │
    │ │   policy: {...},       │ │
    │ │   dataProtection: {...}│ │
    │ │   userRights: {...},   │ │
    │ │   contact: {...}       │ │
    │ │ }                      │ │
    │ └────────────────────────┘ │
    └────────────────────────────┘
                │
                ▼
    components/privacy/*.tsx
    ┌────────────────────────────┐
    │ const t =                  │
    │   getPrivacyTranslations   │
    │   (locale)                 │
    │                            │
    │ <h1>{t.hero.title}</h1>    │
    └────────────────────────────┘
```

## Storage Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Client-Side Storage                       │
└─────────────────────────────────────────────────────────────┘

    Browser LocalStorage
    ┌────────────────────────┐
    │ preferred_locale       │
    │ └─> "es_ES"            │
    └────────────────────────┘
              │
              ▼
    Browser Navigator API
    ┌────────────────────────┐
    │ navigator.languages    │
    │ └─> ["es-ES", "es"]    │
    └────────────────────────┘
              │
              ▼
    URL State
    ┌────────────────────────┐
    │ /privacidad/es_ES      │
    └────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    Server-Side Storage                       │
└─────────────────────────────────────────────────────────────┘

    Static Generation
    ┌────────────────────────────────────────────┐
    │ .next/server/app/privacidad/[locale]/      │
    │ ├── es_ES.html                             │
    │ ├── en_GB.html                             │
    │ ├── fr_FR.html                             │
    │ └── ... (35 files)                         │
    └────────────────────────────────────────────┘
```

## Routing Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Next.js App Router                      │
└─────────────────────────────────────────────────────────────┘

app/
├── privacidad/
│   ├── page.tsx                    ← Client-side redirect
│   │   • Detects browser language
│   │   • Checks localStorage
│   │   • Redirects to /privacidad/[locale]
│   │
│   └── [locale]/
│       └── page.tsx                ← Dynamic route
│           • generateStaticParams() → 35 routes
│           • generateMetadata() → SEO per language
│           • Renders localized components

Generated Routes (35):
/privacidad/ar_SA
/privacidad/ca_ES
/privacidad/cs_CZ
... (32 more)
/privacidad/zh_CN
```

## Language Selector Component Flow

```
┌────────────────────────────────────────────────────────────┐
│                  LanguageSelector Component                 │
└────────────────────────────────────────────────────────────┘

    State Management
    ┌────────────────────┐
    │ isOpen: boolean    │ ← Modal visibility
    │ searchQuery: string│ ← Filter languages
    │ selectedLocale     │ ← Current language
    └────────────────────┘
            │
            ▼
    User Interactions
    ┌────────────────────────────────┐
    │ 1. Click button                │
    │    └─> Open modal              │
    │                                │
    │ 2. Type in search              │
    │    └─> Filter languages        │
    │                                │
    │ 3. Click language              │
    │    └─> handleSelectLocale()    │
    │        ├─> Save to localStorage│
    │        ├─> Update URL          │
    │        └─> Close modal         │
    │                                │
    │ 4. Press Escape                │
    │    └─> Close modal             │
    └────────────────────────────────┘
            │
            ▼
    Filtered Display
    ┌────────────────────────────────┐
    │ filteredLocales.map(locale =>  │
    │   <Button>                     │
    │     {locale.flag}              │
    │     {locale.nativeName}        │
    │     {isSelected && <Check />}  │
    │   </Button>                    │
    │ )                              │
    └────────────────────────────────┘
```

## Build Process

```
┌────────────────────────────────────────────────────────────┐
│                     Build Time Flow                         │
└────────────────────────────────────────────────────────────┘

npm run build
      │
      ▼
┌──────────────────┐
│ Next.js Compiler │
└──────────────────┘
      │
      ├─> generateStaticParams()
      │   └─> Returns 35 locale codes
      │
      ├─> For each locale:
      │   ├─> generateMetadata(locale)
      │   │   └─> Create SEO tags
      │   │
      │   └─> Render page
      │       ├─> PrivacyHeroSection(locale)
      │       ├─> PrivacyPolicySection(locale)
      │       ├─> DataProtectionSection(locale)
      │       ├─> UserRightsSection(locale)
      │       └─> ContactPrivacySection(locale)
      │
      └─> Output
          ├─> 35 × HTML files
          ├─> 35 × Metadata
          └─> Shared JS bundles

Result:
✓ Compiled successfully
✓ Generating static pages (41/41)
✓ Build complete
```

## Performance Optimization

```
┌────────────────────────────────────────────────────────────┐
│                   Optimization Strategy                     │
└────────────────────────────────────────────────────────────┘

Static Generation (SSG)
├─> All pages pre-rendered
├─> No server-side overhead
└─> Instant page loads

Code Splitting
├─> Each route loads only its code
├─> Shared chunks cached
└─> Dynamic imports for modal

Lazy Loading
├─> Footer component
├─> Language modal
└─> Heavy animations

Caching
├─> LocalStorage for preferences
├─> Static assets cached
└─> CDN-ready

Bundle Size
├─> LanguageSelector: ~15 kB
├─> Translations: ~5 kB per language
└─> Total First Load: 194 kB
```

## SEO Architecture

```
┌────────────────────────────────────────────────────────────┐
│                    SEO Implementation                       │
└────────────────────────────────────────────────────────────┘

Per-Page Metadata
┌────────────────────────────┐
│ <title>                    │ ← Translated title
│ <meta description>         │ ← Translated description
│ <link rel="canonical">     │ ← Current URL
│ <link rel="alternate"      │
│   hreflang="es-ES"         │ ← All 35 languages
│   href="/privacidad/es_ES">│
│ <meta property="og:locale">│ ← OpenGraph locale
└────────────────────────────┘

Sitemap Entry (Example)
┌────────────────────────────────────┐
│ <url>                              │
│   <loc>/privacidad/es_ES</loc>     │
│   <xhtml:link                      │
│     rel="alternate"                │
│     hreflang="en-GB"               │
│     href="/privacidad/en_GB" />    │
│   <xhtml:link                      │
│     rel="alternate"                │
│     hreflang="fr-FR"               │
│     href="/privacidad/fr_FR" />    │
│   ... (35 alternates)              │
│ </url>                             │
└────────────────────────────────────┘
```

---

**System Status:** ✅ Production Ready
**Last Updated:** 2024-10-03
**Version:** 1.0.0

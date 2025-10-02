# Multi-Language System - Quick Reference Guide

## 🚀 Quick Start

### How It Works
1. User visits `/privacidad`
2. System detects browser language
3. Redirects to `/privacidad/{locale}` (e.g., `/privacidad/es_ES`)
4. Page loads with translations
5. User can change language via selector in header/sidebar

## 📋 Key URLs

### Base Redirect
- `/privacidad` - Auto-detects and redirects

### Language-Specific Pages
All 35 languages available at `/privacidad/{locale}`:

| Language | Code | URL |
|----------|------|-----|
| English (UK) | en_GB | `/privacidad/en_GB` |
| English (US) | en_US | `/privacidad/en_US` |
| Spanish (Spain) | es_ES | `/privacidad/es_ES` |
| Spanish (Mexico) | es_MX | `/privacidad/es_MX` |
| French (France) | fr_FR | `/privacidad/fr_FR` |
| German (Germany) | de_DE | `/privacidad/de_DE` |
| Italian (Italy) | it_IT | `/privacidad/it_IT` |
| Portuguese (Brazil) | pt_BR | `/privacidad/pt_BR` |
| Japanese (Japan) | ja_JP | `/privacidad/ja_JP` |
| Chinese (China) | zh_CN | `/privacidad/zh_CN` |
| Korean (Korea) | ko_KR | `/privacidad/ko_KR` |
| Russian (Russia) | ru_RU | `/privacidad/ru_RU` |
| ... and 23 more | | [See LANGUAGE_CODES.md](./LANGUAGE_CODES.md) |

## 🔧 Common Tasks

### 1. Add a New Language Translation

**Step 1:** Add translation object in `lib/i18n/privacy-translations.ts`:
```typescript
const nl_NL: PrivacyTranslations = {
  hero: {
    title: 'Privacybeleid',
    subtitle: 'Uw privacy is belangrijk voor ons...',
    lastUpdated: 'Laatst bijgewerkt'
  },
  policy: {
    title: 'Ons Privacy Engagement',
    intro: 'Hero Budget beschermt uw privacy...',
    sections: {
      dataCollection: {
        title: 'Gegevensverzameling',
        content: 'We verzamelen alleen...'
      },
      // ... rest of sections
    }
  },
  // ... rest of translation
};
```

**Step 2:** Add to the translations map:
```typescript
export const PRIVACY_TRANSLATIONS: Record<string, PrivacyTranslations> = {
  // ... existing translations
  nl_NL,
};
```

**Step 3:** Rebuild:
```bash
npm run build
```

Done! The new language is now available.

### 2. Change Default Language

Edit `lib/i18n/locales.ts`:
```typescript
export const DEFAULT_LOCALE = 'es_ES'; // Changed from 'en_GB'
```

### 3. Add Language Selector to Another Page

```typescript
import LanguageSelector from '@/components/LanguageSelector';
import { detectBrowserLocale } from '@/lib/i18n/locale-detector';

function MyPage() {
  const [locale, setLocale] = useState(detectBrowserLocale());

  return (
    <div>
      <LanguageSelector currentLocale={locale} variant="button" />
    </div>
  );
}
```

### 4. Get Current Language in a Component

**Option A - From URL:**
```typescript
'use client';
import { usePathname } from 'next/navigation';

function MyComponent() {
  const pathname = usePathname();
  const locale = pathname.split('/')[2] || 'en_GB';

  return <div>Current language: {locale}</div>;
}
```

**Option B - From Browser:**
```typescript
'use client';
import { useState, useEffect } from 'react';
import { detectBrowserLocale } from '@/lib/i18n/locale-detector';

function MyComponent() {
  const [locale, setLocale] = useState('en_GB');

  useEffect(() => {
    setLocale(detectBrowserLocale());
  }, []);

  return <div>Current language: {locale}</div>;
}
```

### 5. Use Translations in a Component

```typescript
import { getPrivacyTranslations } from '@/lib/i18n/privacy-translations';

function MyComponent({ locale }: { locale: string }) {
  const t = getPrivacyTranslations(locale);

  return (
    <div>
      <h1>{t.hero.title}</h1>
      <p>{t.hero.subtitle}</p>
    </div>
  );
}
```

## 🎨 Language Selector Variants

### Button Variant (Default)
```tsx
<LanguageSelector
  currentLocale="es_ES"
  variant="button"
/>
```
Shows: `🇪🇸 Español`

### Compact Variant
```tsx
<LanguageSelector
  currentLocale="es_ES"
  variant="compact"
/>
```
Shows: `🌐 🇪🇸`

### Custom Styling
```tsx
<LanguageSelector
  currentLocale="es_ES"
  variant="button"
  className="w-full justify-center bg-blue-500"
/>
```

## 🔍 Language Detection Logic

The system uses this priority order:

1. **URL Parameter** - `/privacidad/es_ES` → `es_ES`
2. **LocalStorage** - User's saved preference
3. **Browser Setting** - `navigator.languages`
4. **Default Fallback** - `en_GB`

### Example Detection Flow:
```
User Browser: Chrome (Spain)
navigator.languages = ['es-ES', 'es', 'en']

Step 1: Check URL → None found
Step 2: Check localStorage → None found
Step 3: Check browser → 'es-ES' found
Step 4: Normalize → 'es_ES'
Step 5: Validate → Supported ✓
Result: es_ES
```

## 📱 Mobile vs Desktop

### Desktop Header
- Language selector appears in navbar
- Between navigation items and download buttons
- Button variant with full language name

### Mobile Sidebar
- Dedicated "Language" section
- Appears after navigation items
- Full-width button for easy tapping

## 🌍 Adding New Locale to System

1. **Add to locales.ts:**
```typescript
export const LOCALES: Record<string, Locale> = {
  // ...
  new_LOCALE: {
    code: 'new_LOCALE',
    name: 'Language Name (Country)',
    nativeName: 'Native Language Name',
    flag: '🏴',
  },
};
```

2. **Translation automatically uses fallback** until you add specific translations

3. **Rebuild** to generate new static route

## ✅ Testing Your Changes

### Test Language Detection
```javascript
// In browser console:
localStorage.setItem('preferred_locale', 'es_ES');
window.location.reload();
// Should redirect to /privacidad/es_ES
```

### Test Language Switch
1. Open language selector modal
2. Search for a language
3. Click to select
4. Verify URL changes
5. Verify content updates
6. Refresh page
7. Verify language persists

### Test Invalid Locale
Visit `/privacidad/invalid_XX`
- Should show 404 page

## 🐛 Troubleshooting

### Language Not Showing
- Check locale code matches exactly (case-sensitive)
- Verify locale added to `LOCALES` in `locales.ts`
- Rebuild application

### Translations Not Loading
- Check translation added to `PRIVACY_TRANSLATIONS`
- Verify translation object structure matches `PrivacyTranslations` interface
- Check browser console for errors

### Language Selector Not Opening
- Verify `LanguageSelector` imported correctly
- Check z-index conflicts with other modals
- Ensure `currentLocale` prop is provided

### Build Errors
- Run `npm run build` to see specific errors
- Check TypeScript errors in translation objects
- Verify all required translation fields are present

## 📊 Performance Tips

1. **Static Generation** - All pages pre-rendered at build time
2. **Code Splitting** - Each locale loads only its translations
3. **Lazy Loading** - Modal loads on-demand
4. **Local Storage** - Reduces detection overhead on return visits

## 🎯 Best Practices

### DO:
✅ Keep translation strings consistent across languages
✅ Use native language names in selector
✅ Test on multiple browsers
✅ Provide fallbacks for missing translations
✅ Update all languages when adding new content

### DON'T:
❌ Hardcode language strings in components
❌ Mix locale formats (always use `xx_XX`)
❌ Skip translation validation
❌ Forget to rebuild after changes
❌ Remove fallback translations

## 📞 Support

For issues or questions:
1. Check this guide
2. Review [MULTI_LANGUAGE_IMPLEMENTATION.md](./MULTI_LANGUAGE_IMPLEMENTATION.md)
3. Inspect browser console for errors
4. Check Next.js build output

---

**Last Updated:** 2024-10-03
**System Version:** 1.0.0
**Supported Languages:** 35

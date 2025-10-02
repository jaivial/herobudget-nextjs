'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { detectBrowserLocale, getPreferredLocale } from '@/lib/i18n/locale-detector';
import { DEFAULT_LOCALE } from '@/lib/i18n/locales';

/**
 * Privacy Page - Browser Language Detection & Redirect
 * Redirects to the appropriate language-specific privacy page based on:
 * 1. Browser language detection
 * 2. Fallback to English (British) if browser language is not supported
 */

export default function PrivacyRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Get the preferred locale (browser detection or fallback)
    const preferredLocale = getPreferredLocale();

    // Redirect to the locale-specific page
    // If detection fails, DEFAULT_LOCALE (en_GB) will be used
    const targetLocale = preferredLocale || DEFAULT_LOCALE;

    router.replace(`/privacidad/${targetLocale}`);
  }, [router]);

  // Show loading state while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mb-4"></div>
        <p className="text-gray-600 font-medium">Loading Privacy Policy...</p>
      </div>
    </div>
  );
}

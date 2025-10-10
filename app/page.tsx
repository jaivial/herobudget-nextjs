import { redirect } from 'next/navigation';
import { DEFAULT_LOCALE } from '@/lib/i18n/locales';

/**
 * Root Home Page
 * Redirects to the default locale page
 */

export default function RootHomePage() {
  redirect(`/${DEFAULT_LOCALE}`);
}
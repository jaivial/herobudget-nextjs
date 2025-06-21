import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import FAQSection from "@/components/support/FAQSection";
import ContactSection from "@/components/support/ContactSection";
import TutorialsSection from "@/components/support/TutorialsSection";
import TicketSection from "@/components/support/TicketSection";

// Importación dinámica para el Footer
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-64 bg-gray-800"></div>,
});

/**
 * Support Page
 * Página completa de soporte al cliente con FAQ, contacto y tutoriales
 */

export const metadata: Metadata = {
  title: "Soporte - Hero Budget",
  description: "Centro de ayuda de Hero Budget. Encuentra respuestas a tus preguntas, tutoriales detallados y contacta con nuestro equipo de soporte.",
  keywords: ["soporte", "ayuda", "FAQ", "contacto", "hero budget", "asistencia"],
  openGraph: {
    title: "Soporte - Hero Budget",
    description: "Centro de ayuda de Hero Budget. Encuentra respuestas a tus preguntas, tutoriales detallados y contacta con nuestro equipo de soporte.",
    type: "website",
  },
};

export default function SupportPage() {
  return (
    <>
      {/* Header fijo */}
      <Header />

      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}

        {/* FAQ Section */}
        <FAQSection />

        {/* Tutorials Section */}
        <TutorialsSection />

        {/* Ticket Section */}
        <TicketSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

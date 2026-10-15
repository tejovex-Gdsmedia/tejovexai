import type { Metadata } from "next";
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: "Contact Tejovex AI | Get Your Free AI Audit Today",
  description: "Ready to automate your business? Contact Tejovex AI for a free AI audit and discovery call. WhatsApp support available 24/7.",
  alternates: {
    canonical: "https://tejovexai.in/contact",
  },
  openGraph: {
    title: "Contact Tejovex AI | Get Your Free AI Audit Today",
    description: "Ready to automate your business? Contact Tejovex AI for a free AI audit and discovery call.",
    url: "https://tejovexai.in/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}

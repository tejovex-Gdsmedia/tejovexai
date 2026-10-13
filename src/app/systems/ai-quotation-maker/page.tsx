import type { Metadata } from "next";
import AiQuotationMakerClient from './AiQuotationMakerClient';

export const metadata: Metadata = {
  title: "AI Quotation Maker | Instant AI Quotation Generator",
  description: "Generate instant, professional quotations with AI. AI Quotation Maker is the fastest way to create accurate, branded quotes for your business.",
  alternates: {
    canonical: "https://tejovex.ai/systems/ai-quotation-maker",
  },
  openGraph: {
    title: "AI Quotation Maker | Instant AI Quotation Generator",
    description: "Generate instant, professional quotations with AI. Fast, consistent, and ready to send to your client in minutes.",
    url: "https://tejovex.ai/systems/ai-quotation-maker",
    type: "website",
  },
};

export default function AiQuotationMakerPage() {
  return <AiQuotationMakerClient />;
}

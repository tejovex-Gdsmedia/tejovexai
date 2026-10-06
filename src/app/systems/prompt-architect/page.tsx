import type { Metadata } from "next";
import PromptArchitectClient from './PromptArchitectClient';

export const metadata: Metadata = {
  title: "Prompt Architect | AI Prompt Builder Tool",
  description: "Build, test, and refine AI prompts for your business workflows. Prompt Architect is the smartest way to create powerful AI agents for WhatsApp, lead follow-ups, and customer support.",
  alternates: {
    canonical: "https://tejovex.ai/systems/prompt-architect",
  },
  openGraph: {
    title: "Prompt Architect | AI Prompt Builder Tool",
    description: "Build, test, and refine AI prompts for your business workflows with our no-code Prompt Architect tool.",
    url: "https://tejovex.ai/systems/prompt-architect",
    type: "website",
  },
};

export default function PromptArchitectPage() {
  return <PromptArchitectClient />;
}

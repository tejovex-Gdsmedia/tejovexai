import type { Metadata } from "next";
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: "Tejovex AI | AI Automation & Intelligent Business Systems",
  description: "Tejovex AI helps Indian MSMEs automate operations, sales, marketing and customer support with intelligent AI agents working 24×7 at lowest cost.",
  alternates: {
    canonical: "https://tejovexai.in",
  },
  openGraph: {
    title: "Tejovex AI | AI Automation & Intelligent Business Systems",
    description: "Tejovex AI helps Indian MSMEs automate operations, sales, marketing and customer support with intelligent AI agents working 24×7.",
    url: "https://tejovexai.in",
    type: "website",
  },
};

export default function Home() {
  return <HomeClient />;
}

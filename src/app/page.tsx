import type { Metadata } from "next";
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: "Tejovex AI | AI Automation & Intelligent Business Systems",
  description: "Tejovex AI helps Indian MSMEs automate operations, sales, marketing and customer support with intelligent AI agents working 24×7 at lowest cost.",
  alternates: {
    canonical: "https://tejovex.ai",
  },
  openGraph: {
    title: "Tejovex AI | AI Automation & Intelligent Business Systems",
    description: "Tejovex AI helps Indian MSMEs automate operations, sales, marketing and customer support with intelligent AI agents working 24×7.",
    url: "https://tejovex.ai",
    type: "website",
  },
};

export default function Home() {
  return <HomeClient />;
}

import type { Metadata } from "next";
import { ScrollProgressBar } from '../../components/shared/ScrollProgressBar';
import { SectionDivider } from '../../components/shared/SectionDivider';
import AboutHero from '../../components/about/about-hero';
import AboutValues from '../../components/about/about-values';
import AboutTechStack from '../../components/about/about-stack';
import AboutOutcomes from '../../components/about/about-outcomes';
import AboutTestimonials from '../../components/about/about-testimonials';
import AboutFAQ from '../../components/about/about-faq';
import AboutContactForm from '../../components/about/about-contact';

export const metadata: Metadata = {
  title: "About Tejovex AI | Our Story, Values & Mission",
  description: "Learn about Tejovex AI's mission to empower Indian MSMEs with intelligent AI automation. Discover our values, team, and commitment to business transformation.",
  alternates: {
    canonical: "https://tejovex.ai/about",
  },
  openGraph: {
    title: "About Tejovex AI | Our Story, Values & Mission",
    description: "Learn about Tejovex AI's mission to empower Indian MSMEs with intelligent AI automation.",
    url: "https://tejovex.ai/about",
    type: "website",
  },
};

export default function AboutPage() {
    return (
        <main className="bg-bg">
            <ScrollProgressBar />

            <AboutHero />
            <SectionDivider />

            <AboutValues />
            <SectionDivider />

            <AboutTechStack />
            <SectionDivider />

            <AboutOutcomes />
            <SectionDivider />

            <AboutTestimonials />
            <SectionDivider />

            <AboutFAQ />
            <SectionDivider />

            <AboutContactForm />
        </main>
    );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/common/footer";
import { CookieBanner } from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tejovex.ai"),
  title: "Tejovex AI | AI Automation & Intelligent Business Systems",
  description: "Tejovex AI helps businesses automate operations, sales, marketing and customer support with intelligent AI agents and connected workflows.",
  alternates: {
    canonical: "https://tejovex.ai",
  },
  openGraph: {
    title: "Tejovex AI | AI Automation & Intelligent Business Systems",
    description: "Tejovex AI helps businesses automate operations, sales, marketing and customer support with intelligent AI agents and connected workflows.",
    url: "https://tejovex.ai",
    siteName: "Tejovex AI",
    images: [
      {
        url: "https://tejovex.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tejovex AI - AI Automation Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejovex AI | AI Automation & Intelligent Business Systems",
    description: "Tejovex AI helps businesses automate operations, sales, marketing and customer support with intelligent AI agents and connected workflows.",
    images: ["https://tejovex.ai/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Analytics - Replace G-XXXXXXXXXX with your actual GA4 Measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <link rel="canonical" href="https://tejovex.ai" />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

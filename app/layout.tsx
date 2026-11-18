// app/layout.tsx
import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import InstallPWA from "@/components/InstallPWA";

// Load fonts
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "Church of God | Belong. Believe. Become.",
    template: "%s | Church of God",
  },
  description: "A modern family of faith where every soul finds home, every gift finds purpose, and every life finds hope. Join us this Sunday.",
  keywords: ["Church", "Church of God", "Lagos Church", "Christian", "Maternity Center", "Creche", "Faith"],
  authors: [{ name: "Church of God" }],
  openGraph: {
    title: "Church of God | Belong. Believe. Become.",
    description: "A modern family of faith where every soul finds home. Join us this Sunday.",
    url: "https://churchofgod.org",
    siteName: "Church of God",
    images: [
      {
        url: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1200&q=80", 
        width: 1200,
        height: 630,
        alt: "Church of God - Belong. Believe. Become.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Church of God | Belong. Believe. Become.",
    description: "A modern family of faith where every soul finds home.",
    images: ["https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="bg-cream-100 text-ink-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        
        {/* PWA Components */}
        <ServiceWorkerRegister />
        <InstallPWA />
      </body>
    </html>
  );
}
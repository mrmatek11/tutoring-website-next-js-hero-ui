import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";
import React from "react";
import StructuredData from "@/components/StructuredData";

import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import LinglowLogo from "@/components/LinglowLogo";
import BackgroundAnimations from "@/components/BackgroundAnimations";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Ulepszone SEO metadata
export const metadata: Metadata = {
  title: {
    default: "Linglow Academy - Indywidualne Lekcje Angielskiego",
    template: `%s | Linglow Academy - Nauka Angielskiego`,
  },
  description: "Indywidualne lekcje online dostosowane do Twoich potrzeb. Bez stresu, z pasją i widocznymi efektami.",
  keywords: [
    "nauka angielskiego online",
    "lekcje angielskiego",
    "korepetytor angielskiego",
    "angielski online",
    "indywidualne lekcje angielskiego",
    "nauka języka angielskiego",
    "korepetycje angielski",
    "angielski konwersacje",
    "Linglow Academy",
    "lekcje próbne angielski"
  ],
  authors: [{ name: "Lidia Sobisz", url: "https://linglow.pl" }],
  creator: "Lidia Sobisz",
  publisher: "Linglow Academy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://linglow.pl',
    title: 'Linglow Academy - Indywidualne Lekcje Angielskiego',
    description: 'Naucz się angielskiego skutecznie z Linglow Academy. Indywidualne lekcje online dostosowane do Twoich potrzeb.',
    siteName: 'Linglow Academy',
    images: [
      {
        url: '/og-image.jpg',
        width: 682,
        height: 453,
        alt: 'Linglow Academy - Nauka Angielskiego Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linglow Academy - Nauka Angielskiego Online',
    description: 'Indywidualne lekcje angielskiego online. Bez stresu, z pasją i widocznymi efektami.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://linglow.pl',
  },
  verification: {
    google: '', // Dodaj po weryfikacji w Google Search Console
  },
  category: 'education',
  icons: {
    icon: [
      { url: '/favicon.svg', sizes: '16x16', type: 'image/svg' },
      { url: '/favicon.svg', sizes: '32x32', type: 'image/svg' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// Ikony mediów społecznościowych
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pl">
      <head />
              <StructuredData />

      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col min-h-screen">
            {/* Kontener dla animacji tła - rozciąga się na całą wysokość */}
            <div className="absolute inset-0 w-full min-h-full z-0">
              <BackgroundAnimations />
            </div>
            
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow relative z-10">
              {children}
            </main>
            
            <footer className="w-full backdrop-blur-md bg-background/70 border-t border-divider/20 py-6 relative z-10">
              <div className="container mx-auto max-w-7xl px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center">
                    <Link href="/" className="group">
                      <div className="relative">
                        <LinglowLogo />
                      </div>
                    </Link>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <Link 
                      href="mailto:lidia@lidiasobisz.pl" 
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100/30 text-primary-600 hover:bg-primary-200/40 hover:text-primary-800 transition-colors"
                      title="Email"
                    >
                      <EmailIcon />
                    </Link>
                    
                    <Link 
                      href="https://linkedin.com/in/lidiasobisz" 
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100/30 text-primary-600 hover:bg-primary-200/40 hover:text-primary-800 transition-colors"
                      title="LinkedIn"
                    >
                      <LinkedInIcon />
                    </Link>
                    
                    <Link 
                      href="https://instagram.com/linglowacademy" 
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100/30 text-primary-600 hover:bg-primary-200/40 hover:text-primary-800 transition-colors"
                      title="Instagram"
                    >
                      <InstagramIcon />
                    </Link>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-divider/20 flex flex-col md:flex-row items-center justify-between text-xs text-default-500">
                  <p>© {new Date().getFullYear()} Linglow Academy</p>
                  <p className="mt-2 md:mt-0">
                    Stworzone przez <span className="text-emerald-500 font-medium">Mateusz Wirkus</span>
                  </p>
                </div>
              </div>
            </footer>
            <SpeedInsights />
          </div>
        </Providers>
      </body>
    </html>
  );
}

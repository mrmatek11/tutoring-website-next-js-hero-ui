"use client";

import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";

import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import LinglowLogo from "@/components/LinglowLogo";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

// Zoptymalizowane animacje tła
const BackgroundAnimations = React.memo(() => (
  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
    {/* Główne kule */}
    <motion.div
      className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-200/25 to-green-300/30 rounded-full blur-3xl"
      animate={{ 
        scale: [1, 1.3, 1], 
        opacity: [0.2, 0.4, 0.2],
        x: [0, 50, 0],
        y: [0, -30, 0]
      }}
      transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
    />
    
    <motion.div
      className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-l from-blue-200/20 to-emerald-200/25 rounded-full blur-3xl"
      animate={{ 
        scale: [1, 1.2, 1], 
        opacity: [0.15, 0.35, 0.15],
        x: [0, -60, 0],
        y: [0, 25, 0]
      }}
      transition={{ repeat: Infinity, duration: 18, ease: "easeInOut", delay: 4 }}
    />
    
    <motion.div
      className="absolute top-1/4 right-1/3 w-40 h-40 bg-gradient-to-br from-yellow-200/30 to-amber-300/25 rounded-full blur-2xl"
      animate={{ 
        scale: [1, 1.4, 1], 
        opacity: [0.2, 0.4, 0.2],
        rotate: [0, 360]
      }}
      transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 2 }}
    />

    {/* Prostokąty geometryczne */}
    <motion.div
      className="absolute top-1/3 left-1/4 w-32 h-20 bg-gradient-to-r from-emerald-300/15 to-green-400/20 rounded-2xl blur-xl"
      animate={{ 
        rotate: [0, 45, 0],
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{ repeat: Infinity, duration: 14, ease: "easeInOut", delay: 1 }}
    />

    <motion.div
      className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-blue-300/20 to-emerald-300/25 rounded-lg blur-lg"
      animate={{ 
        rotate: [0, 180, 360],
        x: [0, 40, 0],
        opacity: [0.2, 0.5, 0.2]
      }}
      transition={{ repeat: Infinity, duration: 20, ease: "easeInOut", delay: 6 }}
    />

    {/* Trójkąty */}
    <motion.div
      className="absolute top-2/3 right-1/4"
      animate={{ 
        rotate: [0, 360],
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{ repeat: Infinity, duration: 15, ease: "easeInOut", delay: 3 }}
    >
      <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-emerald-300/30 blur-sm" />
    </motion.div>

    {/* Elementy rozłożone po całej wysokości */}
    <motion.div
      className="absolute top-[10%] left-10 w-16 h-16 bg-gradient-to-br from-emerald-400/25 to-green-500/30 rounded-full blur-xl"
      animate={{ 
        y: [0, -25, 0],
        scale: [1, 1.3, 1]
      }}
      transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
    />
    
    <motion.div
      className="absolute top-[60%] right-20 w-12 h-12 bg-gradient-to-br from-blue-400/25 to-emerald-400/30 rounded-full blur-lg"
      animate={{ 
        y: [0, 20, 0],
        x: [0, -15, 0]
      }}
      transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 5 }}
    />

    <motion.div
      className="absolute top-[80%] left-2/3 w-28 h-16 bg-gradient-to-r from-pink-200/20 to-rose-300/25 rounded-xl blur-lg"
      animate={{ 
        rotate: [0, -45, 0],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{ repeat: Infinity, duration: 16, ease: "easeInOut", delay: 7 }}
    />

    <motion.div
      className="absolute top-[90%] left-1/2 w-8 h-8 bg-gradient-to-br from-teal-300/30 to-cyan-400/35 transform rotate-45 blur-sm"
      animate={{ 
        rotate: [45, 225, 45],
        scale: [1, 1.2, 1]
      }}
      transition={{ repeat: Infinity, duration: 25, ease: "easeInOut", delay: 4 }}
    />

    {/* Linie */}
    <motion.div
      className="absolute top-[40%] right-1/3 w-1 h-24 bg-gradient-to-b from-emerald-300/20 to-transparent rounded-full blur-sm"
      animate={{ 
        scaleY: [1, 1.5, 1],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
    />

    <motion.div
      className="absolute top-[15%] left-1/8 w-6 h-6 bg-gradient-to-br from-yellow-400/40 to-amber-500/45 rounded-full blur-sm"
      animate={{ 
        scale: [1, 1.8, 1],
        opacity: [0.4, 0.7, 0.4]
      }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
    />

    {/* Dodatkowe elementy na dole strony */}
    <motion.div
      className="absolute top-[95%] right-1/4 w-20 h-20 bg-gradient-to-br from-purple-200/15 to-indigo-300/20 rounded-full blur-xl"
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.3, 0.15]
      }}
      transition={{ repeat: Infinity, duration: 14, ease: "easeInOut", delay: 8 }}
    />

    <motion.div
      className="absolute top-[85%] left-1/5 w-14 h-14 bg-gradient-to-r from-orange-200/20 to-red-300/25 rounded-lg blur-lg"
      animate={{ 
        rotate: [0, 90, 0],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{ repeat: Infinity, duration: 18, ease: "easeInOut", delay: 10 }}
    />
  </div>
));

BackgroundAnimations.displayName = 'BackgroundAnimations';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
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

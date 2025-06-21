"use client";

import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion"; // Dodaj ten import

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import LinglowLogo from "@/components/LinglowLogo";
import { SpeedInsights } from "@vercel/speed-insights/next";

// ... (reszta importów i definicji)

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
          <div className="relative flex flex-col min-h-screen overflow-hidden">
            {/* Animowane elementy tła */}
            <motion.div
              className="fixed top-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-200/30 to-green-300/30 rounded-full blur-3xl pointer-events-none"
              animate={{ 
                scale: [1, 1.3, 1], 
                opacity: [0.2, 0.4, 0.2],
                x: [0, 50, 0],
                y: [0, -30, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 12, 
                ease: "easeInOut" 
              }}
            />
            
            <motion.div
              className="fixed bottom-32 right-16 w-80 h-80 bg-gradient-to-l from-blue-200/20 to-emerald-200/25 rounded-full blur-3xl pointer-events-none"
              animate={{ 
                scale: [1, 1.2, 1], 
                opacity: [0.15, 0.35, 0.15],
                x: [0, -60, 0],
                y: [0, 25, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 14, 
                ease: "easeInOut",
                delay: 4
              }}
            />
            
            <motion.div
              className="fixed top-1/4 right-1/3 w-40 h-40 bg-gradient-to-br from-yellow-200/30 to-amber-300/25 rounded-full blur-2xl pointer-events-none"
              animate={{ 
                scale: [1, 1.4, 1], 
                opacity: [0.2, 0.4, 0.2],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 8, 
                ease: "easeInOut",
                delay: 2
              }}
            />
            
            <motion.div
              className="fixed top-1/2 left-10 z-0 pointer-events-none"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6, 
                ease: "easeInOut" 
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full blur-xl" />
            </motion.div>
            
            <motion.div
              className="fixed bottom-1/4 right-20 z-0 pointer-events-none"
              animate={{ 
                y: [0, 15, 0],
                x: [0, -10, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 8, 
                ease: "easeInOut",
                delay: 3
              }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-full blur-lg" />
            </motion.div>
            
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            {/* ... (reszta kodu) */}
          </div>
        </Providers>
      </body>
    </html>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { title } from "@/components/primitives";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";

const stats = [
  {
    value: "50+",
    label: "lekcji 1:1 zrealizowanych z sukcesem",
    description: "i liczba ta ciągle rośnie każdego tygodnia!",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    featured: false
  },
  {
    value: "100%",
    label: "zadowolonych uczniów",
    description: "realne efekty, większa pewność siebie i przełamane bariery językowe.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    featured: true
  },
  {
    value: "5★",
    label: "średnia ocen uczniów",
    description: "z dumą budujemy relacje oparte na jakości i zaufaniu.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    featured: false
  }
];

export default function SuccessStories() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className={`${title({ size: "lg" })} mb-6`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 bg-clip-text text-transparent">
                Historie sukcesu i realne rezultaty
              </span>
            </motion.h2>
            <br />
            <motion.p
              className="text-lg text-default-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Zobacz, jak nasze lekcje pomagają uczniom osiągać cele językowe i budować pewność siebie
            </motion.p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {stat.featured && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Chip
                      color="success"
                      variant="solid"
                      className="bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold"
                    >
                      Najlepszy wynik
                    </Chip>
                  </motion.div>
                )}

                <motion.div
                  whileHover={!stat.featured ? {
                    scale: 1.02,
                    y: -8
                  } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className={`h-full transition-all duration-300 ${
                      stat.featured
                        ? 'border-2 border-emerald-500 shadow-2xl shadow-emerald-500/20 scale-105'
                        : 'border border-gray-200 hover:border-emerald-300 hover:shadow-xl'
                    }`}
                  >
                    <CardBody className="p-8">
                      <div className="text-center">
                        <motion.div
                          className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg ${
                            stat.featured
                              ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white'
                              : 'bg-gradient-to-r from-emerald-400 to-emerald-500 text-white'
                          }`}
                          whileHover={{ rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                          {stat.icon}
                        </motion.div>
                        
                        <div className="text-4xl font-bold text-foreground mb-4">
                          {stat.value}
                        </div>
                        
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {stat.label}
                        </h3>
                        
                        <p className="text-default-600 text-sm leading-relaxed">
                          {stat.description}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Testimonial quote */}
          <motion.div
            className="mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card 
              className="border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300"
            >
              <CardBody className="p-8 sm:p-10 relative">
                {/* Quote mark decoration */}
                <div className="absolute top-6 left-8 text-6xl text-emerald-200 dark:text-emerald-700/40 font-serif leading-none">
                  "
                </div>
                
                <div className="relative z-10">
                  <p className="text-lg sm:text-xl text-foreground italic leading-relaxed mb-6 pl-6">
                    Dzięki indywidualnemu podejściu i atmosferze, którą tworzy Lidia, przełamałam swoją barierę językową. 
                    Po trzech miesiącach regularnych zajęć czuję się pewniej w codziennych rozmowach po angielsku, 
                    a mój szef zauważył postęp w komunikacji z klientami.
                  </p>
                  
                  <div className="flex items-center pl-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      A
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-foreground">Anna K.</p>
                      <p className="text-sm text-default-600">Specjalistka ds. obsługi klienta</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            className="text-center mt-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 text-emerald-600 font-semibold">
              <span className="text-emerald-600 text-lg">✓</span>
              <span>Sprawdzone rezultaty</span>
            </div>
            <p className="text-default-700 text-sm">
              Każdy sukces naszych uczniów to dla nas powód do dumy i motywacja do dalszej pracy.
            </p>
            <p className="text-default-600 text-xs">
              Dołącz do grona zadowolonych uczniów już dziś
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

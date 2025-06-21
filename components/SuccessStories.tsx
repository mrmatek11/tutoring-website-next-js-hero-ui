"use client";

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
    )
  },
  {
    value: "100%",
    label: "zadowolonych uczniów",
    description: "realne efekty, większa pewność siebie i przełamane bariery językowe.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    value: "5★",
    label: "średnia ocen uczniów",
    description: "z dumą budujemy relacje oparte na jakości i zaufaniu.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  }
];

export default function SuccessStories() {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >

          
          <h2 className={title({ size: "lg" })}>
            <span className="bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-700 bg-clip-text text-transparent">
              Historie sukcesu i realne rezultaty
            </span>
          </h2>
          <p className="mt-4 text-default-600 max-w-2xl mx-auto">
            Zobacz, jak nasze lekcje pomagają uczniom osiągać cele językowe i budować pewność siebie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card 
                className="h-full backdrop-blur-sm border border-emerald-100/50 bg-gradient-to-br from-white/80 to-emerald-50/60 
                         shadow-lg hover:shadow-emerald-600/20 transition-all duration-300"
                as={motion.div}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)"
                }}
              >
                <CardBody className="p-8 relative overflow-hidden">
                  {/* Floating glow effect */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-emerald-400/30 to-green-500/40 rounded-full blur-xl"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 4, 
                      ease: "easeInOut",
                      delay: index * 1.5
                    }}
                  />
                  
                  <div className="flex flex-col items-center text-center relative z-10">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6"
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <div className="text-white">
                        {stat.icon}
                      </div>
                    </motion.div>
                    
                    <div className="text-5xl font-extrabold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent mb-4">
                      {stat.value}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-primary-900 mb-3">
                      {stat.label}
                    </h3>
                    
                    <p className="text-primary-700 text-sm">
                      {stat.description}
                    </p>
                    
                    {/* Decorative elements */}
                    <motion.div
                      className="absolute bottom-4 right-4 w-12 h-12 border-2 border-emerald-300/40 rounded-lg"
                      animate={{ rotate: [0, 180, 360] }}
                      transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                      style={{ opacity: 0.2 }}
                    />
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Testimonial quote */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card 
            className="backdrop-blur-md bg-gradient-to-br from-white/60 to-emerald-50/40 border border-emerald-100/50 
                     shadow-lg hover:shadow-xl transition-all duration-500"
            as={motion.div}
            whileHover={{ scale: 1.02 }}
          >
            <CardBody className="p-8 sm:p-10 relative overflow-hidden">
              {/* Quote mark decoration */}
              <div className="absolute top-6 left-8 text-8xl text-emerald-200/60 font-serif leading-none">
                "
              </div>
              
              <div className="relative z-10">
                <p className="text-lg sm:text-xl text-primary-800 italic leading-relaxed mb-6 pl-6">
                  Dzięki indywidualnemu podejściu i atmosferze, którą tworzy Lidia, przełamałam swoją barierę językową. 
                  Po trzech miesiącach regularnych zajęć czuję się pewniej w codziennych rozmowach po angielsku, 
                  a mój szef zauważył postęp w komunikacji z klientami.
                </p>
                
                <div className="flex items-center pl-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    A
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-primary-900">Anna K.</p>
                    <p className="text-sm text-primary-600">Specjalistka ds. obsługi klienta</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute bottom-10 right-10 w-16 h-16 bg-emerald-300/20 rounded-xl blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1], 
                  opacity: [0.3, 0.5, 0.3],
                  rotate: [0, 5, 0]
                }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              />
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

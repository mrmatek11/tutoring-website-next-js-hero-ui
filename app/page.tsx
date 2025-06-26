"use client";

import { motion } from "framer-motion";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Avatar, AvatarGroup } from "@heroui/avatar";
import { Badge } from "@heroui/badge";
import { Progress } from "@heroui/progress";
import { title, subtitle } from "@/components/primitives";
import { useState, useEffect } from "react";
import { Divider } from "@heroui/divider";
import PricingTable from "@/components/PricingTable";
import SuccessStories from "@/components/SuccessStories";
import CallToActionContact from "@/components/CallToActionContact";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CalendlyEmbed from '@/components/CalendlyEmbed'; // Dostosuj ścieżkę



export default function LingGlowImproved() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen">
      {/* HERO SECTION - Zmniejszona wysokość, usunięte centrowanie w pionie */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        {/* Floating background elements - zoptymalizowane */}


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start max-w-7xl mx-auto w-full">          
          {/* Left Column - Enhanced Content */}
          <motion.div
  className="text-center lg:text-left space-y-6 lg:space-y-8 pt-4 lg:pt-8 w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
     

            {/* Enhanced Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className={title({ size: "lg" })}>
                <motion.span 
                  className="text-primary block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  Spokojnie.
                </motion.span>
                <motion.span 
                  className="text-emerald-500 block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  Twój angielski
                </motion.span>
                <motion.span 
                  className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 bg-clip-text text-transparent block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  nabierze płynności.
                </motion.span>
              </h1>
            </motion.div>

            {/* Enhanced Subtitle */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className={subtitle({ class: "max-w-2xl" })}>
                <span className="text-primary-700 font-medium block mb-2">
                  Indywidualne lekcje, które dostosowują się do Ciebie – bez presji, bez sztywnych reguł.
                </span> 
                <span className="text-emerald-600 font-medium block mb-1">
                  Z nami nauczysz się angielskiego
                </span>
                <span className="text-emerald-700 font-medium">
                  skutecznie, z wyczuciem, w Twoim rytmie.
                </span>
              </p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="pt-4 flex flex-col sm:flex-row gap-4"
            >
              <Button
                as={motion.a}      
                href="https://calendly.com/linglow/"
                target="_blank"
                rel="noreferrer"
                color="success"
                size="lg"
                radius="lg"
                className="bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-shadow"
                endContent={
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                }
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Zarezerwuj lekcję próbną
              </Button>
              

            </motion.div>

            {/* Enhanced Trust indicators */}
            <motion.div
              className="pt-8 space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <AvatarGroup max={4} size="sm">
                    <Avatar src="https://i.pravatar.cc/150?u=1" />
                    <Avatar src="https://i.pravatar.cc/150?u=2" />
                    <Avatar src="https://i.pravatar.cc/150?u=3" />
                    <Avatar src="https://i.pravatar.cc/150?u=4" />
                  </AvatarGroup>
                  <span className="text-sm text-gray-600 font-medium">500+ zadowolonych uczniów</span>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Chip color="warning" variant="flat" size="sm" className="bg-yellow-50 border border-yellow-200">
                    <div className="flex items-center gap-1">
                      <div className="flex text-yellow-500">
                        {[1,2,3,4,5].map((i) => (
                          <motion.svg 
                            key={i} 
                            className="w-3 h-3 fill-current" 
                            viewBox="0 0 20 20"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.2 + i * 0.1, duration: 0.3 }}
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </motion.svg>
                        ))}
                      </div>
                      <span className="ml-1 font-medium">5.0 średnia ocen</span>
                    </div>
                  </Chip>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Card className="max-w-md bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200">
                  <CardBody className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-emerald-900">Postęp uczniów</span>
                      <Badge color="success" size="sm" className="bg-emerald-600">95%</Badge>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
                    >
                      <Progress 
                        value={95} 
                        color="success" 
                        size="sm"
                        className="mb-2"
                      />
                    </motion.div>
                    <p className="text-xs text-emerald-700 font-medium">
                      95% uczniów osiąga swoje cele w ciągu 3 miesięcy
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Calendly Embed */}
          <motion.div
            className="relative w-full overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <div className="sticky top-24 w-full max-w-full">
              <CalendlyEmbed
                url="https://calendly.com/linglow/"
                title="Zarezerwuj swoją lekcję próbną"
                description="Wybierz dogodny termin i rozpocznij swoją przygodę z angielskim już dziś!"
                height={650}
                prefill={{
                  customAnswers: {
                    "source": "landing-page-hero"
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Additional floating elements for visual appeal */}
     

      
    </section>

    <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            
            {/* Left Column - Content */}
            <motion.div
              className="space-y-8 lg:space-y-10"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-sm bg-background/50 border-default-200 shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                <CardBody className="p-8 lg:p-10">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Chip 
                        color="primary" 
                        variant="flat" 
                        className="mb-6 font-semibold"
                      >
                        O mnie
                      </Chip>
                    </motion.div>
                    
                    <motion.h1 
                      className="text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.7 }}
                      viewport={{ once: true }}
                    >
                      O mnie — ale dla <span className="text-primary">Ciebie</span>
                    </motion.h1>
                     
                    <div className="space-y-6 text-foreground">
                      <motion.p 
                        className="text-xl font-bold text-primary leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        Angielski bez stresu, za to z celem.
                      </motion.p>

                      <motion.p 
                        className="text-lg leading-relaxed text-foreground-600"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        Nie musisz znać wszystkich czasów ani mówić perfekcyjnie, żeby dogadać się z ludźmi. 
                        Potrzebujesz tylko przestrzeni, w której możesz popełniać błędy, ćwiczyć bez presji i widzieć efekty.
                      </motion.p>
                      
                      <motion.p 
                        className="text-lg leading-relaxed text-foreground-600"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        Nazywam się <span className="font-semibold text-primary">Lidia</span> i tworzę właśnie taką przestrzeń — pomagam przełamać blokadę, poczuć się pewnie i mówić po angielsku 
                        w zgodzie ze sobą. Nie odhaczamy zadań z podręcznika. Rozmawiamy o tym, co dla Ciebie ważne. 
                        Praktycznie, skutecznie i z lekkością.
                      </motion.p>
                      
                      <motion.p 
                        className="text-lg font-semibold text-foreground leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        Chcesz, żeby angielski wreszcie miał sens? Zrób pierwszy krok. Ja zajmę się resztą.
                      </motion.p>
                    </div>
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    className="mt-10 grid grid-cols-2 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="text-center p-6 bg-primary/10 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="text-3xl font-bold text-primary mb-2">500+</div>
                      <div className="text-sm font-medium text-foreground-600">Zadowolonych uczniów</div>
                    </motion.div>
                    <motion.div 
                      className="text-center p-6 bg-secondary/10 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="text-3xl font-bold text-secondary mb-2">5+</div>
                      <div className="text-sm font-medium text-foreground-600">Lat doświadczenia</div>
                    </motion.div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        as="a"
                        href="https://calendly.com/linglow/30min"
                        target="_blank"
                        rel="noreferrer"
                        color="primary"
                        className="w-full font-bold text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                        size="lg"
                      >
                        Umów bezpłatną konsultację
                      </Button>
                    </motion.div>
                  </motion.div>
                </CardBody>
              </Card>

              {/* Certyfikaty */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <motion.div whileHover={{ scale: 1.05, rotate: 1 }}>
                  <Chip color="success" variant="flat" className="font-medium px-4 py-2">
                    TESOL Certified
                  </Chip>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, rotate: -1 }}>
                  <Chip color="primary" variant="flat" className="font-medium px-4 py-2">
                    Cambridge Certified
                  </Chip>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, rotate: 1 }}>
                  <Chip color="secondary" variant="flat" className="font-medium px-4 py-2">
                    Business English
                  </Chip>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - Zdjęcie */}
            <motion.div
              className="relative mx-auto max-w-lg"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Subtle glow effect */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-60"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4, 
                    ease: "easeInOut" 
                  }}
                />

                {/* Photo container */}
                <motion.div
                  className="relative z-10"
                  whileHover={{ y: -8, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Card className="overflow-hidden shadow-2xl bg-background border-default-200 hover:shadow-primary/20 transition-all duration-500">
                    <CardBody className="p-0">
                      <div className="aspect-[4/5] relative overflow-hidden">
                        <motion.img
                          src="/lidia.jpg"
                          alt="Lidia - Nauczycielka angielskiego Linglow"
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent"></div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>

                {/* Floating rating card */}
                <motion.div
                  className="absolute -bottom-6 -left-6 z-20"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 6, 
                    ease: "easeInOut"
                  }}
                >
                  <Card className="shadow-xl border-default-200">
                    <CardBody className="p-4 bg-primary/10">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-4 h-4 bg-warning rounded-sm"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ 
                                delay: i * 0.1, 
                                type: "spring",
                                stiffness: 500,
                                damping: 10
                              }}
                            />
                          ))}
                        </div>
                        <span className="font-bold text-lg text-foreground">5.0</span>
                      </div>
                      <div className="text-sm font-medium text-foreground-600 mt-1">Średnia ocen</div>
                    </CardBody>
                  </Card>
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -top-4 -right-4 z-20"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 8, 
                    ease: "easeInOut"
                  }}
                >
                  <Card className="shadow-xl border-success/20">
                    <CardBody className="p-3 bg-success/10">
                      <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-background rounded-full"></div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>

                {/* Decorative element */}
                <motion.div
                  className="absolute top-1/3 -left-8 z-20"
                  animate={{ 
                    x: [0, 10, 0],
                    y: [0, -5, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 10, 
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-6 h-6 bg-secondary rounded-full opacity-80"></div>
                </motion.div>

                <motion.div
                  className="absolute bottom-1/4 -right-6 z-20"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, -90, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 7, 
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  <div className="w-8 h-8 bg-primary/30 rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRZECIA SEKCJA - JAK MOGĘ CI POMÓC */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated background elements */}
       

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 right-20 w-20 h-20 border-2 border-emerald-300/30 rounded-lg"
          animate={{ 
            rotate: [0, 45, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8, 
            ease: "easeInOut" 
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-16 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-emerald-400/30 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 15, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6, 
            ease: "easeInOut",
            delay: 3
          }}
        />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <Chip 
                  color="success" 
                  variant="flat" 
                  size="lg"
                  startContent={
                    <motion.div 
                      className="w-2 h-2 bg-emerald-500 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  }
                >
                  Metodologia
                </Chip>
              </motion.div>

              <motion.h2
                className="text-4xl lg:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-primary">Jak mogę Ci pomóc</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 bg-clip-text text-transparent">
                  w nauce angielskiego?
                </span>
              </motion.h2>

              <motion.p
                className="text-lg text-primary-700 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="font-medium text-emerald-700">To nie są lekcje jak każde inne.</span> To spotkania 1:1 oparte na zaufaniu i sprawdzonej strukturze — dopasowanej do Twojego stylu nauki.
                <br />
                <span className="font-medium text-primary-600">Bez presji, za to z szacunkiem, troską i realnym postępem.</span>
              </motion.p>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Card 1 - Indywidualnie */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="h-full bg-gradient-to-br from-white/80 to-emerald-50/60 backdrop-blur-sm border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-300"
                  as={motion.div}
                  whileHover={{ 
                    scale: 1.02,
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
                        ease: "easeInOut" 
                      }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </motion.div>

                    <h3 className="text-2xl font-bold text-black mb-4 relative z-10">
                      Indywidualnie
                    </h3>
                    
                    <p className="text-primary-300 leading-relaxed relative z-10">
                      Każda lekcja powstaje z myślą o Tobie. Dostosowuję materiał, styl pracy i tempo do Twoich potrzeb — żadnych gotowców ani przypadkowych tematów.
                    </p>

                    {/* Decorative elements */}
                    <motion.div
                      className="absolute bottom-4 right-4 w-12 h-12 border-2 border-emerald-300/40 rounded-lg"
                      animate={{ rotate: [0, 180, 360] }}
                      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    />
                  </CardBody>
                </Card>
              </motion.div>

              {/* Card 2 - Bez stresu */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="h-full bg-gradient-to-br from-white/80 to-blue-50/60 backdrop-blur-sm border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300"
                  as={motion.div}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                  }}
                >
                  <CardBody className="p-8 relative overflow-hidden">
                    {/* Floating glow effect */}
                    <motion.div
                      className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-emerald-400/40 rounded-full blur-xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.7, 0.4]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 5, 
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                      whileHover={{ rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </motion.div>

                    <h3 className="text-2xl font-bold text-black mb-4 relative z-10">
                      Bez stresu i presji
                    </h3>
                    
                    <p className="text-primary-300 leading-relaxed relative z-10">
                      Tu nie ma ocen, rywalizacji ani sztywnej atmosfery. Budujemy przestrzeń, w której możesz uczyć się na spokojnie — po swojemu, we własnym rytmie.
                    </p>

                    {/* Decorative elements */}
                    <motion.div
                      className="absolute bottom-6 right-6 w-8 h-8 bg-gradient-to-br from-yellow-400/60 to-amber-500/70 rounded-full"
                      animate={{ 
                        scale: [1, 1.4, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3, 
                        ease: "easeInOut",
                        delay: 2
                      }}
                    />
                  </CardBody>
                </Card>
              </motion.div>

              {/* Card 3 - Zauważalne efekty */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="h-full bg-gradient-to-br from-white/80 to-yellow-50/60 backdrop-blur-sm border-yellow-200/50 shadow-xl hover:shadow-2xl transition-all duration-300"
                  as={motion.div}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.25)"
                  }}
                >
                  <CardBody className="p-8 relative overflow-hidden">
                    {/* Floating glow effect */}
                    <motion.div
                      className="absolute -bottom-4 -right-4 w-28 h-28 bg-gradient-to-br from-yellow-400/25 to-amber-500/35 rounded-full blur-xl"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                        rotate: [0, 90, 0]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 6, 
                        ease: "easeInOut",
                        delay: 2
                      }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </motion.div>

                    <h3 className="text-2xl font-bold text-black mb-4 relative z-10">
                      Zauważalne efekty
                    </h3>
                    
                    <p className="text-primary-300 leading-relaxed relative z-10">
                      Małe kroki, które robią dużą różnicę. Skupiam się na tym, co naprawdę Ci się przyda. Angielski staje się narzędziem, nie przeszkodą.
                    </p>

                    {/* Decorative elements */}
                    <motion.div
                      className="absolute top-6 right-6 w-6 h-6 border-2 border-emerald-400/50 rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        borderColor: ["rgba(52, 211, 153, 0.5)", "rgba(34, 197, 94, 0.8)", "rgba(52, 211, 153, 0.5)"]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 4, 
                        ease: "easeInOut" 
                      }}
                    />
                  </CardBody>
                </Card>
              </motion.div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-xl text-primary-700 font-medium leading-relaxed">
                  Widzisz siebie w takim podejściu? 
                  <br />
                  <span className="text-emerald-700 font-semibold">Zajrzyj do grafiku i wybierz termin.</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Button
                  as={motion.a}
                               
  href="https://calendly.com/linglow/30min"
                  target="_blank"
                  rel="noreferrer"
                  color="success"
                  size="lg"
                  radius="lg"
                  className="bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold px-10 py-6 text-lg shadow-xl"
                  endContent={
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </motion.svg>
                  }
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Zobacz dostępne terminy
                </Button>
              </motion.div>

              {/* Decorative floating elements around CTA */}
              <motion.div
                className="absolute -z-10"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { repeat: Infinity, duration: 20, ease: "linear" },
                  scale: { repeat: Infinity, duration: 8, ease: "easeInOut" }
                }}
              >
                <div className="w-32 h-32 border border-emerald-300/30 rounded-full"></div>
              </motion.div>
           
            </motion.div>
          </div>
        </div>
      </section>

      {/* CZWARTA SEKCJA - TO COŚ DLA CIEBIE JEŚLI */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-300/10 to-green-400/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1], 
            opacity: [0.1, 0.3, 0.1],
            x: [0, 40, 0],
            y: [0, -25, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-primary to-emerald-300/12 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.08, 0.25, 0.08],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 18, 
            ease: "easeInOut",
            delay: 5
          }}
        />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-6"
              >
            
              </motion.div>

              <motion.h2
                className="text-4xl lg:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-primary">To coś dla Ciebie,</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 bg-clip-text text-transparent">
                  jeśli...
                </span>
              </motion.h2>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="h-full backdrop-blur-sm border-primary-200/40 shadow-lg hover:shadow-xl transition-all duration-300"
                  as={motion.div}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.15)"
                  }}
                >
                  <CardBody className="p-8 relative overflow-hidden">
                    <motion.div
                      className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-400/20 to-emerald-400/25 rounded-full blur-xl"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 6, 
                        ease: "easeInOut" 
                      }}
                    />

                    <div className="flex items-start gap-4 relative z-10">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                        whileHover={{ rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </motion.div>
                      <div>
                        <p className="text-primary-800 leading-relaxed text-lg">
                          <span className="font-semibold">...próbowałaś/eś różnych sposobów, ale nic nie trafiało idealnie w Twoje potrzeby.</span> Tutaj stawiamy na indywidualność — nauka, która dostosowuje się do Ciebie, a nie Ty do niej.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="h-full backdrop-blur-sm border-emerald-200/40 shadow-lg hover:shadow-xl transition-all duration-300"
                  as={motion.div}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.15)"
                  }}
                >
                  <CardBody className="p-8 relative overflow-hidden">
                    <motion.div
                      className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-br from-emerald-400/20 to-green-400/25 rounded-full blur-xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.25, 0.45, 0.25]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 7, 
                        ease: "easeInOut",
                        delay: 2
                      }}
                    />

                    <div className="flex items-start gap-4 relative z-10">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                        whileHover={{ rotate: -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                      </motion.div>
                      <div>
                        <p className="text-primary-800 leading-relaxed text-lg">
                          <span className="font-semibold">...chcesz mówić z pewnością i swobodą — bez blokad i obaw.</span> Znajdziesz tu miejsce, gdzie Twój głos rozkwita, krok po kroku, w duchu pełnym troski.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="h-full backdrop-blur-sm border-yellow-200/40 shadow-lg hover:shadow-xl transition-all duration-300"
                  as={motion.div}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px -12px rgba(245, 158, 11, 0.15)"
                  }}
                >
                  <CardBody className="p-8 relative overflow-hidden">
                    <motion.div
                      className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-yellow-400/25 to-amber-400/30 rounded-full blur-xl"
                      animate={{ 
                        scale: [1, 1.4, 1],
                        opacity: [0.2, 0.4, 0.2],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 10, 
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />

                    <div className="flex items-start gap-4 relative z-10">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                        whileHover={{ rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </motion.div>
                      <div>
                        <p className="text-primary-800 leading-relaxed text-lg">
                          <span className="font-semibold">...doceniasz efektywność i praktyczne rozwiązania.</span> Skupiamy się na efektach i stałym rozwoju, tak by Twój angielski rósł z każdym spotkaniem.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="h-full backdrop-blur-sm border-pink-200/40 shadow-lg hover:shadow-xl transition-all duration-300"
                  as={motion.div}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px -12px rgba(236, 72, 153, 0.15)"
                  }}
                >
                  <CardBody className="p-8 relative overflow-hidden">
                    <motion.div
                      className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-rose-400/25 rounded-full blur-xl"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 5, 
                        ease: "easeInOut",
                        delay: 3
                      }}
                    />

                    <div className="flex items-start gap-4 relative z-10">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                        whileHover={{ rotate: -10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </motion.div>
                      <div>
                        <p className="text-primary-800 leading-relaxed text-lg">
                          <span className="font-semibold">…szukasz nauczyciela, który naprawdę Cię słucha i rozumie.</span> Kogoś, kto wspiera Cię bez oceniania — bo Twoje postępy i komfort są najważniejsze.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              
            </div>
          </div>
        </div>
      </section>
      <PricingTable />
      {/* PIĄTA SEKCJA - CTA */}
<SuccessStories />
      <CallToActionContact />
    </div>
  );
}
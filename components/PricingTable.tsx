"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Badge } from "@heroui/badge";
import { title } from "@/components/primitives";


export default function SubscriptionPricingTable() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const plans = [
    {
      id: 'light',
      name: 'Light',
      description: 'Na spokojnie, w swoim tempie',
      price: 299,
      originalPrice: 399,
      priceNote: 'miesięcznie',
      discount: 25,
      lessons: '1 tygodniowo (4/mc)',
      popular: false,
      buttonText: 'Wybierz Light',
      calendlyLink: 'https://calendly.com/linglow/linglow-light',
      features: [
        { name: 'Tablica Postępów', included: true },
        { name: 'Materiały PDF', included: true },
        { name: 'Podsumowanie tygodnia', included: false },
        { name: 'Audio Feedback', included: false },
        { name: 'Writing task z korektą', included: false },
        { name: 'Mini-pakiety tematyczne', included: false },
        { name: 'Wsparcie tekstowe (chat)', included: false },
        { name: 'Newsletter', included: true }
      ]
    },
    {
      id: 'intensive',
      name: 'Intensive',
      description: 'Dla tych, którzy chcą przyspieszać',
      price: 559,
      originalPrice: 749,
      priceNote: 'miesięcznie',
      discount: 25,
      lessons: '2 tygodniowo (8/mc)',
      popular: true,
      buttonText: 'Wybierz Intensive',
      calendlyLink: 'https://calendly.com/linglow/linglow-intense',
      features: [
        { name: 'Tablica Postępów', included: true },
        { name: 'Materiały PDF', included: true },
        { name: 'Podsumowanie tygodnia', included: true, note: 'co 2 tygodnie' },
        { name: 'Audio Feedback', included: true, note: '1/mc' },
        { name: 'Writing task z korektą', included: false },
        { name: 'Mini-pakiety tematyczne', included: true },
        { name: 'Wsparcie tekstowe (chat)', included: false },
        { name: 'Newsletter', included: true }
      ]
    },
    {
      id: 'plus',
      name: 'Plus',
      description: 'Pełne zanurzenie z osobistym wsparciem',
      price: 899,
      originalPrice: 1199,
      priceNote: 'miesięcznie',
      discount: 25,
      lessons: '3 tygodniowo (12/mc)',
      popular: false,
      buttonText: 'Wybierz Plus',
      calendlyLink: 'https://calendly.com/linglow/linglow-plus',
      features: [
        { name: 'Tablica Postępów', included: true },
        { name: 'Materiały PDF', included: true },
        { name: 'Podsumowanie tygodnia', included: true, note: 'co tydzień' },
        { name: 'Audio Feedback', included: true, note: '2/mc' },
        { name: 'Writing task z korektą', included: true, note: '1/mc' },
        { name: 'Mini-pakiety tematyczne', included: true },
        { name: 'Wsparcie tekstowe (chat)', included: true },
        { name: 'Newsletter', included: true }
      ]
    }
  ];

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
                Plany Subskrypcyjne Linglow
              </span>
            </motion.h2>
            <br></br>
            <motion.p
              className="text-lg text-default-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Wybierz plan dopasowany do Twojego tempa nauki i celów językowych
            </motion.p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {plan.popular && (
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
                      Najczęściej wybierany
                    </Chip>
                  </motion.div>
                )}

                <motion.div
                  whileHover={!plan.popular ? {
                    scale: 1.02,
                    y: -8
                  } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className={`h-full transition-all duration-300 ${
                      plan.popular
                        ? 'border-2 border-emerald-500 shadow-2xl shadow-emerald-500/20 scale-105'
                        : 'border border-gray-200 hover:border-emerald-300 hover:shadow-xl'
                    }`}
                  >
                    <CardBody className="p-8">
                      <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-foreground mb-2">
                          {plan.name}
                        </h3>
                        <p className="text-default-600 mb-4 leading-relaxed">
                          {plan.description}
                        </p>
                        <div className="text-emerald-600 font-semibold text-lg mb-4">
                          {plan.lessons}
                        </div>

                        <div className="mb-6">
                          <div className="flex items-center justify-center gap-3 mb-2">
                            <Badge
                              color="danger"
                              variant="flat"
                              className="text-sm font-semibold"
                            >
                              -{plan.discount}% OSZCZĘDNOŚĆ
                            </Badge>
                          </div>

                          <div className="flex items-center justify-center gap-2 mb-1">
                            <span className="text-lg text-default-400 line-through">
                              {plan.originalPrice} zł
                            </span>
                          </div>
                          
                          <div className="flex items-baseline justify-center gap-1">
                            <span className="text-4xl font-bold text-foreground">
                              {plan.price} zł
                            </span>
                            <span className="text-default-600">
                              / {plan.priceNote}
                            </span>
                          </div>
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="mb-8"
                        >
                          <Button
                            as={motion.a}
                            href={plan.calendlyLink}
                            target="_blank"
                            rel="noreferrer"
                            color={plan.popular ? "success" : "default"}
                            variant={plan.popular ? "solid" : "bordered"}
                            size="lg"
                            className={`w-full font-semibold ${
                              plan.popular
                                ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg'
                                : 'hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700'
                            }`}
                          >
                            {plan.buttonText}
                          </Button>
                        </motion.div>
                      </div>

                      {/* Features List */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground text-center mb-4">
                          Co obejmuje plan:
                        </h4>
                        {plan.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * featureIndex, duration: 0.4 }}
                            viewport={{ once: true }}
                          >
                            {feature.included ? (
                              <span className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0 text-lg">✓</span>
                            ) : (
                              <span className="w-5 h-5 text-default-300 mt-0.5 flex-shrink-0 text-lg">✗</span>
                            )}
                            <div className="flex-1">
                              <span className={`text-sm ${
                                feature.included ? 'text-foreground' : 'text-default-400'
                              }`}>
                                {feature.name}
                              </span>
                              {feature.note && (
                                <span className="text-xs text-emerald-600 ml-2">
                                  ({feature.note})
                                </span>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>

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
              <span>Gwarancja satysfakcji</span>
            </div>
            <p className="text-default-700 text-sm">
              Wszystkie ceny zawierają VAT. Możesz anulować subskrypcję w każdym momencie.
            </p>
            <p className="text-default-600 text-xs">
              Ceny promocyjne dostępne przez ograniczony czas
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
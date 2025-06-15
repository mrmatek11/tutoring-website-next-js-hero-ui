"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Badge } from "@heroui/badge";
import { title } from "@/components/primitives";

export default function PricingTable() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const plans = [
    {
      id: 'single',
      name: 'Jedna lekcja',
      description: 'Spróbuj i przekonaj się, jak może wyglądać dobra nauka.',
      price: 85,
      originalPrice: null,
      pricePerLesson: null,
      discount: null,
      popular: false,
      buttonText: 'Wybierz Lekcję'
    },
    {
      id: 'package4',
      name: 'Pakiet 4 lekcji',
      description: 'Doskonałe tempo dla tych, którzy chcą widzieć postępy i czuć satysfakcję.',
      price: 306,
      originalPrice: 340,
      pricePerLesson: '76,50 zł za lekcję',
      discount: 10,
      popular: true,
      buttonText: 'Wybierz Pakiet'
    },
    {
      id: 'package8',
      name: 'Pakiet 8 lekcji',
      description: 'Pełne zaangażowanie, które procentuje na każdym kroku.',
      price: 544,
      originalPrice: 680,
      pricePerLesson: '68 zł za lekcję',
      discount: 20,
      popular: false,
      buttonText: 'Wybierz Pakiet'
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Animation */}
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
                Wybierz swój plan nauki
              </span>
            </motion.h2>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                      popularny wybór
                    </Chip>
                  </motion.div>
                )}

                <motion.div
                  whileHover={{
                    scale: plan.popular ? 1.05 : 1.02,
                    y: -8
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className={`h-full transition-all duration-300 ${
                      plan.popular
                        ? 'border-2 border-emerald-500 shadow-2xl shadow-emerald-500/20'
                        : 'border border-gray-200 hover:border-emerald-300 hover:shadow-xl'
                    }`}
                  >
                    <CardBody className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {plan.name}
                      </h3>
                      <p className="text-default-600 mb-6 leading-relaxed min-h-[3rem]">
                        {plan.description}
                      </p>

                      <div className="mb-8">
                        <div className="flex items-center gap-3 mb-2">
                          {plan.discount && (
                            <Badge
                              color="danger"
                              variant="flat"
                              className="text-sm font-semibold"
                            >
                              -{plan.discount}%
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-baseline gap-2 mb-2">
                          {plan.originalPrice && (
                            <span className="text-lg text-default-400 line-through">
                              {plan.originalPrice} zł
                            </span>
                          )}
                          <span className="text-4xl font-bold text-foreground">
                            {plan.price} zł
                          </span>
                        </div>

                        {plan.pricePerLesson && (
                          <p className="text-emerald-600 font-semibold text-lg">
                            {plan.pricePerLesson}
                          </p>
                        )}
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
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
                    </CardBody>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-default-600">
              Wszystkie ceny zawierają materiały do nauki i wsparcie nauczyciela
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { title } from "@/components/primitives";
import { Card, CardBody } from "@heroui/card";

const stats = [
  {
    value: "50+",
    label: "lekcji 1:1 zrealizowanych z sukcesem",
    description: "i liczba ta ciągle rośnie każdego tygodnia!"
  },
  {
    value: "100%",
    label: "zadowolonych uczniów",
    description: "realne efekty, większa pewność siebie i przełamane bariery językowe."
  },
  {
    value: "5★",
    label: "średnia ocen uczniów",
    description: "z dumą budujemy relacje oparte na jakości i zaufaniu."
  }
];

export default function SuccessStories() {
  return (
    <section className="relative py-32 bg-background">
      {/* Background animations */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-20"
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
              <Card className="border border-emerald-100 hover:shadow-emerald-600/20 shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardBody className="p-8 text-center">
                  <div className="text-5xl font-extrabold text-emerald-600 mb-2">
                    {stat.value}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-default-500 text-sm">
                    {stat.description}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

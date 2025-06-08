"use client";

import { motion } from "framer-motion";
import { Link } from "@heroui/link";
import { title, subtitle } from "@/components/primitives";
import { button as buttonStyles } from "@heroui/theme";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-6 py-16 md:py-24 overflow-hidden">
      {/* Dekoracje w tle */}
      <motion.div
        className="absolute -top-10 -left-10 w-40 h-40 bg-blue-300 opacity-40 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 -right-10 w-40 h-40 bg-yellow-300 opacity-40 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
      />

      <div className="grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-12 px-6 z-10 items-center">
        {/* Lewa kolumna */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
            Najwyższa jakość nauki
          </span>

          <h1 className={title()}>
            Korepetycje Online z&nbsp;
            <span className={title({ color: "blue" })}>Języka Angielskiego</span>
          </h1>

          <div className={subtitle({ class: "mt-4 text-gray-700" })}>
            Profesjonalne lekcje online z native speakerem. Indywidualne podejście do każdego ucznia.
          </div>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              href="#bookly-form"
              className={buttonStyles({ color: "primary", radius: "lg" })}
            >
              Umów Lekcję
            </Link>
            <Link
              href="#kontakt"
              className={buttonStyles({ color: "default", variant: "bordered", radius: "lg" })}
            >
              Skontaktuj się
            </Link>
          </div>

          {/* Liczniki statystyk */}
          <div className="grid grid-cols-3 gap-4 mt-12 text-center text-blue-600">
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-gray-500">Zadowolonych uczniów</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5000+</div>
              <div className="text-sm text-gray-500">Godzin lekcji</div>
            </div>
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm text-gray-500">Zdawalność egzaminów</div>
            </div>
          </div>
        </motion.div>

        {/* Prawa kolumna - obrazek */}
        <motion.div
          className="relative mx-auto max-w-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Obwódka animowana */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl scale-105 animate-pulse"></div>
          <img
            src="https://server982666.nazwa.pl/wp/wp-content/uploads/2025/04/IMG_6803_ze_zmianami.png"
            alt="Lekcje języka angielskiego online"
            className="relative z-10 w-full h-auto drop-shadow-2xl rounded-full border-4 border-white"
          />
          {/* Dodatkowe pływające elementy */}
          <motion.div
            className="absolute top-1/4 -right-6 w-12 h-12 bg-blue-100 rounded-full z-0"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 -left-6 w-16 h-16 bg-yellow-100 rounded-full z-0"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

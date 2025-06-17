"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, Tab } from "@heroui/tabs";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export default function BookingPage() {
  const [mounted, setMounted] = useState(false);
  const [selected, setSelected] = useState("consultation");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const calendlyUrls = {
    consultation: "https://calendly.com/linglow/30min",
    package4: "https://calendly.com/linglow/pakiet5?back=1",
    package8: "https://calendly.com/linglow/pakiet8?back=1"
  };

  const descriptions = {
    consultation: "Darmowa konsultacja trwająca 30 minut, podczas której poznamy się i omówimy Twoje potrzeby.",
    package4: "Pakiet 4 lekcji - doskonałe tempo dla tych, którzy chcą widzieć postępy i czuć satysfakcję.",
    package8: "Pakiet 8 lekcji - pełne zaangażowanie, które procentuje na każdym kroku."
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-primary-900 mb-4">
            Zarezerwuj swoje zajęcia
          </h1>
          <p className="text-xl text-primary-700 max-w-2xl mx-auto">
            Wybierz rodzaj zajęć i dogodny termin, aby rozpocząć naukę.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Tabs 
            aria-label="Rodzaje spotkań" 
            color="success" 
            variant="underlined"
            selectedKey={selected}
            onSelectionChange={setSelected as any}
            className="mb-8"
          >
            <Tab key="consultation" title="Konsultacja">
              <CalendlyEmbed 
                url={calendlyUrls.consultation}
                title="Darmowa konsultacja"
                description={descriptions.consultation}
              />
            </Tab>
            <Tab key="package4" title="Pakiet 4 lekcji">
              <CalendlyEmbed 
                url={calendlyUrls.package4}
                title="Pakiet 4 lekcji"
                description={descriptions.package4}
              />
            </Tab>
            <Tab key="package8" title="Pakiet 8 lekcji">
              <CalendlyEmbed 
                url={calendlyUrls.package8}
                title="Pakiet 8 lekcji"
                description={descriptions.package8}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

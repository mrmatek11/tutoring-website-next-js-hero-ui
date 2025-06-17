"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Spinner } from "@heroui/spinner";
import { Chip } from "@heroui/chip";

interface CalendlyEmbedProps {
  url: string;
  title?: string;
  description?: string;
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
  height?: number;
}

export default function CalendlyEmbed({
  url,
  title = "Wybierz dogodny termin",
  description = "Zarezerwuj spotkanie w kilka sekund",
  prefill,
  height = 700
}: CalendlyEmbedProps) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showCalendly, setShowCalendly] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Dynamicznie załaduj skrypt Calendly tylko gdy kalendarz jest widoczny
    if (showCalendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [showCalendly]);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  // Budowanie URL z parametrami prefill
  const buildCalendlyUrl = () => {
    if (!prefill) return url;
    
    const params = new URLSearchParams();
    
    if (prefill.name) params.append('name', prefill.name);
    if (prefill.email) params.append('email', prefill.email);
    
    if (prefill.customAnswers) {
      Object.entries(prefill.customAnswers).forEach(([key, value]) => {
        params.append(`a1=${key}`, value);
      });
    }
    
    return `${url}?${params.toString()}`;
  };

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="shadow-xl border border-emerald-200/50 overflow-hidden">
        <CardHeader className="flex flex-col gap-2 p-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Chip color="success" variant="flat" className="mb-2">
              Kalendarz
            </Chip>
            <h2 className="text-2xl font-bold text-primary-900">{title}</h2>
            <p className="text-primary-700">{description}</p>
          </motion.div>
        </CardHeader>
        
        <CardBody className="p-0 relative">
          {!showCalendly ? (
            <motion.div 
              className="flex flex-col items-center justify-center p-10 text-center space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="max-w-md">
                <h3 className="text-xl font-semibold text-primary-800 mb-4">
                  Gotowy na rezerwację spotkania?
                </h3>
                <p className="text-primary-600 mb-6">
                  Kliknij poniżej, aby wyświetlić kalendarz i wybrać termin, który najbardziej Ci odpowiada.
                </p>
                <Button
                  color="success"
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold"
                  onClick={() => setShowCalendly(true)}
                >
                  Pokaż kalendarz
                </Button>
              </div>
            </motion.div>
          ) : (
            <div 
              ref={containerRef}
              className="relative"
              style={{ 
                height: `${height}px`,
                overflow: 'hidden'
              }}
            >
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
                  <Spinner color="success" size="lg" />
                </div>
              )}
              
              {/* Używamy iframe zamiast div.calendly-inline-widget dla lepszej kontroli */}
              <iframe
                src={buildCalendlyUrl()}
                width="100%"
                height={height}
                frameBorder="0"
                title="Calendly Scheduling"
                onLoad={handleIframeLoad}
                style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          )}
        </CardBody>
        
        <CardFooter className="flex justify-between items-center p-6 bg-gray-50">
          <p className="text-sm text-gray-600">
            Powered by Calendly
          </p>
          {showCalendly && (
            <Button
              color="default"
              variant="light"
              onClick={() => setShowCalendly(false)}
            >
              Ukryj kalendarz
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

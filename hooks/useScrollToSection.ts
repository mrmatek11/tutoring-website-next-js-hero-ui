"use client";

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export const useScrollToSection = () => {
  const router = useRouter();

  const scrollToSection = useCallback((sectionId: string) => {
    const scrollToElement = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 70; // wysokość navbara
        const elementPosition = element.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    };

    // Jeśli jesteśmy już na stronie głównej
    if (window.location.pathname === '/') {
      scrollToElement();
    } else {
      // Jeśli jesteśmy na innej stronie
      router.push('/');
      // Czekamy na załadowanie strony głównej
      setTimeout(scrollToElement, 300);
    }
  }, [router]);

  return scrollToSection;
};

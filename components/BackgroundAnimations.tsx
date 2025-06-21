"use client";

import React from "react";
import { motion } from "framer-motion";

const BackgroundAnimations = React.memo(() => (
  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
    {/* Główne kule */}
    <motion.div
      className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-200/25 to-green-300/30 rounded-full blur-3xl"
      animate={{ 
        scale: [1, 1.3, 1], 
        opacity: [0.2, 0.4, 0.2],
        x: [0, 50, 0],
        y: [0, -30, 0]
      }}
      transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
    />
    
    <motion.div
      className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-l from-blue-200/20 to-emerald-200/25 rounded-full blur-3xl"
      animate={{ 
        scale: [1, 1.2, 1], 
        opacity: [0.15, 0.35, 0.15],
        x: [0, -60, 0],
        y: [0, 25, 0]
      }}
      transition={{ repeat: Infinity, duration: 18, ease: "easeInOut", delay: 4 }}
    />
    
    <motion.div
      className="absolute top-1/4 right-1/3 w-40 h-40 bg-gradient-to-br from-yellow-200/30 to-amber-300/25 rounded-full blur-2xl"
      animate={{ 
        scale: [1, 1.4, 1], 
        opacity: [0.2, 0.4, 0.2],
        rotate: [0, 360]
      }}
      transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 2 }}
    />

    {/* Prostokąty geometryczne */}
    <motion.div
      className="absolute top-1/3 left-1/4 w-32 h-20 bg-gradient-to-r from-emerald-300/15 to-green-400/20 rounded-2xl blur-xl"
      animate={{ 
        rotate: [0, 45, 0],
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{ repeat: Infinity, duration: 14, ease: "easeInOut", delay: 1 }}
    />

    <motion.div
      className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-blue-300/20 to-emerald-300/25 rounded-lg blur-lg"
      animate={{ 
        rotate: [0, 180, 360],
        x: [0, 40, 0],
        opacity: [0.2, 0.5, 0.2]
      }}
      transition={{ repeat: Infinity, duration: 20, ease: "easeInOut", delay: 6 }}
    />

    {/* Trójkąty */}
    <motion.div
      className="absolute top-2/3 right-1/4"
      animate={{ 
        rotate: [0, 360],
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{ repeat: Infinity, duration: 15, ease: "easeInOut", delay: 3 }}
    >
      <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-emerald-300/30 blur-sm" />
    </motion.div>

    {/* Elementy rozłożone po całej wysokości */}
    <motion.div
      className="absolute top-[10%] left-10 w-16 h-16 bg-gradient-to-br from-emerald-400/25 to-green-500/30 rounded-full blur-xl"
      animate={{ 
        y: [0, -25, 0],
        scale: [1, 1.3, 1]
      }}
      transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
    />
    
    <motion.div
      className="absolute top-[60%] right-20 w-12 h-12 bg-gradient-to-br from-blue-400/25 to-emerald-400/30 rounded-full blur-lg"
      animate={{ 
        y: [0, 20, 0],
        x: [0, -15, 0]
      }}
      transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 5 }}
    />

    <motion.div
      className="absolute top-[80%] left-2/3 w-28 h-16 bg-gradient-to-r from-pink-200/20 to-rose-300/25 rounded-xl blur-lg"
      animate={{ 
        rotate: [0, -45, 0],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{ repeat: Infinity, duration: 16, ease: "easeInOut", delay: 7 }}
    />

    <motion.div
      className="absolute top-[90%] left-1/2 w-8 h-8 bg-gradient-to-br from-teal-300/30 to-cyan-400/35 transform rotate-45 blur-sm"
      animate={{ 
        rotate: [45, 225, 45],
        scale: [1, 1.2, 1]
      }}
      transition={{ repeat: Infinity, duration: 25, ease: "easeInOut", delay: 4 }}
    />

    {/* Linie */}
    <motion.div
      className="absolute top-[40%] right-1/3 w-1 h-24 bg-gradient-to-b from-emerald-300/20 to-transparent rounded-full blur-sm"
      animate={{ 
        scaleY: [1, 1.5, 1],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
    />

    <motion.div
      className="absolute top-[15%] left-1/8 w-6 h-6 bg-gradient-to-br from-yellow-400/40 to-amber-500/45 rounded-full blur-sm"
      animate={{ 
        scale: [1, 1.8, 1],
        opacity: [0.4, 0.7, 0.4]
      }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
    />

    {/* Dodatkowe elementy na dole strony */}
    <motion.div
      className="absolute top-[95%] right-1/4 w-20 h-20 bg-gradient-to-br from-purple-200/15 to-indigo-300/20 rounded-full blur-xl"
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.3, 0.15]
      }}
      transition={{ repeat: Infinity, duration: 14, ease: "easeInOut", delay: 8 }}
    />

    <motion.div
      className="absolute top-[85%] left-1/5 w-14 h-14 bg-gradient-to-r from-orange-200/20 to-red-300/25 rounded-lg blur-lg"
      animate={{ 
        rotate: [0, 90, 0],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{ repeat: Infinity, duration: 18, ease: "easeInOut", delay: 10 }}
    />
  </div>
));

BackgroundAnimations.displayName = 'BackgroundAnimations';

export default BackgroundAnimations;

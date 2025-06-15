// components/AnimatedBackground.tsx
'use client';

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#85B491] rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{
          x: ["0%", "20%", "-10%", "0%"],
          y: ["0%", "-20%", "10%", "0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <motion.div
        className="absolute top-1/4 left-2/4 w-[500px] h-[500px] bg-[#2F6B58] rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{
          x: ["0%", "-10%", "20%", "0%"],
          y: ["0%", "10%", "-20%", "0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <motion.div
        className="absolute top-2/3 left-1/4 w-[400px] h-[400px] bg-[#004225] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: ["0%", "15%", "-15%", "0%"],
          y: ["0%", "-15%", "15%", "0%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    </div>
  );
}

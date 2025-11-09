import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const HeroHeader = () => {
  return (
    <div className="text-center text-white space-y-3">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20"
      >
        <Sparkles className="w-4 h-4 text-yellow-300" />
        <span className="text-sm tracking-wide">Immersive Login</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
      >
        Step into a brighter sign‑in
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-white/80 max-w-lg mx-auto text-sm sm:text-base"
      >
        Powered by a live 3D scene, subtle particles, and a responsive glass interface.
      </motion.p>
    </div>
  );
};

export default HeroHeader;

import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroHeader = () => {
  return (
    <div className="mb-8 text-center will-change-transform">
      <motion.div
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-violet-200/90 shadow-sm backdrop-blur-sm"
      >
        <Sparkles className="h-4 w-4" />
        <span className="text-xs font-medium tracking-wide">Vibrant access portal</span>
      </motion.div>
      <motion.h1
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-4xl font-semibold tracking-tight text-white sm:text-5xl"
      >
        Welcome back
      </motion.h1>
      <motion.p
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto mt-3 max-w-sm text-sm text-white/75"
      >
        Sign in to continue to your dashboard.
      </motion.p>
    </div>
  );
};

export default HeroHeader;

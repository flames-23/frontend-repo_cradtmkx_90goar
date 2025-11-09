import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_10px_40px_-10px_rgba(139,92,246,0.35)] backdrop-blur-2xl"
    >
      {/* Glow ring */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-violet-400/10 via-sky-400/10 to-transparent ring-1 ring-white/10" />
      {children}
    </motion.div>
  );
};

export default GlassCard;

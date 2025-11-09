import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const GlassCard = ({ children }) => {
  // Parallax tilt using pointer position
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);
  const translate = useTransform(y, [-50, 50], [-2, 2]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2; // center origin
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(Math.max(-50, Math.min(50, px / (rect.width / 2) * 50)));
    y.set(Math.max(-50, Math.min(50, py / (rect.height / 2) * 50)));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        translateZ: translate,
        transformStyle: 'preserve-3d',
      }}
      className="relative mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_10px_40px_-10px_rgba(139,92,246,0.35)] backdrop-blur-2xl will-change-transform"
    >
      {/* Glow ring */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-violet-400/10 via-sky-400/10 to-transparent ring-1 ring-white/10" />
      {/* Subtle inner highlight that shifts with tilt */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          background:
            'radial-gradient(60% 40% at 30% 0%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 80%)',
          transform: 'translateZ(20px)',
        }}
      />
      {children}
    </motion.div>
  );
};

export default GlassCard;

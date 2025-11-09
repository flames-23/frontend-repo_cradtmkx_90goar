import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const FloatingParticles = () => {
  // A lightweight set of blurred glowing particles drifting upward.
  const particles = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: 6 + Math.round(Math.random() * 10),
    delay: Math.random() * 6,
    duration: 8 + Math.random() * 10,
    opacity: 0.2 + Math.random() * 0.5,
    hue: Math.random() > 0.5 ? 'rgba(139,92,246,' : 'rgba(56,189,248,', // violet or sky
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full blur-md will-change-transform"
          style={{
            left: p.left,
            bottom: '-40px',
            width: p.size,
            height: p.size,
            background: `${p.hue}${p.opacity})`,
            boxShadow: `0 0 24px ${p.hue}${Math.min(p.opacity + 0.2, 0.9)})`,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -window.innerHeight * 0.6, opacity: [0, 1, 1, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

const BackgroundScene = () => {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <Spline
        scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Dynamic color wash to match the new scene (does not block pointer events) */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0.55 }}
        animate={{ opacity: [0.55, 0.75, 0.55] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(60% 50% at 20% 20%, rgba(139, 92, 246, 0.22) 0%, rgba(0,0,0,0) 60%), radial-gradient(60% 50% at 80% 30%, rgba(56, 189, 248, 0.22) 0%, rgba(0,0,0,0) 60%), linear-gradient(180deg, rgba(2,6,23,0.15) 0%, rgba(2,6,23,0.7) 100%)',
        }}
      />

      {/* Floating particles layer (non-interactive) */}
      <FloatingParticles />

      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_110%,rgba(2,6,23,0.95),rgba(2,6,23,0.25))]" />
    </div>
  );
};

export default BackgroundScene;

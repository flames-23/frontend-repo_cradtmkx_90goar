import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

// FloatingParticles: lightweight, GPU-friendly decorative particles
const FloatingParticles = () => {
  const particles = Array.from({ length: 24 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 6 + Math.random() * 10,
    delay: Math.random() * 4,
    duration: 8 + Math.random() * 10,
    opacity: 0.15 + Math.random() * 0.25,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white/60 shadow-[0_0_20px_4px_rgba(255,255,255,0.25)]"
          style={{ left: `${p.left}%`, width: p.size, height: p.size }}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '-20%', opacity: p.opacity }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            duration: p.duration,
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

const BackgroundScene = () => {
  return (
    <div className="fixed inset-0 w-full h-full">
      <Spline
        scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Soft gradient vignettes - don't block interactions */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-b from-purple-500/20 via-pink-400/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[70vw] h-[50vh] bg-gradient-to-t from-blue-500/20 via-cyan-400/10 to-transparent blur-3xl" />
      </div>

      {/* Floating particles for depth */}
      <FloatingParticles />

      {/* Subtle noise overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
    </div>
  );
};

export default BackgroundScene;

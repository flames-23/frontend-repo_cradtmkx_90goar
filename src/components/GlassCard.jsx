import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const GlassCard = ({ children }) => {
  const ref = useRef(null);

  // Motion values for parallax tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useTransform(my, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-12, 12]);

  // Soften motion with spring
  const rX = useSpring(rotateX, { stiffness: 200, damping: 20, mass: 0.8 });
  const rY = useSpring(rotateY, { stiffness: 200, damping: 20, mass: 0.8 });

  const handleMouse = (e) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = (e.clientX - bounds.left) / bounds.width; // 0..1
    const y = (e.clientY - bounds.top) / bounds.height; // 0..1
    mx.set(clamp(x - 0.5, -0.5, 0.5));
    my.set(clamp(y - 0.5, -0.5, 0.5));
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  // Inner light highlight follows cursor
  const lightX = useTransform(mx, [-0.5, 0.5], ['10%', '90%']);
  const lightY = useTransform(my, [-0.5, 0.5], ['10%', '90%']);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.01 }}
      style={{ rotateX: rX, rotateY: rY, transformStyle: 'preserve-3d' }}
      className="relative w-full max-w-md mx-auto rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl p-6 sm:p-8"
    >
      {/* Glass sheen */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(120deg, rgba(255,255,255,0.18), rgba(255,255,255,0.02))' }} />

      {/* Moving highlight */}
      <motion.div
        className="pointer-events-none absolute w-40 h-40 rounded-full bg-white/15 blur-2xl"
        style={{ left: lightX, top: lightY, translateX: '-50%', translateY: '-50%' }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;

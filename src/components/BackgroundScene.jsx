import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const BackgroundScene = () => {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <Spline
        scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Dynamic color wash to match the new scene (does not block pointer events) */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0.65 }}
        animate={{ opacity: [0.65, 0.8, 0.65] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(60% 50% at 20% 20%, rgba(139, 92, 246, 0.25) 0%, rgba(0,0,0,0) 60%), radial-gradient(60% 50% at 80% 30%, rgba(56, 189, 248, 0.25) 0%, rgba(0,0,0,0) 60%), linear-gradient(180deg, rgba(2,6,23,0.2) 0%, rgba(2,6,23,0.75) 100%)',
        }}
      />

      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_110%,rgba(2,6,23,0.95),rgba(2,6,23,0.25))]" />
    </div>
  );
};

export default BackgroundScene;

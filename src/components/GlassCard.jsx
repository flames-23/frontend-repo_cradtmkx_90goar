import React from 'react';

const GlassCard = ({ children }) => {
  return (
    <div className="relative mx-auto w-full max-w-md rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/10">
      {/* Accent ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
      {children}
    </div>
  );
};

export default GlassCard;

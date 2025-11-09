import React from 'react';
import Spline from '@splinetool/react-spline';

const BackgroundScene = () => {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <Spline
        scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Soft gradient tint to blend the scene with UI - does not block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/10 to-slate-900/60" />
      <div className="pointer-events-none absolute -inset-x-20 top-0 h-40 bg-gradient-to-b from-sky-300/20 to-transparent blur-2xl" />
    </div>
  );
};

export default BackgroundScene;

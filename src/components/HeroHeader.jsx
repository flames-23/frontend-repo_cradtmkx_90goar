import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const HeroHeader = () => {
  return (
    <div className="mb-6 text-center">
      <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-sky-400/10 px-3 py-1 text-sky-200 ring-1 ring-inset ring-sky-300/20">
        <CheckCircle2 className="h-4 w-4" />
        <span className="text-xs font-medium tracking-wide">Secure identity access</span>
      </div>
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Welcome back</h1>
      <p className="mt-2 text-sm text-white/70">Log in to manage your digital identity and access your dashboard.</p>
    </div>
  );
};

export default HeroHeader;

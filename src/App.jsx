import React from 'react';
import BackgroundScene from './components/BackgroundScene';
import GlassCard from './components/GlassCard';
import HeroHeader from './components/HeroHeader';
import LoginForm from './components/LoginForm';

function App() {
  const handleMockLogin = async ({ username, password }) => {
    // Mock async delay to simulate auth request
    await new Promise((r) => setTimeout(r, 800));
    // For now, just log. Backend wiring can replace this.
    console.log('Login attempt', { username, password });
    alert(`Welcome, ${username || 'friend'}!`);
  };

  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* 3D background */}
      <BackgroundScene />

      {/* Foreground content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl space-y-6 text-white">
          <HeroHeader />

          <GlassCard>
            <LoginForm onSubmit={handleMockLogin} />
          </GlassCard>

          <p className="text-center text-white/70 text-xs">
            Tip: Move your mouse over the card to feel the subtle 3D tilt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

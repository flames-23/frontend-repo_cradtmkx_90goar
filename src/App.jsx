import React, { useState } from 'react';
import BackgroundScene from './components/BackgroundScene';
import GlassCard from './components/GlassCard';
import LoginForm from './components/LoginForm';
import HeroHeader from './components/HeroHeader';

function App() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async ({ username }) => {
    setLoading(true);
    setMessage('');
    try {
      await new Promise((r) => setTimeout(r, 900));
      setMessage(`Welcome, ${username || 'guest'}!`);
    } catch (e) {
      setMessage('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <BackgroundScene />

      <main className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="w-full max-w-xl">
          <GlassCard>
            <HeroHeader />
            <LoginForm onSubmit={handleLogin} loading={loading} />
            {message && (
              <p className="mt-5 text-center text-sm text-violet-200">{message}</p>
            )}
            <div className="mt-8 text-center text-xs text-white/70">
              Secured with modern encryption and MFA
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}

export default App;

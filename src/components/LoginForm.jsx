import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

const Input = ({ icon: Icon, type = 'text', placeholder, value, onChange, name }) => (
  <label className="group block">
    <div className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/15 px-4 py-3 focus-within:border-white/30">
      <Icon className="w-5 h-5 text-white/60" />
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent outline-none text-white placeholder-white/40"
        autoComplete="off"
        aria-label={placeholder}
      />
    </div>
  </label>
);

const LoginForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit?.(form);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input icon={User} name="username" placeholder="Username" value={form.username} onChange={handleChange} />

      <div className="relative">
        <Input
          icon={Lock}
          name="password"
          type={show ? 'text' : 'password'}
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          aria-label={show ? 'Hide password' : 'Show password'}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md text-white/70 hover:text-white"
        >
          {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>

      <motion.button
        type="submit"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 font-medium shadow-lg shadow-indigo-500/25 disabled:opacity-60"
      >
        {loading ? 'Signing in…' : 'Sign in'}
        <ArrowRight className="w-5 h-5" />
      </motion.button>

      <div className="flex items-center justify-between text-xs text-white/70">
        <a className="hover:text-white underline-offset-4 hover:underline" href="#">Forgot password?</a>
        <a className="hover:text-white underline-offset-4 hover:underline" href="#">Create account</a>
      </div>
    </form>
  );
};

export default LoginForm;

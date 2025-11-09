import React, { useState } from 'react';
import { Eye, EyeOff, User, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const InputField = ({ label, type = 'text', icon: Icon, value, onChange, name }) => {
  const [show, setShow] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (show ? 'text' : 'password') : type;

  return (
    <div className="group">
      <label className="mb-2 block text-sm font-medium text-white/85">{label}</label>
      <div className="relative flex items-center">
        {Icon && (
          <Icon className="pointer-events-none absolute left-3 h-5 w-5 text-white/60" />
        )}
        <input
          className="w-full rounded-2xl border border-white/10 bg-white/10/50 py-3.5 pl-11 pr-12 text-white placeholder-white/60 outline-none transition focus:border-violet-300/40 focus:ring-2 focus:ring-violet-400/30"
          type={inputType}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          placeholder={label}
          autoComplete={isPassword ? 'current-password' : 'username'}
        />
        {isPassword && (
          <button
            onClick={() => setShow((s) => !s)}
            type="button"
            aria-label={show ? 'Hide password' : 'Show password'}
            className="absolute right-3 rounded-md p-1.5 text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        )}
      </div>
    </div>
  );
};

const LoginForm = ({ onSubmit, loading }) => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (name, value) => setForm((f) => ({ ...f, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
    >
      <InputField
        label="Username"
        name="username"
        icon={User}
        value={form.username}
        onChange={handleChange}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        icon={Lock}
        value={form.password}
        onChange={handleChange}
      />
      <motion.button
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        type="submit"
        className="relative inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-sky-500 px-4 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/30 ring-1 ring-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={loading}
      >
        {loading ? 'Signing in…' : 'Login'}
        <ArrowRight className="h-4 w-4" />
        <span className="pointer-events-none absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
      </motion.button>
      <div className="flex items-center justify-between text-xs text-white/70">
        <button type="button" className="underline-offset-2 hover:underline">Forgot password?</button>
        <button type="button" className="underline-offset-2 hover:underline">Create account</button>
      </div>
    </motion.form>
  );
};

export default LoginForm;

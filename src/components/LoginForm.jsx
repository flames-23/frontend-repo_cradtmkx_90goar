import React, { useState } from 'react';
import { Eye, EyeOff, User, Lock } from 'lucide-react';

const InputField = ({ label, type = 'text', icon: Icon, value, onChange, name }) => {
  const [show, setShow] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (show ? 'text' : 'password') : type;

  return (
    <div className="group">
      <label className="mb-2 block text-sm font-medium text-white/80">{label}</label>
      <div className="relative flex items-center">
        {Icon && (
          <Icon className="pointer-events-none absolute left-3 h-5 w-5 text-white/60" />
        )}
        <input
          className="w-full rounded-xl border border-white/15 bg-white/10 py-3 pl-11 pr-12 text-white placeholder-white/50 outline-none transition focus:border-sky-300/40 focus:ring-2 focus:ring-sky-400/30"
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
    <form onSubmit={handleSubmit} className="space-y-5">
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
      <button
        type="submit"
        className="relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500/90 px-4 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 ring-1 ring-white/10 transition hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={loading}
      >
        {loading ? 'Signing in…' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;

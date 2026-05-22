import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, User, Eye, EyeOff, Loader2, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO = 'https://res.cloudinary.com/dtz8hacj4/image/upload/v1779277115/Stefto_Logo_ng3frh.png';

const InputField = ({ icon: Icon, type, value, onChange, placeholder, required, minLength, rightEl }) => (
  <div style={{ position: 'relative' }}>
    <Icon style={{ position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)', width: 20, height: 20, color: '#94a3b8', pointerEvents: 'none', transition: 'color 0.2s ease' }} />
    <input
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      minLength={minLength}
      placeholder={placeholder}
      style={{
        width: '100%', paddingLeft: 52, paddingRight: rightEl ? 52 : 18,
        paddingTop: 14, paddingBottom: 14,
        background: '#f8fafc', border: '1.5px solid transparent',
        borderRadius: 16, outline: 'none',
        color: '#0f172a', fontSize: 15, fontWeight: 500,
        transition: 'all 0.2s ease', boxSizing: 'border-box',
        fontFamily: 'inherit',
      }}
      onFocus={e => { e.target.style.background = '#ffffff'; e.target.style.borderColor = '#2563eb'; e.target.style.boxShadow = '0 4px 14px rgba(37,99,235,0.1)'; e.target.previousSibling.style.color = '#2563eb'; }}
      onBlur={e => { e.target.style.background = '#f8fafc'; e.target.style.borderColor = 'transparent'; e.target.style.boxShadow = 'none'; e.target.previousSibling.style.color = '#94a3b8'; }}
    />
    {rightEl}
  </div>
);

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const resetForm = () => { setName(''); setEmail(''); setPassword(''); setError(''); setSuccessMsg(''); setShowPassword(false); };
  const switchTab = (tab) => { resetForm(); setActiveTab(tab); };

  useEffect(() => {
    if (localStorage.getItem('stefto_admin_token')) navigate('/admin-dashboard');
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault(); setIsLoading(true); setError('');
    try {
      const res = await fetch('http://localhost:3000/api/v1/auth/login', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        localStorage.setItem('stefto_admin_token', data.data?.token || 'mock_token');
        navigate('/admin-dashboard');
      } else { setError(data.message || 'Invalid email or password'); }
    } catch { setError('Unable to connect. Please ensure the server is running.'); }
    finally { setIsLoading(false); }
  };

  const handleRegister = async (e) => {
    e.preventDefault(); setIsLoading(true); setError(''); setSuccessMsg('');
    try {
      const res = await fetch('http://localhost:3000/api/v1/auth/register', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMsg('Account created! You can now sign in.');
        setTimeout(() => { resetForm(); setActiveTab('login'); }, 2000);
      } else { setError(data.message || 'Registration failed.'); }
    } catch { setError('Unable to connect. Please ensure the server is running.'); }
    finally { setIsLoading(false); }
  };

  const pwToggle = (
    <button type="button" onClick={() => setShowPassword(v => !v)}
      style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#94a3b8' }}>
      {showPassword ? <EyeOff style={{ width: 18, height: 18 }} /> : <Eye style={{ width: 18, height: 18 }} />}
    </button>
  );

  return (
    <div style={{ height: '100vh', overflow: 'hidden', display: 'flex', fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" }}>

      {/* ── LEFT PANEL ───────────────────────────────────── */}
      <div style={{
        flex: '0 0 46%', display: 'none', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(145deg, #0a1628 0%, #0f1f4b 40%, #1a3a8f 80%, #2563eb 100%)',
      }} className="login-left-panel">
        {/* Dot grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        {/* Glow orb */}
        <div style={{ position: 'absolute', top: -80, right: -80, width: 380, height: 380, borderRadius: '50%', background: 'rgba(37,99,235,0.25)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(96,165,250,0.15)', filter: 'blur(60px)' }} />

        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', padding: '48px 52px' }}>
          {/* Logo */}
          <img src={LOGO} alt="Stefto" style={{ height: 44, objectFit: 'contain', objectPosition: 'left' }} />

          {/* Center content */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 999, padding: '6px 16px', marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Secure Portal · Since 2007</span>
            </div>
            <h2 style={{ color: '#fff', fontSize: 36, fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 16 }}>
              Welcome to <span style={{ background: 'linear-gradient(90deg, #60a5fa, #93c5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Stefto</span> CMS
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.60)', fontSize: 16, lineHeight: 1.7, maxWidth: 480 }}>
              Manage your BPO operations, content, and team — all from one secure, powerful dashboard.
            </p>

            {/* Trust badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 40 }}>
              {[
                { icon: ShieldCheck, text: '100% RBI Compliant Operations' },
                { icon: Lock, text: 'Enterprise-grade Data Security' },
                { icon: CheckCircle2, text: 'Trusted by India\'s Leading FIs' },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon style={{ width: 16, height: 16, color: '#93c5fd' }} />
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <p style={{ color: 'rgba(255,255,255,0.30)', fontSize: 12 }}>
            © 2007–2026 Stefto (Incredible Management Services Pvt Ltd)
          </p>
        </div>
      </div>

      {/* ── RIGHT PANEL ──────────────────────────────────── */}
      <div className="hide-scrollbar" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fcfdfd', padding: '0 24px', position: 'relative', overflowY: 'auto' }}>

        {/* Back to home */}
        <Link to="/" style={{ position: 'absolute', top: 24, left: 28, display: 'flex', alignItems: 'center', gap: 6, color: '#64748b', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
          <ChevronLeft style={{ width: 16, height: 16 }} /> Back to site
        </Link>

        {/* Mobile logo */}
        <img src={LOGO} alt="Stefto" style={{ height: 36, objectFit: 'contain', marginBottom: 32 }} className="login-mobile-logo" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', maxWidth: 420 }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <h1 style={{ fontSize: 36, fontWeight: 800, color: '#0a1628', letterSpacing: '-0.02em', margin: '0 0 8px', fontFamily: "'Fraunces', serif" }}>
              {activeTab === 'login' ? 'Welcome Back' : 'Create an Account'}
            </h1>
            <p style={{ color: '#64748b', fontSize: 15, margin: 0 }}>
              {activeTab === 'login' ? 'Sign in to access your Stefto dashboard' : 'Get started with Stefto operations'}
            </p>
          </div>

          {/* Card */}
          <div style={{ background: '#ffffff', borderRadius: 24, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.03)', border: '1px solid rgba(226, 232, 240, 0.8)', overflow: 'hidden' }}>

            {/* Tab switcher */}
            <div style={{ display: 'flex', borderBottom: '1px solid #f1f5f9', background: '#ffffff', padding: '0 16px' }}>
              {['login', 'register'].map(tab => (
                <button key={tab} onClick={() => switchTab(tab)}
                  style={{ flex: 1, padding: '18px 0', fontSize: 14, fontWeight: 600, border: 'none', background: 'none', cursor: 'pointer', position: 'relative', color: activeTab === tab ? '#0f172a' : '#94a3b8', transition: 'color 0.2s ease', letterSpacing: '0.01em' }}>
                  {tab === 'login' ? 'Sign In' : 'Register'}
                  {activeTab === tab && <span style={{ position: 'absolute', bottom: -1, left: '0', width: '100%', height: 2, background: '#2563eb', borderRadius: '2px 2px 0 0' }} />}
                </button>
              ))}
            </div>

            {/* Form */}
            <div style={{ padding: '24px 32px 24px' }}>
              <button type="button" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, background: '#ffffff', color: '#0f172a', padding: '12px 0', borderRadius: 16, fontSize: 15, fontWeight: 600, border: '1.5px solid #e2e8f0', cursor: 'pointer', transition: 'all 0.2s ease', marginBottom: 16 }}
                onMouseOver={e => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.borderColor = '#cbd5e1'; }}
                onMouseOut={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = '#e2e8f0'; }}
              >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: 22, height: 22 }} />
                <span>{activeTab === 'login' ? 'Sign in with Google' : 'Sign up with Google'}</span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ flex: 1, height: 1, background: '#e2e8f0' }} />
                <span style={{ fontSize: 12, color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Or continue with email</span>
                <div style={{ flex: 1, height: 1, background: '#e2e8f0' }} />
              </div>

              <AnimatePresence mode="wait">
                {error && (
                  <motion.div key="err" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 12, padding: '12px 14px', marginBottom: 18 }}>
                    <AlertCircle style={{ width: 16, height: 16, color: '#ef4444', flexShrink: 0, marginTop: 1 }} />
                    <p style={{ color: '#b91c1c', fontSize: 13, margin: 0, lineHeight: 1.5 }}>{error}</p>
                  </motion.div>
                )}
                {successMsg && (
                  <motion.div key="ok" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 12, padding: '12px 14px', marginBottom: 18 }}>
                    <CheckCircle2 style={{ width: 16, height: 16, color: '#16a34a', flexShrink: 0, marginTop: 1 }} />
                    <p style={{ color: '#15803d', fontSize: 13, margin: 0, fontWeight: 600 }}>{successMsg}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence mode="wait">
                {activeTab === 'login' ? (
                  <motion.form key="login" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 12 }} transition={{ duration: 0.22 }}
                    onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <InputField icon={Mail} type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" required />
                    <InputField icon={Lock} type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required rightEl={pwToggle} />

                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: -4 }}>
                      <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2563eb', fontSize: 14, fontWeight: 600, padding: 0 }}>Forgot password?</button>
                    </div>

                    <button type="submit" disabled={isLoading}
                      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#2563eb', color: '#fff', padding: '14px 0', borderRadius: 16, fontSize: 15, fontWeight: 600, border: 'none', cursor: isLoading ? 'not-allowed' : 'pointer', boxShadow: '0 8px 20px rgba(37,99,235,0.25)', opacity: isLoading ? 0.7 : 1, transition: 'all 0.2s ease', marginTop: 4 }}>
                      {isLoading ? <Loader2 style={{ width: 22, height: 22, animation: 'spin 1s linear infinite' }} /> : <><span>Sign In</span><ArrowRight style={{ width: 18, height: 18 }} /></>}
                    </button>
                  </motion.form>
                ) : (
                  <motion.form key="register" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.22 }}
                    onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <InputField icon={User} type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Full name" required />
                    <InputField icon={Mail} type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" required />
                    <InputField icon={Lock} type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="Password (min. 6 characters)" required minLength={6} rightEl={pwToggle} />

                    <button type="submit" disabled={isLoading}
                      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#2563eb', color: '#fff', padding: '14px 0', borderRadius: 16, fontSize: 15, fontWeight: 600, border: 'none', cursor: isLoading ? 'not-allowed' : 'pointer', boxShadow: '0 8px 20px rgba(37,99,235,0.25)', opacity: isLoading ? 0.7 : 1, transition: 'all 0.2s ease', marginTop: 4 }}>
                      {isLoading ? <Loader2 style={{ width: 22, height: 22, animation: 'spin 1s linear infinite' }} /> : <><span>Create Account</span><ArrowRight style={{ width: 18, height: 18 }} /></>}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Toggle */}
              <p style={{ textAlign: 'center', fontSize: 13, color: '#64748b', marginTop: 20, marginBottom: 0 }}>
                {activeTab === 'login' ? <>Don't have an account?{' '}<button onClick={() => switchTab('register')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2563eb', fontWeight: 700, padding: 0, fontSize: 13 }}>Register</button></> :
                  <>Already have an account?{' '}<button onClick={() => switchTab('login')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2563eb', fontWeight: 700, padding: 0, fontSize: 13 }}>Sign In</button></>}
              </p>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: 12, color: '#94a3b8', marginTop: 20 }}>
            🔒 Protected by Stefto Security Shield
          </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (min-width: 900px) {
          .login-left-panel { display: flex !important; }
          .login-mobile-logo { display: none !important; }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Admin;

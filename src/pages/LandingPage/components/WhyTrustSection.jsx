import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Settings, ThumbsUp, HeartHandshake } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const reasons = [
  {
    number: '01',
    title: 'Unmatched Expertise',
    description: 'Since 2007, we\'ve handled millions of records with consistently high success rates across all asset classes.',
    icon: Trophy,
    color: '#2563eb',
    bg: '#eff6ff',
  },
  {
    number: '02',
    title: 'Proven Process Delivery',
    description: 'Structured, documented workflows and disciplined delivery cadences across every vertical and engagement type.',
    icon: Settings,
    color: '#7c3aed',
    bg: '#f5f3ff',
  },
  {
    number: '03',
    title: 'Ethical Collection',
    description: 'We maintain your brand\'s reputation while recovering dues compliant, empathetic, and professional at every touchpoint.',
    icon: ThumbsUp,
    color: '#059669',
    bg: '#ecfdf5',
  },
  {
    number: '04',
    title: 'Customer Excellence',
    description: 'Delivering seamless, customer centric experiences through empathy, innovation, and responsive support that builds long-term trust across every interaction.',
    icon: HeartHandshake,
    color: '#dc2626',
    bg: '#fef2f2',
  },
];

const heroImg = 'https://res.cloudinary.com/dtz8hacj4/image/upload/v1779436368/WhyStefto_eczrwf.jpg';

export default function WhyTrustSection() {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about-us';
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-stefto"
      ref={ref}
      style={{
        padding: '32px 0 96px 0',
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* Ambient glow */}
      <div style={{ position: 'absolute', left: -80, top: '50%', transform: 'translateY(-50%)', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="why-trust-grid">

          {/* ── Content ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="w-full"
          >


            {/* Heading */}
            <div className="text-center mb-12 flex flex-col items-center">
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#0f172a', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 16 }}>
                Why Trust <span style={{ color: '#1e3a8a', fontFamily: 'system-ui, -apple-system, Arial, sans-serif', fontVariantLigatures: 'none' }}>Stefto?</span>
              </h2>
              <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, #1e3a8a, #3b82f6)', borderRadius: 99, marginBottom: 20 }} />
            </div>

            {/* Reason cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.number}
                  initial={{ opacity: 0, y: 16 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                    background: '#1e3a8a', border: '1px solid #1e40af',
                    borderRadius: 16, padding: '24px',
                    transition: 'all 0.2s',
                    cursor: 'default',
                    height: '100%',
                  }}
                  whileHover={{ scale: 1.01, boxShadow: '0 8px 24px rgba(30,58,138,0.3)', borderColor: '#2563eb', background: '#1e3a8a', transform: 'translateY(-4px)' }}
                >
                  <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: r.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <r.icon style={{ width: 22, height: 22, color: r.color }} />
                    </div>
                    <span style={{ fontSize: 40, fontWeight: 900, color: 'rgba(255, 255, 255, 0.1)', lineHeight: 1, fontFamily: 'sans-serif' }}>{r.number}</span>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 12 }}>{r.title}</h3>
                  <p style={{ fontSize: 14, color: '#cbd5e1', lineHeight: 1.6, margin: 0, flexGrow: 1, textAlign: 'justify', hyphens: 'auto', WebkitHyphens: 'auto' }}>{r.description}</p>
                </motion.div>
              ))}
            </div>


          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-trust-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}

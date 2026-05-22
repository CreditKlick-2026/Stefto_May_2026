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
    description: 'We maintain your brand\'s reputation while recovering dues — compliant, empathetic, and professional at every touchpoint.',
    icon: ThumbsUp,
    color: '#059669',
    bg: '#ecfdf5',
  },
  {
    number: '04',
    title: 'Customer Excellence',
    description: 'Delivering seamless, customer-centric experiences through empathy, innovation, and responsive support that builds long-term trust across every interaction.',
    icon: HeartHandshake,
    color: '#dc2626',
    bg: '#fef2f2',
  },
];

const heroImg = 'https://img.rocket.new/generatedImages/rocket_gen_img_10f590f56-1773051816278.png';

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
        padding: '96px 0',
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div style={{ position: 'absolute', left: -80, top: '50%', transform: 'translateY(-50%)', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="why-trust-grid">

          {/* ── LEFT: Image ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ position: 'relative' }}
          >
            {/* Main image */}
            <div style={{
              aspectRatio: '4/5',
              borderRadius: 40,
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,0.15)',
              position: 'relative',
            }}>
              <img
                src={heroImg}
                alt="Stefto professionals in strategy meeting"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* subtle overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(15,31,75,0.15) 100%)' }} />
            </div>



            {/* In Business badge — top left */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                position: 'absolute', top: 24, left: -24,
                background: 'linear-gradient(135deg, #0a1628 0%, #1e3a8a 100%)',
                color: '#fff', borderRadius: 20, padding: '20px 24px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
              }}
            >
              <p style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.50)', marginBottom: 4 }}>In Business</p>
              <p style={{ fontSize: 32, fontWeight: 300, color: '#fff', margin: 0, lineHeight: 1 }}>19+ <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>Years</span></p>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Content ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >


            {/* Heading */}
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 900, color: '#0f172a', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 16 }}>
              Why Trust<br />
              <span style={{ color: '#2563eb' }}>Stefto?</span>
            </h2>

            {/* Divider */}
            <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, #2563eb, #60a5fa)', borderRadius: 99, marginBottom: 20 }} />

            <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.75, marginBottom: 36 }}>
              We are a strategic partner in your recovery ecosystem not just a vendor.
            </p>

            {/* Reason cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {reasons.map((r, i) => (
                <motion.div
                  key={r.number}
                  initial={{ opacity: 0, y: 16 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                  style={{
                    display: 'flex', gap: 16, alignItems: 'flex-start',
                    background: '#f8fafc', border: '1px solid #f1f5f9',
                    borderRadius: 16, padding: '16px 20px',
                    transition: 'all 0.2s',
                    cursor: 'default',
                  }}
                  whileHover={{ scale: 1.01, boxShadow: '0 8px 24px rgba(0,0,0,0.07)', borderColor: '#e2e8f0', background: '#fff' }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: r.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <r.icon style={{ width: 18, height: 18, color: r.color }} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: 10, fontWeight: 900, color: `${r.color}60`, letterSpacing: '0.1em' }}>{r.number}</span>
                      <h3 style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', margin: 0 }}>{r.title}</h3>
                    </div>
                    <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6, margin: 0 }}>{r.description}</p>
                  </div>
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

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Settings, ThumbsUp, HeartHandshake } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './WhyTrustStackDeck.css';

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
        padding: '32px 0 0px 0',
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
            className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          >

            {/* Left Side Text */}
            <div className="flex-1 text-left w-full lg:max-w-xl">
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#0f172a', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 16 }}>
                Why Trust <span style={{ color: '#1e3a8a', fontFamily: 'system-ui, -apple-system, Arial, sans-serif', fontVariantLigatures: 'none' }}>Stefto?</span>
              </h2>
              <div style={{ width: 48, height: 4, background: 'linear-gradient(90deg, #1e3a8a, #3b82f6)', borderRadius: 99, marginBottom: 24 }} />
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                At Stefto, we combine decades of industry expertise with a relentless focus on customer satisfaction. Our ethical practices, transparent processes, and innovative solutions ensure that we consistently deliver exceptional results and build lasting partnerships across the globe.
              </p>
            </div>

            {/* Right Side Stacked Cards Component */}
            <div className="flex-1 scd-08 w-full lg:max-w-[700px]">
              <div className="scd-08__deck w-full">
                {/* Inputs for State */}
                {reasons.map((r, i) => (
                  <input 
                    key={`input-${i}`} 
                    type="radio" 
                    name="scd-08" 
                    id={`scd-08-${i+1}`} 
                    className="scd-08__r" 
                    defaultChecked={i === 0} 
                  />
                ))}

                {/* Tabs */}
                {reasons.map((r, i) => (
                  <label 
                    key={`tab-${i}`} 
                    className="scd-08__tab" 
                    htmlFor={`scd-08-${i+1}`} 
                    style={{ '--c': '#1c44b4', '--l': i }}
                  >
                    {r.title}
                  </label>
                ))}

                {/* Cards */}
                {reasons.map((r, i) => (
                  <article 
                    key={`card-${i}`} 
                    className="scd-08__card" 
                    style={{ '--c': '#1c44b4' }}
                  >
                    <div className="flex items-start shrink-0 pt-1 mr-2">
                      <r.icon size={48} color="#e11d48" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-sans">{r.title}</h3>
                      <p className="font-sans">{r.description}</p>
                    </div>
                  </article>
                ))}
              </div>
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

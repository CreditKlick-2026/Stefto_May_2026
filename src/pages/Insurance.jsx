import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, Phone, Shield, TrendingUp, Users, Wifi,
  CreditCard, HeadphonesIcon, BarChart3, Zap, CheckCircle2, ArrowRight
} from 'lucide-react';
import LandingLayout from '../components/layout/LandingLayout';

/* ── Asset Imports ─────────────────────────────────────────── */
import heroBg            from '../assets/telecom_hero_bg.png';
import supportTeam       from '../assets/telecom_support_team.png';
import analyticsDash     from '../assets/telecom_analytics_dashboard.png';
import fiveGNetwork      from '../assets/telecom_5g_network.png';
import customerRetention from '../assets/telecom_customer_retention.png';
import premiumImg        from '../assets/telecom_billing_collections.png';
import telecallerAgent   from '../assets/telecaller_agent.png';

/* ──────────────────────────────────────────────────────────────
   Inline custom styles — scoped to .insurance-page
────────────────────────────────────────────────────────────── */
const STYLES = `
/* ── Google Font ── */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

.insurance-page {
  font-family: 'Inter', sans-serif;
}

/* ── Hero ── */
.tc-hero {
  position: relative;
  min-height: 480px;
  display: flex;
  align-items: flex-start;
  padding-bottom: 60px;
  overflow: hidden;
}
.tc-hero__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.tc-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg,
    rgba(4,20,52,0.93) 0%,
    rgba(15,50,120,0.82) 50%,
    rgba(4,20,52,0.88) 100%);
}
.tc-hero__grid-lines {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: tc-grid-drift 20s linear infinite;
}
@keyframes tc-grid-drift {
  0%   { background-position: 0 0; }
  100% { background-position: 60px 60px; }
}
.tc-hero__content {
  position: relative;
  z-index: 10;
  width: 100%;
}
.tc-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(59,130,246,0.18);
  border: 1px solid rgba(59,130,246,0.4);
  color: #93c5fd;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 100px;
  backdrop-filter: blur(8px);
  margin-bottom: 20px;
}
.tc-hero__title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.05;
  margin: 0 0 24px;
}
.tc-hero__title span {
  background: linear-gradient(90deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.tc-hero__sub {
  font-size: 1.15rem;
  color: rgba(255,255,255,0.72);
  line-height: 1.75;
  max-width: 560px;
  margin: 0 0 40px;
}
.tc-hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 16px 32px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(59,130,246,0.4);
  border: none;
}
.tc-hero__cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 48px rgba(59,130,246,0.5);
  color: #fff;
}
.tc-hero__stats {
  display: flex;
  gap: 40px;
  margin-top: 60px;
  flex-wrap: wrap;
}
.tc-stat-pill {
  display: flex;
  flex-direction: column;
}
.tc-stat-pill__num {
  font-size: 2.2rem;
  font-weight: 900;
  color: #fff;
  line-height: 1;
}
.tc-stat-pill__label {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 4px;
}
.tc-stat-divider {
  width: 1px;
  background: rgba(255,255,255,0.15);
  align-self: stretch;
}

/* ── Floating Signal Rings ── */
.tc-signal-rings {
  position: absolute;
  right: 8%;
  top: 130px;
  width: 360px;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.tc-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(59,130,246,0.25);
  animation: tc-pulse-ring 3s ease-in-out infinite;
}
.tc-ring:nth-child(1) { width: 100px; height: 100px; border-color: rgba(99,102,241,0.6); animation-delay: 0s; }
.tc-ring:nth-child(2) { width: 180px; height: 180px; border-color: rgba(59,130,246,0.4); animation-delay: 0.4s; }
.tc-ring:nth-child(3) { width: 260px; height: 260px; border-color: rgba(59,130,246,0.25); animation-delay: 0.8s; }
.tc-ring:nth-child(4) { width: 340px; height: 340px; border-color: rgba(59,130,246,0.12); animation-delay: 1.2s; }
@keyframes tc-pulse-ring {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.05); opacity: 0.6; }
}
.tc-ring-core {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 60px rgba(59,130,246,0.5);
  position: relative;
  z-index: 1;
}
.tc-ring-core svg { color: white; }

/* ── Section Wrappers ── */
.tc-section { padding: 96px 0; }
.tc-section--white { background: #fff; }
.tc-section--slate { background: #f8fafc; }
.tc-section--dark {
  background: linear-gradient(135deg, #041434 0%, #0f1e4a 100%);
  color: #fff;
}

.tc-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
}

/* ── Section Label ── */
.tc-label {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #3b82f6;
  margin-bottom: 16px;
}

/* ── Headings ── */
.tc-h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: #041434;
  line-height: 1.1;
  margin: 0 0 24px;
}
.tc-h2--white { color: #fff; }
.tc-h2 em {
  font-style: italic;
  font-family: Georgia, 'Times New Roman', serif;
  color: #3b82f6;
}
.tc-h3 {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 800;
  color: #041434;
  line-height: 1.2;
  margin: 0 0 20px;
}
.tc-p {
  font-size: 1.05rem;
  color: #64748b;
  line-height: 1.8;
}
.tc-p--white { color: rgba(255,255,255,0.7); }

/* ── Two Column Layouts ── */
.tc-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
@media (max-width: 900px) {
  .tc-two-col { grid-template-columns: 1fr; gap: 48px; }
  .tc-hero__stats { gap: 24px; }
  .tc-signal-rings { display: none; }
}

/* ── Image ── */
.tc-img-wrap {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 32px 80px rgba(4,20,52,0.15);
}
.tc-img-wrap img {
  width: 100%;
  height: 380px;
  object-fit: cover;
  transition: transform 0.7s ease;
  display: block;
}
.tc-img-wrap:hover img { transform: scale(1.04); }
.tc-img-wrap--tall img { height: 480px; }

/* ── Services Grid ── */
.tc-services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 64px;
}
@media (max-width: 1024px) { .tc-services-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px)  { .tc-services-grid { grid-template-columns: 1fr; } }

.tc-service-card {
  background: #fff;
  border: 1px solid #e8edf5;
  border-radius: 20px;
  padding: 32px;
  transition: all 0.35s ease;
  cursor: default;
  position: relative;
  overflow: hidden;
}
.tc-service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(59,130,246,0.04), rgba(99,102,241,0.04));
  opacity: 0;
  transition: opacity 0.35s ease;
}
.tc-service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(59,130,246,0.12);
  border-color: rgba(59,130,246,0.25);
}
.tc-service-card:hover::before { opacity: 1; }

.tc-service-card__icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #eff6ff, #eef2ff);
}
.tc-service-card__title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #041434;
  margin: 0 0 10px;
}
.tc-service-card__desc {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.7;
  margin: 0;
}

/* ── Feature Cards ── */
.tc-features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 64px;
}
@media (max-width: 768px) { .tc-features-grid { grid-template-columns: 1fr; } }

.tc-feature-card {
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 8px 40px rgba(4,20,52,0.1);
  transition: all 0.4s ease;
  background: #fff;
}
.tc-feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 64px rgba(4,20,52,0.18);
}
.tc-feature-card__img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
  transition: transform 0.7s ease;
}
.tc-feature-card:hover .tc-feature-card__img { transform: scale(1.06); }
.tc-feature-card__body {
  padding: 28px;
}
.tc-feature-card__tag {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #3b82f6;
  margin-bottom: 10px;
  display: block;
}
.tc-feature-card__title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #041434;
  margin: 0 0 10px;
}
.tc-feature-card__desc {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.7;
  margin: 0;
}

/* ── Stats Row ── */
.tc-stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  overflow: hidden;
  margin-top: 64px;
}
@media (max-width: 768px) { .tc-stats-row { grid-template-columns: repeat(2, 1fr); } }

.tc-stats-row__item {
  padding: 40px 32px;
  text-align: center;
  background: rgba(255,255,255,0.04);
  border-right: 1px solid rgba(255,255,255,0.06);
}
.tc-stats-row__item:last-child { border-right: none; }
.tc-stats-row__num {
  font-size: 2.8rem;
  font-weight: 900;
  background: linear-gradient(90deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  display: block;
  margin-bottom: 8px;
}
.tc-stats-row__label {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.55);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
}

/* ── Check List ── */
.tc-check-list {
  list-style: none;
  padding: 0;
  margin: 24px 0 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.tc-check-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.6;
}
.tc-check-list li svg { flex-shrink: 0; margin-top: 2px; color: #3b82f6; }

/* ── CTA Banner ── */
.tc-cta {
  position: relative;
  padding: 100px 32px;
  overflow: hidden;
  text-align: center;
  background: linear-gradient(135deg, #1e3a8a, #312e81);
}
.tc-cta__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.tc-cta__orb--1 {
  width: 400px; height: 400px;
  background: rgba(59,130,246,0.25);
  top: -100px; left: -100px;
}
.tc-cta__orb--2 {
  width: 300px; height: 300px;
  background: rgba(167,139,250,0.2);
  bottom: -60px; right: -60px;
}
.tc-cta__content { position: relative; z-index: 2; }
.tc-cta__title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: #fff;
  margin: 0 0 20px;
  line-height: 1.1;
}
.tc-cta__sub {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.7);
  max-width: 560px;
  margin: 0 auto 40px;
  line-height: 1.7;
}
.tc-cta__btns {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
.tc-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  color: #1e3a8a;
  font-weight: 800;
  font-size: 14px;
  padding: 16px 32px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  letter-spacing: 0.05em;
}
.tc-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.25);
  color: #1e3a8a;
}
.tc-btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  padding: 16px 32px;
  border-radius: 50px;
  text-decoration: none;
  border: 2px solid rgba(255,255,255,0.4);
  transition: all 0.3s ease;
  letter-spacing: 0.05em;
}
.tc-btn-outline:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.7);
  transform: translateY(-3px);
  color: #fff;
}

/* ── Animated counter ── */
@keyframes tc-count-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.tc-animate-in {
  animation: tc-count-up 0.6s ease both;
}

/* ── Breadcrumb ── */
.tc-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: rgba(255,255,255,0.6);
  margin-bottom: 24px;
}
.tc-breadcrumb a {
  color: rgba(255,255,255,0.6);
  text-decoration: none;
  transition: color 0.2s;
}
.tc-breadcrumb a:hover { color: #fff; }

/* ── Why Choose Grid ── */
.tc-why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 56px;
}
@media (max-width: 900px)  { .tc-why-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px)  { .tc-why-grid { grid-template-columns: 1fr; } }

.tc-why-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 28px;
  transition: all 0.3s ease;
}
.tc-why-card:hover {
  border-color: #bfdbfe;
  box-shadow: 0 8px 32px rgba(59,130,246,0.1);
  transform: translateY(-4px);
}
.tc-why-card__num {
  font-size: 2.5rem;
  font-weight: 900;
  color: #dbeafe;
  line-height: 1;
  margin-bottom: 12px;
}
.tc-why-card__title {
  font-size: 1rem;
  font-weight: 700;
  color: #041434;
  margin-bottom: 8px;
}
.tc-why-card__desc {
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.7;
}
`;

/* ──────────────────────────────────────────────────────────────
   Insurance Page Component
────────────────────────────────────────────────────────────── */
const services = [
  {
    icon: <HeadphonesIcon size={24} color="#3b82f6" />,
    title: 'Customer Support & Care',
    desc: 'Round-the-clock multi-channel support — voice, chat, email and social — delivered by trained telecom specialists.',
  },
  {
    icon: <TrendingUp size={24} color="#3b82f6" />,
    title: 'Sales & Upselling',
    desc: 'Data-driven outbound campaigns that identify upgrade opportunities and convert prospects into long-term policyholders.',
  },
  {
    icon: <Users size={24} color="#3b82f6" />,
    title: 'Retention & Churn Management',
    desc: 'AI-assisted win-back strategies and loyalty programs that reduce churn and increase Customer Lifetime Value.',
  },
  {
    icon: <CreditCard size={24} color="#3b82f6" />,
    title: 'premium & Collections',
    desc: 'Seamless premium dispute resolution, payment reminders and receivables management using intelligent automation.',
  },
  {
    icon: <Wifi size={24} color="#3b82f6" />,
    title: 'Technical Help-Desk',
    desc: 'Tiered tech support for device configuration, network issues, app troubleshooting and broadband provisioning.',
  },
  {
    icon: <Shield size={24} color="#3b82f6" />,
    title: 'Fraud & Risk Management',
    desc: 'Proactive fraud detection and compliance monitoring that safeguards policyholders and protects revenue.',
  },
];

const whyCards = [
  { num: '01', title: 'Insurance Domain Expertise', desc: 'Over 15 years of specialised experience with leading ISPs, DTH operators and mobile carriers across India.' },
  { num: '02', title: 'Omni-Channel Delivery',    desc: 'Voice, email, live-chat, WhatsApp and social media — all under one roof with unified CX management.' },
  { num: '03', title: 'Real-Time Analytics',       desc: 'Live dashboards, custom KPI reports and predictive insights that help you make smarter decisions, faster.' },
  { num: '04', title: 'Scalable Operations',       desc: 'Quickly scale capacity up or down to handle seasonal peaks, product launches or promotional campaigns.' },
  { num: '05', title: 'ISO-Certified Quality',     desc: 'Robust QA frameworks, regular audits and ISO certifications ensure consistent, world-class service quality.' },
  { num: '06', title: '24 × 7 Availability',       desc: 'We never sleep — our teams operate around the clock ensuring zero downtime for your customers.' },
];

const Insurance = () => {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <LandingLayout>
      {/* Inject scoped styles */}
      <style>{STYLES}</style>

      <div className="insurance-page">

        {/* ═══════════════════════ 1. HERO ═══════════════════════ */}
        <section className="tc-hero" style={{ paddingTop: '160px' }}>
          <div className="tc-hero__bg" style={{ backgroundImage: `url(${heroBg})` }} />
          <div className="tc-hero__overlay" />
          <div className="tc-hero__grid-lines" />

          {/* Floating signal rings (decorative, right side) */}
          <div className="tc-signal-rings">
            <div className="tc-ring" />
            <div className="tc-ring" />
            <div className="tc-ring" />
            <div className="tc-ring" />
            <div className="tc-ring-core">
              <Wifi size={36} />
            </div>
          </div>

          <div className="tc-hero__content tc-container">
            {/* Breadcrumb */}
            <nav className="tc-breadcrumb">
              <Link to="/">Home</Link>
              <ChevronRight size={14} style={{ opacity: 0.5 }} />
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Industries</span>
              <ChevronRight size={14} style={{ opacity: 0.5 }} />
              <span style={{ color: '#93c5fd' }}>Insurance</span>
            </nav>

            <div className="tc-badge">
              <Wifi size={12} /> Insurance Industry Solutions
            </div>

            <h1 className="tc-hero__title">
              Next-Generation BPO<br />
              for the <span>Insurance Industry</span>
            </h1>
          </div>
        </section>

        {/* ═══════════════════════ 2. INTRO / TAGLINE ═══════════════════════ */}
        <section className="tc-section tc-section--white">
          <div className="tc-container">
            <div className="tc-two-col">
              <div>
                <span className="tc-label">Industry Expertise</span>
                <h2 className="tc-h2">
                  Transforming Insurance CX with <em>Data, Speed & Precision</em>
                </h2>
                <div className="tc-p" style={{ marginBottom: 28, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <p>
                    As new companies are springing up and innovations across the insurance value chain are reshaping and redefining the industry. All the latest innovations come with new and complex perspectives, from digital experience and modern risk analytics to the insurance industry. To succeed, all insurers need to put in place a reliable management system and a process that works. <strong>Stefto</strong> can help your insurance group take these challenges on.
                  </p>
                  <p>
                    Whether we’re helping modernize core insurance operations or streamline and centralize your key business functions, including customer onboarding, claims processing, underwriting, and policy administration, with our data-driven insights and the right tools, we’ll help you integrate a system fit for the relevant digital landscape. With us, insurers who partner with us have improved operational efficiency, grown profits, and turned disruption into transformation.
                  </p>
                </div>
              </div>
              <div>
                <div className="tc-img-wrap">
                  <img src={analyticsDash} alt="Insurance Analytics Dashboard" />
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* ═══════════════════════ 4. SPLIT — SUPPORT TEAM ═══════════════════════ */}
        <section className="tc-section tc-section--white">
          <div className="tc-container">
            <div className="tc-two-col">
              <div className="tc-img-wrap tc-img-wrap--tall">
                <img src={supportTeam} alt="Insurance Support Team" />
              </div>
              <div>
                <span className="tc-label">Expert Workforce</span>
                <h2 className="tc-h2">
                  Trained Insurance Agents Delivering <em>World-Class CX</em>
                </h2>
                <p className="tc-p" style={{ marginBottom: 20 }}>
                  Our agents aren't generic call-centre staff — they are telecom-certified
                  professionals who understand network terminology, premium systems and
                  policyholder psychology inside out.
                </p>
                <p className="tc-p">
                  Every agent undergoes a 6-week domain-specific training programme before
                  going live on any telecom account, ensuring they can handle the toughest
                  policyholder escalations with confidence and empathy.
                </p>
                <ul className="tc-check-list" style={{ marginTop: 28 }}>
                  {[
                    '6-week telecom domain onboarding',
                    'Real-time AI assist & next-best-action tools',
                    'Continuous coaching via speech analytics',
                    'CSAT-linked performance incentives',
                  ].map((item, i) => (
                    <li key={i}>
                      <CheckCircle2 size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>







        {/* ═══════════════════════ 8. SPLIT — ANALYTICS ═══════════════════════ */}
        <section className="tc-section tc-section--white">
          <div className="tc-container">
            <div className="tc-two-col">
              <div>
                <span className="tc-label">Insights & Intelligence</span>
                <h2 className="tc-h2">
                  Turn Your CX Data into a <em>Competitive Advantage</em>
                </h2>
                <p className="tc-p" style={{ marginBottom: 20 }}>
                  Every interaction is an opportunity to learn. Stefto's advanced analytics suite
                  provides real-time and historical intelligence — from call driver analysis to
                  policyholder sentiment trends — so you always know what's happening on the ground.
                </p>
                <p className="tc-p">
                  Custom dashboards, executive scorecards and automated anomaly alerts keep your
                  leadership team informed and empowered to act — no data science expertise required.
                </p>
                <div style={{ marginTop: 32, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                  {['Speech Analytics', 'Predictive Churn Models', 'Live Agent Dashboards', 'NPS Tracking'].map((tag, i) => (
                    <span key={i} style={{
                      background: '#eff6ff', color: '#1d4ed8',
                      fontWeight: 700, fontSize: 12, padding: '8px 18px',
                      borderRadius: 100, letterSpacing: '0.05em',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="tc-img-wrap">
                  <img src={analyticsDash} alt="Analytics Dashboard" />
                </div>
              </div>
            </div>
          </div>
        </section>



      </div>
    </LandingLayout>
  );
};

export default Insurance;

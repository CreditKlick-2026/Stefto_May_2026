import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, Shield, TrendingUp, Users, CreditCard,
  HeadphonesIcon, BarChart3, CheckCircle2, ArrowRight,
  Banknote, Lock, RefreshCw, FileText, AlertTriangle, Zap
} from 'lucide-react';
import LandingLayout from '../components/layout/LandingLayout';

/* ── Asset Imports ─────────────────────────────────────────── */
import heroBg          from '../assets/banking_hero_bg.png';
import analyticsImg    from '../assets/banking_analytics.png';
import collectionsImg  from '../assets/banking_collections.png';
import complianceImg   from '../assets/banking_compliance.png';
import supportImg      from '../assets/banking_customer_support.png';

/* ──────────────────────────────────────────────────────────────
   Inline scoped styles — .bf-page namespace
────────────────────────────────────────────────────────────── */
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

.bf-page { font-family: 'Inter', sans-serif; }

/* ── Hero ── */
.bf-hero {
  position: relative;
  min-height: 640px;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.bf-hero__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.bf-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg,
    rgba(2,12,36,0.95) 0%,
    rgba(8,35,95,0.85) 50%,
    rgba(2,12,36,0.92) 100%);
}
.bf-hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(16,185,129,0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(16,185,129,0.07) 1px, transparent 1px);
  background-size: 56px 56px;
  animation: bf-grid-drift 22s linear infinite;
}
@keyframes bf-grid-drift {
  0%   { background-position: 0 0; }
  100% { background-position: 56px 56px; }
}
.bf-hero__content {
  position: relative;
  z-index: 10;
  width: 100%;
}

/* Badge */
.bf-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(16,185,129,0.15);
  border: 1px solid rgba(16,185,129,0.38);
  color: #6ee7b7;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 6px 18px;
  border-radius: 100px;
  backdrop-filter: blur(8px);
  margin-bottom: 22px;
}

/* Hero Title */
.bf-hero__title {
  font-size: clamp(2.4rem, 5.5vw, 4.4rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.06;
  margin: 0 0 24px;
}
.bf-hero__title span {
  background: linear-gradient(90deg, #34d399, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.bf-hero__sub {
  font-size: 1.12rem;
  color: rgba(255,255,255,0.70);
  line-height: 1.78;
  max-width: 580px;
  margin: 0 0 40px;
}
.bf-hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #059669, #0891b2);
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 16px 34px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(5,150,105,0.4);
  border: none;
}
.bf-hero__cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 50px rgba(5,150,105,0.5);
  color: #fff;
}

/* Stats */
.bf-hero__stats {
  display: flex;
  gap: 44px;
  margin-top: 64px;
  flex-wrap: wrap;
}
.bf-stat-pill { display: flex; flex-direction: column; }
.bf-stat-pill__num {
  font-size: 2.3rem;
  font-weight: 900;
  color: #fff;
  line-height: 1;
}
.bf-stat-pill__label {
  font-size: 0.76rem;
  color: rgba(255,255,255,0.48);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 5px;
}
.bf-stat-divider {
  width: 1px;
  background: rgba(255,255,255,0.14);
  align-self: stretch;
}

/* Floating coin rings */
.bf-coin-rings {
  position: absolute;
  right: 7%;
  top: 50%;
  transform: translateY(-50%);
  width: 360px;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.bf-ring {
  position: absolute;
  border-radius: 50%;
  animation: bf-pulse-ring 3.2s ease-in-out infinite;
}
.bf-ring:nth-child(1) { width: 90px;  height: 90px;  border: 1px solid rgba(52,211,153,0.65); animation-delay: 0s; }
.bf-ring:nth-child(2) { width: 170px; height: 170px; border: 1px solid rgba(52,211,153,0.40); animation-delay: 0.45s; }
.bf-ring:nth-child(3) { width: 255px; height: 255px; border: 1px solid rgba(52,211,153,0.22); animation-delay: 0.9s; }
.bf-ring:nth-child(4) { width: 340px; height: 340px; border: 1px solid rgba(52,211,153,0.10); animation-delay: 1.35s; }
@keyframes bf-pulse-ring {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.06); opacity: 0.55; }
}
.bf-ring-core {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: linear-gradient(135deg, #059669, #0891b2);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 60px rgba(5,150,105,0.55);
  position: relative;
  z-index: 1;
}
.bf-ring-core svg { color: white; }

/* ── Section Wrappers ── */
.bf-section { padding: 96px 0; }
.bf-section--white { background: #fff; }
.bf-section--slate { background: #f8fafc; }
.bf-section--dark {
  background: linear-gradient(135deg, #020c24 0%, #071938 100%);
  color: #fff;
}
.bf-section--teal {
  background: linear-gradient(135deg, #022c22 0%, #064e3b 100%);
  color: #fff;
}

.bf-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
}

/* ── Label ── */
.bf-label {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #059669;
  margin-bottom: 16px;
}
.bf-label--light { color: #6ee7b7; }

/* ── Headings ── */
.bf-h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: #020c24;
  line-height: 1.1;
  margin: 0 0 24px;
}
.bf-h2--white { color: #fff; }
.bf-h2 em {
  font-style: italic;
  font-family: Georgia, 'Times New Roman', serif;
  color: #059669;
}
.bf-p {
  font-size: 1.05rem;
  color: #64748b;
  line-height: 1.8;
}
.bf-p--white { color: rgba(255,255,255,0.68); }

/* ── Two Column ── */
.bf-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
@media (max-width: 900px) {
  .bf-two-col { grid-template-columns: 1fr; gap: 48px; }
  .bf-hero__stats { gap: 24px; }
  .bf-coin-rings { display: none; }
}

/* ── Image ── */
.bf-img-wrap {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 32px 80px rgba(2,12,36,0.18);
}
.bf-img-wrap img {
  width: 100%;
  height: 390px;
  object-fit: cover;
  transition: transform 0.7s ease;
  display: block;
}
.bf-img-wrap:hover img { transform: scale(1.04); }
.bf-img-wrap--tall img { height: 490px; }

/* ── Services Grid ── */
.bf-services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 64px;
}
@media (max-width: 1024px) { .bf-services-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px)  { .bf-services-grid { grid-template-columns: 1fr; } }

.bf-service-card {
  background: #fff;
  border: 1px solid #e2f0eb;
  border-radius: 20px;
  padding: 34px;
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
}
.bf-service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(5,150,105,0.04), rgba(8,145,178,0.04));
  opacity: 0;
  transition: opacity 0.35s ease;
}
.bf-service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(5,150,105,0.12);
  border-color: rgba(5,150,105,0.28);
}
.bf-service-card:hover::before { opacity: 1; }
.bf-service-card__icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ecfdf5, #e0f7fa);
}
.bf-service-card__title {
  font-size: 1.08rem;
  font-weight: 700;
  color: #020c24;
  margin: 0 0 10px;
}
.bf-service-card__desc {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.72;
  margin: 0;
}

/* ── Feature Cards ── */
.bf-features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 64px;
}
@media (max-width: 768px) { .bf-features-grid { grid-template-columns: 1fr; } }

.bf-feature-card {
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 8px 40px rgba(2,12,36,0.1);
  transition: all 0.4s ease;
  background: #fff;
}
.bf-feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 64px rgba(2,12,36,0.18);
}
.bf-feature-card__img {
  width: 100%;
  height: 245px;
  object-fit: cover;
  display: block;
  transition: transform 0.7s ease;
}
.bf-feature-card:hover .bf-feature-card__img { transform: scale(1.06); }
.bf-feature-card__body { padding: 28px; }
.bf-feature-card__tag {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #059669;
  margin-bottom: 10px;
  display: block;
}
.bf-feature-card__title {
  font-size: 1.22rem;
  font-weight: 800;
  color: #020c24;
  margin: 0 0 10px;
}
.bf-feature-card__desc {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.7;
  margin: 0;
}

/* ── Stats Row ── */
.bf-stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  overflow: hidden;
  margin-top: 64px;
}
@media (max-width: 768px) { .bf-stats-row { grid-template-columns: repeat(2, 1fr); } }
.bf-stats-row__item {
  padding: 40px 28px;
  text-align: center;
  background: rgba(255,255,255,0.03);
  border-right: 1px solid rgba(255,255,255,0.07);
}
.bf-stats-row__item:last-child { border-right: none; }
.bf-stats-row__num {
  font-size: 2.8rem;
  font-weight: 900;
  background: linear-gradient(90deg, #34d399, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  display: block;
  margin-bottom: 8px;
}
.bf-stats-row__label {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.52);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
}

/* ── Check List ── */
.bf-check-list {
  list-style: none;
  padding: 0;
  margin: 24px 0 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.bf-check-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.6;
}
.bf-check-list li svg { flex-shrink: 0; margin-top: 2px; color: #059669; }

/* ── Why Grid ── */
.bf-why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 56px;
}
@media (max-width: 900px) { .bf-why-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .bf-why-grid { grid-template-columns: 1fr; } }

.bf-why-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 28px;
  transition: all 0.3s ease;
}
.bf-why-card:hover {
  border-color: rgba(52,211,153,0.35);
  box-shadow: 0 8px 32px rgba(5,150,105,0.12);
  transform: translateY(-4px);
  background: rgba(255,255,255,0.07);
}
.bf-why-card__num {
  font-size: 2.4rem;
  font-weight: 900;
  color: rgba(52,211,153,0.2);
  line-height: 1;
  margin-bottom: 12px;
}
.bf-why-card__title {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}
.bf-why-card__desc {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.58);
  line-height: 1.7;
}

/* ── CTA Banner ── */
.bf-cta {
  position: relative;
  padding: 100px 32px;
  overflow: hidden;
  text-align: center;
  background: linear-gradient(135deg, #064e3b, #1e3a8a);
}
.bf-cta__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.bf-cta__orb--1 { width: 420px; height: 420px; background: rgba(5,150,105,0.22); top: -120px; left: -100px; }
.bf-cta__orb--2 { width: 320px; height: 320px; background: rgba(96,165,250,0.18); bottom: -60px; right: -80px; }
.bf-cta__content { position: relative; z-index: 2; }
.bf-cta__title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: #fff;
  margin: 0 0 20px;
  line-height: 1.1;
}
.bf-cta__sub {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.68);
  max-width: 580px;
  margin: 0 auto 44px;
  line-height: 1.72;
}
.bf-cta__btns {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
.bf-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  color: #064e3b;
  font-weight: 800;
  font-size: 14px;
  padding: 16px 34px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  letter-spacing: 0.05em;
}
.bf-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 42px rgba(0,0,0,0.25);
  color: #064e3b;
}
.bf-btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  padding: 16px 34px;
  border-radius: 50px;
  text-decoration: none;
  border: 2px solid rgba(255,255,255,0.38);
  transition: all 0.3s ease;
}
.bf-btn-outline:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.7);
  transform: translateY(-3px);
  color: #fff;
}

/* ── Breadcrumb ── */
.bf-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: rgba(255,255,255,0.58);
  margin-bottom: 24px;
}
.bf-breadcrumb a { color: rgba(255,255,255,0.58); text-decoration: none; transition: color 0.2s; }
.bf-breadcrumb a:hover { color: #fff; }

/* ── Process Steps ── */
.bf-process-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  margin-top: 64px;
  position: relative;
}
@media (max-width: 900px) { .bf-process-steps { grid-template-columns: repeat(2, 1fr); gap: 32px; } }
@media (max-width: 600px) { .bf-process-steps { grid-template-columns: 1fr; } }

.bf-process-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 24px;
  position: relative;
}
.bf-process-step::after {
  content: '';
  position: absolute;
  right: 0;
  top: 36px;
  width: 1px;
  height: 40px;
  background: rgba(5,150,105,0.3);
}
.bf-process-step:last-child::after { display: none; }
.bf-process-step__num {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ecfdf5, #e0f7fa);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 900;
  color: #059669;
  margin-bottom: 20px;
  border: 2px solid #d1fae5;
}
.bf-process-step__title {
  font-size: 1rem;
  font-weight: 700;
  color: #020c24;
  margin-bottom: 10px;
}
.bf-process-step__desc {
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.68;
}

/* ── Compliance Strip ── */
.bf-compliance-strip {
  background: linear-gradient(90deg, #ecfdf5, #eff6ff, #ecfdf5);
  border: 1px solid #d1fae5;
  border-radius: 16px;
  padding: 28px 40px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 48px;
  flex-wrap: wrap;
}
.bf-compliance-strip__icon {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: #059669;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.bf-compliance-strip__text p { margin: 0; }
.bf-compliance-strip__text strong { font-size: 1rem; color: #020c24; }
.bf-compliance-strip__text span { font-size: 0.875rem; color: #64748b; }
.bf-compliance-tags { display: flex; gap: 10px; flex-wrap: wrap; margin-left: auto; }
.bf-compliance-tag {
  background: #fff;
  border: 1px solid #d1fae5;
  border-radius: 50px;
  padding: 6px 16px;
  font-size: 12px;
  font-weight: 700;
  color: #059669;
  letter-spacing: 0.05em;
}
`;

/* ── Data ──────────────────────────────────────────────────── */
const services = [
  {
    icon: <HeadphonesIcon size={24} color="#059669" />,
    title: 'Customer Service & Care',
    desc: 'Omni-channel banking support across voice, chat and email — resolving account queries, disputes and KYC requirements with speed and empathy.',
  },
  {
    icon: <CreditCard size={24} color="#059669" />,
    title: 'Debt Collections & Recovery',
    desc: 'Compliant, AI-powered collections strategy that maximises recovery rates while protecting customer relationships and regulatory standing.',
  },
  {
    icon: <TrendingUp size={24} color="#059669" />,
    title: 'Sales & Cross-Sell',
    desc: 'Data-driven outbound campaigns for loans, credit cards, insurance and wealth products — turning leads into loyal customers.',
  },
  {
    icon: <BarChart3 size={24} color="#059669" />,
    title: 'Analytics & Reporting',
    desc: 'Real-time dashboards and custom KPI reports that give banks and NBFCs clear visibility into portfolio health and team performance.',
  },
  {
    icon: <FileText size={24} color="#059669" />,
    title: 'Back-Office & KYC',
    desc: 'Document verification, data entry, account onboarding and KYC / AML processing handled with precision and rapid turnaround.',
  },
  {
    icon: <Shield size={24} color="#059669" />,
    title: 'Fraud & Risk Management',
    desc: 'Proactive fraud detection, account monitoring and compliance advisory to keep your portfolio secure and regulatorily compliant.',
  },
];

const whyCards = [
  { num: '01', title: 'BFSI Domain Expertise', desc: 'Over 15 years of deep experience with leading banks, NBFCs, MFIs and fintech companies across India.' },
  { num: '02', title: 'RBI & SEBI Compliant', desc: 'Operations built around regulatory frameworks — RBI guidelines, SEBI norms and IRDAI mandates are central to every process.' },
  { num: '03', title: 'AI-Powered Workflows', desc: 'Machine learning models for collections, churn prediction, fraud detection and personalised engagement at scale.' },
  { num: '04', title: 'Omni-Channel Delivery', desc: 'Voice, email, WhatsApp, IVR and digital self-service — all unified under a single CX management platform.' },
  { num: '05', title: 'ISO-Certified Quality', desc: 'Robust QA frameworks and ISO certifications ensure world-class service consistency across every touchpoint.' },
  { num: '06', title: '24 × 7 Operations', desc: 'Round-the-clock availability for time-sensitive banking operations — no downtime, no exceptions.' },
];

const processSteps = [
  { num: '1', title: 'Discovery & Audit', desc: 'Deep-dive into your portfolio, processes and pain-points to map the right BPO strategy.' },
  { num: '2', title: 'Solution Design', desc: 'Customised operating model with defined KPIs, SLAs, tech stack and compliance protocols.' },
  { num: '3', title: 'Pilot Launch', desc: 'Rapid deployment of a controlled pilot with real-time monitoring and feedback loops.' },
  { num: '4', title: 'Scale & Optimise', desc: 'Full rollout with continuous optimisation driven by data, analytics and quarterly reviews.' },
];

/* ── Component ─────────────────────────────────────────────── */
const BankingAndFinancialServices = () => {
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
      <style>{STYLES}</style>
      <div className="bf-page">

        {/* ══════════════════ 1. HERO ══════════════════ */}
        <section className="bf-hero" style={{ paddingTop: '100px' }}>
          <div className="bf-hero__bg" style={{ backgroundImage: `url(${heroBg})` }} />
          <div className="bf-hero__overlay" />
          <div className="bf-hero__grid" />

          {/* Floating coin rings */}
          <div className="bf-coin-rings">
            <div className="bf-ring" />
            <div className="bf-ring" />
            <div className="bf-ring" />
            <div className="bf-ring" />
            <div className="bf-ring-core">
              <Banknote size={34} />
            </div>
          </div>

          <div className="bf-hero__content bf-container">
            {/* Breadcrumb */}
            <nav className="bf-breadcrumb">
              <Link to="/">Home</Link>
              <ChevronRight size={14} style={{ opacity: 0.45 }} />
              <span style={{ color: 'rgba(255,255,255,0.38)' }}>Industries</span>
              <ChevronRight size={14} style={{ opacity: 0.45 }} />
              <span style={{ color: '#6ee7b7' }}>Banking &amp; Financial Services</span>
            </nav>

            <div className="bf-badge">
              <Banknote size={12} /> Banking &amp; Financial Services
            </div>

            <h1 className="bf-hero__title">
              Powering BFSI Excellence<br />
              with <span>Intelligent BPO Solutions</span>
            </h1>

            <p className="bf-hero__sub">
              Stefto partners with banks, NBFCs, fintechs and insurance companies to deliver
              compliant, AI-driven customer experience — from collections and KYC to sales
              support and risk management.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contact-us" className="bf-hero__cta">
                Get Started <ArrowRight size={16} />
              </Link>
              <Link
                to="/debt-collection"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,255,255,0.09)',
                  border: '1px solid rgba(255,255,255,0.22)',
                  backdropFilter: 'blur(8px)',
                  color: '#fff', fontWeight: 700, fontSize: 14,
                  padding: '16px 28px', borderRadius: 50,
                  textDecoration: 'none', transition: 'all 0.3s ease',
                }}
              >
                Our Solutions
              </Link>
            </div>

            {/* Stats */}
            <div className="bf-hero__stats">
              {[
                { num: '15+', label: 'Years in BFSI' },
                { num: '₹500Cr+', label: 'Collections Managed' },
                { num: '98.2%', label: 'SLA Adherence' },
                { num: '24/7', label: 'Operations' },
              ].map((s, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="bf-stat-divider" />}
                  <div className="bf-stat-pill">
                    <span className="bf-stat-pill__num">{s.num}</span>
                    <span className="bf-stat-pill__label">{s.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ 2. INTRO ══════════════════ */}
        <section className="bf-section bf-section--white">
          <div className="bf-container">
            <div className="bf-two-col">
              <div>
                <span className="bf-label">Industry Expertise</span>
                <h2 className="bf-h2">
                  Trusted by India's Leading <em>Financial Institutions</em>
                </h2>
                <p className="bf-p" style={{ marginBottom: 28 }}>
                  The BFSI sector demands an operations partner that understands regulatory
                  complexity, customer sensitivity and the relentless pressure to improve
                  portfolio performance. Stefto has been embedded in India's financial
                  ecosystem for over a decade — delivering measurable results for banks,
                  NBFCs, MFIs, fintech lenders and insurance players.
                </p>
                <ul className="bf-check-list">
                  {[
                    'Full-lifecycle collections — from early-stage to write-off',
                    'RBI, SEBI & IRDAI compliant processes by design',
                    'AI-driven credit risk analytics and propensity modelling',
                    'Multilingual support across 15+ regional languages',
                    'Seamless CRM and core-banking system integrations',
                  ].map((item, i) => (
                    <li key={i}>
                      <CheckCircle2 size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="bf-img-wrap bf-img-wrap--tall">
                  <img src={analyticsImg} alt="Banking Analytics Dashboard" />
                </div>
              </div>
            </div>

            {/* Compliance Strip */}
            <div className="bf-compliance-strip">
              <div className="bf-compliance-strip__icon">
                <Lock size={24} color="#fff" />
              </div>
              <div className="bf-compliance-strip__text">
                <strong>Regulatory Compliance at the Core</strong><br />
                <span>All operations adhere to RBI Fair Practice Guidelines, IRDAI norms and DPDP Act requirements.</span>
              </div>
              <div className="bf-compliance-tags">
                {['RBI Compliant', 'ISO 27001', 'GDPR Ready', 'DPDP Act', 'SEBI Norms'].map((tag) => (
                  <span key={tag} className="bf-compliance-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ 3. SERVICES GRID ══════════════════ */}
        <section className="bf-section bf-section--slate">
          <div className="bf-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
              <span className="bf-label">Our Solutions</span>
              <h2 className="bf-h2" style={{ textAlign: 'center' }}>
                End-to-End BFSI <em>BPO Services</em>
              </h2>
              <p className="bf-p" style={{ textAlign: 'center' }}>
                From first contact to final resolution, our specialist BFSI teams handle
                complex financial interactions with precision, empathy and compliance.
              </p>
            </div>
            <div className="bf-services-grid">
              {services.map((s, i) => (
                <div key={i} className="bf-service-card">
                  <div className="bf-service-card__icon">{s.icon}</div>
                  <h3 className="bf-service-card__title">{s.title}</h3>
                  <p className="bf-service-card__desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ 4. FEATURE CARDS ══════════════════ */}
        <section className="bf-section bf-section--white">
          <div className="bf-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
              <span className="bf-label">Capabilities in Action</span>
              <h2 className="bf-h2" style={{ textAlign: 'center' }}>
                Driving Results Across the <em>BFSI Value Chain</em>
              </h2>
            </div>
            <div className="bf-features-grid">
              <div className="bf-feature-card">
                <img src={collectionsImg} alt="Collections & Recovery" className="bf-feature-card__img" />
                <div className="bf-feature-card__body">
                  <span className="bf-feature-card__tag">Collections</span>
                  <h3 className="bf-feature-card__title">AI-Powered Debt Collections &amp; Recovery</h3>
                  <p className="bf-feature-card__desc">
                    Our collections teams leverage predictive dialling, behavioural analytics and
                    personalised scripting to improve right-party contact rates and recovery yields —
                    all within RBI Fair Practice Guidelines.
                  </p>
                </div>
              </div>
              <div className="bf-feature-card">
                <img src={complianceImg} alt="Compliance & Risk" className="bf-feature-card__img" />
                <div className="bf-feature-card__body">
                  <span className="bf-feature-card__tag">Compliance</span>
                  <h3 className="bf-feature-card__title">Robust Compliance &amp; Risk Frameworks</h3>
                  <p className="bf-feature-card__desc">
                    From AML screening and fraud monitoring to audit-ready reporting, our risk
                    management practice ensures your institution stays ahead of regulatory requirements
                    and operational threats.
                  </p>
                </div>
              </div>
              <div className="bf-feature-card">
                <img src={supportImg} alt="Customer Support" className="bf-feature-card__img" />
                <div className="bf-feature-card__body">
                  <span className="bf-feature-card__tag">Customer Experience</span>
                  <h3 className="bf-feature-card__title">Premium Financial Customer Support</h3>
                  <p className="bf-feature-card__desc">
                    Trained BFSI agents handle account queries, loan servicing, card disputes and
                    grievance escalations with the sensitivity and expertise that financial customers
                    demand.
                  </p>
                </div>
              </div>
              <div className="bf-feature-card">
                <img src={analyticsImg} alt="Data Analytics" className="bf-feature-card__img" />
                <div className="bf-feature-card__body">
                  <span className="bf-feature-card__tag">Analytics</span>
                  <h3 className="bf-feature-card__title">Real-Time Portfolio Intelligence</h3>
                  <p className="bf-feature-card__desc">
                    Custom dashboards and advanced analytics give lenders granular visibility into
                    delinquency trends, agent performance and collection efficiency — enabling faster,
                    smarter decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ 5. STATS BAND ══════════════════ */}
        <section className="bf-section bf-section--dark" ref={statsRef}>
          <div className="bf-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
              <span className="bf-label bf-label--light">Our Impact</span>
              <h2 className="bf-h2 bf-h2--white" style={{ textAlign: 'center' }}>
                Numbers That Define Our <em style={{ color: '#34d399' }}>BFSI Leadership</em>
              </h2>
              <p className="bf-p bf-p--white" style={{ textAlign: 'center' }}>
                Measurable outcomes across collections, customer satisfaction and operational efficiency.
              </p>
            </div>
            <div className={`bf-stats-row ${statsVisible ? 'bf-animate-in' : ''}`}>
              {[
                { num: '₹500Cr+', label: 'Collections Handled Annually' },
                { num: '40%',     label: 'Avg. Recovery Rate Improvement' },
                { num: '98.2%',   label: 'SLA Compliance' },
                { num: '4.6/5',   label: 'Customer Satisfaction Score' },
              ].map((s, i) => (
                <div key={i} className="bf-stats-row__item">
                  <span className="bf-stats-row__num">{s.num}</span>
                  <span className="bf-stats-row__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ 6. HOW WE WORK ══════════════════ */}
        <section className="bf-section bf-section--slate">
          <div className="bf-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
              <span className="bf-label">Our Approach</span>
              <h2 className="bf-h2" style={{ textAlign: 'center' }}>
                How We <em>Onboard</em> BFSI Partners
              </h2>
              <p className="bf-p" style={{ textAlign: 'center' }}>
                A structured, four-step process designed to deliver value from day one — with full
                transparency and regulatory alignment at every stage.
              </p>
            </div>
            <div className="bf-process-steps">
              {processSteps.map((step, i) => (
                <div key={i} className="bf-process-step">
                  <div className="bf-process-step__num">{step.num}</div>
                  <h4 className="bf-process-step__title">{step.title}</h4>
                  <p className="bf-process-step__desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ 7. WHY STEFTO ══════════════════ */}
        <section className="bf-section bf-section--dark">
          <div className="bf-container">
            <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
              <span className="bf-label bf-label--light">Why Stefto</span>
              <h2 className="bf-h2 bf-h2--white" style={{ textAlign: 'center' }}>
                The BFSI BPO Partner Built for <em style={{ color: '#34d399' }}>What's Next</em>
              </h2>
            </div>
            <div className="bf-why-grid">
              {whyCards.map((card, i) => (
                <div key={i} className="bf-why-card">
                  <div className="bf-why-card__num">{card.num}</div>
                  <h4 className="bf-why-card__title">{card.title}</h4>
                  <p className="bf-why-card__desc">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ 8. CTA ══════════════════ */}
        <section className="bf-cta">
          <div className="bf-cta__orb bf-cta__orb--1" />
          <div className="bf-cta__orb bf-cta__orb--2" />
          <div className="bf-cta__content">
            <span className="bf-label bf-label--light" style={{ marginBottom: 20, display: 'block' }}>
              Ready to Transform?
            </span>
            <h2 className="bf-cta__title">
              Let's Build a Smarter,<br />More Compliant Financial Operation
            </h2>
            <p className="bf-cta__sub">
              Whether you're a large bank looking to scale collections or a fintech needing
              compliant customer support — Stefto has the expertise, technology and people
              to deliver results from day one.
            </p>
            <div className="bf-cta__btns">
              <Link to="/contact-us" className="bf-btn-primary">
                Schedule a Consultation <ArrowRight size={16} />
              </Link>
              <Link to="/debt-collection" className="bf-btn-outline">
                View Collections Services
              </Link>
            </div>
          </div>
        </section>

      </div>
    </LandingLayout>
  );
};

export default BankingAndFinancialServices;

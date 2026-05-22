import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight, CheckCircle2, ArrowRight,
  Banknote, Lock
} from 'lucide-react';
import LandingLayout from '../components/layout/LandingLayout';

/* ── Asset Imports ─────────────────────────────────────────── */
import heroBg          from '../assets/banking_hero_bg.png';
import analyticsImg    from '../assets/banking_analytics.png';

/* ──────────────────────────────────────────────────────────────
   Inline scoped styles — .bf-page namespace
────────────────────────────────────────────────────────────── */
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

.bf-page { font-family: 'Inter', sans-serif; }

/* ── Hero ── */
.bf-hero {
  position: relative;
  min-height: 480px;
  display: flex;
  align-items: flex-start;
  padding-bottom: 60px;
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
    linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59,130,246,0.07) 1px, transparent 1px);
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
  background: rgba(59,130,246,0.15);
  border: 1px solid rgba(59,130,246,0.38);
  color: #93c5fd;
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
  background: linear-gradient(90deg, #60a5fa, #a78bfa);
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
  background: linear-gradient(135deg, #1c469d, #3b82f6);
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 16px 34px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(28,70,157,0.4);
  border: none;
}
.bf-hero__cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 50px rgba(28,70,157,0.5);
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
  top: 130px;
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
.bf-ring:nth-child(1) { width: 90px;  height: 90px;  border: 1px solid rgba(96,165,250,0.65); animation-delay: 0s; }
.bf-ring:nth-child(2) { width: 170px; height: 170px; border: 1px solid rgba(96,165,250,0.40); animation-delay: 0.45s; }
.bf-ring:nth-child(3) { width: 255px; height: 255px; border: 1px solid rgba(96,165,250,0.22); animation-delay: 0.9s; }
.bf-ring:nth-child(4) { width: 340px; height: 340px; border: 1px solid rgba(96,165,250,0.10); animation-delay: 1.35s; }
@keyframes bf-pulse-ring {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.06); opacity: 0.55; }
}
.bf-ring-core {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1c469d, #3b82f6);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 60px rgba(59,130,246,0.55);
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
  background: linear-gradient(135deg, #0a1628 0%, #1e3a8a 100%);
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
  color: #1c469d;
  margin-bottom: 16px;
}
.bf-label--light { color: #93c5fd; }

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
  color: #1c469d;
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
  border: 1px solid #e2e8f5;
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
  background: linear-gradient(135deg, rgba(28,70,157,0.04), rgba(59,130,246,0.04));
  opacity: 0;
  transition: opacity 0.35s ease;
}
.bf-service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(28,70,157,0.12);
  border-color: rgba(28,70,157,0.28);
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
  background: linear-gradient(135deg, #eff6ff, #eef2ff);
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
  color: #1c469d;
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
  background: linear-gradient(90deg, #60a5fa, #a78bfa);
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
.bf-check-list li svg { flex-shrink: 0; margin-top: 2px; color: #1c469d; }

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
  border-color: rgba(96,165,250,0.35);
  box-shadow: 0 8px 32px rgba(59,130,246,0.12);
  transform: translateY(-4px);
  background: rgba(255,255,255,0.07);
}
.bf-why-card__num {
  font-size: 2.4rem;
  font-weight: 900;
  color: rgba(96,165,250,0.2);
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
  background: linear-gradient(135deg, #0f1e4a, #1e3a8a);
}
.bf-cta__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.bf-cta__orb--1 { width: 420px; height: 420px; background: rgba(28,70,157,0.35); top: -120px; left: -100px; }
.bf-cta__orb--2 { width: 320px; height: 320px; background: rgba(96,165,250,0.2); bottom: -60px; right: -80px; }
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
  color: #1c469d;
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
  color: #1c469d;
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
  background: rgba(28,70,157,0.3);
}
.bf-process-step:last-child::after { display: none; }
.bf-process-step__num {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, #eff6ff, #eef2ff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 900;
  color: #1c469d;
  margin-bottom: 20px;
  border: 2px solid #dbeafe;
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
  background: linear-gradient(90deg, #eff6ff, #eef2ff, #eff6ff);
  border: 1px solid #dbeafe;
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
  background: #1c469d;
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
  border: 1px solid #dbeafe;
  border-radius: 50px;
  padding: 6px 16px;
  font-size: 12px;
  font-weight: 700;
  color: #1c469d;
  letter-spacing: 0.05em;
}
`;

/* ── Data ──────────────────────────────────────────────────── */
const processSteps = [
  { num: '1', title: 'Discovery & Audit', desc: 'Deep-dive into your portfolio, processes and pain-points to map the right BPO strategy.' },
  { num: '2', title: 'Solution Design', desc: 'Customised operating model with defined KPIs, SLAs, tech stack and compliance protocols.' },
  { num: '3', title: 'Pilot Launch', desc: 'Rapid deployment of a controlled pilot with real-time monitoring and feedback loops.' },
  { num: '4', title: 'Scale & Optimise', desc: 'Full rollout with continuous optimisation driven by data, analytics and quarterly reviews.' },
];

/* ── Component ─────────────────────────────────────────────── */
const BankingAndFinancialServices = () => {
  return (
    <LandingLayout>
      <style>{STYLES}</style>
      <div className="bf-page">

        {/* ══════════════════ 1. HERO ══════════════════ */}
        {/* Custom Flat CSS Hero Section */}
        <div className="relative pt-32 pb-20 min-h-[65vh] flex flex-col justify-center overflow-hidden bg-[#f4f7fc]">
          
          {/* Background Vector Canvas */}
          <div className="absolute inset-0 z-0">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400" preserveAspectRatio="none">
              {/* 1. Navy organic waves on the top-left */}
              <path d="M0,0 C160,0 200,80 150,150 C120,200 40,180 0,120 Z" fill="#1c469d" opacity="0.08" />
              <path d="M0,0 C100,0 120,50 100,100 C80,130 30,120 0,80 Z" fill="#1c469d" opacity="0.12" />

              {/* 2. Soft blue organic waves on the bottom-left */}
              <path d="M0,400 C100,400 150,320 120,280 C90,240 20,280 0,320 Z" fill="#b3c7e8" opacity="0.4" />
              <path d="M0,400 C80,400 120,340 90,310 C60,280 10,310 0,350 Z" fill="#7094c8" opacity="0.3" />

              {/* 3. Sweeping center arc (dividing curve) */}
              <path d="M380,420 C380,240 450,20 620,20" fill="none" stroke="#1c469d" strokeWidth="2.5" opacity="0.15" />
              <path d="M375,420 C375,235 446,15 618,15" fill="none" stroke="#1c469d" strokeWidth="1.2" opacity="0.08" />

              {/* 4. Layered navy waves on the bottom-right */}
              <path d="M500,400 C650,380 750,280 1000,310 L1000,400 Z" fill="#b3c7e8" opacity="0.25" />
              <path d="M600,400 C730,370 780,270 1000,300 L1000,400 Z" fill="#7094c8" opacity="0.3" />
              <path d="M680,400 C780,380 840,290 1000,320 L1000,400 Z" fill="#4169a8" opacity="0.4" />
              <path d="M760,400 C850,380 900,285 1000,340 L1000,400 Z" fill="#1c469d" opacity="0.55" />
              <path d="M840,400 C910,390 940,335 1000,360 L1000,400 Z" fill="#0f2a5e" opacity="0.65" />

              {/* 5. Financial growth chart (bars + line) bottom-right */}
              <g transform="translate(750, 260) scale(1.1)" stroke="#1c469d" strokeWidth="2" fill="none" opacity="0.25">
                <polyline points="0,50 30,30 60,40 90,10" />
                <path d="M90,10 L80,10 M90,10 L90,20" strokeLinecap="round" />
                <rect x="-10" y="55" width="10" height="15" fill="#1c469d" opacity="0.4" stroke="none" />
                <rect x="15" y="45" width="10" height="25" fill="#1c469d" opacity="0.4" stroke="none" />
                <rect x="45" y="50" width="10" height="20" fill="#1c469d" opacity="0.4" stroke="none" />
                <rect x="75" y="25" width="10" height="45" fill="#1c469d" opacity="0.4" stroke="none" />
              </g>

              {/* 6. Currency symbols floating accents */}
              <text x="780" y="160" fill="#1c469d" opacity="0.06" fontSize="110" fontWeight="900" fontFamily="serif">₹</text>
              <text x="900" y="100" fill="#1c469d" opacity="0.04" fontSize="70" fontWeight="900" fontFamily="serif">$</text>

              {/* 7. Grid dot matrices */}
              <g transform="translate(850, 30)" fill="#1c469d" opacity="0.15">
                <circle cx="0" cy="0" r="3" /><circle cx="20" cy="0" r="3" /><circle cx="40" cy="0" r="3" /><circle cx="60" cy="0" r="3" />
                <circle cx="0" cy="20" r="3" /><circle cx="20" cy="20" r="3" /><circle cx="40" cy="20" r="3" /><circle cx="60" cy="20" r="3" />
                <circle cx="0" cy="40" r="3" /><circle cx="20" cy="40" r="3" /><circle cx="40" cy="40" r="3" /><circle cx="60" cy="40" r="3" />
              </g>
            </svg>
          </div>

          {/* Hero Content Container */}
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
              
              {/* LEFT SIDE: Typography & CTA */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                
                {/* Breadcrumb matching old style but adjusted colors */}
                <nav className="flex items-center gap-2 text-sm font-semibold text-[#4169a8] mb-4">
                  <Link to="/" className="hover:text-[#1c469d] transition-colors">Home</Link>
                  <ChevronRight size={14} className="opacity-60" />
                  <span>Industries</span>
                  <ChevronRight size={14} className="opacity-60" />
                  <span className="text-[#1c469d]">Banking & Finance</span>
                </nav>

                <div className="text-[#1c469d] font-bold text-sm uppercase tracking-[0.2em] bg-[#dce5f2] border border-[#a8bedb] px-4 py-2 rounded-full inline-flex items-center gap-2 self-start mb-6 select-none">
                  <Banknote size={16} /> Finance & Growth
                </div>

                <h1 
                  className="text-5xl sm:text-6xl md:text-7xl font-black text-[#0f2a5e] leading-[1.05] tracking-tight mb-6"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Banking & <br />
                  <span className="text-[#1c469d]">Financial Services</span>
                </h1>

                <p className="text-[#4169a8] text-lg sm:text-xl font-medium max-w-lg leading-relaxed mb-8">
                  Powering BFSI excellence with intelligent operations, regulatory compliance, and AI-driven financial analytics.
                </p>

                <div className="flex items-center gap-6">
                  <button className="bg-[#1c469d] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-[#1c469d]/20 hover:bg-[#0f2a5e] transition-all flex items-center gap-2">
                    Partner With Us <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE: Custom Vector Art Badge */}
              <div className="w-full lg:w-1/2 flex items-center justify-center relative">
                <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border-[3px] border-dashed border-[#1c469d]/30 relative flex items-center justify-center select-none">
                  
                  {/* Central Bank Building Badge */}
                  <div className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full bg-[#dce5f2] border-8 border-white flex items-center justify-center shadow-[0_8px_30px_rgba(28,70,157,0.1)] z-10 relative">
                    <svg viewBox="0 0 100 100" className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] text-[#1c469d] fill-current relative z-10">
                      {/* Bank Roof / Pediment Triangle */}
                      <polygon points="50,15 20,38 80,38" />
                      
                      {/* Roof base line */}
                      <rect x="16" y="36" width="68" height="5" rx="1" />
                      
                      {/* 4 Pillars */}
                      <rect x="24" y="42" width="7" height="28" rx="1" />
                      <rect x="38" y="42" width="7" height="28" rx="1" />
                      <rect x="55" y="42" width="7" height="28" rx="1" />
                      <rect x="69" y="42" width="7" height="28" rx="1" />
                      
                      {/* Foundation base */}
                      <rect x="16" y="70" width="68" height="5" rx="1" />
                      
                      {/* Steps */}
                      <rect x="12" y="75" width="76" height="4" rx="1" />
                      <rect x="8" y="79" width="84" height="4" rx="1" />
                    </svg>
                    
                    {/* Subtle highlight ring inside the badge */}
                    <div className="absolute inset-0 rounded-full border border-white/40 pointer-events-none"></div>
                  </div>

                  {/* 6 Surrounding Dashed-Ring Sub-Icons */}
                  
                  {/* 1. Top (Credit Card) */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border border-[#1c469d]/20 flex items-center justify-center shadow-lg shadow-[#1c469d]/5 z-20">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 text-[#1c469d] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                  </div>

                  {/* 2. Top-Right (Lock) */}
                  <div className="absolute top-[15%] -right-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border border-[#1c469d]/20 flex items-center justify-center shadow-lg shadow-[#1c469d]/5 z-20">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 text-[#1c469d] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>

                  {/* 3. Bottom-Right (Trending Up) */}
                  <div className="absolute bottom-[15%] -right-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border border-[#1c469d]/20 flex items-center justify-center shadow-lg shadow-[#1c469d]/5 z-20">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 text-[#1c469d] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
                    </svg>
                  </div>

                  {/* 4. Bottom (Currency) */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border border-[#1c469d]/20 flex items-center justify-center shadow-lg shadow-[#1c469d]/5 z-20">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 text-[#1c469d] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>

                  {/* 5. Bottom-Left (Wallet) */}
                  <div className="absolute bottom-[15%] -left-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border border-[#1c469d]/20 flex items-center justify-center shadow-lg shadow-[#1c469d]/5 z-20">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 text-[#1c469d] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                    </svg>
                  </div>

                  {/* 6. Top-Left (Coins) */}
                  <div className="absolute top-[15%] -left-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border border-[#1c469d]/20 flex items-center justify-center shadow-lg shadow-[#1c469d]/5 z-20">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 text-[#1c469d] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18" /><line x1="7" y1="6" x2="8.5" y2="8.5" /><line x1="14" y1="13" x2="15.5" y2="15.5" />
                    </svg>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

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


          </div>
        </section>

        {/* ══════════════════ 6. HOW WE WORK ══════════════════ */}
        <section className="bf-section bf-section--white">
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

      </div>
    </LandingLayout>
  );
};

export default BankingAndFinancialServices;

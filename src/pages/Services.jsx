import React from 'react';
import { Landmark, ShieldCheck, ShoppingBag, ShoppingCart, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import LandingLayout from '../components/layout/LandingLayout';

const industriesData = [
  {
    id: 'banking',
    name: 'Banking & Financial Services',
    icon: Landmark,
    link: '/banking-and-financial-services',
  },
  {
    id: 'insurance',
    name: 'Insurance Sectors',
    icon: ShieldCheck,
    link: '/insurance',
  },
  {
    id: 'retail',
    name: 'Retail Industry',
    icon: ShoppingBag,
    link: '/retail-and-e-commerce',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Digital Commerce',
    icon: ShoppingCart,
    link: '/retail-and-e-commerce',
  }
];

const Services = () => {
  const getSectorColor = (id) => {
    switch (id) {
      case 'banking': return '#1c469d';
      case 'insurance': return '#2d5128';
      case 'retail': return '#b45309';
      case 'ecommerce': return '#8b5cf6';
      default: return '#94a3b8';
    }
  };

  const renderThread = (index, currentId) => {
    if (index >= industriesData.length - 1) return null;
    const nextId = industriesData[index + 1].id;
    const currentColor = getSectorColor(currentId);
    const nextColor = getSectorColor(nextId);

    return (
      <div className="hidden md:block absolute w-full h-[96px] z-0 pointer-events-none" style={{ top: '100%' }}>
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
          {/* Right Side Thread (Image to Image) */}
          <path
            d="M 850,0 C 950,50 550,50 650,100"
            fill="none"
            stroke={`url(#thread-gradient-${index})`}
            strokeWidth="3"
            strokeDasharray="8 8"
            vectorEffect="non-scaling-stroke"
            className="opacity-50"
          />
          {/* Left Side Thread (Text to Text) */}
          <path
            d="M 150,0 C 50,50 450,50 350,100"
            fill="none"
            stroke={`url(#thread-gradient-${index})`}
            strokeWidth="3"
            strokeDasharray="8 8"
            vectorEffect="non-scaling-stroke"
            className="opacity-50"
          />
          <defs>
            <linearGradient id={`thread-gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={currentColor} />
              <stop offset="100%" stopColor={nextColor} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  };

  return (
    <LandingLayout>
      <main className="w-full bg-white min-h-screen pt-20 font-sans text-slate-900 relative overflow-hidden select-none">

        {/* Injecting static, clean, custom CSS styles for structural layout theme (Zero animations, pure CSS driven) */}
        <style dangerouslySetInnerHTML={{
          __html: `
          /* Static Elegant Mesh Background */
          .static-mesh {
            position: absolute;
            inset: 0;
            background-image: 
              radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.02) 0%, transparent 40%),
              radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.02) 0%, transparent 40%);
            background-size: 100% 100%;
            pointer-events: none;
            z-index: 1;
          }

          /* Full-Width Structured Card Theme */
          .full-width-card {
            position: relative;
            width: 100%;
            border-radius: 32px;
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.06);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.02);
            overflow: hidden;
            z-index: 2;
          }

          .full-width-card:hover {
            border-color: rgba(0, 0, 0, 0.12);
            box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.04);
          }

          /* Flat highlight line on the left side to mark the active sector theme */
          .card-theme-edge {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 6px;
            z-index: 10;
          }

          /* Light full-width background shading */
          .full-card-overlay {
            background: linear-gradient(to top, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.2) 60%, transparent 100%);
            position: absolute;
            inset: 0;
            z-index: 1;
          }

          /* Flat Static Icon Container */
          .static-icon-panel {
            background: rgba(0, 0, 0, 0.03);
            border: 1px solid rgba(0, 0, 0, 0.06);
            color: #475569;
          }

          /* Elegant White Glassmorphic Badge */
          .badge-glass-panel {
            background: rgba(255, 255, 255, 0.88);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(0, 0, 0, 0.07);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          }

          .full-width-card:hover .badge-glass-panel {
            border-color: rgba(0, 0, 0, 0.12);
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.06);
          }

          /* Clean Static Indicator Button */
          .static-indicator-btn {
            background: rgba(0, 0, 0, 0.04);
            border: 1px solid rgba(0, 0, 0, 0.06);
            color: #334155;
          }


          /* ========================================================================= */
          /* PURE CSS THEMES FOR INDIVIDUAL SECTORS (No JS inline styles used)          */
          /* ========================================================================= */

          /* 1. BANKING SECTOR THEME */
          .theme-banking {
            background: radial-gradient(circle at 15% 30%, rgba(37, 99, 235, 0.05) 0%, #ffffff 85%);
          }
          .theme-banking .card-theme-edge {
            background: linear-gradient(to bottom, #3b82f6, #1d4ed8);
          }
          .theme-banking .industry-grid {
            background-image: 
              linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px);
            background-size: 40px 40px;
          }
          .theme-banking .industry-shape-1 {
            border: 1px solid rgba(59, 130, 246, 0.08);
            background: rgba(59, 130, 246, 0.005);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.015);
            transform: rotate(15deg);
          }
          .theme-banking .industry-shape-2 {
            border: 1px solid rgba(56, 189, 248, 0.08);
            background: rgba(56, 189, 248, 0.005);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.01);
            transform: rotate(-10deg);
          }
          .theme-banking:hover .static-icon-panel {
            background: #2563eb;
            border-color: transparent;
            color: #ffffff;
          }
          .theme-banking:hover .static-indicator-btn {
            background: #0f172a;
            color: #ffffff;
            border-color: transparent;
          }

          /* 2. BANKING & FINANCIAL SERVICES BESPOKE FLAT NAVY THEME */
          .theme-banking-custom {
            position: relative;
            width: 100%;
            border-radius: 32px;
            border: 1px solid rgba(28, 70, 157, 0.12);
            box-shadow: 0 4px 30px rgba(28, 70, 157, 0.02);
            overflow: hidden;
            z-index: 2;
          }
          .theme-banking-custom:hover {
            border-color: rgba(28, 70, 157, 0.25);
            box-shadow: 0 15px 40px -10px rgba(28, 70, 157, 0.06);
          }
          .theme-banking-custom .card-theme-edge {
            background: linear-gradient(to bottom, #1c469d, #0f2a5e);
          }

          /* 3. INSURANCE BESPOKE HIGH-FIDELITY FLAT GREEN THEME */
          .theme-insurance-custom {
            position: relative;
            width: 100%;
            border-radius: 32px;
            border: 1px solid rgba(45, 81, 40, 0.12);
            box-shadow: 0 4px 30px rgba(45, 81, 40, 0.02);
            overflow: hidden;
            z-index: 2;
          }
          .theme-insurance-custom:hover {
            border-color: rgba(45, 81, 40, 0.25);
            box-shadow: 0 15px 40px -10px rgba(45, 81, 40, 0.06);
          }
          .theme-insurance-custom .card-theme-edge {
            background: linear-gradient(to bottom, #2d5128, #1b3320);
          }

          /* 4. RETAIL BESPOKE FLAT AMBER THEME */
          .theme-retail-custom {
            position: relative;
            width: 100%;
            border-radius: 32px;
            border: 1px solid rgba(180, 100, 20, 0.12);
            box-shadow: 0 4px 30px rgba(180, 100, 20, 0.02);
            overflow: hidden;
            z-index: 2;
          }
          .theme-retail-custom:hover {
            border-color: rgba(180, 100, 20, 0.25);
            box-shadow: 0 15px 40px -10px rgba(180, 100, 20, 0.06);
          }
          .theme-retail-custom .card-theme-edge {
            background: linear-gradient(to bottom, #b45309, #92400e);
          }

          /* 5. E-COMMERCE BESPOKE FLAT VIOLET THEME */
          .theme-ecommerce-custom {
            position: relative;
            width: 100%;
            border-radius: 32px;
            border: 1px solid rgba(139, 92, 246, 0.12);
            box-shadow: 0 4px 30px rgba(139, 92, 246, 0.02);
            overflow: hidden;
            z-index: 2;
          }
          .theme-ecommerce-custom:hover {
            border-color: rgba(139, 92, 246, 0.25);
            box-shadow: 0 15px 40px -10px rgba(139, 92, 246, 0.06);
          }
          .theme-ecommerce-custom .card-theme-edge {
            background: linear-gradient(to bottom, #8b5cf6, #5b21b6);
          }

          /* 6. LEGACY SECTOR THEMES */
          .theme-retail {
            background: radial-gradient(circle at 15% 80%, rgba(245, 158, 11, 0.05) 0%, #ffffff 85%);
          }
          .theme-retail .card-theme-edge {
            background: linear-gradient(to bottom, #f59e0b, #d97706);
          }
          .theme-retail .industry-grid {
            background: 
              linear-gradient(60deg, rgba(245, 158, 11, 0.012) 1px, transparent 1px),
              linear-gradient(-60deg, rgba(245, 158, 11, 0.012) 1px, transparent 1px);
            background-size: 60px 60px;
          }
          .theme-retail .luxury-plate {
            border-radius: 50%;
            border: 1px solid rgba(245, 158, 11, 0.08);
            background: rgba(245, 158, 11, 0.005);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.01);
          }
          .theme-retail .luxury-plate-2 {
            border-radius: 50%;
            border: 1px solid rgba(251, 191, 36, 0.08);
            background: rgba(251, 191, 36, 0.005);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.01);
          }
          .theme-retail:hover .static-icon-panel {
            background: #f59e0b;
            border-color: transparent;
            color: #ffffff;
          }
          .theme-retail:hover .static-indicator-btn {
            background: #0f172a;
            color: #ffffff;
            border-color: transparent;
          }


        ` }} />

        {/* Static mesh background grid */}
        <div className="static-mesh" />

        {/* Ambient top lighting for light mode */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[350px] bg-gradient-to-b from-blue-600/[0.02] via-purple-600/[0.005] to-transparent rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="max-w-[1240px] mx-auto px-6 pb-20 pt-4 relative z-10">

          {/* ── CINEMATIC 4-SECTORS VERTICAL STACK (FULL WIDTH EACH) ── */}
          <div className="flex flex-col gap-12 md:gap-24 relative">
            {industriesData.map((ind, index) => {
              const Icon = ind.icon;

              if (ind.id === 'banking') {
                return (
                  <div key={ind.name} className="w-full relative z-10">
                    <Link
                      to={ind.link}
                      className="block theme-banking-custom min-h-[380px] md:min-h-[460px] relative group select-none no-underline"
                    >
                      {/* Base Background & Wave Overlays (Custom CSS / SVG, no images, flat design) */}
                      <div className="absolute inset-0 z-0 bg-[#f4f7fc]">
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
                          <g transform="translate(710, 240) scale(0.85)" stroke="#1c469d" strokeWidth="2" fill="none" opacity="0.3">
                            <polyline points="0,50 30,30 60,40 90,10" />
                            <path d="M90,10 L80,10 M90,10 L90,20" strokeLinecap="round" />
                            <rect x="-10" y="55" width="10" height="15" fill="#1c469d" opacity="0.4" stroke="none" />
                            <rect x="15" y="45" width="10" height="25" fill="#1c469d" opacity="0.4" stroke="none" />
                            <rect x="45" y="50" width="10" height="20" fill="#1c469d" opacity="0.4" stroke="none" />
                            <rect x="75" y="25" width="10" height="45" fill="#1c469d" opacity="0.4" stroke="none" />
                          </g>

                          {/* 6. Currency symbols floating accents */}
                          <text x="780" y="160" fill="#1c469d" opacity="0.06" fontSize="90" fontWeight="900" fontFamily="serif">₹</text>
                          <text x="880" y="100" fill="#1c469d" opacity="0.04" fontSize="60" fontWeight="900" fontFamily="serif">$</text>
                          <text x="920" y="200" fill="#1c469d" opacity="0.04" fontSize="48" fontWeight="900" fontFamily="serif">€</text>

                          {/* 7. Circuit pattern lines on the top-right */}
                          <g transform="translate(800, 30)" stroke="#1c469d" strokeWidth="1.5" fill="none" opacity="0.12">
                            <path d="M0,0 L40,0 L40,20 L80,20" />
                            <path d="M0,15 L25,15 L25,35 L60,35" />
                            <circle cx="80" cy="20" r="3" fill="#1c469d" opacity="0.3" />
                            <circle cx="60" cy="35" r="3" fill="#1c469d" opacity="0.3" />
                          </g>

                          {/* 8. Grid dot matrices */}
                          <g transform="translate(770, 20)" fill="#1c469d" opacity="0.2">
                            <circle cx="0" cy="0" r="2" /><circle cx="15" cy="0" r="2" /><circle cx="30" cy="0" r="2" /><circle cx="45" cy="0" r="2" /><circle cx="60" cy="0" r="2" /><circle cx="75" cy="0" r="2" />
                            <circle cx="0" cy="12" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="30" cy="12" r="2" /><circle cx="45" cy="12" r="2" /><circle cx="60" cy="12" r="2" /><circle cx="75" cy="12" r="2" />
                            <circle cx="0" cy="24" r="2" /><circle cx="15" cy="24" r="2" /><circle cx="30" cy="24" r="2" /><circle cx="45" cy="24" r="2" /><circle cx="60" cy="24" r="2" /><circle cx="75" cy="24" r="2" />
                          </g>
                          <g transform="translate(30, 60)" fill="#1c469d" opacity="0.2">
                            <circle cx="0" cy="0" r="2" /><circle cx="15" cy="0" r="2" /><circle cx="30" cy="0" r="2" />
                            <circle cx="0" cy="12" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="30" cy="12" r="2" />
                            <circle cx="0" cy="24" r="2" /><circle cx="15" cy="24" r="2" /><circle cx="30" cy="24" r="2" />
                          </g>

                          {/* 9. Decorative abstract geometric block (top-right accent) */}
                          <g transform="translate(930, 20) scale(0.6)" stroke="#1c469d" strokeWidth="2" fill="none" opacity="0.18">
                            <rect x="0" y="0" width="50" height="50" rx="8" />
                            <rect x="10" y="10" width="30" height="30" rx="4" />
                            <line x1="25" y1="0" x2="25" y2="50" />
                            <line x1="0" y1="25" x2="50" y2="25" />
                          </g>
                        </svg>
                      </div>

                      {/* Colored Solid Theme Edge Badge */}
                      <div className="card-theme-edge" />

                      <div className="absolute inset-0 flex flex-col md:flex-row-reverse z-10">

                        {/* LEFT SIDE: Custom CSS Vector Illustration (Bank Building Circle & Dash-Ring Sub-Icons) */}
                        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10 relative">
                          <div className="w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] rounded-full border-2 border-dashed border-[#1c469d]/35 relative flex items-center justify-center select-none shrink-0">

                            {/* Central Bank Building Badge */}
                            <div className="w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] rounded-full bg-[#dce5f2] border-4 border-white flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.02)] z-10">
                              <svg viewBox="0 0 100 100" className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] text-[#1c469d] fill-current">
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
                            </div>

                            {/* 6 Surrounding Dashed-Ring Sub-Icons */}

                            {/* 1. Top (Credit Card) */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#1c469d]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#1c469d] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                <line x1="1" y1="10" x2="23" y2="10" />
                              </svg>
                            </div>

                            {/* 2. Top-Right (Lock / Security) */}
                            <div className="absolute top-[18%] -right-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#1c469d]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#1c469d] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                              </svg>
                            </div>

                            {/* 3. Bottom-Right (Trending Up) */}
                            <div className="absolute bottom-[18%] -right-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#1c469d]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#1c469d] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                <polyline points="17 6 23 6 23 12" />
                              </svg>
                            </div>

                            {/* 4. Bottom (Currency / Dollar Sign) */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#1c469d]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#1c469d] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="1" x2="12" y2="23" />
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                              </svg>
                            </div>

                            {/* 5. Bottom-Left (Wallet) */}
                            <div className="absolute bottom-[18%] -left-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#1c469d]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#1c469d] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                              </svg>
                            </div>

                            {/* 6. Top-Left (Coins / Piggy Bank) */}
                            <div className="absolute top-[18%] -left-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#1c469d]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#1c469d] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="8" cy="8" r="6" />
                                <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
                                <line x1="7" y1="6" x2="8.5" y2="8.5" />
                                <line x1="14" y1="13" x2="15.5" y2="15.5" />
                              </svg>
                            </div>

                          </div>
                        </div>

                        {/* RIGHT SIDE: Beautiful Flat Typography "Banking & Financial Services" (No 3D effect) */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10 relative z-20">
                          <div className="flex flex-col items-start gap-4">

                            <div className="text-[#1c469d] font-bold text-xs uppercase tracking-[0.2em] bg-[#dce5f2] border border-[#a8bedb] px-3.5 py-1.5 rounded-full select-none">
                              Finance & Growth
                            </div>

                            <h2
                              className="text-3xl sm:text-4xl md:text-[3.2rem] font-black text-[#0f2a5e] leading-[1.08] select-none tracking-tight"
                              style={{ fontFamily: "'Outfit', sans-serif" }}
                            >
                              Banking &<br />Financial Services
                            </h2>

                            <p className="text-[#4169a8] text-sm sm:text-base font-semibold max-w-sm mt-1 leading-relaxed">
                              Powering BFSI excellence with intelligent operations, regulatory compliance, and AI-driven financial analytics.
                            </p>



                          </div>
                        </div>

                      </div>
                    </Link>
                    {renderThread(index, ind.id)}
                  </div>
                );
              }

              if (ind.id === 'insurance') {
                return (
                  <div key={ind.name} className="w-full relative z-10">
                    <Link
                      to={ind.link}
                      className="block theme-insurance-custom min-h-[380px] md:min-h-[460px] relative group select-none no-underline"
                    >
                      {/* Base Background & Wave Overlays (Custom CSS / SVG, no images, flat design) */}
                      <div className="absolute inset-0 z-0 bg-[#fbf9f2]">
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400" preserveAspectRatio="none">
                          {/* 1. Sage organic waves on the top-left */}
                          <path d="M0,0 C160,0 200,80 150,150 C120,200 40,180 0,120 Z" fill="#2d5128" opacity="0.08" />
                          <path d="M0,0 C100,0 120,50 100,100 C80,130 30,120 0,80 Z" fill="#2d5128" opacity="0.12" />

                          {/* 2. Soft sage organic waves on the bottom-left */}
                          <path d="M0,400 C100,400 150,320 120,280 C90,240 20,280 0,320 Z" fill="#cbdad5" opacity="0.4" />
                          <path d="M0,400 C80,400 120,340 90,310 C60,280 10,310 0,350 Z" fill="#88a296" opacity="0.3" />

                          {/* 3. Concentric sweeping center arc (beautiful dividing line from image) */}
                          <path d="M380,420 C380,240 450,20 620,20" fill="none" stroke="#2d5128" strokeWidth="2.5" opacity="0.15" />
                          <path d="M375,420 C375,235 446,15 618,15" fill="none" stroke="#2d5128" strokeWidth="1.2" opacity="0.08" />

                          {/* 4. Layered green waves on the bottom-right */}
                          <path d="M500,400 C650,380 750,280 1000,310 L1000,400 Z" fill="#cbdad5" opacity="0.25" />
                          <path d="M600,400 C730,370 780,270 1000,300 L1000,400 Z" fill="#88a296" opacity="0.3" />
                          <path d="M680,400 C780,380 840,290 1000,320 L1000,400 Z" fill="#5b8266" opacity="0.4" />
                          <path d="M760,400 C850,380 900,285 1000,340 L1000,400 Z" fill="#2d5128" opacity="0.55" />
                          <path d="M840,400 C910,390 940,335 1000,360 L1000,400 Z" fill="#1b3320" opacity="0.65" />

                          {/* 5. Trend upward line and bars on the bottom-right */}
                          <g transform="translate(710, 240) scale(0.85)" stroke="#2d5128" strokeWidth="2" fill="none" opacity="0.3">
                            <polyline points="0,50 30,30 60,40 90,10" />
                            <path d="M90,10 L80,10 M90,10 L90,20" strokeLinecap="round" />
                            <rect x="-10" y="55" width="10" height="15" fill="#2d5128" opacity="0.4" stroke="none" />
                            <rect x="15" y="45" width="10" height="25" fill="#2d5128" opacity="0.4" stroke="none" />
                            <rect x="45" y="50" width="10" height="20" fill="#2d5128" opacity="0.4" stroke="none" />
                            <rect x="75" y="25" width="10" height="45" fill="#2d5128" opacity="0.4" stroke="none" />
                          </g>

                          {/* 6. Interlocking gear outlines on the bottom-right */}
                          <g transform="translate(860, 290) scale(0.7)" stroke="#2d5128" strokeWidth="1.8" fill="none" opacity="0.25">
                            <circle cx="50" cy="50" r="18" />
                            <circle cx="50" cy="50" r="8" />
                            <path d="M50,12 L50,20 M50,80 L50,88 M12,50 L20,50 M80,50 L88,50 M23,23 L29,29 M71,71 L77,77 M23,77 L29,71 M71,23 L77,29" />
                          </g>

                          {/* 7. Grid dot matrices */}
                          {/* Top-Right (6x3 grid) */}
                          <g transform="translate(770, 20)" fill="#2d5128" opacity="0.2">
                            <circle cx="0" cy="0" r="2" /><circle cx="15" cy="0" r="2" /><circle cx="30" cy="0" r="2" /><circle cx="45" cy="0" r="2" /><circle cx="60" cy="0" r="2" /><circle cx="75" cy="0" r="2" />
                            <circle cx="0" cy="12" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="30" cy="12" r="2" /><circle cx="45" cy="12" r="2" /><circle cx="60" cy="12" r="2" /><circle cx="75" cy="12" r="2" />
                            <circle cx="0" cy="24" r="2" /><circle cx="15" cy="24" r="2" /><circle cx="30" cy="24" r="2" /><circle cx="45" cy="24" r="2" /><circle cx="60" cy="24" r="2" /><circle cx="75" cy="24" r="2" />
                          </g>
                          {/* Top-Left (3x3 grid) */}
                          <g transform="translate(30, 60)" fill="#2d5128" opacity="0.2">
                            <circle cx="0" cy="0" r="2" /><circle cx="15" cy="0" r="2" /><circle cx="30" cy="0" r="2" />
                            <circle cx="0" cy="12" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="30" cy="12" r="2" />
                            <circle cx="0" cy="24" r="2" /><circle cx="15" cy="24" r="2" /><circle cx="30" cy="24" r="2" />
                          </g>

                          {/* 8. Falling foliage leaf branches at the top-right */}
                          <g transform="translate(930, 20) scale(0.65)" fill="#2d5128" opacity="0.3">
                            <path d="M0,80 Q30,60 40,20 Q10,40 0,80 Z" />
                            <path d="M10,95 Q45,85 60,55 Q25,75 10,95 Z" />
                            <path d="M-10,75 Q-45,65 -60,35 Q-25,55 -10,75 Z" />
                            <line x1="0" y1="120" x2="0" y2="0" stroke="#2d5128" strokeWidth="3" />
                          </g>
                        </svg>
                      </div>

                      {/* Colored Solid Theme Edge Badge */}
                      <div className="card-theme-edge" />

                      <div className="absolute inset-0 flex flex-col md:flex-row-reverse z-10">

                        {/* LEFT SIDE: Custom CSS Vector Illustration (Family Circle & Dash-Ring Sub-Icons) */}
                        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10 relative">
                          <div className="w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] rounded-full border-2 border-dashed border-[#2d5128]/35 relative flex items-center justify-center select-none shrink-0">

                            {/* Central Family Badge */}
                            <div className="w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] rounded-full bg-[#d2ded0] border-4 border-white flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.02)] z-10">
                              <svg viewBox="0 0 100 100" className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] text-[#2d5128] fill-current">
                                {/* Umbrella Canopy */}
                                <path d="M50,18 C28,18 16,37 16,48 C24,48 29.5,43 35,45 C40.5,47 44.5,47 50,45 C55.5,47 59.5,47 65,45 C70.5,43 76,48 84,48 C84,37 72,18 50,18 Z" />

                                {/* Umbrella Handle */}
                                <path d="M50,45 L50,78 A3.5,3.5 0 0,1 46.5,81.5" fill="none" stroke="#2d5128" strokeWidth="2.8" strokeLinecap="round" />

                                {/* Father (Left) */}
                                <circle cx="39" cy="58" r="4" />
                                <path d="M32,68 C32,63.5 35.5,62.5 39,62.5 C42.5,62.5 46,63.5 46,68 L46,80 L32,80 Z" />

                                {/* Mother (Right) */}
                                <circle cx="61" cy="58" r="4" />
                                <path d="M54,68 C54,63.5 57.5,62.5 61,62.5 C64.5,62.5 68,63.5 68,68 L68,80 L54,80 Z" />

                                {/* Child (Center) */}
                                <circle cx="50" cy="64" r="2.8" />
                                <path d="M45.5,71 C45.5,68.2 48,67.2 50,67.2 C52,67.2 54.5,68.2 54.5,71 L54.5,80 L45.5,80 Z" />
                              </svg>
                            </div>

                            {/* 6 Surrounding Dashed-Ring Sub-Icons */}

                            {/* 1. Top (Shield Check) */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#2d5128]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#2d5128] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <path d="m9 12 2 2 4-4" />
                              </svg>
                            </div>

                            {/* 2. Top-Right (Home) */}
                            <div className="absolute top-[18%] -right-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#2d5128]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#2d5128] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                              </svg>
                            </div>

                            {/* 3. Bottom-Right (Briefcase) */}
                            <div className="absolute bottom-[18%] -right-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#2d5128]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#2d5128] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                              </svg>
                            </div>

                            {/* 4. Bottom (Document Policy) */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#2d5128]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#2d5128] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                                <polyline points="10 9 9 9 8 9" />
                              </svg>
                            </div>

                            {/* 5. Bottom-Left (Car) */}
                            <div className="absolute bottom-[18%] -left-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#2d5128]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#2d5128] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2 11 2 11.1 2 11.2V16c0 .6.4 1 1 1h2" />
                                <circle cx="7" cy="17" r="2" />
                                <path d="M9 17h6" />
                                <circle cx="17" cy="17" r="2" />
                              </svg>
                            </div>

                            {/* 6. Top-Left (Heartbeat Pulse) */}
                            <div className="absolute top-[18%] -left-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#2d5128]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#2d5128] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                              </svg>
                            </div>

                          </div>
                        </div>

                        {/* RIGHT SIDE: Beautiful Flat Typography "Insurance" (No 3D effect) */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10 relative z-20">
                          <div className="flex flex-col items-start gap-4">

                            <div className="text-[#2d5128] font-bold text-xs uppercase tracking-[0.2em] bg-[#e1eae0] border border-[#b2cbb0] px-3.5 py-1.5 rounded-full select-none">
                              Security & Protection
                            </div>

                            <h2
                              className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1b3320] leading-none select-none tracking-tight"
                              style={{ fontFamily: "'Outfit', sans-serif" }}
                            >
                              Insurance
                            </h2>

                            <p className="text-[#3c5e42] text-sm sm:text-base font-semibold max-w-sm mt-1 leading-relaxed">
                              Safeguard your family, health, and assets with our comprehensive risk coverage and modern flat insurance frameworks.
                            </p>



                          </div>
                        </div>

                      </div>
                    </Link>
                    {renderThread(index, ind.id)}
                  </div>
                );
              }

              if (ind.id === 'retail') {
                return (
                  <div key={ind.name} className="w-full relative z-10">
                    <Link
                      to={ind.link}
                      className="block theme-retail-custom min-h-[380px] md:min-h-[460px] relative group select-none no-underline"
                    >
                      {/* Base Background & Wave Overlays */}
                      <div className="absolute inset-0 z-0 bg-[#fdf8f0]">
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400" preserveAspectRatio="none">
                          {/* 1. Warm organic waves on the top-left */}
                          <path d="M0,0 C160,0 200,80 150,150 C120,200 40,180 0,120 Z" fill="#b45309" opacity="0.08" />
                          <path d="M0,0 C100,0 120,50 100,100 C80,130 30,120 0,80 Z" fill="#b45309" opacity="0.12" />

                          {/* 2. Soft amber organic waves on the bottom-left */}
                          <path d="M0,400 C100,400 150,320 120,280 C90,240 20,280 0,320 Z" fill="#e8d5b8" opacity="0.4" />
                          <path d="M0,400 C80,400 120,340 90,310 C60,280 10,310 0,350 Z" fill="#c8a875" opacity="0.3" />

                          {/* 3. Sweeping center arc (dividing curve) */}
                          <path d="M380,420 C380,240 450,20 620,20" fill="none" stroke="#b45309" strokeWidth="2.5" opacity="0.15" />
                          <path d="M375,420 C375,235 446,15 618,15" fill="none" stroke="#b45309" strokeWidth="1.2" opacity="0.08" />

                          {/* 4. Layered amber waves on the bottom-right */}
                          <path d="M500,400 C650,380 750,280 1000,310 L1000,400 Z" fill="#e8d5b8" opacity="0.25" />
                          <path d="M600,400 C730,370 780,270 1000,300 L1000,400 Z" fill="#c8a875" opacity="0.3" />
                          <path d="M680,400 C780,380 840,290 1000,320 L1000,400 Z" fill="#d97706" opacity="0.35" />
                          <path d="M760,400 C850,380 900,285 1000,340 L1000,400 Z" fill="#b45309" opacity="0.5" />
                          <path d="M840,400 C910,390 940,335 1000,360 L1000,400 Z" fill="#92400e" opacity="0.6" />

                          {/* 5. Shopping/retail trend bars */}
                          <g transform="translate(710, 240) scale(0.85)" stroke="#b45309" strokeWidth="2" fill="none" opacity="0.3">
                            <polyline points="0,50 30,35 60,25 90,10" />
                            <path d="M90,10 L80,10 M90,10 L90,20" strokeLinecap="round" />
                            <rect x="-10" y="55" width="10" height="15" fill="#b45309" opacity="0.4" stroke="none" />
                            <rect x="15" y="42" width="10" height="28" fill="#b45309" opacity="0.4" stroke="none" />
                            <rect x="45" y="35" width="10" height="35" fill="#b45309" opacity="0.4" stroke="none" />
                            <rect x="75" y="25" width="10" height="45" fill="#b45309" opacity="0.4" stroke="none" />
                          </g>

                          {/* 6. Storefront awning shapes */}
                          <g transform="translate(820, 270) scale(0.7)" fill="#b45309" opacity="0.12">
                            <path d="M0,30 L15,0 L30,30 L45,0 L60,30 L75,0 L90,30 Z" />
                          </g>

                          {/* 7. Grid dot matrices */}
                          <g transform="translate(770, 20)" fill="#b45309" opacity="0.2">
                            <circle cx="0" cy="0" r="2" /><circle cx="15" cy="0" r="2" /><circle cx="30" cy="0" r="2" /><circle cx="45" cy="0" r="2" /><circle cx="60" cy="0" r="2" /><circle cx="75" cy="0" r="2" />
                            <circle cx="0" cy="12" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="30" cy="12" r="2" /><circle cx="45" cy="12" r="2" /><circle cx="60" cy="12" r="2" /><circle cx="75" cy="12" r="2" />
                            <circle cx="0" cy="24" r="2" /><circle cx="15" cy="24" r="2" /><circle cx="30" cy="24" r="2" /><circle cx="45" cy="24" r="2" /><circle cx="60" cy="24" r="2" /><circle cx="75" cy="24" r="2" />
                          </g>
                          <g transform="translate(30, 60)" fill="#b45309" opacity="0.2">
                            <circle cx="0" cy="0" r="2" /><circle cx="15" cy="0" r="2" /><circle cx="30" cy="0" r="2" />
                            <circle cx="0" cy="12" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="30" cy="12" r="2" />
                            <circle cx="0" cy="24" r="2" /><circle cx="15" cy="24" r="2" /><circle cx="30" cy="24" r="2" />
                          </g>

                          {/* 8. Decorative diamond shapes (top-right) */}
                          <g transform="translate(920, 25) scale(0.55)" stroke="#b45309" strokeWidth="2" fill="none" opacity="0.2">
                            <rect x="0" y="15" width="30" height="30" rx="2" transform="rotate(45 15 30)" />
                            <rect x="10" y="22" width="14" height="14" rx="1" transform="rotate(45 17 29)" />
                          </g>
                        </svg>
                      </div>

                      {/* Colored Solid Theme Edge Badge */}
                      <div className="card-theme-edge" />

                      <div className="absolute inset-0 flex flex-col md:flex-row-reverse z-10">

                        {/* LEFT SIDE: Custom CSS Vector Illustration (Storefront Circle & Dash-Ring Sub-Icons) */}
                        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10 relative">
                          <div className="w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] rounded-full border-2 border-dashed border-[#b45309]/35 relative flex items-center justify-center select-none shrink-0">

                            {/* Central Storefront Badge */}
                            <div className="w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] rounded-full bg-[#f0e4d0] border-4 border-white flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.02)] z-10">
                              <svg viewBox="0 0 100 100" className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] text-[#92400e] fill-current">
                                {/* Store Awning */}
                                <path d="M15,32 L25,18 L75,18 L85,32 Z" />
                                <path d="M15,32 L25,42 L35,32 L45,42 L55,32 L65,42 L75,32 L85,42 L85,32 L15,32 Z" opacity="0.8" />

                                {/* Store Body */}
                                <rect x="20" y="42" width="60" height="38" rx="2" opacity="0.15" />

                                {/* Store Door */}
                                <rect x="40" y="52" width="20" height="28" rx="2" />
                                <circle cx="56" cy="66" r="1.5" fill="#f0e4d0" />

                                {/* Store Windows */}
                                <rect x="25" y="48" width="12" height="12" rx="1" opacity="0.7" />
                                <rect x="63" y="48" width="12" height="12" rx="1" opacity="0.7" />

                                {/* Sign board */}
                                <rect x="35" y="22" width="30" height="8" rx="2" fill="#f0e4d0" opacity="0.5" />

                                {/* Foundation */}
                                <rect x="15" y="80" width="70" height="4" rx="1" />
                              </svg>
                            </div>

                            {/* 6 Surrounding Dashed-Ring Sub-Icons */}

                            {/* 1. Top (Shopping Bag) */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#b45309]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#92400e] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                                <path d="M3 6h18" />
                                <path d="M16 10a4 4 0 0 1-8 0" />
                              </svg>
                            </div>

                            {/* 2. Top-Right (Barcode / Scanner) */}
                            <div className="absolute top-[18%] -right-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#b45309]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#92400e] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 5v-2h4" /><path d="M17 3h4v2" />
                                <path d="M21 19v2h-4" /><path d="M7 21H3v-2" />
                                <rect x="7" y="7" width="10" height="10" rx="1" />
                              </svg>
                            </div>

                            {/* 3. Bottom-Right (Tag / Label) */}
                            <div className="absolute bottom-[18%] -right-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#b45309]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#92400e] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                                <path d="M7 7h.01" />
                              </svg>
                            </div>

                            {/* 4. Bottom (Gift) */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#b45309]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#92400e] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="8" width="18" height="4" rx="1" />
                                <path d="M12 8v13" />
                                <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
                                <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
                              </svg>
                            </div>

                            {/* 5. Bottom-Left (Percent / Discount) */}
                            <div className="absolute bottom-[18%] -left-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#b45309]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#92400e] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="5" x2="5" y2="19" />
                                <circle cx="6.5" cy="6.5" r="2.5" />
                                <circle cx="17.5" cy="17.5" r="2.5" />
                              </svg>
                            </div>

                            {/* 6. Top-Left (Star / Rating) */}
                            <div className="absolute top-[18%] -left-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#b45309]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#92400e] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                              </svg>
                            </div>

                          </div>
                        </div>

                        {/* RIGHT SIDE: Beautiful Flat Typography "Retail" (No 3D effect) */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10 relative z-20">
                          <div className="flex flex-col items-start gap-4">

                            <div className="text-[#92400e] font-bold text-xs uppercase tracking-[0.2em] bg-[#f0e4d0] border border-[#d4b896] px-3.5 py-1.5 rounded-full select-none">
                              Commerce & Experience
                            </div>

                            <h2
                              className="text-4xl sm:text-5xl md:text-6xl font-black text-[#78350f] leading-none select-none tracking-tight"
                              style={{ fontFamily: "'Outfit', sans-serif" }}
                            >
                              Retail
                            </h2>

                            <p className="text-[#a16207] text-sm sm:text-base font-semibold max-w-sm mt-1 leading-relaxed">
                              Elevating retail operations with omnichannel customer engagement, inventory intelligence, and premium shopping experiences.
                            </p>



                          </div>
                        </div>

                      </div>
                    </Link>
                    {renderThread(index, ind.id)}
                  </div>
                );
              }

              if (ind.id === 'ecommerce') {
                return (
                  <div key={ind.name} className="w-full relative z-10">
                    <Link
                      to={ind.link}
                      className="block theme-ecommerce-custom min-h-[380px] md:min-h-[460px] relative group select-none no-underline"
                    >
                      {/* Base Background & Wave Overlays */}
                      <div className="absolute inset-0 z-0 bg-[#f9f5ff]">
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400" preserveAspectRatio="none">
                          {/* 1. Violet organic waves on the top-left */}
                          <path d="M0,0 C160,0 200,80 150,150 C120,200 40,180 0,120 Z" fill="#8b5cf6" opacity="0.06" />
                          <path d="M0,0 C100,0 120,50 100,100 C80,130 30,120 0,80 Z" fill="#8b5cf6" opacity="0.10" />

                          {/* 2. Soft lavender organic waves on the bottom-left */}
                          <path d="M0,400 C100,400 150,320 120,280 C90,240 20,280 0,320 Z" fill="#ddd6fe" opacity="0.4" />
                          <path d="M0,400 C80,400 120,340 90,310 C60,280 10,310 0,350 Z" fill="#c4b5fd" opacity="0.3" />

                          {/* 3. Sweeping center arc (dividing curve) */}
                          <path d="M380,420 C380,240 450,20 620,20" fill="none" stroke="#8b5cf6" strokeWidth="2.5" opacity="0.15" />
                          <path d="M375,420 C375,235 446,15 618,15" fill="none" stroke="#8b5cf6" strokeWidth="1.2" opacity="0.08" />

                          {/* 4. Layered violet waves on the bottom-right */}
                          <path d="M500,400 C650,380 750,280 1000,310 L1000,400 Z" fill="#ddd6fe" opacity="0.25" />
                          <path d="M600,400 C730,370 780,270 1000,300 L1000,400 Z" fill="#c4b5fd" opacity="0.3" />
                          <path d="M680,400 C780,380 840,290 1000,320 L1000,400 Z" fill="#a78bfa" opacity="0.35" />
                          <path d="M760,400 C850,380 900,285 1000,340 L1000,400 Z" fill="#8b5cf6" opacity="0.5" />
                          <path d="M840,400 C910,390 940,335 1000,360 L1000,400 Z" fill="#6d28d9" opacity="0.6" />

                          {/* 5. Digital growth charts / Network connections */}
                          <g transform="translate(710, 240) scale(0.85)" stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.3">
                            <polyline points="0,50 30,35 60,25 90,10" />
                            <circle cx="0" cy="50" r="4" fill="#8b5cf6" />
                            <circle cx="30" cy="35" r="4" fill="#8b5cf6" />
                            <circle cx="60" cy="25" r="4" fill="#8b5cf6" />
                            <circle cx="90" cy="10" r="4" fill="#8b5cf6" />
                            <rect x="15" y="42" width="10" height="28" fill="#8b5cf6" opacity="0.4" stroke="none" />
                            <rect x="45" y="35" width="10" height="35" fill="#8b5cf6" opacity="0.4" stroke="none" />
                            <rect x="75" y="25" width="10" height="45" fill="#8b5cf6" opacity="0.4" stroke="none" />
                          </g>

                          {/* 6. Radar / Target shapes (top-right) */}
                          <g transform="translate(850, 60)" stroke="#8b5cf6" strokeWidth="1.5" fill="none" opacity="0.12">
                            <circle cx="0" cy="0" r="30" />
                            <circle cx="0" cy="0" r="20" />
                            <circle cx="0" cy="0" r="10" />
                            <line x1="-40" y1="0" x2="40" y2="0" />
                            <line x1="0" y1="-40" x2="0" y2="40" />
                          </g>

                          {/* 7. Grid dot matrices */}
                          <g transform="translate(770, 20)" fill="#8b5cf6" opacity="0.2">
                            <circle cx="0" cy="0" r="2" /><circle cx="15" cy="0" r="2" /><circle cx="30" cy="0" r="2" /><circle cx="45" cy="0" r="2" /><circle cx="60" cy="0" r="2" /><circle cx="75" cy="0" r="2" />
                            <circle cx="0" cy="12" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="30" cy="12" r="2" /><circle cx="45" cy="12" r="2" /><circle cx="60" cy="12" r="2" /><circle cx="75" cy="12" r="2" />
                            <circle cx="0" cy="24" r="2" /><circle cx="15" cy="24" r="2" /><circle cx="30" cy="24" r="2" /><circle cx="45" cy="24" r="2" /><circle cx="60" cy="24" r="2" /><circle cx="75" cy="24" r="2" />
                          </g>
                          <g transform="translate(30, 60)" fill="#8b5cf6" opacity="0.2">
                            <circle cx="0" cy="0" r="2" /><circle cx="15" cy="0" r="2" /><circle cx="30" cy="0" r="2" />
                            <circle cx="0" cy="12" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="30" cy="12" r="2" />
                            <circle cx="0" cy="24" r="2" /><circle cx="15" cy="24" r="2" /><circle cx="30" cy="24" r="2" />
                          </g>

                          {/* 8. Floating digital cursors */}
                          <g transform="translate(930, 150) scale(0.6)" stroke="#8b5cf6" strokeWidth="2" strokeLinejoin="round" fill="none" opacity="0.2">
                            <path d="M0,0 L15,35 L20,20 L35,15 Z" />
                          </g>
                          <g transform="translate(480, 50) scale(0.4)" stroke="#8b5cf6" strokeWidth="2" strokeLinejoin="round" fill="none" opacity="0.15">
                            <path d="M0,0 L15,35 L20,20 L35,15 Z" />
                          </g>
                        </svg>
                      </div>

                      {/* Colored Solid Theme Edge Badge */}
                      <div className="card-theme-edge" />

                      <div className="absolute inset-0 flex flex-col md:flex-row-reverse z-10">

                        {/* LEFT SIDE: Custom CSS Vector Illustration (Digital Screen/Cart & Dash-Ring Sub-Icons) */}
                        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10 relative">
                          <div className="w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] rounded-full border-2 border-dashed border-[#8b5cf6]/35 relative flex items-center justify-center select-none shrink-0">

                            {/* Central Digital Screen / Cart Badge */}
                            <div className="w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] rounded-full bg-[#ede9fe] border-4 border-white flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.02)] z-10 relative overflow-hidden">

                              <svg viewBox="0 0 100 100" className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] text-[#6d28d9] fill-current relative z-10">
                                {/* Digital Device / Screen Background */}
                                <rect x="15" y="25" width="70" height="50" rx="4" fill="none" stroke="#6d28d9" strokeWidth="3" />
                                <line x1="25" y1="25" x2="75" y2="25" stroke="#6d28d9" strokeWidth="3" />
                                <circle cx="50" cy="71" r="1.5" />

                                {/* Shopping Cart Inside Screen */}
                                <path d="M30,40 L35,40 L40,55 L65,55 L70,40 Z" fill="none" stroke="#6d28d9" strokeWidth="2" strokeLinejoin="round" />
                                <circle cx="43" cy="60" r="2.5" />
                                <circle cx="62" cy="60" r="2.5" />
                                <line x1="45" y1="45" x2="60" y2="45" stroke="#6d28d9" strokeWidth="1.5" />

                                {/* Digital nodes connecting */}
                                <circle cx="75" cy="40" r="3" fill="#8b5cf6" />
                                <circle cx="30" cy="55" r="3" fill="#8b5cf6" />
                              </svg>

                            </div>

                            {/* 6 Surrounding Dashed-Ring Sub-Icons */}

                            {/* 1. Top (Delivery Truck) */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#8b5cf6]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#6d28d9] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="1" y="3" width="15" height="13" rx="1" />
                                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                                <circle cx="5.5" cy="18.5" r="2.5" />
                                <circle cx="18.5" cy="18.5" r="2.5" />
                              </svg>
                            </div>

                            {/* 2. Top-Right (Cursor / Click) */}
                            <div className="absolute top-[18%] -right-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#8b5cf6]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#6d28d9] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                                <path d="m13 13 6 6" />
                              </svg>
                            </div>

                            {/* 3. Bottom-Right (Package / Box) */}
                            <div className="absolute bottom-[18%] -right-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#8b5cf6]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#6d28d9] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                <line x1="12" y1="22.08" x2="12" y2="12" />
                              </svg>
                            </div>

                            {/* 4. Bottom (Globe / Web) */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#8b5cf6]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#6d28d9] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                              </svg>
                            </div>

                            {/* 5. Bottom-Left (Smartphone / Mobile Commerce) */}
                            <div className="absolute bottom-[18%] -left-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#8b5cf6]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#6d28d9] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                <line x1="12" y1="18" x2="12.01" y2="18" />
                              </svg>
                            </div>

                            {/* 6. Top-Left (Shield / Secure Pay) */}
                            <div className="absolute top-[18%] -left-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#8b5cf6]/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#6d28d9] fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <path d="m9 12 2 2 4-4" />
                              </svg>
                            </div>

                          </div>
                        </div>

                        {/* RIGHT SIDE: Beautiful Flat Typography "E-Commerce" (No 3D effect) */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10 relative z-20">
                          <div className="flex flex-col items-start gap-4">

                            <div className="text-[#6d28d9] font-bold text-xs uppercase tracking-[0.2em] bg-[#ede9fe] border border-[#c4b5fd] px-3.5 py-1.5 rounded-full select-none">
                              Digital Marketplaces
                            </div>

                            <h2
                              className="text-4xl sm:text-5xl md:text-6xl font-black text-[#4c1d95] leading-[1.08] select-none tracking-tight"
                              style={{ fontFamily: "'Outfit', sans-serif" }}
                            >
                              E-Commerce &<br />Digital Commerce
                            </h2>

                            <p className="text-[#5b21b6] text-sm sm:text-base font-semibold max-w-sm mt-1 leading-relaxed">
                              Scaling online businesses with advanced order fulfillment tracking, 24/7 digital customer care, and seamless digital transaction support.
                            </p>



                          </div>
                        </div>

                      </div>
                    </Link>
                    {renderThread(index, ind.id)}
                  </div>
                );
              }

              return (
                <div key={ind.name} className="w-full">
                  <Link
                    to={ind.link}
                    className={`block full-width-card aspect-[21/9] sm:aspect-[21/9] md:aspect-[24/10] min-h-[280px] sm:min-h-[420px] md:min-h-[460px] relative group select-none no-underline theme-${ind.id}`}
                  >
                    {/* Render Pure CSS Abstract Background (Static Art, No animations) */}
                    <div className="absolute inset-0 z-0">
                      <div className="absolute inset-0 industry-grid" />







                    </div>

                    {/* Colored Solid Theme Edge Badge */}
                    <div className="card-theme-edge" />

                    {/* Deep full-width gradient overlay */}
                    <div className="full-card-overlay" />

                    {/* Content absolute container */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-12 z-20 pointer-events-none">

                      {/* Glassmorphic floating card inside the main full-width card */}
                      <div className="badge-glass-panel flex flex-col sm:flex-row sm:items-center justify-between w-full gap-6 rounded-[24px] p-6 sm:p-8">

                        {/* Title & Icon section */}
                        <div className="flex items-center gap-5">
                          {/* Beautiful glass icon container */}
                          <div className="static-icon-panel w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                            <Icon className="w-6 h-6" strokeWidth={1.8} />
                          </div>

                          {/* Super clean title */}
                          <h3
                            className="industry-title-text text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-tight font-sans text-slate-900"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                          >
                            {ind.name}
                          </h3>
                        </div>

                        {/* Interactive floating indicator button */}
                        <div className="static-indicator-btn w-14 h-14 rounded-full flex items-center justify-center shrink-0 self-end sm:self-center">
                          <ArrowUpRight className="w-6 h-6" />
                        </div>

                      </div>

                    </div>

                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </main>
    </LandingLayout>
  );
};

export default Services;

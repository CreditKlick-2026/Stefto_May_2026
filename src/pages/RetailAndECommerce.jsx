import React from 'react';
import LandingLayout from '../components/layout/LandingLayout';

const RetailAndECommerce = () => {
  return (
    <LandingLayout>
      {/* Custom Flat CSS Hero Section */}
      <div className="relative pt-32 pb-20 min-h-[65vh] flex flex-col justify-center overflow-hidden bg-[#fdf8f0]">
        
        {/* Background Vector Canvas */}
        <div className="absolute inset-0 z-0">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400" preserveAspectRatio="none">
            {/* 1. Warm organic waves on the top-left */}
            <path d="M0,0 C160,0 200,80 150,150 C120,200 40,180 0,120 Z" fill="#b45309" opacity="0.06" />
            <path d="M0,0 C100,0 120,50 100,100 C80,130 30,120 0,80 Z" fill="#b45309" opacity="0.10" />

            {/* 2. Soft amber organic waves on the bottom-left */}
            <path d="M0,400 C100,400 150,320 120,280 C90,240 20,280 0,320 Z" fill="#e8d5b8" opacity="0.3" />
            <path d="M0,400 C80,400 120,340 90,310 C60,280 10,310 0,350 Z" fill="#c8a875" opacity="0.25" />

            {/* 3. Sweeping center arc (dividing curve) */}
            <path d="M380,420 C380,240 450,20 620,20" fill="none" stroke="#b45309" strokeWidth="2.5" opacity="0.12" />
            <path d="M375,420 C375,235 446,15 618,15" fill="none" stroke="#b45309" strokeWidth="1.2" opacity="0.06" />

            {/* 4. Layered amber waves on the bottom-right */}
            <path d="M500,400 C650,380 750,280 1000,310 L1000,400 Z" fill="#e8d5b8" opacity="0.2" />
            <path d="M600,400 C730,370 780,270 1000,300 L1000,400 Z" fill="#c8a875" opacity="0.25" />
            <path d="M680,400 C780,380 840,290 1000,320 L1000,400 Z" fill="#d97706" opacity="0.3" />
            <path d="M760,400 C850,380 900,285 1000,340 L1000,400 Z" fill="#b45309" opacity="0.45" />
            <path d="M840,400 C910,390 940,335 1000,360 L1000,400 Z" fill="#92400e" opacity="0.5" />

            {/* 5. Grid dot matrices */}
            <g transform="translate(850, 30)" fill="#b45309" opacity="0.15">
              <circle cx="0" cy="0" r="3" /><circle cx="20" cy="0" r="3" /><circle cx="40" cy="0" r="3" /><circle cx="60" cy="0" r="3" />
              <circle cx="0" cy="20" r="3" /><circle cx="20" cy="20" r="3" /><circle cx="40" cy="20" r="3" /><circle cx="60" cy="20" r="3" />
              <circle cx="0" cy="40" r="3" /><circle cx="20" cy="40" r="3" /><circle cx="40" cy="40" r="3" /><circle cx="60" cy="40" r="3" />
            </g>

            {/* 6. Shopping trend bars */}
            <g transform="translate(750, 260) scale(1.1)" stroke="#b45309" strokeWidth="2" fill="none" opacity="0.2">
              <polyline points="0,50 30,35 60,25 90,10" />
              <rect x="-10" y="55" width="10" height="15" fill="#b45309" opacity="0.4" stroke="none" />
              <rect x="15" y="42" width="10" height="28" fill="#b45309" opacity="0.4" stroke="none" />
              <rect x="45" y="35" width="10" height="35" fill="#b45309" opacity="0.4" stroke="none" />
              <rect x="75" y="25" width="10" height="45" fill="#b45309" opacity="0.4" stroke="none" />
            </g>
          </svg>
        </div>

        {/* Hero Content Container */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            
            {/* LEFT SIDE: Typography & CTA */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="text-[#92400e] font-bold text-sm uppercase tracking-[0.2em] bg-[#f0e4d0] border border-[#d4b896] px-4 py-2 rounded-full inline-flex self-start mb-6 select-none">
                Commerce & Experience
              </div>

              <h1 
                className="text-5xl sm:text-6xl md:text-7xl font-black text-[#78350f] leading-[1.05] tracking-tight mb-6"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Retail & <br />
                <span className="text-[#b45309]">E-Commerce</span>
              </h1>

              <p className="text-[#a16207] text-lg sm:text-xl font-medium max-w-lg leading-relaxed mb-8">
                Empowering retail and e-commerce brands with intelligent customer support, seamless order management, and omnichannel shopping experiences.
              </p>

              <div className="flex items-center gap-6">
                <button className="bg-[#92400e] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-[#92400e]/20 hover:bg-[#78350f] transition-all">
                  Discuss Retail Solutions
                </button>
              </div>
            </div>

            {/* RIGHT SIDE: Custom Vector Art Badge */}
            <div className="w-full lg:w-1/2 flex items-center justify-center relative">
              <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border-[3px] border-dashed border-[#b45309]/30 relative flex items-center justify-center select-none">
                
                {/* Central Storefront Badge */}
                <div className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full bg-[#f0e4d0] border-8 border-white flex items-center justify-center shadow-[0_8px_30px_rgba(180,83,9,0.1)] z-10 relative">
                  <svg viewBox="0 0 100 100" className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] text-[#92400e] fill-current relative z-10">
                    <path d="M15,32 L25,18 L75,18 L85,32 Z" />
                    <path d="M15,32 L25,42 L35,32 L45,42 L55,32 L65,42 L75,32 L85,42 L85,32 L15,32 Z" opacity="0.8" />
                    <rect x="20" y="42" width="60" height="38" rx="2" opacity="0.15" />
                    <rect x="40" y="52" width="20" height="28" rx="2" />
                    <circle cx="56" cy="66" r="1.5" fill="#f0e4d0" />
                    <rect x="25" y="48" width="12" height="12" rx="1" opacity="0.7" />
                    <rect x="63" y="48" width="12" height="12" rx="1" opacity="0.7" />
                    <rect x="35" y="22" width="30" height="8" rx="2" fill="#f0e4d0" opacity="0.5" />
                    <rect x="15" y="80" width="70" height="4" rx="1" />
                  </svg>
                  
                  {/* Subtle highlight ring inside the badge */}
                  <div className="absolute inset-0 rounded-full border border-white/40 pointer-events-none"></div>
                </div>

                {/* 6 Surrounding Dashed-Ring Sub-Icons */}
                
                {/* 1. Top (Shopping Bag) */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border border-[#b45309]/20 flex items-center justify-center shadow-lg shadow-[#b45309]/5 z-20">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 text-[#92400e] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </div>

                {/* 2. Top-Right (Barcode) */}
                <div className="absolute top-[15%] -right-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border border-[#b45309]/20 flex items-center justify-center shadow-lg shadow-[#b45309]/5 z-20">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 text-[#92400e] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 5v-2h4" /><path d="M17 3h4v2" /><path d="M21 19v2h-4" /><path d="M7 21H3v-2" /><rect x="7" y="7" width="10" height="10" rx="1" />
                  </svg>
                </div>

                {/* 3. Bottom-Right (Tag) */}
                <div className="absolute bottom-[15%] -right-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border border-[#b45309]/20 flex items-center justify-center shadow-lg shadow-[#b45309]/5 z-20">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 text-[#92400e] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" /><path d="M7 7h.01" />
                  </svg>
                </div>

                {/* 4. Bottom (Gift) */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border border-[#b45309]/20 flex items-center justify-center shadow-lg shadow-[#b45309]/5 z-20">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 text-[#92400e] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13" /><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
                    <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
                  </svg>
                </div>

                {/* 5. Bottom-Left (Percent) */}
                <div className="absolute bottom-[15%] -left-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border border-[#b45309]/20 flex items-center justify-center shadow-lg shadow-[#b45309]/5 z-20">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 text-[#92400e] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="5" x2="5" y2="19" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
                  </svg>
                </div>

                {/* 6. Top-Left (Rating) */}
                <div className="absolute top-[15%] -left-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border border-[#b45309]/20 flex items-center justify-center shadow-lg shadow-[#b45309]/5 z-20">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 text-[#92400e] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Retail Section */}
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-stefto-indigo text-xs font-bold mb-6 tracking-wide uppercase border border-blue-100">
                Adaptive Retail
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                The New Imperative for Retailers
              </h2>
              <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                <p>
                  With global disruption, external pressures, and responsibilities, adaptive retail is becoming the new imperative for retailers. Retailers need to be able to adapt quickly to reduced turnaround times, improve delivery accuracy, and offer an excellent customer experience to stay on top of the market.
                </p>
                <p>
                  <strong className="text-stefto-navy">Stefto</strong> will help your retail business evolve and stay resilient with groundbreaking technological innovations that will change the way consumers shop and interact with your business. We'll leverage technology to automate your retail and distribution chain processes, including order fulfillment and documentation. 
                </p>
                <p>
                  From the first time a customer hears about your business, through the initial contact with your retail outlet via the web, sales agent, event, or social media, through to the opportunity and sales stage, to onboarding, service provision, support tickets, and complaints, and onward to subsequent orders, we have got you covered.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-slate-100 rounded-2xl overflow-hidden aspect-[4/3] shadow-xl relative group">
                <div className="absolute inset-0 bg-stefto-navy/10 group-hover:bg-transparent transition-all duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop" 
                  alt="Modern Retail Store Operations" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* E-Commerce Section */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-bold mb-6 tracking-wide uppercase border border-amber-100">
                E-Commerce Solutions
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Click-and-Order Excellence
              </h2>
              <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                <p>
                  Over the last decade, the retail industry has evolved from traditional brick-and-mortar to click-and-order. And e-commerce is quickly establishing itself as a viable alternative to traditional retail channels. However, the eCommerce space is a highly competitive one, with businesses competing for market share and superior user experience.
                </p>
                <p>
                  <strong className="text-stefto-navy">Stefto</strong> has designed an ingenious solution for e-commerce businesses. Our BPM solution for this industry is quick, has minimal fuss, and tackles various challenges from the get-go.
                </p>
                <p>
                  Our BPM solution is holistic and combines best-of-breed technology tools with analytical models that deliver a superior user experience and operations framework, impacting multiple business functions and ensuring a strong foundation for a long-term business digital journey.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-slate-100 rounded-2xl overflow-hidden aspect-[4/3] shadow-xl relative group border border-slate-200">
                <div className="absolute inset-0 bg-stefto-navy/10 group-hover:bg-transparent transition-all duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop" 
                  alt="E-Commerce Interface and Shopping" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </LandingLayout>
  );
};

export default RetailAndECommerce;

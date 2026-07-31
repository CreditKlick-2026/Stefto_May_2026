import React, { useEffect } from 'react';
import LandingLayout from '../components/layout/LandingLayout';
import { Database, BarChart3, Users, CheckCircle2, ArrowRight, Briefcase, ShieldCheck, ArrowUpRight, Network, Brain, Sparkles } from 'lucide-react';
import CustomerJourneySection from './LandingPage/components/CustomerJourneySection';
import DomainKnowledgeSection from './LandingPage/components/DomainKnowledgeSection';

const serviceCards = [
  {
    icon: Briefcase,
    title: "Back Office Support",
    description: "Streamline business operations with reliable back-office processing and administrative support.",
    features: [
      "Data Entry & Processing",
      "Order Management",
      "Document Verification",
      "Administrative Support"
    ],
    link: "/back-office"
  },
  {
    icon: BarChart3,
    title: "Risk Data Analytics",
    description: "Transforming raw data into actionable insights for better credit decisioning and risk mitigation.",
    features: [
      "Nano Segmentation",
      "Predictive Scoring",
      "Portfolio Health Monitoring",
      "Fraud Detection"
    ],
    link: "/digital-debt-management"
  },
  {
    icon: Users,
    title: "Customer Services",
    description: "Maintaining Seamless & Efficient Customer Experience.",
    features: [
      "Speciality Help Desk",
      "Inbound Sales & Upsell | Cross Sell",
      "Retention",
      "Lead Generation"
    ],
    link: "/customer-support"
  },
  {
    icon: ShieldCheck,
    title: "Risk & Fraud Management",
    description: "End-to-end fraud detection and compliance monitoring to protect financial institutions.",
    features: [
      "Transaction Monitoring",
      "Anti-Money Laundering (AML)",
      "KYC & Document Verification",
      "Dispute Resolution"
    ],
    link: "/risk-management"
  },
  {
    icon: CheckCircle2,
    title: "Trust & Safety",
    description: "Keeping your digital platforms safe with 24/7 moderation and threat prevention.",
    features: [
      "User Verification",
      "Content Moderation",
      "Account Takeover Prevention",
      "Platform Compliance"
    ],
    link: "/trust-and-safety"
  },
  {
    icon: ArrowRight,
    title: "Revenue Growth & Sales",
    description: "Accelerate customer acquisition with targeted omnichannel sales strategies.",
    features: [
      "Inbound & Outbound Sales",
      "Lead Qualification",
      "Credit Card Up-selling",
      "Customer Win-back Campaigns"
    ],
    link: "/sales-growth"
  },
  {
    icon: Network,
    title: "IT Helpdesk",
    description: "Resolving complex technical queries to ensure seamless digital banking experiences.",
    features: [
      "L1 & L2 Technical Support",
      "Payment Troubleshooting",
      "App Navigation Assistance",
      "Ticketing Management"
    ],
    link: "/tech-support"
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LandingLayout>
      <main className="w-full bg-slate-50 min-h-screen">

        {/* HERO SECTION */}
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#152b69]">
          {/* Background glows removed for full solid color */}

          <div className="relative max-w-[1280px] mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-[50%] z-10 flex flex-col items-center lg:items-start">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18317c]/80 border border-blue-400/20 text-[#e2e8f0] text-sm font-medium mb-6 backdrop-blur-md shadow-lg">
                <Sparkles size={16} className="text-cyan-400" />
                Your Growth, Our Support
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white mb-4 sm:mb-6 leading-[1.1] tracking-tight">
                Transform Your <br />
                <span className="text-white">
                  Customer Journey
                </span>
              </h1>



              {/* Features Pill */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 sm:gap-6 bg-[#0f1f4c]/80 border border-[#2a458f] rounded-2xl p-6 sm:p-5 backdrop-blur-md shadow-2xl w-full max-w-2xl">

                <div className="flex items-center justify-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-[#18327a] flex items-center justify-center shrink-0 border border-blue-400/20 shadow-inner">
                    <BarChart3 className="text-blue-300 w-6 h-6" />
                  </div>
                  <span className="text-white text-sm font-semibold leading-snug text-left">Data-Driven<br />Insights</span>
                </div>

                <div className="w-px h-12 bg-[#2a458f] hidden sm:block"></div>
                <div className="h-px w-full bg-[#2a458f] sm:hidden"></div>

                <div className="flex items-center justify-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-[#18327a] flex items-center justify-center shrink-0 border border-blue-400/20 shadow-inner">
                    <ShieldCheck className="text-blue-300 w-6 h-6" />
                  </div>
                  <span className="text-white text-sm font-semibold leading-snug text-left">Robust<br />Compliance</span>
                </div>

                <div className="w-px h-12 bg-[#2a458f] hidden sm:block"></div>
                <div className="h-px w-full bg-[#2a458f] sm:hidden"></div>

                <div className="flex items-center justify-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-[#18327a] flex items-center justify-center shrink-0 border border-blue-400/20 shadow-inner">
                    <Users className="text-blue-300 w-6 h-6" />
                  </div>
                  <span className="text-white text-sm font-semibold leading-snug text-left">Empathetic<br />Human Connections</span>
                </div>

              </div>

            </div>

            {/* HERO ISOMETRIC TOWERS & ORBITALS */}
            <div className="w-full lg:w-[50%] flex justify-center lg:justify-end relative mt-12 lg:mt-20">

              {/* Orbital Rings Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] pointer-events-none z-0">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border border-blue-400/20 rotate-[-15deg] scale-y-50 shadow-[0_0_15px_rgba(96,165,250,0.1)]" />
                {/* Inner Ring */}
                <div className="absolute inset-[40px] sm:inset-[60px] lg:inset-[80px] rounded-full border border-cyan-400/20 rotate-[15deg] scale-y-50 shadow-[0_0_15px_rgba(34,211,238,0.1)]" />

                {/* Floating Icons on Orbits */}
                {/* Left Shield */}
                <div className="absolute top-[45%] left-[0%] sm:left-[5%] w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#1e3a8a]/40 border border-blue-400/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.6)] animate-[bounce_4s_infinite_ease-in-out]">
                  <ShieldCheck className="text-blue-200 w-4 h-4 sm:w-6 sm:h-6" />
                </div>

                {/* Top Right Chart */}
                <div className="absolute top-[10%] right-[5%] sm:right-[15%] w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#1e3a8a]/40 border border-blue-400/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.6)] animate-[bounce_5s_infinite_ease-in-out]" style={{ animationDelay: '1s' }}>
                  <BarChart3 className="text-blue-200 w-5 h-5 sm:w-7 sm:h-7" />
                </div>

                {/* Bottom Right Users */}
                <div className="absolute bottom-[20%] sm:bottom-[25%] -right-[5%] w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#1e3a8a]/40 border border-blue-400/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.6)] animate-[bounce_4.5s_infinite_ease-in-out]" style={{ animationDelay: '2s' }}>
                  <Users className="text-blue-200 w-4 h-4 sm:w-6 sm:h-6" />
                </div>
              </div>

              <section className="scd-22 !min-h-0 !p-0 !bg-transparent w-full relative z-10" aria-label="Isometric tower of cards">
                <div className="w-full flex items-center justify-center translate-x-8 sm:translate-x-0 scale-[0.65] sm:scale-75 md:scale-90 lg:scale-100 origin-center lg:origin-right py-4 sm:py-10">

                  {/* Single Tower (All 8 Services) */}
                  <div className="scd-22__scene">
                    <div className="scd-22__tower" tabIndex="0">
                      {serviceCards.slice(0, 5).map((card, idx) => (
                        <div key={idx} className="scd-22__floor" style={{ '--i': 4 - idx }}>
                          <card.icon size={28} className="text-white mb-2 drop-shadow-md" />
                          <b className="text-sm">{card.title}</b>
                          <p className="line-clamp-2 text-[11px] font-medium opacity-90">{card.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </section>
            </div>
          </div>
        </div>

        {/* INTERACTIVE FAN-OUT STACK (CORE SERVICES) */}
        <section className="scd-05 relative z-20 bg-slate-50" aria-label="Fan-out photo stack">
          <div className="text-center mb-10 z-30">
            <h2 className="text-3xl md:text-5xl font-black text-[#0f2a5e] mb-4 tracking-tight">Our Core Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Hover over the cards below to fan out our comprehensive solutions tailored for modern digital platforms.</p>
          </div>

          <div className="scd-05__fan z-30 mt-10">
            {serviceCards.map((card, idx) => {
              const Icon = card.icon;
              // Map indices dynamically so it always centers based on total length
              const n = idx - (serviceCards.length - 1) / 2;

              return (
                <div key={idx} className="scd-05__card group cursor-pointer" tabIndex="0" style={{ '--n': n }}>
                  <div className="mb-4 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon size={24} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 leading-tight">{card.title}</h3>
                  <p className="text-slate-600 text-[13px] leading-relaxed mb-5">
                    {card.description}
                  </p>

                  <div className="space-y-2.5 mb-5 flex-grow">
                    {card.features.slice(0, 3).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-slate-700 font-medium text-[12px] leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-blue-600 text-xs font-bold group-hover:text-blue-700">
                    Learn More
                    <ArrowUpRight size={14} className="ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              );
            })}
          </div>


        </section>

        {/* CUSTOMER JOURNEY (TP INSPIRED) */}
        <CustomerJourneySection />

        {/* DOMAIN KNOWLEDGE (STACKED CARDS) */}
        <DomainKnowledgeSection />
      </main>
    </LandingLayout>
  );
};

export default Services;

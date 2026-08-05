import React, { useRef, useEffect, useState } from 'react';
import {
  Headphones,
  ShieldCheck,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Globe2,
  HeartHandshake,
  Mic,
  Network,
  Database,
  FileSearch,
  Users,
  BarChart4
} from 'lucide-react';
import Button from '../../../components/ui/Button';

/* ─── Static data (defined outside so they're never re-created) ─── */
const machineryFeatures = [
  {
    icon: Mic,
    title: 'Complete interaction recording',
    description: 'Every call recorded and retrievable — for quality coaching, dispute resolution and compliance review.',
    badge: 'Recording'
  },
  {
    icon: Network,
    title: 'Skill-based routing & dialers',
    description: 'Queries reach the advisor best equipped to resolve them, on managed dialer and telephony infrastructure.',
    badge: 'Routing'
  },
  {
    icon: Database,
    title: 'CRM & ticketing integration',
    description: 'We work inside your systems or ours — so context follows the customer across every channel.',
    badge: 'Integration'
  },
  {
    icon: FileSearch,
    title: 'Dedicated quality audit',
    description: 'Independent QA teams score interactions daily against your parameters, feeding coaching loops each week.',
    badge: 'QA Audit'
  },
  {
    icon: Users,
    title: 'Workforce management',
    description: 'Forecasting and rostering matched to your call arrival patterns — so service levels hold at peak.',
    badge: 'WFM'
  },
  {
    icon: BarChart4,
    title: 'Client-format reporting',
    description: 'Daily flash, weekly reviews, monthly MIS — in the format your leadership already reads.',
    badge: 'Reporting'
  }
];

const supportMetrics = [
  { value: '24/7', label: 'Availability', subtext: 'Round-the-clock helpdesk' },
  { value: '98.5%', label: 'First Call Resolution', subtext: 'Speedy query solving' },
  { value: '10M+', label: 'Interactions Handled', subtext: 'Trusted across India' },
];

export default function CustomerSupportSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  /* Intersection — triggers once, then disconnects */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduce threshold on mobile so animation fires earlier
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: isMobile ? 0.05 : 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Shared animation classes — disabled on mobile via media-driven inline style trick */
  const fadeUp = (delay = '') =>
    `transition-all duration-500 ${delay} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`;

  return (
    <section
      id="customer-support"
      ref={ref}
      className="py-6 sm:py-10 lg:py-12 bg-transparent relative text-slate-900"
      /* content-visibility lets browser skip off-screen paint — major perf win */
      style={{ contentVisibility: 'auto', containIntrinsicSize: '0 900px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Section Header ── */}
        <div className={`text-center flex flex-col items-center space-y-2 mb-8 lg:mb-16 ${fadeUp()}`}>
          <h2
            className="text-lg sm:text-4xl lg:text-5xl text-[#8b0000] leading-tight"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Customer Support Solutions
          </h2>
        </div>

        {/* ── Full Width Text Block ── */}
        <div className={`w-full mb-10 lg:mb-12 space-y-3 ${fadeUp('delay-100')}`}>

          <p className="text-slate-700 font-medium text-[13px] sm:text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Customers only see the advisor. Behind every interaction sits the infrastructure that keeps service fast, consistent and auditable.
          </p>
        </div>

        {/* ── Main Grid ──
             Mobile : single column — image first, content second
             Desktop: 12-col split                                             */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-10 lg:mb-16">

          {/* Left / Image column (appears BELOW content on mobile) */}
          <div className={`lg:col-span-6 w-full ${fadeUp('delay-100')}`}>
            <div className="relative">
              {/* Lazy-loaded image — no layout shift via fixed aspect container */}
              <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/assets/Images/Customer_Support.png"
                  alt="Customer support representative"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>

            </div>
          </div>

          {/* Right / Content column (appears FIRST on mobile for quick reading) */}
          <div className={`lg:col-span-6 space-y-4 ${fadeUp('delay-150')}`}>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {machineryFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="relative group p-4 sm:p-5 rounded-none bg-[#1c44b4] transition-all duration-500 overflow-hidden cursor-pointer"
                  >
                    {/* Sweep background on hover */}
                    <div className="absolute inset-0 bg-[#8b0000] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-4">
                        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-none bg-white text-[#1c44b4] group-hover:text-[#8b0000] transition-colors duration-500 flex items-center justify-center">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                        </div>
                        <span className="text-[7.5px] sm:text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-none border border-white/30 text-white transition-colors duration-500">
                          {item.badge}
                        </span>
                      </div>
                      <h4 className="text-[11px] sm:text-[14px] font-bold text-white mb-1.5 leading-snug transition-colors duration-500">{item.title}</h4>
                      <p className="text-[9.5px] sm:text-[12px] text-white/80 leading-relaxed transition-colors duration-500">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs — stack on mobile, row on sm+ */}
            <div className="pt-6 flex flex-col sm:flex-row flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center relative overflow-hidden group border-2 border-[#1c44b4] bg-white text-[#1c44b4] hover:text-white font-bold py-3 px-6 text-[13px] sm:text-[14px] tracking-wider uppercase transition-colors duration-300 no-underline"
              >
                <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:-translate-x-2">
                  <PhoneCall className="w-4 h-4" />
                  Get Support Assistance
                  <ArrowRight className="w-4 h-4 absolute -right-6 opacity-0 transition-all duration-300 group-hover:right-[-4px] group-hover:opacity-100" />
                </span>
                <div className="absolute inset-0 bg-[#1c44b4] translate-y-[100%] transition-transform duration-300 ease-out group-hover:translate-y-0 z-0"></div>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center relative overflow-hidden group border-2 border-[#1c44b4] bg-white text-[#1c44b4] hover:text-white font-bold py-3 px-6 text-[13px] sm:text-[14px] tracking-wider uppercase transition-colors duration-300 no-underline"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  RBI Compliant
                </span>
                <div className="absolute inset-0 bg-[#1c44b4] translate-y-[100%] transition-transform duration-300 ease-out group-hover:translate-y-0 z-0"></div>
              </a>
            </div>
          </div>
        </div>

        {/* ── Metrics Bar — 3 col on md+, 1 col (horizontal scroll-free) on mobile ── */}
        <div className={`grid grid-cols-3 gap-3 lg:gap-6 ${fadeUp('delay-200')}`}>
          {supportMetrics.map((stat, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-none shadow-sm hover:shadow-md transition-shadow duration-300 p-4 lg:p-6 text-center"
            >
              <div
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-0.5"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">{stat.label}</div>
              <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5 hidden sm:block">{stat.subtext}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React, { useRef, useEffect, useState } from 'react';
import {
  Headphones,
  ShieldCheck,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Globe2,
  HeartHandshake
} from 'lucide-react';
import Button from '../../../components/ui/Button';

/* ─── Static data (defined outside so they're never re-created) ─── */
const supportFeatures = [
  {
    icon: Headphones,
    title: 'Omnichannel Assistance',
    description: 'Seamless customer interaction across Tele-calling, WhatsApp, Voice AI, and Self-Service web portals.',
    badge: 'Multi-Channel',
  },
  {
    icon: HeartHandshake,
    title: 'Empathetic & Ethical Care',
    description: 'Trained resolution specialists ensuring respectful, transparent, and customer-first debt advisory.',
    badge: 'Customer First',
  },
  {
    icon: Globe2,
    title: 'Multilingual Support',
    description: 'Localized support tailored for diverse Indian demographics in Hindi, English, and regional languages.',
    badge: '10+ Languages',
  },
  {
    icon: ShieldCheck,
    title: 'RBI Compliance & Data Security',
    description: 'Strict adherence to regulatory norms, complete audit trails, and encrypted end-to-end data handling.',
    badge: '100% Compliant',
  },
];

const supportMetrics = [
  { value: '24/7',   label: 'Availability',           subtext: 'Round-the-clock helpdesk' },
  { value: '98.5%',  label: 'First Call Resolution',   subtext: 'Speedy query solving'     },
  { value: '10M+',   label: 'Interactions Handled',    subtext: 'Trusted across India'     },
];

export default function CustomerSupportSection() {
  const ref     = useRef(null);
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
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1e3a8a]/10 border border-[#1e3a8a]/20 text-[#1e3a8a] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            <Sparkles size={11} aria-hidden="true" />
            Customer Support &amp; Engagement
          </div>

          <h2
            className="text-lg sm:text-4xl lg:text-5xl text-[#1e3a8a] leading-tight"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Customer Support Solutions
          </h2>
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
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>

              {/* Badge 1 — hidden on xs to avoid clutter */}
              <div className="hidden sm:flex absolute top-4 left-4 bg-white border border-slate-200 px-3 py-2 rounded-2xl shadow-md items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-medium leading-none mb-0.5">Resolution Rate</p>
                  <p className="text-xs font-bold text-slate-900 leading-none">98.5% Satisfied</p>
                </div>
              </div>

              {/* Badge 2 — hidden on xs */}
              <div className="hidden sm:flex absolute bottom-4 right-4 bg-[#1e3a8a] text-white px-3 py-2 rounded-2xl shadow-lg items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Headphones size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] text-blue-200 uppercase font-semibold tracking-wider leading-none mb-0.5">Help Desk</p>
                  <p className="text-xs font-bold leading-none">24/7 Dedicated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right / Content column (appears FIRST on mobile for quick reading) */}
          <div className={`lg:col-span-6 space-y-4 ${fadeUp('delay-150')}`}>
            <div className="space-y-1.5">
              <h3 className="text-sm sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
                Empowering Financial Institutions &amp; Borrowers Together
              </h3>
              <p className="text-slate-600 text-[11px] sm:text-base leading-relaxed">
                Our customer support ecosystem combines cutting-edge technology with human empathy — helping financial institutions manage inquiries, provide payment guidance, and maintain long-term brand trust.
              </p>
            </div>

            {/* Feature Cards — 2 columns per row on all screen sizes */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {supportFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white border border-slate-200 hover:border-[#1e3a8a]/30 hover:shadow-sm transition-colors duration-200"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                      <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-[#1e3a8a]/10 text-[#1e3a8a] flex items-center justify-center">
                        <Icon className="w-3 h-3" aria-hidden="true" />
                      </div>
                      <span className="text-[6.5px] sm:text-[8px] font-bold uppercase tracking-wider px-1 sm:px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-500">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-[9px] sm:text-[12px] font-bold text-slate-900 mb-0.5 leading-snug">{item.title}</h4>
                    <p className="text-[8px] sm:text-[11px] text-slate-500 leading-tight sm:leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>

            {/* CTAs — stack on mobile, row on sm+ */}
            <div className="pt-1 flex flex-col sm:flex-row flex-wrap gap-2.5">
              <Button as="a" href="#contact" variant="primary" size="sm" pill className="sm:btn-md">
                <PhoneCall size={13} aria-hidden="true" />
                Get Support Assistance
                <ArrowRight size={13} aria-hidden="true" />
              </Button>
              <Button as="a" href="#contact" variant="secondary" size="sm" pill className="sm:btn-md">
                <ShieldCheck size={13} aria-hidden="true" />
                RBI Compliant
              </Button>
            </div>
          </div>
        </div>

        {/* ── Metrics Bar — 3 col on md+, 1 col (horizontal scroll-free) on mobile ── */}
        <div className={`grid grid-cols-3 gap-3 lg:gap-6 ${fadeUp('delay-200')}`}>
          {supportMetrics.map((stat, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-4 lg:p-6 text-center"
            >
              <div
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1e3a8a] mb-0.5"
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

import React, { useRef, useEffect, useState } from 'react';
import {
  CheckCircle,
  Clock,
  BarChart3,
  Target,
  ArrowRight,
  ShieldCheck,
  Settings
} from 'lucide-react';
import Button from '../../../components/ui/Button';

const backendMachinery = [
  {
    icon: CheckCircle,
    title: 'Quality Assurance (QA)',
    description: 'Independent QA teams score interactions daily against your parameters, feeding coaching loops each week.',
    badge: 'Daily Scoring',
  },
  {
    icon: Clock,
    title: 'Workforce Management',
    description: 'Forecasting and rostering matched to your call arrival patterns — so service levels hold at peak.',
    badge: 'Peak Optimized',
  },
  {
    icon: BarChart3,
    title: 'Client-Format Reporting',
    description: 'Daily flash, weekly reviews, monthly MIS — in the format your leadership already reads.',
    badge: 'Custom MIS',
  },
  {
    icon: Target,
    title: 'Performance Analytics',
    description: 'Deep dive into KPI trends and agent metrics to proactively identify improvement areas.',
    badge: 'Data Driven',
  }
];

export default function CustomerSupportSolutions() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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

  const fadeUp = (delay = '') =>
    `transition-all duration-500 ${delay} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`;

  return (
    <section
      id="customer-support-solutions"
      ref={ref}
      className="py-6 sm:py-10 lg:py-12 bg-transparent relative text-slate-900"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '0 900px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Main Grid ── */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-10 lg:mb-16">
          
          {/* Left / Content column (appears FIRST on mobile, LEFT on desktop) */}
          <div className={`lg:col-span-6 space-y-4 ${fadeUp('delay-100')}`}>
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1e3a8a]/10 border border-[#1e3a8a]/20 text-[#1e3a8a] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                <Settings size={11} aria-hidden="true" />
                Backend Infrastructure
              </div>
              <h3 className="text-sm sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
                The Machinery Behind a Good Conversation
              </h3>
              <p className="text-slate-600 text-[11px] sm:text-base leading-relaxed">
                Customers only see the advisor. Behind every interaction sits the infrastructure that keeps service fast, consistent and auditable.
              </p>
            </div>

            {/* Feature Cards — 2 columns per row */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {backendMachinery.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-2 sm:p-4 rounded-lg sm:rounded-2xl bg-white border border-slate-200 hover:border-[#1e3a8a]/30 hover:shadow-sm transition-colors duration-200"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                      <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-md sm:rounded-xl bg-[#1e3a8a]/10 text-[#1e3a8a] flex items-center justify-center">
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                      </div>
                      <span className="text-[6.5px] sm:text-[9px] font-bold uppercase tracking-wider px-1 sm:px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-[10px] sm:text-sm font-bold text-slate-900 mb-0.5 leading-snug">{item.title}</h4>
                    <p className="text-[8.5px] sm:text-xs text-slate-500 leading-tight sm:leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right / Image column */}
          <div className={`lg:col-span-6 w-full ${fadeUp('delay-150')}`}>
            <div className="relative">
              {/* Optional: Use a different image for the backend side, or mirror the layout */}
              <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/50 bg-slate-50" style={{ aspectRatio: '4/3' }}>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                  alt="Data Analytics and Backend Systems"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/80 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-bold text-lg">Scalable Operations</p>
                    <p className="text-sm opacity-90 text-blue-100">Robust backend to manage high-volume calls.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

import React, { useRef, useEffect, useState } from 'react';
import { IndianRupee, BarChart, MessageCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Debt Collection',
    description: 'Advanced workflows combining field operations, tele-calling, and digital channels to optimize debt collection performance across all asset classes.',
    icon: IndianRupee,
    tag: 'Core Service',
    highlight: true,
    colSpan: 'lg:col-span-2',
  },
  {
    title: 'Risk Analytics',
    description: 'Data-driven risk segmentation and predictive models to prioritize recovery efforts and maximize portfolio returns.',
    icon: BarChart,
    tag: 'Analytics',
  },
  {
    title: 'Customer Engagement',
    description: 'Ethical, empathetic multi-channel engagement strategies that protect brand reputation while improving resolution rates.',
    icon: MessageCircle,
    tag: 'Engagement',
  },
];

export default function ServicesSection() {
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
    <section id="services" ref={ref} className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center flex flex-col items-center space-y-6 mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2.5 bg-blue-50/80 border border-blue-100/50 rounded-full px-4 py-1.5 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
            <span className="text-blue-700 text-[0.65rem] sm:text-xs font-bold uppercase tracking-widest">Our Expertise</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#0a1628] leading-[1.15]" style={{ fontFamily: "'Fraunces', serif" }}>
            Your Success <span className="italic font-light text-slate-500">Starts</span><br />
            <span className="font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-600 to-sky-500">Here.</span>
          </h2>
          
          <p className="text-slate-500 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            End-to-end debt management solutions meticulously tailored to the needs of India's financial sector.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group ${service.colSpan ?? ''} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${service.highlight ? 'bg-[#1c469d] text-white' : 'bg-[#E8F0FE] text-[#1c469d]'}`}>
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  {service.tag && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1c469d] bg-[#E8F0FE] px-2.5 py-1 rounded-full">
                      {service.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>


              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center mt-10 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="/services"
            className="inline-flex items-center gap-2 bg-[#1c469d] text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-blue-800 transition-colors shadow-md"
          >
            View All Solutions
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

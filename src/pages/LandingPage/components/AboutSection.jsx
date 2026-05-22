import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const orgStats = [
  { label: 'Employees', value: 1600, suffix: '+' },
  { label: 'Premium Clients', value: 25, suffix: '+' },
  { label: 'Offices', value: 4, suffix: '+' }
];

function useCountUp(target, duration, active) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function OrgStatItem({ item, active }) {
  const count = typeof item.value === 'number' ? useCountUp(item.value, 1500, active) : item.value;
  return (
    <div className="text-center p-6 border border-slate-200 rounded-2xl bg-white hover:border-[#1c469d]/30 hover:shadow-md transition-all">
      <div className={`text-4xl font-light text-[#1c469d] ${typeof item.value === 'number' ? 'counter-value' : 'font-sans font-semibold tracking-tight'}`}>
        {typeof count === 'number' ? count.toLocaleString('en-IN') : count}{item.suffix}
      </div>
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-2">{item.label}</p>
    </div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 bg-white relative overflow-hidden text-slate-900">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(28,70,157,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="pill-tag">About Stefto</span>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Since 2007</div>
              <h2 className="text-section-xl text-slate-900" style={{ fontFamily: "'Fraunces', serif" }}>
                Empowering Recovery with<br />
                <span className="text-[#1c469d]">Technology</span>
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              Stefto is more than just a collection brand; we are a technology-first ecosystem designed to solve the complexities of modern-day debt recovery. With a focus on data analytics and ethical practices, we help financial institutions recover dues faster while maintaining customer relationships.
            </p>

            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-[#1c469d]/15">
              <ShieldCheck size={20} className="text-[#1c469d] flex-shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-slate-800">
                100% Compliant &amp; Secure Data Management
              </p>
            </div>

            <a
              href="/about-us"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1c469d] border-b-2 border-[#1c469d] pb-0.5 hover:opacity-70 transition-opacity">
              Learn Our Story
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Right: Images + Org Stats */}
          <div className="lg:col-span-7 space-y-8">
            {/* Two images */}
            <div className="grid grid-cols-2 gap-5">
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-lg group">
                <img
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_113817b7c-1775219151681.png"
                  alt="Indian business professionals collaborating in modern office"
                  className="img-grayscale object-cover w-full h-full"
                />
              </div>
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-lg group translate-y-8">
                <img
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1bb467aad-1773207076910.png"
                  alt="Indian finance team reviewing documents in meeting room"
                  className="img-grayscale object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Org Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 pt-4">
              {orgStats.map((item, i) => (
                <OrgStatItem key={i} item={item} active={active} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

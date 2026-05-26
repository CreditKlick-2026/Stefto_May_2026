import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '1600', suffix: '+', label: 'Employees', description: '' },
  { value: '25', suffix: '+', label: 'Premium Clients', description: '' },
  { value: '4', suffix: '+', label: 'Offices', description: '' },
  { value: '98', suffix: '%', label: 'Compliance Score', description: '' },
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

function StatItem({ stat, active, index }) {
  const numericValue = parseInt(stat.value, 10);
  const count = useCountUp(numericValue, 1200, active);

  return (
    <div className={`flex flex-col items-center text-center px-2 sm:px-6 py-6 lg:py-8 group ${index % 2 !== 0 ? 'border-l border-slate-200' : ''} ${index !== 0 ? 'lg:border-l lg:border-slate-200' : ''} ${index > 1 ? 'border-t border-slate-200 lg:border-t-0' : ''}`}>
      <div className="stat-number text-[#1c469d] font-bold">
        {count}{stat.suffix}
      </div>
      <p className="text-sm font-bold text-slate-800 mt-2 uppercase tracking-widest">{stat.label}</p>
      <p className="text-xs text-slate-500 mt-1 max-w-[180px]">{stat.description}</p>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white relative overflow-hidden pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={i} index={i} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}

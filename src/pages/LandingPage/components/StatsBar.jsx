import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '98', suffix: '%', label: 'Compliance Score', description: 'Adhering to strict RBI and industry guidelines.' },
  { value: '24', suffix: '/7', label: 'Live Support', description: 'Operational availability across India.' },
  { value: '4', suffix: '+', label: 'Offices', description: 'PAN-India presence across key cities.' },
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

function StatItem({ stat, active }) {
  const numericValue = parseInt(stat.value, 10);
  const count = useCountUp(numericValue, 1200, active);

  return (
    <div className="flex flex-col items-center text-center px-6 py-8 group">
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
    <section ref={ref} className="bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-pattern opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}

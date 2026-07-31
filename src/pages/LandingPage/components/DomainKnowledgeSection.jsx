import React, { useEffect, useRef, useState } from 'react';

const phases = [
  {
    chip: "Sector 1",
    title: "Banking & NBFC",
    description: "We map your goals and audit exactly where you stand today, bringing digital transformation to financial services.",
    image: "https://www.companysuggestion.com/wp-content/uploads/2020/06/NBFC-2-e1596031601932.jpg"
  },
  {
    chip: "Sector 2",
    title: "Fintech",
    description: "Concepts take shape through rapid, collaborative iteration.",
    image: "https://panintelligence.com/wp-content/uploads/2024/07/Fintech-sub-sectors-977x1024.webp"
  },
  {
    chip: "Sector 3",
    title: "Telecom",
    description: "Production-ready code, tested and shipped with real care.",
    image: "https://www.perito.co.in/wp-content/uploads/2021/05/telecom-recruitment-staffing-services-perito.png.png"
  },
  {
    chip: "Sector 4",
    title: "Insurance",
    description: "We go live, measure everything, then refine what works.",
    image: "https://static.investindia.gov.in/s3fs-public/2019-05/Insurance1.jpg"
  }
];

const DomainKnowledgeSection = () => {
  const rootRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const steps = Array.from(root.querySelectorAll('.scd-29__step'));
    if (!steps.length) return;

    const update = () => {
      let active = 0;
      steps.forEach((s, i) => {
        const r = s.getBoundingClientRect();
        const stickTop = window.innerHeight * (0.20 + i * 0.02);
        const next = steps[i + 1];
        if (next) {
          const nr = next.getBoundingClientRect();
          const prog = Math.min(Math.max((stickTop + 320 - nr.top) / 320, 0), 1);
          s.style.transform = `scale(${1 - prog * 0.10}) translateY(${prog * -8}px)`;
          s.style.filter = `brightness(${1 - prog * 0.35})`;
          const fill = s.querySelector('.scd-29__bar i');
          if (fill) fill.style.width = (prog * 100) + '%';

        } else {
          const fill = s.querySelector('.scd-29__bar i');
          if (fill) fill.style.width = '100%';
        }
        if (r.top <= stickTop + 10) active = i;
      });
      setActiveIdx(active);
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="scd-29 relative w-full bg-white" ref={rootRef}>
      <div className="scd-29__rail hidden">
        {phases.map((_, idx) => (
          <span
            key={idx}
            className={`scd-29__pip ${idx === activeIdx ? 'scd-29__pip--on' : ''}`}
          ></span>
        ))}
      </div>

      <div className="scd-29__scroll-wrap">
        {/* Section Header */}
        <div className="mb-20 text-center relative z-10 px-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold uppercase tracking-widest mb-4 shadow-sm">
            Domain Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Domain Knowledge That Delivers</h2>
          <div className="flex justify-center w-full">
            <p className="text-slate-600 max-w-2xl text-lg text-center text-balance">We bring deep operational expertise to the industries that power the global economy.</p>
          </div>
        </div>

        {phases.map((phase, idx) => (
          <section key={idx} className={`scd-29__step scd-29__step--s${idx + 1}`}>
            <div className="scd-29__grad"></div>

            {/* Fading Image Overlay */}
            {phase.image && (
              <div
                className="absolute inset-y-0 right-0 w-full md:w-[55%] z-0 pointer-events-none"
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%)',
                  maskImage: 'linear-gradient(to right, transparent, black 30%)'
                }}
              >
                <img
                  src={phase.image}
                  alt={phase.title}
                  className="w-full h-full object-cover mix-blend-luminosity opacity-40"
                />
              </div>
            )}



            <div className="scd-29__top relative z-10">
              <span className="scd-29__idx">0{idx + 1}</span>
              <span className="scd-29__chip text-slate-800 border-slate-200 bg-white/50">{phase.chip}</span>
            </div>

            <div className="relative z-10">
              <h2 className="scd-29__h2 text-white">{phase.title}</h2>
              <p className="scd-29__p text-white/90">{phase.description}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default DomainKnowledgeSection;

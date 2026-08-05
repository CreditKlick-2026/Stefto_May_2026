import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

/* ── All 26 real partner images from /assets/partners/ ── */
const partnerImages = Array.from({ length: 24 }, (_, i) => i + 1);
const row1 = partnerImages.slice(0, 12);  // 1–12
const row2 = partnerImages.slice(12);     // 13–24

/* ── Star icon ── */
function Star() {
    return (
        <svg className="w-3 h-3 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
}

/* ── Review Badges ── */
const reviewBadges = [
    {
        name: "Google",
        rating: "4.6",
        count: "480+",
        logo: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
            </svg>
        ),
    },
];

/* ── Counter Hook ── */
function useCounter(raw, duration = 2000, start = false) {
    const [val, setVal] = useState(0);
    const [done, setDone] = useState(false);
    const isSpecial = raw === "24/7";
    const num = isSpecial ? 24 : parseFloat(raw.replace(/[^0-9.]/g, ""));
    const suffix = isSpecial ? "/7" : raw.replace(/[0-9.]/g, "");

    useEffect(() => {
        if (!start) return;
        let cur = 0;
        const step = num / (duration / 16);
        const t = setInterval(() => {
            cur += step;
            if (cur >= num) { setVal(num); clearInterval(t); setDone(true); }
            else setVal(Math.floor(cur * 10) / 10);
        }, 16);
        return () => clearInterval(t);
    }, [start, num, duration]);

    const display = num >= 100 ? Math.round(val).toLocaleString() : val % 1 === 0 ? val.toString() : val.toFixed(1);
    return { display: display + suffix, done };
}

/* ── Stat Item ── */
function StatItem({ stat, index, isInView }) {
    const { display, done } = useCounter(stat.value, 2000, isInView);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center px-2 py-8 sm:py-10"
        >
            <motion.p
                animate={done ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.3 }}
                className="text-[42px] sm:text-[52px] font-black tracking-[-0.04em] leading-none text-[#1d1d1f]"
            >
                {display}
            </motion.p>
            <p className="text-[13px] sm:text-[14px] text-[#86868b] font-medium mt-2.5">{stat.label}</p>
        </motion.div>
    );
}

/* ── Partner Logo Marquee Row ── */
function PartnerRow({ images, direction = "left", speed = 28 }) {
    const doubled = [...images, ...images];

    return (
        <div className="overflow-hidden border-y border-[#e5e5ea] -mb-px bg-transparent group/row">
            <style>{`
                @keyframes marquee-left {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
                .anim-marquee-left { animation: marquee-left var(--speed) linear infinite; }
                .anim-marquee-right { animation: marquee-right var(--speed) linear infinite; }
            `}</style>
            <div
                className={`flex items-center w-max hover:[animation-play-state:paused] ${direction === "left" ? "anim-marquee-left" : "anim-marquee-right"}`}
                style={{ '--speed': `${speed}s` }}
            >
                {doubled.map((n, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-center shrink-0 w-[160px] md:w-[220px] h-[80px] md:h-[100px] border-r border-[#e5e5ea] bg-transparent group/logo hover:bg-red-50 transition-colors cursor-pointer"
                    >
                        <img
                            src={`/assets/partners/${n}.png`}
                            alt={`Partner ${n}`}
                            className="w-full h-full p-3 md:p-5 object-contain transition-transform duration-300 group-hover/logo:scale-110"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ── Main Export ── */
export default function LogoTicker() {
    const statsRef = useRef(null);
    const isInView = useInView(statsRef, { once: true, margin: "-60px" });

    const stats = [
        { value: "50M+", label: "Messages sent monthly" },
        { value: "99.9%", label: "Delivery success rate" },
        { value: "24/7", label: "Live customer support" },
        { value: "10x", label: "Average ROI for Brands" },
    ];

    return (
        <section className="relative pt-4 pb-4 sm:pt-8 sm:pb-8 md:pt-10 md:pb-6 bg-transparent overflow-hidden text-slate-800">

            {/* ── Header: Trusted by + Review Badges ── */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-[900px] mx-auto px-4 sm:px-6 mb-4 sm:mb-10"
            >
                {/* One row: text | divider | badges */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 py-5 px-6 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-none shadow-md border-b-[3px] border-b-[#8b0000]">

                    {/* Review Badges */}
                    <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
                        {reviewBadges.map((b) => (
                            <div
                                key={b.name}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-100 rounded-none shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default"
                            >
                                {b.logo}
                                <span className="text-[11px] font-bold text-slate-700">{b.name}</span>
                                <div className="flex gap-px">{[1,2,3,4,5].map(i => <Star key={i} />)}</div>
                                <span className="text-[11px] font-bold text-[#1e3a8a]">{b.rating}</span>
                                <span className="text-[10px] text-slate-400">({b.count})</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* ── Partner Logo Ticker (Real Images) ── */}
            <div className="relative mb-14 bg-transparent py-8 sm:py-12">
                <div className="relative border-l border-[#e5e5ea] max-w-[1400px] mx-auto overflow-hidden">
                    {/* Fade edges */}
                    <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-[#f8fafc] to-transparent" />
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-[#f8fafc] to-transparent" />

                    <div className="flex flex-col">
                        <PartnerRow images={row1} direction="left" speed={26} />
                        <PartnerRow images={row2} direction="right" speed={30} />
                    </div>
                </div>
            </div>

            {/* ── Stats Grid ── */}
            {/* 
            <div ref={statsRef} className="max-w-[1200px] mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex flex-col items-center justify-center bg-white border border-slate-200/80 hover:border-[#1c469d]/25 hover:bg-slate-50/50 shadow-md hover:shadow-lg rounded-2xl py-8 px-4 transition-all duration-300"
                        >
                            <StatItem stat={stat} index={i} isInView={isInView} />
                        </motion.div>
                    ))}
                </div>
            </div>
            */}

        </section>
    );
}

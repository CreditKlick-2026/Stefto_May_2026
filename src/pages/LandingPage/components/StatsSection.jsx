import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ target, suffix = "", duration = 2 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const end = parseInt(target);
        const step = Math.ceil(end / (duration * 60));
        const timer = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(start);
        }, 1000 / 60);
        return () => clearInterval(timer);
    }, [isInView, target, duration]);

    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
    { value: "14000", suffix: "+", label: "Businesses trust us" },
    { value: "10",    suffix: "M+", label: "Messages sent daily" },
    { value: "99",    suffix: ".9%", label: "Uptime guaranteed" },
    { value: "50",    suffix: "+", label: "Countries served" },
];

const brands = ["Amazon", "Vedantu", "Welspun", "Heritage", "Razorpay", "Flipkart", "Swiggy", "Zomato"];

export default function StatsSection() {
    return (
        <section className="py-20 md:py-32 bg-transparent relative overflow-hidden">
            {/* Ambient Dark Mode Glow */}
            <div className="absolute top-0 inset-x-0 h-[500px] pointer-events-none opacity-20">
                <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#3b82f6] blur-[120px]" />
            </div>

            <div className="max-w-[980px] mx-auto px-6 relative z-10">

                {/* ── Section eyebrow ── */}
                <div className="text-center mb-24 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <span className="text-[12px] font-bold text-white tracking-widest uppercase">
                            Global Scale
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="text-4xl sm:text-[56px] font-bold text-white tracking-[-0.03em] leading-[1.1] mb-6"
                    >
                        Loved by businesses.{" "}
                        <span className="text-blue-100/60">Everywhere.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[18px] md:text-[21px] text-blue-100/70 leading-[1.5] max-w-[600px] mx-auto font-medium"
                    >
                        From solo founders to enterprise teams — Stefto scales with you without breaking a sweat 🚀
                    </motion.p>
                </div>

                {/* ── Stats grid ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, type: "spring", stiffness: 200, damping: 20 }}
                            className="bg-white/5 rounded-3xl py-10 px-6 text-center border border-white/5 hover:border-white/10 hover:bg-white/10 backdrop-blur-md transition-all duration-300 group"
                        >
                            <p className="text-[44px] md:text-[52px] font-bold tracking-tight leading-none mb-3 bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-200 group-hover:to-white transition-all duration-500">
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            </p>
                            <p className="text-[14px] text-blue-100/70 font-semibold">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* ── Brand names ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative rounded-3xl p-[1px] overflow-hidden"
                    style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 100%)" }}
                >
                    <div className="bg-white/5 rounded-3xl px-8 py-10 md:py-12 border border-white/10 h-full relative overflow-hidden backdrop-blur-md">
                        <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
                        
                        <p className="text-center text-[12px] text-blue-200/50 mb-8 font-bold uppercase tracking-[0.2em]">
                            Powering India's fastest‑growing brands
                        </p>
                        
                        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                            {brands.map((brand, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.04 }}
                                    className="text-[18px] md:text-[20px] font-bold text-blue-100/70 hover:text-white transition-colors duration-300 cursor-default"
                                >
                                    {brand}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

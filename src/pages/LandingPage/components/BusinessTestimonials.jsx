import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "Stefto transformed how we connect with customers. Our engagement rates increased by 300%.",
        author: "Priya M.",
        role: "Marketing Director",
        company: "StyleCraft Fashion",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        accent: "#3b82f6",
    },
    {
        quote: "The best WhatsApp marketing platform we've used. Simple, powerful, and affordable for any team size.",
        author: "Rahul K.",
        role: "Founder",
        company: "TechStart Solutions",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        accent: "#0071e3",
    },
    {
        quote: "Customer support is incredible. They helped us onboard in just 30 minutes — start to launch.",
        author: "Sneha T.",
        role: "Operations Head",
        company: "QuickMart Retail",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        accent: "#F97316",
    },
    {
        quote: "We've seen 5× ROI on our WhatsApp campaigns. The analytics dashboard is a game‑changer.",
        author: "Amit V.",
        role: "CEO",
        company: "GreenLeaf Organics",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        accent: "#8B5CF6",
    },
    {
        quote: "Finally, a platform that truly understands Indian business needs. Highly recommend to everyone.",
        author: "Kavya R.",
        role: "Business Owner",
        company: "Desi Delights",
        avatar: "https://randomuser.me/api/portraits/women/90.jpg",
        accent: "#EC4899",
    },
    {
        quote: "The chatbot feature saved us 40 hours per week on customer support queries. Absolutely love it.",
        author: "Meera P.",
        role: "Customer Success",
        company: "HealthFirst Clinics",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        accent: "#14B8A6",
    },
];

function TestimonialCard({ t }) {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(px);
        y.set(py);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div style={{ perspective: "800px" }} className="mx-1.5 flex-shrink-0">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    width: 210,
                }}
                whileHover={{ scale: 1.03, z: 20 }}
                transition={{ scale: { duration: 0.2 } }}
                className="bg-white rounded-xl p-4 flex flex-col justify-between cursor-default
                           shadow-[0_2px_12px_rgba(0,0,0,0.07),0_1px_3px_rgba(0,0,0,0.05)]
                           hover:shadow-[0_12px_40px_rgba(0,0,0,0.13),0_2px_8px_rgba(0,0,0,0.06)]
                           border border-black/[0.05]"
            >
                {/* Accent top bar */}
                <div
                    className="h-[2px] w-8 rounded-full mb-3"
                    style={{ background: t.accent, transform: "translateZ(4px)" }}
                />

                {/* Stars */}
                <div className="flex gap-0.5 mb-2.5" style={{ transform: "translateZ(6px)" }}>
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-[#fbbf24] fill-[#fbbf24]" />
                    ))}
                </div>

                <p
                    className="text-[11.5px] text-[#1d1d1f] leading-[1.55] font-normal mb-3 flex-1"
                    style={{ transform: "translateZ(8px)" }}
                >
                    "{t.quote}"
                </p>

                <div
                    className="flex items-center gap-2 pt-3 border-t border-[#f0f0f0]"
                    style={{ transform: "translateZ(10px)" }}
                >
                    <img
                        src={t.avatar}
                        alt={t.author}
                        className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
                        style={{ boxShadow: `0 0 0 2px ${t.accent}30` }}
                        onError={(e) => { e.target.style.display = "none"; }}
                    />
                    <div>
                        <p className="text-[11px] font-semibold text-[#1d1d1f] leading-tight">{t.author}</p>
                        <p className="text-[10px] text-[#6e6e73] leading-tight mt-0.5">
                            {t.role} · {t.company}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

function MarqueeRow({ items, direction = 1, duration = 40 }) {
    const doubled = [...items, ...items];
    const totalW = 228 * items.length; // card width (210) + mx (18)

    return (
        <div className="relative overflow-hidden py-2">
            <motion.div
                animate={{ x: direction === 1 ? [0, -totalW] : [-totalW, 0] }}
                transition={{ repeat: Infinity, repeatType: "loop", duration, ease: "linear" }}
                className="flex w-max"
            >
                {doubled.map((t, i) => (
                    <TestimonialCard key={i} t={t} />
                ))}
            </motion.div>
        </div>
    );
}

export default function BusinessTestimonials() {
    const row1 = testimonials.slice(0, 3);
    const row2 = testimonials.slice(3);

    return (
        <section className="py-10 md:py-16 bg-white overflow-hidden">
            {/* Header */}
            <div className="max-w-[980px] mx-auto px-4 md:px-6 text-center mb-8 md:mb-12">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}

                    className="text-[12px] font-semibold text-[#3b82f6] mb-2.5 tracking-widest uppercase"
                >
                    Customer Stories
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}

                    transition={{ delay: 0.06 }}
                    className="text-2xl sm:text-[38px] font-bold text-[#1d1d1f] tracking-[-0.022em] leading-[1.12] mb-2.5"
                >
                    People love{" "}
                    <span className="text-[#6e6e73]">Stefto.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}

                    transition={{ delay: 0.12 }}
                    className="text-[14px] md:text-[16px] text-[#6e6e73] leading-[1.5]"
                >
                    Join thousands of happy businesses growing with Stefto.
                </motion.p>
            </div>

            {/* Edge fades + marquee */}
            <div className="relative">
                <div
                    className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 md:w-24 z-10"
                    style={{ background: "linear-gradient(to right, #fff, transparent)" }}
                />
                <div
                    className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 md:w-24 z-10"
                    style={{ background: "linear-gradient(to left, #fff, transparent)" }}
                />
                <div className="flex flex-col gap-3 md:gap-4">
                    <MarqueeRow items={row1} direction={1} duration={38} />
                    <MarqueeRow items={row2} direction={-1} duration={42} />
                </div>
            </div>

            {/* Bottom trust bar */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}

                className="max-w-[460px] mx-auto px-4 md:px-6 mt-10 md:mt-12"
            >
                <div className="grid grid-cols-3 gap-px bg-[#f5f5f7] rounded-xl overflow-hidden border border-[#f0f0f0]">
                    {[
                        { value: "4.9/5", label: "Avg rating" },
                        { value: "10,000+", label: "Customers" },
                        { value: "50+", label: "Countries" },
                    ].map((stat) => (
                        <div key={stat.label} className="bg-white py-4 text-center">
                            <p className="text-[18px] md:text-[20px] font-bold text-[#1d1d1f] tracking-[-0.02em] leading-none mb-1">
                                {stat.value}
                            </p>
                            <p className="text-[10px] md:text-[11px] text-[#6e6e73]">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "Stefto has been instrumental in building the business right from any stage of its growth and into any vertical. Their understanding of our product has helped us in achieving the goals with technical logic. They have also helped us in late-stage collections and continue to partner of preference with us as we scale up.",
        author: "Ajay Yadav",
        role: "(Collection Head - Unsecured) - HeroFin Corp",
        accent: "#3b82f6",
        initial: "A"
    },
    {
        quote: "It has been a great experience and continuous journey with the Stefto Team. The organisation has strong leadership in delivery and managing the businesses very effectively. What sets them apart is their vested interest in understanding the nuances of the business and the culture of the organization.",
        author: "Mr. Vineet Kakkar",
        role: "(ZONAL HEAD) - SBIC",
        accent: "#0071e3",
        initial: "V"
    },
    {
        quote: "Stefto knows how to run any project aggressively for Banks/NBFCs needs and really understands the process delivery in terms of debt collection and recovery. They are also very helpful with competitive intelligence along with technology.",
        author: "Mrs. Sumona",
        role: "(AGENCY MANAGER) - CITI BANK",
        accent: "#F97316",
        initial: "S"
    },
    {
        quote: "Stefto's tech-driven approach has remarkably improved our recovery rates while maintaining the highest standard of customer experience. Their team operates as a true extension of our own.",
        author: "Rajesh Sharma",
        role: "VP Collections - Bajaj Auto Finance",
        accent: "#8B5CF6",
        initial: "R"
    },
    {
        quote: "The analytics and predictive modeling provided by Stefto have completely transformed how we handle risk. Their precision and dedication to results make them an invaluable partner.",
        author: "Meenakshi Desai",
        role: "Chief Risk Officer - Muthoot Finance",
        accent: "#EC4899",
        initial: "M"
    },
    {
        quote: "We partnered with Stefto for customer retention, and the results exceeded our expectations. Their staff is highly trained, empathetic, and exceptionally professional in every interaction.",
        author: "Karan Singh",
        role: "Head of Operations - ICICI Direct",
        accent: "#14B8A6",
        initial: "K"
    }
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
        <div className="mx-1.5 flex-shrink-0">
            <div
                style={{
                    width: 320,
                }}
                className="bg-white rounded-xl p-4 flex flex-row items-center gap-4 cursor-default
                           shadow-[0_2px_12px_rgba(0,0,0,0.07),0_1px_3px_rgba(0,0,0,0.05)]
                           border border-black/[0.05]"
            >
                {/* Left side: Avatar and info */}
                <div className="flex flex-col items-center flex-shrink-0" style={{ width: "70px" }}>
                    <div
                        className="w-12 h-12 rounded-full ring-2 ring-white mb-2 flex items-center justify-center text-white text-xl font-bold"
                        style={{ backgroundColor: t.accent, boxShadow: `0 0 0 2px ${t.accent}30` }}
                    >
                        {t.initial}
                    </div>
                    <p className="text-[11px] font-semibold text-[#1d1d1f] leading-tight text-center">{t.author}</p>
                    <p className="text-[9px] text-[#6e6e73] leading-tight mt-0.5 text-center">
                        {t.role}
                    </p>
                </div>

                {/* Right side: Stars and Quote */}
                <div className="flex flex-col flex-1 border-l border-[#f0f0f0] pl-4">
                    <div className="flex gap-0.5 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-[#fbbf24] fill-[#fbbf24]" />
                        ))}
                    </div>
                    <p className="text-[11.5px] text-[#1d1d1f] leading-[1.55] font-normal italic">
                        "{t.quote}"
                    </p>
                </div>
            </div>
        </div>
    );
}

function MarqueeRow({ items, direction = 1, duration = 40 }) {
    // Duplicate multiple times so it fills large screens easily
    const multiplied = [...items, ...items, ...items, ...items, ...items, ...items];
    const totalW = 332 * items.length; // card width (320) + mx (12)

    return (
        <div className="relative overflow-hidden py-2">
            <motion.div
                animate={{ x: direction === 1 ? [0, -totalW] : [-totalW, 0] }}
                transition={{ repeat: Infinity, repeatType: "loop", duration, ease: "linear" }}
                className="flex w-max"
            >
                {multiplied.map((t, i) => (
                    <TestimonialCard key={i} t={t} />
                ))}
            </motion.div>
        </div>
    );
}

export default function BusinessTestimonials() {
    return (
        <section className="pt-10 pb-10 md:pt-12 md:pb-16 bg-white overflow-hidden">
            {/* Header */}
            <div className="max-w-[980px] mx-auto px-4 md:px-6 text-center mb-8 md:mb-12">

                <motion.h2
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}

                    transition={{ delay: 0.06 }}
                    className="text-2xl sm:text-[38px] font-bold text-[#1d1d1f] tracking-[-0.022em] leading-[1.12] mb-2.5"
                >
                    Customer{" "}
                    <span className="text-[#6e6e73]">Reviews</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}

                    transition={{ delay: 0.12 }}
                    className="text-[14px] md:text-[16px] text-[#6e6e73] leading-[1.5]"
                >

                </motion.p>
            </div>

            {/* Edge fades + marquee */}
            <div className="relative">
                <div
                    className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 md:w-24 z-10 hidden md:block"
                    style={{ background: "linear-gradient(to right, #fff, transparent)" }}
                />
                <div
                    className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 md:w-24 z-10 hidden md:block"
                    style={{ background: "linear-gradient(to left, #fff, transparent)" }}
                />
                <div className="flex flex-col gap-3 md:gap-4">
                    <MarqueeRow items={testimonials} direction={1} duration={45} />
                </div>
            </div>

            {/* Bottom trust bar */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}

                className="max-w-[460px] mx-auto px-4 md:px-6 mt-10 md:mt-12"
            >

            </motion.div>
        </section>
    );
}

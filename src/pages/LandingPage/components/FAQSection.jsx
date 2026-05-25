import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircle } from "lucide-react";

const faqs = [];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-16 md:py-24 bg-white relative z-30 border-t border-slate-100">
            {/* Soft Ambient Glows */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
                    style={{ background: "radial-gradient(circle, rgba(28,70,157,0.2) 0%, transparent 70%)" }} />
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-[120px]" />
            </div>

            <div className="max-w-[720px] mx-auto px-4 md:px-6 relative z-10">


                {/* Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.04 }}
                                className={`rounded-2xl overflow-hidden border transition-all duration-300 shadow-sm ${isOpen
                                        ? "bg-white border-[#1c469d] border-2 shadow-md"
                                        : "bg-white border-slate-200/60 hover:bg-slate-50/40 hover:border-slate-350 hover:shadow-md"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                                    className="w-full flex items-center justify-between px-5 md:px-7 py-4 md:py-5 text-left focus:outline-none cursor-pointer"
                                >
                                    <span className="text-[14px] md:text-[16px] font-bold text-[#142b54] tracking-[-0.01em] pr-4 md:pr-6 leading-snug">
                                        {faq.question}
                                    </span>
                                    <div
                                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                                                ? "bg-[#1c469d] rotate-45 shadow-[0_0_10px_rgba(28,70,157,0.3)] text-white"
                                                : "bg-slate-50 border border-slate-200/80 text-[#1c469d]"
                                            }`}
                                    >
                                        <Plus className="w-4 h-4" strokeWidth={2.5} />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-5 md:px-7 pb-5 text-[13.5px] md:text-[14.5px] text-slate-600 leading-[1.6]">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>


            </div>
        </section>
    );
}

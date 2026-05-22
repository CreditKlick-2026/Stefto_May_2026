import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircle } from "lucide-react";

const faqs = [
    {
        question: "What is Stefto and how does it help businesses?",
        answer: "Stefto is India's premier Business Process Outsourcing (BPO) and customer experience platform. We help businesses outsource their customer support, inbound assistance, outbound telesales, and back-office operations to trained professional teams, ensuring high customer satisfaction and increased efficiency."
    },
    {
        question: "What services does Stefto specialize in?",
        answer: "We specialize in comprehensive inbound customer support, outbound tele-calling and sales outreach, multi-channel chat/email support, CRM management, and tailored back-office operations designed to scale your business."
    },
    {
        question: "How do you ensure the quality of support interactions?",
        answer: "We recruit and train specialized agents tailored to your industry standards. Our system features real-time call monitoring, regular quality audits, and custom performance metrics (SLAs, AHT, CSAT) that you can track live via our dashboard."
    },
    {
        question: "Is there a pilot or trial period available?",
        answer: "Yes, we offer customized pilot runs for businesses to demonstrate our agent quality, process transition, and operational performance before committing to long-term agreements."
    },
    {
        question: "Can Stefto integrate with our existing CRM and systems?",
        answer: "Absolutely. Our operations integrate seamlessly with standard CRM software, ticketing platforms, and customer databases. This ensures secure and synchronized customer records without disrupting your active workflows."
    },
    {
        question: "How secure is our customer and business data?",
        answer: "Data security is our top priority. Stefto complies with strict data protection guidelines, utilizing secure access controls, encrypted databases, and clean desk environments to guarantee the highest standards of data safety."
    }
];

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

                {/* Header */}
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[12px] sm:text-xs font-extrabold text-[#1c469d] mb-3 sm:mb-4 uppercase tracking-widest"
                    >
                        FAQ
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.06 }}
                        className="text-2xl sm:text-[40px] md:text-[48px] font-bold text-[#142b54] tracking-[-0.03em] leading-[1.1] mb-5"
                    >
                        Questions?{" "}
                        <span className="text-slate-400">We have answers.</span>
                    </motion.h2>
                </div>

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
                                className={`rounded-2xl overflow-hidden border transition-all duration-300 shadow-sm ${
                                    isOpen 
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
                                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                                            isOpen 
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

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-12 text-center"
                >
                    <p className="text-[14px] text-slate-400 mb-3 font-semibold">Still have questions?</p>
                    <a
                        href="mailto:support@stefto.io"
                        className="inline-flex items-center gap-2 text-[15px] font-bold text-[#1c469d] hover:text-blue-700 hover:underline transition-all duration-200"
                    >
                        <MessageCircle className="w-4 h-4 text-[#1c469d]" />
                        Contact our support team
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

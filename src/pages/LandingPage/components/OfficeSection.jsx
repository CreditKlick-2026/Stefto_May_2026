import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const officeImage = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7";

export default function OfficeSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
            {/* Subtle premium ambient glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3b82f6]/3 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-[#1c469d] rounded-[2rem] opacity-10 blur-lg" />
                        <img src={officeImage} alt="Our Team" className="relative rounded-[2rem] shadow-xl w-full border border-slate-100" />

                        {/* Floating Agent Badge */}
                        <div className="absolute -bottom-8 -right-8 bg-white/95 p-6 rounded-2xl shadow-xl border border-slate-200/80 backdrop-blur-md max-w-xs hidden md:block">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <img 
                                            key={i} 
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 2}`} 
                                            alt="Agent" 
                                            className="border-2 border-white rounded-full w-8 h-8 bg-slate-100" 
                                        />
                                    ))}
                                </div>
                                <span className="text-sm font-bold text-[#1c469d]">+40 Support Agents</span>
                            </div>
                            <p className="text-sm font-semibold text-slate-800">"24/7 Dedicated support for enterprise clients"</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-[#142b54] leading-tight">
                            Human support,<br />AI-powered speed
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            While our technology is automated, our support is 100% human. We believe in building relationships, not just software. Our dedicated success managers work with you to optimize your campaigns and ensure compliance.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Dedicated Customer Success Manager",
                                "24/7 Technical Support",
                                "WhatsApp Policy Compliance Checks",
                                "Custom Integration Assistance"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1c469d] flex items-center justify-center shrink-0 border border-blue-200/50">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span className="font-semibold text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="mt-10 inline-flex items-center justify-center h-12 rounded-full px-8 border border-slate-200 hover:border-[#1c469d] text-slate-800 hover:bg-slate-50 font-bold transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer">
                            Meet the Team
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
    const benefits = [
        "No hidden setup fees",
        "Customized SLA guarantees",
        "Dedicated account managers",
        "24/7 Operations Support"
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-[#0a1c3a] via-[#0f2a54] to-[#163b73] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
                </div>
                {/* Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                }} />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}

                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-white" />
                        <span className="text-sm font-medium text-white">Start Scaling Today</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}

                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        Ready to Transform Your<br />
                        Customer Operations?
                    </motion.h2>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}

                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
                    >
                        Join growing Indian enterprises using Stefto to scale customer support,
                        engage clients, and improve BPO operational efficiency.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}

                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
                    >
                        <Link
                            to="/login"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-xl shadow-2xl shadow-black/20 transition-all hover:scale-105"
                        >
                            Go to Dashboard
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border-2 border-white/30 transition-all backdrop-blur-sm"
                        >
                            Talk to Sales
                        </Link>
                    </motion.div>

                    {/* Benefits */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}

                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-white/90">
                                <CheckCircle2 className="w-5 h-5 text-white" />
                                <span className="text-sm font-medium">{benefit}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

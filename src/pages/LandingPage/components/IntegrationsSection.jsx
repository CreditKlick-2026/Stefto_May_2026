import React from "react";
import { motion } from "framer-motion";
import { Plug, ArrowRight } from "lucide-react";
import promoApiImg from "../../../assets/promo_api.png";

export default function IntegrationsSection() {
    const integrations = [
        { name: "Shopify", color: "#96BF48", category: "E-commerce" },
        { name: "WooCommerce", color: "#96588A", category: "E-commerce" },
        { name: "Razorpay", color: "#0C2451", category: "Payments" },
        { name: "Stripe", color: "#635BFF", category: "Payments" },
        { name: "Cashfree", color: "#00A86B", category: "Payments" },
        { name: "HubSpot", color: "#FF7A59", category: "CRM" },
        { name: "Salesforce", color: "#00A1E0", category: "CRM" },
        { name: "Freshdesk", color: "#25C16F", category: "Support" },
        { name: "Zendesk", color: "#03363D", category: "Support" },
        { name: "Zapier", color: "#FF4A00", category: "Automation" },
        { name: "Make", color: "#6D5DCB", category: "Automation" },
        { name: "Pabbly", color: "#1F78C1", category: "Automation" },
        { name: "Google Sheets", color: "#34A853", category: "Data" },
        { name: "Zoho", color: "#E42527", category: "CRM" },
        { name: "Shiprocket", color: "#FF6A00", category: "Logistics" },
        { name: "Delhivery", color: "#EE2028", category: "Logistics" },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}

                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-6"
                    >
                        <Plug className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-medium text-purple-700">30+ Integrations</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}

                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Works With Your{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#1a237e]">
                            Favorite Tools
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}

                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600"
                    >
                        Connect Stefto with your existing tech stack. Native integrations with popular e-commerce, CRM, and automation platforms.
                    </motion.p>
                </div>

                {/* Integrations Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-12"
                >
                    {integrations.map((integration, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
    
                            transition={{ delay: idx * 0.03 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="group bg-white rounded-xl border border-gray-200 p-4 flex flex-col items-center gap-2 hover:shadow-lg hover:border-gray-300 transition-all cursor-pointer"
                        >
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                                style={{ backgroundColor: integration.color }}
                            >
                                {integration.name[0]}
                            </div>
                            <span className="text-xs font-medium text-gray-700 text-center">
                                {integration.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Categories */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {["E-commerce", "Payments", "CRM", "Support", "Automation", "Logistics"].map((category, idx) => (
                        <span
                            key={idx}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                            {category}
                        </span>
                    ))}
                </motion.div>

                {/* API CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl"
                >
                    <div className="relative z-10 w-full md:w-[45%]">
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-white/20 transition-colors bg-white flex items-center justify-center p-2">
                            <img src={promoApiImg} alt="Developer API" className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>
                    <div className="relative z-10 w-full md:w-[50%] flex flex-col items-start text-left">
                        <h3 className="text-3xl font-bold text-white mb-4 leading-tight">Build Seamless Custom Integrations</h3>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Use our robust and flexible REST API to connect Stefto directly into your proprietary software stack. Built by developers, for developers.
                        </p>
                        <a
                            href="/docs/api"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            View API Documentation
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        setIsSubscribed(true);
    };

    return (
        <section className="py-20 bg-gray-50 border-y border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}

                    className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Left - Content */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-4 mx-auto md:mx-0">
                                <Mail className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                WhatsApp Marketing Tips
                            </h3>
                            <p className="text-gray-600">
                                Get weekly insights on WhatsApp marketing strategies, case studies, and platform updates.
                            </p>
                        </div>

                        {/* Right - Form */}
                        <div className="flex-1 w-full">
                            {isSubscribed ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-200"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                                    <div>
                                        <p className="font-semibold text-green-800">You're subscribed!</p>
                                        <p className="text-sm text-blue-600">Check your inbox for confirmation.</p>
                                    </div>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="relative">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            required
                                            className="w-full px-5 py-4 pr-36 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                                        />
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-[#3b82f6] hover:bg-[#0033cc] text-white font-semibold rounded-lg transition-all flex items-center gap-2 disabled:opacity-50"
                                        >
                                            {isLoading ? (
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                            ) : (
                                                <>
                                                    Subscribe
                                                    <ArrowRight className="w-4 h-4" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-500 text-center md:text-left">
                                        No spam, unsubscribe at any time. Read our{' '}
                                        <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

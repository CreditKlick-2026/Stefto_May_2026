import React from "react";
import { motion } from "framer-motion";
import { Play, Activity, Star, Users, Send } from "lucide-react";

export default function VideoTestimonials() {
    return (
        <section className="py-32 bg-transparent relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-full blur-[150px] opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20 backdrop-blur-sm"
                    >
                        <Play className="w-4 h-4" />
                        <span>Customer Success Stories</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent"
                    >
                        See the transformation in action
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-blue-100/70 leading-relaxed"
                    >
                        Real businesses sharing their journey with Stefto. From struggling with customer communication to achieving remarkable results.
                    </motion.p>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            videoId: "sample1",
                            thumbnail: "https://api.dicebear.com/7.x/avataaars/svg?seed=video1",
                            company: "TechFlow Solutions",
                            person: "Sarah Jennings",
                            role: "CTO",
                            duration: "2:34",
                            views: "1.2K",
                            testimonial: "Stefto transformed our customer support operations. We reduced response times by 80% and increased customer satisfaction scores from 3.2 to 4.8 stars within the first month."
                        },
                        {
                            videoId: "sample2",
                            thumbnail: "https://api.dicebear.com/7.x/avataaars/svg?seed=video2",
                            company: "RetailMax",
                            person: "Michael Chen",
                            role: "Head of Operations",
                            duration: "3:12",
                            views: "892",
                            testimonial: "Our order confirmation and shipping updates now reach customers instantly. We've seen a 65% reduction in support tickets and a 40% increase in repeat purchases."
                        },
                        {
                            videoId: "sample3",
                            thumbnail: "https://api.dicebear.com/7.x/avataaars/svg?seed=video3",
                            company: "Growth Agency",
                            person: "Jessica Wu",
                            role: "Marketing Director",
                            duration: "2:58",
                            views: "1.8K",
                            testimonial: "Stefto's campaign automation helped us achieve 340% ROI on our marketing spend. Our lead conversion rate improved from 2.1% to 8.7% in just 3 months."
                        }
                    ].map((video, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group relative"
                        >
                            {/* Video Card */}
                            <div className="relative rounded-3xl overflow-hidden bg-slate-900/40 border border-white/10 backdrop-blur-md shadow-2xl hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] transition-all duration-500 group-hover:-translate-y-2">
                                {/* Video Thumbnail */}
                                <div className="relative aspect-video bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center border-b border-white/5">
                                    <img
                                        src={video.thumbnail}
                                        alt={`${video.person} testimonial`}
                                        className="w-20 h-20 rounded-full border-4 border-white/10 shadow-lg bg-slate-800/80 p-1"
                                    />

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 bg-black/35 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                            <Play className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" />
                                        </div>
                                    </div>

                                    {/* Duration Badge */}
                                    <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-white/5">
                                        {video.duration}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="font-bold text-lg text-white mb-1">{video.company}</h3>
                                            <p className="text-sm text-blue-200/60">
                                                {video.person}, {video.role}
                                            </p>
                                        </div>
                                        <div className="flex items-center text-xs text-blue-200/50">
                                            <Activity className="w-3 h-3 mr-1" />
                                            {video.views} views
                                        </div>
                                    </div>

                                    <p className="text-sm text-blue-100/70 leading-relaxed line-clamp-3 italic">
                                        "{video.testimonial}"
                                    </p>

                                    {/* Metrics */}
                                    <div className="mt-4 flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center text-xs text-blue-400 font-semibold">
                                                <Star className="w-3 h-3 mr-1 fill-current text-blue-400" />
                                                5.0
                                            </div>
                                            <div className="flex items-center text-xs text-blue-200/50">
                                                <Users className="w-3 h-3 mr-1" />
                                                Verified
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl" />
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <p className="text-blue-200/60 mb-6">Ready to share your success story?</p>
                    <button className="inline-flex items-center justify-center h-12 rounded-full px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium shadow-[0_4px_20px_rgba(59,130,246,0.3)] transition-all duration-300 hover:scale-105 cursor-pointer">
                        <Send className="w-4 h-4 mr-2" />
                        Submit Your Testimonial
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

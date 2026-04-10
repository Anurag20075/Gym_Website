import React from "react";
import { motion } from "framer-motion";
// Swapped Phone for MessageCircle to match WhatsApp
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export default function CTASection() {
    // Replace this with your actual WhatsApp number (including country code, no symbols)
    const whatsappNumber = "916398802517";
    const message = encodeURIComponent("Hi! I'm interested in building a project with your agency. Can we discuss?");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <section className="py-24 lg:py-32 relative overflow-hidden bg-slate-950">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 rounded-[2.5rem] p-12 lg:p-24 overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/20"
                >
                    {/* Background elements omitted for brevity - keep your original ones here */}

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                            Next-Gen Solutions
                        </motion.div>

                        <motion.h2
                            className="text-4xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tighter"
                        >
                            Ready to ignite your <br className="hidden md:block" /> digital future?
                        </motion.h2>

                        <motion.p
                            className="mt-6 text-indigo-50 text-lg lg:text-xl leading-relaxed opacity-90"
                        >
                            Send us a message today. Let's discuss how we can build something <br className="hidden md:block" /> unique for your business.
                        </motion.p>

                        <motion.div
                            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
                        >
                            {/* Main Button -> WhatsApp */}
                            <motion.a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-3 bg-white text-indigo-700 font-bold px-10 py-5 rounded-2xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <MessageCircle className="w-5 h-5 opacity-80" />
                                Chat on WhatsApp
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                            </motion.a>

                            {/* Secondary Button -> Optional Direct Call or Portfolio */}
                            <motion.a
                                href="#projects"
                                className="inline-flex items-center gap-3 text-white font-semibold px-10 py-5 rounded-2xl border-2 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm"
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                View Our Work
                            </motion.a>
                        </motion.div>

                        <motion.p
                            className="mt-8 text-indigo-200/60 text-sm font-medium italic"
                        >
                            * Fast response. Average reply time is under 1 hour.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

export default function CTASection() {
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
                    {/* Animated Decorative Elements */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-white/20 rounded-full blur-[100px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-400/30 rounded-full blur-[100px]"
                    />

                    {/* Grid Pattern Overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.08]"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                            backgroundSize: "32px 32px",
                        }}
                    />

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
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tighter"
                        >
                            Ready to ignite your <br className="hidden md:block" /> digital future?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.45 }}
                            className="mt-6 text-indigo-50 text-lg lg:text-xl leading-relaxed opacity-90"
                        >
                            Connect with our expert team today and transform your business <br className="hidden md:block" /> with a tailored, future-proof digital strategy.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
                        >
                            <motion.a
                                href="#"
                                className="group relative inline-flex items-center gap-3 bg-white text-indigo-700 font-bold px-10 py-5 rounded-2xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Get a Free Strategy Session
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                            </motion.a>

                            <motion.a
                                href="tel:400-888-8888"
                                className="inline-flex items-center gap-3 text-white font-semibold px-10 py-5 rounded-2xl border-2 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm"
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Phone className="w-5 h-5 opacity-80" />
                                +1 (800) 888-8888
                            </motion.a>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-8 text-indigo-200/60 text-sm font-medium italic"
                        >
                            * No credit card required. Initial consultation is 100% free.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
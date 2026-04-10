import React from "react";
import { motion } from "framer-motion";
import { Users, CheckCircle, ChevronRight, Sparkles, Cpu, Zap, Code2 } from "lucide-react";
// Assuming these are your animation variants
import { fadeInLeft, fadeInUp, staggerContainer } from "./variants";
import AnimatedCounter from "./AnimatedCounter";

const checklistItems = [
    "Custom-coded solutions built for speed and long-term scalability",
    "Direct founder-to-client communication for zero loss in translation",
    "Modern tech stacks (Next.js, Spring Boot) for peak performance",
    "Seamless API integrations and third-party ecosystem connectivity",
    "Post-launch technical maintenance and strategic growth support"
];

export default function TechSuccessSection() {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden bg-white">
            {/* Background Decorative Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-20 pointer-events-none" />
            <div className="absolute top-40 left-10 w-72 h-72 bg-purple-100/40 rounded-full blur-[100px] animate-pulse" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Visual Side */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInLeft}
                        className="relative"
                    >
                        {/* Decorative frame */}
                        <div className="absolute -inset-4 border border-purple-100 rounded-[2.5rem] -rotate-2 pointer-events-none" />

                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-purple-900/10 z-10">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                alt="Modern Development Team"
                                className="w-full h-[450px] lg:h-[550px] object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-transparent to-transparent" />
                        </div>

                        {/* Floating Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, type: "spring" }}
                            className="absolute -bottom-10 -right-4 lg:-right-10 bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 border border-white z-20"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center shadow-lg">
                                    <Code2 className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <p className="text-3xl font-black text-slate-900 tracking-tighter">
                                        <AnimatedCounter target={100} suffix="%" />
                                    </p>
                                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-purple-600">
                                        Custom Hand-Coded
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                        className="lg:pl-6"
                    >
                        <motion.div variants={fadeInUp(0)} className="inline-flex items-center gap-3 mb-6">
                            <Zap className="w-5 h-5 text-purple-500 fill-purple-500" />
                            <span className="text-xs font-black text-purple-600 tracking-[0.3em] uppercase">
                                Agile & Modular
                            </span>
                        </motion.div>

                        <motion.h2 variants={fadeInUp(1)} className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                            We Don't Just Build Sites. <br />
                            <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                                We Engineer Solutions.
                            </span>
                        </motion.h2>

                        <motion.p variants={fadeInUp(2)} className="mt-8 text-slate-600 text-lg leading-relaxed">
                            Generic templates don't win markets. We specialize in custom full-stack
                            applications that provide your business with a unique competitive edge.
                            By focusing on high-performance architecture, we ensure your platform
                            is fast, secure, and ready to scale.
                        </motion.p>

                        {/* Checklist */}
                        <motion.div variants={fadeInUp(3)} className="mt-10 space-y-3">
                            {checklistItems.map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 p-2 rounded-xl transition-colors hover:bg-purple-50/50 group"
                                >
                                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-purple-600 transition-colors">
                                        <CheckCircle className="w-4 h-4 text-purple-600 group-hover:text-white" />
                                    </div>
                                    <span className="text-sm md:text-base text-slate-700 font-medium tracking-tight leading-snug">
                                        {item}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Action Link */}
                        <motion.div variants={fadeInUp(4)} className="mt-12">
                            <motion.a
                                href="#contact"
                                className="group relative inline-flex items-center gap-3 py-3 px-1 text-purple-600 font-bold text-sm tracking-widest uppercase overflow-hidden"
                            >
                                <span className="relative z-10">Let's talk about your vision</span>
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-100 scale-x-100 origin-left" />
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
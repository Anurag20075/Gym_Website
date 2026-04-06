import React from "react";
import { motion } from "framer-motion";
import { Clock, Users, CheckCircle, Award, Globe, Star } from "lucide-react";
// Assuming these variants exist in your project
import { fadeInRight, fadeInUp, scaleIn, staggerContainer } from "./variants";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
    { icon: Clock, value: 24, suffix: "+", label: "Years of Experience" },
    { icon: Users, value: 2000, suffix: "+", label: "Global Clients" },
    { icon: CheckCircle, value: 5000, suffix: "+", label: "Projects Delivered" },
    { icon: Award, value: 98, suffix: "%", label: "Satisfaction Rate" },
];

export default function ExperienceSection() {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden bg-slate-950">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950" />
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                }}
            />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp(0)} className="inline-flex items-center gap-3 mb-6">
                            <div className="w-10 h-[2px] bg-gradient-to-r from-purple-500 to-transparent rounded" />
                            <span className="text-xs font-black text-purple-400 tracking-[0.3em] uppercase">
                                Our Excellence
                            </span>
                        </motion.div>

                        <motion.h2 variants={fadeInUp(1)} className="text-4xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tighter">
                            24+ Years of
                            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
                                IT Innovation
                            </span>
                        </motion.h2>

                        <motion.p variants={fadeInUp(2)} className="mt-6 text-lg text-slate-300/80 leading-relaxed max-w-xl">
                            For over two decades, we've pioneered digital evolution. From early enterprise
                            systems to modern AI-driven ecosystems, we bridge the gap between complex
                            technology and seamless business growth.
                        </motion.p>

                        <motion.div variants={fadeInUp(3)} className="mt-12 grid grid-cols-2 gap-6">
                            {stats.map((s, i) => (
                                <motion.div
                                    key={i}
                                    variants={scaleIn}
                                    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                                    className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl transition-all"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 border border-purple-500/20">
                                        <s.icon className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <p className="text-3xl font-bold text-white tracking-tight">
                                        <AnimatedCounter target={s.value} suffix={s.suffix} />
                                    </p>
                                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">{s.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Illustration */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInRight}
                        className="relative hidden lg:flex justify-center"
                    >
                        <div className="relative w-full max-w-[480px]">
                            {/* Main Image Container */}
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                    alt="Team Collaboration"
                                    className="w-full h-[540px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Floating Badge 1: Global */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-8 -left-8 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-5"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.4)]">
                                        <Globe className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Global Presence</p>
                                        <p className="text-lg font-bold text-white">30+ Countries</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Badge 2: Rating */}
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-8 -right-8 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-5"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                                        <Star className="w-6 h-6 text-white fill-white" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Industry Rank</p>
                                        <p className="text-lg font-bold text-white">Top Rated</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative Rings */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border border-purple-500/10 rounded-full animate-pulse" />
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-indigo-500/5 rounded-full" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
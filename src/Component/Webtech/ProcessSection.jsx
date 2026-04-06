import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Palette, Code, CheckCircle, ChevronRight } from "lucide-react";
// Assuming these are your standard animation variants
import { fadeInUp, staggerContainer } from "./variants";

const steps = [
    {
        num: "01",
        title: "Requirement Analysis",
        desc: "Deep dive into business scenarios and user goals to define a clear project roadmap.",
        icon: BarChart3
    },
    {
        num: "02",
        title: "Solution Design",
        desc: "Crafting technical architectures and high-fidelity prototypes to ensure feasibility.",
        icon: Palette
    },
    {
        num: "03",
        title: "Agile Development",
        desc: "Utilizing Scrum methodology for rapid iterations and continuous, high-quality delivery.",
        icon: Code
    },
    {
        num: "04",
        title: "QA & Deployment",
        desc: "Rigorous testing and quality assurance to ensure a stable, reliable global launch.",
        icon: CheckCircle
    },
];

export default function ProcessSection() {
    return (
        <section className="py-24 lg:py-32 bg-[#fafaff] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-200/20 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-200/20 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                    className="text-center max-w-2xl mx-auto mb-20"
                >
                    <motion.div variants={fadeInUp(0)} className="inline-flex items-center gap-3 mb-4">
                        <span className="h-[1px] w-8 bg-purple-300" />
                        <span className="text-xs font-black text-purple-600 tracking-[0.2em] uppercase">
                            Workflow
                        </span>
                        <span className="h-[1px] w-8 bg-purple-300" />
                    </motion.div>

                    <motion.h2 variants={fadeInUp(1)} className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                        Our High-Efficiency <br />
                        <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                            Development Process
                        </span>
                    </motion.h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
                >
                    {/* Decorative connecting line for Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-purple-100 -translate-y-12 z-0" />

                    {steps.map((s, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp(i)}
                            whileHover={{ y: -8 }}
                            className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group z-10"
                        >
                            {/* Number Watermark */}
                            <span className="absolute top-6 right-8 text-6xl font-black text-slate-50 group-hover:text-purple-50/50 transition-colors pointer-events-none select-none">
                                {s.num}
                            </span>

                            <div className="relative">
                                {/* Icon Container */}
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center mb-6 group-hover:from-purple-600 group-hover:to-indigo-600 transition-all duration-500 shadow-inner">
                                    <s.icon className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors duration-500" />
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-purple-600 transition-colors">
                                    {s.title}
                                </h3>

                                <p className="text-slate-500 leading-relaxed text-sm">
                                    {s.desc}
                                </p>

                                {/* Next Step Arrow (Mobile/Tablet) */}
                                <div className="mt-6 flex items-center text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] font-bold uppercase tracking-widest mr-2">Learn More</span>
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Connector Dot for Desktop */}
                            <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-12 w-2 h-2 rounded-full bg-purple-200 border-4 border-white group-last:hidden" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
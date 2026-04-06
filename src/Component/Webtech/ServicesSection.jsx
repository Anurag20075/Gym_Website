import React from "react";
import { motion } from "framer-motion";
import { Palette, Megaphone, Code, Smartphone, Database, Shield, ArrowRight } from "lucide-react";
// Assuming these variants are standard across your app
import { fadeInUp, scaleIn, staggerContainer } from "./variants";

const services = [
    {
        icon: Palette,
        title: "UI/UX Design",
        desc: "User-centric design philosophies that create intuitive, high-conversion digital experiences.",
        bg: "from-purple-500/10 to-violet-500/10",
        iconColor: "text-purple-600",
        hoverBorder: "hover:border-purple-200"
    },
    {
        icon: Megaphone,
        title: "Digital Marketing",
        desc: "Data-driven multi-channel strategies to reach target users and amplify brand authority.",
        bg: "from-fuchsia-500/10 to-pink-500/10",
        iconColor: "text-fuchsia-600",
        hoverBorder: "hover:border-fuchsia-200"
    },
    {
        icon: Code,
        title: "Web Development",
        desc: "Building high-performance, scalable enterprise-grade Web applications using modern tech stacks.",
        bg: "from-indigo-500/10 to-blue-500/10",
        iconColor: "text-indigo-600",
        hoverBorder: "hover:border-indigo-200"
    },
    {
        icon: Smartphone,
        title: "Mobile App Dev",
        desc: "Cross-platform mobile applications offering native experiences for iOS and Android devices.",
        bg: "from-emerald-500/10 to-teal-500/10",
        iconColor: "text-emerald-600",
        hoverBorder: "hover:border-emerald-200"
    },
    {
        icon: Database,
        title: "Cloud & DevOps",
        desc: "Cloud architecture, containerization, and CI/CD pipelines to slash operational overhead.",
        bg: "from-amber-500/10 to-orange-500/10",
        iconColor: "text-amber-600",
        hoverBorder: "hover:border-amber-200"
    },
    {
        icon: Shield,
        title: "Cyber Security",
        desc: "Comprehensive security audits, penetration testing, and compliance to protect your digital assets.",
        bg: "from-rose-500/10 to-red-500/10",
        iconColor: "text-rose-600",
        hoverBorder: "hover:border-rose-200"
    },
];

export default function ServicesSection() {
    return (
        <section className="py-24 lg:py-32 relative bg-[#FDFDFF]" id="services">
            {/* Soft Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-100/30 rounded-full blur-[120px]" />
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
                        <span className="w-10 h-[1px] bg-purple-400" />
                        <span className="text-xs font-black text-purple-600 tracking-[0.3em] uppercase">
                            Our Expertise
                        </span>
                        <span className="w-10 h-[1px] bg-purple-400" />
                    </motion.div>

                    <motion.h2 variants={fadeInUp(1)} className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                        Full-Spectrum Digital <br />
                        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Solutions</span>
                    </motion.h2>

                    <motion.p variants={fadeInUp(2)} className="mt-6 text-slate-500 text-lg leading-relaxed">
                        From initial concept to deployment and scaling, we provide a
                        comprehensive suite of services to power your digital transformation.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            variants={scaleIn}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.4, ease: "circOut" }
                            }}
                            className={`group relative bg-white rounded-[2rem] p-8 border border-slate-100 ${s.hoverBorder} transition-all duration-500 cursor-pointer hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)]`}
                        >
                            {/* Icon Box */}
                            <div className={`w-16 h-16 bg-gradient-to-br ${s.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm`}>
                                <s.icon className={`w-8 h-8 ${s.iconColor}`} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                                {s.title}
                            </h3>

                            <p className="text-slate-500 leading-relaxed text-sm mb-6">
                                {s.desc}
                            </p>

                            <div className="flex items-center gap-2 text-purple-600 text-sm font-bold tracking-tight">
                                <span className="relative">
                                    Learn More
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-600 group-hover:w-full transition-all duration-300" />
                                </span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                            </div>

                            {/* Corner Accent Decor */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity">
                                <s.icon className="w-12 h-12 rotate-12" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Code,
    BarChart3,
    CheckCircle,
    Play,
    Zap,
    Smartphone
} from "lucide-react";

const floatAnimation = {
    animate: {
        y: [0, -15, 0],
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
};

export default function HeroSection({ servicesRef }) {

    const handleScrollToServices = () => {
        const element = document.getElementById("services-section");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    const whatsappNumber = "916398802517";
    const message = encodeURIComponent("Hi! I'm interested in building a project with your agency. Can we discuss?");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-slate-50/50">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-[100px]" />
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #7c3aed 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Content */}
                <div className="text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-white border border-purple-100 shadow-sm rounded-full px-4 py-1.5 mb-8"
                    >
                        <Zap className="w-4 h-4 text-purple-600 fill-purple-600" />
                        <span className="text-[11px] font-bold text-purple-700 tracking-wider uppercase">
                            Modern Full-Stack Engineering
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-slate-900"
                    >
                        Building High-Performance{" "}
                        <span className="bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
                            Digital Products
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
                    >
                        We help founders and businesses ship production-ready web and mobile
                        applications. High-quality code, pixel-perfect design, and
                        scalable architecture—delivered in weeks, not months.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-10 flex flex-wrap justify-center lg:justify-start items-center gap-5"
                    >
                        <motion.a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-purple-600 transition-all shadow-lg shadow-slate-200"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Build My Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        <motion.button
                            className="inline-flex items-center gap-3 text-slate-700 font-semibold px-8 py-4 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-white transition-all shadow-sm"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleScrollToServices}
                        >
                            <Play className="w-4 h-4 fill-current" />
                            Our Services
                        </motion.button>
                    </motion.div>
                </div>

                {/* Right Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-full aspect-square flex items-center justify-center">

                        {/* Main Central UI Card */}
                        <motion.div
                            {...floatAnimation}
                            className="w-80 h-96 bg-white rounded-[2.5rem] shadow-2xl shadow-purple-200 border border-purple-50 p-8 z-20 flex flex-col justify-between"
                        >
                            <div className="space-y-6">
                                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Code className="w-8 h-8 text-white" />
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 w-24 bg-purple-100 rounded-full" />
                                    <div className="h-3 w-48 bg-slate-100 rounded-full" />
                                    <div className="h-3 w-40 bg-slate-100 rounded-full" />
                                </div>
                                <div className="pt-4 space-y-3">
                                    <div className="h-12 bg-slate-50 rounded-xl border border-slate-100 flex items-center px-4">
                                        <div className="w-full h-1.5 bg-green-400/20 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "80%" }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="h-full bg-green-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="h-12 bg-slate-50 rounded-xl border border-slate-100" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-purple-600 border-2 border-white" />
                                    <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-white" />
                                </div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Live Deployment</div>
                            </div>
                        </motion.div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 left-0 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 z-30"
                        >
                            <Zap className="w-8 h-8 text-amber-500" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -25, 0], rotate: [0, -8, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-20 right-0 w-24 h-24 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl shadow-xl flex items-center justify-center z-30"
                        >
                            <Smartphone className="w-10 h-10 text-white" />
                        </motion.div>

                        {/* New Metrics */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute top-1/2 -left-12 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-4 flex items-center gap-4 border border-white z-40"
                        >
                            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                                <BarChart3 className="w-6 h-6 text-indigo-600" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Site Speed</p>
                                <p className="text-lg font-black text-slate-800">98/100</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 }}
                            className="absolute bottom-10 left-1/4 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-4 flex items-center gap-4 border border-white z-40"
                        >
                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Uptime</p>
                                <p className="text-lg font-black text-slate-800">99.9%</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
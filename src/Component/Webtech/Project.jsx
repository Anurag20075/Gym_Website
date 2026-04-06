import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Tag } from "lucide-react";
import { fadeInUp, staggerContainer } from "./variants";

const projects = [
    {
        title: "E-Commerce Titan",
        category: "Web Development",
        image: "https://picsum.photos/seed/p1/800/600",
        size: "lg"
    },
    {
        title: "HealthTrack AI",
        category: "Mobile App",
        image: "https://picsum.photos/seed/p2/800/600",
        size: "sm"
    },
    {
        title: "Fintech Dashboard",
        category: "UI/UX Design",
        image: "https://picsum.photos/seed/p3/800/600",
        size: "sm"
    },
    {
        title: "Crypto Wallet v2",
        category: "Cyber Security",
        image: "https://picsum.photos/seed/p4/800/600",
        size: "lg"
    }
];

export default function ProjectSection() {
    return (
        <section className="py-24 bg-white" id="projects">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div className="max-w-xl">
                        <motion.span variants={fadeInUp(0)} className="text-purple-600 font-bold tracking-widest uppercase text-xs">Our Portfolio</motion.span>
                        <motion.h2 variants={fadeInUp(1)} className="text-4xl lg:text-5xl font-bold text-slate-900 mt-3 tracking-tight">
                            Selected <span className="text-purple-600">Works</span>
                        </motion.h2>
                    </div>
                    <motion.button variants={fadeInUp(2)} className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-purple-600 transition-colors">
                        View All Projects
                    </motion.button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`group relative rounded-[2rem] overflow-hidden bg-slate-100 ${project.size === "lg" ? "lg:col-span-2" : "col-span-1"
                                } h-[400px]`}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <div className="flex items-center gap-2 text-purple-400 mb-2">
                                    <Tag className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase tracking-wider">{project.category}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 hover:bg-white hover:text-purple-600 transition-all cursor-pointer">
                                        <ExternalLink className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
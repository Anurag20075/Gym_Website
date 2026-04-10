import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Tag } from "lucide-react";
import { FaGithub } from "react-icons/fa"; // Importing from Font Awesome
import { fadeInUp, staggerContainer } from "./variants";

const projects = [
    {
        title: "Alandi City Broadband",
        category: "ISP & Network Solutions",
        image: "https://picsum.photos/seed/isp/800/600",
        size: "lg",
        liveLink: "https://alandi-broad-band.vercel.app/",
        githubLink: "https://github.com/Anurag20075/Alandi_BroadBand.git"
    },
    {
        title: "Semantic Book Finder",
        category: "AI & Vector Search",
        image: "https://picsum.photos/seed/search/800/600",
        size: "sm",
        liveLink: "#",
        githubLink: "https://github.com/Anurag20075/book-recommender.git"
    },
    {
        title: "Course Management System",
        category: "Full-Stack SaaS",
        image: "https://picsum.photos/seed/edu/800/600",
        size: "sm",
        liveLink: "#",
        githubLink: "https://github.com/Anurag20075/Course-App.git"
    },
    {
        title: "Blog Website",
        category: "Full-Stack",
        image: "https://picsum.photos/seed/ai/800/600",
        size: "lg",
        liveLink: "#",
        githubLink: "https://github.com/Anurag20075/Blog_Project.git"
    }
];

export default function ProjectSection() {
    return (
        <section className="py-24 bg-white" id="projects">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div className="max-w-xl">
                        <motion.span variants={fadeInUp(0)} className="text-purple-600 font-bold tracking-widest uppercase text-xs">
                            Proof of Concept
                        </motion.span>
                        <motion.h2 variants={fadeInUp(1)} className="text-4xl lg:text-5xl font-bold text-slate-900 mt-3 tracking-tight">
                            Latest <span className="text-purple-600">Deployments</span>
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
                                } h-[400px] shadow-sm hover:shadow-2xl transition-all duration-500`}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <div className="flex items-center gap-2 text-purple-400 mb-2">
                                    <Tag className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase tracking-wider">{project.category}</span>
                                </div>

                                <div className="flex justify-between items-end">
                                    <h3 className="text-2xl font-bold text-white max-w-[60%]">{project.title}</h3>
                                    <div className="flex gap-3">
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-slate-900 transition-all"
                                            title="View Source Code"
                                        >
                                            {/* Changed Github to FaGithub below */}
                                            <FaGithub className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-purple-600 transition-all"
                                            title="Live Demo"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
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
import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Palette, Code, CheckCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "./variants";

const steps = [
    { num: "01", title: "需求分析", desc: "深入理解业务场景与目标用户，明确项目方向", icon: BarChart3 },
    { num: "02", title: "方案设计", desc: "制定技术架构与产品原型，确保可行性", icon: Palette },
    { num: "03", title: "敏捷开发", desc: "采用Scrum方法论，快速迭代持续交付", icon: Code },
    { num: "04", title: "测试上线", desc: "严格质量保障流程，确保稳定可靠上线", icon: CheckCircle },
];

export default function ProcessSection() {
    return (
        <section className="py-24 lg:py-32 bg-slate-50/50 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <motion.div variants={fadeInUp(0)} className="inline-flex items-center gap-2 mb-4">
                        <div className="w-8 h-0.5 bg-purple-500 rounded" />
                        <span className="text-xs font-bold text-purple-600 tracking-widest uppercase">工作流程</span>
                        <div className="w-8 h-0.5 bg-purple-500 rounded" />
                    </motion.div>
                    <motion.h2 variants={fadeInUp(1)} className="text-3xl lg:text-4xl font-bold text-slate-900">
                        高效协作的
                        <span className="bg-gradient-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">开发流程</span>
                    </motion.h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {steps.map((s, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp(i)}
                            whileHover={{ y: -6 }}
                            className="relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/5 transition-all group"
                        >
                            <span className="absolute top-4 right-4 text-5xl font-black text-slate-100 group-hover:text-purple-50 transition-colors">
                                {s.num}
                            </span>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
                                    <s.icon className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-2">{s.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                            </div>
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-purple-200" />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
import React from "react";
import { motion } from "framer-motion";
import { Palette, Megaphone, Code, Smartphone, Database, Shield, ArrowRight } from "lucide-react";
import { fadeInUp, scaleIn, staggerContainer } from "./variants";

const services = [
    {
        icon: Palette,
        title: "UI/UX 设计",
        desc: "以用户为中心的设计理念，打造直觉化、高转化的数字产品体验。",
        bg: "bg-purple-50",
        iconColor: "text-purple-600",
    },
    {
        icon: Megaphone,
        title: "数字营销",
        desc: "数据驱动的全渠道营销策略，精准触达目标用户，提升品牌影响力。",
        bg: "bg-fuchsia-50",
        iconColor: "text-fuchsia-600",
    },
    {
        icon: Code,
        title: "Web 开发",
        desc: "采用前沿技术栈构建高性能、可扩展的企业级Web应用与平台。",
        bg: "bg-indigo-50",
        iconColor: "text-indigo-600",
    },
    {
        icon: Smartphone,
        title: "移动应用开发",
        desc: "跨平台原生体验的移动应用，覆盖iOS与Android全终端。",
        bg: "bg-emerald-50",
        iconColor: "text-emerald-600",
    },
    {
        icon: Database,
        title: "云服务与DevOps",
        desc: "云端架构设计、容器化部署与持续集成，降低运维成本。",
        bg: "bg-amber-50",
        iconColor: "text-amber-600",
    },
    {
        icon: Shield,
        title: "网络安全",
        desc: "全方位安全评估、渗透测试与合规咨询，守护数字资产安全。",
        bg: "bg-rose-50",
        iconColor: "text-rose-600",
    },
];

export default function ServicesSection() {
    return (
        <section className="py-24 lg:py-32 relative" id="services">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-100/40 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <motion.div variants={fadeInUp(0)} className="inline-flex items-center gap-2 mb-4">
                        <div className="w-8 h-0.5 bg-purple-500 rounded" />
                        <span className="text-xs font-bold text-purple-600 tracking-widest uppercase">独家服务</span>
                        <div className="w-8 h-0.5 bg-purple-500 rounded" />
                    </motion.div>
                    <motion.h2 variants={fadeInUp(1)} className="text-3xl lg:text-4xl font-bold text-slate-900">
                        全方位数字服务
                        <span className="bg-gradient-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">解决方案</span>
                    </motion.h2>
                    <motion.p variants={fadeInUp(2)} className="mt-4 text-slate-500 leading-relaxed">
                        从设计到开发，从营销到安全，我们提供一站式的数字化转型服务
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            variants={scaleIn}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group bg-white rounded-2xl p-7 border border-slate-100 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 transition-all cursor-pointer"
                        >
                            <div className={`w-14 h-14 ${s.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                <s.icon className={`w-7 h-7 ${s.iconColor}`} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-purple-700 transition-colors">
                                {s.title}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed mb-4">{s.desc}</p>
                            <div className="flex items-center gap-1 text-purple-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                了解详情 <ArrowRight className="w-3.5 h-3.5" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
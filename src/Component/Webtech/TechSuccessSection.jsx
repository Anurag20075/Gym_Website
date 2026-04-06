import React from "react";
import { motion } from "framer-motion";
import { Users, CheckCircle, ChevronRight } from "lucide-react";
import { fadeInLeft, fadeInUp, staggerContainer } from "./variants";
import AnimatedCounter from "./AnimatedCounter";

export default function TechSuccessSection() {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInLeft}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/10">
                            <img
                                src="https://picsum.photos/seed/webteck-team-office/700/500.jpg"
                                alt="团队协作"
                                className="w-full h-[400px] lg:h-[480px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent" />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-purple-50"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-slate-800">
                                        <AnimatedCounter target={150} suffix="+" />
                                    </p>
                                    <p className="text-xs text-slate-400">专业团队成员</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp(0)} className="inline-flex items-center gap-2 mb-4">
                            <div className="w-8 h-0.5 bg-purple-500 rounded" />
                            <span className="text-xs font-bold text-purple-600 tracking-widest uppercase">关于我们</span>
                        </motion.div>

                        <motion.h2 variants={fadeInUp(1)} className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                            我们用技术提升
                            <span className="bg-gradient-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">商业成功</span>
                        </motion.h2>

                        <motion.p variants={fadeInUp(2)} className="mt-5 text-slate-500 leading-relaxed">
                            自2000年成立以来，WebTeck始终走在技术创新前沿。我们汇聚全球顶尖技术人才，深度理解各行业痛点，以数字化手段为客户创造可衡量的商业价值。
                        </motion.p>

                        <motion.div variants={fadeInUp(3)} className="mt-8 space-y-4">
                            {[
                                "端到端的数字化解决方案，从战略咨询到落地实施",
                                "敏捷开发方法论，确保项目快速迭代与高质量交付",
                                "7×24小时技术支持，保障业务持续稳定运行",
                                "ISO 27001信息安全认证，数据安全有保障",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <CheckCircle className="w-3.5 h-3.5 text-purple-600" />
                                    </div>
                                    <span className="text-sm text-slate-600">{item}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div variants={fadeInUp(4)} className="mt-8">
                            <motion.a
                                href="#"
                                className="group inline-flex items-center gap-2 text-purple-600 font-semibold text-sm hover:text-purple-700"
                                whileHover={{ x: 4 }}
                            >
                                了解更多关于我们
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
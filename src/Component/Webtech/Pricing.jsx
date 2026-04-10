import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "215",
        desc: "Perfect for local businesses and landing pages.",
        features: ["Local Business Focused", "Responsive Design", "Custom UI/UX", "SEO Ready", "7-10 Days Delivery"],
        highlight: false
    },
    {
        name: "Growth & E-Com",
        price: "430",
        desc: "Ideal for expanding online stores and dynamic sites.",
        features: ["Everything in Starter", "CMS Control Panel", "Payment Gateway", "Lead Tracking", "Admin Dashboard"],
        highlight: true
    },
    {
        name: "Advanced",
        price: "1,080",
        desc: "Complex SaaS and multi-vendor solutions.",
        features: ["Custom SaaS Solutions", "Multi-vendor Platforms", "API Integrations", "Advanced Security", "Priority Support"],
        highlight: false
    }
];

export default function PriceSection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Transparent <span className="text-purple-600">Pricing</span></h2>
                    <p className="mt-4 text-slate-500">Scalable solutions for your digital growth. Prices converted at ₹92.66/USD.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative p-10 rounded-[2.5rem] transition-all duration-300 ${plan.highlight
                                ? "bg-slate-900 text-white shadow-2xl shadow-purple-500/20 scale-105 z-10"
                                : "bg-white text-slate-900 border border-slate-100"
                                }`}
                        >
                            {plan.highlight && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                                    Most Popular
                                </span>
                            )}

                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <p className={`text-sm mb-8 ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>{plan.desc}</p>

                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-4xl font-black">${plan.price}</span>
                                <span className="text-sm opacity-60">/start</span>
                            </div>

                            <div className="space-y-4 mb-10">
                                {plan.features.map((feat, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? "bg-purple-500/20" : "bg-purple-100"}`}>
                                            <Check className={`w-3 h-3 ${plan.highlight ? "text-purple-400" : "text-purple-600"}`} />
                                        </div>
                                        <span className="text-sm font-medium">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group ${plan.highlight
                                ? "bg-purple-600 text-white hover:bg-purple-500"
                                : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                                }`}>
                                Get Started
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
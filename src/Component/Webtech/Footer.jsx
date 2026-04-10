import React from "react";
import { Zap, Send } from "lucide-react";

const footerLinks = {
    "Services": ["UI/UX Design", "Web Development", "Mobile Apps", "Digital Marketing", "Cloud Services", "Cybersecurity"],
    "Company": ["About Us", "Our Team", "Our Journey", "Company Culture", "Careers"],
    "Support": ["Help Center", "Documentation", "API Reference", "Privacy Policy", "Service Terms"],
};

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 pb-16 border-b border-slate-800/60">

                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="group relative">
                                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur transition duration-200 group-hover:opacity-100"></div>
                                <div className="relative w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-700">
                                    <Zap className="w-6 h-6 text-white fill-purple-500" />
                                </div>
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">Elevate WebWork</span>
                        </div>

                        <p className="text-sm leading-7 text-slate-400 max-w-sm">
                            Empowering digital transformation for over 24 years. We build trusted solutions
                            using cutting-edge technology to drive global business growth.
                        </p>

                        {/* <div className="flex items-center gap-4">
                            {[Twitter, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-purple-500 hover:text-white transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div> */}
                    </div>

                    {/* Navigation Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="lg:col-span-1">
                            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">{title}</h4>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm transition-all duration-200 hover:text-purple-400 hover:translate-x-1 inline-block">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter / Contact Hint */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Stay Updated</h4>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-slate-900 border border-slate-800 rounded-lg py-2 px-4 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                            />
                            <button className="absolute right-1 top-1 p-1.5 bg-purple-600 rounded-md hover:bg-purple-500 transition-colors">
                                <Send className="w-4 h-4 text-white" />
                            </button>
                        </div>
                        <p className="mt-4 text-[11px] text-slate-500 italic">
                            Subscribe to get our latest news and tech insights.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 flex flex-col md:row-row items-center justify-between gap-6">
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <p className="text-xs text-slate-500">
                            © {new Date().getFullYear()} WebTeck Inc. Built with precision for the modern web.
                        </p>
                    </div>

                    <div className="flex items-center gap-8">
                        {["Privacy Policy", "Terms of Service", "Cookies"].map((t) => (
                            <a key={t} href="#" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-tighter">
                                {t}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer >
    );
}
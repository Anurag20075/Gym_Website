import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X, ArrowRight } from "lucide-react";

const links = [
    // { name: "Home", href: "/" },
    // { name: "About", href: "/webtech/about" },
    // { name: "Services", href: "/webtech/services" },
    // // { name: "Portfolio", href: "#" },
    // { name: "Team", href: "/webtech/team" },
    // { name: "Contact", href: "/webtech/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const whatsappNumber = "916398802517";
    const message = encodeURIComponent("Hi! I'm interested in building a project with your agency. Can we discuss?");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-500 ${scrolled
                ? "bg-white/70 backdrop-blur-md border-b border-slate-200/50 shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#"
                    className="flex items-center gap-2.5 group"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center shadow-indigo-200 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <Zap className="w-6 h-6 text-white fill-current" />
                    </div>
                    <span className="text-2xl font-black tracking-tight text-slate-900">
                        Elevate<span className="text-indigo-600">Web</span>Work
                    </span>
                </motion.a>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-1">
                    {links.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 rounded-full transition-colors relative"
                            whileHover={{ backgroundColor: "rgba(79, 70, 229, 0.05)" }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-6">

                    <motion.button
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px -10px rgba(79, 70, 229, 0.5)" }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold tracking-wide"
                        onClick={() => window.open(whatsappUrl, "_blank")}
                    >
                        Free Consultation
                        <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-900"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 lg:hidden"
                    >
                        <div className="flex flex-col gap-2">
                            {links.map((link, i) => (
                                <motion.a
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-bold text-slate-800 p-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-all"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <hr className="my-2 border-slate-100" />
                            <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg">
                                Free Consultation
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    initial: {},
    whileInView: {
        transition: { staggerChildren: 0.15 }
    },
    viewport: { once: true }
};

// Custom gradient orb component for the floating background blobs
const GradientOrb = ({ className, color1, color2 }) => (
    <div
        className={`absolute rounded-full blur-3xl opacity-40 pointer-events-none ${className}`}
        style={{
            background: `radial-gradient(circle, ${color1}, ${color2})`
        }}
    />
);

// Decorative dot pattern background
const DotPattern = ({ className }) => (
    <div className={`absolute pointer-events-none ${className}`}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="#7c3aed" opacity="0.15" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
    </div>
);

// Custom company logos as simple SVG representations
const QuantumLogo = () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
        <circle cx="16" cy="16" r="14" fill="none" stroke="#2563eb" strokeWidth="2.5" />
        <path d="M8 16 Q16 8 24 16 Q16 24 8 16" fill="none" stroke="#2563eb" strokeWidth="2" />
        <circle cx="16" cy="16" r="3" fill="#2563eb" />
    </svg>
);

const InnovateLogo = () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
        <rect x="4" y="4" width="10" height="10" rx="2" fill="#1e40af" transform="rotate(45 9 9)" />
        <rect x="14" y="14" width="10" height="10" rx="2" fill="#3b82f6" transform="rotate(45 19 19)" />
    </svg>
);

const BrightLogo = () => (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
        <path d="M16 4 L20 12 L28 14 L22 20 L24 28 L16 24 L8 28 L10 20 L4 14 L12 12 Z" fill="#7c3aed" />
    </svg>
);

// TechCrunch text logo
const TechCrunchLogo = () => (
    <div className="flex items-center gap-1 text-gray-400">
        <span className="font-bold text-lg tracking-tighter">TC</span>
        <span className="font-semibold text-sm">TechCrunch</span>
    </div>
);

// Forbes text logo
const ForbesLogo = () => (
    <span className="font-serif font-bold text-xl text-gray-400 italic">Forbes</span>
);

// Y Combinator logo
const YCLogo = () => (
    <div className="flex items-center gap-1 text-gray-400">
        <div className="w-5 h-5 bg-gray-400 rounded-sm flex items-center justify-center">
            <span className="text-white text-xs font-bold">Y</span>
        </div>
        <span className="text-sm font-medium">Combinator</span>
    </div>
);

// Mario logo (stylized M)
const MarioLogo = () => (
    <div className="flex items-center gap-1 text-gray-400">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M4 20 L4 4 L12 12 L20 4 L20 20" />
        </svg>
        <span className="text-sm font-medium">Mario</span>
    </div>
);

// Generic circle logo
const CircleLogo = () => (
    <div className="flex items-center gap-1 text-gray-400">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8 L12 16 M8 12 L16 12" />
        </svg>
    </div>
);

const TestimonialCard = ({ testimonial, index }) => {
    return (
        <motion.div
            variants={fadeInUp}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="relative bg-white rounded-3xl p-8 border border-purple-100 shadow-lg shadow-purple-50/50 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300"
        >
            {/* Sparkle decoration top right */}
            <div className="absolute top-4 right-4">
                <Sparkles className="w-5 h-5 text-purple-400" />
            </div>

            {/* Avatar */}
            <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-purple-100 ring-2 ring-purple-50">
                    <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            // Fallback to initials if image fails
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `<div class="w-full h-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-lg">${testimonial.initials}</div>`;
                        }}
                    />
                </div>
            </div>

            {/* Category label */}
            <h3 className="text-center font-bold text-gray-900 text-lg mb-4">
                {testimonial.category}
            </h3>

            {/* Quote with decorative marks */}
            <div className="relative px-4 mb-6">
                <Quote className="absolute -left-1 -top-2 w-6 h-6 text-gray-200 transform -scale-x-100" />
                <p className="text-center text-gray-600 text-sm leading-relaxed">
                    {testimonial.quote}
                </p>
                <Quote className="absolute -right-1 -bottom-2 w-6 h-6 text-gray-200" />
            </div>

            {/* Author info */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-50">
                <div className="flex items-center gap-3">
                    <testimonial.CompanyLogo />
                    <div>
                        <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                </div>
                {/* Star rating */}
                <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                            key={star}
                            className={`w-4 h-4 ${star <= testimonial.rating ? 'text-amber-400' : 'text-gray-200'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const ClientTestimonials = () => {
    const testimonials = [
        {
            category: 'UI/UX',
            quote: 'The design team delivered an intuitive interface that boosted our user conversion by 45% in just weeks.',
            name: 'Alice Chen',
            role: 'CEO, Quantum Dynamics',
            initials: 'AC',
            rating: 5,
            CompanyLogo: QuantumLogo,
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face'
        },
        {
            category: 'Web Development',
            quote: 'Scalable, clean code. They shipped our full-stack application on schedule, and it\'s built to last.',
            name: 'Mark Rodriguez',
            role: 'CTO, InnovateHub',
            initials: 'MR',
            rating: 5,
            CompanyLogo: InnovateLogo,
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
        },
        {
            category: 'Digital Marketing',
            quote: 'Their data-driven strategies transformed our multi-channel outreach. Brand awareness has quadrupled.',
            name: 'Samantha Lee',
            role: 'Founder, BrightFuture',
            initials: 'SL',
            rating: 5,
            CompanyLogo: BrightLogo,
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
        }
    ];

    const partners = [
        { name: 'TechCrunch', Logo: TechCrunchLogo },
        { name: 'Forbes', Logo: ForbesLogo },
        { name: 'Y Combinator', Logo: YCLogo },
        { name: 'Mario', Logo: MarioLogo },
        { name: 'Generic', Logo: CircleLogo }
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-purple-50/30 via-white to-purple-50/20">
            {/* Background decorative elements */}
            <DotPattern className="inset-0 opacity-60" />

            {/* Floating gradient orbs */}
            <GradientOrb
                className="w-72 h-72 -top-20 -left-20"
                color1="rgba(139, 92, 246, 0.4)"
                color2="rgba(167, 139, 250, 0.1)"
            />
            <GradientOrb
                className="w-96 h-96 -top-10 right-0"
                color1="rgba(124, 58, 237, 0.3)"
                color2="rgba(139, 92, 246, 0.05)"
            />
            <GradientOrb
                className="w-64 h-64 bottom-40 -right-20"
                color1="rgba(139, 92, 246, 0.35)"
                color2="rgba(167, 139, 250, 0.1)"
            />
            <GradientOrb
                className="w-48 h-48 bottom-20 left-10"
                color1="rgba(167, 139, 250, 0.3)"
                color2="rgba(196, 181, 253, 0.05)"
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    {/* Label with lines */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px w-12 bg-purple-400" />
                        <span className="text-purple-700 font-semibold text-sm tracking-[0.2em] uppercase">
                            Client Testimonials
                        </span>
                        <div className="h-px w-12 bg-purple-400" />
                    </div>

                    {/* Main heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        What Our Clients Say{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                            About Us
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        Real experiences from companies that have accelerated their growth
                        with our engineering, design, and marketing services.
                    </p>
                </motion.div>

                {/* Testimonial Cards */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20"
                >
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
                    ))}
                </motion.div>

                {/* Trusted Partners */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                >
                    <p className="text-gray-400 text-sm mb-8">Trusted partner logos</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
                        {partners.map((partner) => (
                            <partner.Logo key={partner.name} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ClientTestimonials;
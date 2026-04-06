export const fadeInUp = (i = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    },
});

export const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

export const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

export const floatAnimation = {
    animate: {
        y: [0, -12, 0],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
};

export const pulseGlow = {
    animate: {
        boxShadow: [
            "0 0 20px rgba(124,58,237,0.2)",
            "0 0 40px rgba(124,58,237,0.4)",
            "0 0 20px rgba(124,58,237,0.2)",
        ],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
};
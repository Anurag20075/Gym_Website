import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

export default function AnimatedCounter({ target, suffix = "", duration = 2 }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, target, {
                duration: duration,
                ease: [0.33, 1, 0.68, 1],
            });
            return controls.stop;
        }
    }, [isInView, target, duration, count]);

    return (
        <span ref={ref}>
            {/* IMPORTANT: Pass 'rounded' to the children of a motion component. 
               Framer Motion will handle the object-to-string conversion internally.
            */}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
}
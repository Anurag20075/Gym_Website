import React from "react";

export default function AnimatedCounter({ target, suffix = "" }) {
    const [count, setCount] = React.useState(0);
    const ref = React.useRef(null);
    const inView = React.useRef(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !inView.current) {
                    inView.current = true;
                    let start = 0;
                    const duration = 2000;
                    const step = target / (duration / 16);
                    const timer = setInterval(() => {
                        start += step;
                        if (start >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return <span ref={ref}>{count}{suffix}</span>;
}
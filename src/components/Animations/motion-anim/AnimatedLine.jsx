"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";

export default function AnimatedLine({ width = "100%", height = "1px", color = "var(--color-primary-text)", duration = 0.7, delay = 0.5, className = "", style = {} }) {
  const pathname = usePathname();
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let hasAnimated = false;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (!hasAnimated && entry.intersectionRatio >= 0.25) {
          setInView(true);
          hasAnimated = true;
          observer.disconnect();
        }
      },
      { threshold: [0, 0.25, 1] }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      ref={ref}
      className={`pointer-events-none ${className}`}
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration, delay, ease: [0.4, 0, 0.2, 1] }}
      style={{
        width,
        height,
        backgroundColor: color,
        transformOrigin: "left",
        ...style,
      }}
    />
  );
}

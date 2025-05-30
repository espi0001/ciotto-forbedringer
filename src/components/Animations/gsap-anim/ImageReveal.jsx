"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ImageReveal({ animateOnScroll = true, delay = 0, duration = 1.2, maskColor = "#e7ded0ff", className = "", style = {}, children, ...props }) {
  const containerRef = useRef(null);
  const maskRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current || !maskRef.current) return;

      gsap.set(maskRef.current, { scaleX: 1, transformOrigin: "right" });

      const animationProps = {
        scaleX: 0,
        duration: 2.5,
        ease: "power4.inOut",
        delay,
      };

      if (animateOnScroll) {
        gsap.to(maskRef.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        });
      } else {
        gsap.to(maskRef.current, animationProps);
      }
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay, duration, maskColor] }
  );

  return (
    <div
      ref={containerRef}
      className={`image-reveal-container ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        display: "inline-block",
        // width: "100%",
        width: "auto",
        height: "100%",
        ...style,
      }}
      {...props}
    >
      {children}
      <div
        ref={maskRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: maskColor,
          zIndex: 2,
          pointerEvents: "none",
          willChange: "transform",
        }}
      />
    </div>
  );
}

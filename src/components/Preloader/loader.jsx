"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import Image from "next/image";
import TextAnimation from "../Animations/gsap-anim/TextAnimation";

// Register the CustomEase plugin
gsap.registerPlugin(CustomEase);

export default function Loader({ loadingImages = [], children }) {
  const overlayRef = useRef(null);
  const loadingImagesContainerRef = useRef(null);
  const progressTextRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  const [maskDone, setMaskDone] = useState(false);
  const [shouldShowLoader, setShouldShowLoader] = useState(true);

  // Only show loader once per session
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("ciotto-loader-shown")) {
        setShouldShowLoader(false);
      } else {
        setShouldShowLoader(true);
      }
    }
  }, []);

  // Animate progress from 0 to 100 using GSAP with ease, after animation
  useEffect(() => {
    if (!showCounter || !shouldShowLoader) return;
    const progressObj = { value: 0 };
    const tween = gsap.to(progressObj, {
      value: 100,
      duration: 3,
      ease: "power2.out",
      onUpdate: () => setProgress(Math.floor(progressObj.value)),
    });
    return () => tween.kill();
  }, [showCounter, shouldShowLoader]);

  // Entrance animation on mount (only for images and progress)
  useEffect(() => {
    if (!shouldShowLoader) return;
    CustomEase.create("hop", ".8, 0, .3, 1");
    gsap.set(loadingImagesContainerRef.current, { height: "400px", opacity: 1 });
    gsap.set(".loading-image", { height: 0 });
    gsap.set(progressTextRef.current, { opacity: 1 });
    // Set initial polygon clip-path on overlay
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", pointerEvents: "auto" });
    }
    const tl = gsap.timeline({ defaults: { ease: "hop" } });
    tl.to(".loading-image", {
      height: "400px",
      duration: 0.75,
      stagger: 0.4,
      delay: 1,
    });
    return () => tl.kill();
  }, [shouldShowLoader]);

  // Show the live counter after the animation (delay + duration)
  useEffect(() => {
    if (!shouldShowLoader) return;
    const totalDelay = 1; // delay + TextAnimation duration
    const timeout = setTimeout(() => setShowCounter(true), totalDelay * 1000);
    return () => clearTimeout(timeout);
  }, [shouldShowLoader]);

  // Exit animation when progress reaches 100
  useEffect(() => {
    if (progress < 100 || !shouldShowLoader) return;
    const tl = gsap.timeline({
      defaults: { ease: "hop" },
      onStart: () => {
        if (overlayRef.current) overlayRef.current.style.pointerEvents = "none";
      },
      onComplete: () => {
        setMaskDone(true);
        if (typeof window !== "undefined") {
          sessionStorage.setItem("ciotto-loader-shown", "true");
        }
      },
    });
    // Animate images out
    tl.to(
      ".loading-image",
      {
        height: 0,
        duration: 0.75,
      },
      "+=0.5"
    );
    // Fade out progress and text and animate mask at the same time
    tl.to([progressTextRef.current, overlayRef.current.querySelector(".loading-info")], { opacity: 0, duration: 0.75 }, "+=0");
    tl.to(
      overlayRef.current,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.75,
        ease: "hop",
      },
      "<" // start at the same time as previous
    );
    return () => tl.kill();
  }, [progress, shouldShowLoader]);

  if (!shouldShowLoader) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      {!maskDone && (
        <div
          ref={overlayRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            background: "var(--color-body-bg, #e7ded0)",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: progress < 100 ? "auto" : "none",
          }}
        >
          <div className="w-[400px] mx-auto flex flex-col items-center">
            {/* Loading images container */}
            <div ref={loadingImagesContainerRef} className="w-full overflow-hidden mb-8 relative" style={{ height: "400px" }}>
              {loadingImages.map((src, index) => (
                <div key={index} className="loading-image absolute inset-x-0 bottom-0 h-full" style={{ height: 0, zIndex: index + 1 }}>
                  <div className="relative h-full">
                    <Image src={src || "/placeholder.svg"} alt={`Loading image ${index + 1}`} fill className="object-cover" priority />
                  </div>
                </div>
              ))}
            </div>
            {/* Loading info section */}
            <div className="loading-info w-full flex justify-between items-center">
              <div className="overflow-hidden">
                <TextAnimation animateOnScroll={false} delay={0.5}>
                  <span className="text-xs">CIOTTO</span>
                </TextAnimation>
              </div>
              <div className="overflow-hidden min-w-[3ch] flex justify-end">
                {!showCounter ? (
                  <TextAnimation animateOnScroll={false} delay={0.5}>
                    <span ref={progressTextRef} className="text-xs">
                      0%
                    </span>
                  </TextAnimation>
                ) : (
                  <span ref={progressTextRef} className="text-xs">
                    {progress}%
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

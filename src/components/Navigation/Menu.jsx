"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import NavLinks from "./Navigation";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";
import AnimatedLine from "../Animations/motion-anim/AnimatedLine";

export default function Menu() {
  const [hovered, setHovered] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [worksOpen, setWorksOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const isDesktopView = window.innerWidth >= 1024;
      setIsDesktop(isDesktopView);
      if (isDesktopView) {
        setIsBurgerOpen(false);
      }
    };

    // Initial check
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const burgerVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  // Color for nav and plus icon
  const navColor = "#402d1f";
  const effectiveNavColor = worksOpen ? "#402d1f" : navColor;
  const burgerMenuIconColor = isBurgerOpen ? "var(--color-primary-text)" : "var(--color-primary-text)";
  const animatedLineColor = isBurgerOpen ? "var(--color-primary-text)" : "var(--color-primary-text)";

  return (
    <header ref={navRef} className="relative w-full flex justify-between items-center py-4 pt-8 px-section z-50" style={{ color: effectiveNavColor }}>
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center w-full" style={{ color: effectiveNavColor }}>
        {/* Logo and Address Block */}
        <motion.div className="flex items-center gap-4 md:gap-12 group relative z-50" initial="hidden" animate="visible" variants={navVariants}>
          {/* Logo */}
          <div>
            <Logo color={effectiveNavColor} className="relative z-30 logo-size" />
          </div>
          {/* EST - 2025 and Address */}
          <a href="https://www.google.com/maps/search/?api=1&query=Godthåbsvej+18A,+2000+Frederiksberg" target="_blank" rel="noopener noreferrer" className="w-[180px] h-[48px] ml-2 z-30 cursor-pointer hidden md:block" tabIndex={0}>
            <motion.div className="nav-adress-text relative overflow-hidden h-full w-full flex flex-col justify-center font-normal whitespace-nowrap" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
              <motion.div className="flex w-[360px] h-full" animate={{ x: hovered ? -180 : 0 }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}>
                <span className="select-none w-[180px] h-full flex items-center uppercase">Café & Showroom</span>
                <span className="w-[180px] h-full flex flex-col justify-center whitespace-nowrap">
                  <span>Godthåbsvej 18A,</span>
                  <span>2000 Frederiksberg</span>
                </span>
              </motion.div>
            </motion.div>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <AnimatePresence mode="wait">
          {isDesktop && (
            <motion.div className="hidden lg:block" initial="hidden" animate="visible" exit="hidden" variants={navVariants}>
              <NavLinks navColor={navColor} setWorksOpen={setWorksOpen} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Burger Menu Button - Mobile Only */}
      {!isDesktop && (
        <div className="left-0 w-screen z-50 pointer-events-none">
          <div className="flex items-center justify-end">
            <motion.div initial="hidden" animate="visible" exit="hidden" variants={burgerVariants}>
              <button className="w-8 h-8 flex items-center justify-center cursor-pointer pointer-events-auto" onClick={() => setIsBurgerOpen((open) => !open)} aria-label="Toggle menu" style={{ color: burgerMenuIconColor }}>
                <div className="relative w-6 h-6">
                  {/* Top bar */}
                  <div
                    className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transition-all duration-500 ease-in-out
                      ${isBurgerOpen ? "rotate-45 -translate-y-1/2" : "-translate-y-1.5"}
                    `}
                    style={{ backgroundColor: burgerMenuIconColor }}
                  />
                  {/* Bottom bar */}
                  <div
                    className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transition-all duration-500 ease-in-out
                      ${isBurgerOpen ? "-rotate-45 -translate-y-1/2" : "translate-y-1"}
                    `}
                    style={{ backgroundColor: burgerMenuIconColor }}
                  />
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      <BurgerMenu isOpen={isBurgerOpen} onClose={() => setIsBurgerOpen(false)} textColor="var(--color-primary-text)" />

      {/* Animated Line at Bottom */}
      <AnimatedLine width="100%" height="1px" color={animatedLineColor} duration={0.7} delay={0.5} className="absolute left-0 bottom-0 w-full z-50" style={{ position: "absolute", left: 0, bottom: 0 }} />
    </header>
  );
}

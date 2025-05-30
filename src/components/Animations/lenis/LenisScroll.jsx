"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true, // true = den automatisk bruger requestAnimationFrame til at opdatere scroll-animationer
    });

    lenis.on("scroll", (e) => {
      // lytter til scoll-events
      console.log(e); // logger det i konsollen
    });

    return () => {
      lenis.destroy(); // ryder op ved lenis.destroy() når komponenten fjernes
    };
  }, []);
};

export default useLenis;

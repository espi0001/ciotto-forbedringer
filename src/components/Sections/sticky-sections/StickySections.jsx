"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Copy from "../../Animations/gsap-anim/TextAnimation";

const sections = [
  {
    title: "Unique furniture",
    description: "Handmade furniture with unique shapes & details",
    image: {
      src: "/image/landing/sektions_furniture.jpg",
      alt: "Handmade furniture",
      width: 1440,
      height: 900,
    },
    number: 1,
  },
  {
    title: "Ceramic works",
    description: "Nothing is mass produced. Each piece is made with care and intention",
    image: {
      src: "/image/landing/sektions_coffe-bar.jpg",
      alt: "Ciotto cups",
      width: 1440,
      height: 900,
    },
    number: 2,
  },
  {
    title: "Coffee Bar",
    description: "Slow down and enjoy a lovely brewed cup of coffee at Ciotto Bar",
    image: {
      src: "/image/landing/sektions_ceramic.jpg",
      alt: "Ciotto cup with coffee in it",
      width: 1440,
      height: 900,
    },
    number: 3,
  },
];

// Inline StickySection component
function StickySection({ title, description, image, number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <section ref={ref} className="sticky top-0 h-screen w-full flex items-center justify-center bg-[#e7ded0] overflow-hidden" style={{ zIndex: 1 }}>
      <div className="px-section text-secondary-text relative flex justify-between items-start h-full w-full pt-[112px] z-10">
        <div className="flex flex-col">
          <Copy>
            <h2 className="h2-medium mb-8 font-semibold">{title}</h2>
            <p className="p-product uppercase mb-8">{description}</p>
          </Copy>
        </div>
        <p className="logo-size">({number})</p>
      </div>
      {image && image.src && (
        <motion.div
          style={{
            scale,
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          <Image quality={100} width={image.width} height={image.height} className="object-cover h-screen w-full" src={image.src} alt={image.alt} priority />
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 60%)",
              zIndex: 1,
            }}
          />
        </motion.div>
      )}
    </section>
  );
}

export default function StickySections() {
  return (
    <div className="relative min-h-[${sections.length * 100}vh] section-spacing">
      {sections.map((section, i) => (
        <StickySection key={i} {...section} />
      ))}
    </div>
  );
}

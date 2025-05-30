import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AppLink from "./NavLink";
import { mainLinks } from "../../data/navLinks";
import WorksDropdown from "./WorksDropdown";
import Logo from "./Logo";

const menuVariants = {
  closed: {
    height: 0,
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.32, 1],
    },
  },
  open: {
    height: "90vh",
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const blurVariant = {
  focused: { opacity: 1, filter: "blur(0px)" },
  blurred: { opacity: 0.4, filter: "blur(2px)" },
  initial: { opacity: 1, filter: "blur(0px)" },
};

export default function BurgerMenu({ isOpen, onClose, textColor = "var(--color-primary-text)" }) {
  const [worksOpen, setWorksOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mainHoveredIndex, setMainHoveredIndex] = useState(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div variants={menuVariants} initial="closed" animate="open" exit="closed" className="absolute inset-0 w-screen z-40 bg-[#CAB696] overflow-y-auto border-b border-primary-text/20">
          <div className="pt-32">
            <div className="w-full px-6 flex gap-8 px-section">
              {/* Left column: nav links */}
              <div className="flex flex-col flex-1 space-y-12">
                {/* Nav Links */}
                <div className="flex flex-col items-center md:items-start space-y-6 uppercase" style={{ color: textColor }}>
                  {mainLinks.map((link, idx) => (
                    <motion.div
                      key={link.label}
                      variants={blurVariant}
                      initial="initial"
                      animate={mainHoveredIndex === null ? "initial" : mainHoveredIndex === idx ? "focused" : "blurred"}
                      onMouseEnter={() => setMainHoveredIndex(idx)}
                      onMouseLeave={() => setMainHoveredIndex(null)}
                      transition={{
                        duration: 1,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                    >
                      {link.dropdown ? (
                        <>
                          <AppLink
                            href={link.href}
                            underline={false}
                            className="burger-links uppercase font-normal tracking-wide flex items-center cursor-pointer group"
                            onClick={(e) => {
                              e.preventDefault();
                              setWorksOpen((open) => !open);
                            }}
                            onKeyPress={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                setWorksOpen((open) => !open);
                              }
                            }}
                            tabIndex={0}
                            role="button"
                            style={{ userSelect: "none" }}
                          >
                            {link.label}
                            <span className={`ml-1 text-lg font-semibold transition-transform duration-300 ${worksOpen ? "rotate-45" : ""}`} style={{ color: "#402d1f" }}>
                              +
                            </span>
                          </AppLink>
                          <WorksDropdown
                            open={worksOpen} //
                            setOpen={setWorksOpen}
                            hoveredIndex={hoveredIndex}
                            setHoveredIndex={setHoveredIndex}
                            onClose={onClose}
                            context="burger"
                            textColor={textColor}
                          />
                        </>
                      ) : (
                        <AppLink
                          href={link.href} //
                          onClick={onClose}
                          underline={true}
                          highlighted={link.highlighted}
                          extrabold={link.label === "Ciotto Bar"}
                          underlineColor={link.label === "Ciotto Bar" ? "bg-tertiary-text" : undefined}
                          className={link.label === "Ciotto Bar" ? "text-tertiary-text burger-links" : "burger-links"}
                        >
                          {link.label}
                        </AppLink>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Right column: Big image only */}
              <div className="md:flex flex-col flex-1 items-end justify-center hidden">
                <div className="w-full flex justify-end">
                  {/* <Image width={400} height={600} src="/image/andra.avif" alt="Placeholder" className="object-cover w-[350px] h-[400px]" /> */}
                  <Image width={400} height={600} src="https://tgjjsvjkhezqddxxcfsb.supabase.co/storage/v1/object/sign/works-images/andra-landing.avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzIwYTRhMjdmLWM3OTAtNGY5Yy1hYjA1LTFmYzk4ZWZhMGIwNyJ9.eyJ1cmwiOiJ3b3Jrcy1pbWFnZXMvYW5kcmEtbGFuZGluZy5hdmlmIiwiaWF0IjoxNzQ3NDkzOTM2LCJleHAiOjE3NzkwMjk5MzZ9.71AflfvLSPJmlmIosB5uEcpeGW3Mg41YuLJ8I47CR9o" alt="Placeholder" className="object-cover w-[300px] h-[300px]" />
                </div>
              </div>
            </div>
            {/* Footer: SoMe and Contact Info */}
            <footer className="w-full mt-12 flex flex-col space-y-4 py-8 border-t border-primary-text/20 px-section" style={{ color: textColor }}>
              {/* Logo */}
              <Logo size="text-3xl" color="#402d1f" className="mb-8" />
              <div className="flex justify-between max-w-[400px]">
                {/* Contact Info */}
                <div className="flex flex-col space-y-2 text-base">
                  <AppLink href="tel:+4593981186" aria-label="Call us at +45 93 98 11 86">
                    <span className="relative">Tel: +45 93 98 11 86</span>
                  </AppLink>
                  <AppLink href="mailto:hello@ciottofrb.com" aria-label="Send email to hello@ciottofrb.com">
                    <span className="relative">Mail: hello@ciottofrb.com</span>
                  </AppLink>
                </div>
                <div>
                  {/* Instagram */}
                  <AppLink href="https://www.instagram.com/ciotto.frb/" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center" aria-label="Follow us on Instagram">
                    <Image width={24} height={24} src="/image/insta-svg.svg" alt="Instagram" className="w-4 h-4 transition-all duration-300" aria-hidden="true" />
                    ciotto.frb
                  </AppLink>
                  {/* Address */}
                  <AppLink href="https://maps.google.com/?q=Godthåbsvej+18+A,+2000+Frederiksberg,+Denmark" target="_blank" rel="noopener noreferrer" className="block mt-2" aria-label="Open our location in Google Maps">
                    <span>
                      Godthåbsvej 18A,
                      <br />
                      2000 Frederiksberg
                    </span>
                  </AppLink>
                </div>
              </div>
            </footer>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

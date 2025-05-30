import { AnimatePresence, motion } from "framer-motion";
import { worksLinks } from "../../data/navLinks";

const blurVariant = {
  focused: { opacity: 1, filter: "blur(0px)" },
  blurred: { opacity: 0.4, filter: "blur(2px)" },
  initial: { opacity: 1, filter: "blur(0px)" },
};

export default function WorksDropdown({ open, setOpen, hoveredIndex, setHoveredIndex, onClose, context, textColor = "var(--color-primary-text)" }) {
  // context: 'desktop' or 'burger' (for styling differences if needed)
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: context === "desktop" ? "80vh" : "auto" }}
          exit={{ height: 0 }}
          transition={{
            duration: 1,
            ease: [0.23, 1, 0.32, 1],
          }}
          className={context === "desktop" ? "absolute top-0 left-0 w-screen bg-[#CAB696] z-20 flex overflow-hidden" : "mt-8 overflow-hidden"}
          onMouseEnter={context === "desktop" ? () => setOpen(true) : undefined}
          onMouseLeave={() => {
            setOpen(false);
            setHoveredIndex(null);
          }}
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className={context === "desktop" ? "flex flex-row w-full items-center uppercase px-10" : "flex flex-col space-y-2"} style={context === "burger" ? { color: textColor } : undefined}>
            {/* Links */}
            {context === "desktop" ? (
              <div className="flex flex-col items-start gap-4 w-1/2 pt-24">
                {worksLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className={context === "desktop" ? "works-link text-4xl font-semibold tracking-wide relative group w-auto" : undefined}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    variants={blurVariant}
                    initial="initial"
                    animate={hoveredIndex === null ? "initial" : hoveredIndex === idx ? "focused" : "blurred"}
                    style={context === "desktop" ? { color: "#402d1f", transition: "color 0.4s cubic-bezier(0.4,0,0.2,1)" } : undefined}
                    transition={{
                      duration: 0.3,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    onClick={onClose}
                  >
                    <span className="relative">
                      {link.label}
                      {context === "desktop" && <span className="absolute -bottom-2 left-0 w-full h-[1px] origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ backgroundColor: "#402d1f" }}></span>}
                    </span>
                  </motion.a>
                ))}
              </div>
            ) : (
              worksLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  variants={blurVariant}
                  initial="initial"
                  animate={hoveredIndex === null ? "initial" : hoveredIndex === idx ? "focused" : "blurred"}
                  transition={{
                    duration: 0.3,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  onClick={onClose}
                  className="uppercase"
                  style={{ color: textColor }}
                >
                  <span className="relative">{link.label}</span>
                </motion.a>
              ))
            )}
            {/* Image (desktop only) */}
            {context === "desktop" && (
              <div className="flex items-center justify-center w-1/2 pt-24">
                <AnimatePresence mode="wait">
                  {hoveredIndex === null && open ? (
                    <motion.img
                      key="default"
                      src="/image/dropdown/andra_eatery.avif"
                      alt="Ciotto Works"
                      initial={{
                        opacity: 0,
                        filter: "blur(10px)",
                      }}
                      animate={{
                        opacity: 1,
                        filter: "blur(0px)",
                      }}
                      exit={{
                        opacity: 0,
                        filter: "blur(10px)",
                      }}
                      transition={{
                        duration: 0.2,
                        ease: [0.165, 0.84, 0.44, 1],
                      }}
                      className="object-cover max-h-[50vh] max-w-full absolute"
                    />
                  ) : (
                    hoveredIndex !== null && (
                      <motion.img
                        key={hoveredIndex}
                        src={worksLinks[hoveredIndex].image}
                        alt={worksLinks[hoveredIndex].label}
                        initial={{
                          opacity: 0,
                          filter: "blur(10px)",
                        }}
                        animate={{
                          opacity: 1,
                          filter: "blur(0px)",
                        }}
                        exit={{
                          opacity: 0,
                          filter: "blur(10px)",
                        }}
                        transition={{
                          duration: 0.2,
                          ease: [0.165, 0.84, 0.44, 1],
                        }}
                        className="object-cover max-h-[50vh] max-w-full absolute"
                      />
                    )
                  )}
                </AnimatePresence>
              </div>
            )}
            {context === "desktop" && worksLinks.map((link) => <img key={link.label} src={link.image} alt="" style={{ display: "none" }} aria-hidden="true" />)}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

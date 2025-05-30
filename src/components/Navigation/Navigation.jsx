import { useState } from "react";
import { usePathname } from "next/navigation";
import { mainLinks } from "../../data/navLinks";

import AppLink from "./NavLink";
import WorksDropdown from "./WorksDropdown";

export default function Navigation({ navColor = "#402d1f", transition = "color 0.4s cubic-bezier(0.4,0,0.2,1)", setWorksOpen }) {
  const [worksOpen, setLocalWorksOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const pathname = usePathname();
  const effectiveNavColor = worksOpen ? "#402d1f" : navColor;
  const isContactPage = pathname === "/contact";
  const handleWorksOpen = (open) => {
    setLocalWorksOpen(open);
    if (typeof setWorksOpen === "function") setWorksOpen(open);
  };
  return (
    <>
      <ul className="nav-links font-medium flex space-x-8 uppercase whitespace-nowrap z-50 relative">
        {mainLinks.map((link) =>
          link.dropdown ? (
            <li
              key={link.href}
              className="relative font-medium"
              onMouseEnter={() => handleWorksOpen(true)}
              onMouseLeave={() => {
                handleWorksOpen(false);
                setHoveredIndex(null);
              }}
            >
              <button className="relative flex items-center cursor-pointer uppercase z-30 group font-medium">
                <span className="relative flex items-center">
                  <AppLink
                    href={link.href}
                    underline={false} //
                    highlighted={pathname.startsWith(link.href)}
                    className="font-medium"
                  >
                    {link.label}
                  </AppLink>
                  {/* Plus icon */}
                  <span className="ml-1 text-lg font-bold transition-transform duration-300 group-hover:rotate-45" style={{ color: effectiveNavColor }}>
                    +
                  </span>
                </span>
              </button>
            </li>
          ) : (
            <AppLink key={link.href} href={link.href} highlighted={link.highlighted} bold={link.label === "Ciotto Bar" || link.bold} navColor={effectiveNavColor} transition={transition} asListItem underlineColor={link.label === "Ciotto Bar" ? "bg-tertiary-text" : undefined} className={link.label === "Ciotto Bar" ? "text-tertiary-text font-bold" : undefined}>
              {link.label}
            </AppLink>
          )
        )}
      </ul>
      <WorksDropdown open={worksOpen} setOpen={handleWorksOpen} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} context="desktop" />
    </>
  );
}

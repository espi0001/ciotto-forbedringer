"use client";
import { mainLinks } from "../../data/navLinks";
import Logo from "../Navigation/Logo";
import AppLink from "../Navigation/NavLink";
import Copy from "../Animations/gsap-anim/TextAnimation";
import AnimatedLine from "../Animations/motion-anim/AnimatedLine";

import OpeningHours from "./OpeningHours";

export default function Footer() {
  return (
    <footer className="relative w-full bg-body-bg min-h-[326px] z-50 pt-0 pb-8 section-spacing-small">
      {/* Top border line */}
      <AnimatedLine
        inViewTrigger={true}
        width="100%"
        height="1px"
        color="var(--color-primary-text)" //
        duration={0.7}
        delay={0.5}
        className="absolute left-0 top-0 w-full z-50"
        style={{ position: "absolute", left: 0, top: 0 }}
      />
      <div className="max-w-screen-2xl mx-auto pt-16 pb-8 relative px-section">
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4 xl:gap-48">
          {/* Left: Logo */}
          <div className="flex flex-col justify-between h-full min-w-[200px]">
            <div className="mb-4">
              <Copy>
                {/* Logo */}
                <Logo color="primary-text" className="logo-size font-bold" />
              </Copy>
            </div>
            {/* Copyright: only show on desktop here */}
            <Copy>
              <p className="p-product mt-auto text-xs text-primary-text opacity-80 hidden xl:block">Copyright 2025 © Ciotto, All rights reserved</p>
            </Copy>
          </div>

          {/* Right: 3 columns */}
          <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-16 xl:gap-[126px] flex-1">
            {/* Pages */}
            <div className="w-[100px]">
              <Copy>
                <h3 className="text-primary-text font-bold mb-4 tracking-wide">PAGES</h3>
                <ul className="space-y-2">
                  {/* Always show 'Works' linking to all works */}
                  <li>
                    <AppLink href="/works" underline underlineColor="bg-primary-text">
                      All Works
                    </AppLink>
                  </li>
                  {mainLinks
                    .filter((link) => !link.dropdown && link.label !== "Works")
                    .map((link) => (
                      <li key={link.href}>
                        <AppLink href={link.href} underline underlineColor={link.label === "Ciotto Bar" ? "bg-tertiary-text" : "bg-primary-text"} className={link.label === "Ciotto Bar" ? "text-tertiary-text font-bold" : ""}>
                          {link.label}
                        </AppLink>
                      </li>
                    ))}
                </ul>
              </Copy>
            </div>
            {/* Opening Hours */}
            <div className="w-[210px]">
              <Copy startAtTenPercent={true}>
                <h3 className="text-primary-text font-bold mb-4 tracking-wide">OPENING HOURS</h3>
              </Copy>
              <Copy startAtTenPercent={true}>
                <div className="text-primary-text text-sm space-y-2">
                  <OpeningHours days="Monday" hours="Closed" />
                  <OpeningHours days="Tuesday" hours="Closed" />
                  <OpeningHours days="Wednesday" hours="Closed" />
                  <OpeningHours days="Thursday" hours="09:00 - 16:00" />
                  <OpeningHours days="Friday" hours="09:00 - 16:00" />
                  <OpeningHours days="Saturday" hours="09:00 - 16:00" />
                  <OpeningHours days="Sunday" hours="09:00 - 16:00" />
                </div>
              </Copy>
            </div>
            {/* Contact Info + Social Media */}
            <div className="w-[220px]">
              <Copy startAtTenPercent={true}>
                <h3 className="text-primary-text font-bold mb-4 tracking-wide">CONTACT INFO</h3>
              </Copy>
              <div className="text-primary-text text-sm mb-4">
                <Copy startAtTenPercent={true}>
                  <div>
                    Godthåbsvej 18 A,
                    <br />
                    2000 Frederiksberg
                  </div>
                </Copy>
              </div>
              <div className="mb-4">
                <Copy startAtTenPercent={true}>
                  <div>
                    Tel:{" "}
                    <a href="tel:+4593981186" className="hover:underline">
                      +45 93 98 11 86
                    </a>
                  </div>
                  <div>
                    Mail:{" "}
                    <a href="mailto:hello@ciottofrb.com" className="hover:underline">
                      hello@ciottofrb.com
                    </a>
                  </div>
                </Copy>
              </div>
              {/* Social Media under Contact Info */}
              <Copy startAtTenPercent={true}>
                <div>
                  <h4 className="text-primary-text font-bold mb-2 tracking-wide text-base">SOCIAL MEDIA</h4>
                  <div className="flex items-center gap-3">
                    <a href="https://www.instagram.com/ciotto.frb/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-text hover:underline">
                      <img src="/image/insta-svg.svg" alt="Instagram" className="w-[21px] h-[21px]" />
                      <span>ciotto.frb</span>
                    </a>
                  </div>
                </div>
              </Copy>
            </div>
          </div>
        </div>
        {/* Copyright: show at bottom for mobile/tablet only */}
        <Copy>
          <div className="mt-12 text-xs text-primary-text opacity-80 block lg:hidden w-full text-left">Copyright 2025 © Ciotto, All rights reserved</div>
        </Copy>
      </div>
    </footer>
  );
}

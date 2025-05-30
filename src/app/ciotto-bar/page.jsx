import React from "react";
import Image from "next/image";
import Copy from "@/components/Animations/gsap-anim/TextAnimation";
import LineAnimated from "@/components/Animations/motion-anim/LineAnimated";
import AnimatedLine from "@/components/Animations/motion-anim/AnimatedLine";
import ImageReveal from "@/components/Animations/gsap-anim/ImageReveal";
import Button from "@/components/UI/Button";

import HeroVideo from "@/components/Sections/HeroVideo";
import OpeningHours from "@/components/CiottoBar/OpeningHours";
import GalleryText from "@/components/Sections/GalleryText";
import DiffuserSection from "@/components/Sections/DiffuserSection";
import Gallery from "@/components/Sections/Gallery";

export const metadata = {
  title: "Ciotto | Ciotto Bar",
  description: "Experience the Ciotto Bar",
};

export default function CiottoBar() {
  return (
    <section className="">
      <HeroVideo src="/video/ciotto-bar-hero.mp4" text1="Ciotto Bar" text2="Godthåbsvej 18 A" />

      <article className="px-section section-spacing max-w-screen-2xl mx-auto grid md:grid-cols-2 xl:grid-cols-[1fr_2fr] gap-8 md:gap-16">
        <div className="content-center flex flex-col justify-between w-full">
          <div>
            <Copy>
              <h2 className="mb-4">Tactile moments</h2>
              <p>Enjoy a freshly brewed coffee made from carefully roasted Mexican beans from Komuna Coffee.</p>
              <p className="mb-2"></p>
              <p>Feel free to explore space, try the furniture, and get a sense of the materials and experience the atmosphere. IIt’s a place to slow down, look around, and stay as long as you like.</p>
            </Copy>
            <Button className="mt-4 mb-8" startAtTenPercent withCopy delayVariant={0.5} variant="primary" link="#menu">
              See Menu
            </Button>
          </div>
          <div className="w-full">
            <AnimatedLine
              className="mb-6"
              inViewTrigger={true}
              width="100%"
              height="1px"
              color="var(--color-primary-text)" //
              duration={0.7}
              delay={0.5}
            />
            <h3 className="uppercase mb-3">Opening hours</h3>

            <OpeningHours days="Monday - Wednesday" hours="Closed" />
            <OpeningHours days="Thursday - Sunday" hours="09:00 - 16:00" />
          </div>
        </div>
        <ImageReveal>
          <div className="flex gap-2 md:gap-4">
            <div className="w-full">
              <Image
                src="/image/ciottobar/moments(1).avif"
                alt="A Toshi stool with a Ciotto cup on top and a soft shadows on a light wall."
                width={1080} //
                height={1350}
                quality={100}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="hidden xl:block self-end w-full max-w-[320px]">
              <Image
                src="/image/ciottobar/ciotto-sign.avif"
                alt="A brown sign for Ciotto displaying a Ciotto Cup icon, stating 'open am-pm' and featuring the Instagram handle @ciotto.frb."
                width={1080} //
                height={1350}
                quality={100}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </ImageReveal>
      </article>

      <LineAnimated inViewTrigger={true} />

      {/* KOMUNA */}
      <GalleryText
        h2="Komuna Coffee"
        imageSrc1="/image/ciottobar/komuna(1).avif"
        altText1="A man harvests ripe coffee cherries from a branch in a green coffee plantation." //
        imageSrc2="/image/ciottobar/komuna(2).avif"
        altText2="A close-up of a coffee roaster pouring freshly roasted Komuna coffee beans into a bowl." //
        imageSrc3="/image/ciottobar/komuna(3).avif"
        altText3="Close-up of Komuna coffee bags filled with roasted coffee beans." //
        imageSrc4="/image/ciottobar/komuna(4).avif"
        altText4="Two women standing outside on a coffee plantation." //
      >
        <p>Our coffee is brewed with carefully sourced beans from Komuna Coffee a Mexican collective that works directly with smallholder farmers across the country.</p>
        <p className="mb-2"></p>
        <p>Komuna builds long term relationships with producers who grow expressive high quality coffees while championing sustainable farming and social impact.</p>
      </GalleryText>

      <LineAnimated inViewTrigger={true} />

      {/* MENUCARD */}
      <article id="menu" className="px-section section-spacing max-w-screen-2xl mx-auto flex flex-col items-center">
        <Copy>
          <h2 className="text-center pb-[30px] md:pb-[60px]">Menu</h2>
        </Copy>
        <Image className="drop-shadow-primary" src="/image/ciottobar/menukort.svg" alt="Ciotto Bar Menu Card" width={1030} height={1320} />
      </article>

      {/* Diffuser */}
      <DiffuserSection />

      {/* Gallery */}
      <Gallery />
    </section>
  );
}

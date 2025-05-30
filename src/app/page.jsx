import React from "react";
import Image from "next/image";
import Copy from "../components/Animations/gsap-anim/TextAnimation";
import LineAnimated from "../components/Animations/motion-anim/LineAnimated";
import ImageReveal from "../components/Animations/gsap-anim/ImageReveal";
import HeroVideo from "@/components/Sections/HeroVideo";
import ImageOpenSection from "@/components/Sections/ImageOpenSection";
import StickySections from "@/components/Sections/sticky-sections/StickySections";
import Button from "@/components/UI/Button";

export const metadata = {
  title: "Ciotto | Home",
  description: "Welcome to Ciotto.",
};

export default function Home() {
  return (
    <section>
      <HeroVideo src="/video/ciotto-hero-video-1.mp4" text1="Handcrafted furniture, ceramic" text2="works and coffee bar" />

      {/* ----- AUTHENTICITY IN EVERY DESIGN ----- */}
      <ImageOpenSection />
      {/* ------ Products ------ */}
      {/* <article className="px-section max-w-screen-2xl mx-auto section-spacing grid md:grid-cols-[1fr_3fr] gap-6 md:gap-12">
        
        <div className="flex md:flex-col justify-between">
          <Copy>
            <h2 className="h2-medium">
              Every <br />
              product <br />
              tells a <br />
              story
            </h2>
          </Copy>
          <Copy>
            <p className="h2-small uppercase">Products</p>
          </Copy>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          <ImageReveal>
            <Image
              src="/image/landing/stories.avif"
              alt="A table with papers, a bonsai centerpiece, Gatti chairs and Genno chair in Ciotto."
              width={1000} //
              height={1000}
              quality={100}
              className="object-cover max-h-[650px]"
            />
          </ImageReveal>

          <div className="flex flex-col justify-center gap-5">
            <Copy>
              <p>Handcrafted with care, each product celebrates the beauty of imperfection and the individuality of form. Inspired by everyday moments, the products are rooted in sustainable practices and a deep respect for materials where every product tells its own quiet story.</p>
            </Copy>
            <Button startAtTenPercent withCopy delayVariant={0.5} variant="primary" link="/products">
              Go to products
            </Button>
          </div>
        </div>
      </article> */}

      {/* ----- Parralax ----- */}
      <StickySections />

      {/* ------ About ------ */}
      <article className="px-section max-w-screen-2xl mx-auto section-spacing w-full grid lg:grid-cols-[2fr_3fr] gap-16">
        {/* Venstre billede – kun vist på desktop */}
        <div className="hidden lg:block">
          <ImageReveal>
            <Image
              src="/image/landing/started(1).avif"
              alt="A shelf with a coffee pot and Ciotto cups."
              width={1000} //
              height={1000}
              quality={100}
              className="h-full max-w-fit object-cover"
            />
          </ImageReveal>
        </div>

        {/* Højre kolonne med overskrift, navne, tekst og knap */}
        <div className="w-full flex flex-col justify-between gap-6">
          <div className="flex md:flex-row justify-between">
            <div className="flex flex-col gap-2">
              <Copy>
                <h2 className="h2-medium">
                  How it <br />
                  started
                </h2>
              </Copy>
              <Copy>
                <p className="uppercase h3-small">Ai Prasetya & Spiros Loukopoulos </p>
              </Copy>
            </div>
            <Copy>
              <p className="h2-small uppercase">About</p>
            </Copy>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <ImageReveal>
              <Image
                src="/image/landing/started(2).avif"
                alt="A black plica stool placed on the floor beside wooden table in Ciotto."
                width={1000} //
                height={1000}
                quality={100}
                className="md:max-w-[350px] h-full max-h-screen object-cover"
              />
            </ImageReveal>

            <Button
              startAtTenPercent //
              withCopy
              delayVariant={0.5}
              variant="primary"
              link="/about"
              className="self-start md:self-end"
            >
              Go to about
            </Button>
          </div>
        </div>
      </article>

      <LineAnimated inViewTrigger={true} />

      {/* ------ Ciotto Bar ------ */}
      <article className="px-section max-w-screen-2xl mx-auto section-spacing w-full">
        <div className="grid grid-cols-[1fr_auto] md:flex md:flex-row justify-between gap-6 md:gap-16">
          {/* Tekst og billede øverst til højre (på desktop) */}
          <div className="col-start-2 col-span-2 row-start-1 md:flex md:flex-col md:justify-between">
            <Copy>
              <p className="h2-small uppercase">Coffee Bar</p>
            </Copy>
            <div className="hidden md:block">
              <ImageReveal>
                <Image
                  src="/image/landing/bar(1).avif"
                  alt="Interior view of a Ciotto showcasing a door, a stone pillar, furniture, and natural light."
                  width={1000} //
                  height={1000}
                  quality={100}
                  className="md:max-w-[320px] max-h-[350px] object-cover"
                />
              </ImageReveal>
            </div>
          </div>

          {/* Overskrift, tekst og knap nederst til venstre */}
          <div className="col-start-1 col-span-2 row-start-1 row-span-1 flex flex-col md:justify-end gap-4 ">
            <Copy>
              <h2 className="uppercase h2-medium">
                The <br />
                Ciotto <br />
                Bar
              </h2>
            </Copy>
            <Copy>
              <p>Enjoy freshly brewed Mexican coffee to stay or to go. Slow down, feel the space, and explore handmade objects where design and coffee meet at Ciotto coffee bar.</p>
            </Copy>
            <Button startAtTenPercent withCopy delayVariant={0.5} variant="primary" link="/ciotto-bar">
              Go to Ciotto Bar
            </Button>
          </div>

          {/* Billede nederst i sektionen */}
          <div className="col-span-2 col-start-1 row-start-2">
            <ImageReveal>
              <Image
                src="/image/landing/bar(2).avif"
                alt="A espresso machine on a the counter of Ciotto."
                width={1920} //
                height={1080}
                quality={100}
                className="object-cover md:max-w-[525px] max-h-[645px]"
              />
            </ImageReveal>
          </div>
        </div>
      </article>
    </section>
  );
}

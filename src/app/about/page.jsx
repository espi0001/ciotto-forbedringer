import Image from "next/image";
// import PartnerCard from "../../components/About/PartnerCard";
import Copy from "@/components/Animations/gsap-anim/TextAnimation";
import LineAnimated from "@/components/Animations/motion-anim/LineAnimated";

import SplitHero from "@/components/Sections/sticky-sections/SplitHero";
import ImageText from "@/components/Sections/ImageText";
import GalleryText from "@/components/Sections/GalleryText";

export const metadata = {
  title: "Ciotto | About",
  description: "About Ciotto",
};

const About = () => {
  return (
    <section className="grid max-w-screen">
      <SplitHero />
      {/* ----- section 2----- */}
      <article className="relative grid grid-cols-2 gap-y-4 w-full max-w-screen-2xl mx-auto px-section section-spacing md:h-screen md:flex items-center justify-center">
        <Image
          src="/image/about/alu_ciotto_cup.avif"
          alt="A hand holding the alu ciotto cup."
          width={460} //
          height={570}
          quality={100}
          className="col-start-1 row-start-1 md:absolute md:top-0 md:left-[3.75rem] md:w-1/4 md:max-w-xs"
        />

        <Copy startAtZero>
          <h2 className="h2-medium col-span-3 row-start-2 z-40 text-center md:text-left md:max-w-[1000px] leading-tight">
            <span className="block text-center md:text-left">A living design space</span>
            <span className="block text-center md:text-left md:ml-40">in the heart</span>
            <span className="block text-center md:text-left md:ml-40">of Copenhagen</span>
          </h2>
        </Copy>
        <Image
          src="/image/about/genno_chair.avif"
          alt="A wooden table and Genno chair, with shelves displaying Ciotto cups."
          width={460} //
          height={570}
          quality={100}
          className="col-start-2 row-start-3 md:absolute md:bottom-0 md:right-[3.75rem] md:w-1/4 md:max-w-xs"
        />
      </article>
      <LineAnimated inViewTrigger={true} />
      {/* ----- section 3----- */}
      <ImageText imageSrc="/image/about/started(1).avif" altText="A espresso machine on a the counter of Ciotto." h2="How it started">
        <p>It began simply – with coffee and conversation. Rather than chasing a brand, they followed instinct, learning through making. A common language emerged - rounded, analogue, and shaped by care.</p>
        <p className="mb-6"></p>
        <p>From that, the project took form: slow, tactile, and collaborative. Driven by a common belief that good things take time.</p>
      </ImageText>
      <LineAnimated inViewTrigger={true} />
      {/* ----- section 4----- */}
      <ImageText imageSrc="/image/about/ari(1).avif" altText="Black & white portait of Ari Prasetya" h2="Ari Prasetya" reverse>
        <p>Ari is an Australian designer based in Copenhagen, working across furniture, ceramics, and interiors.</p>
        <p className="mb-6"></p>
        <p>Rooted in Indonesian heritage and global experience, his work blends craft, sculpture and function - always led by material, rhythm, and detail.</p>
        <p className="mb-6"></p>
        <p>His approach is quiet, thoughtful, and grounded in analogue process.</p>
      </ImageText>
      <LineAnimated inViewTrigger={true} />
      <ImageText imageSrc="/image/about/spiros(1).avif" altText="Black & white portait of Spiros Loukopoulos" h2="Spiros Loukopoulos">
        <p>Spiros is a Copenhagen-based creative from Greece, with a background in engineering, photography, and spatial design.</p>
        <p className="mb-6"></p>
        <p>He runs street food markets at Reffen in Copenhagen, while capturing human rhythms through photography.</p>
        <p className="mb-6"></p>
        <p>His work bridges structure and story — technical, expressive, and attuned to atmosphere.</p>
      </ImageText>

      <LineAnimated inViewTrigger={true} />

      {/* ----- section 5----- */}
      <GalleryText
        h2="Sustainability"
        imageSrc1="/image/about/sustainability(1).avif"
        altText1="Close-up of a wooden Armmi chair with a blurred background." //
        imageSrc2="/image/about/sustainability(2).avif"
        altText2="A hand holding a dark brown Ciotto cup." //
        imageSrc3="/image/about/sustainability(3).avif"
        altText3="A beige Ciotto cup on a wooden surface." //
        imageSrc4="/image/about/sustainability(4).avif"
        altText4="A close-up of a wooden Genno chair with a blurred background." //
      >
        <p>At Ciotto, sustainability means making furniture that lasts. We design pieces to be used for years — both in daily life and changing spaces.</p>
        <p className="mb-6"></p>
        <p>Good design shouldn’t need replacing. That’s why we focus on solid materials, simple construction, and a clear purpose.</p>
        <p className="mb-6"></p>
        <p>It’s about making fewer things, but making them well. Every piece is designed with care, quality, and durability in mind.</p>
      </GalleryText>

      {/* ----- section 7----- */}
      <article className="max-w-screen-2xl mx-auto section-spacing">
        <Image src="/image/about/toshixciotto.avif" alt="A Toshi stool with a brown Ciotto cup on top illuminated by soft sunlight." width={1920} height={1080} className="md:max-h-[600px] object-cover" />
      </article>
    </section>
  );
};

export default About;

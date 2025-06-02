"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion"; // Import useInView
import Copy from "../Animations/gsap-anim/TextAnimation";
import Image from "next/image";
import Button from "../UI/Button";
import ImageReveal from "../Animations/gsap-anim/ImageReveal";

function ImageOpenSection() {
  const sectionRef = useRef(null); // Ref til hele sektionen
  const inView = useInView(sectionRef, { amount: 0.3, once: true }); // Trigger animation når 30% af sektionen er synlig
  const [imgLoaded, setImgLoaded] = useState(false); // Billedets load-status

  // Only animate when both inView and imgLoaded are true
  const shouldAnimate = inView && imgLoaded;

  return (
    <section
      ref={sectionRef}
      className="px-section mx-auto section-spacing flex max-w-full justify-center" //
    >
      {/* Begrænser max bredde og centrerer indholdet */}
      <div className="flex flex-col xl:w-[1170px]">
        <div className="lg:flex flex-col gap-8">
          {/* Første del af overskriften */}
          <h2 className="h2-large font-medium hidden lg:block">Authenticity</h2>
          {/* Række med billede og "IN / EVERY" tekst */}
          <div className="flex lg:gap-18 items-center">
            <h2 className="hidden lg:block h2-large font-medium">in</h2>

            {/* Billede med animation – vises kun på desktop */}
            <motion.div
              style={{ overflow: "hidden", height: "100%" }}
              initial={{ width: "0%" }}
              animate={{ width: shouldAnimate ? "400px" : "0px" }} // Animer bredde ved visning
              transition={{
                duration: 2.5,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="hidden lg:block max-w-[200px] md:max-w-[400px]"
            >
              <Image
                quality={100}
                src="/image/landing/gamma_chair.avif"
                alt="The Gamma chair in a dark room next to a table."
                width={1920}
                height={1080}
                className="object-cover max-w-[200px] md:max-w-[400px] max-h-[100px] md:max-h-[200px]"
                onLoad={() => setImgLoaded(true)} // Sæt load-status når billedet er færdig
              />
            </motion.div>
            {/* "EVERY" vises altid – "DESIGN" kun på mobil */}
            <h2 className="h2-large font-medium hidden lg:block">every</h2>
          </div>
          <div className="flex">
            <h2 className="h2-large font-medium hidden lg:block">design</h2>
            <div className="flex flex-col md:flex-row gap-12 md:gap-34">
              <div className="text-center lg:hidden">
                <h2 className="h2-medium font-medium">Authenticity in every design</h2>
              </div>
              <ImageReveal>
                <Image
                  quality={100}
                  src="/image/landing/gamma_chair.avif"
                  alt="The Gamma chair in a dark room next to a table."
                  width={1920}
                  height={1080}
                  className="object-cover lg:hidden"
                  onLoad={() => setImgLoaded(true)} // Sæt load-status når billedet er færdig
                />
              </ImageReveal>
              <div>
                <Copy>
                  <p className="lg:max-w-[400px] max-w-[64ch] mb-4">
                    Ciotto is a café and showroom based in Copenhagen, bringing together handcrafted furniture, ceramics and coffee under one roof. <br />
                    Every piece is made with care, reflecting a quiet and honest approach to design and hospitality.
                  </p>
                </Copy>
                <Button startAtTenPercent withCopy delayVariant={0.5} size="large" type="button" link="/ciotto-bar">
                  Go to Ciotto Bar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageOpenSection;

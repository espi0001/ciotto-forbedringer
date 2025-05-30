import React from "react";
import Image from "next/image";
import Copy from "../Animations/gsap-anim/TextAnimation";
import AnimatedLine from "../Animations/motion-anim/AnimatedLine";

export default function WorkDetailLayout({ work }) {
  if (!work) return null;
  const { title, designer, subtitle, heroImage, galleryImages, infoText, details } = work;

  // Extract values for static headings
  const location = details.find((d) => d.label === "Location")?.value || "";
  const mainFeatures = details.find((d) => d.label === "Main Features")?.value || "";
  const by = "" || designer;
  // Filter out these from the details array for the rest
  const filteredDetails = details.filter((d) => !["Location", "Main Features", "By", "Designed by"].includes(d.label));

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-screen flex items-end mb-16 md:mb-24">
        <Image width={1920} height={1080} src={heroImage} alt={title} className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="relative z-20 p-8 md:p-16 text-left text-secondary-text">
          <Copy startAtTenPercent={true} delay={1}>
            <div className="mb-2 text-lg md:text-xl font-light tracking-wide uppercase">Designed by {designer}</div>
          </Copy>
          <Copy startAtTenPercent={true} delay={0.5}>
            <h1 className="h1-medium text-4xl md:text-6xl font-bold tracking-tight mb-2 uppercase">{title}</h1>
          </Copy>
          <Copy startAtTenPercent={true}>
            <div className="text-xl md:text-2xl font-light uppercase">{subtitle}</div>
          </Copy>
        </div>
      </section>

      {/* Info & Details Section */}
      <section className="px-section max-w-screen-2xl mx-auto section-spacing grid lg:grid-cols-2 gap-12">
        <div className="col-span-1">
          <Image width={1000} height={1000} src={galleryImages[2]} alt={title} className="w-full max-h-[500px] lg:max-h-full object-cover drop-shadow-primary object-top" />
        </div>
        <div className="col-span-1 flex flex-col justify-center space-y-6">
          <div>
            <Copy delay={1}>
              <h2 className="h2-work-details font-bold mb-2 tracking-wide">Info:</h2>
            </Copy>
            <AnimatedLine />
            <Copy delay={1}>
              <p className="body-text mb-4 mt-2 whitespace-pre-line">{infoText}</p>
            </Copy>
          </div>
          <div>
            <Copy delay={1}>
              <h2 className="h2-work-details font-bold mb-2 tracking-wide">Details:</h2>
            </Copy>
            <AnimatedLine />
            <ul className="text-base space-y-1">
              <li className="my-2">
                <Copy delay={1}>
                  <h3 className="font-semibold mb-1 tracking-wide">Location</h3>
                  <p>{location}</p>
                </Copy>
              </li>
              <AnimatedLine />
              <li className="my-2">
                <Copy delay={1}>
                  <h3 className="font-semibold mb-1 tracking-wide">Main features</h3>
                  <p>{mainFeatures}</p>
                </Copy>
              </li>
              <AnimatedLine />
              <li className="my-2">
                <Copy delay={1}>
                  <h3 className="font-semibold mb-1 tracking-wide">Designed by</h3>
                  <p>{by}</p>
                </Copy>
              </li>
              <AnimatedLine />
              {filteredDetails.length > 0 && (
                <li>
                  <Copy delay={1}>
                    <h3 className="text-lg font-bold mb-1 tracking-wide">Details</h3>
                  </Copy>
                  <ul className="text-base space-y-1">
                    {filteredDetails.map((d, i) => (
                      <li key={i} className="flex flex-row gap-2">
                        <span className="font-semibold min-w-[110px]">{d.label}:</span>
                        <span>{d.value}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Grid 1 */}
      <section className="px-section max-w-screen-2xl mx-auto section-spacing grid grid-cols-2 gap-8">
        {galleryImages.slice(0, 2).map((img, i) => (
          <Image key={i} width={1000} height={1000} src={img} alt={title} className="w-full max-h-[700px] object-cover drop-shadow-primary" />
        ))}
      </section>
    </>
  );
}

import React from "react";
import Copy from "@/components/Animations/gsap-anim/TextAnimation";

function DiffuserSection() {
  return (
    <section className="section-spacing relative w-full h-screen overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src={process.env.PUBLIC_URL ? process.env.PUBLIC_URL + "/video/diffuser.mp4" : "/video/diffuser.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="px-section py-[100px] relative z-10 text-secondary-text flex flex-col">
        <div>
          <Copy>
            <h2 className="tracking-wide mb-6 drop-shadow-lg max-w-[500px]">
              Feel the <br /> atmospherer <br /> in Ciotto Bar
            </h2>
          </Copy>
        </div>
        {/* <div className="flex justify-end">
          <p className="max-w-[400px]">Ciotto is a space you can feel. With handmade ceramics, furniture, and warm tones in a quiet harmony. Everything in the room is carefully chosen to create an honest and calm atmosphere, where you can experience the materials and find peace in simplicity. It's not about impressing, but about inviting – to sit down, take a pause, and feel the presence.</p>
        </div> */}
      </div>
    </section>
  );
}

export default DiffuserSection;

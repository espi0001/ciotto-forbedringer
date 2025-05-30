import Image from "next/image";

export default function Gallery() {
  return (
    <article className="px-section section-spacing max-w-screen-2xl mx-auto grid lg:grid-cols-[3fr_2fr] gap-5">
      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-5">
          <Image
            src="/image/ciottobar/ciotto-bar-1.avif"
            alt="Two Ciotto cups of coffee with latte art on a wooden table next to a glass of water and a menu titled Ciotto." //
            width={360}
            height={434}
            className="object-cover w-full max-h-[434px]"
          />

          <Image
            src="/image/ciottobar/ciotto-bar-2.avif"
            alt="A crowd of people stands outside a Ciotto on a busy street." //
            width={360}
            height={360}
            className="object-cover w-full max-h-[354px]"
          />
        </div>
        <div className="grid gap-5">
          <Image
            src="/image/ciottobar/ciotto-bar-3.avif"
            alt="A light wooden table, wooden Gatti chairs, and a small bonsai centerpiece, illuminated by natural light." //
            width={400}
            height={342}
            className="object-cover w-full max-h-[342px]"
          />

          <Image
            src="/image/ciottobar/ciotto-bar-4.avif"
            alt="Inside of Ciotto bar featuring a wooden counter, coffee machine, and a dark Borche bench." //
            width={400}
            height={454}
            className="object-cover w-full max-h-[454px]"
          />
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="grid gap-5 ">
          <Image
            src="/image/ciottobar/ciotto-bar-5.avif"
            alt="Close-up of a dark Citto cup on top of a coffee machine." //
            width={515}
            height={527}
            className="object-cover w-full max-h-[527px]"
          />

          <div className="grid grid-cols-2 gap-[30px]">
            <Image
              src="/image/ciottobar/ciotto-bar-6.avif"
              alt="People sitting outside of Ciotto on the Borche bench and having coffee form the Ciotto cup." //
              width={245}
              height={269}
              className="w-full max-h-[269px] object-cover"
            />

            <Image
              src="/image/ciottobar/ciotto-bar-7.avif"
              alt="A lemon with an incense stick sits in a wooden countertop in Ciotto." //
              width={245}
              height={269}
              className="w-full max-h-[269px] object-cover"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

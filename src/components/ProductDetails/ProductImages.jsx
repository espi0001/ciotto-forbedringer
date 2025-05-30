"use client";

import Image from "next/image";

const ProductImages = ({ mainImage }) => (
  <div className="order-[-1] lg:order-0 flex-grow md:max-w-[900px] h-[400px] sm:h-[500px] md:h-[580px] lg:h-[530px] flex items-center justify-center">
    <Image src={mainImage} alt="Product Main Image" width={640} height={420} quality={100} className="absolute object-contain mb-[40px]" />
  </div>
);

export default ProductImages;

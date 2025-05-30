"use client";
import Image from "next/image";

const ProductThumbnails = ({ thumbnails, mainImage, setMainImage }) => {
  const shownThumbnails = thumbnails.slice(0, 3);
  return (
    <div className="flex flex-row lg:flex-col gap-[12px] w-full lg:w-[186px] justify-center lg:justify-start">
      {shownThumbnails.map((thumbnail, index) => (
        <button key={index} className={`cursor-pointer w-[100px] h-[90px] lg:w-[160px] lg:h-[160px] pl-2 ${mainImage === thumbnail ? "border-[#402D1F]" : "border-transparent"}`} onClick={() => setMainImage(thumbnail)} style={{ outline: "none" }} tabIndex={0}>
          <Image src={thumbnail} alt={`Product View ${index + 1}`} width={157} height={112} quality={100} priority className={`bg-thumbnail-bg w-full h-full object-cover transition-opacity duration-200 ${mainImage === thumbnail ? "opacity-100" : "opacity-60"}`} />
        </button>
      ))}
    </div>
  );
};

export default ProductThumbnails;

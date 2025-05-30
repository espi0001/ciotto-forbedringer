"use client";
import { useState, useEffect } from "react";
import Copy from "../Animations/gsap-anim/TextAnimation";
import ProductHeader from "./ProductHeader";
import ProductDescription from "./ProductDescription";
import ProductColorSwatch from "./ProductColorSwatch";
import ProductImages from "./ProductImages";
import ProductThumbnails from "./ProductThumbnails";
import ProductSpecs from "./ProductSpecs";
import ProductGrid from "./ProductGrid";

function parseJSONField(field) {
  if (!field) return [];
  try {
    return typeof field === "string" ? JSON.parse(field) : field;
  } catch {
    return [];
  }
}

const ProductDetailLayout = ({ product, images, colors, colorSwatch, sizes, prices, measurements, relatedData }) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [mainImage, setMainImage] = useState(images[0]);

  useEffect(() => {
    setMainImage(images[selectedColorIndex]);
  }, [selectedColorIndex, images]);

  return (
    <div className="px-section section-spacing-extrasmall max-w-screen-2xl mx-auto">
      {/* Large Heading at the Top */}
      <div>
        <ProductHeader title={product.single_name} />
      </div>
      {/* Top Section: Description | Main Image | Thumbnails */}
      {/* grid grid-cols-1 lg:grid-cols-[300px_1fr_186px] gap-8 items-start mb-10 */}
      <div className="grid lg:grid-cols-[1fr_2fr_auto] md:gap-4 lg:gap-8 items-start">
        <div className="flex flex-col gap-2">
          <ProductDescription description={product.description} price={product.price} />
        </div>
        <ProductImages mainImage={mainImage} />
        <div className="hidden lg:flex flex-col gap-[18px]">
          <ProductThumbnails
            thumbnails={images}
            mainImage={mainImage}
            setMainImage={(img) => {
              setMainImage(img);
              const idx = images.indexOf(img);
              if (idx !== -1) setSelectedColorIndex(idx);
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-10 max-w-[500px] border-y border-text-primary py-6">
          <div className="flex justify-between">
            <ProductColorSwatch colors={colors} colorSwatch={colorSwatch} selectedColor={colors[selectedColorIndex]} setSelectedColorIndex={setSelectedColorIndex} />
          </div>
        </div>
      </div>

      {/* Specs Section */}
      <div className="mt-10 md:mt-20 flex flex-col lg:flex-row justify-between gap-[20%] ">
        <div className="flex-1 max-w-[500px]">
          <ProductSpecs measurements={measurements} />
        </div>
      </div>

      {/* You May Also Like */}
      {relatedData && relatedData.length > 0 && (
        <div className="section-spacing">
          <Copy>
            <h2 className="font-bold mb-6">You May Also Like</h2>
          </Copy>
          <ProductGrid
            products={relatedData.slice(0, 4).map((p) => ({
              id: p.id,
              image: parseJSONField(p.image)[0],
              title: p.name,
              link: `/products/${p.slug}`,
            }))}
            small
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetailLayout;

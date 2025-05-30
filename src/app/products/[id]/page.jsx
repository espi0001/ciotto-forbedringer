export const dynamic = "force-dynamic";
import { getByColumn, getRelatedByName } from "@/utils/supabase/api";
import ProductDetailLayout from "@/components/ProductDetails/ProductDetailLayout";

export const metadata = {
  title: "Ciotto | Products",
  description: "Products of Ari Prasetya",
};

function parseJSONField(field) {
  if (!field) return [];
  try {
    return typeof field === "string" ? JSON.parse(field) : field;
  } catch {
    return [];
  }
}

export default async function ProductDetail({ params }) {
  try {
    const { id } = await params;
    const product = await getByColumn("ciotto", "slug", id);
    const relatedData = await getRelatedByName("ciotto", product.id, product.name);

    // Parse fields
    const allImages = parseJSONField(product.image);
    const images = allImages.slice(1, 4); // This gets images at index 1, 2, 3
    const colors = parseJSONField(product.color);
    const sizes = parseJSONField(product.size);
    const prices = parseJSONField(product.price);
    const colorSwatch = parseJSONField(product.color_swatch);

    // Parse measurements from dimension string (e.g., "H.740mm/SH.440mm x D.520mm x W.420mm")
    // This is a simple example, you can improve parsing as needed
    // const measurements = { Dimensions: product.dimension };

    const measurements = parseJSONField(product.dimension);

    return (
      <ProductDetailLayout
        product={product} //
        images={images}
        colors={colors}
        colorSwatch={colorSwatch}
        sizes={sizes}
        prices={prices}
        measurements={measurements}
        relatedData={relatedData}
      />
    );
  } catch (error) {
    console.error("Error:", error);
    return (
      <div className="text-red-500 p-4">
        Error: {error.message}
        <br />
        <small>ID: {params.id}</small>
      </div>
    );
  }
}

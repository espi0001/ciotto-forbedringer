"use client";
import { useState, useEffect } from "react";

import Button from "../UI/Button";

// const ProductQuantity = ({ colors = [], sizes = [], prices = [] }) => {
const ProductQuantity = ({ product, colors = [], sizes = [], prices = [] }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0] || "");
  // const [selectedSize, setSelectedSize] = useState(sizes[0] || "");
  // const [selectedPrice, setSelectedPrice] = useState(prices[0] || "");

  // Fjernet af ester
  // const handleAddToCart = () => {
  //   console.log("Adding to cart:", { quantity, selectedColor, colors, sizes, prices });
  //   // Add your cart logic here
  // };

  useEffect(() => {
    if (!selectedColor && colors.length > 0) {
      setSelectedColor(colors[0]);
    }
  }, [colors]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const cartItem = {
      id: product.id,
      name: product.single_name,
      quantity,
      color: selectedColor,
      price: product.price,
      image: Array.isArray(product.image) ? product.image[0] : product.image,
    };

    try {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCart = [...existingCart, cartItem];
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      console.log("Product added to cart:", cartItem);
      alert("Product added to cart!");
    } catch (err) {
      console.error("Failed to update cart:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Color selection */}
      {/* <ProductColorSwatch colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} /> */}
      {/* Quantity and Add to Cart */}
      <div className="flex flex-col gap-4 border-b border-[#402D1F] pb-6">
        <div className="flex items-center justify-between">
          {/* <div className="flex items-center gap-2">
            <span className="font-semibold">QUANTITY</span>
            <div className="flex items-center gap-2 px-1">
              <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-xl flex items-center justify-center cursor-pointer">
                -
              </button>
              <span className="text-xl">{quantity}</span>
              <button type="button" onClick={() => setQuantity(quantity + 1)} className="text-xl flex items-center justify-center cursor-pointer">
                +
              </button>
            </div>
          </div> */}
          <Button className="text-xl" variant="primary" type="submit">
            Contact to purchase
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ProductQuantity;

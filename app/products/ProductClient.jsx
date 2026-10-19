"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories, products } from "@/Data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landingpage/Footer";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(false); // Loader state

  const tabs = [{ id: "all", name: "All Products" }, ...categories];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (categoryId) => {
    setLoading(true);
    setTimeout(() => {
      setActiveCategory(categoryId);
      setLoading(false);

      // ✅ Scroll to top when category changes
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  const getCategoryName = () => {
    if (activeCategory === "all") return "All Products";
    const category = categories.find((c) => c.id === activeCategory);
    return category ? category.name : "Products";
  };

  return (
    <>
      <Navbar />

      {/* Banner */}
      <section className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover flex items-center justify-center"
          style={{ backgroundImage: "url('/home/banner.webp')" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <h1 className="px-10   text-center text-3xl md:text-7xl font-bold text-white z-10">
            {getCategoryName()}
          </h1>
        </div>
      </section>

      <section className="w-full px-5 py-6">
        {/* Tabs */}
        <div className="sticky  top-[90px] z-20 bg-white border-b">
          <div className="flex bg-[#FFFAF1] overflow-x-auto scrollbar-hide md:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleCategoryChange(tab.id)}
                className={`relative px-2 py-6 text-sm md:text-base font-bold cursor-pointer transition 
                  ${
                    activeCategory === tab.id
                      ? "text-yellow-600"
                      : "text-black hover:text-yellow-600"
                  }`}
              >
                {tab.name}
                {activeCategory === tab.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-500 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Loader */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="border rounded-lg shadow bg-gray-200 animate-pulse h-80"
              ></div>
            ))}
          </div>
        ) : (
          <>
     
{/* Product Grid - Updated Layout */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7 mt-8 md:mt-20">
  {filteredProducts.map((product) => (
    <Link
      key={product.id}
      href={`/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl"
    >
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#F7F7F7] p-1 md:h-72">
        <Image
          src={product.image.src}
          alt={product.name}
          width={1080}
          height={1080}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Product Label */}
        <span className="absolute left-4 top-4 rounded-md bg-[#FFB800] px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
          {product.model}
        </span>

        {/* View Product */}
        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-black shadow-md transition-all duration-300 group-hover:bg-[#FFB800]">
          ↗
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-5">

        <h2 className="text-lg font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-yellow-600 md:text-xl">
          {product.name}
        </h2>

        <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4">
          <div>
            <p className="text-xs text-gray-500">Model Number</p>
            <p className="mt-1 text-sm font-bold text-gray-900">
              {product.model}
            </p>
          </div>

          <span className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 transition-colors group-hover:text-yellow-600">
            View Details
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  ))}
</div>


          </>
        )}
      </section>

      <Footer />
    </>
  );
}

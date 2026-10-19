
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Productcategory = () => {
  const categories = [
    {
      name: "Bar Bending Machines",
      products: 30,
      img: "/home/productdesc/productdesc1.webp",
      hoverImg: "/steel.webp",
      link: "/products",
    },
    {
      name: "Concrete Mixers",
      products: 24,
      img: "/home/productdesc/productdesc2.webp",
      hoverImg: "/home/productdesc/actual/concrete.webp",
      link: "/products",
    },
    {
      name: "Trolly Vibrator",
      products: 21,
      img: "/home/productdesc/productdesc3.webp",
      hoverImg: "/home/productdesc/actual/trollyvibrator.webp",
      link: "/products",
    },
    {
      name: "Ride on Roller / Plate Compactor",
      products: 26,
      img: "/home/productdesc/productdesc4.webp",
      hoverImg: "/home/productdesc/actual/rideoncollar.webp",
      link: "/products",
    },
    {
      name: "Material Lifting",
      products: 37,
      img: "/home/productdesc/productdesc5.webp",
      hoverImg: "/home/productdesc/actual/materiallifting.webp",
      link: "/products",
    },
    {
      name: "Lab Testing Equipments",
      products: 17,
      img: "/home/productdesc/productdesc6.webp",
      hoverImg: "/home/productdesc/actual/labtesting.webp",
      link: "/products",
    },
    {
      name: "Safety Instruments",
      products: 18,
      img: "/home/productdesc/productdesc7.webp",
      hoverImg: "/home/productdesc/actual/safetyinstrument.webp",
      link: "/products",
    },
    {
      name: "Surveying Instruments",
      products: 18,
      img: "/home/productdesc/productdesc8.webp",
      hoverImg: "/home/productdesc/actual/surveyinginstrument.webp",
      link: "/products",
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
          <div>
            <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#FAAC18] mb-3">
              Explore Our Range
            </p>

            <h2 className="text-3xl md:text-5xl font-extrabold text-[#202020] leading-tight">
              Product <span className="text-[#FAAC18]">Categories</span>
            </h2>

            <div className="w-20 h-1 bg-[#FAAC18] mt-4 rounded-full" />
          </div>

          <p className="text-sm md:text-base text-gray-500 max-w-md leading-7">
            Explore reliable construction machinery and professional
            equipment designed for demanding projects.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.name}
              href={cat.link}
              className="group relative min-w-0 overflow-hidden rounded-2xl
              border border-gray-200 bg-white
              transition-all duration-300
              hover:-translate-y-1 hover:border-[#FAAC18]
              hover:shadow-[0_12px_35px_rgba(0,0,0,0.09)]
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#FAAC18]"
            >
              {/* Image Area */}
              <div className="relative aspect-[5/4] overflow-hidden bg-[#F3F4F5]">

                {/* Decorative background */}
                <div className="absolute -right-10 -top-10 w-36 h-36
                rounded-full border-[22px] border-white/50
                transition-transform duration-500 group-hover:scale-125" />

                {/* Main Image */}
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain p-3 md:p-5
                  transition-all duration-500
                  group-hover:scale-105 group-hover:opacity-0"
                />

                {/* Alternate Image */}
                <Image
                  src={cat.hoverImg}
                  alt={`${cat.name} alternate view`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="absolute inset-0 object-contain p-3 md:p-5
                  opacity-0 scale-95
                  transition-all duration-500
                  group-hover:opacity-100 group-hover:scale-105"
                />

                {/* Category Number */}
                <span className="absolute top-3 left-3 text-xs font-bold
                tracking-widest text-gray-500 bg-white/90
                rounded-md px-2 py-1">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Arrow */}
                <span className="absolute bottom-3 right-3
                flex items-center justify-center
                w-9 h-9 rounded-full bg-white text-[#202020]
                shadow-sm transition-all duration-300
                group-hover:bg-[#FAAC18] group-hover:-translate-y-0.5">
                  <ArrowUpRight size={19} />
                </span>
              </div>

              {/* Category Information */}
              <div className="p-3 md:p-5">
                <h3 className="text-sm md:text-lg font-bold
                text-[#202020] leading-snug
                transition-colors duration-300
                group-hover:text-[#B87900]">
                  {cat.name}
                </h3>

                <div className="flex items-center justify-between gap-2 mt-3
                pt-3 border-t border-gray-100">
                  <span className="text-xs md:text-sm text-gray-500">
                    Available Products
                  </span>

                  <span className="shrink-0 text-xs md:text-sm
                  font-bold text-[#202020]">
                    {String(cat.products).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0
              bg-[#FAAC18] transition-all duration-300
              group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="flex items-center justify-center gap-3 mt-8 md:mt-10">
          <span className="w-10 h-px bg-gray-300" />
          <p className="text-xs md:text-sm text-gray-500">
            Quality Equipment for Every Construction Need
          </p>
          <span className="w-10 h-px bg-gray-300" />
        </div>

      </div>
    </section>
  );
};

export default Productcategory;

"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

import "swiper/css";

export const images = [
  {
    id: 1,
    src: "/Branded Rebar Benders at Construction Site.png",
    mobileSrc: "/mobile/bar-bending-mobile.webp",
    title: "Bar Bending Supplier",
    subtitle: "Machine Supplier",
    description:
      "Explore our wide selection of Bar Bending Machine Supplier, including automatic, hydraulic, and manual models for all your steel-bending needs.",
  },
  {
    id: 2,
    src: "/Industrial Mist Cannon Showcase.png",
    mobileSrc: "/mobile/anti-smog-mobile.webp",
    title: "Anti Smog Gun",
    subtitle: "Advanced Air Pollution Control",
    description:
      "High-performance Anti Smog Gun designed for heavy-duty operations, ensuring long-lasting durability and superior efficiency in smoke and particulate removal.",
  },
  {
    id: 3,
    src: "/banner new (1).webp",
    mobileSrc: "/mobile/monkey-lifting-mobile.webp",
    title: "Monkey Lifting Machines",
    subtitle: "Automatic & Manual",
    description:
      "High precision lifting machines available in automatic and manual versions for all industries.",
  },
  {
    id: 4,
    src: "/home/hero4.webp",
    mobileSrc: "/mobile/construction-tools-mobile.webp",
    title: "Construction Tools",
    subtitle: "Best in Market",
    description:
      "Quality construction tools designed for professional use in modern projects.",
  },
];

const AccordionHero = () => {
  const [active, setActive] = useState(1);

  return (
    <>
      {/* =========================================================
          MOBILE HERO
      ========================================================= */}
      <section className="block md:hidden w-full h-[60vh] overflow-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          speed={700}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="w-full h-full"
        >
          {images.map((item) => (
            <SwiperSlide key={item.id} className="w-full h-full">
              <div className="relative w-full h-full overflow-hidden">

                {/* Background Image */}
               <img
  src={item.mobileSrc}
  alt={item.title}
  className="absolute inset-0 w-full h-full object-cover"
/>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="relative z-10 flex h-full w-full flex-col justify-center items-start px-6 text-white">

                  {/* Title */}
                  {item.id === 1 ? (
                    <h1 className="text-3xl font-bold leading-tight mb-2">
                      {item.title}
                    </h1>
                  ) : (
                    <h2 className="text-3xl font-bold leading-tight mb-2">
                      {item.title}
                    </h2>
                  )}

                  {/* Subtitle */}
                  <p className="text-2xl text-[#FAAC18] font-semibold leading-tight">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-4 max-w-md text-base leading-relaxed">
                    {item.description}
                  </p>

                  {/* Button */}
                  <div className="mt-6">
                    <Link
                      href="/contact-us"
                      className="inline-block bg-white px-5 py-3 rounded-lg text-black font-semibold text-base transition hover:text-[#FAAC18]"
                    >
                      Request a Quote →
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* =========================================================
          DESKTOP HERO
      ========================================================= */}
      <section className="hidden md:flex h-[100vh] w-full overflow-hidden">
        {images.map((item) => (
          <div
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`relative cursor-pointer transition-[flex] duration-700 ease-in-out ${
              active === item.id ? "flex-[4]" : "flex-[0.8]"
            }`}
          >
            {/* Background Image */}
            <img
              src={item.src}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div
              className={`absolute inset-0 transition-colors duration-500 ${
                active === item.id ? "bg-black/10" : "bg-black/30"
              }`}
            />

            {/* Number */}
            <div className="absolute top-6 left-6 z-20 text-white/70 text-5xl font-bold">
              {String(item.id).padStart(2, "0")}
            </div>

            {/* Content */}
            <div
              className={`absolute inset-0 z-10 flex flex-col justify-center items-start px-10 text-white transition-all duration-700 ${
                active === item.id
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-5 pointer-events-none"
              }`}
            >
              <div className="ml-10 pt-20">

                {/* Heading */}
                <h1 className="text-4xl md:text-7xl font-bold mb-3 leading-tight">
                  {active === item.id && item.id === 1 ? (
                    <Typewriter
                      words={[
                        "Bar Bending Machine Supplier",
                        "Anti Smog Gun (Dust & Smog Eliminator)",
                        "Bar Cutting Machine Supplier",
                        "Rebar Processing Solutions",
                      ]}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  ) : (
                    item.title
                  )}
                </h1>

                {/* Subtitle */}
                <p className="text-3xl text-[#FAAC18] font-semibold">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="mt-6 max-w-lg text-lg leading-relaxed">
                  {item.description}
                </p>

                {/* Button */}
                <div className="mt-8">
                  <Link
                    href="/contact-us"
                    className="inline-block bg-white px-5 py-3 rounded-lg text-black font-semibold text-lg transition hover:text-[#FAAC18]"
                  >
                    Request a Quote →
                  </Link>
                </div>

              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default AccordionHero;
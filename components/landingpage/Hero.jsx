"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCreative } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

export const images = [
  {
    id: 1,
    src: "/home/bar bending banner (2).webp",
    mobileSrc: "/home/mobile 1 (1).webp",
    title: "Bar Bending Machine Supplier",
    subtitle: "Machine Supplier",
    description:
      "Explore our wide selection of bar bending machines, including automatic, hydraulic, and manual models for all your steel-bending needs.",
  },
  {
    id: 2,
    src: "/home/anti smog gun banner (1).webp",
    mobileSrc: "/home/mobile 2 (1).webp",
    title: "Anti Smog Gun",
    subtitle: "Advanced Air Pollution Control",
    description:
      "High-performance anti smog guns designed for heavy-duty operations, ensuring durability and efficient dust and particulate control.",
  },
  {
    id: 3,
    src: "/home/ber bending banner1.webp",
    mobileSrc: "/home/mobile 3 (1).webp",
    title: "Monkey Lifting Machines",
    subtitle: "Automatic & Manual",
    description:
      "High-precision lifting machines for construction and industrial applications.",
  },
  // {
  //   id: 4,
  //   src: "/home/hero4.webp",
  //   mobileSrc: "/home/hero4.webp",
  //   title: "Construction Tools",
  //   subtitle: "Best in Market",
  //   description:
  //     "Quality construction tools designed for professional use in modern construction projects.",
  // },
];

const AccordionHero = () => {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden md:h-screen md:min-h-[600px]">

      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectCreative]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        speed={1100}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-15%", 0, -300],
            opacity: 0,
          },
          next: {
            translate: ["100%", 0, 0],
            opacity: 1,
          },
          limitProgress: 2,
          progressMultiplier: 1,
          perspective: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        className="hero-full-slider h-full w-full"
      >
        {images.map((item) => (
          <SwiperSlide key={item.id} className="h-full w-full">

            <div className="relative h-full w-full overflow-hidden">

              {/* Desktop Image */}
              <img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 hidden h-full w-full object-cover md:block"
              />

              {/* Mobile Image */}
              <img
                src={item.mobileSrc || item.src}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover object-center md:hidden"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-[1440px] px-6 py-12 text-white sm:px-10 md:px-16 lg:px-24">

                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-[2px] w-12 bg-[#FAAC18]" />
                    <span className="text-sm font-bold tracking-[0.25em] text-white/80">
                      0{item.id} / 0{images.length}
                    </span>
                  </div>

                  {/* Heading */}
                  <h1 className="max-w-5xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl lg:text-7xl">
                    {item.id === 1 ? (
                      <Typewriter
                        words={[
                          "Bar Bending Machine Supplier",
                          "Bar Cutting Machine Supplier",
                          "Rebar Processing Solutions",
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={60}
                        deleteSpeed={35}
                        delaySpeed={1500}
                      />
                    ) : (
                      item.title
                    )}
                  </h1>

                  {/* Subtitle */}
                  <p className="mt-4 text-xl font-semibold text-[#FAAC18] sm:text-2xl md:text-3xl">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base md:text-lg">
                    {item.description}
                  </p>

                  {/* Button */}
                  <div className="mt-8">
                    <Link
                      href="/contact-us"
                      className="group inline-flex items-center gap-3 rounded-md bg-[#FAAC18] px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:bg-white sm:text-base"
                    >
                      Request a Quote
                      <ArrowRight
                        size={19}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>

                </div>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="absolute bottom-16 right-6 z-30 flex items-center gap-3 sm:right-10 md:bottom-12 md:right-16 lg:right-24">

        <button
          type="button"
          aria-label="Previous slide"
          className="hero-prev flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:border-[#FAAC18] hover:bg-[#FAAC18] hover:text-black md:h-14 md:w-14"
        >
          <ArrowLeft size={22} />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          className="hero-next flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:border-[#FAAC18] hover:bg-[#FAAC18] hover:text-black md:h-14 md:w-14"
        >
          <ArrowRight size={22} />
        </button>

      </div>

      {/* Pagination + Animation Styling */}
      <style jsx global>{`
        .hero-full-slider .swiper-pagination {
          bottom: 28px !important;
          left: 24px !important;
          width: auto !important;
          text-align: left;
        }

        .hero-full-slider .swiper-pagination-bullet {
          width: 9px;
          height: 9px;
          margin: 0 5px !important;
          background: #fff;
          opacity: 0.6;
          transition: all 0.35s ease;
        }

        .hero-full-slider .swiper-pagination-bullet-active {
          width: 30px;
          border-radius: 10px;
          background: #faac18;
          opacity: 1;
        }

        .hero-full-slider .swiper-slide {
          overflow: hidden;
        }

        .hero-full-slider .swiper-slide-active img {
          animation: heroImageZoom 5.5s ease-out both;
        }

        @keyframes heroImageZoom {
          from {
            transform: scale(1.08);
          }
          to {
            transform: scale(1);
          }
        }

        @media (min-width: 768px) {
          .hero-full-slider .swiper-pagination {
            left: 64px !important;
            bottom: 40px !important;
          }
        }

        @media (min-width: 1024px) {
          .hero-full-slider .swiper-pagination {
            left: max(96px, calc((100vw - 1248px) / 2)) !important;
          }
        }

        @media (max-width: 767px) {
          .hero-full-slider .swiper-pagination {
            bottom: 30px !important;
            left: 20px !important;
          }
        }
      `}</style>

    </section>
  );
};

export default AccordionHero;
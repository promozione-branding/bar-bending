"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Enquiry from "./Enquiry";

const Navbar = () => {
  const navItems = ["Home", "About Us", "Products", "Blogs", "Contact Us"];
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const pathname = usePathname();

  const getPath = (item) => {
    if (item === "Home") return "/";
    return "/" + item.toLowerCase().replace(/\s+/g, "-");
  };

  const openWhatsApp = () => {
    const phoneNumber = "918826544443";
    const message = encodeURIComponent(
      "Hello! I want to request a quote."
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[2000] bg-white shadow-md">

        {/* =========================================================
            TOP BAR
        ========================================================= */}
        <div className="w-full bg-[#3F2212] text-white overflow-hidden">
          <div className="max-w-[1440px] mx-auto flex items-center h-9">

            {/* 30% GST */}
            <div className="w-[30%] min-w-[130px] h-full flex items-center justify-center border-r border-white/20 text-xs sm:text-sm font-medium whitespace-nowrap">
              GST: <span className="ml-1 font-bold">07BPIPM2937L1ZG</span>
            </div>

            {/* 70% Marquee */}
            <div className="w-[70%] overflow-hidden relative h-full flex items-center">
              <div className="flex whitespace-nowrap animate-marquee">
                <span className="text-xs sm:text-sm font-medium px-10">
                  Leading Construction Machine Manufacturer & Supplier
                </span>

                <span className="text-xs sm:text-sm font-medium px-10">
                  Leading Construction Machine Manufacturer & Supplier
                </span>

                <span className="text-xs sm:text-sm font-medium px-10">
                  Leading Construction Machine Manufacturer & Supplier
                </span>

                <span className="text-xs sm:text-sm font-medium px-10">
                  Leading Construction Machine Manufacturer & Supplier
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            MAIN NAVBAR
        ========================================================= */}
        <div className="max-w-[1440px] mx-auto flex items-center justify-between py-3 px-5 md:px-10">

          {/* Desktop Logo */}
          <div className="flex items-center">
            <Link href="/" className="relative flex items-center">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={150}
                height={120}
                priority
              />

              <span className="absolute top-0 right-0 text-sm font-bold text-black">
                ®
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex text-xl tracking-wide ml-70 space-x-8 font-medium text-[#3F2212]">
            {navItems.map((item, i) => {
              const path = getPath(item);
              const isActive = pathname === path;

              return (
                <li key={i} className="relative pb-2">
                  <Link
                    href={path}
                    className={`transition relative
                      after:content-[''] after:absolute after:left-0 after:-bottom-8 after:h-[3px] after:bg-[#FAAC18]
                      after:transition-all after:duration-300
                      ${
                        isActive
                          ? "after:w-full text-[#FAAC18]"
                          : "after:w-0 hover:after:w-full hover:text-[#FAAC18]"
                      }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop Button */}
          <div className="hidden md:flex">
            <button
              onClick={openWhatsApp}
              className="w-full flex justify-center items-center gap-2 bg-[#FAAC18] font-bold text-lg cursor-pointer hover:bg-[#e99b10] text-white py-3 px-5 rounded transition duration-300"
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* =========================================================
            MOBILE OVERLAY
        ========================================================= */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* =========================================================
            MOBILE SIDE PANEL
        ========================================================= */}
        <div
          className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Mobile Logo */}
          <div className="flex items-center justify-between p-5 border-b">
            <Link
              href="/"
              className="relative flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={120}
                height={80}
              />

              <span className="absolute top-0 right-0 text-xs font-bold text-black">
                ®
              </span>
            </Link>

            <button onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col p-5 space-y-6 text-lg font-medium text-[#3F2212]">
            {navItems.map((item, i) => {
              const path = getPath(item);
              const isActive = pathname === path;

              return (
                <li key={i}>
                  <Link
                    href={path}
                    className={`block ${
                      isActive
                        ? "text-[#FAAC18]"
                        : "hover:text-[#FAAC18]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}

            <li>
              <button
                onClick={openWhatsApp}
                className="w-full flex justify-center items-center gap-2 bg-[#FAAC18] font-bold text-lg cursor-pointer hover:bg-[#e99b10] text-white py-3 px-5 rounded transition duration-300"
              >
                Request a Quote
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Popup Component */}
      <Enquiry
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />

      {/* =========================================================
          MARQUEE ANIMATION
      ========================================================= */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 18s linear infinite;
          width: max-content;
        }
      `}</style>
    </>
  );
};

export default Navbar;
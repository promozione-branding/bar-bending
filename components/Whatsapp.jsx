// WhatsAppChat.jsx
'use client'
import { handleCallClick } from "@/utils/tracking";
import { Phone } from "lucide-react";
import React from "react";

const Whatsapp = () => {
  return (
    <a
      href="tel:+918826544443"
      className=" fixed bottom-5 right-1 z-50 bg-red-500 text-white p-1 rounded-full shadow-lg hover:bg-red-600 transition animate-bounce h-10 w-10 flex items-center justify-center lg:w-14 lg:h-14"
    onClick={() => handleCallClick({ source: "Website" })}
    >
      <Phone size={22}  />
    </a>
  );
};

export default Whatsapp;

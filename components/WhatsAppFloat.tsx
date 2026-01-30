"use client";

import Image from "next/image";

export default function WhatsAppFloat() {
  const phoneNumber = "919336835379"; // 👈 replace with your WhatsApp number (country code + number)
  const message = "Hi, I’m interested in curating my growth journey. Please share details.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/whatsapp.svg"
        alt="WhatsApp"
        width={28}
        height={28}
        priority
      />
    </a>
  );
}

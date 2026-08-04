"use client";

import { MessageCircle } from "lucide-react";

export default function Whatsapp() {
  const phone = "919876543210"; // Replace with your WhatsApp number

  const message =
    "Hi Yellow Balloon Interiors, I'm interested in getting a quote for my home interiors.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Chat on WhatsApp"
    >
      <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300">

        <MessageCircle
          size={34}
          className="text-white"
        />

      </div>
    </a>
  );
}
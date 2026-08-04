"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { title: "About", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Gallery", href: "#gallery" },
    { title: "Testimonials", href: "#testimonials" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-4">

          <Image
            src="/logo/logo.png"
            alt="Yellow Balloon"
            width={65}
            height={65}
            className="rounded-full"
          />

          <div>

            <h2 className="text-2xl font-bold text-[#071A3D] leading-none">
              Yellow Balloon
            </h2>

            <p className="text-yellow-500 tracking-[3px] text-sm mt-1">
              Premium Interiors
            </p>

          </div>

        </a>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-10">

          {navItems.map((item) => (

            <a
              key={item.title}
              href={item.href}
              className="font-medium text-[#071A3D] hover:text-yellow-500 transition"
            >
              {item.title}
            </a>

          ))}

        </nav>

        {/* Button */}

        <a
          href="#contact"
          className="hidden lg:inline-flex bg-yellow-400 hover:bg-yellow-500 text-[#071A3D] font-semibold px-7 py-3 rounded-full transition"
        >
          Get Free Quote
        </a>

        {/* Mobile */}

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="text-[#071A3D]" size={30} />
          ) : (
            <Menu className="text-[#071A3D]" size={30} />
          )}
        </button>

      </div>

      {menuOpen && (

        <div className="bg-white border-t lg:hidden">

          <div className="flex flex-col p-6 gap-5">

            {navItems.map((item) => (

              <a
                key={item.title}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#071A3D] font-medium"
              >
                {item.title}
              </a>

            ))}

            <a
              href="#contact"
              className="bg-yellow-400 rounded-full text-center py-3 font-semibold text-[#071A3D]"
            >
              Get Free Quote
            </a>

          </div>

        </div>

      )}
    </header>
  );
}
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#FAFAFA] pt-36 pb-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}

          <div>

            <div className="flex items-center gap-4 mb-8">

              <div className="w-12 h-[2px] bg-yellow-400"></div>

              <p className="uppercase tracking-[6px] text-yellow-500 font-semibold text-sm">
                Luxury Interior Design
              </p>

            </div>

            <h1
              className="text-[#071A3D] font-bold leading-[1.05]
              text-5xl lg:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Crafted Around
              <br />
              Your Lifestyle
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-600">
              Yellow Balloon Interiors creates luxurious modular kitchens,
              wardrobes, TV units and complete home interiors that combine
              timeless elegance, comfort and functionality for modern living.
            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5 mt-10">

              <a
  href="#contact"
  className="inline-flex items-center justify-center bg-[#F4C542] text-[#071A3D] px-9 py-4 rounded-full font-semibold shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
>
  Get Free Consultation
  <ArrowRight className="ml-2" size={18} />
</a>

              <a
  href="#gallery"
  className="inline-flex items-center justify-center border-2 border-[#071A3D] px-9 py-4 rounded-full font-semibold text-[#071A3D] hover:bg-[#071A3D] hover:text-white transition-all duration-300"
>
  View Portfolio
</a>

            </div>

            {/* STATS */}

            <div className="grid grid-cols-3 gap-10 mt-16 max-w-lg">

              <div>

                <h2 className="text-4xl font-bold text-[#071A3D]">
                  500+
                </h2>

                <p className="text-gray-500 mt-1">
                  Happy Clients
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-[#071A3D]">
                  350+
                </h2>

                <p className="text-gray-500 mt-1">
                  Projects
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-[#071A3D]">
                  10+
                </h2>

                <p className="text-gray-500 mt-1">
                  Years
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="relative">

            <div className="overflow-hidden rounded-[32px] shadow-2xl">

              <Image
                src="/Images/Hero.jpg"
                alt="Luxury Interior"
                width={700}
                height={850}
                priority
                className="w-full h-[760px] object-cover hover:scale-105 transition-transform duration-700"
              />

            </div>

            

          </div>

        </div>

      </div>
    </section>
  );
}
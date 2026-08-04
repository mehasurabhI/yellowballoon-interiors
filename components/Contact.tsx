"use client";

import { useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleWhatsApp = () => {

    if (
      !formData.name ||
      !formData.phone ||
      !formData.service
    ) {
      alert("Please fill Name, Phone and Service.");
      return;
    }

    const phone = "919677616264";

    const text = `Hi Yellow Balloon Interiors,

I would like to enquire about your interior services.

Name: ${formData.name}

Phone: ${formData.phone}

Email: ${formData.email}

Service: ${formData.service}

Message:
${formData.message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

  };

  return (
    <section
      id="contact"
      className="py-32 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-24">

          <p className="uppercase tracking-[6px] text-yellow-500 font-semibold">
            Contact Us
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-[#071A3D] mt-4 leading-tight">
            Let's Build Your
            <br />
            Dream Home Together
          </h2>

          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto leading-8">
            Whether you're planning a modular kitchen,
            wardrobe or complete home interior,
            our team is ready to help bring your ideas to life.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          <div className="bg-white rounded-3xl shadow-xl p-10 h-full">

            <h3 className="text-3xl font-bold text-[#071A3D] mb-8">
              Request Free Consultation
            </h3>

            <form
              className="space-y-7"
              onSubmit={(e) => {
                e.preventDefault();
                handleWhatsApp();
              }}
            >

              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    service: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="">
                  Select Service
                </option>

                <option>
                  Modular Kitchen
                </option>

                <option>
                  Wardrobe
                </option>

                <option>
                  Living Room
                </option>

                <option>
                  Bedroom
                </option>

                <option>
                  TV Unit
                </option>

                <option>
                  Complete Home Interiors
                </option>

              </select>

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />              <button
                type="submit"
                className="
                  w-full
                  bg-yellow-400
                  text-[#071A3D]
                  font-bold
                  text-lg
                  py-4
                  rounded-full
                  hover:bg-yellow-500
                  transition
                  duration-300
                  shadow-lg
                "
              >
                Get Free Quote →
              </button>

            </form>

          </div>

          {/* Right Card */}

          <div className="bg-[#071A3D] rounded-3xl shadow-xl p-10 text-white h-full flex flex-col justify-center">

            <h3 className="text-4xl font-bold mb-10">
              Visit Our Studio
            </h3>

            <div className="space-y-8">

              <div>
                <h4 className="text-yellow-400 text-xl font-bold">
                  Address
                </h4>

                <p className="text-gray-300 mt-2 leading-7">
                  Your Office Address
                  <br />
                  Chennai, Tamil Nadu
                </p>
              </div>

              <div>
                <h4 className="text-yellow-400 text-xl font-bold">
                  Phone
                </h4>

                <p className="text-gray-300 mt-2">
                  +91 96776 16264
                </p>
              </div>

              <div>
                <h4 className="text-yellow-400 text-xl font-bold">
                  Email
                </h4>

                <p className="text-gray-300 mt-2">
                  info@yellowballooninteriors.com
                </p>
              </div>

              <div>
                <h4 className="text-yellow-400 text-xl font-bold">
                  Working Hours
                </h4>

                <p className="text-gray-300 mt-2 leading-7">
                  Monday – Saturday
                  <br />
                  9:00 AM – 7:00 PM
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
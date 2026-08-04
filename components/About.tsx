export default function About() {
  const features = [
    "Premium Materials",
    "Customized Designs",
    "Turnkey Solutions",
    "On-Time Delivery",
  ];

  return (
    <section
      id="about"
      className="py-28 bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT IMAGE */}

          <div className="lg:col-span-7">

            <img
              src="/Images/livingroom1.jpg"
              alt="Yellow Balloon Interiors"
              className="w-full h-[620px] object-cover rounded-[32px] shadow-2xl hover:scale-[1.02] transition duration-500"
            />

          </div>

          {/* RIGHT CONTENT */}

          <div className="lg:col-span-5">

            {/* Heading */}

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-[3px] bg-[#F4C542]" />

              <p className="uppercase tracking-[6px] text-[#F4C542] font-semibold text-sm">
                About Us
              </p>

            </div>

            <h2 className="text-5xl xl:text-6xl font-bold leading-tight text-[#071A3D]">

              Luxury Interiors

              <br />

              Crafted Around

              <br />

              Your Lifestyle

            </h2>

            {/* Description */}

            <p className="mt-8 text-lg text-gray-600 leading-9">

              At <strong>Yellow Balloon Interiors</strong>,
              we create elegant interiors that blend beauty,
              comfort, and functionality.

            </p>

            <p className="mt-5 text-lg text-gray-600 leading-9">

              From modular kitchens and wardrobes to complete
              home interiors, we design spaces that perfectly
              reflect your lifestyle using premium materials,
              expert craftsmanship, and modern aesthetics.

            </p>

            {/* FEATURES */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {features.map((feature, index) => (

                <div
                  key={index}
                  className="flex items-center bg-white rounded-2xl p-4 shadow hover:shadow-lg transition"
                >

                  <div className="w-10 h-10 rounded-full bg-[#F4C542] flex items-center justify-center font-bold text-[#071A3D]">

                    ✓

                  </div>

                  <span className="ml-4 font-medium text-gray-700">

                    {feature}

                  </span>

                </div>

              ))}

            </div>

            {/* BUTTON */}

            <div className="mt-12">

              <a
                href="#contact"
                className="inline-flex items-center bg-[#071A3D] text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-[#0d2c64] transition shadow-xl"
              >

                Book Free Consultation

                <span className="ml-3 text-xl">
                  →
                </span>

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
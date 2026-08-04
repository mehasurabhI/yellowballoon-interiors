export default function Services() {
  const services = [
    {
      title: "Modular Kitchen",
      image: "/Images/kitchen1.jpg",
      description:
        "Elegant modular kitchens crafted with premium materials, intelligent layouts, and modern finishes.",
      features: [
        "Premium Materials",
        "Soft-Close Hardware",
        "Custom Layouts",
      ],
    },
    {
      title: "Wardrobes",
      image: "/Images/wardrobe1.jpg",
      description:
        "Beautiful wardrobes designed to maximize storage while enhancing the aesthetics of your bedroom.",
      features: [
        "Sliding & Hinged Options",
        "Mirror Finish",
        "Smart Storage Solutions",
      ],
    },
    {
      title: "Living Room Interiors",
      image: "/Images/livingroom1.jpg",
      description:
        "Modern TV units and living room interiors designed to create elegant and welcoming spaces.",
      features: [
        "TV Units",
        "Display Shelves",
        "Decorative Wall Panels",
      ],
    },
    {
      title: "Complete Home Interiors",
      image: "/Images/bedroom2.jpg",
      description:
        "End-to-end interior solutions from concept and 3D design to execution and final handover.",
      features: [
        "3D Design",
        "Project Management",
        "On-Time Delivery",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-[#F8F9FA]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <p className="text-center uppercase tracking-[6px] text-[#F4C542] font-semibold">
          Our Services
        </p>

        <h2 className="text-5xl font-bold text-center text-[#071A3D] mt-4">
          Tailored Interior Solutions
        </h2>

        <p className="text-center text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
          From modular kitchens to complete home interiors, we design
          beautiful spaces that combine functionality, comfort and timeless
          elegance.
        </p>

        {/* Service Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold text-[#071A3D]">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">

                  {service.features.map((feature, i) => (

                    <li
                      key={i}
                      className="flex items-center text-gray-700"
                    >
                      <span className="text-[#F4C542] font-bold mr-3">
                        ✓
                      </span>

                      {feature}

                    </li>

                  ))}

                </ul>

                <a
                  href="#contact"
                  className="inline-block mt-8 bg-[#F4C542] hover:bg-yellow-300 text-[#071A3D] font-semibold px-6 py-3 rounded-full transition duration-300"
                >
                  Get Free Quote →
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
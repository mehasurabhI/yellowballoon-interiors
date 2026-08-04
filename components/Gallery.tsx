export default function Gallery() {
  const projects = [
    {
      title: "Luxury Living Room",
      category: "Living Room",
      image: "/Images/livingroom1.jpg",
    },
    {
      title: "Modern Modular Kitchen",
      category: "Kitchen",
      image: "/Images/kitchen1.jpg",
    },
    {
      title: "Elegant Bedroom",
      category: "Bedroom",
      image: "/Images/bedroom1.jpg",
    },
    {
      title: "Premium Wardrobe",
      category: "Wardrobe",
      image: "/Images/wardrobe1.jpg",
    },
    {
      title: "Luxury Bedroom",
      category: "Bedroom",
      image: "/Images/bedroom2.jpg",
    },
    {
      title: "Contemporary Living",
      category: "Living Room",
      image: "/Images/livingroom2.jpg",
    },
    {
      title: "Designer Kitchen",
      category: "Kitchen",
      image: "/Images/kitchen2.jpg",
    },
    {
      title: "Modern TV Unit",
      category: "TV Unit",
      image: "/Images/livingroom1.jpg",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-24 bg-[#071A3D]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-center text-[#F4C542] font-semibold">
          Portfolio
        </p>

        <h2 className="text-5xl font-bold text-center text-white mt-4">
          Our Recent Projects
        </h2>

        <p className="text-center text-gray-300 mt-6 max-w-3xl mx-auto leading-8">
          Every project reflects our commitment to quality craftsmanship,
          premium materials, and timeless interior design.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden shadow-xl"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500">

                <div className="absolute bottom-6 left-6 right-6">

                  <span className="bg-[#F4C542] text-[#071A3D] text-xs font-bold px-3 py-1 rounded-full">
                    {project.category}
                  </span>

                  <h3 className="text-white text-2xl font-bold mt-4">
                    {project.title}
                  </h3>

                  <a
                    href="#contact"
                    className="inline-block mt-5 bg-white text-[#071A3D] px-5 py-2 rounded-full font-semibold hover:bg-[#F4C542] transition"
                  >
                    Get Free Quote →
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
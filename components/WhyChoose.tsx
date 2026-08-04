export default function WhyChoose() {
  const features = [
    {
      icon: "🏡",
      title: "Premium Materials",
      description:
        "We use only high-quality materials that ensure durability, elegance and lasting value.",
    },
    {
      icon: "🎨",
      title: "Custom Designs",
      description:
        "Every interior is thoughtfully designed to match your lifestyle and personal taste.",
    },
    {
      icon: "⏰",
      title: "On-Time Delivery",
      description:
        "We complete every project on schedule without compromising quality.",
    },
    {
      icon: "👷",
      title: "Expert Team",
      description:
        "Our experienced designers and craftsmen deliver flawless execution from start to finish.",
    },
    {
      icon: "💎",
      title: "Affordable Luxury",
      description:
        "Premium interiors crafted to suit your budget without sacrificing elegance.",
    },
    {
      icon: "⭐",
      title: "Customer Satisfaction",
      description:
        "Your happiness is our priority. We build spaces you'll love for years to come.",
    },
  ];

  return (
    <section id="whychoose" className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-yellow-500 uppercase tracking-[6px] font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold text-[#071A3D] mt-4">
            Why Homeowners
            <br />
            Choose Yellow Balloon
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Crafting elegant interiors with premium materials,
            expert workmanship and exceptional customer service
            that transforms your dream home into reality.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {features.map((feature, index) => (

            <div
              key={index}
              className="
              bg-white
              rounded-3xl
              border-t-4
              border-yellow-400
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-3
              hover:scale-[1.02]
              transition-all
              duration-500
              p-10
              "
            >

              <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center text-4xl shadow-md">
                {feature.icon}
              </div>

              <h3 className="text-3xl font-bold text-[#071A3D] mt-8">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-8 mt-5 text-lg">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
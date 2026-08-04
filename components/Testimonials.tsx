export default function Testimonials() {
  const testimonials = [
    {
      name: "Arun Kumar",
      location: "Coimbatore",
      review:
        "Yellow Balloon transformed our home beautifully. The team was professional, creative and completed the project on time.",
    },
    {
      name: "Priya Sharma",
      location: "Erode",
      review:
        "Excellent quality and workmanship. Every detail was perfectly executed. Highly recommended!",
    },
    {
      name: "Ramesh Babu",
      location: "Salem",
      review:
        "From design to execution, everything was smooth. The modular kitchen exceeded our expectations.",
    },
  ];

  return (
    <section id="testimonials" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-yellow-500 font-semibold">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold text-[#071A3D] mt-4">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Our greatest achievement is the satisfaction of our clients.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 p-10 border border-gray-100"
            >

              <div className="text-yellow-400 text-4xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 mt-6 leading-8 italic">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h4 className="text-2xl font-bold text-[#071A3D]">
                  {item.name}
                </h4>

                <p className="text-gray-500">
                  {item.location}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
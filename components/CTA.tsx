export default function CTA() {
  return (
    <section className="py-24 bg-[#071A3D] relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[6px] text-yellow-400 font-semibold">
          Ready To Transform Your Home?
        </p>

        <h2 className="text-5xl md:text-6xl font-bold text-white mt-6 leading-tight">
          Let's Design Something
          <br />
          Beautiful Together
        </h2>

        <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-8 leading-8">
          Whether it's a modular kitchen, wardrobe, TV unit or complete
          home interiors, our expert team is ready to bring your vision
          to life.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">

          <a
            href="#contact"
            className="bg-yellow-400 text-[#071A3D] px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition"
          >
            Get Free Consultation
          </a>

          <a
            href="tel:+919876543210"
            className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#071A3D] transition"
          >
            Call Now
          </a>

        </div>

      </div>

    </section>
  );
}
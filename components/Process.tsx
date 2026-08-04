export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We understand your requirements, lifestyle and budget before starting the design.",
    },
    {
      number: "02",
      title: "Design & Planning",
      description:
        "Our designers prepare layouts, 3D concepts and material selections for approval.",
    },
    {
      number: "03",
      title: "Execution",
      description:
        "Our skilled team manufactures and installs every element with precision.",
    },
    {
      number: "04",
      title: "Final Handover",
      description:
        "After quality inspection, we hand over your beautifully finished dream home.",
    },
  ];

  return (
    <section id="process" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-yellow-500 font-semibold">
            Our Process
          </p>

          <h2 className="text-5xl font-bold text-[#071A3D] mt-4">
            How We Bring Your
            <br />
            Dream Home To Life
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            A simple, transparent process from the first consultation
            to the final handover.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {steps.map((step) => (

            <div
              key={step.number}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center"
            >

              <div className="w-20 h-20 mx-auto rounded-full bg-yellow-400 flex items-center justify-center text-3xl font-bold text-[#071A3D]">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold text-[#071A3D] mt-8">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-5 leading-8">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
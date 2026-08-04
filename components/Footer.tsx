export default function Footer() {
  return (
    <footer className="bg-[#071A3D] text-white">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Company */}
          <div>

            <img
              src="/logo/logo.png"
              alt="Yellow Balloon"
              className="w-24 mb-6"
            />

            <h2 className="text-3xl font-bold text-yellow-400">
              Yellow Balloon
            </h2>

            <p className="mt-5 text-gray-300 leading-8">
              Designing elegant interiors that blend beauty,
              comfort and functionality for modern living.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li><a href="#home" className="hover:text-yellow-400">Home</a></li>

              <li><a href="#about" className="hover:text-yellow-400">About</a></li>

              <li><a href="#services" className="hover:text-yellow-400">Services</a></li>

              <li><a href="#gallery" className="hover:text-yellow-400">Portfolio</a></li>

              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Our Services
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>Modular Kitchen</li>

              <li>Wardrobes</li>

              <li>TV Unit</li>

              <li>False Ceiling</li>

              <li>Complete Home Interiors</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-300">

              <p>
                📍 chennai,Tamilnadu.
              </p>

              <p>
                📞 +91 9677616264
              </p>

              <p>
                ✉️ info@yellowballooninteriors.com
              </p>

              <p>
                🕒 Mon - Sat | 9 AM - 7 PM
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400">
            © 2026 Yellow Balloon Interiors. All Rights Reserved.
          </p>

          <p className="text-gray-400 mt-4 md:mt-0">
            Designed with ❤️ for Beautiful Homes
          </p>

        </div>

      </div>

    </footer>
  );
}
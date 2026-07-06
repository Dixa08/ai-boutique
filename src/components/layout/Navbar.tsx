export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <h1 className="text-2xl font-bold text-white">
          AI Boutique
        </h1>

        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <a href="#" className="hover:text-white transition">
            Features
          </a>

          <a href="#" className="hover:text-white transition">
            AI Stylist
          </a>

          <a href="#" className="hover:text-white transition">
            Pricing
          </a>

          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>

        <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
          Get Started
        </button>

      </div>
    </nav>
  );
}
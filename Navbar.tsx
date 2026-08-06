export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          Landing
        </h1>

        <ul className="hidden md:flex gap-8 font-medium text-black">
          <li>
            <a href="#" className="hover:text-blue-600 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-blue-600 transition">
              Services
            </a>
          </li>

          <li>
            <a href="#features" className="hover:text-blue-600 transition">
              Features
            </a>
          </li>

          <li>
            <a href="#testimonials" className="hover:text-blue-600 transition">
              Testimonials
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </nav>
    </header>
  );
}
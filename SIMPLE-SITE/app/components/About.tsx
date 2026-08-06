export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="About Us"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side */}
        <div>
          <p className="text-blue-600 font-semibold uppercase">
            About Us
          </p>

          <h2 className="text-6xl font-bold mt-3 text-gray-400">
            We Build Digital Solutions For Businesses
          </h2>

          <p className="text-gray-600 mt-6">
            Our team specializes in creating modern, responsive, and
            user-friendly websites that help businesses grow online.
          </p>

          <p className="text-gray-600 mt-4">
            We combine creativity, technology, and innovation to deliver
            high-quality digital experiences.
          </p>

          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}
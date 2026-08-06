export default function Hero() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        <div>
         <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                 Build Your Business With Modern Technology
           </h1>


          <p className="mt-6 text-gray-600">
            We create modern websites that are fast, responsive and
            beautifully designed for your business.
          </p>

          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Hero"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
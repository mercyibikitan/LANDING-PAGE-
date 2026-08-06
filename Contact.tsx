export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase">
            Contact Us
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Get In Touch
          </h2>

          <p className="text-gray-600 mt-4">
            We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>

        <form className="max-w-2xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}
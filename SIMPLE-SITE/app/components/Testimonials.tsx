export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Tech Solutions",
      review:
        "Working with this team was an amazing experience. They delivered a modern website that exceeded our expectations.",
    },
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      review:
        "Professional, creative, and responsive. I highly recommend their services.",
    },
    {
      name: "Michael Smith",
      role: "Marketing Manager",
      review:
        "The team transformed our online presence and improved our customer experience.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold mt-3">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <p className="text-gray-600 italic">
                "{testimonial.review}"
              </p>

              <h3 className="mt-6 text-xl font-bold">
                {testimonial.name}
              </h3>

              <p className="text-blue-600">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default function Features() {
  const features = [
    {
      title: "Fast Performance",
      description: "Our websites load quickly and provide a smooth user experience.",
    },
    {
      title: "Responsive Design",
      description: "Your website looks great on mobile, tablet, and desktop devices.",
    },
    {
      title: "Secure",
      description: "We follow best practices to build secure and reliable applications.",
    },
    {
      title: "Modern Technology",
      description: "Built with the latest technologies like React and Next.js.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Our Features
          </h2>

          <p className="text-gray-600 mt-4">
            We build high-quality digital products with performance and user experience in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border rounded-xl p-8 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
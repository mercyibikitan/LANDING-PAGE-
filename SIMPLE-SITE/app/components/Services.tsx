export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "We build fast, responsive, and modern websites for businesses.",
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful and user-friendly interfaces that improve user experience.",
    },
    {
      title: "Digital Marketing",
      description:
        "Helping businesses grow through effective online marketing strategies.",
    },
    {
      title: "Branding",
      description:
        "Creating strong and memorable brands that stand out.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase">
            Our Services
          </p>

          <h2 className="text-4xl font-bold mt-3">
            What We Offer
          </h2>

          <p className="text-gray-600 mt-4">
            We provide high-quality digital solutions to help businesses succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
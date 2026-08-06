export default function Stats() {
  const stats = [
    {
      number: "250+",
      title: "Happy Clients",
    },
    {
      number: "500+",
      title: "Projects Completed",
    },
    {
      number: "50+",
      title: "Expert Team",
    },
    {
      number: "10+",
      title: "Years Experience",
    },
  ];

  return (
    <section id="stats" className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {stats.map((stat, index) => (
            <div key={index}>
              <h2 className="text-5xl font-bold text-white">
                {stat.number}
              </h2>

              <p className="text-white mt-3 text-lg">
                {stat.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
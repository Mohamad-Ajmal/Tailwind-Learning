const stats = [
  {
    value: "10K+",
    label: "Active Users",
  },
  {
    value: "150+",
    label: "Projects Built",
  },
  {
    value: "98%",
    label: "Success Rate",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center lg:border-r lg:border-white/20 lg:last:border-r-0"
            >
              <h3 className="text-4xl font-bold text-white sm:text-5xl">
                {stat.value}
              </h3>

              <p className="mt-2 text-sm font-medium text-blue-100 sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function Features() {
  const features = [
    {
      title: "Responsive Design",
      description:
        "Create layouts that work beautifully on mobile, tablet and desktop.",
      icon: "📱",
    },
    {
      title: "Modern Components",
      description:
        "Build clean and reusable UI components for modern applications.",
      icon: "✨",
    },
    {
      title: "Fast Development",
      description:
        "Use Tailwind utility classes to design interfaces much faster.",
      icon: "⚡",
    },
    {
      title: "Custom Designs",
      description:
        "Create your own colors, spacing, typography and design system.",
      icon: "🎨",
    },
    {
      title: "Reusable Layouts",
      description:
        "Build flexible layouts that can be reused throughout your project.",
      icon: "🧩",
    },
    {
      title: "Production Ready",
      description:
        "Learn patterns commonly used in real professional applications.",
      icon: "🚀",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Features
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build modern websites
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Learn Tailwind CSS through practical components and real website
            layouts.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl transition group-hover:bg-blue-600">
                <span className="group-hover:scale-110 transition">
                  {feature.icon}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {feature.description}
              </p>

              <button className="mt-5 font-medium text-blue-600 transition hover:text-blue-800">
                Learn more →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
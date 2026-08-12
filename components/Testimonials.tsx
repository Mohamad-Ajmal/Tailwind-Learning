const testimonials = [
  {
    name: "Ahmad Khan",
    role: "Frontend Developer",
    message:
      "Tailwind CSS helped me build responsive interfaces much faster without writing large CSS files.",
    initials: "AK",
  },
  {
    name: "Sara Ali",
    role: "UI Designer",
    message:
      "The utility-first approach makes it much easier to maintain consistent spacing, colors and typography.",
    initials: "SA",
  },
  {
    name: "Omar Rahimi",
    role: "Software Engineer",
    message:
      "Using Tailwind with Next.js gives us a clean and productive workflow for modern applications.",
    initials: "OR",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What people say about us
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            See how developers are using modern tools to build better web
            experiences.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex min-h-72 flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              {/* Rating */}
              <div className="flex gap-1 text-yellow-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              {/* Message */}
              <p className="mt-5 flex-1 leading-7 text-gray-600">
                “{testimonial.message}”
              </p>

              {/* Person */}
              <div className="mt-6 flex items-center gap-4 border-t border-gray-100 pt-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                  {testimonial.initials}
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
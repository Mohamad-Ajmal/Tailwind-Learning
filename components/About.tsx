import Image from "next/image";

export default function About() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

        {/* Image side */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/About.webp"
              alt="Team working together"
              width={700}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-white p-6 shadow-xl sm:block">
            <p className="text-3xl font-bold text-blue-600">
              5+
            </p>

            <p className="mt-1 text-sm font-medium text-gray-600">
              Years of Experience
            </p>
          </div>
        </div>

        {/* Content side */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            About Us
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We build modern digital experiences
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We create responsive and modern web applications using technologies
            like Next.js and Tailwind CSS.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            Our focus is on clean interfaces, responsive layouts and reusable
            components that make applications easier to maintain.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <p className="text-2xl font-bold text-gray-900">
                100+
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Components
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-900">
                50+
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Projects
              </p>
            </div>
          </div>

          <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}
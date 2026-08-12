export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">

        {/* Left side */}
        <div>
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Modern Web Development
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Build beautiful websites with
            <span className="text-blue-600"> Tailwind CSS</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Learn how to build responsive, modern and professional websites
            using Next.js and Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
              Get Started
            </button>

            <button className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="rounded-3xl bg-blue-600 p-10 shadow-xl">
          <div className="rounded-2xl bg-white p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Tailwind CSS
            </h2>

            <p className="mt-3 text-gray-600">
              Build interfaces quickly using utility classes.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-gray-100 p-4 text-gray-700">
                Responsive Design
              </div>

              <div className="rounded-xl bg-gray-100 p-4 text-gray-700">
                Modern Layouts
              </div>

              <div className="rounded-xl bg-gray-100 p-4 text-gray-700">
                Reusable Components
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
export default function Contact() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Contact Us
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Have a project in mind?
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Tell us about your project and our team will get back to you as
              soon as possible.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="mt-1 text-gray-600">hello@example.com</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="mt-1 text-gray-600">+93 700 000 000</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">Location</p>
                <p className="mt-1 text-gray-600">Kabul, Afghanistan</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="rounded-2xl border border-gray-200 bg-gray-50 p-8">

            {/* Name + Email */}
            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-hidden"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-hidden"
                />
              </div>

            </div>

            {/* Subject */}
            <div className="mt-6">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-gray-700"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="Project subject"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-hidden"
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your project..."
                className="mt-2 w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-hidden"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}
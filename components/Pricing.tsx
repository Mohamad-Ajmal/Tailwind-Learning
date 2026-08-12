const plans = [
  {
    name: "Basic",
    price: "$19",
    description: "Perfect for individuals getting started.",
    features: [
      "1 Website",
      "Basic Components",
      "Email Support",
      "Responsive Design",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$49",
    description: "Best choice for professional projects.",
    features: [
      "10 Websites",
      "Advanced Components",
      "Priority Support",
      "Custom Designs",
      "Dark Mode",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For teams building larger applications.",
    features: [
      "Unlimited Websites",
      "Premium Components",
      "24/7 Support",
      "Custom Design System",
      "Team Collaboration",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Pricing
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose the right plan
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Simple pricing plans designed for individuals, professionals and
            teams.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl bg-white p-8 ${
                plan.popular
                  ? "ring-2 ring-blue-600 shadow-xl"
                  : "border border-gray-200 shadow-sm"
              }`}
            >

              {/* Popular badge */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-semibold text-gray-900">
                {plan.name}
              </h3>

              <p className="mt-3 text-gray-600">
                {plan.description}
              </p>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {plan.price}
                </span>

                <span className="pb-1 text-gray-500">
                  / month
                </span>
              </div>

              {/* Feature list */}
              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm text-green-600">
                      ✓
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 rounded-lg px-6 py-3 font-medium transition ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Choose Plan
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
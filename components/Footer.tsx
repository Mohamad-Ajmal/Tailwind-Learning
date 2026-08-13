import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Services",
    links: ["Web Design", "Development", "UI/UX", "Consulting"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Center", "Privacy", "Terms"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold">
              MyWebsite
            </Link>

            <p className="mt-4 max-w-sm leading-7 text-gray-400">
              Building modern, responsive and professional web experiences
              using Next.js and Tailwind CSS.
            </p>
          </div>

          {/* Footer links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-white">
                {group.title}
              </h3>

              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 transition hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom section */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 MyWebsite. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>

            <Link href="#" className="hover:text-white">
              Terms
            </Link>

            <Link href="#" className="hover:text-white">
              Cookies
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
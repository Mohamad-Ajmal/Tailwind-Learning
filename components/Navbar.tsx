"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Main navbar */}
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            MyWebsite
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-gray-600 transition hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-gray-600 transition hover:text-blue-600"
            >
              About
            </Link>

            <Link
              href="/services"
              className="text-gray-600 transition hover:text-blue-600"
            >
              Services
            </Link>

            <Link
              href="/contact"
              className="text-gray-600 transition hover:text-blue-600"
            >
              Contact
            </Link>

            <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-2xl text-gray-700 hover:bg-gray-100 md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-4">

              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-gray-600 hover:text-blue-600"
              >
                About
              </Link>

              <Link
                href="/services"
                className="text-gray-600 hover:text-blue-600"
              >
                Services
              </Link>

              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-600"
              >
                Contact
              </Link>

              <button className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">
                Get Started
              </button>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Main navbar */}
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-primary"
          >
            MyWebsite
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-muted transition hover:text-primary"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-muted transition hover:text-primary"
            >
              About
            </Link>

            <Link
              href="/services"
              className="text-muted transition hover:text-primary"
            >
              Services
            </Link>

            <Link
              href="/contact"
              className="text-muted transition hover:text-primary"
            >
              Contact
            </Link>

            <button className="rounded-lg bg-primary px-5 py-2 text-sm font-medium text-white transition hover:bg-primary-hover">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-2xl text-foreground-secondary hover:bg-gray-100 md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-4">

              <Link
                href="/"
                className="text-muted hover:text-primary"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-muted hover:text-primary"
              >
                About
              </Link>

              <Link
                href="/services"
                className="text-muted hover:text-primary"
              >
                Services
              </Link>

              <Link
                href="/contact"
                className="text-muted hover:text-primary"
              >
                Contact
              </Link>

              <button className="rounded-lg bg-primary px-5 py-2 font-medium bg-surface hover:bg-primary-hover">
                Get Started
              </button>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
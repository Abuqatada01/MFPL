"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50">
      {/* ================= TOP INFO BAR ================= */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-semibold text-sky-500 leading-none">
              Snappy
            </h1>
            <p className="text-xs text-gray-500 tracking-wide">
              Finance & business
            </p>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-4">
              <span className="icon-shape">✉</span>
              <span>snappy_info@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="icon-shape">☎</span>
              <span>+088 01823456797</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {["in", "f", "t", "G+"].map((icon) => (
              <span
                key={icon}
                className="h-9 w-9 flex items-center justify-center icon-shape"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav className="flex justify-center ">
        <div className="w-[50vw] bg-[#0f2a35] mx-auto px-2 h-[70px] flex items-center justify-between">
          {/* Menu */}
          <ul className="hidden md:flex items-center gap-10 text-white font-medium w-[40vw] justify-center">
            {[
              "Home",
              "About Us",
              "Page",
              "Services",
              "Project",
              "Blog",
              "Contact Us",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="/"
                  className="relative hover:text-sky-400 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sky-400 hover:after:w-full after:transition-all"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/quote"
            className="bg-sky-500 text-white px-6 py-3 font-semibold flex items-center gap-2 hover:bg-sky-600 transition"
          >
            Free Quote →
          </Link>
        </div>
      </nav>
    </header>
  );
}

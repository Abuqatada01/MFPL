"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  List,
  X,
} from "@phosphor-icons/react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* ================= TOP NAVBAR ================= */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
          {/* MOBILE + DESKTOP WRAPPER */}
          <div className="flex md:grid md:grid-cols-3 items-center">
            {/* LEFT   LOGO */}
            <div className="flex items-center flex-1 md:flex-none">
              <Link href="/" className="flex items-center gap-3">
                <img
                  src="/Logoblack.png"
                  className="h-9 md:h-10 w-auto"
                  alt="Medicomo Logo"
                />
              </Link>
            </div>

            {/* CENTER   PILL NAV (DESKTOP ONLY) */}
            <div className="hidden md:flex justify-center">
              <nav>
                <div className="flex w-[21.5vw] items-center px-8 h-[64px] rounded-full backdrop-blur-md ui-badge-2">
                  <ul className="flex items-center gap-6 font-medium">
                    {menuItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="relative ui-h3 text-white transition-all duration-300
                          after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                          after:w-0 after:bg-white after:transition-all hover:after:w-full"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>

            {/* RIGHT   SOCIALS + HAMBURGER */}
            <div className="flex items-center justify-end gap-2 flex-1 md:flex-none">
              {/* Desktop socials */}
              <div className="hidden md:flex items-center gap-3">
                <Link
                  href="https://www.instagram.com/mfpl__?igsh=dXY5NDV1ZXcwdWM1"
                  target="_blank"
                  aria-label="Instagram"
                  className="glass-icon"
                >
                  <InstagramLogoIcon weight="fill" size={22} />
                </Link>

                <Link
                  href="https://www.facebook.com/profile.php?id=61585006272529"
                  target="_blank"
                  aria-label="Facebook"
                  className="glass-icon"
                >
                  <FacebookLogoIcon weight="fill" size={22} />
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden h-10 w-10 flex items-center justify-center rounded-full bg-[#EDF5EE]"
                aria-label="Toggle menu"
              >
                {open ? <X size={22} /> : <List size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-white shadow-lg rounded-b-3xl">
          <div className="flex flex-col p-6 gap-5">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-semibold text-[#14542B]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact-us"
              onClick={() => setOpen(false)}
              className="mt-4 text-center py-3 rounded-full text-white font-semibold"
              style={{
                background: "linear-gradient(135deg, #53945B, #83A33C)",
              }}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

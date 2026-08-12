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
          {/* 
            MOBILE: flex justify-between (logo left, button right)
            TABLET+: grid with centered pill
          */}
          <div className="flex justify-between items-center md:grid md:grid-cols-[auto_1fr_auto] md:gap-4">
            
            {/* LEFT - LOGO */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <img
                  src="/Logoblack.png"
                  className="h-10 w-auto object-contain"
                  alt="Medicomo Logo"
                />
              </Link>
            </div>

            {/* CENTER - PILL NAV (Desktop/Tablet only) */}
            <div className="hidden md:flex justify-center">
              <nav className="w-full max-w-[500px] lg:max-w-[600px]">
                <div className="flex items-center justify-center px-6 lg:px-8 py-3 rounded-full backdrop-blur-md ui-badge-2">
                  <ul className="flex items-center gap-5 lg:gap-8 font-medium">
                    {menuItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="relative text-white transition-all duration-300 whitespace-nowrap text-sm lg:text-base
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

            {/* RIGHT - SOCIALS (desktop) + HAMBURGER (mobile) */}
            <div className="flex items-center gap-2">
              {/* Desktop socials - hidden on mobile, flex on md+ */}
              <div className="hidden md:flex items-center gap-3">
                <Link
                  href="https://www.instagram.com/mfpl__?igsh=dXY5NDV1ZXcwdWM1"
                  target="_blank"
                  aria-label="Instagram"
                  className="glass-icon hover:opacity-80 transition-opacity"
                >
                  <InstagramLogoIcon weight="fill" size={22} />
                </Link>

                <Link
                  href="https://www.facebook.com/profile.php?id=61585006272529"
                  target="_blank"
                  aria-label="Facebook"
                  className="glass-icon hover:opacity-80 transition-opacity"
                >
                  <FacebookLogoIcon weight="fill" size={22} />
                </Link>
              </div>

              {/* Mobile hamburger - visible only on small screens */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden h-10 w-10 flex items-center justify-center rounded-full bg-[#EDF5EE] hover:bg-[#d4e5d6] transition-colors"
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
        <div className="md:hidden bg-white shadow-lg rounded-b-3xl absolute w-full left-0 top-full">
          <div className="flex flex-col p-6 gap-5">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-semibold text-[#14542B] hover:text-[#1f7a3f] transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact-us"
              onClick={() => setOpen(false)}
              className="mt-4 text-center py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
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

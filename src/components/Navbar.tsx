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
        <div className="max-w-7xl mx-auto px-6 py-3 grid grid-cols-3 items-center">
          {/* LEFT — LOGO */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <img src="/Logoblack.png" className="h-10" alt="Logo" />
            </Link>
          </div>

          {/* CENTER — PILL NAV (TRUE CENTER) */}
          <div className="hidden md:flex justify-center">
            <nav>
              <div className="flex items-center px-8 h-[68px] rounded-full backdrop-blur-md ui-badge-2">
                <ul className="flex items-center gap-5 font-medium">
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

          {/* RIGHT — SOCIALS + HAMBURGER */}
          <div className="flex items-center justify-end gap-2">
            {/* Desktop socials */}
            <div className="hidden md:flex items-center gap-3">
              {[
                {
                  url: "https://www.instagram.com/mfpl__?igsh=dXY5NDV1ZXcwdWM1",
                  icon: <InstagramLogoIcon weight="fill" size={22} />,
                  label: "Instagram",
                },
                {
                  url: "https://www.facebook.com/profile.php?id=61585006272529",
                  icon: <FacebookLogoIcon weight="fill" size={22} />,
                  label: "Facebook",
                },
              ].map(({ url, icon, label }, index) => (
                <Link
                  key={index}
                  href={url}
                  target="_blank"
                  aria-label={label}
                  className="glass-icon cursor-pointer"
                >
                  {icon}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden h-10 w-10 flex items-center justify-center rounded-full bg-[#EDF5EE]"
            >
              {open ? <X size={22} /> : <List size={22} />}
            </button>
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

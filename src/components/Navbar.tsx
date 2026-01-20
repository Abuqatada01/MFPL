"use client";

import Link from "next/link";
import { useState } from "react";
import {
  EnvelopeIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  List,
  MailboxIcon,
  PhoneCallIcon,
  X,
  YoutubeLogoIcon,
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
    <header className="sticky top-0 z-50">
      {/* ================= TOP INFO BAR ================= */}
      <div className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/Logoblack.png" className="h-10" alt="Logo" />
          </Link>

          {/* CONTACT INFO (Desktop only) */}
          <div className="hidden md:flex items-center gap-10 text-sm">
            <div className="flex items-center gap-3 glass-contact">
              <span className="glass-icon-sm">
                <EnvelopeIcon weight="fill" size={22} />
              </span>
              <span className="glass-text">Medicosmo_info@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 glass-contact">
              <span className="glass-icon-sm">
                <PhoneCallIcon weight="fill" size={22} />
              </span>
              <span className="glass-text">+91 92050 94789</span>
            </div>
          </div>

          {/* SOCIALS + HAMBURGER */}
          <div className="flex items-center gap-2">
            {/* Desktop socials */}
            <div className="hidden md:flex items-center gap-3">
              {[
                <InstagramLogoIcon weight="fill" size={22} />,
                <FacebookLogoIcon weight="fill" size={22} />,
                <LinkedinLogoIcon weight="fill" size={22} />,
                <YoutubeLogoIcon weight="fill" size={22} />,
              ].map((icon, index) => (
                <span key={index} className="glass-icon">
                  {icon}
                </span>
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

      {/* ================= DESKTOP FLOATING NAV ================= */}
      <nav className="absolute left-1/2 -translate-x-1/2 py-4 hidden md:block">
        <div className="flex items-center justify-between px-8 h-[68px] rounded-full backdrop-blur-md ui-badge-2">
          <ul className="flex items-center gap-10 font-medium">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="relative ui-h3 text-white transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

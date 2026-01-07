"use client";

import Link from "next/link";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      {/* ================= TOP INFO BAR ================= */}
      <div className="border-b" style={{ background: "var(--clr-bg-white)" }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/Logoblack.png" className="h-10" alt="Logo" />
          </Link>

          {/* CONTACT INFO */}
          <div className="hidden md:flex items-center gap-10 text-sm">
            <div className="flex items-center gap-3">
              <span className="icon-shape">✉</span>
              <span style={{ color: "var(--clr-text-muted)" }}>
                Medicosmo_info@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="icon-shape">☎</span>
              <span style={{ color: "var(--clr-text-muted)" }}>
                +91 92050 94789
              </span>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-2">
            {["in", "f", "t"].map((icon) => (
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

      {/* ================= MAIN NAV ================= */}
      <nav className="absolute left-[40%] py-4">
        <div
          className="flex items-center justify-between px-8 h-[68px] rounded-full w-auto max-w-6xl backdrop-blur-md"
          style={{
            background: "rgba(20,84,43,0.92)",
            boxShadow: "0 20px 50px rgba(20,84,43,0.35)",
          }}
        >
          {/* MENU */}
          <ul className="hidden md:flex items-center gap-10 font-medium">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="relative text-white transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--clr-secondary)] after:transition-all hover:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA BUTTON */}
          {/* <Link
            href="/contact-us"
            className="px-7 py-3 rounded-full font-semibold flex items-center gap-2 transition-all"
            style={{
              background:
                "linear-gradient(135deg, var(--clr-secondary), var(--clr-primary))",
              color: "#fff",
              boxShadow: "0 10px 25px rgba(131,163,60,0.4)",
            }}
          >
            Free Quote →
          </Link> */}
        </div>
      </nav>
    </header>
  );
}

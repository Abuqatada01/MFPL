"use client";

import Link from "next/link";

const menuItems = [
  "Home",
  "About Us",
  "Services",
  "Products",
  "Projects",
  "Blog",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      {/* ================= TOP INFO BAR ================= */}
      <div style={{ background: "var(--clr-bg-white)" }} className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img src="/Logoblack.png" className="h-10" alt="Logo" />
          </div>

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
                +088 01823456797
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
      <nav className="flex justify-center py-4">
        <div
          className="flex items-center justify-between px-8 h-[68px] rounded-full w-[90%] max-w-6xl backdrop-blur-md"
          style={{
            background: "rgba(20,84,43,0.92)",
            boxShadow: "0 20px 50px rgba(20,84,43,0.35)",
          }}
        >
          {/* MENU */}
          <ul className="hidden md:flex items-center gap-10 font-medium">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  href="/"
                  className="relative text-white transition-all duration-300
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:w-0 hover:after:w-full after:transition-all"
                  style={{
                    after: { background: "var(--clr-secondary)" } as any,
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA BUTTON */}
          <Link
            href="/quote"
            className="px-7 py-3 rounded-full font-semibold flex items-center gap-2 transition-all"
            style={{
              background:
                "linear-gradient(135deg, var(--clr-secondary), var(--clr-primary))",
              color: "#fff",
              boxShadow: "0 10px 25px rgba(131,163,60,0.4)",
            }}
          >
            Free Quote →
          </Link>
        </div>
      </nav>
    </header>
  );
}

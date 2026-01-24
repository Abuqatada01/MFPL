"use client";
import {
  FacebookLogoIcon,
  GlobeIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  TwitterLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, var(--clr-accent), #0f2f1c)",
        color: "#ffffff",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* ================= BRAND ================= */}
        <div>
          <img
            src="/Logoblack.png"
            alt="Logo"
            className="h-10 mb-4 p-2 rounded"
          />

          <p className="text-sm leading-relaxed opacity-80">
            MFPL provides reliable white label manufacturing solutions, enabling
            beauty brands to grow with confidence, quality, and compliance.
          </p>

          {/* SOCIAL */}

          <div className="flex gap-4 mt-6">
            {[
              {
                href: "https://www.instagram.com/mfpl__?igsh=dXY5NDV1ZXcwdWM1",
                icon: <InstagramLogoIcon weight="fill" size={25} />,
                label: "Instagram",
              },
              {
                href: "https://www.facebook.com/profile.php?id=61585006272529",
                icon: <FacebookLogoIcon weight="fill" size={25} />,
                label: "Facebook",
              },
              // {
              //   href: "https://www.linkedin.com/company/medicosmoformulations",
              //   icon: <LinkedinLogoIcon weight="fill" size={25} />,
              //   label: "LinkedIn",
              // },
              // {
              //   href: "https://www.youtube.com/@medicosmoformulations",
              //   icon: <YoutubeLogoIcon weight="fill" size={25} />,
              //   label: "YouTube",
              // },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="h-9 w-9 flex items-center justify-center rounded-full
                 transition hover:scale-110 hover:bg-white/20
                 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ================= ABOUT LINKS ================= */}
        <div>
          <h3 className="font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-sm opacity-80">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
            {/* <li>
              <Link href="/blog">Blog</Link>
            </li> */}
          </ul>
        </div>

        {/* ================= SERVICES ================= */}
        <div>
          <h3 className="font-semibold mb-5">Products</h3>
          <ul className="space-y-3 text-sm opacity-80">
            <li>
              <Link href="/products">All Products</Link>
            </li>
            <li>
              <Link href="/products">Cosmetics</Link>
            </li>
            <li>
              <Link href="/products">Hair Care</Link>
            </li>
            <li>
              <Link href="/products">Skin Care</Link>
            </li>
            <li>
              <Link href="/products">Mens Grooming</Link>
            </li>
          </ul>
        </div>

        {/* ================= NEWSLETTER ================= */}
        <div>
          {/* <h3 className="font-semibold mb-5">Stay Connected</h3>
          <p className="text-sm opacity-80 mb-5">
            Subscribe to receive updates, insights, and company news.
          </p>

          <div className="flex overflow-hidden rounded-full bg-white">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 text-sm outline-none text-[var(--clr-text-dark)]"
            />
            <button
              className="px-6 text-sm font-semibold"
              style={{
                background:
                  "linear-gradient(135deg, var(--clr-secondary), var(--clr-primary))",
                color: "#fff",
              }}
            >
              Subscribe
            </button>
          </div> */}

          <div className="text-sm  ">
            <p>
              <span className="text-white font-semibold">Mobile</span> : +91
              92050 94789
            </p>
            <p>
              <span className="text-white font-semibold">Email </span>:
              Medicosmo_info@gmail.com
            </p>
            <p>
              <span className="text-white font-semibold">Working Hours</span>:
            </p>
            <p>Mon – Sat : 9:00 AM – 6:00 PM</p>
            <p>Sunday : Closed</p>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div
        className="text-center text-sm py-5"
        style={{
          background: "rgba(0,0,0,0.25)",
          color: "rgba(255,255,255,0.75)",
        }}
      >
        © {new Date().getFullYear()}{" "}
        <span style={{ color: "var(--clr-secondary)" }}>Medicosmo</span>. All
        rights reserved.
        <span style={{ color: "var(--clr-secondary)" }}>Greens Media</span>
      </div>
    </footer>
  );
}

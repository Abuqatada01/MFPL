"use client";
import {
  FacebookLogoIcon,
  GlobeIcon,
  LinkedinLogoIcon,
  TwitterLogoIcon,
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
            className="h-10 mb-4 bg-white p-2 rounded"
          />

          <p className="text-sm leading-relaxed opacity-80">
            MFPL provides reliable white label manufacturing solutions, enabling
            beauty brands to grow with confidence, quality, and compliance.
          </p>

          {/* SOCIAL */}

          <div className="flex gap-4 mt-6">
            {[
              <LinkedinLogoIcon weight="fill" size={25} />,
              <FacebookLogoIcon weight="fill" size={25} />,
              <TwitterLogoIcon weight="fill" size={25} />,
              <GlobeIcon weight="fill" size={25} />,
            ].map((icon, index) => (
              <span
                key={index}
                className="h-9 w-9 flex items-center justify-center rounded-full transition hover:scale-110 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

        {/* ================= ABOUT LINKS ================= */}
        <div>
          <h3 className="font-semibold mb-5">Company</h3>
          <ul className="space-y-3 text-sm opacity-80">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/">Business Partners</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        {/* ================= SERVICES ================= */}
        <div>
          <h3 className="font-semibold mb-5">Services</h3>
          <ul className="space-y-3 text-sm opacity-80">
            <li>
              <Link href="/services">All Services</Link>
            </li>
            <li>
              <Link href="/">Business Growth</Link>
            </li>
            <li>
              <Link href="/">Project Consulting</Link>
            </li>
            <li>
              <Link href="/">Case Studies</Link>
            </li>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* ================= NEWSLETTER ================= */}
        {/* <div>
          <h3 className="font-semibold mb-5">Stay Connected</h3>
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
          </div>

          <div className="text-sm mt-6 opacity-80">
            <p>Working Hours:</p>
            <p>Mon – Sat : 9:00 AM – 6:00 PM</p>
            <p>Sunday : Closed</p>
          </div>
        </div> */}
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
      </div>
    </footer>
  );
}

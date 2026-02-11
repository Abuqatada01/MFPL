"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const options = [
  "Cosmetics Products",
  "Hair Care Products",
  "Skin Care Products",
];
export default function ConsultationSection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Interested In");
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  return (
    <section
      className=" relative overflow-hidden"
      style={{ background: "var(--clr-bg-light)" }}
    >
      <div className="ui-section">
        {/* Soft background accent */}
        <div
          className="absolute top-4 -left-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: "rgba(83,148,91,0.12)",
          }}
        />
        <div
          className="absolute bottom-4 right-4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "rgba(131,163,60,0.12)",
          }}
        />

        <div className="ui-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16 items-center">
            {/* ================= LEFT CONTENT ================= */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl lg:text-5xl font-semibold leading-tight text-[var(--clr-text-dark)]">
                Let’s Build Your <br />
                <span style={{ color: "var(--clr-primary)" }}>
                  Next Successful Brand
                </span>
              </h2>

              <p
                className="lg:mt-4 max-w-xl ui-para"
                style={{ color: "var(--clr-text-muted)" }}
              >
                From concept to compliant manufacturing, MFPL helps you launch
                cosmetic, skincare, and haircare products with speed, quality,
                and confidence. Our white label and private label solutions are
                designed to support brands at every stage of growth.
              </p>

              {/* Trust points */}
              {/* <div className="flex lg:flex-wrap gap-3 lg:gap-8 mt-4 lg:mt-10">
                {[
                  "100+ Partnered Brands",
                  "Multiple Ready-to-Brand Formulations",
                  "Market-Aligned Compliance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex justify-start items-center px-3 py-2 lg:px-6 lg:w-50 lg:py-4 rounded-xl"
                    style={{
                      background: "var(--clr-bg-white)",
                      boxShadow: "0 10px 30px rgba(20,84,43,0.08)",
                    }}
                  >
                    <p
                      className="font-semibold ui-desc"
                      style={{ color: "var(--clr-accent)" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div> */}

              {/* Primary CTA */}
              <div className="mt-5 lg:mt-5">
                <Link
                  href="/contact-us"
                  className="inline-flex ui-cta-premium  items-center gap-3 px-5 py-2 lg:px-10 lg:py-4 rounded-full text-lg font-semibold transition-all"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--clr-primary), var(--clr-secondary))",
                    color: "#fff",
                    boxShadow: "0 20px 40px rgba(83,148,91,0.35)",
                  }}
                >
                  Request a Free Consultation{" "}
                  <span className="ui-cta-arrow">→</span>
                </Link>
              </div>
            </div>

            {/* ================= RIGHT FORM ================= */}
            <div className="lg:col-span-5">
              <div
                className="p-10 rounded-3xl backdrop-blur-xl"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  boxShadow: "0 30px 80px rgba(20,84,43,0.18)",
                }}
              >
                <h3
                  className="text-2xl font-semibold mb-6"
                  style={{ color: "var(--clr-accent)" }}
                >
                  Get in Touch
                </h3>

                <form className="space-y-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none"
                    style={{ borderColor: "rgba(20,84,43,0.25)" }}
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none"
                    style={{ borderColor: "rgba(20,84,43,0.25)" }}
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none"
                    style={{ borderColor: "rgba(20,84,43,0.25)" }}
                  />

                  <div ref={ref} className="relative w-full overflow-visible">
                    {/* Button */}
                    <button
                      type="button"
                      onClick={() => setOpen(!open)}
                      className="
          w-full flex items-center justify-between
          px-4 py-3 pr-12
          rounded-lg border
          text-left
          focus:outline-none focus:ring-2
        "
                      style={{
                        borderColor: "rgba(20,84,43,0.25)",
                        color: "var(--clr-primary)",
                      }}
                    >
                      <span
                        className={
                          selected === "Interested In" ? "text-gray-400" : ""
                        }
                      >
                        {selected}
                      </span>

                      {/* Arrow */}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          open ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    {open && (
                      <ul
                        className="
            absolute z-50 mt-2 w-full xl:w-[400px] xl:ml-4
             border bg-white
            shadow-2xl
            max-h-[96px] 
          "
                        style={{ borderColor: "rgba(20,84,43,0.25)" }}
                      >
                        {options.map((option) => (
                          <li
                            key={option}
                            onClick={() => {
                              setSelected(option);
                              setOpen(false);
                            }}
                            className="
                px-2 py-1 cursor-pointer
                text-[var(--clr-dark)]
                hover:bg-[var(--clr-primary)]
                hover:text-white
                transition
              "
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <Link
                    href="/contact-us"
                    className=" py-2 flex inline-block items-center justify-center px-3 ui-cta-premium"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--clr-primary), var(--clr-secondary))",
                      color: "#fff",
                      boxShadow: "0 20px 40px rgba(83,148,91,0.35)",
                    }}
                  >
                    Contact Our Team
                    <span className="ui-cta-arrow">→</span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

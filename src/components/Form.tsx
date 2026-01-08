"use client";

import Link from "next/link";

export default function ConsultationSection() {
  return (
    <section
      className=" relative overflow-hidden"
      style={{ background: "var(--clr-bg-light)" }}
    >
      <div className="ui-section">
        {/* Soft background accent */}
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: "rgba(83,148,91,0.12)",
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: "rgba(131,163,60,0.12)",
          }}
        />

        <div className="ui-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* ================= LEFT CONTENT ================= */}
            <div className="lg:col-span-7">
              <h2 className="text-5xl font-semibold leading-tight text-[var(--clr-text-dark)]">
                Let’s Build Your <br />
                <span style={{ color: "var(--clr-primary)" }}>
                  Next Successful Brand
                </span>
              </h2>

              <p
                className="mt-6 max-w-xl text-lg"
                style={{ color: "var(--clr-text-muted)" }}
              >
                From concept to compliant manufacturing, MFPL helps you launch
                cosmetic, skincare, and haircare products with speed, quality,
                and confidence. Our white label and private label solutions are
                designed to support brands at every stage of growth.
              </p>

              {/* Trust points */}
              <div className="flex flex-wrap gap-8 mt-10">
                {[
                  "100+ Partnered Brands",
                  "Multiple Ready-to-Brand Formulations",
                  "Market-Aligned Compliance",
                ].map((item) => (
                  <div
                    key={item}
                    className="px-6 w-50 py-4 rounded-xl"
                    style={{
                      background: "var(--clr-bg-white)",
                      boxShadow: "0 10px 30px rgba(20,84,43,0.08)",
                    }}
                  >
                    <p
                      className="font-semibold"
                      style={{ color: "var(--clr-accent)" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Primary CTA */}
              <div className="mt-12">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-lg font-semibold transition-all"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--clr-primary), var(--clr-secondary))",
                    color: "#fff",
                    boxShadow: "0 20px 40px rgba(83,148,91,0.35)",
                  }}
                >
                  Request a Free Consultation →
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

                  <select
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none"
                    style={{ borderColor: "rgba(20,84,43,0.25)" }}
                  >
                    <option>Interested In</option>
                    <option>Cosmetic Manufacturing</option>
                    <option>Private Labelling</option>
                    <option>Product Development</option>
                  </select>

                  <Link
                    href="/contact-us"
                    className="block text-center w-full py-3 rounded-full font-semibold transition-all"
                    style={{
                      background: "var(--clr-accent)",
                      color: "#fff",
                    }}
                  >
                    Contact Our Team →
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

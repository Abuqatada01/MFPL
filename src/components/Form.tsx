"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const options = [
  "Cosmetics Products",
  "Hair Care Products",
  "Skin Care Products",
];

export default function ConsultationSection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Interested In");
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // 🔹 EMAIL SUBMIT HANDLER
 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  const form = e.currentTarget; // ✅ store ref before async call

  try {
    await emailjs.sendForm(
      "service_6pmn1y3",
      "template_ytwaef2",
      form,              // ✅ use stored ref
      "D4g0tOj1HYdlYdheB",
    );

    alert("Thank you! We will contact you soon.");
    form.reset();        // ✅ use stored ref
    setSelected("Interested In");
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--clr-bg-light)" }}
    >
      <div className="ui-section">
        <div
          className="absolute top-4 -left-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "rgba(83,148,91,0.12)" }}
        />
        <div
          className="absolute bottom-4 right-4 w-[500px] h-[500px] rounded-full"
          style={{ background: "rgba(131,163,60,0.12)" }}
        />

        <div className="ui-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl lg:text-5xl font-semibold leading-tight">
                Let’s Build Your <br />
                <span style={{ color: "var(--clr-primary)" }}>
                  Next Successful Brand
                </span>
              </h2>

              <p className="lg:mt-4 max-w-xl ui-para">
                From concept to compliant manufacturing, MFPL helps you launch
                cosmetic, skincare, and haircare products with speed, quality,
                and confidence.
              </p>

              <div className="mt-5">
                <Link
                  href="/contact-us"
                  className="inline-flex ui-cta-premium items-center gap-3 px-5 py-2 lg:px-10 lg:py-4 rounded-full"
                >
                  Request a Free Consultation →
                </Link>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="lg:col-span-5">
              <div className="p-10 rounded-3xl backdrop-blur-xl bg-white/90 shadow-xl">
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

                {/* 🔹 FORM */}
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border"
                  />

                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 rounded-lg border"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 rounded-lg border"
                  />

                  {/* Hidden dropdown value */}
                  <input type="hidden" name="interest" value={selected} />

                  {/* Dropdown */}
                  <div ref={ref} className="relative">
                    <button
                      type="button"
                      onClick={() => setOpen(!open)}
                      className="w-full flex justify-between px-4 py-3 border rounded-lg"
                    >
                      <span
                        className={
                          selected === "Interested In" ? "text-gray-400" : ""
                        }
                      >
                        {selected}
                      </span>
                      ▼
                    </button>

                    {open && (
                      <ul className="absolute z-50 w-full bg-white border shadow-lg mt-2">
                        {options.map((option) => (
                          <li
                            key={option}
                            onClick={() => {
                              setSelected(option);
                              setOpen(false);
                            }}
                            className="px-4 py-2 cursor-pointer hover:bg-[var(--clr-primary)] hover:text-white"
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 ui-cta-premium"
                  style={{
              background:
                "linear-gradient(135deg, var(--clr-primary), var(--clr-secondary))",
              color: "#fff",
              boxShadow: "0 10px 20px rgba(83,148,91,0.35)",
            }}
                  >
                    {loading ? "Sending..." : "Contact Our Team →"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

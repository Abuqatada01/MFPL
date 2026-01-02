"use client";

import Link from "next/link";

export default function ConsultationSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl ui-section mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT: FORM ================= */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Request a Free Consultation Help
            </h2>

            <p className="text-gray-500 max-w-xl mb-10 leading-relaxed">
              How workforce development programs turn talent puddles into talent
              pools. Hiring isn’t easy. Employers might get hundreds
            </p>

            <form className="space-y-6 max-w-lg">
              {/* Select */}
              <div>
                <select className="w-full border border-gray-200 px-4 py-3 text-gray-600 focus:outline-none focus:border-sky-400">
                  <option>Investment Plan</option>
                  <option>Business Growth</option>
                  <option>Financial Planning</option>
                </select>
              </div>

              {/* Name */}
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-sky-400"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-sky-400"
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Phone"
                className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-sky-400"
              />

              {/* Submit */}
              <button
                type="submit"
                className="bg-sky-400 text-white px-8 py-3 font-semibold hover:bg-sky-500 transition"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* ================= RIGHT: IMAGE PANEL ================= */}
          <section className="py-20 bg-white">
            <div className="max-w-8xl mx-auto px-6">
              <div className="relative overflow-hidden rounded-sm">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://themazine.com/html/snappy/images/blog/4.jpg')",
                  }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#0f2a35]/90" />

                {/* Content */}
                <div className="relative z-10 max-w-xl px-10 py-20 text-white">
                  <h2 className="text-4xl font-bold leading-tight mb-6">
                    27 Years of <br />
                    Experience in <span className="text-sky-400">
                      Finance
                    </span>{" "}
                    <br />& Business
                  </h2>

                  <p className="text-gray-200 leading-relaxed mb-8">
                    A business plan you wrote in order to raise some bank money,
                    complete with sales projections and growth plans that you’ve
                    not necessarily looked at since
                  </p>

                  <Link
                    href="/projects"
                    className="inline-block bg-sky-400 px-8 py-3 font-semibold text-white hover:bg-sky-500 transition"
                  >
                    Get More Project
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

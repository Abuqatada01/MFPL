"use client";

import { Heart } from "@phosphor-icons/react";

export default function ContactPage() {
  return (
    <section className="relative py-10 xl:py-25 flex items-start justify-center px-6 overflow-hidden bg-gradient-to-br from-[#effaed] via-white to-[#f6fbf3]">
      {/* SOFT SHAPES */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-[#83A33C]/20 blur-3xl" />
      <div className="absolute bottom-[-160px] right-[-160px] w-[460px] h-[460px] rounded-full bg-[#53945B]/20 blur-3xl" />

      {/* MAIN WRAPPER */}
      <div className="relative z-10 w-full max-w-6xl border-2 border-[var(--clr-secondary)] bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-10 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl font-semibold text-[#242424] mb-3">
              Contact
            </h1>

            <p className="ui-para text-[#242424]/70 max-w-sm leading-relaxed mb-4">
              Our collaborative approach ensures our team works closely with
              you—bringing manufacturing expertise, clarity, and reliable
              support at every stage of your brand journey.
            </p>

            {/* ICON */}
            <div className="flex items-center gap-3 text-[#14542B]">
              <Heart size={22} weight="fill" />
              <span className="text-sm">We’re happy to help</span>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="space-y-10">
            {/* ROW 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Input label="Name" />
              <Input label="Company" />
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Input label="Email" />
              <div>
                <label className="text-xs uppercase tracking-wide text-[#242424]/60">
                  Country
                </label>
                <select className="w-full border-b border-[#242424]/20 py-2 bg-transparent focus:outline-none focus:border-[#53945B] transition">
                  <option>India</option>
                  <option>UAE</option>
                  <option>USA</option>
                </select>
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-xs uppercase tracking-wide text-[#242424]/60">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full border-b border-[#242424]/20 py-2 bg-transparent resize-none focus:outline-none focus:border-[#53945B] transition"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="ui-badge-2 text-white px-10 py-3 rounded-full font-semibold text-sm hover:bg-[#14542B] transition"
            >
              Submit
            </button>

            {/* CONSENT */}
            <div className="flex items-start gap-3 text-xs text-[#242424]/60 max-w-md">
              <input type="checkbox" className="mt-1 accent-[#83A33C]" />
              <p>
                By ticking this box, I consent to the processing of my personal
                data in accordance with the privacy policy.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* THANK YOU CARD */}
      <div className="hidden md:flex absolute bottom-8 left-8 bg-[#83A33C] text-[#14542B] px-6 py-4 rounded-xl shadow-lg text-sm rotate-[-4deg]">
        <div>
          <strong>Thank you!</strong>
          <br />
          Your request was sent
        </div>
      </div>
    </section>
  );
}

/* INPUT COMPONENT */
function Input({ label }: { label: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wide text-[#242424]/60">
        {label}
      </label>
      <input
        type="text"
        className="w-full border-b border-[#242424]/20 py-2 bg-transparent focus:outline-none focus:border-[#53945B] transition"
      />
    </div>
  );
}

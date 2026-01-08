"use client";
import { EyesIcon, TargetIcon, VisorIcon } from "@phosphor-icons/react";
import "./about.css";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <>
      {/* ================= ABOUT BANNER ================= */}
      <section
        className="relative h-[320px] flex items-start overflow-hidden"
        style={{ backgroundColor: "var(--clr-accent)" }}
      >
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://wordpress.zozothemes.com/hirxpert/wp-content/uploads/sites/38/2025/02/service-6-1200x800.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* DARK BRAND OVERLAY */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(20,84,43,0.78), rgba(20,84,43,0.72))",
          }}
        />

        {/* 🟢 HONEYCOMB PATTERN (PURE CSS) */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            backgroundImage: `
        linear-gradient(30deg, rgba(255,255,255,0.18) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.18) 87.5%, rgba(255,255,255,0.18)),
        linear-gradient(150deg, rgba(255,255,255,0.18) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.18) 87.5%, rgba(255,255,255,0.18)),
        linear-gradient(90deg, rgba(255,255,255,0.12) 2%, transparent 2.5%, transparent 97%, rgba(255,255,255,0.12) 97.5%, rgba(255,255,255,0.12))
      `,
            backgroundSize: "48px 84px",
            backgroundPosition: "0 0, 0 0, 24px 42px",
            mixBlendMode: "overlay",
          }}
        />

        {/* DIAGONAL SOFT LIGHT */}
        <div
          className="absolute inset-0 z-30 pointer-events-none"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.18) 0%, transparent 55%)",
          }}
        />

        {/* CONTENT */}
        <div className="ui-container relative z-40 pt-24">
          <h1 className="text-5xl font-semibold text-white mb-3">About Us</h1>

          <div className="flex items-center gap-2 text-sm text-white/80">
            <span className="hover:text-white transition cursor-pointer">
              Home
            </span>
            <span className="text-white/50">›</span>
            <span className="font-medium text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="ui-section bg-white">
        <div className="ui-container">
          {/* TOP LABEL */}
          <div className="flex items-center gap-3 mb-6">
            <span className="ui-badge tracking-wide text-[var(--clr-text-muted)]">
              Crafting Success →
            </span>
            <span className="text-xl"></span>
          </div>

          {/* HEADING */}
          <div className="max-w-3xl mb-20">
            <h2 className="ui-h2 text-[var(--clr-accent)] ">
              LEADING WITH VISION, DELIVERING <br /> WITH EXCELLENCE.
            </h2>

            <div className="mt-6 flex items-start gap-6">
              <span className="block w-24 h-[1px] bg-[var(--clr-primary)] mt-3" />
              <p className="text-[var(--clr-text-muted)] max-w-xl leading-relaxed">
                Driven by quality and commitment, MFPL transforms ideas into
                reliable cosmetic, skincare, and haircare products that build
                trust and support long-term brand growth.
              </p>
            </div>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* VISION */}
            <div className="relative">
              {/* Circle Image */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                <div
                  className="w-20 h-20 rounded-full border-4 bg-white flex items-center justify-center"
                  style={{ borderColor: "var(--clr-secondary)" }}
                >
                  <EyesIcon size={32} />
                </div>
              </div>

              {/* Card */}
              <div
                className="pt-16 pb-10 px-10 text-center rounded-xl"
                style={{
                  border: "1.5px dashed rgba(83,148,91,0.4)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                }}
              >
                <h3 className="text-xl font-semibold mb-2">Our Vision:</h3>

                <div className="flex justify-center gap-1 mb-4 text-[var(--clr-secondary)]">
                  ★ ★ ★ ★ ★
                </div>

                <p className="text-sm leading-relaxed text-[var(--clr-text-muted)]">
                  To become a trusted global manufacturing partner in cosmetic,
                  skincare, and haircare, setting benchmarks in quality,
                  consistency, and compliance—while empowering brands to create
                  products that resonate with customers worldwide.
                </p>
              </div>
            </div>

            {/* MISSION */}
            <div className="relative">
              {/* Circle Image */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                <div
                  className="w-20 h-20 rounded-full border-4 bg-white flex items-center justify-center"
                  style={{ borderColor: "var(--clr-secondary)" }}
                >
                  <TargetIcon size={32} />
                </div>
              </div>

              {/* Card */}
              <div
                className="pt-16 pb-10 px-10 text-center rounded-xl"
                style={{
                  border: "1.5px dashed rgba(83,148,91,0.4)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                }}
              >
                <h3 className="text-xl font-semibold mb-2">Our Mission:</h3>

                <div className="flex justify-center gap-1 mb-4 text-[var(--clr-secondary)]">
                  ★ ★ ★ ★ ★
                </div>

                <p className="text-sm leading-relaxed text-[var(--clr-text-muted)]">
                  To manufacture high-quality, brand-ready beauty solutions that
                  reflect each partner’s identity, follow market-aligned
                  standards, and support sustainable, scalable growth in a
                  competitive beauty landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section style={{ background: "var(--clr-bg-light)" }}>
        <div className="ui-section ui-container">
          {/* SECTION HEADER */}
          <div className="mb-16 max-w-3xl">
            <span className="ui-badge mb-4 px-4 py-1 ">WHY CHOOSE US</span>

            <h2 className="text-4xl font-semibold leading-tight text-[var(--clr-text-dark)]">
              Why <span style={{ color: "var(--clr-primary)" }}>MFPL </span> is
              the Preferred White Label Manufacturing Partner
            </h2>
          </div>

          {/* BENTO GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* CARD 1 */}
            <div className="bento-card bg-white">
              <div className="icon-wrap">🏭</div>
              <h3 className="bento-title">Certified Manufacturing</h3>
              <p className="bento-desc">
                Quality-driven manufacturing processes designed to meet
                industry-aligned safety, hygiene, and compliance
                standards—ensuring reliability across every batch.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bento-card bg-white">
              <div className="icon-wrap">🧪</div>
              <h3 className="bento-title">Formulation & Product Expertise</h3>
              <p className="bento-desc">
                Professionally developed cosmetic, skincare, and haircare
                formulations crafted to align with your brand positioning,
                market trends, and customer expectations.
              </p>
            </div>

            {/* FEATURE CARD */}
            <div
              className="row-span-2 rounded-3xl p-8 flex flex-col justify-between text-white bento-feature"
              style={{
                background:
                  "linear-gradient(135deg, var(--clr-accent), var(--clr-primary))",
              }}
            >
              <div>
                <div className="icon-wrap-dark">🚀</div>

                <h3 className="text-2xl font-semibold mb-4">
                  Cost-Effective Manufacturing
                </h3>

                <p className="text-sm leading-relaxed opacity-90 mb-4">
                  Our streamlined processes and ready-to-brand formulations help
                  reduce development costs, enabling brands to achieve faster
                  returns without heavy upfront investment.
                </p>

                <p className="text-sm leading-relaxed opacity-90">
                  Whether you’re launching a new brand or expanding your
                  portfolio, our flexible systems adapt to your growth stage.
                </p>
              </div>

              <button
                className="mt-10 w-fit px-7 py-3 rounded-full font-semibold text-sm transition"
                style={{
                  background: "var(--clr-secondary)",
                  color: "var(--clr-text-dark)",
                }}
              >
                Start Your White Label Journey →
              </button>
            </div>

            {/* CARD 4 */}
            <div className="lg:col-span-2 bento-card bg-white">
              <div className="icon-wrap">📦</div>
              <h3 className="bento-title">
                Scalable Production & Faster Launch
              </h3>
              <p className="bento-desc">
                Flexible order quantities, optimized production timelines, and
                scalable systems that help brands launch faster and expand
                seamlessly without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR TEAM ================= */}
      <section className="ui-section bg-white">
        <div className="ui-container">
          {/* TOP CONTENT */}
          <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div>
              <span className="inline-block mb-4 px-4 py-1 ui-badge">
                PURE TALENT
              </span>

              <h2 className="text-4xl font-semibold text-[var(--clr-text-dark)] mb-4">
                Meet our team
              </h2>

              <p
                className="max-w-md text-base leading-relaxed"
                style={{ color: "var(--clr-text-muted)" }}
              >
                A passionate team of experts shaping innovation, quality, and
                trust — transforming ideas into world-class healthcare and
                white-label solutions.
              </p>
            </div>

            {/* RIGHT – BRAND LOGOS */}
            <div className="flex flex-wrap gap-6 lg:justify-end items-center opacity-70">
              {["GMP", "ISO", "FDA", "HALAL"].map((logo, i) => (
                <div
                  key={i}
                  className="px-5 py-2 rounded-full text-sm font-medium"
                  style={{
                    border: "1px solid rgba(83,148,91,0.3)",
                    color: "var(--clr-accent)",
                  }}
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>

          {/* TEAM GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                name: "Dr. A. Sharma",
                role: "Managing Director",
                img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=600",
              },
              {
                name: "R. Mehta",
                role: "Head of Operations",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600",
              },
              {
                name: "S. Kapoor",
                role: "Quality Assurance Lead",
                img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600",
              },
              {
                name: "P. Verma",
                role: "R&D Specialist",
                img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="team-card text-center transition-all duration-300"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-2xl mb-5">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-[320px] w-full object-cover transition-transform duration-500 team-img"
                  />
                </div>

                {/* NAME */}
                <h3 className="font-semibold text-lg text-[var(--clr-text-dark)]">
                  {member.name}
                </h3>

                {/* ROLE */}
                <p className="text-sm mt-1 text-[var(--clr-text-muted)]">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

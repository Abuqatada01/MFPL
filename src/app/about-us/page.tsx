"use client";
import { EyesIcon, TargetIcon, VisorIcon } from "@phosphor-icons/react";
import "./about.css";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <>
      {/* ================= ABOUT BANNER ================= */}
      <section className="relative h-[35vh] lg:h-[45vh] overflow-hidden">
        <picture className="absolute inset-0">
          <source media="(max-width: 768px)" srcSet="/Ak 1.jpg" />
          <img
            src="/Ak 4.jpg"
            alt="About banner"
            className="w-full h-full object-fill lg:object-fill"
          />
        </picture>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="ui-section bg-white">
        <div className="ui-container">
          {/* MAIN 2-COLUMN LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
            {/* ================= LEFT: CONTENT ================= */}
            <div>
              {/* TOP LABEL */}
              <div className="flex items-center gap-3 mb-6">
                <span className="ui-badge tracking-wide text-[var(--clr-text-muted)]">
                  Crafting Success →
                </span>
              </div>

              {/* HEADING */}
              <div className="max-w-3xl">
                <h2 className="ui-h2 text-[var(--clr-accent)]">
                  LEADING WITH VISION, DELIVERING <br /> WITH EXCELLENCE.
                </h2>

                <div className="mt-6 flex flex-col gap-6">
                  <span className="block w-24 h-[1px] bg-[var(--clr-primary)]" />

                  <p className="text-[var(--clr-text-muted)] max-w-xl leading-relaxed">
                    Driven by quality and commitment, Medicosmo Formulations
                    Private Limited (MFPL) transforms ideas into reliable
                    cosmetic, skincare, and haircare products that build trust
                    and support long-term brand growth.
                  </p>

                  <p className="text-[var(--clr-text-muted)] max-w-xl leading-relaxed">
                    MFPL is a trusted white label manufacturing partner,
                    delivering cosmetic, skincare, and haircare solutions built
                    on quality, consistency, and compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= RIGHT: VISION + MISSION ================= */}
            <div className="grid mt-15  lg:mt-5 grid-cols-1 md:grid-cols-2 gap-16">
              {[
                {
                  title: "Our Vision:",
                  Icon: EyesIcon,
                  text: "To become a trusted global manufacturing partner in cosmetic, skincare, and haircare, setting benchmarks in quality, consistency, and compliance while empowering brands to create products that resonate with customers worldwide.",
                },
                {
                  title: "Our Mission:",
                  Icon: TargetIcon,
                  text: "To manufacture high-quality, brand-ready beauty solutions that reflect each partner’s identity, follow market-aligned standards, and support sustainable, scalable growth in a competitive beauty landscape.",
                },
              ].map((item, i) => (
                <div key={i} className="relative group">
                  {/* ICON CIRCLE */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                    <div
                      className="
                  w-20 h-20 rounded-full border-4 bg-white
                  flex items-center justify-center
                  transition-all duration-500
                  group-hover:shadow-[0_0_0_10px_rgba(83,148,91,0.15)]
                "
                      style={{ borderColor: "var(--clr-secondary)" }}
                    >
                      <item.Icon size={32} />
                    </div>
                  </div>

                  {/* CARD */}
                  <div
                    className="
                relative pt-16 pb-10 px-10 h-[35vh] lg:h-[380px] text-center rounded-xl
                transition-all duration-500
                ease-[cubic-bezier(.22,.61,.36,1)]
                will-change-transform
                group-hover:-translate-y-2
              "
                    style={{
                      border: "1.5px dashed rgba(83,148,91,0.4)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                    }}
                  >
                    {/* BORDER GLOW */}
                    <div
                      className="
                  pointer-events-none absolute inset-0 rounded-xl
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                "
                      style={{
                        boxShadow:
                          "0 0 0 1px rgba(131,163,60,0.55), 0 18px 45px rgba(83,148,91,0.25)",
                      }}
                    />

                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

                    {/* STARS */}
                    <div className="flex justify-center gap-1 mb-4 text-[var(--clr-secondary)]">
                      ★ ★ ★ ★ ★
                    </div>

                    <p className="text-sm leading-relaxed text-[var(--clr-text-muted)]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section style={{ background: "var(--clr-bg-light)" }}>
        <div className="ui-section ui-container">
          {/* SECTION HEADER */}
          <div className="mb-16 max-w-3xl">
            <span className="ui-badge mb-2 lg:mb-4 px-4 py-1 ">
              WHY CHOOSE US ?
            </span>

            <h2 className="ui-h1 font-bold leading-tight text-[var(--clr-text-dark)]">
              Why{" "}
              <span style={{ color: "var(--clr-primary)" }}>
                Medicosmo Formulations Private Limited (MFPL)
              </span>{" "}
              is the Preferred White Label Manufacturing Partner
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
                industry-aligned safety, hygiene, and compliance standards
                ensuring reliability across every batch.
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
                  Ready to Launch Your White Label Brand?
                </h3>

                <p className="text-sm leading-relaxed opacity-90 mb-4">
                  Turn your idea into a market-ready cosmetic, skincare, or
                  haircare product with Medicosmo Formulations Private Limited
                  (MFPL)’s end-to-end manufacturing support. From formulation
                  and packaging to compliance and production, we deliver
                  cost-effective manufacturing solutions that help you launch
                  faster and scale smarter while we guide you at every step.
                </p>

                {/* <p className="text-sm leading-relaxed opacity-90">
                  Whether you’re launching a new brand or expanding your
                  portfolio, our flexible systems adapt to your growth stage.
                </p> */}
              </div>

              <Link
                href="/contact-us"
                className="mt-10 w-fit px-7 py-3 rounded-full font-semibold text-sm transition"
                style={{
                  background: "var(--clr-secondary)",
                  color: "var(--clr-text-light)",
                }}
              >
                Start Your White Label Journey →
              </Link>
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
      {/* <section className="ui-section bg-white">
        <div className="ui-container">
        
          <div className="mb-6 lg:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            
            <div>
              <span className="inline-block mb-4 px-4 py-1 ui-badge">
                PURE TALENT
              </span>

              <h2 className="ui-h1 font-semibold text-[var(--clr-text-dark)] mb-4">
                Meet our team
              </h2>

              <p
                className="max-w-md text-base leading-relaxed"
                style={{ color: "var(--clr-text-muted)" }}
              >
                A passionate team of experts shaping innovation, quality, and
                trust   transforming ideas into world-class healthcare and
                white-label solutions.
              </p>
            </div>

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

         
          <div
            className="
        flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory
        sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-10
      "
          >
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
                className="
            team-card text-center transition-all duration-300
            min-w-[80%] snap-center
            sm:min-w-0
          "
              >
            
                <div className="relative overflow-hidden rounded-2xl mb-5">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-[320px] w-full object-cover transition-transform duration-500 team-img"
                  />
                </div>

              
                <h3 className="font-semibold text-lg text-[var(--clr-text-dark)]">
                  {member.name}
                </h3>

          
                <p className="text-sm mt-1 text-[var(--clr-text-muted)]">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}

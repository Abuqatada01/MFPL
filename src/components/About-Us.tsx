"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="" style={{ background: "var(--clr-bg-light)" }}>
      <div className=" ui-section ui-container">
        <div className="ui-badge text-center">About Us</div>
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT */}
          <div>
            <h2 className="ui-h2 uppercase tracking-wide">
              Your Trusted Partner for <br />
              <span style={{ color: "var(--clr-primary)" }}>
                Professional Healthcare Solutions
              </span>
            </h2>

            {/* STATS */}
            <div className="flex gap-8 mt-12">
              {[
                { value: "120+", label: "Global Brands" },
                { value: "2,000+", label: "Formulations" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="px-6 py-5 rounded-xl"
                  style={{
                    background: "var(--clr-bg-white)",
                    boxShadow: "0 10px 30px rgba(20,84,43,0.08)",
                  }}
                >
                  <p
                    className="text-4xl font-bold"
                    style={{ color: "var(--clr-accent)" }}
                  >
                    {item.value}
                  </p>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--clr-text-muted)" }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <p className="ui-para mb-6">
              At <strong>Palmist Healthcare</strong>, we deliver unparalleled
              quality and innovation as a trusted manufacturer of custom
              cosmetic products. Specialising in skincare, haircare, and
              fragrances, we craft solutions that meet the highest professional
              standards.
            </p>

            <p className="ui-para mb-6">
              With over <strong>2,000+ formulations</strong> and a production
              capacity of <strong>2 lakh units</strong>, we empower businesses
              to build impactful and scalable brands.
            </p>

            <p className="ui-para">
              Our reputation is built on trust, precision, and excellence.
              Partnering with <strong>120+ global brands</strong>, we combine
              cutting-edge technology, sustainable practices, and deep market
              insight to create products that inspire confidence.
            </p>

            {/* BRAND DECORATIVE SHAPE */}
            <div
              className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:block"
              style={{
                width: "140px",
                height: "280px",
                background:
                  "radial-gradient(circle at center, rgba(83,148,91,0.25), transparent 70%)",
              }}
            />
          </div>
        </div>

        {/* ASSURANCE STRIP */}
        <div
          className="mt-24 px-12 py-8 rounded-full flex items-center gap-12 overflow-x-auto"
          style={{
            background: "var(--clr-bg-white)",
            boxShadow: "0 15px 50px rgba(20,84,43,0.12)",
          }}
        >
          {/* LEFT TEXT */}
          <div className="min-w-[220px]">
            <p
              className="font-semibold leading-snug"
              style={{ color: "var(--clr-accent)" }}
            >
              Assurances <br />
              Tailored for <br />
              Your Brand
            </p>
          </div>

          {/* DIVIDER */}
          <div
            style={{
              width: "1px",
              height: "60px",
              background: "rgba(20,84,43,0.25)",
            }}
          />

          {/* CERTIFICATIONS */}
          <div className="flex gap-12 items-center">
            {[
              "https://palmisthealthcare.com/public/imgs/about/certificate/01.png",
              "https://palmisthealthcare.com/public/imgs/about/certificate/02.png",
              "https://palmisthealthcare.com/public/imgs/about/certificate/03.png",
              "https://palmisthealthcare.com/public/imgs/about/certificate/04.png",
              "https://palmisthealthcare.com/public/imgs/about/certificate/05.png",
              "https://palmisthealthcare.com/public/imgs/about/certificate/06.png",
              "https://palmisthealthcare.com/public/imgs/about/certificate/07.png",
              "https://palmisthealthcare.com/public/imgs/about/certificate/08.png",
            ].map((src, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-full"
                style={{
                  width: "72px",
                  height: "72px",
                  border: "2px solid rgba(83,148,91,0.35)",
                  background: "#fff",
                }}
              >
                <Image
                  src={src}
                  alt="Certification"
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

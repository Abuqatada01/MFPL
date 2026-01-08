import Link from "next/link";

const services = [
  {
    title: "Manufacturing & Production",
    desc: "We specialize in white label and private label manufacturing for cosmetic, skincare, and haircare products. Our streamlined production processes ensure consistent quality, scalability, and market-ready formulations.",
    img: "https://themazine.com/html/snappy/images/service/1.jpg",
    link: "/services/business-growth",
  },
  {
    title: "Packaging & Labeling",
    desc: "From bottle and container selection to precise labeling, we ensure your products are professionally packaged, compliant, and ready for retail or distribution under your brand name.",
    img: "https://themazine.com/html/snappy/images/service/2.jpg",
    link: "/services/strategy",
  },
  {
    title: "Branding & Marketing",
    desc: "We support brands with packaging alignment, brand presentation, and market positioning essentials—helping your products stand out and connect with your target audience.",
    img: "https://themazine.com/html/snappy/images/service/3.jpg",
    link: "/services/financial-planning",
  },
  {
    title: "Distribution & Sales",
    desc: "Our manufacturing support extends to helping brands prepare for smooth distribution and sales readiness, ensuring products are aligned with market requirements and business growth plans.",
    img: "https://themazine.com/html/snappy/images/service/3.jpg",
    link: "/services/financial-planning",
  },
];

export default function OurServicesSection() {
  return (
    <section className="" style={{ background: "var(--clr-bg-light)" }}>
      <div className="ui-section ui-container">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">
          <h2 className="ui-h2">
            Our <span style={{ color: "var(--clr-primary)" }}>Services</span>
          </h2>
          <p
            className="mt-3 max-w-xl mx-auto"
            style={{ color: "var(--clr-text-muted)" }}
          >
            Strategic manufacturing solutions designed to help beauty brands
            launch, scale, and succeed with confidence.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.9)",
                boxShadow: "0 20px 50px rgba(20,84,43,0.12)",
              }}
            >
              {/* IMAGE */}
              <div className="relative h-[240px] overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(20,84,43,0.0), rgba(20,84,43,0.55))",
                  }}
                />
              </div>

              {/* CONTENT */}
              <div className="p-8 text-center">
                {/* ICON */}
                <div
                  className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full transition"
                  style={{
                    border: "2px solid var(--clr-primary)",
                    color: "var(--clr-primary)",
                  }}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="3" width="18" height="14" rx="2" />
                    <path d="M3 10h18" />
                    <path d="M8 21h8" />
                  </svg>
                </div>

                {/* TITLE */}
                <h3
                  className="mb-3 text-xl font-semibold transition"
                  style={{ color: "var(--clr-text-dark)" }}
                >
                  {service.title}
                </h3>

                {/* DESC */}
                <p
                  className="mb-6 text-sm leading-relaxed"
                  style={{ color: "var(--clr-text-muted)" }}
                >
                  We provide tailored strategies and expert guidance to help
                  organisations achieve sustainable growth and long-term
                  success.
                </p>

                {/* CTA */}
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 font-semibold transition-all"
                  style={{ color: "var(--clr-primary)" }}
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const services = [
  {
    title: "Manufacturing & Production",
    desc: "We specialize in white label and private label manufacturing for cosmetic, skincare, and haircare products. Our streamlined production processes ensure consistent quality, scalability, and market-ready formulations.",
    img: "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/6960d8a800298981bfb5/view?project=6912e771002b88166cae",
  },
  {
    title: "Packaging & Labeling",
    desc: "From bottle and container selection to precise labeling, we ensure your products are professionally packaged, compliant, and ready for retail or distribution under your brand name.",
    img: "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/6960d8aa00253d909c17/view?project=6912e771002b88166cae",
  },
  {
    title: "Branding & Marketing",
    desc: "We support brands with packaging alignment, brand presentation, and market positioning essentials—helping your products stand out and connect with your target audience.",
    img: "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/6960d8a90028cfd12db3/view?project=6912e771002b88166cae",
  },
  {
    title: "Distribution & Sales",
    desc: "Our manufacturing support extends to helping brands prepare for smooth distribution and sales readiness, ensuring products are aligned with market requirements and business growth plans.",
    img: "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/6960d8a7002bac17dfd4/view?project=6912e771002b88166cae",
  },
];

export default function OurServicesSection() {
  return (
    <section style={{ background: "var(--clr-bg-light)" }}>
      <div className="ui-section ui-container">
        {/* HEADER */}
        <div className="text-center mb-4 lg:mb-16">
          <h2 className="ui-h1 lg:ui-h2 ">
            Our <span style={{ color: "var(--clr-primary)" }}>Services</span>
          </h2>
          <p
            className="mt-0.5 lg:mt-2 ui-para max-w-xl mx-auto"
            style={{ color: "var(--clr-text-muted)" }}
          >
            Strategic manufacturing solutions designed to help beauty brands
            launch, scale, and succeed with confidence.
          </p>
        </div>

        {/* SERVICES */}
        <div
          className="
            flex gap-6 overflow-x-auto pb-6
            snap-x snap-mandatory
            sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8
          "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group rounded-3xl overflow-hidden transition-all duration-300
                min-w-[95%] snap-center
                sm:min-w-0
                bg-white
                shadow-[0_20px_50px_rgba(20,84,43,0.12)]
              "
            >
              {/* IMAGE */}
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(20,84,43,0.0), rgba(20,84,43,0.55))",
                  }}
                />
              </div>

              {/* CONTENT */}
              <div className="px-6 py-6 text-center">
                <div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
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

                <h3
                  className="mb-2 text-lg font-semibold"
                  style={{ color: "var(--clr-text-dark)" }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--clr-text-muted)" }}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

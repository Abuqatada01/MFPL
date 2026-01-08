"use client";

import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Submit Your Requirements",
    desc: "Share your product category, formulation preferences, quantity, and branding needs through our enquiry form or consultation process.",
    image:
      "https://www.sewingmachinespare.com/home-pageimg/27-reqirement-img.jpg",
  },
  {
    step: "02",
    title: "Approve Formulation, Packaging & Pricing",
    desc: "Review selected formulations, packaging options, labeling details, and pricing. Once approved, we proceed with production planning.",
    image:
      "https://palmisthealthcare.com/public/imgs/home/custom_formulation.jpg",
  },
  {
    step: "03",
    title: "Manufacturing & Delivery",
    desc: "We manufacture, package, and label your products, ensuring quality checks and timely delivery—ready to launch under your brand name.",
    image: "https://palmisthealthcare.com/public/imgs/home/logistic.jpg",
  },
];

export default function OrderSteps() {
  return (
    <section className="" style={{ background: "var(--clr-bg-light)" }}>
      <div className="ui-section ui-container text-center">
        {/* SECTION HEADER */}
        <div className="mb-20">
          <h2 className="ui-h1">
            How to <span style={{ color: "var(--clr-primary)" }}>Order</span>
          </h2>
          <p
            className="mt-3 max-w-xl mx-auto"
            style={{ color: "var(--clr-text-muted)" }}
          >
            A simple, transparent process designed to take your brand from idea
            to delivery with ease.
          </p>
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 relative">
          {steps.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* CONNECTOR (Desktop Only) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-[140px] right-[-70px]"
                  style={{
                    width: "140px",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, var(--clr-primary), transparent)",
                  }}
                />
              )}

              {/* CARD */}
              <div
                className=" p-6 rounded-3xl w-full max-w-sm flex flex-col items-center transition-all duration-300 h-full"
                style={{
                  background: "var(--clr-bg-white)",
                  boxShadow: "0 25px 60px rgba(20,84,43,0.12)",
                }}
              >
                {/* IMAGE */}
                {/* IMAGE */}
                <div className="w-full h-[250px] flex items-center justify-center mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={180}
                    height={180}
                    className="object-fill w-full max-h-full"
                  />
                </div>

                {/* STEP NUMBER */}
                <div
                  className="mx-auto mb-4 flex items-center justify-center"
                  style={{
                    height: "42px",
                    width: "42px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, var(--clr-secondary), var(--clr-primary))",
                    color: "#fff",
                    fontWeight: 700,
                  }}
                >
                  {item.step}
                </div>

                {/* TEXT */}
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--clr-text-dark)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--clr-text-muted)" }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20">
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
            Get a Free Quote →
          </Link>
        </div>
      </div>
    </section>
  );
}

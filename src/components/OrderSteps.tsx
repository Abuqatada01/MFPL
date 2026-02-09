"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Submit Your Requirements",
    desc: "Share your product category, formulation preferences, quantity, and branding needs through our enquiry form or consultation process.",
    image:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/6960d3eb00068ca891f0/view?project=6912e771002b88166cae",
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
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Mobile auto-slide only
    if (window.innerWidth >= 768) return;

    const slider = sliderRef.current;
    if (!slider) return;

    let index = 0;
    const cardWidth = slider.firstElementChild?.clientWidth || 0;

    const interval = setInterval(() => {
      index = (index + 1) % steps.length;
      slider.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }, 3000);

    const stop = () => clearInterval(interval);
    slider.addEventListener("touchstart", stop, { once: true });

    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ background: "var(--clr-bg-light)" }}>
      <div className="ui-section ui-container text-center">
        {/* HEADER */}
        <div className="mb-4 md:mb-15">
          <h2 className="ui-h1">
            How to <span style={{ color: "var(--clr-primary)" }}>Order</span>
          </h2>
          <p
            className="lg:mt-1 max-w-xl mx-auto"
            style={{ color: "var(--clr-text-muted)" }}
          >
            A simple, transparent process designed to take your brand from idea
            to delivery with ease.
          </p>
        </div>

        {/* STEPS */}
        <div
          ref={sliderRef}
          className="
            flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth
            md:grid md:grid-cols-3 md:gap-14 md:overflow-visible
          "
        >
          {steps.map((item, index) => (
            <div
              key={index}
              className="
                relative flex flex-col items-center
                min-w-[85%] snap-center
                md:min-w-0
              "
            >
              {/* CARD */}
              <div
                className="
                  group relative p-6 rounded-3xl w-full max-w-sm
                  flex flex-col items-center h-full bg-white
                  transition-all duration-500
                  ease-[cubic-bezier(.22,.61,.36,1)]
                  will-change-transform
                  hover:-translate-y-2
                "
                style={{
                  boxShadow: "0 25px 60px rgba(20,84,43,0.12)",
                }}
              >
                {/* BORDER GLOW */}
                <div
                  className="
                    pointer-events-none absolute inset-0 rounded-3xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  "
                  style={{
                    boxShadow:
                      "0 0 0 1px rgba(131,163,60,0.55), 0 18px 45px rgba(83,148,91,0.28)",
                  }}
                />

                {/* IMAGE */}
                <div className="relative w-full h-[240px] mb-6 overflow-hidden rounded-xl bg-[#EDF5EE]">
                  <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* STEP NUMBER */}
                <div
                  className="
                    mb-4 flex items-center justify-center rounded-full
                    transition-all duration-500
                    group-hover:shadow-[0_0_0_6px_rgba(83,148,91,0.18)]
                  "
                  style={{
                    height: "42px",
                    width: "42px",
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
                  className="
                    text-lg font-semibold mb-2
                    transition-colors duration-300
                    group-hover:text-[var(--clr-primary)]
                  "
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
        <div className="mt-6 md:mt-10">
          <Link
            href="/contact-us"
            className="inline-flex ui-cta-premium items-center gap-3 px-10 py-4 rounded-full text-lg font-semibold transition-all"
            style={{
              background:
                "linear-gradient(135deg, var(--clr-primary), var(--clr-secondary))",
              color: "#fff",
              boxShadow: "0 20px 40px rgba(83,148,91,0.35)",
            }}
          >
            Get a Free Quote
            <span className="ui-cta-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

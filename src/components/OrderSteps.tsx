"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Submit Your Requirements",
    desc: "Share your product category, formulation preferences, quantity, and branding needs through our enquiry form or consultation process.",
    image: "/order1.webp",
  },
  {
    step: "02",
    title: "Approve Formulation, Packaging & Pricing",
    desc: "Review selected formulations, packaging options, labeling details, and pricing. Once approved, we proceed with production planning.",
    image: "https://palmisthealthcare.com/public/imgs/home/custom_formulation.jpg",
  },
  {
    step: "03",
    title: "Manufacturing & Delivery",
    desc: "We manufacture, package, and label your products, ensuring quality checks and timely delivery ready to launch under your brand name.",
    image: "https://palmisthealthcare.com/public/imgs/home/logistic.jpg",
  },
];

export default function OrderSteps() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
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
    <section style={{ background: "var(--clr-bg-light)" }} className="py-10 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            How to <span style={{ color: "var(--clr-primary)" }}>Order</span>
          </h2>
          <p className="mt-2 text-sm md:text-base max-w-lg mx-auto px-2" style={{ color: "var(--clr-text-muted)" }}>
            A simple, transparent process designed to take your brand from idea to delivery with ease.
          </p>
        </div>

        {/* STEPS */}
        <div
          ref={sliderRef}
          className="
            flex md:grid 
            overflow-x-auto md:overflow-visible 
            snap-x snap-mandatory md:snap-none
            gap-4 md:gap-6 
            pb-4 md:pb-0
            scroll-smooth
            -mx-4 px-4 md:mx-0 md:px-0
            md:grid-cols-3
          "
        >
          {steps.map((item, index) => (
            <div
              key={index}
              className="
                min-w-[85vw] md:min-w-0 
                snap-center 
                flex-shrink-0 md:flex-shrink
                w-full
              "
            >
              {/* CARD - Increased padding slightly for taller appearance */}
              <div
                className="
                  relative p-5 md:p-5 rounded-xl md:rounded-2xl
                  flex flex-col items-center bg-white h-full
                  transition-all duration-300
                  hover:-translate-y-1
                "
                style={{
                  boxShadow: "0 8px 30px rgba(20,84,43,0.08)",
                }}
              >
                {/* BORDER GLOW */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    boxShadow: "0 0 0 1px rgba(131,163,60,0.4), 0 8px 25px rgba(83,148,91,0.15)",
                  }}
                />

                {/* IMAGE - Taller on mobile: aspect-[4/3] instead of 16/10, max-h increased */}
                <div className="relative w-full aspect-[4/3] md:aspect-[4/3] mb-4 overflow-hidden rounded-lg md:rounded-xl bg-[#EDF5EE]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 85vw, (max-width: 1200px) 33vw, 400px"
                  />
                </div>

                {/* STEP NUMBER */}
                <div
                  className="mb-3 flex items-center justify-center rounded-full w-9 h-9 md:w-10 md:h-10 text-sm md:text-base font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, var(--clr-secondary), var(--clr-primary))",
                  }}
                >
                  {item.step}
                </div>

                {/* TEXT */}
                <h3 className="text-base md:text-lg font-semibold mb-2 text-center" style={{ color: "var(--clr-text-dark)" }}>
                  {item.title}
                </h3>
                <p className="text-sm md:text-sm leading-relaxed text-center" style={{ color: "var(--clr-text-muted)" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 md:mt-8 text-center">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, var(--clr-primary), var(--clr-secondary))",
              color: "#fff",
              boxShadow: "0 6px 20px rgba(83,148,91,0.3)",
            }}
          >
            Get a Free Quote
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

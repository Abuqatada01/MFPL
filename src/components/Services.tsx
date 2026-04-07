"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const services = [
  {
    title: "Manufacturing & Production",
    desc: "We specialize in white label and private label manufacturing for cosmetic, skincare, and haircare products. Our streamlined production processes ensure consistent quality, scalability, and market-ready formulations.",
    img: "/Manufacturing & Production.jpg",
  },
  {
    title: "Packaging & Labeling",
    desc: "From bottle and container selection to precise labeling, we ensure your products are professionally packaged, compliant, and ready for retail or distribution under your brand name.",
    img: "/Packaging & Labeling.jpg",
  },
  {
    title: "Branding & Marketing",
    desc: "We support brands with packaging alignment, brand presentation, and market positioning essentials-helping your products stand out and connect with your target audience.",
    img: "/mfpl 1.jpg",
  },
  {
    title: "Distribution & Sales",
    desc: "Our manufacturing support extends to helping brands prepare for smooth distribution and sales readiness, ensuring products are aligned with market requirements and business growth plans.",
    img: "/mfpl 2.jpg",
  },
];

export default function OurServicesSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth >= 640) return;

    const slider = sliderRef.current;
    if (!slider) return;

    let index = 0;
    const cardWidth = slider.firstElementChild?.clientWidth || 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % services.length;
      slider.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }, 3000);

    const stopAuto = () => clearInterval(interval);
    slider.addEventListener("touchstart", stopAuto, { once: true });
    slider.addEventListener("mousedown", stopAuto, { once: true });

    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ background: "var(--clr-bg-light)" }} className="py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-6 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            What <span style={{ color: "var(--clr-primary)" }}>We Provide</span>
          </h2>
          <p
            className="mt-2 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2 sm:px-0"
            style={{ color: "var(--clr-text-muted)" }}
          >
            Strategic manufacturing solutions designed to help beauty brands
            launch, scale, and succeed with confidence.
          </p>
        </div>

        {/* SERVICES GRID/CAROUSEL */}
        <div
          ref={sliderRef}
          className="
            flex gap-4 sm:gap-5 lg:gap-6 
            overflow-x-auto pb-4 sm:pb-0 
            scroll-smooth snap-x snap-mandatory 
            sm:grid sm:grid-cols-2 lg:grid-cols-4 
            sm:overflow-visible sm:snap-none
            -mx-4 px-4 sm:mx-0 sm:px-0
          "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group rounded-xl sm:rounded-2xl overflow-hidden 
                transition-all duration-300 
                min-w-[85vw] max-w-[85vw] sm:min-w-0 sm:max-w-none
                snap-center 
                flex-shrink-0 sm:flex-shrink
                bg-white 
                shadow-[0_8px_25px_rgba(20,84,43,0.1)]
                sm:w-full
                flex flex-col
              "
            >
              {/* IMAGE - Mobile: 16/9 (shorter), Tablet+: 3/2 */}
              <div className="relative aspect-[16/9] sm:aspect-[3/2] overflow-hidden flex-shrink-0">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(20,84,43,0.0), rgba(20,84,43,0.4))",
                  }}
                />
              </div>

              {/* CONTENT - Mobile optimized padding */}
              <div className="px-4 py-4 sm:px-5 sm:py-5 text-center flex flex-col flex-grow">
                <div
                  className="mx-auto mb-2 sm:mb-3 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full flex-shrink-0"
                  style={{
                    border: "2px solid var(--clr-primary)",
                    color: "var(--clr-primary)",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="sm:w-[22px] sm:h-[22px]"
                  >
                    <rect x="3" y="3" width="18" height="14" rx="2" />
                    <path d="M3 10h18" />
                    <path d="M8 21h8" />
                  </svg>
                </div>

                <h3
                  className="mb-1.5 sm:mb-2 text-sm sm:text-base font-semibold leading-tight"
                  style={{ color: "var(--clr-text-dark)" }}
                >
                  {service.title}
                </h3>

                {/* TEXT - 3 lines on mobile, 4 on tablet+ */}
                <p
                  className="text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4"
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

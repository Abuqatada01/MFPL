"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

const slides = [
  {
    title: "Premium White Label",
    subtitle: "Hair & Skin Care Manufacturer",
    location: "In Hyderabad",
    image:
      "https://woyawater.com/wp-content/uploads/2024/01/ISI-700-%C3%97-700-px.png",
    circleColor: "rgba(83, 148, 91, 0.12)",
  },
  {
    title: "Your Trusted",
    subtitle: "White Label Beauty Manufacturing Partner",
    location: "Across India",
    image:
      "https://woyawater.com/wp-content/uploads/2023/09/ISI-700-%C3%97-700-px-1.png",
    circleColor: "rgba(131, 163, 60, 0.15)",
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveSlide((prev) => (prev + 1) % slides.length),
      4500
    );
    return () => clearInterval(interval);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section
      className="flex justify-center min-h-[40vh] md:h-[70vh] overflow-hidden relative"
      style={{ background: "var(--clr-bg-light)" }}
    >
      <div className="ui-section grid grid-cols-2 items-center gap-6 md:gap-16 relative">
        {/* LEFT CONTENT */}
        <div>
          <span className="ui-badge mb-4 inline-block">We Are</span>

          <h1 className="ui-h1 mt-sm">{slide.title}</h1>
          <h2 className="ui-h2">{slide.subtitle}</h2>

          <div className="ui-actions">
            <Link href="/contact" className="ui-btn text-sm ui-btn-primary">
              Start Your Brand Today
            </Link>

            <Link href="/products" className="ui-btn ui-btn-outline">
              Explore Our Product Range
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-end">
          {/* Green Circle */}
          <div
            className="
      absolute top-1/2 -translate-y-1/2 rounded-full
      right-0 md:-right-20
      w-[200px] h-[200px]
      sm:w-[320px] sm:h-[320px]
      md:w-[420px] md:h-[420px]
      lg:w-[520px] lg:h-[520px]
      transition-all duration-700
    "
            style={{ background: slide.circleColor }}
          />

          {/* Bottle */}
          <Image
            src={slide.image}
            alt="Product"
            width={520}
            height={520}
            priority
            className="
      relative z-10
      w-[180px]
      sm:w-[240px]
      md:w-[340px]
      lg:w-[520px]
      h-auto
      transition-all duration-700
    "
          />
        </div>

        {/* LEFT ARROW */}
        {/* LEFT ARROW */}
        <button
          onClick={() =>
            setActiveSlide(
              activeSlide === 0 ? slides.length - 1 : activeSlide - 1
            )
          }
          className="
    absolute z-20
    flex items-center justify-center
    -left-[5%] md:left-[12%] lg:-left-[10%]
    top-1/2 -translate-y-1/2
    w-8 h-8 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-11 lg:h-11 rounded-full
    bg-white text-[var(--clr-primary)]
    shadow-lg
    hover:scale-110 transition
  "
        >
          <CaretLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}
          className="
    absolute z-20
    flex items-center justify-center
    -right-[5%] md:right-[12%] lg:-right-[10%]
    top-1/2 -translate-y-1/2
    w-8 h-8 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-11 lg:h-11 rounded-full
    bg-white text-[var(--clr-primary)]
    shadow-lg
    hover:scale-110 transition
  "
        >
          <CaretRightIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </button>
      </div>
    </section>
  );
}

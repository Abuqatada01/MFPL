"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

const slides = [
  {
    desktopImage: "/Ak 3.jpg",
    mobileImage: "/MFPL_BANNER_MB1.jpg",
  },
  {
    desktopImage: "/MFPL_BANNER_DK2.jpg",
    mobileImage: "/MFPL_BANNER_MB2.jpg",
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section className="relative h-[50vh] lg:h-[75vh] overflow-hidden">
      {/* SLIDE IMAGE */}
      <picture className="absolute inset-0">
        <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
        <img
          src={slide.desktopImage}
          alt="Hero banner"
          className="w-full h-full object-fill lg:object-fill transition-opacity duration-700"
        />
      </picture>

      {/* OPTIONAL DARK OVERLAY */}
      {/* <div className="absolute inset-0 bg-black/30 z-10" /> */}

      {/* CTA CONTENT */}
      <div className="absolute bottom-0 inset-0 xl:ml-12 lg:mb-20 z-20 flex  items-end">
        <div className="ui-section">
          <div className="flex gap-4">
            <Link
              href="/contact-us"
              className="ui-btn ui-btn-primary rounded-3xl hover:bg-green-700"
            >
              Start Your Brand Today
            </Link>

            <Link
              href="/products"
              className="ui-btn ui-btn-outline rounded-3xl text-white"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={() =>
          setActiveSlide(
            activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
          )
        }
        className="absolute z-30 left-4 top-1/2 -translate-y-1/2
          hidden md:flex items-center justify-center
          w-10 h-10 rounded-full bg-white/90
          text-[var(--clr-primary)] shadow-lg
          hover:scale-110 transition"
      >
        <CaretLeftIcon className="w-6 h-6" />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}
        className="absolute z-30 right-4 top-1/2 -translate-y-1/2
          hidden md:flex items-center justify-center
          w-10 h-10 rounded-full bg-white/90
          text-[var(--clr-primary)] shadow-lg
          hover:scale-110 transition"
      >
        <CaretRightIcon className="w-6 h-6" />
      </button>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

const slides = [
  {
    desktopImage: "/MFPL_BANNER_DK1.jpg",
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
    const interval = setInterval(
      () => setActiveSlide((prev) => (prev + 1) % slides.length),
      4500,
    );
    return () => clearInterval(interval);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden">
      {/* DESKTOP IMAGE */}
      <Image
        src={slide.desktopImage}
        alt="Hero Banner Desktop"
        fill
        priority
        sizes="(min-width: 768px) 100vw, 0"
        className="hidden md:block object-fill"
      />

      {/* MOBILE IMAGE */}
      <Image
        src={slide.mobileImage}
        alt="Hero Banner Mobile"
        width={600}
        height={900}
        priority
        sizes="(max-width: 767px) 100vw"
        className="block h-[90vh] md:hidden object-fill md:object-cover "
      />

      {/* OVERLAY */}
      {/* <div className="absolute inset-0 bg-black/30" /> */}

      {/* CTA CONTENT (LEFT OVERLAY) */}
      <div className="absolute top-120 inset-0 flex items-center">
        <div className="ui-section">
          <div className="flex gap-4">
            <Link href="/contact-us" className="ui-btn ui-btn-primary">
              Start Your Brand Today
            </Link>

            <Link
              href="/products"
              className="ui-btn ui-btn-outline text-white "
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
        className="absolute z-20 left-4 top-1/2 -translate-y-1/2
          hidden md:flex items-center justify-center
          w-10 h-10 rounded-full bg-white/90
          text-[var(--clr-primary)] shadow-lg hover:scale-110 transition"
      >
        <CaretLeftIcon className="w-6 h-6" />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}
        className="absolute z-20 right-4 top-1/2 -translate-y-1/2
          hidden md:flex items-center justify-center
          w-10 h-10 rounded-full bg-white/90
          text-[var(--clr-primary)] shadow-lg hover:scale-110 transition"
      >
        <CaretRightIcon className="w-6 h-6" />
      </button>
    </section>
  );
}

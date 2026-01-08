"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
const slides = [
  {
    title: "Premium White Label",
    subtitle: "Hair & Skin CareManufacturer",
    location: "In Hyderabad",
    image:
      "https://woyawater.com/wp-content/uploads/2024/01/ISI-700-%C3%97-700-px.png",
    circleColor: "rgba(83, 148, 91, 0.12)", // Primary Green
  },
  {
    title: "Your Trusted",
    subtitle: "White LabelBeauty Manufacturing Partner",
    location: "Across India",
    image:
      "https://woyawater.com/wp-content/uploads/2023/09/ISI-700-%C3%97-700-px-1.png",
    circleColor: "rgba(131, 163, 60, 0.15)", // Leaf Accent Green
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

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[activeSlide];

  return (
    <section
      className="flex justify-center h-[70vh] overflow-hidden relative"
      style={{ background: "var(--clr-bg-light)" }}
    >
      <div className="ui-section grid grid-cols-1 lg:grid-cols-2 items-center gap-16 relative">
        {/* LEFT CONTENT */}
        <div>
          <span className="ui-badge mb-4 inline-block">We Are</span>

          <h1 className="ui-h1 mt-sm">
            {slide.title} <br />
            {slide.subtitle} <br />
            <span
              style={{
                color: "var(--clr-accent)",
                WebkitTextFillColor: "unset",
              }}
            >
              {slide.location}
            </span>
          </h1>

          <div className="ui-actions">
            <Link href="/contact" className="ui-btn ui-btn-primary">
              Start Your Brand Today
            </Link>

            <Link href="/products" className="ui-btn ui-btn-outline">
              Explore Our Product Range
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Background Circle */}
          <div
            className="absolute -right-20 top-1/2 -translate-y-1/2 rounded-full transition-all duration-700"
            style={{
              height: "520px",
              width: "520px",
              background: slide.circleColor,
            }}
          >
            {/* Product Image */}
            <Image
              src={slide.image}
              alt="Water Bottle"
              width={520}
              height={520}
              className="relative scale-110  z-10 transition-all duration-700"
              priority
            />
          </div>
        </div>

        {/* NAVIGATION BUTTONS */}
        <button
          onClick={prevSlide}
          className="absolute flex justify-center items-center left-2 lg:-left-60 top-1/2 -translate-y-1/2 z-20"
          style={{
            height: "44px",
            width: "44px",
            borderRadius: "50%",
            background: "var(--clr-bg-white)",
            color: "var(--clr-primary)",
            boxShadow: "var(--shadow-soft)",
            fontSize: "18px",
            fontWeight: 700,
          }}
        >
          <CaretLeftIcon size={32} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute flex justify-center items-center right-2 lg:-right-60 top-1/2 -translate-y-1/2 z-20"
          style={{
            height: "44px",
            width: "44px",
            borderRadius: "50%",
            background: "var(--clr-bg-white)",
            color: "var(--clr-primary)",
            boxShadow: "var(--shadow-soft)",
            fontSize: "18px",
            fontWeight: 700,
          }}
        >
          <CaretRightIcon size={32} />
        </button>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    img: "https://themazine.com/html/snappy/images/home/slide-3.jpg",
    tag: "Investment Management",
    title: "Providing ",
    highlight: "Financial Service",
    subtitle: "Snappy is best Financial company",
  },
  {
    img: "https://themazine.com/html/snappy/images/home/slide-4.jpg",
    tag: "Business Consulting",
    title: "Smart ",
    highlight: "Business Solutions",
    subtitle: "We help you grow faster",
  },
  {
    img: "https://themazine.com/html/snappy/images/home/slide-1.jpg",
    tag: "Wealth Planning",
    title: "Secure Your ",
    highlight: "Future Today",
    subtitle: "Trusted financial advisors",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="relative -mt-18 h-[90vh] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.img}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <p className="text-sm uppercase tracking-widest mb-4 text-gray-200">
            {slides[active].tag}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            {slides[active].title}
            <span className="text-sky-400">{slides[active].highlight}</span>
          </h1>

          <h3 className="text-xl md:text-2xl font-medium mb-6">
            {slides[active].subtitle}
          </h3>

          <p className="text-gray-200 leading-relaxed mb-10">
            Our investment and advice can be tailored to a client’s specific
            needs, and in ways that add value. We introduce clients to better
            sources of capital and smarter business strategies.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/case-studies"
              className="bg-sky-500 hover:bg-sky-600 transition text-white px-8 py-3 font-semibold"
            >
              Get Case Studies
            </Link>

            <Link
              href="/projects"
              className="bg-white text-gray-900 hover:bg-gray-100 transition px-8 py-3 font-semibold"
            >
              See More Project
            </Link>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => setActive((active - 1 + slides.length) % slides.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 bg-black/40 text-white hover:bg-sky-500 transition"
      >
        ‹
      </button>

      <button
        onClick={() => setActive((active + 1) % slides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 bg-black/40 text-white hover:bg-sky-500 transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all ${
              index === active ? "bg-sky-400 w-6" : "bg-white/60 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

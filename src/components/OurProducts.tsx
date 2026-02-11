"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const products = [
  {
    title: "Cosmetic\nProducts",
    image: "/ourproducts1.png",
  },
  {
    title: "Skincare\nProducts",
    image: "/ourproducts2.png",
  },
  {
    title: "Haircare\nProducts",
    image: "/ourproducts3.png",
  },
];

export default function OurProducts() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ================= CENTER FIRST SLIDE ON LOAD ================= */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || window.innerWidth >= 640) return;

    requestAnimationFrame(() => {
      slider.scrollTo({ left: 0, behavior: "instant" as ScrollBehavior });
    });
  }, []);

  /* ================= AUTO SLIDE (MOBILE ONLY) ================= */
  useEffect(() => {
    if (window.innerWidth >= 640) return;

    const slider = sliderRef.current;
    if (!slider) return;

    let index = 0;
    const cardWidth = slider.querySelector("[data-slide]")?.clientWidth || 0;

    const interval = setInterval(() => {
      index = (index + 1) % products.length;
      setActiveIndex(index);
      slider.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }, 3000);

    const stop = () => clearInterval(interval);
    slider.addEventListener("touchstart", stop, { once: true });

    return () => clearInterval(interval);
  }, []);

  /* ================= SYNC DOTS ON SCROLL ================= */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onScroll = () => {
      const cardWidth = slider.querySelector("[data-slide]")?.clientWidth || 1;
      const index = Math.round(slider.scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    slider.addEventListener("scroll", onScroll);
    return () => slider.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cardWidth = slider.querySelector("[data-slide]")?.clientWidth || 0;

    setActiveIndex(index);
    slider.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="ui-section h-auto xl:h-[57vh] ">
      <div className="ui-container">
        {/* HEADER */}
        <div className="text-center -mt-2 mb-4 lg:mb-6">
          <h2 className="ui-h1 lg:ui-h2">
            Our <span style={{ color: "var(--clr-primary)" }}>Products</span>
          </h2>
          <p
            className="mt-1 lg:mt-0 ui-para max-w-xl mx-auto"
            style={{ color: "var(--clr-text-muted)" }}
          >
            Elevate Your Brand with Diverse Creations
          </p>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="
            flex overflow-x-auto scroll-smooth
            snap-x snap-mandatory
            gap-8 pb-6
            sm:grid sm:grid-cols-2 lg:grid-cols-3
            sm:gap-10 lg:gap-12
            sm:overflow-visible
            place-items-center
          "
        >
          {/* LEFT SPACER */}
          <div className="min-w-[7.5%] sm:hidden" />

          {products.map((item, i) => (
            <Link
              key={i}
              href="/products"
              className="
      group flex justify-center
      min-w-[85%] snap-center
      sm:min-w-0
      cursor-pointer
    "
            >
              <div
                data-slide
                className="
        relative flex flex-col items-center
        w-[200px] lg:w-[260px] lg:h-[360px]
        transition-all duration-300 ease-out
        group-hover:-translate-y-2
      "
              >
                {/* IMAGE */}
                <div
                  className="
          relative z-10
          w-[180px] h-[140px]
          lg:w-[220px] lg:h-[220px] scale-125
          transition-transform duration-300 mb-3
          group-hover:scale-135
        "
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain "
                  />
                </div>

                {/* TITLE BADGE */}
                <div
                  className="
          ui-badge-2 overflow-hidden
          w-[180px] h-[90px] z-30
          lg:w-[240px] lg:h-[120px]
          rounded-b-full
          flex items-center justify-center
          text-center text-white
          text-sm lg:text-lg
          whitespace-pre-line
          transition-all duration-300
          group-hover:shadow-[0_0_0_3px_rgba(131,163,60,0.25)]
        "
                >
                  {item.title}
                </div>
              </div>
            </Link>
          ))}

          {/* RIGHT SPACER */}
          <div className="min-w-[7.5%] sm:hidden" />
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-4 sm:hidden">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === i ? "w-6 bg-[#83A33C]" : "w-2.5 bg-[#C7D9CC]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

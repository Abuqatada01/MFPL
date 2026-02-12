"use client";

import "./products.css";
import Link from "next/link";
import { useState, useEffect, useLayoutEffect } from "react";
import { useSearchParams } from "next/navigation";

/* ================= ORIGINAL IMAGES (DO NOT CHANGE ORDER) ================= */
const categoryImages: Record<string, string> = {
  "Skin Cream": "/1.jpg",
  "Body Lotion": "/11.jpg",
  "Skin Serum": "/12.jpg",
  "Skin Gel": "/28.png",
  "Skin Toner": "/13.jpg",
  "Hair Gel": "/27.jpg",
  "Hair Shampoo": "/10.jpg",
  "Hair Mask": "/20.jpg",
  "Hair Serum": "/12.jpg",
  "Hair Conditioner": "/10.jpg",
  "Face Gel": "/1.jpg",
  "Hair Spa": "/23.jpg",
  "Face Cleanser": "/24.jpg",
  "Shower Gel & Body Wash": "/4.jpg",
  "Intimate Care": "/22.jpg",
  "Hand Wash": "/6.jpg",
  "Sun Cream": "/26.jpg",
  "Baby Care": "/19.jpg",
  "Alcohol-Free Hair & Body Mist": "/13.jpg",
  "Scrubs & Pack": "/21.jpg",
  "Under Eye": "/27.jpg",
  "Lip Care": "/29.jpg",
  "Men's Grooming": "/18.jpg",
  "Anti Hair Fall Treatment": "/15.jpg",
  "Anti Dandruff Treatment": "/22.jpg",
  "Keratin Hair Treatment": "/17.jpg",
  "Hair Botox Treatment": "/16.jpg",
};

/* ================= CATEGORY TYPE MAP ================= */
type ProductType = "Cosmetics" | "Skin Care" | "Hair Care";

const categoryTypeMap: Record<string, ProductType> = {
  // 🌿 SKIN CARE
  "Skin Cream": "Skin Care",
  "Body Lotion": "Skin Care",
  "Skin Serum": "Skin Care",
  "Skin Gel": "Skin Care",
  "Skin Toner": "Skin Care",
  "Face Gel": "Skin Care",
  "Face Cleanser": "Skin Care",
  "Shower Gel & Body Wash": "Skin Care",
  "Intimate Care": "Skin Care",
  "Hand Wash": "Skin Care",
  "Sun Cream": "Skin Care",
  "Baby Care": "Skin Care",
  "Scrubs & Pack": "Skin Care",
  "Under Eye": "Skin Care",

  // 💆 HAIR CARE
  "Hair Gel": "Hair Care",
  "Hair Shampoo": "Hair Care",
  "Hair Mask": "Hair Care",
  "Hair Serum": "Hair Care",
  "Hair Conditioner": "Hair Care",
  "Hair Spa": "Hair Care",
  "Alcohol-Free Hair & Body Mist": "Hair Care",
  "Anti Hair Fall Treatment": "Hair Care",
  "Anti Dandruff Treatment": "Hair Care",
  "Keratin Hair Treatment": "Hair Care",
  "Hair Botox Treatment": "Hair Care",

  // 💄 COSMETICS
  "Lip Care": "Cosmetics",
  "Men's Grooming": "Cosmetics",
};

/* ================= FILTERS ================= */
const filters: (ProductType | "All")[] = [
  "All",
  "Cosmetics",
  "Skin Care",
  "Hair Care",
];

/* ================= URL CATEGORY TO FILTER MAP ================= */
const categoryToFilterMap: Record<string, ProductType> = {
  cosmetics: "Cosmetics",
  "skin-care": "Skin Care",
  "hair-care": "Hair Care",
};

/* ================= PAGE ================= */
export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<ProductType | "All">("All");

  /* ================= DISABLE SCROLL RESTORATION ================= */
  useLayoutEffect(() => {
    // Disable browser's scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  /* ================= SCROLL TO TOP & SET FILTER FROM URL ================= */
  useLayoutEffect(() => {
    // Immediate scroll to top (before paint)
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Additional scroll after render
    window.scrollTo({ top: 0, behavior: "instant" });

    // Get category from URL parameter
    const categoryParam = searchParams.get("category");

    if (categoryParam && categoryToFilterMap[categoryParam]) {
      setActiveFilter(categoryToFilterMap[categoryParam]);
    }

    // Delayed scroll to ensure it happens after any layout shifts
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 100);

    return () => clearTimeout(timer);
  }, [searchParams]);

  /* PRESERVE OBJECT ORDER */
  const products = Object.keys(categoryImages).map((name) => ({
    name,
    image: categoryImages[name],
    type: categoryTypeMap[name],
  }));

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.type === activeFilter);

  return (
    <>
      {/* ================= FILTER BUTTONS ================= */}
      <section className="ui-section">
        <h1 className="ui-h1 text-center text-[var(--clr-primary)]">
          Product Categories
        </h1>

        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition
                ${
                  activeFilter === filter
                    ? "bg-[var(--clr-primary)] text-white shadow-lg"
                    : "bg-white text-[#14542B] shadow hover:shadow-md"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* ================= PRODUCTS GRID ================= */}
        <div className="grid mt-6 lg:mt-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10">
          {filteredProducts.map((product) => (
            <Link
              key={product.name}
              href="/contact-us"
              className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_30px_60px_rgba(20,84,43,0.15)] hover:shadow-[0_40px_80px_rgba(20,84,43,0.25)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#83A33C]/20 via-[#53945B]/20 to-transparent opacity-0 group-hover:opacity-100 transition" />

              <div className="relative h-40 lg:h-80 bg-[#EDF5EE]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-fill transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative p-6 text-center bg-white">
                <h3 className="font-bold text-[#14542B]">{product.name}</h3>
                <p className="text-[#14542B]/70 mt-1">Explore the full range</p>
                <div className="mt-3 px-4 py-1.5 rounded-full inline-block bg-[var(--clr-secondary)] text-white text-sm font-semibold">
                  Get Quote →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

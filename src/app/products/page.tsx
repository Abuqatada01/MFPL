"use client";

import "./products.css";
import Link from "next/link";
import { useState } from "react";

/* ================= ORIGINAL IMAGES (DO NOT CHANGE ORDER) ================= */
const categoryImages: Record<string, string> = {
  "Skin Creams": "/1.jpg",
  "Body Lotions": "/11.jpg",
  "Skin Serums": "/12.jpg",
  "Skin Gels": "/28.png",
  "Skin Toners": "/13.jpg",
  "Hair Gels": "/27.jpg",
  "Hair Shampoo": "/10.jpg",
  "Hair Masks": "/20.jpg",
  "Hair Serum": "/12.jpg",
  "Hair Conditioner": "/10.jpg",
  "Face Gels": "/1.jpg",
  "Hair Spa": "/23.jpg",
  "Face Cleansers": "/24.jpg",
  "Shower Gel & Body Wash": "/4.jpg",
  "Intimate Care": "/22.jpg",
  "Hand Wash": "/6.jpg",
  "Sun Cream": "/26.jpg",
  "Baby Care": "/19.jpg",
  "Alcohol-Free Hair & Body Mists": "/13.jpg",
  "Scrubs & Packs": "/21.jpg",
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
  "Skin Creams": "Skin Care",
  "Body Lotions": "Skin Care",
  "Skin Serums": "Skin Care",
  "Skin Gels": "Skin Care",
  "Skin Toners": "Skin Care",
  "Face Gels": "Skin Care",
  "Face Cleansers": "Skin Care",
  "Shower Gel & Body Wash": "Skin Care",
  "Intimate Care": "Skin Care",
  "Hand Wash": "Skin Care",
  "Sun Cream": "Skin Care",
  "Baby Care": "Skin Care",
  "Scrubs & Packs": "Skin Care",
  "Under Eye": "Skin Care",

  // 💆 HAIR CARE
  "Hair Gels": "Hair Care",
  "Hair Shampoo": "Hair Care",
  "Hair Masks": "Hair Care",
  "Hair Serum": "Hair Care",
  "Hair Conditioner": "Hair Care",
  "Hair Spa": "Hair Care",
  "Alcohol-Free Hair & Body Mists": "Hair Care",
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

/* ================= PAGE ================= */
export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<ProductType | "All">("All");

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

"use client";

import "./products.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

/* ================= IMAGES (ORDER PRESERVED) ================= */
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

/* ================= TYPES ================= */
type ProductType = "Cosmetics" | "Skin Care" | "Hair Care";

const categoryTypeMap: Record<string, ProductType> = {
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

  "Lip Care": "Cosmetics",
  "Men's Grooming": "Cosmetics",
};

/* ================= URL → FILTER MAP ================= */
const urlToFilter: Record<string, ProductType> = {
  cosmetics: "Cosmetics",
  "skin-care": "Skin Care",
  "hair-care": "Hair Care",
};

const filters: (ProductType | "All")[] = [
  "All",
  "Cosmetics",
  "Skin Care",
  "Hair Care",
];

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<ProductType | "All">("All");

  /* ✅ SINGLE EFFECT – CLEAN & SAFE */
  useEffect(() => {
    const category = searchParams.get("category");

    // set filter
    if (category && urlToFilter[category]) {
      setActiveFilter(urlToFilter[category]);
    } else {
      setActiveFilter("All");
    }

    // scroll to top immediately
    window.scrollTo(0, 0);
  }, [searchParams]);

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
      <section className="lg:relative lg:h-[23vh] xl:h-[30vh] lg:py-6">
        <div className="max-w-[1500px] mx-auto lg:px-6">
          <div className="relative rounded-[2rem] md:rounded-[3.5rem] p-2 bg-gradient-to-b from-white/60 to-transparent">
            <div className="relative min-h-[360px] md:min-h-[420px] lg:min-h-[300px] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-gradient-to-r from-[#EDF5EE] via-[#E1EFE4] to-[#D4E8D8] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.15)]">
              <div className="relative grid h-full grid-cols-1 md:grid-cols-3 items-center px-6 sm:px-10 md:px-20">
                {/* CONTENT   2 COLUMNS */}
                <div className="max-w-6xl mt-4 lg:mt-0 text-left md:col-span-2">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#14542B] leading-tight mb-3">
                    Branded products that fit your industry, perfectly.
                  </h2>

                  <p className="text-[#14542B]/80 mb-5 ">
                    From custom merchandise to promotional solutions, we help
                    businesses create a lasting impression.
                  </p>

                  <Link
                    href="/contact-us"
                    className="
        inline-flex items-center gap-2
        bg-[#83A33C] text-white
        px-5 py-2.5 rounded-full
        text-sm font-semibold
        shadow-lg
        hover:shadow-xl hover:scale-105
        transition
      "
                  >
                    Get Quote →
                  </Link>
                </div>

                {/* IMAGE   1 COLUMN */}
                <div className="flex justify-center md:justify-end md:col-span-1">
                  <img
                    src="/product-hero.png"
                    alt="Branded Product"
                    className="h-[220px] md:h-[300px] object-contain drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ui-section">
        <h1 className="ui-h1 text-center text-[var(--clr-primary)]">
          Product Categories
        </h1>

        {/* FILTERS */}
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

        {/* GRID */}
        <div className="grid mt-6 lg:mt-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10">
          {filteredProducts.map((product) => (
            <Link
              key={product.name}
              href="/contact-us"
              className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_30px_60px_rgba(20,84,43,0.15)] hover:shadow-[0_40px_80px_rgba(20,84,43,0.25)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* HOVER GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#83A33C]/20 via-[#53945B]/20 to-transparent opacity-0 group-hover:opacity-100 transition" />

              {/* IMAGE */}
              <div className="relative h-40 lg:h-80 bg-[#EDF5EE]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-fill transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
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

"use client";

import "./products.css";
import Link from "next/link";

/* ================= CATEGORY IMAGES ================= */
const categoryImages: Record<string, string> = {
  Creams: "/1.jpg",
  Gels: "/2.jpg",
  "Skin Serums": "/12.jpg",
  Lotions: "/11.jpg",
  "Hair Conditioners": "/10.jpg",
  "Hair Serums": "/12.jpg",
  "Hair Cleansers": "/9.jpg",
  "Hand Wash": "/6.jpg",
  "Intimate Care": "/22.jpg",
  "Body Wash": "/4.jpg",
  "Face Cleansers": "/24.jpg",
  "Hair Masks": "/20.jpg",
  "Hair Spa": "/23.jpg",
  "Scrubs & Packs": "/21.jpg",
  "Skin Toners": "/13.jpg",
  "Hair & Body Mists": "/13.jpg",
  "Baby Care": "/19.jpg",
  "Sun Care": "/9.jpg",
  "Under Eye & Lip Care": "/26.jpg",
  "Men's Grooming": "/18.jpg",

  Shampoo: "/10.jpg",
  Conditioner: "/7.jpg",
  "Anti Hair Fall Treatment": "/15.jpg",
  "Anti Dandruff Treatment": "/22.jpg",
  "Hair Serum": "/12.jpg",
  "Keratin Hair Treatment": "/27.jpg",
  "Hair Botox Treatment": "/16.jpg",
  "Hair Masque & Spa": "/20.jpg",
  "Skin Care": "/24.jpg",
};

/* ================= CATEGORIES (FROM IMAGE MAP ONLY) ================= */
const categories = Object.keys(categoryImages);

/* ================= PAGE ================= */
export default function Home() {
  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="lg:relative lg:h-[23vh] xl:h-[30vh] lg:py-6">
        <div className="max-w-[1500px] mx-auto lg:px-6">
          <div className="relative rounded-[2rem] md:rounded-[3.5rem] p-2 bg-gradient-to-b from-white/60 to-transparent">
            <div className="relative min-h-[360px] md:min-h-[420px] lg:min-h-[300px] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-gradient-to-r from-[#EDF5EE] via-[#E1EFE4] to-[#D4E8D8] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.15)]">
              <div className="relative grid h-full grid-cols-1 md:grid-cols-3 items-center px-6 sm:px-10 md:px-20">
                {/* CONTENT — 2 COLUMNS */}
                <div className="max-w-6xl text-left md:col-span-2">
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

                {/* IMAGE — 1 COLUMN */}
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

      {/* ================= CATEGORIES ================= */}
      <section className="ui-section">
        <h1 className="ui-h1 text-center text-[var(--clr-primary)] mt-0 lg:mt-6">
          Product Categories
        </h1>

        <div className="grid mt-6 lg:mt-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10">
          {categories.map((cat) => (
            <Link
              key={cat}
              href="/contact-us"
              className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_30px_60px_rgba(20,84,43,0.15)] hover:shadow-[0_40px_80px_rgba(20,84,43,0.25)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#83A33C]/20 via-[#53945B]/20 to-transparent opacity-0 group-hover:opacity-100 transition" />

              <div className="relative h-40 lg:h-80 bg-[#EDF5EE]">
                <img
                  src={categoryImages[cat]}
                  alt={cat}
                  className="w-full h-full object-fill transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative p-6 text-center bg-white">
                <h3 className="font-bold text-[#14542B]">{cat}</h3>
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

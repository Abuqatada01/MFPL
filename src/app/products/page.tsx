"use client";
import "./products.css";
import Image from "next/image";
import { ArrowUpRightIcon, HeartIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import { products } from "./data";

const categoryImages: Record<string, string> = {
  Creams:
    "https://www.bointernational.net/wp-content/uploads/2025/11/DD-Cream-220x255.jpg",
  Gels: "https://www.bointernational.net/wp-content/uploads/2025/09/Skin-Barrier-Repair-Creams-220x255.jpg",
  "Skin Serums":
    "https://www.bointernational.net/wp-content/uploads/2025/02/Snail-Micin-Serum-Bo-Product-220x255.jpg",
  Lotions:
    "https://www.bointernational.net/wp-content/uploads/2025/01/SPF-50-Sunscreen-Body-Lotion-220x255.jpg",
  "Hair Conditioners":
    "https://www.bointernational.net/wp-content/uploads/2025/07/Curl-Care-Hair-Conditioner-220x255.jpg",
  "Hair Serums":
    "https://www.bointernational.net/wp-content/uploads/2025/07/Anti-Grey-Hair-Serum-220x255.jpg",
  "Hair Cleansers":
    "https://www.bointernational.net/wp-content/uploads/2024/10/Bioferment-Complex-Shampoo-220x255.jpg",
  "Hand Wash":
    "https://www.bointernational.net/wp-content/uploads/2023/03/Private-Label-Anti-Bacterial-Hand-Wash-220x255.jpg",
  "Intimate Care":
    "https://www.bointernational.net/wp-content/uploads/2025/08/Lactic-Acid-Intimate-Wash-220x255.jpg",
  "Body Wash":
    "https://www.bointernational.net/wp-content/uploads/2025/10/Perfume-Body-Lotion-220x255.jpg",
  "Face Cleansers":
    "https://www.bointernational.net/wp-content/uploads/2025/07/Facial-Cleansing-Gel-220x255.jpg",
  "Hair Masks":
    "https://www.bointernational.net/wp-content/uploads/2025/11/Repair-Damaged-Hair-Mask-220x255.jpg",
  "Hair Spa":
    "https://www.bointernational.net/wp-content/uploads/2025/08/Hair-Spa-Cream-220x255.jpg",
  "Scrubs & Packs":
    "https://www.bointernational.net/wp-content/uploads/2025/05/Dead-Sea-Mud-Face-Scrub-220x255.jpg",
  "Skin Toners":
    "https://www.bointernational.net/wp-content/uploads/2022/11/Private-Label-Skin-Glow-Face-Toner-220x255.jpg",
  "Hair & Body Mists":
    "https://www.bointernational.net/wp-content/uploads/2024/05/Private-Label-Cherry-Blossom-Body-Mist-Manufacturer-220x255.jpg",
  "Baby Care":
    "https://www.bointernational.net/wp-content/uploads/2022/12/Private-Label-Softening-Baby-Face-Wash-220x255.jpg",
  "Sun Care":
    "https://www.bointernational.net/wp-content/uploads/2025/01/Fluid-Sunscreen-220x255.jpg",
  "Under Eye & Lip Care":
    "https://www.bointernational.net/wp-content/uploads/2024/08/Lip-Plumping-Mask-Product-Image.jpg",
  "Men's Grooming":
    "https://www.bointernational.net/wp-content/uploads/2024/09/Beard-Spray-220x255.jpg",
};

// AUTO-EXTRACT CATEGORIES
const categories = [
  ...new Set(
    products.filter((p) => p.category !== "Range").map((p) => p.category)
  ),
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="relative py-6 bg-[#effaed]">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="relative rounded-[3.5rem] p-2 bg-gradient-to-b from-white/60 to-transparent">
            <div className="relative h-[30vh] min-h-[260px] overflow-hidden rounded-[3rem] bg-gradient-to-r from-[#EDF5EE] via-[#E1EFE4] to-[#D4E8D8] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.15)]">
              <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_90%_50%,rgba(255,255,255,0.45),transparent)]"></div>

              <div className="relative grid h-full grid-cols-1 md:grid-cols-2 items-center px-12 md:px-20">
                <div className="max-w-xl">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#14542B] leading-tight mb-3">
                    Branded products that fit <br />
                    your industry, perfectly.
                  </h2>

                  <p className="text-[#14542B]/80 mb-5 max-w-md text-sm md:text-base">
                    From custom merchandise to promotional solutions, we help
                    businesses create a lasting impression.
                  </p>

                  <button className="inline-flex items-center gap-2 bg-[#83A33C] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition">
                    Shop by industry →
                  </button>
                </div>

                <div className="relative flex justify-end items-center h-full">
                  <img
                    src="/product-hero.png"
                    alt="Branded Product"
                    className="h-[100%] max-h-[220px] scale-150 object-cover drop-shadow-[0_40px_40px_rgba(0,0,0,0.25)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="bg-[#effaed] py-16">
        <div className="ui-section mx-auto">
          <h1 className="ui-h1 mb-10 text-center">
            {selectedCategory ? selectedCategory : "Product Categories"}
          </h1>

          {/* ===== CATEGORY VIEW ===== */}
          {!selectedCategory && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {categories.map((cat) => (
                <div
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="
             group relative cursor-pointer overflow-hidden rounded-3xl
              shadow-[0_30px_60px_rgba(20,84,43,0.15)]
                  hover:shadow-[0_40px_80px_rgba(20,84,43,0.25)]
                transition-all duration-500 hover:-translate-y-2
                 bg-white
                "
                >
                  {/* Glow layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#83A33C]/20 via-[#53945B]/20 to-transparent opacity-0 group-hover:opacity-100 transition" />

                  {/* Image */}
                  <div className="relative h-80 bg-[#EDF5EE] flex items-center justify-center">
                    <img
                      src={categoryImages[cat]}
                      alt={cat}
                      className="w-full h-full object-fill transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative p-6 text-center bg-white">
                    <h3 className="text-lg font-bold text-[#14542B]">{cat}</h3>
                    <p className="text-sm text-[#14542B]/70 mt-1">
                      Explore the full range
                    </p>

                    <div className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#53945B]">
                      View Products →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ===== PRODUCT VIEW ===== */}
          {selectedCategory && (
            <div>
              <button
                onClick={() => setSelectedCategory(null)}
                className="mb-6 ui-badge text-sm text-[#14542B] font-semibold "
              >
                ← Back to Categories
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products
                  .filter((p) => p.category === selectedCategory)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="
                        rounded-2xl overflow-hidden shadow-lg
                        hover:shadow-xl transition hover:scale-[1.02]
                        bg-gradient-to-br from-white to-[#EDF5EE]
                      "
                    >
                      <div className="h-72 bg-white flex items-center justify-center">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div className="p-4">
                        <h3 className="text-base font-semibold text-[#242424] mb-1">
                          {item.name}
                        </h3>

                        <p className="text-sm text-gray-500 mb-3">
                          {item.description}
                        </p>

                        <Link
                          href="/contact-us"
                          className="
                            inline-block px-4 py-2 text-xs rounded-lg
                            font-semibold text-white transition hover:scale-105
                          "
                          style={{
                            background:
                              "linear-gradient(135deg, #53945B, #83A33C)",
                          }}
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

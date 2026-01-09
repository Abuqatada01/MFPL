"use client";
import "./products.css";
import Image from "next/image";
import { ArrowUpRightIcon, HeartIcon } from "@phosphor-icons/react";

export const products = [
  {
    id: 1,
    name: "Skin Brightening Cream",
    img: "https://cdn-fihlb.nitrocdn.com/QKuLgbhAzVxPUIcLLWigtOnqHVLkAkGs/assets/images/optimized/rev-84f35a5/vape-manufacturing.co.uk/wp-content/uploads/2022/05/80ml-original-vanilla-cream-tobacco-1200x.png",
    description: "Alpha Arbutin + Vitamin C",
    category: "Creams",
  },
  {
    id: 2,
    name: "Acne Control Cream",
    img: "/range/acne-control.jpg",
    description: "Salicylic Acid + Niacinamide",
    category: "Creams",
  },
  {
    id: 3,
    name: "Gentle Exfoliating Cream",
    img: "/range/exfoliating.jpg",
    description: "Glycolic Acid + Lactic Acid",
    category: "Creams",
  },
  {
    id: 4,
    name: "Soothing & Calming Cream",
    img: "/range/soothing.jpg",
    description: "Aloe Vera + Jojoba Oil",
    category: "Creams",
  },
  {
    id: 5,
    name: "Softening & Repair Cream",
    img: "/range/repair.jpg",
    description: "Cocoa Butter + Almond Oil",
    category: "Creams",
  },
  {
    id: 6,
    name: "Barrier Repair Cream",
    img: "/range/barrier.jpg",
    description: "Tranexamic Acid + Ceramide",
    category: "Creams",
  },
  {
    id: 7,
    name: "Deep Nourishing Cream",
    img: "/range/nourishing.jpg",
    description: "Peptides + Shea Butter",
    category: "Creams",
  },
  {
    id: 8,
    name: "Even Tone & Glow Cream",
    img: "/range/even-tone.jpg",
    description: "Kojic Acid + Glutathione",
    category: "Creams",
  },
  {
    id: 9,
    name: "Ultra Hydration Cream",
    img: "/range/hydration.jpg",
    description: "Hyaluronic Acid + Ceramides",
    category: "Creams",
  },
  {
    id: 10,
    name: "Anti-Aging Night Cream",
    img: "/range/anti-aging.jpg",
    description: "Retinol + Squalane",
    category: "Creams",
  },
  {
    id: 11,
    name: "Protective Day Cream",
    img: "/range/day-cream.jpg",
    description: "Niacinamide + Vitamin E",
    category: "Creams",
  },
  {
    id: 12,
    name: "Glow & Hydration Cream",
    img: "/range/glow.jpg",
    description: "Hyaluronic Acid + Vitamin C",
    category: "Creams",
  },

  // OUR RANGE
  {
    id: 13,
    name: "Skin Care",
    img: "/range/skin-care.jpg",
    description: "Complete face & skin solutions",
    category: "Range",
  },
  {
    id: 14,
    name: "Baby Care",
    img: "/range/baby-care.jpg",
    description: "Gentle & safe baby products",
    category: "Range",
  },
  {
    id: 15,
    name: "Hair Care",
    img: "/range/hair-care.jpg",
    description: "Advanced hair treatment range",
    category: "Range",
  },
  {
    id: 16,
    name: "Bath & Shower",
    img: "/range/bath.jpg",
    description: "Cleansing & spa experience",
    category: "Range",
  },
  {
    id: 17,
    name: "Sun Care",
    img: "/range/sun.jpg",
    description: "UV protection solutions",
    category: "Range",
  },
  {
    id: 18,
    name: "Men’s Grooming",
    img: "/range/men.jpg",
    description: "Beard, skin & grooming products",
    category: "Range",
  },
];

export default function Home() {
  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="relative py-6 bg-[#effaed]">
        <div className="max-w-[1500px] mx-auto px-6">
          {/* OUTER SOFT LAYER */}
          <div className="relative rounded-[3.5rem] p-2 bg-gradient-to-b from-white/60 to-transparent">
            {/* MAIN CAPSULE */}
            <div className="relative h-[30vh] min-h-[260px] overflow-hidden rounded-[3rem] bg-gradient-to-r from-[#EDF5EE] via-[#E1EFE4] to-[#D4E8D8] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.15)]">
              {/* RADIAL GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_90%_50%,rgba(255,255,255,0.45),transparent)]"></div>

              {/* CONTENT */}
              <div className="relative grid h-full grid-cols-1 md:grid-cols-2 items-center px-12 md:px-20">
                {/* LEFT CONTENT */}
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

                {/* RIGHT IMAGE */}
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

      {/* ================= PRODUCT CARDS ================= */}
      <section className="bg-[#effaed]">
        <div className="ui-section mx-auto ">
          <h1 className="ui-h1 mb-10 text-center">Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((item) => (
              <div
                key={item.id}
                className="
    rounded-2xl w-70 bg-white overflow-hidden
    shadow-lg hover:shadow-xl transition
    hover:scale-[1.02]
  "
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff, rgba(83,148,91,0.08))",
                }}
              >
                {/* IMAGE */}
                <div className="h-75 bg-gray-50 flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-fill"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  <h3 className="text-base font-semibold text-[#242424] mb-1">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500 mb-3">
                    {item.description}
                  </p>

                  {/* PRICE + CTA */}
                  <div className="flex items-center justify-between">
                    {/* <span className="font-bold text-[#14542B]">
                      {item.price}
                    </span> */}

                    <button
                      className="
    px-4 py-2 text-xs rounded-lg font-semibold text-white
    transition-all hover:scale-105
  "
                      style={{
                        background: "linear-gradient(135deg, #53945B, #83A33C)",
                      }}
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

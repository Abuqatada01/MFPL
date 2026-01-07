"use client";
import "./products.css";
import Image from "next/image";
import { ArrowUpRightIcon, HeartIcon } from "@phosphor-icons/react";

const products = [
  {
    id: 1,
    name: "Anti-Acne Face Cleanser",
    price: "₹5,150",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_ANTI_ACNE_FACE_CLEANSER.jpg",
    description:
      "A gentle yet effective cleanser formulated to remove excess oil and impurities.\nHelps prevent acne breakouts while soothing irritated skin.\nIdeal for daily use on acne-prone and sensitive skin.",
  },
  {
    id: 2,
    name: "Fruity Powder Masque",
    price: "₹5,750",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_FRUITY_POWDER_MASQUE.jpg",
    description:
      "A revitalizing powder masque enriched with natural fruit extracts.\nDeeply cleanses pores and restores skin’s natural glow.\nLeaves skin refreshed, smooth, and visibly brighter.",
  },
  {
    id: 3,
    name: "Bakuchiol Facial Drops",
    price: "₹9,300",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_BAKUCHIOL_FACIAL_DROPS.jpg",
    description:
      "A plant-based alternative to retinol for youthful-looking skin.\nReduces fine lines while improving skin texture and tone.\nSuitable for all skin types, even sensitive skin.",
  },
  {
    id: 4,
    name: "Purifying Face Cleanser",
    price: "₹5,150",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_ANTI_ACNE_FACE_CLEANSER.jpg",
    description:
      "Formulated to deeply cleanse and detoxify the skin.\nRemoves dirt, excess oil, and environmental pollutants.\nPromotes clear, balanced, and healthy-looking skin.",
  },
  {
    id: 5,
    name: "Herbal Glow Masque",
    price: "₹5,750",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_FRUITY_POWDER_MASQUE.jpg",
    description:
      "An herbal-infused masque designed to nourish and brighten skin.\nHelps improve complexion while calming stressed skin.\nPerfect for weekly skincare rituals.",
  },
  {
    id: 6,
    name: "Radiance Boost Facial Serum",
    price: "₹9,300",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_BAKUCHIOL_FACIAL_DROPS.jpg",
    description:
      "A lightweight serum that boosts skin radiance and hydration.\nSupports skin renewal and smooths uneven texture.\nLeaves skin soft, supple, and naturally luminous.",
  },
  {
    id: 7,
    name: "Clarifying Daily Face Wash",
    price: "₹5,150",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_ANTI_ACNE_FACE_CLEANSER.jpg",
    description:
      "A mild daily face wash that gently cleanses without stripping moisture.\nHelps maintain clear pores and balanced skin.\nSuitable for everyday use on all skin types.",
  },
  {
    id: 8,
    name: "Nourishing Fruit Masque",
    price: "₹5,750",
    img: "https://palmisthealthcare.com/public/imgs/products/skin_care/PALMIST_FRUITY_POWDER_MASQUE.jpg",
    description:
      "A nutrient-rich masque infused with fruit-based actives.\nReplenishes skin while enhancing natural softness and glow.\nSkin feels revitalized, smooth, and refreshed after use.",
  },
];

export default function Home() {
  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="relative py-20 bg-[#effaed]">
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
      <section className="bg-[#effaed] py-16">
        <div className="ui-section mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                {/* IMAGE */}
                <div className="h-65 bg-gray-50 flex items-center justify-center">
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

                    <button className="bg-[#83A33C] text-white px-4 py-2 text-xs rounded-lg font-semibold hover:scale-105 transition">
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

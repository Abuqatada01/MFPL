"use client";
import "./products.css";
import Image from "next/image";
import { ArrowUpRightIcon, HeartIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import { products } from "./data";

const categoryImages: Record<string, string> = {
  Creams:
    "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a42fe000e4e6789e1/view?project=6912e771002b88166cae",
  Gels: "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a43620034bed01025/view?project=6912e771002b88166cae",
  "Skin Serums":
    "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a435c0018b2528c74/view?project=6912e771002b88166cae",
  Lotions:
    "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a43670011cc156a53/view?project=6912e771002b88166cae",
  "Hair Conditioners":
    "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a435f0026bb4f1da6/view?project=6912e771002b88166cae",
  "Hair Serums":
    "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a435c0018b2528c74/view?project=6912e771002b88166cae",
  "Hair Cleansers":
    "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a43670011cc156a53/view?project=6912e771002b88166cae",
  "Hand Wash":
    "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a436300304b40ff68/view?project=6912e771002b88166cae",
  "Intimate Care":
    "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a43660018e53653b4/view?project=6912e771002b88166cae",
  "Body Wash":
    "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a43650025b222dd80/view?project=6912e771002b88166cae",
  "Face Cleansers":
    "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a42fe000e4e6789e1/view?project=6912e771002b88166cae",
  "Hair Masks":
    "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a436400265ef12014/view?project=6912e771002b88166cae",
  "Hair Spa":
    "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a43620034bed01025/view?project=6912e771002b88166cae",
  "Scrubs & Packs":
    "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a436400265ef12014/view?project=6912e771002b88166cae",
  "Skin Toners":
    "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a435e003190fea045/view?project=6912e771002b88166cae",
  "Hair & Body Mists":
    "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a435e003190fea045/view?project=6912e771002b88166cae",
  "Baby Care":
    "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a43660018e53653b4/view?project=6912e771002b88166cae",
  "Sun Care":
    "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a43620034bed01025/view?project=6912e771002b88166cae",
  "Under Eye & Lip Care":
    "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a4362000d4eb33ae3/view?project=6912e771002b88166cae",
  "Men's Grooming":
    "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a42fe000e4e6789e1/view?project=6912e771002b88166cae",
};

// AUTO-EXTRACT CATEGORIES
const categories = [
  ...new Set(
    products.filter((p) => p.category !== "Range").map((p) => p.category),
  ),
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="lg:relative lg:h-[23vh] xl:h-[30vh] lg:py-6 bg-[#effaed]">
        <div className="max-w-[1500px] mx-auto lg:px-6">
          <div className="relative rounded-[2rem] md:rounded-[3.5rem] p-2 bg-gradient-to-b from-white/60 to-transparent">
            <div
              className="relative min-h-[360px] md:min-h-[420px] lg:min-h-[300px]
        overflow-hidden rounded-[2rem] md:rounded-[3rem]
        bg-gradient-to-r from-[#EDF5EE] via-[#E1EFE4] to-[#D4E8D8]
        shadow-[0_40px_80px_-30px_rgba(0,0,0,0.15)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_90%_50%,rgba(255,255,255,0.45),transparent)]"></div>

              <div className="relative grid h-full grid-cols-1 md:grid-cols-2 items-center px-6 sm:px-10 md:px-20">
                {/* TEXT */}
                <div className="max-w-xl text-center md:text-left">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#14542B] leading-tight mb-3">
                    Branded products that fit <br />
                    your industry, perfectly.
                  </h2>

                  <p className="text-[#14542B]/80 mb-5 max-w-md mx-auto md:mx-0 ui-desc">
                    From custom merchandise to promotional solutions, we help
                    businesses create a lasting impression.
                  </p>

                  <button className="inline-flex items-center gap-2 bg-[#83A33C] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition">
                    Shop by industry →
                  </button>
                </div>

                {/* IMAGE */}
                <div className="relative flex justify-center md:justify-end items-end h-full mt-6 md:mt-0">
                  <img
                    src="/product-hero.png"
                    alt="Branded Product"
                    className="h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px]
                object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.25)]"
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
          <h1 className="ui-h1  text-center">Product Categories</h1>

          {/* ===== CATEGORY VIEW ===== */}
          {!selectedCategory && (
            <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
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
              {/* BACK BUTTON */}
              <button
                onClick={() => setSelectedCategory(null)}
                className="mb-6 ui-badge text-sm text-[#14542B] font-semibold"
              >
                ← Back to Categories
              </button>

              {/* PRODUCT CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {products
                  .filter((p) => p.category === selectedCategory)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="
          group relative overflow-hidden rounded-3xl
          backdrop-blur-xl
          bg-white/60
          border border-white/30
          shadow-[0_12px_40px_rgba(20,84,43,0.18)]
          transition-all duration-500
          hover:-translate-y-2
          hover:bg-white/75
          hover:shadow-[0_30px_80px_rgba(83,148,91,0.45)]
          min-h-[280px]
        "
                    >
                      {/* BORDER GLOW */}
                      <div
                        className="
            absolute inset-0 rounded-3xl
            bg-gradient-to-r
            from-[#14542B]
            via-[#53945B]
            to-[#83A33C]
            opacity-0
            group-hover:opacity-100
            blur-xl
            transition duration-500
          "
                      />

                      {/* INNER GLASS LAYER */}
                      <div
                        className="
            absolute inset-[1.5px] rounded-[22px]
            bg-white/70
            backdrop-blur-xl
          "
                      />

                      {/* Gradient Glow */}
                      <div
                        className="
            absolute -top-28 -right-28 w-72 h-72 rounded-full
            bg-gradient-to-br
            from-[#53945B]/40
            via-[#83A33C]/30
            to-transparent
            blur-3xl
            opacity-70
            group-hover:scale-110 transition duration-500
          "
                      />

                      {/* Content */}
                      {/* Content */}
                      <div
                        className="
  relative z-10
  flex flex-col
  justify-center items-center
  text-center
  p-8
  h-full
"
                      >
                        <h3 className="text-2xl lg:text-3xl font-semibold text-[#242424] mb-4 leading-snug">
                          {item.name}
                        </h3>

                        <p className="ui-para text-[#242424]/70 leading-relaxed max-w-[280px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              {/* COMMON GET QUOTE BUTTON */}
              <div className="flex justify-center mt-10">
                <Link
                  href="/contact-us"
                  className="
          px-8 py-3 text-sm rounded-xl
          font-semibold text-white
          transition hover:scale-105
        "
                  style={{
                    background: "linear-gradient(135deg, #53945B, #83A33C)",
                  }}
                >
                  Get Quote for {selectedCategory}
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

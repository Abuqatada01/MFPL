"use client";

import "./products.css";
import Link from "next/link";
import { products } from "./data";

/* ================= CATEGORY IMAGES ================= */
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

/* ================= EXTRACT & LIMIT CATEGORIES ================= */
const categories = [
  ...new Set(
    products.filter((p) => p.category !== "Range").map((p) => p.category),
  ),
].slice(0, 20);

/* ================= PAGE ================= */
export default function Home() {
  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="lg:relative lg:h-[23vh] xl:h-[30vh] lg:py-6">
        <div className="max-w-[1500px] mx-auto lg:px-6">
          <div className="relative rounded-[2rem] md:rounded-[3.5rem] p-2 bg-gradient-to-b from-white/60 to-transparent">
            <div className="relative min-h-[360px] md:min-h-[420px] lg:min-h-[300px] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-gradient-to-r from-[#EDF5EE] via-[#E1EFE4] to-[#D4E8D8] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.15)]">
              <div className="relative grid h-full grid-cols-1 md:grid-cols-2 items-center px-6 sm:px-10 md:px-20">
                <div className="max-w-xl text-center md:text-left">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#14542B] leading-tight mb-3">
                    Branded products that fit <br /> your industry, perfectly.
                  </h2>
                  <p className="text-[#14542B]/80 mb-5 max-w-md mx-auto md:mx-0">
                    From custom merchandise to promotional solutions, we help
                    businesses create a lasting impression.
                  </p>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-[#83A33C] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
                  >
                    Get Quote →
                  </Link>
                </div>

                <div className="flex justify-center md:justify-end">
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
        <h1 className="ui-h1 text-center text-[var(--clr-primary)] mt-6">
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

              <div className="relative h-40 lg:h-65 bg-[#EDF5EE]">
                <img
                  src={categoryImages[cat]}
                  alt={cat}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
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

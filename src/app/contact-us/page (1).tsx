"use client";

import { useState } from "react";
import { Heart } from "@phosphor-icons/react";
import { products } from "../products/data"; // adjust path if needed

const categories: string[] = [
  "Creams",
  "Skin Serums",
  "Lotions",
  "Hair Conditioners",
  "Hair Serums",
  "Hair Cleansers",
  "Hand Wash",
  "Intimate Care",
  "Body Wash",
  "Face Cleansers",
  "Hair Masks",
  "Hair Spa",
  "Scrubs & Packs",
  "Skin Toners",
  "Hair & Body Mists",
  "Baby Care",
  "Sun Care",
  "Under Eye & Lip Care",
  "Men's Grooming",
];

const MIN_QTY = 50;

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState<number | "">("");

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory,
  );

  const handleQuantityChange = (value: string) => {
    if (value === "") {
      setQuantity("");
      return;
    }

    const num = Number(value);
    setQuantity(isNaN(num) ? "" : num);
  };

  return (
    <section className="relative py-10 xl:py-25 flex items-start justify-center px-6 overflow-hidden bg-gradient-to-br from-[#effaed] via-white to-[#f6fbf3]">
      {/* SOFT SHAPES */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-[#83A33C]/20 blur-3xl" />
      <div className="absolute bottom-[-160px] right-[-160px] w-[460px] h-[460px] rounded-full bg-[#53945B]/20 blur-3xl" />

      {/* MAIN WRAPPER */}
      <div className="relative z-10 w-full max-w-6xl border-2 border-[var(--clr-secondary)] bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-10 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl font-semibold text-[#242424] mb-3">
              Contact
            </h1>

            <p className="ui-para text-[#242424]/70 max-w-sm leading-relaxed mb-4">
              Our collaborative approach ensures our team works closely with you
              bringing manufacturing expertise, clarity, and reliable support at
              every stage of your brand journey.
            </p>

            <div className="flex items-center gap-3 text-[#14542B]">
              <Heart size={22} weight="fill" />
              <span className="text-sm">We’re happy to help</span>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="space-y-10">
            {/* ROW 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Input label="Name" />
              <Input label="Company" />
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Input label="Email" />

              <div>
                <label className="text-xs uppercase tracking-wide text-[#242424]/60">
                  Country
                </label>
                <select className="form-select">
                  <option>Select Country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>New Zealand</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Italy</option>
                  <option>Spain</option>
                  <option>United Arab Emirates</option>
                  <option>Singapore</option>
                  <option>Malaysia</option>
                  <option>Japan</option>
                  <option>South Korea</option>
                  <option>Brazil</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* ROW 3 – CATEGORY */}
            <div>
              <label className="text-xs uppercase tracking-wide text-[#242424]/60">
                Category
              </label>
              <select
                className="form-select"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedProduct("");
                  setQuantity("");
                }}
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* ROW 4 – PRODUCT & QUANTITY */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* PRODUCT */}
              <div>
                <label className="text-xs uppercase tracking-wide text-[#242424]/60">
                  Product
                </label>
                <select
                  className="form-select"
                  value={selectedProduct}
                  disabled={!selectedCategory}
                  onChange={(e) => {
                    setSelectedProduct(e.target.value);
                    setQuantity("");
                  }}
                >
                  <option value="">
                    {selectedCategory
                      ? "Select Product"
                      : "Select Category First"}
                  </option>

                  {filteredProducts.map((product) => (
                    <option key={product.id} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* QUANTITY */}
              <div>
                <label className="text-xs uppercase tracking-wide text-[#242424]/60">
                  Quantity
                </label>
                <input
                  type="number"
                  min={MIN_QTY}
                  placeholder={`Minimum ${MIN_QTY} units`}
                  value={quantity}
                  disabled={!selectedProduct}
                  onChange={(e) => handleQuantityChange(e.target.value)}
                  className="w-full border-b border-[#242424]/20 py-2 bg-transparent focus:outline-none focus:border-[#53945B] transition disabled:opacity-40"
                />
                <p className="mt-1 text-xs text-[#242424]/50">
                  MOQ: {MIN_QTY} units
                </p>
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-xs uppercase tracking-wide text-[#242424]/60">
                Message
              </label>
              <textarea rows={4} className="form-textarea" />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={!selectedProduct || quantity === ""}
              className="ui-badge-2 text-white px-10 py-3 rounded-full font-semibold text-sm hover:bg-[#14542B] transition disabled:opacity-50"
            >
              Submit
            </button>

            {/* CONSENT */}
            <div className="flex items-start gap-3 text-xs text-[#242424]/60 max-w-md">
              <input type="checkbox" className="mt-1 accent-[#83A33C]" />
              <p>
                By ticking this box, I consent to the processing of my personal
                data in accordance with the privacy policy.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* THANK YOU CARD */}
      <div className="hidden md:flex absolute bottom-8 left-8 bg-[#83A33C] text-[#14542B] px-6 py-4 rounded-xl shadow-lg text-sm rotate-[-4deg]">
        <div>
          <strong>Thank you!</strong>
          <br />
          Your request was sent
        </div>
      </div>
    </section>
  );
}

/* INPUT COMPONENT */
function Input({ label }: { label: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wide text-[#242424]/60">
        {label}
      </label>
      <input
        type="text"
        className="w-full border-b border-[#242424]/20 py-2 bg-transparent focus:outline-none focus:border-[#53945B] transition"
      />
    </div>
  );
}

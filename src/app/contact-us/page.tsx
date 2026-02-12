"use client";

import { useState } from "react";
import { Heart } from "@phosphor-icons/react";

const categories: string[] = [
  "Skin Creams",
  "Body Lotions",
  "Skin Serums",
  "Skin Gels",
  "Skin Toners",
  "Hair Gels",
  "Hair Shampoo",
  "Hair Masks",
  "Hair Serum",
  "Hair Conditioner",
  "Face Gels",
  "Hair Spa",
  // "Hair Cleansers",
  "Face Cleansers",
  "Shower Gel & Body Wash",
  "Intimate Care",
  "Hand Wash",
  "Sun Cream",
  "Baby Care",
  "Alcohol-Free Hair & Body Mists",
  "Scrubs & Packs",
  "Under Eye",
  "Lip Care",
  "Men's Grooming",

  // Conditioner,
  "Anti Hair Fall Treatment",
  "Anti Dandruff Treatment",

  "Keratin Hair Treatment",
  "Hair Botox Treatment",
  "Other",
];

const MIN_QTY = 50;

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [otherCategory, setOtherCategory] = useState("");
  const [quantity, setQuantity] = useState<number | "">("");
  const [country, setCountry] = useState("");
  const [otherCountry, setOtherCountry] = useState("");

  const handleQuantityChange = (value: string) => {
    if (value === "") {
      setQuantity("");
      return;
    }
    const num = Number(value);
    setQuantity(num < MIN_QTY ? MIN_QTY : num);
  };

  return (
    <section className="relative py-10 xl:py-24 flex justify-center px-6 overflow-hidden bg-gradient-to-br from-[#effaed] via-white to-[#f6fbf3]">
      {/* BACKGROUND SHAPES */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-[#83A33C]/20 blur-3xl" />
      <div className="absolute bottom-[-160px] right-[-160px] w-[460px] h-[460px] rounded-full bg-[#53945B]/20 blur-3xl" />

      {/* MAIN CARD */}
      <div className="relative z-10 w-full max-w-6xl border-2 border-[var(--clr-secondary)] bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-10 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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

              {/* COUNTRY */}
              <div>
                <label className="text-xs uppercase tracking-wide text-[#242424]/60">
                  Country
                </label>
                <select
                  className="form-select"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                    setOtherCountry("");
                  }}
                >
                  <option value="">Select Country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>UAE</option>
                  <option>Singapore</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* OTHER COUNTRY */}
            {country === "Other" && (
              <Input
                label="Specify Country"
                value={otherCountry}
                onChange={(e) => setOtherCountry(e.target.value)}
              />
            )}

            {/* CATEGORY + QUANTITY */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* CATEGORY */}
              <div>
                <label className="text-xs uppercase tracking-wide text-[#242424]/60">
                  Category
                </label>
                <select
                  className="form-select"
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setOtherCategory("");
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
              {selectedCategory === "Other" && (
                <Input
                  label="Specify Category"
                  value={otherCategory}
                  onChange={(e) => setOtherCategory(e.target.value)}
                />
              )}
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
                  disabled={
                    !selectedCategory ||
                    (selectedCategory === "Other" && !otherCategory)
                  }
                  onChange={(e) => handleQuantityChange(e.target.value)}
                  className="w-full border-b border-[#242424]/20 py-2 bg-transparent focus:outline-none focus:border-[#53945B] transition disabled:opacity-40"
                />
              </div>
            </div>

            {/* OTHER CATEGORY */}

            {/* MESSAGE */}
            <div className="border-[0.5px] p-2 border-[#242424]/40 rounded">
              <label className="text-xs uppercase tracking-wide text-[#242424]/60">
                Message
              </label>
              <textarea rows={4} className="form-textarea" />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={
                !selectedCategory ||
                quantity === "" ||
                (selectedCategory === "Other" && !otherCategory)
              }
              className="ui-badge-2 text-white px-10 py-3 rounded-full font-semibold text-sm transition disabled:opacity-50"
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
    </section>
  );
}

/* INPUT COMPONENT */
function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wide text-[#242424]/60">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full border-b border-[#242424]/20 py-2 bg-transparent focus:outline-none focus:border-[#53945B] transition"
      />
    </div>
  );
}

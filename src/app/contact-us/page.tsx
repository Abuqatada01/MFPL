"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Heart } from "@phosphor-icons/react";

const categories: string[] = [
  "Skin Cream",
  "Body Lotion",
  "Skin Serum",
  "Skin Gel",
  "Skin Toner",
  "Hair Gel",
  "Hair Shampoo",
  "Hair Masks",
  "Hair Serum",
  "Hair Conditioner",
  "Face Gel",
  "Hair Spa",
  // "Hair Cleansers",
  "Face Cleansers",
  "Shower Gel & Body Wash",
  "Intimate Care",
  "Hand Wash",
  "SunScreen",
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
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [otherCategory, setOtherCategory] = useState("");
  const [quantity, setQuantity] = useState<number | "">("");
  const [country, setCountry] = useState("");
  const [otherCountry, setOtherCountry] = useState("");

  const handleQuantityChange = (value: string) => {
    if (value === "") return setQuantity("");
    const num = Number(value);
    setQuantity(num < MIN_QTY ? MIN_QTY : num);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_6pmn1y3",
        "template_1sefwnp",
        e.currentTarget,
        "D4g0tOj1HYdlYdheB",
      );

      alert("Thank you! Our team will contact you shortly.");
      e.currentTarget.reset();
      setSelectedCategory("");
      setOtherCategory("");
      setQuantity("");
      setCountry("");
      setOtherCountry("");
    } catch (err) {
      console.error(err);
      alert("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-10 xl:py-24 flex justify-center px-6 bg-gradient-to-br from-[#effaed] via-white to-[#f6fbf3]">
      <div className="relative z-10 w-full max-w-6xl border-2 border-[var(--clr-secondary)] bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-10 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-semibold mb-3">Contact</h1>
            <p className="ui-para text-[#242424]/70 max-w-sm mb-4">
              Our collaborative approach ensures expert guidance at every stage
              of your brand journey.
            </p>
            <div className="flex items-center gap-3 text-[#14542B]">
              <Heart size={22} weight="fill" />
              <span className="text-sm">We’re happy to help</span>
            </div>
          </div>

          {/* FORM */}
          <form className="space-y-10" onSubmit={handleSubmit}>
            {/* NAME + COMPANY */}
            <div className="grid sm:grid-cols-2 gap-8">
              <Input label="Name" name="from_name" required />
              <Input label="Company" name="company" />
            </div>

            {/* EMAIL + COUNTRY */}
            <div className="grid sm:grid-cols-2 gap-8">
              <Input label="Email" name="from_email" type="email" required />

              <div>
                <label className="text-xs uppercase tracking-wide text-[#242424]/60">
                  Country
                </label>
                <select
                  name="country"
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
                  <option>UK</option>
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

            {country === "Other" && (
              <Input
                label="Specify Country"
                name="other_country"
                value={otherCountry}
                onChange={(e) => setOtherCountry(e.target.value)}
              />
            )}

            {/* CATEGORY + QTY */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label className="text-xs uppercase tracking-wide text-[#242424]/60">
                  Category
                </label>
                <select
                  name="category"
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
                    <option key={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {selectedCategory === "Other" && (
                <Input
                  label="Specify Category"
                  name="other_category"
                  value={otherCategory}
                  onChange={(e) => setOtherCategory(e.target.value)}
                />
              )}

              <div>
                <label className="text-xs uppercase tracking-wide text-[#242424]/60">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  min={MIN_QTY}
                  value={quantity}
                  onChange={(e) => handleQuantityChange(e.target.value)}
                  disabled={
                    !selectedCategory ||
                    (selectedCategory === "Other" && !otherCategory)
                  }
                  className="w-full border-b py-2 bg-transparent focus:outline-none"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-xs uppercase tracking-wide text-[#242424]/60">
                Message
              </label>
              <textarea name="message" rows={4} className="form-textarea" />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="ui-badge-2 px-10 py-3 rounded-full text-white font-semibold"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* INPUT */
function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wide text-[#242424]/60">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border-b py-2 bg-transparent focus:outline-none focus:border-[#53945B]"
      />
    </div>
  );
}

"use client";

import { FacebookLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleProductsClick = (category?: string) => {
    if (pathname === "/products" && !category) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (category) {
      router.push(`/products?category=${category}`);
    } else {
      router.push("/products");
    }
  };

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, var(--clr-accent), #0f2f1c)",
        color: "#ffffff",
      }}
    >
      <div className="ui-section grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-12">
        {/* ================= BRAND ================= */}
        <div className="col-span-full md:col-span-1">
          <img src="/LogoWhite.png" alt="Logo" className="h-10 mb-2" />

          <p className="text-sm leading-relaxed opacity-80">
            MFPL provides reliable white label manufacturing solutions, enabling
            beauty brands to grow with confidence, quality, and compliance.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-3 lg:mt-6">
            {[
              {
                href: "https://www.instagram.com/mfpl__?igsh=dXY5NDV1ZXcwdWM1",
                icon: <InstagramLogoIcon weight="fill" size={22} />,
                label: "Instagram",
              },
              {
                href: "https://www.facebook.com/profile.php?id=61585006272529",
                icon: <FacebookLogoIcon weight="fill" size={22} />,
                label: "Facebook",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="h-9 w-9 flex items-center justify-center rounded-full
                transition hover:scale-110 hover:bg-white/20"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ================= LINKS ================= */}
        <div className="col-span-full md:col-span-2 grid grid-cols-2 gap-3 lg:gap-8">
          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <button
                  onClick={() => handleProductsClick()}
                  className="text-left hover:underline cursor-pointer"
                >
                  Products
                </button>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="font-semibold mb-5">Products</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <button
                  onClick={() => handleProductsClick("cosmetics")}
                  className="text-left hover:underline cursor-pointer"
                >
                  Cosmetics
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleProductsClick("hair-care")}
                  className="text-left hover:underline cursor-pointer"
                >
                  Hair Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleProductsClick("skin-care")}
                  className="text-left hover:underline cursor-pointer"
                >
                  Skin Care
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= CONTACT ================= */}
        <div className="col-span-full md:col-span-1 text-sm space-y-2 opacity-90">
          <p>
            <span className="font-bold text-[15px] text-white">Address :</span>
            <br />
            109, 110, 111, Pushparaj Industrial Estate, S. No. 66, Naikpada,
            Near Laxmi Compound, Vasai (E) - 401208
          </p>

          <p>
            <span className="font-bold text-[15px] text-white">Mobile :</span>{" "}
            +91 92050 94789
            <br />
            <span className="font-bold text-[15px] text-white">
              Email :
            </span>{" "}
            info@medicosmoformulations.com
          </p>

          <p>
            <span className="font-bold text-[15px] text-white">
              Working Hours :
            </span>
            <br />
            Mon – Sat : 9:00 AM – 6:00 PM
            <br />
            Sunday : Closed
          </p>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div
        className="text-center text-sm py-5"
        style={{
          background: "rgba(0,0,0,0.25)",
          color: "rgba(255,255,255,0.75)",
        }}
      >
        © {new Date().getFullYear()}{" "}
        <span style={{ color: "var(--clr-secondary)" }}>Medicosmo</span>. All
        rights reserved.{" "}
        <Link href="https://greensmedia.co.in">
          <span style={{ color: "var(--clr-secondary)" }}>Greens Media</span>
        </Link>
      </div>
    </footer>
  );
}

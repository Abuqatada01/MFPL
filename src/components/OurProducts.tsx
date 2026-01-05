"use client";

import Image from "next/image";

const products = [
  {
    title: "Cosmetic\nFormulation",
    image: "https://palmisthealthcare.com/public/imgs/home/i4.jpg",
  },
  {
    title: "Skincare\nFormulation",
    image: "https://palmisthealthcare.com/public/imgs/home/innovation.jpg",
  },
  {
    title: "Haircare\nFormulation",
    image: "https://palmisthealthcare.com/public/imgs/home/i3.jpg",
  },
  {
    title: "Fragrances\nFormulation",
    image: "https://palmisthealthcare.com/public/imgs/home/i2.jpg",
  },
];

export default function OurProducts() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        {/* TOP LABEL */}
        <div className="flex items-center gap-4 mb-10">
          <span
            style={{
              height: "10px",
              width: "10px",
              borderRadius: "50%",
              background: "var(--clr-primary)",
            }}
          />
          <p className="uppercase text-sm tracking-widest text-gray-500">
            Crafted Collection →
          </p>
        </div>

        {/* HEADING */}
        <div className="text-center mb-20">
          <h2 className="ui-h2">
            Elevate Your Brand <br />
            with Diverse Creations
          </h2>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((item, i) => (
            <div key={i} className=" text-center flex flex-col items-center">
              {/* PRODUCT IMAGE */}
              <div className="relative z-10 flex justify-center ">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={220}
                  height={220}
                  className="object-contain"
                />
              </div>

              {/* SEMI CIRCLE + TEXT (SAME CONTAINER) */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: "240px",
                  height: "120px",
                  background: "#53945B",
                  borderBottomLeftRadius: "240px",
                  borderBottomRightRadius: "240px",
                }}
              >
                <p
                  className="text-lg font-medium leading-snug whitespace-pre-line text-center"
                  style={{ color: "var(--clr-text-light)" }}
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

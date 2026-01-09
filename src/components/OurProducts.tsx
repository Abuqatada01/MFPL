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
          <h2 className="ui-h1">
            Elevate Your Brand <br />
            with Diverse Creations
          </h2>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((item, i) => (
            <div key={i} className="group flex justify-center">
              {/* CARD FRAME */}
              <div
                className="relative flex flex-col items-center justify-between transition-all duration-500"
                style={{
                  width: "260px",
                  height: "360px",
                }}
              >
                {/* IMAGE HOLDER */}
                <div className="relative z-10 flex justify-center items-center transition-transform duration-500 ease-out group-hover:-translate-y-4">
                  <div className="w-[220px] h-[220px] flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* SEMI CIRCLE */}
                <div
                  className="flex items-center ui-badge-2 justify-center text-center transition-all duration-500 ease-out
          group-hover:scale-105
          group-hover:shadow-[0_0_0_1px_#83A33C,0_12px_30px_rgba(131,163,60,0.35)]"
                  style={{
                    width: "240px",
                    height: "120px",
                    // background: "#53945B",
                    borderBottomLeftRadius: "240px",
                    borderBottomRightRadius: "240px",
                  }}
                >
                  <p className="ui-para text-white font-medium leading-snug whitespace-pre-line transition-transform duration-500 group-hover:scale-105">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

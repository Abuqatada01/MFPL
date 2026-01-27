"use client";

import Image from "next/image";

const products = [
  {
    title: "Cosmetic\nFormulation",
    image:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a4362000d4eb33ae3/view?project=6912e771002b88166cae",
  },
  {
    title: "Skincare\nFormulation",
    image:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a42fe000e4e6789e1/view?project=6912e771002b88166cae",
  },
  {
    title: "Haircare\nFormulation",
    image:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/696a43670011cc156a53/view?project=6912e771002b88166cae",
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
        <div className="text-center mb-3 lg:mb-20">
          <h2 className="ui-h1">
            Elevate Your Brand <br />
            with Diverse Creations
          </h2>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
          {products.map((item, i) => (
            <div key={i} className="group flex justify-center">
              {/* CARD FRAME */}
              <div className="relative w-[160px] lg:w-[260px] lg:h-[360px] flex flex-col items-center justify-between transition-all duration-500">
                {/* IMAGE HOLDER */}
                <div className="relative z-10 flex justify-center items-center transition-transform duration-500 ease-out group-hover:-translate-y-4">
                  <div className="w-[100px] overflow-hidden h-[80px] lg:w-[220px] lg:h-[220px] flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain scale-125"
                    />
                  </div>
                </div>

                {/* SEMI CIRCLE */}
                <div
                  className="
    flex items-center justify-center overflow-hidden text-center ui-badge-2
    transition-all duration-500 ease-out
    group-hover:scale-105
    group-hover:shadow-[0_0_0_1px_#83A33C,0_12px_30px_rgba(131,163,60,0.35)]

    w-[100px] h-[55px]
    sm:w-[200px] sm:h-[100px]
    md:w-[240px] md:h-[120px]

    rounded-b-full
  "
                >
                  <p className="text-[12px] lg:text-lg text-white font-medium lg:leading-snug lg:whitespace-pre-line transition-transform duration-500 group-hover:scale-105">
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

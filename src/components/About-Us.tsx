"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="" style={{ background: "var(--clr-bg-light)" }}>
      <div className=" ui-section ">
        <div className="ui-badge text-center">About Us</div>
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20 items-start">
          {/* LEFT */}
          <div>
            <h2 className="ui-h2 mt-2 uppercase tracking-wide">
              YOUR TRUSTED PARTNER FOR <br />
              <span style={{ color: "var(--clr-primary)" }}>
                COSMETIC, SKINCARE & HAIRCARE MANUFACTURING
              </span>
            </h2>

            {/* STATS */}
            <div className="flex gap-8 mt-3 xl:mt-12">
              {[
                { value: "120+", label: "Global Brands" },
                { value: "2,000+", label: "Formulations" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="px-4 py-3 lg:px-6 lg:py-5 rounded-xl"
                  style={{
                    background: "var(--clr-bg-white)",
                    boxShadow: "0 10px 30px rgba(20,84,43,0.08)",
                  }}
                >
                  <p
                    className="ui-para font-bold"
                    style={{ color: "var(--clr-accent)" }}
                  >
                    {item.value}
                  </p>
                  <p
                    className="lg:mt-1 ui-desc"
                    style={{ color: "var(--clr-text-muted)" }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <p className="ui-para mb-6">
              At<strong> MFPL</strong>, we operate as your behind-the-scenes
              manufacturing expert, delivering reliable white label and private
              label solutions across cosmetic, skincare, and haircare
              categories. We specialize in developing premium, pre-formulated
              products that meet industry standards, helping brands enter and
              grow in the beauty market without investing in R&D or
              manufacturing infrastructure.
            </p>

            <p className="ui-para mb-6">
              Our manufacturing approach is designed to simplify
              complexity—offering ready-to-brand formulations, consistent
              quality, and scalable production. This allows our partners to
              focus on building strong brand identities, marketing strategies,
              and customer trust.
            </p>

            <p className="ui-para">
              Think of MFPL as the canvas—you bring the brand story, and we help
              transform it into market-ready cosmetic, skincare, and haircare
              products that perform and scale.
            </p>

            {/* BRAND DECORATIVE SHAPE */}
            <div
              className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:block"
              style={{
                width: "140px",
                height: "280px",
                background:
                  "radial-gradient(circle at center, rgba(83,148,91,0.25), transparent 70%)",
              }}
            />
          </div>
        </div>

        {/* ASSURANCE STRIP */}
        <div
          className="mt-4 md:mt-12 xl:mt-24 px-4 py-2 lg:px-12 lg:py-8 rounded-full flex items-center lg:gap-12 overflow-x-auto"
          style={{
            background: "var(--clr-bg-white)",
            boxShadow: "0 15px 50px rgba(20,84,43,0.12)",
          }}
        >
          {/* LEFT TEXT */}
          <div className=" w-40 lg:w-[220px]">
            <p
              className="font-semibold ui-desc lg:ui-para w-full lg:w-[220px] leading-snug"
              style={{ color: "var(--clr-accent)" }}
            >
              Assurances Tailored for Your Brand
            </p>
          </div>

          {/* DIVIDER */}
          <div
            style={{
              width: "1px",
              height: "60px",
              background: "rgba(20,84,43,0.25)",
            }}
          />

          {/* CERTIFICATIONS */}
          <div className="relative overflow-hidden w-full">
            <div className="flex marquee marquee-track  w-max animate-marquee gap-2 lg:gap-12 items-center">
              {[
                "https://www.shutterstock.com/image-vector/sulfate-free-green-outline-icon-260nw-1612991506.jpg",
                "https://t3.ftcdn.net/jpg/02/78/93/28/360_F_278932877_e0dhgcte3cFvCSFQSM5rnZNvL8DVo6AJ.jpg",
                "https://t4.ftcdn.net/jpg/01/09/78/03/360_F_109780332_wx8cpenyKwrVWQrJrcdYSoeqseVXCJ9z.jpg",
                "https://static.vecteezy.com/system/resources/previews/000/370/748/non_2x/dermatologically-tested-icon-vector.jpg",
                "https://media.istockphoto.com/id/1393841861/vector/lightweight-feather-on-hand-line-icon-soft-delicate-sensitive-plumelet-linear-pictogram.jpg?s=612x612&w=0&k=20&c=Bz8IEJxCJJs3itagQFnu3psszfZv_DyU5lJSjJ0o2JU=",
                "https://media.istockphoto.com/id/1359659563/vector/planet-earth-with-leaves-in-a-circle-green-globe-environmental-social-governance.jpg?s=612x612&w=0&k=20&c=AyyUx4eRlEBaig3Va-aFLFuOGHBxXBNJ7SHQqTWBkYg=",
                "https://5.imimg.com/data5/SELLER/Default/2020/8/YB/DY/UN/58362300/quality-assurance-services-for-diagnostic-x-ray-machines.jpeg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIwPB_S521UytvBMhFynPzwGRMSTpbX4KYg&s",
              ]
                // 🔁 duplicate array for seamless loop
                .concat([
                  "https://www.shutterstock.com/image-vector/sulfate-free-green-outline-icon-260nw-1612991506.jpg",
                  "https://t3.ftcdn.net/jpg/02/78/93/28/360_F_278932877_e0dhgcte3cFvCSFQSM5rnZNvL8DVo6AJ.jpg",
                  "https://t4.ftcdn.net/jpg/01/09/78/03/360_F_109780332_wx8cpenyKwrVWQrJrcdYSoeqseVXCJ9z.jpg",
                  "https://static.vecteezy.com/system/resources/previews/000/370/748/non_2x/dermatologically-tested-icon-vector.jpg",
                  "https://media.istockphoto.com/id/1393841861/vector/lightweight-feather-on-hand-line-icon-soft-delicate-sensitive-plumelet-linear-pictogram.jpg?s=612x612&w=0&k=20&c=Bz8IEJxCJJs3itagQFnu3psszfZv_DyU5lJSjJ0o2JU=",
                  "https://media.istockphoto.com/id/1359659563/vector/planet-earth-with-leaves-in-a-circle-green-globe-environmental-social-governance.jpg?s=612x612&w=0&k=20&c=AyyUx4eRlEBaig3Va-aFLFuOGHBxXBNJ7SHQqTWBkYg=",
                  "https://5.imimg.com/data5/SELLER/Default/2020/8/YB/DY/UN/58362300/quality-assurance-services-for-diagnostic-x-ray-machines.jpeg",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIwPB_S521UytvBMhFynPzwGRMSTpbX4KYg&s",
                ])
                .map((src, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center rounded-full
            border-2 border-[rgba(83,148,91,0.35)]
            bg-white
            w-6 h-6 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px]
            overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt="Certification"
                      width={72}
                      height={72}
                      className="object-contain
              w-4 h-4 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

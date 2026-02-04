"use client";

import Image from "next/image";

const certificates = [
  {
    src: "https://whitelabelpartner.com/wp-content/uploads/2024/10/Logo_4-04-214x300.png",
    alt: "UpCity Featured",
    width: 100,
  },
  {
    src: "https://whitelabelpartner.com/wp-content/uploads/2024/10/Logo_3-03-214x300.png",
    alt: "Clutch Web Design",
    width: 100,
  },
  {
    src: "https://whitelabelpartner.com/wp-content/uploads/2024/10/Logo_9-09-214x300.png",
    alt: "Email Marketing Certified",
    width: 100,
  },
  {
    src: "https://whitelabelpartner.com/wp-content/uploads/2024/10/Logo_2-02-214x300.png",
    alt: "Clutch Email Marketing",
    width: 100,
  },
  {
    src: "https://whitelabelpartner.com/wp-content/uploads/2024/10/Logo_8-08-214x300.png",
    alt: "Email Automation Certified",
    width: 100,
  },
  {
    src: "https://whitelabelpartner.com/wp-content/uploads/2024/10/Logo_1-01-214x300.png",
    alt: "Clutch Content Writing",
    width: 100,
  },
  {
    src: "https://whitelabelpartner.com/wp-content/uploads/2024/10/Logo_5-05-214x300.png",
    alt: "Mailchimp Certified",
    width: 100,
  },
];

export default function CertificatesMarquee() {
  return (
    <section className="relative ui-section overflow-hidden py-1 bg-white">
      <div
        className="mt-2 md:mt-12 xl:mt-10 px-4 py-2 lg:px-12 lg:py-8 rounded-full flex items-center lg:gap-12 overflow-x-auto"
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
            w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px]
            overflow-hidden"
                >
                  <Image
                    src={src}
                    alt="Certification"
                    width={72}
                    height={72}
                    className="object-contain
              w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

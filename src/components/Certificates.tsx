"use client";

import Image from "next/image";

const certificates = [
  {
    src: "https://whitelabelpartner.com/wp-content/uploads/2024/10/Logo_4-04-214x300.png",
    alt: "UpCity Featured",
    width: 120,
  },
  {
    src: "https://whitelabelpartner.com/wp-content/uploads/2024/10/Logo_3-03-214x300.png",
    alt: "Clutch Web Design",
    width: 130,
  },
  {
    src: "https://whitelabelpartner.com/wp-content/uploads/2024/10/Logo_9-09-214x300.png",
    alt: "Email Marketing Certified",
    width: 140,
  },
  {
    src: "https://whitelabelpartner.com/wp-content/uploads/2024/10/Logo_2-02-214x300.png",
    alt: "Clutch Email Marketing",
    width: 130,
  },
  {
    src: "https://whitelabelpartner.com/wp-content/uploads/2024/10/Logo_8-08-214x300.png",
    alt: "Email Automation Certified",
    width: 140,
  },
  {
    src: "https://whitelabelpartner.com/wp-content/uploads/2024/10/Logo_1-01-214x300.png",
    alt: "Clutch Content Writing",
    width: 130,
  },
  {
    src: "https://whitelabelpartner.com/wp-content/uploads/2024/10/Logo_5-05-214x300.png",
    alt: "Mailchimp Certified",
    width: 140,
  },
];

export default function CertificatesMarquee() {
  return (
    <section className="relative ui-section overflow-hidden py-12 bg-white">
      <div className="marquee">
        <div className="marquee-track">
          {[...certificates, ...certificates].map((item, index) => (
            <div key={index} className="marquee-item">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={90}
                className="opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

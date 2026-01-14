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
      <div className="marquee h-[10vh] lg:h-[15vh]">
        <div className="marquee-track">
          {[...certificates, ...certificates].map((item, index) => (
            <div
              key={index}
              className="marquee-item p-3 lg:p-6 flex items-center justify-center"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={200}
                height={80}
                className="opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 w-12 sm:w-32 md:w-40 lg:w-48 h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Submit A Quote",
    desc: "Tell us about your brand and specify your needs in our convenient inquiry form.",
    image: "https://watergram.in/wp-content/uploads/2023/07/asdas.png",
  },
  {
    step: "02",
    title: "Approve Designs",
    desc: "Get the best design options for your brand and finalise pricing, label and bottle.",
    image:
      "https://watergram.in/wp-content/uploads/2023/06/Costumization-lebal.png",
  },
  {
    step: "03",
    title: "Place Your Order",
    desc: "Get your custom bottled water delivered safely to your doorstep.",
    image: "https://watergram.in/wp-content/uploads/2023/07/3.png",
  },
];

export default function OrderSteps() {
  return (
    <section className="ui-section">
      <div className="ui-container text-center">
        {/* SECTION TITLE */}
        <h2 className="ui-h2 mb-12">How To Order</h2>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start relative">
          {steps.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* IMAGE CIRCLE */}
              <div className="relative h-[300px] flex items-center justify-center rounded-full mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>

              {/* STEP NUMBER */}
              <span
                className="mb-3 ui-para"
                style={{
                  height: "36px",
                  width: "36px",
                  borderRadius: "50%",
                  background: "var(--clr-secondary)",
                  color: "var(--clr-white)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  fontWeight: 700,
                }}
              >
                {item.step}
              </span>

              {/* TEXT */}
              <h3 className="ui-h3 font-semibold">{item.title}</h3>
              <p className="ui-desc text-center">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-lg">
          <Link href="/contact" className="ui-btn ui-btn-primary">
            Get A Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

export default function OurProcess() {
  const leftCards = [
    {
      title: "Industry-Focused Expertise",
      desc: "We specialize exclusively in cosmetic, skincare, and haircare manufacturing—ensuring deep product understanding and reliable execution.",
      imgs: "/Untitled design (1).png",
    },
    {
      title: "White Label Made Simple",
      desc: "Our ready-to-brand formulations help you launch faster without the cost and complexity of in-house R&D or production setup.",
      imgs: "https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/tag-label-green-icon.png",
    },
    {
      title: "Customization & Flexibility",
      desc: "From formulations to packaging and labeling, we adapt our manufacturing solutions to match your brand vision and market goals.",
      imgs: "/Untitled design.png",
    },
  ];

  const rightCards = [
    {
      title: "Consistent Quality Standards",
      desc: "Every product follows structured quality checks to maintain formulation consistency, safety, and performance across batches.",
      imgs: "https://png.pngtree.com/png-vector/20230206/ourmid/pngtree-quality-check-certified-badge-icon-png-image_6583296.png",
    },
    {
      title: "Scalable Production",
      desc: "Our manufacturing capabilities are built to support growing demand—whether you’re starting small or scaling up rapidly.",
      imgs: "https://cdn-icons-png.freepik.com/512/5575/5575052.png",
    },
    {
      title: "Brand-Ready Compliance",
      desc: "We ensure products are manufactured with market-aligned compliance, making them retail-ready and distribution-friendly.",
      imgs: "/Untitled design (2).png",
    },
  ];

  return (
    <section className="relative  overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* MOVING REPEATED BACKGROUND */}
        <div className="absolute inset-0 bg-pan-repeat" />

        {/* OVERLAY */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(238,247,241,0.65) 20%, rgba(255,255,255,0.92) 75%)",
          }}
        />
      </div>

      <div className="ui-section ui-container">
        {/* TITLE */}
        <div className="text-center mb-4 lg:mb-20">
          <h2 className="ui-h1 ">
            Why Choose MFPL <br />
            <span className="-mb-2" style={{ color: "var(--clr-primary)" }}>
              As Your Manufacturing Partner?
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            {leftCards.map((item, i) => (
              <Card key={i} {...item} align="left" />
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="relative flex justify-center">
            <Image
              src="/processimg.png"
              alt="Branded Water Bottle"
              width={450}
              height={450}
              className="relative z-10 animate-[floatSlow_6s_ease-in-out_infinite]"
            />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-8">
            {rightCards.map((item, i) => (
              <Card key={i} {...item} align="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
type CardProps = {
  title: string;
  desc: string;
  imgs: string;
  align: "left" | "right";
};

/* CARD COMPONENT */
function Card({ title, desc, imgs }: CardProps) {
  return (
    <div
      className="
        group rounded-2xl px-3 py-4 lg:px-6 lg:py-6
        backdrop-blur-sm
        transition-all duration-500 ease-out
        hover:-translate-y-2
        hover:shadow-[0_20px_40px_rgba(83,148,91,0.25)]
        hover:ring-1 hover:ring-[#83A33C]/60
        animate-[fadeUp_0.8s_ease-out_forwards]
      "
      style={{ background: "rgba(233,247,251,0.9)" }}
    >
      <div className="flex items-start gap-5">
        {/* ICON — ALWAYS LEFT */}
        <img
          src={imgs}
          className="h-14 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          alt=""
        />

        {/* DIVIDER */}
        <div
          className="transition-colors duration-500 group-hover:bg-[#83A33C]"
          style={{ width: "1px", height: "48px", background: "#bfe6ef" }}
        />

        {/* CONTENT */}
        <div className="flex-1">
          <h3 className="ui-h3 mb-2 transition-colors duration-300 group-hover:text-[#53945B]">
            {title}
          </h3>
          <p className="ui-desc transition-opacity duration-300 group-hover:opacity-90">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

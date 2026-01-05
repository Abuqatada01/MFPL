"use client";

import Image from "next/image";

export default function WhyChooseWater() {
  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/mountians.png" // 🔁 replace with your bg image path
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* OVERLAY FOR READABILITY */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(238,247,241,0.95) 0%, rgba(255,255,255,0.92) 65%)",
          }}
        />
      </div>

      <div className="ui-section ui-container">
        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="ui-h2">
            Why Choose Water <br />
            <span style={{ color: "var(--clr-primary)" }}>
              As Your Branding Medium?
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          {/* LEFT CARDS */}
          <div className="flex flex-col gap-8">
            {[
              {
                title: "Align with Values",
                desc: "With water bottles, you can ride the crest of a new marketing wave.",
                imgs: "https://wahter.co.in/assets/images/whyusicon/1.png",
              },
              {
                title: "Clutter Free Advertising",
                desc: "Branding on a bottle is a clutter-free form of advertising.",
                imgs: "https://wahter.co.in/assets/images/whyusicon/advertising.png",
              },
              {
                title: "Customisation and Branding Opportunities",
                desc: "Showcase our ability to customize branding according to the client's vision and needs.",
                imgs: "https://wahter.co.in/assets/images/whyusicon/branding.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl px-6 py-6"
                style={{ background: "rgba(233,247,251,0.9)" }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-1">
                    <h3 className="ui-h3 mb-2">{item.title}</h3>
                    <p className="ui-desc">{item.desc}</p>
                  </div>

                  <div
                    style={{
                      width: "1px",
                      height: "48px",
                      background: "#bfe6ef",
                    }}
                  />

                  <img src={item.imgs} className="h-15" />
                </div>
              </div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="relative flex justify-center">
            <Image
              src="https://wahter.co.in/assets/images/bottle-collage.png"
              alt="Branded Water Bottle"
              width={420}
              height={420}
              className="relative z-10"
            />
          </div>

          {/* RIGHT CARDS */}
          <div className="flex flex-col gap-8">
            {[
              {
                title: "Social Media Buzz",
                desc: "Engaged individuals will likely share their branded water bottle experiences online.",
                imgs: "https://wahter.co.in/assets/images/whyusicon/social-media.png",
              },
              {
                title: "Cost-Effectiveness",
                desc: "Branded water bottles offer a cost-effective marketing solution with a lower cost.",
                imgs: "https://wahter.co.in/assets/images/whyusicon/cost-effectiveness.png",
              },
              {
                title: "Data Insights",
                desc: "Gather valuable consumer behaviour and interest data by utilising geo-mapping.",
                imgs: "https://wahter.co.in/assets/images/whyusicon/insight.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl px-6 py-6"
                style={{ background: "rgba(233,247,251,0.9)" }}
              >
                <div className="flex items-start gap-5">
                  <img src={item.imgs} className="h-15" />

                  <div
                    style={{
                      width: "1px",
                      height: "48px",
                      background: "#bfe6ef",
                    }}
                  />

                  <div className="flex-1">
                    <h3 className="ui-h3 mb-2">{item.title}</h3>
                    <p className="ui-desc">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

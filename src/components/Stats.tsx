import Image from "next/image";

export default function StatsTestimonialSection() {
  return (
    <section className="bg-white">
      {/* ================= STATS BAR ================= */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { label: "Happy Customers", value: "160k" },
            { label: "Years in the Business", value: "27+" },
            { label: "Projects Done", value: "537" },
            { label: "Professional Advisor", value: "36" },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-sm text-gray-500 mb-3">{item.label}</p>
              <h3 className="text-4xl font-bold text-gray-900">{item.value}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* ================= TESTIMONIAL + TEAM ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* TESTIMONIAL */}
          <div className="lg:col-span-1">
            <div className="relative bg-white border border-gray-200 p-8">
              {/* Avatar */}
              <div className="absolute -top-8 left-8">
                <Image
                  src="https://themazine.com/html/snappy/images/home/3.jpg"
                  alt="Sabrina Sanika"
                  width={64}
                  height={64}
                  className="rounded-full border-4 border-white"
                />
              </div>

              <h4 className="mt-8 font-semibold text-gray-900">
                Sabrina Sanika
              </h4>
              <p className="text-sm text-gray-500 mb-4">CEO & Financial</p>

              <p className="text-gray-500 text-sm leading-relaxed">
                Advice for your business when you need it. From successful
                entrepreneurs to corporate leaders, we come from all industry
                sectors to give your business the help it needs. Dedicated to
                helping small businesses grow.
              </p>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-6 ml-2">
              <span className="h-2 w-2 bg-gray-300"></span>
              <span className="h-2 w-2 bg-gray-300"></span>
              <span className="h-2 w-2 bg-sky-500"></span>
            </div>
          </div>

          {/* TEAM CARDS */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              "https://themazine.com/html/snappy/images/team/1.jpg",
              "https://themazine.com/html/snappy/images/team/1.jpg",
            ].map((img, i) => (
              <div
                key={i}
                className="bg-gray-100 text-center p-6 transition hover:shadow-lg"
              >
                <Image
                  src={img}
                  alt="Mahfuz Riad"
                  width={220}
                  height={220}
                  className="mx-auto mb-4"
                />

                <h4 className="font-semibold text-gray-900">Mahfuz Riad</h4>
                <p className="text-sm text-gray-500">CEO & Financial</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

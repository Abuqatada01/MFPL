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
    </section>
  );
}

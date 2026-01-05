export default function StatsTestimonialSection() {
  return (
    <section className="" style={{ background: "var(--clr-bg-light)" }}>
      <div className="ui-section ui-container">
        {/* ================= STATS ================= */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center rounded-3xl px-10 py-16"
          style={{
            background: "var(--clr-bg-white)",
            boxShadow: "0 25px 70px rgba(20,84,43,0.15)",
          }}
        >
          {[
            { label: "Happy Customers", value: "160k+" },
            { label: "Years of Experience", value: "27+" },
            { label: "Projects Completed", value: "537+" },
            { label: "Expert Advisors", value: "36+" },
          ].map((item, i) => (
            <div key={i} className="relative">
              {/* VALUE */}
              <h3
                className="text-4xl font-bold mb-2"
                style={{ color: "var(--clr-accent)" }}
              >
                {item.value}
              </h3>

              {/* LABEL */}
              <p
                className="text-sm tracking-wide"
                style={{ color: "var(--clr-text-muted)" }}
              >
                {item.label}
              </p>

              {/* Divider (desktop only) */}
              {i < 3 && (
                <div
                  className="hidden md:block absolute right-[-20px] top-1/2 -translate-y-1/2"
                  style={{
                    width: "1px",
                    height: "60px",
                    background: "rgba(20,84,43,0.2)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

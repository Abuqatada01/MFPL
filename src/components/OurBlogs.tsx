import Link from "next/link";

export default function OurBlogs() {
  return (
    <section className="ui-section bg-white">
      <div className="ui-container">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-16">
          <h2 className="ui-h1">Our Services</h2>
          <p className="ui-para-sm mt-2">What we do</p>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Business Growth",
              img: "https://themazine.com/html/snappy/images/service/1.jpg",
              link: "/services/business-growth",
            },
            {
              title: "Strategy Made Easy",
              img: "https://themazine.com/html/snappy/images/service/2.jpg",
              link: "/services/strategy",
            },
            {
              title: "Financial Planning",
              img: "https://themazine.com/html/snappy/images/service/3.jpg",
              link: "/services/financial-planning",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group border border-gray-200 bg-white text-center transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="h-[240px] overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative px-8 py-10">
                {/* Icon */}
                {/* <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-sky-400 text-sky-400 transition-all duration-300 group-hover:bg-sky-400 group-hover:text-white">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="3" width="18" height="14" rx="2" />
                    <path d="M3 10h18" />
                    <path d="M8 21h8" />
                  </svg>
                </div> */}
                <div className="ui-desc text-gray-500">26 Febuary 2023</div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-sky-400">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  Sometimes it’s hard running a business. Where are all the good
                  people to be found?
                </p>

                {/* Read More Button (Hover Only) */}
                <Link
                  href={service.link}
                  className="absolute left-1/2 bottom-6 -translate-x-1/2 bg-sky-400 px-8 py-3 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-8"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DOT INDICATOR ================= */}
        <div className="mt-14 flex justify-center gap-2">
          <span className="h-2 w-2 bg-sky-500"></span>
          <span className="h-2 w-2 bg-gray-300"></span>
          <span className="h-2 w-2 bg-gray-300"></span>
        </div>
      </div>
    </section>
  );
}

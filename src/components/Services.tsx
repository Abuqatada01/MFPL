import Image from "next/image";
import Link from "next/link";

export default function OurServicesSection() {
  return (
    <section className="ui-section bg-white">
      <div className="ui-container">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-lg">
          <h2 className="ui-h1">Our Services</h2>
          <p className="ui-para-sm mt-xs">What we do</p>
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
            <div key={index} className="service-card-hover">
              {/* Image */}
              <div className="service-card-img">
                <img src={service.img} alt={service.title} />
              </div>

              {/* Content */}
              <div className="service-card-body">
                <div className="service-icon-box">⬡</div>

                <h3 className="ui-h3 mt-sm">{service.title}</h3>

                <p className="ui-desc mt-xs">
                  Sometimes it’s hard running a business. Where are all the good
                  people to be found?
                </p>

                {/* Hover CTA */}
                <Link href={service.link} className="service-btn">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DOT INDICATOR ================= */}
        <div className="flex justify-center gap-2 mt-lg">
          <span className="h-2 w-2 bg-sky-500 rounded-sm"></span>
          <span className="h-2 w-2 bg-gray-300 rounded-sm"></span>
          <span className="h-2 w-2 bg-gray-300 rounded-sm"></span>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Support() {
  return (
    <>
      {/* ================= MAIN SECTION ================= */}
      <section className="bg-white py-20">
        <div className="ui-section">
          {/* Top Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Text */}
            <div>
              <h2 className="ui-h2 leading-tight mb-4">
                Support for your business <br /> when you need it
              </h2>

              <p className="ui-para text-sky-500 font-semibold mb-6">
                Easy to way
              </p>

              <p className="text-gray-500 leading-relaxed mb-4">
                Sometimes it’s hard running a business. Where are all the good
                people to be found? When you do find them, why are they so
                expensive? Who to trust? Why aren’t you making any money again
                this month? How on earth have you just lost that key customer?
              </p>

              <p className="text-gray-500 leading-relaxed">
                It might be understandable to feel bogged down from time to time
                as the obligations and issues pile up, but a successful business
                needs a real plan.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md h-[280px]">
                <Image
                  src="https://themazine.com/html/snappy/images/home/1.jpg" // 🔁 replace image
                  alt="Business Growth"
                  fill
                  className="object-cover rounded"
                />
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              {
                title: "Plan to Market",
                icon: "https://themazine.com/html/snappy/images/icon/1.png",
              },
              {
                title: "Know Your Market",
                icon: "https://themazine.com/html/snappy/images/icon/2.png",
              },
              {
                title: "Create A Sales Plan",
                icon: "https://themazine.com/html/snappy/images/icon/3.png",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-gray-200 p-8 text-center hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-6">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                </div>

                <h3 className="ui-para font-semibold mb-3">{item.title}</h3>

                <p className="text-gray-500 ui-desc leading-relaxed">
                  Sometimes it’s hard running a business. Where are all the good
                  people to be found?
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA STRIP ================= */}
      <section className="bg-sky-400 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white ui-h3 text-center md:text-left">
            Looking to grow your business or increase its value? Just make
            contact
          </p>

          <Link
            href="/contact"
            className="bg-white text-gray-900 px-6 py-3 font-semibold hover:bg-gray-100 transition"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}

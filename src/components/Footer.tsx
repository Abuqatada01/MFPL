import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-[#120f0f] to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h2 className="text-2xl font-semibold bg-white p-2 mb-4">
            <img src="/Logoblack.png" />
          </h2>
          <p className="text-sm leading-6">
            We create finance & business websites for professionals, trainers,
            consultants and specialists who need a personal online presence.
          </p>

          <div className="flex gap-4 mt-6 text-gray-400">
            <span>f</span>
            <span>in</span>
            <span>🌐</span>
            <span>t</span>
            <span>v</span>
          </div>
        </div>

        {/* About Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Business Partners</Link>
            </li>
            <li>
              <Link href="/">Medicosmo</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Short Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Short Link</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">Business Growth</Link>
            </li>
            <li>
              <Link href="/">Project</Link>
            </li>
            <li>
              <Link href="/">Case Study</Link>
            </li>
            <li>
              <Link href="/">Privacy</Link>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-white font-semibold mb-4">Subscribes</h3>
          <p className="text-sm mb-4">
            Sign up for our mailing list to get latest updates and offers
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-black outline-none"
            />
            <button className="bg-sky-500 text-white px-4">SUBSCRIBE</button>
          </div>

          <div className="text-sm mt-6">
            <p>Working Hours : Monday-Saturday</p>
            <p>Close : Sunday</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1b1f22] text-center text-sm py-4 text-gray-400">
        Copyright © 2017 <span className="text-sky-400">Medicosmo</span>{" "}
        Template by Themazine
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-[#F8FAF8] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full bg-white rounded-3xl p-8 sm:p-12 shadow-[0_30px_60px_rgba(20,84,43,0.12)] border border-[#14542B]/10 text-center">
        {/* Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#83A33C]/15 text-[#14542B] border border-[#83A33C]/30 mb-6">
          404 &bull; Product Not Found
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#14542B] tracking-tight mb-4">
          Looking for a Formulation?
        </h1>

        {/* Description */}
        <p className="text-[#14542B]/80 text-sm sm:text-base leading-relaxed mb-8">
          The product detail page or formulation you are looking for does not exist or may have been updated. Explore our full range of private label and contract manufacturing solutions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#83A33C] hover:bg-[#729032] text-white px-8 py-3.5 rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-center"
          >
            Browse All Products →
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#EDF5EE] text-[#14542B] border border-[#14542B]/20 px-6 py-3.5 rounded-full text-base font-semibold transition duration-300 text-center"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

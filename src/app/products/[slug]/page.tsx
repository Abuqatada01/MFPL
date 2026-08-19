import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug, slugify } from "../utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: slugify(product.name),
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Medicosmo Formulations",
    };
  }

  const title = `${product.name} | Medicosmo Formulations`;
  const description = `${product.name} formulation with ${product.description}. Custom private-label and contract manufacturing for ${product.category} by Medicosmo Formulations.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${slug}`,
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: product.img,
          alt: `${product.name} - Medicosmo Formulations`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.img],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.medicosmoformulations.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://www.medicosmoformulations.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://www.medicosmoformulations.com/products/${slug}`,
      },
    ],
  };

  const allProducts = getAllProducts();
  const relatedProducts = allProducts
    .filter(
      (p) => p.category === product.category && p.id !== product.id
    )
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-[#F8FAF8] py-8 lg:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-[#14542B]/70 flex-wrap">
            <li>
              <Link href="/" className="hover:text-[#14542B] transition">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/products" className="hover:text-[#14542B] transition">
                Products
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#14542B] truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Main Product Section */}
        <div className="bg-white rounded-3xl shadow-[0_30px_60px_rgba(20,84,43,0.12)] border border-[#14542B]/10 overflow-hidden p-6 sm:p-8 lg:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Product Image Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md h-[320px] sm:h-[400px] lg:h-[450px] bg-[#EDF5EE] rounded-2xl sm:rounded-3xl p-6 flex items-center justify-center overflow-hidden border border-[#14542B]/10">
                <img
                  src={product.img}
                  alt={`${product.name} - Medicosmo Formulations`}
                  className="w-full h-full object-contain drop-shadow-md transition duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Product Details Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Category Badge */}
              <div className="mb-3">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#83A33C]/15 text-[#14542B] border border-[#83A33C]/30">
                  {product.category}
                </span>
              </div>

              {/* Product Title (H1 for SEO) */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#14542B] leading-tight mb-4">
                {product.name}
              </h1>

              {/* Key Ingredients / Formulation */}
              <div className="mb-6">
                <h2 className="text-xs uppercase tracking-wider text-[#14542B]/70 font-bold mb-1">
                  Key Formulation & Active Ingredients
                </h2>
                <div className="bg-[#EDF5EE]/70 p-4 rounded-2xl border border-[#14542B]/10 text-base sm:text-lg font-semibold text-[#14542B]">
                  {product.description}
                </div>
              </div>

              {/* Manufacturing / Private Label Context */}
              <div className="mb-8">
                <h2 className="text-xs uppercase tracking-wider text-[#14542B]/70 font-bold mb-1">
                  Private Label & Custom Manufacturing
                </h2>
                <p className="text-[#14542B]/80 text-sm sm:text-base leading-relaxed">
                  Medicosmo Formulations offers end-to-end private label and contract manufacturing solutions for{" "}
                  <strong className="text-[#14542B]">{product.name}</strong>. From custom ingredient blending and stability testing to premium packaging design, we help beauty and personal care brands launch market-ready formulations.
                </p>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-[#83A33C] hover:bg-[#729032] text-white px-8 py-3.5 rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-center"
                >
                  Get a Quote →
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#EDF5EE] text-[#14542B] border border-[#14542B]/20 px-6 py-3.5 rounded-full text-base font-semibold transition duration-300 text-center"
                >
                  ← Back to Products
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Formulations / Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#14542B] mb-6">
              More Formulations in {product.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => {
                const relSlug = slugify(rel.name);
                return (
                  <Link
                    key={rel.id}
                    href={`/products/${relSlug}`}
                    className="group bg-white rounded-3xl p-5 shadow-[0_20px_40px_rgba(20,84,43,0.08)] hover:shadow-[0_30px_60px_rgba(20,84,43,0.18)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between border border-[#14542B]/10"
                  >
                    <div>
                      <div className="relative h-44 bg-[#EDF5EE] rounded-2xl mb-4 p-4 flex items-center justify-center overflow-hidden">
                        <img
                          src={rel.img}
                          alt={`${rel.name} - Medicosmo Formulations`}
                          className="w-full h-full object-contain transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#83A33C]">
                        {rel.category}
                      </span>
                      <h3 className="font-bold text-[#14542B] text-base line-clamp-1 mt-0.5">
                        {rel.name}
                      </h3>
                      <p className="text-xs text-[#14542B]/70 mt-1 line-clamp-2">
                        {rel.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#14542B]/10 text-xs font-semibold text-[#83A33C] flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Details →
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

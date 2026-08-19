import { Suspense } from "react";
import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Cosmetics, Skincare & Haircare Products | Medicosmo Formulations",
  description:
    "Explore cosmetic, skincare and haircare product categories from Medicosmo Formulations for private label and contract manufacturing. Develop products for your beauty and personal care brand.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsClient />
    </Suspense>
  );
}
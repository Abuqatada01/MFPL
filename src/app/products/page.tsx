import { Suspense } from "react";
import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Hair & Skin Care Products | Medicosmo Formulations",
  description:
    "Explore Medicosmo Formulations' hair and skin care products for private label and contract manufacturing. Discover quality formulations designed for beauty and personal care brands.",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsClient />
    </Suspense>
  );
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Medicosmo Formulations | Private Label Cosmetics Manufacturer",
  description:
    "Learn about Medicosmo Formulations, a private label and white label manufacturer offering cosmetic, skincare and haircare solutions for growing beauty brands.",


  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
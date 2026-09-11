import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Private Label Cosmetics Manufacturer in India",

  description:
    "Learn about Medicosmo Formulations Private Limited, a cosmetic manufacturer in India offering private label, white label and contract manufacturing for skincare, haircare and personal care brands.",

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
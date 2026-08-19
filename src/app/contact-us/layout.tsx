import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Medicosmo Formulations | Private Label Cosmetics Manufacturer",
  description:
    "Contact Medicosmo Formulations for private label and contract cosmetics, skincare, haircare and personal care manufacturing. Discuss your product requirements, formulation and custom manufacturing needs",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
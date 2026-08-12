import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Medicosmo Formulations | Private Label Cosmetics Manufacturer",
  description:
    "Contact Medicosmo Formulations for private label cosmetics, skincare and haircare manufacturing solutions. Discuss your product requirements, MOQ and custom manufacturing needs.",
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
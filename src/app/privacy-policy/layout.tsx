import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy of Medicosmo Formulations Private Limited to learn how we collect, use, and protect information when you use our website.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
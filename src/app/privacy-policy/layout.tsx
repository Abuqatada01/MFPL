import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Medicosmo Formulations",
  description:
    "Read the Privacy Policy of Medicosmo Formulations Private Limited to learn how we collect, use, and protect information when you use our website.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
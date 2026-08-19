import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "../lenis-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.medicosmoformulations.com"),


  alternates: {
    canonical: "/",
  },

  verification: {
    google: "tmNoiWJqP5IavKdi28v6O_QoTK-G7JDDI0bKLuhNNYI",
  },

  title: {
    default: "Private Label Cosmetics Manufacturer in India | Medicosmo",
    template: "%s | Medicosmo",
  },

  description:
    "Medicosmo Formulations is a private label cosmetics manufacturer in India offering cosmetic, skincare and haircare manufacturing, packaging and branding solutions.",

  icons: {
    icon: "/LogoIconWhite.png",
    shortcut: "/LogoIconWhite.png",
    apple: "/LogoIconWhite.png",
  },

  openGraph: {
    title: "Private Label Cosmetics Manufacturer in India | Medicosmo",
    description:
      "Medicosmo Formulations is a private label cosmetics manufacturer in India offering cosmetic, skincare and haircare manufacturing, packaging and branding solutions.",
    siteName: "Medicosmo Formulations",
    type: "website",
    url: "https://www.medicosmoformulations.com/",
    images: [
      {
        url: "/Logoblack.png",
        alt: "Medicosmo Formulations - Private Label Cosmetics Manufacturer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Private Label Cosmetics Manufacturer in India | Medicosmo",
    description:
      "Medicosmo Formulations is a private label cosmetics manufacturer in India offering cosmetic, skincare and haircare manufacturing, packaging and branding solutions.",
    images: ["/Logoblack.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": "https://www.medicosmoformulations.com/#organization",
    name: "Medicosmo Formulations Private Limited",
    url: "https://www.medicosmoformulations.com",
    logo: "https://www.medicosmoformulations.com/Logoblack.png",
    image: "https://www.medicosmoformulations.com/Logoblack.png",
    email: "info@medicosmoformulations.com",
    telephone: "+91 93075 31652",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "109, 110, 111, Pushparaj Industrial Estate, S. No. 66, Naikpada, Near Laxmi Compound",
      addressLocality: "Vasai (E)",
      postalCode: "401208",
      addressCountry: "India",
    },
    sameAs: [
      "https://www.instagram.com/mfpl__?igsh=dXY5NDV1ZXcwdWM1",
      "https://www.facebook.com/profile.php?id=61585006272529",
      "https://www.linkedin.com/company/medicosmo-formulations-private-limited",
    ],
  };

  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

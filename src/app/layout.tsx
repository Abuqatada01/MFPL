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
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

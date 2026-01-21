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
    default: "Medicosmo",
    template: "%s | Medicosmo",
  },
  description: "Professional Healthcare & Manufacturing Solutions",
  icons: {
    icon: "/LogoIconWhite.png",
    shortcut: "/LogoIconWhite.png",
    apple: "/LogoIconWhite.png",
  },
  openGraph: {
    title: "Medicosmo",
    description: "Trusted Partner for Healthcare & Manufacturing Solutions",
    images: ["/Logoblack.png"],
    type: "website",
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

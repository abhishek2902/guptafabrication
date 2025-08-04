// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gupta Fabrication - Welding & Metal Fabrication Services",
  description:
    "Gupta Fabrication offers expert welding and fabrication services. Quality, reliability, and fast turnaround in Satna.",
  keywords:
    "welding, metal fabrication, Gupta Fabrication, Satna, steel works, fabrication shop",
  openGraph: {
    title: "Gupta Fabrication",
    description:
      "Expert welding and fabrication services by Gupta Fabrication.",
    url: "https://guptafabrication.com/",
    siteName: "Gupta Fabrication",
    images: [
      {
        url: "https://guptafabrication.com/logo.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gupta Fabrication",
    description:
      "Top-rated welding and fabrication shop. Competitive pricing and skilled workmanship.",
    images: ["https://guptafabrication.com/logo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

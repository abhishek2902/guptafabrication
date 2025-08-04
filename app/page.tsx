export const metadata = {
  title: "Gupta Fabrication - Welding Shop & Modern Gate Designs",
  description: "Gupta Fabrication: Best welding shop for stylish, strong, and affordable gates, doors, fences, and metalwork. Perfect for modern home designs in Satna.",
  keywords: "gupta fabrication, welding shop, gate design, metal fabrication, gates, steel doors, Satna",
  openGraph: {
    title: "Gupta Fabrication",
    description: "Best welding and modern gate design shop in Satna.",
    url: "https://guptafabrication.com/",
    images: [
      {
        url: "https://guptafabrication.com/og-home.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gupta Fabrication",
    description: "Strong & stylish gates, doors, and welding projects.",
    images: ["https://guptafabrication.com/og-home.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://guptafabrication.com/",
  },
};

import HomeClient from './HomeClient';

export default function Home() {
  return <HomeClient />;
}
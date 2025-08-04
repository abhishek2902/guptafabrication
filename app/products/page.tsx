export const metadata = {
  title: "Products – Gupta Fabrication | Modern Gates, Doors, Windows & More",
  description: "Browse modern, strong, and affordable boundary gates, doors, windows, shutters, and custom metalwork at Gupta Fabrication. Quality welding work in Satna.",
  keywords: "welding shop products, gates, doors, boundary, modern gate designs, windows, shutters, Gupta Fabrication, Satna",
  openGraph: {
    title: "Products – Gupta Fabrication",
    description: "High-quality gates, doors, windows, and metalwork at Gupta Fabrication.",
    url: "https://guptafabrication.com/products",
    images: [
      {
        url: "https://guptafabrication.com/gfcard.jpg", // Replace with actual image link or logo
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products – Gupta Fabrication",
    description: "View latest gate and door designs. Order strong, modern welding products in Satna.",
    images: ["https://guptafabrication.com/gfcard.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://guptafabrication.com/products",
  },
};

import ProductsPageClient from './ProductsPageClient';

export default function ProductDesignsPage() {
  // Pass any necessary data as props
  return <ProductsPageClient />;
}
import ProductsPageClient from "../products/ProductsPageClient";

export const metadata = {
  title: "Modern Gate Designs & Metal Products – Gupta Fabrication",
  description: "Browse modern, strong, and affordable boundary gates, doors, windows, shutters, and custom metalwork at Gupta Fabrication. Quality welding work in Satna.",
  keywords: "gate design, modern gates, welding shop products, gates, doors, boundary, modern gate designs, windows, shutters, Gupta Fabrication, Satna",
  openGraph: {
    title: "Gate Design | Gupta Fabrication",
    description: "Explore modern gate design, main gate design, and boundary gate design ideas. High-quality gates design, doors, windows, and metalwork at Gupta Fabrication.",
    keywords: ["gate design", "main gate design", "boundary gate design", "steel gate design", "modern gate design"],
    url: "https://guptafabrication.com/gate-designs",
    siteName: "Gupta Fabrication",
    type: "website",
    images: [
      {
        url: "https://guptafabrication.com/gfcard.jpg",
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

export default function ProductDesignsPage() {
  return <ProductsPageClient />;
}
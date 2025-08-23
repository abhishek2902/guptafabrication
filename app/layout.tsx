// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gate Designs | Gupta Fabrication - Welding & Gate Fabrication Services",
  description:
  "Discover modern gate designs with expert welding and fabrication services in Satna. Gupta Fabrication builds stylish steel, metal, and boundary gates for homes and businesses.",
  keywords:
  "gate design, modern gate designs, steel gates, metal gates, boundary gate designs, custom gates, fabrication services Satna, welding shop Satna",
  openGraph: {
    title: "Gupta Fabrication",
    description:
      "Expert welding and fabrication services by Gupta Fabrication.",
    url: "https://guptafabrication.com/",
    siteName: "Gupta Fabrication",
    type: "website",
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
    icon: "/favicon.png",
    shortcut: "/favicon.png",
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
      <head>
        {/* <!-- Google Tag Manager --> */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PPDQZ69C');
            `}
        </Script>
        {/* <!-- End Google Tag Manager --> */}
        {/* Business Schema Markup */}
        <Script id="business-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Gupta Fabrication",
            "image": "https://guptafabrication.com/logon8.png",
            "@id": "https://guptafabrication.com",
            "url": "https://guptafabrication.com",
            "telephone": "+91-8319962297",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1HV54+4X8, Maihar Bypass Rd, Delaura,Utaily, Tikuria Tola",
              "addressLocality": "Satna",
              "addressRegion": "Madhya Pradesh",
              "postalCode": "485001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "24.5577908",
              "longitude": "80.8548773"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "07:00",
                "closes": "20:00"
              }
            ],
            "sameAs": [
              "https://facebook.com/guptafabricationwelding",
              "https://instagram.com/guptafabricationwelding",
              "https://maps.google.com/?cid=3353351141221065159"
            ],
            "description": "Gupta Fabrication offers modern gate design, main gate design, and boundary gate design. Strong, stylish, and durable steel gates for homes, apartments, and industries.",
            "knowsAbout": [
              "Gate Design",
              "Main Gate Design",
              "Boundary Gate Design",
              "Steel Gate Design",
              "Modern Gate Design"
            ]
          })}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PPDQZ69C"
        height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        {children}
      </body>
    </html>
  );
}

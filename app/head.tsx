// app/head.tsx
export default function Head() {
  return (
    <>
      <link rel="canonical" href="https://guptafabrication.com/" />
      <meta name="robots" content="index, follow" />

      {/* JSON-LD Structured Data for LocalBusiness, improves local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Gupta Fabrication",
            "image": "https://guptafabrication.com/gfcard.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Utaily, Maihar Road, Sonaura Mode",
              "addressLocality": "Satna",
              "addressRegion": "MP",
              "postalCode": "485001",
              "addressCountry": "IN"
            },
            "telephone": "9340059307",
            "url": "https://guptafabrication.com",
            "areaServed": "Satna, MP",
            "description": "Boundary gates, doors, windows, fences, shutters, and custom welding at low cost with strong modern designs matching your home.",
            "servesCuisine": "Welding, Metal Fabrication"
          }),
        }}
      />
    </>
  );
}
import Script from "next/script";

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
            "telephone": "8319962297",
            "url": "https://guptafabrication.com",
            "areaServed": "Satna, MP",
            "description": "Boundary gates, doors, windows, fences, shutters, and custom welding at low cost with strong modern designs matching your home.",
            "servesCuisine": "Welding, Metal Fabrication"
          }),
        }}
      />

      {/* <!-- Google tag (gtag.js) --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-RJYQT83HQ8"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RJYQT83HQ8');
          `,
        }}
      />
    </>
  );
}
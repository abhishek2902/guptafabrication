// app/products/head.tsx
export default function Head() {
  return (
    <>
      <link rel="canonical" href="https://guptafabrication.com/products" />
      <meta name="robots" content="index, follow" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Gupta Fabrication Products",
            "description": "Boundary gates, doors, windows, shutters – strong modern designs from Gupta Fabrication in Satna.",
            "url": "https://guptafabrication.com/products"
          }),
        }}
      />
    </>
  );
}

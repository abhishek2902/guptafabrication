"use client";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"
import { useState } from "react"
import Head from 'next/head';

export default function Home() {
  const [showDrawer, setShowDrawer] = useState(false)

  return (<>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Gupta Fabrication",
              "image": "https://guptafabrication.com/logo.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "[Your Street Address]",
                "addressLocality": "[Your City]",
                "addressRegion": "[Your State]",
                "postalCode": "[Your Postal Code]",
                "addressCountry": "[Your Country]"
              },
              "telephone": "[Your Phone Number]",
              "url": "https://guptafabrication.com",
              "servesCuisine": "Welding, Metal Fabrication"
            }),
          }}
        />
      </Head>
      <main>
    <div className="pt-[60px] pb-[60px]">
      <Header onOpenDrawer={() => setShowDrawer(true)} />
      {products.map(p => <ProductCard key={p.id} product={p} />)}
      <Footer />

      {/* Drawer */}
      {showDrawer && (
        <div className="fixed top-0 right-0 bg-gray-700 text-white h-[60vh] w-full transition z-50 overflow-scroll p-4">
          <div className="flex justify-end">
            <button onClick={() => setShowDrawer(false)}>X</button>
          </div>
          <img src="/banner.png" alt="banner" className="w-full my-2" />
          <p className="font-bold">Favourite Designs</p>
          {/* You can map localStorage favs here */}
          <p className="mt-4">Contact: 8319962297</p>
          <p>Address: Utaily, Maihar Road, Sonaura Mode</p>
          <a href="#" className="underline">Open Map</a>
        </div>
      )}
    </div>
    </main>
    </>
  )
}

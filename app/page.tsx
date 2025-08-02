"use client";
import Head from 'next/head';
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import HeroHome from '@/components/HeroHome';

export default function Home() {

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
        <div className="pt-[60px]">
          <Navbar />
          <HeroHome />
          <Footer />
        </div>
      </main>
    </>
  )
}

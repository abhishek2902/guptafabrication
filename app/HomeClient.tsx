// app/HomeClient.tsx
'use client';

import Head from 'next/head';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroHome from '@/components/HeroHome';
import FloatingAnalyzeButton from "@/components/FloatingAnalyzeButton";

export default function HomeClient() {
  return (
    <>
      <main>
        <div className="pt-[60px]">
          <Navbar />
          <HeroHome />
          <Footer />
          <FloatingAnalyzeButton />
        </div>
      </main>
    </>
  );
}

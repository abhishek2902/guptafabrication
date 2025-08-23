'use client';
import {
  Mail,
  Phone,
} from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Testimonials } from '@/components/Testimonials';
import { HeroSection } from '@/components/HeroSection';
import { CompanyStory } from '@/components/CompanyStory';
import { CoreValues } from '@/components/CoreValues';
import { ExpertiseShowcase } from '@/components/ExpertiseShowcase';
import { TeamSection } from '@/components/TeamSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';

export default function AboutPage() {
  return (
    <main className="bg-gray-50 min-h-screen font-sans">
      <Navbar/>

      <HeroSection />

      <CompanyStory />

      <CoreValues />

      <ExpertiseShowcase />

      <TeamSection />

      <WhyChooseUs />

      <Testimonials />

      <CallToAction />

      <Footer />
    </main>
  );
}

function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your <span className="text-orange-400">Next Project?</span>
        </h3>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Let&apos;s discuss your metal fabrication needs and create something extraordinary together. Get in touch with our expert team today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+919876543210"
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
          >
            <Phone size={20} /> Call Now: +91 8319962297
          </a>
          <a
            href="mailto:info@guptafabrication.com"
            className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 hover:bg-opacity-20"
          >
            <Mail size={20} /> Get Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}

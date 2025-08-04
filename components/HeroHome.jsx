'use client';
import React, { useState } from 'react';
import GateShowcase from './GateShowcase';
import Link from 'next/link';
import ContactModal from './ContactModal';
import { CompanyStory, CoreValues, ExpertiseShowcase, HeroSection, TeamSection, WhyChooseUs } from '@/app/about/page';
import { Testimonials } from './Testimonials';

export default function HeroHome() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section id="home" className="hero-gradient min-h-screen flex items-center pt-0 md:pt-16 relative"
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)',
          position: 'relative'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-2xl md:text-7xl font-bold text-white mb-6 floating-animation">
              Premium Metal{" "}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                Fabrication
              </span>
            </h1>
            <p className="text-md md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional gates, railings, and custom metalwork with precision and artistry.
              Your vision, our expertise.
            </p>
            <div className="flex flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-900 px-4 md:px-8 py-2 md:py-4 rounded-lg text-lg font-bold hover:from-amber-400 hover:via-yellow-400 hover:to-amber-500 transition-all shadow-2xl pulse-glow"
              >
                Gate Design
              </Link>
              <button
                className="border-2 border-amber-400 text-amber-400 px-4 md:px-8 py-2 md:py-4 rounded-lg text-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all shadow-lg"
                onClick={() => setContactOpen(true)}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Showcase */}
          <GateShowcase />

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-2">1000+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-2">25+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-slate-300">Client Satisfaction</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-2">20+</div>
              <div className="text-slate-300">Workers Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 border-t border-amber-200">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text text-transparent mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's discuss your project and bring your vision to life with our expert craftsmanship.
          </p>
          <div className='flex flex-col gap-4 items-center'>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919340059307"
                className="bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-2 py-4 rounded-lg text-lg font-bold hover:from-amber-400 hover:to-yellow-500 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                📞 Call Now: +91-9340059307
              </a>

              <a
                href="https://wa.me/919340059307"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-amber-500 text-amber-600 px-16 py-4 rounded-lg text-lg font-semibold hover:bg-amber-500 hover:text-slate-900 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                💬 WhatsApp Us
              </a>
            </div>
            <Link
              href="/products"
              className="max-w-70 sm:max-w-80 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-900 px-2 md:px-2 py-4 md:py-2 rounded-lg text-lg font-bold hover:from-amber-400 hover:via-yellow-400 hover:to-amber-500 transition-all shadow-2xl pulse-glow"
            >
            View our modern gates, doors and metal products
          </Link>
          </div>
        </div>
      </section>
      <HeroSection/>
      <CompanyStory/>
      <CoreValues/>
      <ExpertiseShowcase/>
      <TeamSection/>
      <WhyChooseUs />
      <Testimonials />
      
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      {/* Utility Styles (for animation/pulse-glow used in demo) */}
      <style>{`
        .hero-gradient {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%);
          position: relative;
        }
        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .pulse-glow {
          animation: pulse-glow 2s infinite;
        }
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(245, 158, 11, 0.8);
          }
        }
      `}</style>
    </div>
  );
}

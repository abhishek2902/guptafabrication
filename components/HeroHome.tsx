'use client';
import React, { useState } from 'react';
import GateShowcase from './GateShowcase';
import Link from 'next/link';
import ContactModal from './ContactModal';
import { Testimonials } from './Testimonials';
import { HeroSection } from './HeroSection';
import { CompanyStory } from './CompanyStory';
import { CoreValues } from './CoreValues';
import { ExpertiseShowcase } from './ExpertiseShowcase';
import { TeamSection } from './TeamSection';
import { WhyChooseUs } from './WhyChooseUs';
import FloatingLink from './FloatingLink'

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
          <div className="text-center mb-6 md:mb-16">
            <h1 className="text-2xl md:text-7xl font-bold text-white mb-6 floating-animation">
              Premium Metal{" "}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                Fabrication
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-center mb-4 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-slate-200">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 
                              text-transparent bg-clip-text font-semibold animate-gradient">
                Crafting exceptional gates, railings,
              </span> 
              &nbsp;and 
              <span className="text-white font-bold"> custom metalwork </span>
              with precision and artistry. 
              <br />
              <span className="relative inline-block font-bold text-amber-300">
                Your vision, our expertise.
                {/* <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-amber-400 rounded-full animate-underline"></span> */}
              </span>
            </p>

            <div className="flex flex-row gap-4 justify-center">
              <Link
                href="/gate-designs"
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
          <h1 className=" mt-8 text-2xl md:text-5xl text-center font-bold text-white mb-0 floating-animation">
            Gupta Fabrication: Expert {" "}
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Gate Design
            </span>
            {" "} & Metal Fabrication
          </h1>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 text-center">
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
          <p className="text-lg md:text-2xl text-center mt-12 mb-4 sm:mb- max-w-3xl mx-auto leading-relaxed text-slate-200">
            <span className="text-white font-bold">
              Gupta Fabrication specializes in bringing your vision to life in
             </span>
             &nbsp;
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-transparent bg-clip-text font-semibold animate-gradient">
              Satna and beyond.
            </span>
          </p>
        </div>
      </section>
      <FloatingLink/>
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

'use client'
import { useState } from 'react';
import { Wrench, Shield, Layers, Building2 } from 'lucide-react'; // Industrial icons
import Navbar from './Navbar'; // Your Navbar file from previous answer

// Example "services" for a welding/fabrication business.
const SERVICES = [
  {
    id: 1,
    name: "Custom Metal Fabrication",
    description: "Expert in custom fabrication for railings, frames, machinery parts, and more. Precision and durability guaranteed.",
    icon: <Layers className="w-14 h-14 text-white" />,
    gradient: "from-gray-700 to-gray-900",
  },
  {
    id: 2,
    name: "Industrial Welding",
    description: "Certified MIG, TIG & Arc welding for heavy-duty industrial and commercial needs. Reliable and safe welds, every time.",
    icon: <Wrench className="w-14 h-14 text-white" />,
    gradient: "from-slate-800 to-slate-900",
  },
  {
    id: 3,
    name: "Metal Repairs & Maintenance",
    description: "Cracked gates? Damaged structures? We restore, reinforce & extend the life of your metalwork on-site or in shop.",
    icon: <Shield className="w-14 h-14 text-white" />,
    gradient: "from-zinc-700 to-zinc-900",
  },
  {
    id: 4,
    name: "Structural Steelwork",
    description: "Beams, columns, staircases, trusses—fabricated and installed for warehouses, factories, and infrastructure.",
    icon: <Building2 className="w-14 h-14 text-white" />,
    gradient: "from-stone-700 to-stone-900",
  },
];

// Single service card
function ServiceCard({ service }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-200 transition-all duration-300 cursor-pointer ${
        hover ? 'transform -translate-y-2 shadow-2xl' : ''
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={
        `bg-gradient-to-br ${service.gradient} rounded-xl h-36 mb-6 flex items-center justify-center transition-all duration-300 ${hover ? 'scale-105' : ''}`
      }>
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
      <p className="text-gray-600 mb-2">{service.description}</p>
      {/* You can add contact or detail actions if needed */}
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            <span className="block">Gupta Fabrication & Welding</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900">
              Precision • Strength • Reliability
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            From custom metal gates to industrial welding, we bring your ideas to life with craftsmanship and quality that lasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transform hover:scale-105 shadow-lg transition-all">
              Explore Services
            </a>
            <a href="#contact" className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all">
              Request a Quote
            </a>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

        {/* CALL TO ACTION */}
        <div className="bg-white rounded-2xl p-12 text-center shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Ready to bring your metal vision to life?</h2>
          <p className="text-gray-600 mb-8 text-lg max-w-xl mx-auto">
            Get expert advice and a free estimate for your next welding or fabrication project — trusted by clients across the region.
          </p>
          <a href="#contact" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
            Contact Us Today
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Gupta Fabrication</h3>
              <p className="text-gray-400">Reliable welding & metalwork since 1998</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Custom Fabrication</li>
                <li>On-site Welding</li>
                <li>Repairs</li>
                <li>Structure Installation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#book-demo" className="hover:text-white transition-colors">Book Demo</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 Gupta Fabrication. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
// Individual Gate "Card"
function GateCard({ imgSrc, svg, title, desc, onClick,alt }) {
  return (
    <div
      className="gate-card bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-xl p-6 border border-amber-500/30 shadow-2xl transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-gradient-to-br from-slate-100 to-white rounded-lg mb-4 h-44 flex items-center justify-center shadow-inner">
      <Image
          src={imgSrc}
          alt={alt}
          width={192}        // adjust width/height as needed
          height={192}
          className="h-44 rounded-lg w-full aspect-[5/3] object-cover"
          unoptimized={false} // useful if images are local or external, adjust as needed
        />
      </div>
      <h3 className="text-amber-400 text-lg font-bold mb-2">{title}</h3>
      <p className="text-slate-300 text-sm mb-2">{desc}</p>
      <Link
        href="/products"
        className="mt-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-xs text-slate-900 px-2 md:px-2 py-2 md:py-2 rounded-lg font-bold hover:from-amber-400 hover:via-yellow-400 hover:to-amber-500 transition-all shadow-2xl pulse-glow"
      >
        View Catalogue
      </Link>
    </div>
  );
}

const gateDesigns = [
  {
    title: 'Modern Geometric',
    desc: 'Clean lines and contemporary design for modern homes',
    svg: (
      <svg width="120" height="140" viewBox="0 0 120 140" className="text-slate-800">
        <rect x="10" y="10" width="100" height="120" fill="none" stroke="currentColor" strokeWidth="3"/>
        <rect x="20" y="20" width="80" height="100" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="30" y1="30" x2="90" y2="30" stroke="currentColor" strokeWidth="2"/>
        <line x1="30" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2"/>
        <line x1="30" y1="70" x2="90" y2="70" stroke="currentColor" strokeWidth="2"/>
        <line x1="30" y1="90" x2="90" y2="90" stroke="currentColor" strokeWidth="2"/>
        <line x1="30" y1="110" x2="90" y2="110" stroke="currentColor" strokeWidth="2"/>
        <rect x="45" y="40" width="30" height="50" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="75" cy="65" r="3" fill="currentColor"/>
      </svg>
    ),
    imgSrc:'/gate-design-boundary/main-gate-design-2.jpg',
    alt:"Custom wrought iron gate design for residential property"
  },
  {
    title: 'Traditional Ornate',
    desc: 'Classic elegance with intricate decorative patterns',
    svg: (
      <svg width="120" height="140" viewBox="0 0 120 140" className="text-slate-800">
        <rect x="10" y="10" width="100" height="120" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M20 20 Q60 40 100 20" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 40 Q60 60 100 40" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="35" cy="60" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="60" cy="70" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="85" cy="60" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 90 Q35 100 50 90 Q65 100 80 90 Q95 100 100 90" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="30" y1="110" x2="30" y2="120" stroke="currentColor" strokeWidth="2"/>
        <line x1="60" y1="110" x2="60" y2="120" stroke="currentColor" strokeWidth="2"/>
        <line x1="90" y1="110" x2="90" y2="120" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    imgSrc:"/chaukhat-design/chaukhat-design-2.jpg",
    alt:"Custom pipe gate design for modern property"
  },
  {
    title: 'Industrial Style',
    desc: 'Robust and functional design for commercial spaces',
    svg: (
      <svg width="120" height="140" viewBox="0 0 120 140" className="text-slate-800">
        <rect x="10" y="10" width="100" height="120" fill="none" stroke="currentColor" strokeWidth="4"/>
        <line x1="25" y1="10" x2="25" y2="130" stroke="currentColor" strokeWidth="3"/>
        <line x1="40" y1="10" x2="40" y2="130" stroke="currentColor" strokeWidth="3"/>
        <line x1="60" y1="10" x2="60" y2="130" stroke="currentColor" strokeWidth="3"/>
        <line x1="80" y1="10" x2="80" y2="130" stroke="currentColor" strokeWidth="3"/>
        <line x1="95" y1="10" x2="95" y2="130" stroke="currentColor" strokeWidth="3"/>
        <rect x="45" y="50" width="30" height="40" fill="none" stroke="currentColor" strokeWidth="3"/>
        <line x1="10" y1="40" x2="110" y2="40" stroke="currentColor" strokeWidth="2"/>
        <line x1="10" y1="100" x2="110" y2="100" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    imgSrc:"/railing-design/railing-design-1.jpg",
    alt:"Custom pipe iron railings design for residential property"
  },
  {
    title: 'Artistic Curved',
    desc: 'Flowing designs that blend art with functionality',
    svg: (
      <svg width="120" height="140" viewBox="0 0 120 140" className="text-slate-800">
        <rect x="10" y="10" width="100" height="120" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M20 20 Q60 50 100 20" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 130 Q60 100 100 130" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M30 30 Q60 75 90 30" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M30 120 Q60 75 90 120" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="60" cy="75" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M45 75 Q60 60 75 75 Q60 90 45 75" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="20" y1="50" x2="30" y2="60" stroke="currentColor" strokeWidth="2"/>
        <line x1="100" y1="50" x2="90" y2="60" stroke="currentColor" strokeWidth="2"/>
        <line x1="20" y1="100" x2="30" y2="90" stroke="currentColor" strokeWidth="2"/>
        <line x1="100" y1="100" x2="90" y2="90" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    imgSrc:"/gate-design-boundary/modern-gate-design-0.jpg",
    alt:"Modern pipe gate design and products for residential property"
  },
];

export default function GateShowcase() {
  const router = useRouter();
  
  // Dialog modals or alert can be replaced with Next.js modal if needed!
  function onGateClick(title) {
    // alert(`Interested in ${title} design? Contact us for a custom quote!`);
    router.push('/products');
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:mt-20">
      {gateDesigns.map(({ title, desc, svg, imgSrc, alt }, i) => (
        <GateCard
          key={title}
          svg={svg}
          imgSrc={imgSrc}
          title={title}
          desc={desc}
          alt={alt}
          onClick={() => onGateClick(title)}
        />
      ))}
    </div>
  );
}

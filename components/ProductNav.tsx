'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaThumbsUp } from 'react-icons/fa';

type ProductNavProps = {
  onCategory: (id: string) => void;
  activeCategory?: string | null;
  isTop?: boolean;
  className?: string;
	fullscreen?: boolean;
};

const TOP_CATEGORIES = [
  { id: 'boundary-gates', name: 'बाउंड्री गेट डिज़ाइन', icon: '/miscel/bgatelogo.png' },
  { id: 'windows', name: 'खिड़की', icon: '🪟' },
  { id: 'doors', name: 'दरवाज़ा', icon: '🚪' },
];
const FULL_CATEGORIES = [
  { id: 'boundary-gates', name: 'बाउंड्री गेट डिज़ाइन', icon: '/miscel/bgatelogo.png' },
  { id: 'windows', name: 'खिड़की ', icon: '🪟' },
  { id: 'doors', name: 'दरवाज़ा ', icon: '🚪' },
	{ id: 'shutters', name: 'शटर ', icon: '/miscel/shutterlogo.png' },
  { id: 'railing', name: 'रेलिंग', icon: "/miscel/railinglogo2.png" },
  { id: 'chaukhat', name: 'चौखट', icon: "/miscel/chaukhatlogo.png" },
  { id: 'favid', name: 'Liked', icon: "👍🏻" },
];

const BOTTOM_CATEGORIES = [
  { id: 'shutters', name: 'शटर डिज़ाइन', icon: '/miscel/shutterlogo.png' },
  { id: 'railing', name: 'रेलिंग', icon: "/miscel/railinglogo2.png" },
  { id: 'chaukhat', name: 'चौखट', icon: "/miscel/chaukhatlogo.png" },
  { id: 'favid', name: 'Liked', icon: "👍🏻" },
];

export default function ProductNav({ onCategory, activeCategory = null, isTop = true, className = '',fullscreen=true }: ProductNavProps) {
  const categories = isTop ? (fullscreen?FULL_CATEGORIES:TOP_CATEGORIES) : BOTTOM_CATEGORIES;

  return (
		 <nav className={`w-full z-40 ${isTop ? 'fixed top-0' : 'fixed bottom-0'} bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b ${isTop ? 'border-amber-500/100' : 'border-t border-amber-500/100'} shadow-lg`}>

			<div className="max-w-7xl mx-auto flex gap-6 justify-between items-center px-2 py-2 overflow-x-auto">

        {/* Logo only on top nav */}
        {isTop && (
					<Link href="/" className="flex items-center space-x-3 absolute	left-8">
						<img src="/gflogo.png" className="h-10" alt="Gupta Fabrication Logo" />
					</Link>
        )}

        {/* Category links */}
        <div className="flex gap-0 md:gap-6 flex-1 justify-end md:justify-center pl-10">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onCategory(cat.id);
              }}
              className={`
                group relative flex flex-col items-center px-3 py-2 rounded-lg text-xs md:text-sm font-semibold tracking-wide
                transition-all duration-300
                ${activeCategory === cat.id ? 'text-white bg-slate-700' : 'text-slate-300 hover:text-white hover:bg-slate-500 md:hover:bg-transparent'}
              `}
            >
							{cat.icon.startsWith("/") ? (
								<Image
									src={cat.icon}
									alt={cat.name}
									width={30}
									height={30}
									className="md:w-8 w-7 h-7 md:h-8"
								/>
							) : (
								<span className="text-xl md:text-2xl">{cat.icon}</span>
							)}
              <span className="mt-1 md:mt-0">{cat.name}</span>

              <span
                className={`
                  absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 scale-x-0
                  origin-center transition-transform duration-300 md:block hidden
                  ${activeCategory === cat.id ? 'scale-x-100' : 'group-hover:scale-x-100'}
                `}
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

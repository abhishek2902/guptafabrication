'use client';
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import ProductNav from '@/components/ProductNav';
import { products as allProducts } from '@/data/products'; // adjust the path if needed
import ContactModal from '@/components/ContactModal';

type CategoryKey = 'favid' | 'boundary-gates' | 'windows' | 'doors' | 'chaukhat' | 'shutters' | 'grills' | 'railing';

const CATEGORY_MAP: Record<CategoryKey, string>  = {
  'favid': 'Favourite',
  'boundary-gates': 'BoundaryGate',
  'windows': 'Grill',
  'doors': 'Door',
  'chaukhat': 'Chaukhat',
  'shutters': 'Shutter',
  'grills': 'Grill',
  'railing': 'Railing',
};

export default function ProductDesignsPage() {
  const [active, setActive] = useState<CategoryKey | null>(null);
  const [filtered, setFiltered] = useState(allProducts);
	const [isMdUp, setIsMdUp] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

	useEffect(() => {
		// Match md breakpoint with window resize
		function handleResize() {
				setIsMdUp(window.innerWidth >= 768); // Tailwind md breakpoint = 768px
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    if (typeof window !== 'undefined') {
      if (active) {
        if (active === "favid") {
          const fav = JSON.parse(localStorage.getItem("favid") || "[]");
          setFiltered(allProducts.filter(p => fav.includes(p.id)));
        } else {
          setFiltered(allProducts.filter(p => p.category === CATEGORY_MAP[active]));
        }
      } else {
        setFiltered(allProducts);
      }
    }
  }, [active]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <ProductNav
        isTop={true}
				fullscreen={isMdUp}
        onCategory={(id) => setActive(id as CategoryKey)}
        className="md:px-4"
        activeCategory={active}
      />

      <div className="h-16 md:h-16" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mb-2">Product Designs</h2>
        <p className="text-amber-600 font-medium mb-2 md:mb-8 text-xs md:text-xl">
          Explore our range of premium metalwork: gates, doors, windows, shutters and more.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {filtered.length > 0 ? (
            filtered.map(product => (
              <ProductCard key={product.id} product={product} onOrderClick={() => setContactOpen(true)}/>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400">No products in this category now.</div>
          )}
        </div>
      </div>
      <div className="h-16" />
      {!isMdUp && (
        <ProductNav
          isTop={false}
          onCategory={(id) => setActive(id as CategoryKey)}
          className="md:hidden"
        />
      )}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}

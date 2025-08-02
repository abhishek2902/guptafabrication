// 'use client';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import { FaThumbsUp } from 'react-icons/fa'; // ✅ Using react-icons for simplicity

// type Product = {
//   id: number;
//   category: string;
//   model: string;
//   path: string;
// };

// export default function ProductCard({ product }: { product: Product }) {
//   const [liked, setLiked] = useState(false);

//   useEffect(() => {
//     const fav = JSON.parse(localStorage.getItem("favid") || "[]");
//     setLiked(fav.includes(product.id));
//   }, [product.id]);

//   const toggleLike = () => {
//     let fav = JSON.parse(localStorage.getItem("favid") || "[]");
//     if (fav.includes(product.id)) {
//       fav = fav.filter((id: number) => id !== product.id);
//       setLiked(false);
//     } else {
//       fav.unshift(product.id);
//       setLiked(true);
//     }
//     localStorage.setItem("favid", JSON.stringify(fav));
//   };

//   return (
//     <div className="bg-white/90 rounded-xl shadow-lg border border-slate-300 hover:border-amber-500 overflow-hidden transition-all duration-200 flex flex-col">
//       <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-slate-900 to-slate-800">
//         <span className="text-amber-400 font-bold text-xs tracking-wide">{product.category}</span>
//         <span className="text-slate-300 text-xs">
//           Model: <span className="text-white font-semibold">{product.model}</span>
//         </span>
//       </div>
//       <div className="w-full bg-gradient-to-br from-slate-100 to-slate-300 p-2">
//         <Image
//           src={product.path}
//           alt={product.model}
//           width={500}
//           height={380}
//           className="rounded-lg w-full aspect-[5/3] object-cover"
//         />
//       </div>
//       <div className="flex justify-between items-center p-3">
//         {/* ✅ Fixed Like Button */}
//         <button
//           onClick={toggleLike}
//           aria-label={liked ? "Unlike" : "Like"}
//           className={`text-2xl transition-colors duration-200 ${liked ? "text-rose-600" : "text-gray-400"}`}
//         >
//           <FaThumbsUp />
//         </button>

//         <button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 px-4 py-1 rounded font-bold shadow hover:from-amber-500 hover:to-yellow-600 transition-all">
//           Order
//         </button>
//       </div>
//     </div>
//   );
// }





'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaThumbsUp } from 'react-icons/fa';

type Product = {
  id: number;
  category: string;
  model: string;
  path: string;
};

type ProductCardProps = {
  product: Product;
  onOrderClick: () => void;
};

export default function ProductCard({ product, onOrderClick }: ProductCardProps) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem("favid") || "[]");
    setLiked(fav.includes(product.id));
  }, [product.id]);

  const toggleLike = () => {
    let fav = JSON.parse(localStorage.getItem("favid") || "[]");
    if (fav.includes(product.id)) {
      fav = fav.filter((id: number) => id !== product.id);
      setLiked(false);
    } else {
      fav.unshift(product.id);
      setLiked(true);
    }
    localStorage.setItem("favid", JSON.stringify(fav));
  };

  return (
    <div className="bg-white/90 rounded-xl shadow-lg border border-slate-300 hover:border-amber-500 overflow-hidden transition-all duration-200 flex flex-col">
      <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-slate-900 to-slate-800">
        <span className="text-amber-400 font-bold text-xs tracking-wide">{product.category}</span>
        <span className="text-slate-300 text-xs">
          Model: <span className="text-white font-semibold">{product.model}</span>
        </span>
      </div>
      <div className="w-full bg-gradient-to-br from-slate-100 to-slate-300 p-2">
        <Image
          src={product.path}
          alt={product.model}
          width={500}
          height={380}
          className="rounded-lg w-full aspect-[5/3] object-cover"
        />
      </div>
      <div className="flex justify-between items-center p-3">
        {/* Like Button */}
        <button
          onClick={toggleLike}
          aria-label={liked ? "Unlike" : "Like"}
          className={`text-2xl transition-colors duration-200 ${liked ? "text-rose-600" : "text-gray-400"}`}
        >
          <FaThumbsUp />
        </button>

        {/* Order Button triggers modal */}
        <button
          onClick={onOrderClick}
          className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 px-4 py-1 rounded font-bold shadow hover:from-amber-500 hover:to-yellow-600 transition-all"
        >
          Contact
        </button>
      </div>
    </div>
  );
}

"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleScroll = () => {
      if (window.innerWidth < 768) setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
		  className="bg-gradient-to-r from-slate-900 to-slate-800 shadow-2xl fixed w-full top-0 z-50 border-b border-amber-500/20"
		>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pl-4 py-3 md:py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <img src="/gflogo.png" className="h-10" alt="Gupta Fabrication Logo" />
        </Link>

		<div className="flex text-xs items-end md:space-x-8 md:mt-0 font-sm text-white">
			{!isOpen && <>
				<Link
					href="/products"
					className="group mr-3 relative md:hidden block pb-2 px- tracking-wide text-white rounded-lg md:hover:bg-transparent transition-all duration-300"
				>
					<span className="group-hover:scale-105 transition-transform duration-300">
						Gate Design
					</span>
					<span className="absolute bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 scale-x-0 group-active:scale-x-100 transition-transform origin-center duration-300 "></span>
				</Link>
				<Link
					href="/visualizer"
					className="group mr-3 relative md:hidden block pb-2 px- tracking-wide text-white rounded-lg md:hover:bg-transparent transition-all duration-300"
				>
					<span className="group-hover:scale-105 transition-transform duration-300">
						AI Gate Visualizer
					</span>
					<span className="absolute bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 scale-x-0 group-active:scale-x-100 transition-transform origin-center duration-300 "></span>
				</Link>
				<Link
					href="/contact"
					className="group mr- relative md:hidden block pb-2 px- tracking-wide text-white rounded-lg md:hover:bg-transparent transition-all duration-300"
				>
					<span className="group-hover:scale-105 transition-transform duration-300">
						Contact
					</span>
					<span className="absolute bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 scale-x-0 group-active:scale-x-100 transition-transform origin-center duration-300 "></span>
				</Link>
				</>
			}
			{/* Mobile Menu Toggle */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				type="button"
				className="inline-flex items-center p-2 w-9 h-10 justify-center text-gray-100 rounded-lg md:hidden transition-all"
				aria-controls="navbar-menu"
				aria-expanded={isOpen}
			>
				{isOpen ? (
					<span></span>
				) : (
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 17 14">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
					</svg>
				)}
			</button>
		</div>

        {/* Menu Items */}
        <div
          ref={menuRef}
          className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-menu"
        >
          <ul className="flex flex-col md:flex-row md:space-x-2 mt-4 md:mt-0 font-medium text-white">
            <button
				onClick={() => setIsOpen(false)}
				type="button"
				className="absolute right-0 top-3 inline-flex items-center p-2 w-10 h-10 justify-center text-gray-100 rounded-lg md:hidden  transition-all"
				aria-controls="navbar-menu"
				aria-expanded={isOpen}
				>
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
        	</button>
            {[
              { name: "Boundary Gate Design", href: "/products" },
              { name: "All Design", href: "/products" },
              { name: "About", href: "/about" },
              { name: "AI Gate Visualizer", href: "/visualizer" },
              // { name: "Book Demo", href: "/book-demo" },
              // { name: "FAQ", href: "/faq" },
              { name: "Contact", href: "/contact" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="group mr-2 pl-2 md:pl-0 relative block py-2 px-0 tracking-wide hover:text-white rounded-lg hover:bg-slate-500 md:hover:bg-transparent transition-all duration-300"
                >
                  <span className="group-hover:scale-105 transition-transform duration-300">
                    {item.name}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 md:block hidden"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

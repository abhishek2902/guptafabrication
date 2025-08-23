'use client';
import React from 'react';
import CopyButton from './CopyButton';

export default function Footer() {
  // Social icons - you can swap out SVGS for lucide-react/heroicons if preferred
  const socials = [
    {
      label: 'Twitter',
      href: '#',
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609
            1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555
            -3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144
            -1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616
            -.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444
            3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212
            7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695
            1.797-1.562 2.457-2.549z"/>
        </svg>
      ),
    },
    {
      label: 'Facebook',
      href: 'https://facebook.com/guptafabricationwelding',
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.596 0 0 .592 0 1.325v21.351C0 23.404.596 
              24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 
              1.893-4.788 4.659-4.788 1.325 0 2.463.099 
              2.794.143v3.24l-1.918.001c-1.504 
              0-1.795.715-1.795 1.763v2.312h3.587l-.467 
              3.622h-3.12V24h6.116C23.404 24 24 
              23.404 24 22.676V1.325C24 .592 23.404 
              0 22.675 0z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abhishekkg2',
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852
            -3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477
            -.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267
            5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065
            0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0
            1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225
            0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771
            24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222
            0h.003z"/>
        </svg>
      ),
    },
    {
      label: 'GitHub',
      href: '#',
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079
            3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406
            -5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168
            -2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992
            3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245
            3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562
            -5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375
            -.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69
            -2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252
            4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233
            7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043
            -1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017
            24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/visualizer', label: 'AI Gate Visualizer' },
    { href: '/gate-designs', label: 'Catalogue' },
    { href: '/products', label: 'Our Services' },
    { href: '/gate-designs', label: 'Project Gallery' },
    { href: '/about', label: 'About Us' },
    { href: '/faq', label: 'Frequently asked questions' },
    { href: '/contact', label: 'Contact' },
  ];

  const services = [
    { icon: '🚪', label: 'Custom Gates' },
    { icon: '🏗️', label: 'Steel Railings' },
    { icon: '🔧', label: 'Metal Fabrication' },
    { icon: '🛠️', label: 'Welding Services' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden pt-4">
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5 pointer-events-none" />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  ⚡ Gupta Fabrication
                </div>
              </div>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                Crafting premium metal gates, railings, and custom fabrication solutions with over 25 years of expertise.
                Your trusted partner for exceptional metalwork that combines artistry with functionality.
              </p>
              <div className="flex space-x-4">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener"
                    className="bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 p-3 rounded-lg hover:from-amber-400 hover:to-yellow-500 transition-all shadow-lg"
                    aria-label={item.label}
                  >
                    {item.svg}
                  </a>
                ))}
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-amber-400 mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href} className="text-slate-300 hover:text-amber-400 transition-colors flex items-center">
                      <span className="mr-2">→</span>{link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-amber-400 mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-2 rounded-lg mr-3 mt-1">
                    {/* Location Pin */}
                    <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm">1HV54+4X8, Maihar Bypass Rd, Delaura,Utaily, Tikuria Tola</p>
                    <p className="text-slate-300 text-sm">Satna, Madhya Pradesh 485001</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-2 rounded-lg mr-3">
                    {/* Phone */}
                    <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36
                        1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45
                        1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45
                        1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div className='flex flex-col gap-'>
                    <div className='flex'><p className="text-slate-300 text-sm">+91-8319962297</p><CopyButton text="8319962297" /></div>
                    <div className='flex'><p className="text-slate-300 text-sm">+91-8085722477</p><CopyButton text="8085722477" /></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-2 rounded-lg mr-3">
                    {/* Email */}
                    <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9
                        2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0
                        4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm">guptafabricationsatna@gmail.com</p>
                    {/* <p className="text-slate-300 text-sm">sales@guptafabrication.com</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Grid */}
          <div className="mt-16 pt-8 border-t border-slate-700">
            <h3 className="text-2xl font-bold text-center text-amber-400 mb-8">Our Premium Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {services.map(s => (
                <div key={s.label} className="text-center group">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-4 rounded-lg mb-3 group-hover:from-amber-500 group-hover:to-yellow-600 transition-all duration-300">
                    <div className="text-2xl mb-2 group-hover:text-slate-900">{s.icon}</div>
                    <h4 className="text-slate-300 font-semibold group-hover:text-slate-900">{s.label}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom Footer */}
        <div className="border-t border-slate-700 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-400 text-sm mb-4 md:mb-0">
                © 2025 Gupta Fabrication. All rights reserved. | Crafted with ❤️ for premium metalwork
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Privacy Policy</a>
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Terms of Service</a>
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Warranty</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

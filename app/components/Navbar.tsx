"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      
      <div className="w-full px-8 md:px-12 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image 
            src="/logo.svg" 
            alt="Meridian Energy Logo" 
            width={200} 
            height={50} 
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu - ADDED CONTACT LINK */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <Link href="/portfolio" className="hover:text-blue-900 transition">Our Portfolio</Link>
          <Link href="/about" className="hover:text-blue-900 transition">Strategic Capital</Link>
          <Link href="/contact" className="hover:text-blue-900 transition">Contact Us</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-slate-900 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-slate-900 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-slate-900 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown - ADDED CONTACT LINK */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg py-6 px-8 flex flex-col space-y-6 text-sm font-medium text-slate-600">
          <Link href="/portfolio" onClick={() => setIsOpen(false)} className="hover:text-blue-900 transition block">Our Portfolio</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-900 transition block">Strategic Capital</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-900 transition block">Contact Us</Link>
        </div>
      )}
    </nav>
  );
}
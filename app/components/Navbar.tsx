"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300 shadow-sm">
      <div className="w-full px-8 md:px-24">
        <div className="flex justify-between items-center h-24">
          
          {/* Left Side: Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="block group">
              <div className="flex items-center">
                {/* Custom Brand Gradient */}
                <span className="font-meridian text-3xl md:text-4xl tracking-tight bg-gradient-to-r from-[#8CD600] via-[#00A88F] to-[#005F88] bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                  meridian
                </span>
                {/* Navy Blue Divider (Slightly faded so it doesn't overpower the text) */}
                <span className="font-meridian text-2xl md:text-2xl text-[#1A2B45]/40 mx-2 md:mx-3 pb-1">|</span>
                {/* Solid Navy Blue 'Renewables' */}
                <span className="font-meridian text-2xl md:text-2xl text-[#1A2B45] tracking-wide group-hover:opacity-80 transition-opacity">
                  Energy
                </span>
              </div>
            </Link>
          </div>

          {/* Right Side: Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/about" className="text-sm font-semibold text-slate-700 hover:text-[#1A2B45] tracking-wide transition">
              Strategic Capital
            </Link>
            <Link href="/portfolio" className="text-sm font-semibold text-slate-700 hover:text-[#1A2B45] tracking-wide transition">
              Our Portfolio
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-slate-700 hover:text-[#1A2B45] tracking-wide transition">
              Contact Us
            </Link>
            
            {/* Institutional 'Portal' Link */}
            <div className="pl-6 border-l border-slate-300">
              <Link href="/portal" className="text-xs font-bold text-[#1A2B45] uppercase tracking-widest hover:text-slate-500 transition flex items-center gap-2">
                Investor Portal 
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 hover:text-[#1A2B45] focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full">
          <div className="px-8 pt-4 pb-8 space-y-4 flex flex-col">
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-900 hover:text-[#1A2B45] py-2">
              Strategic Capital
            </Link>
            <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-900 hover:text-[#1A2B45] py-2">
              Our Portfolio
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-900 hover:text-[#1A2B45] py-2">
              Contact Us
            </Link>
            <div className="pt-4 mt-2 border-t border-slate-100">
              <Link href="/portal" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-bold text-[#1A2B45] uppercase tracking-widest py-2">
                Investor Portal &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
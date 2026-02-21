"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300 shadow-sm">
      <div className="w-full px-8 md:px-24 h-24">
        <div className="flex justify-between items-center h-full">
          
          {/* Left Side: Brand Logo */}
          <div className="flex-shrink-0 flex items-center h-full">
            <Link href="/" className="block group">
              <div className="flex items-center">
                <span className="font-meridian text-3xl md:text-4xl tracking-tight bg-gradient-to-r from-[#8CD600] via-[#00A88F] to-[#005F88] bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                  meridian
                </span>
                <span className="text-2xl md:text-3xl font-light text-[#1A2B45]/40 mx-2 md:mx-3 pb-1">|</span>
                <span className="text-2xl md:text-3xl font-medium text-[#1A2B45] tracking-wide group-hover:opacity-80 transition-opacity">
                  Energy
                </span>
              </div>
            </Link>
          </div>

          {/* Right Side: Desktop Menu */}
          <div className="hidden md:flex items-center h-full space-x-10">
            
            {/* Institutional "Insights" Mega Menu */}
            <div className="group h-full flex items-center">
              {/* NOW WIRED TO /insights */}
              <Link href="/insights" className="text-sm font-semibold text-slate-700 hover:text-[#1A2B45] tracking-wide transition flex items-center gap-1 h-full cursor-pointer border-b-2 border-transparent group-hover:border-[#1A2B45]">
                Insights
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Link>

              {/* The Dropdown Panel */}
              <div className="absolute top-24 left-0 w-full bg-white border-t border-slate-200 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <div className="max-w-[1400px] mx-auto px-8 md:px-24 py-16">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

                    {/* Column 1: Meridian Platform Description */}
                    <div className="col-span-1 md:col-span-4 md:pr-8">
                      <h3 className="text-2xl font-light text-slate-900 mb-6">The Intelligent Energy Platform</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-8">
                        Moving beyond carbon neutral on paper. Meridian Energy integrates utility-scale solar, wind, and storage into a unified platform, delivering physical 24/7 Carbon-Free Energy to accommodate India's 500 GW ambition and meet rigorous corporate Net Zero targets.
                      </p>
                      {/* NOW WIRED TO /insights */}
                      <Link href="/insights" className="inline-flex items-center text-sm font-semibold text-[#1A2B45] hover:text-[#00A88F] transition group/link">
                        <span className="mr-3 text-lg font-light transition-transform group-hover/link:translate-x-1">&rarr;</span> Explore our insights
                      </Link>
                    </div>

                    {/* Column 2: Operational Capabilities */}
                    <div className="col-span-1 md:col-span-4">
                      <h4 className="text-sm text-slate-500 mb-6">Operational Frameworks</h4>
                      <ul className="space-y-4 border-l border-slate-100 pl-4">
                        <li><Link href="/insights/fdre" className="text-sm text-slate-900 hover:text-[#00A88F] transition font-medium">Firm Dispatchable RE (FDRE)</Link></li>
                        <li><Link href="/insights/solar" className="text-sm text-slate-600 hover:text-[#00A88F] transition">Utility-Scale Solar Energy</Link></li>
                        <li><Link href="/insights/wind" className="text-sm text-slate-600 hover:text-[#00A88F] transition">Wind Power Infrastructure</Link></li>
                        <li><Link href="/insights/bess" className="text-sm text-slate-600 hover:text-[#00A88F] transition">Battery Energy Storage (BESS)</Link></li>
                        
                        <li><Link href="/insights/revenue" className="text-sm text-slate-900 hover:text-[#00A88F] transition font-medium mt-2 block">Revenue Structuring</Link></li>
                        <li><Link href="/insights/group-captive" className="text-sm text-slate-600 hover:text-[#00A88F] transition">Captive & Group Captive PPAs</Link></li>
                        <li><Link href="/insights/open-access" className="text-sm text-slate-600 hover:text-[#00A88F] transition">Open Access (OA) Markets</Link></li>
                      </ul>
                    </div>

                    {/* Column 3: Strategic Themes */}
                    <div className="col-span-1 md:col-span-4">
                      <h4 className="text-sm text-slate-500 mb-6">Strategic Focus</h4>
                      <ul className="space-y-4 border-l border-slate-100 pl-4">
                        <li><Link href="/insights/cfe" className="text-sm text-slate-900 hover:text-[#00A88F] transition font-bold">24/7 Carbon-Free Energy</Link></li>
                        <li><Link href="/insights/un-compact" className="text-sm text-slate-600 hover:text-[#00A88F] transition">UN CFE Compact Alignment</Link></li>
                        <li><Link href="/insights/time-matched" className="text-sm text-slate-600 hover:text-[#00A88F] transition">Time-Matched Procurement</Link></li>
                        <li><Link href="/insights/beyond-neutrality" className="text-sm text-slate-600 hover:text-[#00A88F] transition">Beyond Carbon Neutrality</Link></li>
                        <li><Link href="/insights/india-500gw" className="text-sm text-slate-600 hover:text-[#00A88F] transition">India's 500 GW 2030 Target</Link></li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-sm font-semibold text-slate-700 hover:text-[#1A2B45] tracking-wide transition flex items-center h-full">
              Strategic Capital
            </Link>
            <Link href="/portfolio" className="text-sm font-semibold text-slate-700 hover:text-[#1A2B45] tracking-wide transition flex items-center h-full">
              Our Portfolio
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-slate-700 hover:text-[#1A2B45] tracking-wide transition flex items-center h-full">
              Contact Us
            </Link>
            
            {/* Institutional 'Portal' Link */}
            <div className="pl-6 border-l border-slate-300 h-full flex items-center">
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
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full max-h-screen overflow-y-auto">
          <div className="px-8 pt-4 pb-8 space-y-4 flex flex-col">
            {/* NOW WIRED TO /insights */}
            <Link href="/insights" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-900 hover:text-[#00A88F] py-2">
              Insights
            </Link>
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
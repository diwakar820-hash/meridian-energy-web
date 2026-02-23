"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300 shadow-sm font-sans">
      <div className="w-full px-6 md:px-12 xl:px-24 h-24">
        <div className="flex justify-between items-center h-full">
          
          {/* 1. LEFT SIDE: YOUR EXACT BRAND LOGO */}
          <div className="flex-shrink-0 flex items-center h-full">
            <Link href="/" className="block group">
              <div className="flex items-center">
                <span className="font-meridian text-3xl xl:text-4xl tracking-tight bg-gradient-to-r from-[#8CD600] via-[#00A88F] to-[#005F88] bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                  meridian
                </span>
                <span className="text-2xl xl:text-3xl font-light text-[#1A2B45]/40 mx-2 md:mx-3 pb-1">|</span>
                <span className="text-2xl xl:text-3xl font-medium text-[#1A2B45] tracking-wide group-hover:opacity-80 transition-opacity">
                  Energy
                </span>
              </div>
            </Link>
          </div>

          {/* 2. RIGHT SIDE: DESKTOP MENU (ALL 8 KEYS COMBINED) */}
          {/* Reduced space-x to 6 so all 8 items fit perfectly on a single line */}
          <div className="hidden xl:flex items-center h-full space-x-6">
            
            {/* =========================================
                NEW BROOKFIELD KEYS (1-4)
            ========================================= */}

            {/* --- 1. ABOUT US --- */}
            <div className="group h-full flex items-center">
              <Link href="/about" className="text-sm font-semibold text-slate-700 hover:text-[#1A2B45] tracking-wide transition flex items-center gap-1 h-full cursor-pointer border-b-2 border-transparent group-hover:border-[#1A2B45]">
                About Us
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Link>

              <div className="absolute top-24 left-0 w-full bg-white border-t border-slate-200 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <div className="max-w-[1400px] mx-auto px-8 xl:px-24 py-16">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    <div className="col-span-1 md:col-span-4 md:pr-8">
                      <h3 className="text-2xl font-light text-slate-900 mb-6">Long-term thinking.<br/>Real world impact.</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-8">
                        Institutionalizing physical infrastructure for the 500 GW energy transition. We deploy strategic capital to engineer the decarbonization of critical industrial grids.
                      </p>
                      <Link href="/about" className="inline-flex items-center text-sm font-semibold text-[#1A2B45] hover:text-[#00A88F] transition group/link">
                        <span className="mr-3 text-lg font-light transition-transform group-hover/link:translate-x-1">&rarr;</span> Discover our mandate
                      </Link>
                    </div>
                    <div className="col-span-1 md:col-span-4">
                      <h4 className="text-sm text-slate-500 mb-6">Company</h4>
                      <ul className="space-y-4 border-l border-slate-100 pl-4">
                        <li><Link href="/about" className="text-sm text-slate-900 hover:text-[#00A88F] transition font-medium">Who We Are</Link></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Global Presence & Operations</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Executive Leadership</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Sustainability Framework</span></li>
                      </ul>
                    </div>
                    <div className="col-span-1 md:col-span-4">
                      <h4 className="text-sm text-slate-500 mb-6">Capabilities</h4>
                      <ul className="space-y-4 border-l border-slate-100 pl-4">
                        <li><span className="text-sm text-slate-900 font-bold">Renewable Power & Transition</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Asset Management</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Firm Dispatchable Infrastructure</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- 2. INVEST WITH US --- */}
            <div className="group h-full flex items-center">
              <Link href="/portfolio" className="text-sm font-semibold text-slate-700 hover:text-[#1A2B45] tracking-wide transition flex items-center gap-1 h-full cursor-pointer border-b-2 border-transparent group-hover:border-[#1A2B45]">
                Invest With Us
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Link>

              <div className="absolute top-24 left-0 w-full bg-white border-t border-slate-200 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <div className="max-w-[1400px] mx-auto px-8 xl:px-24 py-16">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    <div className="col-span-1 md:col-span-4 md:pr-8">
                      <h3 className="text-2xl font-light text-slate-900 mb-6">We partner with institutions to drive the transition.</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-8">
                        From our foundational 50 MW pilot to our multi-gigawatt national pipeline, we structure opportunities that deliver uncompromising sovereign-grade yield.
                      </p>
                      <Link href="/portfolio" className="inline-flex items-center text-sm font-semibold text-[#1A2B45] hover:text-[#00A88F] transition group/link">
                        <span className="mr-3 text-lg font-light transition-transform group-hover/link:translate-x-1">&rarr;</span> View our portfolio
                      </Link>
                    </div>
                    <div className="col-span-1 md:col-span-4">
                      <h4 className="text-sm text-slate-500 mb-6">Who We Serve</h4>
                      <ul className="space-y-4 border-l border-slate-100 pl-4">
                        <li><Link href="/portfolio" className="text-sm text-slate-900 hover:text-[#00A88F] transition font-medium">Institutional LPs</Link></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Commercial & Industrial Off-takers</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Strategic Development Partners</span></li>
                      </ul>
                    </div>
                    <div className="col-span-1 md:col-span-4">
                      <h4 className="text-sm text-slate-500 mb-6">Investment Strategies</h4>
                      <ul className="space-y-4 border-l border-slate-100 pl-4">
                        <li><span className="text-sm text-slate-900 font-bold">Platform Equity</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Project Finance & Senior Debt</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Captive Yield Structuring</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- 3. VIEWS & NEWS --- */}
            <div className="group h-full flex items-center">
              <Link href="/insights/fdre" className="text-sm font-semibold text-slate-700 hover:text-[#1A2B45] tracking-wide transition flex items-center gap-1 h-full cursor-pointer border-b-2 border-transparent group-hover:border-[#1A2B45]">
                Views & News
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Link>

              <div className="absolute top-24 left-0 w-full bg-white border-t border-slate-200 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <div className="max-w-[1400px] mx-auto px-8 xl:px-24 py-16">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    <div className="col-span-1 md:col-span-4 md:pr-8">
                      <h3 className="text-2xl font-light text-slate-900 mb-6">Learn more about how we think, operate and invest.</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-8">
                        Proprietary technical frameworks and macro analyses driving our capital deployment across India's evolving energy landscape.
                      </p>
                      <Link href="/insights/fdre" className="inline-flex items-center text-sm font-semibold text-[#1A2B45] hover:text-[#00A88F] transition group/link">
                        <span className="mr-3 text-lg font-light transition-transform group-hover/link:translate-x-1">&rarr;</span> Read our insights
                      </Link>
                    </div>
                    <div className="col-span-1 md:col-span-4">
                      <h4 className="text-sm text-slate-500 mb-6">Views</h4>
                      <ul className="space-y-4 border-l border-slate-100 pl-4">
                        <li><Link href="/insights/fdre" className="text-sm text-slate-900 hover:text-[#00A88F] transition font-medium">Insights & Technical Papers</Link></li>
                        <li><span className="text-sm text-slate-600 cursor-default">The 500 GW Macro Thesis</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">FDRE Architecture</span></li>
                      </ul>
                    </div>
                    <div className="col-span-1 md:col-span-4">
                      <h4 className="text-sm text-slate-500 mb-6">Newsroom</h4>
                      <ul className="space-y-4 border-l border-slate-100 pl-4">
                        <li><span className="text-sm text-slate-900 font-bold">Press Releases</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Corporate Announcements</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Media & Assets</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- 4. CAREERS --- */}
            <div className="group h-full flex items-center">
              <Link href="/contact" className="text-sm font-semibold text-slate-700 hover:text-[#1A2B45] tracking-wide transition flex items-center gap-1 h-full cursor-pointer border-b-2 border-transparent group-hover:border-[#1A2B45]">
                Careers
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Link>

              <div className="absolute top-24 left-0 w-full bg-white border-t border-slate-200 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <div className="max-w-[1400px] mx-auto px-8 xl:px-24 py-16">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    <div className="col-span-1 md:col-span-4 md:pr-8">
                      <h3 className="text-2xl font-light text-slate-900 mb-6">Our people and culture underpin everything we do.</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-8">
                        Join the engineers, financiers, and developers rewiring the world's most critical industrial supply chains.
                      </p>
                      <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-[#1A2B45] hover:text-[#00A88F] transition group/link">
                        <span className="mr-3 text-lg font-light transition-transform group-hover/link:translate-x-1">&rarr;</span> View opportunities
                      </Link>
                    </div>
                    <div className="col-span-1 md:col-span-4">
                      <h4 className="text-sm text-slate-500 mb-6">Join Us</h4>
                      <ul className="space-y-4 border-l border-slate-100 pl-4">
                        <li><Link href="/contact" className="text-sm text-slate-900 hover:text-[#00A88F] transition font-medium">Life at Meridian</Link></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Career Opportunities</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Student & Analyst Programs</span></li>
                      </ul>
                    </div>
                    <div className="col-span-1 md:col-span-4">
                      <h4 className="text-sm text-slate-500 mb-6">Focus Areas</h4>
                      <ul className="space-y-4 border-l border-slate-100 pl-4">
                        <li><span className="text-sm text-slate-900 font-bold">Engineering & Grid Tech</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Infrastructure Investment</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Corporate & Operations</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* =========================================
                YOUR ORIGINAL KEYS (5-8)
            ========================================= */}

            {/* --- 5. INSIGHTS (YOUR EXACT ORIGINAL MEGA MENU) --- */}
            <div className="group h-full flex items-center">
              <Link href="/insights/fdre" className="text-sm font-semibold text-slate-700 hover:text-[#1A2B45] tracking-wide transition flex items-center gap-1 h-full cursor-pointer border-b-2 border-transparent group-hover:border-[#1A2B45]">
                Insights
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Link>

              <div className="absolute top-24 left-0 w-full bg-white border-t border-slate-200 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <div className="max-w-[1400px] mx-auto px-8 xl:px-24 py-16">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

                    <div className="col-span-1 md:col-span-4 md:pr-8">
                      <h3 className="text-2xl font-light text-slate-900 mb-6">The Intelligent Energy Platform</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-8">
                        Moving beyond carbon neutral on paper. Meridian Energy integrates utility-scale solar, wind, and storage into a unified platform, delivering physical 24/7 Carbon-Free Energy to accommodate India's 500 GW ambition and meet rigorous corporate Net Zero targets.
                      </p>
                      <Link href="/insights/fdre" className="inline-flex items-center text-sm font-semibold text-[#1A2B45] hover:text-[#00A88F] transition group/link">
                        <span className="mr-3 text-lg font-light transition-transform group-hover/link:translate-x-1">&rarr;</span> Explore our insights
                      </Link>
                    </div>

                    <div className="col-span-1 md:col-span-4">
                      <h4 className="text-sm text-slate-500 mb-6">Operational Frameworks</h4>
                      <ul className="space-y-4 border-l border-slate-100 pl-4">
                        <li><Link href="/insights/fdre" className="text-sm text-slate-900 hover:text-[#00A88F] transition font-medium">Firm Dispatchable RE (FDRE)</Link></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Utility-Scale Solar Energy</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Wind Power Infrastructure</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Battery Energy Storage (BESS)</span></li>
                        
                        <li><span className="text-sm text-slate-900 font-medium mt-2 block">Revenue Structuring</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Captive & Group Captive PPAs</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Open Access (OA) Markets</span></li>
                      </ul>
                    </div>

                    <div className="col-span-1 md:col-span-4">
                      <h4 className="text-sm text-slate-500 mb-6">Strategic Focus</h4>
                      <ul className="space-y-4 border-l border-slate-100 pl-4">
                        <li><span className="text-sm text-slate-900 font-bold">24/7 Carbon-Free Energy</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">UN CFE Compact Alignment</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Time-Matched Procurement</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">Beyond Carbon Neutrality</span></li>
                        <li><span className="text-sm text-slate-600 cursor-default">India's 500 GW 2030 Target</span></li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* --- 6. STRATEGIC CAPITAL (YOUR EXACT ORIGINAL LINK) --- */}
            <Link href="/about" className="text-sm font-semibold text-slate-700 hover:text-[#1A2B45] tracking-wide transition flex items-center h-full">
              Strategic Capital
            </Link>

            {/* --- 7. OUR PORTFOLIO (YOUR EXACT ORIGINAL LINK) --- */}
            <Link href="/portfolio" className="text-sm font-semibold text-slate-700 hover:text-[#1A2B45] tracking-wide transition flex items-center h-full">
              Our Portfolio
            </Link>

            {/* --- 8. CONTACT US (YOUR EXACT ORIGINAL LINK) --- */}
            <Link href="/contact" className="text-sm font-semibold text-slate-700 hover:text-[#1A2B45] tracking-wide transition flex items-center h-full">
              Contact Us
            </Link>
            
            {/* =========================================
                INVESTOR PORTAL (YOUR EXACT STYLING)
            ========================================= */}
            <div className="pl-6 border-l border-slate-300 h-full flex items-center bg-slate-50 px-6">
              <Link href="/portal" className="text-xs font-bold text-[#1A2B45] uppercase tracking-widest hover:text-slate-500 transition flex items-center gap-2">
                INVESTOR PORTAL 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>
          </div>

          {/* 3. MOBILE MENU TOGGLE */}
          <div className="xl:hidden flex items-center">
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

      {/* 4. MOBILE DROPDOWN MENU (ALL 8 KEYS ADDED) */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full max-h-[80vh] overflow-y-auto">
          <div className="px-6 md:px-12 pt-4 pb-8 space-y-4 flex flex-col">
            
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest pt-2">Corporate</p>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-900 hover:text-[#00A88F] py-1">About Us</Link>
            <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-900 hover:text-[#00A88F] py-1">Invest With Us</Link>
            <Link href="/insights/fdre" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-900 hover:text-[#00A88F] py-1">Views & News</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-900 hover:text-[#00A88F] py-1">Careers</Link>

            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-100 mt-2">Platform</p>
            <Link href="/insights/fdre" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-900 hover:text-[#1A2B45] py-1">Insights</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-900 hover:text-[#1A2B45] py-1">Strategic Capital</Link>
            <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-900 hover:text-[#1A2B45] py-1">Our Portfolio</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-900 hover:text-[#1A2B45] py-1">Contact Us</Link>
            
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
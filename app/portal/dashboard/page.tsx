"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("updates");
  const [openResource, setOpenResource] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["updates", "performance", "registry", "calendar", "videos", "resources"];
      let current = "updates";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 180) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (section: string) => {
    return `py-4 transition-colors duration-300 border-b-2 ${
      activeSection === section
        ? "text-[#1A2B45] border-[#1A2B45] font-bold"
        : "text-slate-500 border-transparent hover:text-[#1A2B45]"
    }`;
  };

  const toggleResource = (resource: string) => {
    setOpenResource(openResource === resource ? null : resource);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pt-24 scroll-smooth">
      
      {/* Sticky Sub-Navigation Bar */}
      <div className="sticky top-24 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 overflow-x-auto shadow-sm">
        <div className="max-w-[1200px] mx-auto px-8 flex space-x-8 text-sm font-semibold whitespace-nowrap">
          <Link href="#updates" className={getLinkClass("updates")}>Updates</Link>
          <Link href="#performance" className={getLinkClass("performance")}>Asset performance</Link>
          <Link href="#registry" className={getLinkClass("registry")}>Manage your investment</Link>          
          <Link href="#calendar" className={getLinkClass("calendar")}>Financial calendar</Link>
          <Link href="#videos" className={getLinkClass("videos")}>Latest videos</Link>
          <Link href="#resources" className={getLinkClass("resources")}>Resources</Link>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-8 py-16 space-y-24">

        {/* SECTION: 2026 Operational Briefing */}
        <section id="updates" className="scroll-mt-48 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8">
          <div>
            <h1 className="text-4xl font-light text-slate-900 mb-6">2026 Capital Deployment</h1>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Meridian Energy has initiated capital deployment for its foundational 50 MW Firm Dispatchable Renewable Energy (FDRE) hybrid asset. Anchored near high-voltage MSETCL infrastructure in Maharashtra, this facility executes a diversified revenue strategy across Direct Captive, Group Captive (GC), Merchant, and Open Access (OA) frameworks for tier-one industrial off-takers.
            </p>
            <button className="bg-[#1A2B45] hover:bg-[#005F88] text-white px-8 py-3 text-sm font-medium transition shadow-sm">
              Explore FDRE metrics
            </button>
          </div>
          <div className="relative aspect-video bg-slate-100 group cursor-pointer overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#005F88] to-[#00A88F] group-hover:scale-105 transition duration-700 opacity-90"></div>
             <div className="absolute inset-0 bg-slate-900/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
             </div>
          </div>
        </section>

        {/* SECTION: Asset Performance */}
        <section id="performance" className="scroll-mt-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 border-t border-slate-100">
          <div className="space-y-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>
            <h3 className="text-lg font-medium text-slate-900">FDRE Yield Metrics</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Integrated capacity utilization factors across solar, wind, and BESS architecture.</p>
            <Link href="#" className="inline-flex items-center text-sm text-[#1A2B45] hover:text-[#005F88] font-bold group pt-4">
              <span className="mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span> View reports
            </Link>
          </div>
          <div className="space-y-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <h3 className="text-lg font-medium text-slate-900">Revenue & Equity Portfolios</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Equity distributions, PPA compliance, and tariff savings across Captive, Merchant, and OA pipelines.</p>
            <Link href="#" className="inline-flex items-center text-sm text-[#1A2B45] hover:text-[#005F88] font-bold group pt-4">
              <span className="mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span> Access data
            </Link>
          </div>
          <div className="space-y-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" /></svg>
            <h3 className="text-lg font-medium text-slate-900">Land & Lease Frameworks</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Strategic land acquisition and long-term lease models across Pune corridors.</p>
            <Link href="#" className="inline-flex items-center text-sm text-[#1A2B45] hover:text-[#005F88] font-bold group pt-4">
              <span className="mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span> Read strategy
            </Link>
          </div>
          <div className="space-y-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
            <h3 className="text-lg font-medium text-slate-900">MSETCL Grid Integration</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Evacuation analytics for 400kV and 220kV substation connectivity and grid stabilization.</p>
            <Link href="#" className="inline-flex items-center text-sm text-[#1A2B45] hover:text-[#005F88] font-bold group pt-4">
              <span className="mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span> View analytics
            </Link>
          </div>
        </section>

        {/* SECTION: Manage Your Shares / Partner Registry */}
        <section id="registry" className="scroll-mt-48 grid grid-cols-1 lg:grid-cols-3 gap-16 pt-16 border-t border-slate-100">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-light text-slate-900 mb-6">Manage your energy portfolio</h2>
            <p className="text-slate-900 font-medium text-sm mb-4">Access your equity allotments, distribution schedules, and PPA compliance documents across our diverse asset base.</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">As a strategic partner in a Meridian Energy asset (Captive, GC, or OA), you have direct control over your administrative preferences:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
              <li>Manage electronic delivery elections for statutory energy offsets and hybrid generation reports.</li>
              <li>Review live dashboards mapping your facility's energy draw against Meridian's centralized dispatch.</li>
              <li>Access annual financial reports, board resolutions, and capital calls for subsequent expansion phases.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-8 border border-slate-100 h-fit">
            <h2 className="text-2xl font-light text-slate-900 mb-6">Contact the Partner Registry</h2>
            <div className="space-y-2 text-sm text-slate-600 mb-8">
              <p>Pune Operations: +91 9676 428 015</p>
              <p>Equity Enquiries: investors@meridianenergy.in</p>
            </div>
            <button className="w-full bg-[#1A2B45] hover:bg-[#005F88] text-white py-3 text-sm font-medium transition shadow-sm">
              Login to Partner Centre
            </button>
          </div>
        </section>

        {/* SECTION: Financial Calendar */}
        <section id="calendar" className="scroll-mt-48 pt-16 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-light text-slate-900">Deployment calendar</h2>
          </div>
          <div className="lg:col-span-2">
             <div className="flex border-b border-slate-300 pb-3 mb-3">
               <div className="w-1/2 font-semibold text-slate-900 text-sm">Milestone</div>
               <div className="w-1/2 font-semibold text-slate-900 text-sm">Target Date</div>
             </div>
             <div className="flex border-b border-slate-200 py-4 hover:bg-slate-50 transition px-2">
               <div className="w-1/2 text-sm text-slate-600">Q1 Multi-Asset Equity Allocation</div>
               <div className="w-1/2 text-sm text-slate-900">Monday, 16 March 2026</div>
             </div>
             <div className="flex border-b border-slate-200 py-4 hover:bg-slate-50 transition px-2">
               <div className="w-1/2 text-sm text-slate-600">Substation Connectivity Approval (MSETCL)</div>
               <div className="w-1/2 text-sm text-slate-900">Friday, 10 April 2026</div>
             </div>
             <div className="flex border-b border-slate-200 py-4 hover:bg-slate-50 transition px-2">
               <div className="w-1/2 text-sm text-slate-600">FY26 Capital Expenditure Briefing</div>
               <div className="w-1/2 text-sm text-slate-900">Tuesday, 12 May 2026</div>
             </div>
          </div>
        </section>

        {/* SECTION: Latest Videos */}
        <section id="videos" className="scroll-mt-48 pt-16 border-t border-slate-100">
          <h2 className="text-3xl font-light text-slate-900 mb-10">Asset intelligence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="relative aspect-video bg-gradient-to-br from-[#1A2B45] to-slate-800 group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition">
                    <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <h3 className="text-lg text-slate-900">FDRE Architecture: Integrating Solar, Wind & BESS</h3>
              <p className="text-xs text-slate-400">February 2026 Briefing</p>
            </div>
            
            <div className="space-y-4">
              <div className="relative aspect-video bg-gradient-to-br from-[#005F88] to-[#00A88F] group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition">
                    <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <h3 className="text-lg text-slate-900">Revenue Diversification: GC, Merchant & OA Frameworks</h3>
              <p className="text-xs text-slate-400">January 2026 Masterclass</p>
            </div>
          </div>
        </section>

      </div>

      {/* SECTION: Dark Resources Footer */}
      <section id="resources" className="scroll-mt-48 bg-black text-white pt-24 pb-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light mb-12">Resources</h2>
          
          <div className="space-y-0 border-t border-slate-800">
            
            {/* 1. Investor Contacts */}
            <div className="border-b border-slate-800">
              <button 
                onClick={() => toggleResource('contacts')}
                className="w-full flex justify-between items-center py-6 hover:bg-white/5 transition px-4 group outline-none"
              >
                <span className="text-xl font-light">Investor contacts</span>
                <span className={`text-2xl transition-transform duration-300 ${openResource === 'contacts' ? 'rotate-90 text-[#00A88F]' : 'group-hover:translate-x-2'}`}>
                  &rarr;
                </span>
              </button>
              {openResource === 'contacts' && (
                <div className="px-4 pb-8 pt-2 text-slate-400 text-sm space-y-6 animate-fade-in">
                  <div>
                    <strong className="text-white block mb-1">Global Investor Relations</strong>
                    <p>investors@meridianenergy.in | +91 9010 633 445</p>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Partner Registry Services</strong>
                    <p>investors@meridianenergy.in | +91 9010 433 445</p>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Regulatory Disclosures (RESTRICTED ACCESS) */}
            <div className="border-b border-slate-800">
              <button 
                onClick={() => toggleResource('regulatory')}
                className="w-full flex justify-between items-center py-6 hover:bg-white/5 transition px-4 group outline-none"
              >
                <span className="text-xl font-light">Regulatory disclosures</span>
                <span className={`text-2xl transition-transform duration-300 ${openResource === 'regulatory' ? 'rotate-90 text-[#00A88F]' : 'group-hover:translate-x-2'}`}>
                  &rarr;
                </span>
              </button>
              {openResource === 'regulatory' && (
                <div className="px-4 pb-8 pt-2 text-slate-400 text-sm space-y-4 animate-fade-in">
                  <p className="mb-4 text-slate-300">Access to statutory filings and compliance frameworks is restricted to authorized partners.</p>
                  
                  <a href="mailto:investors@meridianenergy.in?subject=Request Access: SEBI Compliance Certificate" className="block hover:text-white transition group flex items-center">
                    <span className="mr-2">↓</span> SEBI Compliance Certificate (Q4 2025) <span className="text-xs ml-3 border border-[#00A88F] text-[#00A88F] group-hover:bg-[#00A88F] group-hover:text-white transition px-2 py-1 rounded">REQUEST ACCESS</span>
                  </a>
                  
                  <a href="mailto:investors@meridianenergy.in?subject=Request Access: ESG Framework" className="block hover:text-white transition group flex items-center">
                    <span className="mr-2">↓</span> Environmental & Social Governance (ESG) Framework <span className="text-xs ml-3 border border-[#00A88F] text-[#00A88F] group-hover:bg-[#00A88F] group-hover:text-white transition px-2 py-1 rounded">REQUEST ACCESS</span>
                  </a>
                  
                  <a href="mailto:investors@meridianenergy.in?subject=Request Access: MSETCL Grid Approval" className="block hover:text-white transition group flex items-center">
                    <span className="mr-2">↓</span> Grid Connection Approval - Maharashtra MSETCL <span className="text-xs ml-3 border border-[#00A88F] text-[#00A88F] group-hover:bg-[#00A88F] group-hover:text-white transition px-2 py-1 rounded">REQUEST ACCESS</span>
                  </a>
                </div>
              )}
            </div>

            {/* 3. Capital Instruments */}
            <div className="border-b border-slate-800">
              <button 
                onClick={() => toggleResource('capital')}
                className="w-full flex justify-between items-center py-6 hover:bg-white/5 transition px-4 group outline-none"
              >
                <span className="text-xl font-light">Capital instruments</span>
                <span className={`text-2xl transition-transform duration-300 ${openResource === 'capital' ? 'rotate-90 text-[#00A88F]' : 'group-hover:translate-x-2'}`}>
                  &rarr;
                </span>
              </button>
              {openResource === 'capital' && (
                <div className="px-4 pb-8 pt-2 text-slate-400 text-sm space-y-4 animate-fade-in">
                  <p className="mb-4 text-slate-300">Overview of active debt and equity structures funding our pipeline.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 border border-slate-800">
                      <strong className="text-white block">Senior Secured Green Bonds</strong>
                      <p className="mt-1">Maturity: 2029 | Yield Target: 7.2%</p>
                    </div>
                    <div className="p-4 bg-white/5 border border-slate-800">
                      <strong className="text-white block">Series A Preferred Equity</strong>
                      <p className="mt-1">Private Placement - Captive & OA Partners</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Fund Filings (RESTRICTED ACCESS) */}
            <div className="border-b border-slate-800">
              <button 
                onClick={() => toggleResource('filings')}
                className="w-full flex justify-between items-center py-6 hover:bg-white/5 transition px-4 group outline-none"
              >
                <span className="text-xl font-light">Fund filings</span>
                <span className={`text-2xl transition-transform duration-300 ${openResource === 'filings' ? 'rotate-90 text-[#00A88F]' : 'group-hover:translate-x-2'}`}>
                  &rarr;
                </span>
              </button>
              {openResource === 'filings' && (
                <div className="px-4 pb-8 pt-2 text-slate-400 text-sm space-y-4 animate-fade-in">
                  
                  <a href="mailto:investors@meridianenergy.in?subject=Request Access: Articles of Association" className="block hover:text-white transition group flex items-center">
                    <span className="mr-2">↓</span> Articles of Association (Amended Jan 2026) <span className="text-xs ml-3 border border-[#00A88F] text-[#00A88F] group-hover:bg-[#00A88F] group-hover:text-white transition px-2 py-1 rounded">REQUEST ACCESS</span>
                  </a>
                  
                  <a href="mailto:investors@meridianenergy.in?subject=Request Access: FY25 Financials" className="block hover:text-white transition group flex items-center">
                    <span className="mr-2">↓</span> FY25 Annual Financial Statements <span className="text-xs ml-3 border border-[#00A88F] text-[#00A88F] group-hover:bg-[#00A88F] group-hover:text-white transition px-2 py-1 rounded">REQUEST ACCESS</span>
                  </a>
                  
                </div>
              )}
            </div>

          </div>

          <div className="mt-20 text-xs text-slate-500 leading-relaxed max-w-4xl grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">Disclaimer</div>
            <div className="md:col-span-3">
              This information is a general description of Meridian Energy Private Limited only. Before acting on any information, you should consider the appropriateness of it having regard to your particular objectives, financial situation and needs and seek advice. No information set out above constitutes advice, an advertisement, an invitation, a confirmation, an offer or a solicitation, to buy or sell any security or other financial, credit or lending product or to engage in any investment activity. Past performance of any product described on this site is not a reliable indication of future performance.
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
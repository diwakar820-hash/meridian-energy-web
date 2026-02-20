"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function InvestorPortalPage() {
  // 1. State for the scroll-spy navigation
  const [activeSection, setActiveSection] = useState("updates");
  
  // 2. NEW: State to manage which Resource accordion is currently open
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

  // NEW: Helper function to toggle the resource dropdowns
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
            <h1 className="text-4xl font-light text-slate-900 mb-6">2026 Operational Briefing</h1>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Meridian Energy held its 2026 Operational Briefing and third quarter trading update on Tuesday, 10 February 2026, targeting our 25-50 MW Maharashtra Hybrid development.
            </p>
            <button className="bg-[#1A2B45] hover:bg-[#005F88] text-white px-8 py-3 text-sm font-medium transition shadow-sm">
              Explore key highlights
            </button>
          </div>
          <div className="relative aspect-video bg-slate-100 group cursor-pointer overflow-hidden">
             <Image src="/facility.jpg" alt="Operational Briefing" fill className="object-cover group-hover:scale-105 transition duration-700" />
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
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
            <h3 className="text-lg font-medium text-slate-900">Results and presentations</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Financial results, reporting and presentations.</p>
            <Link href="#" className="inline-flex items-center text-sm text-[#1A2B45] hover:text-[#005F88] font-bold group pt-4">
              <span className="mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span> Learn more
            </Link>
          </div>
          <div className="space-y-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" /></svg>
            <h3 className="text-lg font-medium text-slate-900">Reports</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Annual and half-year financial reports for the fund.</p>
            <Link href="#" className="inline-flex items-center text-sm text-[#1A2B45] hover:text-[#005F88] font-bold group pt-4">
              <span className="mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span> Learn more
            </Link>
          </div>
          <div className="space-y-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>
            <h3 className="text-lg font-medium text-slate-900">ESG Disclosures</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Dividend payments, history and structural frameworks.</p>
            <Link href="#" className="inline-flex items-center text-sm text-[#1A2B45] hover:text-[#005F88] font-bold group pt-4">
              <span className="mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span> Learn more
            </Link>
          </div>
          <div className="space-y-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <h3 className="text-lg font-medium text-slate-900">Debt investors</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Direct debt issuance and funding strategy, green financing and credit ratings.</p>
            <Link href="#" className="inline-flex items-center text-sm text-[#1A2B45] hover:text-[#005F88] font-bold group pt-4">
              <span className="mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span> Learn more
            </Link>
          </div>
        </section>

        {/* SECTION: Manage Your Shares / Partner Registry */}
        <section id="registry" className="scroll-mt-48 grid grid-cols-1 lg:grid-cols-3 gap-16 pt-16 border-t border-slate-100">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-light text-slate-900 mb-6">Manage your investment</h2>
            <p className="text-slate-900 font-medium text-sm mb-4">Manage your current holdings, distribution information and document receipt preferences.</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">As a partner, you have the following rights in relation to receiving documents:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
              <li>You can elect to be sent certain documents in physical form or in electronic form, including documents relating to a general meeting of partners, a partners' resolution, the annual report or documents specified in the regulations.</li>
              <li>A standing election, to be applied generally to all documents, or a specified class of documents.</li>
              <li>You can elect not to be sent an annual report or any document prescribed in the regulations.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-8 border border-slate-100 h-fit">
            <h2 className="text-2xl font-light text-slate-900 mb-6">Contact our Partner Registry</h2>
            <div className="space-y-2 text-sm text-slate-600 mb-8">
              <p>India Operations: +91 20 1234 5678</p>
              <p>Global Enquiries: +91 20 8765 4321</p>
            </div>
            <button className="w-full bg-[#1A2B45] hover:bg-[#005F88] text-white py-3 text-sm font-medium transition shadow-sm">
              Login to Partner Centre
            </button>
          </div>
        </section>

        {/* SECTION: Financial Calendar */}
        <section id="calendar" className="scroll-mt-48 pt-16 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-light text-slate-900">Financial calendar</h2>
          </div>
          <div className="lg:col-span-2">
             <div className="flex border-b border-slate-300 pb-3 mb-3">
               <div className="w-1/2 font-semibold text-slate-900 text-sm">Event</div>
               <div className="w-1/2 font-semibold text-slate-900 text-sm">Date</div>
             </div>
             <div className="flex border-b border-slate-200 py-4 hover:bg-slate-50 transition px-2">
               <div className="w-1/2 text-sm text-slate-600">Q1 Asset Yield Payment Date</div>
               <div className="w-1/2 text-sm text-slate-900">Wednesday, 17 December 2025</div>
             </div>
             <div className="flex border-b border-slate-200 py-4 hover:bg-slate-50 transition px-2">
               <div className="w-1/2 text-sm text-slate-600">Meridian Group 2026 Operational Briefing</div>
               <div className="w-1/2 text-sm text-slate-900">Tuesday, 10 February 2026</div>
             </div>
             <div className="flex border-b border-slate-200 py-4 hover:bg-slate-50 transition px-2">
               <div className="w-1/2 text-sm text-slate-600">2026 Full Year Result announcement</div>
               <div className="w-1/2 text-sm text-slate-900">Friday, 8 May 2026</div>
             </div>
          </div>
        </section>

        {/* SECTION: Latest Videos */}
        <section id="videos" className="scroll-mt-48 pt-16 border-t border-slate-100">
          <h2 className="text-3xl font-light text-slate-900 mb-10">Latest videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="relative aspect-video bg-slate-200 group cursor-pointer overflow-hidden">
                <Image src="/facility.jpg" alt="Video thumbnail" fill className="object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition">
                    <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <h3 className="text-lg text-slate-900">2026 half-year result - MD Overview</h3>
              <p className="text-xs text-slate-400">07 November 2025</p>
            </div>
            
            <div className="space-y-4">
              <div className="relative aspect-video bg-slate-200 group cursor-pointer overflow-hidden">
                <Image src="/facility.jpg" alt="Video thumbnail" fill className="object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition">
                    <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <h3 className="text-lg text-slate-900">Driving innovation in hybrid assets</h3>
              <p className="text-xs text-slate-400">24 July 2025</p>
            </div>
          </div>
        </section>

      </div>

      {/* SECTION: Dark Resources Footer (UPGRADED WITH FUNCTIONAL ACCORDIONS) */}
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
                    <p>ir@meridianenergy.in | +91 20 8765 4321</p>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Partner Registry Services</strong>
                    <p>registry@meridianenergy.in | +91 20 1234 5678</p>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Regulatory Disclosures */}
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
                  <p className="mb-4 text-slate-300">Access our latest statutory filings and compliance frameworks.</p>
                  <Link href="#" className="block hover:text-white transition">↓ SEBI Compliance Certificate (Q4 2025) <span className="text-xs ml-2 border border-slate-700 px-2 py-1 rounded">PDF 2.1 MB</span></Link>
                  <Link href="#" className="block hover:text-white transition">↓ Environmental & Social Governance (ESG) Framework <span className="text-xs ml-2 border border-slate-700 px-2 py-1 rounded">PDF 5.4 MB</span></Link>
                  <Link href="#" className="block hover:text-white transition">↓ Grid Connection Approval - Maharashtra MSETCL <span className="text-xs ml-2 border border-slate-700 px-2 py-1 rounded">PDF 1.2 MB</span></Link>
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
                      <p className="mt-1">Private Placement - Group Captive Partners</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Fund Filings */}
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
                  <Link href="#" className="block hover:text-white transition">↓ Articles of Association (Amended Jan 2026) <span className="text-xs ml-2 border border-slate-700 px-2 py-1 rounded">PDF 8.1 MB</span></Link>
                  <Link href="#" className="block hover:text-white transition">↓ FY25 Annual Financial Statements <span className="text-xs ml-2 border border-slate-700 px-2 py-1 rounded">PDF 4.4 MB</span></Link>
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
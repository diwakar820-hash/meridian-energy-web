"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pt-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-[#1A2B45] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2B45] via-[#005F88]/20 to-[#1A2B45] opacity-90"></div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8 md:px-12 py-24 md:py-32">
          <p className="text-[#00A88F] font-bold tracking-widest uppercase text-xs mb-6">
            Meridian Energy Private Limited
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 font-meridian">
            Contact & Investor Relations
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-light">
            Direct channels for institutional capital partners, commercial off-takers, and media inquiries.
          </p>
        </div>
      </section>

      {/* 2. CONTACT LAYOUT */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Corporate Info */}
          <div className="lg:col-span-5 space-y-12">
            
            <div>
              <h2 className="text-2xl font-light text-[#1A2B45] mb-6">Corporate Headquarters</h2>
              <div className="w-12 h-1 bg-[#00A88F] mb-8"></div>
              <p className="text-slate-600 leading-relaxed font-medium mb-1">Meridian Energy Private Limited</p>
              <p className="text-slate-500 leading-relaxed">
                A subsidiary of Meridian Enterprises Pvt. Ltd.<br />
                Pune, Maharashtra<br />
                India
              </p>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-4">Direct Lines</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-500 uppercase mb-1">Executive Office</p>
                  <a href="tel:+919676428015" className="text-lg font-medium text-[#1A2B45] hover:text-[#00A88F] transition">
                    +91 9010 633 445
                  </a>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase mb-1">Investor Relations</p>
                  <a href="mailto:investors@meridianenergy.in" className="text-lg font-medium text-[#1A2B45] hover:text-[#00A88F] transition">
                    investors@meridianenergy.in
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-4">Secure Data Room</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Limited Partners and cleared corporate off-takers can access project financials, PPA structuring documents, and technical yields via our secure portal.
              </p>
              <Link href="/portal" className="inline-flex items-center text-[#1A2B45] hover:text-[#00A88F] font-bold text-sm transition group">
                <span className="border-b border-[#1A2B45] group-hover:border-[#00A88F] pb-1 mr-2">Access Investor Portal</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Institutional Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 p-8 md:p-12">
              <h3 className="text-xl font-light text-[#1A2B45] mb-8">Submit an Inquiry</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">First Name</label>
                    <input type="text" className="w-full bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#00A88F] focus:ring-1 focus:ring-[#00A88F] transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Last Name</label>
                    <input type="text" className="w-full bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#00A88F] focus:ring-1 focus:ring-[#00A88F] transition" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Organization / Fund Name</label>
                  <input type="text" className="w-full bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#00A88F] focus:ring-1 focus:ring-[#00A88F] transition" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Corporate Email</label>
                    <input type="email" className="w-full bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#00A88F] focus:ring-1 focus:ring-[#00A88F] transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Inquiry Type</label>
                    <select className="w-full bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#00A88F] focus:ring-1 focus:ring-[#00A88F] transition appearance-none">
                      <option>Corporate Off-Take (PPA)</option>
                      <option>Project Finance / Equity</option>
                      <option>Land & Infrastructure</option>
                      <option>Media & PR</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Message</label>
                  <textarea rows={5} className="w-full bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#00A88F] focus:ring-1 focus:ring-[#00A88F] transition resize-none"></textarea>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-[#1A2B45] hover:bg-[#00A88F] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition duration-300">
                    Secure Submission
                  </button>
                </div>
                
                <p className="text-xs text-slate-400 text-center mt-4">
                  All communications are secured and routed directly to Meridian Energy's executive team.
                </p>

              </form>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
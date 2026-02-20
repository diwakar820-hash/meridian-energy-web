import Link from "next/link";
import Image from "next/image";

export default function InvestorPortalPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pt-24">
      
      {/* Sub-Navigation Bar */}
      <div className="border-b border-slate-200 overflow-x-auto">
        <div className="max-w-[1200px] mx-auto px-8 flex space-x-8 text-sm font-semibold text-slate-500 whitespace-nowrap">
          <Link href="#updates" className="text-blue-900 border-b-2 border-blue-900 py-4">Updates</Link>
          <Link href="#registry" className="hover:text-blue-900 py-4 transition">Manage your investment</Link>
          <Link href="#performance" className="hover:text-blue-900 py-4 transition">Asset performance</Link>
          <Link href="#calendar" className="hover:text-blue-900 py-4 transition">Financial calendar</Link>
          <Link href="#videos" className="hover:text-blue-900 py-4 transition">Latest videos</Link>
          <Link href="#resources" className="hover:text-blue-900 py-4 transition">Resources</Link>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-8 py-16 space-y-24">

        {/* SECTION: 2026 Operational Briefing */}
        <section id="updates" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-light text-slate-900 mb-6">2026 Operational Briefing</h1>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Meridian Energy held its 2026 Operational Briefing and third quarter trading update on Tuesday, 10 February 2026, targeting our 50 MW Maharashtra Hybrid development.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-sm font-medium transition shadow-sm">
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

        {/* SECTION: 4-Column Icon Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-12 border-t border-slate-100">
          {/* Results */}
          <div className="space-y-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
            <h3 className="text-lg font-medium text-slate-900">Results and presentations</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Financial results, reporting and presentations.</p>
            <Link href="#" className="inline-flex items-center text-sm text-slate-900 hover:text-blue-600 font-medium group pt-4">
              <span className="mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span> Learn more
            </Link>
          </div>
          {/* Reports */}
          <div className="space-y-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" /></svg>
            <h3 className="text-lg font-medium text-slate-900">Reports</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Annual and half-year financial reports for the fund.</p>
            <Link href="#" className="inline-flex items-center text-sm text-slate-900 hover:text-blue-600 font-medium group pt-4">
              <span className="mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span> Learn more
            </Link>
          </div>
          {/* ESG */}
          <div className="space-y-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>
            <h3 className="text-lg font-medium text-slate-900">ESG Disclosures</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Dividend payments, history and structural frameworks.</p>
            <Link href="#" className="inline-flex items-center text-sm text-slate-900 hover:text-blue-600 font-medium group pt-4">
              <span className="mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span> Learn more
            </Link>
          </div>
          {/* Debt Investors */}
          <div className="space-y-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <h3 className="text-lg font-medium text-slate-900">Debt investors</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Direct debt issuance and funding strategy, green financing and credit ratings.</p>
            <Link href="#" className="inline-flex items-center text-sm text-slate-900 hover:text-blue-600 font-medium group pt-4">
              <span className="mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span> Learn more
            </Link>
          </div>
        </section>

        {/* SECTION: Manage Your Shares / Partner Registry */}
        <section id="registry" className="grid grid-cols-1 lg:grid-cols-3 gap-16 pt-12 border-t border-slate-100">
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
              <p>India Operations: +91 90 1063 3445</p>
              <p>Global Enquiries: +91 90 1043 3445</p>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-sm font-medium transition shadow-sm">
              Login to Partner Centre
            </button>
          </div>
        </section>

        {/* SECTION: Financial Calendar */}
        <section id="calendar" className="pt-12 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-3 gap-16">
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
        <section id="videos" className="pt-12 border-t border-slate-100">
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

      {/* SECTION: Dark Resources Footer */}
      <section id="resources" className="bg-black text-white pt-24 pb-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light mb-12">Resources</h2>
          
          <div className="space-y-0 border-t border-slate-800">
            <Link href="#" className="flex justify-between items-center py-6 border-b border-slate-800 hover:bg-white/5 transition px-4 group">
              <span className="text-xl font-light">Investor contacts</span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform">&rarr;</span>
            </Link>
            <Link href="#" className="flex justify-between items-center py-6 border-b border-slate-800 hover:bg-white/5 transition px-4 group">
              <span className="text-xl font-light">Regulatory disclosures</span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform">&rarr;</span>
            </Link>
            <Link href="#" className="flex justify-between items-center py-6 border-b border-slate-800 hover:bg-white/5 transition px-4 group">
              <span className="text-xl font-light">Capital instruments</span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform">&rarr;</span>
            </Link>
            <Link href="#" className="flex justify-between items-center py-6 border-b border-slate-800 hover:bg-white/5 transition px-4 group">
              <span className="text-xl font-light">Fund filings</span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform">&rarr;</span>
            </Link>
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
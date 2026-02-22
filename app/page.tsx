import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* 1. MACQUARIE-STYLE HERO SLIDER */}
      <section className="relative w-full min-h-screen flex items-end pb-24 sm:pb-32 bg-[#1A2B45] text-white overflow-hidden pt-24">
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover object-top z-0 opacity-60"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B45] via-[#1A2B45]/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B45]/80 to-transparent z-10"></div>

        <div className="relative z-20 max-w-[1400px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-24 flex flex-col justify-end h-full">
          
          {/* RESPONSIVE FIX: Changed bottom margin (mb-24 lg:mb-12) to push buttons up on tablets */}
          <div className="max-w-3xl mb-24 lg:mb-12">
            <p className="text-white/70 font-bold tracking-widest uppercase text-xs mb-4">
              2026 Operational Briefing
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] mb-8 font-meridian">
              Institutionalizing the energy transition through strategic renewable assets.
            </h1>
            <div className="flex flex-wrap gap-4">
              <Link href="/insights" className="bg-[#00A88F] hover:bg-white hover:text-[#1A2B45] text-white px-8 py-4 text-sm font-medium transition duration-300">
                Read the insight
              </Link>
              <Link href="/portal" className="bg-transparent border border-white hover:bg-white/10 text-white px-8 py-4 text-sm font-medium transition duration-300">
                Visit our investor centre
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 left-6 sm:left-8 md:left-12 lg:left-24 flex items-center space-x-6 text-xs font-bold tracking-widest uppercase text-white/50">
            <button className="hover:text-white transition">Previous</button>
            <button className="text-white">Next</button>
            <span className="w-px h-4 bg-white/30"></span>
            <span className="text-white">01 / 03</span>
            <span className="hidden md:inline ml-4 text-white/70 truncate max-w-xs">Critical infrastructure's new frontier</span>
          </div>
        </div>
      </section>

      {/* 2. HIGH-CONTRAST MACRO STATS BAR */}
      <section className="w-full bg-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="md:w-1/3">
              <h2 className="text-2xl md:text-3xl font-light text-[#1A2B45] leading-snug">
                We engineer physical decarbonization frameworks for tier-one off-takers.
              </h2>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              <div className="border-l-2 border-[#00A88F] pl-6">
                <p className="text-4xl md:text-5xl font-light text-[#1A2B45] mb-2">50 <span className="text-xl">MW</span></p>
                <p className="text-sm text-slate-500 font-medium">Foundational FDRE Pilot</p>
              </div>
              <div className="border-l-2 border-[#00A88F] pl-6">
                <p className="text-4xl md:text-5xl font-light text-[#1A2B45] mb-2">10 <span className="text-xl">GW</span></p>
                <p className="text-sm text-slate-500 font-medium">National Pipeline Vision</p>
              </div>
              <div className="border-l-2 border-[#00A88F] pl-6 col-span-2 md:col-span-1">
                <p className="text-4xl md:text-5xl font-light text-[#1A2B45] mb-2">24/7</p>
                <p className="text-sm text-slate-500 font-medium">Carbon-Free Energy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES / TRACK RECORD */}
      <section className="w-full bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A2B45] leading-tight">
                Meridian Energy in India — scaling infrastructure for the transition.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                For commercial off-takers, the transition to a zero-carbon economy is no longer a technological challenge; it is a capital deployment challenge. Meridian bridges the gap between institutional capital and physical infrastructure.
              </p>
              <Link href="/about" className="inline-flex items-center text-[#1A2B45] hover:text-[#00A88F] font-bold text-sm transition group">
                <span className="border-b border-[#1A2B45] group-hover:border-[#00A88F] pb-1 mr-2">Learn more</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>

            <div className="bg-slate-50 p-8 md:p-12 space-y-8 border border-slate-100 shadow-sm">
              <div>
                <h4 className="text-[#1A2B45] font-semibold text-lg mb-2">Executing the 500 GW Mandate</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Meridian Energy is currently mapping contiguous land parcels and high-voltage evacuation nodes across India's highest-yield corridors.</p>
              </div>
              <div className="w-full h-px bg-slate-200"></div>
              <div>
                <h4 className="text-[#1A2B45] font-semibold text-lg mb-2">Pune Foundational Asset</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Anchoring our growth with a 50 MW hybrid (Solar + Wind + BESS) operational blueprint in Maharashtra.</p>
              </div>
              <div className="w-full h-px bg-slate-200"></div>
              <div>
                <h4 className="text-[#1A2B45] font-semibold text-lg mb-2">Multi-Tiered Revenue Structuring</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Securing core growth capital through Group Captive consortiums and third-party Open Access agreements.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OFFSET IMAGE CARD */}
      <section className="w-full bg-[#f8f9fa] py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
          <div className="relative">
            <div className="w-full lg:w-3/4 h-[400px] md:h-[500px] bg-slate-800 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#005F88] to-[#1A2B45] opacity-80 group-hover:scale-105 transition duration-700"></div>
               <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 w-full lg:w-1/2 bg-white p-10 md:p-16 shadow-2xl mt-[-50px] lg:mt-0 z-20">
              <h3 className="text-2xl md:text-4xl font-light text-[#1A2B45] mb-6 leading-tight">
                All eyes turn to 'the India decade'
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Following a decade of macro-economic reform and rising industrial demand, tier-one manufacturers are seeking massive, borderless, multi-state Open Access decarbonization solutions. We are structuring the capital to deliver it.
              </p>
              <Link href="/insights/fdre" className="inline-flex items-center text-white bg-[#1A2B45] hover:bg-[#00A88F] px-8 py-4 text-sm font-medium transition duration-300">
                Read the roadmap
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXECUTIVE LEADERSHIP QUOTE */}
      <section className="w-full bg-white py-24 md:py-32 border-t border-slate-100">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 md:px-12 text-center">
          <svg className="w-12 h-12 text-[#00A88F]/20 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1A2B45] leading-relaxed mb-12">
            "We empower industrial partners to bypass annualized carbon accounting and achieve absolute, physical grid decarbonization through Firm Dispatchable Renewable architectures."
          </h2>
          <div>
            <p className="font-semibold text-[#1A2B45] text-lg">Diwakar Parvathaneni</p>
            <p className="text-sm text-slate-500 mt-1 uppercase tracking-widest font-bold">Founder & Chief Executive Officer</p>
          </div>
        </div>
      </section>

    </main>
  );
}
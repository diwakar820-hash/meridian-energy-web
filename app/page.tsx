import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* 1. HERO SECTION (Fully Responsive WITH VIDEO) */}
      <section className="relative w-full min-h-[100vh] flex items-center bg-[#1A2B45] text-white overflow-hidden pt-24 pb-16">
        
        {/* --- RESTORED VIDEO BACKGROUND --- */}
        {/* Make sure your video file is inside the 'public' folder and named exactly like the src below */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
        >
          <source src="/hero.mp4" type="video/mp4" />
          {/* If your video has a different name, change "/hero.mp4" to match it! */}
        </video>

        {/* Background Gradients & Overlay (Keeps text readable over the video) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B45] via-[#1A2B45]/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B45] via-transparent to-[#1A2B45]/40 z-10"></div>
        
        <div className="relative z-20 max-w-[1400px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
          <div className="max-w-4xl">
            <p className="text-[#00A88F] font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-[#00A88F]"></span>
              Meridian Energy Private Limited
            </p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] md:leading-[1.1] lg:leading-[1.05] mb-6 md:mb-8 font-meridian">
              Institutionalizing the energy transition <br className="hidden lg:block" />
              <span className="text-white">through strategic renewable assets.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed md:leading-relaxed font-light mb-8 md:mb-10">
              Building a multi-gigawatt clean energy platform. From our 50 MW foundational hybrid pilot in Maharashtra, we are institutionalizing the operational frameworks required to scale 500 MW of high-yield capacity by 2029, driving toward a 10 GW vision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link href="/portfolio" className="inline-flex justify-center items-center bg-white text-[#1A2B45] hover:bg-[#00A88F] hover:text-white px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-bold tracking-widest uppercase transition duration-300 shadow-xl">
                Explore Our Roadmap
              </Link>
              <Link href="/insights" className="inline-flex justify-center items-center bg-transparent border border-white/30 text-white hover:bg-white/10 px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-bold tracking-widest uppercase transition duration-300">
                Data Room &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE THESIS SECTION */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
                The architecture of true Net Zero compliance.
              </h2>
              <div className="w-12 h-1 bg-[#00A88F]"></div>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                Annualized carbon accounting is fundamentally flawed. To accommodate India's aggressive 500 GW renewable generation target, industrial off-takers must move beyond paper offsets. 
              </p>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                Meridian Energy engineers Firm Dispatchable Renewable Energy (FDRE) frameworks. By co-locating utility-scale solar arrays with complementary wind infrastructure and anchoring them with Battery Energy Storage Systems (BESS), we synthesize a flat, predictable generation curve for tier-one commercial clients.
              </p>
              <Link href="/about" className="inline-block text-[#1A2B45] hover:text-[#00A88F] font-bold text-sm tracking-widest uppercase transition mt-4 border-b-2 border-transparent hover:border-[#00A88F] pb-1">
                Read our Corporate Strategy &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-slate-50 p-6 md:p-8 border-t-4 border-[#1A2B45] shadow-sm">
                <svg className="w-8 h-8 text-[#00A88F] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <h3 className="text-lg md:text-xl font-medium text-slate-900 mb-2">24/7 CFE</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Time-matched physical energy procurement aligned with UN Compact standards.</p>
              </div>
              <div className="bg-slate-50 p-6 md:p-8 border-t-4 border-[#005F88] shadow-sm sm:mt-12">
                <svg className="w-8 h-8 text-[#00A88F] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                <h3 className="text-lg md:text-xl font-medium text-slate-900 mb-2">Group Captive</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Special Purpose Vehicles (SPVs) unlocking 30-40% savings on state DISCOM tariffs.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MACRO STATS SECTION */}
      <section className="w-full bg-[#1A2B45] text-white py-16 md:py-24 border-y border-slate-800">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-700">
            
            <div className="text-center md:text-left md:pr-12 pt-8 md:pt-0">
              <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-[#00A88F] mb-4">Target Mandate</p>
              <h4 className="text-5xl md:text-6xl font-light mb-2">500<span className="text-2xl md:text-3xl ml-1">GW</span></h4>
              <p className="text-sm md:text-base text-slate-400">India's renewable energy requirement by 2030.</p>
            </div>

            <div className="text-center md:text-left md:px-12 pt-8 md:pt-0">
              <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-[#00A88F] mb-4">Pipeline Execution</p>
              <h4 className="text-5xl md:text-6xl font-light mb-2">10<span className="text-2xl md:text-3xl ml-1">GW</span></h4>
              <p className="text-sm md:text-base text-slate-400">Meridian Energy's pan-India asset generation vision.</p>
            </div>

            <div className="text-center md:text-left md:pl-12 pt-8 md:pt-0 flex flex-col justify-center">
              <p className="text-base md:text-lg font-medium text-slate-300 mb-6 leading-relaxed">
                Institutionalizing the operational and financial frameworks required to execute the energy transition at scale.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
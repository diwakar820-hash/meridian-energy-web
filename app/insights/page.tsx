import Link from "next/link";

export default function InsightsLandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pt-24">
      
      {/* 1. THE HERO HOOK (Macquarie-Style Featured Insight) */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-end bg-[#1A2B45] text-white overflow-hidden pb-24 border-b-8 border-[#00A88F]">
        {/* Deep gradient and subtle texture */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B45] via-[#1A2B45]/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B45] via-[#005F88]/20 to-[#00A88F]/20 opacity-90 z-0"></div>
        <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="relative z-20 max-w-[1400px] w-full mx-auto px-8 md:px-12 lg:px-24">
          <div className="max-w-4xl">
            <p className="text-[#00A88F] font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-[#00A88F]"></span>
              Featured Insight
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
              Beyond Carbon Neutral: The Imperative for 24/7 Carbon-Free Energy.
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-light mb-10">
              Annualized carbon accounting is fundamentally flawed. Explore how Meridian Energy is engineering the transition from paper offsets to physical, time-matched decarbonization.
            </p>
            <Link href="/insights/cfe" className="inline-flex items-center text-white font-bold text-sm tracking-widest uppercase hover:text-[#00A88F] transition group">
              <span className="border-b border-transparent group-hover:border-[#00A88F] pb-1 mr-4">Read the Insight</span>
              <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE LIBRARY (Organized Topic Grid) */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-24 py-32">
        <div className="mb-16">
          <h2 className="text-4xl font-light text-slate-900 mb-6">Explore our insights</h2>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            As a dedicated specialist in utility-scale renewables, hybrid infrastructure, and energy markets, Meridian Energy has deep expertise and capabilities across the capital deployment and asset management spectrum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Column A: Strategic Focus */}
          <div className="md:col-span-6 lg:col-span-5">
            <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-8 border-b border-slate-200 pb-4">Strategic Focus</h3>
            <div className="space-y-0">
              
              <Link href="/insights/cfe" className="block py-6 border-b border-slate-100 group hover:border-[#00A88F] transition-colors">
                <h4 className="text-xl font-medium text-slate-900 group-hover:text-[#00A88F] transition-colors mb-2">24/7 Carbon-Free Energy</h4>
                <p className="text-sm text-slate-500">The architecture of true Net Zero compliance.</p>
              </Link>
              
              <Link href="/insights/un-compact" className="block py-6 border-b border-slate-100 group hover:border-[#00A88F] transition-colors">
                <h4 className="text-xl font-medium text-slate-900 group-hover:text-[#00A88F] transition-colors mb-2">UN CFE Compact Alignment</h4>
                <p className="text-sm text-slate-500">Execution capabilities for global ESG standards.</p>
              </Link>
              
              <Link href="/insights/time-matched" className="block py-6 border-b border-slate-100 group hover:border-[#00A88F] transition-colors">
                <h4 className="text-xl font-medium text-slate-900 group-hover:text-[#00A88F] transition-colors mb-2">Time-Matched Procurement</h4>
                <p className="text-sm text-slate-500">Eliminating the intermittency risk of renewables.</p>
              </Link>
              
              <Link href="/insights/beyond-neutrality" className="block py-6 border-b border-slate-100 group hover:border-[#00A88F] transition-colors">
                <h4 className="text-xl font-medium text-slate-900 group-hover:text-[#00A88F] transition-colors mb-2">Beyond Carbon Neutrality</h4>
                <p className="text-sm text-slate-500">The liability of paper offsets vs. physical assets.</p>
              </Link>

              <Link href="/insights/india-500gw" className="block py-6 border-b border-slate-100 group hover:border-[#00A88F] transition-colors">
                <h4 className="text-xl font-medium text-slate-900 group-hover:text-[#00A88F] transition-colors mb-2">India's 500 GW 2030 Target</h4>
                <p className="text-sm text-slate-500">Capitalizing the national energy transition mandate.</p>
              </Link>

            </div>
          </div>

          {/* Column B: Operational Frameworks */}
          <div className="md:col-span-6 lg:col-span-5 lg:col-start-8">
            <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-8 border-b border-slate-200 pb-4">Operational Frameworks</h3>
            <div className="space-y-0">
              
              <Link href="/insights/fdre" className="block py-6 border-b border-slate-100 group hover:border-[#005F88] transition-colors">
                <h4 className="text-xl font-medium text-slate-900 group-hover:text-[#005F88] transition-colors mb-2">Firm Dispatchable RE (FDRE)</h4>
                <p className="text-sm text-slate-500">Synthesizing predictable baseload green power.</p>
              </Link>

              <Link href="/insights/solar" className="block py-6 border-b border-slate-100 group hover:border-[#005F88] transition-colors">
                <h4 className="text-xl font-medium text-slate-900 group-hover:text-[#005F88] transition-colors mb-2">Utility-Scale Solar Energy</h4>
                <p className="text-sm text-slate-500">High-efficiency execution across national corridors.</p>
              </Link>

              <Link href="/insights/wind" className="block py-6 border-b border-slate-100 group hover:border-[#005F88] transition-colors">
                <h4 className="text-xl font-medium text-slate-900 group-hover:text-[#005F88] transition-colors mb-2">Wind Power Infrastructure</h4>
                <p className="text-sm text-slate-500">The counter-cyclical asset for nighttime generation.</p>
              </Link>

              <Link href="/insights/bess" className="block py-6 border-b border-slate-100 group hover:border-[#005F88] transition-colors">
                <h4 className="text-xl font-medium text-slate-900 group-hover:text-[#005F88] transition-colors mb-2">Battery Energy Storage (BESS)</h4>
                <p className="text-sm text-slate-500">Enabling intelligent, peak-hour dispatch.</p>
              </Link>

              <Link href="/insights/revenue" className="block py-6 border-b border-slate-100 group hover:border-[#005F88] transition-colors">
                <h4 className="text-xl font-medium text-slate-900 group-hover:text-[#005F88] transition-colors mb-2">Commercial Structuring</h4>
                <p className="text-sm text-slate-500">Group Captive and Open Access PPA architecture.</p>
              </Link>

            </div>
          </div>

        </div>
      </section>

      {/* 3. THE AUTHORITY (Spotlight Macro-Statistics) */}
      <section className="w-full bg-[#1A2B45] text-white py-24 border-y border-slate-800">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-700">
            
            <div className="text-center md:text-left md:pr-12 pt-8 md:pt-0">
              <p className="text-sm font-bold tracking-widest uppercase text-[#00A88F] mb-4">The National Mandate</p>
              <h4 className="text-6xl font-light mb-2">500<span className="text-3xl ml-1">GW</span></h4>
              <p className="text-slate-400">India's renewable energy target by 2030</p>
            </div>

            <div className="text-center md:text-left md:px-12 pt-8 md:pt-0">
              <p className="text-sm font-bold tracking-widest uppercase text-[#00A88F] mb-4">The Platform Vision</p>
              <h4 className="text-6xl font-light mb-2">10<span className="text-3xl ml-1">GW</span></h4>
              <p className="text-slate-400">Meridian Energy pipeline execution</p>
            </div>

            <div className="text-center md:text-left md:pl-12 pt-8 md:pt-0 flex flex-col justify-center">
              <p className="text-lg font-medium text-slate-300 mb-6">
                Institutionalizing the operational and financial frameworks required to execute the energy transition at scale.
              </p>
              <Link href="/portfolio" className="text-[#00A88F] font-bold text-sm tracking-widest uppercase hover:text-white transition">Explore Portfolio &rarr;</Link>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE HUMAN ELEMENT (Thought Leadership / Executive Quote) */}
      <section className="bg-slate-50 py-32">
        <div className="max-w-[1000px] mx-auto px-8 md:px-12 text-center">
          <svg className="w-12 h-12 mx-auto text-[#00A88F]/40 mb-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1A2B45] leading-relaxed mb-12">
            "We empower industrial partners to move beyond paper offsets, engineering the physical infrastructure required to achieve true Net Zero on the national grid."
          </h2>
          
          <div className="flex items-center justify-center gap-6">
            {/* You can replace this gray circle with your actual headshot image later */}
            <div className="w-16 h-16 rounded-full bg-slate-300 overflow-hidden border-2 border-white shadow-md">
              <div className="w-full h-full bg-[#1A2B45]/10"></div>
            </div>
            <div className="text-left">
              <p className="font-bold text-slate-900 text-lg">Diwakar Parvathaneni</p>
              <p className="text-sm font-medium text-[#005F88] uppercase tracking-wider">Founder & CEO, Meridian Energy</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
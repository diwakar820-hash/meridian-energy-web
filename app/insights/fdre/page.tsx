import Link from "next/link";

export default function FDREInsight() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pt-24">
      
      {/* 1. ARTICLE HERO SECTION */}
      <section className="w-full bg-[#1A2B45] py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 md:px-12">
          <p className="text-[#00A88F] font-bold tracking-widest uppercase text-xs mb-6">
            Operational Frameworks &bull; Insight
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.15] mb-8 font-meridian">
            Firm Dispatchable Renewable Energy (FDRE)
          </h1>
          <p className="text-xl text-white/70 font-light leading-relaxed max-w-3xl">
            Moving beyond annualized carbon accounting to deliver absolute, 24/7 physical grid decarbonization for tier-one industrial off-takers.
          </p>
        </div>
      </section>

      {/* 2. ARTICLE BODY (Two Column Layout) */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 md:px-12 flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Meta & Key Takeaways */}
          <div className="w-full lg:w-1/3 lg:pr-8">
            <div className="sticky top-32 space-y-12">
              
              {/* Executive Summary Box */}
              <div className="bg-slate-50 border-l-2 border-[#00A88F] p-8">
                <h3 className="text-sm font-bold text-[#1A2B45] uppercase tracking-widest mb-4">Executive Summary</h3>
                <ul className="space-y-4 text-sm text-slate-600 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-[#00A88F] mr-3 font-bold">&rarr;</span>
                    Intermittent solar and wind cannot meet the baseload demands of heavy manufacturing.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00A88F] mr-3 font-bold">&rarr;</span>
                    Meridian engineers hybrid architectures (Solar + Wind + BESS) to guarantee firm power delivery.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00A88F] mr-3 font-bold">&rarr;</span>
                    Dual-chemistry storage provides both rapid response and deep, long-duration discharge.
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Target Market</p>
                <p className="text-sm font-medium text-[#1A2B45]">Tier-1 C&I Off-Takers</p>
              </div>
              
            </div>
          </div>

          {/* Right Column: Main Essay */}
          <div className="w-full lg:w-2/3 prose prose-lg prose-slate max-w-none">
            
            <h2 className="text-3xl font-light text-[#1A2B45] mb-6">The limits of intermittent generation.</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              For the past decade, corporate decarbonization has largely relied on annualized accounting—purchasing enough solar or wind energy over a year to offset total consumption. However, the physical reality of the grid tells a different story. When the sun sets or the wind stops, heavy industrial facilities immediately revert to drawing power from fossil-fuel baseload generation. True Net Zero requires matching clean energy supply with industrial demand on an hourly basis.
            </p>

            <div className="my-12 w-full h-px bg-slate-200"></div>

            <h2 className="text-3xl font-light text-[#1A2B45] mb-6">The FDRE Architecture</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Firm Dispatchable Renewable Energy (FDRE) bridges the gap between clean generation and industrial baseload requirements. By co-locating wind and solar generation profiles, and anchoring them with utility-scale Battery Energy Storage Systems (BESS), Meridian Energy transforms intermittent electrons into a flat, predictable, and dispatchable power curve.
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              This approach is anchored by our foundational 50 MW hybrid asset in Maharashtra. To guarantee continuous power delivery to high-demand manufacturing clients across the MIDC Chakan and Talegaon corridors, Meridian utilizes a sophisticated dual-chemistry storage strategy:
            </p>

            <ul className="list-none space-y-6 mb-12 pl-0">
              <li className="bg-[#f8f9fa] p-6 border border-slate-100">
                <strong className="block text-[#1A2B45] text-lg font-medium mb-2">Lithium Iron Phosphate (LFP)</strong>
                <span className="text-slate-600 text-sm">Deployed for high-power, short-duration applications to handle immediate grid fluctuations and rapid response requirements.</span>
              </li>
              <li className="bg-[#f8f9fa] p-6 border border-slate-100">
                <strong className="block text-[#1A2B45] text-lg font-medium mb-2">Vanadium Redox Flow Batteries (VRFB)</strong>
                <span className="text-slate-600 text-sm">Engineered for deep, long-duration discharge without degradation, acting as the true baseload replacement during extended non-generation hours.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-light text-[#1A2B45] mb-6">Commercial Structuring</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              Technology is only half the equation; capital deployment and revenue structuring form the other. Meridian structures these FDRE assets through Group Captive consortiums and third-party Open Access agreements, allowing industrial off-takers to lock in long-term, fixed-cost energy security while simultaneously achieving absolute supply-chain decarbonization.
            </p>

            {/* Bottom Call to Action */}
            <div className="bg-[#1A2B45] p-10 md:p-12 text-center text-white mt-16">
              <h3 className="text-2xl font-light mb-4">Partner with Meridian Energy</h3>
              <p className="text-white/70 mb-8 max-w-xl mx-auto text-sm">
                Explore how our Open Access and Group Captive FDRE structures can secure your facility's energy future.
              </p>
              <Link href="/contact" className="inline-block bg-[#00A88F] hover:bg-white hover:text-[#1A2B45] text-white px-8 py-4 text-sm font-medium transition duration-300">
                Request a consultation
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
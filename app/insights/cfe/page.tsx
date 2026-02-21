import Link from "next/link";

export default function CarbonFreeEnergyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pt-24">
      {/* HERO SECTION */}
      <section className="relative w-full bg-[#1A2B45] text-white overflow-hidden border-b-8 border-[#00A88F]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2B45] via-[#005F88] to-[#1A2B45] opacity-90"></div>
       
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-24 md:py-32">
          <div className="flex items-center space-x-2 text-[#00A88F] text-sm font-bold tracking-widest uppercase mb-8">
            <Link href="/" className="hover:text-white transition">Insights</Link>
            <span>/</span>
            <span>Strategic Focus</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 max-w-4xl">
            Beyond Carbon Neutral: The Imperative for 24/7 Carbon-Free Energy
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
            Annualized carbon accounting is fundamentally flawed. Meridian Energy is engineering the transition from paper offsets to physical, time-matched decarbonization through our Intelligent Energy Platform.
          </p>
        </div>
      </section>

      {/* THE THESIS */}
      <section className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
         
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-light text-slate-900 mb-8 border-b border-slate-200 pb-4">The Anomaly in Carbon Accounting</h2>
            <p className="text-slate-600 leading-relaxed">
              If the global economy is to limit catastrophic warming, tier-one industries must execute rapid, systemic decarbonization. However, the current standard of "Carbon Neutrality" is often an accounting illusion. 
            </p>
            <p className="text-slate-600 leading-relaxed">
              Under annualized frameworks, corporations claim neutrality by purchasing offsets or unbundled certificates while their physical facilities continue to draw carbon-intensive fossil power from the grid during nighttime or peak hours. <strong className="text-slate-900 font-medium">Carbon neutrality on paper does not equate to emissions reduction in reality.</strong>
            </p>
            <p className="text-slate-600 leading-relaxed">
              To accommodate India's aggressive 500 GW renewable generation target by 2030 and meet true Net Zero mandates, industrial off-takers must adopt <strong className="text-[#005F88]">24/7 Carbon-Free Energy (CFE)</strong>.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-light text-slate-900 mb-8 border-b border-slate-200 pb-4">The Intelligent Energy Platform</h2>
            <p className="text-slate-600 leading-relaxed">
              Meridian Energy’s infrastructure strategy solves the intermittency crisis. High-abate sectors cannot pause operations when solar irradiance drops or wind velocities stall. They require baseload reliability.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By integrating utility-scale solar, wind generation, and Battery Energy Storage Systems (BESS) into our Firm Dispatchable Renewable Energy (FDRE) architecture, we guarantee supply on demand.
            </p>
            <div className="bg-slate-50 p-6 border-l-4 border-[#00A88F] mt-8">
              <p className="text-sm font-medium text-slate-900 italic">
                "Our flagship hybrid deployments are engineered to deliver time-matched, dispatchable carbon-free energy—matching industrial electricity consumption anywhere across the national grid, to accelerate the drive toward a true Zero Carbon future."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* THE UN COMPACT */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-light mb-6">Committed to the UN 24/7 CFE Compact</h2>
            <p className="text-slate-400 leading-relaxed">
              Meridian Energy aligns its capital deployment and operational frameworks with the United Nations 24/7 Carbon-Free Energy Compact. We engineer our Group Captive and Open Access PPAs to satisfy these five strict global principles:
            </p>
          </div>

          <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-12">
            <div className="border-t border-slate-700 pt-6">
              <div className="text-4xl font-light text-[#00A88F] mb-4">01.</div>
              <h3 className="text-xl font-medium text-white mb-3">Time-Matched Procurement</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Hourly matching of electricity consumption with carbon-free electricity generation, moving away from annualized averages to real-time grid realities.
              </p>
            </div>

            <div 
            className="border-t border-slate-700 pt-6">
              <div className="text-4xl font-light text-[#00A88F] mb-4">02.</div>
              <h3 className="text-xl font-medium text-white mb-3">Local Procurement</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Purchasing clean energy on local and interstate grids (e.g., CTU/STU networks) where the electricity consumption actually occurs, driving the related emissions of the consumer to absolute zero.
              </p>
            </div>

            <div 
            className="border-t border-slate-700 pt-6">
              <div className="text-4xl font-light text-[#00A88F] mb-4">03.</div>
              <h3 className="text-xl font-medium text-white mb-3">Technology Inclusive</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Prioritizing the rapid creation of zero-carbon electricity by integrating all viable technologies—combining solar, wind, and sophisticated BESS storage into single dispatchable assets.
              </p>
            </div>

            <div className="border-t border-slate-700 pt-6">
              <div className="text-4xl font-light text-[#00A88F] mb-4">04.</div>
              <h3 className="text-xl font-medium text-white mb-3">Enable New Generation</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Focusing rigorously on the creation of <span className="italic">new</span> clean electricity generation capacity to directly support the rapid decarbonization of physical electricity systems.
              </p>
            </div>

            <div className="border-t border-slate-700 pt-6">
              <div className="text-4xl font-light text-[#00A88F] mb-4">05.</div>
              <h3 className="text-xl font-medium text-white mb-3">Maximize System Impact</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Focusing capital deployment and asset dispatch on maximizing emissions reductions and solving for the dirtiest, most carbon-intensive hours of electricity consumption.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-[1200px] mx-auto px-8 py-24 text-center">
        <h2 className="text-3xl font-light text-slate-900 mb-6">Transition Your Operations</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          Through the 24/7 CFE Compact, Meridian Energy provides the technology, grid integration, and Group Captive structuring required to transform your energy supply into a resilient, cost-effective, and fully decarbonized asset.
        </p>
        <Link href="/contact" className="inline-block bg-[#1A2B45] hover:bg-[#005F88] text-white px-10 py-4 text-sm font-bold tracking-widest uppercase transition duration-300 shadow-xl">
          Request Group Captive Briefing
        </Link>
      </section>

    </main>
  );
}
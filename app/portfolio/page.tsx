import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pt-24">
      
      {/* HERO SECTION */}
      <section className="relative w-full bg-[#1A2B45] text-white overflow-hidden border-b-8 border-[#00A88F]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2B45] via-[#005F88] to-[#1A2B45] opacity-90"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-24 md:py-32">
          <div className="flex items-center space-x-2 text-[#00A88F] text-sm font-bold tracking-widest uppercase mb-8">
            <span className="w-8 h-px bg-[#00A88F]"></span>
            <span>Asset Management</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 max-w-4xl">
            Our Portfolio & Pipeline
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
            From our foundational 50 MW hybrid deployment in Maharashtra to a 10 GW pan-India vision, Meridian Energy engineers physical assets that deliver uncompromising institutional yield.
          </p>
        </div>
      </section>

      {/* FOUNDATIONAL ASSET: 50 MW PUNE PILOT */}
      <section className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 mb-6">The Foundational Asset</h2>
          <div className="w-12 h-1 bg-[#00A88F]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            {/* Project Image / Blueprint Placeholder */}
            <div className="w-full aspect-[4/3] bg-slate-100 border border-slate-200 p-2 shadow-lg relative group overflow-hidden">
               <div className="absolute inset-0 bg-[#1A2B45]/5 group-hover:bg-transparent transition duration-500 z-10"></div>
               <div className="w-full h-full bg-slate-200 flex items-center justify-center relative z-0">
                 <p className="text-slate-400 font-medium tracking-widest uppercase text-sm"></p>
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 lg:pl-8 space-y-8">
            <div>
              <p className="text-[#00A88F] font-bold tracking-widest uppercase text-sm mb-2">Active Development</p>
              <h3 className="text-3xl font-medium text-[#1A2B45] mb-4">Chakan & Talegaon 50 MW FDRE Pilot</h3>
              <p className="text-slate-600 leading-relaxed">
                Positioned strategically within the high-demand MIDC Chakan and Talegaon industrial corridors, this foundational 50 MW Firm Dispatchable Renewable Energy (FDRE) asset serves as the operational blueprint for our national expansion. 
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-1">Total Capacity</p>
                <p className="text-xl font-medium text-slate-900">50 MW</p>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-1">Architecture</p>
                <p className="text-xl font-medium text-slate-900">Solar + Wind + BESS</p>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-1">Off-Take Model</p>
                <p className="text-xl font-medium text-slate-900">Group Captive / OA</p>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-1">Grid Integration</p>
                <p className="text-xl font-medium text-slate-900">MSETCL / STU</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE 10 GW PIPELINE */}
      <section className="bg-slate-50 border-t border-slate-200 py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-light text-slate-900 mb-6">The 10 GW National Pipeline</h2>
              <div className="w-12 h-1 bg-[#1A2B45] mb-8"></div>
              <p className="text-slate-600 leading-relaxed">
                The 50 MW Chakan & Talegaon asset is engineered for immediate scalability. Meridian Energy is actively mapping contiguous land parcels and high-voltage Central Transmission Utility (CTU) evacuation nodes across India's highest-yield irradiance and thermal corridors.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our pipeline strategy targets gigawatt-scale hybrid integration, providing Fortune 500 off-takers with borderless, multi-state Open Access and Group Captive decarbonization solutions.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="bg-white p-8 border-t-4 border-[#00A88F] shadow-sm">
                  <h4 className="text-4xl font-light text-[#1A2B45] mb-4">Phase I</h4>
                  <p className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-3">Regional Consolidation</p>
                  <p className="text-sm text-slate-600">Executing the 50 MW foundational asset and securing 500 MW of adjacent STU-connected capacity within Maharashtra.</p>
                </div>

                <div className="bg-white p-8 border-t-4 border-[#005F88] shadow-sm">
                  <h4 className="text-4xl font-light text-[#1A2B45] mb-4">Phase II</h4>
                  <p className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-3">CTU Expansion</p>
                  <p className="text-sm text-slate-600">Deploying gigawatt-scale FDRE parks connected to the interstate transmission system, enabling pan-India power wheeling.</p>
                </div>

                <div className="bg-white p-8 border-t-4 border-[#1A2B45] shadow-sm sm:col-span-2">
                  <h4 className="text-4xl font-light text-[#1A2B45] mb-4">Phase III</h4>
                  <p className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-3">The 10 GW Capstone</p>
                  <p className="text-sm text-slate-600">Establishing Meridian Energy as a Tier-1 national IPP, managing a fully integrated portfolio of 24/7 Carbon-Free generation assets across multiple state jurisdictions to support the 2030 national 500 GW mandate.</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-[1200px] mx-auto px-8 py-24 text-center">
        <h2 className="text-3xl font-light text-slate-900 mb-6">Explore Off-Take Opportunities</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          Capacity in our 50 MW Chakan & Talegaon pilot is currently being allocated to high-abate tier-one industrials. Secure your physical decarbonization pathway today.
        </p>
        <Link href="/contact" className="inline-block bg-[#1A2B45] hover:bg-[#005F88] text-white px-10 py-4 text-sm font-bold tracking-widest uppercase transition duration-300 shadow-xl">
          Request SPV Details
        </Link>
      </section>

    </main>
  );
}
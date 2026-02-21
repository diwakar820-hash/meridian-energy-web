import Link from "next/link";

export default function OpenAccessPage() {
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
            <span>Operational Frameworks</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 max-w-4xl">
            Open Access (OA) Markets
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
            Providing tier-one industrials with flexible, mid-term decarbonization solutions through India's interstate and intrastate transmission networks.
          </p>
        </div>
      </section>

      {/* THE THESIS */}
      <section className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-3xl font-light text-slate-900 mb-8 border-b border-slate-200 pb-4">Grid-Scale Flexibility</h2>
            <p className="text-slate-600 leading-relaxed">
              While Group Captive structures provide deep discounts through equity participation, certain multinational corporations require procurement agility without the regulatory overhead of owning generation assets. 
            </p>
            <p className="text-slate-600 leading-relaxed font-medium my-6">
              
            </p>
            <p className="text-slate-600 leading-relaxed">
              For these partners, Meridian Energy executes Third-Party Open Access (OA) agreements. Leveraging our high-voltage substation connectivity, we wheel power directly through Central and State Transmission Utilities (CTU/STU) to the client's facility, regardless of geographic borders.
            </p>
            
            <h3 className="text-xl font-medium text-slate-900 mt-10 mb-4">Strategic Capacity Allocation</h3>
            <p className="text-slate-600 leading-relaxed">
              Meridian explicitly reserves 20-30% of our FDRE generation capacity for the Open Access market. This allows us to capture premium corporate tariffs while providing our partners with the agility to scale their carbon-free energy procurement up or down on 3-to-5-year contracting cycles.
            </p>
            <p className="text-slate-600 leading-relaxed">
              When paired with our BESS capabilities, Meridian can schedule firm OA block dispatches, eliminating the imbalance penalties that plague traditional "as-generated" solar developers.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
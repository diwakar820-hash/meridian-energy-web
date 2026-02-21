import Link from "next/link";

export default function GroupCaptivePage() {
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
            Captive & Group Captive PPAs
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
            Transforming energy from an operational expense into a strategic equity asset. Unlocking massive tariff savings through regulatory intelligence.
          </p>
        </div>
      </section>

      {/* THE THESIS */}
      <section className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="max-w-3xl space-y-8">
          <h2 className="text-3xl font-light text-slate-900 border-b border-slate-200 pb-4">The Equity Advantage</h2>
          <p className="text-slate-600 leading-relaxed">
            Under the Indian Electricity Act (2003) and subsequent rules, the Group Captive model is the most financially efficient mechanism for heavy industries to procure renewable power across multiple state jurisdictions. It bypasses the punitive cross-subsidy surcharges (CSS) and additional surcharges (AS) levied by state DISCOMs, resulting in direct bottom-line savings of up to 30-40% on energy costs.
          </p>
          <p className="text-slate-600 leading-relaxed font-medium">
             
          </p>
          <p className="text-slate-600 leading-relaxed">
            To qualify, a consortium of corporate off-takers must collectively hold a minimum 26% equity stake in the Meridian Energy Special Purpose Vehicle (SPV) and consume at least 51% of the power generated.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-[#1A2B45] text-white p-8">
              <h3 className="text-lg font-medium mb-3">For Our Partners</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-slate-300"><span className="text-[#00A88F] mr-2">✓</span> Deep discount to standard grid tariffs.</li>
                <li className="flex items-start text-sm text-slate-300"><span className="text-[#00A88F] mr-2">✓</span> Waiver or significant reduction of CSS & AS across key states.</li>
                <li className="flex items-start text-sm text-slate-300"><span className="text-[#00A88F] mr-2">✓</span> Zero-carbon Scope 2 compliance.</li>
                <li className="flex items-start text-sm text-slate-300"><span className="text-[#00A88F] mr-2">✓</span> Predictable OPEX for 15-25 years.</li>
              </ul>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-8">
              <h3 className="text-lg font-medium text-slate-900 mb-3">For Meridian Energy</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-slate-600"><span className="text-[#005F88] mr-2">✓</span> Immediate equity injection for CAPEX.</li>
                <li className="flex items-start text-sm text-slate-600"><span className="text-[#005F88] mr-2">✓</span> Investment-grade PPA anchor.</li>
                <li className="flex items-start text-sm text-slate-600"><span className="text-[#005F88] mr-2">✓</span> Rapid debt mobilization.</li>
                <li className="flex items-start text-sm text-slate-600"><span className="text-[#005F88] mr-2">✓</span> Guaranteed long-term asset yield.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
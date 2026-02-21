import Link from "next/link";

export default function UNCompactPage() {
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
            UN CFE Compact Alignment
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
            Meridian Energy is engineering our multi-gigawatt pipeline in strict accordance with the United Nations 24/7 Carbon-Free Energy Compact, delivering uncompromising ESG compliance for tier-one off-takers.
          </p>
        </div>
      </section>

      {/* THE THESIS */}
      <section className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-slate-900 mb-8 border-b border-slate-200 pb-4">A Framework for Absolute Decarbonization</h2>
            <p className="text-slate-600 leading-relaxed">
              Global regulatory bodies and institutional capital are shifting their focus from "intent" to "execution." The UN 24/7 CFE Compact represents the highest global standard for corporate decarbonization, demanding that every kilowatt-hour of electricity consumption is matched with carbon-free production.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Meridian Energy does not treat this compact as an aspirational goal. It is the foundational engineering mandate for our Firm Dispatchable Renewable Energy (FDRE) architecture across our national portfolio.
            </p>
          </div>
          
          <div className="bg-slate-50 border border-slate-200 p-10 space-y-6">
            <h3 className="text-xl font-medium text-slate-900 mb-4">Execution Capabilities</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#00A88F] mr-3 mt-1">■</span>
                <span className="text-sm text-slate-600"><strong>New Generation:</strong> We deploy capital strictly into new solar, wind, and BESS capacity, directly displacing fossil generation on the national and state grids.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00A88F] mr-3 mt-1">■</span>
                <span className="text-sm text-slate-600"><strong>Data Transparency:</strong> Providing off-takers with immutable generation data to satisfy rigorous Scope 2 emissions auditing.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00A88F] mr-3 mt-1">■</span>
                <span className="text-sm text-slate-600"><strong>Grid Locality:</strong> Structuring Group Captive PPAs that deliver physical electrons precisely where our clients operate across India.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
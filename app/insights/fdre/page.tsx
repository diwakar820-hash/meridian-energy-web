import Link from "next/link";

export default function FDREPage() {
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
            Firm Dispatchable Renewable Energy (FDRE)
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
            Solving the intermittency crisis. Meridian Energy engineers integrated hybrid assets that deliver baseload-profile green electricity to high-abate industrial off-takers.
          </p>
        </div>
      </section>

      {/* THE THESIS */}
      <section className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-slate-900 mb-8 border-b border-slate-200 pb-4">The Next Evolution of Grid Infrastructure</h2>
            <p className="text-slate-600 leading-relaxed">
              Standalone solar and wind assets are fundamentally limited by their inability to control when power is generated. For tier-one commercial and industrial (C&I) clients operating 24/7, this intermittency introduces unacceptable operational risk and reliance on fossil-fuel grid balancing.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Meridian Energy's <strong>FDRE architecture</strong> eliminates this variable. By co-locating utility-scale solar arrays with complementary wind infrastructure and anchoring them with Battery Energy Storage Systems (BESS), we synthesize a flat, predictable, and highly dispatchable generation curve.
            </p>
          </div>
          
          <div className="bg-slate-50 border border-slate-200 p-10 space-y-6">
            <h3 className="text-xl font-medium text-slate-900 mb-4">The Maharashtra 25-50 MW Pilot</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Our foundational deployment in the Pune and Talegaon industrial corridors serves as the operational blueprint for our 10 GW vision. 
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#00A88F] mr-3 mt-1">■</span>
                <span className="text-sm text-slate-600"><strong>Capacity Factor Maximization:</strong> Blending solar and wind generation profiles to optimize transmission infrastructure.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00A88F] mr-3 mt-1">■</span>
                <span className="text-sm text-slate-600"><strong>MSETCL Grid Stabilization:</strong> Providing scheduled, firm power that actively supports MSLDC load balancing requirements.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
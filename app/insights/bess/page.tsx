import Link from "next/link";

export default function BESSPage() {
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
            Battery Energy Storage Systems
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
            The linchpin of 24/7 Carbon-Free Energy. Storing excess capacity to enable intelligent, peak-hour dispatch.
          </p>
        </div>
      </section>

      {/* THE THESIS */}
      <section className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-slate-900 mb-8 border-b border-slate-200 pb-4">Arbitrage and Grid Stability</h2>
            <p className="text-slate-600 leading-relaxed">
              Without storage, renewable energy remains a slave to the weather. Battery Energy Storage Systems (BESS) represent the technological breakthrough that transforms green energy from a variable commodity into a firm, bankable asset.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Meridian Energy co-locates high-capacity lithium-ion and advanced flow battery systems directly alongside our solar and wind generation nodes. This allows us to capture excess midday energy and intelligently dispatch it during high-tariff evening peaks, maximizing asset yield and providing critical frequency regulation services to the state grid.
            </p>
          </div>
          
          <div className="bg-[#1A2B45] text-white p-10 space-y-6">
            <h3 className="text-xl font-medium mb-4">Strategic Applications</h3>
            <ul className="space-y-6">
              <li className="border-l-2 border-[#00A88F] pl-4">
                <span className="block text-lg font-medium mb-1">Time-Shifting</span>
                <span className="text-sm text-slate-400">Storing daytime solar over-generation for discharge during industrial night shifts.</span>
              </li>
              <li className="border-l-2 border-[#00A88F] pl-4">
                <span className="block text-lg font-medium mb-1">Peak Arbitrage</span>
                <span className="text-sm text-slate-400">Selling stored capacity into the Open Access merchant market when grid pricing peaks.</span>
              </li>
              <li className="border-l-2 border-[#00A88F] pl-4">
                <span className="block text-lg font-medium mb-1">Ramp Rate Control</span>
                <span className="text-sm text-slate-400">Smoothing out sudden drops in solar or wind generation to prevent grid instability.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
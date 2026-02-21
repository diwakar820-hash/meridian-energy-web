import Link from "next/link";

export default function WindPage() {
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
            Wind Power Infrastructure
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
            Capitalizing on high-velocity thermal corridors to drive evening generation and perfectly offset midday solar peaks.
          </p>
        </div>
      </section>

      {/* THE THESIS */}
      <section className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-3xl font-light text-slate-900 mb-8 border-b border-slate-200 pb-4">The Crucial Counter-Cyclical Asset</h2>
            <p className="text-slate-600 leading-relaxed">
              If solar power is the engine of the renewable transition, wind power is the stabilizer. Wind generation naturally accelerates during evening and night hours, creating a perfect counter-cyclical profile to daytime solar irradiance. 
            </p>
            <p className="text-slate-600 leading-relaxed">
              Meridian Energy identifies and secures high-potential wind sites across elevated plateaus. By integrating advanced, high-hub-height turbine technology, we extract maximum kinetic energy even in moderate wind conditions, ensuring our hybrid portfolios maintain a high Capacity Utilization Factor (CUF) around the clock.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
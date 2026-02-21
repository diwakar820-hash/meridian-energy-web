import Link from "next/link";

export default function TimeMatchedPage() {
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
            Time-Matched Procurement
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
            Eliminating the intermittency risk of renewables. Meridian Energy utilizes advanced BESS integration to match industrial load profiles hour-by-hour, ensuring 24/7 operational continuity.
          </p>
        </div>
      </section>

      {/* THE THESIS */}
      <section className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="max-w-3xl space-y-8">
          <h2 className="text-3xl font-light text-slate-900 border-b border-slate-200 pb-4">The End of Annual Averaging</h2>
          <p className="text-slate-600 leading-relaxed">
            For decades, corporate renewable procurement relied on "annual volumetric matching"—buying enough solar power during the day to offset fossil fuels burned at night. This model is no longer sufficient for ESG reporting, nor does it actually decarbonize the grid.
          </p>
          <p className="text-slate-600 leading-relaxed">
            <strong>Time-Matched Procurement</strong> requires that a facility's consumption is met with clean energy during the exact hour it is consumed. 
          </p>
          <div className="bg-[#1A2B45] text-white p-8 my-10">
            <h3 className="text-xl font-medium mb-4">The Meridian FDRE Solution</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Standard solar parks cannot achieve time-matched procurement. Meridian Energy’s Firm Dispatchable Renewable Energy (FDRE) architecture integrates solar arrays with high-yield wind turbines and Battery Energy Storage Systems (BESS). By capturing excess midday solar and deploying it during evening peaks, we flatten the generation curve to perfectly mirror the baseload demands of heavy industry.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
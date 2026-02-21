import Link from "next/link";

export default function India500GWPage() {
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
            India's 500 GW 2030 Target
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
            Capitalizing the infrastructure required to meet the world's most ambitious energy transition mandate.
          </p>
        </div>
      </section>

      {/* THE THESIS */}
      <section className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-light text-slate-900 mb-8 border-b border-slate-200 pb-4">The Scale of the Transition</h2>
            <p className="text-slate-600 leading-relaxed">
              India has set a monumental target: achieving 500 GW of non-fossil fuel electricity capacity by 2030, and total energy independence by 2047. This requires a seismic shift in capital deployment, land acquisition, and grid integration at the state and central levels.
            </p>
            <p className="text-slate-600 leading-relaxed">
              However, injecting 500 GW of raw, intermittent renewable energy into the grid creates massive stabilization challenges for dispatch centers like MSLDC.
            </p>
            <h3 className="text-xl font-medium text-slate-900 mt-8 mb-4">The Meridian 10 GW Mandate</h3>
            <p className="text-slate-600 leading-relaxed">
              Meridian Energy is positioning to capture a significant footprint of this macro-transition. By refusing to build raw, unstable solar parks, and instead focusing strictly on Firm Dispatchable Renewable Energy (FDRE) with embedded BESS storage, we provide the exact type of grid-stabilizing infrastructure the government demands. 
            </p>
            <p className="text-slate-600 leading-relaxed">
              Starting from our 50 MW pilot in Maharashtra, we are institutionalizing the regulatory and financial frameworks required to scale a 10 GW portfolio, serving as a critical pillar in India's low-carbon growth trajectory.
            </p>
          </div>

          <div className="lg:col-span-5">
             <div className="bg-slate-900 text-white p-10 h-full flex flex-col justify-center text-center border-t-4 border-[#00A88F]">
               <div className="text-6xl font-light mb-4 text-[#00A88F]">500<span className="text-3xl">GW</span></div>
               <p className="text-sm font-bold tracking-widest uppercase mb-8 text-slate-400">National 2030 Target</p>
               
               <div className="w-full h-px bg-slate-700 my-4"></div>
               
               <div className="text-5xl font-light mb-4 mt-8 text-white">10<span className="text-3xl">GW</span></div>
               <p className="text-sm font-bold tracking-widest uppercase text-slate-400">Meridian Pipeline Vision</p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
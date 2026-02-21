import Link from "next/link";

export default function SolarPage() {
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
            Utility-Scale Solar Energy
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
            Deploying high-efficiency photovoltaic infrastructure across India's highest-yield irradiance corridors.
          </p>
        </div>
      </section>

      {/* THE THESIS */}
      <section className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="max-w-3xl space-y-8">
          <h2 className="text-3xl font-light text-slate-900 border-b border-slate-200 pb-4">The Foundation of the Energy Transition</h2>
          <p className="text-slate-600 leading-relaxed">
            Utility-scale solar remains the most cost-effective and rapidly deployable generation asset in the renewable ecosystem. However, realizing true institutional yield requires flawless execution in land acquisition, technology procurement, and grid connectivity.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Meridian Energy secures expansive contiguous land parcels across India's premier solar parks and high-irradiance zones—specifically targeting proximity to existing 220kV and 400kV Central and State Transmission Utility (CTU/STU) substations—to minimize evacuation losses and accelerate project commissioning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="border-t-2 border-[#1A2B45] pt-6">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Tier-1 Technology</h3>
              <p className="text-sm text-slate-600">Utilizing bi-facial modules and single-axis tracking systems to maximize energy yield profiles during early morning and late afternoon hours.</p>
            </div>
            <div className="border-t-2 border-[#00A88F] pt-6">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Strategic Siting</h3>
              <p className="text-sm text-slate-600">Rigorous pre-feasibility analysis ensures our national solar assets are geographically optimized to complement parallel wind and storage infrastructure.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
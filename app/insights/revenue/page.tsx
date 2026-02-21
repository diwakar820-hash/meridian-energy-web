import Link from "next/link";

export default function RevenueStructuringPage() {
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
            Revenue Structuring
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
            Engineered bankability. Meridian Energy designs multi-tiered commercial frameworks to secure long-term yield and completely de-risk institutional capital.
          </p>
        </div>
      </section>

      {/* THE THESIS */}
      <section className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-light text-slate-900 mb-8 border-b border-slate-200 pb-4">The Commercial "Stack"</h2>
            <p className="text-slate-600 leading-relaxed">
              Top-tier infrastructure development rejects reliance on singular revenue streams. To achieve rapid financial closure with domestic and international lenders, a renewable asset must demonstrate a highly resilient cash-flow profile that is immune to isolated market shocks.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Meridian Energy utilizes a "Revenue Stacking" methodology for our 25-50 MW pilot and subsequent 10 GW pipeline. We engineer each Special Purpose Vehicle (SPV) to service a diverse portfolio of off-takers, blending long-term security with short-term premium capture.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium mt-4">
              [Image of Renewable Energy Revenue Stacking chart]
            </p>
          </div>
          
          <div className="lg:col-span-6">
            <div className="bg-slate-50 border border-slate-200 p-8">
              <h3 className="text-xl font-medium text-slate-900 mb-6">The Meridian Revenue Model</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-[#00A88F] pl-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">Layer 1: The Anchor (60-70%)</h4>
                  <p className="text-base font-medium text-[#1A2B45] mb-2">Group Captive PPAs</p>
                  <p className="text-sm text-slate-600">15 to 25-year locked-in tariffs with investment-grade industrial clients. Provides the guaranteed baseload revenue required for debt servicing.</p>
                </div>
                <div className="border-l-4 border-[#005F88] pl-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">Layer 2: The Flex (20-30%)</h4>
                  <p className="text-base font-medium text-[#1A2B45] mb-2">Third-Party Open Access</p>
                  <p className="text-sm text-slate-600">Medium-term bilateral contracts (3-5 years) with corporate buyers, allowing Meridian to adjust tariffs in response to macroeconomic inflation.</p>
                </div>
                <div className="border-l-4 border-[#8CD600] pl-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">Layer 3: The Upside (10%)</h4>
                  <p className="text-base font-medium text-[#1A2B45] mb-2">Merchant Arbitrage</p>
                  <p className="text-sm text-slate-600">Utilizing our BESS infrastructure to sell uncontracted power directly into the day-ahead energy exchange during peak pricing hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
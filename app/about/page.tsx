import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pt-32 px-8 md:px-24 pb-20">
      <div className="max-w-5xl mx-auto">
        
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-blue-900 mb-8 pb-6 border-b border-slate-100">
          Strategic Capital. Sustainable Power.
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div className="md:col-span-2 text-lg text-slate-600 space-y-6">
            <p className="leading-relaxed">
              Meridian Energy is driven by a singular mission: to accelerate the transition to sustainable power through strategic, high-yield renewable assets. We leverage deep market insights to develop premium utility-scale infrastructure.
            </p>
            <p className="leading-relaxed">
              Our approach combines rigorous ESG standards with institutional-grade execution. By initiating our operations with a foundational 50 MW hybrid pilot, we are establishing the robust operational and financial frameworks required to rapidly execute our 500 MW pipeline by 2029, scaling toward a definitive 10 GW portfolio by 2035.
            </p>
          </div>
          
          {/* REVISED: The Roadmap Sidebar */}
          <div className="bg-slate-50 p-8 border border-slate-100">
             <h3 className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-6">Execution Roadmap</h3>
             <ul className="space-y-4 text-sm">
                <li className="border-b border-slate-200 pb-2">
                  <span className="block text-slate-400 font-medium mb-1">PHASE 1 (ACTIVE)</span>
                  <span className="text-slate-900 font-semibold">50 MW Hybrid Pilot</span>
                </li>
                <li className="border-b border-slate-200 pb-2">
                  <span className="block text-slate-400 font-medium mb-1">PHASE 2 (2029)</span>
                  <span className="text-slate-900 font-semibold">500 MW Pipeline</span>
                </li>
                <li className="pb-2">
                  <span className="block text-slate-400 font-medium mb-1">PHASE 3 (2035)</span>
                  <span className="text-slate-900 font-semibold">10 GW Vision</span>
                </li>
             </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 border-t border-slate-100 pt-16">
          <div>
            <h3 className="text-2xl font-serif text-slate-900 mb-4">Institutional Execution</h3>
            <p className="text-base text-slate-600 leading-relaxed">Applying rigorous financial and operational oversight to every phase of asset development and management.</p>
          </div>
          <div>
            <h3 className="text-2xl font-serif text-slate-900 mb-4">Energy Transition</h3>
            <p className="text-base text-slate-600 leading-relaxed">Dedicated exclusively to renewable technologies that decarbonize the grid and secure future energy pipelines.</p>
          </div>
        </div>

        <div className="mt-24 bg-slate-900 p-12 text-center">
           <h2 className="text-2xl font-serif text-white mb-4">Explore Our Operations</h2>
           <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
             Review our current flagship development and see how we are deploying capital to shape India's renewable future.
           </p>
           <Link href="/portfolio" className="inline-block bg-white text-blue-900 px-8 py-4 text-sm font-bold tracking-widest hover:bg-slate-100 transition shadow-md">
             VIEW ACTIVE PORTFOLIO
           </Link>
        </div>

      </div>
    </main>
  );
}
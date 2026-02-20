import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pt-32 px-8 md:px-24 pb-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-blue-900 mb-8 pb-6 border-b border-slate-100">
          Strategic Capital. Sustainable Power.
        </h1>
        
        {/* Main Strategy Text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div className="md:col-span-2 text-lg text-slate-600 space-y-6">
            <p className="leading-relaxed">
              Meridian Energy is driven by a singular mission: to accelerate the transition to sustainable power through strategic, high-yield renewable assets. Rooted in Pune, Maharashtra, we leverage deep market insights to develop premium utility-scale infrastructure.
            </p>
            <p className="leading-relaxed">
              Our approach combines rigorous ESG standards with institutional-grade execution. By benchmarking against the highest global and domestic energy standards, we ensure our projects deliver both exceptional operational performance and enduring environmental value.
            </p>
          </div>
          
          {/* Quick Facts / Mandate Sidebar */}
          <div className="bg-slate-50 p-8 border border-slate-100">
             <h3 className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-6">Current Mandate</h3>
             <ul className="space-y-4 text-sm">
                <li className="border-b border-slate-200 pb-2">
                  <span className="block text-slate-400 font-medium mb-1">ASSET CLASS</span>
                  <span className="text-slate-900 font-semibold">Hybrid Renewable Energy</span>
                </li>
                <li className="border-b border-slate-200 pb-2">
                  <span className="block text-slate-400 font-medium mb-1">TARGET CAPACITY</span>
                  <span className="text-slate-900 font-semibold">50 MW Pipeline</span>
                </li>
                <li className="pb-2">
                  <span className="block text-slate-400 font-medium mb-1">GEOGRAPHY</span>
                  <span className="text-slate-900 font-semibold">Maharashtra, India</span>
                </li>
             </ul>
          </div>
        </div>
        
        {/* Core Values Section */}
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

        {/* Call to Action Bottom */}
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
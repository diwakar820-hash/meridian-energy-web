import Image from "next/image";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pt-32 px-8 md:px-24 pb-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-blue-900 mb-12 border-b border-slate-100 pb-6">
          Our Portfolio
        </h1>
        
        {/* Flagship Asset Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
          
          {/* Asset Details */}
          <div className="bg-slate-50 p-10 md:p-16 h-full flex flex-col justify-center border border-slate-100">
            <div className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">Flagship Development Asset</div>
            <h2 className="text-3xl font-serif font-medium text-slate-900 mb-6">Maharashtra Hybrid Energy Facility</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Currently in the targeted development phase, this utility-scale hybrid project is strategically sited in Maharashtra to capture complementary wind and solar resource yields. Engineered for optimal grid integration, the facility is being structured to deliver a highly reliable, baseload-like clean energy profile. This active development reflects a disciplined commitment to delivering robust, high-capacity sustainable infrastructure to the regional network.
            </p>
            
            {/* Asset Metrics */}
            <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-8">
              <div>
                <div className="text-3xl font-serif text-blue-900 mb-1">50 MW</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Target Capacity</div>
              </div>
              <div>
                <div className="text-2xl font-serif text-blue-900 mb-2 mt-1">Under Development</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phase</div>
              </div>
            </div>
          </div>
          
          {/* Live Asset Image */}
          <div className="h-64 lg:h-full min-h-[400px] relative overflow-hidden bg-slate-800">
             <Image
               src="/facility.jpg"
               alt="Meridian Energy Maharashtra Facility"
               fill
               className="object-cover"
               priority
             />
             
             {/* Premium gradient overlay */}
             <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-900 to-slate-900 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </main>
  );
}
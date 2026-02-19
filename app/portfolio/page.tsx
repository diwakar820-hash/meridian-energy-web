import Image from 'next/image'; // Importing the Next.js optimized image tool

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
            <div className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">Flagship Asset</div>
            <h2 className="text-3xl font-serif font-medium text-slate-900 mb-4">Maharashtra Hybrid Facility</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              A premier hybrid renewable energy project strategically located to optimize both solar and wind resources. This active development represents a major commitment to reliable, high-capacity clean energy generation for the regional grid.
            </p>
            
            {/* Asset Metrics */}
            <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-8">
              <div>
                <div className="text-3xl font-serif text-blue-900 mb-1">50 MW</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Capacity</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-blue-900 mb-1">Hybrid</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Asset Class</div>
              </div>
            </div>
          </div>
          
          {/* Asset Image Section */}
          <div className="h-64 lg:h-full min-h-[400px] relative overflow-hidden flex items-center justify-center">
             {/* The Optimized Next.js Image */}
             <Image 
               src="/facility.jpg" 
               alt="50 MW Hybrid Renewable Energy Facility in Maharashtra" 
               fill
               className="object-cover"
               priority
             />
             {/* A subtle color overlay to make it look premium */}
             <div className="absolute inset-0 opacity-20 bg-blue-900 mix-blend-multiply pointer-events-none"></div>
          </div>

        </div>
      </div>
    </main>
  );
}
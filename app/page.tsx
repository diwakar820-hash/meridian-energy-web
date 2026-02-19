export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-8 md:px-24 pt-20">
        <div className="max-w-4xl z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-slate-900 leading-tight mb-6">
            Powering the future through strategic renewable assets.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-10 leading-relaxed">
            Developing high-yield, utility-scale infrastructure. 
            Currently advancing a 50 MW hybrid renewable energy project to accelerate the energy transition in Maharashtra.
          </p>
          <button className="bg-blue-900 text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-blue-800 transition shadow-lg">
            EXPLORE OUR ASSETS
          </button>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="bg-slate-50 border-t border-slate-100 py-20 px-8 md:px-24 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="text-4xl font-serif font-medium text-blue-900 mb-2">50 MW</div>
          <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Active Capacity</div>
        </div>
        <div>
          <div className="text-4xl font-serif font-medium text-blue-900 mb-2">Pune</div>
          <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Regional Focus</div>
        </div>
        <div>
          <div className="text-4xl font-serif font-medium text-blue-900 mb-2">Hybrid</div>
          <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Asset Class</div>
        </div>
      </section>
    </main>
  );
}
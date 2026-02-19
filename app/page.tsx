import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center px-8 md:px-24 overflow-hidden">

        {/* Background Video */}
        <video
          key="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-105 animate-[slowZoom_20s_linear_infinite]"
          style={{ filter: 'brightness(0.85)' }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/65 z-10"></div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-white leading-tight mb-6">
            Powering the future through strategic renewable assets.
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 leading-relaxed">
            Developing high-yield, utility-scale infrastructure.
            Currently advancing a flagship 50 MW hybrid renewable energy project
            to accelerate the energy transition in Maharashtra.
          </p>

          <Link
            href="/portfolio"
            className="inline-block bg-white text-blue-900 px-8 py-4 text-sm font-bold tracking-widest hover:bg-slate-100 transition duration-300 shadow-xl"
          >
            EXPLORE OUR ASSETS
          </Link>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="bg-white border-y border-slate-100 py-20 px-8 md:px-24 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
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

      {/* Corporate Credibility Section */}
      <section className="py-32 px-8 md:px-24 bg-slate-900 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl font-serif font-medium text-white mb-6">Backed by Meridian Group</h2>
           <p className="text-slate-400 text-lg leading-relaxed mb-10">
             As the dedicated renewable energy vertical of Meridian Group, we bring rigorous financial oversight and deep regional expertise to India's energy transition. Our focus is exclusively on high-performance assets that deliver enduring value to the grid and our partners.
           </p>
           <Link href="/about" className="text-white font-bold text-sm tracking-widest uppercase hover:text-blue-400 transition">
             Read Our Strategy &rarr;
           </Link>
        </div>
      </section>

    </main>
  );
}
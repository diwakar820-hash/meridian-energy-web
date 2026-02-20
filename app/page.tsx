import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center px-8 md:px-24 overflow-hidden">
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
        <div className="absolute inset-0 bg-slate-900/65 z-10 pointer-events-none"></div>

        <div className="relative z-20 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-white leading-tight mb-6">
            Powering the future through strategic renewable assets.
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 leading-relaxed">
            "Building a multi-gigawatt clean energy platform. From our 50 MW foundational hybrid pilot in Maharashtra, we are institutionalizing the operational frameworks required to scale 500 MW of high-yield capacity by 2029, driving toward a 10 GW vision."
          </p>
          <Link
            href="/portfolio"
            className="inline-block bg-white text-blue-900 px-8 py-4 text-sm font-bold tracking-widest hover:bg-slate-100 transition duration-300 shadow-xl"
          >
            EXPLORE OUR ROADMAP
          </Link>
        </div>
      </section>

      {/* REVISED: The Scale-Up Metrics Section */}
      <section className="bg-white border-y border-slate-100 py-20 px-8 md:px-24 w-full relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
          
          <div className="text-center md:text-left">
            <div className="text-4xl font-serif font-medium text-blue-900 mb-2">50 MW</div>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Active Pilot Facility</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-serif font-medium text-blue-900 mb-2">500 MW</div>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">2029 Pipeline Target</div>
          </div>
          
          <div className="text-center md:text-right">
            <div className="text-4xl font-serif font-medium text-blue-900 mb-2">10 GW</div>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">2035 Vision</div>
          </div>

        </div>
      </section>

      {/* Corporate Strategy Section */}
      <section className="py-32 px-8 md:px-24 bg-slate-900 text-center relative z-10 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl font-serif font-medium text-white mb-6">Strategic Capital. Sustainable Power.</h2>
           <p className="text-slate-400 text-lg leading-relaxed mb-10">
             Meridian Energy is a dedicated renewable infrastructure developer. We bring rigorous financial oversight and deep regional expertise to India's energy transition. Our core mandate is the origination and execution of high-performance utility-scale assets that deliver enduring value to the grid and our partners.
           </p>
           <Link href="/about" className="text-white font-bold text-sm tracking-widest uppercase hover:text-blue-400 transition border-b border-transparent hover:border-blue-400 pb-1">
             Read Our Strategy &rarr;
           </Link>
        </div>
      </section>

    </main>
  );
}
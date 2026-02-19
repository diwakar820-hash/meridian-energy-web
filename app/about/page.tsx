export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pt-32 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-blue-900 mb-8">
          Strategic Capital. Sustainable Power.
        </h1>
        <div className="text-lg text-slate-600 space-y-6">
          <p className="leading-relaxed">
            Meridian Energy is driven by a singular mission: to accelerate the transition to sustainable power through strategic, high-yield renewable assets. Rooted in Pune, Maharashtra, we leverage deep market insights to develop premium utility-scale infrastructure.
          </p>
          <p className="leading-relaxed">
            Our approach combines rigorous ESG standards with institutional-grade execution. By benchmarking against the highest global and domestic energy standards, we ensure our projects deliver both exceptional operational performance and enduring environmental value.
          </p>
        </div>
        
        {/* Core Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 border-t border-slate-100 pt-16">
          <div>
            <h3 className="text-xl font-serif text-slate-900 mb-3">Institutional Execution</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Applying rigorous financial and operational oversight to every phase of asset development and management.</p>
          </div>
          <div>
            <h3 className="text-xl font-serif text-slate-900 mb-3">Energy Transition</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Dedicated exclusively to renewable technologies that decarbonize the grid and secure future energy pipelines.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
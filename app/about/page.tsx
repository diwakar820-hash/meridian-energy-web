import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pt-24">
      
      {/* HERO SECTION */}
      <section className="relative w-full bg-[#1A2B45] text-white overflow-hidden border-b-8 border-[#00A88F]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2B45] via-[#005F88] to-[#1A2B45] opacity-90"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-24 md:py-32">
          <div className="flex items-center space-x-2 text-[#00A88F] text-sm font-bold tracking-widest uppercase mb-8">
            <span className="w-8 h-px bg-[#00A88F]"></span>
            <span>Corporate Governance</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 max-w-4xl">
            Strategic Capital & Institutional Execution
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
            Meridian Energy Private Limited was founded to institutionalize the physical infrastructure required for India's 500 GW energy transition. We engineer bankability into every megawatt.
          </p>
        </div>
      </section>

      {/* THE MANDATE */}
      <section className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-light text-slate-900 mb-6">The Meridian Mandate</h2>
            <div className="w-12 h-1 bg-[#00A88F] mb-8"></div>
            
            {/* Added Corporate Structure Block */}
            <div className="mb-8 p-6 bg-white border border-slate-200 shadow-sm border-l-4 border-l-[#1A2B45]">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Headquarters</p>
                  <p className="text-sm font-medium text-[#1A2B45]">Pune, Maharashtra</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Parent Entity</p>
                  <p className="text-sm font-medium text-[#1A2B45]">Meridian Enterprises Pvt. Ltd.</p>
                </div>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              The transition to a zero-carbon economy is no longer a technological challenge; it is a capital deployment challenge. 
            </p>
            <p className="text-slate-600 leading-relaxed">
              Achieving true Net Zero requires the flawless execution of utility-scale land acquisition, grid-connectivity approvals (CTU/STU), and multi-layered revenue structuring. Meridian Energy bridges the gap between global institutional capital and physical, derisked infrastructure assets across India.
            </p>
          </div>
          
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-10 lg:p-12">
            <h3 className="text-xl font-medium text-slate-900 mb-8 border-b border-slate-200 pb-4">Capital Deployment Strategy</h3>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#1A2B45] text-white flex items-center justify-center text-sm font-bold">1</div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-medium text-slate-900 mb-2">Platform Equity</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Securing core growth capital to scale our development pipeline, fund early-stage land acquisition, and secure critical transmission connectivity ahead of financial close.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#005F88] text-white flex items-center justify-center text-sm font-bold">2</div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-medium text-slate-900 mb-2">Project Finance (Debt)</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Mobilizing non-recourse and limited-recourse debt facilities from tier-one domestic and international lenders, anchored by our 15-25 year investment-grade PPAs.</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#00A88F] text-white flex items-center justify-center text-sm font-bold">3</div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-medium text-slate-900 mb-2">Group Captive Consortiums</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Structuring localized Special Purpose Vehicles (SPVs) where corporate off-takers inject the statutory 26% equity to secure physical 24/7 CFE at heavily discounted tariffs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="bg-[#1A2B45] text-white py-24 border-y border-slate-800">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-light mb-6">Executive Leadership</h2>
            <div className="w-12 h-1 bg-[#00A88F]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4 lg:col-span-3">
              {/* Headshot Placeholder */}
              <div className="w-full aspect-square bg-slate-800 border-4 border-[#005F88] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B45] to-transparent opacity-60 z-10"></div>
                {/* Note: Place 'founder.jpg' in the public folder */}
                <div className="absolute inset-0 bg-cover bg-center grayscale opacity-80" style={{ backgroundImage: "url('/founder.jpg')" }}></div>
              </div>
            </div>
            
            <div className="md:col-span-8 lg:col-span-9 space-y-6">
              <div>
                <h3 className="text-3xl font-medium text-white mb-2">Diwakar Parvathaneni</h3>
                <p className="text-[#00A88F] font-bold tracking-widest uppercase text-sm">Founder & Chief Executive Officer</p>
              </div>
              <p className="text-slate-300 leading-relaxed max-w-3xl">
                As the driving force behind Meridian Energy Private Limited, Diwakar leads the strategic capitalization and infrastructure deployment for the company's 10 GW national vision. His executive mandate focuses on bypassing traditional, annualized carbon accounting to deliver absolute, physical grid decarbonization through Firm Dispatchable Renewable Energy (FDRE) architectures.
              </p>
              <p className="text-slate-300 leading-relaxed max-w-3xl">
                By aggressively securing highly-liquid generation corridors and structuring multi-tiered revenue models, he ensures Meridian's hybrid assets deliver uncompromising yield for institutional capital partners and Fortune 500 off-takers alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-[1200px] mx-auto px-8 py-24 text-center">
        <h2 className="text-3xl font-light text-slate-900 mb-6">Partner With Meridian</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          Whether you are a global infrastructure fund seeking sovereign-grade yield, or a tier-one off-taker seeking absolute decarbonization, Meridian Energy provides the execution framework.
        </p>
        <Link href="/contact" className="inline-block bg-[#00A88F] hover:bg-[#005F88] text-white px-10 py-4 text-sm font-bold tracking-widest uppercase transition duration-300 shadow-xl">
          Initiate Contact
        </Link>
      </section>

    </main>
  );
}
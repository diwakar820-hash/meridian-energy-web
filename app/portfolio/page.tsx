import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pt-24 scroll-smooth">
      
      {/* HERO SECTION: The Mandate */}
      <section className="max-w-[1200px] mx-auto px-8 py-20 lg:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-tight mb-8">
          Strategic infrastructure.<br />
          <span className="font-meridian bg-gradient-to-r from-[#8CD600] via-[#00A88F] to-[#005F88] bg-clip-text text-transparent">
            Disciplined execution.
          </span>
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          Meridian Energy targets high-yield renewable infrastructure through rigorous project origination, structuring, and execution. We are actively bridging the gap between tier-one Commercial and Industrial energy demand and Utility-Scale dispatchable generation.
        </p>
      </section>

      {/* TIER 1: ACTIVE ORIGINATION (The Maharashtra FDRE) */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-col mb-16">
            <span className="text-sm font-bold tracking-widest text-[#00A88F] uppercase mb-3">Active Origination</span>
            <h2 className="text-3xl font-light text-slate-900">Flagship Maharashtra FDRE Hybrid</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-slate-600 leading-relaxed mb-8">
                Meridian Energy is currently originating a 50 MW Firm Dispatchable Renewable Energy (FDRE) pilot in Maharashtra. This foundational asset is being engineered to deliver uncompromised, base load-profile green energy to Tier-1 Commercial & Industrial (C&I) clients.
              </p>
              <div className="space-y-6">
                <div className="border-l-2 border-[#1A2B45] pl-6">
                  <h4 className="text-lg font-medium text-slate-900 mb-2">Off-Take & Revenue Structuring</h4>
                  <p className="text-sm text-slate-600">Structuring long-term Power Purchase Agreements (PPAs) via Group Captive (GC) and Direct Captive models, ensuring highly predictable cash flows and derisked equity returns.</p>
                </div>
                <div className="border-l-2 border-[#1A2B45] pl-6">
                  <h4 className="text-lg font-medium text-slate-900 mb-2">Strategic Siting & Land Acquisition</h4>
                  <p className="text-sm text-slate-600">"Executing a targeted land lease strategy across strategic Maharashtra corridors. Site selection is anchored in the Pune district and strictly prioritised by complementary solar irradiance and wind resource profiles.".</p>
                </div>
              </div>
            </div>
            
            {/* Minimalist Data/Stat Box */}
            <div className="bg-white border border-slate-200 p-10 shadow-sm">
              <h3 className="text-xl font-medium text-slate-900 mb-8 border-b border-slate-100 pb-4">Asset Parameters</h3>
              <ul className="space-y-6">
                <li className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Target Capacity</span>
                  <span className="text-sm font-semibold text-slate-900">50 MW</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Asset Class</span>
                  <span className="text-sm font-semibold text-slate-900">Solar, Wind & BESS Hybrid</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Commercial Structure</span>
                  <span className="text-sm font-semibold text-slate-900">Group Captive / OA</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Target COD</span>
                  <span className="text-sm font-semibold text-slate-900">Q2 2027</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TIER 2: CORE CAPABILITIES (Permitting, Grid, Finance) */}
      <section className="py-24 max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col mb-16">
          <span className="text-sm font-bold tracking-widest text-[#00A88F] uppercase mb-3">Core Capabilities</span>
          <h2 className="text-3xl font-light text-slate-900">End-to-End Development & Execution</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Capability 1 */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded-sm mb-6">
              <span className="text-xl font-bold text-[#1A2B45]">01</span>
            </div>
            <h3 className="text-xl font-medium text-slate-900">Regulatory Clearances</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Navigating complex state and central regulatory environments. Managing end-to-end approvals with nodal agencies including MEDA (Maharashtra Energy Development Agency) and MSEDCL for seamless compliance.
            </p>
          </div>

          {/* Capability 2 */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded-sm mb-6">
              <span className="text-xl font-bold text-[#1A2B45]">02</span>
            </div>
            <h3 className="text-xl font-medium text-slate-900">Grid Evacuation & MSLDC</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Securing critical infrastructure connectivity. Executing rigorous grid load flow studies and securing evacuation approvals through MSETCL (400kV/220kV) and scheduling alignment with MSLDC.
            </p>
          </div>

          {/* Capability 3 */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded-sm mb-6">
              <span className="text-xl font-bold text-[#1A2B45]">03</span>
            </div>
            <h3 className="text-xl font-medium text-slate-900">Financial Closure</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Structuring optimised capital stacks. We coordinate with top-tier domestic and international infrastructure lenders to achieve rapid financial closure, ensuring projects move from origination to EPC mobilisation without delay.
            </p>
          </div>
        </div>
      </section>

      {/* TIER 3: THE 10 GW VISION (Pipeline) */}
      <section className="bg-[#1A2B45] text-white py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-bold tracking-widest text-[#00A88F] uppercase mb-3 block">Strategic Pipeline</span>
              <h2 className="text-3xl md:text-4xl font-light mb-6">The 10 GW Vision</h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Our initial Maharashtra hybrid development serves as the operational anchor for a massive national expansion. By standardising our execution frameworks across land, grid, and capital, Meridian Energy is positioning to scale a multi-asset infrastructure pipeline toward a 10 GW target by 2035.
              </p>
              
              <ul className="space-y-4 border-t border-slate-700 pt-8">
                <li className="flex items-center text-sm text-slate-200">
                  <svg className="w-5 h-5 mr-3 text-[#00A88F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Utility-Scale Solar Parks
                </li>
                <li className="flex items-center text-sm text-slate-200">
                  <svg className="w-5 h-5 mr-3 text-[#00A88F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Wind Infrastructure & Repowering
                </li>
                <li className="flex items-center text-sm text-slate-200">
                  <svg className="w-5 h-5 mr-3 text-[#00A88F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Standalone Battery Energy Storage (BESS)
                </li>
              </ul>
            </div>
            
            {/* Visual element representing scale */}
            <div className="relative aspect-square lg:aspect-[4/3] bg-slate-800 border border-slate-700 p-8 flex flex-col justify-end">
               <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B45] to-transparent z-10"></div>
               {/* This is a CSS-based subtle grid to look like engineering/blueprints */}
               <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
               
               <div className="relative z-20">
                 <h3 className="font-meridian text-5xl md:text-7xl text-white mb-2">10<span className="text-[#00A88F]">GW</span></h3>
                 <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">2035 Deployment Target</p>
               </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
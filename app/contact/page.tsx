import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pt-24">
      
      {/* HERO SECTION */}
      <section className="relative w-full bg-[#1A2B45] text-white overflow-hidden border-b-8 border-[#00A88F]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2B45] via-[#005F88] to-[#1A2B45] opacity-90"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-24 md:py-32">
          <div className="flex items-center space-x-2 text-[#00A88F] text-sm font-bold tracking-widest uppercase mb-8">
            <span className="w-8 h-px bg-[#00A88F]"></span>
            <span>Corporate Communications</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 max-w-4xl">
            Inquiries & Strategic Partnerships
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
            Meridian Energy executes utility-scale decarbonization frameworks for tier-one commercial and industrial off-takers across the national grid. Initiate contact with our capital deployment and engineering teams below.
          </p>
        </div>
      </section>

      {/* CONTACT MATRIX & INQUIRY FORM */}
      <section className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-6">Corporate Office</h2>
              <div className="w-12 h-1 bg-[#00A88F] mb-8"></div>
              <p className="text-slate-600 leading-relaxed mb-8">
                For immediate capital structuring or PPA off-take inquiries regarding the 50 MW Talegaon asset or our broader 10 GW national pipeline, please contact our executive operations desk.
              </p>
            </div>

            <div className="space-y-8">
              {/* Address Node */}
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#00A88F] mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <div>
                  <h4 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-1">Operations Hub</h4>
                  <p className="text-lg font-medium text-slate-900">Pune, Maharashtra</p>
                  <p className="text-sm text-slate-600 mt-1">India</p>
                </div>
              </div>

              {/* Phone Node */}
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#00A88F] mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <div>
                  <h4 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-1">Executive Line</h4>
                  <a href="tel:+919676428015" className="text-lg font-medium text-slate-900 hover:text-[#005F88] transition">+91 9010 633 445</a>
                </div>
              </div>

              {/* Email Node */}
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#00A88F] mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <div>
                  <h4 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-1">Institutional Inquiries</h4>
                  <a href="mailto:info@meridianenergy.in" className="text-lg font-medium text-slate-900 hover:text-[#005F88] transition">info@meridianenergy.in</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-10">
            <h3 className="text-2xl font-light text-slate-900 mb-8">Initiate Dialogue</h3>
            
            <form className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-bold uppercase tracking-wider text-slate-500">First Name <span className="text-[#00A88F]">*</span></label>
                  <input type="text" id="firstName" className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#1A2B45] transition text-slate-900" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-bold uppercase tracking-wider text-slate-500">Last Name <span className="text-[#00A88F]">*</span></label>
                  <input type="text" id="lastName" className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#1A2B45] transition text-slate-900" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-bold uppercase tracking-wider text-slate-500">Company / Fund <span className="text-[#00A88F]">*</span></label>
                  <input type="text" id="company" className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#1A2B45] transition text-slate-900" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-bold uppercase tracking-wider text-slate-500">Corporate Title</label>
                  <input type="text" id="title" className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#1A2B45] transition text-slate-900" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-slate-500">Corporate Email <span className="text-[#00A88F]">*</span></label>
                <input type="email" id="email" className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#1A2B45] transition text-slate-900" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiryType" className="text-sm font-bold uppercase tracking-wider text-slate-500">Nature of Inquiry <span className="text-[#00A88F]">*</span></label>
                {/* React Fix: Using defaultValue on the select tag instead of selected on the option tag */}
                <select id="inquiryType" defaultValue="" className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#1A2B45] transition text-slate-900 appearance-none rounded-none" required>
                  <option value="" disabled>Select an option...</option>
                  <option value="group-captive">Group Captive / PPA Off-Take</option>
                  <option value="open-access">Third-Party Open Access</option>
                  <option value="equity-debt">Capital / Debt Financing</option>
                  <option value="epc">EPC / Supply Chain Partnership</option>
                  <option value="press">Media & Press</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-slate-500">Executive Summary</label>
                <textarea id="message" rows={4} className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#1A2B45] transition text-slate-900 resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#1A2B45] hover:bg-[#00A88F] text-white py-4 text-sm font-bold tracking-widest uppercase transition duration-300">
                Submit Formal Inquiry
              </button>

            </form>
          </div>

        </div>
      </section>

    </main>
  );
}
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pt-32 px-8 md:px-24 pb-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-blue-900 mb-6 pb-6 border-b border-slate-100">
          Corporate Inquiries
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-16">
          Connect with our origination and investor relations teams. Meridian Energy is actively executing a 50 MW pilot to anchor our 500 MW development pipeline and our ultimate 10 GW vision by 2035. We welcome inquiries from strategic capital partners and utility stakeholders.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Information & HQ */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-4">Headquarters</h3>
              <address className="not-italic text-slate-600 text-lg space-y-2 leading-relaxed">
                <p className="font-serif text-2xl text-slate-900 mb-4">Meridian Group</p>
                <p>Pune, Maharashtra</p>
                <p>India</p>
              </address>
            </div>
            
            <div className="pt-8 border-t border-slate-100">
              <h3 className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-4">Direct Channels</h3>
              <div className="space-y-4">
                <p className="text-slate-600"><strong className="text-slate-900 font-medium">Investor Relations:</strong> ir@meridianenergy.in</p>
                <p className="text-slate-600"><strong className="text-slate-900 font-medium">Commercial Development:</strong> dev@meridianenergy.in</p>
              </div>
            </div>
          </div>

          {/* Institutional Contact Form */}
          <div className="bg-slate-50 p-8 md:p-10 border border-slate-100">
            <h3 className="text-2xl font-serif text-slate-900 mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                <input type="text" className="w-full border-b border-slate-300 py-2 bg-transparent focus:outline-none focus:border-blue-900 transition" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Institutional Email</label>
                <input type="email" className="w-full border-b border-slate-300 py-2 bg-transparent focus:outline-none focus:border-blue-900 transition" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Organization</label>
                <input type="text" className="w-full border-b border-slate-300 py-2 bg-transparent focus:outline-none focus:border-blue-900 transition" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Inquiry Details</label>
                <textarea rows={4} className="w-full border-b border-slate-300 py-2 bg-transparent focus:outline-none focus:border-blue-900 transition resize-none"></textarea>
              </div>
              <button type="button" className="w-full bg-slate-900 text-white font-bold text-sm tracking-widest uppercase py-4 hover:bg-blue-900 transition shadow-md mt-4">
                SUBMIT INQUIRY
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pt-32 px-8 md:px-24 pb-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-blue-900 mb-6 pb-6 border-b border-slate-100">
          Contact Us
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
          
          {/* Left Column: Corporate Info */}
          <div>
            <h2 className="text-2xl font-serif text-slate-900 mb-6">Corporate Headquarters</h2>
            <div className="text-slate-600 space-y-8 leading-relaxed">
              
              <div>
                <p className="font-semibold text-slate-900">Meridian Energy Private Limited</p>
                <p>Meridian Group</p>
                <p>Pune, Maharashtra</p>
                <p>India</p>
              </div>
              
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Direct Inquiries</h3>
                <p>Email: info@meridianenergy.in</p>
                <p>Phone: +91 (90106 33445)</p>
              </div>
              
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Investor Relations</h3>
                <p>investors@meridianenergy.in</p>
              </div>

            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="bg-slate-50 p-8 md:p-10 border border-slate-100 shadow-sm">
            <h2 className="text-xl font-serif text-slate-900 mb-6">Send an Inquiry</h2>
            
            {/* Make sure your Formspree link stays here! */}
            <form action="YOUR_FORMSPREE_LINK_HERE" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input type="text" id="name" name="name" required className="w-full border border-slate-300 px-4 py-3 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 bg-white transition" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-1">Organization</label>
                <input type="text" id="organization" name="organization" className="w-full border border-slate-300 px-4 py-3 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 bg-white transition" placeholder="Company Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" id="email" name="email" required className="w-full border border-slate-300 px-4 py-3 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 bg-white transition" placeholder="john@company.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea id="message" name="message" required rows={4} className="w-full border border-slate-300 px-4 py-3 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 bg-white transition" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-900 text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-blue-800 transition shadow-md">
                SUBMIT INQUIRY
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
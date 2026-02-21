import Link from "next/link";

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pt-32 pb-24">
      <div className="max-w-[1000px] mx-auto px-8">
        
        <div className="mb-16">
          <p className="text-[#00A88F] font-bold tracking-widest uppercase text-sm mb-4">Trust Center</p>
          <h1 className="text-4xl md:text-5xl font-light text-[#1A2B45] mb-6">Legal & Compliance</h1>
          <p className="text-slate-600 leading-relaxed">
            Corporate policies, privacy notices, and terms of use for the Meridian Energy Private Limited platform and investor data room.
          </p>
        </div>

        <div className="bg-white border border-slate-200 shadow-sm p-10 md:p-16 space-y-20">
          
          {/* TERMS OF USE */}
          <section id="terms" className="scroll-mt-32">
            <h2 className="text-2xl font-medium text-slate-900 mb-6 border-b border-slate-100 pb-4">Terms of Use</h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>Welcome to the Meridian Energy corporate platform. By accessing or using our website and investor portal, you agree to be bound by these Terms of Use.</p>
              <p>The content provided on this platform, including operational frameworks, yield metrics, and pipeline projections, is for informational purposes only and does not constitute a binding offer to sell or a solicitation of an offer to buy any security or investment product.</p>
              <p>All intellectual property, including the Firm Dispatchable Renewable Energy (FDRE) architectural concepts and proprietary revenue modeling detailed herein, remains the exclusive property of Meridian Energy Private Limited.</p>
            </div>
          </section>

          {/* PRIVACY NOTICE */}
          <section id="privacy" className="scroll-mt-32">
            <h2 className="text-2xl font-medium text-slate-900 mb-6 border-b border-slate-100 pb-4">Privacy Notice</h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>Meridian Energy Private Limited ("Meridian", "we", "us") is committed to protecting the privacy of our corporate partners, off-takers, and website visitors.</p>
              <p>When you submit an inquiry through our Corporate Communications matrix or access the Investor Portal, we collect standard corporate contact information and institutional affiliation data. This data is utilized strictly for the purpose of executing Group Captive consortium agreements, Open Access (OA) off-take structuring, and capital deployment communications.</p>
              <p>We do not sell, rent, or lease corporate data to third-party entities. All data room telemetry and financial documents are secured utilizing industry-standard 256-bit encryption.</p>
            </div>
          </section>

          {/* COOKIE POLICY */}
          <section id="cookies" className="scroll-mt-32">
            <h2 className="text-2xl font-medium text-slate-900 mb-6 border-b border-slate-100 pb-4">Cookie Policy</h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>Our platform utilizes strictly necessary cookies to enable core functionality such as secure authentication into the Investor Portal and network load balancing.</p>
              <p>We also utilize analytical tracking to monitor aggregate traffic across our Insights data room and operational framework pages. These analytics contain no personally identifiable information (PII) and are utilized solely to optimize the digital architecture of the platform.</p>
            </div>
          </section>

          {/* ACCESSIBILITY NOTICE */}
          <section id="accessibility" className="scroll-mt-32">
            <h2 className="text-2xl font-medium text-slate-900 mb-6 border-b border-slate-100 pb-4">Accessibility Notice</h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>Meridian Energy is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards across our public-facing platform and private investor portals.</p>
              <p>If you encounter any accessibility barriers while utilizing our site, please contact our operations desk immediately at info@meridianenergy.in.</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
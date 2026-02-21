import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-20 px-8 md:px-12 lg:px-24 border-t border-slate-800">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Top Section: Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Column 1: Brand & Socials */}
          <div className="md:col-span-12 lg:col-span-4 mb-8 lg:mb-0 flex flex-col items-start">
            
            <Link href="/" className="mb-8 block group">
              <div className="flex items-center">
                {/* YOUR EXACT BRAND GRADIENT AND CUSTOM FONT */}
                <span className="font-meridian text-4xl tracking-tight bg-gradient-to-r from-[#8CD600] via-[#00A88F] to-[#005F88] bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                  meridian
                </span>
                {/* Subtle White Divider */}
                <span className="text-3xl font-semibold text-white/50 mx-3 pb-1">|</span>
                {/* Solid White 'Energy' */}
                <span className="font-meridian text-2xl text-white tracking-wide group-hover:opacity-80 transition-opacity">
                  Energy
                </span>
              </div>
            </Link>
            
            {/* Social Icons */}
            <div className="flex space-x-5 text-slate-400 ml-1">
              <a href="#" className="hover:text-white transition"><span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="hover:text-white transition"><span className="sr-only">X</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="hover:text-white transition"><span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="hover:text-white transition"><span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="hover:text-white transition"><span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Corporate */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-medium mb-6 text-sm text-white">Corporate</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-white transition">Strategic Capital</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition">Our Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-white transition">Leadership</Link></li>
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-medium mb-6 text-sm text-white">Capabilities</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/portfolio" className="hover:text-white transition">Hybrid Assets</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition">Utility-Scale Solar</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition">Wind Infrastructure</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-medium mb-6 text-sm text-white">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="/portal" className="hover:text-white transition">Investor Relations</Link></li>
              <li><Link href="/portal" className="hover:text-white transition text-blue-400 font-semibold">Partner Login &rarr;</Link></li>
            </ul>
          </div>

          {/* Column 5: Headquarters */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-medium mb-6 text-sm text-white">Headquarters</h4>
            <address className="not-italic text-sm text-slate-400 space-y-2 leading-relaxed">
              <p>Meridian Group</p>
              <p>Pune, Maharashtra</p>
              <p>India</p>
            </address>
          </div>

        </div>
        
        {/* Bottom Section: Legal Bar & Balanced Copyright */}
        <div className="mt-24 pt-8 border-t border-slate-800 flex flex-col lg:flex-row justify-between items-start lg:items-center text-xs text-slate-500 space-y-6 lg:space-y-0">
          
          <div className="flex flex-wrap gap-6">
            <Link href="/legal#terms" className="hover:text-slate-300 transition">Terms of Use</Link>
            <Link href="/legal#accessibility" className="hover:text-slate-300 transition">Accessibility Notice</Link>
            <Link href="/legal#cookies" className="hover:text-slate-300 transition">Cookie Policy</Link>
            <Link href="/legal#privacy" className="hover:text-slate-300 transition">Privacy Notice</Link>
          </div>
          
          <div className="flex gap-1 text-slate-400">
            <span>&copy; {new Date().getFullYear()}</span>
            <span>| Meridian Energy Private Limited. |</span>
            <span>All rights reserved.</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
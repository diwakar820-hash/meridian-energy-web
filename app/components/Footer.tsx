import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-20 px-8 md:px-12 lg:px-24 mt-20">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Top Section: Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Column 1: Brand & Socials */}
          <div className="md:col-span-12 lg:col-span-4 mb-8 lg:mb-0">
            <Link href="/">
              <Image 
                src="/logo.svg" 
                alt="Meridian Energy Logo" 
                width={220} 
                height={48} 
                className="h-10 w-auto mb-8 brightness-0 invert opacity-100 hover:opacity-80 transition" 
              />
            </Link>
            
            {/* Social Media Icons */}
            <div className="flex space-x-6 text-slate-300">
              <a href="#" className="hover:text-white transition">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="hover:text-white transition">
                <span className="sr-only">X (Twitter)</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Corporate Links */}
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
              <li><Link href="/contact" className="hover:text-white transition">Investor Relations</Link></li>
            </ul>
          </div>

          {/* Column 5: Headquarters */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-medium mb-6 text-sm text-white">Headquarters</h4>
            <address className="not-italic text-sm text-slate-400 space-y-2">
              <p>Meridian Group</p>
              <p>Pune, Maharashtra</p>
              <p>India</p>
            </address>
          </div>

        </div>
        
        {/* Bottom Section: Legal Bar & Copyright */}
        <div className="mt-24 pt-8 border-t border-slate-800 flex flex-col lg:flex-row justify-between items-start lg:items-center text-xs text-slate-500 space-y-6 lg:space-y-0">
          
          <div className="flex flex-wrap gap-6">
            <Link href="#" className="hover:text-slate-300 transition">Terms of Use</Link>
            <Link href="#" className="hover:text-slate-300 transition">Accessibility Notice</Link>
            <Link href="#" className="hover:text-slate-300 transition">Cookie Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition">Privacy Notice</Link>
          </div>
          
          <div className="flex gap-2 text-slate-400">
            &copy; {new Date().getFullYear()} | Meridian Energy Private Limited. | All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
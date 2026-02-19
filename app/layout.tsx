import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Meridian Energy',
  description: 'Powering the future through strategic renewable assets.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans text-slate-900 bg-white min-h-screen flex flex-col">
        
        {/* Global Navigation - RESTORED LOGO */}
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-8 py-4 flex justify-between items-center">
          <Link href="/">
            <Image 
              src="/logo.svg" 
              alt="Meridian Energy Logo" 
              width={200} 
              height={50} 
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <Link href="/portfolio" className="hover:text-blue-900 transition">Our Portfolio</Link>
            <Link href="/about" className="hover:text-blue-900 transition">Strategic Capital</Link>
          </div>
        </nav>

        {/* Individual Pages Load Here */}
        <div className="flex-grow">
          {children}
        </div>
        
        {/* Corporate Footer */}
        <footer className="bg-slate-900 text-white py-16 px-8 md:px-24 border-t border-slate-800">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-2">
              <div className="text-xl font-bold tracking-tighter text-white mb-4">MERIDIAN ENERGY</div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Accelerating the energy transition through strategic, utility-scale renewable assets. 
              </p>
            </div>
            
            {/* Links Column */}
            <div>
              <h4 className="font-semibold mb-4 text-sm tracking-widest uppercase text-slate-500">Corporate</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition">Our Portfolio</Link></li>
                <li><Link href="#" className="hover:text-white transition">ESG Framework</Link></li>
              </ul>
            </div>
            
            {/* Contact Column */}
            <div>
              <h4 className="font-semibold mb-4 text-sm tracking-widest uppercase text-slate-500">Headquarters</h4>
              <address className="not-italic text-sm text-slate-400 space-y-1">
                <p>Meridian Group</p>
                <p>Pune, Maharashtra</p>
                <p>India</p>
              </address>
            </div>

          </div>
          
          {/* Copyright Bar */}
          <div className="max-w-6xl mx-auto border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Meridian Energy Private Limited. All rights reserved.</p>
            <div className="space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
}
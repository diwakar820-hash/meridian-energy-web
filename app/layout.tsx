import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Navbar from './components/Navbar';

// Premium SEO and Social Sharing Data
export const metadata: Metadata = {
  title: 'Meridian Energy | Institutional Renewable Infrastructure',
  description: 'Developing high-yield, utility-scale renewable assets. Currently advancing a flagship 50 MW hybrid energy project to accelerate the energy transition in Maharashtra.',
  openGraph: {
    title: 'Meridian Energy | Strategic Capital. Sustainable Power.',
    description: 'Developing high-yield, utility-scale renewable infrastructure in India.',
    url: 'https://meridianenergy.in', 
    siteName: 'Meridian Energy',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans text-slate-900 bg-white min-h-screen flex flex-col">
        
        {/* Interactive Navigation Component */}
        <Navbar />

        {/* Individual Pages Load Here */}
        <div className="flex-grow">
          {children}
        </div>
        
        {/* Corporate Footer */}
        <footer className="bg-slate-900 text-white py-16 px-8 md:px-24 border-t border-slate-800 mt-20">
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
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
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
          </div>
        </footer>

      </body>
    </html>
  )
}
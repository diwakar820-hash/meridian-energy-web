import './globals.css'
import Link from 'next/link'
import Image from 'next/image' // We added this superpower tool!

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
      <body className="font-sans text-slate-900 bg-white min-h-screen">
        
        {/* Global Navigation */}
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-8 py-4 flex justify-between items-center">
          
          {/* Replaced Text with Custom Logo */}
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

        {/* This is where your individual pages load */}
        {children}
        
      </body>
    </html>
  )
}
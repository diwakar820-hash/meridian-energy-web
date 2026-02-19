import './globals.css'
import Link from 'next/link' // This is the Next.js superpower component

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
        
        {/* Global Navigation - This now appears on every page */}
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tighter text-blue-900">
            MERIDIAN ENERGY
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
import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // ADDED: We import your new Footer component!

// Premium SEO and Social Sharing Data
export const metadata: Metadata = {
  title: 'Meridian Energy | Institutional Renewable Infrastructure',
  description: 'Developing high-yield, utility-scale renewable assets. Currently advancing a flagship 50 MW hybrid energy project to accelerate the energy transition in Maharashtra.',
  icons: {
    icon: '/icon.png',
  },
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
        
        {/* Our new separated Footer Component */}
        <Footer />

      </body>
    </html>
  )
}
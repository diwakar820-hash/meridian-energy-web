import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 

// UPGRADED SEO: Now explicitly mentions the 10 GW expansion roadmap
export const metadata: Metadata = {
  title: 'Meridian Energy | Institutional Renewable Infrastructure',
  description: 'Developing high-yield, utility-scale renewable assets. Executing a 50 MW pilot to anchor a 500 MW pipeline by 2029 and a 10 GW vision by 2035.',
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'Meridian Energy | Strategic Capital. Sustainable Power.',
    description: 'Executing a 50 MW pilot to anchor a 10 GW renewable infrastructure vision by 2035.',
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
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
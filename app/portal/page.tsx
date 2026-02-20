import Link from "next/link";
import Image from "next/image";

export default function PortalPage() {
  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center p-8 font-sans relative overflow-hidden">
      
      {/* Background styling for a secure, premium feel */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-slate-900 to-slate-900 pointer-events-none"></div>

      <div className="w-full max-w-md bg-white p-10 md:p-12 shadow-2xl relative z-10 border-t-4 border-blue-900">
        
        {/* Logo & Header */}
        <div className="text-center mb-10">
          <Link href="/">
            <Image 
              src="/logo.svg" 
              alt="Meridian Energy" 
              width={180} 
              height={40} 
              className="h-8 w-auto mx-auto mb-8 hover:opacity-80 transition" 
            />
          </Link>
          <h1 className="text-2xl font-serif text-slate-900 font-medium mb-2">Investor Portal</h1>
          <p className="text-sm text-slate-500 tracking-wide uppercase font-semibold">Secure Data Room</p>
        </div>

        {/* Login Form (Visual Gateway) */}
        <form className="space-y-8">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Institutional Email</label>
            <input 
              type="email" 
              className="w-full border-b-2 border-slate-200 py-2 px-1 text-slate-900 focus:outline-none focus:border-blue-900 transition bg-transparent placeholder-slate-300"
              placeholder="name@fund.com"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Access Token / Password</label>
            <input 
              type="password" 
              className="w-full border-b-2 border-slate-200 py-2 px-1 text-slate-900 focus:outline-none focus:border-blue-900 transition bg-transparent placeholder-slate-300"
              placeholder="••••••••••••"
            />
          </div>
          
          <div className="pt-2">
            <button 
              type="button" 
              className="w-full bg-slate-900 text-white font-bold text-sm tracking-widest uppercase py-4 hover:bg-blue-900 transition shadow-md"
            >
              Authenticate
            </button>
          </div>
        </form>

        {/* Footer Links */}
        <div className="mt-10 text-center space-y-4 border-t border-slate-100 pt-6">
          <p className="text-xs text-slate-500">
            Not a registered partner? <br/>
            <Link href="/contact" className="text-blue-900 font-bold hover:underline mt-2 inline-block">Request Access &rarr;</Link>
          </p>
        </div>

      </div>
    </main>
  );
}
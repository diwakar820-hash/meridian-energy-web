"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PortalLoginPage() {
  const [view, setView] = useState<"login" | "request">("login");
  const router = useRouter();

  // This function sends the user to your beautiful dashboard when they log in
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/portal/dashboard");
  };

  return (
    <main className="min-h-screen bg-[#1A2B45] flex relative overflow-hidden font-sans">
      
      {/* Background Institutional Branding Elements */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00A88F]/10 to-transparent z-0 pointer-events-none"></div>

      <div className="flex-1 flex items-center justify-center p-6 z-10">
        <div className="w-full max-w-md">
          
          {/* Logo / Header */}
          <div className="mb-10 text-center">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-light text-white tracking-wide">meridian<span className="text-[#00A88F] font-medium mx-1">|</span>energy</span>
            </Link>
            <h1 className="text-2xl font-light text-white mb-2">Institutional Data Room</h1>
            <p className="text-slate-400 text-sm">Secure access for Limited Partners and cleared off-takers.</p>
          </div>

          {/* Interactive Form Container */}
          <div className="bg-white p-8 md:p-10 shadow-2xl border-t-4 border-[#00A88F] transition-all duration-500">
            
            {view === "login" ? (
              
              /* --- 1. LOGIN VIEW --- */
              <form onSubmit={handleLogin} className="space-y-6 animate-fade-in">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Corporate Email</label>
                  <input type="email" required className="w-full bg-slate-50 border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#1A2B45] focus:ring-1 focus:ring-[#1A2B45] transition" placeholder="name@fund.com" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Access Key</label>
                    <button type="button" className="text-xs text-[#00A88F] hover:text-[#1A2B45] font-medium transition">Forgot?</button>
                  </div>
                  <input type="password" required className="w-full bg-slate-50 border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#1A2B45] focus:ring-1 focus:ring-[#1A2B45] transition tracking-widest" placeholder="••••••••••••" />
                </div>
                
                <div className="pt-2">
                  <button type="submit" className="w-full bg-[#1A2B45] hover:bg-[#005F88] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition duration-300 shadow-md">
                    Authenticate Session
                  </button>
                </div>
                
                <div className="pt-6 text-center border-t border-slate-100 mt-6">
                  <p className="text-xs text-slate-500 mb-3">Not a registered capital partner?</p>
                  <button type="button" onClick={() => setView("request")} className="text-sm font-bold text-[#1A2B45] hover:text-[#00A88F] uppercase tracking-widest transition">
                    Request Credentials &rarr;
                  </button>
                </div>
              </form>

            ) : (

              /* --- 2. REQUEST ACCESS VIEW --- */
              <form onSubmit={(e) => { e.preventDefault(); alert("Request submitted securely."); setView("login"); }} className="space-y-5 animate-fade-in">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" required className="w-full bg-slate-50 border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#1A2B45] transition" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Organization / Fund</label>
                  <input type="text" required className="w-full bg-slate-50 border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#1A2B45] transition" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Corporate Email</label>
                  <input type="email" required className="w-full bg-slate-50 border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#1A2B45] transition" />
                </div>
                
                <div className="pt-2">
                  <button type="submit" className="w-full bg-[#00A88F] hover:bg-[#005F88] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition duration-300 shadow-md">
                    Submit Request
                  </button>
                </div>
                
                <div className="pt-6 text-center border-t border-slate-100 mt-6">
                  <button type="button" onClick={() => setView("login")} className="text-sm font-bold text-[#1A2B45] hover:text-[#00A88F] uppercase tracking-widest transition">
                    &larr; Back to Login
                  </button>
                </div>
              </form>

            )}
          </div>

          {/* Security Footer */}
          <div className="mt-8 text-center opacity-60 flex justify-center items-center space-x-2 text-slate-400 text-xs uppercase tracking-widest font-bold">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            <span>256-Bit Encrypted Data Room</span>
          </div>

        </div>
      </div>
    </main>
  );
}
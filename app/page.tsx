"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // The Data for your 3 Slides
  const slides = [
    {
      id: 0,
      tag: "Investors",
      headline: "2026 Operational Briefing",
      subhead: "Institutionalizing the energy transition through strategic renewable assets.",
      video: "/hero-bg.mp4",
      buttonText: "Visit our investor centre",
      buttonLink: "/portal"
    },
    {
      id: 1,
      tag: "Insights",
      headline: "Critical infrastructure's new frontier",
      subhead: "Deploying the 50 MW Chakan & Talegaon Firm Dispatchable Renewable Energy pilot.",
      video: "/wind-bg.mp4", // This will use your newly generated wind video!
      buttonText: "Read the insight",
      buttonLink: "/insights/fdre"
    },
    {
      id: 2,
      tag: "Corporate",
      headline: "Structuring 24/7 Carbon-Free Energy",
      subhead: "Engineering absolute physical grid decarbonization for tier-one commercial off-takers.",
      video: "/grid-bg.mp4", // This will use your newly generated transmission video!
      buttonText: "Strategic Capital",
      buttonLink: "/about"
    }
  ];

  // Auto-rotate slides every 8 seconds (if playing)
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 8000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* 1. THE MACQUARIE HERO SLIDER */}
      <section className="relative w-full min-h-screen flex items-center bg-[#1A2B45] text-white overflow-hidden pt-24">
        
        {/* Render Videos */}
        {slides.map((slide, index) => (
          <video 
            key={slide.id}
            autoPlay 
            loop 
            muted 
            playsInline 
            className={`absolute inset-0 w-full h-full object-cover object-top z-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-70' : 'opacity-0'}`}
          >
            <source src={slide.video} type="video/mp4" />
          </video>
        ))}

        {/* Deep Gradients for Text Readability */}
        <div className="absolute inset-0 bg-[#1A2B45]/30 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B45]/80 via-[#1A2B45]/40 to-transparent z-10 pointer-events-none"></div>

        {/* Vertically Centered Text Content */}
        <div className="relative z-20 max-w-[1400px] w-full mx-auto px-6 sm:px-8 md:px-12 xl:px-24">
          <div className="max-w-3xl">
            <p className="text-white font-medium text-sm mb-4 transition-all duration-500">
              {slides[currentSlide].tag}
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light leading-[1.1] mb-6 font-meridian transition-all duration-500">
              {slides[currentSlide].headline}
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mb-10 transition-all duration-500">
              {slides[currentSlide].subhead}
            </p>
            <Link href={slides[currentSlide].buttonLink} className="inline-block bg-transparent border border-white hover:bg-white hover:text-[#1A2B45] text-white px-8 py-4 text-sm font-medium transition duration-300">
              {slides[currentSlide].buttonText}
            </Link>
          </div>
        </div>

        {/* Bottom Center Controls (Macquarie Style) */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-6">
          
          {/* Slide Indicators (Thin Lines) */}
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button 
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsPlaying(false); // Pause if user manually clicks
                }}
                className={`h-[2px] transition-all duration-300 ${currentSlide === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/70'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Play/Pause Button */}
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-white hover:text-slate-300 transition"
            aria-label={isPlaying ? "Pause slider" : "Play slider"}
          >
            {isPlaying ? (
              // Pause Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            ) : (
              // Play Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            )}
          </button>
        </div>
      </section>

      {/* 2. THE BROOKFIELD STATS BLOCK */}
      <section className="w-full bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 xl:px-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Side: The "Roots" Statement */}
            <div className="lg:col-span-6 space-y-6">
              <p className="font-bold text-sm text-[#1A2B45] tracking-wide">Our Mandate</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1A2B45] leading-[1.2]">
                Grounded in operational heritage, we engineer absolute physical grid decarbonization.
              </h2>
            </div>

            {/* Right Side: The Macro Stats Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-x-8 gap-y-16">
              
              <div>
                <p className="text-sm font-semibold text-[#1A2B45] mb-4">Foundational Asset</p>
                <p className="text-5xl md:text-6xl font-light text-[#1A2B45]">50<span className="text-2xl font-medium ml-1">MW</span></p>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-[#1A2B45] mb-4">National Pipeline</p>
                <p className="text-5xl md:text-6xl font-light text-[#1A2B45]">10<span className="text-2xl font-medium ml-1">GW</span></p>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-[#1A2B45] mb-4">Delivery Profile</p>
                <p className="text-5xl md:text-6xl font-light text-[#1A2B45]">24/7</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#1A2B45] mb-4">Target Mandate</p>
                <p className="text-5xl md:text-6xl font-light text-[#1A2B45]">2035</p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. CAPABILITIES / TRACK RECORD */}
      <section className="w-full bg-slate-50 border-t border-slate-100 py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1A2B45] leading-tight">
                Meridian Energy in India — scaling infrastructure for the transition.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                For commercial off-takers, the transition to a zero-carbon economy is no longer a technological challenge; it is a capital deployment challenge. Meridian bridges the gap between institutional capital and physical infrastructure.
              </p>
              <Link href="/about" className="inline-flex items-center text-[#1A2B45] hover:text-[#00A88F] font-bold text-sm transition group">
                <span className="border-b border-[#1A2B45] group-hover:border-[#00A88F] pb-1 mr-2">Learn more</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>

            <div className="bg-white p-8 md:p-12 space-y-8 border border-slate-200 shadow-sm">
              <div>
                <h4 className="text-[#1A2B45] font-semibold text-lg mb-2">Executing the 500 GW Mandate</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Meridian Energy is currently mapping contiguous land parcels and high-voltage evacuation nodes across India's highest-yield corridors.</p>
              </div>
              <div className="w-full h-px bg-slate-100"></div>
              <div>
                <h4 className="text-[#1A2B45] font-semibold text-lg mb-2">Pune Foundational Asset</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Anchoring our growth with a 50 MW hybrid (Solar + Wind + BESS) operational blueprint in Maharashtra.</p>
              </div>
              <div className="w-full h-px bg-slate-100"></div>
              <div>
                <h4 className="text-[#1A2B45] font-semibold text-lg mb-2">Multi-Tiered Revenue Structuring</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Securing core growth capital through Group Captive consortiums and third-party Open Access agreements.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. MERIDIAN STRATEGY OVERLAP CARD */}
      <section className="w-full bg-[#1A2B45] py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 xl:px-24">
          <div className="relative flex flex-col lg:flex-row items-center justify-end">
            
            {/* Background Image Placeholder - Flipped to the Right */}
            <div className="w-full lg:w-3/4 h-[400px] md:h-[500px] bg-slate-800 relative overflow-hidden group lg:absolute lg:right-0">
               <div className="absolute inset-0 bg-gradient-to-tl from-[#00A88F]/40 to-[#1A2B45] opacity-80 group-hover:scale-105 transition duration-700"></div>
               {/* Later, put an image of the Pune skyline or a massive solar grid here */}
               <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            {/* Overlapping Text Box - Flipped to the Left */}
            <div className="relative w-full lg:w-1/2 bg-white p-10 md:p-16 shadow-2xl mt-[-50px] lg:mt-0 z-20 lg:mr-auto">
              <p className="text-[#00A88F] font-bold tracking-widest uppercase text-xs mb-4">Investment Thesis</p>
              <h3 className="text-2xl md:text-4xl font-light text-[#1A2B45] mb-6 leading-tight">
                Capitalizing on India's 500 GW Mandate
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                India is no longer just an emerging market; it is the epicenter of global infrastructure growth. Driven by robust policy frameworks, rapid industrialization, and an aggressive national mandate to reach 500 GW of non-fossil capacity by 2030, the subcontinent presents a generational opportunity for institutional capital.
              </p>
              <Link href="/insights/india-500gw" className="inline-flex items-center text-white bg-[#1A2B45] hover:bg-[#00A88F] px-8 py-4 text-sm font-medium transition duration-300">
                Read our macro thesis
              </Link>
            </div>
            
          </div>
        </div>
      </section>

    </main>
  );
}
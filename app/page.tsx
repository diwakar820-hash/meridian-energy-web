"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // New Brookfield-Style Impact Slider State
  const [impactSlide, setImpactSlide] = useState(0);

  // Data for the Top Hero Slides
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
      subhead: "Deploying the 50 MW Talegaon Firm Dispatchable Renewable Energy pilot.",
      video: "/wind-bg.mp4", 
      buttonText: "Read the insight",
      buttonLink: "/insights/fdre"
    },
    {
      id: 2,
      tag: "Corporate",
      headline: "Structuring 24/7 Carbon-Free Energy",
      subhead: "Engineering absolute physical grid decarbonization for tier-one commercial off-takers.",
      video: "/grid-bg.mp4", 
      buttonText: "Strategic Capital",
      buttonLink: "/about"
    }
  ];

  // Data for the new Brookfield-Style Impact Slider
  const impactSlides = [
    {
      id: 0,
      image: "/india-macro.jpg",
      headline: "Powering Industries That Drive Economies",
      subhead: "Value & Impact",
      description: "Rewiring industrial systems—from manufacturing supply chains to national energy grids—requires bold infrastructure. Our energy platform is foundational in driving that change, delivering the physical decarbonization required to sustain India's macro-economic growth.",
      link: "/about"
    },
    {
      id: 1,
      image: "/talegaon-asset.jpg",
      headline: "Built for Absolute Grid Decarbonization",
      subhead: "Firm Dispatchable Architecture",
      description: "Intermittent generation is no longer sufficient for tier-one manufacturers. By integrating solar, wind, and dual-chemistry BESS, we engineer hybrid architectures that deliver uncompromising 24/7 baseload power to heavy industrial off-takers.",
      link: "/insights/fdre"
    },
    {
      id: 2,
      image: "/pipeline.jpg", 
      headline: "Executing the 500 GW Mandate",
      subhead: "Scalable Infrastructure",
      description: "Anchored by our foundational 50 MW pilot in Maharashtra...",
      link: "/portfolio"
    }
  ];

  // Auto-rotate Top Hero Slider
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 8000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  // Auto-rotate Impact Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setImpactSlide((prev) => (prev === impactSlides.length - 1 ? 0 : prev + 1));
    }, 7000); // Rotates every 7 seconds
    return () => clearInterval(timer);
  }, [impactSlides.length]);

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* 1. THE MACQUARIE HERO SLIDER */}
      <section className="relative w-full min-h-screen flex items-center bg-[#1A2B45] text-white overflow-hidden pt-24">
        {slides.map((slide, index) => (
          <video 
            key={slide.id}
            autoPlay loop muted playsInline 
            className={`absolute inset-0 w-full h-full object-cover object-top z-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-70' : 'opacity-0'}`}
          >
            <source src={slide.video} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-[#1A2B45]/30 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B45]/80 via-[#1A2B45]/40 to-transparent z-10 pointer-events-none"></div>

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

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-6">
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button 
                key={index}
                onClick={() => { setCurrentSlide(index); setIsPlaying(false); }}
                className={`h-[2px] transition-all duration-300 ${currentSlide === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/70'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button onClick={() => setIsPlaying(!isPlaying)} className="text-white hover:text-slate-300 transition" aria-label={isPlaying ? "Pause slider" : "Play slider"}>
            {isPlaying ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            )}
          </button>
        </div>
      </section>

      {/* 2. THE BROOKFIELD STATS BLOCK */}
      <section className="w-full bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-6 space-y-6">
              <p className="font-bold text-sm text-[#1A2B45] tracking-wide">Our Mandate</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1A2B45] leading-[1.2]">
                Grounded in operational heritage, we engineer absolute physical grid decarbonization.
              </h2>
            </div>
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
                <p className="text-5xl md:text-6xl font-light text-[#1A2B45]">2030</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE & IMPACT SLIDER (Brookfield Style) */}
      <section className="relative w-full min-h-[700px] flex items-end pb-24 md:pb-32 overflow-hidden text-white mt-12 bg-[#1A2B45]">
        
        {/* Background Image Crossfader */}
        {impactSlides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${impactSlide === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          ></div>
        ))}
        
        {/* Asymmetric Dark Overlay (Heavy on the right to match Brookfield) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/20 via-[#1A2B45]/90 to-[#1A2B45] lg:from-black/10 lg:via-[#1A2B45]/95 lg:to-[#0f1929]"></div>

        {/* Content Container */}
        <div className="relative z-20 w-full">
          
          {/* Micro-Slider Dots (Above the line) */}
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 xl:px-24 mb-6">
            <div className="flex space-x-2 items-center bg-black/20 w-fit px-3 py-2 border border-white/10 backdrop-blur-sm">
              {impactSlides.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setImpactSlide(index)}
                  className={`transition-all duration-300 ${impactSlide === index ? 'w-2 h-2 bg-white' : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/80'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* The Infinite Horizontal Line */}
          <div className="w-full h-px bg-white/20 mb-12"></div>

          {/* The Text Grid */}
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start min-h-[220px]">
            
            {/* Left Side: Headline */}
            <div className="lg:col-span-6">
               <h2 key={`headline-${impactSlide}`} className="text-4xl sm:text-5xl lg:text-5xl font-light leading-[1.15] tracking-tight animate-fade-in">
                 {impactSlides[impactSlide].headline}
               </h2>
            </div>

            {/* Right Side: Narrative & Button */}
            <div className="lg:col-span-6 lg:pt-2 lg:pl-12">
               <h3 key={`subhead-${impactSlide}`} className="font-bold mb-6 text-[#00A88F] uppercase tracking-widest text-xs animate-fade-in">
                 {impactSlides[impactSlide].subhead}
               </h3>
               <p key={`desc-${impactSlide}`} className="text-white/70 leading-relaxed mb-10 text-lg font-light max-w-lg animate-fade-in">
                 {impactSlides[impactSlide].description}
               </p>
               <Link href={impactSlides[impactSlide].link} className="inline-block bg-transparent border border-white hover:bg-white hover:text-[#1A2B45] text-white px-8 py-3.5 text-sm font-medium transition duration-300">
                 Learn More
               </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 4. MERIDIAN STRATEGY OVERLAP CARD */}
      <section className="w-full bg-[#1A2B45] py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 xl:px-24">
          <div className="relative flex flex-col lg:flex-row items-center justify-end">
            
            <div 
              className="w-full lg:w-3/4 h-[400px] md:h-[500px] bg-slate-800 relative overflow-hidden group lg:absolute lg:right-0 bg-cover bg-center transition-transform duration-700"
              style={{ backgroundImage: "url('/india-macro.jpg')" }}
            >
               <div className="absolute inset-0 bg-gradient-to-tl from-[#00A88F]/30 to-[#1A2B45]/90 opacity-90 group-hover:opacity-70 transition-opacity duration-700"></div>
            </div>

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
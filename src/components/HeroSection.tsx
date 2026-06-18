import { motion } from "motion/react";
import { ChevronRight, ShieldCheck, Sparkles, AlertCircle, Cpu, ExternalLink } from "lucide-react";

export default function HeroSection() {
  const features = [
    "Chennai, India",
    "5 Weeks Intensive Training",
    "Industry Mentors",
    "Hands-On Labs",
    "Technical Interviews",
    "Final Hackathon"
  ];

  const scrollSmoothTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-20 overflow-hidden bg-[#050505]">
      
      {/* Background ambient lighting reminiscent of Lamborghini dashboard/NVIDIA keynotes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Deep Crimson accent spotlights (F1 / Apple red tone) */}
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-brand-red-deep/15 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-brand-red-highlight/10 rounded-full blur-[160px] animate-pulse-slow" />
        
        {/* Luxury Gold Ambient glow (Rolex slate tone) */}
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-gold/10 rounded-full blur-[130px]" />
        
        {/* Floating red energy streak vectors */}
        <div className="absolute top-[15%] right-[15%] w-72 h-[1px] bg-gradient-to-r from-transparent via-brand-red-highlight/40 to-transparent rotate-12" />
        <div className="absolute bottom-[30%] left-[10%] w-96 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent -rotate-12 animate-pulse" />

        {/* Diagonal semiconductor board trace grids */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        
        {/* Premium Badge announcement */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-brand-gold/30 bg-[#0d0d0d]/85 shadow-[0_0_25px_rgba(214,175,55,0.15)] mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-gold-glow animate-spin-slow" />
          <span className="font-mono text-[10px] sm:text-xs font-bold tracking-[0.15em] text-white">
            ASEM × SHAKTI PROCESSOR ECOSYSTEM
          </span>
        </motion.div>

        {/* Dynamic Headings with high contrast F1 Gold & Red styling */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-white"
          >
            <span className="block text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              GSEP RISC-V
            </span>
            <span className="block mt-3 font-mono font-medium tracking-wide text-xs sm:text-sm text-brand-gold uppercase">
              ASEM MALAYSIA × SHAKTI INDIA SEMICONDUCTOR ALLIANCE
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-slate-100 tracking-tight max-w-3xl mx-auto"
          >
            Malaysia <span className="text-brand-red-highlight font-mono">&rarr;</span> India Semiconductor Talent Development Programme
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed font-light"
          >
            A 5-week intensive semiconductor engineering programme covering RISC-V architecture, RTL design, physical design, FPGA development, verification, debugging and SoC integration.
          </motion.p>
        </div>

        {/* Luxury Action Button Segment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollSmoothTo("mission-control-dashboard")}
            className="group w-full sm:w-auto relative px-8 py-4 rounded-lg font-mono font-bold text-xs tracking-widest uppercase transition-all duration-300 bg-gradient-to-r from-brand-gold to-brand-gold-glow text-[#050505] shadow-lg shadow-brand-gold/25 hover:shadow-brand-gold-glow/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Launch Command Center</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button
            onClick={() => scrollSmoothTo("mission-control-dashboard")}
            className="w-full sm:w-auto px-8 py-4 rounded-lg font-mono font-bold text-xs tracking-widest uppercase border border-brand-red-highlight bg-transparent text-white hover:bg-brand-red-deep/40 transition-all duration-300 cursor-pointer"
          >
            Open Study Planner
          </button>
        </motion.div>

        {/* Core Checklist Below CTA (Strictly Derived from requirements) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 max-w-4xl font-mono text-[11px] sm:text-xs text-slate-350 tracking-wider"
        >
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-1.5 px-3 py-1 bg-[#0d0d0d] border border-brand-gold/10 rounded-md">
              <span className="text-brand-gold font-bold">✓</span>
              <span>{feature}</span>
            </div>
          ))}
        </motion.div>

        {/* Centerpiece: Large 3D RISC-V Processor Chip with metallic gold pins */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative mt-20 p-12 w-full max-w-[340px] flex justify-center items-center perspe-1000"
        >
          {/* External golden trace animation loops */}
          <div className="absolute inset-0 border border-brand-gold/10 rounded-full scale-110 animate-ping opacity-25 pointer-events-none" />
          <div className="absolute inset-0 border border-brand-red-highlight/15 rounded-full scale-125 animate-pulse-slow pointer-events-none" />

          {/* Golden/Red electrical tracer circular tracks */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute w-72 h-72 rounded-full border border-dashed border-brand-gold/15"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
            className="absolute w-80 h-80 rounded-full border border-dashed border-brand-red-highlight/10"
          />

          {/* PHYSICAL PROCESSOR CORE */}
          <div className="relative group">
            
            {/* Symmetrical Silicon Hardware gold pins extending out on North, South, East, West sides */}
            {/* North Pins */}
            <div className="absolute -top-[14px] left-8 right-8 flex justify-between px-2 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-1.5 h-[14px] bg-brand-gold border-r border-black shadow-md rounded-t-sm" />
              ))}
            </div>
            {/* South Pins */}
            <div className="absolute -bottom-[14px] left-8 right-8 flex justify-between px-2 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-1.5 h-[14px] bg-brand-gold border-r border-black shadow-md rounded-b-sm" />
              ))}
            </div>
            {/* West Pins */}
            <div className="absolute top-8 bottom-8 -left-[14px] flex flex-col justify-between py-2 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-1.5 w-[14px] bg-brand-gold border-b border-black shadow-md rounded-l-sm" />
              ))}
            </div>
            {/* East Pins */}
            <div className="absolute top-8 bottom-8 -right-[14px] flex flex-col justify-between py-2 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-1.5 w-[14px] bg-brand-gold border-b border-black shadow-md rounded-r-sm" />
              ))}
            </div>

            {/* Main Chip Matrix Body */}
            <motion.div
              whileHover={{ 
                scale: 1.06, 
                rotateY: 8, 
                rotateX: -8,
                boxShadow: "0px 0px 45px rgba(244, 197, 66, 0.45)" 
              }}
              className="relative w-56 h-56 rounded-2xl bg-gradient-to-br from-[#0c0c0c] via-[#151515] to-[#040404] border-[4px] border-brand-gold p-4 shadow-[0_0_35px_rgba(212,175,55,0.25)] transition-all duration-300 flex flex-col items-center justify-between pointer-events-auto"
            >
              {/* Corner silicon tech notches */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-brand-red-highlight/70 rounded-tl-md" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-brand-red-highlight/70 rounded-br-md" />

              {/* Silicon die thermal code printed in corner */}
              <div className="font-mono text-[7px] text-zinc-500 self-start">
                DIE-MODEL: SHAKTI_IITM_2026_V4
              </div>

              {/* Chip Core Laser engraving */}
              <div className="flex flex-col items-center justify-center py-4 bg-black/40 rounded-xl border border-brand-gold/15 w-full h-full">
                <Cpu className="w-12 h-12 text-brand-gold-glow animate-pulse mb-2" />
                <span className="font-display font-extrabold text-[#ffffff] tracking-[0.25em] text-lg uppercase">
                  RISC-V
                </span>
                <span className="font-sans font-black text-brand-gold text-[10px] tracking-widest uppercase">
                  SHAKTI ECOSYSTEM
                </span>
                <span className="font-mono text-zinc-500 text-[8px] mt-1.5 tracking-wider bg-brand-red-deep/20 px-2 py-0.5 rounded border border-brand-red-highlight/30">
                  SECURE TAPE-OUT
                </span>
              </div>

              <div className="font-mono text-[7px] text-zinc-550 text-zinc-400 self-end">
                ASEM x IIT MADRAS
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

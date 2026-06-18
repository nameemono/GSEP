import { motion } from "motion/react";
import { Cpu, ArrowUpRight, Mail, MapPin, Globe, Shield, ExternalLink, ChevronUp } from "lucide-react";

export default function FooterSection() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

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
    <footer className="relative bg-[#0d0d0d] border-t border-brand-gold/15 overflow-hidden font-sans">
      
      {/* MY SEMICONDUCTOR JOURNEY INTEGRATIVE STATS PANEL (REPLACING MARKETING CTA) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        
        {/* Animated backglow around processor package */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: -360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="w-[350px] h-[350px] rounded-full bg-brand-gold/5 blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-10">
          
          <div className="space-y-4">
            <span className="p-1.5 px-4 rounded bg-brand-red-deep/20 text-brand-red-highlight border border-brand-red-highlight/30 font-mono text-xs font-bold uppercase tracking-[0.2em]">
              PORTFOLIO LOGS & STATISTICS
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
              My Semiconductor <span className="text-brand-gold">Journey</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              Tracking my progress through the GSEP RISC-V Programme at IIT Madras, Chennai.<br />
              <span className="text-brand-gold font-mono font-bold mt-1 inline-block text-xs uppercase tracking-wider">From TESL Graduate &rarr; Semiconductor Engineer</span>
            </p>
          </div>

          {/* Core Live Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto text-left">
            <div className="p-4 bg-[#050505] border border-brand-gold/10 rounded-xl">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">📅 Programme Start</span>
              <p className="font-mono text-xs font-bold text-white mt-1">20 June 2026</p>
            </div>
            <div className="p-4 bg-[#050505] border border-brand-gold/10 rounded-xl">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">📍 Location</span>
              <p className="font-mono text-xs font-bold text-white mt-1">IIT Madras, Chennai</p>
            </div>
            <div className="p-4 bg-[#050505] border border-brand-gold/10 rounded-xl">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">🎯 Goal</span>
              <p className="font-mono text-xs font-bold text-white mt-1">RTL / Verification</p>
            </div>
            <div className="p-4 bg-[#050505] border border-brand-gold/15 rounded-xl">
              <span className="text-[10px] font-mono text-[#FFD700] uppercase tracking-wider">📚 Learning Progress</span>
              <p className="font-mono text-xs font-bold text-brand-gold mt-1">78% Average</p>
            </div>
            <div className="p-4 bg-[#050505] border border-brand-gold/10 rounded-xl">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">🔥 Current Focus</span>
              <p className="font-mono text-xs font-bold text-white mt-1">Verilog HDL</p>
            </div>
          </div>

          {/* Interactive Navigation Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto pt-6 font-mono text-xs">
            <button
              onClick={() => scrollSmoothTo("mission-control-dashboard")}
              className="w-full sm:w-auto relative px-6 py-4 rounded-lg font-bold tracking-widest uppercase transition-all duration-300 bg-gradient-to-r from-brand-gold to-brand-gold-glow text-[#050505] shadow-lg shadow-brand-gold/20 hover:shadow-brand-gold-glow/40 hover:-translate-y-0.5 cursor-pointer"
            >
              View Preparation Progress
            </button>

            <button
              onClick={() => scrollSmoothTo("mission-control-dashboard")}
              className="w-full sm:w-auto px-6 py-4 rounded-lg font-bold tracking-widest uppercase border border-slate-800 bg-[#050505] text-slate-300 hover:text-white hover:border-slate-700 transition-all duration-300 cursor-pointer"
            >
              Explore Learning Roadmap
            </button>

            <button
              onClick={() => scrollSmoothTo("mission-control-dashboard")}
              className="w-full sm:w-auto px-6 py-4 rounded-lg font-bold tracking-widest uppercase border border-brand-red-highlight bg-transparent text-white hover:bg-brand-red-deep/20 transition-all duration-300 cursor-pointer"
            >
              Track Programme Timeline
            </button>
          </div>

        </div>

      </div>

      {/* CORPORATE FOOTER LINKS & DETAILS */}
      <div className="border-t border-brand-gold/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left items-start">
          
          {/* Logo / Badge */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-brand-gold/30 flex items-center justify-center">
                <Cpu className="w-4.5 h-4.5 text-brand-gold" />
              </div>
              <span className="font-display font-bold text-sm tracking-widest text-[#FFD700]">
                GSEP × SHAKTI
              </span>
            </div>
            <p className="font-sans text-xs text-slate-400 leading-relaxed font-light">
              <strong>Built by Muhammad Nazmie Bin Mohd Nasir</strong><br />
              Documenting my journey into Semiconductor Engineering through the GSEP RISC-V Programme at IIT Madras.
            </p>
          </div>

          {/* Quick specs */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-[9px] uppercase tracking-widest font-black text-slate-400">
              Partnership Alignment
            </h4>
            <div className="space-y-2">
              <a href="https://shakti.org.in/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-xs text-slate-400 hover:text-brand-gold transition-colors">
                <Globe className="w-3.5 h-3.5 text-brand-gold-glow" />
                <span className="font-mono text-[11px]">SHAKTI Core (IIT Madras)</span>
                <ExternalLink className="w-3 h-3 text-slate-600" />
              </a>
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <Shield className="w-3.5 h-3.5 text-brand-gold" />
                <span className="font-mono text-[11px]">ASEM Education Services</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-brand-red-highlight" />
                <span className="font-mono text-[11px]">Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Description Coordination Info */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-[9px] uppercase tracking-widest font-black text-slate-400">
              Technical Route Coordinator
            </h4>
            <p className="font-sans text-[11px] text-slate-400 leading-snug">
              Malaysia GSEP mobilization project bridged to top microelectronics pathways.
            </p>
            <p className="font-sans text-[10px] text-slate-500 font-light leading-relaxed">
              Coordinates secured under active project leads. Personal milestones tracked dynamically.
            </p>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-brand-gold/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="font-mono text-[10px] text-slate-500">
            &copy; {new Date().getFullYear()} GSEP RISC-V Programme (ASEM × SHAKTI). All rights reserved.
          </p>
          
          <button
            onClick={handleScrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-brand-gold/10 bg-[#050505] font-mono text-[10px] text-brand-gold hover:text-brand-gold-glow transition-colors mt-4 sm:mt-0 cursor-pointer"
          >
            <ChevronUp className="w-3.5 h-3.5" />
            <span>Reset Clock Pointer</span>
          </button>
        </div>

      </div>

    </footer>
  );
}

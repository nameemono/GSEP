import { motion } from "motion/react";
import { Cpu, ArrowUpRight, Mail, MapPin, Globe, Shield, ExternalLink, ChevronUp } from "lucide-react";

export default function FooterSection() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900/60 overflow-hidden font-sans">
      
      {/* FINAL CTA COMPONENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        
        {/* Animated backglow around processor package */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          
          {/* Animated CPU chip glyph */}
          <div className="relative inline-flex items-center justify-center p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-xl mb-2">
            <Cpu className="w-8 h-8 text-cyan-400 animate-pulse" />
            <span className="absolute -inset-1 rounded-2xl border border-dashed border-cyan-400/20 active:border-cyan-400" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Ready to Begin Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500">
              Semiconductor Journey?
            </span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed font-light">
            Secure your register slot for the next GSEP RISC-V boot cycle. Elevate your portfolio under active silicon engineering leads at top research facilities.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-4">
            <a
              href="mailto:nazmienasir98@gmail.com"
              className="group w-full sm:w-auto relative px-7 py-3.5 rounded-xl font-display font-semibold text-xs tracking-widest uppercase transition-all duration-300 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:-translate-y-0.5"
            >
              <span className="flex items-center justify-center space-x-1.5">
                <span>Apply Now</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>

            <a
              href="mailto:nazmienasir98@gmail.com"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-display font-semibold text-xs tracking-widest uppercase border border-slate-850 bg-slate-900/60 text-slate-350 hover:bg-slate-900 hover:text-white transition-colors duration-300 block text-center"
            >
              Contact ASEM
            </a>
          </div>

        </div>

      </div>

      {/* CORPORATE FOOTER LINKS & DETAILS */}
      <div className="border-t border-slate-900 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left items-start">
          
          {/* Logo / Badge */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-cyan-400/30 flex items-center justify-center">
                <Cpu className="w-4.5 h-4.5 text-cyan-400" />
              </div>
              <span className="font-display font-bold text-sm tracking-widest text-slate-100">
                GSEP RISC-V
              </span>
            </div>
            <p className="font-sans text-xs text-slate-500 leading-relaxed font-light">
              Coordinated global technical employment sandbox bridging microelectronics design centers with top graduates inside high-performance ASIC/RTL pathways.
            </p>
          </div>

          {/* Quick specs */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-[9px] uppercase tracking-widest font-black text-slate-400">
              Partnership Alignment
            </h4>
            <div className="space-y-2">
              <a href="https://shakti.org.in/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-xs text-slate-400 hover:text-cyan-400 transition-colors">
                <Globe className="w-3.5 h-3.5 text-indigo-500" />
                <span className="font-mono text-[11px]">SHAKTI Core (IIT Madras)</span>
                <ExternalLink className="w-3 h-3 text-slate-600" />
              </a>
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <Shield className="w-3.5 h-3.5 text-cyan-500" />
                <span className="font-mono text-[11px]">ASEM Education Services</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-purple-500" />
                <span className="font-mono text-[11px]">Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Support Email */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-[9px] uppercase tracking-widest font-black text-slate-400">
              Technical Coordinator
            </h4>
            <div className="space-y-2">
              <a href="mailto:nazmienasir98@gmail.com" className="flex items-center space-x-2 text-xs text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span className="font-mono text-[11px] truncate">nazmienasir98@gmail.com</span>
              </a>
            </div>
            <p className="font-sans text-[10px] text-slate-600 leading-snug pt-1">
              Malaysian coordinates processed through official GSEP design partner divisions.
            </p>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-slate-900/60 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="font-mono text-[10px] text-slate-600">
            &copy; {new Date().getFullYear()} GSEP RISC-V Programme (ASEM × SHAKTI). All rights reserved.
          </p>
          
          <button
            onClick={handleScrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-900 bg-slate-950 font-mono text-[10px] text-slate-500 hover:text-cyan-400 transition-colors mt-4 sm:mt-0 cursor-pointer"
          >
            <ChevronUp className="w-3.5 h-3.5" />
            <span>Reset Clock Pointer</span>
          </button>
        </div>

      </div>

    </footer>
  );
}

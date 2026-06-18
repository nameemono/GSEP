import { motion } from "motion/react";
import { Cpu, Mail, MapPin, Globe, Shield, ExternalLink, ChevronUp, Sparkles, Navigation } from "lucide-react";
import { Language, translations } from "../lib/translations";

interface RoadNode {
  label: string;
  emoji: string;
  desc: string;
}

const ROADMAP_NODES: RoadNode[] = [
  { label: "Malaysia", emoji: "🇲🇾", desc: "ASEM GSEP Selection" },
  { label: "Flight to Chennai", emoji: "✈️", desc: "Departure Protocol" },
  { label: "IIT Madras Entrance", emoji: "🏫", desc: "Five-Week Residency" },
  { label: "RISC-V Core Training", emoji: "⚙️", desc: "Verilog & RTL Labs" },
  { label: "Technical Interviews", emoji: "🎤", desc: "Silicon Careers Gateways" },
  { label: "Calibrating Hackathon", emoji: "🏆", desc: "SoC Assembly Drills" },
  { label: "Semiconductor Career", emoji: "🚀", desc: "TSMC & AMD Pipelines" }
];

export default function FooterSection({ lang }: { lang: Language }) {
  const t = translations[lang];

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollSmoothTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#0F172A] border-t border-[#C8A96B]/20 overflow-hidden font-sans text-left">
      
      {/* 1. BRAND ROADMAP TIMELINE PANEL (REPLACING OLD MARKETING STATS) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-white/5">
        
        <div className="text-center max-w-4xl mx-auto space-y-12">
          
          <div className="space-y-4">
            <span className="p-1.5 px-4 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/25 font-mono text-[9px] font-bold uppercase tracking-[0.2em] inline-block">
              THE GSEP CHRONICLE ROUTE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-none">
              Residency <span className="text-brand-gold">Journey Overview</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              Mapping Nazmie's operational milestones from the initial scholarship offer in Malaysia up to active corporate career sign-offs.
            </p>
          </div>

          {/* ROADMAP GRAPH ASSEMBLY - Apple & NVIDIA Hub Style Horizontal Layout */}
          <div className="relative pt-8 pb-12 overflow-x-auto scroller-hidden">
            {/* Connecting centerline vector */}
            <div className="absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-brand-gold via-[#3B82F6] to-zinc-800 hidden lg:block" />

            <div className="flex flex-row lg:flex-nowrap justify-between gap-8 min-w-[900px] px-8">
              {ROADMAP_NODES.map((node, idx) => {
                const isLast = idx === ROADMAP_NODES.length - 1;
                return (
                  <div key={idx} className="relative flex flex-col items-center flex-1 text-center space-y-4 group">
                    
                    {/* Circle timeline pointer node */}
                    <div className="w-14 h-14 rounded-2xl bg-[#1E293B] border border-white/10 group-hover:border-brand-gold/40 shadow-xl flex items-center justify-center text-2xl transition-all duration-300 z-10 relative">
                      <span className="group-hover:scale-110 transition-transform">{node.emoji}</span>
                      
                      {/* Connection marker for mobile or fallback */}
                      {!isLast && (
                        <div className="absolute top-1/2 left-full w-8 h-[2px] bg-zinc-800 lg:hidden -translate-y-1/2" />
                      )}
                    </div>

                    {/* Step description headers */}
                    <div className="space-y-1">
                      <h4 className="font-display font-medium text-xs sm:text-sm text-white uppercase tracking-wider group-hover:text-brand-gold transition-colors">
                        {node.label}
                      </h4>
                      <p className="font-mono text-[9px] text-[#C8A96B] uppercase font-bold tracking-wider">
                        {node.desc}
                      </p>
                    </div>

                    {/* Connect indicator arrow */}
                    {!isLast && (
                      <span className="font-mono text-[10px] text-zinc-600 hidden lg:block absolute top-[43px] left-[70%] z-20">
                        &rarr;
                      </span>
                    )}

                  </div>
                );
              })}
            </div>
          </div>

          {/* Core Interactive Navigation button pathways */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto pt-6 font-mono text-xs">
            <button
              onClick={() => scrollSmoothTo("mission-control-dashboard")}
              className="w-full sm:w-auto relative px-6 py-4 rounded-xl font-bold tracking-widest uppercase transition-all duration-300 bg-gradient-to-r from-brand-gold to-[#C8A96B] hover:to-brand-gold text-black shadow-lg shadow-brand-gold/15 hover:shadow-brand-gold-glow/35 hover:-translate-y-0.5 cursor-pointer text-center"
            >
              View Preparation Progress
            </button>
            <button
              onClick={() => scrollSmoothTo("daily-timeline")}
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-bold tracking-widest uppercase border border-white/10 bg-[#1E293B] text-slate-300 hover:text-white hover:border-white/20 transition-all duration-300 cursor-pointer text-center"
            >
              Explore Daily Agenda
            </button>
          </div>

        </div>

      </div>

      {/* 2. CORPORATE FOOTER ADDRESS DETAILS & RIGHTS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 text-left items-start">
          
          {/* LHS block */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-2xl bg-[#1E293B] border border-brand-gold/20 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-brand-gold animate-pulse" />
              </div>
              <span className="font-display font-medium text-sm tracking-widest text-[#F8FAFC]">
                GSEP × SHAKTI CORE
              </span>
            </div>
            <p className="font-sans text-xs text-slate-300 leading-relaxed font-light">
              <strong>Built by Muhammad Nazmie Bin Mohd Nasir</strong><br />
              {t.footerAbout || "Documenting my journey from TESL graduate to Semiconductor Engineer through the GSEP RISC-V Programme at IIT Madras."}
            </p>
          </div>

          {/* Central columns */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-[9px] uppercase tracking-widest font-black text-slate-400">
              IIT Madras Coordinates
            </h4>
            <div className="space-y-2.5">
              <a href="https://shakti.org.in/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-xs text-slate-400 hover:text-brand-gold transition-colors">
                <Globe className="w-3.5 h-3.5 text-brand-blue-accent" />
                <span className="font-mono text-[11px]">SHAKTI Core (IIT Madras)</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <Shield className="w-3.5 h-3.5 text-brand-gold" />
                <span className="font-mono text-[11px]">Bilateral Fellowship</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span className="font-mono text-[11px]">{t.footerLoc || "Location: Chennai, India"}</span>
              </div>
            </div>
          </div>

          {/* RHS columns */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-[9px] uppercase tracking-widest font-black text-slate-400">
              Technical Route Coordinator
            </h4>
            <p className="font-sans text-[11px] text-slate-300 leading-snug">
              Malaysia GSEP mobilization project bridged to top microelectronics pathways.
            </p>
            <p className="font-sans text-[10px] text-slate-500 font-light leading-relaxed">
              Coordinates secured under active project leads. Personal milestones tracked dynamically.
            </p>
          </div>

        </div>

        {/* BOTTOM RIGHTS BAR */}
        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-slate-400">
            &copy; {new Date().getFullYear()} {t.footerRights || "Muhammad Nazmie Bin Mohd Nasir. All rights reserved."}
          </p>
          
          <button
            onClick={handleScrollToTop}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl border border-white/10 bg-[#1E293B] font-mono text-[10px] text-brand-gold hover:text-brand-gold-glow transition-all cursor-pointer hover:border-brand-gold/30"
          >
            <ChevronUp className="w-3.5 h-3.5" />
            <span>Reset Clock Pointer</span>
          </button>
        </div>

      </div>

    </footer>
  );
}

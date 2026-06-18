import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hammer, Cpu, ShieldCheck, Star, Sparkles, Terminal, Settings } from "lucide-react";

export default function TechStackSection() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  const categories = [
    {
      title: "Hardware Design",
      desc: "Architecting logical gates, synthesis parameters, and system layouts.",
      skills: [
        { name: "Verilog RTL Syntax Modeling", level: 95 },
        { name: "RTL Design & Clock Tree Synthesis", level: 90 },
        { name: "FPGA Prototyping & Mapping", level: 85 },
        { name: "Physical Design (Floorplanning & Routing)", level: 80 }
      ],
      tools: ["Verilog HDL", "Xilinx Vivado Platforms", "OpenLane Open-Source EDA", "Synopsys Compiler Map"],
      icon: Hammer,
      accentColor: "border-brand-gold/30 text-brand-gold"
    },
    {
      title: "Processor Architecture",
      desc: "Mastering the core structures of high-performance RISC-V compute engines.",
      skills: [
        { name: "RISC-V ISA Specifications", level: 98 },
        { name: "Assembly C/Assembly Microcode", level: 90 },
        { name: "Multi-Stage Pipeline Parallelism", level: 85 }
      ],
      tools: ["RV32IMAC ISA Standard", "SHAKTI Microcore Designs", "Bare-Metal Registers", "Spike ISA Simulators"],
      icon: Cpu,
      accentColor: "border-brand-red-highlight/35 text-brand-red-highlight"
    },
    {
      title: "Verification",
      desc: "Ensuring robustness through coverage metrics and automated testing.",
      skills: [
        { name: "Functional Coverage Analysis", level: 92 },
        { name: "Hardware JTAG Debugging", level: 88 },
        { name: "Static Timing Analysis (STA)", level: 85 }
      ],
      tools: ["SystemVerilog Assertions", "OpenOCD Debuggers", "GTKWave Probers", "Static Timing Constraints"],
      icon: ShieldCheck,
      accentColor: "border-brand-gold/30 text-brand-gold-glow"
    },
    {
      title: "Professional Skills",
      desc: "Empowering career branding and competitive interview readiness.",
      skills: [
        { name: "Silicon Recruiter Resume Optimization", level: 95 },
        { name: "LinkedIn & Portfolio Branding", level: 90 },
        { name: "Technical Technical Mock Screenings", level: 95 }
      ],
      tools: ["CV Structure Layouts", "LinkedIn Networking Schemes", "Interactive Mock Screenings", "Semiconductor Talent Ecosystems"],
      icon: Star,
      accentColor: "border-brand-red-highlight/35 text-brand-red-highlight"
    }
  ];

  const selectedCategory = categories[activeCategoryIdx];
  const IconComp = selectedCategory.icon;

  return (
    <section id="tech-stack" className="py-24 bg-[#050505] relative overflow-hidden">
      
      {/* Absolute high-end aesthetic ambient overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] left-[5%] w-80 h-80 bg-brand-red-deep/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[0.25em] font-bold text-brand-gold uppercase"
          >
            THE GSEP PROFESSIONAL METRIC REPORT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl sm:text-5xl font-black text-white mt-3 uppercase tracking-tight"
          >
            SKILLS ACQUIRED
          </motion.h2>
          <div className="h-1 w-20 bg-brand-red-highlight mx-auto mt-4 rounded-full" />
          <p className="font-sans text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed font-light">
            An interactive catalog mapping rigorous competence benchmarks across four crucial semiconductor pillars, backed by industry-standard systems.
          </p>
        </div>

        {/* CONTAINER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LHS: CATEGORIES SELECTOR PANEL */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-4">
            <span className="font-mono text-[10px] text-zinc-500 tracking-[0.25em] font-bold uppercase mb-1 px-1">
              Select Pillar
            </span>

            {categories.map((category, idx) => {
              const isActive = idx === activeCategoryIdx;
              const CardIcon = category.icon;
              return (
                <button
                  key={category.title}
                  onClick={() => setActiveCategoryIdx(idx)}
                  className={`p-5 rounded-xl border text-left flex items-start space-x-4 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#0d0d0d] border-brand-gold text-white shadow-[0_0_25px_rgba(212,175,55,0.18)]"
                      : "bg-[#050505] border-zinc-900 hover:border-brand-gold/20 hover:bg-[#0d0d0d]/40 text-slate-400 hover:text-white"
                  }`}
                >
                  <div className={`p-3 rounded-lg border flex-shrink-0 flex items-center justify-center transition-all ${
                    isActive ? "bg-[#050505] border-brand-gold/60 text-brand-gold-glow animate-pulse" : "bg-zinc-950 border-zinc-800 text-zinc-550 text-zinc-400"
                  }`}>
                    <CardIcon className="w-5 h-5 text-brand-gold" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className={`font-display font-bold text-xs sm:text-sm ${isActive ? "text-white" : "text-zinc-300"}`}>
                      {category.title}
                    </h4>
                    <p className="text-[11px] font-sans text-zinc-500 mt-1 lines-2 font-light">
                      {category.desc}
                    </p>
                  </div>

                  {isActive && (
                    <div className="h-2 w-2 rounded-full bg-brand-gold self-center animate-ping flex-shrink-0" />
                  )}
                </button>
              );
            })}

            {/* Custom note indicator */}
            <div className="p-4 rounded-xl border border-brand-gold/15 bg-[#0d0d0d]/30 mt-6 hidden lg:block text-left">
              <span className="font-mono text-[9px] text-brand-gold font-bold uppercase tracking-widest block mb-1">
                VALIDATION REGIME
              </span>
              <p className="font-sans text-[11px] text-zinc-400 leading-relaxed font-light">
                Graduates complete timing analyses and physical netlist extractions to demonstrate maximum industry preparedness.
              </p>
            </div>
          </div>

          {/* RHS: TECHNICAL COMPETENCE PROGRESS BAR GAUGES */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 bg-[#0d0d0d] border border-brand-gold/15 rounded-2xl shadow-xl relative text-left">
            
            {/* Ambient luxury grid corner */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-brand-red-highlight/30 rounded-tr-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-zinc-900 pb-5">
                <div>
                  <h4 className="font-display font-extrabold text-lg text-white">
                    {selectedCategory.title} MATRIX
                  </h4>
                  <p className="font-mono text-[10px] text-zinc-500 mt-1">
                    System values synchronized with global fab layouts.
                  </p>
                </div>

                <div className="flex items-center space-x-2 mt-3 sm:mt-0 px-2.5 py-1 rounded bg-brand-gold/10 text-brand-gold text-[10px] font-mono border border-brand-gold/20">
                  <Terminal className="w-3.5 h-3.5 text-brand-gold-glow animate-pulse" />
                  <span>Interactive Map</span>
                </div>
              </div>

              {/* GAUGES CONTENT */}
              <div className="space-y-6 py-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedCategory.title}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    {selectedCategory.skills.map((skill, skIdx) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between font-sans text-xs">
                          <span className="font-mono tracking-wide text-zinc-200 font-medium">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[11px] text-brand-gold-glow font-bold">
                            {skill.level}% Proficiency
                          </span>
                        </div>
                        
                        {/* Progressive Gauge bar with animating highlights */}
                        <div className="w-full h-2 rounded-full bg-[#050505] p-[1.5px] border border-zinc-900 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, delay: skIdx * 0.08, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-brand-gold via-brand-gold-glow to-brand-red-highlight shadow-[0_0_12px_rgba(244,197,66,0.5)]"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* ASSOCIATED TOOLS CHIPS CODES */}
            <div className="border-t border-zinc-900 pt-6 mt-8">
              <div className="flex items-center space-x-2 mb-4">
                <Settings className="w-4 h-4 text-zinc-500 animate-spin-slow" />
                <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest font-bold">
                  Associated Tools & EDA Platforms
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedCategory.tools.map((tag, tIdx) => (
                  <motion.span
                    initial={{ scale: 0.92, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: tIdx * 0.05 }}
                    key={tag}
                    className="px-2.5 py-1 rounded bg-[#050505] border border-zinc-800 font-mono text-[10px] text-zinc-300 hover:border-brand-gold/30 transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

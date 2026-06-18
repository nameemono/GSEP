import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, ArrowRight, Building, Layers, Sparkles, Cpu, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function PathwaySection() {
  const [selectedNodeId, setSelectedNodeId] = useState("riscv-eng");

  const careerNodes = [
    {
      id: "riscv-eng",
      title: "RISC-V Engineer",
      role: "Instruction Set Architect",
      desc: "Architect customized instructions, register alignments, and custom ISA subsets to accelerate hardware cryptography or AI matrix functions.",
      employers: ["NVIDIA GTC Core", "Qualcomm RISC-V Teams", "Arm Architecture Labs", "VENTANA Micro Systems"]
    },
    {
      id: "rtl-eng",
      title: "RTL Engineer",
      role: "Register Transfer Level Designer",
      desc: "Implement high-performance sequential RTL microarchitectures in Verilog, optimizing clock pipelines for tape-out designs.",
      employers: ["Intel Core Group", "AMD Graphics Core Team", "Apple WWDC Silicon", "SHAKTI Microcores"]
    },
    {
      id: "verif-eng",
      title: "Verification Engineer",
      role: "ASIC Pre-Silicon Validator",
      desc: "Run functional verification regressions, coverage assessments, and direct verification with SystemVerilog mock files.",
      employers: ["Synopsys IP", "Cadence Systems", "NVIDIA Verification Labs", "MediaTek Inc"]
    },
    {
      id: "fpga-eng",
      title: "FPGA Engineer",
      role: "Emulation & Prototyping Specialist",
      desc: "Synthesize and map multi-million gate RTL designs onto Xilinx and Altera FPGA development boards for real hardware verification.",
      employers: ["AMD (Xilinx)", "Intel (Altera)", "Defense Research Labs", "Autonomous Driving Labs"]
    },
    {
      id: "soc-eng",
      title: "SoC Design Engineer",
      role: "System-on-Chip Integrator",
      desc: "Coordinate core bus interconnects (AMBA AXI4/APB) and peripheral integration onto a singular, coherent silicon fabric.",
      employers: ["Broadcom SoC Ops", "Qualcomm Mobile", "Samsung Electronics", "NXP Semiconductors"]
    },
    {
      id: "physical-eng",
      title: "Physical Design Engineer",
      role: "ASIC Layout & Floorplanner",
      desc: "Translate RTL netlists into physics-based silicon layouts, executing static timing analyses (STA) and floorplanning drills.",
      employers: ["TSMC Foundries", "Synopsys Design", "Intel Foundry Services", "NVIDIA Physical Ops"]
    },
    {
      id: "embed-eng",
      title: "Embedded Engineer",
      role: "Bare-Metal Firmware Developer",
      desc: "Write bare-metal compilers, low-level kernel drivers, and flash memory bootloaders for newly manufactured RISC-V processor chips.",
      employers: ["Apple CoreOS", "Tesla Autopilot", "SpaceX Flight Avionics", "Embedded RTOS Labs"]
    },
    {
      id: "semic-eng",
      title: "Semiconductor Engineer",
      role: "Silicon Fabrication Architect",
      desc: "Supervise fabrication constraints, yield diagnosis, and tape-out evaluations with international foundry design files.",
      employers: ["GlobalFoundries", "ASE Group Tech", "NVIDIA Hardware", "Micron Memory Corp"]
    }
  ];

  const activeNode = careerNodes.find((n) => n.id === selectedNodeId) || careerNodes[0];

  return (
    <section id="career" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      
      {/* Decorative metal lines detail */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red-highlight/20 to-transparent" />
      <div className="absolute top-1/4 right-[5%] w-80 h-80 bg-brand-gold/5 rounded-full blur-[110px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[0.25em] font-bold text-brand-red-highlight uppercase"
          >
            THE GSEP SEMICONDUCTOR HIRING CORE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl sm:text-5xl font-black text-white mt-3 uppercase tracking-tight"
          >
            CAREER OUTCOMES
          </motion.h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto mt-4 rounded-full" />
          <p className="font-sans text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed font-light">
            An elite interactive career map. Toggle the nodes to reveal specialized responsibilities and matched international employer pipelines (TSMC, NVIDIA, Qualcomm, AMD, Intel, Synopsys, Apple).
          </p>
        </div>

        {/* ROADMAP LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LHS: CHOPPED PIPELINE WITH GLOWING ROADMAP LINKS */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            <div className="p-4 rounded-xl border border-brand-gold/15 bg-[#050505]">
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-brand-gold animate-ping" />
                <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest font-bold">
                  GSEP GRADUATE PIPELINE ROUTING DIAGRAM
                </span>
              </div>
            </div>

            <div className="relative p-6 rounded-2xl border border-brand-gold/15 bg-[#050505]/60 block relative min-h-[480px]">
              
              {/* Complex signal tracer routing wire lines */}
              <div className="absolute inset-4 z-0 pointer-events-none opacity-25">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Bus trace lines branching from Graduates to outcomes */}
                  <path d="M 40 220 L 120 220" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1.5" fill="none" />
                  
                  {/* Individual branching targets for the 8 nodes */}
                  <path d="M 120 220 L 120 40 L 220 40" stroke="rgba(244, 197, 66, 0.35)" strokeWidth="1" fill="none" />
                  <path d="M 120 220 L 120 90 L 220 90" stroke="rgba(244, 197, 66, 0.35)" strokeWidth="1" fill="none" />
                  <path d="M 120 220 L 120 140 L 220 140" stroke="rgba(244, 197, 66, 0.35)" strokeWidth="1" fill="none" />
                  <path d="M 120 220 L 120 190 L 220 190" stroke="rgba(244, 197, 66, 0.35)" strokeWidth="1" fill="none" />
                  <path d="M 120 220 L 120 240 L 220 240" stroke="rgba(244, 197, 66, 0.35)" strokeWidth="1" fill="none" />
                  <path d="M 120 220 L 120 290 L 220 290" stroke="rgba(244, 197, 66, 0.35)" strokeWidth="1" fill="none" />
                  <path d="M 120 220 L 120 340 L 220 340" stroke="rgba(244, 197, 66, 0.35)" strokeWidth="1" fill="none" />
                  <path d="M 120 220 L 120 395 L 220 395" stroke="rgba(244, 197, 66, 0.35)" strokeWidth="1" fill="none" />

                  {/* Red signal packet light running down selected path */}
                  <circle r="3.5" fill="#C1121F">
                    <animateMotion
                      dur="2.5s"
                      repeatCount="indefinite"
                      path={`M 40 220 L 120 220 L 120 ${
                        selectedNodeId === "riscv-eng" ? 40 :
                        selectedNodeId === "rtl-eng" ? 90 :
                        selectedNodeId === "verif-eng" ? 140 :
                        selectedNodeId === "fpga-eng" ? 190 :
                        selectedNodeId === "soc-eng" ? 240 :
                        selectedNodeId === "physical-eng" ? 290 :
                        selectedNodeId === "embed-eng" ? 340 : 395
                      } L 220 ${
                        selectedNodeId === "riscv-eng" ? 40 :
                        selectedNodeId === "rtl-eng" ? 90 :
                        selectedNodeId === "verif-eng" ? 140 :
                        selectedNodeId === "fpga-eng" ? 190 :
                        selectedNodeId === "soc-eng" ? 240 :
                        selectedNodeId === "physical-eng" ? 290 :
                        selectedNodeId === "embed-eng" ? 340 : 395
                      }`}
                    />
                  </circle>
                </svg>
              </div>

              {/* TWO SIDES LAYOUT VIEW */}
              <div className="grid grid-cols-12 gap-4 items-center h-full relative z-10 py-1">
                
                {/* START GRADUATE BADGE */}
                <div className="col-span-4 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-5 rounded-xl border-2 border-brand-red-highlight bg-[#050505] text-center shadow-[0_0_20px_rgba(193,18,31,0.25)] relative"
                  >
                    <div className="w-12 h-12 rounded-lg bg-brand-red-deep/20 text-brand-red-highlight flex items-center justify-center mx-auto mb-2">
                      <GraduationCap className="w-6 h-6 text-brand-red-highlight" />
                    </div>
                    <h5 className="font-display font-black text-[10px] sm:text-xs text-white uppercase tracking-widest leading-none">
                      GSEP GRADUATE
                    </h5>
                    <p className="text-[8px] font-mono text-zinc-500 mt-2 tracking-wider">
                      FAB DESIGN INITIATION
                    </p>
                  </motion.div>
                </div>

                <div className="col-span-1" />

                {/* END OUTCOME LIST VERTICAL NODES SCROLL */}
                <div className="col-span-7 flex flex-col justify-between space-y-2.5 max-h-[420px] overflow-y-auto pr-2 styled-scrollbar">
                  {careerNodes.map((node) => {
                    const isActive = node.id === selectedNodeId;
                    return (
                      <motion.button
                        key={node.id}
                        onClick={() => setSelectedNodeId(node.id)}
                        whileHover={{ x: 3 }}
                        className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "bg-[#0d0d0d] border-brand-gold text-white shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                            : "bg-[#050505] border-zinc-900 text-zinc-405 text-zinc-400 hover:border-brand-gold/25"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className={`h-2.5 w-2.5 rounded-full border ${isActive ? "bg-brand-gold border-brand-gold-glow animate-pulse" : "bg-[#050505] border-zinc-700"}`} />
                          <div>
                            <span className="font-display font-bold text-xs sm:text-sm tracking-wide block text-white">
                              {node.title}
                            </span>
                            <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest mt-0.5">
                              {node.role}
                            </span>
                          </div>
                        </div>

                        <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? "text-brand-gold translate-x-1" : "text-zinc-600"}`} />
                      </motion.button>
                    );
                  })}
                </div>

              </div>

            </div>

          </div>

          {/* RHS: SELECTED CAREER SPEC DETAILS BOX */}
          <div className="lg:col-span-5 h-full">
            <AnimatePresence mode="wait">
              {activeNode && (
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="p-6 sm:p-8 bg-[#050505] border border-brand-gold/15 rounded-2xl shadow-xl relative min-h-[470px] flex flex-col justify-between text-left"
                >
                  <div className="absolute top-0 right-0 p-3 bg-[#0d0d0d] border-l border-b border-brand-gold/15 rounded-tr-xl rounded-bl-xl font-mono text-[9px] text-brand-gold-glow tracking-widest font-bold">
                    SPEC_UNIT_{activeNode.id.toUpperCase()}
                  </div>

                  <div className="space-y-6">
                    <div className="pt-2">
                      <span className="font-mono text-[9px] tracking-[0.2em] font-bold text-zinc-500 uppercase">
                        {activeNode.role}
                      </span>
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mt-1.5 leading-tight tracking-tight">
                        {activeNode.title}
                      </h3>
                      <div className="h-[2px] w-12 bg-brand-gold mt-3" />
                      <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-4 font-light leading-relaxed">
                        {activeNode.desc}
                      </p>
                    </div>

                    {/* Hiring Silicon giants */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 text-brand-gold">
                        <Building className="w-4 h-4" />
                        <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#ffffff]">
                          PREMIUM RECRUITER TARGETS
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {activeNode.employers.map((company) => (
                          <div
                            key={company}
                            className="px-3 py-1.5 rounded bg-[#0d0d0d] border border-zinc-900 flex items-center space-x-2"
                          >
                            <span className="h-1.5 w-1.5 bg-brand-red-highlight rounded-full" />
                            <span className="font-mono text-[10px] text-zinc-300 font-bold">{company}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* GSEP certification seal */}
                  <div className="border-t border-zinc-900 pt-6 mt-6 flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-[#0d0d0d] border border-brand-red-highlight/21 text-brand-red-highlight">
                      <Layers className="w-5 h-5 text-brand-red-highlight" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className="font-display font-extrabold text-xs text-white uppercase tracking-wider">GSEP CERTIFIED TARGET</span>
                        <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-spin-slow" />
                      </div>
                      <p className="font-sans text-[11px] text-zinc-550 text-zinc-500 mt-1 lines-2 font-light">
                        Coursework mapping, pre-silicon testbenches, and EDA synthesis lab assessments prepare certified graduates for this outcome.
                      </p>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

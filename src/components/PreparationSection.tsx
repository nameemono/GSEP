import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, Terminal, Cpu, Shield, Award, Calendar, Code, 
  HelpCircle, ChevronRight, ChevronDown, Sparkles, Play, Star, 
  Briefcase, CheckCircle2, AlertCircle, FileCode, CheckSquare, Layers 
} from "lucide-react";

export default function PreparationSection() {
  const [activeTrack, setActiveTrack] = useState<string>("foundation");
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    "arch": true,
    "linux": false,
    "git": false
  });

  const [activeWeek, setActiveWeek] = useState<string>("week-a");
  const [activeInterviewCard, setActiveInterviewCard] = useState<number | null>(null);

  // Expandable state handler for track cards
  const toggleCard = (cardId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const tracks = [
    {
      id: "foundation",
      label: "FOUNDATION LEVEL",
      badge: "Pre-Arrival Core",
      color: "border-brand-gold bg-brand-gold/5",
      cards: [
        {
          id: "arch",
          title: "Computer Architecture Fundamentals",
          topics: [
            "CPU vs GPU Architecture",
            "Hardware Registers & Sizing",
            "Memory Hierarchy: Cache, RAM, Non-Volatile Storage",
            "L1/L2/L3 Caching Operations",
            "Program Execution & ALU Dataflow",
            "Instruction Fetch-Decode-Execute Cycles",
            "Control Unit & Decoding Logic"
          ],
          resources: [
            "Neso Academy - Computer Architecture Series",
            "Gate Smashers - COA Tutorials",
            "Computer Organization and Design by Patterson & Hennessy (RISC-V Edition)"
          ],
          matters: "Forms the absolute foundational logic for compiling RISC-V microarchitectures and pipeline operations during the hardware design labs.",
          icon: Cpu
        },
        {
          id: "linux",
          title: "Linux Operating Systems & Shells",
          topics: [
            "Command-Line Terminal Navigation",
            "Unix Directory Tree Structures",
            "File Permissions & Ownership Configs (chmod, chown)",
            "Secure Shell Protocol (SSH) Remote Terminals",
            "Vim / Nano System Text Editors",
            "Environment Variables & Path Resolutions"
          ],
          commands: ["cd", "ls", "pwd", "mkdir", "rm", "cp", "mv", "grep", "cat"],
          resources: [
            "The Linux Command Line (No Starch Press)",
            "Linux Journey Academy Interactive Guides"
          ],
          matters: "Almost all EDA compiler setups and pre-silicon synthesis flows run inside enterprise Linux container arrays.",
          icon: Terminal
        },
        {
          id: "git",
          title: "Verbal Control Systems (Git & GitHub)",
          topics: [
            "SSH Key Authorizations with Collaborative Repos",
            "Cloning Repositories & Forking Frameworks",
            "Precise Git Committing & Logging",
            "Branching Strategies for Logic Fixes",
            "Pull Requests, Merge Conflicts & Reviews"
          ],
          resources: [
            "GitHub official Interactive Lab Guides",
            "Git Pro digital open resource textbook"
          ],
          matters: "Essential for synchronizing multi-million gate RTL codes and collaborative hardware testing benches among teams.",
          icon: FileCode
        }
      ]
    },
    {
      id: "hardware",
      label: "HARDWARE DESIGN TRACK",
      badge: "RTL Core Priority",
      color: "border-brand-red-highlight bg-brand-red-deep/5",
      cards: [
        {
          id: "verilog",
          title: "Verilog Hardware Description Language (HDL)",
          priority: 5,
          topics: [
            "Module Structure Declarations",
            "Inputs / Outputs & Bidirectional Ports",
            "Nets vs Registers (wires vs reg/logic)",
            "Synchronous & Asynchronous Always Blocks",
            "Combinational vs Sequential Logics",
            "D-Flip-Flops, Latches & Pulse Synchronizers",
            "Counters, Shift Registers & Finite State Machines (FSM)"
          ],
          projects: [
            "Smart Traffic Light Controllers with Delay Logic",
            "Parameterized Multi-Bit Binary Counters",
            "Modular Arithmetic Logic Unit (ALU)",
            "Universal Asynchronous Receiver-Transmitter (UART) Transmitter"
          ],
          matters: "The first week of classroom schedules starts at direct gate-level and behavior-level RTL layout designing.",
          icon: Code
        },
        {
          id: "digital",
          title: "Digital Logic Design & Theory",
          priority: 5,
          topics: [
            "Binary, Octal, Decimal & Hexadecimal Compilations",
            "Boolean Algebra, Minimizations & Karnaugh Maps (K-Maps)",
            "Combinational logic gates (AND, OR, XOR, NAND, NOR)",
            "Multiplexers, Demultiplexers, Decoders & Priority Encoders",
            "Sequential state elements (Latches, Edge-Triggered Flip-Flops)",
            "State Diagrams, Mealy vs Moore Finite State Machine syntheses"
          ],
          matters: "RTL programming translates exactly to Digital Logic gates. Timing closures and logic bugs cannot be calculated without this.",
          icon: Layers
        }
      ]
    },
    {
      id: "riscv",
      label: "RISC-V PROCESSOR TRACK",
      badge: "Architecture Spec",
      color: "border-brand-gold bg-brand-gold/5",
      cards: [
        {
          id: "riscv-isa",
          title: "RISC-V Instruction Set Architecture (ISA)",
          priority: 5,
          topics: [
            "General-Purpose Base Registers (x0 - x31 names & roles)",
            "Integer Arithmetic & Logical Instructions",
            "Unconditional Jumps & Conditional Branches",
            "Data Memory Access: Loads & Stores width alignments",
            "Architectural State & Register Files"
          ],
          types: [
            "R-Type (Register-Register calculations)",
            "I-Type (Register-Immediate load-arithmetics)",
            "S-Type (Store instructions targeting memory)",
            "B-Type (Conditional Branches offset maps)",
            "U-Type (Upper Immediate configurations)",
            "J-Type (Unconditional Jump operations)"
          ],
          matters: "The absolute flagship centerpiece of GSEP. You will customize, simulate, and analyze this core processor architecture.",
          icon: Cpu
        },
        {
          id: "assembly",
          title: "RISC-V Assembly Language Programming",
          topics: [
            "Register-to-Register Arithmetic Operations",
            "Branch-Driven Loop Formations",
            "Subroutines (Jal/Jalr instructions with return targets)",
            "Activation Stack Frames & Stack Pointers",
            "Memory Map Load/Store exercises"
          ],
          matters: "Debugging low-level CPU failures and writing bare-metal diagnostic test benches requires high-octane stack tracing.",
          icon: Terminal
        }
      ]
    },
    {
      id: "fpga-physical",
      label: "FPGA & PHYSICAL TRACK",
      badge: "Silicon Implementation",
      color: "border-brand-red-highlight bg-brand-red-deep/5",
      cards: [
        {
          id: "fpga",
          title: "FPGA Basics & Emulation",
          priority: 4,
          topics: [
            "Field Programmable Gate Array Core architectures",
            "Look-Up Tables (LUT), Configurable Logic Blocks & Flip-Flops",
            "RTL Compilation & Bitstream generation",
            "RTL Synthesis vs Physical Mapping onto Hardware Fabs"
          ],
          software: "Xilinx Vivado (highly recommended to install and verify license beforehand)",
          matters: "You will physically map and verify custom hardware RTL blocks on development boards during the intensive lab works.",
          icon: Layers
        },
        {
          id: "physical-flow",
          title: "Physical Design (RTL-to-GDSII Silicon)",
          topics: [
            "Macro Placement & Core Floorplanning boundaries",
            "Power Grid Distribution (Power Planning networks)",
            "Clock Tree Synthesis (CTS) for skew management",
            "Automatic Routing & Parasitic Extraction",
            "Physical Layout verification & GDSII Signoff checks"
          ],
          concepts: ["Static Slack Timing", "Routing Congestions", "Leakage/Dynamic Power", "Silicon Real-Estate Area"],
          matters: "You will use Open-Source EDA toolsets (OpenLane) to drive physical layouts and design floorplans.",
          icon: HardwareIcon
        }
      ]
    },
    {
      id: "verification-sta",
      label: "VERIFICATION & SOFTWARE TRACK",
      badge: "System Integration",
      color: "border-brand-gold bg-brand-gold/5",
      cards: [
        {
          id: "sta",
          title: "Static Timing Analysis (STA)",
          priority: 4,
          topics: [
            "Clock Periods & Edge triggers",
            "Setup Time Constraints: Data paths vs Clock paths",
            "Hold Time Constraints: Minimum path delay thresholds",
            "Timing Slack Analysis: Positive vs Negative Slack anomalies",
            "Timing paths identification (Port-to-Reg, Reg-to-Reg, Reg-to-Port)"
          ],
          matters: "Arguably the most critical pre-silicon gatekeeper. Chips cannot tape out without 100% Timing Closure across corners.",
          icon: Shield
        },
        {
          id: "verification-basics",
          title: "ASIC functional Verification Basics",
          topics: [
            "Directed Testbench layout structures (Stimulus-Driver-Monitor)",
            "Functional Coverage metrics vs Code Coverage metrics",
            "Interactive waveform analysis utilizing timing signals",
            "SystemVerilog Assertions (SVA) for protocol checkers"
          ],
          matters: "The massive final Capture The Bug hackathon tasks teams to trace, fix and verify multi-stage hardware glitches.",
          icon: Shield
        },
        {
          id: "c-prog",
          title: "Bare-Metal C Programming",
          priority: 5,
          topics: [
            "Data types, memory allocations & sizes",
            "Iteration Loops & conditional branches",
            "Modular structures & parameter inputs",
            "Memory pointers, addresses & dereferencing arrays",
            "Hardware Struct definitions & volatile registers"
          ],
          matters: "All processor firmware compilers and diagnostic software drivers are written in highly optimized bare-metal C.",
          icon: Code
        }
      ]
    },
    {
      id: "advanced",
      label: "ADVANCED ARCHITECTURE",
      badge: "Elite Level Prep",
      color: "border-brand-red-highlight bg-brand-red-deep/5",
      cards: [
        {
          id: "microarch",
          title: "Five-Stage Classical CPU Pipeline",
          topics: [
            "The 5 standard pipeline checkpoints (IF, ID, EX, MEM, WB)",
            "Data Hazards, Structure Hazards & Control Hazards",
            "Interlock Pipelines & Stall techniques",
            "Operand Forwarding pathways",
            "Branch Prediction strategy and Branch Target Buffers (BTB)"
          ],
          pipelineStages: ["1. IF (Instruction Fetch)", "2. ID (Decode & Register Read)", "3. EX (Execute ALU)", "4. MEM (Memory Access)", "5. WB (Register Write-Back)"],
          matters: "Essential for synthesizing the high-performance processor cores used during Week 3 and final evaluations.",
          icon: Cpu
        },
        {
          id: "interrupts",
          title: "Interrupts, Exceptions & CSRs",
          topics: [
            "Interrupt Handling protocols & traps",
            "Hardware Traps & Vector Addresses",
            "Context Switching CPU state storage routines",
            "Control and Status Registers (CSR) map setups"
          ],
          matters: "Highly popular core question chosen by leading silicon enterprise technical interviewers.",
          icon: Award
        }
      ]
    }
  ];

  // Self-Test interactive questions
  const interviewQuestions = [
    {
      q: "What is the key difference between combinational and sequential logic?",
      a: "Combinational logic outputs depend exclusively on the current inputs (e.g. logic gates, multiplexers, adders). Sequential logic outputs depend on both current inputs and the previous state history, demanding memory storage elements like D-Flip-Flops or Latches driven by a clock trigger."
    },
    {
      q: "What are setup time and hold time, and how do they impact timing slack?",
      a: "Setup time is the minimum duration the data signal must remain stable before the active clock edge arrives. Hold time is the minimum duration the data signal must remain stable after the active clock edge. Violations cause metastability issues, forcing clock speeds down or chip failures."
    },
    {
      q: "What is compiler synthesis, and how does it relate to RTL design?",
      a: "Synthesis translates register-transfer-level (RTL) behavioral hardware code (like Verilog) into a physical netlist of technology-specific standard logic gates, flip-flops, and interconnects, mapped relative to timing and cell constraints."
    },
    {
      q: "Explain how instructions flow through a standard 5-stage CPU pipeline.",
      a: "Instructions progress sequentially: 1. Instruction Fetch (IF) retrieves code from instruction memory. 2. Instruction Decode (ID) interprets opcode and reads register banks. 3. Execute (EX) handles ALU operations or target calculations. 4. Memory Access (MEM) reads/writes data memory. 5. Write-Back (WB) stores execution output back to the CPU register file."
    },
    {
      q: "What is an FPGA, and what is its primary role in a tape-out cycle?",
      a: "A Field Programmable Gate Array is a silicon chip featuring configurable arrays of logic gates, lookup tables, and routings. It allows electronic engineers to load and emulate pre-silicon RTL designs on physical hardware, running tests at near-ambient speed before committing to expensive ASIC fabrication masks."
    },
    {
      q: "What is a finite state machine (FSM), and what is the difference between Mealy and Moore types?",
      a: "An FSM is a digital behavioral model consisting of a finite number of states, transition rules, and outputs. In a Moore machine, the outputs depend solely on the current state. In a Mealy machine, outputs depend on both the current state and the current inputs, often leading to faster response but potentially longer critical paths."
    }
  ];

  const weeks_timeline = [
    {
      id: "week-a",
      title: "WEEK A",
      subtitle: "Digital Logic + C Programming Basics",
      checkpoints: [
        "Construct basic paper gate networks (AND/OR/XOR/LUT logic)",
        "Review C variables structures, memory addresses & dynamic pointers",
        "Implement basic truth tables and solve truth minimizations with Karnaugh Maps",
        "Target Hours: 15 Hours study checklist completed"
      ],
      glow: "border-brand-gold/30 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
    },
    {
      id: "week-b",
      title: "WEEK B",
      subtitle: "Verilog + Register Transfer Level (RTL) Design",
      checkpoints: [
        "Synthesize combinational logic circuits using behavioral always@(*) models",
        "Configure sequential D-Flip-Flop logic networks driven by positive clock edges",
        "Construct a modular 8-bit digital clock with clear tick registers",
        "Develop synchronous Finite State Machines with diagnostic states"
      ],
      glow: "border-brand-red-highlight/30 shadow-[0_0_20px_rgba(193,18,31,0.15)]"
    },
    {
      id: "week-c",
      title: "WEEK C",
      subtitle: "RISC-V Architectures & Assembly Drills",
      checkpoints: [
        "Trace CPU register file layouts from state x0 through state x31",
        "Decipher instruction mapping categories: R, I, S, B, U, J format maps",
        "Compose bare-metal assembly loop registers without software assistance",
        "Simulate instruction pipelines using lightweight visual terminal tracing tools"
      ],
      glow: "border-brand-gold/30 shadow-[0_0_20px_rgba(244,197,66,0.15)]"
    },
    {
      id: "week-d",
      title: "WEEK D",
      subtitle: "STA Principles + FPGA Boards + Interview Mock Checks",
      checkpoints: [
        "Simulate path timings: solve Setup / Hold violations on paper draft sheets",
        "Browse the Vivado EDA synthesis toolbar controls and user interfaces",
        "Complete 3 full sets of pre-silicon mock technical interviews",
        "Refine CV layout parameters optimized for semiconductor hiring systems"
      ],
      glow: "border-brand-red-highlight/30 shadow-[0_0_20px_rgba(139,0,0,0.22)]"
    }
  ];

  return (
    <section id="preparation" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      
      {/* Structural visual hardware circuit lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red-highlight/15 to-transparent" />
      
      {/* Spot background red and gold ambient rings */}
      <div className="absolute top-[10%] right-[12%] w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[8%] w-[450px] h-[450px] bg-brand-red-highlight/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Elite Mission Briefing Header representing top-tier styling */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-brand-red-highlight/30 bg-brand-red-deep/15 text-white mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-brand-red-highlight animate-ping" />
            <span className="font-mono text-[9px] sm:text-xs font-bold tracking-[0.2em] uppercase">
              GSEP MISSION BRIEFING: SYLLABUS INITIATION
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight"
          >
            How To Excel In The <span className="text-brand-gold">GSEP RISC-V</span> Programme
          </motion.h2>

          <p className="font-sans text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed font-light max-w-3xl mx-auto">
            Everything participants should learn before arriving in Chennai to maximize learning outcomes and stand out during technical interviews.
          </p>
          <div className="h-0.5 w-32 bg-brand-gold mx-auto mt-6" />
        </div>

        {/* ====================================================================== */}
        {/* SECTOR 1: 30-DAY PREPARATION CHRONOSEQUENTIAL ROADMAP (GOLD MILESTONES) */}
        {/* ====================================================================== */}
        <div className="mb-24 text-left">
          <div className="flex items-center space-x-3 mb-6">
            <Calendar className="w-5 h-5 text-brand-gold-glow" />
            <h3 className="font-mono text-xs sm:text-sm tracking-[0.2em] font-black text-brand-gold uppercase">
              01 // 30-DAY PREPARATION SEQUENCE
            </h3>
          </div>

          {/* Premium Visual Timeline Roadmaps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            {/* Golden running circuit wire connector behind timeline */}
            <div className="absolute top-[28px] left-[30px] right-[30px] h-[1.5px] bg-gradient-to-r from-brand-gold via-brand-red-highlight to-brand-gold/10 hidden md:block z-0 pointer-events-none" />

            {weeks_timeline.map((wk, idx) => (
              <motion.button
                key={wk.id}
                onClick={() => setActiveWeek(wk.id)}
                whileHover={{ y: -4 }}
                className={`relative p-5 rounded-xl border border-zinc-900 bg-[#050505]/95 text-left z-10 transition-all cursor-pointer ${
                  activeWeek === wk.id 
                    ? "bg-[#0c0c0c] border-brand-gold shadow-[0_0_25px_rgba(214,175,55,0.18)]" 
                    : "hover:border-zinc-800"
                }`}
              >
                {/* Visual milestone ring */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-mono text-xs font-black border transition-all ${
                    activeWeek === wk.id
                      ? "bg-brand-gold text-[#050505] border-brand-gold-glow shadow-[0_0_15px_rgba(212,175,55,0.3)] animate-pulse"
                      : "bg-[#0d0d0d] text-brand-gold border-brand-gold/20"
                  }`}>
                    0{idx + 1}
                  </div>
                  <span className="font-mono text-[9px] tracking-widest text-zinc-550 text-zinc-500 font-bold uppercase">
                    PHASE {wk.title.replace("WEEK ", "")}
                  </span>
                </div>

                <h4 className="font-display font-medium text-xs sm:text-sm text-white tracking-wide uppercase">
                  {wk.title}: {wk.subtitle.split(" + ")[0]}
                </h4>
                <p className="text-[10px] font-mono text-zinc-500 mt-1 lines-1">
                  {wk.subtitle}
                </p>

                {/* Micro indicators below */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-950 text-[10px] text-zinc-400">
                  <span className="font-mono tracking-widest">TIMELINE MAP</span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${activeWeek === wk.id ? "text-brand-gold translate-x-1" : "text-zinc-600"}`} />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Expanded Week Schedule Checkpoints Detail Panel (Luxury F1 styling) */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              {weeks_timeline.map((wk) => {
                if (wk.id !== activeWeek) return null;
                return (
                  <motion.div
                    key={wk.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 sm:p-8 rounded-xl border border-brand-gold/15 bg-[#0d0d0d] shadow-lg relative overflow-hidden"
                  >
                    {/* Glowing corner indicator */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-full blur-xl pointer-events-none" />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-4 pb-4 border-b border-zinc-900 mb-6">
                      <div>
                        <span className="font-mono text-[10px] text-brand-gold tracking-[0.15em] font-black uppercase">
                          ACTIVE SILICON PIPELINE SCHEDULE
                        </span>
                        <h4 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-tight mt-1">
                          {wk.title} SPECIFICATIONS - {wk.subtitle}
                        </h4>
                      </div>
                      <div className="px-3.5 py-1.5 rounded bg-brand-gold/20 border border-brand-gold-glow text-brand-gold text-[10px] font-mono whitespace-nowrap self-start">
                        ESTIMATED EFFORT: 18 HOURS
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {wk.checkpoints.map((check, cIdx) => (
                        <div key={cIdx} className="flex items-start space-x-3 p-3 rounded-lg bg-[#050505]/60 border border-zinc-900/80 hover:border-brand-gold/10 transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                          <p className="font-sans text-xs text-zinc-300 leading-relaxed font-light">
                            {check}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* ====================================================================== */}
        {/* SECTOR 2: EXPANDABLE SPECIFIC PREPARATION TRACK SPEC SHEETS (GOLD MIL) */}
        {/* ====================================================================== */}
        <div id="prep-tracks" className="mb-24 text-left">
          
          <div className="flex flex-wrap items-center justify-between gap-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <Code className="w-5 h-5 text-brand-red-highlight" />
              <h3 className="font-mono text-xs sm:text-sm tracking-[0.2em] font-black text-brand-gold uppercase">
                02 // REQUISITE COMPETENCE SPEC SHEETS
              </h3>
            </div>
            
            {/* Quick selector bar of tracks */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#050505] border border-zinc-900 rounded-xl">
              {tracks.map((track) => (
                <button
                  key={track.id}
                  onClick={() => {
                    setActiveTrack(track.id);
                    // Open the first card of that track as default
                    const firstCardId = track.cards[0]?.id;
                    if (firstCardId) {
                      setExpandedCards({ [firstCardId]: true });
                    }
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-[9px] font-mono tracking-widest uppercase transition-all whitespace-nowrap cursor-pointer ${
                    activeTrack === track.id
                      ? "bg-brand-gold/15 text-brand-gold font-bold shadow-[0_0_12px_rgba(212,175,55,0.15)] border border-brand-gold/20"
                      : "text-zinc-550 text-zinc-400 hover:text-white"
                  }`}
                >
                  {track.label.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Dynamic list of syllabus items inside active track */}
            <div className="lg:col-span-8 space-y-4">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTrack}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {tracks.find((t) => t.id === activeTrack)?.cards.map((card) => {
                    const CardIcon = card.icon;
                    const isExpanded = !!expandedCards[card.id];
                    return (
                      <div 
                        key={card.id}
                        className={`rounded-xl border bg-[#050505]/75 overflow-hidden transition-all duration-300 ${
                          isExpanded 
                            ? "border-brand-gold shadow-[0_0_20px_rgba(212,175,55,0.1)]" 
                            : "border-zinc-900 hover:border-brand-gold/30"
                        }`}
                      >
                        
                        {/* Header accordion trigger bar */}
                        <button
                          onClick={() => toggleCard(card.id)}
                          className="w-full p-5 flex items-center justify-between text-left focus:outline-none hover:bg-[#0c0c0c]/50 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center space-x-4 min-w-0">
                            
                            {/* Circuit schematic shape block */}
                            <div className={`p-3 rounded-lg border flex-shrink-0 flex items-center justify-center transition-all ${
                              isExpanded 
                                ? "bg-[#0d0d0d] border-brand-gold/50 text-brand-gold-glow shadow-[0_0_10px_rgba(212,175,55,0.15)] animate-pulse" 
                                : "bg-black border-zinc-800 text-zinc-500"
                            }`}>
                              <CardIcon className="w-5 h-5 text-brand-gold" />
                            </div>

                            <div className="min-w-0">
                              <div className="flex items-center space-x-2.5 flex-wrap gap-y-1">
                                <span className="font-mono text-[9px] tracking-widest text-brand-gold font-bold">
                                  {card.id.toUpperCase()}_REGISTER
                                </span>
                                {card.priority && (
                                  <div className="flex items-center space-x-0.5 text-brand-gold-glow font-bold text-[9px]">
                                    {Array.from({ length: 5 }).map((_, stIdx) => (
                                      <Star 
                                        key={stIdx} 
                                        className={`w-3 h-3 ${stIdx < card.priority! ? "fill-brand-gold text-brand-gold-glow" : "text-zinc-800"}`} 
                                      />
                                    ))}
                                    <span className="font-mono text-[8px] text-zinc-550 text-zinc-500 ml-1 uppercase">priority</span>
                                  </div>
                                )}
                              </div>
                              <h4 className="font-display font-black text-sm sm:text-base text-white mt-1.5 tracking-tight">
                                {card.title}
                              </h4>
                            </div>
                          </div>

                          <div className="p-1 rounded-md bg-zinc-950 border border-zinc-900 text-zinc-500">
                            {isExpanded ? (
                              <ChevronDown className="w-4 h-4 text-brand-gold" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-zinc-500" />
                            )}
                          </div>
                        </button>

                        {/* Interactive spec sheet details */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="border-t border-zinc-950 bg-[#0d0d0d]/40"
                            >
                              <div className="p-5 sm:p-6 space-y-6">
                                
                                {/* Topics outline block */}
                                <div className="space-y-3">
                                  <div className="flex items-center justify-between">
                                    <span className="font-mono text-[9px] text-zinc-550 text-zinc-450 tracking-widest font-black uppercase">
                                      SPECIFICATION PROTOCOLS
                                    </span>
                                    <div className="h-[1px] bg-zinc-900 flex-1 mx-3" />
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                                    {card.topics.map((topic, tIdx) => (
                                      <div key={tIdx} className="flex items-center space-x-2">
                                        <div className="h-1 w-1.5 bg-brand-red-highlight rounded-full" />
                                        <span className="font-sans text-xs text-zinc-300 font-light">
                                          {topic}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Custom nested blocks for commands & keys if present */}
                                {card.commands && (
                                  <div className="p-4 rounded-lg bg-black border border-zinc-900/80">
                                    <span className="font-mono text-[8px] text-brand-gold-glow tracking-widest font-bold block mb-2 uppercase">
                                      CRITICAL LINUX TERMINAL COMMANDS TO PRACTICE
                                    </span>
                                    <div className="flex flex-wrap gap-1.5">
                                      {card.commands.map((cmd) => (
                                        <code key={cmd} className="px-1.5 py-0.5 rounded bg-zinc-900 text-xs font-mono text-brand-gold font-bold border border-zinc-800">
                                          {cmd}
                                        </code>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {card.projects && (
                                  <div className="p-4 rounded-lg bg-brand-red-deep/10 border border-brand-red-highlight/21">
                                    <span className="font-mono text-[8px] text-brand-red-highlight tracking-widest font-black block mb-2 uppercase">
                                      RECOMMENDED MINI RTL CODE PROJECTS
                                    </span>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                      {card.projects.map((proj, pIdx) => (
                                        <div key={proj} className="flex items-center space-x-2 text-zinc-300">
                                          <div className="font-mono text-[9px] font-black text-brand-red-highlight bg-brand-red-deep/40 px-1 py-0.5 rounded">
                                            0{pIdx + 1}
                                          </div>
                                          <span className="font-sans text-xs font-light">{proj}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {card.types && (
                                  <div className="p-4 rounded-lg bg-[#050505] border border-zinc-900">
                                    <span className="font-mono text-[8px] text-brand-gold-glow tracking-widest font-bold block mb-2 uppercase">
                                      RISC-V FUNDAMENTAL INSTRUCTION DECODER TYPES
                                    </span>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                      {card.types.map((type, tIdx) => (
                                        <div key={tIdx} className="p-2.5 rounded bg-[#0d0d0d] border border-zinc-900">
                                          <span className="font-mono text-[10px] text-brand-gold font-bold">{type.split(" ")[0]}</span>
                                          <p className="text-[9px] text-zinc-550 text-zinc-400 mt-1 lines-2 font-light">{type.split(" (")[1]?.replace(")", "") || ""}</p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {card.pipelineStages && (
                                  <div className="p-4 rounded-lg bg-black border border-zinc-900/60 text-left">
                                    <span className="font-mono text-[8px] text-brand-gold tracking-widest font-bold block mb-2 uppercase">
                                      CLASSICAL 5-STAGE CPU PIPELINE REGISTER SEQUENCE
                                    </span>
                                    <div className="flex flex-col sm:flex-row justify-between gap-2">
                                      {card.pipelineStages.map((st, sIdx) => (
                                        <div key={st} className="flex-1 p-2 bg-[#0d0d0d] rounded border border-zinc-900 text-center flex flex-col items-center">
                                          <span className="font-mono text-[9px] text-brand-red-highlight font-bold">{st.split(" ")[0]}</span>
                                          <span className="font-sans text-[10px] text-zinc-300 font-light mt-0.5">{st.split(" ").slice(1).join(" ")}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Recommended resources section */}
                                <div className="space-y-2">
                                  <span className="font-mono text-[9px] text-zinc-500 tracking-widest font-bold uppercase block">
                                    RECOMMENDED STUDY COMPILATIONS
                                  </span>
                                  <div className="space-y-1">
                                    {card.resources?.map((res, rIdx) => (
                                      <div key={rIdx} className="flex items-center space-x-2 text-[11px] text-zinc-400 font-light pb-1 border-b border-zinc-900/40 last:border-0">
                                        <span className="text-brand-gold font-bold">▶</span>
                                        <span>{res}</span>
                                      </div>
                                    ))}
                                    {card.software && (
                                      <div className="flex items-center space-x-2 text-[11px] text-zinc-400 font-light">
                                        <span className="text-brand-gold font-bold">▶</span>
                                        <span>Software Suite: <code className="text-[10px] font-mono text-zinc-100 bg-zinc-900 px-1 py-0.5 rounded border border-zinc-800">{card.software}</code></span>
                                      </div>
                                    )}
                                  </div>
                                </div>

                                {/* Why it matters card overlay */}
                                <div className="p-4 rounded-lg bg-zinc-950 border border-brand-gold/15 flex items-start space-x-3">
                                  <AlertCircle className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                                  <div>
                                    <span className="font-mono text-[8px] text-brand-gold font-black tracking-widest block uppercase mb-1">
                                      WHY THIS PILLAR CRITICALLY MATTERS
                                    </span>
                                    <p className="font-sans text-xs text-zinc-400 leading-relaxed font-light">
                                      {card.matters}
                                    </p>
                                  </div>
                                </div>

                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

            </div>

            {/* RHS: GLOWING MISSION CHECKPOINT METADATA OVERVIEW */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-6 rounded-2xl bg-[#0d0d0d] border border-brand-red-highlight/25 text-left relative overflow-hidden shadow-md">
                
                {/* Embedded circuit laser effect */}
                <div className="absolute right-0 top-0 h-[2px] w-1/2 bg-brand-red-highlight animate-pulse" />

                <span className="font-mono text-[9px] text-[#C1121F] tracking-[0.2em] font-black uppercase block mb-1">
                  MISSION PROTOCOL
                </span>
                <h4 className="font-display font-black text-sm text-white uppercase tracking-tight mb-4">
                  PRE-ARRIVAL DEPLOYMENT CHECKLIST
                </h4>

                <p className="font-sans text-xs text-zinc-400 leading-relaxed font-light mb-6">
                  Before arriving at the classrooms in Chennai, ensure you possess structural fluency across all tracks to stand out from Day 1.
                </p>

                <div className="space-y-3.5 pt-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded bg-brand-gold/10 border border-brand-gold-glow flex items-center justify-center text-brand-gold font-mono text-[9px] font-bold">1</div>
                    <span className="font-sans text-xs text-zinc-300 font-light">100% Core Linux Environment active</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded bg-brand-gold/10 border border-brand-gold-glow flex items-center justify-center text-brand-gold font-mono text-[9px] font-bold">2</div>
                    <span className="font-sans text-xs text-zinc-300 font-light">GitHub SSH Key allocations mapped</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded bg-brand-gold/10 border border-brand-gold-glow flex items-center justify-center text-brand-gold font-mono text-[9px] font-bold">3</div>
                    <span className="font-sans text-xs text-zinc-300 font-light">Verilog gates syntax compiled on paper</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded bg-brand-gold/10 border border-brand-gold-glow flex items-center justify-center text-brand-gold font-mono text-[9px] font-bold">4</div>
                    <span className="font-sans text-xs text-zinc-300 font-light">Vivado environment testing software ready</span>
                  </div>
                </div>

                <div className="border-t border-zinc-900 pt-5 mt-6">
                  <div className="flex items-center space-x-2 text-brand-gold text-[10px] font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-brand-gold-glow animate-spin-slow" />
                    <span>ELITE PIPELINE STATE: STANDBY</span>
                  </div>
                </div>
              </div>

              {/* Decorative terminal log panel */}
              <div className="p-5 rounded-2xl bg-[#050505] border border-zinc-900 text-left font-mono">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-2 mb-3">
                  <span className="text-[8px] text-zinc-550 text-zinc-500 uppercase tracking-widest font-extrabold">PRE-FLIGHT DIAGNOSTICS</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-gold-glow animate-ping" />
                </div>
                <div className="space-y-1.5 text-[10px] text-zinc-400 font-light leading-relaxed">
                  <p className="text-brand-gold">&gt; compiler_init --target=rv32imac</p>
                  <p className="text-zinc-550 text-zinc-500">Checking physical target alignments... OK</p>
                  <p className="text-zinc-550 text-zinc-500">Timing diagnostics logic constraints... OK</p>
                  <p className="text-brand-red-highlight">WAR_TIMING_VIOLATION: Setup margin is tight</p>
                  <p className="text-brand-gold-glow">RECOMMENDED METHOD: Read STA Spec sheets</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ====================================================================== */}
        {/* SECTOR 3: TECHNICAL INTERVIEW READINESS FLASHCARDS & SIMULATIONS        */}
        {/* ====================================================================== */}
        <div id="interview-hub" className="mb-24 text-left">
          
          <div className="border-b border-zinc-900 pb-5 mb-10">
            <span className="font-mono text-[10px] text-brand-red-highlight tracking-[0.2em] font-black uppercase block">
              03 // RECRUITMENT VERIFICATION SYSTEM
            </span>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mt-1">
              Technical Interview Readiness
            </h3>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-2 font-light max-w-3xl leading-relaxed">
              Master these core pre-silicon hardware evaluations regularly chosen by recruiters at global semiconductors firms like TSMC, NVIDIA & ARM. Click keycards to reveal official model explanations.
            </p>
          </div>

          {/* Flashcards Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interviewQuestions.map((item, idx) => {
              const liesExpanded = activeInterviewCard === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-xl border bg-[#050505]/90 overflow-hidden transition-all duration-300 relative group flex flex-col justify-between ${
                    liesExpanded
                      ? "border-brand-gold shadow-[0_0_20px_rgba(214,175,55,0.15)] bg-[#0c0c0c]"
                      : "border-zinc-900 hover:border-brand-gold/25"
                  }`}
                >
                  {/* Decorative corner index */}
                  <div className="absolute top-0 right-0 p-2.5 font-mono text-[8px] text-zinc-500 bg-[#0d0d0d] border-l border-b border-zinc-900 rounded-tr-lg rounded-bl-lg">
                    SYS_Q0{idx + 1}
                  </div>

                  <div className="p-5 sm:p-6 flex-1 text-left">
                    <div className="flex items-center space-x-2 text-brand-gold mb-3.5">
                      <HelpCircle className="w-4 h-4" />
                      <span className="font-mono text-[9px] tracking-widest uppercase font-black">
                        INTERVIEW KEYCARD {idx + 1}
                      </span>
                    </div>

                    <h4 className="font-display font-black text-xs sm:text-sm text-white tracking-wide leading-tight group-hover:text-brand-gold-glow transition-colors">
                      {item.q}
                    </h4>

                    {/* Explanatory dynamic content block */}
                    <AnimatePresence initial={false}>
                      {liesExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="mt-4 pt-4 border-t border-zinc-900 text-left">
                            <span className="font-mono text-[8px] text-brand-red-highlight tracking-widest font-bold block mb-2 uppercase">
                              PRE-SILICON MODEL EXPLANATION
                            </span>
                            <p className="font-sans text-xs text-zinc-300 leading-relaxed font-light">
                              {item.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Toggle interaction bar */}
                  <div className="border-t border-zinc-900/60 p-4 bg-[#0d0d0d]/40 flex justify-between items-center transition-all">
                    <span className="font-mono text-[9px] text-zinc-500 tracking-wider">
                      {liesExpanded ? "VERIFICATION COMPLETED" : "READY FOR SCREENING"}
                    </span>
                    <button
                      onClick={() => setActiveInterviewCard(liesExpanded ? null : idx)}
                      className={`px-3 py-1.5 rounded font-mono text-[9px] tracking-widest uppercase font-bold transition-all flex items-center space-x-1 cursor-pointer ${
                        liesExpanded
                          ? "bg-brand-red-deep/30 text-brand-red-highlight border border-brand-red-highlight/30 hover:bg-brand-red-deep/40"
                          : "bg-brand-gold text-[#050505] hover:bg-brand-gold-glow shadow-[0_0_8px_rgba(212,175,55,0.15)]"
                      }`}
                    >
                      <span>{liesExpanded ? "CLOSE" : "REVEAL ANSWER"}</span>
                      {liesExpanded ? (
                        <ChevronDown className="w-3 h-3" />
                      ) : (
                        <Play className="w-2.5 h-2.5 fill-[#050505]" />
                      )}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Interactive interview mockup simulation section */}
          <div className="mt-8 p-6 sm:p-8 rounded-xl border border-brand-gold/15 bg-[#0d0d0d] text-left relative overflow-hidden">
            <div className="absolute right-[-60px] bottom-[-60px] w-48 h-48 bg-brand-gold/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 text-brand-gold">
                  <Briefcase className="w-5 h-5 text-brand-gold-glow animate-pulse" />
                  <span className="font-mono text-[9px] sm:text-xs tracking-[0.2em] font-black uppercase">
                    SILICON INTERVIEW SIMULATION ENVIRONMENT
                  </span>
                </div>
                <h4 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-tight">
                  Simulate Pre-Silicon Screener Questions in Realtime
                </h4>
                <p className="font-sans text-xs text-zinc-400 font-light max-w-2xl leading-relaxed">
                  GSEP conducts mock physical interview days, pairing candidates with semiconductor recruitment leads representing direct fabrication fabs. Practice explains pipeline registers clearly inside 2 minutes.
                </p>
              </div>

              <button
                onClick={() => {
                  const el = document.getElementById("interview-hub");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setActiveInterviewCard(0); // auto-expand first card
                }}
                className="px-6 py-3 rounded-lg font-mono font-bold text-xs tracking-widest text-[#050505] bg-gradient-to-r from-brand-gold to-brand-gold-glow hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all uppercase whitespace-nowrap cursor-pointer self-start md:self-center border border-brand-gold-glow"
              >
                Launch Mock Screening Simulation
              </button>
            </div>
          </div>

        </div>

        {/* ====================================================================== */}
        {/* SECTOR 4: CHENNAI MOBILIZATION CHECKLIST / THE FINAL GOALS             */}
        {/* ====================================================================== */}
        <div className="text-left py-8 rounded-2xl border-2 border-brand-gold/30 bg-gradient-to-br from-brand-red-deep/20 via-[#0d0d0d] to-[#050505] p-6 sm:p-10 shadow-[0_4px_35px_rgba(212,175,55,0.18)] relative overflow-hidden">
          
          <div className="absolute right-0 top-0 w-32 h-32 border-t border-r border-brand-gold/15 rounded-tr-2xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold/5 rounded-full blur-[80px]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-[9px] tracking-[0.2em] font-black text-brand-gold block uppercase">
                THE ULTIMATE LANDING CRITERION
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none mb-3">
                Final Goal: Arrive Prepared To Excel
              </h3>
              <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                Do not treat GSEP as a basic informational lecture. Your pre-arrival objective is to gain comfortable baseline literacy across the core topics so that lessons catalyze high-level silicon tapeouts, timing validations, and premium recruiter placements.
              </p>

              {/* Goal parameters lists layout */}
              <div className="grid grid-cols-2 gap-3 pt-3">
                {[
                  "Verilog RTL", "Digital Logic", "Linux Shell", "Git & GitHub",
                  "Basic RISC-V", "Basic Assembly", "FPGA Concepts", "STA Concepts"
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2.5">
                    <CheckSquare className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <span className="font-mono text-[11px] font-bold text-white uppercase tracking-wide">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end border-t lg:border-t-0 lg:border-l border-zinc-900/80 pt-6 lg:pt-0 lg:pl-8">
              
              <div className="space-y-4 w-full text-left lg:text-right">
                <div className="inline-flex items-center space-x-2 bg-brand-red-deep/20 px-3 py-1 rounded border border-brand-red-highlight/30 text-brand-red-highlight">
                  <Award className="w-4 h-4 text-brand-red-highlight" />
                  <span className="font-mono text-[9px] font-black uppercase tracking-wider">CHENNAI INITIATION MISSION ACTIVE</span>
                </div>

                <div className="space-y-1">
                  <p className="font-sans text-xs text-zinc-400 font-light lg:text-right">
                    Secure checkout status by reviewing all specification files.
                  </p>
                  <p className="font-mono text-[10px] text-brand-gold font-bold">
                    PREPARATORY COMPILATION STATUS: READY
                  </p>
                </div>

                <div className="flex flex-wrap lg:justify-end gap-3 mt-4">
                  <button
                    onClick={() => {
                      const el = document.getElementById("journey");
                      if (el) {
                        const offset = 80;
                        const elementPosition = el.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.scrollY - offset;
                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                      }
                    }}
                    className="px-6 py-3.5 rounded-lg font-mono font-bold text-xs tracking-widest text-[#050505] bg-[#D4AF37] hover:bg-brand-gold-glow hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all uppercase cursor-pointer"
                  >
                    View Official Timetables
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

// Simple dynamic icon layout placeholder for physical layout illustration in cards
function HardwareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 21v-4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
      <path d="M8 3v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V3" />
    </svg>
  );
}

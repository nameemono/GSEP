import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WEEKLY_TIMELINE } from "../data/programmeData";
import { 
  Plane, Cpu, Layers, Award, Terminal, Binary, CheckCircle2, 
  Sparkles, Calendar, Clock, ChevronRight, ChevronDown, Trophy, 
  MapPin, ShieldAlert, Users, ArrowRight, BookOpen, User, Play, X
} from "lucide-react";

export default function JourneySection() {
  // Timeline interaction state
  const [activeWeekId, setActiveWeekId] = useState<string>("week-1");
  const [completedWeeks, setCompletedWeeks] = useState<Record<string, boolean>>({
    "week-0": true,
    "week-1": false,
    "week-2": false,
    "week-3": false,
    "week-4": false,
    "week-5": false,
  });

  // Calendar toggle states
  const [calendarViewMode, setCalendarViewMode] = useState<"month" | "agenda" | "timeline">("month");
  const [selectedMonth, setSelectedMonth] = useState<"june" | "july">("june");

  // Detailed Modal selected day
  const [selectedDayModal, setSelectedDayModal] = useState<any | null>(null);

  // Expanded details day panels
  const [expandedDayLabel, setExpandedDayLabel] = useState<string | null>("Day 1");

  const getWeekIcon = (iconName: string) => {
    switch (iconName) {
      case "Plane":
        return <Plane className="w-6 h-6 text-[#F4C542]" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-[#FFD700]" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-[#C1121F]" />;
      case "Binary":
        return <Binary className="w-6 h-6 text-[#F4C542]" />;
      case "Award":
        return <Award className="w-6 h-6 text-[#FFD700]" />;
      default:
        return <Terminal className="w-6 h-6 text-zinc-400" />;
    }
  };

  const toggleWeekCompletion = (weekId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid expanding
    setCompletedWeeks(prev => ({
      ...prev,
      [weekId]: !prev[weekId]
    }));
  };

  const calculateWeekProgress = (week: typeof WEEKLY_TIMELINE[0]) => {
    if (completedWeeks[week.id]) return 100;
    // Base estimation: Week 0 orientation is mostly done
    if (week.id === "week-0") return 100;
    if (week.id === "week-1" && activeWeekId === "week-1") return 40;
    return 0;
  };

  // Helper calendar data structure representing GSEP June & July 2026 matrices
  const juneCalendarDays = [
    { num: 1, title: "Standard Prep", topics: "Baseline pre-readings on combinational logic", labs: "MIT 6.004 quiz files", objectives: "Initial standard baseline setting", duration: "Free block", hasContent: false },
    { num: 2, title: "Standard Prep", topics: "Unix directory models study", labs: "Bash scripts setup", objectives: "Shell configurations", duration: "Free block", hasContent: false },
    { num: 3, title: "Standard Prep", topics: "Git branching drills", labs: "GitHub ssh keys binding", objectives: "Collaboration checks", duration: "Free block", hasContent: false },
    { num: 4, title: "Standard Prep", topics: "Truth minimization basics", labs: "Karnaugh Maps templates", objectives: "Logic simplification", duration: "Free block", hasContent: false },
    { num: 5, title: "Standard Prep", topics: "C programming pointers", labs: "RAM allocations", objectives: "Stack allocations", duration: "Free block", hasContent: false },
    { num: 6, title: "Silicon Rest", topics: "Weekend break and notes check", labs: "None", objectives: "Rest", duration: "All day", hasContent: false },
    { num: 7, title: "Silicon Rest", topics: "Weekend break and notes check", labs: "None", objectives: "Rest", duration: "All day", hasContent: false },
    { num: 8, title: "Standard Prep", topics: "Mealy/Moore architecture", labs: "State diagram tracing", objectives: "FSM systems", duration: "Free block", hasContent: false },
    { num: 9, title: "Standard Prep", topics: "Memory caches hierarchy", labs: "Data path lines", objectives: "L1/L2 Cache speeds", duration: "Free block", hasContent: false },
    { num: 10, title: "Standard Prep", topics: "RISC-V registers maps", labs: "Ripes simulator booting", objectives: "Processor specifications", duration: "Free block", hasContent: false },
    { num: 11, title: "Standard Prep", topics: "Digital logic setups", labs: "Verification gates", objectives: "RTL behaviors", duration: "Free block", hasContent: false },
    { num: 12, title: "Standard Prep", topics: "Compiler synthesis intro", labs: "Netlist conversions", objectives: "Clock delay margins", duration: "Free block", hasContent: false },
    { num: 13, dayLabel: "Day 0", title: "Students' Orientation Launch", date: "13/06/2026", topics: "Registration & welcome briefing, Affin bank card sets.", labs: "K-Youth compliance checklists.", objectives: "Formulating team metrics and financial setups", duration: "8:30 am - 5:30 pm", speaker: "Mr. Kother (UST Global), Dr. Hamza (Sensory AI)", hasContent: true, weekId: "week-0" },
    { num: 14, title: "Orientation Sync", topics: "Academic peer sync operations", labs: "None", objectives: "Team building", duration: "All day", hasContent: false },
    { num: 15, title: "Orientation Sync", topics: "Travel logistics review", labs: "None", objectives: "Transit compliance check", duration: "All day", hasContent: false },
    { num: 16, title: "Orientation Sync", topics: "Flight ticket dispersals", labs: "None", objectives: "KLIA coordination", duration: "All day", hasContent: false },
    { num: 17, title: "Orientation Sync", topics: "Personal packing checks", labs: "None", objectives: "Supplies gathering", duration: "All day", hasContent: false },
    { num: 18, title: "Orientation Sync", topics: "Standard baseline test reviews", labs: "None", objectives: "Preparation check", duration: "All day", hasContent: false },
    { num: 19, title: "Orientation Sync", topics: "Final travel briefing online", labs: "None", objectives: "Q&A session", duration: "All day", hasContent: false },
    { num: 20, dayLabel: "Travel", title: "Transit to Chennai Airport", date: "20/06/2026", topics: "Group flight KLIA to Chennai, student hostel placements.", labs: "Transport lines overview.", objectives: "Physical mobilization to IIT Madras Research Park", duration: "6:00 am - 4:00 pm", speaker: "ASEM travel officials", hasContent: true, weekId: "week-0" },
    { num: 21, dayLabel: "Rest Day", title: "Free Campus Acclimatisation", date: "21/06/2026", topics: "Acclimatisation, micro-supplies gathering, campus trails.", labs: "None.", objectives: "Rest phase before intensive silicon synthesize", duration: "All Day", hasContent: true, weekId: "week-0" },
    { num: 22, dayLabel: "Day 1", title: "Intro to RISC-V Shakti CPU", date: "22/06/2026", topics: "RISC-V execution frameworks, Shakti processor, instruction decoders.", labs: "RTL design & behavior syntheses.", objectives: "Master binary instruction fetch codes", duration: "9:00 am - 5:00 pm", speaker: "IIT Madras RISE team", hasContent: true, weekId: "week-1" },
    { num: 23, dayLabel: "Day 2", title: "Circuit Floorplan & Placement", date: "23/06/2026", topics: "Macro placement layouts, PG grid systems, clock skews.", labs: "CTS hands-on cell arrays mapping.", objectives: "Mitigate timing latency and standard cell clock offsets", duration: "9:00 am - 6:00 pm", speaker: "Drutam Tech Keynote", hasContent: true, weekId: "week-1" },
    { num: 24, dayLabel: "Day 3", title: "STA Constraints & Routing", date: "24/06/2026", topics: "Setup and hold delay calculations, parasite networks, timing paths.", labs: "Routing closure & slack cleaning.", objectives: "Resolve timing violations across corners", duration: "9:00 am - 6:05 pm", speaker: "Vyoma Systems Panel", hasContent: true, weekId: "week-1" },
    { num: 25, dayLabel: "Day 4", title: "LVS/DRC Layout Signoff", date: "25/06/2026", topics: "Design rule checks, network comparison topologies, parasitics.", labs: "RTL-to-Layout mini milestone.", objectives: "Achieve timing-cleared GDSII complete netlist layouts", duration: "9:00 am - 6:00 pm", speaker: "Shakra Innovations Lead", hasContent: true, weekId: "week-1" },
    { num: 26, dayLabel: "Day 5", title: "Semiconductor Site Study", date: "26/06/2026", topics: "Production fabs tour, cleanroom processes, industrial testing blocks.", labs: "On-site diagnostic documentation.", objectives: "Acquire real perspective on clean room assembly operations", duration: "9:00 am - 5:00 pm", speaker: "Fabs executive directors", hasContent: true, weekId: "week-1" },
    { num: 27, dayLabel: "Day 6", title: "FPGA Shakti Bitstream Mapping", date: "27/06/2026", topics: "Configurable logic bars (CLBs), LUT schemas, bitstream files.", labs: "Xilinx Vivado on-board deployment.", objectives: "Drive physical signals through external development boards", duration: "9:00 am - 5:00 pm", speaker: "FPGA engineering panel", hasContent: true, weekId: "week-1" },
    { num: 28, title: "Weekend Rest", topics: "Weekend reviews", labs: "None", objectives: "Rest", duration: "All day", hasContent: false },
    { num: 29, dayLabel: "Day 7", title: "AMBA SoC AXI Integration", date: "29/06/2026", topics: "AMBA protocol standards, APB/AHB lines, custom peripheral stitch.", labs: "AXI memory registers wiring.", objectives: "Formulate peripheral communication channels", duration: "9:00 am - 6:00 pm", speaker: "SecureSi Technologies Team", hasContent: true, weekId: "week-2" },
    { num: 30, dayLabel: "Day 8", title: "Bare-Metal Registers Driver Lab", date: "30/06/2026", topics: "Interrupt vectors, GCC compilations, bare-metal C mapping.", labs: "Final FPGA diagnostic validations.", objectives: "Write low-level firmware executing register state sweeps", duration: "9:00 am - 5:00 pm", speaker: "IIT Madras system faculty", hasContent: true, weekId: "week-2" }
  ];

  const julyCalendarDays = [
    { num: 1, dayLabel: "No Class", title: "Academic Rest & Recover Day", date: "01/07/2026", topics: "Rest break, compiling lab notes.", labs: "None.", objectives: "Acclimatise mental space before processor architecture core phase", duration: "All day", hasContent: true, weekId: "week-2" },
    { num: 2, dayLabel: "Day 9", title: "Technical Branding workshop", date: "02/07/2026", topics: "Resume blueprints development, LinkedIn technical networks set.", labs: "Direct drafting and profile check files.", objectives: "Position GSEP profiles to match silicon recruiter search parameters", duration: "9:00 am - 5:00 pm", speaker: "HR panel managers", hasContent: true, weekId: "week-3" },
    { num: 3, dayLabel: "Day 10", title: "Computer Arch & GCC Simulators", date: "03/07/2026", topics: "Word lengths offsets, instruction pipeline overview, Spike simulator.", labs: "Assemble code compilations & logs tracing.", objectives: "Map bare-metal stack execution directories", duration: "9:00 am - 5:30 pm", speaker: "Shakti Processor scholars", hasContent: true, weekId: "week-3" },
    { num: 4, title: "Weekend Break", topics: "Weekend break", labs: "None", objectives: "Rest", duration: "All day", hasContent: false },
    { num: 5, title: "Weekend Break", topics: "Weekend break", labs: "None", objectives: "Rest", duration: "All day", hasContent: false },
    { num: 6, dayLabel: "Day 11", title: "RV32I Base Integer Assemblies", date: "06/07/2026", topics: "Integer math instruction opcodes, R-type & S-type decoders.", labs: "Write loops & assembly matrices.", objectives: "Achieve raw assembly code optimization without compiler tools", duration: "9:00 am - 5:00 pm", speaker: "Recruiting panel coordinators", hasContent: true, weekId: "week-3" },
    { num: 7, dayLabel: "Day 12", title: "Atomic & Floating operations", date: "07/07/2026", topics: "Atomic (A) lock controls, Compressed (C) 16-bit commands.", labs: "Safe cache synchronizers execution.", objectives: "Leverage compressed opcodes to density compact active program sizes", duration: "9:00 am - 5:00 pm", speaker: "Advanced CPU designers", hasContent: true, weekId: "week-3" },
    { num: 8, dayLabel: "Day 13", title: "Privilege CSR Registers Maps", date: "08/07/2026", topics: "Machine (M) status tiers, traps controls, vector interrupts.", labs: "CSR read/write loops assembler.", objectives: "Implement safe boot stacks and state isolated control registers", duration: "9:00 am - 5:00 pm", speaker: "Lead Silicon Engineers", hasContent: true, weekId: "week-3" },
    { num: 9, dayLabel: "Day 14", title: "Exception Traps & PLIC controllers", date: "09/07/2026", topics: "PLIC interrupt lines prioritization, exception registers mappings.", labs: "Write custom interrupt vectors structures.", objectives: "Debug concurrent exception trapping sequences", duration: "9:00 am - 5:00 pm", speaker: "IIT Madras RISE team", hasContent: true, weekId: "week-3" },
    { num: 10, dayLabel: "Day 15", title: "Pipelining & Recruiter Screenings", date: "10/07/2026", topics: "Classic 5stage CPU pipelines, bypass lanes, hazard interlocks.", labs: "Wave trace instruction bubble profiles.", objectives: "Solve pipelining bubble collisions and target recruiter callbacks", duration: "9:00 am - 5:30 pm", speaker: "Hiring Panel Executives", hasContent: true, weekId: "week-3" },
    { num: 11, title: "Weekend Rest", topics: "Weekend rest", labs: "None", objectives: "Rest", duration: "All day", hasContent: false },
    { num: 12, title: "Weekend Rest", topics: "Weekend rest", labs: "None", objectives: "Rest", duration: "All day", hasContent: false },
    { num: 13, dayLabel: "Day 16", title: "JTAG boundary debug nodes", date: "13/07/2026", topics: "TAP controller states, JTAG limits, OpenOCD configuration.", labs: "On-chip continuous stack probes.", objectives: "Probe micro-architectural register states in physical real-time", duration: "9:00 am - 5:00 pm", speaker: "IEEE validation engineers", hasContent: true, weekId: "week-4" },
    { num: 14, dayLabel: "Day 17", title: "AXI Interconnect wave probings", date: "14/07/2026", topics: "Bus arbitrations, data signals comparison, timing closures.", labs: "AMBA bus load waveforms simulation.", objectives: "Ensure zero cross-talk state errors at multiple gigahertz speeds", duration: "9:00 am - 5:00 pm", speaker: "Corporate Design Directors", hasContent: true, weekId: "week-4" },
    { num: 15, dayLabel: "Day 18", title: "Log Tracing & Core Dumps reviews", date: "15/07/2026", topics: "Dump text sweeps, compiler trace checking, regression testing.", labs: "Diagnose hidden assembly stack failures.", objectives: "Clean core registries logic discrepancies", duration: "9:00 am - 5:00 pm", speaker: "Hiring Leads Panel", hasContent: true, weekId: "week-4" },
    { num: 16, dayLabel: "Day 19", title: "Coverages Closures & Assertions", date: "16/07/2026", topics: "SystemVerilog timing assertions, code-branch validation metrics.", labs: "Directed tests writing inside Verilator.", objectives: "Map 100% functional coverage bounds on processor designs", duration: "9:00 am - 5:00 pm", speaker: "Senior QA Architects", hasContent: true, weekId: "week-4" },
    { num: 17, dayLabel: "Day 20", title: "AAPG Random stressful suites", date: "17/07/2026", topics: "riscv-dv generator, automated instruction flows, mass regressions.", labs: "Synthesize concurrent stress runs.", objectives: "Trigger deep architectural corner-case anomalies", duration: "9:00 am - 5:30 pm", speaker: "Acquisition Panel Representatives", hasContent: true, weekId: "week-4" },
    { num: 18, title: "Weekend Break", topics: "Weekend break", labs: "None", objectives: "Rest", duration: "All day", hasContent: false },
    { num: 19, title: "Weekend Break", topics: "Weekend break", labs: "None", objectives: "Rest", duration: "All day", hasContent: false },
    { num: 20, dayLabel: "Day 21", title: "CoreMark Benchmarks Launch", date: "20/07/2026", topics: "CoreMark and Dhrystone evaluation criteria, Ram limits constraints.", labs: "Initiation: Capture The Bug battle.", objectives: "Root-cause, design, and compile layout fixes under stress", duration: "9:00 am - 5:00 pm", speaker: "ASEM leadership panel", hasContent: true, weekId: "week-5" },
    { num: 21, dayLabel: "Day 22", title: "Capture the Bug finals", date: "21/07/2026", topics: "Regression checking, patch presentation briefs, trophy ceremonies.", labs: "Present diagnostic layouts reports.", objectives: "Secure corporate microarchitecture placement offers", duration: "9:00 am - 5:00 pm", speaker: "IIT Madras academic board", hasContent: true, weekId: "week-5" },
    { num: 22, title: "Program Closure", topics: "Alumni integrations, certificate distributions", labs: "None", objectives: "Graduation", duration: "All day", hasContent: false },
    { num: 23, title: "Program Closure", topics: "Alumni integrations, certificate distributions", labs: "None", objectives: "Graduation", duration: "All day", hasContent: false },
    { num: 24, title: "Program Closure", topics: "Alumni integrations, certificate distributions", labs: "None", objectives: "Graduation", duration: "All day", hasContent: false },
    { num: 25, title: "Program Closure", topics: "Alumni integrations, certificate distributions", labs: "None", objectives: "Graduation", duration: "All day", hasContent: false },
    { num: 26, title: "Program Closure", topics: "Alumni integrations, certificate distributions", labs: "None", objectives: "Graduation", duration: "All day", hasContent: false },
    { num: 27, title: "Program Closure", topics: "Alumni integrations, certificate distributions", labs: "None", objectives: "Graduation", duration: "All day", hasContent: false },
    { num: 28, title: "Program Closure", topics: "Alumni integrations, certificate distributions", labs: "None", objectives: "Graduation", duration: "All day", hasContent: false },
    { num: 29, title: "Program Closure", topics: "Alumni integrations, certificate distributions", labs: "None", objectives: "Graduation", duration: "All day", hasContent: false },
    { num: 30, title: "Program Closure", topics: "Alumni integrations, certificate distributions", labs: "None", objectives: "Graduation", duration: "All day", hasContent: false },
    { num: 31, title: "Program Closure", topics: "Alumni integrations, certificate distributions", labs: "None", objectives: "Graduation", duration: "All day", hasContent: false }
  ];

  const totalCompletedCount = Object.values(completedWeeks).filter(Boolean).length;
  const overallCompletionPercentage = Math.round((totalCompletedCount / WEEKLY_TIMELINE.length) * 100);

  return (
    <section id="journey" className="py-[120px] bg-[#050505] relative overflow-hidden">
      
      {/* Decorative premium alignment grids */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#F4C542]/25 to-transparent" />
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#4A0E17]/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left">
        
        {/* ================================================== */}
        {/* PART 1: THE INTERACTIVE WEEK CHRONICLE TIMELINE    */}
        {/* ================================================== */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-[0.25em] font-bold text-[#C1121F] uppercase"
          >
            Chronological Silicon Pipeline
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-[42px] sm:text-[56px] font-extrabold text-[#FFFFFF] mt-4 uppercase tracking-tight"
          >
            Interactive Timetable
          </motion.h2>
          
          <div className="h-1 w-20 bg-[#F4C542] mx-auto mt-4 rounded-full" />
          
          <p className="font-sans text-[18px] sm:text-[20px] text-zinc-400 mt-6 leading-relaxed font-light">
            Skip static spreadsheets. Interact with our luxury timetable console. Toggle weekly completions, view detailed program modules, and track active training positions.
          </p>
        </div>

        {/* Global Pipeline Progress HUD */}
        <div className="mb-12 p-8 rounded-2xl bg-[#0E0E0E] border border-zinc-900/80 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left space-y-1 w-full md:w-auto">
            <span className="font-mono text-[11px] text-[#FFD700] uppercase font-bold tracking-widest block">PIPELINE MILESTONE COMPLETION</span>
            <h3 className="font-display font-medium text-xl sm:text-2xl text-white uppercase tracking-tight">Active Command Trajectory</h3>
          </div>

          <div className="flex-1 w-full h-2.5 bg-[#050505] rounded-full overflow-hidden border border-zinc-900 mx-0 md:mx-12 relative">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#F4C542] via-[#FFD700] to-[#C1121F]"
              initial={{ width: 0 }}
              animate={{ width: `${overallCompletionPercentage}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            {/* Week positional indicators */}
            <div className="absolute inset-0 flex justify-between px-1 pointer-events-none">
              {WEEKLY_TIMELINE.map((_, index) => (
                <div key={index} className="w-1.5 h-full bg-[#050505]/60 border-x border-zinc-800" />
              ))}
            </div>
          </div>

          <div className="text-right w-full md:w-auto flex items-center justify-between md:justify-end space-x-4">
            <div className="text-right">
              <span className="font-mono text-[11px] text-zinc-550 text-zinc-500 uppercase block">OUTCOME METRIC</span>
              <span className="font-mono text-2xl font-black text-white">{overallCompletionPercentage}% Mastered</span>
            </div>
          </div>
        </div>

        {/* Timeline main console: Week selection grids */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-32">
          
          {/* LHS Selector: Week big premium cards */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-[11px] tracking-widest text-zinc-500 font-bold uppercase pl-1 block">
              CHRONO PHASES SELECTOR
            </span>

            <div className="space-y-3 max-h-[520px] overflow-y-auto pr-2">
              {WEEKLY_TIMELINE.map((week) => {
                const isSelected = week.id === activeWeekId;
                const isCompleted = completedWeeks[week.id];
                const weekProgressValue = calculateWeekProgress(week);
                
                return (
                  <motion.div
                    key={week.id}
                    onClick={() => {
                      setActiveWeekId(week.id);
                      // Default first day expanded inside newly selected week
                      if (week.days && week.days.length > 0) {
                        setExpandedDayLabel(week.days[0].dayLabel);
                      }
                    }}
                    whileHover={{ scale: 1.01 }}
                    className={`p-6 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                      isSelected 
                        ? "bg-[#0E0E0E] border-[#F4C542] shadow-[0_0_25px_rgba(244,197,66,0.15)]" 
                        : "bg-[#050505] border-zinc-900/80 hover:border-zinc-800"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#F4C542]" />
                    )}

                    <div className="flex items-start justify-between space-x-3">
                      <div className="flex items-center space-x-4">
                        {/* Circle week icon */}
                        <div className={`w-11 h-11 rounded-lg border flex items-center justify-center flex-shrink-0 ${
                          isSelected 
                            ? "bg-[#050505] border-[#F4C542]/50" 
                            : "bg-zinc-950 border-zinc-900"
                        }`}>
                          {getWeekIcon(week.iconName)}
                        </div>

                        <div>
                          <div className="flex items-center space-x-2">
                            <span className={`font-mono text-[11px] font-bold tracking-widest uppercase ${isSelected ? "text-[#F4C542]" : "text-zinc-500"}`}>
                              {week.week}
                            </span>
                            {/* Marker indicator for current week */}
                            {week.id === "week-1" && (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                            )}
                          </div>
                          <h4 className="font-display font-medium text-[18px] text-white mt-0.5 tracking-tight">
                            {week.title}
                          </h4>
                        </div>
                      </div>

                      {/* Interactive completion toggle ring */}
                      <button
                        onClick={(e) => toggleWeekCompletion(week.id, e)}
                        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                          isCompleted 
                            ? "bg-emerald-500 border-emerald-400 text-black" 
                            : "border-zinc-800 bg-[#050505] hover:border-[#F4C542]"
                        }`}
                      >
                        {isCompleted && <CheckCircle2 className="w-4 h-4 text-black" />}
                      </button>
                    </div>

                    <p className="font-sans text-[15px] text-zinc-400 mt-3 line-clamp-2 leading-relaxed font-light">
                      {week.subtitle}
                    </p>

                    {/* Progress parameters */}
                    <div className="mt-4 pt-4 border-t border-zinc-900/60 flex items-center justify-between text-xs font-mono text-zinc-500">
                      <span>{week.dates}</span>
                      <span className="text-[#FFD700]">{weekProgressValue}% Complete</span>
                    </div>

                  </motion.div>
                );
              })}
            </div>

            {/* Sticky warning warning panel */}
            <div className="p-5 rounded-2xl bg-brand-red-deep/12 border border-brand-red-highlight/21 text-left flex items-start space-x-3">
              <ShieldAlert className="w-5 h-5 text-brand-red-highlight flex-shrink-0 mt-0.5 animate-pulse" />
              <p className="font-sans text-[15px] text-zinc-400 leading-normal font-light">
                All training schedules include lunch buffers, local project signoffs, and functional diagnostic closures. No spreadsheets allowed in classrooms.
              </p>
            </div>
          </div>

          {/* RHS Display Panel: Expandable day-by-day sub cards */}
          <div className="lg:col-span-7 bg-[#0E0E0E] border border-zinc-900 rounded-3xl p-8 hover-glow-gold relative min-h-[500px]">
            {WEEKLY_TIMELINE.map((week) => {
              if (week.id !== activeWeekId) return null;
              return (
                <div key={week.id} className="space-y-6 text-left">
                  
                  {/* Top header spec */}
                  <div className="border-b border-zinc-900 pb-5">
                    <span className="font-mono text-[11px] text-brand-gold tracking-[0.2em] font-bold uppercase block mb-1">
                      CURRICULUM SPECTRA // {week.dates}
                    </span>
                    <h3 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight">
                      {week.title} Detailed Modules
                    </h3>
                  </div>

                  {/* Highlights section inside week */}
                  {week.highlight && (
                    <div className="p-4 rounded-xl bg-brand-red-deep/15 border border-brand-red-highlight/30 text-white flex items-start space-x-3.5">
                      <Sparkles className="w-4.5 h-4.5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono text-[10px] text-[#FFD700] tracking-widest font-black block uppercase">
                          CRITICAL INSTRUCTIONAL MILESTONE
                        </span>
                        <p className="font-sans text-[15px] mt-0.5 font-light leading-relaxed">
                          {week.highlight}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Days Accordion */}
                  <div className="space-y-4">
                    {week.days?.map((day) => {
                      const isDayOpen = expandedDayLabel === day.dayLabel;
                      return (
                        <div 
                          key={day.dayLabel}
                          className={`rounded-2xl border bg-[#050505]/40 overflow-hidden transition-all duration-300 ${
                            isDayOpen ? "border-[#F4C542] shadow-[0_0_15px_rgba(244,197,66,0.06)]" : "border-zinc-900/60"
                          }`}
                        >
                          <button
                            onClick={() => setExpandedDayLabel(isDayOpen ? null : day.dayLabel)}
                            className="w-full p-4 flex items-center justify-between text-left hover:bg-zinc-950/60 transition-colors cursor-pointer"
                          >
                            <div className="flex items-center space-x-4">
                              <div className="font-mono text-xs font-black text-brand-gold bg-[#0E0E0E] px-2.5 py-1.5 rounded border border-zinc-850">
                                {day.dayLabel}
                              </div>
                              <div>
                                <span className="font-mono text-[10px] text-zinc-500 block">{day.date}</span>
                                <h4 className="font-display font-bold text-[15px] text-white tracking-wide">{day.title}</h4>
                              </div>
                            </div>

                            <div className="p-1.5 bg-zinc-950 rounded border border-zinc-900">
                              {isDayOpen ? <ChevronDown className="w-4 h-4 text-[#F4C542]" /> : <ChevronRight className="w-4 h-4 text-zinc-650" />}
                            </div>
                          </button>

                          {/* Day detailed hours sub-list */}
                          <AnimatePresence>
                            {isDayOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="border-t border-zinc-950 bg-[#0E0E0E]/40"
                              >
                                <div className="p-5 space-y-4">
                                  {day.items?.map((item, itemIdx) => (
                                    <div 
                                      key={itemIdx}
                                      className={`p-4 rounded-xl border flex flex-col sm:flex-row justify-between items-start gap-4 ${
                                        item.isInterview 
                                          ? "bg-brand-red-deep/10 border-brand-red-highlight/30 text-white" 
                                          : item.isSoftSkill 
                                          ? "bg-brand-gold/5 border-brand-gold/15"
                                          : "bg-[#050505]/40 border-zinc-900"
                                      }`}
                                    >
                                      <div className="space-y-1 w-full text-left">
                                        <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-zinc-500">
                                          <span className="flex items-center space-x-1">
                                            <Clock className="w-3 text-brand-gold" />
                                            <span>{item.time}</span>
                                          </span>
                                          {item.duration && (
                                            <span className="bg-zinc-900 px-1 py-0.5 rounded text-zinc-400 border border-zinc-800">
                                              {item.duration}
                                            </span>
                                          )}
                                          {item.company && (
                                            <span className="bg-[#F4C542]/10 border border-[#F4C542]/20 px-1 py-0.5 rounded text-brand-gold uppercase font-bold">
                                              {item.company}
                                            </span>
                                          )}
                                        </div>

                                        <h5 className="font-sans font-bold text-[15px] sm:text-[16px] text-white pt-1">{item.title}</h5>
                                        <p className="font-sans text-[15px] text-zinc-450 leading-relaxed font-light">{item.description}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                        </div>
                      );
                    })}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* ================================================== */}
        {/* PART 2: THE PHYSICAL PROGRAMME CALENDAR VIEW       */}
        {/* ================================================== */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <Calendar className="w-6 h-6 text-brand-gold" />
              <span className="font-mono text-base tracking-[0.25em] font-bold text-brand-gold uppercase">
                02 // GSEP PROGRAMME PHYSICAL CALENDAR
              </span>
            </div>

            {/* Switchable views keys */}
            <div className="flex items-center space-x-3 bg-[#0E0E0E] p-1 border border-zinc-900 rounded-xl">
              <button
                onClick={() => setCalendarViewMode("month")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all uppercase cursor-pointer ${
                  calendarViewMode === "month" ? "bg-brand-gold/15 text-brand-gold font-bold" : "text-zinc-550 text-zinc-450"
                }`}
              >
                Month View
              </button>
              <button
                onClick={() => setCalendarViewMode("agenda")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all uppercase cursor-pointer ${
                  calendarViewMode === "agenda" ? "bg-brand-gold/15 text-brand-gold font-bold" : "text-zinc-550 text-zinc-450"
                }`}
              >
                Agenda View
              </button>
            </div>
          </div>

          <div className="bg-[#0E0E0E] border border-zinc-900 rounded-3xl p-8 hover-glow-gold relative overflow-hidden text-left">
            
            {/* Top selectors to toggle July / June periods */}
            <div className="flex items-center justify-between border-b border-zinc-900 pb-5 mb-8">
              <div>
                <span className="font-mono text-[11px] text-brand-gold uppercase tracking-widest font-bold">GRID CALENDAR RECONSTRUCTION</span>
                <h3 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight uppercase">
                  {selectedMonth === "june" ? "June 2026" : "July 2026"} Timeline Grid
                </h3>
              </div>

              <div className="flex items-center space-x-2 bg-[#050505] p-1 rounded-xl border border-zinc-900">
                <button
                  onClick={() => setSelectedMonth("june")}
                  className={`px-4 py-2 rounded-lg font-mono text-xs font-bold uppercase transition-all cursor-pointer ${
                    selectedMonth === "june" ? "bg-brand-gold text-black" : "text-zinc-500 hover:text-white"
                  }`}
                >
                  June
                </button>
                <button
                  onClick={() => setSelectedMonth("july")}
                  className={`px-4 py-2 rounded-lg font-mono text-xs font-bold uppercase transition-all cursor-pointer ${
                    selectedMonth === "july" ? "bg-brand-gold text-black" : "text-zinc-500 hover:text-white"
                  }`}
                >
                  July
                </button>
              </div>
            </div>

            {/* MONTH VIEW GRID */}
            {calendarViewMode === "month" && (
              <div className="space-y-6">
                
                {/* Weekday headers columns */}
                <div className="grid grid-cols-7 gap-2.5 text-center font-mono text-xs text-zinc-500 border-b border-zinc-900 pb-2">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>

                {/* Calendar dynamic cards grid */}
                <div className="grid grid-cols-7 gap-2.5">
                  
                  {/* Pad initial empty cells */}
                  {selectedMonth === "june" ? (
                    // June 2026 starts on a Monday! No empty padding cells needed
                    null
                  ) : (
                    // July 2026 starts on a Wednesday! 2 prefix offset cells needed
                    [1, 2].map(p => (
                      <div key={`pad-${p}`} className="p-3 bg-zinc-950/20 border border-zinc-950/40 rounded-xl min-h-[110px] opacity-10 pointer-events-none" />
                    ))
                  )}

                  {(selectedMonth === "june" ? juneCalendarDays : julyCalendarDays).map((day) => {
                    const isInstruction = day.hasContent;
                    return (
                      <div
                        key={day.num}
                        onClick={() => {
                          if (isInstruction) {
                            setSelectedDayModal(day);
                          }
                        }}
                        className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between min-h-[120px] transition-all relative overflow-hidden group ${
                          isInstruction 
                            ? "bg-[#050505] border-[#F4C542]/30 hover:border-[#F4C542] cursor-pointer hover:shadow-[0_0_15px_rgba(244,197,66,0.12)] hover:-translate-y-1" 
                            : "bg-zinc-950/40 border-zinc-950 select-none text-zinc-650 text-zinc-600"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`font-mono text-sm font-black ${isInstruction ? "text-white" : "text-zinc-700"}`}>
                            {day.num}
                          </span>
                          {day.dayLabel && (
                            <span className="font-mono text-[9px] bg-[#F4C542]/10 border border-[#F4C542]/20 text-[#FFD700] px-1 rounded uppercase font-bold">
                              {day.dayLabel.replace("Day ", "D")}
                            </span>
                          )}
                        </div>

                        <div className="mt-2 min-w-0">
                          <p className={`font-sans font-medium text-xs truncate ${isInstruction ? "text-zinc-200" : "text-zinc-700"}`}>
                            {day.title}
                          </p>
                          {day.speaker && (
                            <span className="font-mono text-[8px] text-zinc-550 mt-1 block truncate">
                              • {day.speaker.split(" (")[0]}
                            </span>
                          )}
                        </div>

                        {/* Expand micro dot indicator inside cal days */}
                        {isInstruction && (
                          <div className="mt-2 pt-2 border-t border-zinc-900/60 flex items-center justify-between text-[9px] font-mono text-zinc-500 opacity-60 group-hover:opacity-100 transition-opacity">
                            <span>DETAILS</span>
                            <ArrowRight className="w-3 h-3 text-[#F4C542]" />
                          </div>
                        )}

                      </div>
                    );
                  })}
                </div>

                <p className="font-mono text-[11px] text-zinc-500 mt-4 leading-normal flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-pulse inline-block mr-1.5" />
                  <span>Interactive highlight: Click highlighted day cards (22nd-27th June, etc.) to trigger deep popover specs of labs and objectives.</span>
                </p>

              </div>
            )}

            {/* AGENDA VIEW */}
            {calendarViewMode === "agenda" && (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {(selectedMonth === "june" ? juneCalendarDays : julyCalendarDays)
                  .filter(d => d.hasContent)
                  .map((day) => (
                    <div 
                      key={day.num}
                      onClick={() => setSelectedDayModal(day)}
                      className="p-5 rounded-2xl bg-[#050505] border border-zinc-900 hover:border-brand-gold transition-all text-left flex flex-col sm:flex-row justify-between items-start gap-4 cursor-pointer"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-[#0E0E0E] rounded-xl border border-zinc-800 flex flex-col justify-center items-center text-center">
                          <span className="font-mono text-[10px] text-[#F4C542] leading-none uppercase font-bold">{selectedMonth}</span>
                          <span className="font-mono text-xl font-bold text-white mt-1 leading-none">{day.num}</span>
                        </div>

                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-mono text-xs text-[#FFD700] uppercase font-bold">{day.dayLabel || "Syllabus Focus"}</span>
                            <span className="text-zinc-600 font-mono text-xs">•</span>
                            <span className="font-mono text-xs text-zinc-400">{day.duration}</span>
                          </div>
                          <h4 className="font-display font-bold text-lg text-white mt-1">{day.title}</h4>
                        </div>
                      </div>

                      <div className="text-right flex items-center space-x-2 self-end sm:self-center">
                        <span className="font-mono text-[11px] text-zinc-500 uppercase">[ DISPLAY LAB SPECS ]</span>
                        <ArrowRight className="w-4 h-4 text-brand-gold" />
                      </div>
                    </div>
                  ))
                }
              </div>
            )}

          </div>
        </div>

        {/* ================================================== */}
        {/* INTERACTIVE CALENDAR MODAL POPUP DISPLAY           */}
        {/* ================================================== */}
        <AnimatePresence>
          {selectedDayModal && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="w-full max-w-2xl bg-[#0E0E0E] border border-brand-gold rounded-3xl p-8 relative overflow-hidden"
              >
                {/* Close handle button */}
                <button 
                  onClick={() => setSelectedDayModal(null)}
                  className="absolute top-5 right-5 text-zinc-550 text-zinc-400 hover:text-white bg-zinc-900/60 p-2 rounded-lg border border-zinc-800 hover:scale-105 transition-transform"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Laser strip */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F4C542] to-transparent" />

                <div className="space-y-6 text-left">
                  
                  {/* Header labels */}
                  <div>
                    <div className="flex items-center space-x-3 flex-wrap">
                      <span className="font-mono text-xs text-brand-gold font-bold tracking-widest uppercase">
                        {selectedDayModal.dayLabel || "ACADEMIC CHECKPOINT"} // {selectedDayModal.date || `Day ${selectedDayModal.num}`}
                      </span>
                      {selectedDayModal.weekId && (
                        <span className="font-mono text-[10px] bg-brand-red-deep/30 border border-brand-red-highlight/21 text-white px-2 py-0.5 rounded uppercase">
                          {selectedDayModal.weekId.toUpperCase()}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-3 tracking-tight leading-snug">
                      {selectedDayModal.title}
                    </h3>
                  </div>

                  {/* Syllabus focus topics and concepts cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-zinc-900">
                    
                    <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-850">
                      <div className="flex items-center space-x-2 mb-2 text-[#FFD700]">
                        <BookOpen className="w-4 h-4" />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider">TOPICS STUDIED</span>
                      </div>
                      <p className="font-sans text-[15px] text-zinc-300 font-light leading-relaxed">
                        {selectedDayModal.topics}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-850">
                      <div className="flex items-center space-x-2 mb-2 text-[#FFD700]">
                        <Terminal className="w-4 h-4" />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider">LABORATORY EXPERIMENTS</span>
                      </div>
                      <p className="font-sans text-[15px] text-zinc-300 font-light leading-relaxed font-mono text-xs">
                        {selectedDayModal.labs}
                      </p>
                    </div>

                  </div>

                  {/* Objectives durations key specs */}
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-black">CORE MILESTONE METRICS</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                      
                      <div className="p-3 rounded-lg bg-[#050505] border border-zinc-900 flex justify-between items-center text-[15px]">
                        <span className="text-zinc-505 text-zinc-500">Duration Limit:</span>
                        <span className="text-white font-semibold">{selectedDayModal.duration}</span>
                      </div>

                      <div className="p-3 rounded-lg bg-[#050505] border border-zinc-900 flex justify-between items-center text-[15px]">
                        <span className="text-zinc-505 text-zinc-500">Objectives:</span>
                        <span className="text-[#FFD700] truncate max-w-[140px] font-semibold" title={selectedDayModal.objectives}>
                          {selectedDayModal.objectives}
                        </span>
                      </div>

                    </div>
                  </div>

                  {selectedDayModal.speaker && (
                    <div className="p-4 rounded-xl bg-brand-gold/5 border border-brand-gold/15 flex items-center space-x-3">
                      <User className="w-5 h-5 text-brand-gold" />
                      <div className="text-[15px]">
                        <span className="font-mono text-[9px] text-brand-gold uppercase block">SPEAKER / COORDINATORS</span>
                        <span className="font-sans text-white font-medium">{selectedDayModal.speaker}</span>
                      </div>
                    </div>
                  )}

                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => setSelectedDayModal(null)}
                      className="px-5 py-2.5 bg-brand-gold text-black rounded-xl font-mono text-xs font-bold uppercase hover:bg-[#FFD700]"
                    >
                      Acknowledge Node Spec
                    </button>
                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

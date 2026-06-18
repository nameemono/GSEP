import { TimelineWeek, SkillCategory, FAQItem, CareerNode, GalleryItem } from "../types";

export const WEEKLY_TIMELINE: TimelineWeek[] = [
  {
    id: "week-0",
    week: "WEEK 0",
    title: "Orientation & Travel",
    dates: "13–21 June 2026",
    subtitle: "Baseline assessment, regulatory briefings & physical mobilization to Chennai",
    iconName: "Plane",
    highlight: "Essential Pre-Departure Check-in with Affin Bank & K-Youth HR Briefings",
    days: [
      {
        dayLabel: "Day 0",
        date: "13/06/2026",
        title: "Students' Orientation & Cultural Integration",
        items: [
          {
            time: "8:30 am - 9:30 am",
            title: "Registration and Breakfast",
            description: "On-site credential verification and official welcoming distribution of materials.",
            duration: "1 hour"
          },
          {
            time: "9:30 am - 10:00 am",
            title: "Opening Remarks & ASEM Introduction",
            description: "Opening keynote introducing GSEP mandate and collaborative goals for ASEAN talent development.",
            duration: "30 minutes"
          },
          {
            time: "10:00 am - 11:00 am",
            title: "Khazanah K-Youth Briefing & HR Guidelines",
            description: "Professional code of conduct, communication regulations, safety indicators, and compliance metrics.",
            duration: "1 hour"
          },
          {
            time: "11:00 am - 11:30 am",
            title: "Industry Insight Session I",
            description: "Experience sharing and industry calibration regarding high-frequency design by Mr. Kother.",
            company: "UST Global",
            duration: "30 minutes"
          },
          {
            time: "11:30 am - 12:00 pm",
            title: "Industry Insight Session II",
            description: "Navigating deep ML processors and commercial silicon tapeouts in 2026 by Dr. Hamza.",
            company: "Sensory AI",
            duration: "30 minutes"
          },
          {
            time: "12:00 pm - 12:30 pm",
            title: "Industry Insight Session III",
            description: "Career vectors and professional engineering discipline standards by Mr. Nero.",
            company: "WyseTime",
            duration: "30 minutes"
          },
          {
            time: "12:30 pm - 2:00 pm",
            title: "Networking Lunch with Industry Partners",
            description: "Interacting directly with silicon representatives, enterprise stakeholders, and fellow scholars.",
            duration: "1 hour 30 minutes"
          },
          {
            time: "2:00 pm - 2:30 pm",
            title: "LinkedIn Mini Workshop: Building Your Professional Profile",
            description: "Optimization of technical profile directories to capture attention of modern system-level recruiters.",
            duration: "30 minutes",
            isSoftSkill: true
          },
          {
            time: "2:30 pm - 3:15 pm",
            title: "Ice-Breaker Activities & Games Session",
            description: "Team bonding challenges, engineering role-play games, and peer networks calibration.",
            duration: "45 minutes"
          },
          {
            time: "3:15 pm - 3:45 pm",
            title: "Pre-Departure Briefing & Program Recap",
            description: "Logistics checklist, flight details verification, emergency contact lines, and group synchronization.",
            duration: "30 minutes"
          },
          {
            time: "3:45 pm - 4:15 pm",
            title: "Tea & Networking Break",
            description: "Informal discussion window with fellow program peers and organization leadership.",
            duration: "30 minutes"
          },
          {
            time: "4:15 pm - 5:30 pm",
            title: "Affin Bank: Account Setup & Guidance Session",
            description: "Establishing transactional baselines for allowances, multi-national card configuration, and digital services.",
            duration: "1 hour 15 minutes"
          }
        ]
      },
      {
        dayLabel: "Travel",
        date: "20/06/2026",
        title: "International Mobilization to Chennai",
        items: [
          {
            time: "6:00 am - 8:00 am",
            title: "Flight from KLIA to Chennai International Airport",
            description: "Joint departure. Group checking and secure international transit facilitation.",
            duration: "4 hours"
          },
          {
            time: "9:00 am - 12:00 pm",
            title: "IIT Madras Research Park Transit",
            description: "Scheduled shuttle and secure accommodation allocation at the university student hostel."
          },
          {
            time: "Tentative",
            title: "Introduction to Campus Architecture",
            description: "Orienting on structural sites, research halls, central labs, dining, and secure corridors."
          }
        ]
      },
      {
        dayLabel: "Rest Day",
        date: "21/06/2026",
        title: "Free & Easy Orientation",
        items: [
          {
            time: "All Day",
            title: "Rest, Local Calibration & Sync",
            description: "Free time for micro-supplies procurement, acclimatization, and preparing mental focus before Week 1 VLSI kick-off."
          }
        ]
      }
    ]
  },
  {
    id: "week-1",
    week: "WEEK 1",
    title: "VLSI & Physical Design Fundamentals",
    dates: "22–28 June 2026",
    subtitle: "RTL design syntax, physical synthesis pipelines, and clock tree syntheses",
    iconName: "Cpu",
    highlight: "Immersive physical design sessions using industry leading floorplan parameters",
    days: [
      {
        dayLabel: "Day 1",
        date: "22/06/2026",
        title: "Introduction to RISC-V ISA and Shakti Ecosystem",
        items: [
          {
            time: "9:00 am - 12:00 pm",
            title: "Introduction to RISC-V ISA & Shakti Ecosystem",
            description: "Overview of RISC-V open execution paradigm, Shakti processor micro-architecture, logic synthesis constraints, and multi-clock ring architectures.",
            duration: "3 hours"
          },
          {
            time: "1:30 pm - 5:00 pm",
            title: "RTL Design and Basic Synthesis Lab",
            description: "Writing and simulating synthesizable Verilog modules (multi-bit adders, fast registers, state machines, and instruction decoders). Analyzing standard gate netlist summaries.",
            duration: "3 hours 30 minutes"
          }
        ]
      },
      {
        dayLabel: "Day 2",
        date: "23/06/2026",
        title: "Floorplanning, Placement & CTS",
        items: [
          {
            time: "9:00 am - 12:00 pm",
            title: "Floorplanning, Placement Strategies and CTS",
            description: "Theoretical study of macro cell configurations, optimal power planning grid lines, routing track congestion indicators, and Clock Tree Synthesis (CTS) latency management.",
            duration: "3 hours"
          },
          {
            time: "1:30 pm - 5:00 pm",
            title: "Placement and CTS Hands-on Lab",
            description: "Executing automated logic cell placement. Managing clock skew variables, delay cell injection, and clock trees routing layout synthesis.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "5:00 pm - 6:00 pm",
            title: "Industry Speaker Keynote: Drutam Tech",
            description: "Commercial physical back-end layout challenges, sub-22nm clock-shaping issues, and standard cell library optimizations.",
            company: "Drutam Tech",
            duration: "1 hour"
          }
        ]
      },
      {
        dayLabel: "Day 3",
        date: "24/06/2026",
        title: "Routing and Static Timing Analysis (STA)",
        items: [
          {
            time: "9:00 am - 12:00 pm",
            title: "Routing & Static Timing Analysis theoretical setups",
            description: "Focus on global and detail routing tracks, RC parasitic networks estimation, setup and hold constraint formulas under extreme manufacturing corners.",
            duration: "3 hours"
          },
          {
            time: "1:30 pm - 5:00 pm",
            title: "Routing and Timing Closure Lab",
            description: "Analyzing timing violations reports, modifying clock trees, shifting cell placement buffers, and closing critical slack paths manually.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "5:00 pm - 6:05 pm",
            title: "Industry Speaker Keynote: Vyoma Systems",
            description: "Enterprise methods for handling timing closures on multi-gigahertz automotive and server class RISC-V nodes.",
            company: "Vyoma Systems",
            duration: "1 hour"
          }
        ]
      },
      {
        dayLabel: "Day 4",
        date: "25/06/2026",
        title: "Layout Verification, Signoff & Evaluation",
        items: [
          {
            time: "9:00 am - 12:00 pm",
            title: "Layout Verification and Signoff (DRC/LVS/PEX)",
            description: "Checking physical layout against design rules (DRC) and netlist topology schemas (LVS). Extracting parasitics (PEX) for final layout verification.",
            duration: "3 hours"
          },
          {
            time: "1:30 pm - 5:00 pm",
            title: "Mini RTL-to-Layout Evaluation Project",
            description: "Compiling a custom digital design from synthesizable RTL up to timing-clean, verify-complete layout structures.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "5:00 pm - 6:00 pm",
            title: "Industry Speaker: Shakra Innovations",
            description: "Leveraging automation scripts and next-gen tools to clean LVS/DRC blockages on advanced packaging systems.",
            company: "Shakra Innovations",
            duration: "1 hour"
          }
        ]
      },
      {
        dayLabel: "Day 5",
        date: "26/06/2026",
        title: "Academic & Semiconductor Enterprise Site Visits",
        items: [
          {
            time: "9:00 am - 5:00 pm",
            title: "Physical Industry Field Study",
            description: "Exclusively facilitated corporate tours of high-tech manufacturing cleanrooms, testing labs, and state of the art silicon design centers.",
            duration: "8 hours"
          }
        ]
      },
      {
        dayLabel: "Day 6",
        date: "27/06/2026",
        title: "FPGA Design Flow and Hardware Mapping",
        items: [
          {
            time: "9:00 am - 12:00 pm",
            title: "FPGA Design Flow and Bitstream Generation",
            description: "Understanding configurable logic blocks (CLBs), routing lookup tables (LUTs), synthesis guidelines, and Vivado compilation structures for physical system boards.",
            duration: "3 hours"
          },
          {
            time: "1:30 pm - 5:00 pm",
            title: "Shakti FPGA Hands-on Lab",
            description: "Writing structural test designs, running FPGA routing programs, generating output hardware bitstreams, and deploying directly onto evaluation boards.",
            duration: "3 hours 30 minutes"
          }
        ]
      }
    ]
  },
  {
    id: "week-2",
    week: "WEEK 2",
    title: "SoC Integration & FPGA",
    dates: "29–30 June 2026",
    subtitle: "System bus protocols, custom IPs and on-board hardware deployment",
    iconName: "Layers",
    highlight: "Circuit simulation checks & AXI integration guidelines",
    days: [
      {
        dayLabel: "Day 7",
        date: "29/06/2026",
        title: "AMBA Interconnects & Shakti SoC Integration",
        items: [
          {
            time: "9:00 am - 12:00 pm",
            title: "IP Integration with Shakti SoC",
            description: "Exploring AMBA protocol rules. Focus on AXI, APB, and AHB signaling, peripheral addressing, and write/read transactions sequencing.",
            duration: "3 hours"
          },
          {
            time: "1:30 pm - 5:00 pm",
            title: "AXI Integration and SoC Lab",
            description: "Connecting UART and memory controller cores onto the core Shakti processor bus structures using synthesized interface bridges.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "5:00 pm - 6:00 pm",
            title: "Industry Keynote: SecureSi Technologies",
            description: "Securing system bus networks against side-channel hardware sniffing and optimizing AXI pipeline delay buffers.",
            company: "SecureSi Technologies",
            duration: "1 hour"
          }
        ]
      },
      {
        dayLabel: "Day 8",
        date: "30/06/2026",
        title: "Peripherals SDK Programming & Departure",
        items: [
          {
            time: "9:00 am - 12:00 pm",
            title: "Shakti Peripheral and its SDK",
            description: "Configuring memory-mapped control registers, drafting interrupt service routines (ISR), compile-run low level register drivers using GCC.",
            duration: "3 hours"
          },
          {
            time: "1:30 pm - 5:00 pm",
            title: "Final FPGA Evaluation Project",
            description: "Conducting diagnostic sweeps, validating continuous peripheral UART readouts, and debugging interconnect buses with virtual logic analyzers.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "11:55 pm - 6:30 am",
            title: "Travel back to Malaysia",
            description: "Departure from Chennai International Airport, arriving back in Kuala Lumpur safely.",
            duration: "4 hours"
          }
        ]
      },
      {
        dayLabel: "No Class",
        date: "01/07/2026",
        title: "Academic Rest & Recover Day",
        items: [
          {
            time: "All Day",
            title: "Break & Synthesis Consolidation",
            description: "No scheduled instruction blocks. Rest window and organizing notes before commencing Week 3 RISC-V Pipeline Core architecture."
          }
        ]
      }
    ]
  },
  {
    id: "week-3",
    week: "WEEK 3",
    title: "RISC-V Architecture & ISA Details",
    dates: "2–10 July 2026",
    subtitle: "Processor pipelined structures, CSR arrays, and recruiter technical assessments",
    iconName: "Cpu",
    highlight: "Ongoing Phase One Recruiter Interviews Facilitated Jointly by ASEM Partner Orgs",
    days: [
      {
        dayLabel: "Day 9",
        date: "02/07/2026",
        title: "Technical Resume & Self Branding Workshop",
        items: [
          {
            time: "9:00 am - 12:30 pm",
            title: "Resume Drafting and Profile Overhauls",
            description: "Crafting impactful technical statements highlighting silicon projects, Vivado/OpenLane parameters, and EDA tool experiences. Moderated by PERKESO.",
            duration: "3 hours 30 minutes",
            isSoftSkill: true
          },
          {
            time: "2:00 pm - 5:00 pm",
            title: "LinkedIn & Semiconductor Brand Representation",
            description: "Positioning digital portfolio assets to align with hardware recruitment pipelines of silicon houses (Intel, AMD, NVIDIA).",
            duration: "3 hours",
            isSoftSkill: true
          }
        ]
      },
      {
        dayLabel: "Day 10",
        date: "03/07/2026",
        title: "Computer Architecture & RISC-V Overview",
        items: [
          {
            time: "9:00 am - 12:30 pm",
            title: "Introduction to Computer Architecture & RISC-V",
            description: "Instruction Set Architectures vs Implementation specs, registers mapping, machine word lengths, and instructions memory organization rules.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "2:30 pm - 5:30 pm",
            title: "RISC-V Toolchain and Simulator Setup",
            description: "Configuring gcc-elf cross compilers, compiling first assembly files, booting RISC-V simulators (Spike), and inspect programmatic execution logs.",
            duration: "3 hours"
          }
        ]
      },
      {
        dayLabel: "Day 11",
        date: "06/07/2026",
        title: "Base Integer Assembly & Multiply Extensions",
        items: [
          {
            time: "9:00 am - 12:30 pm",
            title: "RISC-V ISA: Base Integer RV32I/64I and M Extension",
            description: "Deep instruction formats (R-type, I-type, S-type, B-type, U-type, J-type). Logic operators, addition/subtraction, branch controls, and hardware integer multiply/divide algorithms.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "1:30 pm - 5:00 pm",
            title: "Hands-on: Write Assembly Drivers",
            description: "Writing and validating RV32I assembly algorithms (sorting, matrices arithmetic) and verifying output values using simulator control files.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "Interviews",
            title: "ASEM Partner Recruitment Screenings",
            description: "Phase 1: Direct corporate screening interviews conducted by panel partners for VLSI positions.",
            isInterview: true
          }
        ]
      },
      {
        dayLabel: "Day 12",
        date: "07/07/2026",
        title: "Atomic, Floating-Point & Compressed Instruction Sets",
        items: [
          {
            time: "9:00 am - 12:30 pm",
            title: "Atomic (A), Float (F/D), and Compressed (C) Instruction Mechanics",
            description: "Mastering instructions that optimize multi-threaded cache synchronization, floating point hardware registers, and memory code-density compaction (16-bit instructions).",
            duration: "3 hours 30 minutes"
          },
          {
            time: "1:30 pm - 5:00 pm",
            title: "Hands-on: Float Matrix and Atomic Synchronizers",
            description: "Developing and profiling vector math programs and safe lock buffers step-by-step using emulator traces.",
            duration: "3 hours 30 minutes"
          }
        ]
      },
      {
        dayLabel: "Day 13",
        date: "08/07/2026",
        title: "Privileged Modes & CSR Access Controls",
        items: [
          {
            time: "9:00 am - 12:30 pm",
            title: "Privileged Architecture and Control Status Registers (CSR)",
            description: "Mastering Machine (M), Supervisor (S), and User (U) privilege tiers. Programming CSR configurations to read execution cycles, instructions count, and environmental states.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "1:30 pm - 5:00 pm",
            title: "Hands-on: Read/Write CSR Assembly Loops",
            description: "Developing safe assembly boot loaders that manipulate system timers and exception stacks.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "Interviews",
            title: "ASEM Partner Recruitment Screenings",
            description: "Technical micro-evaluations and design audits with lead silicon engineers.",
            isInterview: true
          }
        ]
      },
      {
        dayLabel: "Day 14",
        date: "09/07/2026",
        title: "Interrupts, Exceptions & Virtual Memory Handling",
        items: [
          {
            time: "9:00 am - 12:30 pm",
            title: "Interrupts, Exceptions, and PLIC Architecture",
            description: "Exploring both local/global interrupts, Core Local Interruptor (CLINT) traps, Platform-Level Interrupt Controller (PLIC) routing, and virtual memory page translation rules.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "1:30 pm - 5:00 pm",
            title: "Hands-on: Writing Custom Exception Traps",
            description: "Simulating system calling trap triggers and memory access violations to log exception handling routines.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "Interviews",
            title: "ASEM Partner Recruitment Screenings",
            description: "Evaluating micro-architectural design competency and debugging capability.",
            isInterview: true
          }
        ]
      },
      {
        dayLabel: "Day 15",
        date: "10/07/2026",
        title: "Processor Microarchitecture & Pipelined Execution",
        items: [
          {
            time: "9:00 am - 12:30 pm",
            title: "Processor Microarchitecture and Pipelining",
            description: "Understanding 3-to-5 stage processor execution loops. Managing data hazards, bypassing/forwarding logic gates, and branch misprediction performance impacts.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "2:30 pm - 5:30 pm",
            title: "Hands-on: Pipeline Bubble Profiling",
            description: "Analyzing hardware waveform traces to measure instruction bubble penalties and calculating IPC benchmarks.",
            duration: "30 Hours"
          },
          {
            time: "Interviews",
            title: "ASEM Partner Recruitment Screenings",
            description: "Final round assessments for front-end logic roles with ASEM partner semiconductor firms.",
            isInterview: true
          }
        ]
      }
    ]
  },
  {
    id: "week-4",
    week: "WEEK 4",
    title: "Debugging & Verification",
    dates: "13–17 July 2026",
    subtitle: "IEEE hardware debug nodes, randomized verification blocks, and logic checking",
    iconName: "Binary",
    highlight: "Comprehensive corporate recruitment interviews in progress across all days",
    days: [
      {
        dayLabel: "Day 16",
        date: "13/07/2026",
        title: "IEEE On-Chip Debug Architectures",
        items: [
          {
            time: "9:00 am - 12:30 pm",
            title: "Debug Architecture and Verification Flows",
            description: "Understanding JTAG boundary structures. Reviewing TAP controllers, debug module execution flags, runtime halt/resume controls, and setting hardware breakpoints.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "1:30 pm - 5:00 pm",
            title: "Hands-on: Real-Time Debugging",
            description: "Connecting simulators to debugger hosts via OpenOCD to inspect active core register values line-by-line during runtime execution.",
            duration: "3 hours 30 minutes"
          }
        ]
      },
      {
        dayLabel: "Day 17",
        date: "14/07/2026",
        title: "SoC Simulation & Interconnect Probing",
        items: [
          {
            time: "9:00 am - 12:30 pm",
            title: "SoC Architecture and Peripheral Integration Blocks",
            description: "Understanding memory controller pipelines, system arbiter prioritizations, and optimizing high speed interconnect routing speeds.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "1:30 pm - 5:00 pm",
            title: "Hands-on: SoC System Level Simulation",
            description: "Compiling core peripheral hardware alongside Shakti processor models and monitoring AXI data transmission correctness using wave traces.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "Interviews",
            title: "Corporate Technical Interview Assessments",
            description: "Real design reviews conducted by guest partners' technical directors.",
            isInterview: true
          }
        ]
      },
      {
        dayLabel: "Day 18",
        date: "15/07/2026",
        title: "Instruction Tracing & Chip Event Modeling",
        items: [
          {
            time: "9:00 am - 12:30 pm",
            title: "Processor Simulation & Simulation Tracing",
            description: "Validating processor functional correctness under edge states. Analyzing core-dump text sweeps and comparing logical register tracking.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "1:30 pm - 5:00 pm",
            title: "Hands-on: Processor Simulation Analyzers",
            description: "Running diagnostic tests on Shakti RTL. Generating waveform files to identify logical gate propagation lags.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "Interviews",
            title: "Corporate Technical Interview Assessments",
            description: "System design evaluations with hiring leads.",
            isInterview: true
          }
        ]
      },
      {
        dayLabel: "Day 19",
        date: "16/07/2026",
        title: "Verification Theory and Coverages closures",
        items: [
          {
            time: "9:00 am - 12:30 pm",
            title: "Verification Methodologies and Coverage Rules",
            description: "RTL functional verification requirements. Directed tests vs randomized trials. Defining code, branch, and expression coverage metrics.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "1:30 pm - 5:00 pm",
            title: "Hands-on: Directed Verification Testing",
            description: "Constructing self-validating test benches in verilator. Pulling and analyzing functional coverage summary statistics.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "Interviews",
            title: "Corporate Technical Interview Assessments",
            description: "Detailed code reviews assessing test writing habits.",
            isInterview: true
          }
        ]
      },
      {
        dayLabel: "Day 20",
        date: "17/07/2026",
        title: "Randomized test suites engines & AAPG",
        items: [
          {
            time: "9:00 am - 12:30 pm",
            title: "Random Test Generators and Verification Tools Overview",
            description: "Study of advanced automated test generators including AAPG, riscv-torture, and riscv-dv. Automating compilation sequences for mass stress sweeps.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "2:30 pm - 5:30 pm",
            title: "Hands-on: Random Test Generation",
            description: "Synthesizing thousands of random instruction flows and executing concurrently across models to pinpoint deep design discrepancies.",
            duration: "3 hours"
          },
          {
            time: "Interviews",
            title: "Corporate Technical Interview Assessments",
            description: "Final rounds: Panel wrap-up with senior talent acquisition representatives.",
            isInterview: true
          }
        ]
      }
    ]
  },
  {
    id: "week-5",
    week: "WEEK 5",
    title: "Final Evaluation & Hackathon",
    dates: "20–21 July 2026",
    subtitle: "High-pressure diagnostic showdowns, benchmarks sweeps and bug hunting",
    iconName: "Award",
    highlight: "Trophy Ceremony & Cash Prize Distribution facilitated by ASEM Leadership",
    days: [
      {
        dayLabel: "Day 21",
        date: "20/07/2026",
        title: "Benchmarks Run & Launching 'Capture the Bug'",
        items: [
          {
            time: "9:00 am - 12:30 pm",
            title: "Benchmarks and Performance Validation Core",
            description: "Evaluating chip parameters using CoreMark and Dhrystone frameworks. Profiling memory bottlenecks under intensive workload loops.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "1:30 pm - 5:00 pm",
            title: "Capture The Bug Hackathon (Phase I)",
            description: "Initiation: Teams receive buggy Shakti RTL nodes and SoC models. Goal: Detect, root-cause, document, and cleanly patch hidden physical anomalies under strict deadlines.",
            duration: "3 hours 30 minutes"
          }
        ]
      },
      {
        dayLabel: "Day 22",
        date: "21/07/2026",
        title: "Hackathon Final Audits & Corporate Showcases",
        items: [
          {
            time: "9:00 am - 12:30 pm",
            title: "Capture The Bug Hackathon (Phase II)",
            description: "Final stretch: Implementing repairs, testing regressions with random suites, and drafting technical diagnostic reports.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "1:30 pm - 5:00 pm",
            title: "Capture The Bug Review & Presentations",
            description: "Presenting debug methodologies and patch reports before an academic review board from IIT Madras and industry advisors.",
            duration: "3 hours 30 minutes"
          },
          {
            time: "Interviews",
            title: "Final Hiring Wrap-ups",
            description: "Immediate offers signoff panel.",
            isInterview: true
          }
        ]
      }
    ],
    finalEvent: "CAPTURE THE BUG HACKATHON",
    description: "An elite industry emulation. Teams investigate real RTL and processor physical compilation faults, identify root causes, draft debug protocols, perform hardware hotfixes and pitch system strategies to silicon executive boards."
  }
];

export const SKILL_MATRIX: SkillCategory[] = [
  {
    title: "Hardware Design",
    skills: [
      { name: "Verilog RTL Modeling", level: 95 },
      { name: "Logic Synthesis (Synopsys Design Compiler)", level: 90 },
      { name: "FPGA Prototyping (Xilinx Vivado)", level: 88 },
      { name: "Physical Design (Floorplanning & CTS)", level: 85 },
      { name: "Static Timing Analysis (STA)", level: 87 }
    ]
  },
  {
    title: "Processor Architecture",
    skills: [
      { name: "RISC-V ISA (RV32IMAFD/C)", level: 95 },
      { name: "Assembly & Executable compilation", level: 90 },
      { name: "Cpu Pipeline & Cache microarchitecture", level: 92 },
      { name: "On-Chip CSR & Exception Trap Management", level: 86 }
    ]
  },
  {
    title: "Verification & Validation",
    skills: [
      { name: "Functional Verification & Waveform debugging", level: 94 },
      { name: "Constrained Random Verification Models", level: 89 },
      { name: "Hardware JTAG Debug Hooks & OpenOCD", level: 91 },
      { name: "Physical Layout DRC / LVS checks", level: 88 }
    ]
  },
  {
    title: "Soft Skills & Employability",
    skills: [
      { name: "Silicon Recruiter Technical Interview Readiness", level: 96 },
      { name: "LinkedIn Semiconductor Networking", level: 92 },
      { name: "VLSI Technical Resume Drafting", level: 95 },
      { name: "Collaborative Product Deadline Presentation", level: 94 }
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is GSEP & the RISC-V Programme?",
    answer: "The Graduate Semiconductor Employment Programme (GSEP) is an elite, multi-national initiative designed to bridge the gap between academic theory and complex industrial VLSI silicon workflows. Orchestrated through ASEM and leveraging academic & industrial titans like SHAKTI, this intensive program delivers hands-on engineering experience in front-end microarchitecture, chip integration, physical design, and verification."
  },
  {
    id: "faq-2",
    question: "Why focus heavily on RISC-V?",
    answer: "RISC-V is a highly disruptive, open-source Instruction Set Architecture (ISA) that is rapidly reshaping the global semiconductor landscape. Tech powerhouses—including NVIDIA, Western Digital, Apple, Qualcomm, Google, and Meta—are aggressively shifting designs to custom RISC-V architecture. Learning RISC-V equips graduates with tomorrow's instruction mastery, offering an open canvas for cutting-edge SoC configuration."
  },
  {
    id: "faq-3",
    question: "What is the SHAKTI Processor project?",
    answer: "SHAKTI is an open-source processor initiative pioneered by the legendary RISE group at IIT Madras. It is India's leading custom processor ecosystem, producing fully-certified production-ready chips. By training with SHAKTI cores, students directly interact with real-world silicon pipelines, standard interconnects (AMBA AXI/APB), and industrial debugging interfaces."
  },
  {
    id: "faq-4",
    question: "What concrete skills and tools will participants master?",
    answer: "Participants undergo rigorous daily exercises. Front-end skills include RTL hardware design, RISC-V assembly programming, pipeline design, and JTAG debugging. Back-end skills include logic synthesis, floorplanning, CTS, routing, physical layout verification (DRC/LVS), and static timing validation (STA). Key tools learned include Synopsys/Cadence standard styles, open-source EDA suites (OpenLane, Yosys), and FPGA tools (Xilinx Vivado)."
  },
  {
    id: "faq-5",
    question: "Are there integrated real-world industry interviews?",
    answer: "Absolutely. Rather than just offering academic lectures, GSEP connects participants with leading semiconductor design center partners. In Week 3 and Week 4, candidates undergo simulated and actual recruiter technical mock interviews. Excellent-performing candidates have direct pathways to receive interview callbacks, internships, and full-time employment offers from global hardware firms."
  },
  {
    id: "faq-6",
    question: "What practical projects are developed in the labs?",
    answer: "Labs are highly immersive. Every student produces: (1) An AMBA AXI4 peripheral bus design, (2) A custom SoC by integrating functional peripherals to a SHAKTI CPU, (3) FPGA prototyping bitstream execution, and (4) The culminating 'Capture The Bug' Hackathon, where teams diagnose and patch hidden faults of complex real-world RTL builds."
  },
  {
    id: "faq-7",
    question: "What career pathways open up post-completion?",
    answer: "Your career options expand globally inside top semiconductor houses (Intel, AMD, NVIDIA, Synopsys, Cadence, Arm, Qualcomm, and local foundry giants). Graduates step confidently into positions like RTL Design Engineer, FPGA Engineer, Verification Engineer, SoC Design Engineer, Physical Design Coordinator, or Embedded Systems Specialist."
  }
];

export const CAREER_ROADMAP: CareerNode[] = [
  {
    id: "start-grad",
    label: "GRADUATE ENTRY",
    role: "Electronics / Comp Sci Graduate",
    description: "Equipped with abstract theory, looking for high-performance industry VLSI workflow secrets.",
    category: "starting",
    connections: ["rtl-eng", "fpga-eng", "verif-eng", "soc-eng", "physical-eng"],
    x: 10,
    y: 50
  },
  {
    id: "rtl-eng",
    label: "RTL DESIGN ENGINEER",
    role: "Front-End Microarchitecture",
    description: "Write highly compact, clock-optimized Verilog and SystemVerilog code to implement complex processor logic and memory hierarchy controllers.",
    category: "outcome",
    connections: [],
    x: 80,
    y: 15
  },
  {
    id: "fpga-eng",
    label: "FPGA PROTOTYPING SPECIALIST",
    role: "Hardware Emulator",
    description: "Synthesize circuits on state-of-the-art Xilinx/Altera boards, managing high-frequency IO and validation of complex physical clock loops.",
    category: "outcome",
    connections: [],
    x: 80,
    y: 28
  },
  {
    id: "verif-eng",
    label: "ASIC VERIFICATION ENGINEER",
    role: "Functional / Coverage Lead",
    description: "Develop extensive SystemVerilog/UVM test environments, design randomized testing setups, and verify flawless corner-case pipeline behavior.",
    category: "outcome",
    connections: [],
    x: 80,
    y: 41
  },
  {
    id: "soc-eng",
    label: "SoC INTEGRATION SPECIALIST",
    role: "System-on-Chip Integrator",
    description: "Stitch together third-party IPs, AMBA AXI/APB bus architectures, clock domains, custom hardware accelerators, and processor cores.",
    category: "outcome",
    connections: [],
    x: 80,
    y: 54
  },
  {
    id: "physical-eng",
    label: "PHYSICAL DESIGN ENGINEER",
    role: "Digital Back-End expert",
    description: "Control floorplanning, optimal power grid distributions (PG nets), Clock Tree Synthesis (CTS), routing congestion, timing margins (STA), and DRC/LVS validations.",
    category: "outcome",
    connections: [],
    x: 80,
    y: 67
  },
  {
    id: "embed-eng",
    label: "EMBEDDED SYSTEMS SCIENTIST",
    role: "Firmware & Low-Level Driver code",
    description: "Write ultra-lean C/Assembly, program Control Status Registers (CSRs), design interrupt routines, exception vectors, and custom RTOS cores directly on custom silicon.",
    category: "outcome",
    connections: [],
    x: 80,
    y: 80
  },
  {
    id: "semic-eng",
    label: "SEMICONDUCTOR SYSTEMS ENGINEER",
    role: "General Chip Architect",
    description: "Bridge the architectural specs with product releases, directing tape-out flows and validating live post-silicon chips.",
    category: "outcome",
    connections: [],
    x: 84,
    y: 93
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Processor Sandbox Lab",
    category: "Semiconductor Labs",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
    description: "High-performance evaluation stations loaded with SHAKTI RISC-V cores."
  },
  {
    id: "gal-2",
    title: "Logic Development Flow",
    category: "FPGA Development",
    imageUrl: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=700&q=80",
    description: "Deploying high-speed Verilog bitstreams directly mapping controller structures."
  },
  {
    id: "gal-3",
    title: "Deep-Dive Design Reviews",
    category: "Training Sessions",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80",
    description: "Intense black-board layouts, clock skew mitigations, and RTL walkthroughs."
  },
  {
    id: "gal-4",
    title: "IIT Madras Collaboration",
    category: "Chennai Experience",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=700&q=80",
    description: "Experiencing India's supreme chip research park and networking hubs."
  },
  {
    id: "gal-5",
    title: "EDA Partner Site Tour",
    category: "Industry Visits",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
    description: "Gaining real context inside active commercial design centers."
  },
  {
    id: "gal-6",
    title: "Team Calibration Hackathon",
    category: "Team Activities",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80",
    description: "Diagnosing hidden logic faults and racing to finalize SoC outputs."
  }
];

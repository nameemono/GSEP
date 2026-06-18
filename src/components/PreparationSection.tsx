import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, Terminal, Cpu, Shield, Award, Code, HelpCircle, 
  ChevronRight, ChevronDown, Sparkles, Star, CheckCircle2, 
  AlertCircle, CheckSquare, Layers, TrendingUp, Compass, Play, X
} from "lucide-react";

// Types for gamified nodes
interface SkillLevel {
  level: number;
  title: string;
  difficulty: number; // 1 to 5
  hours: number;
  path: string;
  resources: string[];
  quiz: {
    question: string;
    choices: string[];
    answerIndex: number;
    explanation: string;
  };
  completed: boolean;
}

interface SkillTree {
  id: string;
  name: string;
  levels: SkillLevel[];
}

export default function PreparationSection() {
  // Static Map Node definitions (for Knowledge Map)
  const mapNodes = [
    {
      id: "node-logic",
      title: "Digital Logic",
      path: "A",
      phase: "Foundation Logic",
      description: "Combines boolean algebra, primitive logic gates (NAND, NOR, XOR), maps, and state logic machines (Mealy/Moore registers).",
      labs: "Breadboard FSM prototyping",
      tools: "Logisim, WaveDrom",
      parent: null
    },
    {
      id: "node-verilog",
      title: "Verilog HDL",
      path: "A",
      phase: "RTL Specification",
      description: "Structural/behavioral hardware description coding, combinational arrays, sync sequential flip-flop registers, clocks.",
      labs: "Modular UART transmission blocks",
      tools: "Icarus Verilog, GTKWave",
      parent: "node-logic"
    },
    {
      id: "node-rtl",
      title: "RTL Design",
      path: "A",
      phase: "Processor Core Design",
      description: "Complex pipelining, multi-stage hazard bypassing, CPU register configurations, memory interconnect bus routing.",
      labs: "5-Stage Pipelined RV32I Core",
      tools: "Xilinx Vivado, Verilator",
      parent: "node-verilog"
    },
    {
      id: "node-synthesis",
      title: "Synthesis",
      path: "A",
      phase: "Netlist Compilation",
      description: "Translating hardware behavioral description models into optimized logic gate layouts mapped against precise delays.",
      labs: "Gate Netlist Synthesizer Exercises",
      tools: "Yosys, Synopsys Design Compiler",
      parent: "node-rtl"
    },
    {
      id: "node-physical",
      title: "Physical Design",
      path: "A",
      phase: "GDSII Tape-out Signoff",
      description: "Cell floorplan configurations, PG grid planning lines, Clock Tree Synthesis logic offsets, Static Timing Adjustments.",
      labs: "Micro-ASIC chip layout tapeout",
      tools: "OpenLane, Cadence Innovus",
      parent: "node-synthesis"
    },
    {
      id: "node-arch",
      title: "Computer Architecture",
      path: "B",
      phase: "System Specification",
      description: "CPU instruction execution cycles, cache structures (L1, L2, L3 operations), registers, hardware stacks, interrupt lines.",
      labs: "Assembly execution trace matrices",
      tools: "Spike, Ripes Simulator",
      parent: "node-logic"
    },
    {
      id: "node-riscv",
      title: "RISC-V Systems",
      path: "B",
      phase: "ISA Integration",
      description: "RISC-V standard registers (x0-x31 mappings), Base integer instruction sets, Floating points, CSR array arrays.",
      labs: "Bare-metal compiler diagnostic traces",
      tools: "gcc-riscv-elf, GNU Toolchain",
      parent: "node-arch"
    },
    {
      id: "node-processor",
      title: "Processor Design",
      path: "B",
      phase: "Custom Silicon Verification",
      description: "System timing validation, PLIC interrupts handling, virtual memory controllers, JTAG boundary debugging cores.",
      labs: "On-board FPGA logic bootloader",
      tools: "OpenOCD, Xilinx Vivado",
      parent: "node-riscv"
    }
  ];

  // Initial State for dynamic game tree
  const [skillTrees, setSkillTrees] = useState<SkillTree[]>([
    {
      id: "digital-logic",
      name: "Digital Logic",
      levels: [
        {
          level: 1,
          title: "Logic Gates & Boolean Algebra",
          difficulty: 1,
          hours: 4,
          path: "Understand fundamental binary mappings, truth tables, and primitive combinational gates (AND, OR, NOT, XOR, NAND).",
          resources: ["Neso Academy - Digital Electronics Introduction", "AllAboutCircuits - Logic Gates Vol IV"],
          quiz: {
            question: "Which logic gate serves as a universal gatecapable of building all other basic doors?",
            choices: ["AND Gate", "XOR Gate", "NAND Gate", "OR Gate"],
            answerIndex: 2,
            explanation: "NAND and NOR gates are universal gates because any boolean logical expression can be fully implemented using only combinations of these gates."
          },
          completed: true
        },
        {
          level: 2,
          title: "K-Maps & Combinational Logic",
          difficulty: 2,
          hours: 6,
          path: "Optimize complex boolean functions visually using Karnaugh Maps (K-Maps), implement Multiplexers and Decoders.",
          resources: ["Gate Smashers - Boolean Minimization Tutorials", "GeeksforGeeks - Combinational Logic Systems"],
          quiz: {
            question: "How many cells are present in a Karnaugh Map designed for a 4-variable boolean logical system?",
            choices: ["8 Cells", "16 Cells", "32 Cells", "6 Cells"],
            answerIndex: 1,
            explanation: "For 'n' variables, a K-Map contains 2^n cells. Therefore, a 4-variable K-Map contains 2^4 = 16 cells."
          },
          completed: true
        },
        {
          level: 3,
          title: "FSM & State Registers",
          difficulty: 4,
          hours: 8,
          path: "Construct Mealy & Moore Finite State Machines. Map synchronous feedback registers and understand state transits.",
          resources: ["MIT 6.004 L11 - Finite State Machines Tutorial", "RTL Design Guide - Synchronous Sequential Systems"],
          quiz: {
            question: "What is the primary difference in output determination between Mealy and Moore state machines?",
            choices: [
              "Mealy outputs depend on current state only",
              "Moore outputs depend on current inputs only",
              "Mealy outputs depend on both current state and current inputs",
              "Moore outputs contain asynchronous delays"
            ],
            answerIndex: 2,
            explanation: "In a Mealy machine, the output is a function of both the current state and the current inputs. In a Moore machine, the output is a function of the current state only."
          },
          completed: false
        }
      ]
    },
    {
      id: "verilog",
      name: "Verilog HDL",
      levels: [
        {
          level: 1,
          title: "Synthesizable Syntax",
          difficulty: 2,
          hours: 5,
          path: "Master declarations, net parameters (wire vs reg), inputs/outputs, and behavioral assigning logic rows.",
          resources: ["HDLBits - Interactive Online Verilog Simulator", "ASIC-World - Verilog Basics Guide"],
          quiz: {
            question: "In standard synthesizable Verilog, which type element should hold states inside sequential 'always' structures?",
            choices: ["wire Type", "reg / logic Type", "integer constants", "assign command"],
            answerIndex: 1,
            explanation: "A 'reg' (or 'logic' in SystemVerilog) is used to hold procedural values assigned inside always blocks, translating to physical memory elements like D-Flip-Flops."
          },
          completed: true
        },
        {
          level: 2,
          title: "Always Blocks & Sync Memory",
          difficulty: 3,
          hours: 7,
          path: "Write synchronous logic using posedge clock cues and asynchronous registers reset parameters.",
          resources: ["Cliff Cummings - Nonblocking Assignments Guide", "Verilog HDL by Samir Palnitkar"],
          quiz: {
            question: "Which type of assignment operator (<= or =) must be strictly utilized inside sequential non-blocking clock-triggered blocks?",
            choices: ["Always blocking (=)", "Non-blocking (<=)", "Asynchronous logical (==)", "Gate instantiation (=>)"],
            answerIndex: 1,
            explanation: "Non-blocking assignments (<=) are mandatory for modeling sequential logic to prevent scheduling race conditions in EDA simulators."
          },
          completed: false
        },
        {
          level: 3,
          title: "Modular RTL Testing",
          difficulty: 5,
          hours: 10,
          path: "Develop comprehensive parameter-driven testbenches, timing assertions, and handle multiple simulation runs.",
          resources: ["Verilator Guide - Fast RTL Simulations", "Verification Academy - Module Prototyping"],
          quiz: {
            question: "What is the primary function of a clock generator inside a behavioral Verilog testbench definition?",
            choices: [
              "To synthesise a physical crystalline silicon oscillator on a wafer",
              "To produce continuous timing switches mimicking actual chip clocks",
              "To check power allocations on the macro cell floorplan",
              "To calculate positive timing slack margins automatically"
            ],
            answerIndex: 1,
            explanation: "Testbenches are purely behavioral and non-synthesizable. A behavioral clock loops timing switches so code logic can mock live clock ticks."
          },
          completed: false
        }
      ]
    },
    {
      id: "riscv",
      name: "RISC-V Systems",
      levels: [
        {
          level: 1,
          title: "Register Sets & Isa Layout",
          difficulty: 3,
          hours: 6,
          path: "Understand the RV32I integer registers (x0 to x31), roles of return register 'ra', and Stack Pointer mappings.",
          resources: ["RISC-V Reader - An Open Architecture Textbook", "Shakti Processor - Shakti ISA Overview"],
          quiz: {
            question: "Which RISC-V baseline architecture hardware register is permanently locked to a constant value of zero?",
            choices: ["Register x1 (ra)", "Register x2 (sp)", "Register x0 (zero)", "Register x10 (a0)"],
            answerIndex: 2,
            explanation: "Register x0 is hardwired to zero (zero) in the RISC-V ISA. Any write to x0 is silently discarded, providing a reliable constant reference."
          },
          completed: true
        },
        {
          level: 2,
          title: "Instruction Fields Decoding",
          difficulty: 4,
          hours: 8,
          path: "Translate binary opcodes to R-Type, I-Type, S-Type, and B-Type instruction fields step-by-step.",
          resources: ["RISC-V Technical Specifications - Volume I Client", "Berkeley EECS - Instruction Execution Map"],
          quiz: {
            question: "Which instruction type is utilized for Load operations that fetch data from external RAM into architecture registers?",
            choices: ["R-Type instructions", "I-Type instructions", "S-Type instructions", "U-Type instructions"],
            answerIndex: 1,
            explanation: "Load operations require an immediate offset added to a base register. In RISC-V, this offset structure fits perfectly inside I-Type instructions."
          },
          completed: false
        },
        {
          level: 3,
          title: "Control CSRs & Privileges",
          difficulty: 5,
          hours: 12,
          path: "Access standard exceptions stacks, program Machine Status registers (mstatus), and configure Timer CSRs.",
          resources: ["RISC-V Privileged ISA Manual", "Bare-metal RISC-V Assembly Coding Guides"],
          quiz: {
            question: "What does CSR stand for in the context of advanced RISC-V processor architectural configurations?",
            choices: [
              "Critical System Register",
              "Control and Status Register",
              "Core Status Record",
              "Combinational Silicon Routing"
            ],
            answerIndex: 1,
            explanation: "CSR elements are Control and Status Registers used to monitor processor states (timers, counters, traps, interrupt controls) across runtime blocks."
          },
          completed: false
        }
      ]
    },
    {
      id: "linux",
      name: "Linux Operations",
      levels: [
        {
          level: 1,
          title: "Terminal Command Flows",
          difficulty: 1,
          hours: 3,
          path: "Navigate directories, create files, grep log expressions, and inspect dynamic system variables.",
          resources: ["Linux Journey Academy - Core shell drills", "Ryans Tutorials - Linux CommandLine intro"],
          quiz: {
            question: "Which command-line program sweeps file readouts searching for matching string sequences?",
            choices: ["chmod", "grep", "cat", "mkdir"],
            answerIndex: 1,
            explanation: "The 'grep' utility is used to search text patterns inside file collections using specified regular designs."
          },
          completed: true
        },
        {
          level: 2,
          title: "Permissions & Shell Scripts",
          difficulty: 3,
          hours: 5,
          path: "Manage user permissions (chmod parameters), write bash scripts to automate repetitive compile chains.",
          resources: ["Bash Guide for Beginners", "Unix Shell Scripting Tutorials"],
          quiz: {
            question: "Which octal code sets read, write, and execute permissions for the owner, and read/execute permissions for others?",
            choices: ["755", "644", "700", "777"],
            answerIndex: 0,
            explanation: "755 gives the owner read/write/execute (4+2+1=7), groups read/execute (4+1=5), and public read/execute (4+1=5)."
          },
          completed: false
        },
        {
          level: 3,
          title: "Container & Scripting Automation",
          difficulty: 4,
          hours: 6,
          path: "Set up sandboxed project frameworks on Docker. Write advanced multi-stage build scripts for SDK packages.",
          resources: ["Docker Hub - Linux Container Sandboxes", "EDA Toolchain Scripting manuals"],
          quiz: {
            question: "Why do enterprise silicon design compilers almost exclusively run within remote Linux virtual terminal grids?",
            choices: [
              "Because hardware engineers can only code on black terminal screens",
              "Because standard UNIX OS handles extreme parallel silicon compile sizes",
              "Because Windows lacks mouse cursor controls for chip layouts",
              "Because CPU transistors are physically cooled by Linux commands"
            ],
            answerIndex: 1,
            explanation: "Complex VLSI/EDA synthesis demands massive server clusters with robust Unix threads, high storage thresholds, and automatable compiler layouts."
          },
          completed: false
        }
      ]
    },
    {
      id: "git",
      name: "Git & Collaboration",
      levels: [
        {
          level: 1,
          title: "Commits & Remote Syncing",
          difficulty: 1,
          hours: 2,
          path: "Initialize repositories, handle logical commits, pull remotes, and configure SSH Key access parameters safely.",
          resources: ["GitHub Flight Academy - Syncing repos tutorial", "Atlassian Git - Getting Started"],
          quiz: {
            question: "Which command uploads local commits to active remote enterprise server repos?",
            choices: ["git fetch", "git pull", "git merge", "git push"],
            answerIndex: 3,
            explanation: "'git push' copies all localized branch updates up to specified central master directories."
          },
          completed: true
        },
        {
          level: 2,
          title: "Branching & Merge Gates",
          difficulty: 3,
          hours: 5,
          path: "Create logic fix branches, handle automated merges, and resolve conflicting lines in RTL repositories.",
          resources: ["Git Branching - Interactive Game Simulator", "Pro Git Book by Scott Chacon"],
          quiz: {
            question: "What happens when automated code integrations overlap on the absolute same lines in a shared layout file?",
            choices: [
              "Git deletes both branches to keep servers clean",
              "A 'merge conflict' triggers requiring manual line adjustments",
              "The processor chip clock experiences positive timing violations",
              "A background bash script completes the tape-out process"
            ],
            answerIndex: 1,
            explanation: "When code alterations overlap on identical lines, Git halts automated merges and triggers a merge conflict so authors can decide which changes to keep."
          },
          completed: false
        },
        {
          level: 3,
          title: "Elite Repository Workflows",
          difficulty: 4,
          hours: 6,
          path: "Automate code checks via pre-commit hooks, perform surgical git-rebases, and audit large branch structures.",
          resources: ["GitHub Actions - Automated checking models", "Advanced Git Rebase procedures manual"],
          quiz: {
            question: "Which command lets engineers integrate individual selected commits from secondary branches into active main lines?",
            choices: ["git reset --hard", "git cherry-pick", "git revert --no-edit", "git diff HEAD"],
            answerIndex: 1,
            explanation: "'git cherry-pick' allows copying a specific commit, by its SHA-1 hash key, from any track directly onto the current active branch."
          },
          completed: false
        }
      ]
    },
    {
      id: "c-prog",
      name: "C Programming",
      levels: [
        {
          level: 1,
          title: "Variables & Bare Memory",
          difficulty: 2,
          hours: 4,
          path: "Code conditional execution blocks, write loops, and map data arrays to explicit storage frames.",
          resources: ["Learn C Interactive Online Tutorials", "C Programming absolute handbook guide"],
          quiz: {
            question: "What is the physical memory byte-width consumed by standard 32-bit unsigned integer allocations?",
            choices: ["2 Bytes", "4 Bytes", "8 Bytes", "16 Bytes"],
            answerIndex: 1,
            explanation: "Under standard compilation metrics, a 32-bit integer consumes precisely 32 / 8 = 4 bytes of physical RAM."
          },
          completed: true
        },
        {
          level: 2,
          title: "Pointers & Dynamic Addresses",
          difficulty: 4,
          hours: 6,
          path: "Configure pointers, read dynamic memory addresses, handle dereferences, and navigate active stack registers.",
          resources: ["GeeksforGeeks - Pointers in C language", "Stanford CS education - Memory systems, stack/heap structures"],
          quiz: {
            question: "Which C operator retrieves the baseline physical memory address of a specified localized variable?",
            choices: ["The asterisk operator (*)", "The ampersand operator (&)", "The arrow reference (->)", "The offset operator (%)"],
            answerIndex: 1,
            explanation: "The '&' operator acts as the address-of operator in C, returning the absolute RAM memory address where the variable is active."
          },
          completed: false
        },
        {
          level: 3,
          title: "Volatile Structs & Drivers",
          difficulty: 5,
          hours: 9,
          path: "Define volatile qualifiers to prevent compiler cache skip of memory-mapped registers, build register level peripheral drivers.",
          resources: ["Embedded C programming guides", "Interrupt service routine drivers code examples"],
          quiz: {
            question: "Why is the 'volatile' decorator critical when defining structures pointing directly to hardware registers?",
            choices: [
              "It forces compilers to optimize mathematics for speedy cycles",
              "It signals that foreign hardware change register states independently of code loops",
              "It completely wipes variables from the central stack structures",
              "It makes standard sequential variables change to combinational logic wires"
            ],
            answerIndex: 1,
            explanation: "Without the 'volatile' tag, state optimization passes inside compilers might assume register values can't alter on their own, resulting in stale cached values."
          },
          completed: false
        }
      ]
    }
  ]);

  // Track currently selected skill from trees for level detail inspect
  const [selectedTreeId, setSelectedTreeId] = useState<string>("digital-logic");
  const [selectedLevelIdx, setSelectedLevelIdx] = useState<number>(2); // Default to digital logic level 3
  
  // Interactive Checklist questions (Dashboard metrics)
  const [checklistItems, setChecklistItems] = useState([
    { id: "chk-1", text: "Successfully set up local Linux shell, Bash terminals active", completed: true, points: 5, category: "Linux" },
    { id: "chk-2", text: "Understand the Truth Table mappings of XOR and NAND gates", completed: true, points: 5, category: "Logic" },
    { id: "chk-3", text: "Possess active GitHub account with configure local SSH credentials", completed: true, points: 5, category: "Git" },
    { id: "chk-4", text: "Can explain difference between combinatorial wires and sync regs", completed: true, points: 7, category: "Verilog" },
    { id: "chk-5", text: "Know the roles of general-purpose RISC-V x1 and x2 registers", completed: false, points: 8, category: "RISC-V" },
    { id: "chk-6", text: "Installed and configured Ripes / Spike processor simulation suites", completed: false, points: 10, category: "RISC-V" },
    { id: "chk-7", text: "Capable of writing simple loops in bare-metal assembly rows", completed: false, points: 10, category: "RISC-V" },
    { id: "chk-8", text: "Written first simple C program with raw dynamic pointer dereferences", completed: true, points: 10, category: "C Prog" }
  ]);

  // Diagnostic Quiz questionnaire state
  const [activeQuizQuestionIdx, setActiveQuizQuestionIdx] = useState<number>(0);
  const [quizSelectedChoiceIdx, setQuizSelectedChoiceIdx] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [interviewScreenActive, setInterviewScreenActive] = useState<boolean>(false); // Simulator window toggle

  // Multi-choice Interview questions database
  const interviewQuestions = [
    {
      q: "A designer writes a synthesizable sequential Always block but mistakenly assigns output values using blocking (=) operators. What risk is introduced?",
      choices: [
        "A. The code fails to compile in any standard text editor.",
        "B. It generates simulation race conditions where behavior differs before and after logic synthesis.",
        "C. The circuit's physical GDSII layout will double in surface area on the wafer.",
        "D. The hardware register is permanently locked with negative hold timing slack parameters."
      ],
      answerIdx: 1,
      explanation: "Blocking assignments inside clock sequential blocks execute instantly, generating unexpected evaluation states. This produces discrepancies between simulator trials and synthesized logic."
    },
    {
      q: "During Static Timing Analysis, a negative setup slack value is flagged on a critical register path. Which action resolves this violation?",
      choices: [
        "A. Increase the active system clock period (slowing overall system velocity).",
        "B. Insert a series of high-delay buffers along the clock distribution lines.",
        "C. Inject non-synthesizable assembly loops inside the program stack frames.",
        "D. Change all system flip-flops to asynchronous latches."
      ],
      answerIdx: 0,
      explanation: "To close setup timing slack, one must shorten combinatorial logic gaps, run faster cells, or lengthen the target clocks period (lowering clock frequency) so output data has ample time to settle."
    },
    {
      q: "A Shakti processor core fetches an instruct word from logical address 0x80004000. Which system element decodes physical bitstreams into actual memory mappings?",
      choices: [
        "A. The Floating-point ALU registers array.",
        "B. The JTAG Boundary Scan controller hubs.",
        "C. The Control Unit's Instruction Decoder blocks.",
        "D. The UART Tx/Rx buffer channels."
      ],
      answerIdx: 2,
      explanation: "The CPU Control Unit features an internal hardware Instruction Decoder that filters binary opcode bits to identify standard actions, operands, and register addresses."
    },
    {
      q: "In an FPGA silicon board, what structure performs the logical mapping that allows developers to mock arbitrary physical hardware arrays?",
      choices: [
        "A. Copper macro cells and thermal cooling tubes.",
        "B. Look-Up Tables (LUTs) combined with configurable logic routing cells.",
        "C. Real physical micro-processors running embedded Linux containers.",
        "D. Resistor networks with adjustable voltage parameters."
      ],
      answerIdx: 1,
      explanation: "FPGAs features large arrays of Lookup Tables (LUTs) with SRAM cells. These function as dynamic truth tables, mapping logical inputs to outputs to emulate complex circuits."
    },
    {
      q: "A registers setup suffers from hold timing violation. If the chip is physically printed with this issue, how can this fail state be recovered?",
      choices: [
        "A. Lower the clock frequency (scaling down throughput).",
        "B. Lower the local operating temperature using liquid helium nodes.",
        "C. This is a fatal logical failure; the printed silicon cannot be recovered.",
        "D. Modifying program codes to skip register operations."
      ],
      answerIdx: 2,
      explanation: "Hold timing is independent of clock speed; data cannot change too early relative to clock edges. If written physically with hold violations, it creates meta-stability that cannot be resolved via software."
    }
  ];

  // Selected Node (for Node Graph details drawer)
  const [selectedGraphNode, setSelectedGraphNode] = useState<typeof mapNodes[0] | null>(null);

  // Computed Values for Dashboard
  const [computedReadiness, setComputedReadiness] = useState<number>(73);
  const [strengths, setStrengths] = useState<string[]>(["Digital logic", "Git basics", "C arrays"]);
  const [weaknesses, setWeaknesses] = useState<string[]>(["Clock tree setups", "RISC-V assembly loops"]);

  // Calculate readiness dynamics
  useEffect(() => {
    // Collect progress
    const totalChecklistItems = checklistItems.length;
    const completedChecklistItems = checklistItems.filter(c => c.completed).length;

    const totalSkillLevels = skillTrees.reduce((sum, tree) => sum + tree.levels.length, 0);
    const completedSkillLevels = skillTrees.reduce((sum, tree) => sum + tree.levels.filter(l => l.completed).length, 0);

    const checklistWeight = 0.4;
    const skillTreeWeight = 0.6;

    const checklistScore = totalChecklistItems > 0 ? (completedChecklistItems / totalChecklistItems) * 100 : 0;
    const skillScore = totalSkillLevels > 0 ? (completedSkillLevels / totalSkillLevels) * 100 : 0;

    // Base default starting visual baseline is kept high (around 65+ to reflect GSEP elite profile setup)
    const resultRaw = Math.round(checklistScore * checklistWeight + skillScore * skillTreeWeight);
    const calibratedScore = Math.max(73, Math.min(100, resultRaw)); // Bound to user's targeted starting baseline
    setComputedReadiness(calibratedScore);

    // Compute dynamic strengths & weaknesses based on active selections
    const strengthsArr: string[] = [];
    const weakArr: string[] = [];

    skillTrees.forEach(tree => {
      const completedCount = tree.levels.filter(l => l.completed).length;
      if (completedCount >= 2) {
        strengthsArr.push(`${tree.name} (L${completedCount})`);
      } else {
        weakArr.push(`${tree.name} (L3 Prep)`);
      }
    });

    setStrengths(strengthsArr.slice(0, 3));
    setWeaknesses(weakArr.slice(0, 3));
  }, [checklistItems, skillTrees]);

  // Answer handle for the Level mini quiz
  const [levelQuizAnswered, setLevelQuizAnswered] = useState<boolean>(false);
  const [levelQuizSelectedChoice, setLevelQuizSelectedChoice] = useState<number | null>(null);

  const handleLevelQuizSubmit = (selectedChoiceIdx: number, correctIdx: number) => {
    setLevelQuizSelectedChoice(selectedChoiceIdx);
    setLevelQuizAnswered(true);

    if (selectedChoiceIdx === correctIdx) {
      // Toggle level completion state
      setSkillTrees(prevTrees => {
        return prevTrees.map(tree => {
          if (tree.id === selectedTreeId) {
            return {
              ...tree,
              levels: tree.levels.map((lvl, index) => {
                if (index === selectedLevelIdx) {
                  return { ...lvl, completed: true };
                }
                return lvl;
              })
            };
          }
          return tree;
        });
      });
    }
  };

  const toggleLevelSelection = (treeId: string, idx: number) => {
    setSelectedTreeId(treeId);
    setSelectedLevelIdx(idx);
    setLevelQuizAnswered(false);
    setLevelQuizSelectedChoice(null);
  };

  const handleChecklistToggle = (id: string) => {
    setChecklistItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    }));
  };

  // Interview Simulator answers
  const handleInterviewChoice = (choiceIdx: number) => {
    setQuizSelectedChoiceIdx(choiceIdx);
  };

  const handleSubmitInterviewAnswer = () => {
    if (quizSelectedChoiceIdx === null) return;
    const isCorrect = quizSelectedChoiceIdx === interviewQuestions[activeQuizQuestionIdx].answerIdx;
    if (isCorrect) {
      setQuizScore(prev => prev + 20);
    }
    setQuizSubmitted(true);
  };

  const handleNextInterviewQuestion = () => {
    setQuizSelectedChoiceIdx(null);
    setQuizSubmitted(false);
    if (activeQuizQuestionIdx < interviewQuestions.length - 1) {
      setActiveQuizQuestionIdx(prev => prev + 1);
    } else {
      // Completed, do nothing (keep screens showing consolidated outcome)
    }
  };

  const restartInterviewQuiz = () => {
    setActiveQuizQuestionIdx(0);
    setQuizSelectedChoiceIdx(null);
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  const activeLevelData = skillTrees.find(t => t.id === selectedTreeId)?.levels[selectedLevelIdx];

  return (
    <section id="preparation" className="py-[120px] bg-[#050505] relative overflow-hidden">
      
      {/* Decorative full screen grids */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-red-deep/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-[40%] left-[5%] w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-brand-red-highlight/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative vertical copper lines */}
      <div className="absolute left-[3%] top-0 bottom-0 w-[1px] bg-zinc-950/20" />
      <div className="absolute right-[3%] top-0 bottom-0 w-[1px] bg-zinc-950/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header segment with premium Apple launch style typography */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-red-deep/20 border border-brand-red-highlight/35 text-white mb-6 rounded-md hover:scale-105 transition-transform"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-brand-red-highlight animate-ping" />
            <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-brand-muted">
              COMMAND CTR // CORE TRAINING AGENTS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-[42px] sm:text-[64px] font-extrabold text-[#FFFFFF] uppercase tracking-tight leading-tight"
          >
            Mission <span className="text-[#F4C542]">Preparation</span>
          </motion.h2>
          
          <div className="h-1 w-24 bg-gradient-to-r from-brand-gold to-brand-red-highlight mx-auto mt-6 rounded-full" />
          
          <p className="font-sans text-[18px] sm:text-[20px] text-brand-muted mt-6 leading-relaxed font-light">
            Complete these skill missions before arriving in Chennai. Monitor your baseline parameters, run technical diagnostic queries, and level up your physical silicon execution paths.
          </p>
        </div>

        {/* ============================================== */}
        {/* SECTION 1: MY PREPARATION COMMAND DASHBOARD   */}
        {/* ============================================== */}
        <div className="mb-24">
          <div className="flex items-center space-x-3 mb-8">
            <Compass className="w-6 h-6 text-brand-gold" />
            <span className="font-mono text-base tracking-[0.25em] font-bold text-brand-gold uppercase">
              01 // COMMAND CONTROL CORE METRICS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Dynamic gauge dial center (Desktop 4 cols) */}
            <div className="lg:col-span-5 bg-[#0E0E0E] border border-zinc-900 rounded-2xl p-8 hover-glow-gold relative flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-full blur-xl pointer-events-none" />
              
              <div>
                <span className="font-mono text-[11px] tracking-widest text-brand-gold uppercase">CORE STACK STATUS</span>
                <h3 className="font-display font-medium text-xl sm:text-2xl text-white mt-1 uppercase tracking-tight">
                  Semiconductor Readiness
                </h3>
              </div>

              {/* Central gauge and dynamic counters */}
              <div className="my-8 flex flex-col sm:flex-row items-center justify-around gap-6">
                
                {/* Progress Wheel Arc mapping */}
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background loop tracking */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      stroke="#18181B" 
                      strokeWidth="8" 
                      fill="transparent" 
                    />
                    {/* Animated running loop */}
                    <motion.circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      stroke="#F4C542" 
                      strokeWidth="8" 
                      fill="transparent" 
                      strokeDasharray="251.2"
                      animate={{ strokeDashoffset: 251.2 - (251.2 * computedReadiness) / 100 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      strokeLinecap="round"
                    />
                  </svg>
                  
                  {/* Dynamic absolute label */}
                  <div className="absolute text-center">
                    <span className="font-display font-black text-4xl text-white block">
                      {computedReadiness}%
                    </span>
                    <span className="font-mono text-[9px] tracking-widest text-[#FFD700] uppercase font-bold">
                      STABILIZED
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-3 bg-[#050505] rounded-xl border border-zinc-900/60 flex items-center space-x-3 w-48 text-left">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <div>
                      <span className="font-mono text-[9px] text-zinc-550 text-zinc-500 uppercase block">SYSTEM FREQ</span>
                      <span className="font-mono text-xs text-white">4.20 GHz Sync</span>
                    </div>
                  </div>
                  <div className="p-3 bg-[#050505] rounded-xl border border-zinc-900/60 flex items-center space-x-3 w-48 text-left">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#C1121F]" />
                    <div>
                      <span className="font-mono text-[9px] text-zinc-550 text-zinc-500 uppercase block">ACTIVE LOAD</span>
                      <span className="font-mono text-xs text-white">Bare silicon (Standby)</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* dynamic strengths/weaknesses labels */}
              <div className="pt-6 border-t border-zinc-900/80 grid grid-cols-2 gap-4 text-left">
                <div>
                  <span className="font-mono text-[10px] text-[#FFD700] font-bold block uppercase tracking-wider">▲ ESTABLISHED STRENGTHS</span>
                  <div className="mt-2 space-y-1">
                    {strengths.map((str, sIdx) => (
                      <span key={sIdx} className="block text-[15px] font-mono text-white/90">
                        • {str}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#C1121F] font-bold block uppercase tracking-wider">▼ DEVELOPMENT CRITICALS</span>
                  <div className="mt-2 space-y-1">
                    {weaknesses.map((weak, wIdx) => (
                      <span key={wIdx} className="block text-[15px] font-mono text-zinc-400">
                        • {weak}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Checklist interface (Desktop 7 cols) */}
            <div className="lg:col-span-7 bg-[#0E0E0E] border border-zinc-900 rounded-2xl p-8 hover-glow-gold flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-widest text-[#FFD700] uppercase font-bold">PRE-ARRIVAL TARGET CHECKS</span>
                  <span className="text-[15px] font-mono text-zinc-550 text-zinc-500">
                    {checklistItems.filter(c => c.completed).length}/{checklistItems.length} ACTIVE
                  </span>
                </div>
                <h3 className="font-display font-medium text-xl sm:text-2xl text-white mt-1 border-b border-zinc-900 pb-4 uppercase tracking-tight">
                  Syllabus Calibration Checkpoints
                </h3>
              </div>

              <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[240px] overflow-y-auto pr-2">
                {checklistItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleChecklistToggle(item.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all flex items-start space-x-3 group cursor-pointer ${
                      item.completed 
                        ? "bg-[#050505]/80 border-brand-gold/30 text-white" 
                        : "bg-[#050505]/40 border-zinc-900/60 text-zinc-400 hover:border-zinc-800"
                    }`}
                  >
                    <div className="mt-0.5">
                      <div className={`w-4 h-4 rounded flex items-center justify-center transition-all ${
                        item.completed 
                          ? "bg-brand-gold text-black" 
                          : "border border-zinc-700 bg-transparent group-hover:border-brand-gold/60"
                      }`}>
                        {item.completed && <CheckSquare className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[15px] leading-snug font-light">{item.text}</p>
                      <span className="font-mono text-[9px] text-[#FFD700]/70 uppercase tracking-widest mt-1 block">
                        +{item.points} Pts // {item.category}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#050505] border border-zinc-900/80 flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5 animate-pulse" />
                <p className="font-sans text-[15px] text-zinc-400 leading-normal font-light">
                  Tip: Activating more check targets dynamically increases your central Semiconductor Readiness dial above standard baseline targets. Let's aim for 95%+ readiness configuration.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* ============================================== */}
        {/* SECTION 2: THE SKILL MISSION TREES SYSTEM     */}
        {/* ============================================== */}
        <div id="prep-tracks" className="mb-24 text-left">
          <div className="flex flex-wrap items-center justify-between gap-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <Code className="w-6 h-6 text-brand-gold" />
              <span className="font-mono text-base tracking-[0.25em] font-bold text-brand-gold uppercase">
                02 // INTERACTIVE SKILL PROGRESSION TREES
              </span>
            </div>

            {/* Grid list selector keys */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#0E0E0E] border border-zinc-900 rounded-xl">
              {skillTrees.map((tree) => {
                const totalLvlCount = tree.levels.length;
                const completedCount = tree.levels.filter(l => l.completed).length;
                return (
                  <button
                    key={tree.id}
                    onClick={() => toggleLevelSelection(tree.id, 0)}
                    className={`px-4 py-2 rounded-lg text-[15px] font-mono tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                      selectedTreeId === tree.id
                        ? "bg-brand-gold/15 text-brand-gold font-bold border border-brand-gold/20 shadow-[0_0_12px_rgba(244,197,66,0.1)]"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {tree.name} ({completedCount}/{totalLvlCount})
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* LHS: 3 Level Node selection items in active Tree */}
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-[11px] tracking-wider text-zinc-500 uppercase font-black block pl-2">
                ACTIVE PIPELINE CONFIGURATION: {selectedTreeId.toUpperCase()}
              </span>

              <div className="space-y-3">
                {skillTrees.find(t => t.id === selectedTreeId)?.levels.map((lvl, index) => {
                  const isCurLevel = index === selectedLevelIdx;
                  return (
                    <motion.button
                      key={index}
                      onClick={() => toggleLevelSelection(selectedTreeId, index)}
                      whileHover={{ scale: 1.01 }}
                      className={`w-full p-5 rounded-2xl border text-left relative overflow-hidden transition-all flex items-center justify-between cursor-pointer ${
                        isCurLevel 
                          ? "bg-[#0E0E0E] border-[#F4C542] shadow-[0_0_20px_rgba(244,197,66,0.12)]" 
                          : "bg-[#050505] border-zinc-900/80 hover:bg-[#0E0E0E]/40"
                      }`}
                    >
                      {isCurLevel && (
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#F4C542]" />
                      )}

                      <div className="flex items-center space-x-4 min-w-0">
                        {/* Level Circular key indicator */}
                        <div className={`w-11 h-11 rounded-full flex items-center justify-center font-mono text-sm font-black border transition-all ${
                          lvl.completed 
                            ? "bg-[#F4C542]/10 border-[#F4C542] text-[#F4C542]" 
                            : isCurLevel
                            ? "bg-zinc-900 border-zinc-700 text-white"
                            : "bg-zinc-950 border-zinc-900 text-zinc-500"
                        }`}>
                          L0{lvl.level}
                        </div>

                        <div className="min-w-0">
                          <span className="font-mono text-[11px] text-zinc-500 tracking-widest uppercase block">
                            MISSION LEVEL {lvl.level}
                          </span>
                          <h4 className="font-display font-medium text-xs sm:text-[18px] text-white mt-1 truncate">
                            {lvl.title}
                          </h4>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        {lvl.completed ? (
                          <span className="font-mono text-[11px] font-bold text-emerald-500 border border-emerald-500/30 px-2 py-0.5 rounded uppercase">
                            MASTERED
                          </span>
                        ) : (
                          <span className="font-mono text-[11px] text-zinc-500 px-2 py-0.5 rounded border border-zinc-900 uppercase">
                            STANDBY
                          </span>
                        )}
                        <ChevronRight className={`w-4 h-4 transition-transform ${isCurLevel ? "text-[#F4C542] translate-x-1" : "text-zinc-700"}`} />
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Pre- Departure warning checklist note card */}
              <div className="p-5 rounded-2xl bg-brand-red-deep/10 border border-brand-red-highlight/20 text-left flex items-start space-x-3.5">
                <Shield className="w-5 h-5 text-brand-red-highlight flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[11px] text-[#C1121F] font-bold tracking-widest block uppercase">WAFER FABRICATION CLEARANCE</span>
                  <p className="font-sans text-[15px] text-zinc-400 font-light mt-1 leading-relaxed">
                    Completing Level 3 checkpoints ensures functional safety during our micro-chip assembly simulations. Skip spreadsheet calculations.
                  </p>
                </div>
              </div>
            </div>

            {/* RHS: Level Details panel (Apple Launch styling metrics) */}
            <div className="lg:col-span-7 bg-[#0E0E0E] border border-zinc-900 rounded-2xl p-8 hover-glow-gold text-left relative min-h-[480px]">
              {activeLevelData ? (
                <div className="space-y-6">
                  
                  {/* Title and effort tags row */}
                  <div className="border-b border-zinc-900 pb-5">
                    <div className="flex flex-wrap items-center justify-between gap-y-3">
                      <span className="font-mono text-[11px] tracking-widest text-[#FFD700] uppercase font-bold border border-brand-gold/25 px-2.5 py-1 rounded">
                        {selectedTreeId.replace("-", " ").toUpperCase()} // LEVEL {activeLevelData.level}
                      </span>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1 font-mono text-[11px] text-zinc-400">
                          <span>Difficulty:</span>
                          <div className="flex text-amber-500">
                            {Array.from({ length: 5 }).map((_, dIdx) => (
                              <Star 
                                key={dIdx} 
                                className={`w-3.5 h-3.5 ${dIdx < activeLevelData.difficulty ? "fill-[#F4C542] text-[#F4C542]" : "text-zinc-800"}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <span className="font-mono text-[11px] bg-zinc-900 text-zinc-400 px-3 py-1 rounded border border-zinc-800">
                          Estimated Effort: {activeLevelData.hours} Hours
                        </span>
                      </div>
                    </div>

                    <h3 className="font-display font-medium text-[24px] sm:text-[32px] text-white mt-4 tracking-tight leading-snug">
                      {activeLevelData.title}
                    </h3>
                  </div>

                  {/* Learning Path description column */}
                  <div>
                    <span className="font-mono text-[11px] text-[#FFD700] tracking-widest font-bold uppercase block mb-2">
                      MISSION OBJECTIVE PATH
                    </span>
                    <p className="font-sans text-[18px] text-brand-muted leading-relaxed font-light">
                      {activeLevelData.path}
                    </p>
                  </div>

                  {/* Curated Resources list keys */}
                  <div>
                    <span className="font-mono text-[11px] text-zinc-500 tracking-widest font-black uppercase block mb-3">
                      ACCREDITED STUDY REFERENCES
                    </span>
                    <div className="space-y-2">
                      {activeLevelData.resources.map((res, rIdx) => (
                        <div key={rIdx} className="flex items-center space-x-2.5 p-3 rounded-lg bg-[#050505] border border-zinc-900 font-sans text-[15px] font-light text-zinc-300">
                          <span className="text-zinc-500">0{rIdx + 1} //</span>
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Checkpoint quiz gating (To level complete lock) */}
                  <div className="pt-6 border-t border-zinc-900/80">
                    <div className="flex items-center space-x-2.5 mb-4">
                      <HelpCircle className="w-5 h-5 text-[#FFD700]" />
                      <span className="font-mono text-[11px] text-[#FFD700] tracking-widest font-bold uppercase">
                        GATING LEVEL QUIZ TO COMPLETE
                      </span>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#050505] border border-zinc-900 text-left space-y-4">
                      <p className="font-sans text-[16px] text-white font-medium leading-relaxed">
                        {activeLevelData.quiz.question}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeLevelData.quiz.choices.map((choice, cIdx) => {
                          const isSelected = levelQuizSelectedChoice === cIdx;
                          const isCorrectChoice = cIdx === activeLevelData.quiz.answerIndex;
                          return (
                            <button
                              key={cIdx}
                              disabled={levelQuizAnswered}
                              onClick={() => handleLevelQuizSubmit(cIdx, activeLevelData.quiz.answerIndex)}
                              className={`p-3.5 rounded-xl border text-left text-[15px] transition-all cursor-pointer ${
                                isSelected
                                  ? isCorrectChoice 
                                    ? "bg-emerald-500/10 border-emerald-500 text-emerald-400" 
                                    : "bg-red-500/10 border-red-500 text-red-400"
                                  : levelQuizAnswered && isCorrectChoice 
                                  ? "bg-emerald-500/10 border-emerald-500/60 text-emerald-400"
                                  : "bg-[#0E0E0E] border-zinc-900 hover:border-zinc-800 text-zinc-300"
                              }`}
                            >
                              {choice}
                            </button>
                          );
                        })}
                      </div>

                      {levelQuizAnswered && (
                        <div className="p-4 rounded-xl bg-[#0E0E0E]/80 border border-zinc-900/60">
                          <p className={`font-mono text-[11px] font-extrabold uppercase ${levelQuizSelectedChoice === activeLevelData.quiz.answerIndex ? "text-emerald-500" : "text-[#C1121F]"}`}>
                            {levelQuizSelectedChoice === activeLevelData.quiz.answerIndex ? "✓ LEVEL UNLOCKED" : "✗ GATING CODE MISMATCHED"}
                          </p>
                          <p className="font-sans text-[15px] text-zinc-400 mt-1 leading-relaxed font-light">
                            {activeLevelData.quiz.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center text-zinc-500">
                  <Terminal className="w-12 h-12 text-zinc-700 mb-4" />
                  <p className="font-mono text-sm uppercase">Waiting for active pipeline trigger</p>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* ============================================== */}
        {/* SECTION 3: INTERACTIVE KNOWLEDGE ROADMAP GRAPH */}
        {/* ============================================== */}
        <div className="mb-24">
          <div className="flex items-center space-x-3 mb-8">
            <Cpu className="w-6 h-6 text-brand-gold" />
            <span className="font-mono text-base tracking-[0.25em] font-bold text-brand-gold uppercase">
              03 // SEMICONDUCTOR PIPELINE KNOWLEDGE ROADMAP
            </span>
          </div>

          <div className="bg-[#0E0E0E] border border-zinc-900 rounded-3xl p-8 hover-glow-gold relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-xl pointer-events-none" />
            
            <div className="text-left mb-6">
              <span className="font-mono text-[11px] tracking-widest text-brand-gold uppercase">LOGICAL LAYOUT TOPOLOGIES</span>
              <h3 className="font-display font-medium text-2xl sm:text-3xl text-white mt-1 uppercase tracking-tight">
                Architectural Path Diagrams
              </h3>
              <p className="font-sans text-[16px] text-zinc-400 mt-2 font-light max-w-3xl">
                Tap nodes along the semiconductor front-end and back-end integration trees to display laboratory targets, synthesis utilities, and core compiler sets.
              </p>
            </div>

            {/* Micro roadmaps grid rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 relative">
              
              {/* Divider between paths */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-zinc-900/60 hidden md:block" />

              {/* PATH A: FRONT-END TO BACK-END TAPE-OUT */}
              <div className="space-y-6 text-left">
                <div className="flex items-center space-x-2 border-b border-zinc-900/80 pb-3 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse" />
                  <span className="font-mono text-xs tracking-wider text-brand-gold uppercase font-bold">
                    TRACK A // PHYSICAL SILICON COMPILATION
                  </span>
                </div>

                <div className="flex flex-col space-y-4 relative pl-4">
                  
                  {/* Vertical vector lane */}
                  <div className="absolute left-[3px] top-6 bottom-6 w-[2px] bg-zinc-900" />

                  {mapNodes.filter(n => n.path === "A").map((node, nIdx) => {
                    const isSelected = selectedGraphNode?.id === node.id;
                    return (
                      <div key={node.id} className="relative flex items-start space-x-4">
                        
                        {/* Selector circular ring node */}
                        <button
                          onClick={() => setSelectedGraphNode(node)}
                          className={`w-6 h-6 rounded-full flex items-center justify-center z-10 transition-all border outline-none cursor-pointer ${
                            isSelected 
                              ? "bg-brand-gold border-white scale-125 shadow-[0_0_12px_rgba(244,197,66,0.3)]" 
                              : "bg-[#050505] border-zinc-800 hover:border-brand-gold/60"
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full ${isSelected ? "bg-black" : "bg-zinc-800"}`} />
                        </button>

                        <div 
                          onClick={() => setSelectedGraphNode(node)}
                          className={`flex-1 p-4 rounded-xl border text-left transition-all cursor-pointer ${
                            isSelected 
                              ? "bg-[#050505] border-brand-gold shadow-[0_0_15px_rgba(244,197,66,0.1)]" 
                              : "bg-[#050505]/40 border-zinc-900/60 hover:border-zinc-800"
                          }`}
                        >
                          <span className="font-mono text-[9px] text-[#F4C542]/80 uppercase block">0{nIdx + 1} // {node.phase}</span>
                          <h4 className="font-display font-bold text-[15px] sm:text-[18px] text-white mt-1">{node.title}</h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* PATH B: PROCESSOR DESIGN ARCHITECTURE */}
              <div className="space-y-6 text-left">
                <div className="flex items-center space-x-2 border-b border-zinc-900/80 pb-3 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-red-highlight animate-pulse" />
                  <span className="font-mono text-xs tracking-wider text-[#C1121F] uppercase font-bold">
                    TRACK B // LOGIC VERIFICATION & CPU ISA
                  </span>
                </div>

                <div className="flex flex-col space-y-4 relative pl-4">
                  
                  {/* Vertical vector lane */}
                  <div className="absolute left-[3px] top-6 bottom-6 w-[2px] bg-zinc-900" />

                  {mapNodes.filter(n => n.path === "B").map((node, nIdx) => {
                    const isSelected = selectedGraphNode?.id === node.id;
                    return (
                      <div key={node.id} className="relative flex items-start space-x-4">
                        
                        {/* Selector circular ring node */}
                        <button
                          onClick={() => setSelectedGraphNode(node)}
                          className={`w-6 h-6 rounded-full flex items-center justify-center z-10 transition-all border outline-none cursor-pointer ${
                            isSelected 
                              ? "bg-brand-red-highlight border-white scale-125 shadow-[0_0_12px_rgba(193,18,31,0.3)]" 
                              : "bg-[#050505] border-zinc-800 hover:border-brand-red-highlight/60"
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full ${isSelected ? "bg-black" : "bg-zinc-800"}`} />
                        </button>

                        <div 
                          onClick={() => setSelectedGraphNode(node)}
                          className={`flex-1 p-4 rounded-xl border text-left transition-all cursor-pointer ${
                            isSelected 
                              ? "bg-[#050505] border-brand-red-highlight shadow-[0_0_15px_rgba(193,18,31,0.1)]" 
                              : "bg-[#050505]/40 border-zinc-900/60 hover:border-zinc-800"
                          }`}
                        >
                          <span className="font-mono text-[9px] text-[#C1121F]/80 uppercase block">0{nIdx + 1} // {node.phase}</span>
                          <h4 className="font-display font-bold text-[15px] sm:text-[18px] text-white mt-1">{node.title}</h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Dynamic popover bottom node description sheet */}
            <AnimatePresence>
              {selectedGraphNode && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="mt-8 p-6 rounded-2xl bg-[#050505] border border-brand-gold/30 text-left relative overflow-hidden"
                >
                  <button 
                    onClick={() => setSelectedGraphNode(null)}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <span className="font-mono text-[10px] text-brand-gold font-bold uppercase tracking-wider block">PIPELINE NODE SPEC</span>
                      <h4 className="font-display font-medium text-xl sm:text-2xl text-white mt-1 uppercase tracking-tight">
                        {selectedGraphNode.title}
                      </h4>
                      <span className="text-[15px] font-mono text-zinc-500 uppercase mt-1 block">
                        Phase: {selectedGraphNode.phase}
                      </span>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                      <div>
                        <span className="font-mono text-[10px] text-zinc-500 font-bold block uppercase tracking-wider">TOPOLOGY DESCRIPTION</span>
                        <p className="font-sans text-[15px] sm:text-[16px] text-zinc-300 mt-1 leading-relaxed font-light">
                          {selectedGraphNode.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-900/60">
                        <div>
                          <span className="font-mono text-[9px] text-[#FFD700] uppercase block">PRACTICAL LAB SESSIONS</span>
                          <span className="text-[15px] font-sans font-light text-zinc-100">{selectedGraphNode.labs}</span>
                        </div>
                        <div>
                          <span className="font-mono text-[9px] text-[#C1121F] uppercase block">PRESCRIBED SYSTEM TOOLS</span>
                          <code className="text-xs font-mono text-brand-gold bg-zinc-900/60 px-1.5 py-0.5 rounded border border-zinc-800">{selectedGraphNode.tools}</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* ============================================== */}
        {/* SECTION 4: INTERVIEW CHALLENGE SIMULATOR      */}
        {/* ============================================== */}
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <Award className="w-6 h-6 text-brand-gold" />
            <span className="font-mono text-base tracking-[0.25em] font-bold text-brand-gold uppercase">
              04 // CAN YOU PASS THE INTERVIEW? SIMULATOR
            </span>
          </div>

          <div className="bg-[#0E0E0E] border border-zinc-900 rounded-3xl p-8 hover-glow-gold text-left relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-xl pointer-events-none" />

            {!interviewScreenActive ? (
              <div className="max-w-2xl">
                <span className="font-mono text-[11px] tracking-widest text-[#FFD700] uppercase font-bold">RECRUITMENT MATRICES SYSTEM</span>
                <h3 className="font-display font-medium text-3xl sm:text-[42px] text-white mt-1 leading-snug uppercase tracking-tight">
                  Pass the Technical Audit
                </h3>
                <p className="font-sans text-[18px] text-brand-muted mt-4 leading-relaxed font-light">
                  A 5-question high-intensity simulated technical interview based on real VLSI screenings from AMD, Intel, and NVIDIA. Test your silicon mastery, view explanations, and get your Technical Readiness Meter rating.
                </p>
                <button
                  onClick={() => {
                    setInterviewScreenActive(true);
                    restartInterviewQuiz();
                  }}
                  className="mt-8 inline-flex items-center space-x-2 px-6 py-3.5 bg-brand-gold text-black rounded-xl font-mono text-[15px] font-bold uppercase hover:bg-[#FFD700] transition-colors shadow-lg hover:shadow-brand-gold/20"
                >
                  <Play className="w-4 h-4 fill-black" />
                  <span>BOOT SIMULATOR CONSOLE</span>
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* Score bar / Question index meter dashboard */}
                <div className="flex flex-wrap items-center justify-between border-b border-zinc-900 pb-4 mb-4 gap-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-[11px] bg-brand-red-deep/30 border border-brand-red-highlight/35 text-[#ffffff] px-2.5 py-1 rounded">
                      DIAGNOSTIC ACTIVE
                    </span>
                    <span className="font-mono text-[15px] text-zinc-400">
                      Question {activeQuizQuestionIdx + 1} of {interviewQuestions.length}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-mono text-[15px] text-zinc-400">SCORE: <span className="text-[#FFD700] font-bold">{quizScore}%</span></span>
                    <button
                      onClick={() => setInterviewScreenActive(false)}
                      className="font-mono text-[11px] text-zinc-500 hover:text-white uppercase transition-colors"
                    >
                      [ EXIT CONSOLE ]
                    </button>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#050505] border border-zinc-900 space-y-6 max-w-4xl">
                  
                  {/* Active question */}
                  <h4 className="font-sans text-[18px] sm:text-[20px] text-white font-semibold leading-relaxed">
                    {interviewQuestions[activeQuizQuestionIdx].q}
                  </h4>

                  {/* Multiple choices */}
                  <div className="space-y-3">
                    {interviewQuestions[activeQuizQuestionIdx].choices.map((choice, index) => {
                      const isSelected = quizSelectedChoiceIdx === index;
                      const isCorrect = index === interviewQuestions[activeQuizQuestionIdx].answerIdx;
                      return (
                        <button
                          key={index}
                          disabled={quizSubmitted}
                          onClick={() => handleInterviewChoice(index)}
                          className={`w-full p-4 rounded-xl border text-left text-[15px] transition-all cursor-pointer ${
                            isSelected
                              ? quizSubmitted 
                                ? isCorrect 
                                  ? "bg-emerald-500/10 border-emerald-500 text-emerald-400 font-medium" 
                                  : "bg-red-500/10 border-red-500 text-red-400"
                                : "bg-brand-gold/15 border-brand-gold text-brand-gold font-medium"
                              : quizSubmitted && isCorrect 
                              ? "bg-emerald-500/10 border-emerald-500/60 text-emerald-400"
                              : "bg-[#0E0E0E] border-zinc-900 hover:border-zinc-800 text-zinc-300"
                          }`}
                        >
                          {choice}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation feedback */}
                  {quizSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-5 rounded-2xl bg-[#0E0E0E] border border-zinc-900 text-left space-y-2"
                    >
                      <h5 className="font-mono text-[11px] font-black uppercase text-brand-gold">
                        {quizSelectedChoiceIdx === interviewQuestions[activeQuizQuestionIdx].answerIdx ? "✓ SYNTAX DIAGNOSED PERFECT" : "✗ SYNTAX CORE DISCREPANCY"}
                      </h5>
                      <p className="font-sans text-[15px] text-zinc-400 leading-relaxed font-light">
                        {interviewQuestions[activeQuizQuestionIdx].explanation}
                      </p>
                    </motion.div>
                  )}

                  {/* Nav handles */}
                  <div className="pt-4 flex items-center justify-end">
                    {!quizSubmitted ? (
                      <button
                        onClick={handleSubmitInterviewAnswer}
                        disabled={quizSelectedChoiceIdx === null}
                        className="px-6 py-3 bg-brand-gold text-black rounded-lg font-mono text-[11px] font-black uppercase tracking-wider hover:bg-[#FFD700] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                      >
                        SUBMIT HARDWARE SELECTION
                      </button>
                    ) : (
                      <button
                        onClick={handleNextInterviewQuestion}
                        className="px-6 py-3 bg-[#0d0d0d] border border-zinc-800 text-white rounded-lg font-mono text-[11px] font-black uppercase tracking-wider hover:border-brand-gold/50 cursor-pointer"
                      >
                        {activeQuizQuestionIdx < interviewQuestions.length - 1 ? "NEXT TEST FRAMEWORK ❯" : "CALCULATE ARCH OUTCOME ❯"}
                      </button>
                    )}
                  </div>

                </div>

                {/* Score Consolidated Summary (When all questions complete) */}
                {quizSubmitted && activeQuizQuestionIdx === interviewQuestions.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 rounded-3xl bg-[#050505] border border-brand-gold/30 mt-6 text-center space-y-6 max-w-xl mx-auto"
                  >
                    <Award className="w-16 h-16 text-[#FFD700] mx-auto animate-bounce" />
                    <div>
                      <span className="font-mono text-[11px] text-[#FFD700] tracking-widest block uppercase font-black">DIAGNOSTIC REPORT SUMMARY</span>
                      <h4 className="font-display font-medium text-3xl text-white mt-1 uppercase tracking-tight">
                        {quizScore >= 80 ? "Pre-Silicon Master Level" : quizScore >= 50 ? "System Intermediate Cadet" : "Logic Baseline Apprentice"}
                      </h4>
                    </div>

                    <div className="py-4 border-y border-zinc-900 flex justify-around items-center">
                      <div>
                        <span className="font-mono text-zinc-650 text-zinc-500 text-[11px] block uppercase">ASSESSMENT SCORE</span>
                        <span className="font-mono text-3xl font-black text-[#FFD700]">{quizScore}% Correct</span>
                      </div>
                      <div>
                        <span className="font-mono text-zinc-650 text-zinc-500 text-[11px] block uppercase">READINESS RATING</span>
                        <span className="font-mono text-3xl font-black text-white">{quizScore >= 80 ? "ELITE" : quizScore >= 50 ? "STABLE" : "RETRY"}</span>
                      </div>
                    </div>

                    <p className="font-sans text-[15px] sm:text-[16px] text-zinc-400 leading-normal font-light">
                      {quizScore >= 80 
                        ? "Spectacular results! You demonstrate flawless pipeline awareness and understand Static Timing limits to a professional degree. Recruiter managers will appreciate your baseline clarity." 
                        : "Insightful attempt. Focus study cycles on synthesizable sequential logic gates and study the classic 5-stage hazard bypass states before classroom schedules arrive."}
                    </p>

                    <div className="flex items-center justify-center space-x-4">
                      <button
                        onClick={restartInterviewQuiz}
                        className="px-4 py-2 bg-zinc-950 border border-zinc-800 text-zinc-300 rounded font-mono text-[11px] font-bold uppercase hover:border-zinc-700 cursor-pointer"
                      >
                        RE-TEST SIMULATOR
                      </button>
                      <button
                        onClick={() => setInterviewScreenActive(false)}
                        className="px-4 py-2 bg-brand-gold text-black rounded font-mono text-[11px] font-bold uppercase hover:bg-[#FFD700] cursor-pointer"
                      >
                        CLOSE MISSION CONTROL
                      </button>
                    </div>

                  </motion.div>
                )}

              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}

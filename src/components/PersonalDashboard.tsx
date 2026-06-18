import React, { useState, useEffect, useRef } from "react";
import { 
  Home, 
  Calendar as CalendarIcon, 
  BookOpen, 
  FileText, 
  Award, 
  MapPin, 
  Target, 
  TrendingUp, 
  Flame, 
  Plus, 
  Check, 
  Trash2, 
  Edit3, 
  Save, 
  ChevronRight, 
  ChevronDown, 
  Search, 
  Clock, 
  ExternalLink, 
  AlertTriangle,
  ArrowRight,
  Info,
  Sparkles,
  RefreshCw,
  Cpu,
  Layers,
  Terminal,
  FileCode,
  Sliders,
  CheckCircle,
  HelpCircle
} from "lucide-react";

// Types
interface Task {
  id: string;
  title: string;
  category: "daily" | "weekly" | "monthly";
  completed: boolean;
  dateAdded: string;
}

interface InterviewQuestion {
  id: string;
  question: string;
  answer: string;
  status: "Learned" | "In Progress" | "Not Started";
}

interface CalendarEvent {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  category: "classes" | "workshops" | "interviews" | "flights" | "hackathon" | "personal";
  notes?: string;
  warning?: boolean;
}

interface NodeNote {
  id: string;
  notes: string;
  links: string;
}

interface UserNote {
  id: string;
  title: string;
  category: "Digital Logic" | "Verilog" | "Linux" | "RISC-V" | "Assembly" | "STA" | "Verification";
  body: string;
  date: string;
}

export default function PersonalDashboard() {
  // Mobile / Desktop View switcher (Tab state)
  const [activeTab, setActiveTab] = useState<"dashboard" | "calendar" | "learning" | "notes" | "progress">("dashboard");

  // Core Progress states (Defaults requested by user)
  const [progressDigitalLogic, setProgressDigitalLogic] = useState<number>(() => Number(localStorage.getItem("gsep_prog_digital") ?? 100));
  const [progressLinux, setProgressLinux] = useState<number>(() => Number(localStorage.getItem("gsep_prog_linux") ?? 80));
  const [progressGit, setProgressGit] = useState<number>(() => Number(localStorage.getItem("gsep_prog_git") ?? 75));
  const [progressVerilog, setProgressVerilog] = useState<number>(() => Number(localStorage.getItem("gsep_prog_verilog") ?? 60));
  const [progressRiscv, setProgressRiscv] = useState<number>(() => Number(localStorage.getItem("gsep_prog_riscv") ?? 45));
  const [progressAssembly, setProgressAssembly] = useState<number>(() => Number(localStorage.getItem("gsep_prog_assembly") ?? 25));
  const [progressSta, setProgressSta] = useState<number>(() => Number(localStorage.getItem("gsep_prog_sta") ?? 15));
  const [progressVerification, setProgressVerification] = useState<number>(() => Number(localStorage.getItem("gsep_prog_verification") ?? 10));

  const [currentFocus, setCurrentFocus] = useState<string>(() => localStorage.getItem("gsep_current_focus") ?? "Verilog HDL");
  const [isEditingFocus, setIsEditingFocus] = useState(false);

  // Computed absolute readiness average
  const averagesReadiness = Math.round(
    (progressDigitalLogic + progressLinux + progressGit + progressVerilog + progressRiscv + progressAssembly + progressSta + progressVerification) / 8
  );

  // Auto-Save progress percentages
  useEffect(() => {
    localStorage.setItem("gsep_prog_digital", progressDigitalLogic.toString());
    localStorage.setItem("gsep_prog_linux", progressLinux.toString());
    localStorage.setItem("gsep_prog_git", progressGit.toString());
    localStorage.setItem("gsep_prog_verilog", progressVerilog.toString());
    localStorage.setItem("gsep_prog_riscv", progressRiscv.toString());
    localStorage.setItem("gsep_prog_assembly", progressAssembly.toString());
    localStorage.setItem("gsep_prog_sta", progressSta.toString());
    localStorage.setItem("gsep_prog_verification", progressVerification.toString());
  }, [progressDigitalLogic, progressLinux, progressGit, progressVerilog, progressRiscv, progressAssembly, progressSta, progressVerification]);

  // Tasks (Planner State)
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("gsep_tasks");
    if (saved) return JSON.parse(saved);
    return [
      { id: "1", title: "Revise Verilog blocking vs non-blocking assignments", category: "daily", completed: false, dateAdded: "2026-06-18" },
      { id: "2", title: "Complete Linux bash file operations practical labs", category: "daily", completed: true, dateAdded: "2026-06-18" },
      { id: "3", title: "Go through Patterson & Hennessy Chapter 2: RISC-V ISA overview", category: "weekly", completed: false, dateAdded: "2026-06-17" },
      { id: "4", title: "Set up SSH keys and push initial Verilog ALU code to GitHub", category: "weekly", completed: true, dateAdded: "2026-06-16" },
      { id: "5", title: "Master STA (Static Timing Analysis) setup & hold times constraints", category: "monthly", completed: false, dateAdded: "2026-06-15" },
      { id: "6", title: "Finalize EDA tool environment variables inside Linux SSH config", category: "monthly", completed: false, dateAdded: "2026-06-14" },
    ];
  });

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState<"daily" | "weekly" | "monthly">("daily");

  useEffect(() => {
    localStorage.setItem("gsep_tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Adding Study Task
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const task: Task = {
      id: Date.now().toString(),
      title: newTaskTitle.trim(),
      category: newTaskCategory,
      completed: false,
      dateAdded: new Date().toISOString().split("T")[0]
    };
    setTasks(prev => [task, ...prev]);
    setNewTaskTitle("");
  };

  const handleToggleTask = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleDeleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  // Reflection Journal State with Auto-Save
  const [reflectionLearn, setReflectionLearn] = useState(() => localStorage.getItem("gsep_journal_learn") ?? "");
  const [reflectionChallenges, setReflectionChallenges] = useState(() => localStorage.getItem("gsep_journal_challenges") ?? "");
  const [reflectionTomorrow, setReflectionTomorrow] = useState(() => localStorage.getItem("gsep_journal_tomorrow") ?? "");
  const [journalSavedStatus, setJournalSavedStatus] = useState<"Saved" | "Saving..." | "Idle">("Idle");

  const saveJournal = () => {
    setJournalSavedStatus("Saving...");
    localStorage.setItem("gsep_journal_learn", reflectionLearn);
    localStorage.setItem("gsep_journal_challenges", reflectionChallenges);
    localStorage.setItem("gsep_journal_tomorrow", reflectionTomorrow);
    setTimeout(() => {
      setJournalSavedStatus("Saved");
    }, 400);
  };

  // Auto-save journal changes
  useEffect(() => {
    if (reflectionLearn || reflectionChallenges || reflectionTomorrow) {
      const delaySave = setTimeout(() => {
        saveJournal();
      }, 1000);
      return () => clearTimeout(delaySave);
    }
  }, [reflectionLearn, reflectionChallenges, reflectionTomorrow]);

  // Interview Questions Tracker state
  const [interviewQuestions, setInterviewQuestions] = useState<InterviewQuestion[]>(() => {
    const saved = localStorage.getItem("gsep_interviews");
    if (saved) return JSON.parse(saved);
    return [
      { id: "q1", question: "What is RTL?", answer: "Register-Transfer Level is a design abstraction used in hardware description languages (HDLs) to describe circuits as registers, signals, and Boolean hardware loops.", status: "Learned" },
      { id: "q2", question: "What is STA?", answer: "Static Timing Analysis is a method of validating the timing performance of a digital circuit by checking all paths for setup and hold timing violations without dynamic signal simulations.", status: "In Progress" },
      { id: "q3", question: "What is pipelining?", answer: "A CPU design technique where multiple instructions overlap in execution, dividing processor logic into sequential stages (Fetch, Decode, Execute, Memory, Write-back) to maximize clock dispatch rates.", status: "Not Started" }
    ];
  });
  const [newQuestionText, setNewQuestionText] = useState("");
  const [newQuestionAnswer, setNewQuestionAnswer] = useState("");
  const [newQuestionStatus, setNewQuestionStatus] = useState<"Learned" | "In Progress" | "Not Started">("Not Started");
  const [isAddingQuestion, setIsAddingQuestion] = useState(false);

  useEffect(() => {
    localStorage.setItem("gsep_interviews", JSON.stringify(interviewQuestions));
  }, [interviewQuestions]);

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestionText.trim()) return;
    const q: InterviewQuestion = {
      id: Date.now().toString(),
      question: newQuestionText.trim(),
      answer: newQuestionAnswer.trim() || "Explanation still under development during research cycles.",
      status: newQuestionStatus
    };
    setInterviewQuestions(prev => [...prev, q]);
    setNewQuestionText("");
    setNewQuestionAnswer("");
    setNewQuestionStatus("Not Started");
    setIsAddingQuestion(false);
  };

  const handleToggleQuestionStatus = (id: string) => {
    setInterviewQuestions(prev => prev.map(q => {
      if (q.id === id) {
        const statuses: ("Learned" | "In Progress" | "Not Started")[] = ["Not Started", "In Progress", "Learned"];
        const nextIndex = (statuses.indexOf(q.status) + 1) % 3;
        return { ...q, status: statuses[nextIndex] };
      }
      return q;
    }));
  };

  const handleDeleteQuestion = (id: string) => {
    setInterviewQuestions(prev => prev.filter(q => q.id !== id));
  };

  // Calendar State
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>(() => {
    const saved = localStorage.getItem("gsep_calendar_events");
    if (saved) return JSON.parse(saved);
    return [
      { id: "e1", date: "2026-06-19", title: "Pre-programme Coordination Meet", category: "workshops", notes: "Pre-departure documentation checks, flight boarding pass matching.", warning: false },
      { id: "e2", date: "2026-06-20", title: "Flight to Chennai Hub (IIT Madras Bound)", category: "flights", notes: "Check-in baggage contains safety documents and study guides.", warning: true },
      { id: "e3", date: "2026-06-22", title: "Orientation Day & SHAKTI Project Allotment", category: "classes", notes: "Lab credential handovers, mentor assignments, environment configurations.", warning: false },
      { id: "e4", date: "2026-06-25", title: "RISC-V ISA Core Basics", category: "classes", notes: "Learning assembly formats, instruction bounds, logic units.", warning: false },
      { id: "e5", date: "2026-06-29", title: "Pipelined Architecture & Hazard Detection", category: "classes", notes: "Structural traps, bypass forwarding gates, registers file mappings.", warning: false },
      { id: "e6", date: "2026-07-03", title: "Physical Design Synthesis Lab", category: "workshops", notes: "Floorplanning constraints, basic logic placement routing trees.", warning: false },
      { id: "e7", date: "2026-07-10", title: "UVM Verification Framework Overview", category: "classes", notes: "Sequencers, observers, virtual interfaces setup inside testbenches.", warning: false },
      { id: "e8", date: "2026-07-16", title: "Mock RTL Interview Panels", category: "interviews", notes: "Simulated timing challenges, register constraints live review.", warning: true },
      { id: "e9", date: "2026-07-24", title: "National GSEP RISC-V Final Hackathon", category: "hackathon", notes: "24-hour non-stop circuit synthesis. Core judges from industry.", warning: true }
    ];
  });

  const [selectedDayEvents, setSelectedDayEvents] = useState<CalendarEvent[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [showEventModal, setShowEventModal] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventCategory, setNewEventCategory] = useState<CalendarEvent["category"]>("personal");
  const [newEventNotes, setNewEventNotes] = useState("");
  const [newEventWarning, setNewEventWarning] = useState(false);

  // Drag and drop helper simulation state
  const [reschedulingEventId, setReschedulingEventId] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("gsep_calendar_events", JSON.stringify(calendarEvents));
  }, [calendarEvents]);

  // Build grid dates of June & July 2026
  // June 2026 starts on Monday June 1st. June has 30 days.
  // July 2026 starts on Wednesday July 1st. July has 31 days.
  const [activeMonthFilter, setActiveMonthFilter] = useState<"06" | "07">("06");

  const getDaysArray = (month: "06" | "07") => {
    const daysCount = month === "06" ? 30 : 31;
    const startOffset = month === "06" ? 0 : 2; // June starts on Monday (0 offset if Sunday index, let's use standard Monday=1 starting format)
    // June 1 2026 is a Monday.
    // Let's build exactly day boxes 1 to 30 or 31.
    const arr = [];
    for (let i = 1; i <= daysCount; i++) {
      const dayStr = i < 10 ? `0${i}` : `${i}`;
      arr.push(`2026-${month}-${dayStr}`);
    }
    return arr;
  };

  const handleOpenDayModal = (dateStr: string) => {
    setSelectedDate(dateStr);
    const matched = calendarEvents.filter(e => e.date === dateStr);
    setSelectedDayEvents(matched);
    setShowEventModal(true);
    // Clear inputs
    setNewEventTitle("");
    setNewEventCategory("personal");
    setNewEventNotes("");
    setNewEventWarning(false);
  };

  const handleAddCustomEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventTitle.trim()) return;
    const newEv: CalendarEvent = {
      id: Date.now().toString(),
      date: selectedDate,
      title: newEventTitle.trim(),
      category: newEventCategory,
      notes: newEventNotes.trim(),
      warning: newEventWarning
    };
    const updated = [...calendarEvents, newEv];
    setCalendarEvents(updated);
    setSelectedDayEvents(prev => [...prev, newEv]);
    // Clear inputs
    setNewEventTitle("");
    setNewEventNotes("");
    setNewEventWarning(false);
  };

  const handleDeleteEvent = (id: string) => {
    const updated = calendarEvents.filter(e => e.id !== id);
    setCalendarEvents(updated);
    setSelectedDayEvents(prev => prev.filter(e => e.id !== id));
  };

  // Reschedule Trigger (Simulates drag and drop via select date)
  const handleTriggerReschedule = (eventId: string) => {
    setReschedulingEventId(eventId);
  };

  const executeReschedule = (targetDate: string) => {
    if (!reschedulingEventId) return;
    setCalendarEvents(prev => prev.map(e => e.id === reschedulingEventId ? { ...e, date: targetDate } : e));
    setReschedulingEventId(null);
    setShowEventModal(false);
  };

  // Knowledge Tree States
  const [completedNodes, setCompletedNodes] = useState<string[]>(() => {
    const saved = localStorage.getItem("gsep_nodes_completed");
    if (saved) return JSON.parse(saved);
    return ["boolean-algebra", "logic-gates", "linux-bash", "git-clones"];
  });

  const [activeKnowledgeNode, setActiveKnowledgeNode] = useState<{ id: string; label: string; category: "digital" | "verilog"; desc: string } | null>(null);
  const [nodeNoteInput, setNodeNoteInput] = useState("");
  const [nodeLinkInput, setNodeLinkInput] = useState("");

  const knowledgeNodes = [
    // Digital Logic Track
    { id: "boolean-algebra", label: "Boolean Algebra Simplification", category: "digital" as const, desc: "Minimizing boolean equations using axioms, theorems, and mathematical transforms for core ASIC register efficiency." },
    { id: "logic-gates", label: "Logic Gates & Truth Tables", category: "digital" as const, desc: "Fundamental logic networks (NAND, NOR, XOR), building decoder meshes and multiplexer pipelines." },
    { id: "kmaps", label: "Karnaugh Map (K-Maps) Methods", category: "digital" as const, desc: "Visual multi-variable logic minimization, group layouts, and avoiding electrical glitch state transitions." },
    { id: "fsm-digital", label: "FSM (Finite State Machines)", category: "digital" as const, desc: "Mealy vs Moore machines, register mappings, states encoding strategies (One-Hot, binary, Gray counter structures)." },
    
    // Verilog Track
    { id: "verilog-modules", label: "HDL Modules & Ports Structures", category: "verilog" as const, desc: "Hierarchy layouts, input/output structures, bidirectional wire nets, parameter bindings in RTL instances." },
    { id: "always-blocks", label: "Always @ Behavior Blocks", category: "verilog" as const, desc: "Blocking vs Non-blocking trigger states, sensitivity vectors, synthesis pitfalls generating illegal latches." },
    { id: "fsm-verilog", label: "FSM RTL Hardware Coding", category: "verilog" as const, desc: "2-always and 3-always block implementations, state register declarations, output synchronization mesh hooks." },
    { id: "counters", label: "Asynchronous & Sync Counters", category: "verilog" as const, desc: "Modulo clock dividers, gray code generators, ring counters, preloader limits." },
  ];

  useEffect(() => {
    localStorage.setItem("gsep_nodes_completed", JSON.stringify(completedNodes));
  }, [completedNodes]);

  const toggleNodeComplete = (nodeId: string) => {
    setCompletedNodes(prev => prev.includes(nodeId) ? prev.filter(x => x !== nodeId) : [...prev, nodeId]);
  };

  const handleOpenNodeDetails = (node: typeof knowledgeNodes[0]) => {
    setActiveKnowledgeNode(node);
    // Load existing notes / links from localstorage custom mapping
    const savedNotes = localStorage.getItem(`gsep_node_notes_${node.id}`) ?? "";
    const savedLinks = localStorage.getItem(`gsep_node_links_${node.id}`) ?? "";
    setNodeNoteInput(savedNotes);
    setNodeLinkInput(savedLinks);
  };

  const handleSaveNodeMetadata = () => {
    if (!activeKnowledgeNode) return;
    localStorage.setItem(`gsep_node_notes_${activeKnowledgeNode.id}`, nodeNoteInput);
    localStorage.setItem(`gsep_node_links_${activeKnowledgeNode.id}`, nodeLinkInput);
    alert(`Knowledge node [${activeKnowledgeNode.label}] settings updated!`);
    setActiveKnowledgeNode(null);
  };

  // Notes Vault state
  const [userNotes, setUserNotes] = useState<UserNote[]>(() => {
    const saved = localStorage.getItem("gsep_user_notes");
    if (saved) return JSON.parse(saved);
    return [
      {
        id: "n1",
        title: "RISC-V Calling Conventions",
        category: "RISC-V",
        body: "Registers zero (x0) yields hardware constant 0. sp (x2) handles stack allocation offsets. ra (x1) holds functions return branch coordinates. arguments a0-a7 are stored in (x10-x17).",
        date: "2026-06-18"
      },
      {
        id: "n2",
        title: "Verilog Non-blocking Guidelines",
        category: "Verilog",
        body: "Rule 1: Use sequential always blocks with non-blocking <= assignments. Rule 2: Use combinational always blocks with blocking = assignments. Rule 3: Do not mix both assignments in the same block to avoid simulation race bugs.",
        date: "2026-06-17"
      },
      {
        id: "n3",
        title: "Vim Essential Commands",
        category: "Linux",
        body: "i - enter edit mode. esc - leave insert mode. :wq - save changes and quit Vim workspace safely. :q! - force quit ignoring local changes. dd - delete the current line instantly.",
        date: "2026-06-16"
      },
      {
        id: "n4",
        title: "Static Timing Analysis Concepts",
        category: "STA",
        body: "Setup Time Constraint: Required that data stabilizes at inputs boundary before the clock edge. Hold Time Constraint: Required that input data remains constant after clock edge triggers state capture to prevent race feeds.",
        date: "2026-06-15"
      }
    ];
  });

  const [notesSearchQuery, setNotesSearchQuery] = useState("");
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteCategory, setNewNoteCategory] = useState<UserNote["category"]>("Verilog");
  const [newNoteBody, setNewNoteBody] = useState("");
  const [selectedNoteToEdit, setSelectedNoteToEdit] = useState<UserNote | null>(null);
  const [isAddingNewNote, setIsAddingNewNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("gsep_user_notes", JSON.stringify(userNotes));
  }, [userNotes]);

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteTitle.trim() || !newNoteBody.trim()) return;
    const n: UserNote = {
      id: Date.now().toString(),
      title: newNoteTitle.trim(),
      category: newNoteCategory,
      body: newNoteBody.trim(),
      date: new Date().toISOString().split("T")[0]
    };
    setUserNotes(prev => [n, ...prev]);
    setNewNoteTitle("");
    setNewNoteBody("");
    setIsAddingNewNote(false);
  };

  const handleUpdateNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedNoteToEdit || !selectedNoteToEdit.title.trim() || !selectedNoteToEdit.body.trim()) return;
    setUserNotes(prev => prev.map(n => n.id === selectedNoteToEdit.id ? selectedNoteToEdit : n));
    setSelectedNoteToEdit(null);
  };

  const handleDeleteNote = (id: string) => {
    setUserNotes(prev => prev.filter(n => n.id !== id));
  };

  const filteredNotes = userNotes.filter(n => {
    const q = notesSearchQuery.toLowerCase();
    return n.title.toLowerCase().includes(q) || n.body.toLowerCase().includes(q) || n.category.toLowerCase().includes(q);
  });

  // Achievements (Achievements unlock system based on stats)
  const isVerilogUnlocked = progressVerilog >= 100;
  const isRiscvUnlocked = progressRiscv >= 100;
  const isLinuxUnlocked = progressLinux >= 100;
  const isFpgaUnlocked = progressSta >= 50 && progressVerification >= 50;
  const isInterviewReady = interviewQuestions.filter(q => q.status === "Learned").length >= 3;

  return (
    <section id="mission-control-dashboard" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans text-white z-20">
      
      {/* SECTION CONTAINER HEADER */}
      <div className="mb-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6 border-b border-brand-gold/15 pb-8">
        <div>
          <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
            <span className="p-1 px-2.5 rounded bg-brand-gold/20 text-brand-gold font-mono text-[11px] font-bold tracking-widest uppercase border border-brand-gold/20">
              Personal Command Dashboard
            </span>
            <div className="flex items-center space-x-1.5 text-xs text-brand-red-highlight">
              <span className="w-2 h-2 rounded-full bg-brand-red-highlight animate-pulse" />
              <span className="font-mono text-[10px]">Real-Time Sync Activated</span>
            </div>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-none uppercase">
            My Semiconductor <span className="text-brand-gold">Journey</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-slate-400 mt-2 max-w-xl font-light">
            Tracking my technical milestones through GSEP RISC-V Programme at IIT Madras, Chennai.
          </p>
          <div className="inline-flex items-center space-x-2 mt-3 bg-brand-red-deep/20 px-3 py-1 rounded-md border border-brand-red-highlight/30 text-xs">
            <span className="font-mono font-bold text-white">TESL Graduate</span>
            <ArrowRight className="w-3 h-3 text-brand-gold-glow" />
            <span className="font-mono font-bold text-brand-gold-glow">Semiconductor Engineer Pathway</span>
          </div>
        </div>

        {/* Live average dial widget */}
        <div className="relative p-6 px-8 rounded-2xl bg-[#0e0e0e]/95 border border-brand-gold/20 flex flex-col items-center justify-center min-w-[240px] shadow-2xl">
          <div className="absolute top-2 right-2 text-[9px] font-mono text-slate-500 uppercase tracking-wider">
            Overall Readiness
          </div>
          <div className="flex items-baseline space-x-1">
            <span className="text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold-glow animate-pulse">
              {averagesReadiness}%
            </span>
            <span className="text-xs font-mono text-slate-400">/ 100%</span>
          </div>
          <div className="w-full bg-slate-900 h-1.5 rounded-full mt-3 overflow-hidden border border-brand-gold/10">
            <div 
              className="bg-gradient-to-r from-brand-gold to-brand-gold-glow h-full rounded-full transition-all duration-500"
              style={{ width: `${averagesReadiness}%` }}
            />
          </div>
          <p className="text-[10px] font-mono text-slate-400 mt-2 text-center">
            {averagesReadiness >= 75 ? "🚀 Excellent Preparation Standing!" : "📝 Complete modules below to maximize outcome"}
          </p>
        </div>
      </div>

      {/* HORIZONTAL WORKSPACE MENU */}
      <div className="grid grid-cols-5 bg-[#0d0d0d] p-1.5 rounded-xl border border-brand-gold/10 mb-8 max-w-4xl mx-auto gap-2">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`flex flex-col sm:flex-row items-center justify-center space-x-2 py-3 px-1.5 rounded-lg text-xs font-mono tracking-wider font-bold uppercase transition-all duration-300 transform cursor-pointer ${
            activeTab === "dashboard"
              ? "bg-[#050505] border border-brand-gold/25 text-brand-gold shadow-lg"
              : "text-slate-400 hover:text-white hover:bg-slate-900/50"
          }`}
        >
          <Home className="w-4 h-4 mb-1 sm:mb-0" />
          <span>Home</span>
        </button>
        <button
          onClick={() => setActiveTab("calendar")}
          className={`flex flex-col sm:flex-row items-center justify-center space-x-2 py-3 px-1.5 rounded-lg text-xs font-mono tracking-wider font-bold uppercase transition-all duration-300 transform cursor-pointer ${
            activeTab === "calendar"
              ? "bg-[#050505] border border-brand-gold/25 text-brand-gold shadow-lg"
              : "text-slate-400 hover:text-white hover:bg-slate-900/50"
          }`}
        >
          <CalendarIcon className="w-4 h-4 mb-1 sm:mb-0" />
          <span>Calendar</span>
        </button>
        <button
          onClick={() => setActiveTab("learning")}
          className={`flex flex-col sm:flex-row items-center justify-center space-x-2 py-3 px-1.5 rounded-lg text-xs font-mono tracking-wider font-bold uppercase transition-all duration-300 transform cursor-pointer ${
            activeTab === "learning"
              ? "bg-[#050505] border border-brand-gold/25 text-brand-gold shadow-lg"
              : "text-slate-400 hover:text-white hover:bg-slate-900/50"
          }`}
        >
          <BookOpen className="w-4 h-4 mb-1 sm:mb-0" />
          <span>Learning</span>
        </button>
        <button
          onClick={() => setActiveTab("notes")}
          className={`flex flex-col sm:flex-row items-center justify-center space-x-2 py-3 px-1.5 rounded-lg text-xs font-mono tracking-wider font-bold uppercase transition-all duration-300 transform cursor-pointer ${
            activeTab === "notes"
              ? "bg-[#050505] border border-brand-gold/25 text-brand-gold shadow-lg"
              : "text-slate-400 hover:text-white hover:bg-slate-900/50"
          }`}
        >
          <FileText className="w-4 h-4 mb-1 sm:mb-0" />
          <span>Notes</span>
        </button>
        <button
          onClick={() => setActiveTab("progress")}
          className={`flex flex-col sm:flex-row items-center justify-center space-x-2 py-3 px-1.5 rounded-lg text-xs font-mono tracking-wider font-bold uppercase transition-all duration-300 transform cursor-pointer ${
            activeTab === "progress"
              ? "bg-[#050505] border border-brand-gold/25 text-brand-gold shadow-lg"
              : "text-slate-400 hover:text-white hover:bg-slate-900/50"
          }`}
        >
          <Award className="w-4 h-4 mb-1 sm:mb-0" />
          <span>Progress</span>
        </button>
      </div>

      {/* CORE WORKSPACE VIEWPORT */}
      <div className="min-h-[500px]">

        {/* ==================== 1. DASHBOARD VIEWPORT ==================== */}
        {activeTab === "dashboard" && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Quick stats and focal point */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl bg-[#0e0e0e] border border-brand-gold/10 flex items-center space-x-4">
                <div className="p-3 bg-brand-gold/10 rounded-lg text-brand-gold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase">Programme Start</p>
                  <p className="text-sm font-bold text-white mt-1">20 June 2026</p>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-[#0e0e0e] border border-brand-gold/10 flex items-center space-x-4">
                <div className="p-3 bg-brand-red-deep/10 rounded-lg text-brand-red-highlight">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase">Facility Hub</p>
                  <p className="text-sm font-bold text-white mt-1">IIT Madras, Chennai</p>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-[#0e0e0e] border border-brand-gold/10 flex items-center space-x-4">
                <div className="p-3 bg-brand-gold/10 rounded-lg text-brand-gold">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase">RTL Design Goal</p>
                  <p className="text-sm font-bold text-white mt-1">Verification Engineer</p>
                </div>
              </div>
              
              {/* CURRENT FOCUS CARD - INPLACE EDIT */}
              <div className="p-5 rounded-xl bg-[#0e0e0e] border border-brand-gold/20 flex flex-col justify-between relative group overflow-hidden">
                <div className="absolute -right-3 -bottom-3 p-4 opacity-5 text-brand-red-highlight">
                  <Flame className="w-20 h-20" />
                </div>
                <div className="flex justify-between items-center w-full z-10">
                  <p className="text-[10px] font-mono text-brand-red-highlight uppercase font-bold tracking-wider">Current Focus</p>
                  <button 
                    onClick={() => {
                      if (isEditingFocus) {
                        localStorage.setItem("gsep_current_focus", currentFocus);
                      }
                      setIsEditingFocus(!isEditingFocus);
                    }}
                    className="p-1 rounded bg-[#18181b] border border-brand-gold/20 text-brand-gold hover:bg-brand-gold hover:text-black transition-colors cursor-pointer"
                  >
                    {isEditingFocus ? <Check className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="mt-2 z-10">
                  {isEditingFocus ? (
                    <input
                      type="text"
                      value={currentFocus}
                      onChange={(e) => setCurrentFocus(e.target.value)}
                      className="bg-black border border-brand-gold/40 text-brand-gold rounded p-1 px-2 text-xs w-full font-mono outline-none"
                    />
                  ) : (
                    <p className="text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gold-glow to-white font-mono uppercase">
                      {currentFocus}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* TWO COLUMN GRID: planner vs reflections journal */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* LEFT CHANNELS: STUDY PLANNER PANEL */}
              <div className="p-6 rounded-2xl bg-[#0e0e0e] border border-brand-gold/15 space-y-6">
                <div>
                  <h3 className="font-display font-bold text-xl uppercase tracking-wider text-brand-gold">
                    Personal Study Planner
                  </h3>
                  <p className="font-sans text-xs text-slate-400 mt-1">
                    Manage your pre-arrival preparation assignments and check them off in real-time.
                  </p>
                </div>

                {/* Form to add task */}
                <form onSubmit={handleAddTask} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter new milestone/task..."
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    className="flex-1 bg-black border border-brand-gold/20 rounded-lg p-2.5 px-4 text-xs font-mono font-medium tracking-wide text-white outline-none focus:border-brand-gold-glow transition-colors placeholder:text-slate-600"
                  />
                  <select
                    value={newTaskCategory}
                    onChange={(e) => setNewTaskCategory(e.target.value as any)}
                    className="bg-black border border-brand-gold/20 rounded-lg text-xs font-mono text-slate-300 p-2.5 outline-none focus:border-brand-gold-glow"
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                  <button
                    type="submit"
                    className="p-2.5 rounded-lg bg-brand-gold text-[#050505] hover:bg-brand-gold-glow font-mono font-bold text-xs uppercase cursor-pointer"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </form>

                {/* Task Checklist Lists */}
                <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
                  {["daily", "weekly", "monthly"].map(cat => {
                    const filtered = tasks.filter(t => t.category === cat);
                    if (filtered.length === 0) return null;
                    return (
                      <div key={cat} className="space-y-2">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-[#A1A1AA] bg-slate-900 px-2 py-0.5 rounded inline-block">
                          {cat} Roadmap
                        </p>
                        <div className="space-y-1.5">
                          {filtered.map(t => (
                            <div 
                              key={t.id} 
                              className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                                t.completed 
                                  ? "bg-slate-900/40 border-brand-gold/10 opacity-60" 
                                  : "bg-black border-slate-800 hover:border-slate-700"
                              }`}
                            >
                              <div className="flex items-center space-x-3 flex-1 min-w-0 mr-2">
                                <button
                                  type="button"
                                  onClick={() => handleToggleTask(t.id)}
                                  className={`w-5 h-5 rounded border flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                                    t.completed 
                                      ? "bg-brand-gold text-black border-brand-gold" 
                                      : "border-slate-700 hover:border-brand-gold"
                                  }`}
                                >
                                  {t.completed && <Check className="w-3.5 h-3.5" />}
                                </button>
                                <span className={`text-xs font-mono truncate ${t.completed ? "line-through text-slate-500" : "text-white"}`}>
                                  {t.title}
                                </span>
                              </div>
                              <button
                                onClick={() => handleDeleteTask(t.id)}
                                className="text-slate-500 hover:text-brand-red-highlight transition-colors p-1"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT CHANNELS: TODAY'S REFLECTION JOURNAL */}
              <div className="p-6 rounded-2xl bg-[#0e0e0e] border border-brand-gold/15 space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-display font-bold text-xl uppercase tracking-wider text-brand-gold">
                      Today's Reflection Journal
                    </h3>
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
                      <span className="font-mono text-[9px] text-slate-500 uppercase font-black">
                        {journalSavedStatus === "Idle" ? "AUTO-SAVE DEPLOYED" : journalSavedStatus}
                      </span>
                    </div>
                  </div>
                  <p className="font-sans text-xs text-slate-400 mt-1">
                    Your insights are instantly saved to local storage for persistent documentation.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-brand-gold-glow flex items-center space-x-1.5">
                      <Check className="w-3 h-3" />
                      <span>What did I learn today?</span>
                    </label>
                    <textarea
                      value={reflectionLearn}
                      onChange={(e) => setReflectionLearn(e.target.value)}
                      placeholder="e.g. Cleared Verilog task sequences, structured test benches, debugged shift registers."
                      className="w-full h-16 bg-black border border-slate-850 rounded-lg p-2.5 text-xs font-mono text-white outline-none focus:border-brand-gold/50 placeholder:text-slate-750 resize-none resize-y"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-brand-red-highlight flex items-center space-x-1.5">
                      <AlertTriangle className="w-3 h-3" />
                      <span>Challenges faced / Blockers?</span>
                    </label>
                    <textarea
                      value={reflectionChallenges}
                      onChange={(e) => setReflectionChallenges(e.target.value)}
                      placeholder="e.g. Setup and hold violations on multi-stage ALU are hard to grasp."
                      className="w-full h-16 bg-black border border-slate-850 rounded-lg p-2.5 text-xs font-mono text-white outline-none focus:border-brand-gold/50 placeholder:text-slate-750 resize-none resize-y"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-slate-300 flex items-center space-x-1.5">
                      <Target className="w-3 h-3" />
                      <span>What will I study tomorrow?</span>
                    </label>
                    <textarea
                      value={reflectionTomorrow}
                      onChange={(e) => setReflectionTomorrow(e.target.value)}
                      placeholder="e.g. Coding a bidirectional shift register in modelsim or standard compiler pipeline."
                      className="w-full h-16 bg-black border border-slate-850 rounded-lg p-2.5 text-xs font-mono text-white outline-none focus:border-brand-gold/50 placeholder:text-slate-750 resize-none resize-y"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={saveJournal}
                    className="flex items-center space-x-2 px-5 py-2.5 bg-brand-gold text-black rounded-lg text-xs font-mono font-bold uppercase hover:bg-brand-gold-glow cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>FORCE WRITE SNAPSHOT</span>
                  </button>
                </div>
              </div>
            </div>

            {/* TECHNICAL INTERVIEW TRACKER */}
            <div className="p-6 rounded-2xl bg-[#0e0e0e] border border-brand-gold/15 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="font-display font-bold text-xl uppercase tracking-wider text-brand-gold">
                    Technical Interview Preparation Tracker
                  </h3>
                  <p className="font-sans text-xs text-slate-400 mt-1">
                    Rehearse expected silicon and microarchitecture questions. Click status badge to cycle stages.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddingQuestion(!isAddingQuestion)}
                  className="px-4 py-2 bg-slate-900 hover:bg-black border border-brand-gold/20 text-brand-gold text-xs font-mono uppercase tracking-wider rounded-lg flex items-center space-x-2 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>{isAddingQuestion ? "Cancel" : "Add Interview Query"}</span>
                </button>
              </div>

              {/* Form to Add Question */}
              {isAddingQuestion && (
                <form onSubmit={handleAddQuestion} className="bg-black border border-brand-gold/20 p-4 rounded-xl space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400">Technical Question</label>
                      <input
                        type="text"
                        placeholder="e.g. What is Metastability?"
                        value={newQuestionText}
                        onChange={(e) => setNewQuestionText(e.target.value)}
                        className="w-full bg-[#0d0d0d] border border-slate-800 rounded p-2 text-xs font-mono text-white outline-none"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400">Status</label>
                      <select
                        value={newQuestionStatus}
                        onChange={(e) => setNewQuestionStatus(e.target.value as any)}
                        className="w-full bg-[#0d0d0d] border border-slate-800 rounded p-2 text-xs font-mono text-white outline-none"
                      >
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Learned">Learned</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400">Answer / Key concept key points</label>
                    <textarea
                      placeholder="Explain logic gates, propagation times or parameters..."
                      value={newQuestionAnswer}
                      onChange={(e) => setNewQuestionAnswer(e.target.value)}
                      className="w-full h-16 bg-[#0d0d0d] border border-slate-800 rounded p-2 text-xs font-mono text-white outline-none"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button type="submit" className="px-4 py-2 bg-brand-gold text-black font-mono font-bold text-xs rounded uppercase hover:bg-brand-glow cursor-pointer">
                      Save Question
                    </button>
                  </div>
                </form>
              )}

              {/* Prep Cards Lists */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {interviewQuestions.map((q) => (
                  <div key={q.id} className="p-4 rounded-xl bg-black border border-slate-850 hover:border-brand-gold/20 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2.5">
                        <span className="font-mono text-[10px] text-slate-505 bg-[#0e0e0e] text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                          ID: {q.id}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleToggleQuestionStatus(q.id)}
                          className={`font-mono text-[9px] px-2 py-0.5 rounded uppercase font-bold tracking-widest border cursor-pointer ${
                            q.status === "Learned"
                              ? "bg-green-950/40 text-green-400 border-green-500/20"
                              : q.status === "In Progress"
                              ? "bg-yellow-950/40 text-yellow-400 border-yellow-500/20"
                              : "bg-red-950/40 text-red-400 border-red-500/20"
                          }`}
                        >
                          {q.status}
                        </button>
                      </div>
                      <h4 className="font-mono text-sm font-bold text-white mb-2">{q.question}</h4>
                      <p className="font-sans text-xs text-slate-400 leading-relaxed font-light">{q.answer}</p>
                    </div>
                    <div className="flex justify-end mt-4 pt-3 border-t border-slate-900/60">
                      <button
                        onClick={() => handleDeleteQuestion(q.id)}
                        className="text-slate-600 hover:text-brand-red-highlight transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ==================== 2. PROGRAMME CALENDAR ==================== */}
        {activeTab === "calendar" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-brand-gold/15 pb-4">
              <div>
                <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-brand-gold">
                  GSEP Interactive Academic Calendar
                </h3>
                <p className="font-sans text-xs text-slate-400 mt-1">
                  Click a grid box day to program warnings, add notifications and reschedule boot markers.
                </p>
              </div>

              {/* Month Selection Toggles */}
              <div className="flex bg-[#0d0d0d] border border-brand-gold/15 p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => setActiveMonthFilter("06")}
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase rounded-md cursor-pointer ${
                    activeMonthFilter === "06" ? "bg-brand-gold text-black" : "text-slate-400 hover:text-white"
                  }`}
                >
                  June 2026
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMonthFilter("07")}
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase rounded-md cursor-pointer ${
                    activeMonthFilter === "07" ? "bg-brand-gold text-black" : "text-slate-400 hover:text-white"
                  }`}
                >
                  July 2026
                </button>
              </div>
            </div>

            {/* Simulated Drag & Drop Alert */}
            {reschedulingEventId && (
              <div className="p-4 bg-brand-red-deep/20 border border-brand-red-highlight/35 rounded-xl text-xs font-mono text-white flex items-center justify-between">
                <span>
                  ⚡ <strong>Rescheduling Triggered:</strong> Select a target day grid box below to instantly re-map calendar markers.
                </span>
                <button onClick={() => setReschedulingEventId(null)} className="px-2 py-1 bg-[#1a0505] rounded text-brand-red-highlight border border-brand-red-highlight/20 cursor-pointer">
                  Cancel
                </button>
              </div>
            )}

            {/* Seven-column Calendar Grid resembling High-Tech cockpit monitor */}
            <div className="bg-[#0e0e0e] border border-brand-gold/15 rounded-xl p-4 sm:p-6 overflow-hidden shadow-2xl">
              
              {/* Day headers */}
              <div className="grid grid-cols-7 gap-2 text-center border-b border-slate-900 pb-3 mb-3">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(d => (
                  <span key={d} className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">{d}</span>
                ))}
              </div>

              {/* Monthly grid boxes */}
              <div className="grid grid-cols-7 gap-2">
                
                {/* Pad Offset Days for July 2026 Grid so layout matches days of the week */}
                {activeMonthFilter === "07" && [1, 2].map(pad => (
                  <div key={`pad-${pad}`} className="min-h-[100px] bg-slate-950/20 border border-transparent rounded opacity-20 hidden sm:block" />
                ))}

                {getDaysArray(activeMonthFilter).map((dayStr) => {
                  const items = calendarEvents.filter(e => e.date === dayStr);
                  const isToday = dayStr === "2026-06-18"; // Live local coordinate snapshot mock-up
                  const displayDayNum = parseInt(dayStr.split("-")[2], 10);

                  return (
                    <div
                      key={dayStr}
                      onClick={() => {
                        if (reschedulingEventId) {
                          executeReschedule(dayStr);
                        } else {
                          handleOpenDayModal(dayStr);
                        }
                      }}
                      className={`min-h-[110px] p-2.5 rounded-lg border transition-all duration-300 flex flex-col justify-between cursor-pointer text-left ${
                        isToday 
                          ? "bg-brand-red-deep/5 border-brand-red-highlight/40 shadow-inner" 
                          : "bg-black border-slate-900 hover:border-brand-gold/30 hover:bg-[#121212]"
                      }`}
                    >
                      {/* Grid Header containing date number & notifications indicator */}
                      <div className="flex justify-between items-center">
                        <span className={`font-mono text-xs font-bold ${isToday ? "text-[#C1121F] bg-white px-1.5 py-0.5 rounded font-black text-[13px]" : "text-slate-400"}`}>
                          {displayDayNum}
                        </span>
                        {isToday && (
                          <span className="text-[8px] font-mono font-black text-[#C1121F] border border-[#C1121F]/30 bg-white/10 px-1 rounded uppercase tracking-wider">
                            TODAY
                          </span>
                        )}
                      </div>

                      {/* Event blocks */}
                      <div className="space-y-1 mt-2 flex-1 overflow-y-auto max-h-[70px] invisible-scrollbar">
                        {items.map(it => (
                          <div
                            key={it.id}
                            className={`text-[9px] font-mono p-1 rounded font-bold truncate ${
                              it.category === "flights"
                                ? "bg-brand-red-deep/40 text-brand-red-highlight border-l-2 border-brand-red-highlight"
                                : it.category === "classes"
                                ? "bg-cyan-950/40 text-cyan-400 border-l-2 border-cyan-400"
                                : it.category === "hackathon"
                                ? "bg-amber-950/40 text-amber-400 border-l-2 border-amber-400 animate-pulse"
                                : "bg-slate-900 text-slate-300 border-l-2 border-slate-500"
                            }`}
                          >
                            {it.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PRE-PROGRAMMED LAB MATRIX SYNOPSIS */}
            <div className="p-5 rounded-2xl bg-[#0e0e0e] border border-brand-gold/15">
              <h4 className="font-mono text-[10px] uppercase text-slate-500 tracking-widest font-black mb-3">
                Selected Milestones Legend
              </h4>
              <div className="flex flex-wrap gap-4 text-xs font-mono">
                <div className="flex items-center space-x-2"><div className="w-2.5 h-2.5 bg-brand-red-highlight rounded-sm" /> <span>Flights / Relocation Days</span></div>
                <div className="flex items-center space-x-2"><div className="w-2.5 h-2.5 bg-cyan-400 rounded-sm" /> <span>SHAKTI Labs / Classes</span></div>
                <div className="flex items-center space-x-2"><div className="w-2.5 h-2.5 bg-amber-400 rounded-sm" /> <span>Hackathon Cycles / Milestones</span></div>
                <div className="flex items-center space-x-2"><div className="w-2.5 h-2.5 bg-slate-500 rounded-sm" /> <span>Personal Target Blocks</span></div>
              </div>
            </div>

            {/* DAY DETAIL MODAL/DIALOG */}
            {showEventModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fadeIn">
                <div className="bg-[#0e0e0e] border border-brand-gold/20 w-full max-w-xl rounded-2xl p-6 overflow-hidden shadow-2xl relative space-y-6">
                  
                  {/* Header */}
                  <div className="flex justify-between items-start border-b border-brand-gold/15 pb-4">
                    <div>
                      <h4 className="text-xs font-mono text-brand-gold uppercase tracking-widest font-black">
                        Calendar Workspace Panel
                      </h4>
                      <h3 className="font-display text-xl font-bold text-white mt-1">
                        Schedule for {selectedDate}
                      </h3>
                    </div>
                    <button
                      onClick={() => setShowEventModal(false)}
                      className="p-1 px-3 text-xs bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded cursor-pointer"
                    >
                      ✕ CLOSE
                    </button>
                  </div>

                  {/* Registered events list */}
                  <div className="space-y-3">
                    <h5 className="font-mono text-[10px] uppercase text-slate-500 font-bold">Logged Events on Date:</h5>
                    {selectedDayEvents.length === 0 ? (
                      <p className="text-xs font-mono text-slate-500 italic pb-2">No key academic/personal coordinates scheduled for this day block.</p>
                    ) : (
                      <div className="space-y-2">
                        {selectedDayEvents.map(it => (
                          <div key={it.id} className="p-3 bg-black border border-slate-850 rounded-xl space-y-2">
                            <div className="flex justify-between items-center">
                              <span className={`font-mono text-[10px] uppercase font-black px-2 py-0.5 rounded ${
                                it.category === "flights" ? "bg-brand-red-deep/35 text-brand-red-highlight border border-brand-red-highlight/20" : "bg-slate-900 text-slate-400 border border-slate-800"
                              }`}>
                                {it.category}
                              </span>
                              
                              <div className="flex items-center space-x-2">
                                <button
                                  type="button"
                                  onClick={() => handleTriggerReschedule(it.id)}
                                  className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-950/20 text-brand-gold border border-brand-gold/20 hover:bg-brand-gold hover:text-black cursor-pointer"
                                >
                                  Reschedule
                                </button>
                                <button 
                                  onClick={() => handleDeleteEvent(it.id)}
                                  className="text-slate-500 hover:text-brand-red-highlight p-1 cursor-pointer"
                                  title="Delete Event"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                            <h4 className="font-mono text-xs font-bold text-white">{it.title}</h4>
                            {it.notes && <p className="font-sans text-xs text-slate-400 font-light">{it.notes}</p>}
                            {it.warning && (
                              <div className="flex items-center space-x-1 text-[9px] font-mono text-brand-red-highlight font-black">
                                <AlertTriangle className="w-3 h-3 text-brand-red-highlight" />
                                <span>CRITICAL CRITERIA PATH</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Add interactive note/event form */}
                  <form onSubmit={handleAddCustomEvent} className="bg-black/40 border border-slate-900 p-4 rounded-xl space-y-3">
                    <h5 className="font-mono text-[10px] uppercase text-brand-gold tracking-widest font-bold">Write Target Event Hook</h5>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-slate-500">Event Title</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Complete modelsim verifications"
                          value={newEventTitle}
                          onChange={(e) => setNewEventTitle(e.target.value)}
                          className="w-full bg-black border border-slate-800 rounded p-2 text-xs font-mono text-white outline-none focus:border-brand-gold"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-slate-500">Classification</label>
                        <select
                          value={newEventCategory}
                          onChange={(e) => setNewEventCategory(e.target.value as any)}
                          className="w-full bg-black border border-slate-800 rounded p-2 text-xs font-mono text-white outline-none focus:border-brand-gold"
                        >
                          <option value="personal">Personal Plan</option>
                          <option value="classes">Class Task</option>
                          <option value="workshops">VHDL Workshop</option>
                          <option value="interviews">Mock interview prep</option>
                          <option value="flights">Flight Checklist</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-mono text-slate-500">Topic Notes / Explanations Description</label>
                      <textarea
                        placeholder="Write down register indexes or notes..."
                        value={newEventNotes}
                        onChange={(e) => setNewEventNotes(e.target.value)}
                        className="w-full h-14 bg-black border border-slate-800 rounded p-2 text-xs font-mono text-white outline-none focus:border-brand-gold"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="warning_check"
                        checked={newEventWarning}
                        onChange={(e) => setNewEventWarning(e.target.checked)}
                        className="w-4 h-4 bg-black border-slate-800 text-brand-gold focus:ring-brand-gold active:bg-brand-gold cursor-pointer"
                      />
                      <label htmlFor="warning_check" className="text-[9px] font-mono text-slate-400 uppercase select-none cursor-pointer">
                        Mark as Critical Path Warning
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2 bg-brand-gold text-black hover:bg-brand-gold-glow text-xs font-mono font-bold uppercase rounded cursor-pointer"
                    >
                      APPEND CALENDAR ENTRY &rarr;
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================== 3. LEARNING PROGRESS & KNOWLEDGE TREE ==================== */}
        {activeTab === "learning" && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-brand-gold">
                GSEP Semiconductor Readiness Trackers
              </h3>
              <p className="font-sans text-xs text-slate-400 mt-1">
                Drag on-the-fly slider bars to calibrate current completion levels. Values autosave instantly.
              </p>
            </div>

            {/* Sliding Level Monitors - Redesigned into Large Interactive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  id: "logic",
                  title: "Digital Logic Foundations",
                  value: progressDigitalLogic,
                  setter: setProgressDigitalLogic,
                  icon: <Cpu className="w-5 h-5 text-brand-gold-glow" />,
                  desc: "Gates, boolean algebra simplifications, Karnaugh maps (K-Maps)."
                },
                {
                  id: "linux",
                  title: "Linux & EDA Environments",
                  value: progressLinux,
                  setter: setProgressLinux,
                  icon: <Terminal className="w-5 h-5 text-brand-gold-glow" />,
                  desc: "Bash utilities, file systems, SSH terminal networks."
                },
                {
                  id: "git",
                  title: "Git & Version Controls",
                  value: progressGit,
                  setter: setProgressGit,
                  icon: <Layers className="w-5 h-5 text-brand-gold-glow" />,
                  desc: "Commit tracking, remote branches, submodules merging."
                },
                {
                  id: "verilog",
                  title: "Verilog RTL Design",
                  value: progressVerilog,
                  setter: setProgressVerilog,
                  icon: <FileCode className="w-5 h-5 text-brand-gold-glow" />,
                  desc: "Always sequential blocks, timing pipelines, registers."
                },
                {
                  id: "riscv",
                  title: "RISC-V ISA Architecture",
                  value: progressRiscv,
                  setter: setProgressRiscv,
                  icon: <Cpu className="w-5 h-5 text-brand-gold-glow animate-pulse" />,
                  desc: "Instruction execution loops, register mappings, CSR arrays."
                },
                {
                  id: "assembly",
                  title: "Assembly Mappings",
                  value: progressAssembly,
                  setter: setProgressAssembly,
                  icon: <Terminal className="w-5 h-5 text-brand-gold-glow animate-pulse" />,
                  desc: "Bare-metal compiler traces, compiler offsets instructions."
                },
                {
                  id: "sta",
                  title: "Static Timing Signoff",
                  value: progressSta,
                  setter: setProgressSta,
                  icon: <Sliders className="w-5 h-5 text-brand-gold-glow" />,
                  desc: "Setup and hold margin timing paths, clock tree constraints."
                },
                {
                  id: "verification",
                  title: "SystemVerilog Verification",
                  value: progressVerification,
                  setter: setProgressVerification,
                  icon: <CheckCircle className="w-5 h-5 text-brand-gold-glow" />,
                  desc: "Design validation benches, self-checking scoreboards."
                }
              ].map((card) => {
                const isCompleted = card.value === 100;
                
                // Get ASCII blocks
                const getBlockBar = (percentage: number) => {
                  const totalBlocks = 10;
                  const filledBlocks = Math.round((percentage / 100) * totalBlocks);
                  const emptyBlocks = totalBlocks - filledBlocks;
                  return "█".repeat(filledBlocks) + "░".repeat(emptyBlocks);
                };

                // Get dynamic standing text
                const getProficiencyLabel = (percentage: number) => {
                  if (percentage < 40) return "Novice";
                  if (percentage < 80) return "Intermediate";
                  return "Professional";
                };

                const proficiency = getProficiencyLabel(card.value);
                
                return (
                  <div 
                    key={card.id}
                    className={`group relative p-6 bg-[#0e0e0e] border rounded-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(230,192,104,0.06)] flex flex-col justify-between h-[210px] overflow-hidden ${
                      isCompleted 
                        ? "border-brand-gold bg-brand-gold/[0.02]" 
                        : "border-brand-gold/15 hover:border-brand-gold/40"
                    }`}
                  >
                    {/* Glowing highlight accents */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div className="p-2 bg-[#050505] rounded-xl border border-brand-gold/10 group-hover:border-brand-gold/30 transition-colors">
                          {card.icon}
                        </div>
                        <span className={`font-mono text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-bold border ${
                          proficiency === "Professional"
                            ? "bg-brand-gold/10 text-brand-gold border-brand-gold/20"
                            : proficiency === "Intermediate"
                              ? "bg-brand-red-deep/10 text-brand-red-highlight border-brand-red-highlight/25"
                              : "bg-zinc-900 text-zinc-400 border-zinc-800"
                        }`}>
                          {proficiency}
                        </span>
                      </div>
                      
                      <div className="text-left mt-2">
                        <h4 className="font-display font-bold text-[14px] sm:text-[15px] text-white tracking-tight group-hover:text-brand-gold-glow transition-colors leading-tight">
                          {card.title}
                        </h4>
                        <p className="font-sans text-[11px] text-slate-400 leading-relaxed font-light mt-1 pl-0.5 line-clamp-2">
                          {card.desc}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 mt-4">
                      {/* ASCII Block Bar & Value */}
                      <div className="flex justify-between items-baseline font-mono text-xs pl-0.5">
                        <span className="text-brand-gold text-[11px] tracking-wider font-black select-none">
                          {getBlockBar(card.value)}
                        </span>
                        <span className="text-white text-[12px] font-black tracking-tighter">
                          {card.value}%
                        </span>
                      </div>
                      
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={card.value}
                        onChange={(e) => card.setter(Number(e.target.value))}
                        className="w-full h-1 bg-[#050505] rounded-lg appearance-none cursor-pointer accent-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold/30"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* INTERACTIVE SEMICONDUCTOR KNOWLEDGE TREE map layout */}
            <div className="p-6 bg-[#0e0e0e] border border-brand-gold/15 rounded-2xl space-y-6">
              <div>
                <h3 className="font-display font-bold text-xl uppercase tracking-wider text-brand-gold flex items-center space-x-2">
                  <Cpu className="w-5 h-5 text-brand-gold" />
                  <span>Silicon Knowledge Trace Map (Mind Tree)</span>
                </h3>
                <p className="font-sans text-xs text-slate-400 mt-1">
                  Click on circuit traces links to write personal notes, reference websites URLs, and mark modules completed.
                </p>
              </div>

              {/* Graphical Layout resembling PCB tracks routing nodes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                
                {/* Connecting trace vector mock line overlay on desktop */}
                <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-brand-gold/2 w-1/2 pointer-events-none" />

                {/* Left Branch: digital Logic */}
                <div className="space-y-4">
                  <h4 className="font-mono text-xs text-brand-red-highlight uppercase font-black tracking-widest flex items-center space-x-2 border-b border-slate-900 pb-2">
                    <span className="w-1.5 h-1.5 bg-brand-red-highlight rounded-full" />
                    <span>Digital Systems Logic Base</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {knowledgeNodes.filter(n => n.category === "digital").map(no => {
                      const isDone = completedNodes.includes(no.id);
                      return (
                        <div
                          key={no.id}
                          onClick={() => handleOpenNodeDetails(no)}
                          className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative group overflow-hidden ${
                            isDone 
                              ? "bg-brand-gold/5 border-brand-gold/30 shadow-[0_0_15px_rgba(214,175,55,0.08)]" 
                              : "bg-black border-slate-850 hover:border-slate-700"
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <span className={`w-2 h-2 rounded-full mt-1.5 ${isDone ? "bg-brand-gold shadow-[0_0_8px_#D4AF37]" : "bg-slate-700"}`} />
                            <span className="text-[9px] font-mono font-bold text-slate-500 uppercase">TRACE CLONE</span>
                          </div>
                          <h5 className="font-mono text-xs font-bold text-white mt-3 group-hover:text-brand-gold-glow transition-colors">{no.label}</h5>
                          <p className="font-sans text-[10px] text-slate-400 mt-1 leading-relaxed font-light">{no.desc.substring(0, 60)}...</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Branch: verilog HDL */}
                <div className="space-y-4">
                  <h4 className="font-mono text-xs text-brand-gold uppercase font-black tracking-widest flex items-center space-x-2 border-b border-slate-900 pb-2">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                    <span>Verilog RTL Microarchitecture</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {knowledgeNodes.filter(n => n.category === "verilog").map(no => {
                      const isDone = completedNodes.includes(no.id);
                      return (
                        <div
                          key={no.id}
                          onClick={() => handleOpenNodeDetails(no)}
                          className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative group overflow-hidden ${
                            isDone 
                              ? "bg-brand-gold/5 border-brand-gold/30 shadow-[0_0_15px_rgba(214,175,55,0.08)]" 
                              : "bg-black border-slate-850 hover:border-slate-700"
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <span className={`w-2 h-2 rounded-full mt-1.5 ${isDone ? "bg-brand-gold shadow-[0_0_8px_#D4AF37]" : "bg-slate-700"}`} />
                            <span className="text-[9px] font-mono font-bold text-slate-500 uppercase">RTL CODE</span>
                          </div>
                          <h5 className="font-mono text-xs font-bold text-white mt-3 group-hover:text-brand-gold-glow transition-colors">{no.label}</h5>
                          <p className="font-sans text-[10px] text-slate-400 mt-1 leading-relaxed font-light">{no.desc.substring(0, 60)}...</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>

            {/* METADATA ATTACHER DRAPER/DIALOG */}
            {activeKnowledgeNode && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fadeIn">
                <div className="bg-[#0e0e0e] border border-brand-gold/25 w-full max-w-lg rounded-2xl p-6 shadow-2xl relative space-y-5">
                  <div className="flex justify-between items-start border-b border-slate-900 pb-3">
                    <div>
                      <span className={`font-mono text-[9px] uppercase px-2 py-0.5 rounded ${activeKnowledgeNode.category === "digital" ? "bg-brand-red-deep/40 text-brand-red-highlight" : "bg-brand-gold/20 text-brand-gold"}`}>
                        {activeKnowledgeNode.category} circuit trace
                      </span>
                      <h4 className="font-display text-lg font-bold text-white mt-1.5">{activeKnowledgeNode.label}</h4>
                    </div>
                    <button onClick={() => setActiveKnowledgeNode(null)} className="text-slate-400 hover:text-white font-mono text-xs cursor-pointer">
                      ✕ CLOSE
                    </button>
                  </div>

                  <p className="font-sans text-xs text-slate-400 leading-relaxed font-light">{activeKnowledgeNode.desc}</p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-black border border-slate-900 rounded-lg">
                      <span className="font-mono text-xs text-slate-300">Completion Status:</span>
                      <button
                        onClick={() => toggleNodeComplete(activeKnowledgeNode.id)}
                        className={`px-4 py-1.5 rounded text-xs font-mono font-bold uppercase transition-all tracking-wider cursor-pointer ${
                          completedNodes.includes(activeKnowledgeNode.id)
                            ? "bg-brand-gold text-black border border-brand-gold"
                            : "bg-slate-900 hover:bg-black border border-slate-800 text-slate-450 text-slate-400"
                        }`}
                      >
                        {completedNodes.includes(activeKnowledgeNode.id) ? "✓ COMPLETED SUCCESSFULLY" : "MARK ON TIME COMPLETE"}
                      </button>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-500 uppercase">Personal Technical Study Guidelines / Syntactical Quick Notes</label>
                      <textarea
                        value={nodeNoteInput}
                        onChange={(e) => setNodeNoteInput(e.target.value)}
                        placeholder="e.g. Remember to declare asynchronous resets before checking clock edges."
                        className="w-full h-20 bg-black border border-slate-800 rounded p-2 text-xs font-mono text-white outline-none focus:border-brand-gold"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-500 uppercase">Attach Web Link / Video Tutorial Reference (Saves to trace node)</label>
                      <input
                        type="url"
                        value={nodeLinkInput}
                        onChange={(e) => setNodeLinkInput(e.target.value)}
                        placeholder="https://youtube.com/... or local documentation folder path"
                        className="w-full bg-black border border-slate-800 rounded p-2 text-xs font-mono text-white outline-none focus:border-brand-gold"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 border-t border-slate-900 pt-3">
                    <button
                      onClick={() => setActiveKnowledgeNode(null)}
                      className="px-4 py-2 hover:bg-slate-900 text-slate-400 text-xs font-mono uppercase rounded-lg border border-slate-800 cursor-pointer"
                    >
                      Ignore Changes
                    </button>
                    <button
                      onClick={handleSaveNodeMetadata}
                      className="px-5 py-2 bg-brand-gold text-[#050505] hover:bg-brand-gold-glow text-xs font-mono font-bold uppercase rounded-lg cursor-pointer"
                    >
                      SAVE INTERACTIVE CODES &rarr;
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================== 4. NOTES VAULT ==================== */}
        {activeTab === "notes" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-brand-gold/15 pb-4">
              <div>
                <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-brand-gold">
                  Searchable Knowledge Notes Vault
                </h3>
                <p className="font-sans text-xs text-slate-400 mt-1">
                  Your offline searchable notes base. Draft and reference cheatsheets during research blocks.
                </p>
              </div>

              <button
                onClick={() => setIsAddingNewNote(!isAddingNewNote)}
                className="px-4 py-2 bg-brand-gold text-black hover:bg-brand-gold-glow text-xs font-mono font-bold uppercase rounded-lg flex items-center space-x-2 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>{isAddingNewNote ? "Cancel" : "Create New Note"}</span>
              </button>
            </div>

            {/* Search inputs */}
            <div className="relative max-w-md">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search notes across categories, titles or tags..."
                value={notesSearchQuery}
                onChange={(e) => setNotesSearchQuery(e.target.value)}
                className="w-full bg-[#0e0e0e] border border-brand-gold/20 rounded-lg p-2.5 pl-10 text-xs font-mono text-white outline-none focus:border-brand-gold-glow transition-colors placeholder:text-slate-600"
              />
            </div>

            {/* Note form block creation */}
            {isAddingNewNote && (
              <form onSubmit={handleCreateNote} className="bg-black/90 p-5 rounded-xl border border-brand-gold/25 space-y-4 max-w-xl mx-auto">
                <h4 className="font-mono text-xs uppercase text-brand-gold font-bold tracking-widest border-b border-slate-900 pb-2">Draft Note Container</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500">Note Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. gray code transitions"
                      value={newNoteTitle}
                      onChange={(e) => setNewNoteTitle(e.target.value)}
                      className="w-full bg-black border border-slate-800 rounded p-2 text-xs font-mono text-white outline-none focus:border-brand-gold"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500">Logic Track Category</label>
                    <select
                      value={newNoteCategory}
                      onChange={(e) => setNewNoteCategory(e.target.value as any)}
                      className="w-full bg-black border border-slate-800 rounded p-2 text-xs font-mono text-white outline-none focus:border-brand-gold"
                    >
                      <option value="Digital Logic">Digital Logic</option>
                      <option value="Verilog">Verilog</option>
                      <option value="Linux">Linux</option>
                      <option value="RISC-V">RISC-V</option>
                      <option value="Assembly">Assembly</option>
                      <option value="STA">STA</option>
                      <option value="Verification">Verification</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-500">Draft Content (Supports Markdown or raw texts)</label>
                  <textarea
                    required
                    placeholder="Describe implementation details..."
                    value={newNoteBody}
                    onChange={(e) => setNewNoteBody(e.target.value)}
                    className="w-full h-32 bg-black border border-slate-800 rounded p-2 text-xs font-mono text-white outline-none focus:border-brand-gold resize-y"
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button type="submit" className="px-4 py-2 bg-brand-gold text-black font-mono font-bold text-xs rounded uppercase hover:bg-brand-gold-glow cursor-pointer">
                    Commit Note Box &rarr;
                  </button>
                </div>
              </form>
            )}

            {/* Notes collection grid */}
            {filteredNotes.length === 0 ? (
              <div className="text-center py-20 bg-black/30 border border-slate-900 rounded-2xl">
                <p className="font-mono text-sm text-slate-500">No semiconductor notes found in vault matching your query.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredNotes.map((note) => (
                  <div key={note.id} className="p-5 rounded-2xl bg-[#0e0e0e] border border-brand-gold/15 hover:border-brand-gold/30 transition-all flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-brand-gold/10 text-brand-gold font-black border border-brand-gold/15 uppercase">
                          {note.category}
                        </span>
                        <span className="font-mono text-[9px] text-slate-500 font-bold">{note.date}</span>
                      </div>
                      
                      {selectedNoteToEdit?.id === note.id ? (
                        <div className="space-y-2">
                          <input
                            type="text"
                            value={selectedNoteToEdit.title}
                            onChange={(e) => setSelectedNoteToEdit({ ...selectedNoteToEdit, title: e.target.value })}
                            className="w-full bg-black border border-slate-800 rounded p-1 text-xs font-mono text-white outline-none"
                          />
                          <textarea
                            value={selectedNoteToEdit.body}
                            onChange={(e) => setSelectedNoteToEdit({ ...selectedNoteToEdit, body: e.target.value })}
                            className="w-full h-24 bg-black border border-slate-800 rounded p-1 text-xs font-mono text-white outline-none"
                          />
                          <div className="flex gap-2 justify-end">
                            <button onClick={() => setSelectedNoteToEdit(null)} className="px-2 py-1 text-[10px] uppercase font-mono text-white hover:bg-slate-900">Cancel</button>
                            <button onClick={handleUpdateNote} className="px-2 py-1 text-[10px] uppercase font-mono bg-brand-gold text-black rounded font-bold">Save</button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2 text-left">
                          <h4 className="font-mono text-sm font-bold text-white uppercase tracking-wide leading-tight">{note.title}</h4>
                          <p className="font-sans text-xs text-slate-400 whitespace-pre-line leading-relaxed font-light">{note.body}</p>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-end items-center gap-3 pt-3 border-t border-slate-900/60 text-slate-500">
                      <button 
                        onClick={() => setSelectedNoteToEdit(note)} 
                        className="hover:text-brand-gold rounded transition-colors text-xs font-mono mr-auto flex items-center space-x-1 cursor-pointer"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span className="text-[10px]">EDIT DOCUMENT</span>
                      </button>
                      <button onClick={() => handleDeleteNote(note.id)} className="hover:text-[#C1121F] cursor-pointer">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ==================== 5. PROGRESS & ACHIEVEMENTS SYSTEM ==================== */}
        {activeTab === "progress" && (
          <div className="space-y-8 animate-fadeIn text-center max-w-4xl mx-auto">
            
            <div className="text-center space-y-2 border-b border-slate-900 pb-6">
              <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-brand-gold">
                Holographic Credentials & Badges Achievement Module
              </h3>
              <p className="font-sans text-xs text-slate-400 max-w-xl mx-auto">
                Badges automatically unlock when relative hardware tracks milestones are successfully checked at 100%.
              </p>
            </div>

            {/* Badger boxes list layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              
              {/* Badge 1: linux warrior */}
              <div className={`p-6 rounded-2xl border text-center transition-all duration-500 flex flex-col items-center space-y-4 relative overflow-hidden ${
                isLinuxUnlocked 
                  ? "bg-brand-gold/5 border-brand-gold/30 shadow-[0_0_20px_rgba(214,175,55,0.12)]" 
                  : "bg-slate-950/40 border-slate-900 opacity-50"
              }`}>
                {isLinuxUnlocked && <span className="absolute top-2 right-2 text-[8px] bg-brand-gold text-black rounded px-1.5 py-0.5 uppercase tracking-widest font-black">UNLOCKED</span>}
                <div className={`p-4 rounded-full flex items-center justify-center transition-colors ${isLinuxUnlocked ? "bg-brand-gold/20 text-brand-gold" : "bg-slate-900 text-slate-600"}`}>
                  <Terminal className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-mono text-sm font-black text-white uppercase tracking-wider">Linux Warrior Badge</h4>
                  <p className="font-sans text-xs text-slate-400 mt-1 font-light">Achieved by dragging Linux readiness track completing slider to 100%.</p>
                </div>
              </div>

              {/* Badge 2: verilog master */}
              <div className={`p-6 rounded-2xl border text-center transition-all duration-500 flex flex-col items-center space-y-4 relative overflow-hidden ${
                isVerilogUnlocked 
                  ? "bg-brand-gold/5 border-brand-gold/30 shadow-[0_0_20px_rgba(214,175,55,0.12)]" 
                  : "bg-slate-950/40 border-slate-900 opacity-50"
              }`}>
                {isVerilogUnlocked && <span className="absolute top-2 right-2 text-[8px] bg-brand-gold text-black rounded px-1.5 py-0.5 uppercase tracking-widest font-black">UNLOCKED</span>}
                <div className={`p-4 rounded-full flex items-center justify-center transition-colors ${isVerilogUnlocked ? "bg-brand-gold/20 text-brand-gold" : "bg-slate-900 text-slate-600"}`}>
                  <FileCode className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-mono text-sm font-black text-white uppercase tracking-wider">Verilog Master Badge</h4>
                  <p className="font-sans text-xs text-slate-400 mt-1 font-light">Achieved by dragging Verilog readiness track structural slider to 100%.</p>
                </div>
              </div>

              {/* Badge 3: riscv explorer */}
              <div className={`p-6 rounded-2xl border text-center transition-all duration-500 flex flex-col items-center space-y-4 relative overflow-hidden ${
                isRiscvUnlocked 
                  ? "bg-brand-gold/5 border-brand-gold/30 shadow-[0_0_20px_rgba(214,175,55,0.12)]" 
                  : "bg-slate-950/40 border-slate-900 opacity-50"
              }`}>
                {isRiscvUnlocked && <span className="absolute top-2 right-2 text-[8px] bg-brand-gold text-black rounded px-1.5 py-0.5 uppercase tracking-widest font-black">UNLOCKED</span>}
                <div className={`p-4 rounded-full flex items-center justify-center transition-colors ${isRiscvUnlocked ? "bg-brand-gold/20 text-brand-gold" : "bg-slate-900 text-slate-600"}`}>
                  <Cpu className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-mono text-sm font-black text-white uppercase tracking-wider">RISC-V Explorer Badge</h4>
                  <p className="font-sans text-xs text-slate-400 mt-1 font-light">Achieved by dragging RISC-V ISA core structural slider to 100%.</p>
                </div>
              </div>

              {/* Badge 4: fpga builder */}
              <div className={`p-6 rounded-2xl border text-center transition-all duration-500 flex flex-col items-center space-y-4 relative overflow-hidden ${
                isFpgaUnlocked 
                  ? "bg-brand-gold/5 border-brand-gold/30 shadow-[0_0_20px_rgba(214,175,55,0.12)]" 
                  : "bg-slate-950/40 border-slate-900 opacity-50"
              }`}>
                {isFpgaUnlocked && <span className="absolute top-2 right-2 text-[8px] bg-brand-gold text-black rounded px-1.5 py-0.5 uppercase tracking-widest font-black">UNLOCKED</span>}
                <div className={`p-4 rounded-full flex items-center justify-center transition-colors ${isFpgaUnlocked ? "bg-brand-gold/20 text-brand-gold" : "bg-slate-900 text-slate-600"}`}>
                  <Layers className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-mono text-sm font-black text-white uppercase tracking-wider">FPGA Prototyper Badge</h4>
                  <p className="font-sans text-xs text-slate-400 mt-1 font-light">Achieved by scoring over 50% timing marks inside STA & Verification sliders.</p>
                </div>
              </div>

              {/* Badge 5: interview ready */}
              <div className={`p-6 rounded-2xl border text-center transition-all duration-500 flex flex-col items-center space-y-4 relative overflow-hidden ${
                isInterviewReady 
                  ? "bg-brand-gold/5 border-brand-gold/30 shadow-[0_0_20px_rgba(214,175,55,0.12)]" 
                  : "bg-slate-950/40 border-slate-900 opacity-50"
              }`}>
                {isInterviewReady && <span className="absolute top-2 right-2 text-[8px] bg-brand-gold text-black rounded px-1.5 py-0.5 uppercase tracking-widest font-black">UNLOCKED</span>}
                <div className={`p-4 rounded-full flex items-center justify-center transition-colors ${isInterviewReady ? "bg-brand-gold/20 text-brand-gold" : "bg-slate-900 text-slate-600"}`}>
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-mono text-sm font-black text-white uppercase tracking-wider">Silicon Recruited Badge</h4>
                  <p className="font-sans text-xs text-slate-400 mt-1 font-light">Achieved by checking off at least three critical technical interview queries.</p>
                </div>
              </div>
            </div>

            {/* Achievement overview summary analytics card */}
            <div className="p-6 bg-[#0e0e0e] border border-brand-gold/15 rounded-xl text-left space-y-4 max-w-2xl mx-auto">
              <h4 className="font-mono text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold-glow uppercase flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-brand-gold" />
                <span>Nazmie Nasir GSEP Milestone Summary</span>
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-black rounded-lg border border-slate-900">
                  <p className="text-[10px] font-mono text-slate-500 uppercase">Tasks Solved</p>
                  <p className="text-xl font-bold font-mono text-white mt-1">{tasks.filter(t => t.completed).length} / {tasks.length}</p>
                </div>
                <div className="p-3 bg-black rounded-lg border border-slate-900">
                  <p className="text-[10px] font-mono text-slate-500 uppercase">Nodes Synced</p>
                  <p className="text-xl font-bold font-mono text-white mt-1">{completedNodes.length} / {knowledgeNodes.length}</p>
                </div>
                <div className="p-3 bg-black rounded-lg border border-slate-900">
                  <p className="text-[10px] font-mono text-slate-500 uppercase">Interactive Notes</p>
                  <p className="text-xl font-bold font-mono text-white mt-1">{userNotes.length}</p>
                </div>
                <div className="p-3 bg-black rounded-lg border border-slate-900">
                  <p className="text-[10px] font-mono text-slate-500 uppercase">Badges Earned</p>
                  <p className="text-xl font-bold font-mono text-brand-gold mt-1">
                    {[isLinuxUnlocked, isVerilogUnlocked, isRiscvUnlocked, isFpgaUnlocked, isInterviewReady].filter(Boolean).length} / 5
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* FLOAT BOTTOM DOCK MOCK-UP (FIXED ON VIEWPORT ON MOBILE) */}
      <div className="fixed sm:absolute bottom-4 left-1/2 -translate-x-1/2 max-w-[340px] z-50 bg-[#0d0d0d]/95 backdrop-blur-md rounded-full px-5 py-2.5 border border-brand-gold/30 shadow-2xl flex justify-between items-center space-x-4">
        <button
          onClick={() => { setActiveTab("dashboard"); window.scrollTo({ top: document.getElementById("mission-control-dashboard")?.offsetTop ?? 0, behavior: "smooth" }); }}
          className={`p-2 rounded-full transition-all cursor-pointer ${activeTab === "dashboard" ? "bg-brand-gold text-black font-black" : "text-slate-450 text-slate-400 hover:text-brand-gold hover:bg-slate-900"}`}
          title="Command Panel"
        >
          <Home className="w-4.5 h-4.5" />
        </button>
        <button
          onClick={() => { setActiveTab("calendar"); window.scrollTo({ top: document.getElementById("mission-control-dashboard")?.offsetTop ?? 0, behavior: "smooth" }); }}
          className={`p-2 rounded-full transition-all cursor-pointer ${activeTab === "calendar" ? "bg-brand-gold text-black font-black" : "text-slate-450 text-slate-400 hover:text-brand-gold hover:bg-slate-900"}`}
          title="Interactive Timetables"
        >
          <CalendarIcon className="w-4.5 h-4.5" />
        </button>
        <button
          onClick={() => { setActiveTab("learning"); window.scrollTo({ top: document.getElementById("mission-control-dashboard")?.offsetTop ?? 0, behavior: "smooth" }); }}
          className={`p-2 rounded-full transition-all cursor-pointer ${activeTab === "learning" ? "bg-brand-gold text-black font-black" : "text-slate-450 text-slate-400 hover:text-brand-gold hover:bg-slate-900"}`}
          title="Module Sliders"
        >
          <BookOpen className="w-4.5 h-4.5" />
        </button>
        <button
          onClick={() => { setActiveTab("notes"); window.scrollTo({ top: document.getElementById("mission-control-dashboard")?.offsetTop ?? 0, behavior: "smooth" }); }}
          className={`p-2 rounded-full transition-all cursor-pointer ${activeTab === "notes" ? "bg-brand-gold text-black font-black" : "text-slate-450 text-slate-400 hover:text-brand-gold hover:bg-slate-900"}`}
          title="Notes Vault Search"
        >
          <FileText className="w-4.5 h-4.5" />
        </button>
        <button
          onClick={() => { setActiveTab("progress"); window.scrollTo({ top: document.getElementById("mission-control-dashboard")?.offsetTop ?? 0, behavior: "smooth" }); }}
          className={`p-2 rounded-full transition-all cursor-pointer ${activeTab === "progress" ? "bg-brand-gold text-black font-black" : "text-slate-450 text-slate-400 hover:text-brand-gold hover:bg-slate-900"}`}
          title="Credential achievements"
        >
          <Award className="w-4.5 h-4.5" />
        </button>
      </div>

    </section>
  );
}

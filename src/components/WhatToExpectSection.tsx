import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Clock, Sun, Coffee, Cpu, Users, BookOpen, 
  ChevronRight, Sparkles, Award
} from "lucide-react";
import { Language, translations } from "../lib/translations";

interface TimelineEvent {
  id: string;
  time: string;
  phase: "morning" | "afternoon" | "evening";
  title: string;
  desc: string;
  emoji: string;
  details: string;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "evt-breakfast",
    time: "07:30 AM",
    phase: "morning",
    title: "Morning Fuel & Coffee",
    desc: "Aromatic South Indian buffet at Himalaya mess complex, centering steaming idlis, coconut chutney, and piping-hot tea.",
    emoji: "☕",
    details: "Meet your companion fellows in the dining deck and discuss logic gate optimizations before entering morning lectures."
  },
  {
    id: "evt-classes",
    time: "09:00 AM",
    phase: "morning",
    title: "Advanced CPU Architecture Lectures",
    desc: "Intimate and intensive theory instruction on RISC-V pipelined registers, bypassing networks, and memory alignment bounds.",
    emoji: "🏫",
    details: "Led by elite academic faculties who guide the SHAKTI core operations. Learn direct board specs and ISA register instructions."
  },
  {
    id: "evt-labs",
    time: "02:00 PM",
    phase: "afternoon",
    title: "Semiconductor Compiler & HDL Labs",
    desc: "Take command of physical workstations executing FPGA synthesis, Verilog debugging files, and timing delay analysis.",
    emoji: "💻",
    details: "Your ideas transform directly into electrical circuit tracks. Simulate logic maps using Vivado and inspect trace files on GTKWave."
  },
  {
    id: "evt-training",
    time: "04:30 PM",
    phase: "afternoon",
    title: "Hands-on Pipeline Diagnostics",
    desc: "Dynamic group code reviews, custom instruction sets testing runs, and cooperative debugging sessions.",
    emoji: "🛠",
    details: "Collaborate across teams to fix pipeline structural hazards. Instructors walk through the lab grids offering custom mentoring."
  },
  {
    id: "evt-study",
    time: "07:30 PM",
    phase: "evening",
    title: "Self-Guided Syntheses Drills",
    desc: "Diverge into individual research projects, study Assembly code structures, and compile hardware logs.",
    emoji: "📚",
    details: "Perfect time to wrap up pending lab challenges, read reference architectural specs, and prep for upcoming project presentation rounds."
  },
  {
    id: "evt-networking",
    time: "09:00 PM",
    phase: "evening",
    title: "Forestry Strolls & Campus Networking",
    desc: "Decompress with GSEP colleagues walking along shaded forestry walkways under active streetlamp rows.",
    emoji: "🤝",
    details: "Discuss microelectronics startups, exchange international ideas, and grab a late night cup of traditional Madras filter coffee."
  }
];

export default function WhatToExpectSection({ lang }: { lang: Language }) {
  const t = translations[lang];
  const [selectedEventId, setSelectedEventId] = useState<string>("evt-labs");

  const activeEvent = TIMELINE_EVENTS.find((e) => e.id === selectedEventId) || TIMELINE_EVENTS[0];

  return (
    <section id="daily-timeline" className="py-32 bg-[#0F172A] relative overflow-hidden text-left">
      {/* Visual background lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96B]/15 to-transparent" />
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-brand-blue-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section title heads */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-[10px] tracking-[0.25em] font-bold text-brand-gold uppercase block">
            RESIDENCY AGENDA // HOURLY HUD
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none">
            A Day in the Life <span className="text-brand-gold">of GSEP</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-blue-accent mx-auto mt-4 rounded-full" />
          <p className="font-sans text-[15px] sm:text-base text-slate-300 leading-relaxed font-light">
            Take a comprehensive run through the standard daily schedule as an elite Malaysian government fellow inside India's premier academic hardware hub.
          </p>
        </div>

        {/* TIMELINE VIEW GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* LHS: Timeline Nodes Tree */}
          <div className="lg:col-span- così lg:col-span-7 bg-[#1E293B] border border-white/5 rounded-3xl p-8 shadow-2xl relative">
            
            {/* Core Vertical Timeline Line */}
            <div className="absolute left-10 sm:left-12 top-10 bottom-10 w-[2px] bg-gradient-to-b from-[#C8A96B] via-[#3B82F6] to-zinc-800" />

            <div className="space-y-8">
              {TIMELINE_EVENTS.map((evt) => {
                const isSelected = selectedEventId === evt.id;
                
                return (
                  <div
                    key={evt.id}
                    onClick={() => setSelectedEventId(evt.id)}
                    className="relative flex items-center space-x-6 pl-12 sm:pl-16 cursor-pointer group"
                  >
                    {/* Glowing Circular pointer */}
                    <div className={`absolute left-4 sm:left-6 -translate-x-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10 ${
                      isSelected
                        ? "bg-brand-gold border-brand-gold text-black scale-110 shadow-[0_0_15px_rgba(200,169,107,0.4)]"
                        : "bg-[#0F172A] border-zinc-800 text-slate-500 group-hover:border-brand-gold"
                    }`}>
                      <span className="text-xs font-bold leading-none">{evt.emoji}</span>
                    </div>

                    {/* Timeline card row detail */}
                    <div className={`flex-1 p-4 rounded-2xl border transition-all duration-300 ${
                      isSelected
                        ? "bg-[#0F172A] border-brand-gold/30 shadow-lg"
                        : "bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/5"
                    }`}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="font-mono text-xs text-brand-gold font-bold">
                          {evt.time}
                        </span>
                        <span className={`font-mono text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full inline-block self-start sm:self-center ${
                          evt.phase === "morning"
                            ? "bg-amber-400/10 text-amber-500 border border-amber-500/20"
                            : evt.phase === "afternoon"
                            ? "bg-[#3B82F6]/10 text-brand-blue-accent border border-[#3B82F6]/20"
                            : "bg-purple-400/10 text-purple-400 border border-purple-400/20"
                        }`}>
                          {evt.phase}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-white uppercase tracking-wide mt-1.5 group-hover:text-brand-gold transition-colors">
                        {evt.title}
                      </h4>
                      <p className="font-sans text-xs text-slate-400 font-light mt-1.5 leading-relaxed">
                        {evt.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* RHS: Event details Card info display */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/5 rounded-3xl p-8 shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
                <span className="font-mono text-[10px] text-brand-gold font-bold uppercase tracking-wider">
                  ACTIVE HUD INSPECTOR
                </span>
                <span className="font-mono text-[10px] text-slate-400">
                  SYSTEM TIME: 2026
                </span>
              </div>

              <div className="space-y-4 pt-2">
                <div className="w-16 h-16 rounded-2xl bg-[#1E293B] border border-white/10 flex items-center justify-center text-3xl shadow-xl select-none">
                  {activeEvent.emoji}
                </div>
                
                <div className="space-y-1">
                  <span className="font-mono text-xs text-[#3B82F6] font-bold block uppercase tracking-wider">
                    {activeEvent.time}
                  </span>
                  <h3 className="font-display font-semibold text-xl sm:text-2xl text-white uppercase tracking-tight leading-none">
                    {activeEvent.title}
                  </h3>
                </div>

                <p className="font-sans text-sm text-[#CBD5E1] font-light leading-relaxed">
                  {activeEvent.desc}
                </p>

                <div className="p-5 rounded-2xl bg-[#0F172A] border border-white/5 space-y-2 text-left">
                  <span className="font-mono text-[9px] text-[#C8A96B] font-bold block uppercase tracking-widest pl-0.5">
                    Operational Checklist Detail
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {activeEvent.details}
                  </p>
                </div>
              </div>
            </div>

            {/* Micro-credential status visual box */}
            <div className="flex items-center space-x-3 bg-brand-gold/15 p-4 rounded-2xl border border-brand-gold/30">
              <Award className="w-5 h-5 text-brand-gold flex-shrink-0 animate-pulse" />
              <div className="text-left">
                <span className="font-mono text-[9px] text-white font-bold block uppercase">Weekly Academic Track</span>
                <span className="font-sans text-[11px] text-[#F8FAFC] font-light">Completing core diagnostic drills awards Nazmie 15XP daily.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

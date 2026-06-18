import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WEEKLY_TIMELINE } from "../data/programmeData";
import { 
  Plane, Cpu, Layers, Award, Terminal, Binary, CheckCircle2, 
  Sparkles, Calendar, Clock, ChevronRight, ChevronDown, Trophy, 
  MapPin, ShieldAlert, Users, Award as TrophyIcon, ArrowRight
} from "lucide-react";

export default function JourneySection() {
  const [activeIdx, setActiveIdx] = useState(1); // Default to Week 1 to look instantly technical and impressive!
  const [expandedDays, setExpandedDays] = useState<Record<string, boolean>>({
    "week-0-Day 0": true,
    "week-1-Day 1": true,
    "week-2-Day 7": true,
    "week-3-Day 11": true,
    "week-4-Day 16": true,
    "week-5-Day 21": true,
  });

  const toggleDay = (weekId: string, dayLabel: string) => {
    const key = `${weekId}-${dayLabel}`;
    setExpandedDays(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getWeekIcon = (iconName: string) => {
    switch (iconName) {
      case "Plane":
        return <Plane className="w-5 h-5 text-brand-gold" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-brand-gold-glow" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-brand-red-highlight" />;
      case "Binary":
        return <Binary className="w-5 h-5 text-brand-gold" />;
      case "Award":
        return <Award className="w-5 h-5 text-brand-gold-glow" />;
      default:
        return <Terminal className="w-5 h-5 text-zinc-400" />;
    }
  };

  const activeWeek = WEEKLY_TIMELINE[activeIdx];

  return (
    <section id="journey" className="py-24 bg-[#050505] relative overflow-hidden">
      
      {/* Decorative luxury vector lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent" />
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-brand-red-deep/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[0.25em] font-bold text-brand-red-highlight uppercase"
          >
            Chronological Silicon Pipeline
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl sm:text-5xl font-black text-white mt-3 uppercase tracking-tight"
          >
            Interactive Timetable
          </motion.h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto mt-4 rounded-full" />
          <p className="font-sans text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed font-light">
            Skip the spreadsheet. Command our luxury timeline dashboard. Switch stages on the left to reveal absolute hour-by-hour program specifications, lab assignments, and direct enterprise recruiter interviews.
          </p>
        </div>

        {/* PRIMARY TIMETABLE STRUCTURE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: INTERACTIVE WEEK NAVIGATOR (GOLD NAVIGATION CARDS) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-mono text-[10px] tracking-widest text-zinc-550 text-zinc-400 font-bold uppercase mb-4 px-1">
              SELECT PROGRAMME PHASE
            </h3>

            <div className="space-y-3">
              {WEEKLY_TIMELINE.map((week, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <motion.button
                    key={week.id}
                    onClick={() => setActiveIdx(idx)}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.995 }}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-300 relative overflow-hidden flex items-start space-x-4 cursor-pointer ${
                      isActive
                        ? "bg-[#0d0d0d] border-brand-gold shadow-[0_0_25px_rgba(212,175,55,0.22)]"
                        : "bg-[#050505] border-zinc-900 hover:border-brand-gold/30 hover:bg-[#0d0d0d]/40"
                    }`}
                  >
                    {/* Active Golden left indicator line */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-gold" />
                    )}

                    {/* Week phase icon */}
                    <div className={`p-3 rounded-lg border flex-shrink-0 transition-all ${
                      isActive 
                        ? "bg-[#050505] border-brand-gold/50 text-brand-gold-glow" 
                        : "bg-zinc-950/80 border-zinc-800 text-zinc-500"
                    }`}>
                      {getWeekIcon(week.iconName)}
                    </div>

                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between">
                        <span className={`font-mono text-[10px] font-bold tracking-widest uppercase ${isActive ? "text-brand-gold-glow" : "text-zinc-550 text-zinc-400"}`}>
                          {week.week}
                        </span>
                        <span className="font-mono text-[9px] text-zinc-500 whitespace-nowrap">
                          {week.dates.split(" ")[0] === "1/7/2026" ? "01 Jul" : week.dates}
                        </span>
                      </div>
                      <h4 className={`font-display font-bold text-xs sm:text-sm mt-1.5 truncate ${isActive ? "text-white" : "text-zinc-300"}`}>
                        {week.title}
                      </h4>
                      <p className="font-sans text-[10px] text-zinc-500 mt-1 truncate font-light">
                        {week.subtitle}
                      </p>
                    </div>

                    <ArrowRight className={`w-4 h-4 self-center transition-all ${isActive ? "text-brand-gold translate-x-0.5" : "text-zinc-800 opacity-0 group-hover:opacity-100"}`} />
                  </motion.button>
                );
              })}
            </div>

            {/* Global Warning indicator info card */}
            <div className="p-5 rounded-xl bg-zinc-950 border border-brand-gold/10 flex items-start space-x-3 text-left">
              <ShieldAlert className="w-5 h-5 text-brand-red-highlight flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-mono text-[10px] text-brand-gold font-bold tracking-widest uppercase mb-1">
                  OFFICIAL SYSTEM STATE
                </h5>
                <p className="font-sans text-[11px] text-zinc-400 leading-normal font-light">
                  All training days include lunch buffers, local project signoffs, and high speed circuit routing validations. No spreadsheet tools allowed.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: BEAUTIFUL TIMELINE DETAIL PANEL */}
          <div className="lg:col-span-8 bg-[#0d0d0d] border border-brand-gold/15 rounded-2xl p-6 sm:p-8 shadow-xl relative min-h-[500px]">
            
            {/* Silicon Board Circuit trace decorations embedded on right side */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none border-t border-r border-brand-gold rounded-tr-2xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 pointer-events-none border-b border-r border-brand-red-highlight rounded-br-2xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeWeek.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                
                {/* Week Heading header block */}
                <div className="border-b border-zinc-900 pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-y-3">
                    <div className="inline-flex items-center space-x-2.5 px-3 py-1 bg-[#050505] border border-brand-gold/15 rounded-lg text-brand-gold font-mono text-xs font-bold uppercase tracking-widest">
                      {getWeekIcon(activeWeek.iconName)}
                      <span>{activeWeek.week} DETAILED SYLLABUS</span>
                    </div>
                    <span className="font-mono text-xs text-brand-red-highlight font-bold tracking-widest bg-brand-red-deep/15 px-3 py-1 rounded border border-brand-red-highlight/20">
                      {activeWeek.dates}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-4 tracking-tight">
                    {activeWeek.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-2 font-light leading-relaxed">
                    {activeWeek.subtitle}
                  </p>
                </div>

                {/* Week highlighted badge/alerts */}
                {activeWeek.highlight && (
                  <div className="p-4 rounded-xl bg-brand-red-deep/10 border border-brand-red-highlight/30 text-white flex items-start space-x-3 animate-pulse">
                    <Sparkles className="w-4 h-4 text-brand-gold-glow flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-[9px] tracking-[0.2em] font-black text-brand-gold-glow block mb-1 uppercase">
                        CRITICAL RECRUITMENT MILESTONE
                      </span>
                      <p className="font-sans text-xs font-semibold leading-relaxed">
                        {activeWeek.highlight}
                      </p>
                    </div>
                  </div>
                )}

                {/* Circuit board graphic note for Week 2 */}
                {activeWeek.id === "week-2" && (
                  <div className="p-4 rounded-xl border border-brand-gold/10 bg-black/40 flex flex-col space-y-2 text-left relative overflow-hidden">
                    <div className="absolute top-[-50px] right-[-55px] w-24 h-24 bg-brand-gold/15 rounded-full blur-xl pointer-events-none" />
                    <div className="flex items-center space-x-2.5 text-brand-gold">
                      <Cpu className="w-4 h-4 text-brand-gold-glow animate-spin-slow" />
                      <span className="font-mono text-[10px] tracking-widest font-black uppercase">AXI4 CORE REGISTER PROBING MAP</span>
                    </div>
                    {/* SVG Graphic micro trace schematics */}
                    <div className="relative h-12 w-full border border-zinc-800/80 rounded bg-[#050505] overflow-hidden p-2 flex items-center justify-between">
                      <div className="h-full w-2/5 border-r border-[#151515] flex flex-col justify-center">
                        <span className="text-[7px] font-mono text-zinc-550 text-zinc-500">BUS ENGINES: SLAVE0_AXI4</span>
                        <div className="w-11/12 h-1.5 bg-brand-red-deep/30 rounded mt-0.5 overflow-hidden">
                          <div className="h-full w-4/5 bg-brand-red-highlight animate-pulse" />
                        </div>
                      </div>
                      <div className="flex-1 flex justify-around items-center px-4">
                        <div className="w-2 h-2 rounded-full bg-brand-gold-glow animate-ping" />
                        <div className="h-[2px] bg-brand-gold/30 flex-1 mx-2" />
                        <div className="w-3.5 h-3.5 border border-brand-gold flex items-center justify-center text-[6px] font-mono text-white">TX</div>
                        <div className="h-[2px] bg-brand-red-highlight/30 flex-1 mx-2" />
                        <div className="w-2 h-2 rounded-full bg-brand-red-highlight animate-pulse" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Week 5 dramatic trophy showcase */}
                {activeWeek.id === "week-5" && (
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-red-deep/20 via-black to-[#050505] border-2 border-brand-gold/30 shadow-[0_4px_30px_rgba(212,175,55,0.15)] relative overflow-hidden">
                    <div className="absolute right-4 top-4 text-brand-gold pointer-events-none">
                      <Trophy className="w-12 h-12 text-brand-gold-glow animate-bounce" />
                    </div>
                    <div className="space-y-2 max-w-[80%]">
                      <div className="inline-flex items-center space-x-2 text-brand-gold-glow">
                        <TrophyIcon className="w-5 h-5 text-brand-gold glow" />
                        <h4 className="font-display font-extrabold text-sm tracking-wider uppercase">
                          {activeWeek.finalEvent}
                        </h4>
                      </div>
                      <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                        {activeWeek.description}
                      </p>
                      <div className="flex items-center space-x-2 pt-2">
                        <span className="font-mono text-[9px] text-[#050505] font-black bg-brand-gold px-2.5 py-1 rounded">
                          GRAND EVALUATION
                        </span>
                        <span className="font-mono text-[9px] text-white font-bold tracking-widest uppercase border border-brand-red-highlight/40 px-2 py-0.5 rounded">
                          TROPHIES & REAL RTL TESTING BUFFS
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* DAY ACCORDIONS */}
                <div className="space-y-4">
                  {activeWeek.days?.map((day) => {
                    const isExpanded = expandedDays[`${activeWeek.id}-${day.dayLabel}`];
                    return (
                      <div 
                        key={day.dayLabel} 
                        className="rounded-xl border border-zinc-900/80 bg-[#050505]/60 overflow-hidden"
                      >
                        
                        {/* Day Accordion Header */}
                        <button
                          onClick={() => toggleDay(activeWeek.id, day.dayLabel)}
                          className="w-full p-4 flex items-center justify-between text-left hover:bg-zinc-950/80 transition-colors"
                        >
                          <div className="flex items-center space-x-4 min-w-0">
                            {/* Day Register Circle */}
                            <div className="w-10 h-10 rounded-lg bg-[#0d0d0d] border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                              <span className="font-mono text-xs font-black text-brand-gold-glow">
                                {day.dayLabel.replace("Day ", "D")}
                              </span>
                            </div>

                            <div className="min-w-0">
                              <div className="flex items-center space-x-2 flex-wrap">
                                <span className="font-mono text-[10px] tracking-widest text-[#D4AF37] font-bold">
                                  {day.date}
                                </span>
                                {day.dayLabel === "Day 9" && (
                                  <span className="text-[8px] font-mono bg-brand-gold/15 text-brand-gold border border-brand-gold/20 px-1 rounded uppercase">
                                    SOFT SKILLS
                                  </span>
                                )}
                              </div>
                              <h4 className="font-display font-bold text-xs sm:text-sm text-white mt-1 truncate">
                                {day.title}
                              </h4>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            {isExpanded ? (
                              <ChevronDown className="w-4 h-4 text-brand-gold" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-zinc-500" />
                            )}
                          </div>
                        </button>

                        {/* Day Activities expanded content */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="border-t border-zinc-950 bg-[#0d0d0d]/40"
                            >
                              <div className="p-4 sm:p-5 space-y-4">
                                {day.items?.map((item, iIdx) => (
                                  <div 
                                    key={iIdx} 
                                    className={`p-4 rounded-lg border flex flex-col sm:flex-row justify-between items-start gap-3 transition-colors ${
                                      item.isInterview 
                                        ? "bg-brand-red-deep/12 border-brand-red-highlight/25 text-white shadow-[0_0_12px_rgba(193,18,31,0.1)]"
                                        : item.isSoftSkill 
                                        ? "bg-brand-gold/5 border-brand-gold/20"
                                        : "bg-[#050505]/40 border-zinc-900 hover:border-[#D4AF37]/15"
                                    }`}
                                  >
                                    <div className="space-y-1.5 flex-1 text-left">
                                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                                        <div className="flex items-center space-x-1.5 text-zinc-405 text-zinc-400">
                                          <Clock className="w-3.5 h-3.5 text-brand-gold-glow" />
                                          <span className="font-mono text-[10px] font-semibold text-zinc-300">
                                            {item.time}
                                          </span>
                                        </div>

                                        {item.duration && (
                                          <span className="font-mono text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">
                                            {item.duration}
                                          </span>
                                        )}

                                        {item.company && (
                                          <span className="font-mono text-[10px] font-bold text-white bg-brand-gold-glow/15 px-1.5 py-0.5 rounded border border-brand-gold-glow/20 uppercase">
                                            {item.company}
                                          </span>
                                        )}

                                        {/* Dynamic badges requested */}
                                        {item.isInterview && (
                                          <span className="font-mono text-[9px] font-bold tracking-widest text-[#ffffff] bg-brand-red-highlight px-2 py-0.5 rounded-full animate-pulse border border-brand-red-highlight uppercase">
                                            Interview Badge
                                          </span>
                                        )}
                                      </div>

                                      <h5 className="font-display font-bold text-xs sm:text-sm text-white">
                                        {item.title}
                                      </h5>
                                      <p className="font-sans text-xs text-zinc-400 leading-relaxed font-light">
                                        {item.description}
                                      </p>
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

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

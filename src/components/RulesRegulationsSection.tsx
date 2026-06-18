import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building, Clock, ShieldAlert, Briefcase, Wifi, Users, 
  HelpCircle, Sparkles, X, CheckCircle 
} from "lucide-react";
import { Language, translations } from "../lib/translations";

interface RulesCard {
  id: string;
  label: string;
  icon: ReactNode;
  emoji: string;
  outline: string;
  color: string;
  title: string;
  detail: string;
  specs: string[];
}

export default function RulesRegulationsSection({ lang }: { lang: Language }) {
  const t = translations[lang];
  const [selectedRuleId, setSelectedRuleId] = useState<string | null>(null);

  const rules: RulesCard[] = [
    {
      id: "rule-attendance",
      label: "Classroom Attendance",
      icon: <Building className="w-6 h-6" />,
      emoji: "🏫",
      outline: "border-amber-500/10 hover:border-amber-500/30",
      color: "text-amber-400 bg-amber-400/5",
      title: "95% Mandatory Lecture & Lab Cohort Threshold",
      detail: "Daily biometric logging and physical signatures are mandatory for both theoretical classrooms and semiconductor FPGA compilation labs.",
      specs: [
        "Biometric attendance registries are updated daily.",
        "Excused leaves must contain certified medical/academic clearances.",
        "Missing lectures without coordinator clearance triggers a status review."
      ]
    },
    {
      id: "rule-curfew",
      label: "Campus Curfew Hours",
      icon: <Clock className="w-6 h-6" />,
      emoji: "🕙",
      outline: "border-indigo-500/10 hover:border-indigo-500/30",
      color: "text-indigo-400 bg-indigo-400/5",
      title: "10:00 PM Residential Dormitory Checkpoint",
      detail: "Campus residential complexes operate strict safety gate locks at 10:00 PM nightly to guarantee maximum comfort and study focus on-site.",
      specs: [
        "Residential gates are locked exactly at 22:00 IST.",
        "Late entries require signed digital clearance from supervisors.",
        "Security checkpoints audit incoming student identity badges."
      ]
    },
    {
      id: "rule-restricted",
      label: "Prohibited & Restricted Items",
      icon: <ShieldAlert className="w-6 h-6" />,
      emoji: "🚫",
      outline: "border-rose-500/10 hover:border-rose-500/30",
      color: "text-rose-400 bg-rose-400/5",
      title: "Zero-Tolerance Prohibition of Controlled Substances",
      detail: "IIT Madras enforces an absolute drug and alcohol-free policy. Bringing non-permitted substances inside the parameter results in instant ASEM federation dismissal.",
      specs: [
        "No alcohol or banned toxic compounds inside campus.",
        "Flammable materials or physical hazard tools are forbidden.",
        "Inspections are held at random intervals to secure safety."
      ]
    },
    {
      id: "rule-travel",
      label: "Interstate Travel Rules",
      icon: <Briefcase className="w-6 h-6" />,
      emoji: "🧳",
      outline: "border-emerald-500/10 hover:border-emerald-500/30",
      color: "text-emerald-400 bg-emerald-400/5",
      title: "Pre-Authorized Weekend Excursions Protocol",
      detail: "Leaving Chennai limits or planning overnight trips requires structured coordination with ASEM coordinators and physical letter submission beforehand.",
      specs: [
        "Submit travel plans 48 hours prior to coordinator desk.",
        "Emergency contact coordinates must remain active throughout transit.",
        "Must verify timely weekend returns before Monday 09:00 AM."
      ]
    },
    {
      id: "rule-internet",
      label: "University Network Guidelines",
      icon: <Wifi className="w-6 h-6" />,
      emoji: "📶",
      outline: "border-cyan-500/10 hover:border-cyan-500/30",
      color: "text-cyan-400 bg-cyan-400/5",
      title: "Secure Academic Network Compliance Standards",
      detail: "Campus high-speed fiber internet is allocated strictly for FPGA synthesis routing scripts, compiler downloads, and academic research.",
      specs: [
        "Network activities are monitored for cybersecurity flags.",
        "Avoid heavy media steaming or unauthorized torrent applications.",
        "Integrity violations trigger standard campus network blocks."
      ]
    },
    {
      id: "rule-conduct",
      label: "Fellow Conduct Expectations",
      icon: <Users className="w-6 h-6" />,
      emoji: "👥",
      outline: "border-violet-500/10 hover:border-violet-500/30",
      color: "text-violet-400 bg-violet-400/5",
      title: "Professional Bilateral Embassy Standings",
      detail: "As selected government scholarship peers, candidates are expected to demonstrate elite collaborative ethics, respectful language, and peer support.",
      specs: [
        "Foster strong teamwork bonds inside lab exercises.",
        "Maintain clean communication with peers, cooks, and wardens.",
        "Model Malaysian diplomatic and academic prestige."
      ]
    }
  ];

  const activeRule = rules.find((r) => r.id === selectedRuleId);

  return (
    <section id="rules-regulations" className="py-32 bg-[#0F172A] relative overflow-hidden text-left">
      {/* Structural bottom divider */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96B]/15 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-4/5 h-[400px] bg-brand-gold/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Title tags */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-[10px] tracking-[0.25em] font-bold text-brand-gold uppercase block">
            REGULATORY POLICIES // COMPLIANCE DECK
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none">
            Campus <span className="text-brand-gold">Guidelines</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-blue-accent mx-auto mt-4 rounded-full" />
          <p className="font-sans text-[15px] sm:text-base text-slate-300 leading-relaxed font-light">
            IIT Madras holds high standards of educational integrity. Review the core rules and regulations implemented for GSEP cohort fellows below.
          </p>
        </div>

        {/* 3x2 MODAL TRIGGERS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {rules.map((rule) => (
            <div
              key={rule.id}
              onClick={() => setSelectedRuleId(rule.id)}
              className={`p-8 rounded-3xl bg-[#1E293B] border transition-all duration-300 cursor-pointer text-left relative flex flex-col justify-between h-[230px] overflow-hidden group ${rule.outline}`}
            >
              <div className="flex justify-between items-start">
                <div className={`p-3 rounded-2xl border border-white/10 ${rule.color}`}>
                  {rule.icon}
                </div>
                <span className="text-2xl select-none">{rule.emoji}</span>
              </div>

              <div className="space-y-1.5 mt-4">
                <span className="font-mono text-[9px] text-[#C8A96B] font-bold uppercase tracking-wider block">
                  Click to open dossier
                </span>
                <h4 className="font-display font-bold text-lg text-white group-hover:text-brand-gold transition-colors uppercase tracking-tight">
                  {rule.label}
                </h4>
                <p className="font-sans text-xs text-slate-400 font-light truncate w-full">
                  {rule.title}
                </p>
              </div>

              {/* Accent bottom glow bar */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* DETAILS POPUP MODAL (Backdrop-blurred centered dialog) */}
        <AnimatePresence>
          {selectedRuleId && activeRule && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Dark background blur overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedRuleId(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />

              {/* Central container */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 30 }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                className="relative bg-[#1E293B] border border-brand-gold/30 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-6 text-left z-20 overflow-hidden"
              >
                {/* Decorative circuit line inside modal */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

                {/* Header panel */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-[#0F172A] rounded-xl border border-white/10 text-brand-gold">
                      {activeRule.icon}
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest block font-bold">IITM REGULATORY SYSTEM</span>
                      <h3 className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-tight">
                        {activeRule.label}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedRuleId(null)}
                    className="p-1.5 rounded-lg border border-white/10 bg-[#0F172A] text-slate-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Description details */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-brand-gold font-bold block uppercase tracking-wider">
                      Core Regulation Declaration
                    </span>
                    <h4 className="font-display font-bold text-base text-white tracking-tight leading-snug uppercase">
                      {activeRule.title}
                    </h4>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#CBD5E1] font-light leading-relaxed pt-2 border-t border-zinc-805 border-zinc-800">
                    {activeRule.detail}
                  </p>

                  {/* Bullet specifics specs */}
                  <div className="space-y-2.5 pt-2">
                    <span className="font-mono text-[9px] text-slate-400 block uppercase tracking-widest font-bold">
                      SYSTEM COMPLIANCE SPECS
                    </span>
                    <div className="space-y-2">
                      {activeRule.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300 leading-relaxed">
                          <CheckCircle className="w-4.5 h-4.5 text-brand-blue-accent mt-0.5 flex-shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer close button bar */}
                <div className="pt-4 border-t border-zinc-80s border-zinc-800 flex justify-between items-center">
                  <div className="flex items-center space-x-1.5 text-[9px] font-mono text-slate-500">
                    <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
                    <span>SECURE METRIC PROTOCOL</span>
                  </div>
                  <button
                    onClick={() => setSelectedRuleId(null)}
                    className="px-5 py-2.5 rounded-xl border border-white/15 bg-gradient-to-r from-brand-gold to-[#C8A96B] text-black hover:-translate-y-0.5 font-mono text-[10px] font-black uppercase tracking-wide transition-all shadow-md cursor-pointer"
                  >
                    Accept dossier
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

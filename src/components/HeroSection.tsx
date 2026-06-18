import { motion } from "motion/react";
import { Cpu, ChevronRight, Award, Shield, BookOpen, UserCheck, Code } from "lucide-react";
import { Language, translations } from "../lib/translations";

interface HeroSectionProps {
  lang: Language;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = translations[lang];

  const features = [
    { text: t.heroTrainingWeeks || "5 Weeks Intensive Training", icon: <Award className="w-4 h-4 text-brand-gold" /> },
    { text: t.heroArchitecture || "RISC-V Architecture", icon: <Cpu className="w-4 h-4 text-brand-blue-accent" /> },
    { text: t.heroRtlDesign || "RTL Design", icon: <Code className="w-4 h-4 text-brand-gold" /> },
    { text: t.heroVerification || "Verification", icon: <Shield className="w-4 h-4 text-brand-blue-accent" /> },
    { text: t.heroFpgaDev || "FPGA Development", icon: <BookOpen className="w-4 h-4 text-brand-gold" /> },
    { text: t.heroInterviews || "Industry Interviews", icon: <UserCheck className="w-4 h-4 text-brand-blue-accent" /> }
  ];

  const scrollSmoothTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-36 pb-24 overflow-hidden bg-[#0F172A]">
      
      {/* Reduced glow effects by 70% & no cluttered animations */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Subtle, soft Slate Blues (#1E293B / #3B82F6) and Champagne-gold glows (#C8A96B) */}
        <div className="absolute top-[-10%] left-[25%] w-[400px] h-[400px] bg-brand-blue-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[15%] w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[140px]" />
        
        {/* Clean, calm semiconductor micro-traces in the background */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col items-center">
        
        {/* Executive-Level Academic Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2.5 px-4.5 py-2 rounded-full border border-brand-gold/20 bg-[#1E293B]/90 shadow-md mb-10"
        >
          <Cpu className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-[#CBD5E1]">
            IIT MADRAS ACADEMIC BLUEPRINT × GSEP
          </span>
        </motion.div>

        {/* Clean Typography Layout (Calm & Spacious) */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display tracking-tight leading-tight uppercase"
            style={{ fontSize: "clamp(2.5rem, 6.5vw, 4.8rem)", fontWeight: 800 }}
          >
            <span className="block text-[#F8FAFC]">
              GSEP RISC-V Programme
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-xl sm:text-2xl md:text-3.5xl font-bold tracking-tight text-brand-gold max-w-3xl mx-auto"
          >
            Malaysia <span className="text-brand-blue-accent">&rarr;</span> Chennai, India
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-xs sm:text-sm md:text-base text-[#CBD5E1] max-w-2.5xl mx-auto leading-relaxed font-light mt-2"
          >
            Semiconductor Engineering Development Programme
          </motion.p>
        </div>

        {/* High-End, Structured Showcase Grid (As requested by the user) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4.5 max-w-3xl w-full mt-12"
        >
          {features.map((feat, idx) => (
            <div 
              key={idx} 
              className="flex items-center space-x-3 p-4 bg-[#1E293B] border border-brand-gold/15 rounded-xl hover:border-brand-blue-accent/50 hover:shadow-lg transition-all duration-300 pointer-events-auto"
            >
              <div className="p-2 rounded-lg bg-[#0F172A] border border-brand-gold/10">
                {feat.icon}
              </div>
              <span className="font-mono text-left text-[11px] sm:text-xs text-[#F8FAFC] font-semibold leading-snug">
                {feat.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Action Button Segment (Elegant, Minimalist) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollSmoothTo("mission-control-dashboard")}
            className="group w-full sm:w-auto relative px-8 py-3.5 rounded-lg font-mono font-bold text-xs tracking-widest uppercase transition-all duration-350 bg-brand-gold hover:bg-brand-gold-glow text-[#0F172A] shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>{t.launchDashboard}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0F172A]" />
            </span>
          </button>

          <button
            onClick={() => scrollSmoothTo("mission-control-dashboard")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-mono font-bold text-xs tracking-widest uppercase border border-brand-blue-accent bg-transparent text-[#F8FAFC] hover:bg-brand-blue-accent/10 transition-all duration-300 cursor-pointer"
          >
            {t.heroViewPlanner || "Open Study Planner"}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
